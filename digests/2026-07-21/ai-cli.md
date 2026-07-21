# AI CLI 工具社区动态日报 2026-07-21

> 生成时间: 2026-07-21 01:56 UTC | 覆盖工具: 7 个

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

# AI CLI 工具生态横向对比分析报告 (2026-07-21)

## 1. 生态全景
当前 AI CLI 工具生态处于**高速发展与深度竞争**阶段。所有主流工具均保持高频迭代，版本发布密集，但社区反馈揭示的核心矛盾已从“功能缺失”转向**生产环境可靠性、成本可控性与跨平台一致性**。安全与权限模型（如沙箱隔离、最小权限原则）正从附加特性升级为架构基线，而自动化工作流正从单次任务执行向“可观测、可持久、可托管”的长期运行模式演进。工具间的竞争焦点正从模型能力转向**开发者体验（DX）与工程化成熟度**。

## 2. 各工具活跃度对比
| 工具 | Release 情况 | Issues (热点讨论量) | PR (重要进展数) | 活跃度评级 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.216 (正式版) | Top 10 (多长期高赞Issue) | 7 | **极高** |
| **OpenAI Codex** | 无新版本 | Top 10 (成本问题评论超200) | 10 | **高** |
| **Gemini CLI** | v0.52.0-nightly | Top 10 (含P1安全漏洞) | 5 | **极高** |
| **GitHub Copilot CLI** | v1.0.72, v1.0.73 | Top 10 | 0 (24小时内) | **高** |
| **Kimi Code CLI** | 无新版本 | 6条 (24小时内新更新) | 3 | **中** |
| **OpenCode** | v1.18.4 (正式版) | Top 10 | 1 (明确提及) | **中** |
| **Qwen Code** | v0.20.0-nightly | Top 10 | 10 | **极高** |

*注：Issues/PR数基于报告中的“热点”或“重要”列表数量，反映社区核心讨论与修复焦点，非仓库总数。*

## 3. 共同关注的功能方向
多个工具社区高度聚焦以下方向，反映行业共性需求：
- **生产环境稳定性与数据安全**：
  - **Claude Code**: 聊天记录丢失、文件无提示覆盖。
  - **OpenAI Codex**: Windows 沙箱高磁盘 I/O、UI 冻结。
  - **Gemini CLI**: a2a-server RCE 漏洞、子代理永久挂起。
  - **Kimi Code**: Windows 升级数据迁移缺失、会话状态错乱。
  - **Qwen Code**: 工具参数随机丢失、Web Shell 令牌持久化。
- **资源消耗透明化与成本控制**：
  - **Claude Code**: 工作流意外使用高成本模型。
  - **OpenAI Codex**: `gpt-5.5` 费率异常飙升 10-20 倍、后台轮询浪费 tokens。
  - **GitHub Copilot CLI**: 5MB 序列化体限制、自动压缩阈值不可配。
  - **Qwen Code**: 工具输出预算管理混乱。
- **跨平台体验一致性（尤其 Windows）**：
  - **Claude Code**: Windows 11 Cowork VM 服务失败。
  - **OpenAI Codex**: 冷启动卡顿、沙箱扫描问题。
  - **GitHub Copilot CLI**: 剪贴板静默失败、WSL/tmux 嵌套环境失效。
  - **Kimi Code**: Windows 方向键选择失效、旧会话迁移。
- **会话持久化与状态管理**：
  - **Claude Code**: SSH 远程会话断开后无法恢复。
  - **OpenAI Codex**: 移动端需控制无头 Linux 主机。
  - **Qwen Code**: 模型切换导致守护进程会话失效。
- **开发工作流深度集成**：
  - **Claude Code**: 与非主分支 Diff、PR 审查技能。
  - **GitHub Copilot CLI**: 计划模式与 `gh` CLI 集成。
  - **Qwen Code**: 自动修复（autofix）与托管 PR 队列。

## 4. 差异化定位分析
| 工具 | 功能侧重 | 目标用户 | 技术路线特点 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 企业级协作与复杂工作流 | 大型团队、多账户/组织用户 | 强技能系统、Cowork VM 隔离、精细成本控制，但稳定性与数据安全受质疑。 |
| **OpenAI Codex** | 移动端与无头主机控制 | 远程开发者、移动优先

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告  
*数据截止：2026-07-21 | 来源：github.com/anthropics/skills*

---

## 1. 热门 Skills 排行（按关注度排序）

