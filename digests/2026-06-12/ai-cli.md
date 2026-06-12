# AI CLI 工具社区动态日报 2026-06-12

> 生成时间: 2026-06-12 00:41 UTC | 覆盖工具: 7 个

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

# AI CLI 工具生态横向对比分析报告 (2026-06-12)

## 1. 生态全景
当前 AI CLI 工具生态已进入**成熟与深化期**，各主流工具在基础功能完善后，社区焦点转向**企业级可靠性、成本可控性与深度工作流集成**。核心挑战高度趋同：**稳定性**（连接中断、渲染错误、Agent 挂起）、**安全与权限**（误报、数据泄露、细粒度管控）、**会话管理**（持久化、恢复、跨项目）以及 **MCP 生态兼容性**。同时，工具间差异化明显：Claude Code 聚焦成本与安全模型优化，OpenAI Codex 深耕底层架构，Gemini CLI 强化 Agent 智能，GitHub Copilot CLI 面临信任危机，OpenCode 积极扩展插件与 Copilot 集成，Qwen Code 深耕 IDE 体验。整体趋势表明，AI CLI 正从“单次任务助手”演变为“可编程、可审计、可持续的长期开发伙伴”。

## 2. 各工具活跃度对比
| 工具 | 活跃 Issues (Top 10 参考) | 重要 PR (Top 10 参考) | Release 情况 | 备注 |
|------|---------------------------|----------------------|--------------|------|
| **Claude Code** | 高 (10+，含多个今日创建/更新，平均评论>30) | 高 (10个，含成本/安全关键修复) | **是** (v2.1.173) | 社区反应强烈，成本与安全为焦点 |
| **OpenAI Codex** | 高 (10+，新问题频发，评论活跃) | 高 (10个，侧重性能、安全、数据修复) | 无新版本 (Rust 核心连续 alpha) | 底层稳定性修复密集 |
| **Gemini CLI** | 高 (10+，多个 P1 缺陷) | 高 (10个，含模型 GA 与稳定性修复) | 无 | Agent 可靠性是核心 |
| **GitHub Copilot CLI** | 高 (10+，社区强烈不满) | **极低** (仅 1 个，无实质功能) | 无 | 官方响应慢，信任度受挑战 |
| **Kimi Code CLI** | **无** | 1 (功能合并) | 无 | 社区活动极少，可能为早期/小众 |
| **OpenCode** | 高 (10+，高👍需求集中) | 高 (10个，架构与集成改进) | 无 | 插件生态与集成活跃 |
| **Qwen Code** | 高 (10+，P1/P2 问题多) | 未明确 Top 10，但多个修复合并 | **是** (v0.18.0-preview.2) | IDE 集成与状态管理是重点 |

## 3. 共同关注的功能方向
- **成本控制与可见性**：Claude Code 用户因代理无约束扇出和自主调用付费 API 导致意外高额费用，强烈要求提供 `/cost` 和 `/usage` 的编程接口及默认保守策略。
- **安全模型精准化**：Claude Code (Fable 5 误报)、Gemini CLI (Auto Memory 敏感信息泄露)、OpenAI Codex (沙盒权限)

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止：2026-06-12*

---

## 1. 热门 Skills 排行

### 🥇 #1046 - 多技能批量提交（frontend-design, ai-experience-consultant, automation-workflows-builder）
- **功能**：一次性提交三个新技能定义，涵盖前端设计、AI体验咨询和工作流自动化
- **社区热点**：批量提交模式引发讨论，是否应鼓励模块化提交 vs. 原子化PR
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/1046)

### 🥈 #514 - document-typography（文档排版质量控制）
- **功能**：防止AI生成文档中的排版问题（孤词、寡行、编号对齐）
- **社区热点**：解决"每个Claude生成的文档都受影响"的普遍痛点，实用性获高度认可
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/514)

### 🥉 #486 - ODT技能（OpenDocument格式支持）
- **功能**：创建、填充、解析和转换ODT/ODS文件，支持LibreOffice生态
- **社区热点**：填补开源办公格式支持空白，与DOCX/PDF形成互补
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/486)

### #4 - #210 - frontend-design技能优化
- **功能**：重构前端设计技能，提升指令清晰度和可执行性
- **社区热点**：技能描述的"可操作性"标准讨论——如何平衡详细指导与token效率
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/210)

### #5 - #723 - testing-patterns（测试模式全覆盖）
- **功能**：从测试哲学到React组件测试的完整测试栈指南
- **社区热点**：覆盖单元测试、组件测试、最佳实践，满足工程化需求
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/723)

### #6 - #806 - sensory技能（macOS原生自动化）
- **功能**：通过AppleScript实现macOS原生自动化，替代截图式计算机使用
- **社区热点**：权限分级设计（Tier 1免权限，Tier 2需辅助功能权限）引发安全讨论
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/806)

### #7 - #147 - codebase-inventory-audit（代码库审计）
- **功能**：系统化10步工作流，识别孤立代码、未使用文件、文档缺口
- **社区热点**：生成CODEBASE-STATUS.md作为单一事实来源，适合大型项目维护
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/147)

### #8 - #83 - skill-quality-analyzer & skill-security-analyzer
- **功能**：元技能，用于评估其他技能的结构文档、示例、资源链接等质量维度
- **社区热点**：技能质量的量化评估框架，推动技能标准化
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/83)

---

## 2. 社区需求趋势

从Issues高频话题提炼出五大新Skill方向：

| 方向 | 需求强度 | 典型诉求 |
|------|---------|---------|
| **企业协作** | ⭐⭐⭐⭐⭐ | 组织内技能共享（#228）、SharePoint权限集成（#1175） |
| **跨平台兼容** | ⭐⭐⭐⭐⭐ | Windows完整支持（#1061）、Bedrock适配（#29） |
| **安全治理** | ⭐⭐⭐⭐ | 技能信任边界防护（#492）、代理治理模式（#412） |
| **开发效率** | ⭐⭐⭐⭐ | 测试生成自动化、代码审查模式、多文件预加载（#1220） |
| **生态扩展** | ⭐⭐⭐ | MCP协议暴露（#16）、SAP等企业系统集成（#181） |

---

## 3. 高潜力待合并 Skills

以下PR评论活跃、解决核心痛点，合并可能性高：

### 🔥 #1298 - skill-creator核心修复（Windows + 评估循环）
- **问题**：`run_eval.py`报告0%召回率，优化循环基于噪声工作
- **价值**：修复技能创建工具的评估基础，影响所有优化流程
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/1298)

### 🔥 #1140 - agent-creator元技能 + 多工具评估修复
- **问题**：支持任务特定代理集，修复并行工具调用
- **价值**：开启"技能生成技能"的元能力，Windows路径支持
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/1140)

