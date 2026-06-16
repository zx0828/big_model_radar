# AI CLI 工具社区动态日报 2026-06-16

> 生成时间: 2026-06-16 00:46 UTC | 覆盖工具: 7 个

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

# AI CLI 工具社区横向对比分析报告  
**报告周期**：2026-06-16（基于各项目过去24小时社区动态）  
**分析对象**：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Qwen Code  

---

## 1. 生态全景  
当前 AI CLI 工具生态处于 **“核心能力夯实向企业级深化”** 的过渡阶段。各工具在基础模型调用与工具使用能力趋同后，竞争焦点转向 **生产环境可靠性**（如子代理稳定性、内存管理、跨平台兼容性）和 **生态扩展性**（MCP 标准支持、IDE 集成、权限精细化）。社区反馈显示，开发者对工具的要求已从“能用”升级为“安全、稳定、可集成”，尤其在权限控制、会话连续性、企业合规等方面诉求强烈。同时，**MCP（Model Context Protocol）** 已成为事实上的互操作标准，主流工具均加速适配或扩展其客户端能力。

---

## 2. 各工具活跃度对比  
*注：Issues/PR 数量基于报告中的“热点”列表统计，反映社区讨论集中度，非仓库总数。*  

| 工具 | 热点 Issues 数 | 重要 PR 数 | 版本发布 | 活跃特征 |
|------|----------------|------------|----------|----------|
| **Claude Code** | 10 | 10 | ✅ v2.1.178 | 高活跃，问题与修复同步密集，聚焦权限、跨平台、安全 |
| **OpenAI Codex** | 10 | 10+（系列 PR） | ✅ rust-v0.140.0 | 高活跃，架构升级（消息队列、插件推荐）与跨平台问题并重 |
| **Gemini CLI** | 10 | 2 | ❌ 无 | 中活跃，问题集中（子代理、AST 工具），PR 较少，可能

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止：2026-06-16 | 来源：github.com/anthropics/skills*

---

## 1. 热门 Skills 排行

