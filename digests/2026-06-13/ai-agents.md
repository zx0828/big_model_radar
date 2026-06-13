# OpenClaw 生态日报 2026-06-13

> Issues: 500 | PRs: 486 | 覆盖项目: 12 个 | 生成时间: 2026-06-13 00:40 UTC

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

# OpenClaw 项目动态日报 (2026-06-13)

## 1. 今日速览
过去24小时，OpenClaw 项目保持极高活跃度，共处理 **500 条 Issues**（新开/活跃 402，关闭 98）和 **486 条 Pull Requests**（待合并 356，合并/关闭 130）。社区同时发布了两个聚焦安全强化的版本（v2026.6.6 及 beta.2）。项目整体处于快速迭代状态，核心焦点为 **安全边界加固、稳定性修复与多平台支持扩展**。大量讨论围绕内存泄漏、会话状态管理及移动端部署等关键问题展开。

## 2. 版本发布
### v2026.6.6 & v2026.6.6-beta.2
本次发布为**安全强化版本**，对多个核心边界进行了大幅收紧，可能影响现有部署配置。主要更新包括：
- **安全边界收紧**：涵盖 transcripts 处理、sandbox 绑定、主机环境继承、MCP stdio、Codex HTTP 访问、原生搜索策略、提升的发送者检查、已删除代理的 ACP 绕过、回环工具、Discord 审核及 Teams 群组操作等。
- **破坏性变更**：部分安全策略可能使旧配置失效，特别是涉及跨域资源访问、环境变量传递及工具调用权限的配置。
- **迁移注意事项**：
  - 检查 `openclaw.json` 中 `sandbox.workspaceAccess`、`skills.entries.*.env` 等设置是否符合新策略。
  - 验证所有集成通道（Discord、Teams、Signal 等）的权限配置。
  - 建议在预发布环境充分测试，特别是使用 `exec` 工具、子代理及自定义钩子的场景。
