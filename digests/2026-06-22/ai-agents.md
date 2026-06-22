# OpenClaw 生态日报 2026-06-22

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-06-22 00:39 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 (2026-06-22)

## 今日速览

OpenClaw 社区今日保持**极高活跃度**，24小时内新增 500 条 Issues 讨论与 500 条 PR 更新，反映出项目处于快速迭代与问题修复的密集阶段。项目于昨日发布两个新版本（v2026.6.10-beta.1 与 v2026.6.9），核心聚焦于**会话状态可靠性**与**Telegram 消息传递增强**。社区讨论高度集中于 P1 级稳定性问题，尤其是会话锁、消息丢失与子代理交付失败等关键路径故障。大量 PR 同时推进新功能开发与回归修复，整体开发节奏健康但需关注近期版本引入的存储迁移等破坏性变更。

---

## 版本发布

### v2026.6.10-beta.1 (Beta)
**发布时间**: 2026-06-22 (昨日)  
**核心改进**: 提升代理回合与会话状态可靠性  
**关键更新**:
- 保留待处理的子代理完成通知，避免交付丢失
- 确保聊天历史记录非空，维护媒体索引对齐
- 重启休眠的后续排空器（follow-up drains）
- 统一解决压缩模型别名解析问题

**迁移注意事项**: 此为 beta 版本，建议仅在测试环境验证。主要针对会话状态管理进行内部重构，**无已知破坏性变更**，但需注意与子代理交付相关的配置可能需要调整。

### v2026.6.9 (稳定版)
**发布时间**: 2026-06-22 (昨日)  
**核心改进**: 增强 Telegram 通道的消息渲染与传递能力  
**关键更新**:
- 支持富 HTML 发送，保留富 Markdown 与贴纸路径
- 更精确渲染进度草稿与命令输出
- 安全规范化 HTML 表格
- 确保提及（mentions）与排程处理器走正确交付路径

**⚠️ 已知严重问题**: 多个用户报告（如 #95495）升级后内存存储被**静默迁移**（从 `~/.openclaw/memory/main.sqlite` 迁移至 `~/.openclaw/agents/main/agent/openclaw-agent.sqlite`），**未提供迁移警告或自动化迁移**，导致强制全量重嵌入（约 1500 个文件），造成显著停机与资源消耗。**强烈建议**在升级前完整备份内存目录，并监控 `openclaw memory status --deep` 输出。

---

## 项目进展