### 🔥 #1099 / #1050 - Windows兼容性双补丁
- **问题**：子进程调用失败（claude.cmd）、编码问题（cp1252）、管道读取错误
- **价值**：使skill-creator在Windows生产环境可用，覆盖大量用户
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/1099) | [链接](https://github.com/anthropics/skills/pull/1050)

### 🔥 #361 / #539 - YAML特殊字符防御
- **问题**：未加引号的`:`等字符导致YAML静默解析失败
- **价值**：提升技能描述健壮性，防止描述被截断或结构破坏
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/361) | [链接](https://github.com/anthropics/skills/pull/539)

---

## 4. Skills 生态洞察

**一句话总结**：社区正从"技能功能扩展"转向"技能工程化"——核心诉求是**稳定可靠的创建工具链**（尤其是Windows支持）、**企业级安全与协作**机制，以及**可量化的质量评估体系**，以支撑Skills从实验性功能向生产级自动化组件的演进。

---

*报告生成依据：50条热门PR + 50条活跃Issues的评论热度、功能覆盖度、问题严重性及社区反馈密度综合评估。*

---

# Claude Code 社区动态日报 (2026-06-12)

**今日速览**  
今日社区焦点集中于**成本控制与安全模型误报**问题：多个用户报告因代理（Agent）无限制扇出或自主调用付费API导致意外高额费用（如 #67343、#67654），同时 Fable 5 模型频繁因误判为“网络安全/生物安全”而降级至 Opus 4.8（#67695、#67701）。相关修复 PR 已提交，但社区对自动代理行为的约束与成本可见性需求强烈。此外，会话达到限制后需手动继续（#13354）和 Windows 权限提示错误（#28240）等长期痛点持续获得高票支持。

---

## 版本发布
- **v2.1.173**（今日发布）
  - 修复 Fable 5 模型名称中 `[1m]` 后缀未自动剥离的问题（因 Fable 5 默认 1M 上下文）。
  - 修复 Windows 平台启用沙盒时启动时出现“依赖缺失”的误报警告。
  - [发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.173)

---

## 社区热点 Issues（Top 10）
以下 Issues 基于评论数、👍 票数、问题严重性及更新时效综合筛选：

1. **[#63060](https://github.com/anthropics/claude-code/issues/63060)** - **API Error: 1M 上下文需消耗额度**  
   **重要性**：直接关联 Fable 5 模型的核心功能，用户无法使用 1M 上下文。  
   **社区反应**：82 条评论，34 👍，长期未解决（5月28日创建）。

2. **[#13354](https://github.com/anthropics/claude-code/issues/13354)** - **会话达限制后自动继续**  
   **重要性**：影响长时任务（如夜间构建），需手动干预严重降低效率。  
   **社区反应**：61 条评论，125 👍，今日更新，高需求功能。

3. **[#53915](https://github.com/anthropics/claude-code/issues/53915)** - **API 速率限制错误**  
   **重要性**：Windows + VSCode 用户频繁遇到服务端限流，阻碍工作流。  
   **社区反应**：53 条评论，14 👍，2月前创建，持续讨论。

4. **[#28240](https://github.com/anthropics/claude-code/issues/28240)** - **Windows 权限提示误触发**  
   **重要性**：在复合 Bash 命令中错误提示权限，严重影响终端体验。  
   **社区反应**：47 条评论，187 👍，高票但未修复。

5. **[#11002](https://github.com/anthropics/claude-code/issues/11002)** - **添加 --screen-reader 模式**  
   **重要性**：无障碍访问需求，支持 NVDA/JAWS 屏幕阅读器。  
   **社区反应**：47 条评论，36 👍，跨平台增强。

6. **[#24798](https://github.com/anthropics/claude-code/issues/24798)** - **多 Claude 会话间通信**  
   **重要性**：支持并行会话协同工作，提升大型项目效率。  
   **社区反应**：33 条评论，15 👍，工作流优化方向。

7. **[#38183](https://github.com/anthropics/claude-code/issues/38183)** - **SendMessage 工具缺失导致代理中断**  
   **重要性**：因 `resume` 参数移除，代理 continuation 功能损坏。  
   **社区反应**：17 条评论，19 👍，影响自动化流程。

8. **[#67636](https://github.com/anthropics/claude-code/issues/67636)** - **并行代理导致超额消耗并崩溃**  
   **重要性**：新报告：10+ 代理并发读取后崩溃，消耗数百万 token。  
   **社区反应**：3 条评论，今日创建，成本风险突出。

9. **[#67343](https://github.com/anthropics/claude-code/issues/67343)** - **工作流代理无限制扇出耗尽额度**  
   **重要性**：自动生成的工作流默认继承昂贵模型且无扇出限制，10 分钟内耗尽计划额度。  
   **社区反应**：2 条评论，今日更新，成本控制紧急。

10. **[#67654](https://github.com/anthropics/claude-code/issues/67654)** - **自主运行付费 API 导致意外扣费**  
    **重要性**：Claude 在后台自主调用外部付费 API，造成 ~$29 意外费用。  
    **社区反应**：2 条评论，今日创建，安全与成本双重问题。

---

## 重要 PR 进展（Top 10）
以下 PR 涵盖关键修复、安全补丁与功能提案：

1. **[#67699](https://github.com/anthropics/claude-code/pull/67699)** - **修复自主运行付费 API 导致意外费用**  
   针对 #67654，限制后台脚本的自主调用行为，防止未经批准的付费操作。状态：OPEN，附 bounty。

2. **[#67599](https://github.com/anthropics/claude-code/pull/67599)** - **修复内容审核讨论的假阳性安全标志**  
   调整安全分类器，避免将合法的内容审核对话误判为网络安全威胁。状态：OPEN。

3. **[#66171](https://github.com/anthropics/claude-code/pull/66171)** - **修复 `extensibility.py` 跟随符号链接**  
   防止在项目控制的 GUI 中因符号链接导致的安全风险。状态：CLOSED。

4. **[#54551](https://github.com/anthropics/claude-code/pull/54551)** - **提案：终端 UI 内联图像渲染**  
   添加示例与设计文档，推动在 TUI 中支持图像显示（当前仅 web/iOS 支持）。状态：CLOSED。

5. **[#66416](https://github.com/anthropics/claude-code/pull/66416)** - **修复插件验证脚本因 `set -e` 提前退出**  
   修改 `plugin-dev` 中的验证脚本，确保收集所有问题而非在首次失败时终止。状态：OPEN。

6. **[#41695](https://github.com/anthropics/claude-code/pull/41695)** - **示例：权限拒绝钩子（含重试与审计）**  
   补充 `PermissionDenied` 钩子的使用示例，展示如何返回 `{"retry": true}` 并记录审计日志。状态：CLOSED。

7. **[#67409](https://github.com/anthropics/claude-code/pull/67409)** - **修复账户因计费错误降级**  
   针对 #67407，解决账单问题导致的非预期账户降级。状态：OPEN，附 bounty。

8. **[#50301](https://github.com/anthropics/claude-code/pull/50301)** - **插件：终端游戏 Flappy-Claude**  
   通过 `/flappy-claude` 命令在终端内玩 Flappy Bird，增强趣味性。状态：CLOSED。

9. **[#61956](https://github.com/anthropics/claude-code/pull/61956)** - **修正 `ralph-wiggum` 插件帮助文档中的状态文件路径**  
   修复路径错误（`.claude/.ralph-loop.local.md` → `.claude/ralph-loop.local.md`）。状态：CLOSED。

10. **[#64489](https://github.com/anthropics/claude-code/pull/64489)** - **更新示例文件内容**  
    补充示例文件的新内容，改进文档。状态：OPEN。

---

## 功能需求趋势
从 Issues 标签与主题提炼，社区最关注的方向：

- **成本控制与可见性**：大量 Issues 围绕意外费用（#67343、#67654）、自动代理扇出（#67636）、订阅限制后自动继续（#35744），要求提供 `/cost` 和 `/usage` 的编程接口（#50926）。
- **安全模型优化**：Fable 5 频繁误报网络安全/生物安全（#67695、#67701、#67557），需改进分类器减少假阳性。
- **代理（Agent）行为管理**：需求包括限制并行代理数、控制模型继承、避免无限循环（#66419、#67636、#67343）。
- **会话与工作流增强**：会话间通信（#24798）、达到限制后自动继续（#13354）、工作流工具改进。
- **平台稳定性与无障碍**：Windows 权限提示（#28240）、macOS 屏幕阅读器支持（#11002）、TUI 渲染问题（#67706）。
- **权限与安全细化**：MCP 连接器忽略权限（#67371）、插件启用/禁用失效（#13344）。

---

## 开发者关注点
开发者反馈的痛点与高频需求：

1. **成本意外超支**：代理无约束扇出、自主调用外部付费 API 是最大风险，要求默认保守策略与实时成本提示。
2. **安全误报干扰**：Fable 5 模型因误判降级至 Opus，破坏工作流，需更精准的分类器与白名单机制。
3. **平台特定 Bug**：Windows 权限提示错误、Linux/macOS 的沙盒与权限问题影响跨平台一致性。
4. **代理失控**：并行代理爆炸性增长、无限循环、模型继承泄漏，需默认限制与监控。
5. **会话中断**：订阅限制或上下文窗口满时强制停止，缺乏自动恢复机制，破坏长时任务。
6. **可扩展性**： hooks 与插件需要更多运行时数据（如成本、会话状态）以构建自定义工具链。
7. **无障碍与 UI**：终端 UI 缺乏屏幕阅读器支持与进度指示（如“思考中”状态），影响可访问性。

---

*数据来源：github.com/anthropics/claude-code (截至 2026-06-12)*  
*报告生成：AI 开发工具技术分析师*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-12)

## 今日速览
今日社区动态聚焦于**稳定性修复与架构优化**。Rust 核心组件连续发布四个 `v0.140.0-alpha` 小版本，主要针对 SQLite 数据损坏、TLS 企业兼容性等底层问题。社区反馈最集中的问题是**应用连接中断**与**聊天历史丢失**，同时 Windows 平台的兼容性问题（尤其是非 ASCII 路径）引发多次报告。PR 层面，大量工作集中在性能优化（如缓存、延迟追踪）和插件/多代理架构的健壮性提升。

---

## 版本发布
- **rust-v0.140.0-alpha.8 至 rust-v0.140.0-alpha.11**：Rust 相关核心组件在 24 小时内连续发布四个 alpha 版本，属于常规迭代与热修复，具体变更未在 Release Note 中详述，但结合同期 PR 推测主要涉及 SQLite 稳定性、TLS 加密库迁移及路径处理修复。

---

## 社区热点 Issues (Top 10)
以下 Issues 基于评论数、影响范围及更新活跃度筛选：

1. **[#18960](https://github.com/openai/codex/issues/18960) - 频繁重连循环 (WebSocket 提前关闭)**
   - **重要性**：高评论数 (40)，影响 Pro 用户核心的流式响应体验，疑似服务端或网络层问题。
   - **社区反应**：大量用户跟帖确认，涉及 macOS 平台，OpenAI 团队已介入。

2. **[#20741](https://github.com/openai/codex/issues/20741) - 项目聊天历史在更新后消失**
   - **重要性**：严重数据丢失问题，评论数 (37) 高，影响用户工作连续性。
   - **社区反应**：多位 macOS 用户报告，涉及最新桌面版，属高优先级回归缺陷。

3. **[#27668](https://github.com/openai/codex/issues/27668) - 通用流断开错误**
   - **重要性**：新创建 (06-11) 即获高评论 (16)，错误信息不明确，可能反映广泛的基础连接问题。
   - **社区反应**：不同平台用户均报告，需系统性排查。

4. **[#26753](https://github.com/openai/codex/issues/26753) - MultiAgentV2 加密子代理调用失败 (400)**
   - **重要性**：涉及新功能 `multi_agent_v2` 的核心工具调用，即使未主动使用子代理也会触发，属阻断性缺陷。
   - **社区反应**：技术讨论集中，影响 CLI 高级用户。

5. **[#25799](https://github.com/openai/codex/issues/25799) - Windows 桌面版无法为 WSL2 项目启动沙盒命令**
   - **重要性**：Windows + WSL2 开发场景的关键障碍，影响跨平台开发流。
   - **社区反应**：特定但重要的用户群反馈，需平台特定修复。

6. **[#27175](https://github.com/openai/codex/issues/27175) - Windows 26.602 更新后崩溃/无法访问**
   - **重要性**：高版本号更新导致的严重可用性问题，评论数 (14)，影响高端硬件用户。
   - **社区反应**：报告集中在 Windows 11 新设备，可能为回归缺陷。

7. **[#27296](https://github.com/openai/codex/issues/27296) - 全局快捷键在更新后失效**
   - **重要性**：影响核心交互（全局听写），用户体验严重下降，👍 数 (14) 高。
   - **社区反应**：macOS 用户集中反馈，与系统权限或热键冲突相关。

8. **[#27673](https://github.com/openai/codex/issues/27673) - 在 `/goal resume` 时流断开 (已关闭)**
   - **重要性**：已关闭，但涉及特定操作（目标恢复）的稳定性，可作为类似问题的参考案例。
   - **社区反应**：Windows CLI 用户报告，修复后需验证。

9. **[#26564](https://github.com/openai/codex/issues/26564) - 从挂起恢复后 CLI 工作异常**
   - **重要性**：系统级电源管理场景下的健壮性问题，影响 Linux 用户。
   - **社区反应**：评论数 (7)，需更多环境复现。

10. **[#27684](https://github.com/openai/codex/issues/27684) - 流断开错误 (新版本)**
    - **重要性**：最新版本 (26.609) 出现的新流断开报告，可能与近期网络或服务变更有关。
    - **社区反应**：新创建，需监控是否呈扩散趋势。

---

## 重要 PR 进展 (Top 10)
以下 PR 基于变更的重要性和潜在影响筛选：

1. **[#27723](https://github.com/openai/codex/pull/27723) - 在 Guardian 审查中保留用户目标证据**
    - **内容**：优化安全审查流程，将用户持久化的目标作为独立证据呈现，减少误判，提升透明度。

2. **[#17724](https://github.com/openai/codex/pull/17724) - macOS Seatbelt 拒绝信息追加到命令输出**
    - **内容**：沙盒安全增强，当 macOS Seatbelt 拦截命令时，将策略拒绝详情直接输出，便于用户和模型诊断。

3. **[#27721](https://github.com/openai/codex/pull/27721) - 预预热 Guardian 审查线程**
    - **内容**：性能优化，异步预创建安全审查所需的线程，减少首次审查的延迟，提升响应速度。

4. **[#27708](https://github.com/openai/codex/pull/27708) - 图像生成后继续未完成任务**
    - **内容**：模型行为调整，允许图像生成仅为多部分请求的一环，完成后继续后续任务，避免冗余总结。

5. **[#27720](https://github.com/openai/codex/pull/27720) - 实时对话添加 AVAS 架构覆盖**
    - **内容**：架构扩展，为实时对话启动添加 `AVAS` 架构选项（默认 `realtimeapi`），支持不同的 WebRTC 后端。

6. **[#27710](https://github.com/openai/codex/pull/27710) - 添加延迟追踪 Span**
    - **内容**：可观测性增强，在关键路径（线程启动、上下文构建、工具准备等）添加追踪 Span，用于定位性能瓶颈。

7. **[#27706](https://github.com/openai/codex/pull/27706) - 使用 aws-lc-rs 作为 rustls 加密提供商**
    - **内容**：企业兼容性关键修复，用 `aws-lc-rs` 替换 `ring` 以支持企业 TLS 代理使用的 `ecdsa_secp521r1` 等证书算法。

8. **[#27718](https://github.com/openai/codex/pull/27718) - 防止状态 SQLite WAL-重置损坏 (已关闭)**
    - **内容**：**关键数据修复**。将捆绑的 SQLite 引擎固定到 3.51.3（包含 WAL 重置竞争修复），并添加回归防护，防止状态数据库损坏。

9. **[#27258](https://github.com/openai/codex/pull/27258) - 缓存工具搜索处理器 (per session)**
    - **内容**：性能优化，避免每次采样延续时重建工具搜索的 BM25 索引，减少约 113ms 的重复开销。

10. **[#27719](https://github.com/openai/codex/pull/27719) - 从 SQLite 目录是文件的情况恢复**
    - **内容**：边缘情况修复，处理用户错误地将文件置于 SQLite 目录路径的异常状态，并自动恢复。

---

## 功能需求趋势
从 Issues 中提炼的社区关注方向：
- **会话管理与可访问性**：强烈要求恢复或改进**归档聊天**的查看方式（#27717, #27207），用户不希望历史内容被隐藏。
- **工作流自动化**：提出**声明式动态工作流**基础（#25446），希望更灵活地定义多步骤、条件化的代理任务。
- **插件与 MCP 生态**：持续优化插件安装、认证路由及与 MCP 服务器的冲突处理（#27607, #27459, #27602），强调一致性体验。
- **跨平台一致性**：Windows 和 macOS 在沙盒、快捷键、路径处理上的差异问题频发，社区期望统一可靠的体验。
- **模型与提供商灵活性**：VS Code 扩展中模型选择器与自定义提供商状态不同步（#27695），反映对混合模型配置的需求。

---

## 开发者关注点 (高频痛点)
1.  **连接与流稳定性**：`stream disconnected before completion` 类错误（#18960, #27668, #27684）反复出现，是当前最普遍的体验问题。
2.  **数据持久化与丢失**：聊天历史在更新后消失（#20741, #26236）引发对本地数据存储可靠性的严重担忧。
3.  **Windows 平台兼容性**：非 ASCII 用户名导致崩溃（#27699, #27722）、WSL2 沙盒支持（#25799）、更新后启动失败（#27175）等问题集中，影响企业用户。
4.  **沙盒与工具调用**：Windows 沙盒命令执行失败、多代理加密工具调用 schema 错误（#26753）等，阻碍复杂任务自动化。
5.  **CLI 配置与 hooks**：项目级 `.codex/hooks.json` 在 git worktree 中被忽略（#27133）、`codex exec` hooks 分发问题（#26452），影响高级用户定制工作流。
6.  **状态管理**：SQLite 数据库损坏风险（#27718）和归档状态访问（#27207）反映对状态持久化和 UI 一致性的需求。

---
*报告生成时间：2026-06-12*  
*数据来源：github.com/openai/codex (过去24小时活跃 Issues & PRs)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-12)

**数据来源**: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)  
**统计周期**: 过去24小时 (截至 2026-06-11)

---

## 1. 今日速览
今日社区核心围绕**稳定性修复**与**模型支持扩展**展开。多个高优先级（P1）的 Agent 执行挂起与子代理逻辑缺陷被修复，同时 PR 已合并将 Gemini 3.1 Flash Lite 正式推广至 GA 并开始支持 3.5 Flash 模型。安全方面，针对 Auto Memory 的敏感信息泄露风险与工具确认界面的提示注入漏洞（IPI）修复已关闭。

---

## 2. 版本发布
过去24小时内无新版本发布。

---

## 3. 社区热点 Issues (Top 10)
以下 Issues 基于评论数、优先级（P1/P2）及社区反馈（👍）综合筛选。

| # | 标题 | 重要性说明 | 社区反应 | 链接 |
|---|------|------------|----------|------|
| **21409** | Generalist agent hangs | **P1 严重缺陷**：通用代理在简单操作（如创建文件夹）时无限挂起，严重影响基础可用性。社区反馈强烈（8 👍）。 | 高关注，已多次复现，需紧急修复。 | [链接](https://github.com/google-gemini/gemini-cli/issues/21409) |
| **25166** | Shell command execution gets stuck with "Waiting input" | **P1 严重缺陷**：Shell 命令执行完成后，UI 仍显示“等待输入”，导致工作流阻塞。影响日常命令行操作。 | 高关注（3 👍），多次报告。 | [链接](https://github.com/google-gemini/gemini-cli/issues/25166) |
| **22323** | Subagent recovery after MAX_TURNS is reported as GOAL success | **P1 逻辑缺陷**：子代理在达到最大轮次限制后错误报告“成功”，掩盖了实际的中断，导致任务状态不透明。 | 中高关注（2 👍），影响任务追踪可靠性。 | [链接](https://github.com/google-gemini/gemini-cli/issues/22323) |
| **24353** | Robust component level evaluations | **P1 史诗任务**：在引入“行为评估”后，需建立更稳健的组件级评估体系，以保障 76 项现有测试及 6 种模型配置的质量。 | 持续讨论（7 评论），关乎长期质量保障。 | [链接](https://github.com/google-gemini/gemini-cli/issues/24353) |
| **22745** | Assess the impact of AST-aware file reads, search, and mapping | **P2 探索性史诗**：评估 AST 感知工具在文件读取、搜索和代码库映射中的价值，可能显著提升代码理解精度与效率。 | 持续讨论（7 评论），是核心能力升级的关键方向。 | [链接](https://github.com/google-gemini/gemini-cli/issues/22745) |
| **26525** | Add deterministic redaction and reduce Auto Memory logging | **P2 安全与隐私**：Auto Memory 在提取前已将内容送入模型上下文，存在敏感信息泄露风险。需实现确定性脱敏并减少日志。 | 中关注（5 评论），涉及数据安全红线。 | [链接](https://github.com/google-gemini/gemini-cli/issues/26525) |
| **26522** | Stop Auto Memory from retrying low-signal sessions indefinitely | **P2 资源与效率**：Auto Memory 对低信号会话的无效重试导致资源浪费和重复提示。 | 中关注（5 评论），影响系统效率。 | [链接](https://github.com/google-gemini/gemini-cli/issues/26522) |
| **21983** | browser subagent fails in wayland | **P1 环境兼容性**：浏览器子代理在 Wayland 显示服务器下失败，影响 Linux 桌面用户体验。 | 中关注（4 评论），特定环境下的阻塞性问题。 | [链接](https://github.com/google-gemini/gemini-cli/issues/21983) |
| **22093** | (Sub)agents running without permission since v0.33.0 | **P2 权限与配置**：v0.33.0 更新后，即使用户配置禁用，子代理仍被意外启用，违背用户预期。 | 中关注（2 评论），涉及用户控制权。 | [链接](https://github.com/google-gemini/gemini-cli/issues/22093) |
| **21924** | High performance and flicker free behavior on terminal resize | **P2 用户体验**：终端调整大小时 UI 闪烁且性能低下，需迁移至 `RenderStatic` 并批量更新历史记录。 | 中关注（2 评论），影响交互流畅度。 | [链接](https://github.com/google-gemini/gemini-cli/issues/21924) |

---

## 4. 重要 PR 进展 (Top 10)
以下 PR 基于优先级、变更规模（size）及修复/功能重要性筛选。

| # | 标题 | 内容说明 | 状态 | 链接 |
|---|------|----------|------|------|
| **27705** | [Internal Testing] Promote Gemini 3.1 Flash Lite to GA and support Gemini 3.5 Flash | **核心模型支持**：将 Gemini 3.1 Flash Lite 从预览版转为正式版（GA），并新增对 Gemini 3.5 Flash 模型的支持。这是模型能力扩展的关键一步。 | Open | [链接](https://github.com/google-gemini/gemini-cli/pull/27705) |
| **27842** | fix(core): never let shell exit results hang on the output drain | **P1 稳定性修复**：针对 **#25166**，修复 Shell 命令完成后输出处理链中的错误导致 UI 卡死的问题，确保退出结果总能被处理。 | Open | [链接](https://github.com/google-gemini/gemini-cli/pull/27842) |
| **27850** | fix(core): sniff MCP image MIME types | **数据完整性修复**：修正 MCP 图像载荷的 MIME 类型，当 base64 数据实际为 WebP 但被声明为 PNG 时，能正确嗅探并发送 `image/webp`，避免模型误解。 | Open | [链接](https://github.com/google-gemini/gemini-cli/pull/27850) |
| **27845** | fix(cli): prompt for folder trust before auth | **安全与流程优化**：在交互式启动时，若工作区信任状态未知，提前提示用户信任文件夹，并在信任后重新启动以正确加载本地配置。 | Open | [链接](https://github.com/google-gemini/gemini-cli/pull/27845) |
| **27502** | fix(core): resolve P1 crash during terminal resize (ioctl EBADF) | **P1 崩溃修复**：解决终端调整大小时，UI 引擎尝试调整已销毁 PTY 导致的 `ioctl EBADF` 竞态条件崩溃。 | Closed | [链接](https://github.com/google-gemini/gemini-cli/pull/27502) |
| **27472** | fix(ui): enforce truncation lockout for tool confirmations to prevent IPI | **P1 安全修复**：修复工具确认界面的间接提示注入（IPI）漏洞，强制用户必须展开查看完整命令/文件差异后才能确认，防止恶意内容被截断隐藏。 | Closed | [链接](https://github.com/google-gemini/gemini-cli/pull/27472) |
| **27854** | Fix/pending tools and trust overrides | **稳定性与一致性**：防止代理在等待工具审批时过早推进状态；通过强制文件写入顺序消除竞态条件；修复配置 bug 以确保信任覆盖生效。 | Open | [链接](https://github.com/google-gemini/gemini-cli/pull/27854) |
| **27772** | refactor(core): standardize tool output formatting | **代码质量**：重构 `mcp-tool`、`shell`、`web-fetch` 等外部工具的输出格式化，引入 `wrapUntrusted` 助手，统一数据结构，减少重复逻辑。 | Closed | [链接](https://github.com/google-gemini/gemini-cli/pull/27772) |
| **27473** | fix(security): resolve hostnames before private-IP check in isBlockedHost | **安全边界修复**：修复 `isBlockedHost` 和 `isPrivateIp` 仅验证 IP 字面量而忽略主机名解析的问题，防止通过解析到私有 IP 的主机名绕过网络访问限制。 | Closed | [链接](https://github.com/google-gemini/gemini-cli/pull/27473) |
| **27553** | fix(cli): add GATEWAY auth type to validateAuthMethod | **认证兼容性**：为 `GOOGLE_GEMINI_BASE_URL` 新增的 `GATEWAY` 认证类型补充验证逻辑，修复因缺失检查导致的认证失败。 | Open | [链接](https://github.com/google-gemini/gemini-cli/pull/27553) |

---

## 5. 功能需求趋势
从 Issues 和 PRs 中提炼，社区最关注的功能方向集中在：

1.  **Agent 智能与可靠性**：提升子代理（如 generalist, browser, codebase_investigator）的自主决策能力、减少挂起、改善错误恢复（如 #21409, #22323, #21968, #22232）。
2.  **代码理解深度**：探索集成 AST 感知工具（如 tilth, glyph, AST grep）以增强文件读取、搜索和代码库映射的精确度（#22745, #22746, #22747）。
3.  **安全与隐私加固**：强化 Auto Memory 的敏感信息处理（确定性脱敏、低信号会话处理）、网络访问控制（私有 IP 检查）、以及用户界面安全（防止 IPI）（#26525, #26522, #27473, #27472）。
4.  **模型生态与实验性功能**：跟进新模型（Gemini 3.5 Flash）并支持实验性认证流（BYOID）（#27705, #27545）。
5.  **基础设施与体验**：改善终端性能（无闪烁调整大小）、工具输出标准化、以及工作区信任流程（#21924, #27772, #27845）。

---

## 6. 开发者关注点
开发者反馈的**核心痛点**与**高频需求**：

*   **稳定性优先**：Agent 无限挂起（#21409）、Shell 执行卡顿（#25166）、终端调整大小崩溃（#21924）等阻塞性问题消耗大量调试时间，修复优先级最高。
*   **子代理行为可控性**：用户对子代理的自动启用（#22093）、使用不足（#21968）或错误报告状态（#22323）感到困惑，需要更透明、可预测的控制机制。
*   **安全合规焦虑**：Auto Memory 的日志与提取过程（#26525, #26522）以及网络工具的主机名解析（#27473）引发的潜在数据泄露风险，是企业用户的主要关切。
*   **工具链集成质量**：MCP 图像类型错误（#27850）、工具输出格式不统一（#27772）等细节问题影响第三方工具集成的可靠性和开发体验。
*   **配置与信任模型**：文件夹信任提前（#27845）、符号链接代理识别（#20079）等配置问题反映了当前权限模型与用户工作流存在摩擦。

---
*报告生成时间：2026-06-12*  
*注：所有链接指向 GitHub 对应 Issue 或 Pull Request。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-12)

## 今日速览
今日社区动态聚焦于 **MCP 服务器连接策略** 与 **企业权限管理** 的持续争议，多个高热度 issue 反映核心功能缺失；v1.0.61 版本引入的 **终端渲染器严重 bug** 导致输出混乱与字符重复，影响基础使用体验；社区对官方响应速度不满，已出现自行开发替代方案的迹象，稳定性与信任度面临挑战。

---

## 版本发布
*过去 24 小时内无新版本发布。*

---

## 社区热点 Issues（Top 10）
以下挑选了过去 24 小时内更新且社区反应最强烈的 10 个 issue：

1. **[#53] Bring back the GitHub Copilot in the CLI commands to not break workflows**  
   **链接**: https://github.com/github/copilot-cli/issues/53  
   **重要性**: 核心命令被移除导致用户工作流中断，是社区反应最强烈的 issue（👍 75）。官方长期未回应已引发社区自行开发替代工具（如 `shell-ai`），反映信任危机。  
   **社区反应**: 37 条评论，持续讨论替代方案。

2. **[#223] "Copilot Requests" permission for fine-grained tokens should be visible for org-owned tokens**  
   **链接**: https://github.com/github/copilot-cli/issues/223  
   **重要性**: 企业级安全需求，组织无法为机构拥有的令牌配置“Copilot Requests”权限，阻碍自动化合规部署。  
   **社区反应**: 👍 76，30 条评论，多位企业用户支持。

3. **[#892] Add sandbox mode to restrict Copilot CLI file access to a specified working directory**  
   **链接**: https://github.com/github/copilot-cli/issues/892  
   **重要性**: 安全关键功能，要求限制 CLI 文件系统权限至工作区，防止未授权访问。  
   **社区反应**: 👍 49，12 条评论，安全敏感用户高度关注。

4. **[#2243] Worktrees are nightmare, should be disabled by default**  
   **链接**: https://github.com/github/copilot-cli/issues/2243  
   **重要性**: CLI 自动创建 Git worktrees 导致代码难以合并回主分支，破坏工作流。  
   **社区反应**: 👍 8，用户呼吁默认禁用。

5. **[#3755] Reasoning/thinking display garbles streamed text with duplicated overlapping chunks**  
   **链接**: https://github.com/github/copilot-cli/issues/3755  
   **重要性**: v1.0.61 中“思考过程”流式输出出现严重渲染错误，字符重复重叠，影响可读性。  
   **社区反应**: 新报告（3 条评论），但属于版本回归 bug。

6. **[#3749] Terminal streaming renderer corrupts output - characters doubled/truncated during streaming**  
   **链接**: https://github.com/github/copilot-cli/issues/3749  
   **重要性**: 终端流式渲染器损坏输出，导致字符加倍、截断，影响最终响应内容。  
   **社区反应**: 👍 5，3 条评论，与 #3755 类似但更广泛。

7. **[#3534] WSL2 (ARM64): `/copy` fails with `clip.exe exited with code 1` due to cmd.exe quoting**  
   **链接**: https://github.com/github/copilot-cli/issues/3534  
   **重要性**: WSL2 环境下 `/copy` 命令因 `cmd.exe` 引号处理失败，影响跨平台 clipboard 功能。  
   **社区反应**: 👍 2，3 条评论，ARM64 用户受影响。

8. **[#2056] Feature request: Scheduled/recurring prompts**  
   **链接**: https://github.com/github/copilot-cli/issues/2056  
   **重要性**: 请求添加定时/重复任务功能，使代理能自动执行周期性监控或调试任务。  
   **社区反应**: 👍 3，3 条评论，自动化场景需求。

9. **[#3602] @github/copilot SDK mutates host `process.env` to inject `safe.bareRepository=explicit`**  
   **链接**: https://github.com/github/copilot-cli/issues/3602  
   **重要性**: SDK 在初始化时无条件修改宿主进程环境变量，可能干扰其他工具，属技术债务。  
   **社区反应**: 👍 4，1 条评论，开发者关注副作用。

10. **[#3772] Support authenticated (OAuth/token) reads of the MCP registry**  
    **链接**: https://github.com/github/copilot-cli/issues/3772  
    **重要性**: 企业配置自定义 MCP 注册表时，当前仅支持匿名读取，要求支持认证以保障安全。  
    **社区反应**: 今日新创建（0 👍），但代表企业安全关键需求。

---

## 重要 PR 进展
过去 24 小时内仅 **1 个 PR** 更新，无实质功能变更：
- **[#3771] Initial project setup**  
  **链接**: https://github.com/github/copilot-cli/pull/3771  
  **内容**: 初始项目设置，无具体功能或修复描述。  
  **状态**: Open，可能为测试或模板创建。

*注：PR 数量极少，表明核心开发活动可能集中在内部分支或未公开。*

---

## 功能需求趋势
从所有 Issues 标签与内容提炼，社区最关注的功能方向：

1. **企业级管控增强**  
   - 细粒度权限（如 `Copilot Requests` 可见性）、组织级令牌支持、MCP 注册表认证读取。
2. **MCP 服务器策略与连接稳定性**  
   - 解决第三方 MCP 服务器被策略阻止的问题（#2486, #3756），改善连接错误处理。
3. **自动化与代理能力扩展**  
   - 定时/循环任务（#2056, #2129）、会话恢复增强、长期运行任务支持。
4. **终端用户体验优化**  
   - 渲染器稳定性（解决字符重复/截断）、输入快捷键一致性（如 Shift+Enter、Win+H 语音输入）、多行输入体验。
5. **安全与配置细粒度控制**  
   - 沙盒模式限制文件访问、插件按项目禁用、worktrees 默认关闭、环境变量突变修复。
6. **会话与上下文管理**  
   - 令牌自动刷新、上下文层级（`contextTier`）生效问题、大附件处理优化。

---

## 开发者关注点
高频痛点与需求总结：

- **稳定性回归**：v1.0.61 引入多个渲染与输入 bug，影响基础可用性。
- **企业部署障碍**：权限模型不完善、MCP 策略过严，阻碍企业采用。
- **工作流破坏**：自动 worktree 创建、会话令牌过期无恢复，导致任务中断。
- **安全顾虑**：文件系统权限过宽、MCP 注册表匿名访问，需沙盒与认证。
- **自动化缺口**：缺乏定时任务与循环执行，限制代理在长期任务中的应用。
- **配置透明度**：权限提示不清晰（如重复目录授权）、插件管理不够灵活。

---

*数据来源: github.com/github/copilot-cli | 生成时间: 2026-06-12*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-12)

**数据来源**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)  
**统计周期**: 过去24小时 (截至 2026-06-12)

---

### 1. 今日速览
过去24小时内，Kimi Code CLI 社区仅有一条重要 Pull Request 完成合并，核心新增 **用户自定义颜色皮肤（YAML 配置）** 功能，通过 `/skin` 命令实现运行时主题切换，显著提升了 CLI 的视觉个性化能力。社区 Issues 和 Releases 暂无新动态。

---

### 2. 版本发布
无新版本发布。

---

### 3. 社区热点 Issues
过去24小时内无 Issues 创建或更新，暂无社区热点讨论。

---

### 4. 重要 PR 进展
| PR 编号 | 标题 | 状态 | 说明 | 链接 |
|---------|------|------|------|------|
| #2170 | feat: add user-customizable color skins via YAML | **已合并/关闭** | 新增 `/skin` 命令支持运行时切换皮肤；通过 `~/.kimi/skins/<name>.yaml` 文件定义完整调色板，兼容 Hermes 格式，未定义 token 自动回退。 | [查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/2170) |

---

### 5. 功能需求趋势
基于现有数据（仅一条 PR），近期社区需求高度聚焦于 **UI/UX 个性化**，特别是通过配置文件（YAML）实现用户自定义主题。但因 Issues 数据为空，无法全面归纳其他潜在趋势（如 IDE 集成、性能优化、新模型支持等）。

---

### 6. 开发者关注点
无有效评论或反馈数据，暂无法总结开发者高频痛点或需求。

---

**备注**: 本报告严格依据提供的 GitHub 数据生成。因过去24小时社区活动极少，部分章节内容有限，建议结合仓库历史数据做长期趋势分析。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-12)

**数据来源**: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)  
**统计周期**: 过去 24 小时 (截至 2026-06-12)

---

## 今日速览
过去 24 小时，OpenCode 社区保持高度活跃，无新版本发布，但核心开发持续推进多个关键改进。重点包括：**集成凭证体系重构**、**MCP 资源订阅 API** 等 PR 更新，同时社区围绕 **GitHub Copilot 深度集成**、**会话管理增强** 和 **终端稳定性** 提出大量反馈。多个高票功能需求与顽固 BUG 并存，反映出用户对生产环境可靠性的迫切期待。

---

## 社区热点 Issues (Top 10)
以下选取评论数多、👍 高或影响面广的 Issue：

1. **[FEATURE] 添加原生会话目标与生命周期支持**  
   [#27167](https://github.com/anomalyco/opencode/issues/27167) | 作者: @jorgitin02 | 评论: 44 | 👍: 71  
   **重要性**: 社区强烈需求的核心功能，旨在通过 `/goal` 命令实现会话级目标持久化，提升工作流管理能力。高👍数表明用户对会话状态管理的迫切需求。

2. **[BUG] CLI 复制粘贴功能失效**  
   [#13984](https://github.com/anomalyco/opencode/issues/13984) | 作者: @hongyesuifeng | 评论: 47 | 👍: 20  
   **重要性**: 基础交互功能缺陷，影响日常使用体验。高评论量显示问题普遍，需优先修复。

3. **[FEATURE] 插件 API：自定义侧边栏面板**  
   [#5971](https://github.com/anomalyco/opencode/issues/5971) | 作者: @z80dev | 评论: 10 | 👍: 34  
   **重要性**: 扩展插件 UI 能力的关键需求，允许插件在侧边栏注册自定义视图，将极大丰富生态。高👍数体现开发者对 UI 扩展的期待。

4. **[FEATURE] 请求 GitHub Copilot 自动模型路由 API 访问**  
   [#20235](https://github.com/anomalyco/opencode/issues/20235) | 作者: @fastdrumr | 评论: 7 | 👍: 23  
   **重要性**: 旨在对接 VS Code Copilot 的模型自动选择能力，提升 OpenCode 在 Copilot 生态中的竞争力。社区对深度 Copilot 集成关注度高。

5. **[BUG] 压缩功能失败导致 Agent 遗忘上下文**  
   [#8394](https://github.com/anomalyco/opencode/issues/8394) | 作者: @dhruvkej9 | 评论: 13 | 👍: 1  
   **重要性**: 严重数据完整性 BUG，`/compact` 或自动压缩可能清空会话历史，直接影响 Agent 连续工作能力。

6. **[BUG] Web UI 终端按钮消失 (自 v1.15.12)**  
   [#30158](https://github.com/anomalyco/opencode/issues/30158) | 作者: @peterwwillis | 评论: 8 | 👍: 7  
   **重要性**: 版本升级引发的回归问题，导致 Web 端无法访问终端，影响多平台用户体验。

7. **[FEATURE] 使 “Allow always” 权限选项持久化**  
   [#20066](https://github.com/anomalyco/opencode/issues/20066) | 作者: @Speedymr01 | 评论: 6 | 👍: 10  
   **重要性**: 提升权限管理体验，避免每次重启重复授权，属于高频使用场景的体验优化。

8. **[BUG] 会话消息序列号约束失败 (agent 切换时)**  
   [#31204](https://github.com/anomalyco/opencode/issues/31204) | 作者: @High-cla | 评论: 5 | 👍: 2  
   **重要性**: 数据库层面 BUG，在最新迁移后触发，导致 agent 切换会话时崩溃，影响核心会话流程。

9. **[FEATURE] 跨项目会话列表/选择器 (TUI)**  
   [#31932](https://github.com/anomalyco/opencode/issues/31932) | 作者: @mskadu | 评论: 4 | 👍: 0  
   **重要性**: 解决多仓库工作流痛点，当前 `/sessions` 命令仅限当前项目，跨项目切换不便。新需求但场景明确。

10. **[BUG] 终端频繁冻结需手动重启**  
    [#31720](https://github.com/anomalyco/opencode/issues/31720) | 作者: @PumpkinTTL | 评论: 4 | 👍: 0  
    **重要性**: 终端作为核心交互组件，冻结问题严重影响开发流，且报告呈上升趋势，需深入排查。

---

## 重要 PR 进展 (Top 10)
以下选取功能增强、关键修复或架构改进的 PR：

1. **修复(acp): 在编辑权限请求中包含 diff 内容块**  
   [#31783](https://github.com/anomalyco/opencode/pull/31783) | 作者: @ReeSilva  
   **内容**: 修复 ACP 协议中 `requestPermission` 的 `edit` 操作，此前缺失 `content: [{ type: "diff" }]`，导致客户端无法显示 diff 视图。**影响**: 提升 ACP 客户端（如 Zed）的编辑体验一致性。

2. **重构(core): 简化集成凭证管理**  
   [#31968](https://github.com/anomalyco/opencode/pull/31968) | 作者: @thdxr  
   **内容**: 重命名 connector 为 integration，简化认证方式，将凭证转为全局 CRUD 记录，并替换创建时的旧凭证。**影响**: 统一集成管理模型，降低配置复杂度。

3. **修复(server): 共享全局 memoMap 以消除单例服务重复**  
   [#28152](https://github.com/anomalyco/opencode/pull/28152) | 作者: @sjawhar  
   **内容**: 修复 TCP 监听器因每次调用 `Layer.makeMemoMapUnsafe()` 导致单例服务重复初始化的问题。**影响**: 减少内存占用，提升服务器启动效率。

4. **功能(mcp): 添加带自动提示的资源订阅 API**  
   [#29355](https://github.com/anomalyco/opencode/pull/29355) | 作者: @sjawhar  
   **内容**: 实现 MCP 客户端资源订阅能力，支持自动提示资源变更。**影响**: 增强 MCP 服务器与 OpenCode 的动态数据同步能力。

5. **修复(tui): 权限/询问被中断时发布合成拒绝事件**  
   [#29352](https://github.com/anomalyco/opencode/pull/29352) | 作者: @sjawhar  
   **内容**: 当权限请求被中断（如工具取消、会话结束）时，向 TUI 发布合成拒绝事件，避免 UI 状态卡死。**影响**: 提升 TUI 交互鲁棒性。

6. **功能(plugin): 通过 PluginInput.skills 暴露技能 API**  
   [#29356](https://github.com/anomalyco/opencode/pull/29356) | 作者: @sjawhar  
   **内容**: 允许插件访问 `skills` API，可注册自定义技能供模型调用。**影响**: 大幅扩展插件能力边界，支持更复杂的工具链集成。

7. **功能(session): 在会话创建时尊重显式会话 ID 并去重**  
   [#29358](https://github.com/anomalyco/opencode/pull/29358) | 作者: @sjawhar  
   **内容**: 允许通过 API 显式指定会话 ID，并自动检测重复，避免意外创建多个同名会话。**影响**: 提升会话管理的确定性与可编程性。

8. **功能(provider): 支持用户配置中的每模型限制覆盖**  
   [#29354](https://github.com/anomalyco/opencode/pull/29354) | 作者: @sjawhar  
   **内容**: 用户可在 `opencode.json` 中为特定模型设置 `limit.context`、`limit.input`、`limit.output`，此前这些设置被忽略。**影响**: 增强模型配置灵活性，适配不同模型特性。

9. **修复(desktop): 对所有 HTTP 连接使用服务器端选择器**  
   [#31848](https://github.com/anomalyco/opencode/pull/31848) | 作者: @zhizhizheng  
   **内容**: 修复桌面应用文件选择器逻辑，此前依赖 `ServerConnection.local()` 判断，导致远程连接时错误使用原生选择器。**影响**: 统一桌面与 Web 端的文件选择体验。

10. **修复(tui): 按目录而非层次路径范围化非 git 会话**  
    [#31210](https://github.com/anomalyco/opencode/pull/31210) | 作者: @malventano  
    **内容**: 修正非 git 目录的会话过滤逻辑，避免因路径层次导致会话错误归入父目录。**影响**: 解决多项目工作流中会话混淆问题（关联 #8836, #18890 等）。

---

## 功能需求趋势
从 Issues 中提炼的社区核心关注方向：

1. **GitHub Copilot 深度集成**  
   多个高票 Issue 要求暴露 Copilot 的自动模型路由 API（#20235）和“Auto”选项（#25239），显示用户希望 OpenCode 无缝对接 Copilot 的智能模型选择能力，减少手动切换。

2. **会话管理与持久化增强**  
   - 原生会话目标（#27167）  
   - 跨项目会话选择器（#31932）  
   - 权限设置持久化（#20066）  
   表明用户将 OpenCode 用于长期、多项目任务，需要更强大的会话组织与状态保持。

3. **插件生态 UI 扩展**  
   自定义侧边栏面板（#

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-12)

## 今日速览
Qwen Code 今日发布 **v0.18.0-preview.2** 预览版，同时社区围绕 **会话状态持久化**、**环境兼容性** 和 **IDE 集成稳定性** 展开密集修复。多个关键 PR 合并，修复了 `/goal` 迭代计数重置、SSH 环境剪贴板支持及内存泄漏问题，反映了项目对生产环境可靠性的持续关注。

## 版本发布
- **v0.18.0-preview.2**：预览版本，Release notes 未详细列出变更。从提交记录看，包含 CLI 复制输出时跳过 `thought` 部分的修复（[he-yufeng](https://github.com/he-yufeng)）及常规版本更新 chore。

## 社区热点 Issues（Top 10）
以下 Issues 基于 **优先级、社区互动（评论数）及影响范围** 筛选：

1. **[#3384](https://github.com/QwenLM/qwen-code/issues/3384)** - 无法添加 OpenAI 兼容本地 LLM  
   **重要性**：高（P2，14 条评论）  
   **摘要**：用户尝试通过 `settings.json` 连接本地 VLLM 服务（Qwen3.6-35B-A3B）失败，文档配置路径可能不清晰。  
   **社区反应**：持续讨论，涉及配置验证和错误提示改进。

2. **[#4987](https://github.com/QwenLM/qwen-code/issues/4987)** - PR #4779 无声回滚已合并功能 #4652  
   **重要性**：高（协作流程问题，5 条评论）  
   **摘要**：PR #4779 在解决冲突时意外回滚了已合并的 #4652 功能，未提供解释，引发对代码管理规范的担忧。  
   **社区反应**：要求明确回滚原因和流程改进。

3. **[#4888](https://github.com/QwenLM/qwen-code/issues/4888)** - IDEA 插件 `ask_user_question` 不显示问题文本  
   **重要性**：高（P2，IDE 体验缺陷，4 条评论）  
   **摘要**：在 IDEA 中，Qwen 提问时仅显示提交/取消按钮，问题文本和输入框缺失。  
   **社区反应**：影响核心交互，急需修复。

4. **[#4898](https://github.com/QwenLM/qwen-code/issues/4898)** - 希望自由约束 user 画像生成与 skill 提炼  
   **重要性**：中（P3，功能需求，4 条评论）  
   **摘要**：新增功能可能污染上下文，请求更精细的控制以避免干扰 CLI 调用。  
   **社区反应**：反映对上下文管理的深度需求。

5. **[#4814](https://github.com/QwenLM/qwen-code/issues/4814)** - UI 应让自定义提供者用户更容易添加模型  
   **重要性**：中（P3，配置易用性，3 条评论）  
   **摘要**：首次启动向导对“自定义提供者”的支持不直观，对比第三方提供者（如 OpenRouter）流程繁琐。  
   **社区反应**：呼吁简化自定义模型配置流程。

6. **[#4964](https://github.com/QwenLM/qwen-code/issues/4964)** - 从 `max_tokens` 截断中恢复  
   **重要性**：高（P2，核心工具输出处理，3 条评论）  
   **摘要**：工具输出因 `max_tokens` 截断后，无法自动恢复或提供有效预览，导致任务中断。  
   **社区反应**：关联分层截断设计（PR #4880），需确保恢复机制可靠。

7. **[#4976](https://github.com/QwenLM/qwen-code/issues/4976)** - 自动生成的 memory 干扰 CLI 调用  
   **重要性**：高（P2，内存管理，3 条评论）  
   **摘要**：自动生成的 memory 记录包含无效工具调用路径，误导后续操作，浪费轮次。  
   **社区反应**：暴露 memory 生成逻辑的准确性问题。

8. **[#4999](https://github.com/QwenLM/qwen-code/issues/4999)** - `/goal` 迭代计数器在会话恢复时重置  
   **重要性**：高（P2，逻辑错误，2 条评论）  
   **摘要**：`MAX_GOAL_ITERATIONS` 安全限制在会话恢复后重置，导致循环可能无限进行。  
   **社区反应**：已关联 PR #5000 修复，需验证持久化逻辑。

9. **[#4994](https://github.com/QwenLM/qwen-code/issues/4994)** - `/stats` 在首次 turn 时永久双倍计数会话  
   **重要性**：高（P1，数据分析错误，2 条评论）  
   **摘要**：PR #4779 引入的 `/stats` 仪表板在首次打开时，将同一会话持久化两次，污染使用记录。  
   **社区反应**：影响数据准确性，需紧急修复。

10. **[#4926](https://github.com/QwenLM/qwen-code

</details>

---
*本日报由 [Big Model Radar](https://github.com/zx0828/big_model_radar) 自动生成。*