# AI CLI 工具社区动态日报 2026-06-25

> 生成时间: 2026-06-25 00:36 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 (2026-06-25)

## 1. 生态全景
当前 AI CLI 工具生态竞争白热化，核心战场已从基础模型调用转向**工具生态（MCP协议普及）、成本效率（token优化与配额管理）和 IDE 深度集成**。所有主流工具均在积极适配 MCP（模型上下文协议），将其作为扩展能力的标准接口。同时，社区对**成本失控、稳定性缺陷及安全漏洞**的焦虑显著上升，推动各工具在可靠性上持续投入。移动端支持与跨平台一致性正成为差异化关键，而上下文管理正从简单截断向持久化、智能压缩演进，以支撑复杂长期任务。

## 2. 各工具活跃度对比
| 工具 | 24h Issues (Top N) | 24h PRs (重要/总计) | Release 情况 |
|------|-------------------|---------------------|--------------|
| **Claude Code** | 10 (Top 10) | 5 (重要PR) | v2.1.191 (昨日发布) |
| **OpenAI Codex** | 10 (Top 10) | 10 (Top 10 PR) | rust-v0.142.1 + 多个 0.143.0-alpha |
| **Gemini CLI** | 7+ (部分列出) | N/A (未提及) | 无新版本 |
| **GitHub Copilot CLI** | 10 (Top 10) | 1 (重要PR #2587) | v1.0.65 (昨日发布) |
| **Kimi Code CLI** | 5 | 2 | 无新版本 |
| **OpenCode** | 10 (Top 10) | 10 (Top 10 PR) | v1.17.10 (今日发布) |
| **Qwen Code** | 10 (Top 10) | 多 (列表不全) | v0.19.2 发布失败/修复中 |

## 3. 共同关注的功能方向
- **MCP/工具协议标准化与深化**  
  **涉及工具**：OpenAI Codex、GitHub Copilot CLI、Kimi Code CLI、OpenCode  
  **具体诉求**：完整 MCP 客户端能力（资源订阅、模板、进度通知）、认证标准化（OAuth scope 控制）、入站通知支持、配置自动传播。Claude Code 的 `skills`/`hooks` 与 Gemini 的 ADK 集成亦属同类生态扩展。

- **成本与性能的精细管控**  
  **涉及工具**：Claude Code、OpenAI Codex、Kimi Code CLI、OpenCode  
  **具体诉求**：解决 token 消耗异常（#OpenAI Codex #14593）、rate-limit 成本跳涨（#OpenAI Codex #28879）、用量计费透明度（#Kimi #1994）、上下文压缩优化（#Kimi #2472）、模型服务稳定性（#OpenCode #33721）。

- **IDE 集成与开发者工作流深化**  
  **涉及工具**：Claude Code、OpenAI Codex、GitHub Copilot CLI、OpenCode  
  **具体诉求**：GitLab 集成（#Claude #12346）、VS Code 扩展修复（#OpenAI #52151）、autocomplete 一致性、VSCode 插件高级功能（#OpenCode #33518）、键绑定自定义（#Copilot #2419）。

- **稳定性与可靠性基石**  
  **涉及工具**：**所有工具**  
  **具体诉求**：子代理挂起/行为错误（#Gemini #21409, #22323）、TUI 崩溃（#OpenCode #32706, #Qwen #5800）、工具调用失败（#OpenCode #21090）、会话上下文丢失（#OpenAI #29356）、核心功能循环阻塞（#Kimi #640）。

- **安全加固与隐私合规**  
  **涉及工具**：Claude Code、Qwen Code、OpenCode  
  **具体诉求**：插件系统注入漏洞修复（#Claude #70582, #70538）、路径遍历防护（#Qwen #5834）、默认外联行为控制（#OpenCode #10416）、MCP OAuth 配置安全（#OpenCode #5444）。

## 4. 差异化定位分析
| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 安全合规、移动端体验、技能（skills）系统 | 注重安全与跨设备的团队开发者 | 强化 hooks 与上下文管理（/rewind），修复插件安全 |
| **OpenAI Codex** | 模型深度集成、企业级控制、多代理协作 | 需要高级模型（Ultra）与精细成本控制的企业用户 | 推动 WorldState 持久化、service tier 支持、MCP 认证标准化 |
| **Gemini CLI** | 评估基础设施、子代理行为研究、AST 工具链 | AI 研究者

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告  
*数据截止：2026-06-25*  

---

## 1. 热门 Skills 排行  
基于 PR 关注度与社区讨论，以下 Skills 在功能价值与问题修复层面最受关注（状态均为 OPEN）：  

| 排名 | Skill / PR | 功能简述 | 社区热点 | 状态 |
|------|------------|----------|----------|------|
| 1 | **[skill-creator eval 系统修复](https://github.com/anthropics/skills/pull/1298)** | 修复 `run_eval.py` 始终报告 0% recall 的核心缺陷，影响所有技能描述优化流程 | 多个关联 PR (#1099, #1050, #1323) 共同解决 Windows 兼容性、触发检测与编码问题，是技能开发工具链的基石修复 | OPEN |
| 2 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | 自动预防 AI 生成文档的排版问题（孤行、寡行、编号错位） | 覆盖所有文档生成场景，用户普遍反馈“隐形但关键”的质量提升需求 | OPEN |
| 3 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 提供完整测试栈指南（单元/组件/端到端），包含 Testing Trophy 哲学与最佳实践 | 填补技能在工程化测试领域的空白，呼应社区对“可靠代码生成”的强烈需求 | OPEN |
| 4 | **[AppDeploy](https://github.com/anthropics/skills/pull/360)** | 通过 AppDeploy.ai 直接部署全栈 Web 应用并管理生命周期 | 实现“从代码到上线”的端到端工作流，吸引大量 DevOps 与全栈开发者关注 | OPEN |
| 5 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 元技能，从结构、文档、安全等 5 个维度评估其他技能质量 | 社区推动技能标准化与安全审计的关键提案，关联 Issue #492 的信任边界讨论 | OPEN |
| 6 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 系统化审计代码库，识别孤立代码、未用文件与文档缺口，输出 CODEBASE-STATUS.md | 满足大型项目维护者的“代码健康度”需求，与技能优化循环形成互补 | OPEN |
| 7 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | 为 AI 代理提供持久化记忆系统，跨对话维护结构化上下文 | 解决长会话记忆衰减问题，是构建复杂代理工作流的基础设施 | OPEN |
| 8 | **[ODT 支持](https://github.com/anthropics/skills/pull/486)** | 创建、填充、解析 OpenDocument 格式（.odt, .ods）文件 | 扩展开源办公格式支持，呼应 LibreOffice 用户与 ISO 标准需求 | OPEN |

---

## 2. 社区需求趋势  
从 Issues 高频讨论中提炼新 Skill 方向：  

- **企业级集成**：SAP 预测分析 (#181)、SharePoint 文档处理 (#1175)、ODT 格式支持 (#486) 表明社区急需 Claude 深度对接企业数据源与标准。  
- **质量与安全治理**：document-typography (#514)、testing-patterns (#723)、skill-security-analyzer (#83) 及 agent-governance 提案 (#412) 反映对“可靠、安全、合规”技能的系统性需求。  
- **协作与共享**：组织内技能共享 (#228) 与技能 Marketplace 去重 (#189) 显示团队协作场景的迫切性。  
- **开发体验优化**：Windows 兼容性 (#1061)、Bedrock 支持 (#29)、MCPs 暴露 (#16) 指向跨平台与协议标准化诉求。  

---

## 3. 高潜力待合并 Skills  
以下 PR 讨论活跃、修复关键问题或功能完整，有望近期合并：  

| PR | 关联 Issue | 潜力分析 |
|----|------------|----------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | #556, #1169 | 解决 eval 系统 0% recall 的根本原因，影响所有技能优化流程，已有多轮迭代修复 |
| **[#1323

---

# Claude Code 社区动态日报 (2026-06-25)

**今日速览**  
Claude Code 于昨日发布 v2.1.191，核心新增 `/rewind` 命令以恢复 `/clear` 前的对话，并修复了流式响应时的滚动跳变及背景代理异常复活问题。社区讨论高度聚焦于移动端多账号切换（#36151）与 GitLab 集成（#12346）等跨平台功能需求，同时两则紧急安全 PR（#70582、#70538）修复了插件系统中的严重注入漏洞，引发开发者对扩展安全性的广泛关注。

---

## 版本发布
- **v2.1.191**（昨日发布）
  - 新增 `/rewind` 命令：支持在 `/clear` 后恢复之前对话上下文。
  - 修复流式响应时阅读历史输出导致的滚动位置跳变问题。
  - 修复背景代理（background agents）被停止后异常复活的问题。
  - [发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.191)

---

## 社区热点 Issues（Top 10）
以下 Issues 基于评论数、点赞数及影响范围筛选，反映社区核心关切：

1. **[FEATURE] Multi-account switching in Claude Mobile app**  
   - **链接**: #36151  
   - **重要性**: 移动端高频需求，评论 106、👍 372，涉及多用户协作场景。  
   - **状态**: OPEN，长期未解决，社区持续呼吁。

2. **[BUG] Extreme token consumption — quota depleted in minutes**  
   - **链接**: #42249  
   - **重要性**: 成本控制危机，正常使用导致配额快速耗尽，影响付费用户体验。  
   - **状态**: OPEN，需优先排查计费逻辑。

3. **[FEATURE] Add GitLab Integration**  
   - **链接**: #12346  
   - **重要性**: 扩展版本控制生态，评论 44、👍 108，满足企业级 GitLab 用户需求。  
   - **状态**: OPEN，与现有 GitHub 集成形成互补。

4. **[FEATURE] Add support for subdirectories in skills**  
   - **链接**: #10238  
   - **重要性**: 增强技能（skills）模块的组织能力，评论 45、👍 159，提升大型项目可维护性。  
   - **状态**: OPEN，核心功能增强。

5. **[BUG] Opus 4.7 1M via Bedrock: VSCode extension stream ends with 0 events**  
   - **链接**: #52151  
   - **重要性**: VS Code 扩展关键 bug，影响 Bedrock 用户流式响应体验，已关闭但修复需验证。  
   - **状态**: CLOSED，修复后需社区反馈。

6. **[FEATURE] MCP servers, hooks, and plugins should auto-reload**  
   - **链接**: #24057  
   - **重要性**: 开发流程痛点，配置修改需重启会话，评论 28，呼吁实时热重载。  
   - **状态**: OPEN，提升开发者体验。

7. **[BUG] No response from API error when Advisor is triggered**  
   - **链接**: #69238  
   - **重要性**: 可靠性问题，Advisor 功能频繁触发无响应错误，影响任务连续性。  
   - **状态**: OPEN，需优化错误处理与重试机制。

8. **[FEATURE] Disable the welcome banner**  
   - **链接**: #2254  
   - **重要性**: 终端用户体验优化，评论 28、👍 91，高频小需求。  
   - **状态**: OPEN，界面定制化诉求。

9. **[BUG] macOS Activity Monitor shows version number instead of 'claude'**  
   - **链接**: #12433  
   - **重要性**: 平台细节问题，影响进程识别与监控，评论 22。  
   - **状态**: OPEN，macOS 特定修复。

10. **[FEATURE] JetBrains need some love - a real Claude AI Assist interface plugin**  
    - **链接**: #47166  
    - **重要性**: IDE 生态扩展需求，尽管点赞低（👍 2），但代表 JetBrains 用户强烈诉求。  
    - **状态**: OPEN，需评估开发资源。

---

## 重要 PR 进展（过去24小时）
共 5 条 PR，聚焦安全与稳定性：

1. **fix: handle server rate limiting during normal usage**  
   - **链接**: #70634  
   - **内容**: 优化服务器速率限制处理，避免正常操作被限流阻断。  
   - **关联 Issue**: #70631

2. **fix: Handle rate limiting headers for Anthropic API**  
   - **链接**: #70633  
   - **内容**: 正确解析并响应 Anthropic API 的速率限制头部，提升健壮性。

3. **fix: the application accepts user-controlled urls for... in llm.py**  
   - **链接**: #70582  
   - **内容**: **安全修复（CRITICAL）**：修补 `plugins/security-guidance/hooks/llm.py` 中的用户可控 URL 注入漏洞。  
   - **风险**: 可能导致远程代码执行或数据泄露。

4. **fix: sanitize subprocess call in gitutil.py**  
   - **链接**: #70538  
   - **内容**: **安全修复（CRITICAL）**：对 `plugins/security-guidance/hooks/gitutil.py` 的子进程调用进行输入净化，防止命令注入。  
   - **风险**: 高危漏洞，影响所有使用 Git 操作的场景。

5. **toekn**  
   - **链接**: #66854  
   - **内容**: 提交信息不完整，可能为占位或测试，需进一步关注。

---

## 功能需求趋势
从 Issues 标签与主题归纳，社区需求集中于四大方向：

1. **IDE 与平台集成深化**  
   - GitLab 支持（#12346）、JetBrains 插件（#47166）、VS Code 扩展修复（#52151），体现对主流开发环境的全覆盖诉求。

2. **核心工具链增强**  
   - 技能子目录（#10238）、MCP 自动重载（#24057）、/rewind 命令（v2.1.191），聚焦工作流自动化与上下文管理。

3. **用户体验精细化**  
   - 移动端多账号（#36151）、欢迎横幅控制（#2254）、滚动优化（#70309），强调跨设备一致性与界面可控性。

4. **性能与成本优化**  
   - 极端 token 消耗（#42249）、模型预设扩展（#53987），反映对资源效率与定价透明度的担忧。

---

## 开发者关注点
高频反馈的痛点与诉求：

- **成本失控风险**：token 消耗异常（#42249）引发对计费模型的质疑，需提供用量监控与预警。
- **配置灵活性不足**：MCP/插件需重启（#24057）、模型选择被锁定（#66407），降低迭代效率。
- **平台兼容性差异**：Windows 代理渲染问题（#67406）、macOS Keychain 隔离（#70697）、Linux 终端滚动（#70309），需统一体验。
- **安全信任建设**：两则 CRITICAL 安全 PR 暴露插件系统风险，社区呼吁更严格的第三方代码审计。
- **移动端功能滞后**：多账号切换（#36151）与远程会话 attach（#70699）缺失，限制移动生产力。

---
*数据来源: github.com/anthropics/claude-code (截至 2026-06-25 24小时动态)*  
*报告生成: AI 开发工具技术分析师*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-25)

**数据来源**: [github.com/openai/codex](https://github.com/openai/codex)  
**统计周期**: 过去24小时 (截至 2026-06-25)

---

## 1. 今日速览
- 社区最焦点问题为 **token 消耗速率异常** 与 **rate-limit 成本跳跃**，多个高评论 Issue 反映预算在数轮对话中快速耗尽，影响 Plus/Business 用户。
- 核心版本 **rust-v0.142.1** 发布，重点修复 Windows 系统代理认证支持，改善企业网络环境下的连接稳定性。
- 技术层面，PR 集中推进 **WorldState 持久化**、**Ultra 推理模式** 与 **MCP 认证标准化**，旨在提升会话恢复能力与多代理协作确定性。

---

## 2. 版本发布
- **rust-v0.142.1** (稳定版)
  - **新特性**: 新增 Windows 系统代理支持的 opt-in 选项，完整支持 PAC、WPAD、静态代理及绕过规则，解决企业网络认证问题。
  - **链接**: [compare/v0.142.0...v0.142.1](https://github.com/openai/codex/compare/rust-v0.142.0...rust-v0.142.1)
- 同期发布多个 `0.143.0-alpha.*` 预览版本，持续集成测试中。

---

## 3. 社区热点 Issues (Top 10)
| # | 标题 | 关键点 | 社区反应 | 链接 |
|---|------|--------|----------|------|
| **14593** | Burning tokens very fast | 用户报告 token 消耗速度异常加快，影响所有付费计划。 | 评论 **620**，👍 **271**，历史最长讨论，反映普遍性成本焦虑。 | [链接](https://github.com/openai/codex/issues/14593) |
| **28879** | rate-limit cost per token jumped ~10-20x | 自 6 月 16 日起，gpt-5.5 的 rate-limit 成本飙升，5 小时预算仅够 2-3 轮对话。 | 评论 **133**，👍 **269**，新发但热度极高，疑似后端计费逻辑变更。 | [链接](https://github.com/openai/codex/issues/28879) |
| **13733** | Background process polling wastes tokens | 后台进程（如 `cargo build`）轮询触发完整 API 调用，历史越大浪费越严重。 | 评论 **29**，👍 **23**，性能与成本双重痛点，需优化轮询策略。 | [链接](https://github.com/openai/codex/issues/13733) |
| **21753** | Full Claude Code Hook Parity (29+) | 要求实现 Claude Code 风格的完整钩子（hooks）体系，提升自动化能力。 | 评论 **18**，👍 **17**，功能需求 umbrella issue，影响插件生态。 | [链接](https://github.com/openai/codex/issues/21753) |
| **29072** | Windows apply_patch fails (sandbox setup) | Windows 桌面版 `apply_patch` 因 `codex-windows-sandbox-setup.exe` 路径问题失败。 | 评论 **17**，👍 **16**，平台特定阻塞问题，影响 Windows 开发者工作流。 | [链接](https://github.com/openai/codex/issues/29072) |
| **2916** | OpenAI service tier support | 请求支持 OpenAI API 服务层（service tier）配置，以优化成本与延迟。 | 评论 **17**，👍 **50**，👍 数高，企业用户强烈需求成本控制。 | [链接](https://github.com/openai/codex/issues/2916) |
| **15299** | Support inbound MCP notifications | 希望外部系统通过 MCP 通知向活跃会话推送消息，当前仅支持出站工具调用。 | 评论 **14**，👍 **7**，扩展 Codex 作为事件中心的能力。 | [链接](https://github.com/openai/codex/issues/15299) |
| **29356** | Context compaction loses operational continuity | 自动上下文压缩会丢失长期任务的操作连续性，要求保留最后 5 步原始上下文。 | 评论 **13**，👍 **0**，但涉及核心会话管理，对复杂任务至关重要。 | [链接](https://github.com/openai/codex/issues/29356) |
| **29197** | WebSearch receives Cloudflare challenge (403) | Windows 桌面版 WebSearch 请求被 Cloudflare 拦截，返回 JS 挑战页。 | 评论 **13**，👍 **0**，网络连接性故障，影响搜索功能可用性。 | [链接](https://github.com/openai/codex/issues/29197) |
| **25667** | macOS app leaves code_sign_clone directories | macOS 应用每次启动后遗留约 965MB 的 `code_sign_clone` 目录，未自动清理。 | 评论 **12**，👍 **18**，资源管理缺陷，长期占用磁盘空间。 | [链接](https://github.com/openai/codex/issues/25667) |

---

## 4. 重要 PR 进展 (Top 10)
| # | 标题 | 功能/修复内容 | 状态 | 链接 |
|---|------|---------------|------|------|
| **29833** | core: make world state snapshots serializable | 使 `WorldState` 快照可序列化，为持久化与恢复奠定基础。 | Open | [链接](https://github.com/openai/codex/pull/29833) |
| **29835** | core: persist world state in rollouts | 在 rollouts 中持久化 `WorldState`，支持线程恢复、回滚与压缩后精确重建。 | Open | [链接](https://github.com/openai/codex/pull/29835) |
| **29683** | Add managed new-thread model settings | 为管理员提供持久默认模型、推理努力与服务层设置，覆盖全局配置。 | Open | [链接](https://github.com/openai/codex/pull/29683) |
| **29924** | Represent MCP authentication with an enum | 将 MCP 认证方式重构为枚举（OAuth vs ChatGPT-session），消除布尔歧义。 | Open | [链接](https://github.com/openai/codex/pull/29924) |
| **29910** | nest sleep config under current time reminder | 将 `sleep_tool` 配置移至 `[features.current_time_reminder]` 下，统一时钟工具命名空间。 | Open | [链接](https://github.com/openai/codex/pull/29910) |
| **29923** | support external clock sleeps | 支持外部时钟驱动的睡眠，最大时长延至 12 小时，并新增 `currentTime/sleep` 通知。 | Open | [链接](https://github.com/openai/codex/pull/29923) |
| **29709** | Add gated Ultra reasoning effort | 添加 Ultra 推理努力选项，仅在模型目录与多代理模式启用时可见，避免冗余参数。 | Code-reviewed | [链接](https://github.com/openai/codex/pull/29709) |
| **29710** | Derive multi-agent mode from Ultra effort | 当 Ultra 选择主动委托时，自动推导多代理模式，消除客户端配置冲突。 | Closed | [链接](https://github.com/openai/codex/pull/29710) |
| **29754** | Preserve live turn history across reconnects | 跨重连重建累积的权威 turn 历史，避免会话中断时上下文丢失。 | Open | [链接](https://github.com/openai/codex/pull/29754) |
| **29930** | Track selected capability readiness per executor | 为每个执行器跟踪能力就绪状态，提供线程级单一事实源，支持动态执行器。 | Open | [链接](https://github.com/openai/codex/pull/29930) |

---

## 5. 功能需求趋势
从 Issues 标签与主题提炼，社区最关注方向：
- **成本与性能优化**: rate-limit 模型、token 消耗监控、后台轮询效率（#14593, #28879, #13733）。
- **跨平台稳定性**: Windows 代理/沙箱问题、macOS 资源清理、WebSearch 网络适配（#29072, #25667, #29197）。
- **MCP 生态扩展**: 入站通知、认证标准化、工具调用可靠性（#15299, #29924, #19871）。
- **上下文智能管理**: 压缩策略优化、长期任务连续性、会话状态持久化（#29356, #28592, #29754）。
- **开发工具深度集成**: VS Code 面板修复、TUI 插件共享、CLI 配置同步（#21863, #26705, #14722）。

---

## 6. 开发者关注点
高频痛点总结：
- **资源消耗不可预测**: token 与 rate-limit 成本近期波动剧烈，预算规划困难。
- **平台兼容性缺陷**: Windows/macOS 特定 bug 频发，影响企业环境与日常使用。
- **会话状态管理**: 上下文压缩导致任务中断、子代理挂起、重连后历史丢失，长期任务稳定性差。
- **配置与控制粒度**: 缺乏服务层、模型推理努力等细粒度控制，成本优化手段有限。
- **MCP 与扩展性**: 入站通知、自定义提供商工具调用等生态需求未满足，自动化能力受限。

---

*报告生成时间: 2026-06-25*  
*数据自动采集自 GitHub API，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-25)

## 今日速览
过去24小时，Gemini CLI 社区持续活跃，无新版本发布，但多个关键问题与功能改进在 Issues 和 PR 中深入讨论。核心焦点集中在**子代理行为可靠性**、**内存系统安全性**以及**性能优化**上，同时多项重要 PR 已合并，涉及工具注册表、ADK 集成与安全修复。

---

## 版本发布
- **无新版本发布**（过去24小时）

---

## 社区热点 Issues（Top 10）
以下 Issues 基于评论数、优先级（p1/p2）及社区反馈（👍）筛选，反映当前最紧迫的问题：

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   **子代理在达到 MAX_TURNS 后错误报告 GOAL 成功**  
   *重要性*：p1 级 bug，影响任务完成状态判断，可能导致用户误以为分析成功而实际未执行。  
   *社区反应*：8 条评论，2 👍，涉及多个仓库复现。

2. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)**  
   **实现稳健的组件级评估**  
   *重要性*：p1 级史诗任务，跟进行为评估测试的扩展与运行，已生成 76 项测试，覆盖 6 种 Gemini 版本。  
   *社区反应*：7 条评论，评估基础设施的核心需求。

3. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   **评估 AST 感知文件读取、搜索与映射的影响**  
   *重要性*：p2 级史诗，探索 AST 工具能否减少读取误差、降低 Token 噪声、提升代码导航精度。  
   *社区反应*：7 条评论，潜在性能与准确性突破点。

4. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   **通用代理永久挂起**  
   *重要性*：p1 级严重 bug，代理在简单操作（如创建文件夹）时无限等待，严重影响可用性。  
   *社区反应*：7 条评论，**8 👍**，用户强烈共鸣，临时方案是禁用子代理。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   **Gemini 不足够使用技能和子代理**  
   *重要性*：p2 级行为问题，模型倾向于忽略自定义技能，需显式指令才调用，降低自动化效率。  
   *社区反应*：6 条评论，0 👍， anecdotal 但普遍反馈。

6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)**  
   **实现确定性编辑并减少自动内存日志**  
   *重要性*：p2 级安全与隐私问题，自动内存在提取前已将内容送入模型上下文，编辑提示滞后。  
   *社区反应*：5 条评论，0 👍，涉及敏感数据泄露风险。

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   **阻止自动内存无限重试低信号会话**  
   *重要性*：p2 级内存系统 bug，低信号会话未被标记为已处理，反复出现在待办摘要中。  
   *社区反应*：5 条评论，0 👍，影响内存索引清洁度。

8

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-25)

## 今日速览
GitHub Copilot CLI 于昨日发布 v1.0.65，重点改进工作目录持久化与自定义代理发现，并修复了权限提示问题。社区今日围绕插件 hook 行为、技能组织方式及模型选择 bug 展开热烈讨论，同时 PR #2587 引入的自动化问题分类功能已合并，将提升 issue 管理效率。

## 版本发布
**v1.0.65** (2026-06-24)
- `/cd` 命令现在持久化工作目录，恢复会话时自动返回原目录，并发现新目录中的自定义代理。
- 修复了带斜杠前缀字符串参数（如 `--body "/azp run"`）的命令触发不必要的文件系统权限提示问题。
- 全屏时间线界面稳定性改进（原文不完整，推测为 UI 优化）。

## 社区热点 Issues（Top 10）
1. [#2643](https://github.com/github/copilot-cli/issues/2643) - **[OPEN]** `preToolUse` hook 静默重写命令时仍弹出确认对话框（评论11，👍2）。  
   **重要性**：影响插件开发者，hook 无法无提示重写命令，破坏自动化流程。社区反应：中等讨论，寻求官方解决方案。

2. [#1632](https://github.com/github/copilot-cli/issues/1632) - **[OPEN]** 支持技能子文件夹以更好组织（评论9，👍21）。  
   **重要性**：用户技能数量增长，扁平结构难以管理，需求强烈。社区反应：高支持（21👍），组织性改进呼声高。

3. [#3832](https://github.com/github/copilot-cli/issues/3832) - **[CLOSED]** 6月16日 outage 后所有模型显示为“阻塞/禁用”（评论6，👍13）。  
   **重要性**：广泛影响用户无法使用，已修复但反映系统脆弱性。社区反应：高关注（13👍），稳定性受质疑。

4. [#3881](https://github.com/github/copilot-cli/issues/3881) - **[OPEN]** 6倍模型配额扣除错误（5%而非2%）（评论3，👍0）。  
   **重要性**：计费准确性，用户权益受损。社区反应：用户投诉，需官方核算与解释。

5. [#3913](https://github.com/github/copilot-cli/issues/3913) - **[CLOSED]** 恢复会话时模型选择为空（评论3，👍1）。  
   **重要性**：会话恢复功能缺陷，影响连续性。社区反应：已修复，但用户曾受困扰，测试覆盖不足。

6. [#2419](https://github.com/github/copilot-cli/issues/2419) - **[OPEN]** 可配置键绑定以实现快速模型切换（评论2，👍5）。  
   **重要性**：提升操作效率，高频需求。社区反应：5👍，与键绑定需求集中。

7. [#1729](https://github.com/github/copilot-cli/issues/1729) - **[OPEN]** 可配置键绑定（评论2，👍5）。  
   **重要性**：自定义快捷键匹配用户习惯，与#2419类似。社区反应：支持度高，期望灵活定制。

8. [#523](https://github.com/github/copilot-cli/issues/523) - **[OPEN]** Kerberos 代理支持（评论2，👍0）。  
   **重要性**：企业网络环境必需，当前无法使用。社区反应：企业用户刚需，但讨论较少（可能受众窄）。

9. [#3548](https://github.com/github/copilot-cli/issues/3548) - **[CLOSED]** 通过配置启用 github-mcp-server（评论2，👍0）。  
   **重要性**：简化 MCP 服务器启用流程，提升便利性。社区反应：已实现，用户满意，但讨论有限。

10. [#2680](https://github.com/github/copilot-cli/issues/2680) - **[CLOSED]** `!` shell 命令历史记录（评论2，👍0）。  
    **重要性**：增强命令行体验，与终端一致。社区反应：已关闭，功能可能已添加，历史需求满足。

## 重要 PR 进展
- [#2587](https://github.com/github/copilot-cli/pull/2587) - **[CLOSED]** 添加自动化问题分类与 GitHub Agentic Workflows。  
  **内容**：引入 AI 驱动的工作流，自动为 issue 应用 `area:` 标签和 `triage` 标签，提升 issue 管理效率。已合并，预计减少人工分类负担。

## 功能需求趋势
- **插件系统增强**：hook 行为控制（如静默重写）、自定义代理发现、插件市场交互改进（autocomplete）。
- **企业级部署**：代理认证（Kerberos）、服务器管理配置（env 推送）、MCP 集成自动化。
- **用户体验优化**：可配置键绑定、命令历史、移动端远程会话支持（文件上传、slash 命令）、autocomplete 一致性。
- **会话与模型管理**：工作目录持久化、模型选择流畅性、恢复会话上下文保持、quota 计算准确性。
- **平台兼容性**：Linux AppImage 环境隔离问题、Windows 键绑定

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-25)

**数据来源**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)  
**统计周期**: 过去24小时 (截至2026-06-25)

---

## 1. 今日速览
过去24小时，Kimi Code CLI 无新版本发布，但社区问题反馈与代码合并活跃。核心动态包括：**严重功能bug**（文件循环读取、web指令错误）引发用户担忧，**用量计费争议**成为社区焦点（👍数最高），同时两个关键PR合并修复了MCP配置传播与交互体验问题。整体来看，社区对**稳定性、资源效率及MCP工具集成**的关注度显著上升。

---

## 2. 版本发布
- **无新版本发布**。最新稳定版仍为 `0.76`（根据 Issues 提及版本）。

---

## 3. 社区热点 Issues（共5条，全部列出）
> 注：过去24小时仅5条 Issues 更新，以下按社区反馈强度（评论数、👍数）及问题严重性排序。

| # | 标题 | 状态 | 重要性说明 | 社区反应 | 链接 |
|---|------|------|------------|----------|------|
| **#640** | [bug] Kimi CLI stuck in reading one file again and again and stuck in a loop | OPEN | **严重阻塞性bug**：CLI 陷入单文件循环读取，导致任务无法进行，影响基本使用流程。 | 评论14条，讨论集中，用户提供详细复现步骤。 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/640) |
| **#1994** | kimiCode用量计算有问题 || There is a problem with kimiCode usage calculation | OPEN | **计费争议核心**：用户指出会员2小时额度仅够2次请求（因思维链token消耗大），质疑官方宣传的“高频并发”与实际不符，涉及订阅价值。 | 👍7个（最高），评论7条，多用户附和，反映计费透明度缺失。 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/1994) |
| **#2472** | [enhancement] # Context compaction reloads system prompt and project instructions, wasting ~20k tokens | OPEN | **性能优化需求**：上下文压缩机制重复加载系统提示和项目指令，单次浪费约2万token，显著增加成本。 | 新开Issue，已引起维护者注意，潜在影响大规模项目效率。 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2472) |
| **#2473** | [bug] web bug | CLOSED | **功能可用性问题**：`/web` 指令报错，影响基于Web的交互功能。虽已关闭，但暴露web模块稳定性风险。 | 评论0，关闭迅速，可能修复及时，但需关注是否复发。 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2473) |
| **#2469** | [bug] `kimi web` starts MCP servers from the CLI installation directory, breaking workspace-relative MCP tools | CLOSED | **MCP集成缺陷**：`kimi web` 从CLI安装目录启动MCP服务器，导致工作区相对路径工具失效，影响开发工作流。 | 评论0，已关闭，对应PR #1942修复，体现MCP配置问题的重要性。 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2469) |

---

## 4. 重要 PR 进展（共2条，全部列出）
> 注：过去24小时仅2条 PR 更新，均以合并关闭。

| # | 标题 | 状态 | 功能/修复内容 | 影响 | 链接 |
|---|------|------|---------------|------|------|
| **#1942** | fix(mcp): propagate MCP configs to subagents and resume immediately | CLOSED | **修复MCP配置传播**：解决子代理（如explore、coder）未接收MCP配置的问题，并确保恢复会话时立即生效。 | 提升多代理协作与会话恢复的可靠性，对复杂项目至关重要。 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/1942) |
| **#1377** | feat: add vim-style j/k keyboard navigation for approval and question… | CLOSED | **交互增强**：在审批和问答界面添加vim风格的 `j/k` 键盘导航，提升命令行操作效率。 | 改善开发者体验，尤其适合Vim用户，属易用性优化。 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/1377) |

---

## 5. 功能需求趋势（从 Issues 提炼）
基于过去24小时 Issues，社区最关注的功能方向：
1. **稳定性与可靠性**：优先解决循环读取、web指令错误等阻塞性bug，确保核心功能可用。
2. **资源效率与计费透明**：优化上下文压缩机制以减少token浪费，并明确用量计算逻辑（是否按请求次数或token），匹配宣传的并发能力。
3. **MCP工具集成深化**：确保MCP配置在子代理、恢复会话及web模式中正确传播，路径相对工作区，支持复杂开发工作流。
4. **性能监控与反馈**：提供更细粒度的token消耗统计（如按任务、模型），帮助用户管理额度。
5. **交互体验细节**：键盘导航等小改进持续受到欢迎，未来可能扩展更多快捷键或UI优化。

---

## 6. 开发者关注点
- **高频痛点**：  
  - **循环bug (#640)**：直接影响任务执行，需紧急修复。  
  - **token消耗过快 (#1994)**：会员额度与实际使用严重不匹配，引发对订阅模式的质疑。  
- **核心需求**：  
  - **MCP工具链完整性**：配置传播、路径处理必须可靠，否则影响自动化工作流。  
  - **上下文管理效率**：压缩过程不应重复加载静态内容（如系统提示），需算法优化。  
- **隐性期望**：  
  - 官方需澄清用量计费规则（token vs. 请求次数），并提供实时监控。  
  - web功能（`/web`）需加强测试，避免回归错误。  
  - 社区希望看到更多针对“长思维链模型”（如K2.6/2.7）的token优化策略。

---

**报告生成时间**: 2026-06-25  
**分析师备注**: 建议优先处理 #640 和 #1994，二者直接影响用户体验与付费意愿；MCP相关修复（PR #1942）已合并，但需监控是否衍生新问题。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-25)

## 今日速览
OpenCode 于今日发布 v1.17.10 版本，核心增强了对 MCP（模型上下文协议）的支持并新增 `--mini` CLI 模式。社区焦点集中在 MCP 功能的完善与稳定性上，尤其是 OAuth 认证流程的可靠性问题；同时，部分用户反馈 qwen3.7 系列模型在 OpenCode Go 上存在服务不稳定的情况。

## 版本发布
- **v1.17.10**：本次小版本更新主要围绕 MCP 生态集成与 CLI 体验优化。
  - **核心改进**：新增 MCP 服务器指令到会话上下文、支持 Opencode 托管提供商集成、增加 MCP 资源模板列表与读取工具、新增 `--mini` CLI 模式。
  - **问题修复**：隐藏了未完全就绪的 MCP 资源模板工具，避免误用。
  - [发布说明链接](https://github.com/anomalyco/opencode/releases/tag/v1.17.10)

## 社区热点 Issues（Top 10）
1. **[#10416] [CLOSED] OpenCode is not private by default?**  
   **重要性**：高。用户发现会话标题生成会外联网络，引发对默认隐私行为的担忧，社区讨论热烈（59 评论，39 👍）。  
   [链接](https://github.com/anomalyco/opencode/issues/10416)

2. **[#28567] [OPEN] [FEATURE]: Full MCP client capabilities**  
   **重要性**：高。社区强烈要求全面支持最新 MCP 标准，当前实现被认为落后，已获 25 👍 和持续关注。  
   [链接](https://github.com/anomalyco/opencode/issues/28567)

3. **[#12308] [CLOSED] Entra Authentication for MCP doesn't work**  
   **重要性**：中高。OAuth 配置中 `resource` 参数错误导致 Azure Entra ID 认证失败，影响企业用户。  
   [链接](https://github.com/anomalyco/opencode/issues/12308)

4. **[#5444] [CLOSED] MCP with oauth doesn't work**  
   **重要性**：中高。远程 MCP OAuth 流程无法启动，工具提示不匹配，是多个 OAuth 问题的代表。  
   [链接](https://github.com/anomalyco/opencode/issues/5444)

5. **[#21090] [OPEN] Opencode - Always "error=Model tried to call unavailable tool"**  
   **重要性**：高。核心功能缺陷，模型频繁调用不可用工具，导致代码分析等基本操作失败，影响用户体验。  
   [链接](https://github.com/anomalyco/opencode/issues/21090)

6. **[#31119] [OPEN] [BUG]: Error: no such column: name**  
   **重要性**：中高。升级后应用因数据库错误无法使用，涉及数据迁移或 schema 问题，阻碍新版本 adoption。  
   [链接](https://github.com/anomalyco/opencode/issues/31119)

7. **[#24817] [OPEN] Ctrl+Z closes/suspends OpenCode instead of undoing text input (Linux)**  
   **重要性**：中。Linux 下 Ctrl+Z 被解释为挂起信号而非撤销，是严重的 UX 缺陷，影响多平台一致性。  
   [链接](https://github.com/anomalyco/opencode/issues/24817)

8. **[#33721] [CLOSED] [Feedback] qwen3.7-max/plus service instability on OpenCode Go (Zen API)**  
   **重要性**：中高。付费用户反馈 qwen3.7 模型频繁超时、成功率低，损害对云服务的信任。  
   [链接](https://github.com/anomalyco/opencode/issues/33721)

9. **[#31607] [OPEN] launch opencode 1.17.00 tui may cause crash**  
   **重要性**：中高。Windows 上启动 TUI 即发生段错误，影响稳定性，与 Bun 运行时相关。  
   [链接](https://github.com/anomalyco/opencode/issues/31607)

10. **[#32706] [OPEN] TUI crash with "An error occurred in Effect.tryPromise" on 1.17.0 or higher**  
    **重要性**：中高。新版 TUI 普遍崩溃，错误指向 Effect 系统，是影响广泛的回归问题。  
    [链接](https://github.com/anomalyco/opencode/issues/32706)

## 重要 PR 进展（Top 10）
1. **[#33739] fix(app): preserve terminals across session tabs**  
   **内容**：修复会话切换时终端丢失问题，通过基于服务器身份而非会话 ID 管理终端提供者，提升多标签工作流体验。  
   [链接](https://github.com/anomalyco/opencode/pull/33739)

2. **[#33738] feat(opencode): add experimental MCP tool search**  
   **内容**：引入实验性 MCP 工具搜索控制面（`mcp_search`, `mcp_describe`, `mcp_call`），隐藏直接工具 schema 以简化界面，保持权限与取消行为。  
   [链接](https://github.com/anomalyco/opencode/pull/33738)

3. **[#33737] [needs:issue, needs:compliance] fix(event): remove directory filter from SSE stream**  
   **内容**：修复 SSE 事件处理中因目录精确匹配导致消息被静默丢弃的问题，确保 TUI 消息可见性。  
   [链接](https://github.com/anomalyco/opencode/pull/33737)

4. **[#32480] [contributor] feat(mcp): surface tool progress**  
   **内容**：将 MCP 进度通知集成到 OpenCode 现有“运行中工具”进度显示中，改善长时间运行工具的用户反馈。  
   [链接](https://github.com/anomalyco/opencode/pull/32480)

5. **[#33281] feat(cli): add standalone v2 session flow**  
   **内容**：新增 `--standalone` 模式，为 TUI 启动认证的私有服务器子进程，通过 v2 API 创建会话并管理数据提供者。  
   [链接](https://github.com/anomalyco/opencode/pull/33281)

6. **[#32936] [contributor] feat(mcp): support resource subscriptions**  
   **内容**：为 MCP 添加资源订阅支持，当服务器支持 `resources` 时，OpenCode 可订阅变更通知。  
   [链接](https://github.com/anomalyco/opencode/pull/32936)

7. **[#32943] [contributor] feat(mcp): support templates and completion**  
   **内容**：实现 MCP 资源模板与完成功能，支持 `resources/templates/list`，增强动态资源交互能力。  
   [链接](https://github.com/anomalyco/opencode/pull/32943)

8. **[#32478] [contributor] feat(mcp): publish resource list change events**  
   **内容**：当 MCP 服务器广播资源列表变更时，OpenCode 发布相应事件，实现资源动态更新。  
   [链接](https://github.com/anomalyco/opencode/pull/32478)

9. **[#33518] feat(vscode): add hostname setting, and add port to title**  
   **内容**：VSCode 插件新增主机名设置，启动 OpenCode 时传递 `--hostname` 参数，并在标题显示端口，改善远程开发体验。  
   [链接](https://github.com/anomalyco/opencode/pull/33518)

10. **[#31860] [CLOSED] [contributor] fix(cli): check for browser opener before spawning**  
    **内容**：修复容器环境中 `opencode web` 因缺少 `xdg-open` 而崩溃的问题，先检查浏览器打开程序是否存在。  
    [链接](https://github.com/anomalyco/opencode/pull/31860)

## 功能需求趋势
从 Issues 和 PRs 可提炼出社区最关注的方向：
- **MCP 标准深化**：需求从基础连接转向完整规范支持，包括资源订阅、模板、进度通知、工具搜索及 OAuth 配置的精细化控制（如 scope 应用）。
- **IDE 集成增强**：VSCode 插件持续改进（如主机名设置），反映对无缝开发环境嵌入的期待。
- **稳定性与性能**：高频反馈 TUI 崩溃（尤其 Windows/Bun）、工具调用失败、会话上下文问题，以及模型服务（如 qwen）的超时与稳定性。
- **新模型与提供商支持**：对 qwen3.7 等新模型的服务质量关注，以及托管提供商集成（v1.17.10 新增）的进一步需求。
- **用户体验与配置**：包括撤销操作（Ctrl+Z）、隐私默认行为、项目级配置覆盖（`opencode.local.json`）等细节优化。

## 开发者关注点
开发者当前的核心痛点与高频需求包括：
- **MCP OAuth 可靠性**：多个 Issue 指出 OAuth 流程中配置（如 `resource`、`scope`）被忽略或错误应用，导致认证失败，尤以 Entra ID 和远程服务器为甚。
- **TUI 稳定性**：Windows 上 Bun 运行时相关的段错误（#31607, #32706）和 Linux 下信号处理问题（#24817）严重干扰日常使用。
- **核心功能可用性**：工具调用“不可用”错误（#21090）和数据库错误（#31119）直接阻碍代码分析等核心工作流。
- **隐私与网络控制**：默认外联行为（#10416）引发对数据隐私和防火墙友好性的担忧，开发者期望更多离线或可控选项。
- **模型服务 SLA**：付费用户对 qwen3.7 系列模型的高超时率（#33721, #33726）表示不满，要求服务端优化或更透明的错误处理。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-25)

## 今日速览
今日社区核心动态围绕 **v0.19.2 发布流程故障** 与 **高危安全漏洞修复** 展开。发布自动化 PR 已紧急修复合并队列兼容性问题，同时针对路径遍历漏洞的修复 PR 已提交。此外，语音听写配置灵活性、TUI 渲染稳定性及 CI 流程优化等用户体验与工程效能议题持续获得高关注。

## 版本发布
- **v0.19.2 发布失败**：自动化发布工作流因合并队列冲突失败（[Issue #5831](https://github.com/QwenLM/qwen-code/issues/5831)），但相关功能已通过预发布版本（v0.19.2-preview.0）提供。
- **关键新特性**：新增 `remote LSP status` 路由，用于远程监控语言服务器状态（[PR #5765](https://github.com/QwenLM/qwen-code/pull/5765) 的一部分）。

## 社区热点 Issues（过去24小时更新）
| # | 标题 | 优先级 | 重要性说明 | 社区反应 |
|---|------|--------|------------|----------|
| [5834](https://github.com/QwenLM/qwen-code/issues/5834) | Source deletion 路径遍历安全漏洞 | P1 | 攻击者可构造 `sourceSlug` 逃逸 `sources` 目录，删除任意文件，需立即修复。 | 评论 2，已触发安全响应流程 |
| [5837](https://github.com/QwenLM/qwen-code/issues/5837) | 助手回复最后一行被截断 | P2 | 多代理运行时 TUI 渲染错误，关键输出丢失，影响任务完成确认。 | 评论 4，附截图与日志证据 |
| [5836](https://github.com/QwenLM/qwen-code/issues/5836) | todos/plans/memories 项目内持久化 | P2 | 当前仅存于 `~/.qwen/`，无法跨设备/团队同步，阻碍协作。 | 评论 3，多人附议 |
| [5819](https://github.com/QwenLM/qwen-code/issues/5819) | 升级后自动切换高价模型 | P2 | 升级静默修改 `settings.json` 导致意外扣费，且中文输出乱码（简转繁）。 | 评论 3，涉及成本与质量 |
| [5831](https://github.com/QwenLM/qwen-code/issues/5831) | v0.19.2 发布失败 | P2 | 发布流水线 `publish` 阶段失败，阻塞版本交付。 | 评论 2，CI 日志指向合并队列问题 |
| [5219](https://github.com/QwenLM/qwen-code/issues/5219) | CI 集成测试仅夜间运行 | P2 | PR 合并后集成测试才执行，回归问题直到发布才暴露，风险高。 | 评论 4，长期工程痛点 |
| [5665](https://github.com/QwenLM/qwen-code/issues/5665) | AI 辅助 PR 常遗漏集成测试更新 | P2 | 与 #5219 协同，揭示 AI 生成代码对 `integration-tests/` 覆盖不足。 | 评论 3，模式已多次出现 |
| [5823](https://github.com/QwenLM/qwen-code/issues/5823) | `/loop` 定时任务无声运行 | P2 | 用户无法列出/停止自己创建的 cron 任务，可能导致资源滥用。 | 评论 2，涉及后台任务可见性 |
| [5800](https://github.com/QwenLM/qwen-code/issues/5800) | TUI 静态模式最后一行被覆盖 | P2 | 回复高度超过终端时，最后一行在完成瞬间消失，上游 Ink 问题。 | 评论 3，复现步骤明确 |
| [5789](https://github.com/QwenLM/qwen-code/issues/5789) | 新用户默认启用状态行 | P3 | 新用户首次启动无上下文信息（模型、分支等），需手动 `/statusline`。 | 评论 3，易用性改进 |

## 重要 PR 进展（过去24小时更新）
| # | 标题 | 类型 | 内容摘要 | 状态 |
|---|------|------|----------|------|
| [5832](https://github.com/QwenLM/qwen-code/pull/5832) | ci(release): 使发布流程兼容合并队列 | 修复 | 移除 `--delete-branch` 并调整自动合并逻辑，防止发布 PR 被合并队列阻塞。 | OPEN |
| [5829](https://github.com/QwenLM/qwen-code/pull/5829) | fix(desktop): 删除前拒绝不安全源标识符 | 修复 | 在路径解析前校验 `sourceSlug`，阻止 `../` 等遍历序列，修复 #5834。 | OPEN |
| [5808](https://github.com/QwenLM/qwen-code/pull/5808) | fix(cli): 用户中止时取消待处理的循环唤醒 | 修复 | 按 `Esc` 中止自步调 `/loop` 时，同时清除待定唤醒任务，防止无声续跑。 | OPEN |
| [5817](https://github.com/QwenLM/qwen-code/pull/5817) | feat(cli): 支持用户自定义语音关键词文件 | 功能 | 新增 `general.voice.keytermsFile` 设置，允许扩展 ASR 偏置词表。 | OPEN |
| [5835](https://github.com/QwenLM/qwen-code/pull/5835) | fix(core): 重应用提供商安装计划时保留选中模型 | 修复 | 避免重新认证/令牌刷新等操作意外重置当前活动模型。 | OPEN |
| [5661](https://github.com/QwenLM/qwen-code/pull/5661) | feat(tui): 按工具类型分区显示 | 功能 | 将读/搜工具折叠为摘要行，变异工具单独展示，简化 TUI 输出。 | OPEN |
| [5827](https://github.com/QwenLM/qwen-code/pull/5827) | fix(core): OpenAI 流水线添加流式空闲超时 | 修复 | 防止流式响应中 chunk 间长时间无数据导致连接挂起。 | CLOSED |
| [5616](https://github.com/QwenLM/qwen-code/pull/5616) | feat(memory): 自动生成技能持久化前需确认 | 功能 | 背景技能评审代理生成的技能需用户确认后才加入技能库，避免污染。 | OPEN |
| [4943](https://github.com/QwenLM/qwen-code/pull/4943) | feat

</details>

---
*本日报由 [Big Model Radar](https://github.com/zx0828/big_model_radar) 自动生成。*