### 今日合并/关闭的重要 PR
1. **[CLOSED] #95618**: *Fix retry success runtime state reconciliation*  
   **影响**: 修复后台工作器/会话运行在早期瞬态错误后仍发送成功最终交接，导致状态清理不彻底或方向性覆盖的问题。提升重试逻辑的状态一致性。  
   [链接](https://github.com/openclaw/openclaw/pull/95618)

2. **[CLOSED] #68936**: *Autofix: add PR review autofix pipeline + Windows daemon*  
   **影响**: 引入基于 Claude Agent SDK 的 PR 评论自动修复流水线，并添加 Windows 后台守护进程以监控网关。提升跨平台可维护性与自动化评审效率。  
   [链接](https://github.com/openclaw/openclaw/pull/68936)

3. **[CLOSED] #91926**: *openclaw gateway restart fails to start when executed via exec tool*  
   **影响**: 修复通过 `exec` 工具执行 `openclaw gateway restart` 时，任务调度器静默丢弃启动阶段的问题。恢复自动化重启的可靠性。  
   [链接](https://github.com/openclaw/openclaw/issues/91926)

**整体推进**: 今日关闭的 PR/Issue 主要集中于**可靠性修复**（状态协调、重启逻辑）与**自动化增强**（PR autofix、Windows 守护）。新功能 PR（如 Feishu 流式传输、Discord 子代理进度显示）仍处于等待审查阶段，预计下一版本可能纳入部分增强。

---

## 社区热点

### 最活跃 Issues (评论数 Top 5)
1. **#86538** (12 评论) - *Session write-lock timeouts block subagent delivery lanes*  
   **诉求**: 会话 JSONL 写锁超时阻塞主、cron 嵌套与子代理通道，导致交付/生命周期失败且诊断不足。  
   **标签**: P1, session-state, message-loss, diamond lobster  
   [链接](https://github.com/openclaw/openclaw/issues/86538)

2. **#86519** (10 评论) - *Agent repeats identical replies 2-10x on Telegram after 5.20 update*  
   **诉求**: 5.20 版本后 Telegram 出现重复回复（2-10 倍），5.22 部分缓解但未根除。  
   **标签**: P1, regression, message-loss, diamond lobster  
   [链接](https://github.com/openclaw/openclaw/issues/86519)

3. **#90354** (8 评论) - *Add bounded/validated append semantics for pre-compaction memory flush*  
   **诉求**: 预压缩内存刷新需硬性限制追加大小、写入后验证与静默失败处理，防止模型追加过大或噪声内容。  
   **标签**: P2, feature, session-state, diamond lobster  
   [链接](https://github.com/openclaw/openclaw/issues/90354)

4. **#92043** (8 评论) - *180s compaction timeout is a single wall clock over the whole chunk pipeline*  
   **诉求**: 180 秒压缩超时为全局时钟，无部分进度复用，导致合法长耗时压缩每次均失败。  
   **标签**: P1, crash-loop, diamond lobster  
   [链接](https://github.com/openclaw/openclaw/issues/92043)

5. **#92460** (8 评论) - *Isolated cron completion announcer drops explicit delivery.channel*  
   **诉求**: 隔离 cron 完成通知即使显式设置 `delivery.channel` 仍可能失败，报“未配置通道”。  
   **标签**: P1, message-loss, platinum hermit  
   [链接](https://github.com/openclaw/openclaw/issues/92460)

### 最活跃 PRs (评论数 Top 5)
1. **#75100** - *feat(feishu): add segment streaming mode*  
   **状态**: ⏳ waiting on author | **风险**: 🚨 compatibility, message-delivery  
   **内容**: 为飞书添加分段流式传输模式，累积输出并在暂停点刷新，不改变现有 CardKit 流式卡片默认行为。  
   [链接](https://github.com/openclaw/openclaw/pull/75100)

2. **#95479** - *feat(feishu): configure card footer*  
   **状态**: 👀 ready for maintainer look | **风险**: 🚨 compatibility  
   **内容**: 允许自定义飞书卡片页脚，当前固定为“Agent/Model/Provider”元数据。  
   [链接](https://github.com/openclaw/openclaw/pull/95479)

3. **#73982** - *fix(chat-bash): inherit exec policy defaults*  
   **状态**: 📣 needs proof | **风险**: 🚨 compatibility, security-boundary  
   **内容**: 修复 `/bash` 聊天会话不继承 `tools.exec` 默认策略（安全、询问、路径前置等）。  
   [链接](https://github.com/openclaw/openclaw/pull/73982)

4. **#72215** - *Gateway: allow cron.enabled and compaction mode config paths*  
   **状态**: ⏳ waiting on author | **风险**: 🚨 session-state, security-boundary  
   **内容**: 将 `cron.enabled` 与 `agents.defaults.compaction.mode` 加入网关配置变更允许列表，支持 API 动态控制。  
   [链接](https://github.com/openclaw/openclaw/pull/72215)

5. **#69346** - *fix(embedded-runner): actionable diagnostic for empty-stream config错误*  
   **状态**: ⏳ waiting on author | **风险**: 🚨 availability  
   **内容**: 为空流配置错误提供可操作的诊断文本，避免静默失败。  
   [链接](https://github.com/openclaw/openclaw/pull/69346)

**热点分析**: 社区当前**最焦虑**的是 **P1 级会话状态与消息丢失问题**（如写锁超时、重复回复、cron 交付失败），这些直接影响核心用户体验。同时，**Telegram 与 Feishu 通道的增强**是功能开发重点，但需注意与现有交付逻辑的兼容性风险。

---

## Bug 与稳定性

### 严重程度排序 (P1 优先)
| Issue | 标题 | 核心症状 | 状态 | 关联 PR |
|-------|------|----------|------|---------|
| **#95495** | 2026.6.9 silently relocates memory store with no migration | 升级后内存库静默迁移，强制全量重嵌入（1499 文件），零警告 | OPEN | 无 |
| **#86538** | Session write-lock timeouts block subagent delivery lanes | 写锁超时阻塞多通道交付，诊断不足 | OPEN | 无 |
| **#86519** | Agent repeats identical replies 2-10x on Telegram | Telegram 重复回复（回归） | OPEN | 无 |
| **#92043** | 180s compaction timeout causes repeated failures | 合法长压缩因 180s 全局超时反复失败 | OPEN | 无 |
| **#92460** | Isolated cron completion announcer drops explicit delivery.channel | 隔离 cron 忽略显式通道设置 | OPEN | 无 |
| **#92076** | Subagent completion delivery fails when requester run is inactive | 请求方会话失效后子代理完成无法送达 | OPEN | 无 |
| **#92415** | Session-level AgentSession.this.model snapshot never refreshed after /model switch | `/model` 切换后会话内模型快照未更新，导致 8 处后置读取

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告  
**数据周期**：2026-06-21 至 2026-06-22  
**分析对象**：OpenClaw、NanoBot、Zeroclaw、PicoClaw、NanoClaw、IronClaw、LobsterAI、CoPaw、ZeptoClaw 等核心项目  

---

## 1. 生态全景  
当前个人

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-22)

## 1. 今日速览
过去24小时，NanoBot 项目保持高度活跃，PR 更新达34条（待合并20条，已合并/关闭14条），Issues 更新10条，社区参与度旺盛。核心议题聚焦于**安全性修复**（MCP allowlist 绕过漏洞）、**稳定性提升**（Anthropic 流式响应工具ID重复导致会话崩溃）及**功能扩展**（Telegram 富消息、TTS 系统、历史搜索工具）。多个关键 PR 已合并，显著增强了配置健壮性和多模态能力，但新版本发布暂停，表明项目正处于密集的修复与优化阶段。长期未响应的 Mattermost 集成需求（#1011）仍需维护者关注。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并/关闭的重要 PR 主要集中于配置系统修复与新功能集成，推动项目在稳定性和用户体验上取得进展：

- **PR #4316** ([CLOSED] feat(tts): add TTS configuration system with multi-provider support)  
  链接：https://github.com/HKUDS/nanobot/pull/4316  
  内容：添加可配置的文本转语音（TTS）系统，支持 OpenAI、Groq（Orpheus）和 ElevenLabs 提供商。通过 WebUI 设置 API 暴露配置，并补充文档使 AI 助手能感知 TTS 能力。**意义**：扩展了多模态输出能力，为语音交互场景打下基础。

- **PR #4323** ([CLOSED] fix(transcription): resolve env vars before transcription config lookup)  
  链接：https://github.com/HKUDS/nanobot/pull/4323  
  内容：修复转录配置中环境变量解析顺序问题。此前 `load_config()` 返回的 `${VAR}` 模板未解析即传递给 `resolve_transcription_config()`，导致 API 密钥（如 `GROQ_API_KEY`）查找失败，转录功能静默失效。**意义**：确保转录服务能正确加载凭证，提升功能可靠性。

- **PR #4324** ([CLOSED] fix(webui): resolve env-var templates in settings read paths)  
  链接：https://github.com/HKUDS/nanobot/pull/4324  
  内容：修复 WebUI 设置读取路径中的环境变量模板解析。此前 `_provider_configured_for_settings()` 等函数直接使用未解析的模板字符串（如 `${API_KEY}`）进行布尔判断，导致凭证状态误判。**意义**：使 WebUI 设置页面能正确显示提供商配置状态。

- **PR #4325** ([CLOSED] fix(webui): resolve env-var templates in settings update paths)  
  链接：https://github.com/HKUDS/nanobot/pull/4325  
  内容：修复 WebUI 设置更新路径中的环境变量模板解析。此前 `update_provider_settings()` 等函数将用户提交的值与未解析的模板比较，导致配置更新失败。**意义**：确保通过 WebUI 更新提供商设置（如 API 密钥）能正确生效。

**整体推进**：以上 PR 共同解决了配置系统中环境变量处理的系统性缺陷，覆盖转录、WebUI 读写全路径，显著提升部署和运维体验。TTS 功能的加入也标志着项目向多模态助手迈出重要一步。

## 4.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-22)

## 今日速览
过去24小时，Zeroclaw 项目维持**极高活跃度**，社区共处理 41 条 Issues（31 条新开/活跃，10 条关闭）和 50 条 Pull Requests（41 条待合并，9 条已合并/关闭）。项目核心聚焦于**稳定性修复**（如安装程序、Docker 构建、工具错误处理）与**可观测性增强**（OpenTelemetry 集成），同时多个高优先级功能 RFC 和增强请求持续推动路线图演进。大量 PR 待合并（41 个）表明贡献流水线繁忙，但需关注合并效率以保持健康度。

## 版本发布
- **无新版本发布**。最新稳定版仍为 `0.8.0`，多个 RFC 和功能增强正在实现中，预计下一版本将包含 Work Lanes、技能注册表扩展等特性。

## 项目进展
今日合并/关闭的 PR 主要集中于**错误处理改进**、**测试覆盖增强**和**渠道功能修复**，具体如下：
- **安装程序修复**：PR #8096 修复了 `install.sh` 在 Intel Mac 上错误下载 ARM64 二进制文件的问题（`bad CPU type` 错误），通过检测 CPU 架构选择正确的预编译目标。
- **Docker 构建修复**：PR #8089 解决了 Docker 和 Debian Dockerfile 因缺失 `aardvark-sys/build.rs` 而导致的构建失败，确保容器镜像可正常生成。
- **测试覆盖增强**：PR #7845 增加了“中毒激活工具锁”恢复路径的回归测试；PR #7859 补充了空白输入回合拒绝的单元测试，提升运行时健壮性。
- **渠道功能修复**：PR #7724 使 Lark/Feishu 渠道正确响应 `ack_reactions` 配置；PR #7723 修复了 Telegram 渠道在 `mention_only` 模式下忽略 bot 消息回复的问题。
- **配置可发现性**：PR #7855 使 `model_routes` 和 `embedding_routes` 通过 `Configurable` trait 暴露，改善仪表板模型选择体验。

## 社区热点
讨论最活跃的议题集中在**核心架构改进**与**用户体验痛点**：
- **#6808 (11 评论)**：RFC “Work Lanes, Board Automation, and Label Cleanup” 是今日最热议题，旨在自动化工作流路由，减少维护者手动操作。该 RFC 已接受并处于逐步推行中，反映社区对**治理自动化**的强烈需求。
- **#2503 (9 评论)**：用户反馈无法找到 Napcat/OneBot 渠道配置选项，要求添加 OneBot 11 支持。凸显**渠道发现性**不足的问题，可能影响多平台用户接入。
- **#2467 (6 评论)**：Webhook 变换功能请求，指出当前 Webhook 系统无法处理任意负载（如 GitHub Webhook），限制其通用性。体现**集成灵活性**的迫切需求。
- **PR #7115**：新开 PR 使守护进程在网关地址被占用时快速失败，避免静默降级，提升运维可靠性。

## Bug 与稳定性
今日报告的 Bug 按严重程度排列如下，多数已有修复 PR 或正在处理：
- **S1 - 工作流阻塞**：
  - **#4879**：Gemini CLI OAuth 完全失效（rate_limited 错误），影响 Gemini 提供商用户。
  - **#6361**：OpenAI 兼容提供商（如 MiniMax）的上下文压缩会丢弃 `tool_calls` 和 `tool` 消息，导致工具循环和无效角色错误。
  - **#7756**：在 OpenAI Responses/Anthropic 轮次中，原生/MCP 工具不可用，影响多工具代理场景。
  - **#7898**：`rust_native` 浏览器快照和 `@ref` 选择器在 WebDriver 下失败，阻塞浏览器自动化。
- **S2 - 降级行为**：
  - **#6360**：Telegram 渠道的提示缓存失效，导致每次对话都完全重新处理提示，增加延迟和成本。
  - **#7810**：`git_operations` 在非仓库目录返回“Not in a git repository”错误，缺乏路径上下文和恢复指导（已有修复 PR #7835）。
  - **#7896**：Groq 等 OpenAI 兼容提供商的原生工具消息缺少 `name` 字段，可能影响工具调用解析。
- **S0 - 数据丢失/安全风险**：
  - **#8094**：Quickstart 添加的 Anthropic 模型在仪表板显示但聊天窗口不可用，需重置才能生效，用户体验严重受损。

## 功能请求与路线图信号
用户提出的高优先级功能请求及实现状态：
- **Work Lanes 自动化**（#6808）：RFC 已接受，是 0.8.x 周期核心治理改进，预计逐步 rollout。
- **技能发现与安装**（#6289）：当用户请求未安装技能时，主动建议安装。相关 PR #7740 已修复建议逻辑，基于有效工具集计算，增强实用性。
- **Webhook 变换**（#2467）：允许自定义 Webhook 路径和负载变换，以支持任意发送方。需求明确，但实现复杂度高，可能排期后续版本。
- **本地优先模式**（#5287）：为小模型提供紧凑提示、严格解析和无提示泄漏模式。已接受，但需实现。
- **用户自定义技能注册表**（#7827）：PR 已开，允许通过配置添加私有/自托管技能目录，**极有可能纳入下一版本**，显著扩展生态系统。
- **强配对码**（#6613）：允许设置更长、更复杂的配对码（默认 32 字符），提升安全性。需求强烈，已接受。

## 用户反馈摘要
从 Issues 评论和描述中提炼的关键痛点：
- **渠道配置不直观**：用户难以发现 Napcat/OneBot 等渠道（#2503），Quickstart 流程存在模型状态不同步问题（#8094）。
- **提供商兼容性问题**：OpenAI 兼容适配器在上下文压缩（#6361）和工具消息格式（#7896）上存在缺陷，影响 MiniMax、Groq 等用户。
- **错误信息不友好**：`git_operations` 错误缺乏上下文（#7810），日志输出到 stdout 干扰命令输出（#4721）。
- **性能与成本**：Telegram 提示缓存失效（#6360）导致不必要的重复处理；Webhook 不可用（#2467）迫使开发者寻找替代方案。
- **积极反馈**：社区赞赏 PR 的快速响应（如 #6009/#6190 的 OTel 集成），并积极参与 RFC 讨论（#6808）。

## 待处理积压
需维护者优先关注的长期开放项：
- **高优先级 Bug**：
  - **#4879**（Gemini OAuth，创建于 3月28日）：S1 阻塞，影响 Gemini 用户，需紧急修复。
  - **#6361**（上下文压缩，创建于 5月4日）：S1 阻塞，影响 OpenAI 兼容提供商多轮工具调用。
- **重要增强**：
  - **#2467**（Webhook 变换，创建于 3月2日）：高需求但进展缓慢，需架构评审。
  - **#2503**（Napcat 渠道，创建于 3月2日）：用户多次请求，但实现未推进。
- **PR 积压**：当前 **41 个 PR 待合并**，其中部分（如 #7827 技能注册表、#7115 守护进程快速失败）已通过 CI 但等待审查。建议定期进行合并冲刺以降低贡献者等待时间。

---
*数据来源：Zeroclaw GitHub (github.com/zeroclaw-labs/zeroclaw)，统计周期：2026-06-21 至 2026-06-22*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-22)

**数据统计周期**：过去24小时（截至2026-06-21 23:59 UTC）  
**报告生成时间**：2026-06-22 08:00 UTC  

---

## 1. 今日速览
项目在过去24小时保持了稳定的开发活跃度，发布了新的 nightly 构建版本，同时社区讨论与代码合并并行。核心问题修复与依赖更新持续推进，但部分历史议题因标记为 `stale` 而响应放缓，社区健康度呈现“核心迭代积极、边缘响应延迟”的分化态势。

---

## 2. 版本发布
- **新 Nightly 版本**：`v0.3.0-nightly.20260621.287853ab`
  - **性质**：基于 `main` 分支的自动化构建，包含近期合并的未发布特性与修复。
  - **稳定性提示**：官方声明“may be unstable”，建议仅用于测试。
  - **变更范围**：涵盖自 `v0.3.0` 以来的所有提交，具体修复与增强需查阅 [完整 Changelog](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)。
  - **迁移注意**：Nightly 版本可能与稳定版 `v0.2.9` 存在配置或 API 差异，生产环境用户暂不建议升级。

---

## 3. 项目进展
- **已合并/关闭的重要 PR**：
  - **[PR #2565](https://github.com/sipeed/picoclaw/pull/2565)**：修复配置解析缺陷，确保 `GroupTriggerConfig.MentionOnly=false` 被显式保留，避免因 `omitempty` 导致配置回退至默认值。此修复提升了配置的确定性与可靠性。
- **待合并的增强与维护**：
  - **[PR #3152](https://github.com/sipeed/picoclaw/pull/3152)**：增强 `picoclaw skills search` 命令输出，明确展示技能安装指令，改善 CLI 用户体验。
  - **[PR #3103](https://github.com/sipeed/picoclaw/pull/3103)** & **[PR #3105](https://github.com/sipeed/picoclaw/pull/3105)**：由 Dependabot 发起，分别升级前端依赖 `typescript-eslint` 与 `eslint` 至最新补丁版本，属于常规安全与维护更新。

---

## 4. 社区热点
- **最活跃议题**：**[Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)**（评论数：5）
  - **核心诉求**：用户报告在启用 Evolution 功能（模式为 Draft）后，系统出现持续的 token 消耗，疑似资源泄漏或逻辑死循环。
  - **影响分析**：该问题直接关联运行成本与系统稳定性，可能影响长期部署用户，需优先排查。
- **高需求功能请求**：**[Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)**（👍 反应数：1）
  - **核心诉求**：用户请求集成 SimpleX、Wire 或 Tox 等隐私优先的通信网关，反映社区对扩展去中心化通信协议的需求。

---

## 5. Bug 与稳定性
| 严重程度 | Issue | 问题摘要 | 状态 | 关联 Fix PR |
|----------|-------|----------|------|-------------|
| **高** | [#3012](https://github.com/sipeed/picoclaw/issues/3012) | Evolution 启用后 token 持续消耗 | 开放 | 无 |
| **中** | [#3090](https://github.com/sipeed/picoclaw/issues/3090) | 面板在 iOS < 16.4 Safari 上无法工作 | 开放（stale） | 无 |
| **低** | [#3044](https://github.com/sipeed/picoclaw/issues/3044) | `allow_from` 对含冒号的 Matrix 用户 ID 失效 | 已关闭 | 无（已修复） |
| **低** | [#3041](https://github.com/sipeed/picoclaw/issues/3041) | `mcp add` 命令全局标志解析错误 | 已关闭 | [#2565](https://github.com/sipeed/picoclaw/pull/2565)（间接修复） |

**注**：高严重度问题 #3012 暂无修复 PR，需开发团队紧急关注；中严重度问题 #3090 虽标记 stale，但影响特定用户群体，建议复现验证。

---

## 6. 功能请求与路线图信号
- **明确需求**：
  - **多协议网关支持**（Issue #3093）：SimpleX/Wire/Tox 集成，可能指向项目在隐私通信或去中心化网络方向的扩展。
  - **CLI 体验优化**（PR #3152）：技能搜索安装指引的增强，表明团队重视开发者体验与上手成本。
- **路线图推断**：结合近期 PR 与 Issue，下一版本（可能为 `v0.3.0` 正式版）可能聚焦于 **配置可靠性**（已修复）、**CLI/UX 改进**（进行中）与 **依赖现代化**（进行中）。SimpleX 等网关支持尚处早期请求阶段，需评估技术可行性。

---

## 7. 用户反馈摘要
- **环境多样性**：用户运行环境涵盖 FreeBSD、Raspberry Pi OS (Debian)、iOS 等，凸显 **跨平台兼容性** 是核心诉求。
- **关键痛点**：
  - **资源消耗不可控**（#3012）：对 AI 调用成本敏感的用户担忧隐藏的资源泄漏。
  - **移动端访问障碍**（#3090）：iOS 旧版本 Safari 用户无法使用管理面板，限制运维灵活性。
  - **配置隐晦失效**（已修复的 #3044）：`allow_from` 因编码问题静默失败，曾导致安全策略失效，用户对配置系统的确定性要求高。
- **正面信号**：技能搜索功能（PR #3152）的改进请求，表明用户积极扩展 PicoClaw 能力边界。

---

## 8. 待处理积压
- **需复现/评估的 Stale Issue**：
  - **[Issue #3090](https://github.com/sipeed/picoclaw/issues/3090)**（Safari iOS 兼容性）：最后更新于 6-21，标记 stale 但未关闭，建议团队在旧版 iOS 设备上验证是否仍可复现。
- **待合并的 Stale PR**：
  - **[PR #3103](https://github.com/sipeed/picoclaw/pull/3103)** & **[PR #3105](https://github.com/sipeed/picoclaw/pull/3105)**：依赖升级 PR 创建于 6-11，标记 stale 且长期未合并，建议尽快合入以保持前端依赖安全与同步。
- **长期未响应 Issue**：当前无创建超过 30 天且无任何更新的开放 Issue，积压控制良好。

---

**项目健康度评估**：  
✅ **开发活跃**：Nightly 发布、PR 合并与依赖更新持续进行。  
⚠️ **社区响应**：部分用户报告（如 #3012）未获及时关注，高严重度 Bug 修复滞后。  
🔄 **路线清晰**：配置可靠性、CLI 体验改进方向明确，但新协议支持等需求尚在收集阶段。  
**建议**：优先分配资源复现并修复 #3012，以控制用户资源成本担忧；加速合并 stale 依赖 PR，降低技术债风险。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-22)

**报告生成时间：** 2026-06-22  
**数据周期：** 过去24小时 (截至报告生成)

---

### 1. 今日速览
过去24小时，NanoClaw 项目无新版本发布，核心开发活动集中在 PR 的讨论、合并与关闭。社区安全报告异常活跃，连续披露了两个涉及文件系统路径遍历与审批流程绕过的中高危安全漏洞，凸显了项目在安全加固方面的持续关注。整体代码库活跃度中等，维护者正在处理基础设施改进（如服务注册清理、更新流程优化）与历史遗留问题修复。

---

### 2. 版本发布
*无新版本发布。*

---

### 3. 项目进展
今日有多个 PR 被合并或关闭，主要聚焦于稳定性修复与流程改进：
- **PR #2825 (已关闭)**: 修复了 `setup` 阶段在主机 CLI socket 尚未就绪时即判定首次聊天失败的问题，提升了安装流程的可靠性。
- **PR #2168 (已关闭)**: 修复了在 rootless Docker 环境下 `host.docker.internal` 的解析问题，通过固定映射至 OneCLI 网桥 IP 增强了容器网络兼容性。
- **PR #2829 (已关闭)**: 一个遵循贡献指南的变更（内容为测试或文档性质），已合并。

**整体推进评估：** 项目在基础设施健壮性（服务管理、容器网络）和用户体验（安装流程）方面取得了切实进展。

---

### 4. 社区热点
尽管今日 Issues/PRs 的评论数均为零或未定义，但以下议题因其**严重性**与**潜在影响**成为绝对焦点：
- **安全议题 #2828**: 报告 A2A 附件转发功能存在 symlink 路径遍历漏洞，攻击者可能将文件写入会话根目录之外。**链接**: https://github.com/nanocoai/nanoclaw/issues/2828
- **安全议题 #2827**: 报告 `add_mcp_server` 审批流程因隐藏运行时参数而可能导致“审批走私”，使恶意服务器在用户无感知下获得批准。**链接**: https://github.com/nanocoai/nanoclaw/issues/2827
- **功能改进 PR #2826 (待合并)**: 提议改进 `/update-nanoclaw` 流程，将技能更新从“可选”变为“主动提示”，并确保容器重建，以防止用户错过关键上游修复。**链接**: https://github.com/nanocoai/nanoclaw/pull/2826

**诉求分析：** 社区（尤其是安全研究员）对 NanoClaw 在多智能体交互（A2A）与第三方服务集成（MCP）场景下的**安全边界**高度关注。同时，用户对**技能更新机制的可见性与强制性**存在明确改进需求。

---

### 5. Bug 与稳定性
今日报告的严重问题均为**安全漏洞**，按潜在影响排序：
1.  **高危 - 路径遍历 (Issue #2828)**: A2A 附件转发未验证 `inbox/` 目录是否为 symlink，可能导致文件写入任意位置。**状态**: 已报告，**无已知修复 PR**。
2.  **高危 - 审批绕过 (Issue #2827)**: `add_mcp_server` 的审批卡片未显示 `args` 和 `env` 等运行时参数，用户可能基于不完整信息批准恶意配置。**状态**: 已报告，**无已知修复 PR**。

**稳定性改进**: PR #2830 (待合并) 旨在清理因卸载不彻底而残留的、指向已删除二进制文件的服务注册，防止系统资源浪费与启动失败累积。

---

### 6. 功能请求与路线图信号
- **明确功能请求**: PR #2795 提议添加 `/add-clidash` 技能，提供一个只读的、源自 CLI 的仪表板界面。该 PR 已开放超过一个月，正在审核中，可能成为下一个技能集成的范例。**链接**: https://github.com/nanocoai/nanoclaw/pull/2795
- **流程优化信号**: PR #2826 反映了项目路线图在**用户引导与更新机制**上的演进方向，即从“静默可选”转向“主动强制”，以确保安全与功能同步。

---

### 7. 用户反馈摘要
由于今日所有新开 Issues 均无评论，**无直接用户反馈**。但基于安全报告的细节，可推断出以下**潜在用户痛点**：
- **对文件操作安全性的担忧**: 在多智能体文件交换场景下，用户需要确信文件被限制在预期的会话沙箱内。
- **对审批流程透明度的要求**: 在添加外部服务（如 MCP 服务器）时，用户需要看到完整的运行时配置（参数、环境变量）以做出知情决策。
- **对更新完整性的期望**: 用户不希望因跳过“可选”步骤而错过关键的安全或功能修复。

---

### 8. 待处理积压
以下条目因**创建时间较长**或**问题严重性高**，需维护者优先关注：
- **PR #2795 (开放约 5 周)**: 添加 `/add-clidash` 技能。这是一个用户-facing 的功能增强，长期未合并可能影响贡献者积极性。**链接**: https://github.com/nanocoai/nanoclaw/pull/2795
- **Issue #2828 & #2827 (新开但高危)**: 两个安全漏洞虽为新开，但风险等级高，应尽快评估并分配修复资源。**链接**: https://github.com/nanocoai/nanoclaw/issues/2828, https://github.com/nanocoai/nanoclaw/issues/2827
- **PR #2830 (新开)**: 清理僵尸服务注册。虽为新开，但属于系统稳定性维护，建议纳入下一个维护版本。**链接**: https://github.com/nanocoai/nanoclaw/pull/2830

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-22)

## 今日速览
过去24小时项目开发活动极为活跃，共处理29个PR（合并/关闭14个，待合并15个），但Issues讨论相对冷清（仅3条更新）。核心开发重点集中在**基础设施强化**（CI/CD流水线优化、依赖升级）与**Reborn运行时关键功能**（并发执行、学习系统、托管配置）的交付上。值得注意的是，一个长期存在的Nightly E2E测试失败问题（#4108）仍未解决，可能影响发布节奏。整体项目健康度**高**，代码合并流水线顺畅，但需关注测试稳定性。

---

## 版本发布
*无新版本发布。*

---

## 项目进展
今日合并/关闭的14个PR中，以下为关键进展：

### 1. 核心功能交付
*   **一次性触发器落地** ([#5065](https://github.com/nearai/ironclaw/pull/5065))：为Automations添加`TriggerSchedule::Once`类型，支持单次定时触发，与已存在的“Completed”过滤器（#5117）形成功能闭环，增强自动化任务灵活性。
*   **NEAR AI MCP集成修复** ([#4990](https://github.com/nearai/ironclaw/pull/4990))：修正NEAR AI MCP运行时凭证的投影逻辑，避免错误地将浏览器扩展设置要求应用于服务端凭证，优化了扩展与后端的身份验证流程。

### 2. 质量与稳定性提升
*   **CI/CD 多重加固**：
    *   **缓存优化** ([#5118](https://github.com/nearai/ironclaw/pull/5118))：修复合并队列中crate级缓存LRU逐出问题，将60+个缓存合并为共享根缓存，预计减少30+GB存储竞争，显著提升构建稳定性与速度。
    *   **网络韧性** ([#5115](https://github.com/nearai/ironclaw/pull/5115))：为crates.io下载添加`CARGO_NET_RETRY`，解决并行下载时的 transient 网络故障导致的流水线flake。
    *   **流程标准化** ([#5113](https://github.com/nearai/ironclaw/pull/5113))：将跨平台兼容性测试作业从主测试流程中提取至独立工作流，提升主流程可读性与维护性。
*   **E2E测试覆盖** ([#4830](https://github.com/nearai/ironclaw/pull/4830))：将Reborn的E2E测试纳入合并队列，并设置作用域门控，确保关键用户路径在合入前得到验证。

### 3. 基础架构与依赖
*   **大规模依赖升级** ([#5116](https://github.com/nearai/ironclaw/pull/5116), [#5114](https://github.com/nearai/ironclaw/pull/5114))：Dependabot批量更新了`everything-else`（44项）与`tokio-ecosystem`（4项）依赖组，涵盖`agent-client-protocol`、`hyper`等核心库，持续跟进生态安全与特性。
*   **通道启动修复** ([#2927](https://github.com/nearai/ironclaw/pull/2927))：修复首次安装后所有WASM通道保持非激活状态的Bug，确保设置向导的选择能正确持久化。

**整体推进评估**：项目在**运行时能力**（并发、学习）、**开发者体验**（CI/CD）与**集成兼容性**（MCP、依赖）三个维度均有实质性推进，代码库健康度持续改善。

---

## 社区热点
基于PR规模（`size: XL`）、跨领域影响及新功能属性，以下讨论/关注度最高：

1.  **Reborn学习系统栈 - WS-3** ([#4975](https://github.com/nearai/ironclaw/pull/4975))：作为“从错误中学习”核心能力的第三部分，引入后台反思服务。此PR与WS-1/WS-2 stacked，是Reborn智能演进的关键里程碑，社区期待其如何降低重复错误率。
2.  **Workbench Composio连接器** ([#5109](https://github.com/nearai/ironclaw/pull/5109))：为桌面版Workbench添加Composio连接器的读写路由，直接影响第三方工具集成体验。作为Draft PR，正在寻求对数据流设计（`GET /connected`, `POST /connect`）的反馈。
3.  **托管单租户Postgres配置** ([#5081](https://github.com/nearai/ironclaw/pull/5081))：新增`hosted-single-tenant`配置文件，为托管预览版提供持久化状态支持。此PR涉及DB迁移，是产品商业化部署的重要基础设施步骤。
4.  **并发执行调度器** ([#5085](https://github.com/nearai/ironclaw/pull/5085))：解决Reborn运行时串行执行瓶颈，引入`TurnRunScheduler`及用户/类型级并发上限。这是提升高负载下系统吞吐量的核心性能优化。

**诉求分析**：热点集中于**Reborn核心智能**（学习、并发）与**产品化部署**（托管配置、Workbench集成），反映社区对系统**可扩展性**、**生产就绪度**及**生态连接性**的高度关注。

---

## Bug 与稳定性
| 严重程度 | 问题描述 | 状态 | 关联PR/Issue |
| :--- | :--- | :--- | :--- |
| **高** | **Nightly E2E测试持续失败** (#4108)：自5月27日起，每日定时E2E流水线（含扩展测试）均失败，具体根因未在本次数据中明确，可能阻塞自动化发布流程。 | **开放** | [#4108](https://github.com/nearai/ironclaw/issues/4108) |
| **中** | **Google OAuth令牌过期导致重新认证** (#5071)：Reborn用户需频繁重新认证GSuite，因未有效利用刷新令牌。 | **已关闭** | 修复已合并于相关PR（问题描述中提及） |

**注**：今日无新崩溃或回归问题报告。CI稳定性改进（#5118, #5115）旨在预防未来构建失败。

---

## 功能请求与路线图信号
*   **新请求**：**Automations完成状态卡片** ([#5117](https://github.com/nearai/ironclaw/issues/5117))：用户要求在Automations页面顶部汇总栏添加“Completed”卡片，显示已执行的一次性自动化数量。此需求与刚合并的**一次性触发器**功能（#5065）天然配套，**极有可能纳入下一版本**，以提供完整的执行闭环视图。
*   **路线图信号**：大型PR的推进清晰指示了技术路线：
    *   **Reborn学习系统**（#4937, #4975）是最高优先级智能增强。
    *   **并发执行**（#5085）是性能扩展的下一关键步骤。
    *   **托管单租户**（#5081）与**Workbench集成**（#5109）标志着从本地开发向托管产品形态的过渡。

---

## 用户反馈摘要
从Issues与PR描述中提炼：
*   **痛点**：
    *   **状态可见性不足**：用户无法在Automations概览页快速查看已完成的单次任务数量（#5117），需依赖过滤或猜测。
    *   **认证体验差**：OAuth短有效期导致频繁弹窗，破坏Reborn作为“免维护”工具的体验（#5071，已修复）。
    *   **首次使用困惑**：新安装后所有通道默认非激活，即使用户已在向导中选择（#2927，已修复）。
*   **满意点**：团队对CI/CD的持续投入（缓存、重试、流程拆分）被内部贡献者（`@serrrfirat`）高频推进，显示对**开发者体验与交付可靠性**的重视，这间接保障了用户获得更稳定的更新。

---

## 待处理积压
*   **高优先级积压**：**Nightly E2E失败** ([#4108](https://github.com/nearai/ironclaw/issues/4108))：已开放**26天**，是阻碍自动化发布流程的**关键阻塞项**。需立即分配资源诊断失败原因（可能是扩展环境、数据状态或新引入的兼容性问题）。
*   **大型功能待审**：多个`size: XL`的PR（如#4975, #5109, #5081, #5085）因涉及重大架构变更，处于**开放待合并**状态。维护者需确保这些PR在合入前完成充分的跨领域审查（安全、性能、DB迁移、用户体验）。

---
**报告生成时间**：2026-06-22  
**数据来源**：IronClaw GitHub (nearai/ironclaw) 过去24小时活动  
**分析师备注**：项目开发势头强劲，但必须解决持续失败的E2E测试以维持发布信心。功能开发与基础设施投资比例健康，符合成熟开源项目特征。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-22)

## 1. 今日速览
过去24小时，LobsterAI 项目在问题追踪与修复方面保持活跃，共处理 **15 条 Issues**（新开 1 条，关闭 14 条），但 **无任何 Pull Request 合并或新版本发布**。项目当前重心明显偏向稳定性修复与遗留问题清理，而非新功能开发。新开的安全 Issue #2181 揭示了潜在的 SSRF 风险，需社区与维护者高度关注。整体健康度中等：问题响应及时，但功能迭代停滞，安全审计需加强。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
- **PR 合并**：无。
- **Issues 关闭**：关闭 14 条，涵盖多个关键模块的修复：
  - **技能管理**：禁用技能残留问题 (#1500)、Agent 设置后技能列表不同步 (#1502)。
  - **设置面板**：POPO AES Key 校验缺失 (#1504)、定时任务通知静默失败 (#1506)、QQ 群组白名单无法配置 (#1512)、GitHub Copilot OAuth 轮询泄漏 (#1516)。
  - **CI/CD**：Labeler 权限错误与 lint 策略补充 (#1518)。
  - **会话管理**：颜色标注 (#1525)、批量导出 (#1528)、本地统计 (#1532)、消息收藏 (#1537)、标签分类 (#1541)。
  - **内容规范**：条款内容不统一 (#1513)。
  - **核心功能**：技能生成阻塞与模型理解问题 (#1509)。
  
这些关闭标志着相关代码修复已完成，但尚未集成至发布版本，项目整体向前推进主要体现在技术债务清理与用户体验缺陷修复上。

## 4. 社区热点
- **最活跃讨论**：Issue #1509（评论 3 条）聚焦 **技能生成阻塞与模型理解偏差**，用户反映 `skill-creator` 技能在生成过程中无任何中间态反馈，且同一模型在 OpenClaw 与 LobsterAI 中表现不一致。这触及 AI 助手核心功能的可靠性与用户体验，可能引发对提示工程与状态反馈机制的深入讨论。
  - 链接：https://github.com/netease-youdao/LobsterAI/issues/1509
- **安全焦点**：新开 Issue #2181 虽评论暂为 0，但标题直指 **SSRF 防护削弱**，描述 LobsterAI 默认恢复私有网络浏览器访问并弱化 OpenClaw 的 SSRF  guard。安全性质高，预计将迅速吸引安全研究员与核心维护者关注。
  - 链接：https://github.com/netease-youdao/LobsterAI/issues/2181

## 5. Bug 与稳定性
- **严重（安全）**：
  - **#2181 [OPEN]**：LobsterAI 默认启用 `ProxyCompatible` 模式并恢复私有网络浏览器访问，同时弱化 OpenClaw 的 SSRF 防护，可能导致攻击者利用浏览器功能进行服务器端请求伪造。**无已知修复 PR**，需紧急评估与修复。
    - 链接：https://github.com/netease-youdao/LobsterAI/issues/2181
- **中高（已修复）**：今日关闭的 Issues 中包含多个稳定性与功能缺陷，均已修复：
  - 技能状态不同步导致禁用技能仍被调用 (#1500)
  - Agent 设置保存后当前会话技能未更新 (#1502)
  - IM 通知因会话未选而静默失败 (#1506)
  - GitHub Copilot OAuth 轮询在面板关闭后泄漏 (#1516)
  - 技能生成过程无反馈 (#1509)

## 6. 功能请求与路线图信号
今日无**新开**功能请求，但近期关闭的 Issues 中多项功能已实现，可能纳入下一版本：
- **会话管理增强**：颜色标注 (#1525)、标签分类与筛选 (#1541)、批量导出 (#1528)。
- **数据洞察**：本地使用统计面板 (#1532)。
- **信息管理**：AI 回复消息收藏/书签 (#1537)。
  
这些功能均通过 Issue 跟踪并已关闭，表明开发已完成，等待版本集成。结合无新 PR 的情况，下一版本可能以这些功能为主。

## 7. 用户反馈摘要
从 Issues 摘要与评论中提炼核心痛点：
- **操作反馈缺失**：用户无法感知后台操作状态（如技能生成阻塞、认证成功但 Token 丢失），导致困惑与重复操作。
- **UI/UX 不一致与缺陷**：不同 IM 机器人配置界面差异大（如 QQ 白名单无添加入口）、表单校验缺失（如 AES Key 非必填）、状态同步延迟（如 Agent 设置后技能徽章不刷新）。
- **数据管理能力薄弱**：会话缺乏组织工具（颜色、标签）、无法批量导出、无使用统计，难以应对大量会话场景。
- **核心 AI 可靠性担忧**：同一模型在不同模块（OpenClaw vs LobsterAI）理解能力差异，影响用户对产品稳定性的信任。

积极反馈隐含于问题快速关闭中，表明团队响应迅速，但需加强测试覆盖与 UI 一致性设计。

## 8. 待处理积压
- **无长期未响应 Issue**：所有非安全 Issue 均创建于 2026-04-07（约 3 个月前），且已在过去 24 小时内关闭，显示积压清理有效。
- **需优先关注**：新开安全 Issue #2181 状态为 OPEN，无评论与分配，建议维护者立即评估风险并分配负责人。其描述的技术细节（默认配置、SSRF 防护削弱）可能影响所有使用浏览器功能的用户，属于高危项。

---
**报告生成说明**：本报告基于 2026-06-21 至 2026-06-22 的 GitHub 数据，聚焦 Issues 活动。无 PR 合并与版本发布表明项目处于维护期，安全 Issue #2181 是当前最大风险点。功能请求虽无新增，但近期关闭的多个增强功能预示下一版本可能侧重会话管理与数据洞察。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-06-22)

## 1. 今日速览
过去24小时项目社区活跃度极高，共处理16个Issues（新开/活跃13个，关闭3个）和32个PRs（待合并30个，已合并/关闭2个）。核心工作聚焦于**移动端响应式体验的系统性改进**（多个PR同时推进）和**关键稳定性问题的紧急修复**（如消息队列串台、API消息丢失）。无新版本发布，项目处于快速迭代修复阶段，但需警惕未解决的严重Bug对用户体验的影响。

## 2. 版本发布
- **无新版本发布**。最新稳定版本仍为 v1.1.12.post1，多个用户反馈该版本存在回归问题（如图片显示、飞书集成）。

## 3. 项目进展
今日合并/关闭的PR标志着项目在移动端适配和稳定性方面取得进展：
- **PR #5365** (已关闭): 为“Agent Config”页面添加移动端响应式布局，改善窄屏下配置表单的可读性。
- **PR #5359** (已关闭): 增强PR #5350，为移动端Chat头部添加标题跑马灯和居中菜单，提升多会话切换体验。
- **PR #5357** (已关闭): 修复嵌入式模式下切换会话后锁未释放的问题，解决“切不回去”的Bug（关联 Issue #5354）。
- **PR #5324** (待合并): 修复文件预览的`Content-Disposition`头，解决v1.1.12升级后图片不显示的问题（关联 Issue #5320）。

## 4. 社区热点
讨论最活跃的议题集中在**移动端基础交互缺失**和**消息队列核心功能缺陷**：
- **Issue #5329** (5条评论): 用户反馈在移动端侧边栏简洁模式下无法切换Agent，且新建聊天按钮位置不合理。这反映了移动端UI交互设计的根本缺陷，引发多位用户共鸣。
- **Issue #5354** (2条评论): 报告消息队列存在“串台”和会话切换卡死问题，直接影响多Agent工作流的可靠性，已有PR #5357尝试修复。
- **PR #5369** (新开): “Channels页面移动端适配”是今日最受关注的PR之一，属于大规模移动端优化工作的一部分，体现了社区对移动体验的迫切需求。

## 5. Bug 与稳定性
按严重程度排序，今日报告的关键问题：
1.  **严重** - **消息队列串台** (Issue #5354): 在Agent间切换时，消息被错误路由到其他Agent，导致工作流混乱。**已有修复PR #5357**。
2.  **高** - **API消息静默丢弃** (Issue #5344): 当Agent忙碌时，`/api/console/chat`端点返回200但丢弃消息，破坏自动化集成。**暂无修复PR**。
3.  **高** - **Agent卡死/状态不一致** (Issues #5328, #5333): 使用DeepSeek等模型时Agent在thinking阶段卡死，且UI状态（可提交 vs 停止按钮）不同步。**暂无修复PR**。
4.  **中** - **图片显示回归** (Issue #5320): v1.1.12后`send_file_to_user`发送的图片不显示。**已有修复PR #5324待合并**。
5.  **中** - **Zhipu供应商模型连接失败** (Issue #5330): 供应商级测试通过，但所有模型测试失败，疑似路由问题。**暂无修复PR**。
6.  **低** - **飞书群聊必须@才响应** (Issue #5353): 配置未生效，群聊中仍需@。**已关闭**，可能为配置误解。

## 6. 功能请求与路线图信号
用户提出的新功能需求及实现可能性分析：
- **高优先级（有大量PR推进）**: **全面移动端响应式适配**。今日超过10个PR针对不同页面（Settings、Sessions、CronJobs、SkillPool等）进行移动优化，表明这是当前开发的核心重点，很可能纳入近期版本。
- **中优先级（需求明确，但无PR）**: 
  - **智能体办公室直接对话** (Issue #5327): 在管理页面直接与Agent交互，提升运维效率。
  - **模型自动故障转移** (Issue #5351): 利用`llm_routing`配置实现主备切换，增强系统韧性。
- **低优先级（优化类）**: 
  - 记忆搜索的时效性排名 (Issue #5316)
  - 工具结果大小的执行层硬限制 (Issue #5342)

## 7. 用户反馈摘要
从Issues中提炼的核心痛点：
- **移动端体验是最大短板**: 用户多次提及在手机浏览器上UI布局错乱、关键按钮（如切换Agent、新建聊天）不可用或位置不当（Issues #5329, #5354, 多个移动端PR）。这严重限制了移动场景下的可用性。
- **核心交互可靠性受质疑**: 消息队列的“串台”问题让用户对多Agent协作的稳定性失去信心（Issue #5354）。API消息的静默丢弃使得自动化集成难以调试（Issue #5344）。
- **版本升级带来回归**: v1.1.12被多次提及引入了图片显示、飞书响应等新问题，影响用户升级意愿（Issues #5320, #5353）。
- **第三方集成兼容性不足**: 自定义OpenAI兼容提供商（如OMLX）不支持function calling（Issue #5345），Zhipu模型连接异常（Issue #5330），限制了模型选择灵活性。

## 8. 待处理积压
以下重要条目长期未获响应或合并，需维护团队关注：
- **PR #5040** (6月9日创建，`Under Review`): 修复cron jobs加载时因单个无效条目导致整体失败。这是**稳定性关键修复**，已讨论多时但未合并，可能导致任务调度服务崩溃。
- **Issue #5316** (6月18日创建，1条评论): 为每日记忆文件添加时效性排名。这是一个**增强记忆检索质量**的功能请求，但缺乏反馈。
- **PR #5321** (6月19日创建，`Under Review`): 引入“scroll”上下文管理策略（持久化历史+召回REPL）。这是**影响核心架构**的较大功能，需要仔细评审。
- **Issue #5360** (6月21日创建): “在添加新功能前稳定核心应用”。该Issue本身是**对项目路线的meta反馈**，汇总了移动端、Agent交互等根本问题，值得团队优先评估其建议。

---
**报告生成说明**: 本报告基于GitHub公开数据自动生成，聚焦客观事实与数据趋势。所有链接均指向原Issues/PRs页面。项目健康度评估显示：社区贡献力强，移动端改进决心大，但核心稳定性（消息队列、API可靠性）和版本回归控制是亟待解决的短板。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-06-22)

## 1. 今日速览
过去24小时，ZeptoClaw 项目无新代码合并或问题报告，仅有一条与二进制大小控制相关的 Pull Request 被关闭。项目日常活跃度较低，但持续聚焦于关键基础设施优化，特别是强化 CI 质量门禁以防止二进制膨胀。整体项目健康度良好，维护者正积极落实“战略护城河”相关的技术债务清理。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
- **已关闭 PR**: [#611](https://github.com/qhkm/zeptoclaw/pull/611)  
  该 PR 将现有的 `binary-size` CI 作业从仅针对主分支推送，提升为**所有 PR 的强制检查门禁**，并将失败阈值从 6MB 调整为 7.5MB（针对 stripped 发布二进制）。此举直接响应了 Issue #537 的战略担忧，通过自动化防护防止依赖引入导致的二进制缓慢膨胀，确保项目始终符合“能在机器人上运行”的内存约束。项目在**稳定性与资源控制**方面取得实质性进展。

## 4. 社区热点
- **核心议题**: [#537](https://github.com/qhkm/zeptoclaw/issues/537) (已关闭) 与 PR [#611](https://github.com/qhkm/zeptoclaw/pull/611)  
  尽管两条记录均无社区评论，但其背后诉求高度一致：**将二进制大小（目标 ≤7.5MB stripped）作为 PR 合并的硬性门槛**，以维护项目在边缘计算设备（如机器人）上的部署可行性。这反映了项目核心设计原则——极简二进制体积是首要技术指标，但社区参与度低可能因议题偏重基础设施，而非终端用户功能。

## 5. Bug 与稳定性
过去24小时无新 Bug、崩溃或回归问题报告。所有更新均为关闭状态，未发现影响稳定性的活跃问题。

## 6. 功能请求与路线图信号
无新功能请求提交。但 PR #611 的合并表明**二进制大小控制是当前路线图的核心**，未来可能进一步细化阈值、扩展检查范围（如调试构建），或集成更精细的依赖分析工具。用户若关注性能边界，可预期相关优化将持续。

## 7. 用户反馈摘要
无直接用户评论。但从 Issue #537 的动机描述可提炼维护者视角：用户（尤其是机器人领域开发者）的**隐性痛点是部署兼容性**——二进制体积直接决定项目能否在资源受限硬件上运行。维护者通过 CI 门禁主动管理此风险，但缺乏公开反馈渠道，建议加强用户调研以平衡技术约束与功能需求。

## 8. 待处理积压
根据提供数据，最新 Issue 与 PR 均于昨日关闭，无长期未响应积压。建议维护者定期审查完整 Issue 列表（尤其是 `bug`、`feature` 标签），以确保无高优先级问题被忽略。当前响应周期健康，但社区活跃度有待提升。

---
**数据来源**: [ZeptoClaw GitHub 仓库](https://github.com/qhkm/zeptoclaw)  
**报告生成时间**: 2026-06-22  
**说明**: 本报告基于过去24小时（UTC）的 Issues/PRs 活动及元数据生成，聚焦客观事实与项目健康度分析。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [Big Model Radar](https://github.com/zx0828/big_model_radar) 自动生成。*