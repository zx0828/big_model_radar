# AI CLI 工具社区动态日报 2026-06-26

> 生成时间: 2026-06-26 00:37 UTC | 覆盖工具: 7 个

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

# AI CLI 工具生态横向对比分析报告 (2026-06-26)

## 1. 生态全景
当前 AI CLI 工具生态整体处于 **“功能爆发与稳定性攻坚”并存** 的阶段。各主流工具均在积极拥抱 **MCP（模型上下文协议）** 以扩展工具生态，但大规模工具集成、认证链可靠性及跨平台兼容性已成为普遍性挑战。同时，**成本与资源控制的透明度**、**企业级管控能力** 以及 **会话状态管理的复杂性** 正从边缘需求上升为核心竞争力。社区反馈显示，用户对工具的期望已从“能完成任务”转向“可预测、可控、安全地完成”，推动各项目在快速迭代中持续修复深层稳定性与体验缺陷。

## 2. 各工具活跃度对比
| 工具 | 活跃 Issues (Top 10) | 重要 PR 数量 | Release 数量 | 关键动态摘要 |
|------|---------------------|--------------|--------------|--------------|
| **Claude Code** | 10 | 1 | 1 | v2.1.193 发布，聚焦 `autoMode` 改进；社区核心矛盾在 macOS 权限漏洞与 ARM64 支持。 |
| **OpenAI Codex** | 10 | 10 | 2 | rust-v0.142.2 与 zsh 集成发布；配额异常与认证障碍引发大规模用户不满。 |
| **Gemini CLI** | 10 | 10 | 2 | v0.50.0-preview.1 发布，引入 DI 架构；子代理挂起与思维泄漏是核心质量风险。 |
| **GitHub Copilot CLI** | 10 | 1 | 0 | 无新版本；认证与会话可靠性问题突出，企业环境适配需求强烈。 |
| **Kimi Code CLI** | 2 | 0 | 0 | 社区活动极低；新报告 MCP 大规模工具连接故障与 Linux 界面渲染抖动。 |
| **OpenCode** | 10 | 10 | 1 | v1.17.11 发布，新增会话快照回滚；Windows Bun 崩溃与内存泄漏是最高优先级。 |
| **Qwen Code** | 10 | 10 | 1 | v0.19.2-nightly 发布，修复 `web_fetch`；Windows PowerShell 进程泄漏导致 OOM。 |

## 3. 共同关注的功能方向
- **MCP 协议深度集成与可靠性**：几乎所有工具

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告  
*数据截止：2026-06-26 | 来源：github.com/anthropics/skills*

---

## 1. 热门 Skills 排行

