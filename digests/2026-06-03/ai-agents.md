# OpenClaw 生态日报 2026-06-03

> Issues: 454 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-06-03 00:44 UTC

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

# OpenClaw 项目动态日报 (2026-06-03)

## 今日速览
OpenClaw 项目在过去 24 小时维持极高活跃度，共处理 **454 条 Issues 更新**（新开/活跃 272，已关闭 182）和 **500 条 PR 更新**（待合并 390，已合并/关闭 110）。社区讨论聚焦于 **session 状态管理、消息传递可靠性及跨平台 UI 稳定性**，多个 P1 级回归问题引发广泛关注。尽管无新版本发布，但大量修复 PR 已进入审核流程，项目整体处于“修复驱动”的密集迭代阶段，人工审核瓶颈成为当前合并速度的主要制约。

---

## 项目进展
今日合并的 PR 数量有限，但修复集中在关键路径：
- **#89601**（已合并）：修复 `poll` 参数误判导致的消息发送阻塞问题，提升 outbound 消息传递的耐久性。
- **#71203**（已合并）：启动时刷新所有配置代理的 `models.json` 缓存，解决模型发现不一致问题。

然而，**390 条 PR 处于待合并状态**，其中多数标记为 `needs proof` 或 `ready for maintainer look`，表明严格的证明要求和审核资源不足导致显著积压。项目整体推进缓慢，核心功能改进（如 session 迁移、消息去重）仍需数日才能进入合并阶段。

---

