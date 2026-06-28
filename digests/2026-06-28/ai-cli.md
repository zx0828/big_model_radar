# AI CLI 工具社区动态日报 2026-06-28

> 生成时间: 2026-06-28 00:35 UTC | 覆盖工具: 7 个

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

# AI CLI 工具社区动态横向对比分析报告 (2026-06-28)

## 1. 生态全景
当前 AI CLI 工具生态整体处于从“功能验证”向“生产就绪”转型的关键阶段。社区反馈的核心矛盾已从早期对基础功能的渴求，转向对**稳定性、安全性、跨平台一致性及成本可控性**的迫切需求。各工具在持续扩展集成能力（如 MCP、IDE 插件、浏览器自动化）的同时，均暴露出基础架构层面的挑战：认证机制脆弱、安全策略误报率高、会话状态管理混乱、以及平台特定回归问题频发。值得注意的是，以 **Qwen Code** 和 **Gemini CLI** 为代表的工具正积极投入于多代理架构、持久化会话和细粒度权限控制等深度优化，而 **OpenAI Codex** 和 **GitHub Copilot CLI** 则因核心计费模型与基础体验问题承受着较大的社区压力。整体趋势表明，**可靠性与可控性**已成为衡量工具成熟度的首要标准。

## 2. 各工具活跃度对比

| 工具 (Tool) | 热点 Issues (Top 10) | 重要 PR 数量 | 版本发布 (24h内) | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 2 | 无 | 社区问题集中，但修复响应慢，PR 活动低。 |
| **OpenAI Codex** | 10 | 10 | 3 个 (alpha 系列) | 高度活跃，持续迭代修复，但核心计费争议未解。 |
| **Gemini CLI** | 10 | 10 | 无 | 聚焦核心稳定性与安全加固，PR 质量高。 |
| **GitHub Copilot CLI** | 10 | 3 | 无 (前一日 v1.0.66) | 新版本引发多处回归，社区抱怨集中。 |
| **Kimi Code CLI** | 0 | 0 | 无 | 过去24小时无社区活动。 |
| **OpenCode** | 7 (部分数据) | 多个 | 无 | 社区活跃，聚焦跨平台与功能增强。 |
| **Qwen Code** | 10 | 10 | 1 个 (nightly) | 功能扩展与修复并重，发布节奏快。 |

## 3. 共同关注的功能方向

| 方向 | 具体诉求 | 涉及工具 |
| :--- | :--- | :--- |
| **跨平台一致性与支持** | 1. Windows 原生通知 (Claude)<br>2. Linux 桌面客户端 (OpenAI Codex)<br>3. 修复 Windows/macOS 特定回归 Bug (Copilot CLI)<br>4. WSL/ARM64 兼容性 (OpenCode) | Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode |
| **安全与隐私精细化** | 1. 减少安全过滤器误报 (Claude)<br>2. 添加 `.codexignore` / `.gitignore` 机制 (OpenAI Codex)<br>3. 防止未授权子代理运行与数据泄露 (Gemini, Qwen)<br>4. 路径遍历验证加固 (Qwen) | Claude Code, OpenAI Codex, Gemini CLI, Qwen Code |
| **会话与上下文管理** | 1. 会话持久化与跨设备同步 (Qwen, OpenCode)<br>2. 后台任务可视化与管理 (Qwen)<br>3. 类似 `/btw` 的随时提问功能 (Copilot CLI)<br>4. 会话重命名、撤销 (OpenCode) | Qwen Code, OpenCode, GitHub Copilot CLI |
| **认证与连接稳定性** | 1. 解决 401 错误与配置损坏 (Claude)<br>2. 修复 MCP OAuth 凭据刷新问题 (OpenAI Codex)<br>3. 修复 Linux Keychain 支持 (Copilot CLI) | Claude Code, OpenAI Codex, GitHub Copilot CLI |
| **IDE 集成体验深化** | 1. VS Code 面板 UI 改进 (Claude)<br>2. 修复 VS Code 扩展严重 Bug (OpenAI Codex, Copilot CLI) | Claude Code, OpenAI Codex, GitHub Copilot CLI |

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特点 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 安全研究、深度 IDE 集成、MCP 协议支持 | 注重安全与开发流程一体化的专业开发者 | 强调整合与策略控制，但安全策略过于激进，需精细化。 |
| **OpenAI Codex** | 通用代码生成、高负载工作流、企业插件市场 | 重度付费用户、企业团队 | 依赖强大模型，但计费模型不透明，Linux 支持缺失是硬伤。 |
| **Gemini CLI** | 多代理协同、浏览器自动化、AST 感知代码操作 | 需要复杂自动化（如 Web 操作、深度代码分析）的开发者 | 架构先进（多代理），但代理行为可控性与稳定性是当前焦点。 |
| **GitHub Copilot CLI** | GitHub 生态无缝集成、轻量级 CLI 交互 | GitHub 重度用户、追求工作流连贯性的开发者 | 与 GitHub 服务绑定深，但近期版本质量下滑，基础体验受损。 |
| **OpenCode** | 跨平台兼容（WSL/ARM）、创新支付、开放生态 | 技术尝鲜者、跨平台开发者、对支付方式有特殊需求者 | 社区驱动，积极响应用户特定环境需求，但规模相对较小。 |
| **Qwen Code** | 全平台覆盖（桌面/移动/Web）、会话持久化、多通道集成 | 需要跨设备、多场景（如 Telegram、浏览器）连续工作的用户 | 功能迭代极快，集成生态丰富，正从“个人助手”向“团队工具”演进。 |

## 5. 社区热度与成熟度

*   **高活跃度 & 快速迭代期**：**OpenAI Codex** 与 **Qwen Code**。两者 PR 数量多、版本发布频繁，社区功能诉求与修复响应形成正向循环，处于功能快速扩张与架构优化阶段，成熟度较高但问题暴露也快。
*   **高活跃度 & 稳定修复期**：**Gemini CLI**。社区 Issues 聚焦核心稳定性与安全，PR 针对性极强，显示团队正集中精力夯实基础，社区讨论质量高，走向成熟。
*   **高抱怨度 & 修复滞后期**：**Claude Code** 与 **GitHub Copilot CLI**。两者社区 Issues 数量多、痛点集中（认证、安全误报、版本回归），但 PR 活动相对冷清，修复速度跟不上问题涌现速度，用户体验受损，成熟度遭遇瓶颈。
*   **稳定 niche 社区**：**OpenCode**。社区规模较小但活跃，问题聚焦特定平台（WSL/ARM）和特色功能（支付），修复响应积极，在细分领域表现成熟。
*   **静默期**：**Kimi Code CLI**。无任何活动，可能处于战略调整或资源重新分配阶段。

## 6. 值得关注的趋势信号