- **发布说明**：[v2026.6.6](https://github.com/openclaw/openclaw/releases/tag/v2026.6.6) | [v2026.6.6-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.6.6-beta.2)

## 3. 项目进展
今日合并/关闭的重要 PR 推动以下领域：
- **模型提供商扩展**：合并 [PR #92554](https://github.com/openclaw/openclaw/pull/92554)，添加 Moonshot Kimi K2.7 Code 支持，包含推理合约强制与上下文限制处理。
- **平台集成增强**：合并 [PR #92556](https://github.com/openclaw/openclaw/pull/92556)，将 Inworld 从 TTS 插件升级为内置 LLM 提供商，支持 OpenAI 兼容 API 与工具调用。
- **钩子系统扩展**：合并多个钩子相关 PR（如 [PR #20418](https://github.com/openclaw/openclaw/pull/20418)、[PR #19922](https://github.com/openclaw/openclaw/pull/19922)），新增 `session:pre-spawn`、`agent:pre-run`、`message:received`、`message:sent` 事件，提升可观测性与拦截能力。
- **稳定性修复**：
  - [PR #84082](https://github.com/openclaw/openclaw/pull/84082)：修复 Telegram 可扩展块引用被剥离的问题。
  - [PR #92552](https://github.com/openclaw/openclaw/pull/92552)：修复 iOS 前端网关陈旧连接恢复问题。
  - [PR #92545](https://github.com/openclaw/openclaw/pull/92545)：修复 cron 作业中重复不可用工具导致误判成功的问题。
- **质量保障**：合并 [PR #91500](https://github.com/openclaw/openclaw/pull/91500) 与 [PR #91587](https://github.com/openclaw/openclaw/pull/91587)，引入 QA 记分卡分类验证与映射运行配置文件，提升发布前测试覆盖。

## 4. 社区热点
今日讨论最活跃的 Issues（按评论数）：
1. **[#25592](https://github.com/openclaw/openclaw/issues/25592)** (32 评论) - **工具调用间文本泄露至消息通道**：用户报告代理在工具调用间产生的内部文本（如错误处理）意外发送到 Slack/iMessage 等通道，属严重 UX 与安全漏洞。诉求为明确区分内部处理输出与用户可见消息。
2. **[#9443](https://github.com/openclaw/openclaw/issues/9443)** (25 评论) - **请求提供预编译 Android APK**：用户无法自行编译 Android  companion 应用，强烈要求 GitHub Releases 提供预构建 APK，以降低移动端使用门槛。
3. **[#32473](https://github.com/openclaw/openclaw/issues/32473)** (17 评论) - **控制 UI 要求设备身份（需 HTTPS 或 localhost）**：用户在 Hostinger VPS + Docker 环境配置 Brave 密钥后遇到安全上下文错误，寻求解决方案。
4. **[#22438](https://github.com/openclaw/openclaw/issues/22438)** (17 评论) - **分层引导文件加载以渐进式控制上下文**：针对大工作区引导文件消耗过多 token 的问题，提出按优先级/类型分层加载，减少冗余上下文。
5. **[#22676](https://github.com/openclaw/openclaw/issues/22676)** (17 评论) - **Signal 守护进程 stop() 竞争条件导致孤儿进程**：SIGUSR1 重启时，旧 signal-cli 进程未完全退出即启动新实例，造成端口与锁冲突，引发发送失败。

**热点分析**：社区最关切 **安全漏洞**（#25592）、**平台可及性**（#9443 Android 支持）与 **部署稳定性**（#32473, #22676）。安全强化版本发布后，用户更关注边界策略对现有工作流的影响。

## 5. Bug 与稳定性
按严重程度（P0/P1）排列，标注是否已有修复 PR：

| 严重度 | Issue | 问题摘要 | 影响 | 修复状态 |
|--------|-------|----------|------|----------|
| **P0** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | 网关内存泄漏：RSS 数日内从 350MB 升至 15.5GB，触发 OOM 重启 | 系统可用性、长期运行 | 无已知 PR，需优先调查 |
| **P0** | [#91778](https://github.com/openclaw/openclaw/issues/91778) | `memory_search` 索引元数据缺失（自 v2026.6.1），导致向量检索完全失效 | 所有代理记忆功能瘫痪 | 可能关联 [PR #92509](https://github.com/openclaw/openclaw/pull/92509)（WAL 检查点修复） |
| **P0** | [#74484](https://github.com/openclaw/openclaw/issues/74484) | 网关配对范围死锁：CLI 权限不足无法批准/拒绝自动重发的超范围修复请求 | 设备配对、权限管理 | 无已知 PR |
| **P1** | [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄露至消息通道 | 安全、用户体验 | 无已知 PR，属新版本安全加固目标 |
| **P1** | [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal 守护进程重启竞争条件 | 消息发送可靠性 | 无已知 PR |
| **P1** | [#32296](https://github.com/openclaw/openclaw/issues/32296) | 代理回复错位至前一条消息（会话上下文混淆） | 对话准确性 | 无已知 PR |
| **P1** | [#29387](https://github.com/openclaw/openclaw/issues/29387) | 代理目录 `agentDir` 中的引导文件被静默忽略 | 配置有效性 | 无已知 PR |
| **P1** | [#31583](https://github.com/openclaw/openclaw/issues/31583) | `exec` 工具未继承 `skills.entries.*.env` 环境变量 | 技能秘密注入 | 无已知 PR |
| **P1** | [#57326](https://github.com/openclaw/openclaw/issues/57326) | CLI 后端辅助路径仍绕过 CLI 分发 | 安全边界、权限模型 | 无已知 PR |
| **P1** | [#37634](https://github.com/openclaw/openclaw/issues/37634) | `workspaceAccess: "none"` 时沙盒工作区为只读，工具无法写入 | 沙盒功能完整性 | 无已知 PR，但社区关注度高 |
| **P1** | [#31331](https://github.com/openclaw/openclaw/issues/31331) | Docker 安装 + 沙盒无法正确绑定工作区（容器内路径错误） | 容器化部署 | 无已知 PR |
| **P1** | [#38327](https://github.com/openclaw/openclaw/issues/38327) | 使用 `google-vertex/gemini-3.1-pro-preview` 时出现 "Cannot convert undefined or null to object" 崩溃 | 模型兼容性 | 无已知 PR |

**注**：部分 P1 问题（如 #25592）可能已在今日安全版本中部分修复，但需用户验证。

## 6. 功能请求与路线图信号
高需求功能请求（按 👍 数及社区关注度）：
- **[#18160](https://github.com/openclaw/openclaw/issues/18160)** (11 👍) - **Cron 作业直接执行模式**：绕过 `agentTurn` 以减少延迟与超时，提升定时任务可靠性。**路线图信号**：已有关联 PR 讨论实现，可能纳入下一维护版本。
- **[#6615](https://github.com/openclaw/openclaw/issues/6615)** (7 👍) - **exec-approvals 添加拒绝列表**：在现有允许列表基础上支持“除特定危险命令外全部允许”的策略。**路线图信号**：安全模型扩展，与当前安全强化方向一致，优先级高。
- **[#20786](https://github.com/openclaw/openclaw/issues/20786)** (6 👍) - **Telegram Business Bot 支持**：订阅 `business_message` 与 `business_connection` 更新类型。**路线图信号**：Telegram 生态重要需求，已有相关 PR（如 #84082）修复现有功能，完整支持需跟进。
- **[#27445](https://github.com/openclaw/openclaw/issues/27445)** (5 👍) - **子代理完成公告路由选项 `announceTarget`**：允许将子代理完成消息作为用户消息触发发送至父会话，

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告 (2026-06-13)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态呈现 **“多极并行、安全与稳定性成为核心焦点”** 的态势。以 **OpenClaw** 为事实标准的核心引擎持续快速迭代，并引领安全边界收紧的行业方向；同时，多个垂直项目（如 PicoClaw、CoPaw、IronClaw）在特定场景（嵌入式、桌面体验、特定生态集成）上激烈竞争。社区讨论已从单纯的功能扩张，普遍转向对 **生产环境可靠性、协议标准化及企业级安全控制** 的深度关切，标志着生态整体进入 **“质量深化”** 阶段。

## 2. 各项目活跃度对比

| 项目 | 今日 Issues (新/活跃) | 今日 PR (待合并/合并) | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 402 (新开/活跃) | 356 (待合并) / 130 (合并) | **刚发布** v2026.6.6 (安全强化版) | **极高活跃，但风险高**。迭代速度极快，但安全版本带来破坏性变更，社区需时间适配。P0 内存泄漏等严重问题待修复。 |
| **CoPaw** | 23 | 27 (待合并) / 合并数未详 | 无新版本 (最新 v1.1.11.post2) | **极高活跃，修复驱动**。大量 PR 合并解决稳定性与 UI 问题，但高严重度 Bug（Windows 泄漏、长对话卡死）频发，交付压力大。 |
| **IronClaw** | 50 | 50 (待合并) / 合并数未详 | 无新版本 | **高度活跃，架构演进**。核心团队推进 Reborn 体验、附件支持等重大功能，但多个高严重 Bug（工具状态不一致、提供商显示错误）无修复。 |
| **Zeroclaw** | 14 (新开7个S1) | 35 (待合并) / 4 (合并) | 无新版本 (最新 v0.8.0) | **高度活跃，但存在回归**。v0.8.0 后出现多个 S1 阻塞问题（Web 仪表板、安装失败），架构重构（统一引擎）是亮点，但新用户体验受损。 |
| **PicoClaw** | 6 | 14 (待合并) / 3 (合并) | **发布 Nightly** v0.2.9-nightly | **高度活跃，协议优先**。聚焦协议标准化（WebSocket 信号）与安全模型（权限分级），Nightly 版本迭代快，生产环境建议用稳定版。 |
| **NanoBot** | 6 (3新开) | 30 (21待合并) / 9 (合并) | 无新版本 (最新 v2.4.1) | **中度活跃，稳步修复**。成功关闭多个消息处理 Bug，新增审计功能。但短期记忆丢失等高关注问题仍在开放状态。 |
| **NanoClaw** | 5 | 9 (待合并) / **0 合并** | 无新版本 (最新 v2.0.64) | **高开发但交付停滞**。代码提交积极（安全、稳定性 PR 多），但**无任何 PR 合并**，审查流程严重积压，风险极高。 |
| **LobsterAI** | 1 (关闭) | 17 (6待合并) / 11 (合并) | 无新版本 (为 2026.6.12 做准备) | **中度活跃，积压严重**。新版本功能合并顺利，但**超过3个月的关键稳定性修复 PR（网关重启循环等）标记为 stale 未合并**，用户核心痛点未解。 |
| **Moltis** | 3 (新开) | 1 (待合并) / 0 (合并) | 无新版本 | **低中度活跃，问题修复慢**。仅1个 WhatsApp 修复 PR 待审，新开 Issues 未关闭。社区提出 Kubernetes 沙箱等高价值功能请求。 |
| TinyClaw, ZeptoClaw, EasyClaw | 0 | 0 | 无 | **无活动**。项目可能已归档或进入维护停滞。 |

**健康度评估标准**：结合活跃度、问题关闭速度、严重 Bug 修复情况、版本发布节奏综合判断。

## 3. OpenClaw 在生态中的定位
*   **优势**：
    1.  **规模与影响力**：社区规模、Issue/PR 处理量远超其他项目，是事实上的 **“参考实现”** 与 **“安全标准制定者”**。
    2.  **迭代速度**：每日数百条讨论与合并，功能扩展（新模型、新平台）与安全加固同步快速推进。
    3.  **安全纵深**：率先系统性收紧安全边界（sandbox、env、工具调用），其破坏性变更策略虽引发适配阵痛，但为整个生态划定了安全基线。
*   **技术路线差异**：采用 **“核心引擎 + 丰富插件/集成”** 的 monorepo 模式，强调通过配置（`openclaw.json`）和钩子实现灵活性。相比 PicoClaw 的轻量协议优先、CoPaw 的桌面应用封装、Zeroclaw 的 Rust 重写，OpenClaw 路线更 **“全功能、高可控”**。
*   **社区规模对比**：其 Issues/PR 数量级是第二名（CoPaw/IronClaw）的 **10 倍以上**，社区讨论深度和广度无出其右，是生态的 **“引力中心”**。

## 4. 共同关注的技术方向
1.  **安全模型强化与边界收紧**
    *   **涉及项目**：OpenClaw (核心)、Zeroclaw、NanoClaw、PicoClaw。
    *   **具体诉求**：从 OpenClaw 的 `sandbox.workspaceAccess` 收紧，到 PicoClaw 的“对话类型权限分级”，再到 NanoClaw 的容器能力限制，社区普遍要求 **更细粒度、更默认安全的权限控制**，防止工具调用与数据泄露。
2.  **协议标准化与互操作性**
    *   **涉及项目**：PicoClaw (WebSocket 显式回合信号)、IronClaw (DeferredBusy 调度、运行时上下文切片)、OpenClaw (MCP stdio 策略)。
    *   **具体诉求**：解决外部客户端集成摩擦，需要 **确定性的生命周期事件**（如 `turn.done`）、**标准化的工具调用/结果格式** 以及 **一致的上下文管理**，以构建可互操作的智能体网络。
3.  **生产环境稳定性与可观测性**
    *   **涉及项目**：**所有项目均有严重报告**。OpenClaw (内存泄漏、会话状态)、CoPaw (进程泄漏、长对话卡死)、Zeroclaw (v0.8.0 回归)、NanoBot (短期记忆丢失)、LobsterAI (网关重启循环)。
    *   **具体诉求**：解决资源泄漏、会话上下文混淆、工具调用 hung 等导致服务中断的 **P0/P1 级问题**。同时，NanoBot、IronClaw 等引入 **审计日志 (audit)** 以满足企业运维需求。
4.  **多平台与移动端支持深化**
    *   **涉及项目**：OpenClaw (Android APK 预编译需求)、PicoClaw (Telegram 论坛、DeltaChat 网关)、CoPaw (桌面客户端打包问题)。
    *   **具体诉求**：降低移动端和特定平台（如 Telegram 论坛、Windows 桌面）的 **部署与使用门槛**，完善边缘场景适配。

## 5. 差异化定位分析
| 维度 | OpenClaw | PicoClaw | CoPaw (QwenPaw) | IronClaw | Zeroclaw | NanoBot |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | **全功能核心引擎**，强安全、多集成 | **轻量协议与嵌入式**，通道解耦、权限分级 | **桌面用户体验**，记忆管理、插件生态 | **NEAR 生态集成**，Reborn 运行时、附件支持 | **Rust 高性能实现**，架构统一、插件系统 | **轻量级与审计**，消息处理可靠性 |
| **目标用户** | 开发者、自托管高级用户、企业 | 嵌入式/IoT 开发者、资源受限环境 | 桌面终端用户、Qwen 模型爱好者 | NEAR 生态用户、需要高级附件功能的用户 | Rust 技术栈开发者、性能敏感场景 | 需要高可观测性、轻量部署的团队 |
| **技术架构** | Go, monorepo, 配置驱动, 钩子系统 | Go, 通道抽象, 协议优先 (Pico) | Python/Tauri, 桌面应用封装, AgentScope 依赖 | Rust, 模块化运行时, 多轨道 (Track) 系统 | Rust, 统一 Agent 执行引擎, WASM 插件 | Go, 专注消息流与审计管道 |

## 6. 社区热度与成熟度
*   **快速迭代阶段 (功能/架构快速演进)**：
    *   **OpenClaw**：安全版本迭代，持续集成新模型与平台。
    *   **CoPaw**：大规模修复与 AgentScope 2.0 迁移并行。
    *   **IronClaw**：核心功能（附件、DeferredBusy）攻坚期。
    *   **PicoClaw**：协议完善与安全模型建设期。
    *   **Zeroclaw**：架构重构后修复回归问题。
*   **质量巩固阶段 (修复积压，打磨体验)**：
    *   **NanoBot**：稳步修复历史 Bug，新增审计等企业功能。
    *   **LobsterAI**：新版本功能就绪，但**严重积压未清**，处于“功能先进但稳定性存疑”的尴尬阶段。
*   **交付停滞阶段 (需紧急干预)**：
    *   **NanoClaw**：**开发活跃但零合并**，审查流程完全阻塞，是最高风险项目。
*   **停滞/归档阶段**：
    *   TinyClaw, ZeptoClaw, EasyClaw 等无任何活动。

## 7. 值得关注的趋势信号
1.  **“安全左移”与破坏性变更常态化**：OpenClaw 的安全强化版本是明确信号。**AI 智能体正从“能用”走向“敢用”**，安全模型（沙箱、权限、审计）将成为项目 **准入门槛**。开发者需为频繁的配置迁移和权限模型升级做好准备。
2.  **协议战争与互操作性需求爆发**：PicoClaw 的 WebSocket 信号、IronClaw 的运行时上下文切片、广泛的 MCP 工具集成讨论，均指向 **“智能体需要标准通信协议”** 的强烈诉求。未来生态可能围绕 **MCP、A2A 或新协议** 形成事实标准，**锁定专有协议的项目将面临集成成本**。
3.  **从“云端大脑”到“端侧智能体”的延伸**：OpenClaw 的 Android APK 需求、PicoClaw 的嵌入式定位、CoPaw 的桌面应用，显示社区在探索 **离线、低延迟、隐私敏感** 的端侧部署场景。**边缘计算与资源优化** 将成为新竞争维度。
4.  **企业级可观测性成为刚需**：NanoBot 的 `tools.audit`、IronClaw 的 hooks 安全记录、LobsterAI 的网关监控需求，表明用户不再满足于“黑盒运行”。**完整的操作日志、工具调用链追踪、资源消耗监控** 是智能体进入生产环境的 **必备能力**。
5.  **“质量债务”集中爆发**：几乎所有活跃项目均报告了 **P0/P1 级的稳定性问题**（内存泄漏、会话丢失、工具 hung）。这反映前期快速功能扩张后，**核心运行时、状态管理、资源清理** 等基础工程问题已成为最大瓶颈。**下一阶段的胜出者，必是能根治稳定性问题的项目**。

**对 AI 智能体开发者的参考价值**：
*   **选型评估**：优先考察项目的 **严重 Bug 修复速度** 与 **安全模型成熟度**，而非功能列表。警惕有长期 stale PR 或零合并记录的项目。
*   **架构设计**：必须内置 **细粒度权限控制** 与 **完整审计日志**。设计时考虑 **协议标准化**，避免自研封闭循环。
*   **开发重心**：将至少 30% 的工程资源投入 **稳定性、可观测性、资源管理** 等基础质量建设，功能开发与质量投入需保持平衡。
*   **部署策略**：对于 OpenClaw 等快速演进项目，**预发布环境测试** 和 **配置即代码** 管理至关重要，以应对破坏性变更。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-13)

## 1. 今日速览
过去24小时，NanoBot 项目保持高度活跃，共处理 30 条 PR 更新（9 条合并/关闭，21 条待合并）和 6 条 Issues 更新（3 条新开/活跃，3 条关闭）。核心开发聚焦于**稳定性修复**（内存管理、工具调用、安全限制）和**功能增强**（审计、TTS、WebUI 配置同步）。社区对对话记忆丢失、工具结果配对等关键问题持续讨论，多个重要 PR 已进入合并流程，项目整体向前推进显著。

## 2. 版本发布
- **无新版本发布**。最新稳定版仍为 v2.4.1（假设，基于无 Releases 数据）。

## 3. 项目进展
今日多个关键问题得到修复或功能增强，主要进展如下：

### 合并/关闭的重要 PR
- **#4304** `[CLOSED] fix(cron): wait for spawned subagents before marking cron job complete`  
  修复了 cron 任务在子代理完成前即标记为完成的问题，提升后台任务可靠性。  
  [链接](https://github.com/HKUDS/nanobot/pull/4304)

- **#4319 / #4318** `[CLOSED] feat(audit): Add tools.audit for agent action observability`  
  引入审计模块，支持工具调用的可观测性，提供日志、HTTP webhook、JSONL 文件等多种传输方式。  
  [链接](https://github.com/HKUDS/nanobot/pull/4319) | [链接](https://github.com/HKUDS/nanobot/pull/4318)

### 关闭的重要 Issues
- **#4203** `[CLOSED] [bug] Bug: find_legal_message_start 在用户消息后跟着孤立工具结果时会丢弃所有消息`  
  修复了消息序列处理逻辑，防止孤立工具结果导致全量消息丢失。  
  [链接](https://github.com/HKUDS/nanobot/issues/4203)

- **#4006** `[CLOSED] [bug] nanobot-ai conversation history contains orphaned tool results without corresponding tool_calls`  
  解决对话历史中孤立工具结果问题，避免 API 校验失败和轨迹渲染错误。  
  [链接](https://github.com/HKUDS/nanobot/issues/4006)

- **#4305** `[CLOSED] [enhancement] Multiple custom providers: ?`  
  确认多自定义提供商需求，为后续配置扩展奠定基础。  
  [链接](https://github.com/HKUDS/nanobot/issues/4305)

## 4. 社区热点
- **最活跃 Issue**: **#4044** `[OPEN] [bug] short term memory loss`（5 条评论）  
  用户报告对话中短期记忆丢失，导致上下文断裂。根本原因可能涉及上下文窗口压力或记忆管理缺陷，引发对核心对话连贯性的广泛关注。  
  [链接](https://github.com/HKUDS/nanobot/issues/4044)

- **高潜力 PR**: **#4313** `[OPEN] Feat(webui): config.json/webui parity`  
  旨在统一 WebUI 与配置文件设置，提升用户体验，可能吸引大量用户反馈。  
  [链接](https://github.com/HKUDS/nanobot/pull/4313)

- **高潜力 PR**: **#4320** `[OPEN] feat(audit): add tools.audit config and AuditTool for agent action observability`  
  新增审计功能，满足企业级可观测性需求，受运维和开发者关注。  
  [链接](https://github.com/HKUDS/nanobot/pull/4320)

## 5. Bug 与稳定性
### 新报告严重 Bug（按影响范围排序）
1. **#4307** `[OPEN] [bug] Bug: Post-turn consolidation wipes the agent's own delivery message`  
   **严重性：高**  
   上下文窗口压缩时，代理自身消息被错误清除，导致用户后续引用丢失。  
   [链接](https://github.com/HKUDS/nanobot/issues/4307)

2. **#4309** `[OPEN] [bug] nanobot serve: /v1/chat/completions always returns zero usage tokens`  
   **严重性：中**  
   OpenAI 兼容端点始终返回零 token 使用量，影响监控和成本分析。  
   [链接](https://github.com/HKUDS/nanobot/issues/4309)

3. **#4044** `[OPEN] [bug] short term memory loss`（持续活跃）  
   **严重性：高**  
  对话记忆丢失，核心体验受损。  
  [链接](https://github.com/HKUDS/nanobot/issues/4044)

### 已有修复 PR 的 Bug
- 消息处理缺陷（#4203）→ 已关闭，对应修复

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-13)

## 1. 今日速览
过去24小时项目活跃度极高，共处理 **35 个 PR** 和 **14 个 Issues**，显示社区贡献积极。但新开 Issues 中 **7 个标记为 S1 严重级别**，集中于 Web 仪表板、安装流程、macOS 应用及核心工具调用等关键路径的稳定性问题，表明 **v0.8.0 发布后可能存在回归或环境适配问题**。同时，核心架构重构（统一 Agent 执行引擎）与插件系统修复是今日技术重点，项目在代码质量与可维护性上持续推进，但需优先解决新用户入门阻塞问题。

## 2. 版本发布
- **无新版本发布**。最新稳定版仍为 v0.8.0（若有），本次日报周期内无 Release 候选或正式版推出。

## 3. 项目进展
今日有 **4 个 PR 被合并/关闭**（基于总数统计，具体未在展示列表中完全列出），关键推进包括：
- **架构统一**：PR [#7540](https://github.com/zeroclaw-labs/zeroclaw/pull/7540) 实现了 RFC [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)，将三个并行的 Agent 执行引擎（`run_tool_call_loop`、`Agent::turn_streamed`、`Agent::turn`） consolidate 到单一核心循环，显著减少重复逻辑，提升行为一致性。
- **插件系统修复**：PR [#7549](https://github.com/zeroclaw-labs/zeroclaw/pull/7549) 对齐了 `zeroclaw plugin install` 的安装路径与运行时发现路径，解决了 CLI 安装的 WASM 插件无法被自动发现的严重问题。
- **MCP 工具可见性**：PR [#7545](https://github.com/zeroclaw-labs/zeroclaw/pull/7545)（已关闭）及后续 PR [#7547](https://github.com/zeroclaw-labs/zeroclaw/pull/7547) 修复了 MCP 工具在风险配置下不显示的问题，确保枚举的工具能被 Agent 正确调用。
- **跨平台体验修复**：PR [#7528](https://github.com/zeroclaw-labs/zeroclaw/pull/7528) 与 [#7530](https://github.com/zeroclaw-labs/zeroclaw/pull/7530) 修复了 Windows 上的自更新机制，PR [#7534](https://github.com/zeroclaw-labs/zeroclaw/pull/7534) 修复了 Docker 构建中缺失 C++ 编译器的问题。

## 4. 社区热点
- **最活跃 Issue**：  
  [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)（RFC: 统一三个 agent turn 引擎）—— 3 条评论，👍 0。该 RFC 已转化为大型重构 PR [#7540](https://github.com/zeroclaw-labs/zeroclaw/pull/7540)，社区关注核心架构的简化与长期维护性。
- **高关注 PR**：  
  [#7548](https://github.com/zeroclaw-labs/zeroclaw/pull/7548)（大规模 cargo 清理）涉及核心、通道、网关、运行时等几乎所有模块，评论数未显示但改动范围极广，可能引发对依赖管理与构建脚本的讨论。  
  [#7540](https://github.com/zeroclaw-labs/zeroclaw/pull/7540) 作为架构重构，是技术路线图的关键一步，吸引核心贡献者关注。
- **背后诉求**：社区普遍希望减少代码重复、统一行为模型（如 turn 引擎）、改善开发者体验（如插件管理、构建流程），同时确保新功能（如 MCP 集成）开箱即用。

## 5. Bug 与稳定性
### 严重级别 S1（工作流阻塞）
| Issue | 问题摘要 | 状态 | 关联修复 PR |
|-------|----------|------|-------------|
| [#7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523) | Web 仪表板不可用（v0.8.0 安装后） | OPEN | 无直接修复；PR [#7529](https://github.com/zeroclaw-labs/zeroclaw/pull/7529) 仅修复 URL 提示逻辑，未解决根本构建问题 |
| [#7537](https://github.com/zeroclaw-labs/zeroclaw/issues/7537) | Windows 10 `zeroclaw quickstart` 失败（配置解析错误） | OPEN | 无 |
| [#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542) | Gateway Web 会话中 `ask_user` 工具立即失败（通道关闭） | OPEN | 无 |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS 应用权限检测失败、窗口消失 | OPEN | 无 |
| [#7533](https://github

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-13)

## 1. 今日速览
项目今日保持**高度活跃**，过去24小时内共处理14个PR和6个Issues，并发布了新的Nightly构建版本。社区聚焦于**协议完善**（如WebSocket生命周期信号）、**多平台适配**（Telegram论坛、DeltaChat网关）及**稳定性修复**（序列化错误、工具执行）。核心开发方向正从基础功能扩展转向**生产环境健壮性**与**细粒度权限控制**的深化。

## 2. 版本发布
- **新版本**: `v0.2.9-nightly.20260612.413d3749`
  - **性质**: 自动化Nightly构建，**不稳定**，建议测试环境使用。
  - **更新概要**: 基于`v0.2.9`到`main`分支的持续集成，包含近期PR的未发布功能（如远程WebSocket模式、图像输入压缩、NEAR AI提供商等）。
  - **完整更新日志**: https://github.com/sipeed/picoclaw/compare/v0.2.9...main
  - **迁移注意**: Nightly版本可能存在破坏性变更，生产部署请继续使用稳定版`v0.2.9`。

## 3. 项目进展 (已合并/关闭的重要PR)
今日3个PR被关闭，均为**关键基础修复**，显著提升系统可靠性：
- **#2551** (关闭): `refactor: standardize channel identification`  
  解耦通道名称与提供商类型，支持同一提供商多实例。**影响**: 为多租户、复杂部署提供架构基础，是权限系统演进的前提。
- **#3113** (关闭): `fix(channels): check json marshal/unmarshal errors`  
  修复通道配置序列化中静默丢弃的错误，避免配置哈希计算错误。**影响**: 提升配置管理可靠性，防止因序列化失败导致的运行时异常。
- **#3112** (关闭): `fix(tools): handle json.Marshal error in toolloop`  
  修复工具调用参数序列化失败时数据静默丢失的问题。**影响**: 保证工具执行历史在对话中的完整性，便于调试与审计。

## 4. 社区热点
讨论最活跃的议题围绕**协议标准化**与**安全模型**：
- **Issue #2984** (2评论, 2👍): `[Feature][Protocol] Add explicit turn completion signal`  
  **诉求**: 外部WebSocket客户端需要确定的回合完成信号。关联PR **#3116** 已提供实现，是**Pico协议生态集成**的关键一步。
- **Issue #3114** (新开): `Telegram 渠道按对话类型权限分级控制`  
  **诉求**: 在Telegram中根据私聊/群组/频道动态调整危险操作权限。与已关闭的**#3109**（通道级权限作用域）一脉相承，反映社区对**精细化安全控制**的强烈需求。

## 5. Bug 与稳定性
今日报告的Bug按潜在影响排序：
1. **#3111** (严重): `Tool execution fails with Gemini 3.5 Flash`  
   **问题**: Gemini 3.5 Flash要求`thought_signature`字段，当前后端schema不兼容导致400错误。  
   **状态**: 暂无直接修复PR，需适配Google Agentic新规范。
2. **#3110** (中-高): `Telegram adapter ignores message_thread_id in Forum topics`  
   **问题**: 在Telegram论坛主题中，回复错误发送至根话题(#General)。  
   **状态**: 暂无直接修复PR，需修正消息路由逻辑。
3. **#3012** (中): `Continuous consumption of tokens when evolution is enabled`  
   **问题**: 启用Evolution且模式为Draft时，存在周期性token消耗。  
   **状态**: 标记为`stale`但今日更新，需复现与根因分析。

## 6. 功能请求与路线图信号
- **高优先级候选**:
  - **#2984** (WebSocket显式回合完成): 对应PR **#3118** (Add remote Pico WebSocket mode) 已提供底层支持，**极可能纳入下一版本**。
  - **#3114** (Telegram对话类型权限): 基于**#3109**的已实现概念延伸，**若社区反馈积极，可能在下个迭代开发**。
- **进行中功能**:
  - **#3063** (feat: add deltachat gateway): DeltaChat网关集成，扩展消息平台支持。
  - **#2917** (feat(provider): add NEAR AI Cloud provider): 新增AI提供商，丰富后端选择。

## 7. 用户反馈摘要
从Issues与PRs中提炼的核心痛点：
- **安全焦虑**: 用户明确担忧机器人在群组/频道中执行危险操作（shell、文件写入）的风险，要求**基于上下文的权限动态降级**（#3109, #3114）。
- **集成摩擦**: 外部客户端开发者因缺乏标准生命周期信号（如`turn.done`）而难以可靠集成，期望**协议更透明**（#2984）。
- **多平台适配不足**: Telegram论坛主题（#3110）、Matrix用户ID格式（#3045）等细节问题，反映**边缘场景覆盖**仍需加强。
- **模型兼容性挑战**: 新模型（Gemini 3.5 Flash）的Agentic特性导致现有工具调用失败，凸显**提供商适配的持续维护成本**（#3111）。

## 8. 待处理积压
以下Issue/PR创建时间较长或标记为`stale`，建议维护者评估优先级：
- **PR #2964** (5月28日创建, `stale`): `Feat/image input compression`  
  提供可配置的图像压缩策略，对处理高分辨率媒体至关重要，但已停滞近两周。
- **Issue #3012** (6月5日创建, `stale`): `Continuous token consumption`  
  资源泄漏类问题，影响Evolution模式用户，需安排复现。
- **PR #2551** 虽已关闭，但其解耦通道标识的架构变更，可能需同步更新相关文档与示例配置，避免用户混淆。

---
**报告生成时间**: 2026-06-13  
**数据来源**: PicoClaw GitHub (https://github.com/sipeed/picoclaw) 过去24小时动态  
**分析师备注**: 项目开发活跃，社区参与度高。建议优先解决**协议信号**（#2984/#3116）与**安全模型**（#3114）相关议题，以提升生态兼容性与用户信任。Nightly版本已包含多项改进，但生产环境请谨慎评估。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-13)

**数据周期**：过去24小时 (截至 2026-06-12)  
**报告生成时间**：2026-06-13

---

## 1. 今日速览
项目在过去24小时维持**高开发活跃度**，共提交9个Pull Request（PR）并更新5个Issues，但**无任何PR被合并或关闭**，表明代码审查流程可能存在积压。社区讨论聚焦于**消息处理可靠性**、**安全加固**和**v2迁移路径**三大方向。尽管新功能提案积极，但关键稳定性问题的修复尚未落地，项目整体处于“快速迭代但交付滞后”状态。

---

## 2. 版本发布
无新版本发布。最新稳定版本仍为 v2.0.64（基于提交 d144721）。

---

## 3. 项目进展
**今日无PR合并**，但9个待合并PR清晰展示了开发重点，若全部合并将推动项目在以下方面显著前进：

- **安全加固**：PR #2748 通过容器能力限制（`cap-drop`、`no-new-privileges`、`pids-limit`）降低逃逸风险；PR #2749 为 `install_packages` 添加 npm 包发布年龄检查（≥3天）。
- **稳定性修复**：PR #2750 解决 `outbound.db` 期刊文件在容器异常退出后的残留问题；PR #2670 修复会话恢复时因 `thinking` 块损坏导致的崩溃循环。
- **功能扩展**：PR #2747 升级 OneCLI SDK 至 2.2.1，引入凭证桩挂载与可机器验证的 pins；PR #2746 与 #2745 分别为 providers 添加能力接缝与可选持久化内存脚手架，为多 provider 协作与状态保持奠定基础。
- **体验优化**：PR #2752 修复 Discord  inbound 附件（文本/图片）无法被 agent 读取的问题；PR #2753 修复 pre-commit 钩子在缺失 pnpm 时的失败。

> **整体推进评估**：代码库在安全、可靠性和扩展性三方面均有实质性贡献，但合并延迟可能影响用户及时获取修复。

---

## 4. 社区热点
最活跃的讨论集中在 **Issue #2506**（3条评论），该问题揭示了核心消息流中的**静默数据丢失**缺陷，直接影响多轮对话的可靠性。关联 PR #2750 虽针对数据库层一致性，但未直接解决消息去重逻辑，社区可能期待更全面的修复方案。

- **Issue #2506** (https://github.com/nanocoai/nanoclaw/issues/2506): `send_message` 去重逻辑在60秒内完成多轮对话时静默丢弃响应，导致客户端超时。
- **PR #2750** (https://github.com/nanocoai/nanoclaw/pull/2750): 修复 `outbound.db` 期刊残留与热期刊竞争条件，部分缓解数据一致性问题。

---

## 5. Bug 与稳定性
按严重程度排序：

| 严重度 | Issue | 问题描述 | 状态 | 关联 Fix PR |
|--------|-------|----------|------|-------------|
| **严重** | #2506 (https://github.com/nanocoai/nanoclaw/issues/2506) | 多轮对话间隔<60秒时响应被静默丢弃，客户端超时。 | Open | 无直接 PR |
| **高** | #2668 (https://github.com/nanocoai/nanoclaw/issues/2668) | MCP 工具无超时，hung 调用可阻塞会话长达30分钟。 | Open | 无直接 PR |
| **中** | #2711 (https://github.com/nanocoai/nanoclaw/issues/2711) | `create_agent` 工具未实施 admin 检查，任意容器可创建代理组。 | Open | 无直接 PR |
| **已修复** | #2751 (https://github.com/nanocoai/nanoclaw/issues/2751) | 预算耗尽时 LLM 返回合成 HTTP 200，导致响应静默丢失。 | Closed | 未在本次 PR 列表显示 |

---

## 6. 功能请求与路线图信号
社区未提出明确新功能请求，但**近期 PR 揭示了 v2.x 的演进方向**：

- **SDK 与部署增强** (PR #2747): 升级 OneCLI SDK 至 2.2.1，引入凭证桩与 pins 机制，提升部署安全性与可验证性。
- **Provider 能力框架** (PR #2746): 定义能力接缝，允许 provider 动态声明能力，为未来多模型/多工具编排铺路。
- **状态持久化** (PR #2745): 为 providers 提供可选持久化内存脚手架，支持跨会话上下文保持。

这些功能若合并，将显著增强系统的**可扩展性**与**生产就绪度**，可能成为下一 minor 版本的核心特性。

---

## 7. 用户反馈摘要
从 Issues 描述与有限评论中提炼关键反馈：

- **核心痛点**：
  - **可靠性**：消息去重（#2506）与工具 hung（#2668）导致对话中断或长时间无响应，影响用户体验。
  - **安全性**：权限控制缺失（#2711）在多租户/多容器环境中可能引发横向渗透风险。
- **迁移困惑**：Telegram swarm 功能在 v2 中的状态不明确（#2632），阻碍现有用户升级。
- **积极信号**：用户主动报告边界案例（如预算耗尽处理 #2751），显示深度使用与对健壮性的高期望。

---

## 8. 待处理积压
以下 Issue/PR 创建时间较早，影响关键路径，建议维护者优先关注：

| 类型 | 编号 | 标题 | 创建日期 | 天数 | 链接 |
|------|------|------|----------|------|------|
| Issue | #2506 | `send_message` dedup 静默丢弃响应 | 2026-05-16 | 28 | https://github.com/nanocoai/nanoclaw/issues/2506 |
| Issue | #2632 | Telegram agent-swarm 在 v2 中的状态澄清 | 2026-05-28 | 16 | https://github.com/nanocoai/nanoclaw/issues/2632 |
| PR | #2670 | 修复会话恢复崩溃循环 | 2026-06-01 | 12 | https://github.com/nanocoai/nanoclaw/pull/2670 |

> **注**：所有 PR 均创建于 2026-06-12（除 #2670），但无合并，审查资源紧张可能是瓶颈。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-13)

## 今日速览
过去24小时，IronClaw 项目保持高度活跃状态，Issues 与 PR 更新量均为50条，社区参与度旺盛。核心开发团队（@henrypark133, @ilblackdragon, @pranavraja99, @zmanian, @serrrfirat）持续推进多个关键功能线，重点集中在 **Reborn 用户体验完善**、**附件（Attachments）全链路支持**、**DeferredBusy 消息调度改进** 以及 **Slack 集成重构**。今日无新版本发布，但合并活动频繁，项目整体健康度良好，代码库持续演进。

## 项目进展
今日合并/关闭的重要 PR 主要聚焦于质量保障与安全增强：
- **PR #4773** (已合并): 为 Reborn 运行时添加记录/回放机制，用于 QA 短语的确定性测试，提升测试可靠性。
- **PR #4568, #4562, #4569** (已合并): 一系列 hooks 安全增强，包括能力分发扇出限制、认证延续失败记录、租户谓词键配额强制，强化安全审计边界。
- **PR #4834** (已合并): 将代码库提升至 `qa` 分支，为后续发布做准备。
- **PR #4812** (待合并，但已通过审查): 实现 DeferredBusy 消息在阻塞运行结束时的自动排出，解决消息被长期挂起的问题，显著改善交互响应性。

这些合并推进了项目的测试覆盖、安全基线与核心调度逻辑，为下一版本打下坚实基础。

## 社区热点
讨论最集中的议题围绕 **持久化批准机制** 与 **附件功能支持**：
- **Issue #4825** (评论数: 3) 及其修复 PR **#4835**: 用户反馈“始终允许”的权限批准未跨线程持久化，导致重复授权 gates。这是核心体验问题，修复已准备就绪。
- **PR #4738** (XL size) 与 **PR #4655** (XL size): 附件功能的 Web UX 与转录合约支持，是社区长期关注的重点，涉及多轨道（Track）协作，技术讨论复杂。
- **PR #4836** (今日新建): 将连接通道、交付状态和运行起源暴露为运行时上下文切片，改善模型环境感知，引发架构层面讨论。

## Bug 与稳定性
今日报告的主要 Bug 按严重程度排列：
1.  **高严重 - 工具工作流失败导致状态不一致**  
    **Issue #4762**: 工具执行失败后，后续消息和活动排序错乱。影响核心对话流程，**暂无已知修复 PR**。
2.  **高严重 - 提供商状态显示不一致**  
    **Issue #4697**: 设置页显示的活动提供商与实际使用的提供商不匹配，导致用户困惑。**暂无已知修复 PR**。
3.  **中高严重 - 本地 Ollama 连接测试误报**  
    **Issue #4696**: Ollama 未运行时，“测试连接”仍返回成功，误导用户。**暂无已知修复 PR**。
4.  **中严重 - 时间感知缺失**  
    **Issue #4796**: LLM 缺乏当前日期/时间意识，影响日程相关查询。**暂无已知修复 PR**。
5.  **中严重 - SSE 重连可能导致工具活动停止更新**  
    **Issue #4770**: 刷新页面后，工具活动可能停止推送，疑似 SSE 连接问题。**暂无已知修复 PR**。
6.  **中严重 - 工作区路径重复**  
    **Issue #4759**: 使用工作区相对路径时路径被重复拼接，可能导致文件操作错误。**暂无已知修复 PR**。
7.  **中严重 - 运行时上下文缺失通道状态**  
    **Issue #4828**: 模型无法感知已连接的通道或出站交付目标，导致集成失败。**已有修复 PR #4836**。
8.  **低严重 - UI 细节问题**  
    包括 #4723 (新对话 composer 悬停高亮不全)、#4823 (删除运行中对话无反馈)、#4819 (浅色主题附件警告对比度低) 等，**均暂无已知修复 PR**。

## 功能请求与路线图信号
- **附件功能全面支持** 是当前最大功能线，PR 链 #4654 → #4668 → #4670 → #4655 → #4738 表明后端存储、转录合约、前端 UX 正在紧密集成，预计将成为下个重要版本的核心特性。
- **DeferredBusy 改进** (Issues #4817, #4831, #4832, #4833) 表明在基础消息调度机制上仍有优化空间，如批量排出、索引优化，属于性能与架构债务清理。
- **运行时上下文扩展** (

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-13)

## 1. 今日速览
项目今日开发活动高度活跃，过去24小时内共有17个Pull Request（PR）更新，其中11个已合并/关闭，6个仍待处理。Issues 活动极少，仅1条历史 Issue 被关闭，无新 Issue 报告。核心开发工作聚焦于稳定性修复、用户体验优化及新版本（2026.6.12）的集成合并。需关注的是，多个标记为 `[stale]` 的关键修复 PR 已搁置超过3个月，形成显著的待处理积压，可能影响部分用户场景的稳定性。

## 2. 版本发布
*无新版本发布。*
- 最新合并的 PR #2158 完成了 `release/2026.6.11` 分支向 `main` 的合并，为 `2026.6.12` 版本做准备。该版本亮点包括：Computer Use MVP 及内置套件、实时 ASR 语音输入（cowork 场景）、HTML artifact 公开分享模式选择、图片/SVG artifact 分享支持等。

## 3. 项目进展
今日合并/关闭的 PR 主要推进了以下方面：
- **核心功能增强**：升级 Computer Use 运行时至 1.0.7 (#2156)，包含诊断辅助功能。
- **媒体处理修复**：修正文生图保存时的文件扩展名识别逻辑，确保文件名、MIME 与实际格式一致 (#2157)。
- **稳定性与体验**：
    - 防止 cowork 场景下实时 ASR 的重复启动请求 (#2155)。
    - 为 Agent 创建/设置、MCP 配置、会话输入草稿等关键操作添加“未保存更改”确认机制，防止用户内容静默丢失 (#1473-#1477)。
    - 修复手动停止流式回复后模型元数据的保留问题 (#2154)。
    - 解决 OpenClaw 模型归一化时同名包模型与自定义模型的区分问题 (#2153)。
- **发布流程**：完成版本分支合并，整合上述功能与修复至主分支 (#2158)。

## 4. 社区热点
过去24小时 Issues/PRs 的评论数据缺失（显示为 `undefined`），表明社区讨论互动较少。但长期未解决的 `[stale]` PR 代表了用户持续面临的痛点：
- **网关无限重启循环** (#1446)：关联 Issue #1400，4.1 版本后 OpenClaw 网关因竞态条件反复崩溃重启，导致应用瘫痪，为**最高优先级稳定性问题**。
- **技能状态不同步** (#1453)：已停用技能的提示词仍被注入对话，用户无法真正禁用技能。
- **定时任务体验**：历史记录堆积 (#1449) 与创建失败 (#1454) 严重影响 cowork 自动化功能的使用。
- **国际化缺失** (#1448)：Agent 设置页面的关键按钮和提示未国际化。
- **快捷键冲突** (#1456)：允许设置重复快捷键导致功能失效，无任何提示。

## 5. Bug 与稳定性
| 严重程度 | 问题描述 | 关联 PR | 状态 |
| :--- | :--- | :--- | :--- |
| **严重** | OpenClaw 网关无限重启循环，导致应用瘫痪 | #1446 | 待合并 (stale) |
| **高** | 已停用技能仍被注入对话，安全/功能逻辑失效 | #1453 | 待合并 (stale) |
| **高** | 创建“不重复”定时任务时，清空日期后点击创建无响应 | #1454 | 待合并 (stale) |
| **中** | 文生图保存时文件扩展名错误（PNG 存为 JPG 等） | #2157 | **已合并** |
| **中** | 实时 ASR 语音输入可能重复启动 | #2155 | **已合并** |
| **低** | 快捷键可重复设置，无冲突检测与提示 | #1456 | 待合并 (stale) |
| **低** | 部分界面元素（删除按钮、搜索无结果提示）未国际化 | #1448 | 待合并 (stale) |

## 6. 功能请求与路线图信号
- **已纳入近期版本**：从 PR #2158 摘要可见，**Computer Use MVP**、**HTML artifact 公开分享**、**图片/SVG artifact 分享**、**realtime ASR for cowork** 已作为新功能集成至 `2026.6.12` 版本。
- **潜在需求**：PR #1449 提出的“定时任务多次执行记录折叠分组展示”是明确的用户体验优化需求，旨在解决侧栏会话列表混乱问题，有望在后续版本中落地。

## 7. 用户反馈摘要
从 Issues 与 PR 描述中提炼的核心痛点：
- **数据与内容安全**：用户对未保存内容（Agent 配置、MCP 设置、输入草稿）在关闭弹窗或切换视图时静默丢失感到不满，相关修复 (#1473-#1477) 已合并，体现了对用户数据保留的重视。
- **功能可靠性**：网关崩溃 (#1446)、技能禁用失效 (#1453)、定时任务创建失败 (#1454) 等问题直接导致核心功能不可用，用户期望基础稳定性。
- **易用性**：快捷键冲突无提示 (#1456)、定时任务历史记录无法聚合 (#1449) 降低了操作效率和可管理性。
- **国际化**：硬编码英文文本 (#1448) 影响了非英语用户的使用体验。
- **API 兼容性**：历史 Issue #1 反映了用户在配置不同 API 类型（如 OpenAI 格式）时遇到的参数错误问题。

## 8. 待处理积压
以下 PR 创建于 **2026-04-03**，距今已超过 **3个月**，均标记为 `[stale]` 且未合并，属于高优先级积压：
- **#1446**: `fix(openclaw): 修复网关反复启动失败导致的无限重启循环` (严重)
- **#1448**: `fix(i18n): Agent 设置页面删除按钮及技能选择器显示英文`
- **#1449**: `feat(cowork): 定时任务多次执行记录折叠分组展示`
- ****#1453**: `fix(skills): 修复已停用技能仍被注入对话提示词的问题` (高)
- **#1454**: `fix(scheduled-tasks): 不重复模式清空日期后点击创建任务按钮无响应` (高)
- **#1456**: `fix(shortcuts): 修复快捷键设置缺少重复检测的问题`

**提醒**：这些 PR 涉及应用稳定性、核心功能逻辑及关键用户体验，建议维护团队优先评估并合并，以避免用户流失。同时，建议建立机制定期清理 `[stale]` 标签，明确沟通阻塞原因或合并计划。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-13)

**数据周期**：过去24小时 (截至 2026-06-12)  
**报告生成时间**：2026-06-13

---

### 1. 今日速览
过去24小时，Moltis 项目保持中等活跃度，共新增 3 个 Issues（均为新开或活跃状态）并收到 1 个 Pull Request，但无新版本发布。当前所有新增 Issues 均未关闭，表明问题积压略有增加，社区反馈持续流入。项目核心开发聚焦于修复关键集成问题（WhatsApp），同时收到关于扩展沙箱隔离与语音引擎集成的重要功能提议，整体技术讨论积极。

---

### 2. 版本发布
*无新版本发布。*

---

### 3. 项目进展
- **唯一 PR 进展**：PR #1116 已提交，旨在修复 WhatsApp 网关在隐私模式（@lid）下回复消息投递失败的问题。该修复通过重写推送通知（PN）的 JID 确保消息可达，**直接提升了 WhatsApp 集成的可靠性**，但尚未合并， awaiting review。
- **整体推进**：今日无功能合并，主要进展集中于缺陷修复的代码提交阶段。项目在消息网关稳定性方面取得局部进展，但功能扩展层面暂无代码入库。

---

### 4. 社区热点
- **最活跃讨论**：Issue #1115 `[bug] Fastmail MCP Authorisation` 拥有最高评论数（2 条），聚焦于 Fastmail 服务的 MCP 授权流程故障，可能影响部分用户的核心连接功能。
- **高诉求功能提议**：Issue #1118 `Add Kubernetes-native sandbox backend` 虽评论仅 1 条，但提出了**架构级增强**——利用 Kubernetes `runtimeClassName` 实现 VM 级隔离（如 Kata Containers），直接回应安全社区对沙箱隔离强度的关切，可能引发后续深度技术讨论。

---

### 5. Bug 与稳定性
| 严重程度 | Issue | 问题简述 | 状态 | 关联 Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **中高** | #1115 | Fastmail MCP 授权失败，导致服务无法连接。 | OPEN | 无 |
| **低** | (无新报告) | - | - | - |

**说明**：仅 #1115 为明确 Bug 报告，影响特定服务集成，需优先排查。无崩溃或回归问题报告。

---

### 6. 功能请求与路线图信号
两个高价值功能请求值得关注，可能影响下一版本规划：
1. **#1118**：Kubernetes 沙箱后端。**强烈信号**：用户主动提供实现思路（`runtimeClassName`），表明社区对**企业级安全隔离**有迫切需求，与项目“安全执行 LLM 生成命令”的核心定位高度契合。
2. **#1102**：集成 FunASR/SenseVoice 作为本地 STT 引擎。**性能导向信号**：强调“超快速度”（~70ms）与“原生流式”，直指语音交互延迟痛点，符合项目优化实时体验的方向。

**判断**：两者均具备较高社区支持（👍 0 但提案具体），且 #1118 涉及基础设施升级，**更可能被纳入中期路线图**。

---

### 7. 用户反馈摘要
- **痛点提炼**：
  - **集成可靠性**：Fastmail 用户遭遇授权障碍（#1115），反映第三方服务认证流程的脆弱性。
  - **安全与扩展性**：现有沙箱可能无法满足高安全场景（#1118），用户寻求与云原生技术栈（K8s）的深度集成。
  - **性能瓶颈**：当前 STT 引擎在延迟和流式处理上未达预期（#1102），用户明确指向更优的本地化方案。
- **积极反馈**：Issue #1102 开头称项目为 “great voice assistant project”，表明核心体验获得认可。

---

### 8. 待处理积压
- **需关注的老 Issue**：**#1102**（添加 FunASR/SenseVoice）创建于 2026-06-04，已开放 9 天，仅 1 条评论且无明确进展。尽管是功能请求，但其提出的**性能优化方案具体且技术成熟**，若长期无响应可能挫伤贡献者积极性。
- **提醒**：维护团队需评估 #1102 与 #1118 的优先级，避免功能提案因缺乏反馈而停滞。

---

**项目健康度评估**：项目保持稳定的社区参与，但**问题修复速度（0 关闭）低于新反馈速度（3 新开）**，需警惕积压增长。安全与性能相关的功能提案质量高，建议维护团队明确路线图响应，以维持 contributor 信心。核心消息网关（WhatsApp）的修复工作正在进行中，是当前稳定性关键。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-06-13)

## 1. 今日速览
过去24小时，QwenPaw 项目社区活跃度极高，共处理 23 个 Issues 和 27 个 PR，显示开发与用户反馈均处于高速流转状态。核心焦点集中在 **稳定性修复**（如内存泄漏、会话丢失、下载失败）与 **重大架构迁移**（AgentScope 2.0 升级）的推进上。同时，社区对 **新功能扩展**（如 Agent 团队协作、更多模型支持）的讨论持续升温。尽管无新版本发布，但多个关键 Bug 修复 PR 已合并，项目健康度正向修复中，但部分严重稳定性问题（如 Windows 进程泄漏、长对话无响应）仍需紧急关注。

## 2. 版本发布
*今日无新版本发布。* 最新稳定版为 `v1.1.11.post2`，社区正围绕该版本报告多项稳定性与功能问题。

## 3. 项目进展 (已合并/关闭的重要 PR)
今日多个修复与改进 PR 完成合并，主要推进如下：
- **发布流程规范化**：PR #5121 引入了 **发布验证门禁**，确保构建产物在发布前通过安装、启动和健康检查，提升发布可靠性。
- **关键 UI/UX 修复**：
  - PR #5144 修复了 **长期记忆配置保存时丢失** 的问题（Issue #5137），通过强制渲染折叠面板确保表单数据完整。
  - PR #5154 重构了 **记忆搜索工具的结果展示样式**，解决了 UI 显示异常（Issue #5098）。
  - PR #5147 修复了 **Coding 模式下刷新页面导致会话跳转错误** 的问题（Issue #5142）。
- **安全性增强**：PR #5022 为代理工作区恢复添加了路径验证，防止将工作区创建在受管理目录内，提升安全性。
- **桌面体验优化**：PR #4144 修复了桌面命令在绑定到 `0.0.0.0` 时的就绪检查逻辑；PR #5153 将 Tauri 的即时窗口启动优化复刻到 pywebview 客户端，减少启动等待时间。
- **版本管理**：PR #5159 修正了版本号格式（`1.1.12b1`），为下一测试版发布做准备。

**整体前进评估**：今日合并的 PR 主要集中于 **质量保证（QA）与稳定性修复**，解决了多个影响核心用户体验的 UI 和会话管理问题，并强化了发布安全网。项目在 **交付质量** 上迈出扎实一步，但新功能开发（如视觉模型回退、数据分析插件）仍在审阅中，尚未进入主分支。

## 4. 社区热点
讨论最活跃的议题集中在 **核心功能缺陷** 与 **重大技术路线变更**：
- **Issue #5064 (定时任务无法触发)**：11 条评论。用户报告 Agent 生成的定时任务在设定时间不执行，且无法手动编辑。这触及 **任务调度子系统的可靠性**，是核心自动化功能的严重缺陷。
- **Issue #4727 (迁移到 AgentScope 2.0)**：10 条评论，👍 2。这是项目的 **重大破坏性变更（Breaking Change）** 路线图议题，涉及后端依赖全面升级。社区在讨论迁移计划、时间表和兼容性策略，是决定项目未来架构的关键讨论。
- **PR #5088 (治理与沙箱接口讨论)**：评论数未显示但主题关键。涉及项目 **治理结构** 和 **安全沙箱** 的初始设计讨论，影响插件生态和外部能力集成（如 MCP/A2A）的长期架构。

## 5. Bug 与稳定性 (按严重程度排列)
**高严重度 (影响核心使用或导致崩溃)：**
- **#5138 [Bug]**: Windows 客户端进程持续增加，内存占用超 90%。(**资源泄漏**，已确认)
- **#5161 [Question]**: 长对话后 QwenPaw 无响应。(**稳定性**，可能内存或上下文管理问题)
- **#5155 [Bug]**: 升级到 v1.1.11 后 Docker 环境自动宕机重启。(**环境稳定性**)
- **#5162 [Bug]**: 对话思考逻辑进入死循环。(**逻辑缺陷**，导致完全卡死)
- **#5165 [Question]**: 打包安装后白屏。(**部署失败**，与打包脚本引用错误相关)

**中严重度 (功能受损但有替代路径)：**
- **#5064 [Bug]**: 定时任务无法触发且不可编辑。(**核心自动化功能失效**)
- **#5140 [Bug]**: v1.1.11.post2 附件下载失败（docx/pdf 报 404）。(**文件传输功能受损**)
- **#5163 [Bug]**: Gemini 工具调用在 v1.1.11.post2 回归。(**第三方模型集成退化**)
- **#5166 [Bug]**: Python 3.13 环境安装 TeamChat 插件失败（缺少 `imghdr`）。(**环境兼容性**)

**低严重度 (显示或配置问题)：**
- **#5137 [Bug]**: 记忆搜索配置在未展开卡片时保存会丢失。（**已修复**，PR #5144）
- **#5098 [Bug]**: 记忆搜索工具 UI 结果显示异常（`unknown`）。（**已修复**，PR #5154）
- **#5148/5143 [Bug]**: 网页 UI 数学公式（根号）渲染错误。
- **#5132 [Question]**: 配置 `enable_thinking: false` 后 Thinking 仍显示。（**配置不生效**）

**已修复待验证**： Issues #5137, #5098, #5142, #5148, #5143 已有对应关闭的 PR，需用户验证修复效果。

## 6. 功能请求与路线图信号
**高可能性纳入下一版本 (已有活跃 PR)：**
- **视觉模型回退** (PR #5069)：当主模型为纯文本时，可配置视觉模型将图片/视频转为文本描述，增强多模态能力。
- **数据分析插件 (DataPaw)** (PR #4622)：贡献的插件，提供 12 项 BI 技能，扩展数据工作流。
- **每轮 Token 与上下文用量弹窗** (PR #5130)：在 Console 聊天界面显示详细用量，提升透明度。

**中长期路线图信号 (讨论或规划中)：**
- **Agent 团队/群协作能力** (Issue #5139)：用户强烈要求类似 WorkBuddy 和 JiuwenSwarm 的多 Agent 协作，是 **高级智能体编排** 的关键需求。
- **支持 Kimi for Coding / UV 白名单** (Issue #5156)：用户希望将 `kimi-for-coding` 加入白名单，以利用现有订阅，反映 **模型提供商生态接入** 的灵活性需求。
- **Slack 频道支持** (Issue #5152)：扩展企业协作渠道。
- **Agent OS Driver 抽象层** (PR #5067)：统一 MCP/A2A/ACP 等外部能力调用，是 **架构解耦** 的重要一步，影响深远。
- **Runtime 2.0 模块化架构** (PR #5078)：用 `ToolCoordinator` 替换单体 `Runner`，实现更精细的工具调用生命周期控制，是 **核心运行时重构**。

## 7. 用户反馈摘要
从 Issues 评论中提炼的核心痛点：
1.  **稳定性与可靠性是首要关切**：多个报告指向 **资源泄漏**（进程增加、内存飙升）、**会话状态管理失败**（长对话卡死、刷新丢失、Coding 模式异常）以及 **环境特定崩溃**（Docker、Windows、Python 3.13）。用户对生产环境部署信心不足。
2.  **核心功能存在缺陷**：**定时任务** 作为自动化关键功能完全失效且不可配置；**附件下载** 在非文本格式上失败，影响文档工作流。
3.  **UI/UX 细节待打磨**：数学公式渲染错误、记忆搜索结果 `unknown`、配置项（如 `enable_thinking`）不生效、冗余信息展示（Issue #5145）等，影响专业用户信任度。
4.  **生态集成与扩展需求强烈**：用户明确要求接入更多模型（Kimi Coding）、更多渠道（Slack）以及高级协作模式（Agent Team），显示社区期待 QwenPaw 成为 **更通用的智能体平台** 而非单一聊天工具。
5.  **部署与打包体验不佳**：打包脚本错误导致白屏、插件安装环境兼容性问题，增加了自托管用户门槛。

## 8. 待处理积压
以下重要 Issue/PR 创建时间较长或影响面大，需维护团队优先关注：
- **Issue #4727 (迁移到 AgentScope 2.0)**：创建于 2026-05-27，距今近 3 周，评论 10 条，👍 2。这是 **最高优先级的路线图议题**，但似乎缺乏明确的时间表和迁移指南，社区等待官方推进计划。
- **PR #4622 (DataPaw 数据分析插件)**：创建于 2026-05-22，距今近 4 周，状态为 `Under Review`。这是一个完整的插件贡献，若长期未合并可能打击社区贡献积极性。
- **PR #5069 (视觉模型回退)**：创建于 2026-06-10，评论活跃，是重要的多模态增强功能，应加速审阅。
- **Issue #5064 (定时任务 Bug)**：创建于 2026-06-10，评论 11 条，是 **高严重度 Bug**，但尚未有修复 PR 关联，需立即分配开发资源。
- **Issue #5138 (Windows 进程泄漏)** 与 **#5161 (长对话无响应)**：均为今日报告的高严重度稳定性问题，需紧急调查根因并发布热修复。

---
**报告生成说明**：本报告基于 GitHub 公开数据自动分析生成，旨在提供客观的项目健康度快照。所有链接均指向原 Issue/PR 页面。

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