| 排名 | Skill / PR | 功能简述 | 社区讨论热点 | 状态 |
|------|------------|----------|--------------|------|
| 1 | **skill-creator 核心修复**<br>([#1298](https://github.com/anthropics/skills/pull/1298)) | 修复 `run_eval.py` 召回率始终为 0% 的致命问题，涉及 Windows 流读取、触发检测与并行工作器 | 社区普遍反馈技能优化循环失效，所有描述优化均基于噪声进行；Windows 用户无法使用评估工具 | OPEN |
| 2 | **document-typography**<br>([#514](https://github.com/anthropics/skills/pull/514)) | 自动预防 AI 生成文档的排版问题（孤词、寡行、编号错位） | 讨论聚焦于“生成内容美观度”这一高频但未被系统化处理的痛点 | OPEN |
| 3 | **self-audit**<br>([#1367](https://github.com/anthropics/skills/pull/1367)) | 输出前机械验证 + 四维度推理审计的质量门控技能 | 被视为“交付质量保障”的通用方案，与 skill-creator 优化循环形成互补 | OPEN |
| 4 | **testing-patterns**<br>([#723](https://github.com/anthropics/skills/pull/723)) | 覆盖测试哲学、单元测试、组件测试、E2E 测试的完整指南 | 社区强烈需求“可执行的测试策略”技能，尤其关注 React 与 AAA 模式 | OPEN |
| 5 | **color-expert**<br>([#1302](https://github.com/anthropics/skills/pull/1302)) | 综合色彩知识库（命名系统、色彩空间选用指南、对比度计算） | 讨论集中在“何时用 OKLCH vs OKLAB”等工程决策点 | OPEN |
| 6 | **pyxel (复古游戏开发)**<br>([#525](https://github.com/anthropics/skills/pull/525)) | 集成 Pyxel 引擎的 MCP 工作流（编写→运行→捕获→迭代） | 小众但活跃的复古游戏开发社区高度关注，视为“创意编码”标杆 | OPEN |
| 7 | **skill-quality-analyzer**<br>([#83](https://github.com/anthropics/skills/pull/83)) | 从结构、文档、示例、资源、兼容性五维度评估 Skill 质量 | 作为“元技能”被提议用于 marketplace 审核与用户自检 | OPEN |
| 8 | **ODT 支持**<br>([#486](https://github.com/anthropics/skills/pull/486)) | 创建、填充、解析 OpenDocument 格式文件 | 满足开源办公套件（LibreOffice）用户与 ISO 标准合规需求 | OPEN |

---

## 2. 社区需求趋势（从 Issues 提炼）

- **工具链稳定性**：Windows 兼容性、`run_eval.py` 触发检测、编码问题成为最高频障碍（关联 Issues #556, #1061, #1099, #1050, #362）。
- **安全与信任边界**：社区技能在 `anthropic/` 命名空间下分发引发 impersonation 风险，亟需命名空间隔离或验证机制（#492）。
- **组织内协作**：用户强烈要求技能可在组织内直接共享，而非手动传输 `.skill` 文件（#228）。
- **文档与排版自动化**：从“避免孤词”到“生成符合出版标准的文档”，排版质量成为文档类技能的核心诉求（#514 及相关讨论）。
- **领域垂直化**：测试工程（#723）、色彩科学（#1302）、复古游戏（#525）、SAP 预测（#181）等专业领域技能持续涌现。
- **元能力技能**：质量分析（#83）、安全审计、自检（#1367）等“技能的技能”被提议用于提升整体生态质量。

---

## 3. 高潜力待合并 Skills（评论活跃且近期更新）

| PR | 技能 | 潜力理由 |
|----|------|----------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 核心修复 | 解决评估循环失效的**阻塞性问题**，影响所有技能开发；更新频繁（6/10-6/23） |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | 提供通用质量门控，与官方优化流程互补；功能完整，讨论集中 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 填补色彩工程决策空白，示例丰富，社区反馈积极 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel | 绑定成熟开源项目，工作流清晰，长期更新至 7/15 显示维护活跃 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 覆盖全栈测试，符合工程团队高频需求，关联 Issue #412 的治理讨论 |

---

## 4. Skills 生态洞察

**社区当前最集中的诉求是：修复 skill-creator 工具链的可靠性（尤其是 Windows 兼容性与评估准确性），以降低贡献门槛并确保优化循环有效运行。**  
（支撑证据：5/20 热门 PR 直接针对 skill-creator 缺陷；Issues #556、#1061、#1099、#1050 均围绕同一问题；工具稳定性是新增 Skill 能否被有效验证的前提。）

---

# Claude Code 社区动态日报 (2026-07-21)

## 今日速览
今日社区核心围绕 **v2.1.216 版本发布** 展开，该版本修复了影响长会话体验的关键性能退化问题。同时，**多账户管理**、**数据安全与丢失风险**、**成本控制** 以及 **Windows/macOS 平台特定问题** 成为社区反馈最集中的领域，反映了用户对生产环境稳定性和可控性的迫切需求。

## 版本发布
- **v2.1.216** 已发布。
  - **新增**：`sandbox.filesystem.disabled` 设置，可在保持网络出口控制的同时禁用文件系统隔离。
  - **修复**：长会话中消息归一化成本随轮次二次增长导致的多秒卡顿与恢复缓慢问题。
  - [发布说明链接](https://github.com/anthropics/claude-code/releases/tag/v2.1.216)

## 社区热点 Issues (Top 10)
1. **[#18435] 多账户管理功能请求** (148 评论, 668 👍)
   - **重要性**：社区呼声最高的功能，涉及工作流中切换不同 Claude 账户/组织的核心需求。
   - **社区反应**：极高参与度，大量用户附议并补充使用场景。
   - [链接](https://github.com/anthropics/claude-code/issues/18435)

2. **[#62272] 聊天记录 JSONL 文件被意外删除** (18 评论, 3 👍)
   - **重要性**：数据丢失类严重 Bug，用户历史会话在更新/重启后丢失，已有用户提供恢复脚本。
   - **社区反应**：引发对数据持久性和 `cleanupPeriodDays` 配置失效的担忧。
   - [链接](https://github.com/anthropics/claude-code/issues/62272)

3. **[#64592] Windows 11 上 Cowork VM 服务无法启动** (12 评论, 0 👍)
   - **重要性**：影响 Windows 用户使用 Cowork 功能的核心障碍，内置恢复机制均失效。
   - **社区反应**：用户提供了手动启用虚拟机平台的工作around，但官方修复迫在眉睫。
   - [链接](https://github.com/anthropics/claude-code/issues/64592)

4. **[#49790] SSH 远程会话断开后无法恢复/续接** (10 评论, 29 👍)
   - **重要性**：远程开发场景的关键可用性问题，网络波动或客户端断开导致远程进程终止。
   - **社区反应**：强烈需求会话持久化能力，以支持长时间运行的任务。
   - [链接](https://github.com/anthropics/claude-code/issues/49790)

5. **[#23626] 支持与 non-main 分支进行 Diff 对比** (33 评论, 95 👍)
   - **重要性**：提升 PR 审查和代码对比流程的灵活性，是常见的开发工作流需求。
   - **社区反应**：高赞表明这是 IDE 集成中普遍缺失的功能。
   - [链接](https://github.com/anthropics/claude-code/issues/23626)

6. **[#75055] 工作流 `agent()` 继承会话模型导致意外高成本** (3 评论, 0 👍)
   - **重要性**：成本控制隐患，工作流可能无提示地使用高成本模型（如 Fable 5）运行大量子代理。
   - **社区反应**：揭示了模型选择配置在嵌套工作流中的缺失，需更细粒度控制。
   - [链接](https://github.com/anthropics/claude-code/issues/75055)

7. **[#79560] `/code-review` 技能被 `disable-model-invocation` 标记，无法被其他技能调用** (2 评论, 4 👍)
   - **重要性**：破坏了技能组合与自动化工作流，是技能系统设计的回归。
   - **社区反应**：影响了依赖代码审查的自动化流程，需恢复程序化调用能力。
   - [链接](https://github.com/anthropics/claude-code/issues/79560)

8. **[#79341] Max 20x 计划下 Fable 5 错误要求使用积分** (5 评论, 8 👍)
   - **重要性**：套餐权益与计费逻辑不一致，导致用户误解和意外扣费。
   - **社区反应**：暴露了模型可用性检查与套餐周免额度之间的逻辑错误。
   - [链接](https://github.com/anthropics/claude-code/issues/79341)

9. **[#78273] Claude Code 在无提示情况下覆盖用户文件导致数据丢失** (3 评论, 0 👍)
   - **重要性**：严重的权限与数据安全事件，AI 自主操作覆盖了用户活跃的研究内容。
   - **社区反应**：引发对文件写入前确认机制和沙箱隔离有效性的严重质疑。
   - [链接](https://github.com/anthropics/claude-code/issues/78273)

10. **[#60848] 会话恢复提示中“不要再问我”选项含义模糊** (8 评论, 13 👍)
    - **重要性**：用户体验细节问题，可能导致用户误操作，影响会话管理。
    - **社区反应**：用户要求明确该选项是仅针对当前会话还是全局生效。
    - [链接](https://github.com/anthropics/claude-code/issues/60848)

## 重要 PR 进展
1. **[#79620] 添加文本转语音 (TTS) 朗读钩子以支持可访问性**
   - **内容**：实现生产就绪的 TTS 钩子，为 Claude Code 的回复提供语音朗读，支持多平台（Piper/macOS say/Windows PowerShell）并智能跳过代码块。
   - [链接](https://github.com/anthropics/claude-code/pull/79620)

2. **[#79387] 修复：`edit-issue-labels.sh` 在无参数时提供错误信息**
   - **内容**：当脚本未接收 `--add-label` 或 `--remove-label` 参数时，不再静默失败，而是向 stderr 输出清晰错误提示。
   - [链接](https://github.com/anthropics/claude-code/pull/79387)

3. **[#66650] 修复(pr-review-toolkit)：在插件清单中使用完整作者名**
   - **内容**：将 `pr-review-toolkit` 插件的作者名从 `"Daisy"` 统一修正为 `"Daisy Hollman"`，保持与作者其他插件的一致性。
   - [链接](https://github.com/anthropics/claude-code/pull/66650)

4. **[#1] 创建 SECURITY.md**
   - **内容**：新增安全策略文档，规范漏洞报告流程与安全联系方式。
   - [链接](https://github.com/anthropics/claude-code/pull/1)

5. **[#74722] 功能(commit-commands)：在 `/commit-push-pr` 中支持传统分支命名**
   - **内容**：为 `/commit-push-pr` 命令添加可选的 `conventional` 参数，可按 Conventional Branch 规范生成分支名（如 `feature/desc`）。
   - [链接](https://github.com/anthropics/claude-code/pull/74722)

6. **[#79385] 修复：尊重任何用户的“踩”反应，而非仅限问题作者**
   - **内容**：修正自动关闭重复问题的机器人逻辑，使其响应任何用户的 👎 反应，而非仅检查问题作者的反应，符合其承诺。
   - [链接](https://github.com/anthropics/claude-code/pull/79385)

7. **[#78532] gateway/gcp：Terraform 示例中添加可选内部 ALB + PG16 Cloud SQL 版本修复**
   - **内容**：1) 在 GCP 网关示例中增加可选内部应用负载均衡器配置；2) 修复 PG16+ Cloud SQL 实例因默认 `ENTERPRISE_PLUS` 版本与共享核心层级不兼容导致的创建失败。
   - [链接](https://github.com/anthropics/claude-code/pull/78532)

## 功能需求趋势
- **账户与身份管理**：多账户/多组织切换是最高频需求，涉及桌面端与 CLI 的集成。
- **IDE 集成深化**：增强与开发流程的耦合，如分支对比、PR 自动化、CI 状态集成。
- **性能与稳定性**：聚焦长会话内存管理、消息处理效率、会话恢复机制。
- **成本与模型控制**：要求更精细的模型选择、工作流成本预估、套餐权益透明化。
- **远程与持久化**：SSH 会话持久、后台任务管理、中断恢复能力。
- **安全与权限**：文件操作确认、沙箱隔离有效性、最小权限原则的落实。
- **可访问性**：如 TTS 支持，体现包容性设计。

## 开发者关注点 (高频痛点)
1. **数据安全与丢失**：聊天记录自动清理 Bug、文件无提示覆盖，引发对数据持久性和操作确认机制的严重不信任。
2. **成本不可控**：工作流意外使用高成本模型、套餐权益与计费逻辑错误，导致用户担心意外费用。
3. **平台特定回归**：Windows (Cowork VM 服务、文本选择) 和 macOS (技能调用、本地化) 的特定功能频繁出现回归或故障。
4. **工作流中断**：SSH 断开即终止、无法停止运行中的代理/任务，严重影响自动化脚本和长时间任务的可靠性。
5. **信任与权限模型混乱**：父目录信任设置与 `.mcp.json` 审批 gate 行为不一致，导致权限预期与实际不符。
6. **错误信息与反馈缺失**：如无参数调用脚本静默失败、错误提示不明确，增加调试成本。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-07-21)

## 1. 今日速览
- 社区对 **GPT-5.5 模型费率成本异常飙升** 的讨论持续高热，大量 Plus 用户反馈预算消耗速度剧增，成为当前最紧迫的财务与可用性问题。
- 针对 **Windows 平台性能与稳定性** 的修复工作密集推进，多个 PR 合并以解决冷启动卡顿、沙箱磁盘占用及 UI 冻结问题。
- 核心架构改进聚焦于 **权限配置精细化** 与 **网络代理解析优化**，新合并的 PR 增强了多环境下的安全策略与连接可靠性。

## 2. 版本发布
*（过去24小时无 Codex 核心客户端新版本发布。仅相关 Rust 工具链有 alpha 更新：`rust-v0.145.0-alpha.25`，属底层依赖更新。）*

## 3. 社区热点 Issues (Top 10)
| 排名 | 问题编号 | 标题 | 重要性说明 | 社区反应 |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [#28879](https://github.com/openai/codex/issues/28879) | Codex (gpt-5.5, Plus plan) — rate-limit cost per token jumped ~10-20x | **极高**。直接影响所有 Plus 用户的核心预算模型，成本异常导致服务不可用，社区愤怒且焦虑。 | 👍 358, 评论 208，持续更新中 |
| 2 | [#11023](https://github.com/openai/codex/issues/11023) | Codex desktop app for Linux | **高**。长期被呼吁的跨平台支持，801 个 👍 体现庞大用户需求，是市场扩张的关键。 | 👍 801, 评论 181 |
| 3 | [#20214](https://github.com/openai/codex/issues/20214) | Codex App frequently freezes/stutters on Windows 11 Pro | **高**。Windows 主流系统上的严重性能缺陷，影响生产力，反馈集中。 | 👍 68, 评论 60 |
| 4 | [#13733](https://github.com/openai/codex/issues/13733) | Background process polling wastes tokens | **高**。揭示隐藏的 token 消耗陷阱，影响所有使用本地工具的用户，关乎成本控制。 | 👍 29, 评论 31 |
| 5 | [#34376](https://github.com/openai/codex/issues/34376) | [macOS][Desktop 26.715.52143] Sidebar hover/click freezes UI | **中高**。Apple Silicon 设备上的新回归问题，影响核心交互体验。 | 新发布，评论 6 |
| 6 | [#34025](https://github.com/openai/codex/issues/34025) | [Windows][26.715.3651.0] Cold launch spawns 300+ taskkill.exe | **中高**。Windows 冷启动导致系统级卡顿，问题严重且具破坏性。 | 新发布，评论 3 |
| 7 | [#33737](https://github.com/openai/codex/issues/33737) | Windows elevated sandbox repeatedly scans pnpm node_modules | **中高**。Windows 沙箱在特定工作流下导致 100% 磁盘占用和极高延迟，是性能瓶颈。 | 新发布，评论 3 |
| 8 | [#31836](https://github.com/openai/codex/issues/31836) | Projects Sort By Last updated only sorts tasks within project groups | **中**。项目视图的 UI 功能缺陷，影响工作流组织，属于易修复的体验问题。 | 👍 26, 评论 23 |
| 9 | [#23200](https://github.com/openai/codex/issues/23200) | Support headless remote Linux hosts for Codex mobile | **中**。移动端控制能力的扩展需求，旨在脱离桌面依赖，符合远程开发趋势。 | 👍 42, 评论 12 |
| 10 | [#26633](https://github.com/openai/codex/issues/26633) | Desktop automations ignore timezone for RRULE scheduling | **中**。自动化调度时区处理错误，导致任务执行时间混乱，是可靠性问题。 | 👍 3, 评论 15 |

## 4. 重要 PR 进展 (Top 10)
| 排名 | PR 编号 | 标题 | 功能/修复内容 | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [#34423](https://github.com/openai/codex/pull/34423) | Support Windows sandboxing in the exec server | **核心修复**。为 exec 服务器添加 Windows 沙箱支持，解决了 Windows 上进程隔离与安全执行的关键缺失功能。 | ✅ Closed |
| 2 | [#34398](https://github.com/openai/codex/pull/34398) | Support per-environment permission profiles | **架构增强**。允许每个环境覆盖线程权限配置，实现更精细、灵活的安全策略管理。 | ✅ Closed |
| 3 | [#34431](https://github.com/openai/codex/pull/34431) | Optimize remote compaction history handling | **性能优化**。优化远程历史压缩处理，避免重复计算和克隆，降低 CPU 与内存开销。 | ✅ Closed |
| 4 | [#34429](https://github.com/openai/codex/pull/34429) | Move shared skill models into `codex-skills` | **架构重构**。将共享技能模型移至独立 `codex-skills` 库，改善模块化与依赖管理。 | ✅ Closed |
| 5 | [#34434](https://github.com/openai/codex/pull/34434) | Support catalog messages for non-request approval policies | **用户体验**。为 `never` 和 `unless_trusted` 等审批策略添加目录消息，使提示更清晰。 | ✅ Closed |
| 6 | [#34435](https://github.com/openai/codex/pull/34435) | Resolve outbound proxy routes explicitly | **网络改进**。显式解析出站代理路由，避免系统代理发现阻塞和不一致行为。 | ✅ Closed |
| 7 | [#34436](https://github.com/openai/codex/pull/34436) | Honor managed permission profiles in network proxy resolution | **安全集成**。确保网络代理解析时尊重由 `requirements.toml` 管理的权限配置。 | ✅ Closed |
| 8 | [#30949](https://github.com/openai/codex/pull/30949) | Refresh derived thread titles over time | **功能改进**。根据后续用户消息自动刷新线程标题，同时保留用户手动设置的名称。 | ✅ Closed |
| 9 | [#30235](https://github.com/openai/codex/pull/30235) | [codex] kill timed-out Git status process groups | **资源修复**。修复 Git 状态超时清理问题，确保在 Unix 上杀死整个进程组，防止僵尸进程。 | ✅ Closed |
| 10 | [#31463](https://github.com/openai/codex/pull/31463) | [codex] support pathless hosted thread managers | **部署灵活**。支持无路径的托管线程管理器，扩展了远程/内存存储的部署选项。 | ✅ Closed |

## 5. 功能需求趋势
从 Issues 标签与内容分析，社区最关注的功能方向集中在：
- **跨平台与移动端扩展**：强烈要求 Linux 桌面客户端 (#11023) 及移动端控制无头 Linux 主机的能力 (#23200)。
- **性能与资源控制**：持续关注 Windows/macOS 的 UI 流畅度 (#20214, #34376)、后台任务资源消耗 (#13733) 及沙箱效率 (#33737)。
- **模型与参数支持**：要求修复新模型（如 `gpt-5.3-codex-spark`）的兼容性问题 (#31969)。
- **权限与网络精细化**：需求从简单的开关转向环境感知的权限配置 (#34398) 和更可靠的代理设置 (#34436)。
- **UI/UX 细节完善**：包括项目排序 (#31836)、自动化时区 (#26633)、过期时间显示 (#32726) 等易用性改进。

## 6. 开发者关注点
开发者反馈中的核心痛点与高频需求：
- **成本与预算不可预测**：`gpt-5.5` 模型费率成本短期内暴增 10-20 倍 (#28879)，严重破坏使用计划，需官方紧急解释与修复。
- **Windows 平台体验差**：冷启动卡顿 (#34025)、沙箱高磁盘 I/O (#33737)、UI 冻结 (#20214, #26401) 等问题频发，影响主要用户群。
- **macOS 交互缺陷**：快捷键冲突（Ctrl/Cmd-B 误触侧边栏 (#10749, #33977)）和 sidebar 冻结 (#34376) 降低编码效率。
- **移动端场景受限**：Codex Mobile 必须依赖在线桌面客户端 (#23200)，无法用于纯服务器环境，限制远程工作流。
- **自动化与调度可靠性**：自动化任务的时区处理错误 (#26633) 导致任务执行时间错乱，需更健壮的时间处理。
- **历史与会话管理**：历史记录丢失 (#29069, #21244) 和线程标题不自动更新 (#30949) 影响会话追溯与组织。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-07-21)

## 今日速览
今日 Gemini CLI 发布 v0.52.0 nightly 版本，重点修复了 **a2a-server 的远程代码执行（RCE）安全漏洞** 并优化了 MCP 工具发现超时问题。社区讨论聚焦于子代理状态管理、浏览器代理在 Wayland 环境下的兼容性，以及利用 AST 工具提升代码操作精度等核心体验改进。

## 版本发布
- **v0.52.0-nightly.20260721.gacae7124b**  
  本次 nightly 版本整合了多项关键修复：  
  - 安全增强：强制工作区信任检查与任务环境隔离，防止未授权代码执行（[#28470](https://github.com/google-gemini/gemini-cli/pull/28470)）。  
  - 稳定性提升：缩短 MCP `tools/list` 发现超时以避免启动挂起（[#28410](https://github.com/google-gemini/gemini-cli/pull/28410)），修复模型回退时的会话 ID 旋转问题（[#28469](https://github.com/google-gemini/gemini-cli/pull/28469)）。  
  - 用户体验：解决终端滚动时位置跳动的 UI 问题（[#28405](https://github.com/google-gemini/gemini-cli/pull/28405)）。  
  [完整更新日志](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b)

## 社区热点 Issues（过去24小时评论数最多）
1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   **子代理在达到 MAX_TURNS 后错误报告 GOAL 成功**（P1，12 评论，2 👍）  
   关键问题：`codebase_investigator` 子代理在未完成分析时误报成功，掩盖中断原因，影响任务可靠性。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   **通用代理永久挂起**（P1，7 评论，8 👍）  
   用户反馈：当 CLI 委派给通用代理时，即使简单操作（如创建文件夹）也会无限挂起，必须手动取消，严重阻碍工作流。

3. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   **Shell 命令执行完成后卡在“等待输入”状态**（P1，4 评论，3 👍）  
   现象：简单 CLI 命令执行完毕，界面仍显示“Awaiting user input”，导致后续操作阻塞。

4. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   **浏览器子代理在 Wayland 环境下失败**（P1，4 评论，1 👍）  
   兼容性问题：使用 Wayland 显示服务器的 Linux 用户无法正常使用浏览器代理，需针对性修复。

5. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)**  
   **构建稳健的组件级评估体系**（P1，7 评论）  
   工程重点：在现有行为评估（76个测试）基础上，扩展对 6 种 Gemini 模型的组件级质量验证，提升发布可靠性。

6. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)**  
   **利用模型 Bash 亲和力：零依赖 OS 沙盒与执行意图路由**（P2，8 评论，1 👍）  
   功能提案：通过沙盒化执行和意图分析，让模型更安全高效地使用 `grep`/`sed` 等原生工具，减少 token 消耗。

7. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   **评估 AST 感知文件读取、搜索与映射的影响**（P2，7 评论，1 👍）  
   性能探索：使用 AST 精确定位代码结构（如方法边界），减少误读和 token 噪声，可能优化 `codebase_investigator`。

8. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   **阻止自动内存无限重试低信号会话**（P2，5 评论）  
   内存系统缺陷：低信号会话因未被标记为“已处理”而反复被提取，浪费资源，需引入过滤机制。

9. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)**  
   **增强浏览器代理韧性：自动会话接管与锁恢复**（P2，4 评论）  
   体验改进：当前浏览器代理在持久会话锁冲突时直接失败，需实现自动清理或接管逻辑。

10. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)**  
    **Gemini 未充分使用技能与子代理**（P2，6 评论）  
    行为问题：模型通常不会主动调用自定义技能/子代理，除非用户明确指令，导致自动化能力未充分发挥。

## 重要 PR 进展（过去24小时）
1. **[#28470](https://github.com/google-gemini/gemini-cli/pull/28470)**  
   **修复 a2a-server：强制工作区信任与任务隔离，防止 RCE**（XL）  
   **安全紧急**：重构启动序列与环境加载，确保路径信任检查在环境变量加载前执行，并通过 `AsyncLocalStorage` 隔离任务环境，堵住未授权代码执行漏洞。

2. **[#28469](https://github.com/google-gemini/gemini-cli/pull/28469)**  
   **修复核心：模型回退时轮换会话 ID 以避免有状态 API 错误**（P1，M）  
   解决因会话 ID 不变导致的有状态后端拒绝请求问题（`Please submit a new query to continue with the Flash model`）。

3. **[#28410](https://github.com/google-gemini/gemini-cli/pull/28410)**  
   **修复核心：缩短 MCP 工具发现超时以实现快速失败**（P1，S）  
   将 `tools/list` 发现请求默认超时从 10 分钟大幅缩短，避免因服务器无响应（如 JSON-RPC 不匹配）导致 CLI 静默冻结。

4. **[#28405](https://github.com/google-gemini/gemini-cli/pull/28405)**  
   **修复：防止用户滚动时内容更新导致的位置跳动**（P1，XS）  
   优化 `VirtualizedList.tsx` 的自动滚动逻辑，避免在用户向上查看历史时新内容强制跳回底部。

5. **[#27705](https://github.com/google-gemini/gemini-cli/pull/27705)**  
   **内部测试：将 Gemini 3.1 Flash Lite 推进至 GA 并支持 Gemini 3.5 Flash**（XL，已关闭）  
   模型更新：弃用预览模型（如 `gemini-3.1-flash-lite-preview`），全面启用稳定版 `gemini-3.1

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-07-21)

**数据来源**: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)  
**统计周期**: 过去24小时 (截至 2026-07-21)

---

### 1. 今日速览
- 社区在24小时内发布了两个连续版本 (v1.0.72, v1.0.73)，重点修复了 Anthropic 子代理在配置额外目录时的稳定性问题，并优化了相对链接解析。
- 社区反馈高度集中：**键盘交互体验**（Shift+Enter 键位）、**剪贴板跨平台兼容性**（Windows/WSL/tmux）以及**上下文管理性能**（5MB 限制、自动压缩）成为最热议题。
- 新功能需求明确指向 **TUI 交互增强**（鼠标点击编辑、图片粘贴）和 **模型/会话管理精细化**（快速切换模型、沙盒会话写权限）。

---

### 2. 版本发布
过去24小时有两个版本发布，均为问题修复和小改进。

- **v1.0.73** (2026-07-20)
  - 修复：配置额外目录时，Anthropic 子代理能持续正常工作。
  - 修复：从代理文件位置解析自定义指令中的相对链接。
  - [发布说明](https://github.com/github/copilot-cli/releases/tag/v1.0.73)

- **v1.0.72** (2026-07-20)
  - 修复：`agentStop` 钩子无限循环问题，连续阻塞8次后强制结束回合，并传递 `stop_hook_active` 标志。
  - 新增：在 OAuth 流程中可选启用 git 和 gh 认证。
  - [发布说明](https://github.com/github/copilot-cli/releases/tag/v1.0.72)

---

### 3. 社区热点 Issues (Top 10)
以下 Issues 基于社区互动（👍数、评论、更新频率）及问题严重性筛选。

| # | 标题 | 状态 | 关键点 | 社区反应 |
|---|------|------|--------|----------|
| [#1481](https://github.com/github/copilot-cli/issues/1481) | SHIFT + ENTER 应换行却执行提示 | CLOSED | **核心交互体验**：标准键位（Shift+Enter换行）与当前行为（Ctrl+Enter换行，Shift+Enter提交）不符，长期困扰用户。 | 👍 17, 27 评论，已关闭（可能已在近期版本修复）。 |
| [#3622](https://github.com/github/copilot-cli/issues/3622) | Windows 上复制到剪贴板静默失败 | OPEN | **跨平台稳定性**：复制操作看似成功但剪贴板未更新，回归 v1.0.48 前功能。影响 Windows 用户核心工作流。 | 👍 4，新报告，需优先排查。 |
| [#1688](https://github.com/github/copilot-cli/issues/1688) | 添加可配置的自动压缩阈值 | OPEN | **性能优化**：高容量模型（如 Claude Opus）在上下文45-60%时性能骤降，现有自动压缩触发过晚。用户需精细控制。 | 👍 5，需求明确，影响高级用户。 |
| [#4185](https://github.com/github/copilot-cli/issues/4185) | `--add-dir` 导致 Claude 子代理dispatch失败 | OPEN | **严重功能缺陷**：使用 `--add-dir` 后，所有 Anthropic 子代理立即失败，报错“cache_control 块超限”。阻塞多目录工作流。 | 新报告，技术细节清晰，需紧急修复。 |
| [#4183](https://github.com/github/copilot-cli/issues/4183) | 自动压缩无法防止 5MB CAPI 失败 | OPEN | **架构限制**：即使上下文token未满，工具历史累积可导致序列化请求体超 5MB 限制，使会话永久不可用。 | 👍 2，触及底层协议限制，需架构级解决。 |
| [#2181](https://github.com/github/copilot-cli/issues/2181) | 回归：`COPILOT_CUSTOM_INSTRUCTIONS_DIRS` 未加载所有指令 | OPEN | **配置可靠性**：v1.0.9 无法加载多目录下的指令文件，而 v1.0.8 正常。破坏团队自定义指令工作流。 | 2 评论，影响企业级配置管理。 |
| [#3747](https://github.com/github/copilot-cli/issues/3747) | 遇到 `WAITFOR DELAY` 时出现不可恢复的超时 | OPEN | **模型鲁棒性**：提示或文件中出现特定字符串（MSSQL 命令）即导致 CLI 进入故障状态，与模型无关。 | 1 评论，表现为“毒丸”问题，需输入清洗或错误处理。 |
| [#4188](https://github.com/github/copilot-cli/issues/4188) | 计划模式回归：现在阻止 shell 命令 | OPEN | **功能回归**：最新版本中，计划模式阻止了之前允许的 shell 命令（如 `gh` CLI），削弱了计划阶段的信息收集能力。 | 1 评论，用户认为这是能力降级。 |
| [#4189](https://github.com/github/copilot-cli/issues/4189) | `/context` “MCP Tools” 报告未延迟的工具架构足迹 | OPEN | **信息准确性**：上下文显示的是所有 MCP 服务器的完整架构大小，而非实际延迟加载后的成本，误导用户对上下文占用的判断。 | 新报告，涉及 MCP 集成准确性。 |
| [#4191](https://github.com/github/copilot-cli/issues/4191) | 在 VSCode -> WSL -> tmux/screen 中剪贴板访问失效 | OPEN | **复杂环境兼容性**：在 VS Code 终端内的 WSL2 再嵌套 tmux/screen 时复制失败，但无 tmux 时正常。涉及多层终端模拟器。 | 新报告，环境组合特殊但影响部分工作流。 |

---

### 4. 重要 PR 进展
**过去24小时内无 Pull Request 更新。**  
建议关注仓库的 [PR 列表](https://github.com/github/copilot-cli/pulls) 以获取最新代码合并动态。

---

### 5. 功能需求趋势
从 Issues 中提炼出社区最关注的四大方向：

1.  **交互与用户体验 (TUI/UX)**
    - 标准键位支持（Shift+Enter 换行）。
    - TUI 鼠标交互增强（点击编辑已入队消息、点击复制路径）。
    - 在 `/btw` 等模式下支持粘贴图片。
    - 改进自动化/编排工具兼容性（PTY 输入响应）。

2.  **剪贴板与跨平台兼容性**
    - 彻底解决 Windows 剪贴板静默失败问题。
    - 修复在 WSL2 + tmux/screen 嵌套环境下的剪贴板访问。
    - 确保复制操作在所有目标平台可靠。

3.  **上下文管理与性能**
    - 提供**可配置的自动压缩阈值**，适配不同模型和场景。
    - 解决**5MB 序列化体限制**问题（可能与工具历史清理策略相关）。
    - 使 `/context` 信息展示更准确（反映延迟加载后的实际成本）。

4.  **模型与会话控制精细化**
    - 快速切换预设模型配置（减少菜单操作）。
    - 为桌面应用后台代理提供**BYOK/自定义模型选择**。
    - 允许沙盒会话在无全局权限下写入自己的 `plan.md`。

---

### 6. 开发者关注点 (痛点与高频需求)
**核心痛点**：
- **基础交互不一致**：Shift+Enter 键位不符合通用编辑器/聊天习惯，降低效率。
- **剪贴板可靠性差**：在 Windows 及复杂终端环境（WSL/tmux）下核心功能失效，严重影响工作流。
- **配置与回归**：环境变量（`COPILOT_CUSTOM_INSTRUCTIONS_DIRS`）加载失败、计划模式权限收窄，破坏现有配置和自动化脚本。
- **稳定性缺陷**：`--add-dir` 触发 Claude 子代理完全失败、`WAITFOR DELAY` 导致毒丸状态，表现为“不可用”级 Bug。
- **架构隐性限制**：5MB 请求体限制在长会话中必然触发，且自动压缩无法预防，需根本性设计调整。

**高频需求**：
- **性能控制权**：要求对上下文压缩有配置权，而非仅依赖自动策略。
- **模型选择灵活性**：快速切换模型、为后台任务指定特定模型（包括 BYOK）。
- **TUI 现代化**：支持鼠标操作、图片粘贴，提升交互直观性。
- **安全与权限细化**：沙盒环境需要最小权限下的计划文件写入能力。

---
*报告生成于 2026-07-21，基于 GitHub 公开数据。建议点击链接查看 Issue/Release 原文以获取最新进展。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-07-21)

**数据来源**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)  
**统计周期**: 过去24小时 (截至 2026-07-21)

---

## 今日速览
过去24小时无新版本发布，但社区技术讨论活跃，聚焦于**核心工具链的可靠性修复**与**跨平台体验一致性**。多个关键PR已合并以解决上下文管理、会话恢复等深层问题，同时新报告的问题揭示了Windows平台交互与云端部署稳定性方面的持续挑战。

---

## 版本发布
*过去24小时内无新版本发布。*

---

## 社区热点 Issues (过去24小时内更新，共6条)
> 注：以下为全部新更新/创建的Issue，按时间倒序排列。

| # | 标题 | 重要性说明 | 社区反应 |
|---|------|------------|----------|
| [**#2526**](https://github.com/MoonshotAI/kimi-cli/issues/2526) | `StrReplaceFile` reports too few total replacements for chained edits | **高**：核心文件编辑工具的逻辑缺陷，影响多步编辑的准确性，可能导致自动化任务失败。 | 新创建，0评论，0赞 |
| [**#2525**](https://github.com/MoonshotAI/kimi-cli/issues/2525) | Goal mode: no-op continuation turns fire indefinitely while waiting on external conditions, burning tokens and context | **高**：Agent在等待外部条件时陷入无限循环，造成** token 和上下文窗口的严重浪费**，影响生产环境成本。 | 新创建，0评论，0赞 |
| [**#2523**](https://github.com/MoonshotAI/kimi-cli/issues/2523) | [bug] Context compaction bug — Kimi Code reopens an already completed and deleted task | **中高**：上下文压缩逻辑错误，可能导致已删除任务被错误地重新激活，引发**数据一致性与状态管理**问题。 | 新创建，0评论，0赞 |
| [**#2522**](https://github.com/MoonshotAI/kimi-cli/issues/2522) | Windows: old kimi-code sessions not migrated to .kimi after upgrade; kimi migrate command missing | **中高**：Windows用户升级后**历史会话数据丢失**，且缺乏迁移工具，严重影响用户体验与工作流连续性。 | 新创建，0评论，0赞 |
| [**#2521**](https://github.com/MoonshotAI/kimi-cli/issues/2521) | [bug] windows 版本的herdr中，无法使用方向键选择 | **中**：Windows平台下交互式组件（herdr）的**基础UI功能缺陷**，影响菜单操作效率。 | 新创建，0评论，0赞 |
| [**#2209**](https://github.com/MoonshotAI/kimi-cli/issues/2209) | [OPEN] [bug] 在云端服务器部署的kimiclaw 无回复 CLI 持续 429 engine_overloaded 超过 48 小时 | **高**：**长期存在的生产环境稳定性问题**（429过载），影响云端部署的可用性，且升级后未解决，社区关注度高（3👍，4评论）。 | 更新于2026-07-20，3👍，4评论 |

---

## 重要 PR 进展 (过去24小时内更新，共3条)
> 注：以下为全部新更新/创建的PR，均与上述Issue直接相关。

| # | 标题 | 功能/修复内容 | 关联 Issue |
|---|------|---------------|------------|
| [**#2524**](https://github.com/MoonshotAI/kimi-cli/pull/2524) | `fix(tools): count StrReplaceFile replacements against the running content` | **修复核心工具逻辑**：修正 `StrReplaceFile` 的替换计数方式，使其基于**渐进编辑后的内容**而非原始内容计算，解决链式编辑中替换计数不准确的问题。 | 关闭 #2526 |
| [**#2520**](https://github.com/MoonshotAI/kimi-cli/pull/2520) | `fix(session): align fork/undo context truncation to wire turns` | **修复会话历史管理**：统一 fork/undo 操作的上下文截断逻辑与 wire turns 对齐，解决因历史记录不匹配导致的会话状态错乱（如 #1974, #2049）。 | 关闭 #2517 |
| [**#2519**](https://github.com/MoonshotAI/kimi-cli/pull/2519) | `fix(app): refresh stale frozen system prompt on session resume` | **修复会话恢复机制**：会话恢复时不再直接采用冻结的系统提示，而是**重新加载**，确保新添加的 skills 和 `AGENTS.md` 编辑能生效。 | 关闭 #2420 |

---

## 功能需求趋势 (从 Issues 中提炼)
1.  **跨平台一致性与兼容性**：Windows 平台问题集中（数据迁移 #2522、UI 交互 #2521），需系统性提升 Windows 体验。
2.  **Agent 行为控制与资源管理**：Goal mode 的无限循环问题 (#2525) 凸显了对**外部条件等待机制**和**资源消耗监控**的强烈需求。
3.  **上下文与会话管理健壮性**：上下文压缩 (#2523) 与历史截断 (#2520 PR) 问题表明社区对**复杂会话状态（fork/undo）的准确性**要求极高。
4.  **核心工具链可靠性**：`StrReplaceFile` 等基础工具的精确性 (#2526, #2524 PR) 是自动化工作流的基石，不容有失。
5.  **云端部署与运维支持**：长期存在的 429 过载问题 (#2209) 指向**服务端负载均衡、客户端重试策略或诊断工具**的不足。

---

## 开发者关注点 (高频痛点)
*   **Windows 升级迁移路径缺失**：旧版本数据无法自动迁移至新目录结构 (`%USERPROFILE%\.kimi-code` → `.kimi`)，是当前最急迫的体验问题。
*   **避免“静默”资源耗尽**：Agent 在等待外部条件时无意义地消耗 token 和上下文 (#2525)，开发者需要更**透明的状态反馈**和**可配置的等待超时/退出机制**。
*   **基础交互可靠性**：方向键选择等基础 UI 功能在 Windows 失效 (#2521)，影响日常操作效率，需回归基础测试覆盖。
*   **会话状态可预测性**：上下文压缩和 fork/undo 导致的任务状态错乱 (#2523, #2519 PR)，开发者需要**清晰、一致的会话历史视图**和状态管理保证。
*   **生产环境稳定性**：云端部署的 429 错误长期未解 (#2209)，严重削弱了对 CLI 用于自动化/CI 场景的信心，需官方提供**更明确的错误码指导、客户端退避策略或服务端状态页**。

---
**报告生成时间**: 2026-07-21 (基于 GitHub 数据快照)  
**说明**: 本日报仅基于提供的 GitHub 数据片段生成，可能无法覆盖社区全部动态。建议访问项目仓库获取最完整信息。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-07-21)

## 今日速览
- OpenCode 于今日发布 **v1.18.4**，核心更新为 Kimi 模型引入自适应思考控制并默认输出摘要推理，同时修复 OpenAI 提供者连接超时问题。
- 社区持续聚焦 **桌面端稳定性**，多起“通知服务器未找到”崩溃报告（尤其 WSL 环境）引发讨论，相关修复 PR 已提交。
- **Plan/Build 模式切换**在新 UI 中缺失成为热点，用户反馈工作流受阻，相关功能恢复 PR 正在推进。

## 版本发布
### v1.18.4 (2026-07-21)
- **核心改进**：为 Anthropic 兼容提供者上的 Kimi 模型启用自适应思考控制，默认输出摘要推理（@chouqin）。
- **Bug 修复**：
  - 减少 OpenAI 提供者在慢连接建立时的头部超时。
  - 尊重提供者定义的推理选项（描述不完整，以发布说明为准）。
- [发布说明链接](https://github.com/anomalyco/opencode/releases/tag/v1.18.4)

## 社区热点 Issues（过去24小时更新）
1. **[#27906](https://github.com/anomalyco/opencode/issues/27906)** - v1.15.1+ 破坏 Bun 安装  
   **重要性**：高评论（20）、高点赞（13）。Bun 等非 NPM 包管理器默认阻止 postinstall 脚本，导致安装失败，影响广泛。  
   **社区反应**：用户呼吁提供无脚本安装选项或文档说明。

2. **[#29363](https://github.com/anomalyco/opencode/issues/29363)** - `limit.output` 被静默限制在 32k  
   **重要性**：高评论（15）。配置中的输出 token 上限被硬限制在 32k，与 DeepSeek/GPT/Claude 等大模型能力不匹配，需实验性环境变量绕过。  
   **社区反应**：强烈要求提升默认上限或提供明确配置路径。

3. **[#37171](https://github.com/anomalyco/opencode/issues/37171)** - 桌面端重启崩溃："Notification server not found: wsl:Ubuntu"  
   **重要性**：高评论（9）。WSL 环境下通知服务器连接失败导致崩溃，影响桌面端用户体验。  
   **社区反应**：WSL 用户集中反馈，寻求稳定解决方案。

4. **[#37970](https://github.com/anomalyco/opencode/issues/37970)** - Plan/Build 模式  
   **重要性**：新 Issue（创建于 2026-07-20），评论 9。新版本移除模式切换选项，用户无法控制计划/构建行为，工作流混乱。  
   **社区反应**：用户要求恢复明确切换入口，与 #37430 关联。

5. **[#37430](https://github.com/anomalyco/opencode/issues/37430)** - 无法在新 UI 中切换构建和计划模式  
   **重要性**：评论 6，已 CLOSED 但问题未完全解决。新 UI 隐藏切换按钮，用户无入口变更模式。  
   **社区反应**：UI 一致性受质疑，需改进设计。

6. **[#23539](https://github.com/anomalyco/opencode/issues/23539)** - 插件 API 用于自定义状态栏小部件  
   **重要性**：功能请求，评论 6，👍 4。社区希望扩展插件能力，自定义状态栏（类似 #8619、#18969 的延续）。  
   **社区反应**：插件开发者积极支持，需官方 API 设计。

7. **[#35434](https://github.com/anomalyco/opencode/issues/35434)** - 自 v1.17.13 起 TUI 中多问题工具调用静默失败  
   **重要性**：评论 6。`question` 工具在 TUI 中多问题时提交无响应，回归问题影响终端用户。  
   **社区反应**：TUI 用户报告严重交互故障，需紧急修复。

8. **[#36826](https://github.com/anomalyco/opencode/issues/36826)** - DeepSeek V4 Flash 模型发送提示失败  
   **重要性**：评论 6。特定模型返回“Unexpected server error”，模型兼容性问题突出。  
   **社区反应**：DeepSeek 用户受影响，需检查提供者集成。

9. **[#23248](https://github.com/anomalyco/opencode/issues/23248)** - 重命名项目目录时会话孤立  
   **重要性**：评论 5，👍 6。会话存储绝对路径，目录重命名后无法在列表中显示，数据持久化缺陷。  
   **社区反应**：长期存在，需路径监听或相对存储方案。

10. **[#37993](https://github.com/anomalyco/opencode/issues/37993)** - 为受限网络环境添加内置代理支持  
    **重要性**：评论 4。企业或地区网络限制导致 webfetch、git clone 等失败，内置代理成为刚需。  
    **社区反应**：网络受限用户强烈呼吁，影响可用性。

## 重要 PR 进展（过去24小时更新）
1. **[#38014](https://github.com/anomalyco/opencode/pull/38014)** - fix(core): 在 Windows 上将 npm 插件入口点解析为文件 URL  
   **内容**：修复 Windows 上 `import.meta.resolve()` 返回原始路径而非 `file://` URL 导致插件加载失败的问题。  
   **影响**：解决 Windows 用户插件安装异常。

2.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-07-21)

## 今日速览
Qwen Code 今日发布 v0.20.0-nightly 预览版，核心改进集中在**自动修复（autofix）流程的可靠性提升与可观测性增强**。同时，社区报告了多个高优先级缺陷，涉及子代理工具调用、Token Plan 集成及 Web Shell 令牌持久化，相关修复已通过 PR 快速推进。

## 版本发布
- **v0.20.0-nightly.20260721.cda0e0348**  
  主要更新：  
  - 自动修复系统引入基于标签的接管与发布机制，优化强制分发的误报处理。  
  - 修复自动修复流程中的若干问题。  
  [Release 链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-nightly.20260721.cda0e0348)

## 社区热点 Issues（Top 10）
1. **[RFC] #7040: Reliable auto-memory recall**  
   **重要性**：核心记忆系统架构 RFC，决定未来上下文性能与自动化方向，社区讨论热烈（7 评论）。  
   [链接](https://github.com/QwenLM/qwen-code/issues/7040)

2. **P2 #7147: MCP server never successfully get tool and resource listing**  
   **重要性**：MCP 集成关键故障，影响第三方工具（如 Fastmail）连接，已复现且需紧急修复（6 评论）。  
   [链接](https://github.com/QwenLM/qwen-code/issues/7147)

3. **P1 #7284: side-query forces enable_thinking=false, breaking TokenPlan endpoints**  
   **重要性**：P1 级缺陷，`web_fetch` 等工具强制禁用思考模式，导致 Token Plan API 返回 400 错误，阻塞 Qwen 云服务使用（3 评论）。  
   [链接](https://github.com/QwenLM/qwen-code/issues/7284)

4. **P1 #7315: Agent tool schema forces mutually exclusive working_dir and isolation**  
   **重要性**：Agent 工具参数验证逻辑错误，使子代理启动失败，影响工作流自动化（2 评论）。  
   [链接](https://github.com/QwenLM/qwen-code/issues/7315)

5. **P1 #7316: OpenAI 对 toolCall 的特殊反应导致 subAgent 完全无法使用**  
   **重要性**：OpenAI 兼容模式下，可选参数处理异常导致子代理调用崩溃，生态兼容性危机（3 评论）。  
   [链接](https://github.com/QwenLM/qwen-code/issues/7316)

6. **P2 #7023: Model switch can invalidate a loaded daemon session**  
   **重要性**：模型切换后持久化会话失效，影响长时间运行任务，用户体验严重受损（3 评论）。  
   [链接](https://github.com/QwenLM/qwen-code/issues/7023)

7. **P2 #7301: Web Shell loses bearer token on page refresh when daemon started with --token**  
   **重要性**：Web Shell 令牌无法持久化，刷新后需重新认证，安全性体验双降（2 评论，今日更新）。  
   [链接](https://github.com/QwenLM/qwen-code/issues/7301)

8. **P2 #7377: 会话中工具调用参数丢失问题**  
   **重要性**：新发 P2 缺陷，`run_shell_command`、`write_file` 等工具参数随机丢失，导致重试循环，会话稳定性受质疑（1 评论，今日创建）。  
   [链接](https://github.com/QwenLM/qwen-code/issues/7377)

9. **#6949: ACP: Plan mode blocks unclassified read-only shell commands**  
   **重要性**：VP 模式下只读命令被误拦截，且可绕过退出确认，安全策略存在漏洞（2 评论）。  
   [链接](https://github.com/QwenLM/qwen-code/issues/6949)

10. **P2 #7306: Harden tool-output budgeting, observability, and artifact lifecycle**  
    **重要性**：工具输出截断与聚合逻辑混乱，影响性能监控与资源管理，需系统性重构（2 评论）。  
    [链接](https://github.com/QwenLM/qwen-code/issues/7306)

## 重要 PR 进展（Top 10）
1. **#7351 [autofix/takeover]**: `fix(autofix): retry a verification-gate crash instead of burying the agent's fix`  
   **内容**：区分验证门禁的“拒绝”与“崩溃”，对崩溃自动重试，避免自动修复工作被静默丢弃。  
   [链接](https://github.com/QwenLM/qwen-code/pull/7351)

2. **#7355 [autofix/takeover]**: `feat(autofix): render the managed fleet into the scan's run summary`  
   **内容**：在扫描摘要中展示托管 PR 队列状态，一键查看“循环健康度”与卡点，提升可观测性。  
   [链接](https://github.com/QwenLM/qwen-code/pull/7355)

3. **#7364 [autofix/takeover]**: `feat(autofix): resolve the review threads whose findings it implemented`  
   **内容**：自动修复后自动关闭已处理的评审线程，减少人工复查时的噪音。  
   [链接](https://github.com/QwenLM/qwen-code/pull/7364)

4. **#7350 [autofix/takeover]**: `feat(autofix): pick up managed fork PRs in real time`  
   **内容**：托管 PR 的评审反馈实时触发自动修复，无需等待定时扫描，加速迭代。  
   [链接](https://github.com/QwenLM/qwen-code/pull/7350)

5. **#7358 [autofix/takeover]**: `fix(ci): stop a slow patrol classifier from killing every flaky rerun`  
   **内容**：修复 CI 失败巡逻（Failure Patrol）中一个慢分类器导致整个流程取消的问题，恢复巡逻稳定性。  
   [链接](https://github.com/QwenLM/qwen-code/pull/7358)

6. **#7308 [autofix/takeover]**: `feat(serve): establish workspace runtime ownership`  
   **内容**：`qwen serve` 的 ACP 生命周期与能力状态归属工作区而非会话，实现更清晰的运行时协调与空闲清理。  
   [链接](https://github.com/QwenLM/qwen-code/pull/7308)

7. **#7256**: `fix(core): strip Qwen-internal daemon secrets from agent-spawned child env`  
   **内容**：安全修复，防止子进程（如 shell 命令、MCP 服务器）继承守护进程的 `QWEN_SERVER_TOKEN` 等敏感环境变量。  
   [链接](https://github.com/QwenLM/qwen-code/pull/7256)

8. **#7374**: `fix(web-shell): persist the daemon bearer token per-tab`  
   **内容**：Web Shell 通过 `sessionStorage` 持久化令牌，解决 `qwen serve --token` 启动后页面刷新丢失认证的问题。  
   [链接](https://github.com/QwenLM/qwen-code/pull/7374)

9. **#7365 [autofix/takeover]**: `feat(web-shell): surface worktree isolation in the new-session empty state`  
   **内容**：将工作树隔离会话入口从侧边栏移至空状态页，提升工作流隔离功能的可发现性。  
   [链接](https://github.com/QwenLM/qwen-code/pull/7365)

10. **#7376**: `chore: simplify CODEOWNERS to package-level rules`  
    **内容**：简化 CODEOWNERS 规则，将 `packages/core/` 等核心包统一交由核心维护者团队审批，降低协作摩擦。  
    [链接](https://github.com/QwenLM/qwen-code/pull/7376)

## 功能需求趋势
1. **记忆与上下文管理

</details>

---
*本日报由 [Big Model Radar](https://github.com/zx0828/big_model_radar) 自动生成。*