## 社区热点
讨论最活跃的 Issues（按评论数排序）：
1. **[#52875](https://github.com/openclaw/openclaw/issues/52875)**（21 评论）：`session_send` 返回“no session found”的回归问题，影响 agent 间通信，社区正复现 2026-3-22 升级后的状态丢失。
2. **[#88838](https://github.com/openclaw/openclaw/issues/88838)**（17 评论）：核心 session/transcript 迁移至 SQLite 的分阶段实施策略，讨论如何通过分支抽象降低大重写风险。
3. **[#63918](https://github.com/openclaw/openclaw/issues/63918)**（17 评论）：cron 任务向 OpenAI 发送不支持的 `thinking=none` 参数（如 `gpt-5-nano`），导致 400 错误，需调整默认值。

这些议题凸显社区对 **状态一致性、向后兼容性及配置健壮性** 的高度关切。

---

## Bug 与稳定性
### 高严重性（P1）问题报告：
1. **[#67035](https://github.com/openclaw/openclaw/issues/67035)**（P1）：Windows WebChat UI 回归（2026.4.14），输入被吞噬、流式回复不可见，影响桌面用户体验。
2. **[#55334](https://github.com/openclaw/openclaw/issues/55334)**（P1）：`sessions.json` 无界增长导致网关 OOM（~50-100 MB/min），`skillsSnapshot` 重复存储且未清理。
3. **[#88312](https://github.com/openclaw/openclaw/issues/88312)**（P1）：Codex app-server 在 2026.5.27 后出现 turn-completion stall，回归此前修复。
4. **[#86519](https://github.com/openclaw/openclaw/issues/86519)**（P1）：Telegram 在 5.20 更新后重复发送回复（2-10x），消息去重逻辑失效。
5. **[#52249](https://github.com/openclaw/openclaw/issues/52249)**（P1）：ACP 父会话在子会话完成后卡住，需手动刷新 UI。

**修复状态**：部分问题已有对应 PR 在审，如 #89643（保留插件状态）可能缓解 #52875，#89640（保障发送耐久性）针对消息丢失。但多数 P1 问题尚无已合并修复，稳定性风险持续。

---

## 功能请求与路线图信号
### 新功能需求：
- **[#39604](https://github.com/openclaw/openclaw/issues/39604)**（👍 9）：添加 `tools.web.fetch.allowPrivateNetwork` 配置，允许 `web_fetch` 访问内网地址（默认 false），满足企业场景需求。
- **[#81061](https://github.com/openclaw/openclaw/issues/81061)**：请求 `before_route_inbound_message` 预路由钩子，用于通道桥接/代理，属架构改进。
- **[#84216](https://github.com/openclaw/openclaw/issues/84216)**（👍 3）：控制菜单“最近会话”添加下拉折叠，优化小屏幕 UI。

### 相关 PR 进展：
- **#87072**（待合并）：Telegram 可选交错进度通道，提升实时反馈体验。
- **#78172**（待合并）：TTS 添加 `skipEmojiSymbols` 选项，避免符号朗读。
- **#89349**（待合并）：允许 cron 作业的 `toolsAllow: ["*"]` 覆盖静态工具配置文件，增强灵活性。

高需求功能（如内网访问）仍处讨论阶段，需产品决策；UI 优化和 TTS 改进已接近合并，可能纳入下一版本。

---

## 用户反馈摘要
从 Issues 摘要与评论提炼的核心痛点：
- **状态管理混乱**：升级后 session 状态丢失（#52875）、父会话卡住（#52249）、Codex 状态不同步（#88312），用户对升级信心不足。
- **消息可靠性担忧**：Slack、Telegram、Discord 均报告消息静默丢弃（#80715、#86519、#81978），关键通信场景受冲击。
- **UI/UX 缺陷**：Windows WebChat 渲染故障（#67035）和输入处理问题（#74369 PR 修复）影响桌面可用性。
- **认证中断**：Codex 和 MiniMax OAuth 令牌无法自动刷新（#87650、#77467），导致服务周期性中断。
- **性能隐患**：`sessions.json` 无界增长（#55334）和事件循环阻塞（#89040 PR）威胁长期运行稳定性。

积极反馈：社区认可分阶段迁移策略（#88838）和对细节的修复（如 #89640 的发送耐久性），但普遍期望更快的 P1 问题响应。

---

## 待处理积压
### 长期未响应关键 Issue（标记 stale 或超期）：
- **[#41199](https://github.com

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-06-03)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态呈现 **“核心稳定与边缘创新并行”** 的高分化态势。以 **OpenClaw** 为代表的成熟项目正深陷 **状态管理与消息可靠性** 的技术债泥潭，修复驱动但受制于审核瓶颈；与此同时，**Zeroclaw、PicoClaw、IronClaw** 等新一代项目以更快的迭代节奏推进 **多代理运行时、终端交互（TUI）、企业级集成** 等前沿方向。社区共识已明确：**MCP 协议集成、跨平台 UI 一致性、安全加固** 是下一阶段的基础设施竞争焦点，而垂直场景（电商、教育）的深度适配则成为差异化突破口。

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | Release | 健康度评估 | 核心特征 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 454 (新/活跃 272) | 500 (待合并 390) | 无 | **中** (高活跃但积压严重，审核瓶颈) | 修复驱动，社区规模大，P1 问题集中 |
| **NanoBot** | 10 (新开 7) | 28 (已合并 18) | 无 | **高** (活跃度高，合并高效) | WebUI 优化，MCP 稳定性，渠道扩展 |
| **Zeroclaw** | 49 | 50 | **v0.8.0-beta-2** | **高** (版本发布+高PR合并) | TUI 优先，多代理，安全加固 |
| **PicoClaw** | 3 | 14 (已合并 14) | **v0.2.9-nightly** | **高** (修复密集，迭代快) | 轻量，资源管理，API 兼容性 |
| **NanoClaw** | 1 | 7 (已合并 4) | 无 | **中** (开发活跃，社区沉寂) | 运行时标准化，插件系统，安全 |
| **IronClaw** | 29 (新开 27) | 50 (已合并 31) | 无 | **高** (核心审计，快速迭代) | Reborn 运行时，企业集成，QA 驱动 |
| **LobsterAI** | 0 | 50 (已合并 47) | 无 | **中** (开发活跃，社区无讨论) | 电商垂直，模型能力，协作功能 |
| **EasyClaw** | 0 | 0 | **v1.8.24~27** | **中** (内部交付，社区失声) | 电商 SaaS，OAuth，客服调度 |
| **TinyClaw** | 0 | 0 | 无 | **低** (停滞) | - |
| **Moltis** | 0 | 0 | 无 | **低** (停滞) | - |
| **CoPaw** | 48 | 32 | 无 (v1.1.11b1 准备) | **高** (安全响应快，迁移启动) | AgentScope 2.0 迁移，安全加固 |
| **ZeptoClaw** | 0 | 0 | 无 | **低** (停滞) | - |

**注**：健康度综合考量活跃度、合并效率、社区参与及版本节奏。

## 3. OpenClaw 在生态中的定位
*   **优势**：作为生态 **“事实参照”**，拥有最大的社区基数与最全面的功能覆盖（多通道、多模型、插件系统），其问题（如 `sessions.json` 无界增长）常成为其他项目的预警案例。
*   **技术路线差异**：采用 **“单体仓库+严格审核”** 的保守路线，追求企业级稳定性，但导致 **“修复驱动”** 的迭代模式与显著的 PR 积压（390 条）。与 Zeroclaw 的 **“模块化+TUI 优先”**、PicoClaw 的 **“轻量嵌入式”** 形成鲜明对比。
*   **社区规模**：绝对数量领先（日处理 954 条更新），但 **“讨论热度/问题数”** 比例低于 IronClaw 等，表明社区更多处于 **“问题报告”** 而非 **“方案共创”** 阶段。

## 4. 共同关注的技术方向
| 技术方向 | 涉及项目 | 具体诉求与表现 |
| :--- | :--- | :--- |
| **状态管理与一致性** | OpenClaw, NanoBot, IronClaw | OpenClaw 的 `session_send` 回归、NanoBot 的孤 `tool` 消息、IronClaw 的 Reborn 审计（门控重放、预算准确性）均指向状态机设计缺陷。 |
| **消息传递可靠性** | OpenClaw, NanoBot, Zeroclaw | OpenClaw 消息阻塞、NanoBot 静默丢弃、Zeroclaw Telegram 重复发送，反映 **“至少一次”** 语义在分布式通道中的实现挑战。 |
| **MCP 协议集成深化** | NanoBot, IronClaw, Zeroclaw, NanoClaw | 从“能连接”到“稳定连接”（NanoBot MCP 中断）、再到“子代理访问”（NanoBot #4166）和“HTTP-only 传输”（NanoClaw #2672），集成进入深水区。 |
| **跨平台 UI/UX 一致性** | OpenClaw, NanoBot, Zeroclaw | OpenClaw Windows WebChat 回归、NanoBot WebUI 路由丢失、Zeroclaw 统一 TUI 导航，凸显 **“一次开发，多处运行”** 的体验割裂问题。 |
| **安全左移与加固** | 全生态 | NanoBot SSRF 防护、NanoClaw 容器注入修复、Zeroclaw 工具允许列表绕过、IronClaw OAuth 凭证传递，安全从“附加项”变为 **“核心需求”**。 |

## 5. 差异化定位分析
| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全功能企业平台 | 需要高度定制与集成的企业开发者 | 单体仓库，严格审核，插件系统，`sessions.json` 中心化存储（正迁移 SQLite） |
| **Zeroclaw** | 终端优先体验，多代理协作 | 开发者、系统管理员、终端爱好者 | Rust 编写，`zerocode` TUI 作为一等界面，多代理配置原生支持 |
| **PicoClaw** | 轻量、资源优化、嵌入式 | 资源受限环境、边缘设备开发者 | Go 编写，强调 goroutine 管理与内存效率，`/context` 等调试工具 |
| **NanoBot** | WebUI 友好，MCP 生态集成 | 偏好 Web 界面、需连接外部工具集的用户 | Python 编写，WebUI 为核心，MCP 服务作为关键扩展点 |
| **IronClaw** | Reborn 核心，企业协作集成 | 需要高可靠、审计追踪的企业团队 | 围绕 `agentloop-turns` 等 Reborn 模块构建，深度集成 Notion/Gmail 等企业 SaaS |
| **LobsterAI / EasyClaw** | 垂直场景（电商） | 电商卖家、客服团队 | 深度绑定电商平台 API 与工作流（OAuth、客服调度、多店铺管理） |

## 6. 社区热度与成熟度
*   **快速迭代阶段（功能/架构探索）**：
    *   **Zeroclaw**：发布 v0.8.0-beta-2，TUI 与多代理是核心卖点，社区测试反馈积极。
    *   **PicoClaw**：高频合并修复与 nightly 构建，聚焦稳定性与兼容性，迭代节奏快。
    *   **IronClaw**：围绕 Reborn 进行大规模审计与修复，QA 驱动，社区参与度高（问题报告密集）。
*   **质量巩固阶段（修复债务）**：
    *   **OpenClaw**：陷入 **“问题报告-修复-积压”** 循环，P1 问题持续涌现，需重构审核流程或拆分仓库。
    *   **NanoBot**：虽修复高效，但 MCP 连接、状态管理等核心问题反复，需架构级解决方案。
*   **沉寂/失声阶段（社区参与低）**：
    *   **NanoClaw, LobsterAI, EasyClaw**：内部开发活跃（PR 合并/版本发布），但 GitHub Issues/讨论区几乎无互动。风险在于 **“脱离社区反馈”**，可能偏离真实需求。
*   **停滞阶段**：TinyClaw, Moltis, ZeptoClaw 长期无活动，生态边缘化。

## 7. 值得关注的趋势信号
1.  **MCP 成为新“标准库”**：从 NanoBot 的“连接问题”到 IronClaw 的“驱动失败”，再到 NanoClaw 的“配置兼容”，**MCP 已从“可选集成”变为“必答题”**。开发者需投入资源确保稳定、安全的 MCP 客户端实现，并考虑子代理隔离访问（NanoBot #4166）。
2.  **TUI 作为“开发者体验”新战场**：Zeroclaw 的 `zerocode` 和 IronClaw 的终端操作表明，**终端 UI 正成为高级用户与运维场景的首选**，其流式响应、工具调用可视化能力是核心竞争力。
3.  **状态管理架构重构潮**：OpenClaw 迁移 SQLite、NanoBot 修复 `last_consolidated`、IronClaw 审计 Reborn 状态机，均指向 **“中心化会话存储+事件溯源”** 或 **“更严谨的状态机”** 是解决一致性问题的根本方向。新项目应从一开始就设计可审计的状态模型。
4.  **安全从“合规”变为“竞争力”**：SSRF 防护（NanoBot）、容器注入（NanoClaw）、工具允许列表绕过（Zeroclaw）、OAuth 凭证（IronClaw）的连续修复，说明 **安全漏洞直接影响核心功能可用性**。安全设计必须融入协议层与运行时，而非事后修补。
5.  **垂直场景深度绑定**：LobsterAI 与 EasyClaw 在电商领域的持续迭代（多店铺 OAuth、客服调度）证明，**通用智能体需通过垂直场景的“工作流闭环”实现商业落地**。通用项目可借鉴其“配置即工作流”的设计思想。

**对 AI 智能体开发者的核心建议**：
*   **优先解决状态与消息的“ exactly-once” 语义**，这是所有通道可靠性的基石。
*   **将 MCP 客户端视为一级公民**，投入资源实现连接池、会话隔离与错误恢复。
*   **评估 TUI 作为部署与运维选项**，尤其面向技术用户时。
*   **在架构设计阶段引入安全威胁模型**，特别是工具调用、外部数据摄入和容器化部署环节。
*   **考虑“配置驱动的工作流”**，降低垂直场景的定制门槛，而非仅提供 API。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-03)

## 1. 今日速览
项目今日保持**极高活跃度**，过去24小时内共处理 **28 条 Pull Request**（其中 18 条已合并/关闭），并围绕 **10 个 Issues** 展开讨论（7 条新开/活跃，3 条已关闭）。开发重点集中于 **WebUI 用户体验优化**、**MCP 服务稳定性与安全性**、**邮件渠道功能增强** 以及 **核心运行时健壮性修复**。社区贡献者参与积极，多个跨领域问题得到同步推进，项目整体健康度良好，迭代节奏快。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展（今日合并/关闭的重要 PR）
以下 PR 已关闭/合并，标志着项目在多个关键方向取得实质性进展：

*   **基础设施与稳定性**
    *   **[#4169] fix(session): reset out-of-range last_consolidated to recover hidden history** - 修复了因会话状态损坏导致历史记录完全隐藏的严重问题，提升了会话恢复能力。
    *   **[#4155] fix(runner): prevent read_file offload loop** - 修复了 `read_file` 工具结果持久化后可能无法恢复的循环依赖问题，确保大文件读取的可靠性。
    *   **[#4123] fix(mcp): reject unsafe HTTP URLs before probe** - 在 MCP 连接探测前加入 SSRF 防护，显著提升了服务连接的安全性。
    *   **[#4134] fix(ws): emit error event on permission denial in _dispatch_envelope** - 完善了 WebSocket 通道的错误事件机制，便于前端诊断权限问题。

*   **用户体验与界面 (WebUI)**
    *   **[#4163] feat(webui): add fork-from-here for user messages** - 新增“从此处分支”功能，允许用户基于历史对话节点重新发起对话，极大提升交互灵活性。
    *   **[#4150] fix(webui): Fix WebUI refresh location routing** - 修复了页面刷新后路由状态丢失问题，改善了单页应用（SPA）的导航体验。
    *   **[#4151] fix(webui): sort Chats group among projects by recency** - 优化了侧边栏会话列表的排序逻辑，使“聊天”分组按最近活动时间正确排序。
    *   **[#4149] fix(webui): Support fallback copy for WebUI replies** - 为回复内容复制功能添加了 Clipboard API 失败时的降级方案，增强了在受限环境（如非 HTTPS、WebView）下的可用性。

*   **渠道功能增强**
    *   **[#4162] feat(email): add file attachment support to email channel** - 为邮件渠道添加了附件发送功能，支持媒体文件并具备大小限制与优雅降级。
    *   **[#4146] feat(channels): Add Napcat (QQ) channel** - 正式引入对 Napcat（OneBot v11）QQ 机器人的官方支持，扩展了即时通讯渠道。

*   **核心功能与架构**
    *   **[#4109] feat: Add lightweight RAG for memory retrieval** - 集成了基于本地嵌入的轻量级 RAG 用于记忆检索，增强了长期上下文利用能力。
    *   **[#3990] refactor(dream): replace two-phase Dream class with simple cron + process_direct** - 重构了 `Dream` 类，简化了梦境（自动化记忆处理）流程，提升了代码可维护性。

## 4. 社区热点
今日讨论焦点集中在 **MCP 服务集成** 与 **WebUI 部署/兼容性** 两大领域：

*   **MCP 连接稳定性与权限模型** (Issues #4168, #4166, PRs #4123, #4169)
    *   **诉求**：用户报告 MCP 服务器连接会随机中断（`McpError: Session terminated`），且子代理（subagent）无法访问 MCP 工具。
    *   **分析**：这反映了 MCP 作为新兴协议在长连接管理、会话隔离和错误恢复方面仍需加强。社区已开始从连接探测（PR #4123）、会话状态修复（PR #4169）和配置选项（Issue #4166）多角度寻求解决方案。

*   **WebUI 在 uv 工具链下的安装与运行问题** (Issue #4158, PRs #4164, #4115, #4157)
    *   **诉求**：通过 `uv tool install` 安装的 NanoBot 无法在 WebUI 中正确安装 CLI 应用，因 `pip` 模块缺失。
    *   **分析**：这触及了现代 Python 打包工具链（uv vs pip）的兼容性痛点。PR #4164 提供了自动修复方案，而 PR #4115 和 #4157 则体现了团队在持续拆分 WebUI 依赖、提升启动健壮性方面的系统性工作。

## 5. Bug 与稳定性（按严重程度排列）
| 严重程度 | 问题描述 | 关联 Issue | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **高** | 对话历史中存在孤立的 `tool` 消息（无对应 `tool_call`），导致 API 请求被拒绝。 | [#4006](https://github.com/HKUDS/nanobot/issues/4006) | **待修复**。PR #3984 部分修复了 `tool_call_id` 替换，但根本问题仍在。 |
| **高** | 使用不支持 `response_format` 参数的 OpenAI 兼容 API（如 Agnes AI）时，`generate_image` 工具直接失败。 | [#4167](https://github.com/HKUDS/nanobot/issues/4167) | **待修复**。需要为图片生成 provider 增加参数兼容性检查或降级逻辑。 |
| **中** | MCP 服务器连接随机中断，需重启 NanoBot 恢复。 | [#4168](https://github.com/HKUDS/nanobot/issues/4168) | **部分缓解**。PR #4123 提升了连接安全性，但会话保持机制可能仍需加强。 |
| **中** | `read_file` 工具在结果被持久化到磁盘后，可能无法正确恢复大文件内容。 | [#4153](https://github.com/HKUDS/nanobot/issues/4153) | **已修复**。PR [#4155](https://github.com/HKUDS/nanobot/pull/4155) 已合并， exempt `read_file` 通用结果卸载机制。 |
| **低** | 邮件渠道在工具调用后发送空邮件（因进度消息被误处理）。 | [#4165](https://github.com/HKUDS/nanobot/pull/4165) | **已修复**。PR [#4165](https://github.com/HKUDS/nanobot/pull/4165) 已合并，跳过进度消息。 |

## 6. 功能请求与路线图信号
*   **高可能性（已有实现 PR）**：
    *   **自定义图片生成 Provider 支持** (Issue [#4132](https://github.com/HKUDS/nanobot/issues/4132))：允许 `config.json` 中配置的第三方图片生成 API（如 Agnes AI）被 `generate_image` 工具自动使用。**相关实现工作可能已在进行中**，因 Issue #4167 正是与此相关的兼容性 Bug。
    *   **子代理访问 MCP 服务** (Issue [#4166](https://github.com/HKUDS/nanobot/issues/4166))：为 `spawn()` 创建的子代理提供访问 MCP 工具的配置选项。**需求明确，可能进入下一版本**。
*   **探索性/长期需求**：
    *   **云平台部署层** (PR [#4139](https://github.com/HKUDS/nanobot/pull/4139))：提案为 HuggingFace Spaces、ModelScope 等平台提供第一方部署支持。这是一个较大的架构扩展，目前处于提案阶段，但反映了项目向“开箱即用”部署体验发展的方向。

## 7. 用户反馈摘要
从 Issues 描述中提炼的核心痛点：
*   **生产环境兼容性焦虑**：用户积极尝试将 NanoBot 与各类 OpenAI 兼容 API（Agnes AI）、现代 Python 工具链（uv）及第三方服务（Notion MCP）集成，但常遇到“应该工作却失败”的情况。这要求项目在**协议兼容性**和**环境假设**上必须更加宽容和清晰。
*   **状态管理复杂性**：`tool_call`/`tool_result` 配对、会话 `last_consolidated` 偏移量、MCP 会话生命周期等问题反复出现，表明**状态同步与会话管理**是核心难点，用户对数据一致性和服务稳定性高度敏感。
*   **功能边界期待**：用户期望子代理能继承父级工具（MCP）、WebUI 能管理 CLI 应用、邮件能带附件。这体现了用户将 NanoBot 视为**统一智能体平台**，而非单一聊天机器人，对**工具生态整合**有强烈期待。

## 8. 待处理积压
*   **长期未响应关键 Issue**：
    *   **[#1168] Nanobot 连接 Notion MCP失败！** (创建于 2026-02-25) - 一个近 4 个月未解决的高优先级集成问题。用户明确表示 Claude 客户端可连，而 NanoBot 不行，暗示可能存在 MCP 客户端实现或配置解析的特定缺陷。**需维护者优先介入排查**。
*   **高互动但未关闭 Issue**：
    *   **[#4006] nanobot-ai conversation history contains orphaned tool results** - 尽管有 PR #3984 的修复尝试，但问题描述显示根本原因未除，且影响 API 合规性。**需核心开发者深度诊断并设计根治方案**。
    *   **[#4167] Image generation fails with OpenAI-compatible APIs** - 新开高影响力 Bug，直接阻断了特定用户群体的核心工作流。**需尽快提供兼容性补丁**。

---
**报告生成时间**：2026-06-03  
**数据来源**：NanoBot GitHub (github.com/HKUDS/nanobot) 过去 24 小时活动  
**报告说明**：本报告基于提供的 Issues 与 PR 元数据（标题、摘要、状态、时间戳）生成，旨在客观反映项目动态与社区信号。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-03)

## 1. 今日速览
项目在过去24小时保持极高活跃度，共处理49个Issues和50个PRs，同时发布了重要的v0.8.0-beta-2版本。社区正积极测试新版本，集中反馈与DeepSeek、Kimi等模型提供商的兼容性问题，以及Telegram等通道的安全隐患。核心开发团队同步推进多代理运行时、zerocode TUI体验优化及安全加固，项目整体处于快速迭代与稳定化并行的关键阶段。

## 2. 版本发布
**新版本：** [v0.8.0-beta-2](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0-beta-2)  
**核心更新：**
- **zerocode TUI**：全新终端UI，支持在终端内直接运行和操作代理，提供流式响应、工具调用、审批提示的Ratatui渲染。
- **多代理运行时**：初步支持多代理配置与协作，为后续集群功能打下基础。
- **ACP协议扩展**：支持diff/file-proposal消息类型，便于在TUI和Web界面展示并-counter-propose文件编辑。

**破坏性变更/迁移注意：**
- 作为beta版本，API和配置格式可能仍有调整。用户若从v0.7.x升级，需注意多代理配置语法变化。
- 部分通道（如Twitter/X）在默认lean构建中未包含，需启用`channels-full`特性或单独编译。
- 建议查阅[发布说明](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0-beta-2)及迁移指南。

## 3. 项目进展
过去24小时有17个PRs被合并/关闭，关键进展包括：
- **安全修复**：PR [#7070](https://github.com/zeroclaw-labs/zeroclaw/pull/7070) 将Twitter/X通道加入默认特性集，解决预编译二进制文件缺失问题（对应Issue #7069）。
- **安全加固**：PR [#7063](https://github.com/zeroclaw-labs/zeroclaw/pull/7063) 修复通道代理绕过工具允许列表的漏洞，确保`start_channels` respects `SecurityPolicy.allowed_tools`。
- **用户体验**：PR [#7118](https://github.com/zeroclaw-labs/zeroclaw/pull/7118) 统一zerocode导航约定并修复死键绑定，提升TUI操作一致性。
- **提供商支持**：PR [#6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842) 增加NEAR AI Cloud提供商（OpenAI兼容），扩展模型后端选择。
- **文档改进**：PR [#7023](https://github.com/zeroclaw-labs/zeroclaw/pull/7023) 实现文档版本化部署与版本选择器；PR [#7116](https://github.com/zeroclaw-labs/zeroclaw/pull/7116) 新增OpenAI Codex通过ChatGPT订阅使用的文档。

## 4. 社区热点
讨论最活跃的Issues（按评论数）：
- **Issue #6059**（15评论，已关闭）：DeepSeek-V4 API格式不兼容，涉及thinking模式错误。反映社区对主流中国模型支持的迫切需求，修复后需持续验证。
- **Issue #5600**（9评论，开放）：Kimi-code提供商在流式聊天中调用工具时API报错（400 Bad Request）。高优先级（p1），阻塞工作流，亟需修复。
- **Issue #6391**（4评论，开放）：守护节点的真实心跳追踪需求，当前仅凭WebSocket连接状态判断“在线”不可靠。体现多节点部署场景下的运维痛点。
- **Issue #7069**（3评论，已关闭）：Twitter通道在预编译二进制中缺失，尽管源码和文档已支持。凸显构建配置与文档同步的重要性。

## 5. Bug 与稳定性
按严重程度（优先级）排列：
- **P1 - 工作流阻塞**：
  - [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) Kimi流式工具调用失败（开放，无明确fix PR）。
  - [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068) Telegram通道可能发送Codex草稿内容作为最终回复（开放，无fix PR）。
  - [#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063) 通道代理绕过工具允许列表（已关闭，PR [#7063](https://github.com/zeroclaw-labs/zeroclaw/pull/7063) 修复）。
- **P2 - 功能降级**：
  - [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4不兼容（已关闭，修复已合并）。
  - [#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001) 多代理配置下TTS语音回复使用错误代理的提供商（已关闭，修复已合并）。
  - [#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795) XML格式`tool_result`标签泄露到通道响应（开放，无fix PR）。
- **P3 - 轻微问题**：
  - [#7037](https://github.com/zeroclaw-labs/zeroclaw/issues/7037) README中Discord邀请链接失效（开放，文档修复待合并）。

## 6. 功能请求与路线图信号
用户提出多项增强需求，部分已进入开发队列：
- **多节点/集群管理**：Issue [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) 请求`zeroclaw node add <url>` CLI命令注册远程守护进程，与dashboard节点页面配合。PR [#6970](https://github.com/zeroclaw-labs/zeroclaw/pull/6970) 作为v0.8.1集成队列追踪器，暗示该功能可能在v0.8.1周期推进。
- **安全增强**：Issue [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) 要求更强配对码（默认32字符），Issue [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) 提出气隙执行模式（Unix socket隔离）。均标记为高风险，可能影响v0.8.0稳定版或v0.8.1。
- **配置UX统一**：Issue [#7117](https://github.com/zeroclaw-labs/zeroclaw/issues/7117) 要求CLI、Quickstart、zerocode、Web配置界面达到一致体验。PR [#7118](https://github.com/zeroclaw-labs/zeroclaw/pull/7118) 已开始统一zerocode导航，属于v0.8.0稳定化工作。
- **通道体验**：Issue [#7113](https://github.com/zeroclaw-labs/zeroclaw/issues/7113) 为Slack通道添加工作进度可见性，避免用户因沉默而认为请求卡死。

## 7. 用户反馈摘要
从Issues描述与评论提炼：
- **痛点**：
  - **提供商兼容性**：DeepSeek、Kimi等非OpenAI标准API格式支持不足，导致S1/S2级阻塞，用户被迫切换模型或自行修补。
  - **通道可用性**：Twitter/X等社交通道在默认二进制中缺失，文档与构建脱节；Telegram通道存在安全风险（发送内部草稿）。
  - **安全配置**：6位数字配对码过弱；通道代理可能绕过工具允许列表，引发权限担忧。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-03)

**报告周期**：过去24小时 (2026-06-02 至 2026-06-03)  
**数据来源**：GitHub 仓库 (github.com/sipeed/picoclaw)

---

### 1. 今日速览
项目在过去24小时维持**高活跃度**，共处理14个PR和3个Issues。开发重点集中于**稳定性修复**与**用户体验改进**，核心合并包括LLM请求重试机制、资源泄漏修复及多API提供商兼容性调整。社区讨论聚焦于流式请求支持与WebSocket协议增强等需求。同时发布了`v0.2.9-nightly`自动构建版本，显示项目迭代迅速，但需注意nightly版本可能存在不稳定性。

---

### 2. 版本发布
- **新版本**：`v0.2.9-nightly.20260602.426046fc` (Nightly Build)
  - **性质**：自动构建的预览版本，**可能不稳定**，建议谨慎使用。
  - **更新内容**：基于`main`分支的最新提交（commit `426046fc`）构建，包含近期合并的多个修复与增强。
  - **完整更新日志**：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
  - **迁移注意**：作为nightly版本，不保证向后兼容，生产环境应继续使用稳定版`v0.2.8`。

---

### 3. 项目进展 (已合并/关闭的重要PR)
以下PR于今日合并或关闭，直接推进了项目核心质量与功能：

| PR | 标题 | 影响 | 链接 |
|----|------|------|------|
| **#2991** | `fix(agent): retry transient LLM HTTP errors using provider error classifier` | **核心稳定性**：统一重试逻辑，对OpenRouter/OpenAI等提供商的 transient HTTP 500 错误进行自动重试，避免因单点故障导致会话失败。 | [链接](https://github.com/sipeed/picoclaw/pull/2991) |
| **#2986** | `fix(tools): add Stop() to SessionManager to prevent goroutine leak` | **资源管理**：为`SessionManager`添加关闭机制，解决测试或多次实例化时的goroutine泄漏问题。 | [链接](https://github.com/sipeed/picoclaw/pull/2986) |
| **#2989** | `fix(providers): add Zhipu API error code 1210 to format error patterns` | **API兼容性**：将智谱AI错误码1210加入分类器，修复微信渠道发送图片时的参数错误问题（对应Issue #2943）。 | [链接](https://github.com/sipeed/picoclaw/pull/2989) |
| **#2985** | `fix(context): show both summarize and compress thresholds in /context` | **用户体验**：改进`/context`命令输出，同时显示`summarize_token_percent`（软阈值）和压缩硬阈值，减少用户困惑。 | [链接](https://github.com/sipeed/picoclaw/pull/2985) |
| **#2992** | `fix(session): skip main-session alias during history promotion` | **数据一致性**：修复升级后新Web UI会话错误附加旧消息的问题，确保历史迁移逻辑正确。 | [链接](https://github.com/sipeed/picoclaw/pull/2992) |

**整体推进评估**：今日合并的PR覆盖了**错误处理、资源管理、多提供商适配、CLI工具反馈、会话数据迁移**五大关键领域，显著提升了系统的健壮性、可观测性和跨平台兼容性，为`v0.2.9`稳定版发布奠定基础。

---

### 4. 社区热点
最活跃的讨论围绕**功能增强**与**协议完善**：

| 议题 | 热度 | 核心诉求 | 链接 |
|------|------|----------|------|
| **Issue #2404** | 高 (10评论, 1👍) | 请求在配置文件中添加`"streaming": true`选项，以支持类似OpenAI Python客户端的流式HTTP请求，满足实时交互场景需求。 | [链接](https://github.com/sipeed/picoclaw/issues/2404) |
| **PR #2987** | 中 (关联Issue #2958) | 修复流式会话中`tool_calls`消息被误过滤的问题，直接影响工具调用链的完整性。 | [链接](https://github.com/sipeed/picoclaw/pull/2987) |
| **Issue #2984** | 新开 (0评论, 1👍) | 为Pico WebSocket协议客户端添加显式的回合完成信号，解决外部客户端无法确定性判断Agent处理结束的问题。 | [链接](https://github.com/sipeed/picoclaw/issues/2984) |

**诉求分析**：社区对**实时流式能力**和**协议确定性**的需求强烈。Issue #2404的长期讨论（4月7日创建）表明该功能是常见痛点；新开的#2984则指向生态集成（外部客户端）的标准化需求。相关PR #2987的修复表明流式功能的基础框架已存在，但细节仍需打磨。

---

### 5. Bug 与稳定性
今日报告的Bug及对应修复情况：

| 严重度 | 问题描述 | 状态 | 关联PR/Issue |
|--------|----------|------|--------------|
| **高** | 微信渠道发送图片调用智谱GLM-5-Turbo API返回错误码1210（参数错误） | **已修复** | Issue #2943 → PR #2989 |
| **中** | 流式会话中`tool_calls`消息被辅助消息过滤器误丢弃，导致工具调用失败 | **已修复** | PR #2987 |
| **中** | Web UI会话历史仅显示最后一条用户消息，多轮对话历史丢失 | **已修复** | PR #2990 |
| **中** | `SessionManager`后台清理goroutine无停止机制，导致多次创建时泄漏 | **已修复** | PR #2986 |
| **低** | `/context`命令仅显示压缩硬阈值，未体现`summarize_token_percent`配置 | **已修复** | PR #2985 |

**稳定性总结**：今日合并的多个修复直指生产环境常见问题（API集成、资源泄漏、数据展示），系统鲁棒性得到显著提升。无新增未修复的严重崩溃报告。

---

### 6. 功能请求与路线图信号
基于活跃Issues及PR方向，以下功能可能影响下一版本（`v0.2.9`或后续）：

| 功能 | 来源 | 状态 | 可能性评估 |
|------|------|------|------------|
| **流式HTTP请求配置** | Issue #2404 | 讨论中 (10评论) | **高**：需求明确，实现方案简单（添加配置项），且与现有流式架构兼容，很可能纳入`v0.2.9`。 |
| **WebSocket显式回合完成信号** | Issue #2984 | 新开 | **中**：属于协议增强，需评估对现有客户端的影响，可能作为`v0.3.0`的改进项。 |
| **独立调试追踪查看器 (`picoclaw-tracer`)** | PR #2945 | 待合并 (stale) | **中**：功能完整，但标记为`stale`，需维护者重新评估优先级。若合并，将极大提升开发者调试体验。 |
| **Docker privileged模式支持** | PR #2239 | 待合并 (stale, 4月1日) | **低**：需求特定，可能仅适用于需要特权容器的场景，优先级较低。 |

---

### 7. 用户反馈摘要
从Issues评论与PR描述中提炼的真实反馈：

- **痛点**：
  - **多平台API差异**：不同模型提供商（智谱、Claude、OpenAI）对参数（如`temperature`、工具类型`web_search_preview` vs `function`）要求不一，导致集成时频繁出错。PR #2951、#2948、#2989均针对此问题。
  - **历史数据可访问性**：Web UI无法查看完整多轮对话历史（PR #2990修复），影响回溯与分析。
  - **资源管理隐蔽问题**：goroutine泄漏在测试或高负载场景下积累，可能最终导致资源耗尽（PR #2986修复）。
- **满意点**：
  - **错误处理快速响应**：针对智谱API新错误码（1210）和Claude模型参数变更，项目在数日内即发布修复PR，显示对生产问题的敏捷响应。
  - **工具生态初显**：`/context`命令、潜在`picoclaw-tracer`等工具表明项目正从核心引擎向可观测性、可管理性延伸。
- **使用场景**：
  - **多渠道集成**：微信Bot（Issue #2943）是重要部署场景，对视觉API和错误处理要求高。
  - **开发者调试**：对实时trace、历史查看、配置调试有强烈需求（PR #2945、#2990、#2404）。

---

### 8. 待处理积压
以下重要PR/Issues长期未获关注或合并，建议维护者优先评估：

| 类型 | ID | 标题 | 创建时间 | 状态 | 建议 |
|------|----|------|----------|------|------|
| PR | #2951 | `fix: use function-type web_search for better API compatibility` | 2026-05-26 | OPEN (stale) | 修复OpenAI兼容端点的重要兼容性问题，应尽快合并。 |
| PR | #2948 | `fix: skip temperature parameter for claude-opus-4-7 models` | 2026-05-26 | OPEN (stale) | 修复Claude新模型集成，与#2951类似，属高优先级兼容性修复。 |
| PR | #2945 | `feat: add debug trace viewer (picoclaw-tracer)` | 2026-05-26 | OPEN (stale) | 功能完整但标记stale，需决定是否纳入工具集或关闭。 |
| PR | #2239 | `modify docker compose with privileged` | 2026-04-01 | OPEN (stale) | 需求较窄，若社区无强烈反馈，可考虑关闭或移至讨论区。 |
| Issue | #2404 | `[Feature] Add in config to send streaming HTTP request` | 2026-04-07 | OPEN (活跃) | 虽活跃但创建已久，需明确排

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-03)

## 1. 今日速览
过去24小时，NanoClaw 项目呈现**高开发活跃度与低社区讨论**的态势。PR 活动显著，共 7 条 PR 更新，其中 4 条已成功合并，3 条待处理，表明核心团队迭代迅速且合并流程高效。Issues 方面仅 1 条更新，且无新增评论，社区参与度较低。整体项目健康度良好，持续聚焦于运行时稳定性、安全加固与集成扩展。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并的 4 个 PR 推动项目在多个关键领域取得进展：
- **运行时标准化**：PR [#2674](https://github.com/nanocoai/nanoclaw/pull/2674) 统一了 Codex 提供商的长期运行状态消息，并添加元数据与内部通道保护，提升了系统可观测性。
- **插件系统增强**：PR [#1193](https://github.com/nanocoai/nanoclaw/pull/1193) 引入了主机端插件钩子（`onStartup`/`onShutdown`），允许插件在消息循环启动前执行初始化或清理任务，极大扩展了宿主程序的扩展能力。
- **新技能集成**：PR [#2069](https://github.com/nanocoai/nanoclaw/pull/2069) 合并了 `Skill/webchat v1`，为项目新增了一个完整的通道/集成技能，丰富了多模态交互渠道。
- **安全加固**：PR [#2538](https://github.com/nanocoai/nanoclaw/pull/2538) 修复了容器运行器中的包名验证缺陷（CWE-78），防止通过 Dockerfile 插值进行操作系统命令注入，显著提升了容器化部署的安全性。

## 4. 社区热点
由于所有 PR 和 Issue 的评论数据缺失（显示为 `undefined` 或 `0`），今日**无明显讨论热点**。但以下待合并 PR 因其涉及核心功能而可能隐含社区关注：
- PR [#2672](https://github.com/nanocoai/nanoclaw/pull/2672)（Codex MCP 兼容性 + HTTP 传输修复）：解决 Codex 提供商与最新 MCP 配置的兼容问题，并支持代理后的 HTTP-only 传输，直接影响 Codex 集成的稳定性。
- PR [#2671](https://github.com/nanocoai/nanoclaw/pull/2671)（附件目录挂载修复）：确保入站附件目录正确挂载到代理容器，关乎多通道适配器（如邮件、消息）的文件处理可靠性。

## 5. Bug 与稳定性
今日无新增 Bug 报告，但通过 PR 修复了多个已存在或潜在问题，按严重程度排列：
1. **高（安全）**：PR [#2538](https://github.com/nanocoai/nanoclaw/pull/2538) 已合并。修复容器运行器中的命令注入漏洞（CWE-78），通过验证包名防止恶意 Dockerfile 插值。
2. **中（功能）**：PR [#2671](https://github.com/nanocoai/nanoclaw/pull/2671) 待合并。修复附件目录挂载路径缺失问题，避免通道适配器因路径不存在而失败。
3. **低（兼容性）**：PR [#2187](https://github.com/nanocoai/nanoclaw/pull/2187) 待合并。修正 CLI 通道的裸平台 ID 命名空间处理，避免与 Signal/WhatsApp/iMessage 的形状检测逻辑冲突。
4. **低（兼容性）**：PR [#2672](https://github.com/nanocoai/nanoclaw/pull/2672) 待合并。更新 Codex 提供商以适配 `McpServerConfig` 的联合类型（stdio/http/sse），并支持代理环境下的 HTTP 传输。

## 6. 功能请求与路线图信号
- **新功能请求**：Issue [#2673](https://github.com/nanocoai/nanoclaw/issues/2673) 提出“自动化学生评分系统”构想，描述了一个巴布亚新几内亚教师使用 AI 工具在 Android 上评分的场景。这反映了用户对 **AI 在教育评估领域落地** 的需求，但需求细节尚不明确。
- **路线图信号**：近期 PR 活动强烈指向以下方向：
  - **深化 Codex 集成**：PR #2672 和已合并的 #2674 显示团队正积极修复和标准化 Codex 提供商的运行时行为与配置兼容性。
  - **扩展技能生态**：已合并的 Webchat 技能（#2069）表明项目鼓励通过技能机制添加新通道/工具。
  - **强化容器与插件基础

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-03)

## 1. 今日速览
过去24小时，IronClaw 项目维持**极高活跃度**，社区共产生29条 Issues 更新（27条新开/活跃）和50条 PR 更新（31条已合并/关闭）。开发焦点高度集中于 **Reborn 运行时核心模块**（`agentloop-turns`, `host-kernel`, `subagent`）的审计修复与生产就绪工作，同时伴随多轮 QA 测试发现的稳定性问题。项目处于快速迭代与问题修复并行的关键阶段，核心团队与社区贡献者协作紧密。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日多个重要 PR 合并关闭，推动项目在可靠性、集成与用户体验方面取得进展：
- **Reborn 安全与能力门禁强化**：PR [4373](https://github.com/nearai/ironclaw/pull/4373) 修复子代理安全与能力门禁，确保提示安全上下文贯穿始终，防止绕过。
- **OAuth 集成可靠性提升**：PR [4345](https://github.com/nearai/ironclaw/pull/4345) 与 [4346](https://github.com/nearai/ironclaw/pull/4346) 完成 Notion 与 Gmail 的 DCR OAuth 流程接入，修复了认证门限的凭证要求传递问题。
- **WebUI 消息时序修复**：PR [4336](https://github.com/nearai/ironclaw/pull/4336) 修复 WebUI v2 中 pending 消息的回显与去重逻辑，改善用户界面一致性。
- **外部工具协议支持**：PR [4178](https://github.com/nearai/ironclaw/pull/4178) 新增飞书 websocket 事件摄入能力，扩展了通道集成范围。
- **本地开发环境修复**：PR [4357](https://github.com/nearai/ironclaw/pull/4357) 修复 Reborn 本地开发的内存挂载问题，确保第一方记忆工具有可靠后端。

## 4. 社区热点
今日讨论最集中的议题围绕 **Reborn 核心审计发现** 与 **QA 回归测试**：
- **Reborn 系统性审计问题**：用户 `@henrypark133` 连续提交一系列 Issues ([4358](https://github.com/nearai/ironclaw/issues/4358) - [4368](https://github.com/nearai/ironclaw/issues/4368))，覆盖门控重放、提示安全、预算准确性、取消传播等12个关键 correctness 集群。这些 Issues 源自深度审计，每个都描述具体的设计缺陷与修复方向，是当前技术讨论的核心。
- **QA 回归测试爆发**：标签为 `bug_bash_P2` 的 Issues ([4340](https://github.com/nearai/ironclaw/issues/4340) - [4344](https://github.com/nearai/ironclaw/issues/4344)) 报告了多个影响用户体验的缺陷，包括模型输出渲染错误、MCP 集成失效、认证流程阻塞等。这些报告来自标准化测试，反映了最新版本在端到端场景下的稳定性风险，引发社区对发布质量的关注。

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度与影响面排列如下：
- **P2 - 核心功能阻塞**：
  - [4343](https://github.com/nearai/ironclaw/issues/4343): MCP 集成（Notion/GitHub）驱动失败，功能完全不可用。
  - [4342](https://github.com/nearai/ironclaw/issues/4342): 认证模态框在页面刷新后持续存在，阻塞聊天。
  - [4334](https://github.com/nearai/ironclaw/issues/4334): Claude Opus 4.7/4.8 因 `temperature` 参数被弃用而完全不可用。
- **P2 - 用户体验严重受损**：
  - [4341](https://github.com/nearai/ironclaw/issues/4341): 模型思考链（THINKING）被错误暴露给用户并卡死。
  - [4344](https://github.com/nearai/ironclaw/issues/4344): 助手在加载时镜像用户消息作为自身回复。
  - [4340](https://github.com/nearai/ironclaw/issues/4340): 内容为空时提交消息触发验证错误，阻塞输入。
  - [4339](https://github.com/nearai/ironclaw/issues/4339): 提供商工具调用因能力模式验证被错误拒绝。
  - [4338](https://github.com/nearai/ironclaw/issues/4338): 网络断开时显示误导性的执行驱动错误。
- **修复状态**：上述 Bug 中，部分已有对应修复 PR 合并（如 [4336](https://github.com/nearai/ironclaw/pull/4336) 修复消息时序，[4337](https://github.com/nearai/ironclaw/pull/4337) 修复 Google OAuth 提示），但多数 QA 报告的问题（4340-4344, 4338-4339, 4334）尚未见公开的修复 PR，处于待处理状态。

## 6. 功能请求与路线图信号
- **GitHub WASM 工具集成**：Issue [3806](https://github.com/nearai/ironclaw/issues/3806) 提出在 Reborn 能力目录中实现 GitHub 作为首个 WASM 工具包，是“扩展 v2”路线图的关键一步。
- **触发器能力**：PR [4318](https://github.com/nearai/ironclaw/pull/4318) 已合并添加 `builtin.trigger_*` 系列第一方能力，支持调度触发器管理，为自动化工作流奠定基础。
- **飞书通道支持**：PR [4178](https://github.com/nearai/ironclaw/pull/4178) 新增飞书 websocket 摄入，表明项目在持续扩展企业协作工具集成。

## 7. 用户反馈摘要
从 Issues 描述与标签可提炼以下真实痛点：
- **生产就绪度担忧**：大量 `[reborn]` 标签的 Issues 指向核心运行时在恢复策略、预算准确性、事件排序等方面的设计缺陷，用户（很可能是内部团队或早期采用者）对系统在复杂错误场景下的行为表示担忧。
- **多模型支持不完善**：Claude Opus 4.7/4.8 因参数不兼容而失效（[4334](https://github.com/nearai/ironclaw/issues/4334)），以及 Qwen/MiniMax 模型在特定场景下的工具调用与渲染问题，表明模型适配矩阵需要持续维护。
- **OAuth 流程体验差**：Notion、Gmail、Google 服务的 OAuth 流程曾出现凭证要求丢失或错误提示（[4343](https://github.com/nearai/ironclaw/issues/4343), [4346](https://github.com/nearai/ironclaw/pull/4346)），影响第三方集成可用性。
- **UI 状态管理混乱**：思考链暴露、消息镜像、pending 消息处理错误（[4341](https://github.com/nearai/ironclaw/issues/4341), [4344](https://github.com/nearai/ironclaw/issues/4344), [4336](https://github.com/nearai/ironclaw/pull/4336)）反映前端状态与后端事件同步存在根本性问题。

## 8. 待处理积压
以下重要 Issue/PR 创建时间较长，尚未关闭或合并，建议维护团队优先关注：
- **PR #3548**：`[size: XL]` 添加 `DISABLE_TOOLS_LIST` 标志与安全回归测试（创建于 2026-05-12），涉及安全关键配置，已开放近一个月。
- **PR #3669**：`[size: XL]` 引擎 v2 暴露通道提供的线程/响应 ID 给工具（创建于 2026-05-14），是工具调用上下文的重要增强，但评论活跃度低，可能阻塞下游依赖。
- **Issue #3806**：`[Reborn]` Lane 6: 实现 GitHub WASM 能力路径（创建于 2026-05-19），是扩展路线图的关键功能，但近期无更新。
- **Issue #4108**：Nightly E2E 失败（创建于 2026-05-27），持续失败的自动化测试是 CI/CD 健康度的危险信号，需立即排查根因。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-03)

## 1. 今日速览
过去24小时，LobsterAI 项目呈现**高开发活跃度、低社区讨论**的特点。共处理 **50 条 PR 更新**，其中 **47 条已合并关闭**，显示核心团队正在快速推进多线迭代。合并内容覆盖 AI 模型能力升级、协作功能增强、用户体验优化及系统稳定性修复等多个关键领域。**无新 Issues 创建或版本发布**，社区互动渠道相对沉寂，但 PR 的高频合并表明项目健康度良好，开发节奏紧凑。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并的 47 个 PR 主要推进如下领域：

### AI 模型与核心能力
- **启用 MiniMax-M3 图像输入支持** ([#2093](https://github.com/netease-youdao/LobsterAI/pull/2093))：修复了 M3 模型因硬编码配置而无法处理图片的问题，解锁了该模型的多模态能力。
- **优化 MCP 启动流程与可观测性** ([#2091](https://github.com/netease-youdao/LobsterAI/pull/2091))：通过预解析 `npx` 命令并转换为稳定路径，显著提升 MCP 插件启动速度；同时新增首次响应计时日志，便于定位性能瓶颈。

### 协作与工作流
- **

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-06-03)

**数据来源**: [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
**统计周期**: 过去24小时 (截至 2026-06-02)  
**报告生成**: 2026-06-03

---

## 1. 今日速览
过去24小时，CoPaw (QwenPaw) 项目社区保持**高度活跃**，共处理 **48 个 Issues** 和 **32 个 Pull Requests**。核心进展集中在三个方面：**安全漏洞的快速响应与修复**（7个中高危安全问题同日报告并关闭）、**关键架构迁移的推进**（AgentScope 2.0 迁移工作已启动），以及**用户体验与性能优化**（工具按需加载、频道集成修复等）。项目整体健康度良好，但部分长期存在的功能缺陷（如配置持久化、上下文压缩）仍需优先处理。

---

## 2. 版本发布
- **无新版本发布**。
- **备注**: PR #4907 已将版本号 bumped 至 `v1.1.11b1`，预示 beta 测试版本可能正在准备中，但尚未正式发布。

---

## 3. 项目进展
今日合并/关闭的重要 PR 推动了多个关键领域的修复与增强：

| PR | 标题 | 影响 | 链接 |
|----|------|------|------|
| **#4907** | `chore(release): bump version to v1.1.11b1` | 版本号更新，为下一版本做准备 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/4907) |
| **#4899** | `fix(yuanbao): include yuanbao proto JSON files in package-data` | 修复腾讯元宝频道因缺失 `proto/conn.json` 和 `proto/biz.json` 导致的认证无限重连问题（对应 Issue #4898） | [链接](https://github.com/agentscope-ai/QwenPaw/pull/4899) |
| **#4883** | `fix(channel): cron messages fail to deliver to wechat/wecom with sharable_session=false` | 修复定时任务结果无法推送到微信/企业微信的问题（对应 Issue #4878） | [链接](https://github.com/agentscope-ai/QwenPaw/pull/4883) |
| **#4689** | `feat(providers): route non-standard generate_kwargs into extra_body` | 改进提供商参数处理，将非标准 `generate_kwargs`（如 DashScope 的 `enable_search`）路由到 `extra_body`，提升模型兼容性 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/4689) |
| **#1317** | `feat(console): add download status notifications for cloudflared` | 为 cloudflared 首次下载添加实时进度提示，改善 Console 用户体验 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/1317) |

**整体推进**: 项目在**安全加固**、**第三方集成稳定性**（微信、元宝）、**后端兼容性**方面取得实质性进展。AgentScope 2.0 迁移工作已通过 PR #4846 正式启动，标志着重大架构升级的开始。

---

## 4. 社区热点
今日讨论最活跃的 Issues（按评论数排序）：

| Issue | 标题 | 评论 | 核心诉求 | 链接 |
|-------|------|------|----------|------|
| **#4666** | `[Bug]: 新建会话后，Models配置页面丢失且无法加载` | 6 | 配置持久化失败，导致用户需重启应用才能恢复模型配置，严重影响工作流连续性。 | [链接](https://github.com/agentscope-

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

### EasyClaw 项目动态日报 (2026-06-03)

**报告生成时间：** 2026-06-03  
**数据周期：** 过去24小时 (UTC)

---

#### 1. 今日速览
过去24小时内，EasyClaw 项目在 GitHub 上的社区互动（Issues 与 PRs）记录为零，社区活跃度处于静默状态。然而，项目维护团队在同期连续发布了四个新版本（v1.8.24 至 v1.8.27），表明开发工作处于高度活跃的持续交付状态。所有更新均聚焦于核心功能的稳定性、用户体验优化及电商集成细节的修复，未引入破坏性变更。项目整体呈现“内部开发活跃、社区讨论沉寂”的特点，需关注长期社区参与度。

---

#### 2. 版本发布
今日共发布 4 个新版本，均为 `RivonClaw` 系列的补丁版本，重点在于修复缺陷、提升可靠性和完善用户体验。

*   **v1.8.27** ([链接](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.27))
    *   **更新内容：**
        1.  将后端 `shop-update` 接口中的 `null` 字段视为无操作（no-op），防止意外清除现有电商店铺详情。
        2.  确保前端电商面板与后端合约保持一致，即使后端负载省略可选值。
        3.  放宽客户服务平台升级资格的恢复条件（描述被截断）。
    *   **迁移注意事项：** 无重大破坏性变更。部署后，需验证与后端 `shop-update` 接口的集成，确保 `null` 值处理符合预期，避免数据丢失。

*   **v1.8.26** ([链接](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.26))
    *   **更新内容：**
        1.  优化桌面端新用户引导流程与认证入口，加速新卖家的设置路径。
        2.  实现多语言支持下的电商区域与聊天示例预设本地化。
        3.  改进中国区依赖项配置，并强化客户服务升级路径的稳定性（描述被截断）。
    *   **迁移注意事项：** 无。主要为体验优化与国际化增强。

*   **v1.8.25** ([链接](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.25))
    *   **更新内容：**
        1.  在 OAuth 授权完成后立即返回完整的店铺数据负载，使桌面应用能实时刷新连接状态。
        2.  提升处理多店铺同时完成 OAuth 授权事件突发情况的可靠性。
        3.  修复客户服务调度 RPC 的超时处理逻辑，完善重试与恢复机制。
    *   **迁移注意事项：** 无。专注于 OAuth 流程与后端通信的可靠性修复。

*   **v1.8.24** ([链接](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.24))
    *   **更新内容：**
        1.  新增桌面公告与邀请码 UI，便于用户在应用内查看产品通知与账户访问信息。
        2.  优化新用户电商设置路径，提供默认客户端更新、预设店铺技能及 refreshed 聊天示例。
        3.  修复客户服务 Airflow 任务调度的重试逻辑。
    *   **迁移注意事项：** 无。为新功能与用户体验改进。

---

#### 3. 项目进展
*   **合并/关闭的 PR：** 无。
*   **推进的功能/修复：** 今日所有功能推进均通过版本发布完成。核心进展包括：
    *   **电商集成健壮性：** 通过处理 `null` 字段与多店铺 OAuth 事件，显著提升了与后端电商平台数据同步的可靠性。
    *   **用户体验：** 新用户引导、多语言预设、桌面公告等功能上线，降低了使用门槛。
    *   **基础设施稳定性：** 针对客户服务调度（RPC、Airflow）的超时与重试机制进行了多处修复，增强了后台服务的容错能力。
*   **整体迈进程度：** 项目在核心业务逻辑（电商连接、客服调度）的稳定性上取得了扎实进展，但缺乏社区驱动的代码贡献（PR）。

---

#### 4. 社区热点
*   **今日无新增或活跃的 Issues/PRs。** 过去24小时未产生任何需要社区讨论的线程。
*   **分析：** 社区讨论的完全停滞可能表明：1) 用户群体较小或问题反馈渠道非 GitHub；2) 项目当前阶段以内部修复和交付为主，用户反馈已通过其他渠道（如内部工单）处理；3) 维护者未主动发起讨论。长期缺乏公开讨论可能不利于透明度和社区建设。

---

#### 5. Bug 与稳定性
*   **今日报告：** 无新报告的 Bug 或崩溃问题（基于 GitHub Issues 数据）。
*   **已修复问题（通过版本发布）：**
    *   **高严重性（潜在数据丢失）：** v1.8.27 修复了因 `shop-update` 接口返回 `null` 值而导致电商店铺详情被意外清空的问题。
    *   **高严重性（功能失效）：** v1.8.25 修复了客户服务调度 RPC 超时后重试与恢复路径不完善的问题。
    *   **中严重性（可靠性）：** v1.8.25 修复了多店铺 OAuth 授权事件并发处理不可靠的问题；v1.8.24 修复了客户服务 Airflow 重试调度逻辑。
    *   **低严重性（体验）：** v1.8.26 修复了桌面端新用户引导路径可能不准确的问题。

---

#### 6. 功能请求与路线图信号
*   **今日无新的功能请求（基于 GitHub Issues 数据）。**
*   **潜在路线图信号（从版本更新反推）：**
    *   **深化电商集成：** 对 `shop-update` 合约的严格对齐与 `null` 值处理，表明未来可能继续强化与各类电商平台数据同步的兼容性与安全性。
    *   **扩展国际化：** v1.8.26 的本地化工作（区域、示例预设）暗示对非英语市场的持续投入。
    *   **增强后台可靠性：** 连续修复客户服务调度相关的问题，表明“客服”模块的稳定性是当前高优先级基础设施工作。

---

#### 7. 用户反馈摘要
*   **来源：** 无今日 Issues 评论可供分析。
*   **间接反馈（从修复内容推断的用户痛点）：**
    1.  **数据一致性焦虑：** 用户可能曾遭遇店铺信息因后端更新而丢失的情况，故需修复 `null` 字段处理。
    2.  **OAuth 流程混乱：** 多店铺授权时可能出现状态不同步，影响管理效率。
    3.  **客服响应延迟/失败：** RPC 超时与 Airflow 调度问题可能导致客服请求处理失败或延迟，影响用户体验。
    4.  **新用户上手困难：** 旧版引导流程可能未能清晰指向正确的电商设置路径。
    *   **满意度点：** 版本中新增的“桌面公告”、“邀请码 UI”和“聊天示例预设”表明团队在积极响应用户对信息透明度和开箱即用体验的需求。

---

#### 8. 待处理积压
*   **长期未响应的重要 Issue/PR：** 无数据（因今日无 Issues/PRs 活动，无法评估积压）。
*   **提醒：** 尽管版本发布频繁，但 GitHub 社区互动渠道（Issues/PRs）的零活跃是一个需要关注的信号。建议维护团队：
    1.  定期审查并公开回应可能存在于其他渠道（如 Discord、邮件列表）的用户反馈，或将关键问题同步至 GitHub Issues 以提升透明度。
    2.  考虑主动在 `Discussions` 板块发起话题，收集用户对 v1.8.x 系列更新的反馈，以及未来功能的想法，避免社区完全沉寂。

---
**报告说明：** 本报告完全基于提供的 GitHub 数据生成。由于 Issues 与 PRs 数据为空，部分章节（4, 5, 7, 8）的分析主要依赖于版本更新日志的间接推断，实际情况可能更为复杂。建议结合项目其他反馈渠道进行综合评估。

</details>

---
*本日报由 [Big Model Radar](https://github.com/zx0828/big_model_radar) 自动生成。*