# OpenClaw 生态日报 2026-06-15

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-06-15 00:40 UTC

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

# OpenClaw 项目动态日报 (2026-06-15)

## 1. 今日速览
OpenClaw 项目在过去24小时保持极高活跃度，共处理500个Issues（新开/活跃438，已关闭62）和500个PRs（待合并455，已合并/关闭45）。项目于今日发布 **v2026.6.8-beta.1**，重点强化了Telegram和WhatsApp渠道的消息交付能力。社区讨论聚焦于消息丢失、认证集成和数据库优先运行时架构的扩展性，P1级稳定性问题集中出现在消息传递、OAuth流程和事件循环阻塞等核心路径。整体项目健康度呈现“高活跃、高压力”状态，核心架构演进与生产环境稳定性之间存在张力。

## 2. 版本发布
**v2026.6.8-beta.1** 已发布，主要更新内容：
- **Telegram交付增强**：支持结构化富文本（表格、列表、可扩展块引用），CLI后端交付保留提示格式，退役原生草稿迁移，强化富媒体边界安全。
- **WhatsApp交付改进**：交付机制更健壮（原文描述截断，但根据上下文推断为类似可靠性提升）。
- **破坏性变更**：无明确破坏性变更公告，但鉴于Telegram原生草稿迁移退役，依赖该功能的用户需验证迁移路径。
- **迁移注意事项**：建议在非生产环境验证Telegram/WhatsApp渠道的富媒体消息渲染；监控消息发送日志以确认无静默丢失。

## 3. 项目进展
过去24小时有45个PR被合并或关闭，关键进展包括：
- **基础设施修复**：
  - #80936 (已关闭): Codex运行时对等性测试通过，为PR #80323提供置信度证明。
  - #91862 (已关闭): 内存插件在嵌入提供商未注册时优雅降级，防止CLI崩溃。
  - #80788 (待合并): 修复Discord gzip响应解析，解决Node v26下HTTP响应未解压导致JSON解析失败。
- **架构演进**：
  - #81164 (待合并): 为上下文引擎插件添加`interceptCompaction`契约，允许替换默认压缩逻辑。
  - #81108 (待合并): 网关发现磁盘压缩检查点，增强会话恢复能力。
- **渠道适配**：
  - #81299 (待合并): LINE渠道将Flex附加内容打包到Reply API槽位，避免Push配额耗尽导致消息丢失。
  - #83600 (待合并): WhatsApp支持列表回复操作，提升交互精确性。

项目正稳步推进数据库优先运行时（SQLite）的生态建设，同时修复多平台集成中的边缘案例。

