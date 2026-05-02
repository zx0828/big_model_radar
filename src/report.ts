/**
 * LLM invocation and file output helpers.
 * Supports OpenAI-compatible chat/completions endpoints.
 */

import fs from "node:fs";
import path from "node:path";

const DEFAULT_OPENAI_BASE_URL = "https://integrate.api.nvidia.com/v1";
const DEFAULT_MODEL = "stepfun-ai/step-3.5-flash";

// ---------------------------------------------------------------------------
// Concurrency limiter — prevents rate-limit (429) errors when many LLM calls
// are fired in parallel. At most LLM_CONCURRENCY requests are in-flight at
// any given time; the rest queue and run as slots free up.
// ---------------------------------------------------------------------------

const LLM_CONCURRENCY = 5;
let llmSlots = LLM_CONCURRENCY;
const llmQueue: Array<() => void> = [];

function acquireSlot(): Promise<void> {
  if (llmSlots > 0) {
    llmSlots--;
    return Promise.resolve();
  }
  return new Promise((resolve) => llmQueue.push(resolve));
}

function releaseSlot(): void {
  const next = llmQueue.shift();
  if (next) {
    next();
  } else {
    llmSlots++;
  }
}

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

const MAX_RETRIES = 5;
const RETRY_BASE_MS = 15_000; // 15 s, 30 s, 60 s, 120 s, 240 s

function is429(err: unknown): boolean {
  return (err as { status?: number })?.status === 429 || String(err).includes("429");
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function getLlmApiKey(): string {
  return process.env["OPENAI_API_KEY"] ?? process.env["ANTHROPIC_API_KEY"] ?? "";
}

export function getLlmBaseUrl(): string {
  return (
    process.env["OPENAI_BASE_URL"] ??
    process.env["ANTHROPIC_BASE_URL"] ??
    DEFAULT_OPENAI_BASE_URL
  ).replace(/\/$/, "");
}

function getLlmModel(): string {
  return process.env["OPENAI_MODEL"] || process.env["ANTHROPIC_MODEL"] || DEFAULT_MODEL;
}

export function hasLlmCredentials(): boolean {
  return getLlmApiKey().length > 0;
}

function extractTextContent(content: unknown): string {
  try {
    if (content === null || content === undefined) return "";
    if (typeof content === "string") return content.trim();
    if (Array.isArray(content)) {
      const text = content
        .map((part) => {
          if (typeof part === "string") return part;
          if (
            part &&
            typeof part === "object" &&
            "type" in part &&
            part.type === "text" &&
            "text" in part &&
            typeof part.text === "string"
          ) {
            return part.text;
          }
          return "";
        })
        .join("")
        .trim();
      return text;
    }
  } catch {
    // never throw
  }
  return "";
}

export async function callLlm(prompt: string, maxTokens = 4096): Promise<string> {
  for (let attempt = 0; ; attempt++) {
    await acquireSlot();
    let released = false;
    try {
      const apiKey = getLlmApiKey();
      if (!apiKey) throw new Error("Missing required environment variable: OPENAI_API_KEY");

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60_000);

      try {
        const resp = await fetch(`${getLlmBaseUrl()}/chat/completions`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: getLlmModel(),
            messages: [{ role: "user", content: prompt }],
            temperature: 0.2,
            max_tokens: maxTokens,
          }),
          signal: controller.signal,
        });
        if (!resp.ok) {
          const status = resp.status;
          const errorText = await resp.text();
          if (status === 401 || status === 403) {
            throw new Error(`LLM API Fatal ${status}: ${errorText}`);
          }
          throw new Error(`LLM_RETRYABLE API ${status}: ${errorText}`);
        }

        const data = (await resp.json()) as {
          choices?: Array<{
            message?: {
              content?: unknown;
            };
          }>;
        };

        if (!data.choices || data.choices.length === 0) {
          throw new Error("LLM_RETRYABLE: empty choices");
        }

        const content = data.choices?.[0]?.message?.content;
        const text = extractTextContent(content);
        if (!text) {
          throw new Error("LLM_RETRYABLE: empty content");
        }

        return text;
      } finally {
        clearTimeout(timeoutId);
      }
    } catch (err) {
      const errStr = String(err);
      const isRetryable =
        is429(err) ||
        errStr.includes("LLM_RETRYABLE") ||
        errStr.includes("AbortError") ||
        (err instanceof Error && err.name === "AbortError");
      if (attempt < MAX_RETRIES && isRetryable) {
        releaseSlot();
        released = true;
        const wait = RETRY_BASE_MS * 2 ** attempt;
        console.error(
          `[llm] Retryable error: ${err} — retry ${attempt + 1}/${MAX_RETRIES} in ${wait / 1000}s...`,
        );
        await sleep(wait);
        continue;
      }
      throw err;
    } finally {
      if (!released) releaseSlot();
    }
  }
}

// ---------------------------------------------------------------------------
// File output
// ---------------------------------------------------------------------------

export function saveFile(content: string, ...segments: string[]): string {
  const filepath = path.join("digests", ...segments);
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, "utf-8");
  return filepath;
}

export function autoGenFooter(lang: "zh" | "en" = "zh"): string {
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  if (!digestRepo) return "";
  return lang === "en"
    ? `\n\n---\n*This digest is auto-generated by [Big Model Radar](https://github.com/${digestRepo}).*`
    : `\n\n---\n*本日报由 [Big Model Radar](https://github.com/${digestRepo}) 自动生成。*`;
}