| 排名 | PR | 功能概述 | 社区关注点 | 状态 |
|------|----|----------|------------|------|
| 1 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography**：解决AI生成文档的排版问题（孤行、寡行、编号对齐） | 影响所有文档生成场景的基础质量问题，实用性极高 | OPEN |
| 2 | [#486](https://github.com/anthropics/skills/pull/486) | **odt**：OpenDocument格式创建、模板填充及ODT→HTML转换 | 开源办公格式支持，满足LibreOffice/OpenOffice生态需求 | OPEN |
| 3 | [#1140](https://github.com/anthropics/skills/pull/1140) | **agent-creator**：创建任务特定代理集，修复多工具评估稳定性 | 核心工具链修复，解决评估系统根本性问题 | OPEN |
| 4 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns**：覆盖单元测试、组件测试、测试哲学的全栈测试指南 | 开发者工作流关键环节，质量保障基础设施 | OPEN |
| 5 | [#444](https://github.com/anthropics/skills/pull/444) | **AURELION套件**：结构化认知框架（kernel/advisor/agent/memory） | 专业级知识管理和AI协作系统，企业级解决方案 | OPEN |
| 6 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer & skill-security-analyzer**：技能质量与安全评估工具 | 技能市场治理和信任体系建设的关键基础设施 | OPEN |
| 7 | [#154](https://github.com/anthropics/skills/pull/154) | **shodh-memory**：AI代理持久化记忆系统，跨会话上下文管理 | 解决长期记忆和个性化交互的核心需求 | OPEN |
| 8 | [#147](https://github.com/anthropics/skills/pull/147) | **codebase-inventory-audit**：代码库清理与文档审计，识别孤立代码 | 企业代码库维护和架构治理的实用工具 | OPEN |

---

## 2. 社区需求趋势

从Issues讨论热度（评论数>5）提炼出五大方向：

- **企业文档处理**：ODT/DOCX/PDF深度支持（#486, #541），特别是格式兼容性和内容保真度
- **AI代理架构**：多代理协作（#1140）、持久记忆（#154）、治理模式（#412）等高级模式
- **开发者体验**：跨平台兼容性（Windows支持#1061, #1099）、调试工具（#556, #1169）、测试集成（#723）
- **协作与共享**：组织内技能共享（#228）、避免重复安装（#189）、标准化分发（#16）
- **安全与信任**：命名空间滥用防护（#492）、权限边界、安全分析工具（#83）

---

## 3. 高潜力待合并 Skills

以下PR评论活跃、修复关键问题或引入重要功能，合并可能性高：

| PR | 核心价值 | 紧迫性 |
|----|----------|--------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | 彻底修复`run_eval.py`的0% recall问题，影响整个优化循环 | 🔥 极高（阻塞所有描述优化） |
| [#1140](https://github.com/anthropics/skills/pull/1140) | 引入agent-creator并修复多工具评估稳定性 | 🔥 高 |
| [#1050](https://github.com/anthropics/skills/pull/1050) | Windows子进程和编码修复，skill-creator在Windows可用 | 🔥 高（平台兼容性） |
| [#1061](https://github.com/anthropics/skills/pull/1061) | 系统性Windows兼容性修复（PATHEXT、cp1252、管道读取） | 🔥 高 |
| [#723](https://github.com/anthropics/skills/pull/723) | 填补测试领域空白，覆盖现代前端/后端测试栈 | 中高 |
| [#444](https://github.com/anthropics/skills/pull/444) | 提供结构化认知框架，企业级知识管理 | 中 |

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是：建立稳定、可评估、跨平台的技能开发与优化基础设施，同时向企业级文档处理、AI代理架构和质量治理三个方向快速扩展。**

关键矛盾在于：技能创作者需要可靠的评估工具（`run_eval.py`）和跨平台支持，而社区贡献的技能正从基础文档处理向复杂的多代理系统演进，对基础设施的要求急剧提升。

---

# Claude Code 社区动态日报 2026-06-16

## 1. 今日速览
今日 Claude Code 发布 v2.1.178 版本，引入基于参数的工具权限规则语法，增强细粒度控制。社区最关注 Visual Studio 2026 集成（#15942）及 Bash 工具可靠性问题（ENOSPC 错误频发）。同时，大量 PR 集中修复 Windows 跨平台兼容性与安全漏洞，体现对稳定性的持续投入。

## 2. 版本发布
**v2.1.178**（2026-06-16）
- 新增 `Tool(param:value)` 权限规则语法，支持通配符匹配工具输入参数（如 `Agent(model:opus)` 可阻止 Opus 子代理）。
- 嵌套 `.claude/skills` 目录中的技能现在自动加载，名称冲突时优先使用嵌套技能。
- [发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.178)

## 3. 社区热点 Issues（Top 10）
| # | 标题 | 重要性 | 社区反应 | 链接 |
|---|------|--------|----------|------|
| 15942 | Add support for Visual Studio 2026 Integration | 高需求功能，影响企业开发者工作流 | 评论 137，👍 356 | [链接](https://github.com/anthropics/claude-code/issues/15942) |
| 52871 | MCP OAuth appends trailing slash to `resource` parameter, breaking Entra ID auth | 认证阻塞问题，影响企业 MCP 集成 | 评论 24，👍 18 | [链接](https://github.com/anthropics/claude-code/issues/52871) |
| 63909 | Task runner reports ENOSPC on subprocess output despite disk having free space | Bash 工具核心可靠性问题，输出捕获失败 | 评论 12，👍 19 | [链接](https://github.com/anthropics/claude-code/issues/63909) |
| 62016 | Claude passes `rg -rn` (parsed as `--replace=n`), silently corrupts search output | 数据完整性严重风险，静默数据损坏 | 评论 10，👍 10 | [链接](https://github.com/anthropics/claude-code/issues/62016) |
| 13600 | Markdown renderer support in Claude Code CLI | 用户体验增强，提升 CLI 可读性 | 评论 10，👍 44 | [链接](https://github.com/anthropics/claude-code/issues/13600) |
| 65796 | Workflow resume restarts from beginning after auto-compaction | 多代理系统状态管理缺陷，导致重复执行 | 评论 6，👍 0 | [链接](https://github.com/anthropics/claude-code/issues/65796) |
| 65577 | Claude desktop local-agent VM grows unboundedly, fills disk | Desktop 资源泄漏，导致磁盘耗尽 | 评论 3，👍 1 | [链接](https://github.com/anthropics/claude-code/issues/65577) |
| 68561 | Blocked by "Usage credits required for 1M context" with no recovery | 额度系统无恢复路径，会话意外中断 | 评论 3，👍 0 | [链接](https://github.com/anthropics/claude-code/issues/68561) |
| 67303 | Dispatch permanently shows "Can't reach your desktop" | Desktop 连接状态管理故障，需服务端重置 | 评论 3，👍 0 | [链接](https://github.com/anthropics/claude-code/issues/67303) |
| 67540 | Code Review: claude[bot] reacts with 👀 but no check run created | 托管集成功能缺失，影响 CI/CD 流程 | 评论 2，👍 3 | [链接](https://github.com/anthropics/claude-code/issues/67540) |

## 4. 重要 PR 进展（Top 10）
| # | 标题 | 修复内容 | 影响范围 | 链接 |
|---|------|----------|----------|------|
| 68678 | fix(triage): don't mark Claude Desktop issues as invalid | 修正 triage bot 错误将 Desktop 问题标记为无效 | 问题分类准确性 | [链接](https://github.com/anthropics/claude-code/pull/68678) |
| 68707 | feat(bug-reporter): add /bug command to file GitHub issues | 新增 `/bug` 命令，终端内直接提交 issue | 用户反馈体验 | [链接](https://github.com/anthropics/claude-code/pull/68707) |
| 68672 | fix(hookify): load only event:all rules for unknown tools | 修复 hookify 对未知工具的规则加载逻辑 | 插件系统稳定性 | [链接](https://github.com/anthropics/claude-code/pull/68672) |
| 68671 | fix(hookify): PostToolUse hooks cannot return permissionDecision: deny | 允许 PostToolUse hooks 返回 `deny` 决策 | 权限控制灵活性 | [链接](https://github.com/anthropics/claude-code/pull/68671) |
| 68681 | fix(workflows): correct pagination break condition and HTTP 2xx check | 修复 GitHub API 分页逻辑和状态码检查 | 自动化流程可靠性 | [链接](https://github.com/anthropics/claude-code/pull/68681) |
| 68700 | fix(learning-output-style): add bash prefix and normalize plugin root path for Windows | Windows 路径规范化及 bash 前缀添加 | 跨平台兼容性 | [链接](https://github.com/anthropics/claude-code/pull/68700) |
| 68701 | fix(security-guidance): strip CRLF from Python version probe on Windows | 修复 Windows 上 Python 版本探测的换行符问题 | 跨平台兼容性 | [链接](https://github.com/anthropics/claude-code/pull/68701) |
| 68699 | fix(hookify): add Python wrapper and normalize plugin root paths on Windows | 为 Windows 添加 Python 包装器并规范化路径 | 跨平台兼容性 | [链接](https://github.com/anthropics/claude-code/pull/68699) |
| 68694 | fix(security-guidance): normalize CLAUDE_PLUGIN_ROOT path separators on Windows | 规范化 Windows 插件根路径分隔符 | 跨平台兼容性 | [链接](https://github.com/anthropics/claude-code/pull/68694) |
| 68689 | fix(security-guidance): block symlink escape in extensibility config reads | 阻止扩展配置读取中的符号链接逃逸 | 安全性 | [链接](https://github.com/anthropics/claude-code/pull/68689) |

## 5. 功能需求趋势
- **IDE 深度集成**：Visual Studio 2026 集成需求强烈（👍 356），反映企业用户对统一开发环境的需求。
- **核心工具可靠性**：Bash 工具 ENOSPC 错误、`rg` 命令解析问题等表明输出捕获和子进程管理需优先加固。
- **跨平台一致性**：大量 Windows/macOS 特定 bug（安装、路径、VM 资源）显示需统一跨平台行为。
- **企业级功能**：MCP OAuth、Code Review 托管集成、多代理工作流恢复等团队协作功能受关注。
- **用户体验增强**：Markdown 渲染、历史记录保留策略、Web 端交互优化等提升日常使用体验。

## 6. 开发者关注点
- **Bash 工具稳定性**：ENOSPC 错误（#63909、#65166、#65915）是当前最高频痛点，涉及临时文件系统管理，需根本性修复。
- **Windows 兼容性**：MSIX 安装失败（#67547）、路径处理（多个 PR）、python3 stub 问题等表明 Windows 环境支持仍不完善。
- **资源管理**：VM 磁盘无限增长（#65577）、历史记录自动清理（#56093）引发对本地资源控制的诉求。
- **权限与安全**：新权限规则语法（v2.1.178）被关注，同时 symlink 逃逸（#68689）等安全修复需持续重视。
- **多代理系统**：工作流恢复（#65796）和工具搜索排名（#66488）问题影响复杂自动化场景的可靠性。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-16)

## 1. 今日速览
- **核心版本发布**：Rust 后端 `v0.140.0` 正式发布，新增 `/usage` 用量视图并增强了 `/goal` 对富媒体内容的支持。
- **社区焦点问题**：Linux 桌面应用需求（#11023）持续高热；安全检测误报问题（#27817, #28015）在金融及 DevOps 场景中引发开发者集中反馈；Windows/WSL 平台的路径处理与连接稳定性问题（#28094, #18960）仍是痛点。
- **架构演进**：围绕 **用户消息队列** 和 **插件推荐系统** 的一系列 PR 合并，标志着 Codex 在异步交互与插件生态管理上的重要架构升级。

## 2. 版本发布
- **rust-v0.140.0** (稳定版)
  - 新增 `/usage` 命令，支持查看日、周及累计的账户 Token 使用情况。
  - `/goal` 指令现在能更好地保留超长文本、大块粘贴内容及图片附件，包括在远程应用服务器会话中。
  - 修复并完善了会话管理相关功能。
- **rust-v0.140.0-alpha.22/21/20**：Alpha 版本持续迭代，为稳定版提供前置测试。

## 3. 社区热点 Issues (Top 10)
| # | 标题 | 重要性 | 社区反应 | 链接 |
|---|------|--------|----------|------|
| 11023 | Codex desktop app for Linux | **极高**：长期最高票需求（582👍），反映跨平台支持缺失，影响大量 Linux 开发者。 | 持续讨论，用户强调生产力工具需全平台覆盖。 | [链接](https://github.com/openai/codex/issues/11023) |
| 18960 | Frequent reconnect loop in Codex App | **高**：严重影响使用连续性，涉及 WebSocket 连接稳定性，影响多平台用户。 | 42 条评论，用户提供详细日志，寻求根本解决方案。 | [链接](https://github.com/openai/codex/issues/18960) |
| 24675 | Stale app connector link after reauth | **高**：认证状态同步问题导致插件（如 Linear）失效，涉及缓存与状态管理。 | 23 条评论，用户描述手动清理缓存的临时修复方案。 | [链接](https://github.com/openai/codex/issues/24675) |
| 27817 | False positive cybersecurity flag on finance work | **高**：安全检测误报干扰合法业务（税务申报），暴露安全模型过严问题。 | 18 条评论，用户呼吁优化白名单或申诉流程。 | [链接](https://github.com/openai/codex/issues/27817) |
| 28015 | False positive blocks local repo maintenance | **高**：与上一条类似，误报影响常规 DevOps 操作，降低 CLI 工作效率。 | 18 条评论，社区讨论如何区分“安全研究”与“日常维护”。 | [链接](https://github.com/openai/codex/issues/28015) |
| 28094 | [Windows][WSL] Path rewriting bug | **高**：Windows + WSL 混合环境下路径转换错误，导致项目关联丢失，是跨平台开发的典型痛点。 | 13 条评论，多位 WSL 用户确认问题。 | [链接](https://github.com/openai/codex/issues/28094) |
| 24098 | Windows elevated sandbox fails | **中**：Windows 权限沙盒在更新后失效，影响高权限环境下的安全执行。 | 20 条评论，涉及 CLI 版本与系统权限的兼容性。 | [链接](https://github.com/openai/codex/issues/24098) |
| 28373 | Updated failed on Mac Os App | **中**：应用更新机制异常（重复更新提示），影响用户体验和版本管理。 | 9 条评论，用户报告更新后不稳定。 | [链接](https://github.com/openai/codex/issues/28373) |
| 22672 | Windows App cannot locate CLI on non-standard drive | **中**：Windows 非系统盘安装的 CLI 无法被桌面应用发现，涉及环境变量与路径解析。 | 8 条评论，11👍，反映企业环境常见配置。 | [链接](https://github.com/openai/codex/issues/22672) |
| 21743 | Open thread view does not refresh after remote append | **中**：多客户端协作时，桌面端线程视图不同步，影响远程/移动设备协作体验。 | 4 条评论，6👍，是“远程项目”功能的体验缺陷。 | [链接](https://github.com/openai/codex/issues/21743) |

## 4. 重要 PR 进展 (Top 10)
| # | 标题 | 内容/修复 | 影响 | 链接 |
|---|------|-----------|------|------|
| 28307, 28268, 28267 | **用户消息队列系列** | 将 TUI 的后续输入通过 app-server 持久化，并通过核心 `on_thread_idle` 扩展路径分派。 | **架构升级**：实现跨客户端的用户消息持久化与有序处理，为异步交互打下基础。 | [28307](https://github.com/openai/codex/pull/28307) \| [28268](https://github.com/openai/codex/pull/28268) \| [28267](https://github.com/openai/codex/pull/28267) |
| 28383, 27704, 28400, 28403 | **插件推荐系统系列** | 根据认证类型加载市场清单；激活端点推荐；简化安装请求模式；规范展示逻辑。 | **功能闭环**：完成从推荐、展示到安装的端到端流程，提升插件生态易用性。 | [28383](https://github.com/openai/codex/pull/28383) \| [27704](https://github.com/openai/codex/pull/27704) \| [28400](https://github.com/openai/codex/pull/28400) \| [28403](https://github.com/openai/codex/pull/28403) |
| 28367 | Use ApiPathString in filesystem permission paths | 使用 `ApiPathUri` 处理跨 OS 路径，使 app-server 能正确传递非本地路径给远程 exec-server。 | **关键修复**：解决 Windows/WSL 等混合环境下的路径传递错误（关联 #28094）。 | [链接](https://github.com/openai/codex/pull/28367) |
| 28146 | app-server: preserve remote environment cwd | 保留远程环境的工作目录，避免在跨 OS 连接时被错误重写。 | **体验修复**：确保远程会话的目录上下文正确，对远程开发至关重要。 | [链接](https://github.com/openai/codex/pull/28146) |
| 26245 | exec-server: default remote transport to Noise | 远程执行器间通信默认启用 Noise 协议加密。 | **安全增强**：提升远程执行连接的安全性。 | [链接](https://github.com/openai/codex/pull/26245) |
| 28401 | Run core integration tests against Wine-backed Windows executor | 在 Linux 上通过 Wine 运行 Windows exec-server 的集成测试。 | **测试策略**：提升跨平台测试覆盖率，无需物理 Windows 环境。 | [链接](https://github.com/openai/codex/pull/28401) |
| 28418 | chore(core) rm AskForApproval::OnFailure | 移除已废弃的 `AskForApproval::OnFailure` 枚举变体。 | **代码清理**：减少技术债务，保持代码库整洁。 | [链接](https://github.com/openai/codex/pull/28418) |
| 28396 | Record external agent import results | 持久化记录外部代理配置导入的详细结果（成功/失败）。 | **可观测性**：改善插件/代理导入失败时的调试能力。 | [链接](https://github.com/openai/codex/pull/28396) |
| 28416 | test shell snapshot cwd lifecycle | 增加对 shell 快照在工作目录变化时重建逻辑的测试覆盖。 | **可靠性**：防止因目录切换导致的环境状态错误。 | [链接](https://github.com/openai/codex/pull/28416) |
| 27640 | Support multi-tool install requests | 新增 `request_plugin_installs` 工具，支持批量安装请求。 | **功能增强**：提升插件安装效率，简化多插件场景交互。 | [链接](https://github.com/openai/codex/pull/27640) |

## 5. 功能需求趋势
从 Issues 和 PR 中提炼出社区最关注的方向：
- **跨平台支持深化**：Linux 桌面应用（#11023）是最高票需求；Windows/WSL 路径、权限、驱动盘问题（#28094, #22672, #24098）反馈密集。
- **IDE 集成体验**：VS Code 扩展需改进变更可视化与撤销可靠性（#15367），体现对精细编辑器体验的追求。
- **远程与分布式工作流**：远程项目同步（#21743）、远程环境 cwd 保留（PR #28146）、用户消息队列（PR 系列）均指向多设备、远程执行场景的强化。
- **插件生态管理**：插件推荐系统（PR 系列）、多工具安装（PR #27640）、 curated marketplace 加载（PR #28383）显示对插件易发现性和安装流程的优化。
- **性能与稳定性**：频繁重连（#18960）、更新失败（#28373）、卡顿（#27603）是影响日常使用的核心稳定性问题。
- **安全模型精细化**：大量关于安全误报的反馈（#27817, #28015）表明当前安全检测需更智能的上下文感知，减少对合法工作的干扰。

## 6. 开发者关注点 (高频痛点)
- **Windows/WSL 兼容性**：路径转换错误、CLI 定位失败、沙盒权限问题集中于此平台组合，是当前最突出的技术债务。
- **安全误报干扰**：在金融、税务、DevOps 等非安全领域的工作被频繁阻断，开发者呼吁建立更精准的上下文分类或可信工作区白名单。
- **连接与状态同步**：WebSocket 重连循环、远程项目视图不同步、认证后插件连接缓存 stale，反映出分布式状态管理的复杂性。
- **更新与回滚机制**：应用自动更新失败（#28373）且缺乏明显回滚路径，导致用户陷入不稳定版本。
- **认证与缓存管理**：OAuth 重新认证后，本地缓存（如 app connector 链接）未能及时失效，需要手动清理（#24675），体验不佳。

---
*数据来源：github.com/openai/codex (截至 2026-06-16 社区活跃数据)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-16)

## 今日速览
过去24小时无新版本发布，但社区技术讨论与问题修复活跃。核心焦点集中在**子代理（subagent）稳定性问题**（如 hangs、权限异常）和**AST 感知工具集成评估**，同时多项安全加固（路径遍历、CI 流程防护）与配置迁移（`coreTools` → `tools.core`）的 PR 已合并或推进。

## 版本发布
无新版本发布。

## 社区热点 Issues（过去24小时更新）
以下挑选了评论数最多、优先级高或反映核心问题的 10 个 Issue：

1. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs**  
   **重要性**：P1 严重 bug，通用代理在简单操作（如创建文件夹）时无限挂起，严重影响基础功能。  
   **社区反应**：7 条评论，👍 8，用户反馈普遍遇到，是当前最紧迫的稳定性问题。

2. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck**  
   **重要性**：P1 严重 bug，Shell 工具在命令执行完成后仍显示“等待输入”，导致工作流中断。  
   **社区反应**：4 条评论，👍 3，重复出现，影响自动化任务。

3. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | get-shit-done output hook causes crash**  
   **重要性**：P1 崩溃问题，在输出摘要阶段触发 CLI 崩溃，破坏用户体验。  
   **社区反应**：3 条评论，用户报告频繁发生。

4. **[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | (Sub)agents running without permission since v0.33.0**  
   **重要性**：P2 权限失控，v0.33.0 后子代理在配置禁用的情况下仍自动运行，违反安全预期。  
   **社区反应**：2 条评论，涉及版本回归，引发对权限模型的担忧。

5. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component level evaluations**  
   **重要性**：P1 评估体系 Epic，跟进行为评估（behavioral evals），旨在建立更可靠的组件级测试框架。  
   **社区反应**：7 条评论，维护者主导，关乎长期质量保障。

6. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, and mapping**  
   **重要性**：P2 功能探索 Epic，评估 AST 感知工具（如精确读取方法边界）对代理效率与准确性的提升。  
   **社区反应**：7 条评论，👍 1，技术社区关注性能优化方向。

7. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging**  
   **重要性**：P2 安全与隐私，Auto Memory 在内容发送至模型前未充分脱敏，且日志可能泄露技能信息。  
   **社区反应**：5 条评论，反映对本地数据处理的担忧。

8. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS hides interruption**  
   **重要性**：P1 状态管理 bug，子代理达最大轮次后仍报告“成功”，掩盖中断，导致任务被误认为完成。  
   **社区反应**：6 条评论，👍 2，影响任务可靠性。

9. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough**  
   **重要性**：P2 能力利用不足，代理缺乏主动调用自定义技能和子代理的倾向，需显式指令。  
   **社区反应**：6 条评论，用户 anecdotal 反馈集中，指向代理决策逻辑。

10. **[#27277](https://github.com/google-gemini/gemini-cli/issues/27277) | Disk-full disables recording silently**  
    **重要性**：P2 数据丢失风险，磁盘满时录音静默失效，用户无感知，退出摘要可能不完整。  
    **社区反应**：2 条评论，涉及数据持久化可靠性。

## 重要 PR 进展（过去24小时更新）
以下挑选了已合并或开放中的关键 PR：

1. **[#27939](https://github.com/google-gemini/gemini-cli/pull/27939) | ci: use internal environment for scheduled nightly releases**  
   **内容**：修复夜间发布流程卡顿，将定时任务环境从需手动审批的 `prod` 切换为无审批的内部环境，恢复自动化发布。

2. **[#27948](https://github.com/google-gemini/gemini-cli/pull/27948) | chore(deps): pin dependencies and enforce 14-day update cooldown**  
   **内容**：严格锁定所有直接依赖版本，并强制依赖更新需间隔 14

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-16)

## 1. 今日速览
- 新版本 **v1.0.63-0** 发布，重点提升模型请求可靠性并引入 MCP 工具的 `deferTools` 配置选项。
- 社区持续聚焦 **权限控制精细化**（#953）与 **多 BYOK 模型支持**（#3282）等企业级需求，同时多个回归问题（如 #3727、#3781）引发开发者关注。

## 2. 版本发布
**v1.0.63-0** (2026-06-16)
- **新增**：
  - 在 `/diff` 视图中按 `w` 可隐藏仅空白字符的变更。
  - MCP 服务器配置新增 `deferTools` 选项，允许在启用工具搜索时保持工具始终可用。
- **改进**：
  - 提升 OpenAI、Anthropic 和 Azure OpenAI 请求的可靠性。
  - 实验性：`/rewind` 功能调整（具体细节未完全公开）。
- [发布说明](https://github.com/github/copilot-cli/releases/tag/v1.0.63-0)

## 3. 社区热点 Issues (Top 10)
| # | 标题 | 状态 | 关键点 | 社区反应 |
|---|------|------|--------|----------|
| [#953](https://github.com/github/copilot-cli/issues/953) | 过度权限请求问题 | OPEN | 认证时请求全账户读写权限，用户希望限制到特定仓库。 | 评论 7，👍 3，企业安全核心关切。 |
| [#3727](https://github.com/github/copilot-cli/issues/3727) | v1.0.60 回归：`userPromptSubmitted` 钩子上下文注入失效 | OPEN | 插件依赖的 `additionalContext` 在 v1.0.60 后无法注入规划器。 | 评论 4，影响插件生态稳定性。 |
| [#3282](https://github.com/github/copilot-cli/issues/3282) | 支持多 BYOK 模型配置 | OPEN | 当前仅支持单 BYOK 模型，切换需重启会话，无法在 TUI 内切换。 | 评论 3，👍 8，高需求功能。 |
| [#3781](https://github.com/github/copilot-cli/issues/3781) | 粘贴图片到非多模态模型导致会话永久错误 | CLOSED | 图片附件使后续所有请求返回 400，需手动编辑 `events.jsonl` 修复。 | 评论 3，严重用户体验问题。 |
| [#3756](https://github.com/github/copilot-cli/issues/3756) | 组织策略禁用第三方 MCP 服务器 | CLOSED | 企业策略阻止第三方 MCP 服务器，与 #1707 类似。 | 评论 3，企业部署常见障碍。 |
| [#2966](https://github.com/github/copilot-cli/issues/2966) | 内置多并发 CLI 会话管理工具 | OPEN | 高级用户需同时管理多个跨仓库/分支会话，当前无原生支持。 | 评论 3，👍 1，工作流效率需求。 |
| [#3776](https://github.com/github/copilot-cli/issues/3776) | WSL/Ubuntu 终端复制 UTF-8 文本到 Windows 乱码 | OPEN | 终端显示正常，但粘贴到 Windows 应用时出现 mojibake（如斯洛伐克语字符）。 | 评论 2，👍 1，跨平台编码问题。 |
| [#3784](https://github.com/github/copilot-cli/issues/3784) | v1.0.62-1 在 Linux ARM64 上发送首消息后崩溃 | CLOSED | Tokio 反应器恐慌，进程退出码 134。 | 评论 2，特定平台稳定性问题。 |
| [#3769](https://github.com/github/copilot-cli/issues/3769) | CLI 输出线程问题导致渲染混乱 | CLOSED | 流式响应时文本交错、重复，影响可读性。 | 评论 2，👍 3，渲染引擎缺陷。 |
| [#3716](https://github.com/github/copilot-cli/issues/3716) | [回归] 函数调用失败（Moonshot JSON Schema 错误） | CLOSED | v1.0.60 起工具参数验证失败，提示 `properties.recommendedAction.$ref` 无效。 | 评论 1，工具调用核心功能受损。 |

## 4. 重要 PR 进展
过去 24 小时仅 1 条 PR 更新，内容较简单：
- **PR #3817**：非功能性提交（`kCreate "#"`），无实质代码变更。  
  [查看 PR](https://github.com/github/copilot-cli/pull/3817)  
  *注：近期 PR 活动较少，核心功能迭代主要通过 Issue 讨论和 Release 发布。*

## 5. 功能需求趋势
从 Issues 标签与内容分析，社区最关注方向：
- **企业级安全与权限**：精细化仓库/区域访问控制（#953），符合企业合规需求。
- **模型支持灵活性**：多 BYOK 模型切换（#3282）、自定义请求头（#3399）、Claude 提示缓存优化（#3808）。
- **会话管理增强**：多会话 UI（#2966）、会话内内容搜索（#3807）、VS Code 聊天历史整合（#3816）。
- **MCP 生态扩展**：第三方服务器策略放宽（#3756）、工具延迟加载修复（#3812）、OAuth 重复认证问题（#3706）。
- **跨平台稳定性**：Windows UTF-8 处理（#3776）、Linux ARM64 支持（#3784）、安装包提取错误（#3810）。

## 6. 开发者关注点
高频痛点总结：
- **权限过度**：认证范围过大，缺乏最小权限原则选项。
- **回归问题频发**：v1.0.60/61 引入多个破坏性变更（钩子上下文、函数调用、MCP 工具访问）。
- **编码与渲染**：UTF-8 跨平台粘贴乱码、流式输出线程安全问题。
- **会话可靠性**：大附件导致 wedged 会话（#3767）、图片附件错误恢复困难。
- **企业部署限制**：MCP 服务器策略、BYOK 配置复杂度影响团队采用。
- **历史数据利用**：`/chronicle` 仅索引 CLI 会话，VS Code 聊天记录无法搜索（#3816）。

---
*数据来源：github.com/github/copilot-cli (截至 2026-06-16 24小时)*  
*报告生成：AI 开发工具技术分析师*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-16)

**数据来源**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)  
**统计周期**: 过去24小时 (截至 2026-06-16)

---

## 1. 今日速览
- 社区提交了两个关键修复 PR（#2454、#2453），分别解决 **UserPromptSubmit hook 数据传递** 和 **`--continue` 会话恢复** 问题，预计合并后将显著提升插件兼容性与工作流连续性。
- 但仍有高优先级问题待解决：**compaction 失败导致的 API 高风险拒绝**（#2402）和 **系统代理未读取**（#2455）影响部分用户核心功能，需开发团队重点关注。

---

## 2. 版本发布
- 过去 24 小时 **无新版本发布**。

---

## 3. 社区热点 Issues
（共 4 条，按更新时效与影响范围排序）

| # | 标题 | 重要性说明 | 社区反应 | 链接 |
|---|------|------------|----------|------|
| **2402** | [bug] Error: [compaction.failed] APIStatusError: 400 The request was rejected because it was considered high risk | **高**：直接影响 Windows 用户核心功能稳定性，错误导致操作中断，且涉及 API 安全策略误判，需优先排查请求模式或提供用户白名单机制。 | 0 👍, 2 💬 (持续更新至今日) | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2402) |
| **2455** | [bug] FetchURL 未读取系统代理，在被墙环境下无法访问外网 | **高**：限制 WSL2/Linux 用户在受限网络环境的基础使用，与系统工具（curl）行为不一致，影响外网模型访问能力。 | 0 👍, 0 💬 (新问题) | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2455) |
| **2222** | [bug] `kimi --continue` 报错 "No previous session found" | **中**：破坏工作流连续性，用户需手动进入会话，降低效率。**已有修复 PR #2453**，预计很快合并。 | 0 👍, 1 💬 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2222) |
| **2303** | [bug] UserPromptSubmit hook receives empty prompt when input comes from shell UI | **中**：导致基于正则的 hook 失效，影响插件生态扩展性。**已有修复 PR #2454**，解决结构化输入下的数据传递问题。 | 0 👍, 1 💬 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2303) |

---

## 4. 重要 PR 进展
（共 2 条，均为修复类 PR）

| # | 标题 | 内容说明 | 关联 Issue | 链接 |
|---|------|----------|------------|------|
| **2454** | `fix(hooks): pass prompt text to UserPromptSubmit from structured input` | 修复 hook 在 shell UI 输入时 `prompt` 为空的问题，确保 `matcher_value` 正确传递，使 regex hook 正常工作。 | #2303 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2454) |
| **2453** | `fix(session): resume latest session when last_session_id is missing` | 改进 `--continue` 逻辑：当 `last_session_id` 缺失时自动恢复最新会话，解决 “No previous session found” 错误。 | #2222 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2453) |

---

## 5. 功能需求趋势
从当前 Issues 可提炼社区关注方向：
1. **稳定性增强**：compaction 失败等运行时错误需更健壮的处理与用户友好提示。
2. **网络环境适配**：自动读取系统代理配置，改善受限网络（如企业防火墙、特定地区）下的外网访问能力。
3. **会话管理优化**：确保 `--continue` 等命令的可靠性，提升跨会话工作流连续性。
4. **扩展性保障**：hook 机制需提供完整上下文数据（如原始 prompt），支持复杂插件场景。

---

## 6. 开发者关注点
- **API 请求策略**：compaction 错误（#2402）可能与请求频率或内容格式有关，需优化或提供调试开关。
- **网络配置一致性**：FetchURL 应统一使用系统代理设置（#2455），避免与系统工具行为脱节。
- **会话存储逻辑**：`--continue` 依赖 `last_session_id` 的存储完整性（#2222），需改进会话元数据管理。
- **Hook 数据完整性**：结构化输入场景下需确保 `UserPromptSubmit` 传递完整 prompt（#2303），避免插件功能降级。

---

**报告生成时间**: 2026-06-16  
**数据说明**: 基于 GitHub API 实时抓取，仅包含过去 24 小时内有更新（创建或评论）的 Issue/PR。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-16)

**数据来源**: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 今日速览
社区今日核心讨论聚焦于**内存问题诊断**与**安全沙箱需求**，内存 Megathread 持续吸引大量用户提交堆快照。同时，多个用户报告付费订阅（OpenCode Go）支付后未激活的严重问题，引发对支付系统可靠性的担忧。PR 方面，货币配置显示、Windows 剪贴板图片粘贴等实用功能已合并，用户体验持续改进。

---

## 版本发布
过去 24 小时无新版本发布。

---

## 社区热点 Issues (Top 10)
以下 Issues 基于评论数、👍 反应及问题严重性筛选：

1. **[Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (👍 65, 评论 96)  
   **重要性**: 社区集中报告内存泄漏/占用过高问题，是当前最紧迫的性能危机。  
   **社区反应**: 极高，用户积极提供堆快照，但官方强调需手动收集而非依赖 LLM 建议。

2. **[沙箱隔离需求](https://github.com/anomalyco/opencode/issues/2242)** (👍 53, 评论 69)  
   **重要性**: 用户强烈要求限制 Agent 的文件系统访问权限，防止误操作或恶意行为。  
   **社区反应**: 持续讨论，提及 macOS 的 seatbelt 机制，凸显跨平台安全方案缺失。

3. **[Anthropic OAuth 导致封号](https://github.com/anomalyco/opencode/issues/6930)** (👍 14, 评论 22)  
   **重要性**: 使用 OpenCode OAuth 登录后升级 Claude 套餐引发 Anthropic 封号，涉及合规与用户信任。  
   **社区反应**: 已关闭，但用户担忧 OAuth 流程风险。

4. **[Full MCP client capabilities](https://github.com/anomalyco/opencode/issues/28567)** (👍 22, 评论 13)  
   **重要性**: 要求 OpenCode 的 MCP 客户端追平最新标准，以支持更丰富的工具集成。  
   **社区反应**: 高 👍 显示社区对扩展生态的迫切需求。

5. **[付费 Go 订阅支付后未激活](https://github.com/anomalyco/opencode/issues/32420)** (👍 0, 评论 3)  
   **重要性**: 多名用户付费后无法使用，支付系统存在故障，影响商业转化。  
   **社区反应**: 新 Issue，已有多人确认，急需官方响应。

6. **[Agent 配置被忽略](https://github.com/anomalyco/opencode/issues/32465)** (👍 0, 评论 2)  
   **重要性**: `tool_choice` 等核心配置项被硬编码覆盖，导致 Agent 行为不可控。  
   **社区反应**: 新报告，暴露配置系统可靠性缺陷。

7. **[DeepSeek V4-Pro 无响应](https://github.com/anomalyco/opencode/issues/28955)** (👍 1, 评论 4)  
   **重要性**: 特定模型（DeepSeek）在推理完成后不显示最终回复，模型兼容性问题。  
   **社区反应**: 模型特定问题，需针对性调试。

8. **[构建命令冻结](https://github.com/anomalyco/opencode/issues/19252)** (👍 7, 评论 10)  
   **重要性**: 执行构建后 AI 会话卡死，工作流中断，影响开发效率。  
   **社区反应**: 持续存在，可能与子进程管理有关。

9. **[工具能力提示错误](https://github.com/anomalyco/opencode/issues/32457)** (👍 0, 评论 4)  
   **重要性**: AI 对自身能力（如 LSP 支持）认知错误，系统提示未准确传递工具信息。  
   **社区反应**: 新 Issue，反映系统提示工程缺陷。

10. **[Kaspersky 报毒](https://github.com/anomalyco/opencode/issues/32350)** (👍 0, 评论 3)  
    **重要性**: 安全软件将可执行文件标记为木马，引发用户恐慌与信任危机。  
    **社区反应**: 需官方澄清或提供代码签名/白名单。

---

## 重要 PR 进展 (Top 10)
以下 PR 基于功能影响、修复范围及社区关联性筛选：

1. **[feat: 配置成本显示货币](https://github.com/anomalyco/opencode/pull/32487)**  
   **内容**: 新增 `display.currency`、`display.cost_currency` 等配置，支持自定义成本货币与汇率。  
   **影响**: 提升国际用户费用透明度。

2. **[fix(tui): Windows 剪贴板图片粘贴支持](https://github.com/anomalyco/opencode/pull/32479)**  
   **内容**: 修复 Windows 下 Ctrl+Shift+V 粘贴截图无效问题，支持 FileDrop 格式。  
   **影响**: 改善 Windows 桌面端用户体验。

3. **[refactor(opencode): 延迟加载 CLI 命令](https://github.com/anomalyco/opencode/pull/27800)**  
   **内容**: 对 `--help`、`--version` 等热路径延迟加载命令模块，显著降低启动开销。  
   **影响**: 提升 CLI 工具响应速度。

4. **[fix(opencode): 优先使用模型级 temperature](https://github.com/anomalyco/opencode/pull/27797)**  
   **内容**: 修复配置优先级，确保模型级 `temperature` 覆盖 Agent 默认值。  
   **影响**: 增强模型参数配置的精确性。

5. **[feat(tui): 可见的白色滚动条](https://github.com/anomalyco/opencode/pull/27795)**  
   **内容**: 在 TUI 会话聊天区域添加可见、易交互的白色滚动条。  
   **影响**: 改善终端 UI 可用性。

6. **[feat(tui): 侧边栏文件差异统计](https://github.com/anomalyco/opencode/pull/27794)**  
   **内容**: 在 Modified Files 旁显示增删行数，使用主题色区分。  
   **影响**: 提升代码变更可视化。

7. **[fix(session): 空项目 `--continue` 行为改进](https://github.com/anomalyco/opencode/pull/27776)**  
   **内容**: 优化空项目使用 `-c` 标志时的行为，避免无效操作。  
   **影响**: 提升工作流鲁棒性。

8. **[fix(server): 实现 findSymbol 端点](https://github.com/anomalyco/opencode/pull/27773)**  
   **内容**: 将 `findSymbol` 从空实现改为调用 LSP 的 `workspaceSymbol`。  
   **影响**: 激活符号搜索功能，增强代码导航。

9. **[fix(snapshot): git 操作使用工作树目录](https://github.com/anomalyco/opencode/pull/27737)**  
   **内容**: 修正快照功能中 git 命令的 `cwd`，确保在正确的工作树中执行。  
   **影响**: 修复快照在复杂 git 布局（如 WSL）下的错误。

10. **[feat(mcp): 暴露认证工具给需要认证的 MCP](https://github.com/anomalyco/opencode/pull/27725)**  
    **内容**: 为状态为 `needs_auth` 的 MCP 自动生成 `<name>__authenticate` 工具。  
    **影响**: 简化 MCP 服务的 OAuth 集成流程。

---

## 功能需求趋势
从 Issues 中提炼出社区最关注的方向：
- **安全与隔离**: 沙箱机制、文件权限控制、`.env` 保护成为高频需求。
- **MCP 生态扩展**: 要求全面支持最新 MCP 标准，增强工具发现与认证。
- **模型兼容性与可靠性**: 针对 DeepSeek、xAI/Grok 等特定模型的连接与响应问题。
- **配置系统灵活性**: 货币显示、模型参数覆盖、Agent 配置优先级等精细化控制。
- **跨平台 UI/UX 一致性**: Windows 剪贴板、CJK 编码、滚动条等本地化体验优化。
- **工作流稳定性**: 构建冻结、会话超时、子进程管理等开发流程痛点。

---

## 开发者关注点
开发者反馈中的核心痛点与高频需求：
1. **内存诊断困难**: 缺乏内置堆快照工具，依赖用户手动操作，阻碍问题复现。
2. **安全边界模糊**: 无默认沙箱，Agent 可随意访问文件系统，生产环境使用风险高。
3. **配置可靠性差**: 多起报告显示配置（如 `tool_choice`、`npm` 覆盖）被静默忽略，行为不可预测。
4. **付费系统故障**: 支付后订阅未激活，且支持响应缓慢，影响付费用户留存。
5. **模型特定异常**: DeepSeek、Qwen 等模型出现无响应、持续计费等非标准行为。
6. **跨平台兼容性**: Windows CJK 路径、macOS PAC 陷阱、Linux 终端粘贴等环境问题频发。
7. **错误处理不足**: "Upstream idle timeout"、构建冻结等错误缺乏清晰诊断与自动恢复。

---

*报告生成时间: 2026-06-16*  
*注: 以上分析基于 GitHub 公开数据，仅反映社区活跃议题，不构成官方立场。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-16)

## 今日速览
- Qwen Code 于今日发布 **v0.18.1** 及 **Desktop v0.0.4** 版本，重点修复了模型选择、MCP 服务器持久化等稳定性问题。
- 社区围绕 **`/loop` 功能对齐** 展开密集开发，多个相关 PR 已合并，同时修复了模型列表误导、内存泄漏等关键问题。
- 开发者反馈集中在 **历史记录显示、终端兼容性（tmux/ghostty）及权限管理** 等方面，需持续优化交互体验。

## 版本发布
- **v0.18.1**：常规维护版本，包含 daemon 安全改进（需显式 opt-in 直接会话 shell）及多项错误修复。  
  [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.1)
- **Desktop v0.0.4**：桌面端更新，修复 MCP 服务器移除持久化及模型默认值刷新问题。  
  [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.0.4)

## 社区热点 Issues（过去24小时）
| # | 标题 | 状态 | 重要性说明 | 社区反应 |
|---|------|------|------------|----------|
| [#5142](https://github.com/QwenLM/qwen-code/issues/5142) | Virtualized History Mode 历史不可见 | OPEN | 核心 UI 缺陷：历史记录在虚拟化模式下默认隐藏，仅按 `/` 可见，严重影响用户体验。 | 4 条评论，用户提供截图复现，属高优先级交互问题。 |
| [#5160](https://github.com/QwenLM/qwen-code/issues/5160) | `/model` 列表显示已停用 OAuth 模型 | OPEN | 误导性 UX：未配置 OAuth 时仍显示 discontinued 模型，易导致用户误选。 | 3 条评论，社区建议隐藏或明确标注。 |
| [#5173](https://github.com/QwenLM/qwen-code/issues/5173) | 多提供商相同模型 ID 选择不持久 | OPEN | 模型管理关键缺陷：当多个提供商注册同名模型（如 `qwen3.7-max`）时，选择无法跨会话保存。 | 2 条评论，影响多供应商环境配置。 |
| [#5147](https://github.com/QwenLM/qwen-code/issues/5147) | `/quit` 后 OOM（内存溢出） | OPEN | 严重性能问题：退出时 managed auto-memory 后台任务可能触发堆内存溢出，即使工具调用数为 0。 | 2 条评论，涉及 `GeminiClient.runManagedAutoMemory`，需深入排查。 |
| [#5159](https://github.com/QwenLM/qwen-code/issues/5159) | tmux 中 trackpad 滚动触发历史导航 | OPEN | 终端兼容性问题：在 macOS tmux 会话中，触摸板滚动被误映射为提示历史导航，无法正常滚动视图。 | 2 条评论，影响多终端用户工作流。 |
| [#5119](https://github.com/QwenLM/qwen-code/issues/5119) | sudo 命令无确认机制 | CLOSED | 安全与体验：代理尝试运行 sudo 时失败，需用户手动复制粘贴，缺乏权限提升交互流程。 | 2 条评论

</details>

---
*本日报由 [Big Model Radar](https://github.com/zx0828/big_model_radar) 自动生成。*