## 4. 社区热点
讨论最活跃的Issues（按评论数排序）：
- **[#80319](https://github.com/openclaw/openclaw/issues/80319)** (17评论): QA工具默认套件混淆Codex原生工具与OpenClaw动态工具对等性。诉求：明确测试矩阵边界，避免过度泛化问题报告。
- **[#80380](https://github.com/openclaw/openclaw/issues/80380)** (14评论, 已关闭): 更新至Gemini 3.1 Flash-Lite GA版本。已解决，反映用户对模型版本跟进及时性的要求。
- **[#79902](https://github.com/openclaw/openclaw/issues/79902)** (13评论): 在数据库优先运行时上添加面向Companion的SQLite转录/会话接缝。诉求：开放内部状态供高级消费者重建，避免 scraping 不透明blob。
- **[#80520](https://github.com/openclaw/openclaw/issues/80520)** (11评论): Telegram消息静默丢失，网关处理但无sendMessage日志。P1严重，反映消息交付可靠性问题。
- **[#79077](https://github.com/openclaw/openclaw/issues/79077)** (8评论, 已关闭): 支持Telegram bot-to-bot与guest-bot模式（2026-05-07发布）。已关闭，体现对新平台特性的快速响应。

**背后诉求分析**：社区核心关注点有三：(1) **数据可访问性**——希望基于SQLite运行时构建外部工具；(2) **交付可靠性**——Telegram/Discord等渠道的消息丢失问题频发；(3) **平台同步**——紧跟Telegram、Google等上游API变更。

## 5. Bug 与稳定性
### P1 严重问题（生产环境阻塞）
- **[#80520](https://github.com/openclaw/openclaw/issues/80520)**: Telegram消息静默丢失，无sendMessage日志。**状态**：活跃，11评论，可能需与#79077（Telegram新特性）结合排查。
- **[#90886](https://github.com/openclaw/openclaw/issues/90886)** (已关闭): 网关在声明提供商缺少凭证时挂起（v2026.4.8→v2026.4.26回归）。**状态**：已关闭，6评论，修复应已包含在后续版本。
- **[#83425](https://github.com/openclaw/openclaw/issues/83425)**: xAI OAuth重定向URI不匹配。**状态**：活跃，6评论，影响登录流程。
- **[#82662](https://github.com/openclaw/openclaw/issues/82662)**: 隔离cron agentTurn在setup阶段超时，所有回退模型耗尽。**状态**：活跃，6评论，影响自动化任务。
- **[#80040](https://github.com/openclaw/openclaw/issues/80040)**: 级联失败——OAuth失效产生占位回复、提供商切换导致重复工具执行、上下文轮转丢失。**状态**：活跃，6评论，复合型故障。
- **[#83419](https://github.com/openclaw/openclaw/issues/83419)**: 群聊上下文注入产生连续user角色消息，破坏Anthropic API兼容性。**状态**：活跃，5评论，影响多平台群聊。
- **[#79752](https://github.com/openclaw/openclaw/issues/79752)**: Discord HTTP响应gzip未解压（Node v26 macOS）。**状态**：活跃，5评论，**已有PR #80788待合并**。
- **[#79308](https://github.com/openclaw/openclaw/issues/79308)**: Telegram群组回复发送到DM而非群组。**状态**：活跃，5评论，严重用户体验问题。
- **[#78805](https://github

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告 (2026-06-15)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态呈现 **“核心引领、多点爆发、安全与稳定性承压”** 的态势。以 **OpenClaw** 为参照的核心项目群（NanoClaw、IronClaw 等）保持极高迭代速度，持续扩展渠道集成与多模型支持，但伴随规模扩大，**消息交付可靠性、沙箱安全、数据一致性** 成为普遍性生产环境挑战。中型项目（NanoBot、Zeroclaw、CoPaw）聚焦垂直场景优化（移动端、工作流、多语言），但常面临 **PR 合并效率** 与 **社区反馈响应** 的瓶颈。小型项目（LobsterAI、Moltis、PicoClaw）则深耕特定领域（会话协作、边缘设备、嵌入式），活跃度相对较低但技术探索明确。整体社区对 **透明度（数据可访问性）、安全性、跨平台体验** 的诉求日益强烈，驱动架构向更模块化、可观测、多提供商的方向演进。

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (新开/活跃438) | 500 (待合并455) | **v2026.6.8-beta.1** | **高活跃、高压力**：核心功能快速演进，但 P1 稳定性问题（消息丢失、OAuth）集中，生产环境压力大。 |
| **NanoClaw** | 7 | 11 | 无 | **良好、安全紧急**：架构升级（Codex v2、动态提供商）与安全加固并行，3个高危漏洞需立即响应。 |
| **IronClaw** | 31 | 43 | 无 | **极高活跃、安全优先**：大量安全漏洞报告（shell 工具、沙箱逃逸）与 Reborn WebUI 改进同步推进，安全为当前最高优先级。 |
| **Zeroclaw** | 40 | 50 (全部待合并) | 无 | **功能推进、流程瓶颈**：大型功能PR（工作流RFC）待审阅，无合并，需优化评审效率以避免积压。 |
| **CoPaw** | 8 | 7 (全部待合并) | 无 | **较高活跃、合并滞后**：新功能（Windows自动化、多语言）与严重Bug（模型显示、插件安装）并存，PR 合并缓慢影响贡献者积极性。 |
| **NanoBot** | 4 | 32 (16合并) | 无 | **稳步向前**：PR 合并效率高，重点修复移动端体验与集成问题，社区健康度良好。 |
| **PicoClaw** | 5 | 8 (5合并) | **nightly** | **高活跃、参与度低**：代码提交积极，但社区讨论稀少，大量 stale 议题，需加强维护响应。 |
| **LobsterAI** | 1 (新开) | 2 (待合并) | 无 | **基础活跃、积压显著**：Cowork 功能增强PR（搜索、防休眠）已挂起超2个月，本地化Bug待修复。 |
| **Moltis** | 1 (新开) | 2 (待合并) | 无 | **平稳开发**：聚焦部署稳定性与依赖升级，新功能提案（极端边缘优化）处于早期讨论。 |
| TinyClaw / ZeptoClaw / EasyClaw | 0 | 0 | 无 | **停滞** | 无公开活动，项目可能进入维护或终止状态。 |

## 3. OpenClaw 在生态中的定位
**优势**：作为生态的 **“核心参照”与“规模标杆”**，OpenClaw 拥有最广泛的渠道适配（Telegram、WhatsApp、Discord、LINE 等）和最活跃的社区（单日 500 Issues/PRs）。其 **数据库优先运行时（SQLite）** 的架构演进为生态提供了可观测性与状态管理的基础范式。
**技术路线差异**：相比其他项目，OpenClaw 更强调 **“生产环境可靠性”** 与 **“上游平台同步”**（如紧跟 Telegram API 变更）。其挑战在于平衡快速功能迭代与核心路径（消息传递、OAuth）的稳定性，P1 问题频发反映了这种张力。
**社区规模对比**：社区规模远超其他项目（Issues/PRs 数量级领先），但高压力也导致用户抱怨（如消息静默丢失）。NanoClaw 与 IronClaw 在安全与架构深度上形成互补，但社区规模尚不及 OpenClaw。

## 4. 共同关注的技术方向
| 技术方向 | 涉及项目 | 具体诉求 |
| :--- | :--- | :--- |
| **安全加固** | NanoClaw, IronClaw | 文件泄露（`send_file`路径处理）、沙箱逃逸（`write_file`符号链接）、工具批准边界绕过（`shell`工具）、审批流程缺陷。 |
| **消息/交付可靠性** | OpenClaw, NanoBot, IronClaw | Telegram消息静默丢失（无日志）、Markdown代码块破坏、Slack交付门过滤逻辑、群组回复错发DM。 |
| **数据可访问性与透明度** | OpenClaw, NanoClaw, LobsterAI | 开放SQLite转录/会话接缝供外部工具重建、预算错误不再静默丢弃、幽灵会话数据残留清理。 |
| **多平台与本地化** | CoPaw, LobsterAI, OpenClaw | Windows桌面GUI自动化、越南语/中文完整界面支持、Telegram/Discord/Line等多渠道深度集成。 |
| **提供商生态扩展** | NanoClaw, OpenClaw, CoPaw | 动态提供商选择与切换框架、跟进Gemini/Claude等新模型版本、加入kimi-for-coding等白名单。 |
| **部署与运维优化** | Moltis, LobsterAI, PicoClaw | Docker卷挂载冲突修复、定时任务防系统休眠、容器异常退出后数据库日志恢复。 |

## 5. 差异化定位分析
| 维度 | 核心项目 (OpenClaw/NanoClaw/IronClaw) | 中型项目 (NanoBot/Zeroclaw/CoPaw) | 小型/垂直项目 (PicoClaw/LobsterAI/Moltis) |
| :--- | :--- | :--- | :--- |
| **功能侧重** | 全渠道消息交付、多模型提供商、运行时架构 | 移动端WebUI、工作流自动化、多代理协作、国际化 | 嵌入式/边缘设备、会话协作、轻量级部署 |
| **目标用户** | 生产环境部署者、多平台集成需求者 | 移动优先用户、企业工作流用户、多语言用户 | 硬件开发者、团队协作用户、资源受限环境 |
| **技术架构** | 插件化渠道、数据库优先（SQLite）、事件驱动 | 响应式WebUI、可配置工作流引擎、多代理框架 | 资源优化（Rust/Go）、Electron桌面应用、极简核心 |
| **演进阶段** | 快速迭代，稳定性追赶 | 功能扩展与质量巩固并行 | 场景深化与生态探索 |

## 6. 社区热度与成熟度
- **快速迭代阶段（高活跃、高压力）**：**Open

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-15)

## 1. 今日速览
过去24小时，NanoBot 项目维持高活跃度，共处理 **32 个 PR**（16 个合并/关闭，16 个待合并）和 **4 个 Issues**（3 个关闭，1 个新开）。开发重点集中于 **WebUI 移动端体验优化**、**工具参数验证强化** 以及 **多平台集成修复**（Telegram、Anthropic、Feishu）。项目整体稳步向前，同时积极响应用户反馈修复关键 Bug，社区健康度良好。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并的 PR 推动以下关键改进：
- **消息处理质量提升**：PR [#4340](https://github.com/HKUDS/nanobot/pull/4340) 修复 Telegram 消息分割时 Markdown 代码块被破坏的问题，显著改善多平台消息渲染体验。
- **部署灵活性增强**：

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-15)

## 今日速览
Zeroclaw 项目在过去24小时维持高活跃度，共处理40个 Issues（13个新开/活跃，27个关闭）和50个 Pull Requests（全部待合并，无合并/关闭）。社区讨论集中于核心架构改进（如工作流自动化RFC）与关键稳定性修复（如代理模式缺陷），但PR合并流程出现明显瓶颈，大量变更积压待审阅。项目整体功能持续推进，但需关注合并效率以保障开发节奏。

## 项目进展
尽管无PR在今日完成合并，但多个大型功能与修复PR已提交并处于积极评审阶段，涵盖配置系统、渠道集成与Web

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-15)

## 1. 今日速览
过去24小时，PicoClaw 项目保持高活跃度，共处理 5 个 Issues 更新与 8 个 Pull Requests，并发布了一个新的 Nightly 构建版本（v0.2.9-nightly.20260614）。开发重点集中于**稳定性修复**（如代理循环、错误处理）、**代码质量提升**（结构化日志）与**扩展性增强**（第三方频道配置钩子）。同时，社区反馈的多个跨平台兼容性及核心功能 Bug 被持续报告，但部分长期未决的 stale 问题仍需维护团队优先关注。

## 2. 版本发布
- **新版本**: `v0.2.9-nightly.20260614.cf67dd38`
  - **类型**: 自动化 Nightly 构建，基于 `main` 分支最新提交。
  - **稳定性**: 可能存在未发现缺陷，建议仅用于测试。
  - **主要更新**: 包含近期合并的稳定性修复（如 PR #2904）、TTS/文件系统错误处理改进（PR #3124, #3123, #3122）及日志重构（PR #3121）。
  - **完整变更日志**: https://github.com/sipeed/picoclaw/compare/v0.2.9...main
  - **迁移注意**: 无正式版本间的破坏性变更说明，但 Nightly 版本不保证向后兼容。

## 3. 项目进展
今日合并/关闭的 5 个 PR 显著提升了项目的健壮性与可扩展性：
- **核心稳定性** (PR #2904): 修复了 `pkg/agent` 中代理循环重载与 panic 清理的稳定性问题，消除了 detached goroutine 导致的潜在资源泄漏，提升了长期运行可靠性。
- **错误处理强化** (PR #3124, #3123, #3122): 
  - TTS 模块：正确处理 `io.ReadAll` 错误，避免诊断信息丢失。
  - 文件系统：明确忽略目录 `Close()` 错误，并捕获追加写入文件的 `Close()` 错误，防止磁盘/NFS 写入失败被静默忽略。
- **代码质量** (PR #3121): 将 `openai_compat` 包中最后的 `log.Printf` 调用替换为结构化日志 `logger.WarnCF`，统一了日志规范。
- **扩展性基础** (PR #3120): 新增 `RegisterChannelSettings` 钩子，使第三方模块能通过公开的 `channels.RegisterFactory` 注册频道并配置其设置，为生态扩展铺平道路。

## 4. 社区热点
当前无明显高讨论度议题。多数开放 Issues 与 PRs 标记为 `[stale]`，评论数稀少（0-1 条），反映社区参与度较低或问题响应延迟。值得关注的**新功能提案**为：
- **PR #3118**: 为 `picoclaw agent` 添加远程 WebSocket 模式，允许连接外部 Pico 实例。此功能可能满足需要分布式部署的用户需求，但自 6 月 12 日创建后讨论有限。
  - 链接: https://github.com/sipeed/picoclaw/pull/3118

## 5. Bug 与稳定性
今日新报告 4 个 Bug，均未关联修复 PR，按潜在影响评估：
1. **高严重 - 核心功能失效**:
   - **Issue #3041**: `mcp add` 命令错误解析全局标志为位置参数，导致 HTTP/SSE 服务器添加失败且静默重命名 stdio 服务器。影响工具链使用。
     - 链接: https://github.com/sipeed/picoclaw/issues/3041
   - **Issue #3125**: 迁移至 `.security.yml` 后，使用 Brave API 密钥的 `web_search` 工具静默失败（返回“No results”）。影响搜索功能。
     - 链接: https://github.com/sipeed/picoclaw/issues/3125
2. **中严重 - 集成限制**:
   - **Issue #3044**: `allow_from` 配置对标准 Matrix 用户 ID (`@localpart:domain`) 失效，消息被静默拒绝。影响 Matrix 频道访问控制。
     - 链接: https://github.com/sipeed/picoclaw/issues/3044
3. **低严重 - 平台兼容性**:
   - **Issue #3090**: 管理面板在 iOS < 16.4 的 Safari 上无法工作。影响旧版 iOS 用户。
     - 链接: https://github.com/sipeed/picoclaw/issues/3090

## 6. 功能请求与路线图信号
- **第三方频道生态支持** (PR #3120): 通过配置钩子正式支持 out-of-tree 频道，是项目走向模块化、插件化的关键一步，**极有可能纳入下一正式版本**。
- **远程代理模式** (PR #3118): 满足远程部署需求，若社区反馈积极，可能作为实验性功能进入后续版本。
- **Telegram 体验优化** (PR #2975): 将回复机器人消息视为提及，提升群组交互性。该 PR 已开放较久，若维护者关注，可作为小功能更新。

## 7. 用户反馈摘要
从 Issues 摘要提炼的核心痛点：
- **配置灵活性不足**: 用户难以添加自定义 provider（如 OmniRoute，Issue #2978）或正确配置 Matrix 用户过滤（Issue #3044），反映配置文档或系统需更清晰。
- **命令行工具可靠性**: `mcp add` 的解析错误（Issue #3041）表明 CLI 参数处理存在边界情况缺陷。
- **向后兼容性担忧**: `.security.yml` 迁移导致 `web_search` 工具失效（Issue #3125），用户期望关键工具在配置迁移后仍能工作。
- **跨平台覆盖**: iOS 旧版 Safari 兼容性问题（Issue #3090）显示前端需加强浏览器兼容测试。
- **积极信号**: 多个错误处理 PR（如 TTS、文件系统）的合并，表明团队正积极回应“静默失败”类问题，提升可观测性。

## 8. 待处理积压
以下标记为 `[stale]` 的议题长期未实质性推进，建议维护团队评估状态并回复社区：
- **功能请求**: 
  - Issue #2978 (添加 OmniRoute provider) - 已关闭但未解决，用户可能未获有效替代方案。
  - PR #2975 (Telegram 回复视为提及) - 开放近一个月，需合并或明确拒绝。
- **Bug 报告**:
  - Issue #3044 (Matrix allow_from 失效) - 报告于 6 月 7 日，影响集成。
  - Issue #3041 (mcp add 解析错误) - 报告于 6 月 7 日，影响核心工具。
  - Issue #3090 (iOS Safari 兼容) - 报告于 6 月 10 日，影响移动用户体验。
- **新功能 PR**:
  - PR #3118 (远程 WebSocket 模式) - 开放 3 天，需代码审查与反馈。

**建议**: 对 stale 议题进行批量清理（合并、拒绝或请求补充信息），以避免社区贡献者流失。同时，优先修复影响核心功能的 Bug（#3041, #3125）。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-15)

**报告生成时间：** 2026-06-15  
**数据周期：** 过去24小时 (2026-06-14 至 2026-06-15)

---

### 1. 今日速览
项目社区今日保持**极高活跃度**，单日处理了7个Issues和11个PRs。核心进展集中在三大方向：**安全加固**（3个高危安全漏洞报告）、**提供商架构升级**（Codex v2集成与动态提供商选择框架合并）以及**基础设施改进**（容器CLI管理数据化、预算错误处理修复）。值得注意的是，安全团队或研究人员集中提交了多个关键安全 advisories，项目维护者需优先评估与响应。整体开发节奏稳健，多个重要功能分支已合并至主干，项目健康度良好但安全议题需紧急关注。

---

### 2. 版本发布
**无新版本发布。** 最新稳定版本仍为前次发布，今日所有变更均处于开发与审查阶段。

---

### 3. 项目进展 (已合并/关闭的重要PR)
今日有5个PR合并/关闭，推动了关键功能与修复：

*   **PR #2757 (已合并):** `feat(codex): Codex agent-provider payload v2`  
    将Codex集成为完整的代理提供商，基于主机能力 seams 并通过 OneCLI 实现库认证。这是**核心架构演进**，为多提供商战略奠定基础。
    > [链接](https://github.com/nanocoai/nanoclaw/pull/2757)

*   **PR #2756 (已合并):** `feat(providers): operator-driven provider selection, switching, and memory migration`  
    引入显式的、由操作员选择的提供商机制，包含注册表、安装器、认证流程及内存迁移技能。与#2757协同，**正式启用动态提供商切换能力**。
    > [链接](https://github.com/nanocoai/nanoclaw/pull/2756)

*   **PR #2759 (已合并):** `fix(agent-runner): deliver budget/billing error turns instead of dropping them`  
    修复了预算耗尽时LLM返回错误被静默丢弃的问题（对应 Issue #2751），**显著改善用户体验与调试可见性**。
    > [链接](https://github.com/nanocoai/nanoclaw/pull/2759)

*   **PR #2758 (已合并):** `feat(container): data-drive global CLI installs from cli-tools.json`  
    将容器内全局Node CLI安装从硬编码Dockerfile改为数据驱动（`cli-tools.json`），**提升了可维护性与扩展性**。
    > [链接](https://github.com/nanocoai/nanoclaw/pull/2758)

*   **PR #2764 & #2769 (已合并):** 文档修复（CLAUDE.md路径更新、Codex技能文档增强）。  
    **改善了文档准确性**，降低了用户与AI助手的使用摩擦。
    > [链接](https://github.com/nanocoai/nanoclaw/pull/2764) | [链接](https://github.com/nanocoai/nanoclaw/pull/2769)

---

### 4. 社区热点
今日Issues/PRs**评论数均为0或未定义**，未形成讨论线程。但**提交行为本身**凸显了社区关注焦点：

1.  **安全漏洞集中披露**（Issues #2760, #2761, #2762）：由安全研究员 @YLChen-007 提交的三个高危漏洞，涉及文件泄露、网关绕过和审批流程缺陷，**立即引发核心团队高度关注**，是当前最高优先级议题。
2.  **提供商功能演进**（PRs #2757, #2756）：这两个架构级PR的合并代表了项目技术方向的重要里程碑，**社区（尤其是高级用户与集成者）将密切关注其稳定性与后续提供商（如OpenCode）的集成进展**。
3.  **基础体验修复**（Issue #2751 & PR #2759）：预算错误处理问题影响广泛用户，其修复受到期待。

---

### 5. Bug 与稳定性
按严重程度排列，今日报告/修复的问题：

| 严重程度 | 问题描述 | 状态 | 关联链接 |
| :--- | :--- | :--- | :--- |
| **高危 (安全)** | **#2762**: `add_mcp_server` 审批流可隐藏 `args`/`env` 并持久化 | 新开 | [Issue](https://github.com/nanocoai/nanoclaw/issues/2762) |
| **高危 (安全)** | **#2761**: 本地网关通过未认证的回调 webhook 被绕过 | 新开 | [Issue](https://github.com/nanocoai/nanoclaw/issues/2761) |
| **高危 (安全)** | **#2760**: `send_file` 工具因绝对路径处理导致任意本地文件泄露 | 新开 | [Issue](https://github.com/nanocoai/nanoclaw/issues/2760) |
| **中危** | **#2751**: 预算耗尽的LLM轮次被静默丢弃，用户无回复 | **已修复** (PR #2759) | [Issue](https://github.com/nanocoai/nanoclaw/issues/2751) |
| **中危** | **#2768**: Claude提供商未默认启用提示缓存，导致性能损失 | 新开 | [Issue](https://github.com/nanocoai/nanoclaw/issues/2768) |
| **低危** | **#2767**: Telegram适配器升级后，遗留的Markdown sanitizer 已过时 | 新开 | [Issue](https://github.com/nanocoai/nanoclaw/issues/2767) |
| **低危** | **#2763**: 文档(CLAUDE.md)中“关键文件”表引用已移动的文件路径 | **已修复** (PR #2764) | [Issue](https://github.com/nanocoai/nanoclaw/issues/2763) |

---

### 6. 功能请求与路线图信号
*   **明确的功能增强**：Issue #2768 请求为Claude提供商**默认启用提示缓存**，这是一个直接的性能优化，技术方案清晰，**很可能在下一个补丁版本中实现**。
*   **技术债务清理**：Issue #2767 指出需**移除Telegram适配器的遗留代码**，以适配上游新版本（MarkdownV2）。这是必要的维护工作，预计会随适配器升级同步处理。
*   **架构方向确认**：已合并的 PR #2757 (Codex v2) 和 #2756 (动态提供商) **强烈指示了项目的核心路线图**：向多提供商、操作员可控的架构演进。后续工作将围绕稳定现有框架、添加更多提供商（如OpenCode）以及完善迁移工具展开。

---

### 7. 用户反馈摘要
由于Issues评论为空，反馈主要源自问题描述：
*   **痛点**：
    *   **安全隐忧**：三个独立的高危漏洞报告表明用户（或安全审计）对**自修改流程（MCP）、本地网关安全、文件操作边界**存在严重担忧。
    *   **功能缺陷**：预算耗尽时“静默失败”导致**对话中断且无提示**，用户体验极差，影响任务可靠性。
    *   **性能损失**：Claude提示未缓存导致**不必要的重复传输与成本**。
    *   **文档过时**：关键文件路径错误，**增加排查成本**。
*   **满意点**：社区对**架构改进（提供商选择）和基础修复（预算错误）的响应速度**表示认可（通过提交行为推断）。

---

### 8. 待处理积压
以下为当前**开放状态**且**创建时间较早**、需要维护者关注的重要条目：

| 类型 | ID | 标题 | 创建日期 | 状态 | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| PR | #2732 | Harden host + agent-runner from health audit findings | 2026-06-11 | Open | 来自多代理健康审计的加固补丁，已重写至最新主干，**待审查合并**，关乎系统整体安全性。 |
| PR | #2750 | fix: recover stale outbound.db journals after container kills | 2026-06-12 | Open | 修复数据库日志文件在容器异常退出后的恢复问题，**稳定性关键修复**，待合并。 |
| PR | #2770 | fix(codex): deliver harness file events + add `file` to ProviderEvent | 2026-06-14 | Open | 修复Codex图像生成事件传递，**阻塞Codex v2功能完整性**，需尽快合并。 |
| PR | #2766, #2765 | feat(channels/providers): add .format-lint-off | 2026-06-14 | Open | 格式化配置调整，**可能为更大规模代码格式化做准备**，需确认其必要性。 |
| Issue | #2762, #2761, #2760 | 三个高危安全漏洞 | 2026-06-14 | Open | **最高优先级**，需安全团队立即评估、制定修复方案并公开缓解措施。 |

**提醒**：安全相关Issues (#2760-2762) 虽为新开，但严重性极高，应视为“待处理积压”中的**紧急项**。PR #2732 和 #2750 已开放数日，是重要的稳定性修复，建议加速审查。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-15)

**报告周期**：过去24小时 (2026-06-14 至 2026-06-15)  
**数据来源**：GitHub 仓库 `nearai/ironclaw`

---

## 1. 今日速览

项目今日保持**极高活跃度**，社区提交 Issues 31 条、PRs 43 条，显示旺盛的参与度。开发焦点集中于两大方向：**紧急修复高危安全漏洞**（涉及 `shell` 工具批准绕过与 `write_file` 沙箱逃逸）与**持续完善 Reborn WebUI 体验**（附件上传、本地化、可访问性）。尽管无新版本发布，但多个大型功能 PR 正在推进，项目整体向生产就绪稳步迈进。

---

## 2. 版本发布

**无新版本发布**。最近版本为 `0.29.1`（见于 PR #3708），当前开发分支包含大量未合并变更，预计下一版本将包含安全修复与 Reborn 重大改进。

---

## 3. 项目进展

今日合并/关闭的重要 PR 推进了核心功能与稳定性：

- **PR #4738** (已关闭): 实现 Reborn WebChat v2 的附件上传前端 UX，完成 #4644 的前端部分，支持用户通过界面发送文件。
- **PR #4838** (已关闭): 重构门控反馈机制，用“显式拒绝”替代“延迟排队”，提升用户对并发操作的理解与控制。
- **PR #4844** (已关闭): 修复 Slack 交付门过滤逻辑，确保按门类型（认证/审批）正确筛选路由，改善 Slack 集成可靠性。
- **PR #4873** (已关闭): 重定位 Slack 审批→认证→最终回复的端到端测试，确保测试覆盖正确路径，避免“生来即坏”的测试。

这些合并增强了 Reborn 的多模态能力、操作反馈清晰度及第三方集成稳定性。

---

## 4. 社区热点

今日讨论最活跃的议题围绕**安全漏洞报告**与**Reborn WebUI 改进**：

- **安全漏洞系列**：Issues #4861-#4865、#4797 报告了 `shell` 工具与 `write_file` 沙箱的高危绕过漏洞。尽管评论数不多（多为 0-1 条），但因涉及潜在权限提升，获得社区高度关注（👍 反应未显示但优先级极高）。
- **Reborn 功能完善**：PR #4738（附件上传）作为 XL 规模变更，是功能开发的核心热点；Issue #4644（通用附件）及其子任务（如图像支持 PR #4871）持续吸引讨论。
- **架构讨论**：Issue #4875（拆分 `runtime_context` 模块）与 PR #4778（Slack 扩展化）引发关于代码组织与扩展模型的深层技术交流。

**背后诉求**：社区期望在推进新功能的同时，必须优先解决安全基础问题，并确保 Reborn 达到生产环境的 UX 与可靠性标准。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的问题：

### 🔴 严重 (安全漏洞)
| Issue | 标题 | 状态 | 关联 PR |
|-------|------|------|---------|
| [#4865](https://github.com/nearai/ironclaw/issues/4865) | Shell 批准边界绕过 via `env /bin/sh -c` 包装器 | OPEN | 无 |
| [#4864](https://github.com/nearai/ironclaw/issues/4864) | Shell 批准包装器绕过允许高风险命令继承先前自动批准 | OPEN | 无 |
| [#4863](https://github.com/nearai/ironclaw/issues/4863) | 高风险的 shell 批准可通过透明 `env`/shell 包装器绕过 | OPEN | 无 |
| [#4862](https://github.com/nearai/ironclaw/issues/4862) | Shell 批准绕过 via GNU `sort --compress-program` | OPEN | 无 |
| [#4861](https://github.com/nearai/ironclaw/issues/4861) | 批准绕过：换行链式 destructive 命令无需确认 | OPEN | 无 |
| [#4797](https://github.com/nearai/ironclaw/issues/4797) | `write_file` 沙箱通过悬空符号链接逃逸 | OPEN | 无 |

**说明**：均为 6月14日新开，涉及核心工具链安全，需**立即响应**，暂无公开修复 PR。

### 🟠 高 (功能阻塞)
| Issue | 标题 | 状态 | 关联 PR |
|-------|------|------|---------|
| [#4874](https://github.com/nearai/ironclaw/issues/4874) | WebChat v2 在非 localhost HTTP 下发送失败 ("Illegal invocation") | OPEN | 无 |
| [#4870](https://github.com/nearai/ironclaw/issues/4870) | WebUI WebSocket 助手与 v2 认证合约冲突 | OPEN | 无 |
| [#4852](https://github.com/nearai/ironclaw/issues/4852) | Reborn：Shell 命令在审批对话框与活动历史中不可见 | OPEN | 无 |
| [#4853](https://github.com/nearai/ironclaw/issues/4853) | Railway 多租户环境中工具活动完成后消失 | OPEN | 无 |

### 🟡 中 (UI/UX)
| Issue | 标题 | 状态 | 关联 PR |
|-------|------|------|---------|
| [#4868](https://github.com/nearai/ironclaw/issues/4868) | Reborn：设置提供者操作在移动端被裁剪 | OPEN | 无 |
| [#4856](https://github.com/nearai/ironclaw/issues/4856) | Reborn WebUI 可访问性与移动交互细节

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-15)

## 1. 今日速览
过去24小时，LobsterAI 项目开发活动聚焦于 **Cowork 会话体验增强** 与 **历史问题清理**。社区重新激活了两个与 UI/本地化相关的旧 Issue，同时有三个针对会话功能的新特性 PR 处于待合并状态，一个关键的定时任务数据一致性修复已被合并。项目整体迭代节奏稳定，但部分功能提案与 Bug 报告积压时间较长（超过两个月），需关注维护响应效率。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
- **已合并/关闭的重要 PR**：
  - **#1465 [CLOSED]**: 修复了“已删除的定时任务在应用重启后作为幽灵会话重现”的严重数据一致性问题。该修复清理了本地 SQLite 中残留的 `cowork_sessions` 记录，从根本上防止了幽灵会话的再次产生，显著提升了定时任务功能的可靠性。
    - 链接: https://github.com/netease-youdao/LobsterAI/pull/1465
- **待合并的关键功能 PR**（均创建于 2026-04-03，近期更新）：
  - **#1429**: 在 Cowork 会话视图中新增带 `mark.js` 高亮的消息搜索功能，支持快捷键导航与实时计数，极大提升长会话信息检索效率。
  - **#1430**: 实现会话运行期间自动阻止系统休眠（利用 Electron `powerSaveBlocker`），解决长时间任务因系统挂起而中断的可靠性问题。
  - **#1431**: 在 `StreamingActivityBar` 右侧添加秒级会话运行计时器，为用户提供耗时任务的实时进度感知。
  - *以上三个 PR 若合并，将系统性增强 Cowork 会话的可用性与用户体验。*

## 4. 社区热点
- **最受关注的 Issues**（虽评论数少，但被重新激活并标记为 `[stale]`）：
  - **#1434**: 中文语言环境下，Agent 技能 Tab 页搜索无数据时显示英文提示与按钮。**诉求分析**：反映了社区对产品**本地化完整度**的高要求，期望所有用户-facing 文本均适配中文。
    - 链接: https://github.com/netease-youdao/LobsterAI/issues/1434
  - **#1435**: 新建自定义 Agent 时，名称过长直接超出弹框，展示不友好。**诉求分析**：体现了用户对**UI 细节与容错性**的期待，要求界面能妥善处理边界情况（长文本）。
    - 链接: https://github.com/netease-youdao/LobsterAI/issues/1435
- **热点 PR**：三个 Cowork 功能增强 PR（#1429, #1430, #1431）代表了项目近期的核心开发方向，即**深化会话交互能力**，但均处于长期待合并状态，社区可能期待其尽快落地。

## 5. Bug 与稳定性
| 严重程度 | 问题描述 | 关联 Issue | 状态 | Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **中** | 中文界面下部分提示文本未本地化（技能 Tab 搜索空状态） | #1434 | 开放， stale | 暂无 |
| **中** | 自定义 Agent 名称过长导致 UI 溢出，显示不友好 | #1435 | 开放， stale | 暂无 |
| **高（已修复）** | 删除的定时任务重启后作为幽灵会话重现（数据残留） | #1359 | 已通过 PR #1465 修复 | 已合并 |

## 6. 功能请求与路线图信号
- **明确的新功能请求**：今日 Issues 中未提出明确的新功能请求，但两个 Bug 报告隐含了对**UI/UX 完善**的需求。
- **路线图信号**：三个待合并的 PR（#1429, #1430, #1431）清晰地指示了项目在 **Cowork 会话模块** 的短期增强重点：**信息检索（搜索）、运行可靠性（防休眠）、状态反馈（计时器）**。这些功能很可能构成下一版本的核心卖点。

## 7. 用户反馈摘要
从 Issues 描述与少量评论可提炼以下真实反馈：
- **痛点**：
  1. **本地化不彻底**：核心功能（如搜索空状态）的 UI 文本仍为英文，影响中文用户沉浸感。
  2. **UI 健壮性不足**：对长输入（Agent 名称）缺乏处理（如截断、滚动或自适应），导致界面破损。
  3. **数据可靠性隐忧**：定时任务的“幽灵会话”问题曾导致用户困惑和重复操作。
- **满意点**：社区用户积极提交带截图的高质量 Bug 报告，并主动提出功能改进方案（如 PR #1429, #1430, #1431），显示出较高的参与度和对产品改进的期待。

## 8. 待处理积压
以下 Issue/PR 创建时间均超过 **2 个月**（2026-04-03），且均标记为 `[stale]`，提示维护者需优先关注：
- **高优先级（已修复关联 Bug，但 Issue 未关闭）**：
  - Issue **#1359**（幽灵会话问题）虽已通过 PR #1465 修复，但 Issue 本身仍为开放状态，建议关闭以清理积压。
    - 链接: https://github.com/netease-youdao/LobsterAI/issues/1359
- **功能与改进积压**：
  - PR **#1429**（会话内搜索）、**#1430**（防休眠）、**#1431**（计时器）—— 三个重要功能增强长期未合并，需代码审查与决策。
  - Issue **#1434**、**#1435**（UI/本地化 Bug）—— 影响用户体验的基础问题，修复成本相对较低，建议尽快处理以提升产品完成度。

---
**报告生成说明**：本报告基于 2026-06-15 的 GitHub 数据快照，所有分析均以提供的 Issues 与 PRs 数据为依据。项目健康度评估显示：**核心功能开发活跃，但社区反馈响应与 PR 合并流程存在延迟**，建议维护团队优化工作流，及时处理 `[stale]` 标记项。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-15)

## 1. 今日速览
项目今日保持基础活跃，共产生 **1 个新 Issue** 与 **2 个新 Pull Request**，所有活动均为“新开”状态，暂无合并或关闭。社区讨论尚未展开（评论数为0），但新提交的内容聚焦于**部署稳定性修复**与**前端依赖升级**，同时出现一项指向**极端边缘场景优化**的新功能提案。项目整体处于**平稳开发周期**，无版本发布，核心代码库稳定性待通过PR审查进一步巩固。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
*今日无 PR 被合并或关闭。*  
当前有 **2 个待合并 PR**  awaiting review：
- **#1122**：修复 Docker 部署中因 `VOLUME` 声明与主目录绑定挂载冲突导致的潜在数据路径问题。
- **#1121**：开发依赖升级，将 `crates/web/ui` 中的 `esbuild` 从 0.25.12 更新至 0.28.1。

## 4. 社区热点
今日所有新开议题均无评论，但基于主题可预判潜在关注点：
- **#1123 (Feature Request)**：提议集成纯 Rust 的 `turbovec` 作为内存后端，以满足“极端边缘压缩”场景。这触及项目在资源受限环境下的性能边界，可能引发关于内存管理策略的讨论。
  - [链接](https://github.com/moltis-org/moltis/issues/1123)
- **#1122 (Bug Fix)**：解决 Docker 卷声明与绑定挂载的冲突，直接影响生产环境部署的可靠性，是运维用户的核心关切。
  - [链接](https://github.com/moltis-org/moltis/pull/1122)

## 5. Bug 与稳定性
- **中危 - 部署配置问题**：PR #1122 修复了 Dockerfile 中 `VOLUME` 声明可能覆盖用户绑定挂载的 `home` 目录的问题，该问题在特定部署配置下可能导致配置数据丢失或应用行为异常。**已有修复 PR**，待合并。
  - [链接](https://github.com/moltis-org/moltis/pull/1122)
- *今日无崩溃或回归问题报告。*

## 6. 功能请求与路线图信号
- **新功能提案**：Issue #1123 提出添加 `turbovec` 作为可选内存后端，目标直指“极端边缘设备”的压缩效率。该请求与项目优化方向（轻量、高效）高度契合，若社区反响积极，**可能被纳入下一迭代的探索性功能列表**。
  - [链接](https://github.com/moltis-org/moltis/issues/1123)
- **依赖现代化**：PR #1121 的 `esbuild` 升级虽为常规维护，但为前端构建性能提升奠定基础，间接支持未来 UI 功能开发。

## 7. 用户反馈摘要
*今日 Issues 无评论，暂无直接用户反馈可提炼。*  
从 Issue #1123 的描述可推断用户痛点：在** severely resource-constrained environments（极度资源受限环境）** 中，现有内存后端可能无法满足极致的压缩与内存占用平衡需求，用户寻求更底层的控制权。

## 8. 待处理积压
*基于当前数据无法识别长期未响应的积压项。*  
**提醒维护者**：今日新开的 **Issue #1123** 与 **PR #1122** 均创建于 2026-06-14，需关注其审查进度。特别是 PR #1122 涉及部署稳定性，建议优先评估合并。

---
**报告生成时间**：2026-06-15  
**数据来源**：Moltis GitHub (github.com/moltis-org/moltis) 过去 24 小时公开活动  
**注**：所有“评论数”与“👍”数基于 GitHub API 返回的 `undefined` 或 0 值，视为无互动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-06-15)

## 1. 今日速览
过去24小时，CoPaw 项目社区活跃度较高，共新增8个Issues（7个活跃，1个关闭）和7个Pull Requests（全部待合并），但无新版本发布。所有PR均处于待合并状态，表明代码贡献积极而合并流程可能存在滞后。重点包括重大功能PR（Windows桌面自动化）、多语言支持改进，以及多个涉及核心功能稳定性的严重Bug报告。新贡献者参与显著，显示社区生态正向好发展，但需优先关注Bug修复与PR合并效率以维持项目健康度。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无已合并或关闭的PR，但以下待合并PR若合入将显著推进项目：
- **PR #5187**：新增 `computer_use` 工具，支持 Windows 桌面 GUI 自动化（UIA + Tauri 控制模式），将极大扩展 Agent 的本地操作能力。
- **PR #5186**：添加完整的越南语（vi）界面支持，覆盖全部40个UI section，提升国际化体验。
- **PR #5180**：增加 cron/heartbeat 任务超时时间并添加自主上下文提示，提高定时任务可靠性。
- **PR #5179**：扩展多代理协作技能触发关键词，改善“团队协作”模式响应一致性。
- **PR #5178**：在控制台会话列表增加按标题过滤功能，优化大量会话的导航效率。
- **PR #5176**：修复批准命令文本在 `<pre>` 块中溢出问题，改善 UI 可读性。

## 4. 社区热点
- **最活跃讨论**：Issue #5156（建议支持 kimi-for-coding / 加入 uv 白名单）获得5条评论，反映用户对模型提供商接入灵活性的迫切需求。
- **高关注 PR**：PR #5187（Windows 桌面自动化）和 PR #5186（越南语支持）均由新贡献者提交，体现社区贡献多元化。
- **诉求分析**：热点围绕 **多模型生态接入**（如 Kimi）、**跨平台兼容**（Windows/Wayland）及 **多语言本地化**，凸显项目作为通用 AI 助手平台需强化生态整合与用户体验。

## 5. Bug 与稳定性
按严重程度排序：
1. **高严重** - Issue #5184：v1.1.11.post2 中本地创建模型提供商不显示，影响新版本核心功能。**尚无 fix PR**。
2. **高严重** - Issue #5181：插件依赖安装时持续弹出 cmd 窗口，网络不稳定时导致死循环，严重影响 Windows 用户体验。**尚无 fix PR**。
3. **中高** - Issue #5177：钉钉通道消息未写入 `chats.json`，导致控制台前端会话列表不可见，数据持久化不一致。**尚无 fix PR**。
4. **中** - Issue #5183：宠物功能在 Wayland 桌面（Niri 窗口管理器）下无法使用，平台特定兼容性问题。**尚无 fix PR**。
5. **低** - Issue #5172（已关闭）：聊天无响应问题，可能已在近期版本修复。

## 6. 功能请求与路线图信号
- **直接请求**：
  - Issue #5156：将 `kimi-for-coding` 加入 uv 白名单，支持非官方 API 接入。
  - Issue #5185：在 Agent 上下文中注入实时时间戳（HH:MM:SS），避免额外工具调用与时区问题。
  - Issue #5182：统一向量、文本、音视频模型的配置接口，简化多模态模型管理。
- **路线图信号**：
  - PR #5187 的计算机使用功能可能优先合入，体现“Agent 操作物理世界”的演进方向。
  - 多语言支持 PR（#5186）表明国际化是近期重点。
  - 时间戳请求（#5185）与现有上下文机制结合，可能纳入下一版本增强。

## 7. 用户反馈摘要
- **核心痛点**：
  - **模型接入壁垒**：用户已订阅 Kimi coding 套餐却无法通过 QwenPaw 直接使用，暴露模型提供商白名单策略限制（#5156）。
  - **时间信息缺失**：Agent 仅获日期而非精确时间，导致需额外调用工具、时区混乱及延迟增加（#5185）。
  - **安装体验缺陷**：插件自动安装时未隐藏命令行窗口，网络不佳时弹窗死循环，Windows 下体验极差（#5181）。
  - **数据一致性风险**：钉钉等通道消息未同步至前端会话列表，影响多平台统一管理（#5177）。
- **满意点**：本地模型提供商、插件系统等新功能受期待；社区响应及时，新贡献者获积极反馈。

## 8. 待处理积压
- **短期积压**：所有 7 个 PR 均待合并，部分已创建超过 24 小时（如 #5175），需关注审查效率。
- **高优先级未修复 Bug**：上述 #5184、#5181、#5177 均无对应 fix PR，建议维护者紧急评估。
- **长期建议**：建立 PR 合并 SLA 机制，避免贡献者等待过久；对高频反馈的模型接入问题（#5156）可启动路线图讨论。

---
*数据来源：CoPaw (agentscope-ai/QwenPaw) GitHub 仓库，统计周期：2026-06-14 至 2026-06-15 24 小时。*

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