### 🛠️ skill-creator 工具链修复（核心基础设施）
- **功能**：创建、评估和优化 Skills 的 CLI 工具集（`run_eval.py`、`run_loop.py` 等）
- **社区热点**：集中爆发 **`run_eval.py` 报告 0% recall** 的致命 bug（Issue #556），导致描述优化循环失效；同时暴露 **Windows 兼容性缺陷**（子进程调用、编码、管道读取）、YAML 特殊字符处理、UTF-8 多字节字符 panic 等问题。多个 PR（#1298、#1099、#1050、#362、#539、#361、#1323）和 Issues 交叉讨论，成为影响所有技能开发者的最高优先级议题。
- **状态**：多个相关 PR 均为 **OPEN**，修复正在进行中  
  🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298) | [PR #1323](https://github.com/anthropics/skills/pull/1323) | [Issue #556](https://github.com/anthropics/skills/issues/556)

### 📄 document-typography skill
- **功能**：预防 AI 生成文档的排版问题（孤词、寡行、编号错位等），提升输出美观度
- **社区热点**：讨论如何将排版规则系统化集成到文档生成流程，作为通用文档技能的基础增强
- **状态**：OPEN  
  🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

### 🧪 testing-patterns skill
- **功能**：覆盖测试全栈——测试哲学、单元测试（AAA 模式）、React 组件测试（Testing Library）等
- **社区热点**：社区对“测试即代码”的最佳实践需求强烈，此技能提供结构化指导，有望成为开发流程标准配置
- **状态**：OPEN  
  🔗 [PR #723](https://github.com/anthropics/skills/pull/723)

### 🔍 skill-quality-analyzer & skill-security-analyzer
- **功能**：元技能，从结构、文档、示例、资源等维度评估其他 Skills 的质量与安全性
- **社区热点**：随着 Skills 数量增长，质量门控和安全审计成为社区自发推动的治理需求
- **状态**：OPEN  
  🔗 [PR #83](https://github.com/anthropics/skills/pull/83)

### 🚀 AppDeploy skill
- **功能**：通过 [AppDeploy](https://appdeploy.ai/) 部署和管理全栈 Web 应用，实现从代码到生产的闭环
- **社区热点**：将 Claude 能力延伸至运维部署，满足“一次提示，完整上线”的实用场景
- **状态**：OPEN  
  🔗 [PR #360](https://github.com/anthropics/skills/pull/360)

### 📊 codebase-inventory-audit skill
- **功能**：系统化审计代码库，识别孤立代码、未使用文件、文档缺口等，输出 `CODEBASE-STATUS.md`
- **社区热点**：企业级代码维护和清理的刚需，提供单一事实源的技术债管理
- **状态**：OPEN  
  🔗 [PR #147](https://github.com/anthropics/skills/pull/147)

### 🧠 shodh-memory skill
- **功能**：为 AI 代理提供持久化记忆系统，跨对话保持上下文，定义 `proactive_context` 调用时机与记忆结构
- **社区热点**：长运行代理的状态管理成为多轮交互场景的关键，此技能提供符号化记忆方案
- **状态**：OPEN  
  🔗 [PR #154](https://github.com/anthropics/skills/pull/154)

---

## 2. 社区需求趋势

从 Issues 高频话题提炼出新 Skill 方向：

- **安全与治理**：命名空间滥用（#492）、代理治理模式（#412）、SharePoint 权限控制（#1175）—— 企业级安全模型成为焦点
- **组织协作**：组织内技能共享（#228）—— 团队级技能库与权限管理需求迫切
- **平台集成**：AWS Bedrock（#29）、MCP 协议（#16）—— 技能需与外部 AI 平台和工具链互通
- **文档处理深化**：排版（#514）、PDF/DOCX/ODT 修复（#538、#541、#486）—— 格式支持与稳定性并重
- **开发工具链**：测试（#723）、代码审计（#147）、质量分析（#83）—— Claude 深度融入 SDLC

---

# Claude Code 社区动态日报 (2026-06-26)

**数据来源**: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

### 1. 今日速览
今日社区焦点集中于 **v2.1.193 版本发布** 带来的 `autoMode.classifyAllShell` 新特性，以及围绕 **权限管理、成本控制和跨平台兼容性** 的持续讨论。macOS 权限绕过漏洞（#61415）和 ARM64 平台支持问题（#39636）引发高度关注，同时开发者对 **TaskCreate 系统提醒的干扰** 和 **token 消耗不可控** 的反馈尤为突出。

---

### 2. 版本发布
- **v2.1.193** (今日发布)
  - 新增 `autoMode.classifyAllShell` 设置，可将所有 Bash/PowerShell 命令路由至自动模式分类器。
  - 在转录、提示 toast 及 `/permissions` 命令中显示自动模式拒绝原因。
  - [发布说明链接](https://github.com/anthropics/claude-code/releases/tag/v2.1.193)

---

### 3. 社区热点 Issues (Top 10)
| # | 标题 | 状态 | 关键点 | 社区反应 |
|---|---|---|---|---|
| [#61415](https://github.com/anthropics/claude-code/issues/61415) | [BUG] macOS: 绕过权限模式无法启用 | OPEN | 核心安全功能缺陷，影响 macOS 用户使用“绕过权限”模式。 | 63 评论，24 👍，高活跃度，疑似权限系统深层问题。 |
| [#61869](https://github.com/anthropics/claude-code/issues/61869) | [Bug] Anthropic API Error: opus-plan 模型需使用额度 | CLOSED | 1M 上下文窗口的 opus-plan 模型触发额度检查错误。 | 61 评论，16 👍，涉及成本与模型配置，已关闭但讨论多。 |
| [#39636](https://github.com/anthropics/claude-code/issues/39636) | [BUG] Cowork VM 在 Snapdragon X Plus (ARM64) 无法启动 | OPEN | 关键硬件平台（高通 ARM64）兼容性问题，影响新设备用户。 | 29 评论，9 👍，长期未解决，反映 ARM 生态支持不足。 |
| [#51088](https://github.com/anthropics/claude-code/issues/51088) | [Bug] 自动压缩陷入循环导致 token 过度消耗 | CLOSED | 自动化功能缺陷导致资源失控，引发成本担忧。 | 7 评论，1 👍，已关闭，但暴露资源管理风险。 |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | [BUG] Windows: 应用崩溃后遗留 Silo/Job Object 导致无法启动 | OPEN | 严重稳定性问题，需重启或注销才能恢复。 | 6 评论，5 👍，影响 Windows 用户体验。 |
| [#71478](https://github.com/anthropics/claude-code/issues/71478) | [BUG] VS Code 扩展无警告恢复大型会话，快速耗尽额度 | OPEN | 扩展行为导致意外高成本，缺乏用户控制。 | 4 评论，0 👍，新报告，涉及 IDE 集成与成本预警。 |
| [#54179](https://github.com/anthropics/claude-code/issues/54179) | [BUG] macOS Desktop SSH: 多会话导致认证令牌失效 | OPEN | GUI SSH 功能在多会话场景下存在认证竞态条件。 | 3 评论，2 👍，影响远程工作流。 |
| [#60323](https://github.com/anthropics/claude-code/issues/60323) | [enhancement] TaskCreate 提醒无视 CLAUDE.md 中的“禁止使用”指令 | OPEN | 系统提醒缺乏对用户自定义规则的尊重，造成干扰。 | 3 评论，5 👍，反映系统提示与用户意图冲突。 |
| [#70958](https://github.com/anthropics/claude-code/issues/70958) | [Bug] 子代理 API 401 错误被错误报告为“用户中断” | OPEN | 错误信息误导，掩盖真实的认证失败问题。 | 2 评论，1 👍，影响调试与代理链可靠性。 |
| [#66027](https://github.com/anthropics/claude-code/issues/66027) | [BUG] 路径作用域规则文件中的 `@import` 被急切加载 | OPEN | 规则系统作用域隔离失效，可能导致意外规则应用。 | 2 评论，2 👍，涉及核心配置系统的正确性。 |

---

### 4. 重要 PR 进展
| # | 标题 | 状态 | 内容摘要 | 影响 |
|---|---|---|---|---|
| [#63686](https://github.com/anthropics/claude-code/pull/63686) | Bump stale and autoclose timeouts from 14 to 90 days | CLOSED | 将 issue 的 `stale`（标记为陈旧）和 `autoclose`（自动关闭）宽限期从 14 天延长至 90 天。 | **社区管理**：减少 issue 因短期无活动而被误关，鼓励更长期的讨论与修复周期。 |

---

### 5. 功能需求趋势
从 Issues 中提炼出社区最关注的方向：
- **权限与安全模型精细化**：对 `autoMode`、`bypass permissions` 等机制的反馈集中，要求更透明、可控的权限管理（如 #61415, #71463）。
- **成本控制与资源管理**：多次出现 token 消耗失控（#51088, #71478, #71461）和额度错误（#61869, #71476）的报告，急需更清晰的用量监控与预警机制。
- **跨平台与硬件兼容性**：ARM64（#39636）、Windows 稳定性（#53247, #67576）、macOS GUI SSH（#54179）等问题凸显多平台一致性的挑战。
- **系统提示的智能抑制**：针对 `TaskCreate` 等系统提醒的反复干扰（#60323, #64192, #62323），社区希望基于上下文（如计划模式、活跃文件）自动静音。
- **UI/UX 与可访问性**：包括本地化支持（#71479）、屏幕阅读器快捷键（#71470）、TUI 鼠标交互（#71465）等改进需求。
- **代理与工具链可靠性**：子代理认证错误处理（#70958）、工具输出解析（#47352）、技能渲染（#71464）等影响自动化工作流的稳定性。

---

### 6. 开发者关注点
开发者反馈中的核心痛点与高频需求：
1. **权限与安全**：`bypass permissions` 在 macOS 的失效（#61415）是当前最严重的功能缺陷，直接威胁工作流。
2. **成本不可预测性**：自动压缩循环（#51088）、VS Code 扩展无警告恢复会话（#71478）等导致 token 意外耗尽，缺乏有效的中间层控制。
3. **平台碎片化**：ARM64 支持（#39636）、Windows 启动残留（#53247）、RDP 剪贴板（#67576）等问题表明，非 x86/主流环境仍是薄弱环节。
4. **系统提示过载**：`TaskCreate` 提醒无视用户规则（#60323）被多次提及，反映系统提示逻辑与用户实际工作模式脱节。
5. **数据持久化与一致性**：tmux 下转录文件未实时写入（#70632）、规则文件导入作用域错误（#66027）等，影响审计与配置可靠性。
6. **认证与代理链**：多 SSH 会话认证冲突（#54179）、子代理 401 错误误报（#70958）暴露了分布式场景下的会话管理缺陷。

---
**报告生成时间**: 2026-06-26  
**数据范围**: 过去 24 小时 GitHub Issues/PRs 更新

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-26)

**数据来源**: [github.com/openai/codex](https://github.com/openai/codex)  
**统计周期**: 过去24小时 (截至 2026-06-26)

---

## 1. 今日速览
今日社区核心围绕 **配额消耗异常** 和 **认证障碍** 展开，多个高热度 Issue 指向 Codex Pro/Plus 用户的预算在极短时间内被耗尽，同时手机号验证流程成为新用户登录的拦路虎。技术层面，Rust 客户端发布新版本优化了 MCP 工具发现与 macOS 网络代理，而 PR 活动聚焦于 MCP 运行时路由、应用服务器分析及代码模式进程隔离等架构改进。

---

## 2. 版本发布
- **rust-v0.142.2** 发布
  - MCP 工具现在默认使用工具搜索（若支持），提升工具发现能力，同时保持与旧模型/提供商的兼容性 ([#29486](https://github.com/openai/codex/pull/29486))。
  - macOS 认证客户端在启用 `respect_system_proxy` 时可遵循系统代理、PAC 和 WPAD 设置 ([#26709](https://github.com/openai/codex/pull/26709))。
- **codex-zsh-v0.1.0** 发布，提供 Zsh 集成支持 ([release](https://github.com/openai/codex/releases/tag/codex-zsh-v0.1.0))。

---

## 3. 社区热点 Issues (Top 10)
以下 Issues 基于评论数、👍 数及问题严重性筛选：

| # | 标题 | 关键问题 | 社区反应 | 链接 |
|---|------|----------|----------|------|
| 28879 | Codex (gpt-5.5, Plus plan) — rate-limit cost per token jumped ~10-20x | **配额消耗异常**：自 6 月 16 日起，单次提示的配额消耗激增 10-20 倍，5 小时预算在 2-3 次提示内耗尽。 | 极高 (152 评论, 302 👍) | [链接](https://github.com/openai/codex/issues/28879) |
| 25749 | Codex requires verification of an inaccessible legacy phone number | **认证障碍**：使用 Google OAuth 登录后，仍被要求验证已无法访问的旧手机号，无恢复路径。 | 高 (64 评论, 38 👍) | [链接](https://github.com/openai/codex/issues/25749) |
| 9203 | Please make "/undo" back | **功能缺失**：用户强烈要求恢复 `/undo` 命令，以挽回意外删除/修改的文件（尤其未提交至 Git 时）。 | 高 (50 评论, 296 👍) | [链接](https://github.com/openai/codex/issues/9203) |
| 20320 | ChatGPT asking phone number verify but didn't send any code yet | **认证流程缺陷**：升级前要求手机验证，但未发送验证码，导致用户无法登录升级。 | 中高 (43 评论, 12 👍) | [链接](https://github.com/openai/codex/issues/20320) |
| 25719 | Codex Desktop for macOS repeatedly triggers `syspolicyd` / `trustd` CPU and memory runaway | **性能/稳定性**：macOS 桌面版引发系统进程 CPU/内存 runaway，需重启才能恢复。 | 中高 (34 评论, 54 👍) | [链接](https://github.com/openai/codex/issues/25719) |
| 5957 | Auto compaction causes GPT-5-Codex to lose the plot | **上下文管理缺陷**：自动压缩导致模型忘记任务进度、已编辑文件，中途停止工作。 | 中 (31 评论, 9 👍) | [链接](https://github.com/openai/codex/issues/5957) |
| 28978 | Desktop app 26.616: new conversations fail with "Invalid request: missing field `inputSchema`" | **回归缺陷**：26.616 版本后，新对话因 MCP 输入模式错误而失败，CLI 同配置正常。 | 中 (25 评论, 30 👍) | [链接](https://github.com/openai/codex/issues/28978) |
| 29955 | Quota drained instantly: 100 credits gone after 1 message | **配额异常**：Pro 5x 用户单次提示后 100 积分瞬间清零，5 小时限额重置为 0%。 | 中 (23 评论, 4 👍) | [链接](https://github.com/openai/codex/issues/29955) |
| 17265 | Codex does not auto-refresh routed MCP OAuth tokens | **MCP 认证缺陷**：MCP 服务器 OAuth 令牌过期后，Codex 不会自动刷新，导致工具调用失败。 | 中 (19 评论, 39 👍) | [链接](https://github.com/openai/codex/issues/17265) |
| 30002 | Server-side quota accounting over-reports consumption after 5h reset | **配额计算错误**：5 小时重置后，Pro 账户在约 41 分钟内即达限额，而实际计费仅 1.35M tokens（此前全天可用 156M）。 | 中 (19 评论, 4 👍) | [链接](https://github.com/openai/codex/issues/30002) |

---

## 4. 重要 PR 进展 (Top 10)
以下 PR 基于描述的功能影响、架构修改或修复范围筛选：

| # | 标题 | 变更内容 | 影响 | 链接 |
|---|------|----------|------|------|
| 30109 | Test selected capabilities across availability and resume | 新增端到端测试，覆盖 World State、executor 技能、插件元数据、MCP 进程、连接器、动态环境及恢复功能。 | 提升多环境恢复可靠性 | [链接](https://github.com/openai/codex/pull/30109) |
| 29934 | Emit app name and template ID in MCP app context | 在 MCP 工具调用应用上下文中增加可选的 `appName` 和 `templateId` 字段，用于下游分析。 | 改进应用级遥测 | [链接](https://github.com/openai/codex/pull/29934) |
| 30093 | Project selected plugin runtime by environment availability | 将选定的插件元数据与其运行时 MCP 进程解耦，根据环境可用性动态投影。 | 增强插件运行时管理 | [链接](https://github.com/openai/codex/pull/30093) |
| 30127 | Route MCP elicitation to its live runtime | 修复 MCP 提示在等待用户时，环境可用性变更导致其路由到过期运行时的竞态问题。 | 提升 MCP 调用稳定性 | [链接](https://github.com/openai/codex/pull/30127) |
| 30146 | add single required CI gate | 用单一、版本控制的 CI 门（`pr-ci`）替换多个 GitHub Actions 状态检查，简化 PR 验证流程。 | 改进 CI 可维护性 | [链接](https://github.com/openai/codex/pull/30146) |
| 30147 | Use managed defaults for TUI threads | TUI 创建新线程时，从 `configRequirements/read` 读取托管默认模型设置（模型、推理强度、服务层级）。 | 统一 TUI 初始化行为 | [链接](https://github.com/openai/codex/pull/30147) |
| 30145 | Reuse walk inventory for environment skill metadata | 复用环境技能发现时的 `fs/walk` 文件清单，避免重复扫描，提升性能。 | 优化环境发现效率 | [链接](https://github.com/openai/codex/pull/30145) |
| 29375 | Support npm marketplace plugin sources | 修复插件市场加载器，支持 `{"source":"npm", ...}` 格式，使 npm 后端插件可被正确发现和安装。 | 扩展插件生态 | [链接](https://github.com/openai/codex/pull/29375) |
| 30141 | core: load hook-backed user instructions | 在新建运行时上下文时，解析钩子（hook）支持的用户指令，与全局 `AGENTS.md` 指令生命周期对齐。 | 增强指令定制能力 | [链接](https://github.com/openai/codex/pull/30141) |
| 30144 | fix terminal rollout durability | 修复终端 `TurnComplete`/`TurnAborted` 事件在滚动刷新后可能延迟交付的耐久性问题，确保有序远程写入。 | 提升会话持久性可靠性 | [链接](https://github.com/openai/codex/pull/30144) |

---

## 5. 功能需求趋势
从 Issues 标签与内容提炼，社区最关注的方向：
- **配额与计费透明化**：大量 Issue 质疑 rate-limit 计算逻辑、5 小时重置后异常消耗，要求更精确的本地/服务器端配额追踪。
- **认证与账户恢复**：手机号验证障碍、MCP OAuth 令牌刷新、无恢复路径的账户锁定是高频痛点。
- **TUI/CLI 交互增强**：`/undo` 命令回归、屏幕阅读器友好模式、禁用自动更新、`codex exec resume` 无提示继续等需求集中。
- **跨平台稳定性**：macOS 系统集成（代理、syspolicyd）、Windows 沙盒（`apply_patch` 错误、内存压力）问题突出。
- **MCP 与工具集成**：工具搜索默认化、MCP 运行时路由、插件市场（npm）支持表明生态集成是重点。
- **IDE 与移动端支持**：VS Code Remote-SSH 集成问题、iOS 无桌面依赖的远程主机需求增长。

---

## 6. 开发者关注点
开发者反馈的**核心痛点**：
1. **配额消耗不可预测**：Pro/Plus 用户普遍遭遇预算异常快速耗尽，本地 token 计数与服务器配额扣除严重不符，影响生产环境使用信心。
2. **认证流程断裂**：依赖手机号验证的旧流程与当前 OAuth/MFA 体系冲突，导致合法用户被锁死，缺乏人工或自动恢复通道。
3. **性能与资源泄漏**：macOS `syspolicyd`/`trustd`  runaway、Windows 内存压力、sandbox GPU 访问缺失等表明系统集成存在资源管理缺陷。
4. **工具调用可靠性**：`apply_patch` 在 Windows 沙盒频繁失败、MCP 令牌不刷新、上下文压缩导致任务丢失，影响自动化工作流稳定性。
5. **跨环境一致性**：Desktop、CLI、TUI、IDE 扩展在相同配置下行为差异（如 MCP 错误、配额计算）引发困惑，需统一语义。

**高频需求**：
- 恢复 `/undo` 等关键 TUI 命令。
- 提供禁用自动更新选项。
- 增强移动端对无桌面依赖的远程 Linux 主机支持。
- 改善模型智能感知（用户反馈 gpt-5.5 近期表现下降）。

---

*报告生成时间：2026-06-26*  
*数据采集：GitHub Issues/PRs 过去 24 小时更新*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-25)

## 1. 今日速览
- **新预览版发布**：v0.50.0-preview.1 发布，重点修复了发布流程中的安全验证问题并引入了工具注册的依赖注入改进。
- **核心稳定性受关注**：多个高优先级 Issue 聚焦于子代理（如通用代理、浏览器代理）的挂起、恢复逻辑错误及资源泄漏问题，社区反馈活跃。
- **安全与内存系统**：围绕 Auto Memory 的隐私保护、无效补丁处理以及信任对话框的披露准确性，有多项修复正在推进。

## 2. 版本发布
- **v0.50.0-preview.1**：此预览版包含三项关键变更：
    1.  修复了发布验证过程中 `npm ci` 忽略脚本的问题。
    2.  改进了 CI，防止工作区二进制文件在发布验证中被遮蔽。
    3.  实现了工具注册的依赖注入（DI）架构。
    [发布说明](https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0-preview.1)
- **v0.49.0**：最新稳定版，包含自动内存、CI 依赖更新等改进。
    [发布说明](https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0)

## 3. 社区热点 Issues (Top 10)
| # | 标题 | 优先级 | 重要性说明 | 社区反应 |
|---|------|--------|------------|----------|
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | 通用代理挂起 | P1 | 基础功能缺陷：代理在简单任务（如创建文件夹）时无限挂起，严重影响可用性。 | 7条评论，**8个赞**，社区高度关注。 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | 子代理在达到最大轮次后错误报告目标成功 | P1 | 逻辑错误：`codebase_investigator` 子代理在超时后仍返回 `success`，掩盖了中断，导致用户误解。 | 8条评论，反映子代理状态管理混乱。 |
| [#26384](https://github.com/google-gemini/gemini-cli/issues/26384) | 高音量 shell 命令执行时“打开文件过多”错误 | P1 | 稳定性问题：大规模操作导致系统文件描述符耗尽，引发连锁故障。 | 5条评论，影响大型工作流。 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | 添加确定性脱敏并减少自动内存日志记录 | P2 | **安全与隐私**：自动内存在提取前已将内容发送至模型，存在敏感信息泄露风险。 | 5条评论，涉及核心安全设计。 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令完成后卡在“等待输入”状态 | P1 | 用户体验缺陷：命令已结束但界面显示仍在等待输入，造成困惑。 | 4条评论，**3个赞**，常见于简单命令。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | 浏览器子代理在 Wayland 下失败 | P1 | 平台兼容性：Linux Wayland 用户无法使用浏览器自动化功能。 | 4条评论，影响特定用户群。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 不足够使用技能和子代理 | P2 | 核心智能缺陷：模型缺乏主动调用可用工具（技能/子代理）的能力，需用户显式指令。 | 6条评论，反映代理自主性不足。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 评估 AST 感知文件读取、搜索和映射的影响 | P2 | 性能与精度探索：研究 AST 工具能否减少轮次、降低噪音、提升代码导航精度。 | 7条评论，是重要的性能优化方向。 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | 浏览器代理忽略 settings.json 覆盖（如 maxTurns） | P2 | 配置一致性：子代理未正确继承全局/项目配置，导致行为不可控。 | 3条评论，涉及配置管理漏洞。 |
| [#26522](https://github.com/google-gemini/cli/issues/26522) | 阻止自动内存无限重试低信号会话 | P2 | 资源效率：低价值会话被反复尝试处理，浪费计算资源。 | 5条评论，与内存系统效率相关。 |

## 4. 重要 PR 进展 (Top 10)
| # | 标题 | 类型 | 内容摘要 | 影响 |
|---|------|------|----------|------|
| [#28015](https://github.com/google-gemini/gemini-cli/pull/28015) | feat(caretaker): 实现 Cloud Run webhook 摄取服务 | 新功能 | 为 Caretaker Agent 构建 GitHub webhook 入口，支持签名验证、Firestore 存储和 Pub/Sub 发布。 | **架构级**：增强自动化运维能力。 |
| [#27971](https://github.com/google-gemini/gemini-cli/pull/27971) | fix(core): 从清理的历史轮次中剥离思维并解决思维泄漏 | 修复 | 修复“思维泄漏”Bug：模型内部推理思维意外泄露到历史记录，导致后续轮次出现模仿思维或无限循环。 | **核心质量**：提升对话连贯性和稳定性。 |
| [#28153](https://github.com/google-gemini/gemini-cli/pull/28153) | fix(core): 忽略会话重置后的陈旧 update_topic 调用 | 修复 (P1) | 防止在用户执行 `/clear` 后，模型发出的旧 `update_topic` 调用错误修改新会话的主题状态。 | **状态管理**：修复会话隔离问题。 |
| [#28149](https://github.com/google-gemini/gemini-cli/pull/28149) | fix(skills): 在技能资源列表中尊重 .gitignore/.geminiignore | 修复 (P2) | 技能激活时向模型展示的资源列表现在会正确排除被忽略的文件，减少噪音。 | **开发者体验**：更精准的技能上下文。 |
| [#28148](https://github.com/google-gemini/gemini-cli/pull/28148) | fix(docker): 从构建器阶段复制打包的产物 | 修复 | 修复 Docker 多阶段构建：运行时阶段现在能正确从 `builder` 阶段复制打包好的 `.tgz` 文件。 | **部署**：修复容器镜像构建失败。 |
| [#28143](https://github.com/google-gemini/gemini-cli/pull/28143) | fix(core): 按服务器解析 MCP 资源以防止跨服务器混淆 | 修复 | 当多个 MCP 服务器提供相同 URI 的资源时，`read_mcp_resource` 现在能返回正确服务器的内容。 | **安全与正确性**：防止数据源混淆。 |
| [#28142](https://github.com/google-gemini/gemini-cli/pull/28142) | fix(core): 使用 API 密钥时 honor GOOGLE_CLOUD_LOCATION for Vertex AI | 修复 (P2) | 修复 Vertex AI 认证 Bug：使用 API 密钥时，区域配置不再被忽略，请求正确路由到区域端点。 | **云服务集成**：修复区域化部署问题。 |
| [#27915](https://github.com/google-gemini/gemini-cli/pull/27915) | fix(core): 信任对话框披露了从未运行的钩子形状 | 修复 (P1, 安全) | 修复安全披露错误：工作区信任对话框现在准确显示将实际执行的钩子（如 `SessionStart`），而非其逆逻辑。 | **安全**：防止用户被误导，确保透明性。 |
| [#28144](https://github.com/google-gemini/gemini-cli/pull/28144) | fix(cli): 延迟检测可用编辑器以避免缓慢启动 | 修复 | 将编辑器检测从启动时同步执行改为按需延迟执行，显著改善 Windows 等系统上的启动速度。 | **性能**：提升 CLI 启动体验。 |
| [#28147](https://github.com/google-gemini/gemini-cli/pull/28147) | fix(ci): 防止不良 NPM 发布并提升作业崩溃处理 | 修复 (P1) | 强化发布流程：集成测试在 `npm publish` 前运行，避免预览版测试失败后留下“悬空”的 NPM 包。 | **CI/CD 可靠性**：防止无效发布。 |

## 5. 功能需求趋势
从 Issues 标签和讨论中，社区最关注的功能方向包括：
- **代理智能与自主性**：提升子代理（尤其是通用代理、浏览器代理）的可靠性、状态管理及主动调用技能的能力（#21409, #21968, #22323）。
- **安全与隐私强化**：加强自动内存系统的脱敏机制、资源访问控制及信任模型透明度（#26525, #26522, #27915）。
- **性能与资源管理**：优化文件描述符使用、终端渲染性能、编辑器启动速度及 AST 感知工具集成以减少轮次（#26384, #21924, #22745, #28144）。
- **评估与质量基础设施**：建立更稳定、可见的内部评估体系，并推进组件级行为评估（#24353, #23166）。
- **开发者体验与集成**：改善 CLI 自认知（标志、热键）、Docker/Cloud 部署体验及 MCP 服务器兼容性（#21432, #28148, #28015）。

## 6. 开发者关注点
开发者反馈的痛点与高频需求集中在：
- **可靠性第一**：通用代理挂起（#21409）和 Shell 命令卡死（#25166）是当前最受挫的体验问题，急需根本性修复。
- **子代理行为可预测性**：浏览器代理在 Wayland 的兼容性（#21983）、配置忽略（#22267）以及子代理轨迹可见性（#22598）表明需要更统一的子代理管理框架。
- **资源泄漏与稳定性**：文件描述符耗尽（#26384）和思维泄漏（#27971）指向深层资源管理和状态同步问题，影响长时间运行任务。
- **安全合规压力**：自动内存的隐私设计（#26525）和信任对话框准确性（#27915）是安全敏感用户的核心关切。
- **性能优化需求**：启动慢（#28144）和 AST 工具评估（#22745）反映了用户对大型代码库操作效率的期待。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-26)

**数据来源**: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)  
**统计周期**: 过去24小时 (截至 2026-06-26)

---

## 1. 今日速览
今日无新版本发布，但社区讨论活跃。核心焦点集中在**认证与会话可靠性问题**（如模型列表加载失败、恢复会话后功能受限）、**MCP（模型上下文协议）功能的深化与体验优化**，以及**企业级环境下的部署与策略集成**需求。多个高赞 Issue 反映出用户对 CLI 在复杂工作流中稳定性的高度关注。

---

## 2. 版本发布
*过去24小时内无新 Release。*

---

## 3. 社区热点 Issues (Top 10)
以下挑选基于社区反馈热度（👍数、评论数）及问题影响范围。

| # | 标题 | 重要性说明 | 社区反应 | 链接 |
|---|------|------------|----------|------|
| **3596** | [area:authentication] Error loading model list: Error: Not authenticated | **高优先级缺陷**：恢复会话后无法使用 `/model` 命令，严重干扰工作流。问题复现明确，已获 11 👍。 | 👍 11, 💬 7 | [链接](https://github.com/github/copilot-cli/issues/3596) |
| **3501** | [area:platform-windows] Scroll bar makes text unalign | **广泛影响的显示缺陷**：Windows 终端因滚动条导致文本错位，影响可读性，影响大量 Windows 用户。 | 👍 9, 💬 5 | [链接](https://github.com/github/copilot-cli/issues/3501) |
| **700** | [area:models] Provide a way to list all the models currently supported | **高频功能需求**：用户希望像 IDE 插件一样清晰查看所有可用模型及倍率信息，评论数最多（14）。 | 👍 4, 💬 14 | [链接](https://github.com/github/copilot-cli/issues/700) |
| **2643** | [area:plugins] preToolUse: silent command rewrite via updatedInput | **插件机制核心缺陷**：钩子即使允许重写命令，仍会触发确认弹窗，破坏自动化流程，影响插件开发者。 | 👍 2, 💬 12 | [链接](https://github.com/github/copilot-cli/issues/2643) |
| **3636** | [area:networking] Bug: Voice mode cannot be enabled - Failed to fetch model catalog | **企业环境典型问题**：公司 VPN 下无法获取语音模型目录，导致语音模式完全不可用，反映网络策略兼容性挑战。 | 👍 5, 💬 3 | [链接](https://github.com/github/copilot-cli/issues/3636) |
| **2956** | [area:mcp] Add "Disable MCP" option to `/mcp show` interactive menu | **MCP 体验优化**：已关闭，但解决了 `/mcp show` 菜单中无法临时禁用服务器的问题，提升 MCP 管理便捷性。 | 👍 5, 💬 4 | [链接](https://github.com/github/copilot-cli/issues/2956) |
| **3925** | [area:platform-linux] Linux: AppImage leaks bundled LD_LIBRARY_PATH | **Linux 严重兼容性缺陷**：AppImage 泄露库路径导致子进程（如 git）HTTPS 失败，阻塞会话创建，影响 Linux 用户。 | 👍 0, 💬 1 | [链接](https://github.com/github/copilot-cli/issues/3925) |
| **3909** | [area:enterprise] Feature: enterprise/org server-managed settings | **企业级关键需求**：请求组织管理员能集中推送配置（尤其是环境变量）到本地 CLI，弥补当前仅限云环境的不足。 | 👍 0, 💬 2 | [链接](https://github.com/github/copilot-cli/issues/3909) |
| **3680** | [area:sessions] resumed session blocks access to model picker | **会话管理缺陷**：与 #3596 类似，恢复会话后模型选择器被阻止，但其他命令正常，问题定位需深入。 | 👍 0, 💬 1 | [链接](https://github.com/github/copilot-cli/issues/3680) |
| **3932** | [area:models] Display monthly AIC quota and usage in Copilot CLI | **功能对齐需求**：要求 CLI 显示月度 AIC 配额使用情况（如 IDE 插件所示），提升用量透明度。 | 👍 0, 💬 0 | [链接](https://github.com/github/copilot-cli/issues/3932) |

---

## 4. 重要 PR 进展
过去24小时仅 1 个 PR 更新，但涉及配置管理基础。

| # | 标题 | 内容说明 | 状态 | 链接 |
|---|------|----------|------|------|
| **3928** | Add .gitignore and settings configuration | 添加 `.gitignore` 文件及设置配置相关改动，可能旨在改善项目配置管理与忽略规则。 | Open | [链接](https://github.com/github/copilot-cli/pull/3928) |

---

## 5. 功能需求趋势
从 Issues 中提炼出社区最关注的功能方向：

1.  **MCP 生态深化**：不止于基础连接，更关注**管理便捷性**（如菜单禁用）、**协议支持完整性**（忽略服务器指令）及**企业策略集成**（服务器被策略阻止）。
2.  **企业级管控能力**：集中配置推送、Azure DevOps 工作项集成、企业网络/策略适配（如 VPN、防火墙）。
3.  **会话与状态管理可靠性**：恢复会话后功能一致性、会话列表准确性、autopilot 状态持久性。
4.  **UI/UX 与可访问性精细打磨**：细粒度主题定制、时间戳显示、滚动/鼠标行为修复、命令异步化（如 `/mcp show`）。
5.  **模型与用量透明度**：列出所有模型及倍率、显示月度配额使用情况，向 IDE 体验看齐。
6.  **插件/技能开发体验**：参数提示验证、Claude Code 技能迁移保留、静默重写能力。

---

## 6. 开发者关注点 (痛点与高频需求)
- **认证与会话可靠性**：恢复会话后频繁出现“未认证”错误，模型选择器被阻断，严重破坏连续工作流。
- **企业环境适配**：在 VPN、特定代理或严格策略下，语音模式、MCP 服务器等功能不可用，缺乏明确的错误引导和配置选项。
- **MCP 功能完整性**：服务器指令被忽略、管理操作（启用/禁用）体验不佳，影响 MCP 生态的实用价值。
- **跨平台显示一致性**：Windows 滚动条对齐问题、VSCode 终端主题忽略、Linux AppImage 环境泄露，损害基础用户体验。
- **配置与自动更新**：`auto_update` 配置被忽略，用户对自动行为失去控制。
- **操作反馈清晰度**：`queued` 与 `pending` 消息区别不明、`/tasks` 不显示实际运行的子代理，降低工具可观察性。

---
**报告生成时间**: 2026-06-26  
**报告生成者**: AI 技术分析师

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-26)

**数据来源**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)  
**统计周期**: 过去24小时 (截至 2026-06-26)

---

### 1. 今日速览
过去24小时内，Kimi Code CLI 社区未发布新版本，但出现了两个值得关注的技术问题报告：一是与 MCP 服务器工具集（超过200个工具）相关的潜在性能或兼容性故障；二是 Linux 环境下界面渲染不稳定的严重体验问题。目前无新 Pull Request 合并，社区开发活动相对平静。

### 2. 版本发布
*过去24小时无新版本发布。*

### 3. 社区热点 Issues
当前仅新增2个 Issue，均标记为 `bug`，暂无社区评论或点赞，但问题描述涉及核心功能与体验，需开发团队关注。

| # | 标题 | 重要性说明 | 社区反应 | 链接 |
|---|------|------------|----------|------|
| #2475 | [bug] MCP tools | **高**：用户报告在使用订阅服务、K2.7 模型时，连接拥有212个工具的 MCP 服务器后出现问题。这可能暴露 CLI 在**大规模工具集成、协议处理或资源管理**方面的瓶颈，影响高级工作流。 | 0 评论, 0 👍 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2475) |
| #2474 | [bug] kimi code cli界面一直在各种抖动，莫名其妙重新从头渲染整个对话 | **高**：在 Linux 系统（特定内核）上，界面出现**频繁、非预期的全量重渲染**，导致对话上下文丢失和操作中断。这是严重的**用户体验和稳定性缺陷**，可能涉及前端状态管理或渲染引擎。 | 0 评论, 0 👍 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2474) |

### 4. 重要 PR 进展
*过去24小时无新增或更新的 Pull Request。*

### 5. 功能需求趋势
基于现有 Issues 分析，社区潜在关注方向包括：
*   **MCP 协议与工具生态的健壮性**：对连接外部工具服务器（尤其是大规模工具集）的稳定性和性能优化有强烈需求。
*   **跨平台 UI/UX 稳定性**：Linux 等非主流桌面环境的界面渲染可靠性需重点保障，避免状态丢失。
*   **渲染性能优化**：针对长对话或复杂上下文的全量重渲染问题，需优化前端状态管理策略。

### 6. 开发者关注点
当前开发者反馈的**核心痛点**集中在：
1.  **界面渲染稳定性**：在特定 Linux 环境下，UI 的抖动和全量重渲染问题严重干扰连续工作流，是最高优先级的体验修复项。
2.  **外部工具集成可靠性**：MCP 工具连接在工具数量较大时出现故障，暗示 CLI 的**工具管理器或通信层**可能存在资源泄漏或超时处理缺陷，需进行压力测试和边界条件处理。

---
*报告生成于 2026-06-26，基于 GitHub 公开数据自动整理。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-26)

**数据来源**: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 今日速览
今日 OpenCode 社区的核心动态围绕 **v1.17.11 版本发布** 与 **v1.17.10 引发的 Windows 平台稳定性危机** 展开。新版本引入了关键的“会话快照与回滚”功能，但旧版本在 Windows 上因 Bun 运行时导致的严重崩溃问题（#33742）仍引发大量讨论，社区正积极收集堆栈信息以定位根本原因。同时，长期存在的“内存问题 Megathread”（#20695）持续收集用户报告，成为资源优化焦点。

---

## 版本发布
- **v1.17.11** 已于今日发布。
  - **核心改进**: 新增会话快照与回滚控制，允许用户将会话回退到早期消息状态，并同步还原文件变更。
  - **Bug 修复**: 修复了 MCP OAuth 流程中浏览器打开失败时无法手动输入 URL 的问题。
  - **桌面端**: 开始引入 Chrome 风格的界面元素（描述不完整，但已开始相关改进）。

---

## 社区热点 Issues (Top 10)
以下挑选了评论数最多、👍 反应热烈或涉及核心功能/严重问题的 Issue：

1. **[OPEN] Memory Megathread** (#20695) - [链接](https://github.com/anomalyco/opencode/issues/20695)
   - **重要性**: 社区集中报告内存泄漏/占用过高问题的总帖，是当前最优先的性能优化议题。
   - **社区反应**: 评论 103，👍 74。核心开发者要求用户提供堆快照而非 LLM 建议，正在系统性收集数据。

2. **[OPEN] OpenCode v1.17.10 crashes with Bun segmentation fault on Windows** (#33742) - [链接](https://github.com/anomalyco/opencode/issues/33742)
   - **重要性**: v1.17.10 在 Windows 上引发致命崩溃的回归问题，影响大量用户，降级到 v1.17.9 可缓解。
   - **社区反应**: 评论 45，👍 40。大量 Windows 用户确认问题，正与 Bun 运行时团队协作排查。

3. **[CLOSED] When use a free model "free usage exceed" appeared** (#15585) - [链接](https://github.com/anomalyco/opencode/issues/15585)
   - **重要性**: 用户对免费模型（如 Big Pickle）的“免费额度超限”错误感到困惑，涉及计费策略透明度。
   - **社区反应**: 评论 52，👍 13。问题已关闭，但讨论揭示了用户对免费层级限制的普遍疑问。

4. **[OPEN] Opencode hangs at startup if a .git repo is present and inotify user instances run out** (#16610) - [链接](https://github.com/anomalyco/opencode/issues/16610)
   - **重要性**: 在 inotify 实例数受限的系统（如 Docker 容器）中，OpenCode 启动会永久挂起，影响容器化部署。
   - **社区反应**: 评论 14，👍 7。提供了明确的复现步骤，需要改进资源管理或优雅降级。

5. **[CLOSED] [discussion] [FEATURE]: Allow storage of secrets in system credential store.** (#4318) - [链接](https://github.com/anomalyco/opencode/issues/4318)
   - **重要性**: 安全增强需求，希望将 API 密钥等凭据从明文文件 (`auth.json`) 迁移至系统钥匙串（如 macOS Keychain, Windows Credential Manager）。
   - **社区反应**: 评论 10，👍 6。已关闭，但此功能对安全敏感用户至关重要，可能已在路线图中。

6. **[OPEN] Fix light mode** (#17935) - [链接](https://github.com/anomalyco/opencode/issues/17935)
   - **重要性**: 浅色模式下代码示例不可见、文本选择颜色错误，是严重的 UI/可访问性问题。
   - **社区反应**: 评论 7，👍 11。👍 数高于评论数，表明社区普遍认同此问题需修复。

7. **[OPEN] [FEATURE]: Multiple account login with Codex OAuth and round robin load balancing** (#8145) - [链接](https://github.com/anomalyco/opencode/issues/8145)
   - **重要性**: 企业级功能需求，支持多 Codex 账户登录并在它们间进行负载均衡，提升可用性和吞吐量。
   - **社区反应**: 评论 7，👍 19。高 👍 数显示此功能对团队用户极具吸引力。

8. **[OPEN] opencode utilization at 99-100% randomly - opencode unresponsive** (#33399) - [链接](https://github.com/anomalyco/opencode/issues/33399)
   - **重要性**: 随机出现的 100% CPU 占用导致 CLI 完全无响应，影响工作流连续性。
   - **社区反应**: 评论 6，👍 0。用户描述为“风扇狂转”，是典型的性能回归或死循环问题。

9. **[OPEN] [FEATURE]: Emit tui.session.select event on in-TUI session navigation** (#31051) - [链接](https://github.com/anomalyco/opencode/issues/31051)
   - **重要性**: 插件 API 缺失，插件无法感知用户在 TUI 内部通过快捷键或会话选择器切换会话，限制了插件功能。
   - **社区反应**: 评论 6，👍 1。对插件开发者是关键增强。

10. **[OPEN] There’s no way to open opencode** (#33828) - [链接](https://github.com/anomalyco/opencode/issues/33828)
    - **重要性**: 新用户安装后（Windows, `npm install -g opencode-ai`）遇到完全空白屏幕，是严重的入门体验障碍。
    - **社区反应**: 评论 6，👍 0。附有截图，需要快速修复以降低新用户流失。

---

## 重要 PR 进展 (Top 10)
以下挑选了对稳定性、功能或开发者体验有显著影响的 PR：

1. **[beta] feat(ci): use Bun canary for beta channel** (#33822) - [链接](https://github.com/anomalyco/opencode/pull/33822)
   - **内容**: 将 Beta 渠道的 Bun 运行时升级到 Canary 版本，以应对 v1.3.14 在 Windows 上的频繁段错误。这是针对 #33742 的临时缓解方案。

2. **[contributor] fix(app): stabilize titlebar tab alignment** (#33979) - [链接](https://github.com/anomalyco/opencode/pull/33979)
   - **内容**: 修复标题栏标签在首次导航后的对齐偏移问题，提升桌面端 UI 的视觉稳定性。

3. **fix(skill): include v2 plugin skills in legacy list** (#33918) - [链接](https://github.com/anomalyco/opencode/pull/33918)
   - **内容**: 确保 v2 插件注册的技能也能在遗留的 `/skills` 命令和实例技能 API 中可见，改善插件兼容性。

4. **[contributor] fix(app): enable auto-accept in session settings** (#33974) - [链接](https://github.com/anomalyco/opencode/pull/33974)
   - **内容**: 修复会话设置对话框在多服务器/多会话场景下的作用域问题，使“自动接受”等设置能正确应用到当前活动会话。

5. **refactor(app): use dropdown primitives for project picker** (#33978) - [链接](https://github.com/anomalyco/opencode/pull/33978)
   - **内容**: 使用新的下拉组件重构项目选择器，为后续功能（如 #32015）做准备，改善 UI 一致性和可访问性。

6. **docs: clarify that local and global AGENTS.md are both loaded** (#33971) - [链接](https://github.com/anomalyco/opencode/pull/33971)
   - **内容**: 文档改进，明确说明本地和全局的 `AGENTS.md` 文件都会被加载，并解释其优先级，减少用户配置困惑。

7. **docs: document blacklist and whitelist provider options** (#33972) - [链接](https://github.com/anomalyco/opencode/pull/33972)
   - **内容**: 为自定义提供商配置中的 `blacklist` 和 `whitelist` 属性添加文档，允许用户精细控制哪些模型对特定提供商可见。

8. **[contributor] fix(tui): handle rounding overflow in compact number formatter** (#33969) - [链接](https://github.com/anomalyco/opencode/pull/33969)
   - **内容**: 修复数字紧凑格式化（如 `999.9K` -> `1.0M`）在边界值下的舍入溢出错误，提升数据显示准确性。

9. **fix(plan-mode): deny bash and scope subagent permission inheritance** (#33967) - [链接](https://github.com/anomalyco/opencode/pull/33967)
   - **内容**: 安全修复。计划模式虽禁止编辑工具，但未限制 `bash` 工具（默认 `"*"` 权限）。此 PR 确保子代理权限继承时，`bash` 也受计划模式约束。

10. **feat(tui): add tokens per second to response footer** (#12721) - [链接](https://github.com/anomalyco/opencode/pull/12721)
    - **内容**: 在助手消息的页脚中显示生成速度（每秒令牌数，TPS），帮助用户直观比较不同模型/提供商的实时性能。

---

## 功能需求趋势
从近期 Issues 中可提炼出社区最关注的功能方向：

1.  **性能与稳定性**: 内存优化（#20695）、启动速度（#22227）、高 CPU 占用（#33399）、Windows 平台稳定性（#33742, #31144）是最高频的痛点。
2.  **企业级与团队功能**: 多账户登录与负载均衡（#8145）、OAuth 回调主机配置（#33966）、系统凭据存储（#4318）反映了从个人使用向团队协作演进的趋势。
3.  **模型提供商集成**: 对 LM Studio 等本地服务的自动模型发现（#23327）、特定模型（如 GLM-5.1）的缓存稳定性（#31348）支持需求强烈。
4.  **开发者体验 (DX) 与插件生态**: 扩展插件事件（#31051）、改进技能系统（#33918）、提供更清晰的文档（#33971, #33972）是吸引第三方开发者的关键。
5.  **UI/UX 完善**: 浅色模式支持（#17935）、项目选择器重构（#33978）、会话重命名（#33932）等细节体验持续被提及。

---

## 开发者关注点
开发者反馈中集中暴露的痛点与高频需求：

- **严重回归必须快速响应**: v1.17.10 的 Windows 崩溃（#33742）和可能的性能退化（#33399）表明，核心运行时（Bun）的变更需要更严格的跨平台测试。
- **资源管理需精细化**: 内存泄漏（#20695）、inotify 实例耗尽（#16610）、Git 变更导致的延迟（#33952）都指向文件系统监控和上下文管理需要更高效的实现。
- **配置与安全需兼顾便利与安全**: 用户希望 API 密钥自动存储（#33775）且安全（#4318），同时配置（如 OAuth 主机）需灵活（#33966）。
- **文档与透明度至关重要**: 免费模型限制（#15585）、AGENTS.md 加载规则（#33971）、提供商黑名单/白名单（#33972）的疑问，说明文档需更清晰，产品行为需更透明。
- **插件 API 需持续演进**: 为支持复杂插件，事件系统（#31051）、技能发现（#33918）、会话元数据（#33964）等 API 需要不断丰富和稳定。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-26)

## 今日速览
- 社区发布 **v0.19.2-nightly** 版本，核心修复了 `web_fetch` 的 JSON 回退机制，提升了网络请求的容错性。
- **Windows 平台严重 Bug** 引发高度关注：PowerShell 进程泄漏导致 OOM（#5873），社区呼吁紧急修复。
- 多个 PR 聚焦 **CLI 与桌面体验增强**，包括语音听写、扩展提及、自动压缩阈值配置等，显示交互与性能优化是当前开发重点。

## 版本发布
- **v0.19.2-nightly.20260625.b2f11b735**  
  主要更新：修复 `web_fetch` 在非 JSON 响应时的回退逻辑，避免因内容类型解析失败导致工具调用中断。  
  [Release 详情](https://github.com/QwenLM/qwen-code/releases/tag/release/v0.19.2-nightly.20260625.b2f11b735)

## 社区热点 Issues（过去24小时）
| # | 标题 | 优先级 | 状态 | 重要性说明 | 社区反应 |
|---|------|--------|------|------------|----------|
| [5873](https://github.com/QwenLM/qwen-code/issues/5873) | 难绷逆天BUG：用一次工具开一个powershell 并且不再关闭 直到OOM | P1 | OPEN | Windows 用户遭遇严重资源泄漏，每次工具调用 spawn 新 PowerShell 且不释放，直接导致内存耗尽，影响基本可用性。 | 用户情绪激动，评论中多次强调“百分百复现”，要求立即修复。 |
| [5838](https://github.com/QwenLM/qwen-code/issues/5838) | Allow user to adjust agent initiated cmd timeout. | P2 | OPEN | 当前 agent 发起的命令超时固定，长任务（如编译、测试）易被强制终止，用户需要灵活调整。 | 5 条评论，多位用户附议，认为超时配置是生产环境必需。 |
| [5867](https://github.com/QwenLM/qwen-code/issues/5867) | feat(memory): add a git-shared "team" tier to auto-memory | P2 | OPEN | 现有记忆仅限本地用户，团队项目缺乏共享知识库，此功能可提升协作效率。 | 3 条评论，讨论集中在存储路径与冲突解决策略。 |
| [5866](https://github.com/QwenLM/qwen-code/issues/5866) | feat(web-shell): live syntax highlighting for streaming code blocks | P2 | OPEN | Web Shell 中流式输出的代码块缺乏实时高亮，影响阅读体验；同时需统一 fence-language 别名。 | 2 条评论，作者已提交实现分支，寻求依赖变更许可。 |
| [5875](https://github.com/QwenLM/qwen-code/issues/5875) | improve skill command name auto-complete matching | P2 | OPEN | 当前技能命令自动完成仅支持前缀匹配，用户希望支持任意部分匹配（如输入 `/store` 匹配 `front-end-store-rules`）。 | 1 条评论，但易用性改进普遍受期待。 |
| [5861](https://github.com/QwenLM/qwen-code/issues/5861) | Context compression request should use stream=true to avoid gateway timeout | P1 | CLOSED | 上下文压缩使用非流式请求，在网关超时严格的部署中会导致失败，改用流式可显著提升稳定性。 | 2 条评论，已合并修复，但需关注后续部署效果。 |
| [5722](https://github.com/QwenLM/qwen-code/issues/5722) | Token speed display bugs: tok/s disappears during thinking, stalls during tool calls | P2 | CLOSED | TUI 右下角 token/s 显示在推理阶段消失、工具调用时停滞，导致性能监控不准确。 | 2 条评论，修复已合并，用户验证中。 |
| [4805](https://github.com/QwenLM/qwen-code/issues/4805) | enable merge queue or require up-to-date branches to prevent stale CI merges | P2 | OPEN | PR 合并时 CI 状态可能过时，导致语义冲突逃逸，需引入 merge queue 或分支更新检查。 | 3 条评论，多位维护者认为这是 CI 质量的关键改进。 |
| [5841](https://github.com/QwenLM/qwen-code/issues/5841) | [loop] Self-paced /loop should treat LoopWakeup as a fallback | P2 | CLOSED | 自循环 `/loop` 仅依赖定时器唤醒，忽略 Monitor 或后台任务的事件驱动唤醒，导致资源浪费。 | 2 条评论，修复已合并，优化后台任务效率。 |
| [5863](https://github.com/QwenLM/qwen-code/issues/5863) | feat(serve): enrich GET /session/:id/status with live turn-phase / active tools | P2 | OPEN | 现有会话状态接口仅返回布尔值 `hasActivePrompt`，

</details>

---
*本日报由 [Big Model Radar](https://github.com/zx0828/big_model_radar) 自动生成。*