1.  **“可靠性”压倒“新颖性”**：社区对**代理行为可控性**（Gemini）、**会话状态一致性**（Qwen, OpenCode）、**基础功能无回归**（Copilot CLI）的诉求，已超过对全新功能（如浏览器控制）的期待。**开发者决策参考**：评估工具时，应优先测试其核心任务的成功率与状态恢复能力，而非仅看功能列表。
2.  **安全策略进入“精耕细作”阶段**：从 Claude 的误报争议到 Gemini/Qwen 的权限与日志控制，表明安全机制需具备**上下文感知能力**和**用户可配置边界**。**开发者决策参考**：选择工具时，需审视其安全策略是否可针对“安全研究”、“内部项目”等场景调整，避免工作流被阻断。
3.  **会话即资产，需持久化与可管理**：Qwen 的 `.qwen/` 目录提案、OpenCode 的会话重命名，反映了用户将**会话历史、任务清单视为可复用的数字资产**。**开发者决策参考**：优先选择支持项目级状态存储（而非仅用户目录）的工具，以保障跨设备、团队协作的连续性。
4.  **成本与计费透明度成为信任基石**：OpenAI Codex 的 rate-limit 成本争议是典型反面教材。**开发者决策参考**：在使用任何按量计费工具时，必须验证其成本监控、预警和明细查询能力，并将此作为选型关键指标。
5.  **跨平台不再是“加分项”，而是“入场券”**：从 Windows 通知到 WSL 支持，所有工具均暴露出平台适配不足的问题。**开发者决策参考**：团队若使用混合操作系统，必须对目标工具在所有目标平台进行**冒烟测试**，特别是文件路径、剪贴板、通知等基础交互。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills 社区热点报告（截至 2026-06-28）

---

### 1. 热门 Skills 排行（按社区讨论热度）

