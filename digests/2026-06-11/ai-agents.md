# OpenClaw 生态日报 2026-06-11

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-06-11 00:39 UTC

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

# OpenClaw 项目动态日报 (2026-06-11)

## 今日速览
OpenClaw 项目今日保持极高活跃度，24小时内 Issues 和 PRs 各更新 500 条，社区参与度旺盛。新版本 v2026.6.6-beta.1 发布，重点强化跨组件的安全边界。大量 PR 聚焦于稳定性修复与性能优化，尤其是内存系统、代理间通信和插件加载机制。社区对安全漏洞、会话状态一致性和部署体验问题讨论热烈，多个 P1 级别 Issue 获得持续关注，项目整体健康度良好但需加速处理积压的安全相关缺陷。

## 版本发布
**v2026.6.6-beta.1** 已发布 ([发布说明](https://github.com/openclaw/openclaw/releases/tag/v2026.6.6-beta.1))

### 核心更新
- **安全边界全面收紧**：覆盖 transcripts、sandbox binds、host environment inheritance、MCP stdio、Codex HTTP 访问、native search policy、elevated sender checks、deleted-agent ACP 绕过、loopback tools、Discord moderation 及 Teams group access 控制。

### 破坏性变更
- 更严格的沙箱和工具访问策略可能导致现有自定义集成需要调整权限配置。
- MCP 服务器和 Codex 绑定的默认行为变更，需验证第三方工具兼容性。

### 迁移注意事项
1. 检查所有 `agents.defaults.sandbox.workspaceAccess` 配置，确保符合新的绑定策略。
2. 验证 MCP 服务器配置，确认工具暴露范围符合预期。
3. 测试 Discord/Teams 集成，确认 moderation 规则未过度阻断合法流量。
4. 在测试环境充分验证后再部署至生产环境。

## 项目进展
今日合并/关闭 PR 共 99 个，关键进展：

### 稳定性与修复
- **状态管理统一**：执行 approvals 系统迁移至 `OPENCLAW_STATE_DIR`（[#74002](https://github.com/openclaw/openclaw/pull/74002), [#92056](https://github.com/openclaw/openclaw/pull/92056)），解决跨平台（含 macOS）状态文件路径混乱问题。
- **网关可靠性**：配置热恢复机制（[#92027](https://github.com/openclaw/openclaw/pull/92027)），防止 watcher 错误永久禁用热重载。
- **模型解析**：修复空白 base URL 时保留内置提供商目录（[#91292](https://github.com/openclaw/openclaw/pull/91292)），解决 Gemini 模型解析失败。
- **OpenAI 插件**：移除 `gpt-5.3-codex` 强制 ChatGPT 后端认证（[#91720](https://github.com/openclaw/openclaw/pull/91720)），支持标准 API 密钥认证。

### 功能增强
- **Cron 可观测性**：为 `cron runs` 输出添加人类可读的 ISO 时间字段（[#91471](https://github.com/openclaw/openclaw/pull/91471)）。
- **内存搜索**：QMD 后端支持时间衰减（[#92035](https://github.com/openclaw/openclaw/pull/92035)），提升结果时效性。
- **使用统计**：配置级默认 `/usage` 页脚（[#89762](https://github.com/openclaw/openclaw/pull/89762)）及模板化完整渲染器（[#89835](https://github.com/openclaw/openclaw/pull/89835)）。

### 安全与边界
- **Codex 集成**：绑定代理执行主机策略（[#86360](https://github.com/openclaw/openclaw/pull/86360)）。
- **路径安全**：允许 `~/.openclaw/` 内符号链接（[#64473](https://github.com/openclaw/openclaw/pull/64473)），修复引导文件边界检查误判。

项目整体向前迈进显著，特别是在状态管理一致性、模型提供商兼容性和监控能力方面。

## 社区热点
### 最活跃 Issues（按评论数）
1. **[#25592](https://github.com/openclaw/openclaw/issues/25592)** (31 评论, P1, 🦞 diamond lobster)  
   **问题**：工具调用间的文本泄露至消息频道（安全/UX）。社区强烈要求修复数据泄露风险，讨论集中在如何隔离内部处理输出与用户可见消息。

2. **[#88838](https://github.com/openclaw/openclaw/issues/88838)** (19 评论, P1)  
   **问题**：通过抽象 seam 跟踪会话/SQLite 迁移。社区关注核心架构重构方法，避免大规模高风险重写。

3. **[#32473](https://github.com/openclaw/openclaw/issues/32473)** (17 评论, P2)  
   **问题**：控制 UI 要求设备身份（HTTPS/localhost）。Docker 用户大量反馈部署受阻，寻求解决方案。

4. **[#22438](https://github.com/openclaw/openclaw/issues/22438)** (17 评论, P2)  
   **问题**：分层引导文件加载以控制上下文窗口。社区讨论如何优化 token 使用，特别是大型工作区。

5. **[#22676](https://github.com/openclaw/openclaw/issues/22676)** (17 评论, P1)  
   **问题**：Signal 守护

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-06-11)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态呈现 **“多极活跃、聚焦生产就绪”** 的态势。核心项目（如 OpenClaw, NanoBot, IronClaw）均处于高强度迭代期，开发重心从功能探索转向 **安全性加固、稳定性修复与多智能体协作架构** 的深化。社区对 **部署体验、上下文管理、跨平台一致性** 的讨论热度显著上升，反映出用户群体从早期采用者向更广泛的生产环境用户演进的趋势。同时，生态内部出现 **“基础框架”与“垂直场景应用”** 的初步分化，部分项目（如 LobsterAI, CoPaw）专注于特定平台或用户体验优化，而另一些（如 OpenClaw, Zeroclaw）则持续夯实核心引擎与安全边界。

## 2. 各项目活跃度对比

| 项目 | 24h Issues 更新 | 24h PR 更新 | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 (极高) | ~500 (极高) | **v2026.6.6-beta.1** (安全强化) | **优秀**。活动量巨大，社区参与深，但存在 P1 安全积压，需加速修复。 |
| **NanoBot** | 10 (高) | 33 (19合并) | 无 | **优秀**。合并效率高，响应迅速，核心稳定性问题（流停滞、会话污染）已修复，多Agent协作成新焦点。 |
| **Zeroclaw** | 41 (22新开) | 50 (19合并) | 无 (v0.7.5 为最新稳定) | **良好**。v0.8.x 迭代密集，大量修复与重构PR待合并，合并率38%显示审核严格，但存在S1级数据丢失Bug未修复。 |
| **PicoClaw** | 4 (4新开) | 14 (6合并) | **v0.2.9-nightly** (持续构建) | **良好**。修复节奏稳定，安全与兼容性持续改进，但关键架构PR（Agent Collaboration Bus）标记为stale，需关注。 |
| **NanoClaw** | 1 (低) | 10 (6合并) | 无 | **良好**。活动集中于核心合并（安全、稳定性、文档），社区讨论少但质量高，技能化架构深化。 |
| **IronClaw** | 50 (极高) | 50 (极高) | 无 (v0.27.0 未同步至 crates.io) | **良好但存隐患**。活动量高，WebUI v2 修复积极，但 **crates.io 发布不同步** 问题持续5周，严重影响下游采用。 |
| **LobsterAI** | 0 (沉寂) | 22 (20合并) | **2026.6.10** (正式版) | **中等**。版本交付快，但社区互动几乎为零，用户反馈渠道缺失，风险在于无法感知真实用户痛点。 |
| **CoPaw** | 37 (19新开) | 50 (30合并) | **v1.1.11 & beta.3** | **优秀**。发布频繁，PR合并率高，社区讨论聚焦核心Bug与重大升级（AgentScope 2.0），生态活跃。 |
| **Moltis** | 1 (极低) | 0 | 无 | **差**。极低活跃度，仅一条minor Bug报告，无响应，项目处于静默维护期，社区参与度风险高。 |
| **TinyClaw** | 0 | 0 | 无 | **停滞**。 |
| **ZeptoClaw** | 0 | 0 | 无 | **停滞**。 |
| **EasyClaw** | 0 | 0 | 无 | **停滞**。 |

**注**：健康度评估结合了活动量、问题响应速度、版本发布节奏及社区互动质量。

## 3. OpenClaw 在生态中的定位
*   **优势**：
    1.  **安全与边界定义的行业标杆**：v2026.6.6-beta.1 对沙箱、工具访问、网络策略进行了史上最严格收紧，为生产环境部署提供了高置信度的安全基线。
    2.  **状态管理与跨平台一致性**：通过 `OPENCLAW_STATE_DIR` 统一状态文件路径，解决了长期困扰 macOS 等用户的路径混乱问题，体现了对多环境部署的深度理解。
    3.  **社区规模与影响力**：Issues/PRs 日更新量级（~500）远超同类，是生态内事实上的 **“核心参照”** 与 **“安全议题发起者”**。
*   **技术路线差异**：相比 NanoBot/CoPaw 的 **“WebUI 优先、用户体验驱动”**，或 PicoClaw 的 **“轻量、跨平台嵌入式”** 路线，OpenClaw 更偏向 **“企业级基础设施”** 路线，强调策略、边界、可审计性与长期运行可靠性。其破坏性变更公告和详细的迁移注意事项，体现了对 **“升级路径可控性”** 的重视。
*   **社区规模对比**：社区规模最大，讨论议题从具体Bug到架构设计（如会话状态抽象 seam）均有涉及，用户覆盖从个人开发者到企业运维。相比之下，NanoBot 和 CoPaw 社区更聚焦于功能使用与Bug反馈，Zeroclaw 社区则更多讨论配置与架构RFC。

## 4. 共同关注的技术方向
多项目共同涌现的需求，标志着生态的 **“成熟度拐点”**：

| 技术方向 | 涉及项目 | 具体诉求与表现 |
| :--- | :--- | :--- |
| **多智能体协作稳定性** | NanoBot, PicoClaw, CoPaw | 1. **子Agent生命周期与结果聚合**：NanoBot 的 `cronjob + subagent` 中断问题、子Agent结果实时通知导致幻觉；PicoClaw 的 `Agent Collaboration Bus` PR。 <br> 2. **上下文隔离**：NanoBot 修复 `history.jsonl` 跨会话污染。 |
| **上下文管理与记忆** | OpenClaw, NanoBot, CoPaw | 1. **状态持久化一致性**：OpenClaw 统一 `OPENCLAW_STATE_DIR`；NanoBot 的 `sustained goal` 缺失问题。 <br> 2. **长上下文优化**：CoPaw 的上下文压缩集成请求；OpenClaw 的分层引导文件加载讨论。 |
| **安全边界与沙箱加固** | **OpenClaw (引领)**, PicoClaw, NanoClaw | 1. **OpenClaw**：全面收紧跨组件安全边界（sandbox binds, ACP, loopback tools等）。 <br> 2. **PicoClaw**：修复 `web_fetch` SSRF 绕过（RFC 2544地址段）。 <br> 3. **NanoClaw**：实现基于命名空间的IPC隔离。 |
| **部署与运维体验** | Zeroclaw, IronClaw, NanoBot, PicoClaw | 1. **配置即代码/声明式**：Zeroclaw 的 MCP 默认配置、IronClaw 的配置碎片化 Epic。 <br> 2. **Docker/容器化**：Zeroclaw 用户要求“完整”Docker镜像；NanoBot 的 Bubblewrap 沙盒 `HOME` 变量问题。 <br> 3. **本地开发友好性**：IronClaw 的 `run-reborn-webui.sh` 脚本；NanoBot 的配置快速失败校验。 |
| **模型提供商兼容性** | OpenClaw, PicoClaw, CoPaw | 1. **OpenClaw**：修复空白 base URL 时保留内置提供商目录（Gemini）、移除 `gpt-5.3-codex` 强制认证。 <br> 2. **PicoClaw**：调整 `web_search` 工具类型、跳过 Claude 弃用参数。 <br> 3. **CoPaw**：新增小米 MiMo Provider、Free Model OAuth。 |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构/语言 | 关键差异化 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 安全、稳定、企业级策略 | 企业运维、安全敏感场景、基础设施构建者 | 核心未明确，但生态庞大 | **安全边界定义者**，破坏性变更文档详尽，强调升级路径。 |
| **NanoBot** | WebUI 体验、易用性、快速迭代 | 个人用户、初学者、需要直观界面的开发者 | 可能为 Python/JS | **用户体验驱动**，WebUI 功能丰富（文件管理、转录分段），响应速度极快。 |
| **Zeroclaw** | 开发者控制力、配置灵活性、zerocode | 高级用户、开发者、需要深度定制的场景 | Rust (推测) | **配置即代码**，提供 TUI 和 Dashboard，RFC 流程透明，追求架构清晰。 |
| **PicoClaw** | 轻量、跨平台、嵌入式、资源受限环境 | 边缘计算、嵌入式开发者、需要轻量Agent的用户 | Go | **轻量与跨平台**，二进制分发，专注核心工具链稳定与安全。 |
| **NanoClaw** | 技能化、模块化、多租户隔离 | 需要模块化扩展、SaaS化部署的场景 | 可能为 Python/容器化 | **技能化架构**，IPC隔离，文档强调定制化契约，面向可插拔生态。 |
| **IronClaw** | 自动化面板、扩展系统、NEAR生态集成 | NEAR生态用户、需要复杂自动化工作流的用户 | Rust | **自动化与扩展**，WebUI v2 重构，与 NEAR AI 深度绑定。 |
| **LobsterAI** | 桌面端体验、一体化应用 | 桌面用户、非技术终端用户、需要“开箱即用”体验者 | Electron (Tauri?) | **桌面应用形态**，关注数据备份、通知、UI 细节，社区互动弱。 |
| **CoPaw** | AgentScope 集成、多模态、企业级功能 | AgentScope 用户、研究机构、需要丰富模型支持的企业 | Python | **模型与生态集成**，快速跟进新模型（MiMo），与 AgentScope 2.0 同步升级。 |
| **Moltis** | 多提供者语音/文本处理 | 语音应用开发者 | 未明确 | **提供者聚合**，但活跃度极低，前景不明。 |

## 6. 社区热度与成熟度
*   **快速迭代阶段（功能驱动）**：**NanoBot, CoPaw, IronClaw**。这些项目版本发布频繁，大量新功能PR在研（如WebUI增强、新提供商、自动化面板），社区讨论围绕“如何实现”和“新功能需求”，Bug修复节奏快，但可能伴随一些回归问题。代表生态的 **“青春期”** ，活力强但稳定性需持续关注。
*   **质量巩固阶段（稳定与安全驱动）**：**OpenClaw, Zeroclaw, PicoClaw, NanoClaw**。这些项目近期合并的PR大量集中于 **Bug修复、安全加固、架构重构（如状态管理、守护进程注册表）**，而非全新功能。社区讨论更深入，涉及RFC和长期设计（如配置即代码、插件系统）。OpenClaw 虽活动量巨大，但核心是安全与稳定性修复，符合其基础设施定位。代表生态的 **“成年期”** ，追求生产就绪与长期可维护性。
*   **沉寂/停滞阶段**：**LobsterAI, Moltis, TinyClaw, ZeptoClaw, EasyClaw**。LobsterAI 有代码合并但无社区互动；Moltis 及后续项目几乎无活动。这些项目或面临 **“社区流失”** 风险，或已进入维护模式。LobsterAI 的“闭门开发”模式在开源生态中尤为特殊，长期可能脱离社区反馈循环。

## 7. 值得关注的趋势信号
1.  **安全从“特性”变为“基线要求”**：OpenClaw 的全面安全收紧、PicoClaw 的 SSRF 防护、NanoClaw 的 IPC 隔离，表明 **“默认安全”** 已成为核心项目的硬性标准。开发者选择项目时，安全策略的透明度和严格度将是关键评估项。
2.  **多智能体协作从“概念”进入“工程攻坚”**：NanoBot 的 `cronjob + subagent` 阻塞、PicoClaw 的 `Agent Collaboration Bus`、CoPaw 的子Agent模型预设，均指向 **“复杂工作流编排”** 成为下一阶段的核心挑战。**结果聚合、上下文同步、错误传播** 是亟待解决的工程问题。
3.  **“配置即代码”与“声明式运维”成为架构演进方向**：Zeroclaw 的 RFC #6165（移除内置集成）、IronClaw 的配置碎片化 Epic、OpenClaw 的 MCP 配置调整，都指向 **“将配置、集成、策略提升为一级公民”** 的趋势。未来项目将更倾向于提供声明式API和可编程的配置层，而非散落的命令行参数和配置文件。
4.  **部署体验决定采用天花板**：Zeroclaw 用户要求“完整”Docker镜像、IronClaw 的本地测试脚本、NanoBot 的配置快速失败，都说明 **“5分钟内部署并运行一个可靠实例”** 是吸引更广泛用户的关键。项目需系统性地解决环境依赖、网络策略、默认配置可用性等问题。
5.  **技能化/插件化成为生态扩展的通用范式**：NanoClaw 的 `skill-guidelines.md`、CoPaw 的 `make-skill`、PicoClaw 的 WASM 插件，均体现了 **“核心精简、能力外置”** 的设计思想。这降低了核心维护负担，并鼓励社区贡献可复用的能力模块。开发者应关注各

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-11)

## 1. 今日速览
项目今日保持**高度活跃**的开发与社区互动状态。过去24小时内，项目处理了**33条PR**（其中19条已合并/关闭），显示出极高的代码集成与问题修复效率。同时，有**10条Issues**更新（4条新开/活跃，6条关闭），社区反馈与核心功能稳定性讨论持续。重点关注点包括：**LLM流停滞与fallback机制**、**WebUI体验增强**、**多Agent协作逻辑**以及**配置与沙盒安全性**的改进。整体项目健康度**优秀**，迭代节奏快，社区贡献者多样。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展 (重要合并/关闭的PR)
今日多个关键PR合并，推动项目在**稳定性、用户体验与架构健壮性**方面显著前进：

*   **核心稳定性修复**:
    *   **PR #4272 [CLOSED]**: 修复LLM流停滞（stream stalled）问题，实现**自动重试与fallback**。此修复直接解决了长期困扰用户的 **Issue #4013**，大幅提升高负载下（如DeepSeek高峰时段）服务的可靠性。
    *   **PR #4274 [CLOSED]**: 实现 `history.jsonl` 的**会话隔离**，彻底根治 **Issue #4259** 中描述的跨会话上下文污染问题，确保系统提示词（system prompt）的纯净性。
    *   **PR #4273 [CLOSED]**: 为 `exec` 工具新增 `pathPrepend` 配置，解决 **Issue #3934** 中因PATH顺序导致的第三方库安装失败问题，增强了工具链的灵活性。
    *   **PR #4275 [CLOSED]**: 实现配置文件的**快速失败（fail-fast）** 校验，在启动时捕获无效配置，提升运维体验与系统健壮性。

*   **WebUI 体验增强**:
    *   **PR #4284 [OPEN]**: 在WebUI中通过**斜杠命令（`/skill`）** 激活技能，丰富了交互方式。
    *   **PR #4283 [OPEN]**: 修正WebUI活动时长的显示逻辑，更准确地反映完整对话回合的耗时。
    *   **PR #4278 [CLOSED]**: 实现WebUI转录（transcript）的**分段存储**，避免单文件过大导致历史丢失，并降低打开大对话的成本。
    *   **PR #4282 [OPEN]**: 在设置视图中添加**文件管理功能**，允许用户直接在WebUI中浏览和管理Agent生成的文件，极大提升便利性。

*   **平台与集成优化**:
    *   **PR #4277 [CLOSED]**: 对飞书（Feishu）网关进行**懒加载（lazy-load）** 优化，减少非必要依赖的初始化开销。
    *   **PR #4285 [OPEN]**: 增强cronjob参数验证，在创建时即拒绝无效调度配置，防止运行时错误。

## 4. 社区热点
今日讨论最活跃的议题围绕**多Agent协作的稳定性**与**LLM响应处理**：

1.  **Issue #4287 & PR #4288**: “空模型响应不触发fallback”是当前**最受关注的技术讨论**。用户报告DeepSeek等模型在高峰时段返回空`choices`时，系统无法触发备用模型，导致任务失败。社区已快速提交修复PR（#4288），通过匹配`empty` token并设置错误标志来解决问题，体现了高效的社区响应。
    *   **链接**: [Issue #4287](https://github.com/HKUDS/nanobot/issues/4287) | [PR #4288](https://github.com/HKUDS/nanobot/pull/4288)

2.  **PR #4291**: “允许子Agent使用可配置的模型预设”是一项**重要的架构增强**。它使得 spawned subagents 可以脱离父Agent的模型配置，使用独立的模型预设（provider, model, temperature等），为复杂工作流提供了更精细的资源配置能力。
    *   **链接**: [PR #4291](https://github.com/HKUDS/nanobot/pull/4291)

3.  **Issue #4290**: “cronjob在 spawning subagent 时提前结束”揭示了一个**严重的调度逻辑缺陷**，影响自动化任务的完整性。该问题已提交PR（#4285侧重参数验证，但此问题可能需要更针对性的修复），是维护者需优先关注的阻塞性问题。
    *   **链接**: [Issue #4290](https://github.com/HKUDS/nanobot/issues/4290)

## 5. Bug 与稳定性
按严重程度（影响核心功能与数据完整性）排列：

| 严重程度 | 问题描述 | 状态 | 关联PR/备注 |
| :--- | :--- | :--- | :--- |
| **高** | **LLM空响应不触发fallback**：主模型返回HTTP 200但`choices`为空时，任务失败且无备用方案。 | **OPEN** (Issue #4287) | **已有修复PR #4288**，待合并。 |
| **高** | **Cronjob子Agent导致主流程中断**：定时任务中spawn子Agent后，主Agent无法接收子Agent结果，后续工作流失败。 | **OPEN** (Issue #4290) | 暂无针对性PR，需紧急修复。 |
| **中** | **缺失“sustained goal”上下文**：用户指派长期任务（如写文章）时，模型反复报告上下文缺失，无法持续工作。 | **OPEN** (Issue #4286) | 可能与上下文管理（PR #4280）或goal机制有关，待调查。 |
| **中** | **Subagent实时通知导致LLM幻觉**：SubagentManager实时返回每个子Agent结果，可能干扰主Agent的LLM推理，产生幻觉。 | **OPEN** (Issue #4279) | 对应功能增强PR #4279，正在讨论实现方案（聚合通知）。 |
| **中** | **内存上下文在压力下丢失**：在上下文压缩（consolidation）后，新消息可能因`max_messages`限制而无法进入短期记忆，导致连续性丢失。 | **OPEN** (Issue #4280) | **已有修复PR #4280**，待合并。 |
| **低** | **长消息分割破坏代码块**：`split_message`在代码块中间分割消息，导致HTML渲染错误。 | **OPEN** (Issue #4257) | **已有修复PR #4257**（使分割函数感知围栏代码块），待合并。 |

## 6. 功能请求与路线图信号
用户与社区提出的新功能需求，结合现有PR判断其纳入下一版本的**可能性较高**：

1.  **模型-agnostic 计算机使用工具** (PR #4276 [OPEN])：新增 `computer_use`（像素级）和 `browser`（DOM级）原生工具，提供无服务器（in-process）的自动化能力。这是一个**重大功能扩展**，若合并将显著增强Agent的物理世界交互能力。
2.  **子Agent结果聚合通知** (Issue #4279 [OPEN])：为避免LLM幻觉，建议聚合多个子Agent结果后一次性通知主Agent。此需求与PR #4291（子Agent模型预设）结合，体现了对**复杂多Agent工作流**的深度优化方向。
3.  **WebUI技能市场/激活流** (PR #4284 [OPEN])：通过斜杠命令激活技能，是构建**可复用能力库**的关键一步，为未来技能商店（Skill Marketplace）概念奠定基础。
4.  **转录提供商扩展**：已合并的PR #4281（SiliconFlow）和已关闭的Issue #4000（StepFun）表明项目在持续**扩展ASR提供商生态**，这是一个明确的路线图信号。

## 7. 用户反馈摘要
从Issues评论与描述中提炼的真实用户痛点与场景：

*   **升级兼容性痛点**：用户从 `0.1.5post2` 升级到 `0.2.0` 后遭遇 **流停滞（Issue #4013）**，导致“任何实际工作无用”，反映了**版本升级的稳定性保障**至关重要。
*   **工具链易用性**：`exec` 工具因PATH顺序问题无法安装第三方库（Issue #3934），暴露了**沙盒环境与宿主机工具链集成**的复杂性，用户需要更直观的配置（如新增的 `pathPrepend`）。
*   **上下文管理困惑**：`history.jsonl` 跨会话污染（Issue #4259）和“sustained goal”缺失（Issue #4286）表明，**长期会话的上下文管理**是高级用户的核心关切，系统在自动摘要与上下文注入策略上需更精细。
*   **沙盒安全性担忧**：Bubblewrap沙盒未重置`HOME`变量（Issue #4237），导致工具写入指向宿主机目录，这是一个**严重的安全与隔离缺陷**，已修复。
*   **满意度点**：用户对 `0.1.5post2` 版本表示“very good”并致谢，说明项目在核心体验上曾获得认可。当前问题多集中于**升级后的新架构（v0.2.x）** 的稳定性与边缘场景。

## 8. 待处理积压
当前所有 **OPEN** 的 Issues 与 PRs 均为**近3天内创建**（2026-06-08 至 2026-06-11），暂无明显的长期未响应积压。但以下事项需**维护者优先关注**，以防演变为阻塞性问题：

*   **Issue #4290 (cronjob + subagent)**：影响定时自动化核心功能，需尽快定位根因并修复。
*   **PR #4288 (空响应fallback)**：修复高优先级Bug，应尽快合并以稳定生产环境。
*   **PR #4280 (内存上下文连续性)**：修复影响会话记忆的Bug，合并后可改善长期任务体验。
*   **PR #4257 (代码块分割)**：修复WebUI渲染问题，影响用户体验，应适时合并。
*   **PR #4291, #4276, #4279**：涉及重要新功能（子Agent模型预设、计算机使用、聚合通知），社区讨论积极，需评估合并时机与测试覆盖。

---
**报告生成说明**：本报告基于 GitHub 公开数据自动分析生成，聚焦于代码活动、问题趋势与社区互动，旨在客观反映项目健康度与开发重心。所有链接均指向对应 GitHub 页面。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-11)

## 1. 今日速览
过去24小时，Zeroclaw 项目保持**高度活跃**：共处理 41 条 Issues（22 条新开/活跃，19 条关闭）和 50 条 PRs（31 条待合并，19 条已合并/关闭）。项目正处于密集的 v0.8.x 版本迭代期，核心团队与社区围绕**稳定性修复**、**架构重构**及**新功能集成**展开大量工作。合并率约 38%，显示代码审核严格；同时，多个高严重度（S0/S1）Bug 的修复 PR 已进入待合并队列，项目健康度处于积极修复与演进状态。

## 2. 版本发布
*今日无新版本发布。* 最新稳定版为 v0.7.5（提及于 #6760）。当前开发重点为 v0.8.0（稳定版）及 v0.8.1/0.8.2 功能迭代，相关里程碑跟踪见 #7112、#6970、#7314。

## 3. 项目进展
### 今日已合并/关闭的重要 PR
*   **#7444** (`CLOSED`): 修复 zerocode Dashboard 状态显示问题，区分加载、错误与持久化会话状态，提升 UI 可靠性。
*   **#7365** (`CLOSED`): 重构文档系统（mdBook），从源代码自动派生配置与提供商表面，确保文档准确性。
*   **#7466** (`CLOSED`): 修复 CI 合并批次导致的 master 分支编译失败，恢复跨平台构建稳定性。

### 关键待合并 PR（推进中）
*   **#7464** (`OPEN`): 修复 MCP 配置，使默认配置的服务器立即可用，并调整默认加载策略。
*   **#7459** (`OPEN`): 修复网关在 WebSocket 聊天中不尊重代理内存配置的问题。
*   **#7457** (`OPEN`): 修复网关对未知 API 路径的返回，使其返回 JSON 404 而非 HTML。
*   **#7430** (`OPEN`): 重大重构：用类型化的 `DaemonRegistry` 替换守护进程回调，提升运行时启动 wiring 的可维护性。
*   **#7454** (`OPEN`): 新增 `office-tools` WASM 插件，支持从 Office 文档提取文本。
*   **#7442** (`OPEN`): 修复并行 SubAgents 和 Delegates 的返回可靠性，解除重复调用守卫的误判。

## 4. 社区热点
讨论最活跃的 Issues（按评论数）：
*   **#4710** (20 评论): [Feature] 设计新 LOGO。**诉求**：项目品牌形象现代化，吸引更广泛用户与贡献者。
*   **#3642** (12 评论): [Feature] 提供“完整”Docker 镜像（启用所有特性）。**诉求**：降低非技术用户使用门槛，提升易用性。
*   **#6034** (6 评论): [Bug] 单轮/多轮对话丢失用户消息（S1 严重）。**诉求**：保障核心对话功能的可靠性，避免数据丢失。

## 5. Bug 与稳定性
按严重程度排列，标注是否已有修复 PR：
*   **S0 - 数据丢失/安全风险**:
    *   **#4627** (`CLOSED`, 状态 `in-progress`): `file_write` 工具写入文件在主机文件系统不可见。**修复**：PR 未直接显示，可能涉及容器/沙箱路径映射修复。
*   **S1 - 工作流阻塞**:
    *   **#6034** (`OPEN`): 对话丢失 user message。**修复**：待诊断，可能与提供商或运行时缓冲有关。
    *   **#6721** (`OPEN`): `tool_search` 不在默认批准列表，导致延迟加载+Webhook 静默挂起 120 秒后自动拒绝。**修复**：PR #7464 可能通过调整 MCP 默认策略间接缓解。
*   **S2 - 降级行为**:
    *   **#6309** (`CLOSED`, 状态 `blocked`): Agent 运行 `model_routing_config` 会覆盖 `schema_version = 2` 设置。**修复**：待作者行动。
    *   **#6958** (`CLOSED`): Matrix 频道：会话键基于 `event_id` 导致消息间失忆。**修复**：PR 未直接显示，需修改会话键逻辑。
    *   **#7436** (`OPEN`): `image_info` 工具输出在常见情况下（相对路径）无法送达多模态模型。**修复**：待开发。

## 6. 功能请求与路线图信号
*   **架构演进方向**:
    *   **#6165** (`OPEN`, RFC): 倾向于通过外部集成实现更轻量的 ZeroClaw 核心，移除内置专用集成代码（如 gws-cli, jira）。
    *   **#7415** (`OPEN`, RFC): 统一三个代理回合引擎（`run_tool_call_loop` + `turn_streamed` + `Agent::turn`），解决保护机制不一致问题。
    *   **#7420** (`OPEN`, RFC): 设计原生动态库插件系统，解决单体架构痛点。
*   **具体功能增强**:
    *   **#7431** (`OPEN`): 预回合路由意图提取，在 LLM 调用前自动设置 `send_via`。
    *   **#7467**, **#7468** (`OPEN`): 改进 zerocode TUI 字符串编辑与别名重命名体验。
*   **路线图对齐**:
    *   PR **#7454** 实现 WASM 插件程序（v0.8.2 方向）。
    *   PR **#7430** 实现守护进程注册表，为插件化打下基础。

## 7. 用户反馈摘要
*   **核心痛点**:
    1.  **可靠性**: 对话消息丢失（#6034）、文件写入失效（#4627）、Matrix 会话记忆（#6958）等 S1/S2 问题严重影响生产使用。
    2.  **配置复杂性**: Docker 镜像特性不全（#3642）、MCP 默认配置不可用（#7464）、提供商配置编辑后会话不刷新（#7433）增加了部署与维护成本。
    3.  **工具链一致性**: `image_info` 路径处理（#7436）、`tool_search` 批准策略（#6721）导致工具调用失败。
*   **满意点**: 社区响应迅速，大量修复 PR 已提交；详细的 RFC 流程（如 #7415）显示项目决策透明；WASM 插件（#7454）等创新方向获得积极反馈。

## 8. 待处理积压
以下为创建时间较早（>3周）、标签为高优先级（`priority:p1`）或高严重度（`risk: high`）且**尚未关闭**的关键 Issue，需维护者重点关注：
*   **#6034** (创建于 2026-04-23): S1 对话丢失 Bug，评论 6 条，**无公开修复 PR**。
*   **#6721** (创建于 2026-05-16): S1 tool_search 挂起问题，评论 5 条，**修复可能依赖 #7464**。
*   **#6309** (创建于 2026-05-03): S2 配置冲突 Bug，状态 `blocked`，需作者行动。
*   **#3642** (创建于 2026-03-15): 高需求 Docker 镜像特性，评论 12 条，**无合并 PR**。
*   **#4710** (创建于 2026-03-25): 品牌 LOGO 设计，评论 20 条，**长期开放**，影响项目形象。

---
*报告生成于 2026-06-11，基于 GitHub API 数据。所有链接均为 GitHub  Issues/PR 页面。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-11)

## 1. 今日速览
PicoClaw 项目今日保持**高度活跃**，开发与社区反馈节奏紧密。核心开发侧，14个PR中有6个成功合并，集中修复了跨平台兼容性、安全防护与API稳定性等关键问题，项目健康度稳步提升。社区侧，新开了4个Issues，涉及异步任务消息重复、移动端Safari兼容性及新协议集成需求，反映了用户对生产环境稳定性和功能扩展的持续关注。 nightly 版本 `v0.2.9-nightly.20260610` 的发布也表明主版本分支 `v0.2.9` 的功能迭代与测试正在快速推进。

## 2. 版本发布
- **新版本**: `v0.2.9-nightly.20260610.b9a8fad6`
  - **性质**: 自动生成的夜间构建版本，基于最新 `main` 分支。
  - **稳定性提示**: 该版本**可能不稳定**，建议仅用于测试与预览。
  - **更新概要**: 汇总了近期合并的多个修复，包括 Windows 路径处理、SSRF 防护增强、OpenAI/Claude API 兼容性调整等。完整变更日志见 [对比链接](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)。
  - **迁移注意**: 无明确破坏性变更公告，但作为 nightly 版本，API 或配置可能存在临时性调整，生产环境用户应继续使用稳定的 `v0.2.9` 正式版。

## 3. 项目进展 (已合并/关闭的重要 PR)
今日合并的 PR 主要聚焦于**稳定性修复与安全加固**，为下一正式版本打下基础：
- **跨平台兼容性修复** ([#3089](https://github.com/sipeed/picoclaw/pull/3089)): 修复了 Windows 系统下 `list_dir` 因路径分隔符导致的 `invalid argument` 错误，解决了长期存在的 Issue #2472。
- **安全防护升级** ([#3085](https://github.com/sipeed/picoclaw/pull/3085)): 在 `web_fetch` 工具的 SSRF 防护中，新增了对 RFC 2544 基准测试地址段 `198.18.0.0/15` 的拦截，堵住了此前报告的安全绕过漏洞 (Issue #3077)。
- **API 兼容性与健壮性**:
  - ([#2951](https://github.com/sipeed/picoclaw/pull/2951)): 将 `web_search` 工具类型调整为 `function`，修复了与部分 OpenAI API 端点的兼容性问题。
  - ([#2948](https://github.com/sipeed/picoclaw/pull/2948)): 针对 `claude-opus-4-7` 模型系列，跳过已弃用的 `temperature` 参数，避免请求失败。
  - ([#3043](https://github.com/sipeed/picoclaw/pull/3043)): 改进错误处理，修复了 `strconv.Atoi` 和 `json.Unmarshal` 错误被静默丢弃的问题。
- **开发者体验** ([#2945](https://github.com/sipeed/picoclaw/pull/2945)): 合并了独立的调试追踪工具 `picoclaw-tracer`，为开发者提供了实时查看 LLM 调用链的 Web UI，极大提升了调试效率。

## 4. 社区热点
- **最活跃 Issue**: **[#2472](https://github.com/sipeed/picoclaw/issues/2472)** (Windows 路径问题) - 尽管对应 PR 已合并，但该 Issue 因历史影响广泛且讨论周期长（创建于4月），仍保持较高关注度（5条评论，1个👍）。其背后诉求是**确保核心文件工具在主流操作系统上的无差别体验**。
- **最新高优先级 Issue**: **[#3094](https://github.com/sipeed/picoclaw/issues/3094)** (异步子代理消息重复) - 新开即被标记为 `bug`，描述了 `spawn` 工具导致用户收到重复推送的明确问题。这触及了**多智能体协作场景下的消息路由与去重**核心逻辑，可能影响复杂工作流的用户体验，预计会引发较多技术讨论。
- **高关注 PR**: **[#2937](https://github.com/sipeed/picoclaw/pull/2937)** (Agent Collaboration Bus) - 尽管标记为 `stale`，但作为“智能体协作总线”这一重大架构特性，其设计（邮箱、线程、权限）是项目路线图的关键部分，任何更新都牵动社区对多智能体能力的期待。

## 5. Bug 与稳定性
| 严重程度 | 问题描述 | 关联 Issue | 状态/修复 PR |
| :--- | :--- | :--- | :--- |
| **高** | 异步子代理任务完成后，用户收到重复消息（直接推送+主代理汇总） | [#3094](https://github.com/sipeed/picoclaw/issues/3094) | **新报告**，暂无修复 PR |
| **中** | PicoClaw 面板在 iOS < 16.4 的 Safari 上无法正常工作 | [#3090](https://github.com/sipeed/picoclaw/issues/3090) | **新报告**，暂无修复 PR |
| **低** | Windows 下 `list_dir` 因路径分隔符返回错误 | [#2472](https://github.com/sipeed/picoclaw/issues/2472) | **已修复** (PR [#3089](https://github.com/sipeed/picoclaw/pull/3089) 已合并) |
| **安全** | `web_fetch` 工具可通过 `198.18.0.0/15` 绕过 SSRF 限制 | [#3077](https://github.com/sipeed/picoclaw/issues/3077) | **已修复** (PR [#3085](https://github.com/sipeed/picoclaw/pull/3085) 已合并) |

## 6. 功能请求与路线图信号
- **新协议集成需求**: **[#3093](https://github.com/sipeed/picoclaw/issues/3093)** 明确请求支持 **SimpleX 或 Tox** 等隐私优先的通信协议。结合已存在的、旨在实现“智能体协作”的 PR [#2937](https://github.com/sipeed/picoclaw/pull/2937)，这表明社区对**去中心化、隐私保护的智能体间通信**有潜在需求。该功能若实现，可能成为 `v0.3.0` 或更高版本的重要特性。
- **配置持久化改进**: PR [#3067](https://github.com/sipeed/picoclaw/pull/3067) 修复了“会话范围”设置无法保存的问题，属于用户体验层面的重要完善，预计会随下一版本发布。

## 7. 用户反馈摘要
从有限的 Issue 描述中可提炼出以下核心反馈：
- **稳定性与兼容性是基石**: Windows 路径问题 (已修复) 和 iOS Safari 兼容性问题 表明，**跨平台一致性**是用户部署时的关键考量，任何平台特定的“坑”都会直接影响可用性。
- **安全不容妥协**: SSRF 绕过漏洞的报告与快速修复，体现了社区（尤其是企业用户）对**网络边界安全**的高度敏感。项目需持续审查所有外部交互点。
- **复杂场景的体验待优化**: 异步子代理消息重复问题 指出，在**多智能体、异步任务**的复杂工作流中，基础的消息分发逻辑存在缺陷，导致最终用户体验受损（信息重复、排版混乱）。
- **生态扩展意愿**: SimpleX/Tox 请求 反映了部分用户群体对**特定通信生态**的依赖，项目若想扩大采用面，需考虑协议层的可插拔设计。

## 8. 待处理积压
以下 PR/Issue 因创建时间较早、标签为 `stale` 或涉及重大架构变更，建议维护团队优先评估其状态与合并路线：
- **PR [#2937](https://github.com/sipeed/picoclaw/pull/2937)** (Feat/agent collaboration): 创建于 5月24日，标记为 `stale`。这是**架构级功能**（Agent Collaboration Bus），对项目长期发展至关重要，但可能因设计复杂或测试不足而停滞。需要明确其设计评审与测试计划。
- **PR [#2951](https://github.com/sipeed/picoclaw/pull/2951), [#2948](https://github.com/sipeed/picoclaw/pull/2948)**: 均创建于 5月26日，标记为 `stale`。它们修复的是特定第三方 API 的兼容性问题，影响面相对明确，建议尽快合并以避免用户在使用对应模型时遇到非预期错误。
- **Issue [#2472](https://github.com/sipeed/picoclaw/issues/2472)**: 虽然修复 PR 已合并，但 Issue 本身状态仍为 `OPEN`。建议在下一版本发布后，**关闭此 Issue** 并注明修复版本，以保持 Issue 追踪的整洁。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-11)

## 1. 今日速览
过去24小时，NanoClaw 项目保持**高活跃度**，共处理10个Pull Request（PR），其中6个已成功合并/关闭，4个待审查。Issues 方面仅1条更新，但讨论热度较高。项目核心开发聚焦于**技能化架构深化**、**生产环境稳定性修复**及**安全加固**，社区对多运行时支持的需求持续发酵。整体开发节奏健康，代码贡献与问题响应均较为积极。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日合并/关闭的PR主要推进了以下关键改进：
- **安全加固**：关闭了长期开放的安全PR #3，实现**基于每组命名空间的IPC隔离**，防止容器间权限提升，显著提升多租户安全性。
- **生产稳定性**：合并了 PR #2718，修复了飞书（Feishu）集成中因进程异常退出导致的“僵尸卡片”问题，避免了交互卡片长时间卡在“运行中”状态，提升了生产环境可靠性。
- **开发者体验与文档**：合并了 PR #2721，新增三份核心文档（`customizing.md`、`skills-model.md`、`skill-guidelines.md`），正式确立**基于技能的定制化契约**，为社区贡献提供清晰规范。
- **运维便利性**：合并了 PR #2719，添加了带确认、dry-run 和 OneCLI 清理功能的 `uninstall.sh` 脚本，简化了部署清理流程。

## 4. 社区热点
**最活跃讨论**：
- **Issue #1690**: [Multi-runtime agent SDK abstraction (Claude + Codex + local models)](https://github.com/nanocoai/nanoclaw/issues/1690)
  - **状态**：开放中，创建于2026-04-07，昨日更新，共6条评论，3个👍。
  - **诉求分析**：社区用户提出构建**多运行时抽象层**，允许将不同代理SDK（如Claude、Codex、本地模型）作为模块化技能安装，复用现有频道模式（`/add-telegram`）。这反映了用户对**突破单一运行时限制、增强SDK兼容性**的强烈需求，可能影响未来核心架构演进方向。

## 5. Bug 与稳定性
- **今日新报告Bug**：无新开Issues报告Bug。
- **近期重要修复**：
  - **PR #2718**（已合并）：修复飞书集成中因 `agent-runner` 超时退出导致的交互卡片状态残留问题（严重性：高，影响生产用户体验）。修复已包含在最新代码中。

## 6. 功能请求与路线图信号
- **核心功能请求**：Issue #1690 提出的**多运行时支持**是当前最显著的路标信号，若实现将极大扩展NanoClaw的模型适配能力。
- **待合并功能PR（可能纳入下一版本）**：
  - **PR #2726**：`/add-guardrails` 技能，提供基于正则/关键词的输入输出防护栏（block/flag），增强安全合规性。
  - **PR #2725**：`web-search-plus` 技能，提供多提供商网页搜索与提取能力（无LLM合成，无MCP依赖）。
  - **PR #2727**：容器日志持久化，将代理容器stdout/stderr输出至磁盘，提升可观测性。
  - **PR #2211**：`tool-visibility` 技能，在聊天界面实时预览工具调用（PreToolUse/PostToolUse钩子），改善调试体验。

## 7. 用户反馈摘要
基于活跃Issue #1690的讨论，提炼关键反馈：
- **痛点**：现有架构可能绑定特定运行时，用户希望灵活混用不同厂商的SDK（如Claude用于创意、Codex用于代码、本地模型用于隐私场景）。
- **期望模式**：强烈倾向于**技能化（skill-based）的模块化设计**，类似现有频道（`/add-*`）的安装方式，以降低集成复杂度并避免核心代码冲突。
- **满意点**：项目已建立的技能模型和文档（PR #2721）获得了积极认可，被视为良好的扩展基础。

## 8. 待处理积压
以下开放项时间较长，建议维护者优先关注：
- **Issue #1690**（开放约2个月）：多运行时抽象提案，社区关注度高（6评论，3👍），需评估技术可行性及与技能模型的整合路径。
- **PR #2211**（创建于2026-05-03）：`tool-visibility` 技能，已重构为符合指南的独立技能，但待合并时间较长（约1.5个月），可能影响相关用户体验改进的交付。

---
*报告生成时间：2026-06-11*  
*数据来源：NanoClaw GitHub (github.com/nanocoai/nanoclaw) 过去24小时公开数据*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-11)

## 1. 今日速览
过去24小时项目保持**极高活跃度**，Issues 与 PR 更新量均为 50 条，社区参与度健康。核心焦点集中于 **Reborn WebUI v2 的本地测试体验修复与功能完善**，大量 UX 问题与集成故障被报告并快速响应。同时，多个大型功能 PR 进入待合并状态，涉及扩展系统、自动化面板与 LLM 提供商配置等关键架构，项目正稳步向生产就绪阶段推进。

## 2. 版本发布
*无新版本发布。*  
当前 crates.io 最新版本仍为 `0.24.0`，与 GitHub 标签 `v0.27.0` (4月29日) 存在同步缺口，下游依赖被 pinned 至旧版本，影响安全更新与功能采用（详见 Issues #3259）。

## 3. 项目进展
今日合并/关闭的重要 PR 主要修复关键集成问题并提升开发体验：
- **#4743** (已关闭): 修复 NEAR/Anthropic 兼容接口的上下文溢出分类，提升错误处理准确性。
- **#4742** (已关闭): 修复手动令牌运行时凭据选择流程，完善认证机制。
- **#4730** (已关闭): 完成个人范围触发事件的 Slack DM 端到端交付，增强自动化可达性。
- **#4739** (已关闭): 在 QA Railway 部署中启用 Slack 集成，支持测试环境验证。
- **#4717** (已关闭): 恢复 WebUI v2 的“始终批准” affordance，改进审批交互。
- **#4652** (已关闭): 新增 `run-reborn-webui.sh` 启动脚本并更新文档，显著降低本地测试门槛。

## 4. 社区热点
**最活跃 Issues** (按评论数):
- **#3259** (14 评论): [crates.io 发布不同步](https://github.com/nearai/ironclaw/issues/3259) – 社区持续关注版本发布流程的可靠性，下游用户受困于安全更新滞后。
- **#3036** (6 评论): [配置即代码 Epic](https://github.com/nearai/ironclaw/issues/3036) – 高优先级架构需求，旨在统一声明式配置，解决当前多配置文件碎片化问题。
- **#4703** (2 评论): [NEAR AI 提供商保存失败](https://github.com/nearai/ironclaw/issues/4703) – 新开 Issue，反映核心集成流程存在阻断性 Bug。

**关键待合并 PRs** (大型功能):
- **#4559**: [Trace Commons 邀请链接 onboarding](https://github.com/nearai/ironclaw/pull/4559) – 简化追踪服务接入，影响外部生态集成。
- **#4745**: [自动化面板后端重构](https://github.com/nearai/ironclaw/pull/4745) – 优化触发器读取性能与架构解耦。
- **#4744**: [扩展激活授权门控](https://github.com/nearai/ironclaw/pull/4744) – 增强扩展系统安全性。
- **#4738**: [WebUI v2 附件上传 UX](https://github.com/nearai/ironclaw/pull/4738) – 补齐核心交互功能。
- **#4731**: [LLM 提供商配置端到端修复](https://github.com/nearai/ironclaw/pull/4731) – 解决多个相关 Issue（如 #4673）。

**诉求分析**: 社区当前诉求分层明显：**底层**要求发布流程与配置管理规范化（#3259, #3036）；**体验层**聚焦 WebUI v2 的本地可用性与交互细节（大量新开 Issue）；**集成层**推动 NEAR AI、Slack、MCP 等外部服务的无缝对接（PRs #4742, #4730, #4735）。

## 5. Bug 与稳定性
**高严重度** (阻塞核心流程):
- **#4703** & **#4673**: NEAR AI 提供商“测试连接”成功但无法保存，导致集成完全不可用。**相关修复 PR #4731 已待合并**。
- **#4704**: `builtin.http` 工具在 `invalid_input` 错误后陷入重复批准循环，缺乏错误详情。需改进错误处理与用户反馈。
- **#4683**: 无效模型配置仅显示“执行驱动不可用”的模糊错误，不利于调试。需增强诊断信息。

**中严重度** (影响用户体验):
- **#4724**: 新对话草稿在离开页面时丢失。
- **#4725**: 生成过程中 Composer 状态不一致（输入禁用但悬停效果仍显交互性）。
- **#4722**: 对话消息缺失用户/助手身份标识（头像/名称）。
- **#4733**: 响应中的外部链接在当前标签页打开，中断聊天流程。
- **#4708**: 代码块缺少语法高亮。
- **#4707**: 对话页面字体过小。

**低严重度**:
- **#4734** (已关闭): WebUI 代理头像显示“IC”而非品牌图标，已修复。

## 6. 功能请求与路线图信号
- **配置即代码** (#3036) 是最高优先级 Epic，相关实现如 **Trace Commons 自动化 onboarding** (#4559) 和 **MCP 服务器程序化配置** (#4735) 正在推进，预示下一版本将强化声明式运维能力。
- **WebUI v2 功能补齐** 是近期重点：附件上传 (#4738)、E2E 测试覆盖 (#4632)、有效配置 API (#4607, #4736) 均有 PR 在研，表明团队致力于达到生产就绪质量。
- **自动化与扩展**：个人触发事件 Slack 交付 (#4730) 与扩展授权模型 (#4744) 显示产品向“可编排自动化平台”演进的信号。
- **LLM 提供商管理** (#4731) 的全面修复表明提供商配置体验将成为核心用户旅程的一部分。

## 7. 用户反馈摘要
**核心痛点**:
- **本地开发体验碎片化**: 多个 Issue (#4692, #4683, #4741) 反映 `.env` 配置、密钥管理、错误提示不透明，导致本地启动与调试困难。
- **WebUI v2 交互不一致**: 从草稿保存、链接行为到身份显示，细节体验尚未打磨完成，影响专业用户信任度。
- **集成流程断裂**: NEAR AI (#4703) 和 OAuth 授权恢复 (#4706) 存在阻断点，削弱了“开箱即用”承诺。

**积极信号**:
- 社区（包括新贡献者 @kirikov）正积极提交 PR 扩展功能（如 MCP 配置），显示生态开始参与核心开发。
- 核心团队响应迅速，大量 Issue 在报告后 24 小时内获得分类或关联 PR，维护节奏健康。

## 8. 待处理积压
需维护者重点关注以下长期开放且讨论密集的 Issue：
- **#3259** (创建于 2026-05-05, 14 评论): [crates.io 发布不同步](https://github.com/nearai/ironclaw/issues/3259) – 持续 5 周未解决，影响所有下游用户的安全与功能更新，需优先协调发布流程。
- **#3036** (创建于 2026-04-28, 6 评论): [配置即代码 Epic](https://github.com/nearai/ironclaw/issues/3036) – 作为 Epic  tracker，需拆解为可执行子任务并分配里程碑，避免战略方向悬置。

---
**报告生成时间**: 2026-06-11  
**数据来源**: IronClaw GitHub (nearai/ironclaw) 过去 24 小时活动  
**分析师备注**: 项目处于功能密集开发期，社区反馈质量高，但需加速发布流程与配置管理重构以提升用户信任。建议为 #3259 设立临时发布协调机制。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-11)

## 1. 今日速览
项目开发活动高度活跃，过去24小时内共有22个Pull Request（PR）获得更新，其中20个已合并或关闭，仅2个待合并。同时，项目发布了新版本 `LobsterAI 2026.6.10`。然而，社区互动方面表现沉寂，无新开或活跃的Issues记录。整体评估：项目处于快速迭代和交付状态，但社区讨论与用户反馈渠道需加强。

## 2. 版本发布
**新版本：** [LobsterAI 2026.6.10](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.10) (发布于 2026-06-10)
*   **核心新功能：**
    *   **数据备份与迁移：** 用户可进行用户数据的手动备份与恢复（PR #2125）。
    *   **本地回调登录：** 新增本地回调登录流程（PR #2122）。
    *   **任务完成通知：** 优化了Cowork会话的任务完成通知机制，修复了主窗口关闭后通知恢复等问题（PR #2134）。
*   **改进与修复：**
    *   UI层面： refined markdown渲染、代码块样式、模型选择器（PR #2139）。
    *   设置面板：  surfaced OpenClaw相关设置（根据Release描述片段）。
    *   稳定性： 包含多项针对Windows平台、Cowork会话及构建流程的修复。
*   **破坏性变更：** 本次Release说明中未明确提及破坏性变更。
*   **迁移注意事项：** 强烈建议用户在升级前阅读完整的Release说明，特别是关于**数据备份与迁移**功能的部分，以确保现有数据安全并了解新备份文件的管理方式。

## 3. 项目进展
今日多个关键PR被合并，推动项目在用户体验、平台稳定性和基础设施方面取得进展：
*   **版本发布整合 (PR #2140):** 将数据备份、本地登录、任务通知三大功能及多项修复整合至正式版本，是本次迭代的核心交付物。
*   **Windows平台稳定性修复 (PR #2141, PR #2142):**
    *   `#2141`: 修复了Windows应用内更新机制。
    *   `#2142`: 重构了NSIS安装程序的初始化逻辑，并重新设计了引擎加载页面，提升Windows用户安装与启动体验。
*   **数据迁移健壮性增强 (PR #2138):** 修复了数据恢复流程，确保在还原时能正确保留目标备份、Cowork会话、运行时及MCP包数据，防止数据丢失。
*   **UI/UX精细化 (PR #2139):** 全面优化了Markdown渲染、代码块语法高亮、模型选择器等界面元素，提升阅读与操作体验。

## 4. 社区热点
**结论：** 过去24小时内，**无**高活跃度讨论。所有展示的PR评论数均为`undefined`（可能为0或无公开评论），且无新开Issues。这表明项目当前的协作模式以核心开发者为主，社区驱动的讨论较少。

## 5. Bug 与稳定性
今日报告的Bug修复主要集中于平台特定问题和数据流程：
*   **高严重度（数据安全/核心流程）：**
    *   **数据恢复数据丢失风险 (PR #2138):** 修复了恢复操作可能意外覆盖目标数据的问题。**状态：已修复并合并。**
*   **中严重度（平台功能）：**
    *   **Windows更新失败 (PR #2141):** 修复应用内更新机制。**状态：已修复并合并。**
    *   **NSIS安装程序初始化问题 (PR #2142):** 修复可能导致安装失败或引擎加载异常的问题。**状态：已修复并合并。**
*   **低严重度（UI/通知）：**
    *   任务通知在特定场景（主窗口关闭）下无法恢复（PR #2134）。**状态：已修复并合并。**
*   **无**新报告的崩溃或回归问题记录。

## 6. 功能请求与路线图信号
*   **无**新的功能请求Issues在今日提出。
*   **路线图信号：** 从近期（非今日）已合并的PR可观察项目重点方向：
    *   **会话管理增强：** 引入基于Token的会话自动裁剪（PR #1499），以应对长上下文窗口限制。
    *   **Agent配置体验：** 为引导文件提供富文本Markdown编辑器（PR #1503）。
    *   **通知系统完善：** 为定时任务增加本地通知渠道并修复编辑同步问题（PR #1489, #1490）。
    *   **系统策略强化：** 确保禁用的技能在系统提示词中被强制禁用（PR #1485）。
    *   这些功能均已在代码库中实现，表明项目在**会话管理、Agent可配置性、通知渠道**及**策略执行可靠性**方面有持续投入。

## 7. 用户反馈摘要
*   **无**直接的用户反馈Issues或评论在今日产生。
*   **历史痛点回顾（已修复）：** 从已关闭的PR描述中可反推部分历史用户痛点：
    *   技能禁用后仍生效（PR #1485, #1501）。
    *   定时任务通知渠道配置不生效或显示错误（PR #1489, #1490）。
    *   长对话导致“输入过长”错误（PR #1499）。
    *   编辑Agent配置后当前会话不生效（PR #1505）。
    *   这些痛点均已被针对性修复，反映了团队对核心用户体验问题的响应速度。

## 8. 待处理积压
*   **关键依赖更新待合并 (PR #1277):** 由Dependabot机器人创建，旨在将`electron`和`electron-builder`分别从40.2.1/??升级至42.3.3和对应版本。该PR创建于**2026-04-02**，至今已超过2个月仍处于`OPEN`状态。
    *   **重要性：** 高。升级Electron可带来性能、安全及新API支持，是保持项目技术栈现代性的关键。
    *   **建议：** 维护者应优先评估并合并此PR，同时注意测试升级后可能存在的兼容性问题。

---
**报告生成说明：** 本报告基于 `2026-06-10 至 2026-06-11` 过去24小时的公开GitHub数据（Issues、Pull Requests、Releases）。所有结论均源自所提供数据，未引入外部信息。链接均为对应PR或Release页面。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

### Moltis 项目动态日报 (2026-06-11)

**项目健康度评估：** 项目当前处于**极低活跃度**状态，过去24小时无任何代码合并、版本发布或社区实质性互动，仅新增一条低优先级问题报告。整体开发与维护节奏缓慢，需关注社区参与度下降风险。

---

#### 1. 今日速览
- Moltis 项目在过去24小时内**活跃度极低**，仅新增1条 Issues（无关闭），无任何 Pull Requests 活动或新版本发布。
- 唯一动态为一条关于 `coqui` 服务提供者配置的 minor 级别 Bug 报告，尚未引发社区讨论或维护者响应。
- 项目整体处于**静默维护期**，功能迭代与问题响应均未取得可见进展，社区参与度亟待提升。

#### 2. 版本发布
*（无新版本发布）*

#### 3. 项目进展
*（过去24小时无 PR 合并或关闭，项目代码库与功能推进无更新）*

#### 4. 社区热点
*（仅1条活跃 Issue，无评论/反应，暂未形成热点讨论）*
- **#1114 [bug] provider 'coqui' not configured (minor)**  
  链接：https://github.com/moltis-org/moltis/issues/1114  
  分析：该 Issue 是今日唯一动态，用户报告在使用 `coqui` 语音提供者时遇到配置未生效问题。诉求集中于**配置流程的可靠性**，可能反映文档缺失、环境检查不充分或依赖初始化逻辑存在缺陷。因无评论，暂无法判断是否为普遍问题。

#### 5. Bug 与稳定性
- **#1114 [bug] provider 'coqui' not configured (minor)**  
  严重程度：**Minor**（低）  
  状态：新开，**无关联 Fix PR**  
  影响：可能导致依赖 `coqui` 的语音功能完全不可用，但限于特定提供者配置场景。

#### 6. 功能请求与路线图信号
*（今日无新增功能请求。现有 Issue 为 Bug 报告，未提出新功能方向，对路线图无直接信号。）*

#### 7. 用户反馈摘要
- **核心痛点**：用户在使用特定第三方服务（`coqui`）时遭遇配置失败，暗示**服务集成层的配置引导或错误提示可能不足**。
- **使用场景**：涉及多提供者（multi-provider）架构下的语音功能部署，用户需手动配置外部服务。
- **不满意点**：用户未在 Issue 中提供“会话上下文”（如配置步骤、日志），可能因问题复现门槛高或文档指引不清，**增加调试成本**。
- **满意点**：用户已主动搜索历史 Issues 并确认使用最新版本，体现一定社区协作意识。

#### 8. 待处理积压
*（基于提供的数据，无法识别长期未响应 Issue/PR。建议维护者定期审查以下通用积压类别：）*
- **长期未回复的 Bug 报告**（尤其是高严重度但无维护者响应的 Issue）。
- **过期或冲突的 PR**（依赖项更新、文档改进等易被忽略的贡献）。
- **版本兼容性问题**（如与最新依赖库的集成问题）。

---
**数据说明**：本报告严格基于提供的 GitHub 数据（截至 2026-06-11 24小时窗口），未引入外部信息。项目健康度结论基于活动频率、社区互动及问题响应速度等客观指标。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-06-11)

## 1. 今日速览
过去24小时，CoPaw 项目保持高度活跃，共处理 37 条 Issues（19 条新开/活跃，18 条关闭）和 50 条 PRs（20 条待合并，30 条已合并/关闭），并发布了 2 个新版本（v1.1.11 及 beta.3）。社区讨论聚焦于核心稳定性（如微信推送、定时任务）、版本迁移（AgentScope 2.0）以及新功能探索（视觉模型回退、上下文压缩），项目整体处于快速迭代与问题修复并行的阶段。

## 2. 版本发布
### v1.1.11 (稳定版)
- **新增功能**：
  - **Free Model OAuth**：支持一键 OAuth 认证的免费模型配置（[PR #5049](https://github.com/agentscope-ai/QwenPaw/pull/5049)）
  - **Xiaomi MiMo Provider**：内置小米 MiMo Token Plan 模型提供商（[PR #4722](https://github.com/agentscope-ai/QwenPaw/pull/4722)）
- **破坏性变更/迁移**：无明确记录，但建议用户查阅完整 Release Notes 确认。
- **注意事项**：本次发布同步关闭了多个历史 Bug（如微信推送、配置丢失），建议升级以获得稳定体验。

### v1.1.11-beta.3 (测试版)
- **改进**：
  - CI 流程优化：移除冗余的 channel-tests 工作流（[PR #5056](https://github.com/agentscope-ai/QwenPaw/pull/5056)）
  - 技能系统增强：改进 `make-skill` 流程以支持自进化技能创建（[PR #4857](https://github.com/agentscope-ai/QwenPaw/pull/4857)）
- **状态**：测试版，适用于尝鲜用户，可能包含未完全验证的功能。

## 3. 项目进展
今日合并/关闭的重要 PR 体现了项目在**发布流程、构建稳定性、安全增强和错误处理**方面的推进：
- **发布自动化**：[PR #5080](https://github.com/agentscope-ai/QwenPaw/pull/5080) 完成 v1.1.11 版本发布流程。
- **构建与打包修复**：
  - [PR #5084](https://github.com/agentscope-ai/QwenPaw/pull/5084) 修复 Windows 打包时 `discord.py` 的编译检查问题。
  - [PR #5083](https://github.com/agentscope-ai/QwenPaw/pull/5083) 和 [PR #5082](https://github.com/agentscope-ai/QwenPaw/pull/5082) 解决 Windows CI 的 SSL 证书错误（通过 `certifi` 和限制 `aiohttp` 版本）。
- **安全与用户体验**：
  - [PR #5081](https://github.com/agentscope-ai/QwenPaw/pull/5081) 允许在文件守卫中预览工作区外的文件（安全考量已标注）。
  - [PR #5079](https://github.com/agentscope-ai/QwenPaw/pull/5079) 改进错误消息，将原始 API 错误原因直接展示给用户，提升调试效率。
- **架构演进**：[PR #5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) 引入 **Runtime 2.0** 模块化架构和 `ToolCoordinator`，为工具调用生命周期控制奠定基础（首次贡献者）。

## 4. 社区热点
今日讨论最活跃的议题集中在**关键功能缺陷、重大升级迁移和测试覆盖**：
- **最高评论 Issue**：[#4342](https://github.com/agentscope-ai/QwenPaw/issues/4342)（11 评论）：关于 `local_models`、`providers`、`tunnel`、`utils` 模块单元测试覆盖率的里程碑任务，反映社区对代码质量和可维护性的重视。
- **高热度 Issue**：
  - **[Breaking Change] [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)**（8 评论，2 👍）：迁移后端从 AgentScope 1.x 到 2.0 的规划。这是影响所有开发者和用户的核心架构变更，讨论集中在兼容性、API 调整和迁移路径上。
  - **[Bug] [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878)**（7 评论）：微信频道定时任务结果无法推送。根因已定位为 `to_handle_from_target` 逻辑问题，是影响生产环境使用的严重缺陷。
- **高热度 PR**：
  - **[first-time-contributor] [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)**：添加 DataPaw 数据分析插件（含 12 个 BI 技能），展示社区生态扩展能力。
  - **[first-time-contributor, Security] [#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067)**：引入 **Agent OS Driver**，统一抽象 MCP/A2A/ACP 等外部能力，是架构层面的重要探索。

## 5. Bug 与稳定性
今日报告及处理的 Bug 按严重程度排列：
1.  **严重（功能阻塞）**：
    - **[Bug] [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)**（5 评论）：Agent 生成的定时任务无法自动触发，且不支持手动编辑。**待修复**，影响核心自动化功能。
    - **[Bug] [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)**（5 评论）：v1.1.9/1.1.10 使用本地 vLLM 部署的千问 3.6-27B 模型时，对话无响应。**已关闭**，推测在 v1.1.11 中修复。
    - **[Bug] [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878)**（7 评论）：微信频道定时任务结果推送失败。**已关闭**，根因已定位。
2.  **高（体验受损）**：
    - **[Bug] [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666)**（7 评论）：新建会话后模型配置页面丢失且无法加载。**已关闭**，配置持久化问题。
    - **[Bug] [#5052](https://github.com/agentscope-ai/QwenPaw/issues/5052)**（3 评论）：工具调用若干次后报 `got an unexpected keyword argument 'arguments'`。**待修复**，可能与 OpenAI 客户端版本或工具调用协议有关。
    - **[Bug] [#5031](https://github.com/agentscope-ai/QwenPaw/pull/5031)**（3 评论）：Console 中斜杠技能调用显示为展开的 SKILL.md 内容，而非执行结果。**待修复**。
3.  **中（体验问题）**：
    - **[Bug] [#4993](https://github.com/agentscope-ai/QwenPaw/issues/4993)**（4 评论）：图片预览放大拖动时抖动。**已关闭**，前端渲染问题。
    - **[Bug] [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834)**（4 评论）：MCP 服务器进程在重启后累积，导致控制台加载缓慢。**已关闭**，进程管理问题。
    - **[Bug] [#4917](https://github.com/agentscope-ai/QwenPaw/issues/4917)**（4 评论）：聊天数据多时切换界面卡顿。**已关闭**，数据加载/渲染优化。

## 6. 功能请求与路线图信号
用户提出的高价值新功能需求，结合现有 PR 判断其纳入近期的可能性：
- **高可能性（已有相关 PR/讨论）**：
  - **独立视觉模型配置（视觉回退）**：[#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992)（4 评论，1 👍）。用户希望为主模型不支持多模态时提供视觉中转方案。与 **Runtime 2.0** 的工具协调层（[PR #5078](https://github.com/agentscope-ai/QwenPaw/pull/5078)）理念契合，可能作为插件或核心配置项实现。
  - **上下文压缩集成**：[#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063)（2 评论）提议集成 Headroom 库，可减少 60-95% token 消耗。属于高性价比优化，社区已有贡献者探索，可能进入下一版本。
  - **钉钉私有部署自定义端点**：[#4887](https://github.com/agentscope-ai/QwenPaw/issues/4887)（2 评论）需求明确，实现简单，易被采纳。
- **中长期探索**：
  - **文件守卫细粒度控制**：[#4356](https://github.com/agentscope-ai/QwenPaw/issues/4356)（2 评论）希望支持只读目录和项目级白名单。与安全模型相关，需谨慎设计。
  - **Windows 系统托盘**：[#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751)（3 评论）桌面端体验增强，但优先级可能低于核心功能。
  - **AgentScope 链路追踪集成**：[#4057](https://github.com/agentscope-ai/QwenPaw/issues/4057)（4 评论）用户希望统一 `agentscope.init()` 入口。这与 **Agent OS Driver**（[PR #5067](https://github.com/agentscope-ai/QwenPaw/pull/5067)）的“统一外部能力抽象”方向部分重叠，可能作为驱动能力之一。

## 7. 用户反馈摘要
从 Issues 描述和评论中提炼的核心痛点：
- **核心功能可靠性**：
  - 微信频道定时任务推送失败（[#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878)），影响企业自动化场景。
  - 本地模型（vLLM 兼容）在特定版本后无响应（[#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)），损害本地部署用户信任。
  - Agent 生成的定时任务无法编辑或触发（[#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)），自动化流程管理不完整。
- **数据与配置持久化**：
  - 新建会话后模型配置丢失（[#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666)），数据模型设计可能存在问题。
  - 桌面版重启后代理选择重置（[PR #5051](https://github.com/agentscope-ai/QwenPaw/pull/5051) 关联 #4733），因端口随机化导致 `localStorage` 失效。
- **用户体验与性能**：
  - 大文件生成（`write_file`）时界面无流式反馈，看似卡死（[#4865](https://github.com/agentscope-ai/QwenPaw/issues/4865)），急需增量渲染。
  - 桌面版多会话切换卡顿（[#5053](https://github.com/agentscope-ai/QwenPaw/issues/5053)），Tauri 客户端性能待优化。
  - 技能斜杠命令在 Console 中展开显示为文档而非执行（[#5031](https://github.com/agentscope-ai/QwenPaw/pull/5031)），交互逻辑混乱。
- **部署与网络**：
  - 局域网访问控制台失败（[#

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [Big Model Radar](https://github.com/zx0828/big_model_radar) 自动生成。*