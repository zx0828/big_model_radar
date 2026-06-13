# AI CLI 工具社区动态日报 2026-06-13

> 生成时间: 2026-06-13 00:40 UTC | 覆盖工具: 7 个

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

# AI CLI 工具生态横向对比分析报告 (2026-06-13)

## 1. 生态全景
当前 AI CLI 工具生态整体处于 **“快速迭代与深度问题暴露并存”** 的阶段。各主流工具均在频繁发布版本以推进功能，但社区反馈已从早期的功能请求，大规模转向对**基础稳定性、安全权限、成本控制**等核心体验的迫切诉求。Windows/macOS 平台特定故障、Agent 行为不可靠、计费不透明成为共性痛点，反映出行业正从“追求能力上限”转向“夯实可靠性基础”的关键过渡期。底层架构重构（如会话管理、插件系统）与高级功能（如多 Agent 协同、深度 IDE 集成）的推进，也带来了新的复杂性与短期不稳定。

## 2. 各工具活跃度对比
| 工具 | 社区热点 Issues (Top 10) | 重要 PR 数量 | Release 情况 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 条 (数据完整) | 2 个 | 3 个版本 (v2.1.174-176) |
| **OpenAI Codex** | 10 条 (数据完整) | 10 个 | 4 个 Rust 绑定预发布版 (v0.140.0-alpha) |
| **Gemini CLI** | 10 条 (数据完整) | 10 个 | 1 个 nightly 版 (v0.48.0-nightly) |
| **GitHub Copilot CLI** | 数据未完全公开 (仅 #53 明确高互动) | 未明确统计 | 1 个版本 (v1.0.62-1) |
| **Kimi Code CLI** | 3 条 (数据完整) | 1 个 | 无新版本 |
| **OpenCode** | 10 条 (数据完整) | 10 个 | 1 个版本 (v1.17.4) |
| **Qwen Code** | 10 条 (数据完整) | 10 个 | 1 个版本 (v0.18.0) |

**注**：GitHub Copilot CLI 因“恢复命令”争议（#53 达 75👍）社区互动极高，但未提供完整的 Issues/PR 统计列表，上表以“未明确统计”标注。

## 3. 共同关注的功能方向
多个工具社区同时聚焦以下方向，反映了行业级需求：
- **会话管理与状态可靠性**：
  - **Claude Code**: 模型自动升级至 1M 导致成本阻塞，需回退机制 (#65359)。
  - **OpenAI Codex**: 实验性会话分段以改善长会话性能与内存 (#27249)。
  - **Gemini CLI**: Agent 在达到最大轮次后错误报告成功，状态不可信 (#22323)。
  - **Qwen Code**: 长程任务下工具重复调用导致会话终止 (#5019)。
- **安全与权限机制强化**：
  - **Claude Code**: Write 工具默认全文件替换导致数据丢失 (#67917)。
  - **OpenCode**: 权限通配符覆盖规则、子代理绕过权限等逻辑漏洞 (#24335, #32024)。
  - **Gemini CLI**: Auto Memory 提取前已发送内容，需确定性脱敏 (#26525)。
  - **Qwen Code**: 项目级 MCP 服务器启用批准门控 (#4713)。
- **成本可预测性与透明度**：
  - **Claude Code**: 1M 上下文额度消耗无预警 (#65359)。
  - **Kimi Code**: “按 token 计费”模式下高消耗模型额度消耗速度与预期严重不符 (#1994)。
  - **Qwen Code**: OAuth 免费额度政策大幅调整（1000次/日→100次/日）引发信任危机 (#3203)。
- **跨平台基础体验**：
  - **Claude Code**: macOS 复制粘贴功能失效 (#66192)、TUI 渲染乱码 (#66795)。
  - **OpenAI Codex**: Windows 沙箱 `spawn setup refresh` 失败导致核心功能瘫痪 (#24391, #25220)。
  - **Gemini CLI**: 浏览器子代理在 Wayland 环境下失败 (#21983)。
  - **OpenCode**: TUI 通知在 `zellij/tmux` 下不触发 (#29099)。

## 4. 差异化定位分析
| 工具 | 功能侧重 | 目标用户 | 技术路线特点 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 高度可配置的通用编程助手，多语言会话、丰富设置项。 | 需要深度定制工作流的开发者。 | 通过大量设置（`footerLinksRegexes`, `enforceAvailableModels`等）提供灵活性，但基础交互稳定性待提升。 |
| **OpenAI Codex** | 以 **Computer Use** 为核心的深度自动化与浏览器操作能力。 | 重度依赖自动化脚本、浏览器交互的进阶用户。 | 正在进行重大底层重构（会话分段、插件认证路由），但 Windows 沙箱稳定性危机严重阻碍核心功能。 |
| **Gemini CLI** | **多 Agent 协同** 与技能（Skills）系统，擅长任务分解。 | 喜欢用子代理处理复杂、多步骤任务的用户。 | 核心挑战在于 Agent 行为可靠性（挂起、状态报告），正优化工具调用逻辑与状态管理。 |
| **GitHub Copilot CLI** | 深度集成 **GitHub 生态**（Issues/PR 搜索、代码审查）。 | GitHub-centric 的开发团队与个人。 | 因移除原有命令引发工作流中断争议，技术重心在 IDE 集成与 GitHub 工作流增强。 |

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截至 2026-06-13）

## 1. 热门 Skills 排行
基于 PR 更新活跃度、问题关联性及功能覆盖范围，以下 Skills 受到社区高度关注：

| 排名 | Skill / PR | 功能简述 | 社区讨论热点 | 状态 |
|------|------------|----------|--------------|------|
| 1 | **[#1046] feat: add new skill definition files** | 新增 `frontend-design`、`ai-experience-consultant`、`automation-workflows-builder` 等技能定义文件，覆盖设计、AI体验咨询与自动化工作流构建。 | 多技能集成是否会导致技能市场碎片化？各技能边界如何清晰划分？ | OPEN |
| 2 | **[#514] Add document-typography skill** | 专门解决 AI 生成文档的排版问题，如孤行、寡行、编号错位等，提升文档专业度。 | 是否应作为所有文档类技能的默认后处理？与 `document-skills` 插件如何协同？ | OPEN |
| 3 | **[#486] Add ODT skill** | 支持 OpenDocument 格式（.odt, .ods）的创建、模板填充、解析与 HTML 转换，填补开源办公文档支持空白。 | 与 LibreOffice 的兼容性深度？是否支持 ODF 高级特性（如宏）？ | OPEN |
| 4 | **[#1298] fix(skill-creator): run_eval.py 0% recall 问题** | 修复技能评估工具 `run_eval.py` 的核心缺陷，解决 Windows 流读取、触发检测、并行工作等导致评估失效的系列问题。 | 该修复是否已稳定？是否影响 `improve_description.py` 的优化循环？ | OPEN |
| 5 | **[#723] feat: add testing-patterns skill** | 提供完整的测试策略指南，涵盖测试哲学、单元测试、React 组件测试、端到端测试等，强调“测试 Trophy”模型。 | 是否与现有 `code-review` 技能重叠？如何平衡测试覆盖与维护成本？ | OPEN |
| 6 | **[#1302] Add color-expert skill** | 独立的颜色知识技能，涵盖命名系统（ISCC-NBS、Munsell 等）、色彩空间选择指南、对比度与可访问性规则。 | 是否应集成到 `design-system` 或 `frontend-design` 中？如何量化色彩决策？ | OPEN |
| 7 | **[#83] Add skill-quality-analyzer & skill-security-analyzer** | 元技能，用于评估其他技能的质量（结构、文档、示例等）与安全性（权限边界、数据泄露风险）。 | 是否应作为技能提交前的强制检查？评分标准是否公开透明？ | OPEN |
| 8 | **[#210] Improve frontend-design skill** | 优化 `frontend-design` 技能的清晰度与可执行性，确保每条指令在单次对话中可操作，避免模糊指导。 | 如何定义“单次对话可执行”？是否需引入状态管理？ | OPEN |

## 2. 社区需求趋势
从 Issues 讨论中提炼出社区最期待的新 Skill 方向：

- **企业级工作流集成**：如 `n8n-builder`/`n8n-debugger`（PR #190）所示，社区需要与低代码平台（n8n、Zapier）深度集成的技能，用于自动化跨系统业务流程。
- **安全与治理**：`skill-security-analyzer`（PR #83）与 `agent-governance`（Issue #412）反映对 AI 代理系统安全模式（策略执行、威胁检测、审计跟踪）的迫切需求。
- **多格式文档处理**：`document-typography`（PR #514）、`odt`（PR #486）及 SharePoint 安全讨论（Issue #1175）表明，社区希望扩展对非 PDF/DOCX 格式（ODT、SPO）的本地化、安全访问支持。
- **技能开发工具链**：`skill-creator` 的持续优化（PR #539、#541、#1099、#1050、#1298）显示社区需要更健壮、跨平台（尤其 Windows）的技能创建与评估工具。
- **领域知识封装**：`color-expert`（PR #1302）、`testing-patterns`（PR #723）等垂直领域技能表明，社区倾向于将专业知识打包为独立、可复用的技能单元。

## 3. 高潜力待合并 Skills
以下 PR 评论活跃（关联多个 Issues）、更新频繁，且解决核心痛点，可能近期合并：

- **[#1298] fix(skill-creator): run_eval.py always reports 0% recall**  
  链接：https://github.com/anthropics/skills/pull/1298  
  关联 Issue #556、#1169，修复评估工具的根本缺陷，是技能优化循环生效的关键。

- **[#1140] feat: implement agent-creator skill and fix multi-tool evaluation**  
  链接：https://github.com/anthropics/skills/pull/1140  
  新增 `agent-creator` 元技能，并修复多工具并行调用评估，提升复杂任务编排能力。

- **[#1046] feat: add new skill definition files**  
  链接：https://github.com/anthropics/skills/pull/1046  
  大合集 PR，引入三个高需求技能（前端设计、AI体验咨询、自动化工作流），覆盖企业常见场景。

- **[#723] feat: add testing-patterns skill**  
  链接：https://github.com/anthropics/skills/pull/723  
  系统化测试知识封装，填补开发流程中测试环节的技能空白。

- **[#1302] Add color-expert skill**  
  链接：https://github.com/anthropics/skills/pull/1302  
  设计领域专业技能的独立封装，与 `frontend-design` 形成互补。

## 4. Skills 生态洞察
**社区当前最集中的诉求是：建立可靠、安全且跨平台的技能开发与评估工具链，同时推动技能内容向垂直领域深度专业化与元分析能力（质量/安全评估）双向演进。**  
（工具链稳定性、Windows 兼容性、组织内共享、信任边界安全是阻碍技能大规模采用的核心瓶颈；而文档增强、设计系统、测试模式、色彩科学等专业技能的涌现，标志着社区从“通用辅助”向“领域专家”转型。）

---

# Claude Code 社区动态日报 (2026-06-13)

**数据来源**: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)  
**统计周期**: 过去24小时

---

## 1. 今日速览
今日社区核心围绕 **v2.1.176 版本发布** 展开，该版本增强了多语言会话标题和配置灵活性。同时，**macOS 复制粘贴故障**、**1M 上下文模型的成本阻塞问题** 以及 **Write 工具的数据安全风险** 成为用户反馈最集中的三大痛点，社区讨论活跃。

---

## 2. 版本发布
过去24小时共发布3个版本，最新为 **v2.1.176**：
- **v2.1.176**: 会话标题生成支持对话语言；新增 `footerLinksRegexes` 设置以定制页脚链接；改进 Bedrock 凭证处理（内容被截断）。
- **v2.1.175**: 新增 `enforceAvailableModels` 管理设置，强化模型允许列表对默认模型的约束。
- **v2.1.174**: 新增 `wheelScrollAccelerationEnabled` 设置以禁用全屏模式下的滚轮加速；修复模型选择器中 Opus/Sonnet 的显示问题。

---

## 3. 社区热点 Issues (Top 10)
以下 Issues 基于评论数、点赞数及问题严重性筛选：

| # | 标题 | 类型 | 关键点 | 社区反应 | 链接 |
|---|------|------|--------|----------|------|
| **28351** | 允许在远程控制时使用斜杠命令 | 功能请求 | 远程控制场景下无法使用 `/` 命令，严重限制协作效率。 | **87 👍**，9 条评论，高需求。 | [链接](https://github.com/anthropics/claude-code/issues/28351) |
| **66192** | [macOS] 复制粘贴功能失效 | Bug | 基础编辑功能损坏，影响日常使用。 | 8 👍，9 条评论，用户频繁提及。 | [链接](https://github.com/anthropics/claude-code/issues/66192) |
| **65359** | 长会话触发“需要 1M 上下文额度”错误 | Bug | 会话自动升级至 1M 模型时，若套餐不支持则完全阻塞，无回退机制。 | 影响工作流连续性，多个相关报告。 | [链接](https://github.com/anthropics/claude-code/issues/65359) |
| **50015** | 自动压缩前无警告（回归） | Bug | 旧版本有预压缩警告，新版本移除，导致用户无法自主保存关键上下文。 | 7 条评论，用户认为这是体验退化。 | [链接](https://github.com/anthropics/claude-code/issues/50015) |
| **67917** | Write 工具默认全文件替换导致数据丢失 | Bug/安全 | 对受治理、未跟踪文件执行不可逆的完整覆盖，缺乏保护机制。 | **高危**，涉及数据安全，5 条评论。 | [链接](https://github.com/anthropics/claude-code/issues/67917) |
| **66795** | [macOS] TUI 渲染乱码、输出不可见 | Bug | 终端界面显示异常，需手动调整窗口大小才能恢复。 | 4 条评论，影响多平台用户体验。 | [链接](https://github.com/anthropics/claude-code/issues/66795) |
| **67609** | Advisor 工具在 Fable 5 上超 100K tokens 返回“unavailable” | Bug | 特定模型下，上下文稍大便触发工具不可用，功能受限。 | 6 👍，2 条评论，疑似模型限制。 | [链接](https://github.com/anthropics/claude-code/issues/67609) |
| **67411** | 单次 advisor 失败导致工具永久禁用 | Bug | 临时性故障（如限流）被错误地永久“锁定”工具，且错误信息模糊。 | 2 条评论，降低工具可靠性。 | [链接](https://github.com/anthropics/claude-code/issues/67411) |
| **61599 系列** | 文档多处缺失/过时（Skills、MCP、权限等） | 文档 | 用户 `coygeek` 集中提交了 **10+ 个文档问题**，涵盖 Skills 参数、MCP 策略、权限边界、命令参考等。 | 虽单条 👍 低，但反映**系统性文档滞后**，影响配置正确性。 | [示例链接](https://github.com/anthropics/claude-code/issues/61599) |
| **67863** | Fable 5 安全误报（误判常规内容） | Bug | 安全模块对无害内容（如生物、网络话题）过度拦截，干扰正常对话。 | 2 条评论，影响模型可用性。 | [链接](https://github.com/anthropics/claude-code/issues/67863) |

---

## 4. 重要 PR 进展
过去24小时仅 2 个 PR 更新，均值得关注：

| # | 标题 | 类型 | 内容摘要 | 链接 |
|---|------|------|----------|------|
| **67753** | fix(ralph-wiggum): case-insensitive completion promise matching | 修复 | 补全承诺匹配改为**大小写不敏感**并规范空格，避免因输出大小写差异（如 `Complete` vs `COMPLETE`）导致匹配失败。 | [链接](https://github.com/anthropics/claude-code/pull/67753) |
| **67722** | [BUG] Claude 自主运行调用付费外部服务的后台脚本 | 安全/行为 | 报告 Claude 在未明确指令下，**自主执行可能产生费用的外部脚本**，涉及成本控制与行为边界问题。PR 内容为问题描述。 | [链接](https://github.com/anthropics/claude-code/pull/67722) |

---

## 5. 功能需求趋势
从 Issues 中提炼出社区最关注的四大方向：
1. **IDE 与远程集成深化**：强烈要求在远程控制（如 SSH、容器）场景下支持斜杠命令（#28351），体现对无缝开发环境的渴求。
2. **模型与成本精细控制**：`enforceAvailableModels` 设置（v2.1.175）回应了用户对**模型降级策略**和**成本意外超支**（1M context 阻塞）的担忧，未来需更透明的成本提示与回退逻辑。
3. **安全与权限机制强化**：Write 工具的数据保护（#67917）、advisor 工具的故障隔离（#67411）反映用户对**工具副作用**和**错误恢复**的高度敏感。
4. **文档与功能同步**：大量文档问题（coygeek 系列）表明**文档更新严重滞后于功能迭代**，尤其是 Skills、MCP、权限等高级配置，亟需建立文档自动化或同步流程。

---

## 6. 开发者关注点
开发者反馈集中体现以下痛点：
- **基础功能可靠性**：macOS 复制粘贴（#66192）、TUI 渲染（#66795）等基础交互问题频繁出现，影响核心体验。
- **成本可预测性**：1M 上下文自动升级导致的意外额度消耗（#65359, #66067）使用户对账单产生焦虑，需更清晰的预提示与用户可控的升级策略。
- **安全与数据保护**：工具（如 Write）的默认行为缺乏防护（#67917），以及模型安全误报（#67863），引发对数据安全和生产环境可用性的担忧。
- **工具行为可预测性**：advisor 工具的永久锁定（#67411）和自动模型降级（#68090）显示错误处理逻辑需优化，避免“过度反应”。
- **文档即代码**：文档与实际功能脱节（如 Skills 参数、权限边界）导致配置错误，社区呼吁将文档纳入开发流程，确保同步更新。

---

**报告生成时间**: 2026-06-13  
**分析师备注**: 建议优先修复高影响 Bug（复制粘贴、成本阻塞、数据安全），并启动文档专项同步，以稳定社区信心。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-13)

## 1. 今日速览
今日社区动态核心围绕 **Windows 沙箱稳定性危机** 与 **底层架构迭代** 两大主线。大量 Windows 用户报告 `node_repl`/Computer Use 功能因“spawn setup refresh”错误（OS error 740）而瘫痪，同时 Rust 绑定库进入密集的 `v0.140.0-alpha` 迭代周期，多个关键架构 PR（如会话分段、插件认证路由）正在推进，预示系统正进行重大内部重构。

## 2. 版本发布
- **Rust 绑定 (`openai/codex` 仓库)**: 过去24小时内连续发布四个预发布版本 (`v0.140.0-alpha.13` 至 `v0.140.0-alpha.16`)，属于常规的每日构建迭代，主要为底层基础设施和 API 的持续开发，对终端用户影响有限。

## 3. 社区热点 Issues (Top 10)
| # | 标题 | 状态 | 关键点 | 社区反应 |
| :--- | :--- | :--- | :--- | :--- |
| [#12564](https://github.com/openai/codex/issues/12564) | 允许重命名任务/线程标题以改善历史导航 | CLOSED | **高需求增强**：VS Code 扩展用户强烈要求改善会话历史管理，获得 111 👍 和 78 条评论。 | 社区高度支持，视为提升 IDE 内工作流连续性的关键功能。 |
| [#24391](https://github.com/openai/codex/issues/24391) | Windows 沙箱：Codex CLI 0.133.0 后 spawn setup refresh 失败 | CLOSED | **Windows 沙箱危机起点**：报告 CLI 更新后，所有沙箱命令（如 `rg --version`）均失败，触发 UAC 错误 740。 | 引发大量后续类似报告，是当前 Windows 问题的根源性报告之一。 |
| [#25243](https://github.com/openai/codex/issues/25243) | macOS：Codex 重启循环耗尽 `syspolicyd` 文件描述符 | OPEN | **macOS 严重性能/稳定性问题**：Pro 用户报告应用因系统策略守护进程资源耗尽而无法启动。 | 影响 macOS 高端用户，问题严重但报告相对较少，可能影响面较窄。 |
| [#25220](https://github.com/openai/codex/issues/25220) | Windows：捆绑插件（Computer Use 等）因 EFS 加密文件不可用 | OPEN | **Windows 沙箱影响核心功能**：明确指向 `copyfile` 在加密 `WindowsApps` 目录失败，导致 Computer Use、Browser、Chrome、LaTeX 插件全部失效。 | 直击 Windows 用户最依赖的自动化功能，评论活跃（16）。 |
| [#27175](https://github.com/openai/codex/issues/27175) | Windows Desktop 26.602.71036 更新后崩溃/无法访问 | OPEN | **Windows 应用级崩溃**：即使空会话也会崩溃，影响最新版桌面应用，Pro 用户首当其冲。 | 新出现的严重问题，表明近期 Windows 更新可能引入了新 instability。 |
| [#22335](https://github.com/openai/codex/issues/22335) | CLI 远程压缩反复失败，导致恢复的线程失去任务连续性 | OPEN | **工作流连续性破坏**：影响使用 `gpt-5.5` high/xhigh 模型的 Pro 用户，远程会话压缩失败导致上下文丢失。 | 8 👍，反映高级用户对长会话管理工具的可靠性焦虑。 |
| [#19205](https://github.com/openai/codex/issues/19205) | 撤销功能不应依赖 Git 仓库存在 | OPEN | **IDE 集成体验缺陷**：VS Code 扩展中，撤销操作在非 Git 项目下失效，不符合直觉。 | 6 👍，开发者期望更通用的本地撤销能力。 |
| [#27979](https://github.com/openai/codex/issues/27979) | Windows Codex App 26.609.4994.0 更新后完全无法打开 | OPEN | **Windows 最新版应用级故障**：6月12日更新后应用直接无法启动，“关于”对话框都无法显示。 | 6 条评论，0 👍，最新爆发的紧急问题，显示 Windows 稳定性问题在恶化。 |
| [#24050](https://github.com/openai/codex/issues/24050) | Windows 沙箱设置助手触发 UAC 安装程序检测 (os error 740) | CLOSED | **Windows 沙箱根本原因分析**：精确定位到沙箱设置可执行文件被 Windows 误判为安装程序而触发 UAC。 | 13 👍，是理解 Windows 沙箱问题技术根源的关键文档。 |
| [#14303](https://github.com/openai/codex/issues/14303) | Codex 挂起等待后台脚本完成（尽管脚本已结束） | OPEN | **通用性能/可靠性问题**：影响 macOS/Linux 用户，表现为工具调用后 hang，可能与进程监控或 IPC 有关。 | 0 👍但评论较多（6），是长期存在的隐性痛点。 |

## 4. 重要 PR 进展 (Top 10)
| # | 标题 | 状态 | 功能/修复内容 | 影响 |
| :--- | :--- | :--- | :--- | :--- |
| [#27459](https://github.com/openai/codex/pull/27459) | 按认证路由限制插件 MCP 服务器 | OPEN | **插件系统架构重构**：在 `PluginsManager` 中实现认证感知的表面投影，统一管理 App 连接器和 MCP 服务器的可见性。 | 解决插件在 ChatGPT/SIWC 会话与 API Key 会话间的显示冲突，为插件生态统一体验打基础。 |
| [#27652](https://github.com/openai/codex/pull/27652) | 为插件管理器构造函数添加认证模式 | OPEN | **插件系统架构重构**：为 `PluginsManager` 提供认证上下文，是 #27459 的配套改动。 | 同上，共同推进插件认证模型的清晰化。 |
| [#27249](https://github.com/openai/codex/pull/27249) | 添加特性开关的会话分段 | OPEN | **实验性会话管理**：引入 `session_segmentation` 特性，通过单线程写入事务实现追加、刷新、关闭和轮转的序列化，发布不可变前置快照。 | 旨在改善长会话性能与内存管理，为未来会话操作（如分支、压缩）提供基础。 |
| [#27836](https://github.com/openai/codex/pull/27836) | 在采样前刷新环境上下文 | OPEN | **上下文准确性提升**：在每次模型采样前，仅比较缓存的环境元数据，如有变化则追加仅环境上下文项。 | 确保模型感知的 `cwd`/shell 状态最新，提升代码操作和命令执行的准确性。 |
| [#27986](https://github.com/openai/codex/pull/27986) | 公开实时交接追加 API | OPEN | **Realtime API 扩展**：添加实验性 `thread/realtime/appendHandoff` 方法，用于在 Realtime V1 会话中精确发送 `conversation.handoff.append` 事件。 | 支持更精细的实时会话控制，便于构建复杂交互流。 |
| [#27964](https://github.com/openai/codex/pull/27964) | 添加 hermetic Wine 测试支持 | OPEN | **跨平台测试基础设施**：使 app-server 调度器能控制运行不同 OS（通过 Wine）的 exec-server。 | 提升在非原生环境（如 Linux 上运行 Windows 工具）的测试覆盖和可靠性。 |
| [#27763](https://github.com/openai/codex/pull/27763) | 增加 Windows x64 codegen 单元 | CLOSED | **Windows 构建性能优化**：将 Windows x64 主构建的 codegen 单元数从 1 增至 4，显著缩短 CI 构建时间（从 ~32 分钟改善）。 | 直接回应 Windows 开发者对编译速度的抱怨，改善贡献者体验。 |
| [#27925](https://github.com/openai/codex/pull/27925) | 重新落地 token 活动命令 | CLOSED | **TUI 功能恢复**：修复因基础分支变基而丢失的 `token activity` TUI 命令。 | 恢复终端用户监控 token 使用情况的能力。 |
| [#27819](https://github.com/openai/codex/pull/27819) | path-uri：跨平台渲染原生路径 | OPEN | **跨平台路径处理**：添加 `PathConvention` 枚举，使 `PathUri` 能正确表示和转换不同操作系统间的路径。 | 为跨 OS 的远程执行场景（如 Linux 控制 Windows）提供路径操作基础。 |
| [#27982](https://github.com/openai/codex/pull/27982) | 为自动审查预热附加的 Guardian 会话 | OPEN | **安全/审查集成**：将 Guardian 审查会话管理器附加到正常会话服务，在启用自动审查时初始化子会话并复用 WebSocket 预连接。 | 提升启用内容审查功能时的启动性能和资源利用率。 |

## 5. 功能需求趋势
从 Issues 讨论中提炼出社区最关注的方向：
1.  **Windows 沙箱稳定性 (最高优先级)**：修复 `spawn setup refresh` 失败和 UAC 错误 740，恢复 `node_repl`、Computer Use、Browser 插件功能是 Windows 用户的**绝对首要诉求**。
2.  **插件系统统一与简化**：明确 App 插件与 MCP 服务器的认证路由关系，避免用户困惑，确保插件在不同会话类型下正确显示和安装。
3.  **IDE 集成体验深化**：VS Code 扩展中，任务/线程历史管理（重命名、撤销）是提升开发工作流连续性的关键需求。
4.  **会话管理与性能**：实验性会话分段、环境上下文增量刷新，旨在解决长会话性能、内存及上下文准确性问题。
5.  **跨平台与远程执行健壮性**：通过 `PathUri`、Wine 测试等改进，提升在异构环境（不同 OS）下远程控制的可靠性。
6.  **实时交互能力**：通过 `appendHandoff` 等 API 增强 Realtime 会话的精细控制能力。

## 6. 开发者关注点
- **Windows 用户的痛苦指数最高**：沙箱问题导致核心自动化功能（Computer Use、Browser）大面积失效，且问题在多个版本间反复，修复进展缓慢，引发强烈不满和大量重复报告。
- **插件生态的复杂性**：用户对“插件不可用”、“配置被覆盖”等问题感到困惑，根源在于 App 与 MCP 双Surface、认证方式与配置管理的交互复杂，亟需 PR #27459/27652 所推进的简化。
- **工作流可靠性**：远程会话压缩失败（#22335）导致任务上下文丢失，以及撤销功能依赖 Git（#19205），破坏了开发者对 Codex 作为可靠编程助手的信任。
- **构建与性能**：Windows 编译时间过长（已通过 PR #27763 部分缓解），以及 macOS 的潜在资源泄漏问题（#25243），影响本地开发体验。
- **架构透明度**：大量 PR 涉及 `app-server`、`exec-server`、`session segmentation` 等底层重构，表明 Codex 正在向更模块化、可扩展的架构演进，但这也可能带来短期的不稳定性。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-13)

## 今日速览
今日发布了 **v0.48.0-nightly** 版本，重点修复了 MCP 工具发现的原子更新问题和 Vertex AI 模型映射错误，并新增了迁移命令。社区讨论仍高度聚焦于 **Agent 行为的可靠性与控制**，尤其是子代理挂起、工具调用逻辑及 Auto Memory 的安全性问题，多个高优先级 Issue 持续引发关注。

## 版本发布
- **v0.48.0-nightly.20260613.g9e5599c32** ([发布说明](https://github.com/google-gemini/gemini-cli/releases/tag/v0.48.0-nightly.20260613.g9e5599c32))
  - 核心修复：实现 MCP 工具发现的原子更新，避免状态不一致。
  - 模型支持：修复 Vertex AI 模型映射逻辑。
  - 用户体验：新增文档与迁移命令，辅助用户升级。

## 社区热点 Issues (Top 10)
1. **[#21409] Generalist agent hangs** ([链接](https://github.com/google-gemini/gemini-cli/issues/21409))
   - **重要性**：P1 严重缺陷，通用代理在简单任务（如创建文件夹）时无限挂起，严重影响基础工作流。社区反响强烈（👍 8）。
2. **[#22323] Subagent recovery after MAX_TURNS is reported as GOAL success** ([链接](https://github.com/google-gemini/gemini-cli/issues/22323))
   - **重要性**：P1 逻辑错误，`codebase_investigator` 在达到最大轮次后仍报告成功，掩盖了真实的中断状态，导致任务状态不可信。
3. **[#21968] Gemini does not use skills and sub-agents enough** ([链接](https://github.com/google-gemini/gemini-cli/issues/21968))
   - **重要性**：P2 功能缺陷，模型在未明确指令时极少主动调用已配置的技能和子代理，导致能力浪费，社区普遍反馈此问题。
4. **[#26525] Add deterministic redaction and reduce Auto Memory logging** ([链接](https://github.com/google-gemini/gemini-cli/issues/26525))
   - **重要性**：P2 安全与隐私，Auto Memory 在提取前已将内容发送至模型，且日志可能泄露技能信息，需实现确定性脱敏。
5. **[#26522] Stop Auto Memory from retrying low-signal sessions indefinitely** ([链接](https://github.com/google-gemini/gemini-cli/issues/26522))
   - **重要性**：P2 稳定性，低信号会话会陷入无限重试循环，消耗资源且无法被有效清理。
6. **[#25166] Shell command execution gets stuck with "Waiting input"** ([链接](https://github.com/google-gemini/gemini-cli/issues/25166))
   - **重要性**：P1 常见故障，简单 Shell 命令执行完毕后 UI 仍显示“等待输入”，用户体验差（👍 3）。
7. **[#21983] browser subagent fails in wayland** ([链接](https://github.com/google-gemini/gemini-cli/issues/21983))
   - **重要性**：P1 平台兼容性，浏览器子代理在 Wayland 环境下失败，限制了 Linux 桌面用户的使用。
8. **[#20079] ~/.gemini/agents/filename.md is not recognized if symlink** ([链接](https://github.com/google-gemini/gemini-cli/issues/20079))
   - **重要性**：P2 配置灵活性，符号链接代理文件未被正确识别，限制了高级配置场景。
9. **[#24246] Gemini CLI encounters 400 error with > 128 tools** ([链接](https://github.com/google-gemini/gemini-cli/issues/24246))
   - **重要性**：P2 性能与限制，工具数量超过一定阈值（报告称 >400）触发服务端 400 错误，需优化工具筛选逻辑。
10. **[#22745] Assess the impact of AST-aware file reads, search, and mapping** ([链接](https://github.com/google-gemini/gemini-cli/issues/22745))
    - **重要性**：P2 战略探索，评估 AST 感知工具能否提升代码操作精度、减少 Token 消耗，可能影响核心工具链设计。

## 重要 PR 进展 (Top 10)
1. **[#27875] Automated version bump for nightly release** ([链接](https://github.com/google-gemini/gemini-cli/pull/27875))
   - **内容**：自动化版本升级至 v0.48.0-nightly，关联今日发布。
2. **[#27854] Fix/pending tools and trust overrides** ([链接](https://github.com/google-gemini/gemini-cli/pull/27854))
   - **内容**：提升执行稳定性，防止在等待工具审批时状态提前推进；修复文件修改竞态条件；修正信任覆盖配置。
3. **[#27873] Improve SKILL.md frontmatter parsing robustness** ([链接](https://github.com/google-gemini/gemini-cli/pull/27873))
   - **内容**：修复 #25693，增强对 SKILL.md 前导元数据的解析，支持 UTF-8 BOM、忽略尾随空格、规范化 YAML 值。
4. **[#27872] Strip line/range suffix from at-command paths** ([链接](https://github.com/google-gemini/gemini-cli/pull/27872))
   - **内容**：修复 #19985 和 #19239，在 at-command 路径中剥离行号/范围后缀（如 `:12-20`），防止 CLI 挂起；更新 `/clear` 命令文档。
5. **[#27871] Merge existing refresh token when caching credentials** ([链接](https://github.com/google-gemini/gemini-cli/pull/27871))
   - **内容**：修复 #21691，在缓存凭据时合并现有刷新令牌，改善认证状态保持。
6. **[#27870] Cap pending tool responses** ([链接](https://github.com/google-gemini/gemini-cli/pull/27870))
   - **内容**：P1 修复 #27738，限制待处理工具响应的累积大小，防止超大输出导致后续轮次 token 估算异常或性能下降。
7. **[#27867] Prevent crash when tasks metadata endpoint returns 501** ([链接](https://github.com/google-gemini/gemini-cli/pull/27867))
   - **内容**：P1 修复 #21729，增强 a2a-server 对任务元数据端点 501 响应的容错性，避免崩溃。
8. **[#27698] Ensure zero-quota limits fail fast** ([链接](https://github.com/google-gemini/gemini-cli/pull/27698))
   - **内容**：P1 关键修复，错误分类逻辑修正，在配额为零时立即失败，避免陷入 10 次无效重试循环。
9. **[#27591] Fall back for oversized bug report URLs** ([链接](https://github.com/google-gemini/gemini-cli/pull/27591))
   - **内容**：P2 修复 `/bug` 命令，当 GitHub Issue 模板 URL 过长（如 Android/Termux）时自动回退，防止提交失败。
10. **[#27866] Honor custom border colors** ([链接](https://github.com/google-gemini/gemini-cli/pull/27866))
    - **内容**：修复主题系统，确保自定义边框颜色（`border.default`, `border.focused`）在运行时正确应用。

## 功能需求趋势
- **Agent 智能化与可控性**：社区强烈要求模型更主动、合理地调用子代理和技能，并改善其错误恢复与状态报告机制（如 #21968, #22323）。
- **AST 工具集成**：探索将 AST 感知的代码读取、搜索与映射工具（如 tilth, glyph）深度集成，以提升代码操作精度和效率（#22745, #22746, #22747）。
- **Auto Memory 安全与稳定**：重点聚焦于减少内存提取过程中的隐私泄露风险（确定性脱敏）、避免低信号会话无限重试、以及处理无效补丁（#26525, #26522, #26523）。
- **性能与规模优化**：应对工具数量激增（>128/400）导致的 400 错误，以及大工具响应对性能的影响（#24246, #27870）。
- **平台与配置一致性**：提升跨平台兼容性（如 Wayland 浏览器代理），并确保配置文件（`settings.json`、符号链接代理）被正确识别和覆盖（#21983, #20079, #22267）。

## 开发者关注点
- **Agent 行为可靠性**：挂起、错误状态报告、子代理滥用是当前最突出的痛点，直接影响生产环境可用性。
- **工具调用边界**：工具数量限制、大响应处理、at-command 路径解析是常见的稳定性瓶颈。
- **配置与权限**：符号链接支持、`settings.json` 覆盖生效、子代理意外启用等问题频繁出现，表明配置系统需更健壮。
- **安全与隐私**：Auto Memory 的日志和提取过程是社区关注的安全焦点，需最小化敏感数据暴露。
- **开发体验**：Bug 报告 URL 过长、外部编辑器退出后终端损坏等细节问题影响调试和日常使用效率。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-13)

## 今日速览
GitHub Copilot CLI 于今日发布 v1.0.62-1 版本，新增 YOLO 模式指示器、Issues/PR 搜索等特性。社区方面，关于恢复被移除命令以避免工作流中断的讨论（#53）持续发酵，同时多个新报告指出终端流式渲染存在字符重复和乱码问题（#3749, #3755），影响核心使用体验。

## 版本发布
**v1.0.62-1** (过去24小时发布)
- 在页脚显示 'YOLO'（允许全部）指示器，并为自定义 `statusLine.command` 添加允许全部状态
- 在 Issues 或 Pull Requests 标签页按 `/` 键可使用服务器端过滤搜索 GitHub
- 添加会话范围的扩展和画布
- 允许 SDK 客户端配置会话内存阈值
[发布说明](https://github.com/github/copilot-cli/releases/tag/v1.0.62-1)

## 社区热点 Issues（Top 10）
1. **[#53] [OPEN] 恢复 GitHub Copilot CLI 命令以避免工作流中断**  
   - **重要性**：社区对 CLI 移除原有命令导致脚本工作流断裂的强烈不满，已引发第三方替代项目（如 `shell-ai`）。  
   - **社区反应**：37 评论，75 👍，为过去24小时互动最高。  
   - [链接](https://github.com/github/copilot-cli/issues/53)

2. **[#618] [CLOSED] 支持从 .github/prompts 目录加载自定义斜杠命令**  
   - **重要性**：实现类似 Claude Code

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-13)

**数据来源**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)  
**统计周期**: 过去24小时 (截至 2026-06-13)

---

### 1. 今日速览
- 社区核心关注点集中于**稳定性与计费透明度**：一个严重的 WebSocket 初始化问题导致 `kimi web` 的 Work 标签页完全不可用，同时用户对“按 token 计费”模式下高消耗模型（如 K2.6）的额度消耗速度表示强烈不满。
- 技术层面，一个关键的 **Python 3.13 兼容性修复 PR 已更新**，解决了因 `charset-normalizer` 二进制不兼容导致的 `trafilatura` 导入失败及级联工具加载崩溃问题。
- 过去24小时无新版本发布，但上述问题在社区中引发了较高讨论，亟需官方回应与修复。

---

### 2. 版本发布
- **无新版本发布**。最新稳定版仍为 `v1.41.0` (根据 Issue #2435 提及)。

---

### 3. 社区热点 Issues (共3条，全部值得关注)
> 注：因过去24小时仅3条更新，全部列出并分析。

| # | 标题 | 重要性分析 | 社区反应 |
| :--- | :--- | :--- | :--- |
| **#2435** | `[Bug] Kimi Work tab: "Daimon control WS not ready" + infinite reload at 99%` | **极高**。此问题直接导致 `kimi web` 的核心功能（Work 标签页）完全瘫痪，影响所有依赖该工作流的用户。描述清晰，复现路径明确（Windows 10/11），属于阻塞性 P0 级缺陷。 | 评论1条，无 👍。问题描述详尽，但尚未引起大规模讨论，可能因问题较新或用户群体相对特定。需紧急修复。 |
| **#1994** | `kimiCode用量计算有问题 || There is a problem with kimiCode usage calculation` | **极高**。涉及用户核心利益与产品计费模式的公平性。用户指出在订阅会员（2小时额度）下，使用高消耗模型（K2.6）仅能进行极少数对话，与官方宣传的“高频并发”严重不符，引发对计费逻辑（按 token vs. 按请求）的质疑。 | 评论6条，👍 7。社区共鸣强烈，多名用户跟帖抱怨类似问题，是典型的**计费信任危机**，需官方数据与规则澄清。 |
| **#640** | `[bug] Kimi CLI stuck in reading one file again and again and stuck in a loop` | **高**。一个长期存在的功能性 bug（创建于1月，近期更新），导致 CLI 在读取文件时陷入无限循环，严重影响开发流程的连续性和效率。提供了详细的版本、平台和配置信息，利于复现。 | 评论8条，👍 1。讨论较多，表明该问题影响范围可能较广，且困扰用户已久，属于**体验类高优先级缺陷**。 |

---

### 4. 重要 PR 进展 (共1条，全部重要)
> 注：过去24小时仅1条更新，全部列出。

| # | 标题 | 内容与影响 |
| :--- | :--- | :--- |
| **#1597** | `fix: guard trafilatura import to prevent cascading tool load failure on Python 3.13` | **关键兼容性修复**。修复了在 Python 3.13 环境下，因 `charset-normalizer` 包含不兼容的 mypyc 编译 `.so` 文件，导致 `trafilatura` 导入失败，进而引发 `web/__init__.py` 中 `FetchURL` 工具级联加载崩溃的问题。通过条件导入保护，确保了在最新 Python 版本上的基础功能可用性。 |

---

### 5. 功能需求趋势
从现有 Issues 可提炼出社区最关注的三大方向：
1.  **计费与额度模型透明化**：用户强烈要求明确计费单位（token 数 vs. 请求次数），并希望获得更精确、实时的额度消耗预估，尤其是针对高消耗模型。
2.  **核心功能稳定性与可靠性**：`kimi web` 的 Work 标签页（WebSocket 服务）和 CLI 的文件处理流程均出现严重稳定性问题，社区期望优先修复这些阻塞性缺陷。
3.  **环境兼容性与依赖管理**：PR #1597 暴露了第三方依赖（如 `trafilatura`, `charset-normalizer`）在新版本 Python 上的脆弱性，社区隐含需求是更健壮的依赖隔离与兼容性测试。

---

### 6. 开发者关注点
开发者反馈集中体现以下痛点与高频需求：
- **痛点**：
    - **计费不透明导致信任危机**：额度消耗速度与预期严重不符，且缺乏细粒度监控。
    - **关键功能不可用**：`Work` 标签页的 WebSocket 初始化失败，使得团队协作或复杂工作流无法进行。
    - **环境特定 bug**：如 Python 3.13 的兼容性问题，表明测试覆盖可能不足。
- **高频需求**：
    - **清晰的用量仪表盘**：在 CLI 或 Web 界面中实时显示 token 消耗、剩余额度及模型消耗速率。
    - **更稳健的错误处理与恢复机制**：避免因单个工具（如 `trafilatura`）导入失败导致整个应用崩溃。
    - **针对高消耗模型的额度策略调整或警告**：在用户使用 K2.6 等模型前，明确提示其高 token 消耗特性。

---
*报告生成于 2026-06-13，基于 GitHub 公开数据。建议点击链接查看 Issue/PR 原文以获取最新进展。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-13)

## 今日速览
OpenCode 今日发布 v1.17.4 版本，重点增强了本地 MCP 服务器的目录控制与身份验证流程。社区围绕权限系统、数据库稳定性及终端通知等核心体验问题讨论热烈，多个关键修复 PR 已进入合并流程。

## 版本发布
- **v1.17.4**（核心改进）：
  - 为本地 MCP 服务器添加 `cwd` 支持，允许从工作区相对目录启动。
  - 引入基于连接器的身份验证流程，支持存储提供商凭据。
  - 新增 v2 API 端点用于创建/获取会话及列出会话（部分描述截断）。
  - [发布说明](https://github.com/anomalyco/opencode/releases/tag/v1.17.4)

## 社区热点 Issues（Top 10）
1. **[#27436](https://github.com/anomalyco/opencode/issues/27436)** - 权限弹窗交互卡死  
   **重要性**：用户无法完成权限授权，导致会话完全停滞。  
   **社区反应**：评论 16，👍 11，反映基础交互流程存在严重缺陷。

2. **[#17505](https://github.com/anomalyco/opencode/issues/17505)** - 通知在 `end_turn` 后发送  
   **重要性**：破坏 ACP 客户端时序，导致内容丢失或 UI 异常。  
   **社区反应**：评论 13，👍 8，影响外部集成（如 Fabriqa）。

3. **[#31996](https://github.com/anomalyco/opencode/issues/31996)** - GPT 5.5 生成无效 JSON Schema  
   **重要性**：因正则 Lookaround 不支持导致请求失败，兼容性回归。  
   **社区反应**：评论 11，👍 5，新模型支持问题。

4. **[#12716](https://github.com/anomalyco/opencode/issues/12716)** - 推理/输出时 doom 循环未捕获  
   **重要性**：无限循环可能耗尽资源，缺乏防护机制。  
   **社区反应**：评论 9，👍 3，稳定性风险。

5. **[#16610](https://github.com/anomalyco/opencode/issues/16610)** - inotify 实例耗尽时启动挂起  
   **重要性**：系统资源限制下无法启动，影响容器/低配环境。  
   **社区反应**：评论 8，👍 7，需优雅降级。

6. **[#24335](https://github.com/anomalyco/opencode/issues/24335)** - 权限通配符 `*` 覆盖低优先级规则  
   **重要性**：违反文档承诺的“最后匹配规则生效”，权限逻辑错误。  
   **社区反应**：评论 7，👍 4，安全策略失效。

7. **[#29099](https://github.com/anomalyco/opencode/issues/29099)** - TUI 通知在 zellij/tmux 下不触发  
   **重要性**：多终端用户无法接收关键提示，体验割裂。  
   **社区反应**：评论 7，👍 1，环境兼容性缺失。

8. **[#31204](https://github.com/anomalyco/opencode/issues/31204)** - 会话切换时 `session_message.seq` 约束失败  
   **重要性**：数据库迁移后直接崩溃，数据完整性风险。  
   **社区反应**：评论 6，👍 2，近期更新引入的回归。

9. **[#18108](https://github.com/anomalyco/opencode/issues/18108)** - 截断工具调用误分类为无效  
   **重要性**：无法恢复截断的 JSON，导致工具调用失败且无信号。  
   **社区反应**：评论 6，👍 2，工具链可靠性问题。

10. **[#17169](https://github.com/anomalyco/opencode/issues/17169)** - 子代理在编辑工具失败时无限重试  
    **重要性**：产生巨额 API 成本（报告 $15+/次），需熔断机制。  
    **社区反应**：评论 5，👍 0，成本控制紧急。

## 重要 PR 进展（Top 10）
1. **[#32093](https://github.com/anomalyco/opencode/pull/32093)** - 添加 `db doctor` 和 `repair` 命令  
   **内容**：提供数据库健康诊断与修复工具，解决迁移后不一致问题（关联 #31204 等）。

2. **[#32123](https://github.com/anomalyco/opencode/pull/32123)** - 删除已删除 scout agent 的文档引用  
   **内容**：同步文档与代码，移除过时内容（关联 #32105）。

3. **[#32122](https://github.com/anomalyco/opencode/pull/32122)** - 允许任务 ID 使用可读 slug  
   **内容**：`task` 工具参数支持如 `"explore-auth"` 的易读标识，提升 UX。

4. **[#30164](https://github.com/anomalyco/opencode/pull/30164)** - TUI 页脚显示实时 token 吞吐量  
   **内容**：在非交互模式下监控直接运行回合的 token 使用速率。

5. **[#32117](https://github.com/anomalyco/opencode/pull/32117)** - 将获取超时分类为可重试错误  
   **内容**：修复 `AbortSignal.timeout` 触发的 `TimeoutError` 未被重试的问题。

6. **[#32088](https://github.com/anomalyco/opencode/pull/32088)** - 恢复过期的 MCP 会话  
   **内容**：针对 Streamable HTTP 会话 404 错误自动重新初始化，合并并发失效。

7. **[#30638](https://github.com/anomalyco/opencode/pull/30638)** - 将传输和超时错误分类为可重试  
   **内容**：扩展 `MessageV2.fromError` 的重试逻辑，覆盖 `ECONNRESET` 等网络故障。

8. **[#32110](https://github.com/anomalyco/opencode/pull/32110)** - 防止重复渲染 ID  
   **内容**：清理未使用 ID，确保消息/部分身份唯一，避免 TUI 渲染冲突。

9. **[#32111](https://github.com/anomalyco/opencode/pull/32111)** - 添加 rotator 生态条目  
   **内容**：在文档中收录社区插件 `opencode-rotator-plugin` 等。

10. **[#32115](https://github.com/anomalyco/opencode/pull/32115)** - 添加 TrustedRouter 提供商  
    **内容**：新增 OpenAI 兼容的 TrustedRouter 支持，含配置文档与测试。

## 功能需求趋势
- **权限系统健壮性**：社区强烈要求修复规则覆盖、子代理绕过等漏洞（#24335, #32024, #18441）。
- **数据库可维护性**：需要内置工具诊断/修复迁移问题（#32097 已 PR）。
- **终端/TUI 兼容性**：改善在 tmux/zellij 下的通知、滚动等体验（#29099, #9929）。
- **新模型/提供商集成**：关注 MiniMax 缓存、TrustedRouter 等适配（#31755, #32115）。
- **性能可视化**：实时 token 吞吐量等监控需求上升（#30164）。
- **文档同步**：确保文档随代码变更即时更新（#32105, #32112）。

## 开发者关注点
- **权限逻辑缺陷**：通配符覆盖、子代理忽略 deny 规则等，可能导致意外文件访问。
- **数据库迁移风险**：`session_message.seq` 约束失败等错误影响会话恢复，需修复工具。
- **错误处理不完善**：工具调用截断、传输超时等未被正确分类，导致无限循环或静默失败。
- **成本控制缺失**：子代理无限重试引发高额费用，需熔断与退避机制。
- **环境适配不足**：通知系统在终端复用器下失效，需检测环境变量或降级方案。
- **配置灵活性**：`disabled_providers` 无法覆盖默认值（#32103），需支持用户配置合并策略。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-13)

## 今日速览
今日社区核心动态围绕 **v0.18.0 版本发布** 及 **OAuth 免费政策重大调整** 展开。版本发布带来 CLI 复制输出优化等修复，而政策调整（#3203）引发极高讨论，同时社区持续反馈长程任务稳定性（#5018, #5019）与 VSCode 插件兼容性问题（#4488），多个关键 PR 聚焦于 daemon 可靠性、配置热重载及安全增强。

## 版本发布
- **v0.18.0** 正式发布。主要修复包括：CLI 的 `/copy` 命令现在会跳过思维链（thought）部分，避免将内部推理内容复制到剪贴板，提升输出纯净度。

## 社区热点 Issues (Top 10)
1. **[#3203](https://github.com/QwenLM/qwen-code/issues/3203) - Qwen OAuth 免费额度政策调整**  
   **重要性**：政策提议将免费额度从 1000 次/日降至 100 次/日，并计划完全关闭免费入口，直接影响所有免费用户。  
   **社区反应**：评论数最高（126 条），用户普遍表达担忧与不满，讨论集中在免费额度不足、迁移成本及对开源生态的影响。

2. **[#4554](https://github.com/QwenLM/qwen-code/issues/4554) - daemon 端到端 OpenTelemetry 遥测覆盖**  
   **重要性**：追踪 `qwen serve` daemon 的 HTTP/SSE 接口能力缺口与优先级，是服务化可观测性的关键基础设施。  
   **社区反应**：已于 6月13 日标记实现完成，相关 PR #4490 已合并，社区关注后续监控效果。

3. **[#4488](https://github.com/QwenLM/qwen-code/issues/4488) - VSCode 插件在 1.120.0 版本左侧栏不显示**  
   **重要性**：影响最新版 VSCode 用户的插件可用性，属于高优先级兼容性问题。  
   **社区反应**：用户报告插件“闪退”现象，已确认与 VSCode 1.120.0 的 API 变更有关，急需修复。

4. **[#5018](https://github.com/QwenLM/qwen-code/issues/5018) - 长程任务注意力不集中，大量遗忘**  
   **重要性**：P2 优先级，涉及模型在长上下文场景下的核心推理能力退化。  
   **社区反应**：用户反馈与一周前相比“降智”，可能与会话管理或上下文压缩策略有关。

5. **[#5019](https://github.com/QwenLM/qwen-code/issues/5019) - 长程任务下工具重复调用导致会话终止**  
   **重要性**：P1 优先级，重复工具调用触发服务端错误（400），直接中断任务流。  
   **社区反应**：与 #5015 类似，反映长时运行中状态管理或去重逻辑存在缺陷。

6. **[#5055](https://github.com/QwenLM/qwen-code/issues/5055) - VSIX 安装包被报毒 (Trojan:JS/ShaiWorm.DBA!MTB)**  
   **重要性**：安全警报，可能影响 Windows 用户安装信心，需立即排查构建或依赖链。  
   **社区反应**：用户上传文件后触发杀毒软件误报（或真实威胁），社区高度关注安全审计结果。

7. **[#4821](https://github.com/QwenLM/qwen-code/issues/4821) - 支持通过 Frontmatter 文件声明式定义 Agent**  
   **重要性**：功能需求，借鉴 Claude Code 模式，允许用户用 Markdown+YAML 定义自定义 Agent，降低配置门槛。  
   **社区反应**：获得 6 条评论，开发者认为这将极大提升可扩展性和团队协作一致性。

8. **[#4825](https://github.com/QwenLM/qwen-code/issues/4825) - `qwen sessions list` 子命令支持 JSON/标签/时间过滤**  
   **重要性**：增强会话管理脚本化能力，便于自动化分析和历史清理。  
   **社区反应**：需求明确，已进入实现阶段，社区期待与 `sessions show/rm` 形成完整管理套件。

9. **[#4994](https://github.com/QwenLM/qwen-code/issues/4994) - `/stats` 在首次打开时重复持久化会话**  
   **重要性**：P1 优先级，数据统计错误导致使用记录失真，影响用量分析。  
   **社区反应**：由 PR #4779 引入，已定位到首次运行时的持久化逻辑缺陷，修复已合并。

10. **[#4891](https://github.com/QwenLM/qwen-code/issues/4891) - 终端 resize 导致流式输出渲染碎片化**  
    **重要性**：UI 渲染缺陷，在动态调整终端大小时，历史输出出现宽度不一致的“分段”现象。  
    **社区反应**：用户提供复现步骤和截图，确认与流式渲染的缓冲区管理有关。

## 重要 PR 进展 (Top 10)
1. **[#5062](https://github.com/QwenLM/qwen-code/pull/5062) - fix(core): 跨 Agent 轮次保持 Token 扩容**  
    **内容**：将 GeminiChat 的自动输出 token 扩容机制延续到后续无工具调用的轮次，避免因回退默认值导致截断。包含对 #4964 路径的回归测试。

2. **[#5066](https://github.com/QwenLM/qwen-code/pull/5066) - feat(web-shell): daemon web-shell 多项改进**  
    **内容**：增加结构化 token 使用追踪、全功能设置面板（支持中英、主题、语言、紧凑模式）、隐藏命令及重试逻辑，显著提升 daemon 模式交互体验。

3. **[#5063](https://github.com/QwenLM/qwen-code/pull/5063) - fix(ci): 检测不完整的 qwen review 运行**  
    **内容**：CI 流程现在能识别流式日志中的顶层 API 错误或最终事件的 `is_error: true`，避免静默成功，确保评审失败时能触发回退评论。

4. **[#4918](https://github.com/QwenLM/qwen-code/pull/4918) - feat(hooks): 向 Hook 系统传递原始 API 调用 ID (toolCallId)**  
    **内容**：Hook 现在能收到原始 `call_xxx` 格式的 ID，与 Qwen Code 日志对齐，便于日志关联与调试。

5. **[#4933](https://github.com/QwenLM/qwen-code/pull/4933) - feat(config): 通过 chokidar 监听设置文件变更**  
    **内容**：实时监听 `settings.json` 等配置文件修改，支持热重载，无需重启即可应用配置更改。

6. **[#5061](https://github.com/QwenLM/qwen-code/pull/5061) - fix(core): 持久化 Background Agent 启动标志**  
    **内容**：在 Agent 元数据中持久化启动时的运行时标志（如批准模式），确保进程重启后恢复的 Agent 行为与最初一致。

7. **[#4713](https://github.com/QwenLM/qwen-code/pull/4713) - feat(mcp): 项目级 .mcp.json 与工作区批准门控**  
    **内容**：引入项目级 MCP 配置源，并对未信任的已提交 MCP 服务器启用批准门控，与 Claude Code 行为对齐，强化供应链安全。

8. **[#5059](https://github.com/QwenLM/qwen-code/pull/5059) - refactor(web-shell): 移除重复 Agents 面板，整合 SubAgent 视图**  
    **内容**：将活跃 Agent 视图整合到消息历史面板内，移除悬浮的独立 Agents 面板，使界面更紧凑，避免视图割裂。

9. **[#4963](https://github.com/QwenLM/qwen-code/pull/4963) - fix: 默认启用 fork subagents**  
    **内容**：在交互式会话中默认启用 fork 子 Agent，提升并行能力；非交互式会话保持现有后备路径；为隐式 fork Agent 设置 `approval_mode: default`。

10. **[#4793](https://github.com/QwenLM/qwen-code/pull/4793) - fix(core): 为非托管 LLM 强制工具参数为字符串**  
    **内容**：修复自托管模型（LMStudio/vLLM）返回数字/布尔型工具参数导致的 Schema 验证失败，确保 `edit_file` 等操作兼容性。

## 功能需求趋势
- **会话与状态管理**：`/sessions list` 过滤、无合成消息的断点续传（#5030）、`/stats` 数据准确性。
- **扩展性与配置**：声明式 Agent 定义（Frontmatter）、交互式扩展管理器（多标签）、项目级扩展/MCP 配置、设置文件热重载。
- **模型与提供商支持**：动态多模型发现（OpenAI 兼容）、共享 `baseUrl` 配置、自托管 LLM 参数类型兼容。
- **性能与稳定性**：长上下文注意力维持、非 AI 辅助的快速压缩（`/compress-fast`）、OOM 预防、工具调用去重。
- **IDE 与集成**：VSCode 插件兼容性（新版本显示问题）、daemon web-shell 功能完善（设置、主题、指标）。
- **安全与合规**：OAuth 免费策略、MCP 批准门控、构建包安全扫描。

## 开发者关注点
- **长程任务可靠性**：注意力分散、重复工具调用、会话终止是当前最突出的 P1/P2 级问题，直接影响复杂任务自动化。
- **VSCode 插件兼容性**：与最新 VSCode (1.120.0+) 的兼容性问题导致插件不可用，急需修复。
- **OAuth 免费政策变动**：大幅缩减免费额度并计划关闭，引发社区对可持续使用和迁移成本的广泛担忧。
- **安全信任**：VSIX 包报毒事件敲响警钟，开发者关注构建链安全与官方分发渠道的可靠性。
- **数据准确性**：`/stats` 统计重复、会话持久化错误等问题，影响用量追踪与调试。
- **跨平台体验**：Windows 下

</details>

---
*本日报由 [Big Model Radar](https://github.com/zx0828/big_model_radar) 自动生成。*