| 排名 | PR 编号 | Skill 名称 | 功能简介 | 社区讨论热点 | 状态 |
|------|---------|------------|----------|--------------|------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 核心修复 | 修复 `run_eval.py` 始终报告 0% recall 的致命 bug，影响描述优化循环 | 该问题在 Issues 中被多次复现（#556, #1169），导致技能描述优化完全失效，是当前技术焦点 | OPEN |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 自动修复 AI 生成文档的排版问题（孤行、寡行、编号错位） | 解决 Claude 生成文档的普遍痛点，实用性高，社区期待广泛落地 | OPEN |
| 3 | [#486](https://github.com/anthropics/skills/pull/486) | odt | 支持 OpenDocument 格式（.odt, .ods）的创建、模板填充与转换 | 填补开源办公文档格式支持空白，与现有 docx/pdf 技能形成互补 | OPEN |
| 4 | [#1099](https://github.com/anthropics/skills/pull/1099) | skill-creator Windows 修复 | 修复 Windows 下 `run_eval.py` 因管道读取导致的崩溃 | 与 #1298 同根同源，针对 Windows 平台的紧急兼容性修复 | OPEN |
| 5 | [#1050](https://github.com/anthropics/skills/pull/1050) | skill-creator Windows 兼容 | 修复 Windows 下 `claude.cmd` 调用与编码问题 | 解决 Windows 用户无法使用 skill-creator 的核心障碍，影响开发者体验 | OPEN |
| 6 | [#541](https://github.com/anthropics/skills/pull/541) | pdf/docx 书签冲突修复 | 修复 DOCX 技能添加修订时与现有书签的 ID 冲突导致文档损坏 | 涉及 OOXML 规范细节，修复企业级文档处理中的隐蔽 bug | OPEN |
| 7 | [#539](https://github.com/anthropics/skills/pull/539) | YAML 特殊字符预警 | 在 `quick_validate.py` 中检测未加引号的描述字段中的 `:` 等字符 | 预防 YAML 解析静默失败，提升技能创建可靠性 | OPEN |
| 8 | [#361](https://github.com/anthropics/skills/pull/361) | YAML 特殊字符检测增强 | 扩展检测范围至 `description` 和 `compatibility` 字段 | 与 #539 协同完善 YAML 安全校验，社区反馈积极 | OPEN |

---

### 2. 社区需求趋势（从 Issues 提炼）

- **安全与信任边界**：社区强烈要求防止技能冒充官方（#492），并呼吁建立技能签名或审核机制。
- **组织内协作共享**：用户亟需技能在团队/企业内直接共享的功能，而非手动传输文件（#228）。
- **跨平台稳定性**：Windows 兼容性问题集中爆发（#1061, #1099, #1050），成为 skill-creator 可用的关键门槛。
- **企业级治理能力**：提出 `agent-governance`（#412）等技能，覆盖策略执行、威胁检测、审计跟踪。
- **格式支持扩展**：除 docx/pdf 外，社区呼吁增加 ODT（#486）、Markdown 高级排版等格式处理能力。
- **工具链集成**：探索与 AWS Bedrock（#29）、MCP 协议（#16）的集成，以扩大技能运行环境。
- **记忆与状态管理**：提出 `compact-memory`（#1329）等技能，优化长程代理的上下文效率。

---

### 3. 高潜力待合并 Skills（评论活跃但未合并）

| PR 编号 | 技能名称 | 潜力分析 | 关联 Issues |
|---------|----------|----------|-------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 核心修复 | 解决评估循环失效的根本问题，直接影响所有技能优化流程，合并优先级最高 | #556, #1169, #1323 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | Windows 子进程修复 | 针对性解决 Windows 用户无法运行评估的阻塞问题，提升工具可及性 | #1061 |
| [#1050](https://github.com/anthropics/skills/pull/1050) | Windows 编码与调用修复 | 与 #1099 互补，覆盖 Windows 主要兼容性问题，合并后可使 skill-creator 在 Windows 基本可用 | #1061 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 高实用价值新技能，覆盖文档生成后的自动化排版，易被广泛采用 | 无直接关联，但需求普遍 |
| [#486](https://github.com/anthropics/skills/pull/486) | odt | 填补开源文档格式支持空白，符合企业多格式文档处理需求 | 无直接关联 |

---

### 4. Skills 生态洞察

**社区当前最集中的诉求是：修复 skill-creator 工具链的稳定性（尤其是 Windows 兼容性与评估准确性），同时推动 Skills 向企业级安全治理、组织协作与多格式支持方向扩展。**

---

# Claude Code 社区动态日报 (2026-06-28)

**数据来源**: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)  
**统计周期**: 过去24小时 (截至 2026-06-28)

---

## 今日速览
今日社区焦点集中于**安全过滤器误报问题**，多起报告显示合法开发工作（尤其是无人机固件分析）被系统性地阻断，引发对策略精细化的迫切需求。同时，**认证相关故障**（401错误、配置损坏）与**模型性能回归**持续高讨论度，跨平台一致性（Windows通知、环境变量）和IDE集成体验改进也是开发者高频诉求。

---

## 版本发布
过去24小时无新版本发布。

---

## 社区热点 Issues (Top 10)
以下选取过去24小时内更新且评论/关注度最高的开放或近期关闭的 Issue：

1. **[MCP] 服务器指令未传递至模型**  
   - **链接**: #23808  
   - **重要性**: 影响 Model Context Protocol (MCP) 核心功能，导致服务器初始化指令失效，可能破坏工具集成可靠性。  
   - **社区反应**: 已关闭，但评论9个，表明问题曾广泛存在；修复后需验证。

2. **[Feature] 原生 Windows  toast 通知**  
   - **链接**: #67220  
   - **重要性**: 要求为 Windows 用户提供与 macOS/Linux 一致的 OS 级通知，提升任务完成/等待提示的可见性，解决跨平台体验割裂。  
   - **社区反应**: 开放中，评论3个，反映 Windows 用户对功能平等的诉求。

3. **[Feature] VS Code 面板可折叠提示块**  
   - **链接**: #71928  
   - **重要性**: 改善 VS Code 扩展中“确认提示”的 UI 占用问题，避免遮挡对话上下文，提升长对话操作效率。  
   - **社区反应**: 新提交，评论1个，但符合近期 UI 优化趋势。

4. **[Bug] API 401 认证错误**  
   - **链接**: #69706  
   - **重要性**: 高频认证失败问题，可能涉及 API 密钥、配置或服务端验证，影响基本使用。  
   - **社区反应**: 开放，评论21个，👍10个，社区关注度最高，需优先排查。

5. **[Bug] 模型忽略指令/违反规则**  
   - **链接**: #57200  
   - **重要性**: Opus 模型在复杂任务中系统性无视用户约束，威胁输出可靠性与安全性。  
   - **社区反应**: 开放，评论9个，👍5个，用户对模型行为失控表示担忧。

6. **[Bug] Opus 4.7 性能回归 (Colossus-1 后)**  
   - **链接**: #57692  
   - **重要性**: 付费模型在 xHigh 推理模式下速度显著下降，影响高负载工作流，可能涉及容量调度或优化缺失。  
   - **社区反应**: 开放，评论4个，👍3个，性能敏感用户反馈强烈。

7. **[Bug][cyber] 安全过滤器误阻无人机固件分析**  
   - **链接**: #71910 (及 #71901, #71920 等系列)  
   - **重要性**: 安全模块在合法安全研究/开发场景（如无人机协议分析）中频繁误报，导致会话中断，策略需调整。  
   - **社区反应**: 多起开放报告，均标记为“session-halted”，严重性高，反映安全策略过于激进。

8. **[Bug] VS Code 标签页移动导致 AskUserQuestion 面板消失**  
   - **链接**: #61665  
   - **重要性**: 扩展 UI 在窗口管理操作后不可恢复，破坏需要用户输入的交互流程。  
   - **社区反应**: 已关闭，评论5个，表明问题曾普遍，修复后需回归测试。

9. **[Bug] 认证配置损坏 (.claude.json)**  
   - **链接**: #70002  
   - **重要性**: 认证失败后伴随配置文件损坏提示，暴露配置容错与恢复机制缺陷。  
   - **社区反应**: 开放，评论3个，与 #69706 可能关联，需系统诊断。

10. **[Bug] macOS SSL 证书过期 (2.1.190+)**  
    - **链接**: #71663  
    - **重要性**: 新版本引入 SSL 证书验证失败，导致网络请求中断，影响所有依赖外部 API 的功能。  
    - **社区反应**: 开放，评论2个，但影响范围广，需紧急修复。

---

## 重要 PR 进展
过去24小时仅 2 个 PR 更新，社区贡献相对较少：

1. **fix(scripts): 为 edit-issue-labels.sh 添加无参数错误提示**  
   - **链接**: #68787  
   - **内容**: 当脚本未接收 `--add-label` 或 `--remove-label` 参数时，此前静默退出（代码1），现添加明确错误信息至 stderr，改善开发者调试体验。  
   - **状态**: 开放

2. **无实质内容 PR**  
   - **链接**: #71798  
   - **内容**: 提交信息为空，可能为测试或误操作，已关闭。  
   - **状态**: 已关闭

---

## 功能需求趋势
从 Issues 中提炼的社区最关注方向：
- **IDE 集成深化**: 改善 VS Code 扩展的 UI/UX（可折叠面板、事件触发、标签页管理）。
- **跨平台一致性**: 统一通知机制（Windows toast）、环境变量（CLAUDE_PROJECT_DIR）和行为。
- **安全策略精细化**: 调整内容安全过滤器，减少对合法安全研究、开发工作的误阻断。
- **认证与配置健壮性**: 优化错误处理、配置文件管理及证书验证机制。
- **性能与效率**: 持续关注模型响应速度，探索 RAG 等优化手段降低 token 消耗。

---

## 开发者关注点
高频痛点总结：
1. **认证与连接稳定性**: 401 错误、SSL 证书、配置损坏等问题反复出现，威胁基础可用性。
2. **安全误报**: 安全过滤器在“网络安全”、“无人机开发”等边界场景误判率高，需更智能的上下文感知。
3. **模型行为可控性**: 指令遵循能力下降，用户需更多手段确保输出符合约束。
4. **UI/

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-28)

**数据来源**: [github.com/openai/codex](https://github.com/openai/codex)  
**统计周期**: 过去24小时 (截至 2026-06-28)

---

## 1. 今日速览
- **Rate-limit 成本争议持续发酵**：多起用户报告 `gpt-5.5` 模型在 Plus 计划下的 token 消耗成本在 6 月 16 日后激增 10-20 倍，导致 5 小时预算在 2-3 次提示内耗尽，社区反响强烈。
- **Linux 桌面端需求迫切**：关于为 Codex 开发 Linux 桌面应用的请求持续高票，用户反馈在 macOS 上因性能问题（如 #10432）几乎无法使用，转而寻求 Linux 替代方案。
- **MCP OAuth 认证修复推进**：一系列 PR 正在解决 MCP（Model Context Protocol）OAuth 凭据的序列化、刷新和恢复问题，以修复桌面应用启动时使用过期 token 的 bug。

---

## 2. 版本发布
过去 24 小时发布了三个 Rust 后端维护版本，均为 `0.143.0-alpha` 系列的连续迭代，未披露具体功能更新，推测为常规错误修复和依赖更新。
- `rust-v0.143.0-alpha.29` [链接](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.29)
- `rust-v0.143.0-alpha.28` [链接](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.28)
- `rust-v0.143.0-alpha.27` [链接](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.27)

---

## 3. 社区热点 Issues (Top 10)
以下 Issues 基于评论数、👍 数及问题普遍性筛选：

| # | 标题 | 关键点 | 社区反应 | 链接 |
|---|------|--------|----------|------|
| 28879 | `[bug, rate-limits, app] Codex (gpt-5.5, Plus plan) — rate-limit cost per token jumped ~10-20x` | **核心痛点**：订阅用户预算异常快速耗尽，疑似计费逻辑变更，影响付费用户体验。 | 极高（👍333，评论186），多用户确认现象，要求官方解释和补偿。 | [链接](https://github.com/openai/codex/issues/28879) |
| 11023 | `[enhancement, app] Codex desktop app for Linux` | **平台缺失**：Linux 用户无官方桌面客户端，被迫使用 CLI 或 Web，体验不佳。 | 极高（👍648，评论130），长期高票需求，提及 macOS 性能问题作为推动力。 | [链接](https://github.com/openai/codex/issues/11023) |
| 28224 | `[bug, CLI, performance] Codex SQLite feedback logs can write ~640 TB/year` | **性能与硬件损耗**：反馈日志写入量巨大，可能快速消耗 SSD 寿命，已通过 PR #29432 等修复 85%。 | 高（👍398，评论93），引发对本地存储管理和数据保留策略的广泛讨论。 | [链接](https://github.com/openai/codex/issues/28224) |
| 2847 | `[enhancement, sandbox] A way to exclude sensitive files` | **安全与隐私**：缺乏类似 `.gitignore` 的机制，可能导致密钥等敏感文件被意外发送至模型。 | 高（👍414，评论79），社区强烈要求添加 `.codexignore` 或全局忽略配置。 | [链接](https://github.com/openai/codex/issues/2847) |
| 9203 | `[enhancement, TUI, session] Please make "/undo" back` | **用户体验**：旧版 `/undo` 命令被移除，导致误操作（如删除未跟踪文件）后无法快速恢复。 | 高（👍300，评论50），用户频繁请求恢复，强调工作流安全性。 | [链接](https://github.com/openai/codex/issues/9203) |
| 29955 | `[bug, rate-limits, app] Quota drained instantly: 100 credits gone after 1 message` | **计费异常**：Pro 用户报告 5 小时限额和信用点瞬间清零，可能与 #28879 同源。 | 中高（👍7，评论29），虽 👍 较少但涉及真金白银，引发对计费系统稳定性的担忧。 | [链接](https://github.com/openai/codex/issues/29955) |
| 29072 | `[bug, windows-os, sandbox, tool-calls, app] Windows apply_patch fails` | **Windows 沙盒缺陷**：`codex-windows-sandbox-setup.exe` 无法从包路径启动，导致 `apply_patch` 工具调用失败。 | 中（👍19，评论22），影响 Windows 用户核心功能，有临时规避方案但需根本修复。 | [链接](https://github.com/openai/codex/issues/29072) |
| 21863 | `[bug, windows-os, extension] VS Code: central editor panel opens blank` | **IDE 集成严重 Bug**：Windows 上 VS Code 扩展因自定义 URI 路由使用 `fsPath` 导致中央编辑器面板空白。 | 中（👍1，评论14），影响 VS Code 用户日常开发，有详细复现步骤。 | [链接](https://github.com/openai/codex/issues/21863) |
| 24389 | `[bug, mcp, tool-calls, app, subagent] multi_agent_v1.close_agent can hang for hours` | **稳定性问题**：关闭无响应子代理时，父线程可能挂起数小时，阻塞整个会话。 | 中（👍0，评论14），涉及多代理架构的健壮性，影响复杂任务自动化。 | [链接](https://github.com/openai/codex/issues/24389) |
| 19190 | `[bug, windows-os, sandbox] fatal: Unable to create '.git/index.lock'` | **Windows 权限与 Git 集成**：在 Windows 上操作 Git 仓库时频繁出现 `index.lock` 权限错误。 | 中（👍9，评论4），反映 Windows 环境下文件锁和 Git 操作兼容性问题。 | [链接](https://github.com/openai/codex/issues/19190) |

---

## 4. 重要 PR 进展 (Top 10)
以下 PR 基于修复关键问题、架构改进或社区关联度筛选：

| # | 标题 | 内容与影响 | 状态 | 链接 |
|---|------|------------|------|------|
| 30384 | `[app-server] increase currentTime/read timeout` | 将外部 `currentTime`/读请求超时从 5 秒增至 10 秒，缓解网络延迟导致的超时失败。 | ✅ Closed | [链接](https://github.com/openai/codex/pull/30384) |
| 29691 | `[plugins] Enforce marketplace source policy at runtime` | 强制运行时执行企业市场源策略，阻止未授权插件激活，增强安全管控。 | ✅ Closed | [链接](https://github.com/openai/codex/pull/29691) |
| 30269 | `[codex] disable Nagle on Rendezvous WebSockets` | 为执行器 Rendezvous WebSocket 连接禁用 Nagle 算法，降低小包传输延迟，提升交互响应速度。 | 🔲 Open | [链接](https://github.com/openai/codex/pull/30269) |
| 30291 | `[app-server] expose environment info RPC` | 新增 RPC 接口，允许客户端查询远程执行环境的 Shell 和工作目录，便于环境选择与配置。 | ✅ Closed | [链接](https://github.com/openai/codex/pull/30291) |
| 30292-30296 | `MCP OAuth` 系列 PR (Serialize stores, login/logout, refresh, recovery, drift report) | **核心修复栈**：解决 MCP OAuth 凭据在并发、刷新和持久化失败时的状态不一致问题，修复 #27165 等认证 bug。 | 🔲 Open (部分 Closed) | [栈链接](https://github.com/openai/codex/pull/30292) |
| 30327 | `[core] stabilize synthesized call output IDs` | 为上下文管理器中合成的 `"aborted"` 输出分配稳定 ID，确保重试和会话修复时身份一致。 | ✅ Closed | [链接](https://github.com/openai/codex/pull/30327) |
| 30226 | `Make Apps guidance react to MCP availability` | 调整 Apps 指南生成逻辑，使其在 MCP 工具恢复可用后仍能正确指导模型使用。 | 🔲 Open | [链接](https://github.com/openai/codex/pull/30226) |
| 30091 | `[rmcp-client] Add Codex-owned OAuth recovery` | 为 MCP 客户端添加 Codex 托管的 OAuth 恢复流程（已被 #30292 栈 supersede）。 | ✅ Closed | [链接](https://github.com/openai/codex/pull/30091) |
| 29020 | `[rmcp-client] Reread persisted OAuth credentials before refresh` | 刷新前重新读取持久化凭据，避免使用内存中过期 token（同属 MCP OAuth 修复栈）。 | ✅ Closed | [链接](https://github.com/openai/codex/pull/29020) |
| 30302 | `Preserve namespaces on custom tool calls` | 保留自定义工具调用中的可选命名空间，确保流式参数处理和调度正确性。 | ✅ Closed | [链接](https://github.com/openai/codex/pull/30302) |

---

## 5. 功能需求趋势
从 Issues 标签和内容提炼，社区最关注的功能方向：
1. **跨平台支持深化**：Linux 桌面客户端需求极高（#11023），同时 Windows 平台的沙盒稳定性、权限问题（#29072, #19190）和 VS Code 集成（#21863）亟待改善。
2. **安全与隐私控制**：强烈要求添加 `.codexignore` 机制（#2847, #24993），防止敏感文件泄露，体现对 AI 辅助编码中数据安全的担忧。
3. **用户体验与工作流**：恢复 `/undo` 命令（#9203）、增加编辑前确认提示（#24325），反映对操作可逆性和控制权的需求。
4. **性能与资源管理**：SQLite 日志膨胀问题（#28224）虽已修复，但引发对本地资源消耗的持续关注；rate-limit 成本（#28879）直接关联使用经济性。
5. **认证与授权现代化**：MCP OAuth 相关 Issues（#27165）和 PR 密集，显示社区对第三方工具集成安全性的高要求。
6. **企业级功能**：插件市场源策略（#29691）和忽略文件配置（#2847）指向团队协作与合规场景。

---

## 6. 开发者关注点
开发者反馈中的高频痛点：
- **计费模型不透明**：`gpt-5.5` 的 rate-limit 成本突然飙升，缺乏提前通知和解释，严重损害付费用户信任。
- **Linux 支持缺失**：无官方桌面客户端，CLI 在复杂工作流中不便，Web 版功能受限，形成平台壁垒。
- **敏感文件防护不足**：默认行为可能扫描并上传所有文件，缺乏细粒度排除机制，存在安全隐患。
- **操作不可逆**：缺少 `/undo` 和编辑确认，误操作导致数据丢失风险，工作流安全感低。
- **Windows 环境不稳定**：沙盒启动失败、Git 锁冲突、VS Code 集成异常等问题频发，影响主流开发群体。
- **本地存储消耗**：日志写入量过大可能损害 SSD，且无有效清理策略，长期运行成本增加。
- **认证状态管理差**：OAuth token 刷新不及时（#27165），导致 MCP 工具连接中断，需手动干预。
- **企业环境适配弱**：在容器化（Ubuntu dev container）或区域限制（USA）下，认证（#28672）和插件策略（#29691）问题突出。

---

**报告生成时间**: 2026-06-28  
**分析师备注**: 建议优先关注 **rate-limit 成本争议** 和 **MCP OAuth 认证修复** 的进展，这两者直接影响核心用户体验与生态扩展。Linux 桌面需求可作为长期路线图参考。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-28)

**数据来源**: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)  
**统计周期**: 过去 24 小时 (截至 2026-06-28)

---

## 1. 今日速览
过去 24 小时无新版本发布，但社区在**安全加固**、**评估工具链**和**核心代理行为修复**方面有显著进展。多个高优先级 Issue 聚焦于子代理的可靠性与用户控制权，同时 PR 活动集中在修复关键路径上的稳定性问题（如设置合并、消息处理、文件操作）。

---

## 2. 版本发布
- **无新版本发布**。最新稳定版为 v0.33.0。

---

## 3. 社区热点 Issues (Top 10)
以下 Issues 基于评论数、优先级 (p1/p2) 及社区反馈（👍）综合筛选：

| # | 标题 | 优先级 | 评论/👍 | 关键点 |
|---|------|--------|---------|--------|
| [15956](https://github.com/google-gemini/gemini-cli/issues/15956) | Feature Proposal: Browser Control for Gemini CLI | p2 | 14/0 | **最高讨论度提案**：提出混合架构（语义+视觉代理）实现浏览器控制，影响未来核心交互范式。 |
| [22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS is reported as GOAL success | p1 | 8/2 | **严重逻辑错误**：子代理在达到最大轮次后仍报告“成功”，导致任务状态误判，影响任务追踪可靠性。 |
| [21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | p1 | 7/8 | **高票阻塞问题**：通用代理挂起，简单操作（如创建文件夹）无法完成，严重降低可用性。 |
| [21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent fails in wayland | p1 | 4/1 | **平台兼容性**：浏览器子代理在 Wayland 环境下失败，影响 Linux 桌面用户。 |
| [25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with "Waiting input" | p1 | 4/3 | **高频操作卡顿**：简单 shell 命令执行后界面卡在“等待输入”，用户体验受损。 |
| [22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess the impact of AST-aware file reads, search, and mapping | p1 | 7/1 | **代码理解增强**：评估 AST 感知工具对减少轮次、提升代码操作精度的价值，影响未来工具链设计。 |
| [26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | p2 | 5/0 | **安全与隐私**：自动内存系统在编辑前即发送内容至模型，需确定性脱敏并减少日志。 |
| [22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides (e.g., maxTurns) | p2 | 3/0 | **配置失效**：浏览器代理完全忽略全局/项目级设置（如 maxTurns），配置管理存在缺陷。 |
| [22093](https://github.com/google-gemini/gemini-cli/issues/22093) | (Sub)agents running without permission since v0.33.0 | p1 | 2/0 | **权限回归**：v0.33.0 后子代理在配置禁用情况下仍自动运行，安全边界被破坏。 |
| [21763](https://github.com/google-gemini/gemini-cli/issues/21763) | Bugreport doesn't provide context of the subagent | p1 | 2/0 | **调试困难**：`/bug` 报告不包含子代理上下文，阻碍问题诊断。 |

---

## 4. 重要 PR 进展 (Top 10)
以下 PR 基于优先级、变更规模及对核心功能的影响筛选：

| # | 标题 | 类型 | 关键变更 |
|---|------|------|----------|
| [28178](https://github.com/google-gemini/gemini-cli/pull/28178) | fix(security): require approved bot patch artifacts | 安全加固 | 要求显式批准标记后才应用 bot 生成的补丁，实现“失败封闭”策略，防止未授权发布。 |
| [28169](https://github.com/google-gemini/gemini-cli/pull/28169) | feat(evals): add eval coverage report command | 功能增强 | 新增 `eval:coverage` 命令，交叉引用评估清单与工具注册表，报告内置工具评估覆盖率。 |
| [28175](https://github.com/google-gemini/gemini-cli/pull/28175) | fix(policy): require confirmation for shell parameter expansion | 安全策略 | 交互模式下对含 shell 参数扩展的允许命令降级需确认；YOLO 模式下直接拒绝。 |
| [28094](https://github.com/google-gemini/gemini-cli/pull/28094) | fix(a2a-server): deep-merge user and workspace settings | 核心修复 | 修复设置加载的浅合并问题，确保工作区设置能正确覆盖嵌套配置（如 tools、telemetry）。 |
| [28068](https://github.com/google-gemini/gemini-cli/pull/28068) | fix(core): guard message inspectors against empty parts arrays | 核心修复 | 修复 `isFunctionCall()` 等对空 `parts` 数组的误判（`[].every()` 恒真），防止消息类型错误分类。 |
| [28093](https://github.com/google-gemini/gemini-cli/pull/28093) | fix(core): buffer chat compression telemetry until SDK is initialized | 核心修复 | 将聊天压缩遥测事件缓冲至 SDK 初始化完成，避免早期事件丢失，保证数据完整性。 |
| [28172](https://github.com/google-gemini/gemini-cli/pull/28172) | fix(agent): prevent silent scope expansion on task failure | 行为修复 | 防止子代理在任务失败时 silently 扩大操作范围（如读取全文件），确保用户授权边界。 |
| [28171](https://github.com/google-gemini/gemini-cli/pull/28171) | fix(agent): prevent silent scope expansion when initial approach fails | 行为修复 | 同上，防止初始策略失败后未经通知切换策略并扩大范围，增强用户控制权。 |
| [28053](https://github.com/google-gemini/gemini-cli/pull/28053) | fix(core-tools): resolve defensive path resolution for at-reference files | 关键修复 | 修复文件工具因 `@` 前缀路径（如 `@policies/file.txt`）导致“文件未找到”的生产环境 bug。 |
| [28055](https://github.com/google-gemini/gemini-cli/pull/28055) | fix(core): preserve dollar sequences in prompt template substitutions | 核心修复 | 修复提示模板替换中 `$` 序列（如 `$$`）被错误处理导致内容损坏的问题。 |

---

## 5. 功能需求趋势
从 Issues 中提炼的社区最关注方向：

1. **浏览器自动化与稳定性**  
   - 提案混合架构实现高效浏览器控制 (#15956)。  
   - 修复 Wayland 兼容性 (#21983)、配置忽略 (#22267) 及会话锁恢复 (#22232)，显示对可靠浏览器代理的迫切需求。

2. **子代理可靠性与用户控制**  
   - 集中解决挂起 (#21409)、状态误报 (#22323)、权限意外启用 (#22093) 及 silent scope expansion (#28172, #28171)。  
   - 社区要求子代理行为更透明、可预测，且严格遵循用户指令与配置。

3. **代码理解与操作精度**  
   - 评估 AST 感知工具对文件读取、搜索和映射的价值 (#22745, #22746)，旨在减少轮次、提升代码操作准确性。  
   - 修复文件路径解析 (#28053) 和提示模板 (#28055) 等底层问题，支撑更复杂的代码任务。

4. **安全与隐私强化**  
   - 减少自动内存日志 (#26525)、收紧 shell 参数策略 (#28175)、要求 bot 补丁批准 (#28178)。  
   - 关注点从功能扩展转向系统安全边界与数据隐私。

---

## 6. 开发者关注点
开发者反馈中的高频痛点：

- **代理行为不可预测**：子代理挂起、silently 改变策略、不按预期使用技能 (#21409, #28172, #21968)，导致任务失败或结果不符预期。
- **配置管理缺陷**：设置（如 maxTurns）被忽略 (#22267)、权限在版本升级后意外变更 (#22093)，削弱用户对系统的控制力。
- **关键操作卡顿与状态错误**：shell 命令完成后卡住 (#25166)、终端调整大小闪烁 (#21924)、子代理状态误报 (#22323)，影响开发流程流畅性。
- **安全与隐私隐忧**：自动内存系统在编辑前即发送内容 (#26525)、未授权子代理运行 (#22093)，引发对数据泄露和权限滥用的担忧。
- **调试与可见性不足**：bug 报告缺少子代理上下文 (#21763)、子代理轨迹不易分享 (#22598)，增加问题诊断成本。

---

**报告生成时间**: 2026-06-28  
**分析师备注**: 社区当前重心从功能扩展转向**稳定性、安全性与可控性**。建议关注 PR #28178（安全）、#28169（评估工具）及 Issues #22323、#21409 的后续进展。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-28)

**数据来源**: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)  
**统计周期**: 过去24小时 (截至 2026-06-28)

---

### 1. 今日速览
过去24小时无新版本发布，但社区问题报告活跃，共新增/更新 15 个 Issues。核心焦点集中在 **Windows 和 macOS 平台的回归性 Bug**（如复制功能失效、MCP 服务器启动失败、拖放附件异常）以及 **会话管理与上下文控制** 的功能诉求。社区对近期 UI 改动（如 alt-screen）的反馈尤为突出。

---

### 2. 版本发布
- **无新版本发布**。最新稳定版为 v1.0.66（此前一日发布），但已出现多个严重回归问题。

---

### 3. 社区热点 Issues (Top 10)
以下 Issues 基于社区反应（👍数、评论数）、问题严重性及代表性进行筛选：

| # | 标题 | 重要性说明 | 社区反应 | 链接 |
|---|------|------------|----------|------|
| **#2165** | [Ubuntu keychain support is broken](https://github.com/github/copilot-cli/issues/2165) | **高优先级**：Linux 核心认证流程损坏，影响 Ubuntu 用户正常使用。文档与实现均存问题，已获 20 👍。 | 👍 20, 💬 2 | [链接](https://github.com/github/copilot-cli/issues/2165) |
| **#1799** | [How to turn off alt-screen views?](https://github.com/github/copilot-cli/issues/1799) | **高关注度**：新引入的 alt-screen 模式引发大量用户不适，诉求提供关闭选项。反映 UI/UX 改动需更谨慎。 | 👍 7, 💬 10 | [链接](https://github.com/github/copilot-cli/issues/1799) |
| **#3949** | [Copy, Windows 11, does not work; nothing is on clipboard](https://github.com/github/copilot-cli/issues/3949) | **严重 Bug**：Windows 11 基础复制功能完全失效，直接影响核心工作流。用户要求至少增加错误验证。 | 👍 0, 💬 2 | [链接](https://github.com/github/copilot-cli/issues/3949) |
| **#3958** | [Windows: v1.0.66 fails to start stdio MCP servers...](https://github.com/github/copilot-cli/issues/3958) | **严重回归**：v1.0.66 导致 Windows 上所有 `.bat/.cmd` 类型的 MCP 服务器启动失败，阻塞扩展集成。 | 👍 0, 💬 1 | [链接](https://github.com/github/copilot-cli/issues/3958) |
| **#3962** | [latest copilot (1.0.65) not working](https://github.com/github/copilot-cli/issues/3962) | **广泛影响**：用户报告 v1.0.65/1.0.66 存在普遍性功能异常，可能涉及会话初始化或指令解析。 | 👍 0, 💬 1 | [链接](https://github.com/github/copilot-cli/issues/3962) |
| **#3874** | [VS Code agent `preToolUse` agent hook denial does not work](https://github.com/github/copilot-cli/issues/3874) | **安全/权限缺陷**：VS Code 代理的钩子拒绝机制失效，可能导致未授权命令执行，涉及扩展安全模型。 | 👍 0, 💬 1 | [链接](https://github.com/github/copilot-cli/issues/3874) |
| **#3960** | [Custom model provider still consuming AI quota](https://github.com/github/copilot-cli/issues/3960) | **计费/集成问题**：使用自定义模型提供商时，错误消耗用户 GitHub AI 配额而非提供商额度，涉及核心计费逻辑。 | 👍 0, 💬 0 | [链接](https://github.com/github/copilot-cli/issues/3960) |
| **#3955** | [Drag and drop of files to attach no longer works...](https://github.com/github/copilot-cli/issues/3955) | **macOS 回归**：Finder 拖放文件附件功能在最新版本中失效，是常见的交互方式破坏。 | 👍 0, 💬 0 | [链接](https://github.com/github/copilot-cli/issues/3955) |
| **#3957** | [Unable to scroll through history using trackpad on MBP](https://github.com/github/copilot-cli/issues/3957) | **macOS UX 缺陷**：MacBook 触控板无法滚动历史消息，反而触发选择，严重影响导航体验。 | 👍 0, 💬 0 | [链接](https://github.com/github/copilot-cli/issues/3957) |
| **#2778** | [When is /btw from claude code coming to copilot?](https://github.com/github/copilot-cli/issues/2778) | **功能诉求**：用户强烈期望引入类似 Claude Code 的 `/btw` 功能，实现随时基于上下文提问而不污染会话。反映对**会话管理灵活性**的需求。 | 👍 1, 💬 2 | [链接](https://github.com/github/copilot-cli/issues/2778) |

---

### 4. 重要 PR 进展 (共 3 条)
| # | 状态 | 标题 | 内容摘要 | 链接 |
|---|------|------|----------|------|
| **#3928** | OPEN | Add .gitignore and settings configuration | 提议添加 `.gitignore` 和设置配置支持，可能改善项目级配置管理。 | [链接](https://github.com/github/copilot-cli/pull/3928) |
| **#570** | CLOSED | [WIP] Add macOS installation instructions to README.md | 已合并：为 README 补充 macOS 安装指南，完善文档。 | [链接](https://github.com/github/copilot-cli/pull/570) |
| **#3737** | OPEN | Jigg empire ai | 内容模糊，标题暗示可能尝试新的 AI 集成方法，但描述不清晰，需进一步审查。 | [链接](https://github.com/github/copilot-cli/pull/3737) |

---

### 5. 功能需求趋势
从 Issues 中提炼出社区最关注的四大方向：
- **会话与上下文管理增强**：用户要求更精细的控制，如查看会话过期时间 (#3963)、实现类似 Claude 的随时提问功能 (#2778)，避免会话污染或意外丢失。
- **跨平台稳定性与回归修复**：Windows（复制、MCP 服务器）和 macOS（拖放、触控板滚动）出现多个 v1.0.65/66 引入的回归 Bug，社区迫切需稳定版本。
- **UI/UX 可配置性**：对 alt-screen 模式 (#1799) 和视觉渲染伪影 (#3959) 的反馈，显示用户期望更多界面选项和更可靠的 TUI 渲染。
- **集成与扩展灵活性**：包括自定义模型提供商正确计费 (#3960)、VS Code 钩子权限 (#3874)、MCP 服务器支持 (#3958)，反映开发者希望 Copilot CLI 能无缝融入现有工具链。

---

### 6. 开发者关注点
开发者反馈的**核心痛点**集中在：
- **基础功能可靠性**：复制粘贴、文件拖放、认证（keychain）等基础交互在特定平台失效，严重阻碍日常使用。
- **版本升级风险**：v1.0.65/66 引发多处回归，暴露测试覆盖不足，尤其是 Windows 和 macOS 环境。
- **会话行为不透明**：会话意外消失或过期无提示 (#3963)，用户无法管理上下文生命周期。
- **平台差异处理**：Linux (Ubuntu keychain)、Windows (bat/cmd 处理)、macOS (触控板) 的特定问题频发，需更精细的跨平台适配。

**高频需求**：恢复稳定性、提供会话管理界面、增加 UI 自定义选项（如关闭 alt-screen）、确保自定义集成不消耗主账户配额。

---

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-28)

**数据来源**: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)  
**统计周期**: 过去24小时 (截至 2026-06-28)

---

## 今日速览
过去24小时，OpenCode 社区活跃度较高，多个核心 PR 聚焦于修复跨平台路径处理、TUI 稳定性等关键问题，同时社区对会话管理增强（如重命名、撤销）和模型生态扩展的需求持续强烈。WSL 兼容性、内存泄漏及模型集成稳定性是当前开发者反馈最集中的痛点。

---

## 版本发布
过去24小时内无新版本发布。

---

## 社区热点 Issues (Top 10)
以下基于评论数、👍 反应及问题影响范围筛选：

1. **[FEATURE] Pay Go with crypto** ([#23153](https://github.com/anomalyco/opencode/issues/23153))  
   **重要性**: 高需求功能请求（👍24，评论13），反映社区对多样化支付方式（加密货币）的兴趣，可能吸引新用户群体。  
   **社区反应**: 积极讨论，但需评估安全与合规性。

2. **TUI /sessions picker only shows recent sessions** ([#13877](https://github.com/anomalyco/opencode/issues/13877))  
   **重要性**: 影响会话导航效率，评论9，用户体验缺陷。旧会话无法快速访问。  
   **社区反应**: 用户普遍反馈不便，期待完整列表显示。

3. **[FEATURE] add session renaming** ([#25848](https://github.com/anomalyco/opencode/issues/25848))  
   **重要性**: 高频功能请求（评论8），已通过 PR #34264 实现，提升会话可管理性。  
   **社区反应**: 需求强烈，实现后可能关闭。

4. **Desktop App sends UNC paths to WSL-hosted server** ([#19473](https://github.com/anomalyco/opencode/issues/19473))  
   **重要性**: 严重跨平台兼容性问题，破坏 WSL 环境下的所有 bash 工具调用，评论7。  
   **社区反应**: 影响 Windows/WSL 用户，已有临时方案，期待根本修复。

5. **This request requires more credits... (OpenRouter)** ([#12219](https://github.com/anomalyco/opencode/issues/12219))  
   **重要性**: 模型计费集成问题（评论7，👍6），用户使用 Kimi 2.5 Free 时遇到额度错误，涉及第三方服务配置。  
   **社区反应**: 困惑于错误提示，需更清晰的引导。

6. **Windows ARM64 native: OpenTUI fails to initialize** ([#19130](https://github.com/anomalyco/opencode/issues/19130))  
   **重要性**: 平台兼容性缺口，影响 Windows on ARM 设备（如新款 Surface），评论6，👍5。  
   **社区反应**: ARM64 用户无法使用 TUI，期待官方支持。

7. **Bun 1.3.14 segfault (SIGILL) on Linux x86_64** ([#33890](https://github.com/anomalyco/opencode/issues/33890))  
   **重要性**: 严重稳定性问题（评论6，👍

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-28)

## 今日速览
Qwen Code 于今日发布了 `v0.19.2-nightly` 预览版本，核心修复了长期困扰用户的“大文件输出被截断导致无限重试循环”问题（#5756），并合并了多项重要改进。社区焦点集中在**会话与任务状态的跨设备持久化**、**后台任务可视化**以及**多平台集成**（如 Telegram、Chrome 扩展）的完善上，反映了用户对生产环境稳定性和工作流连续性的强烈需求。

## 版本发布
- **v0.19.2-nightly.20260627.d93bec905** (预览版)
  - **核心修复**：解决了默认 8K 输出上限导致大型 `write_file` 操作被截断并触发失败重试循环的问题（对应 PR #5934）。现在默认使用模型声明的真实输出上限，避免不必要的重试。
  - **其他改进**：包含 `web_fetch` 的 JSON 回退支持、`/loop` 计划任务计数显示、QQ Bot 流式传输优化等多项修复与增强。
  - *注： nightly 版本为预览性质，可能包含未完全测试的功能。*

## 社区热点 Issues (Top 10)
1. **[OPEN] #5836: 任务清单持久化到项目内**  
   **重要性**：高。当前任务清单（todos）、记忆（memories）仅存于用户目录，无法跨设备或团队同步，严重阻碍多环境工作流。  
   **社区反应**：4 条评论，多位用户表达类似需求，是跨设备同步的核心痛点。

2. **[OPEN] #5823: `/loop` cron 任务不可见且无法停止**  
   **重要性**：高。后台自动执行的任务对用户完全不可见，导致资源滥用和困惑，是严重的可用性和安全问题。  
   **社区反应**：4 条评论，用户报告了“无提示自动工作”的困扰，相关 PR #5921 已开始添加计数显示。

3. **[OPEN] #5942: Anthropic 提供商 prompt-cache 浪费导致成本增加**  
   **重要性**：高。与 Claude Code 对比，Qwen Code 在 Anthropic 协议端点存在缓存命中率低的问题，直接推高 API 调用成本。  
   **社区反应**：2 条评论，成本敏感用户关注，需优化缓存策略。

4. **[OPEN] #5889: 为 `/loop` 添加 `.qwen/loop.md` 任务文件**  
   **重要性**：中高。为长时运行的循环任务提供持久化、可编辑的指令存储，解决“每次需重述任务”的痛点。  
   **社区反应**：3 条评论，与 #5823 相关，是提升任务管理可控性的关键设计。

5. **[OPEN] #5907: 完善 Telegram Bot 命令支持与菜单对齐**  
   **重要性**：中高。确保远程聊天（Telegram）的命令体验与 CLI 一致，是移动端和远程工作流的重要一环。  
   **社区反应**：3 条评论，PR #5919 已开始注册命令菜单，集成工作持续推进。

6. **[OPEN] #5626: 通过 Daemon + WebUI 架构恢复 Chrome 扩展**  
   **重要性**：中高。复兴浏览器集成能力，允许在浏览器侧边栏直接与 Qwen Code 交互，扩展应用场景。  
   **社区反应**：3 条评论，PR #5777 已提交实现，社区对浏览器工具集回归期待高。

7. **[OPEN] #5838: 允许用户调整 Agent 发起命令的超时时间**  
   **重要性**：中。为长时间运行的 shell 命令提供超时配置，避免因默认超时过短导致任务失败。  
   **社区反应**：6 条评论，讨论活跃，是性能调优的常见需求。

8. **[OPEN] #5908: 规范化源 slug 验证与错误处理**  
   **重要性**：中。安全相关（CWE-22 路径遍历）的后续加固，确保所有路径构造点都有统一的验证和清晰错误提示。  
   **社区反应**：2 条评论，PR #5911 正在处理，属防御性编程改进。

9. **[CLOSED] #5756: 默认 8K 输出截断导致大型文件生成失败**  
   **重要性**：高（已修复）。曾是阻塞性 bug，影响 wiki 生成等大文件场景。  
   **社区反应**：3 条评论，PR #5934 已合并至 v0.19.2，标志着此问题得到解决。

10. **[OPEN] #1671: 上下文使用率达 37% 时出现幻觉**  
    **重要性**：中。一个长期存在的模型行为问题，可能涉及上下文管理或模型本身限制。  
    **社区反应**：2 条评论，近期被重新提及，需进一步调查根因。

## 重要 PR 进展 (Top 10)
1. **[OPEN] #5934: 修复核心：停止因截断输出导致的重复重试循环**  
    **内容**：将默认 `max_tokens` 从 8K 硬编码改为使用模型声明的输出上限，从根本上解决大响应被截断后无限重试的问题。  
    **链接**: https://github.com/QwenLM/qwen-code/pull/5934

2. **[OPEN] #5888: 特性（频道）：qwen tag — 多玩家频道常驻代理（RFC + Phase 0）**  
    **内容**：引入“qwen tag”，一种基于现有频道适配器和 `qwen serve` 的多玩家群聊代理（钉钉优先），允许代理长期驻留在聊天群中。  
    **链接**: https://github.com/QwenLM/qwen-code/pull/5888

3. **[OPEN] #5777: 特性（浏览器扩展）：通过 Daemon 直连架构恢复 Chrome 扩展**  
    **内容**：复兴原 #1432 的 Chrome 扩展，但改为通过本地 `qwen serve` 守护进程直连（HTTP+SSE），不再需要原生消息主机，架构更简洁。  
    **链接**: https://github.com/QwenLM/qwen-code/pull/5777

4. **[OPEN] #5852: 特性（守护进程、SDK）：可恢复的 `/acp` 会话流（Last-Event-ID）+ 可选 SDK 传输导出**  
    **内容**：为 ACP 会话事件流实现 SSE `id:` 和 `Last-Event-ID` 支持，允许客户端断开重连后恢复会话；同时导出 SDK 传输层供高级用户定制。  
    **链接**: https://github.com/QwenLM/qwen-code/pull/5852

5. **[OPEN] #5911: 修复（桌面）：规范化源 slug 验证错误**  
    **内容**：在保持路径遍历防护的前提下，统一所有无效/遗留 slug 的处理逻辑，确保调用方获得结构化的验证结果而非未捕获的通用错误。  
    **链接**: https://github.com/QwenLM/qwen-code/pull/5911

6. **[OPEN] #5943: 特性（Web Shell）：添加错误边界，防止渲染崩溃导致白屏**  
    **内容**：在 Web Shell 的 React 树中多层添加错误边界，确保单个消息或子组件的渲染错误不会导致整个界面白屏，提升嵌入式稳定性。  
    **链接**: https://github.com/QwenLM/qwen-code/pull/5943

7. **[OPEN] #5902: 修复（QQ Bot）：流式传输改进 — 空闲刷新、移除 splitText、replyMsgId TTL、Markdown 管道**  
    **内容**：优化 QQ Bot 流式输出：用 2 秒空闲刷新替代块合并，移除 2000 字符限制，增加 5 分钟被动回复 TTL，修复 Markdown 表格检测。  
    **链接**: https://github.com/QwenLM/qwen-code/pull/5902

8. **[OPEN] #5030: 特性（核心、CLI、SDK）：无需合成“继续”消息即可恢复中断的回合**  
    **内容**：为 SDK 和流式 JSON 调用者提供第一类方式，在会话恢复后继续未完成的助手回合，而无需向对话记录中插入一条合成的 `"continue"` 用户消息。  
    **链接**: https://github.com/QwenLM/qwen-code/pull/5030

9. **[OPEN] #5856: 特性（桌面）：桌面应用中的语音听写**  
    **内容**：将 CLI 的 `/voice` 听写功能带到桌面应用，在作曲工具栏添加麦克风按钮，支持录音、实时波形和计时，与 Web Shell 体验对齐。  
    **链接**: https://github.com/QwenLM/qwen-code/pull/5856

10. **[CLOSED] #5921: 特性（CLI）：在页脚显示计划任务计数**  
    **内容**：当启用 cron 调度且有待处理任务时，在 CLI 页脚显示一个紧凑的徽章（如 `◎ 2 scheduled tasks`），提升后台任务可见性。  
    **链接**: https://github.com/QwenLM/qwen-code/pull/5921

## 功能需求趋势
1. **跨设备与团队状态同步**：  
   围绕 `#5836` 的讨论表明，用户期望项目级状态（todos、memories、plans）能存储在版本控制目录（如 `.qwen/`）中，实现跨机器和协作共享。这是从“个人助手”向“团队工具”演进的关键需求。

2. **后台任务可视化与管理**：  
   `#5823`（cron 任务不可见）和 `#5889`（loop 任务文件）共同指向对自动化任务生命周期管理的迫切需求。社区希望任务能被列出、停止，且指令可持久化编辑。

3. **多平台深度集成**：  
   - **浏览器**：`#5626` / `#5777` 致力于恢复并现代化 Chrome 扩展，提供网页上下文操作能力。
   - **即时通讯**：`#5907` 推动 Telegram Bot 命令菜单与 CLI 对齐，完善远程交互。
   - **桌面**：`#5856` 增加语音输入，丰富交互模态。

4. **模型与提供商灵活性**：  
   `#5597`（视觉模型回退）、`#5942`（Anthropic 缓存优化）反映用户在不同模型间切换使用时，对成本控制、功能降级策略的精细配置需求。

## 开发者关注点
- **稳定性与资源控制**：  
  `#5922` 报告 `cua-driver.exe` 空闲时高 CPU 占用，`#5941` 指出大模型输出时界面滚动异常，这些影响日常体验的 UI/性能问题需优先修复。
- **会话历史完整性**：  
  `#5920` 揭示 `/rewind` 因 `parentUuid` 错误导致历史断裂，会话恢复功能受损，是数据一致性的严重隐患。
- **安全与防御性编程**：  
  `#5908` / `#5911` 围绕路径遍历（slug 验证）的后续加固，体现了对安全边界的持续关注，开发者需确保所有用户输入路径点都有严格校验。
- **成本优化**：  
  `#5942` 关于 Anthropic prompt-cache 的分析，提示在集成不同提供商时，需深入理解其计费与缓存机制，避免隐性成本。
- **工具链可观测性**：  
  `#5897` 提到 MCP 工具 schema 警告刷屏，`#5894` 指出编辑工具结果摘要被重复附加，这些日志和 UI 污染问题降低调试效率，需清理。

</details>

---
*本日报由 [Big Model Radar](https://github.com/zx0828/big_model_radar) 自动生成。*