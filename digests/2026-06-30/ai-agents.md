# OpenClaw 生态日报 2026-06-30

> Issues: 375 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-06-30 00:35 UTC

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

# OpenClaw 项目动态日报 (2026-06-30)

## 1. 今日速览
过去24小时，OpenClaw 项目社区活跃度极高：Issues 更新达 375 条（新开/活跃 304，已关闭 71），PR 更新 500 条（待合并 448，已合并/关闭 52）。项目处于快速迭代期，但合并压力显著（待合并 PR 近 450 个）。核心问题聚焦于**多平台支持缺口**（Linux/Windows 应用缺失）、**渠道集成稳定性**（Telegram、Discord 消息丢失/超时）、**性能回归**（CLI 冷启动、嵌入运行延迟）及**安全边界细化**（运行时控制授权）。社区对跨平台、可靠性和测试覆盖的诉求强烈，大量 P1 级稳定性问题正在修复中，但部分关键 Bug 仍待解决。

## 2. 版本发布
- **无新版本发布**。最新稳定版仍为 `2026.6.8`（截至 2026-06-29 数据）。

## 3. 项目进展
今日合并/关闭的重要 PR 主要集中于稳定性修复与安全加固：
- **#97864** (CLOSED): 修复运行时类型错误导致退出控制流被吞噬的问题，提升进程退出可靠性。
- **#97875** (CLOSED): 修复 Telegram 持久化推理回复在启用推理时丢失的问题，改善消息传递完整性。
- **#97953** (CLOSED): 强化 ACP 运行时控制权限，要求所有者授权，缩小攻击面。
- **#95051** (CLOSED): 修复 Telegram 持久化推理回复通过共享分发器时的传递问题。
- **#97949** (OPEN, ready for maintainer look): 修正 cron 唤醒目标作用域，确保代理操作仅影响调用方会话。
- **#97961** (OPEN, ready for maintainer look): 限制 iMessage 组管理操作需所有者授权或管理员 scope。
- **#97952** (OPEN, ready for maintainer look): 要求 Codex 原生控制需管理员权限，统一授权模型。

**整体推进**：核心渠道（Telegram、Discord、iMessage）的可靠性与安全性得到加强；SQLite 存储迁移（#96625）持续进行，为长期可维护性奠定基础；QA 测试基础设施（#97962）开始构建通道场景合约，将提升回归测试覆盖。

## 4. 社区热点
### 最活跃 Issues
- **#75** ([OPEN](https://github.com/openclaw/openclaw/issues/75)): **Linux/Windows Clawdbot Apps 缺失**（评论 110，👍 81）。社区强烈要求补齐桌面端应用，与现有 macOS/iOS/Android 形成完整跨平台覆盖。诉求涉及功能对等与安装体验。
- **#86538** ([OPEN](https://github.com/openclaw/openclaw/issues/86538)): **Session 写锁超时阻塞子代理通道**（评论 18，P1）。核心稳定性问题，导致消息/生命周期失败且诊断不足，影响多代理架构可靠性。
- **#80319** ([OPEN](https://github.com/openclaw/openclaw/issues/80319)): **QA 工具默认套件混淆 Codex 原生工具与 OpenClaw 动态工具**（评论 17）。测试 harness 问题导致对运行时行为误判，影响质量评估。
- **#74586** ([OPEN](https://github.com/openclaw/openclaw/issues/74586)): **AM 嵌入式运行中止 memory_search 工具调用**（评论 11）。内存插件关键功能异常，即使模型完成也标记超时。

### 最活跃 PRs
- **#97962** ([OPEN](https://github.com/openclaw/openclaw/pull/97962)): **test(qa): 添加通道场景驱动合约**。为 QA 实验室迁移提供可复用合约，是提升测试覆盖的关键基础设施。
- **#97960** ([OPEN](https://github.com/openclaw/openclaw/pull/97960)): **fix(telegram):  honoring 转发 burst 的入站去抖动**。解决 Telegram 转发消息分片因硬编码延迟导致的分发问题。
- **#96106** ([OPEN](https://github.com/openclaw/openclaw/pull/96106)): **fix(anthropic): 在 Discord 上展示推理与工具前评论**。大型跨渠道修复，统一推理内容展示行为，影响 Discord、Matrix 等多个渠道。

**背后诉求分析**：社区优先关注**平台覆盖完整性**（桌面端）、**核心运行时稳定性**（会话锁、消息传递）、**测试可信度**（QA 合约）及**渠道特性对齐**（推理展示、转发处理）。安全与性能优化持续进行但讨论热度相对较低。

## 5. Bug 与稳定性
### P1（最高严重性）
- **#86538**: Session 写锁超时阻塞子代理通道（影响：session-state, message-loss）。**状态**：待修复，无直接关联 PR。
- **#80520**: Telegram 消息静默丢失，无 sendMessage 日志（影响：message-loss）。**状态**：部分修复中（PR #97875 覆盖推理场景，但通用路径可能仍需工作）。
- **#91363**: 隔离 cron 一致失败（"LLM request failed"）（影响：session-state, message-loss）。**状态**：待修复，PR #97949 可能部分相关但非直接修复。
- **#94518**: DeepSeek 缓存命中率 <10% 升级后（影响：性能）。**状态**：待修复，边界感知缓存破坏前缀匹配。
- **#81567**: GPT-4o 代理会话单次回复后退出（影响：session-state）。**状态**：待修复。
- **#81490**: 子代理完成未恢复 yielded 会话（影响：session-state）。**状态**：待修复。
- **#80040**: 级联失败：OAuth 失效导致空占位回复、提供商切换导致重复工具执行（影响：session-state, message-loss, auth-provider）。**状态**：待修复。
- **#75782**: 嵌入式运行 "auth" 阶段同步阻塞 10-15s（影响：性能）。**状态**：待修复。
- **#77807**: sessions_spawn 缺少 scope operator.write（影响：auth-provider）。**状态**：待修复。
- **#80700**: 账单/配额拒绝时后续代理静默丢弃（影响：message-loss）。**状态**：待修复。
- **#97877**: 空错误重试被 hadPotentialSideEffects 阻止（影响：session-state, message-loss）。**状态**：待修复（新开 Issue）。

### P2（高严重性）
- **#80319**: QA 工具默认套件混淆（影响：auth-provider）。**状态**：待修复。
- **#79077**: Telegram bot-to-bot 与 guest-bot 模式支持（影响：security, message-loss）。**状态**：功能开发中（PR #97806 已开）。
- **#86572**: 同车道 EmbeddedAttemptSessionTakeoverError 竞争（影响：session-state, message-loss）。**状态**：待修复。
- **#81061**: 缺少 before_route_inbound_message 钩子（影响：session-state, message-loss）。**状态**：待修复（stale）。
- **#80213**: Skill 作者定义安装后脚本钩子（影响：security）。**状态**：功能请求，可能纳入路线图。
- **#82662**: 隔离 cron agentTurn 设置超时（影响：crash-loop）。**状态**：待修复。
- **#81607**: minimax-portal 响应含 thinking+text 时无文本输出（影响：auth-provider）。**状态**：待修复。
- **#82002**: Telegram 组回复在允许列表下丢失上下文（影响：message-loss）。**状态**：待修复。
- **#81917**: Dashboard 日志记录裸 URL 且 Linux/KDE 浏览器启动可能挂起（影响：security, crash-loop）。**状态**：待修复。
- **#81484**: Discord 服务器回复回归：畸形发送负载与循环（影响：session-state, message-loss）。**状态**：待修复。
- **#81156**: MiniMax 使用计数字段语义反转（影响：auth-provider）。**状态**：待修复。
- **#80176**: Codex×Pi  parity Phase 5 JSONL 会话重放 harness（影响：session-state）。**状态**：跟踪 Issue，依赖 Phase 1。
- **#80607**: 非默认多代理使用 embedded_run 导致 10-17s 延迟（影响：other）。**状态**：待修复。
- **#80036**: Chrome MCP 现有会话 `profile=user` 页面工具超时（影响：session-state）。**状态**：待修复。
- **#79752**: Discord HTTP 响应 'Unexpected token \u001f'（gzip 未解压）（影响：message-loss）。**状态**：待修复（Node v26 特定）。
- **#91592**: memory_search 在 --force 重建后 "index scope changed"（影响：session-state, auth-provider）。**状态**：已关闭（可能已修复）。
- **#79458**: 斜杠命令描述 i18n 字段（影响：other）。**状态**：功能请求。
- **#82678**: 'none' 字符串截断工具调用与回复（影响：security, message-loss）。**状态**：待修复。
- **#82250**: macOS LaunchAgent KeepAlive=true 在网关已运行时重启（影响：crash-loop）。**状态**：待修复。
- **#82070**: CLI 命令 ~14s 冷启动回归（影响：auth-provider, crash-loop）。**状态**：待修复。
- **#81960**:  onboarding 配置多个提供商/模型（影响：auth-provider）。**状态**：功能请求。
- **#81514**: 隔离作业状态在工具错误恢复时非确定性（影响：session-state）。**状态**：待修复。
- **#95500**: 插件模型提供商 (opencode-go) 无法被隔离 cron 会话解析（影响：auth-provider）。**状态**：已关闭（可能已修复）。
- **#96857**: 普通工具文本输出降级为 "(see

---

## 横向生态对比

## AI 智能体开源生态横向对比分析报告 (2026-06-30)

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态处于**高速迭代与深度重构并存**的阶段。以 **OpenClaw** 为事实标准的核心框架，正驱动整个生态向**跨平台覆盖、运行时稳定性、安全边界细化**三大方向演进。同时，多个衍生项目（如 LobsterAI、CoPaw）在核心集成、多模型兼容、垂直场景（嵌入式、WebUI）上展开差异化竞争。社区整体活跃度极高，但**合并效率与质量保证**已成为制约项目健康度的关键瓶颈，大量 P1 级稳定性问题悬而未决，反映出快速功能扩张后的技术债务累积风险。

### 2. 各项目活跃度对比

| 项目名称 | 24h Issues (新开/活跃) | 24h PRs (待合并/已合并) | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 375 (304) | 500 (448/52) | 无新版本 (v2026.6.8) | **中下**。社区规模最大，但合并压力巨大（待合并近450），大量P1问题待修复，迭代速度受审查瓶颈制约。 |
| **CoPaw** | 29 (20) | 50 (31/19) | 无新版本 (v1.1.12.post2) | **中**。高度活跃，聚焦多模型兼容与稳定性修复，合并率38%，关键Bug（数据丢失、并发）需紧急关注。 |
| **Zeroclaw** | 50 (43) | 50 (40/10) | 无新版本 | **中下**。开发活跃，围绕v0.8.3推进新功能，但合并率仅20%，高优先级Bug修复滞后，积压严重。 |
| **IronClaw** | 14 (10) | 50 (30/20) | 无新版本 | **中**。活跃度集中于测试框架与WebUI打磨，合并率40%，但P1级工具链Bug暴露核心状态管理风险。 |
| **LobsterAI** | 8 (5) | 40 (1/39) | **已发布 v2026.6.29** | **高**。合并率97.5%，发布流程高效，专注OpenClaw集成后修复与UI优化，社区反馈处理及时。 |
| **NanoBot** | 7 (4) | 32 (22/10) | 无新版本 | **中**。活跃度稳定，合并率31%，围绕“超轻量”定位进行性能与安全修复，但架构依赖争议需澄清。 |
| **NanoClaw** | 0 | 7 (5/2) | 无新版本 | **中高**。Issues静默，但PR合并高效（29%），小团队聚焦关键安全修复与新功能（Discord适配），决策链条短。 |
| **PicoClaw** | 3 (2) | 3 (3/0) | 无新版本 | **低**。无PR合并，所有更新积压，包括高严重性数据泄露Bug（#3153）和重要新功能（DeltaChat网关）。 |
| **TinyClaw / Moltis / ZeptoClaw / EasyClaw** | 0 | 0 | 无活动 | **休眠**。过去24小时无任何开发或社区活动。 |

**说明**：健康度综合评估合并效率、P1 Bug数量、社区反馈积压及发布节奏。`高`表示流程健康、响应快；`中`表示活跃但存在瓶颈；`中下/低`表示积压严重或关键问题未解；`休眠`表示项目停滞。

### 3. OpenClaw 在生态中的定位
*   **优势**：作为**生态事实标准与最大社区**，拥有最全面的功能集（多通道、多模型、工具链、代理架构）和最广泛的用户基础。其设计决策（如 ACP 权限模型、SQLite 迁移）直接影响所有衍生项目。
*   **技术路线差异**：走**“大而全”的通用自主智能体框架**路线，强调运行时能力、安全模型与可扩展性。相比之下：
    *   **NanoBot** 追求“超轻量”但依赖栈复杂。
    *   **Zeroclaw** 聚焦 WASM 插件生态与 SOP 引擎。
    *   **PicoClaw** 面向资源极度受限的嵌入式场景。
    *   **LobsterAI** 是面向终端用户的 OpenClaw 发行版，优化 UI/UX。
    *   **CoPaw** 是多模型兼容性与上下文管理的专家。
*   **社区规模对比**：OpenClaw 的日 Issues/PR 量级（数百）远超其他项目（通常<50），是生态的**绝对核心与创新源头**。但其**合并效率（~10%）显著低于 LobsterAI（97.5%）和 NanoClaw（29%）**，显示其社区规模已对核心团队审查能力构成挑战。

### 4. 共同关注的技术方向
多项目共同涌现的需求，标志着生态的**集体技术焦点**：
1.  **运行时稳定性与状态管理**（OpenClaw, CoPaw, IronClaw）
    *   **诉求**：解决会话锁阻塞（OpenClaw #86538）、子代理并发死锁（CoPaw #4873）、工具调用状态同步（IronClaw #5415）、cron 任务历史保留（LobsterAI #2220）。
    *   **影响**：直接影响多代理工作流与长时间任务的可靠性，是生产部署的基石。
2.  **跨平台与通道覆盖完整性**（OpenClaw, NanoBot, PicoClaw, CoPaw）
    *   **诉求**：补齐桌面端应用（OpenClaw #75）、支持隐私优先协议（PicoClaw #3093: SimpleX/Tox）、扩展企业通道（CoPaw: 钉钉/飞书图片预览、NanoClaw: Discord适配）。
    *   **影响**：从移动/Web向桌面、去中心化协议、企业IM延伸，争夺用户入口。
3.  **性能与成本优化**（CoPaw, OpenClaw, Zeroclaw）
    *   **诉求**：提升缓存命中率（CoPaw #3891: DeepSeek）、减少冷启动延迟（OpenClaw #82070）、优化上下文裁剪策略（CoPaw #5510, #5629）、实现提示词缓存（PicoClaw #3163）。
    *   **影响**：直接降低用户API成本与响应延迟，是商业化与用户体验的关键。
4.  **安全边界细化与沙箱加固**（OpenClaw, NanoBot, NanoClaw, CoPaw）
    *   **诉求**：运行时控制授权（OpenClaw #97953）、工具调用ID防污染（NanoBot #4595）、路径逃逸修复（NanoBot #4592, NanoClaw #2880）、插件审批路由（LobsterAI #2217）。
    *   **影响**：在开放工具调用与多租户场景下，防止权限提升与数据泄露，是信任前提。
5.  **测试基础设施与质量保证**（OpenClaw, IronClaw, CoPaw）
    *   **诉求**：构建通道场景合约（OpenClaw #97962）、集成测试框架（IronClaw #5392）、防御性上下文上限（CoPaw #5510）、对话记录断点保存（CoPaw #5579）。
    *   **影响**：应对快速迭代带来的回归风险，提升版本发布信心。

### 5. 差异化定位分析
| 维度 | OpenClaw | CoPaw | Zeroclaw | NanoBot | PicoClaw | LobsterAI | IronClaw |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **核心定位** | 通用自主智能体框架 | 多模型兼容与上下文管理专家 | WASM插件生态与SOP引擎 | 超轻量级Agent运行时 | 嵌入式/边缘设备Agent | OpenClaw终端用户发行版 | Reborn WebUI v2 与自动化 |
| **目标用户** | 开发者、研究者、高级用户 | 多模型切换用户、成本敏感用户 | 企业、需要插件隔离的团队 | 资源受限环境、简单任务 | IoT开发者、嵌入式工程师 | 终端用户、非技术背景用户 | 重度Web用户、自动化需求者 |
| **技术架构** | 单体仓库，全功能，强运行时 | 基于AgentScope，模块化，Runtime v2 | 微内核，WASM插件，SOP策略引擎 | 极简核心，依赖Python/Node.js争议 | 轻量C++/Python，资源约束优化 | Electron + OpenClaw后端，优化UI/UX | 全新WebUI (React)，强测试驱动 |
| **关键优势** | 功能最全，社区最大，生态主导 | 多模型无缝切换，上下文管理先进 | 插件安全隔离，策略灵活 | 部署简单（理论上），资源占用低 | 硬件亲和，低功耗 | 开箱即用，UI/UX精致，工作流稳定 | 测试覆盖深，UI可访问性好，RBAC设计 |
| **主要短板** | 合并慢，桌面端缺失，稳定性P1多 | 数据持久化弱，并发Bug，通道体验割裂 | 合并慢，provider兼容性Bug多 | 架构依赖争议，企业级特性弱 | 功能有限，通道少，活跃度低 | 功能跟随OpenClaw，创新较少 | Routine功能不稳定，工具路由缺陷 |

### 6. 社区热度与成熟度
*   **快速迭代阶段（高活跃，高积压）**：
    *   **OpenClaw**：社区规模引爆，但合并能力不足，大量P1问题积压，处于**“规模扩张后的阵痛期”**。
    *   **CoPaw**：围绕v2.0重构，多模型适配与稳定性修复并行，**“功能快速演进期”**。
    *   **Zeroclaw**：v0.8.3功能开发积极，但修复速度跟不上新问题，**“新功能与质量赛跑期”**。
*   **质量巩固阶段（高发布效率，聚焦修复）**：
    *   **LobsterAI**：基于OpenClaw发布后，集中修复集成问题与UI打磨，合并率极高，**“发行版成熟期”**。
    *   **IronClaw**：大量投入测试基础设施与UI细节修复，**“质量内建与体验优化期”**。
*   **稳定/低活跃阶段（小团队高效或停滞）**：
    *   **NanoClaw**：小团队，Issues静默，PR合并快，聚焦关键安全与新功能，**“高效精悍期”**。
    *   **NanoBot**：中等活跃，围绕定位进行优化，但需解决架构认知偏差。
    *   **PicoClaw & 休眠项目**：活跃度低或停滞，**“生存或边缘化期”**，需重大刺激或明确 niche 才能复苏。

### 7. 值得关注的趋势信号
1.  **稳定性压倒一切**：OpenClaw、CoPaw、IronClaw 的 P1 问题均集中在**状态管理、会话锁、并发控制**。这表明生态已从“能用”进入“可靠”阶段，**任何新功能发布都必须以不破坏核心会话稳定性为前提**。开发者应优先投资于状态机测试与并发安全审计。
2.  **跨平台从“移动优先”转向“全平台”**：OpenClaw 社区强烈要求 Linux/Windows 桌面应用（#75），PicoClaw 探索隐私协议，CoPaw 优化钉钉/飞书体验。**桌面端与深度企业集成成为新战场**，纯移动/Web体验已不足。
3.  **成本与性能驱动架构优化**：CoPaw 对 DeepSeek 缓存命中率的极致关注（#3891）、上下文管理从“背包”到“滚动策略”的演进（#5614）、PicoClaw 的 Bedrock 缓存优化（#3163），均显示**用户对 token 消耗和延迟极其敏感**。架构设计必须内置成本监控与优化钩子。
4.  **安全模型从“边界”走向“纵深”**：从 OpenClaw 的 ACP 权限细化、NanoBot 的路径逃逸修复，到 NanoClaw 的容器符号链接防护，安全焦点从**网络/API 边界**转向**运行时内部**（工具调用、文件操作、代理间通信）。**零信任原则需在 Agent 运行时内部落地**。
5.  **测试即产品，质量即壁垒**：IronClaw 的集成测试框架、OpenClaw 的 QA 通道合约、CoPaw 的防御性上下文上限，均表明领先项目正在将**测试覆盖率与自动化质量门禁**作为核心工程能力。**缺乏自动化测试的项目将难以维持长期竞争力**。
6.

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-30)

## 1. 今日速览
项目今日保持高度活跃，过去24小时内共处理 **32 个 Pull Request**（其中 10 个已合并/关闭）和 **7 个 Issues**（4 个新开/活跃，3 个已关闭）。开发重点集中在 **性能优化**（减少上下文token消耗）、**稳定性修复**（工具调用ID管理、路径安全）和 **功能扩展**（A2A委托、触发器系统）。社区围绕项目“超轻量”定位与依赖构成的讨论持续，同时多个增强型PR表明项目正朝着更企业级、更易用的方向演进。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日共有 **10 个 PR 被合并或关闭**，关键进展包括：
- **PR #4502 [CLOSED]**: 添加 **网关 Webhook 触发器**，支持通过 HTTP 端点向会话注入消息，增强外部系统集成能力。
- **PR #4222 [CLOSED]**: 修复 `max_messages` 截断导致的提示缓存失效问题，提升长对话效率。
- 其他合并涉及配置迁移防护、MCP 凭据脱敏、WebUI 时间戳默认显示等修复与优化，整体代码健壮性与用户体验得到提升。

## 4. 社区热点
最活跃讨论集中于 **Issue #660**（15 条评论，5 👍）：
- **链接**: https://github.com/HKUDS/nanobot/issues/660
- **诉求分析**: 社区质疑项目“超轻量”宣传与 Dockerfile 中同时依赖 Python 和 Node.js 的实际情况存在矛盾。此讨论触及项目架构选择与用户期望的核心，可能影响新用户对部署复杂度的评估。维护者需在 README 或文档中澄清设计权衡（如 Node.js 仅用于特定前端/工具链），或考虑进一步解耦。

## 5. Bug 与稳定性
### 严重问题（已有修复 PR）
1. **Issue #4595**（严重）: `apply_final_call_ids` 错误覆盖非文件编辑工具的工具调用 ID，导致会话永久污染。
   - **修复**: PR #4596（待合并）— 跳过非文件编辑工具以保护 ID 完整性。
2. **Issue #4592**（安全）: `ExecTool` 路径提取正则忽略 `=` 前导符，使 `--output=/etc/passwd` 等命令绕过工作区限制。
   - **修复**: PR #4594（待合并）— 将 `=` 纳入分隔符，修复安全边界。

### 已修复
- **Issue #4222**（已关闭）: `max_messages` 截断引起前缀缓存失效，PR #4222 已解决。

### 其他稳定性改进
- PR #4583: 防护配置迁移中 `null` 节导致的崩溃。
- PR #4584: 在 MCP 服务器 URL 日志中脱敏凭据，防止敏感信息泄露。

## 6. 功能请求与路线图信号
### 新请求
- **Issue #4419**（4 评论）: 请求 **自动推理努力升级**，根据问题复杂度动态调整 `reasoningEffort` 参数，减少手动配置。
- **Issue #4580**: 请求支持 **conda 环境** 以更好地隔离子进程依赖。

### 高概率纳入下一版本的功能（PR 开发中）
- **A2A 对等委托**（PR #4571）: 实现代理间原生协作（如主管→研究员→撰写人），突破当前 `spawn` 的单任务限制。
- **Provider 级代理配置**（PR #4578）: 为 OpenAI 兼容提供商和 Codex 添加独立代理设置，提升企业网络灵活性。
- **WebUI Markdown 导出**（PR #4587）: 支持将会话导出为带时间戳和代码块的 Markdown 文件。
- **会话本地触发器**（PR #4591）: 通过文件系统队列绑定会话级触发器，增强自动化能力。

## 7. 用户反馈摘要
### 核心痛点
- **架构一致性**: 用户对“超轻量”宣传与实际多运行时依赖感到困惑（#660），期望更透明的部署说明。
- **配置智能化**: 希望减少手动调参（如推理努力），实现自适应行为（#4419）。
- **环境隔离**: 在虚拟环境（conda）中运行的刚需（#4580），反映生产部署的复杂性。
- **安全与稳定**: 对工具调用 ID 污染（#4595）和路径逃逸（#4592）的反馈，显示对会话完整性和沙箱安全的深度关注。

### 积极反馈
- 社区对 **性能优化**（PR #4581, #4588）响应热烈，表明用户对成本控制（token 消耗）有强烈需求。
- **Dream 记忆管理**（PR #4589）和 **技能去重**（PR #4554）的改进，获得关注，显示对长期记忆 hygiene 的重视。

## 8. 待处理积压
以下 OPEN 状态的项目已超过一周，建议维护者优先评估：
- **PR #4293**（6月11日）: 为 `process_direct` 添加 `pending_queue` 以修复子代理结果注入，影响定时任务等直接调用场景。
- **PR #4291**（6月11日）: 允许子代理使用可配置模型预设，增强多代理工作流灵活性。
- **Issue #4419**（6月20日）: 自动推理努力升级功能请求，社区有讨论但尚未进入开发。

---
*数据来源: [NanoBot GitHub](https://github.com/HKUDS/nanobot) | 报告生成时间: 2026-06-30*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-30)

## 今日速览
- **社区活跃度极高**：过去24小时 Issues 更新 50 条（43 条新开/活跃，7 条关闭），PR 更新 50 条（40 条待合并，10 条合并/关闭），显示开发与用户参与度旺盛。
- **开发焦点明确**：核心工作围绕 **v0.8.3 版本** 展开，重点推进 WASM 插件运行时、SOP 引擎增强、MCP 工具深度集成及新通信通道（Inkbox、GitHub）的集成。
- **稳定性修复同步进行**：针对高优先级 Bug（如工具调用系统提示词不匹配、provider 兼容性、Telegram 配置）持续修复，部分问题已有 PR 待合并。
- **无新版本发布**：今日未发布新版本，但大量 PR 积压可能影响发布节奏，代码审查效率需关注。
- **项目健康度评估**：整体向前发展迅速，但高优先级 Bug 修复速度与 PR 合并率（20%）是潜在瓶颈，需警惕技术债务累积。

## 项目进展
今日合并/关闭的重要 PR 推动了功能完善与稳定性提升：
- **[PR #8436](https://github.com/zeroclaw-labs/zeroclaw/pull/8436)** (已关闭)：文档更新，明确 `max_history_messages` 硬限制与轮次修剪机制，减少用户困惑。
- **[PR #8441](https://github.com/zeroclaw-labs/zeroclaw/pull/8441)** (已关闭)：修复 Groq 等 OpenAI 兼容 provider 的原生工具调用，要求工具结果消息必须包含 `name` 字段，避免 HTTP 400 错误。
- **[PR #8379](https://github.com/zeroclaw-labs/zeroclaw/pull/8379)** (已关闭)：为 WhatsApp Web 群聊添加被动上下文功能，允许未直接提及的消息作为背景信息存储，减少噪音。
- **[PR #8327](https://github.com/zeroclaw-labs/zeroclaw/pull/8327)** (已关闭)：修复原生工具调用中 `[IMAGE:data:...]` 标记被误作为纯文本发送导致的 token 膨胀问题。

## 社区热点
评论最活跃的 Issues 反映了社区的核心关切：
1. **[Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** (11 评论)：Kimi-code provider 在流式聊天工具调用中报错（`thinking is enabled but reasoning_content is missing`），**S1 阻塞性问题**，影响工作流。诉求：修复 provider 与推理模式的兼容性。
2. **[Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)** (9 评论)：系统提示词中的工具可用性声明与实际生效工具不匹配，导致推理模型（如 OpenAI Responses）无法使用 MCP/原生工具。**核心架构问题**，已有部分修复（#8053），但其他入口

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-30)

**报告生成时间：** 2026-06-30  
**数据周期：** 过去24小时 (2026-06-29 至 2026-06-30)

---

### 1. 今日速览
项目今日无新版本发布。开发活动保持活跃，但代码合并流程存在瓶颈：3个关键Pull Requests全部处于“待合并”状态，未有任何PR被合并或关闭。社区反馈持续，Issues板块有3条更新（2条新开/活跃，1条已关闭），显示用户参与度稳定。整体项目健康度中等，核心功能迭代在推进，但需关注PR审查效率以加速集成。

---

### 2. 版本发布
*今日无新版本发布。*

---

### 3. 项目进展
今日无PR被合并或关闭，所有更新均为“待合并”状态。以下为待合并PR及其潜在影响：
- **#3063 [OPEN] feat: add deltachat gateway**  
  链接：https://github.com/sipeed/picoclaw/pull/3063  
  内容：新增DeltaChat通信网关，扩展项目支持的即时通讯渠道，增强去中心化通信能力。
- **#3163 [OPEN] feat(bedrock): leverage Converse prompt caching via cache points**  
  链接：https://github.com/sipeed/picoclaw/pull/3163  
  内容：为AWS Bedrock Converse API实现提示词缓存优化，预计显著降低API调用成本与延迟。
- **#3156 [OPEN] [stale] feat(pico): emit per-turn LLM token usage on finalized message**  
  链接：https://github.com/sipeed/picoclaw/pull/3156  
  内容：在Pico通道的最终消息中 emit 每轮LLM令牌使用量，提升成本监控的粒度与准确性。

**整体推进评估：** 若上述PR合并，项目将在**网关生态扩展**、**云服务成本优化**及**可观测性**三方面取得实质性进展。

---

### 4. 社区热点
最活跃的讨论集中在 **Issue #3093**，该Issue拥有最高评论数（4条）及唯一👍反应。
- **链接：** https://github.com/sipeed/picoclaw/issues/3093  
- **内容：** 用户请求集成SimpleX或Tox等隐私优先的通信网关。  
- **诉求分析：** 反映了社区对**强隐私保护、去中心化通信协议**的强烈需求，可能源于对现有主流网关（如Telegram、Discord）在数据主权和审查抵抗方面的顾虑。此需求与PR #3063（deltachat网关）方向一致，暗示项目在“隐私网关”赛道存在扩展机会。

---

### 5. Bug 与稳定性
按严重程度排列：
1.  **高严重性 - 第三方集成数据泄露风险**  
    - **Issue #3153 [OPEN] [stale] [BUG] Volcengine Doubao Seed tool calls occasionally leak as <seed:tool_call> text**  
      链接：https://github.com/sipeed/picoclaw/issues/3153  
      描述：与火山引擎Doubao Seed模型集成时，工具调用原始XML可能泄露至用户界面，存在敏感信息暴露风险。  
      **状态：** 新报告，尚无修复PR。需紧急评估并修复。
2.  **中严重性 - 平台兼容性回归**  
    - **Issue #3090 [CLOSED] [stale] [BUG] Panel does not work on Safari on iOS versions below 16.4**  
      链接：https://github.com/sipeed/picoclaw/issues/3090  
      描述：管理面板在旧版iOS Safari上无法正常工作。  
      **状态：** 已关闭，推测已有修复并随版本发布，但需确认修复是否包含在最新版本中。

---

### 6. 功能请求与路线图信号
- **核心请求：** **SimpleX/Tox网关集成**（Issue #3093）。结合已存在的 **DeltaChat网关PR (#3063)**，可判断项目路线图正积极拓展**非中心化、隐私增强型通信协议**。SimpleX/Tox作为更高隐私标准的协议，很可能已被核心团队纳入考量，但需评估其技术复杂度与维护成本。
- **辅助信号：** PR #3156（令牌统计）和 #3163（Bedrock缓存）均属于**平台优化与可观测性增强**，表明下一版本可能更注重**生产环境就绪度**与**成本控制**，而非大规模新功能。

---

### 7. 用户反馈摘要
- **痛点：**  
  1. **移动端兼容性不足**：旧版iOS Safari无法使用管理面板（#3090），限制了移动设备管理能力。  
  2. **第三方AI服务集成不稳定**：Volcengine Doubao Seed存在工具调用泄露Bug（#3153），影响集成可靠性与安全性。  
  3. **隐私选项有限**：现有主流网关可能无法满足高隐私需求用户，催生对SimpleX/Tox的请求（#3093）。
- **满意点（隐含）：** 项目支持多网关（如DeltaChat PR）和多种LLM后端（如Bedrock PR），体现了**灵活性与可扩展性**，获得技术用户认可。

---

### 8. 待处理积压
多个重要Issue与PR被标记为 **`[stale]`**，表明长期未更新，需维护者优先复审：
- **Issues:**  
  - #3093 (SimpleX/Tox请求) - 高需求，已讨论但未推进。  
  - #3153 (Volcengine泄露Bug) - 高严重性，需修复。  
  - #3090 (iOS Safari Bug) - 已关闭，但需验证修复版本。
- **Pull Requests:**  
  - #3063 (DeltaChat网关) - 新功能，待合并。  
  - #3163 (Bedrock缓存) - 性能优化，待合并。  
  - #3156 (令牌统计) - 可观测性改进，待合并。

**提醒：** `[stale]` 标签通常由自动化工具添加，不代表需求失效。建议维护团队**主动复审**这些条目，特别是高需求（#3093）与高严重性（#3153）项，以维持社区信任与项目健康度。

---

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-30)

**报告生成时间：** 2026-06-30  
**数据周期：** 过去 24 小时 (UTC)

---

### 1. 今日速览
项目今日开发活动**极为活跃**，共记录到 **7 个 Pull Request** 更新，涵盖安全修复、核心功能缺陷修复、新平台适配及用户体验改进。其中 **2 个 PR 已合并关闭**，**5 个 PR 仍待审核**。值得注意的是，过去 24 小时 **无新开或活跃 Issues**，表明社区问题反馈渠道相对平静，或现有问题正通过 PR 流程直接解决。整体项目健康度**高**，核心团队与贡献者正集中推进关键修复与功能落地。

---

### 2. 版本发布
*无新版本发布。*

---

### 3. 项目进展
今日有两个重要 PR 被**合并关闭**，标志着关键功能与修复已进入主分支：
- **PR #2883 (CLOSED)**: `feat: voice-notify v3 意图分流 + kill-switch`  
  实现了语音播报摘要的智能化升级，通过 5 类意图分流（action/silent/navigate/tech_status/notify）优化信息过滤，并加入运行时 kill-switch。此功能提升了语音通知的实用性与可控性。
- **PR #2882 (CLOSED)**: `fix(ncl): default messaging-groups create instance to channel_type`  
  修复了 `ncl messaging-groups create` 命令因数据库 `NOT NULL` 约束而失败的问题，恢复了 CLI 工具的核心功能。

---

### 4. 社区热点
由于过去 24 小时 **Issues 无更新**，社区讨论焦点集中于**待合并的 PR 本身**。其中以下 PR 因涉及**安全修复**与**重大新功能集成**，最可能引发关注：
- **PR #2880 (OPEN)**: `fix(security): contain inbox symlink escapes in attachment writes`  
  修复了高危安全漏洞 (CWE-59)，防止被入侵的 agent 容器通过符号链接攻击主机文件系统。此修复对多租户部署环境至关重要。
- **PR #2884 (OPEN)**: `feat(discord): add Discord channel adapter + fix Gateway approval-button routing`  
  新增 Discord 频道适配器，并修复了审批按钮路由问题。Discord 是主流社区平台，此功能将显著扩展 NanoClaw 的适用场景。
- **PR #2886 (OPEN)**: `fix: channel-registered new agents inherit the install's provider`  
  修复了在单提供商安装中，新注册 agent 错误使用默认提供商导致 401 认证失败的问题，直接影响新用户上手体验。

---

### 5. Bug 与稳定性
按潜在影响排序：
1.  **高危安全 Bug (已修复，待合并)**  
    - **PR #2880**: 修复了附件写入过程中的符号链接逃逸漏洞，可防止容器逃逸导致的主机任意文件写入。**严重程度：高**。已有修复 PR 且通过测试。
2.  **核心功能缺陷 (已修复，已合并)**  
    - **PR #2882**: `ncl` CLI 创建消息组时因数据库字段缺失而失败。**严重程度：中**。已合并至主分支。
3.  **用户体验缺陷 (待修复)**  
    - **PR #2886**: 新频道注册流程中，新 agent 错误继承默认提供商，导致单提供商安装认证失败。**严重程度：中**。有修复 PR 待合并。
    - **PR #2885**: Slack Socket Mode 在引导设置流程中缺失，导致部分 Slack 部署配置不完整。**严重程度：低-中**。有修复 PR 待合并。

---

### 6. 功能请求与路线图信号
今日的 PR 清晰反映了社区与核心团队对以下方向的**强烈需求**，这些功能很可能被纳入近期版本：
- **多平台深度集成**：PR #2884 新增 **Discord 适配器**，表明项目正积极扩展主流通讯平台支持。结合此前 PR #2885 对 Slack Socket Mode 的修复，**跨平台统一体验**是明确路线。
- **可观测性与运维**：PR #2871 添加了 **Dashboard Pusher**，支持将状态快推送到外部监控服务器（支持 OpenCode）。这标志着 NanoClaw 正从“单一工具”向“可观测系统”演进。
- **语音交互精细化**：PR #2883 的语音播报意图分流，显示了对**多模态交互**（语音）进行场景化优化的持续投入。

---

### 7. 用户反馈摘要
*由于过去 24 小时 Issues 无新增，无法直接从 Issue 评论中提炼用户反馈。*  
然而，从 PR 描述可反推部分**已解决的用户痛点**：
- **部署与配置复杂性**：PR #2885 指出 Slack Socket Mode 因分支合并遗漏而缺失，说明用户对**简化、引导式设置流程**有强烈需求。
- **安全与隔离性**：PR #2880 的存在证明用户（或安全审计）对**容器隔离边界**的完整性高度关注。
- **单提供商环境兼容性**：PR #2886 修复的问题，反映了在简化部署（仅用一个 LLM 提供商）场景下的**实际使用障碍**。

---

### 8. 待处理积压
以下 **5 个 PR 处于 OPEN 状态**，均创建于 2 天内，属于**高优先级待处理工作**，建议维护团队尽快审核：
- **[OPEN] PR #2886**: 关键功能修复（提供商继承），影响新用户注册流程。
- **[OPEN] PR #2880**: **高危安全修复**，应最高优先级合并。
- **[OPEN] PR #2885**: 修复 Slack 设置流程，影响 Slack 用户体验。
- **[OPEN] PR #2884**: 新增 Discord 适配器，是重要的新功能。
- **[OPEN] PR #2871**: 新增 Dashboard Pusher，是架构层面的增强。

**长期未响应 Issue 提醒**：当前数据未显示存在长期未响应的 Issues（过去 24 小时无活动）。建议定期审查 `bystander` 或 `stale` 标签下的旧 Issue，防止积压。

---
**数据来源**: [NanoClaw GitHub Repository](https://github.com/nanocoai/nanoclaw)  
**报告生成**: AI 智能体与个人 AI 助手领域开源项目分析师

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-30)

## 1. 今日速览
IronClaw 项目今日维持**高活跃度**，共处理 14 个 Issues（10 个新开/活跃，4 个关闭）和 50 个 Pull Requests（30 个待合并，20 个已合并/关闭）。开发重点集中于 **Reborn WebUI v2 的稳定性修复、测试覆盖扩展和用户体验优化**。核心团队正积极解决关键路径上的认证、状态管理和工具集成问题，同时推进集成测试框架的完善。无新版本发布，项目处于密集开发与质量保证阶段。

## 2. 版本发布
- **无新版本发布**。最近一次版本更新为 `ironclaw` 0.29.1（见 PR #5311），但今日未发布新版本。

## 3. 项目进展
今日多个重要 PR 合并关闭，显著推进了 Reborn WebUI v2 的成熟度与工程化水平：

- **测试框架增强**：PR [#5402](https://github.com/nearai/ironclaw/pull/5402) 合并了共享持久化组测试，覆盖跨线程 E2E 体验及适配器表面（批准、认证失败、内存、密钥、扩展）。
- **UI 可访问性修复**：PR [#5414](https://github.com/nearai/ironclaw/pull/5414) 修复了 WebUI v2 日志页面文本不可选/复制的缺陷（对应 Issue #5412）。
- **集成测试框架扩展**：PR [#5392](https://github.com/nearai/ironclaw/pull/5392) 完成了测试框架切片 3-9，涵盖 LibSQL 矩阵、出口 HTTP 匹配器、MCP/OAuth/刷新等场景，为真实栈测试奠定基础。
- **QA 流程优化**：PR [#5422](https://github.com/nearai/ironclaw/pull/5422) 修复了 `/canary` PR 目标验证，PR [#5406](https://github.com/nearai/ironclaw/pull/5406) 在实时 QA 中集成 QA 表提示，提升自动化测试的准确性与覆盖率。
- **设计提案**：PR [#5425](https://github.com/nearai/ironclaw/pull/5425) 提交了多用户 RBAC 收敛设计，主张复用现有能力而非新增层级，为未来权限模型提供方向。

**整体推进评估**：项目在测试基础设施、UI 细节打磨和 QA 自动化方面取得实质性进展，降低了技术债务，但核心功能（如 Routine、工具链）的稳定性仍需加强。

## 4. 社区热点
尽管 Issues 和 PRs 的评论数普遍较低（多数为 0 或 1），但以下议题因影响核心用户体验或涉及架构决策而受到核心团队重点关注：

- **Issue #5413**（[已关闭] Reborn inline OAuth 刷新静默失败）：该问题曾导致 #5378 诊断困难，今日关闭表明认证路径的健壮性得到改善。
- **Issue #5420**（Routine 交付目标全局性 bug）：描述了一个影响自动化功能的严重状态管理缺陷，可能引发用户数据路由混乱。
- **PR #5392**（集成测试框架切片 3-9）：作为大型测试基础设施 PR，其合并对项目长期质量保证至关重要，吸引了核心贡献者讨论。
- **PR #5149**（上下文管理——渐进式工具披露）：通过减少提示 token 数解决 NEAR AI 超时问题，是性能优化的关键尝试，目前仍开放待最终审查。

## 5. Bug 与稳定性
今日报告多个中高优先级 Bug，集中在 **状态管理、工具集成和 UI 行为** 方面：

| 严重程度 | Issue | 问题摘要 | 状态 | 关联 Fix PR |
|----------|-------|----------|------|-------------|
| **P1** | [#5415](https://github.com/nearai/ironclaw/issues/5415) | 多工具 Google Sheets 工作流因“协议违反”失败（18-25 次工具调用后） | OPEN | 无 |
| **P2** | [#5417](https://github.com/nearai/ironclaw/issues/5417) | Hacker News 搜索激活错误技能（tech-debt-tracker 而非 web_search） | OPEN | 无 |
| **P2** | [#5416](https://github.com/nearai/ironclaw/issues/5416) | Google 连接状态报告矛盾（声称已连接但未认证） | OPEN | 无 |
| **P2** | [#5420](https://github.com/nearai/ironclaw/issues/5420) | Routine 交付目标为全局设置，修改一个routine影响所有 | OPEN | 无 |
| **P3** | [#5419](https://github.com/nearai/ironclaw/issues/5419) | 无法重命名现有自动化（名称过长或截断） | OPEN | 无 |
| **P3** | [#5418](https://github.com/nearai/ironclaw/issues/5418) | 工具活动后对话消息顺序错误（响应显示在活动块上方） | OPEN | 无 |
| **P3** | [#5426](https://github.com/nearai/ironclaw/issues/5426) | 创建 Routine 时“系统驱动器不可用”（QA 环境） | OPEN | 无 |
| **已修复** | [#5412](https://github.com/nearai/ironclaw/issues/5412) | WebUI v2 日志条目文本不可选/复制 | CLOSED | PR [#5414](https://github.com/nearai/ironclaw/pull/5414) |

**稳定性评估**：今日暴露的 Bug 显示 **Routine 功能、工具路由和状态同步** 存在系统性风险，可能影响生产环境用户工作流。P1 问题（#5415）尤其需紧急关注。

## 6. 功能请求与路线图信号
今日无全新功能请求 Issue，但现有 PR 和讨论揭示了项目路线图的潜在重点：

- **安全与权限模型深化**：PR [#5394](https://github.com/nearai/ironclaw/pull/5394)（能力策略 E2E）和设计 PR [#5425](https://github.com/nearai/ironclaw/pull/5425)（多用户 RBAC 收敛）表明团队正构建更细粒度、可测试的权限系统。
- **用户体验与零配置**：Issue #5421 指出网络搜索需手动配置 NEAR AI 密钥，与“零配置”目标背离，可能推动自动凭证管理或默认集成。
- **性能与可扩展性**：PR [#5149](https://github.com/nearai/ironclaw/pull/5149) 通过渐进式工具披露降低延迟，是应对模型超时的重要优化，可能成为默认行为。
- **通道配对通用化**：PR [#5373](https://github.com/nearai/ironclaw/pull/5373) 将 Slack 配对流程泛化为通用通道配对，为支持更多平台（如 Discord、Teams）铺路。

## 7. 用户反馈摘要
从 Issues 描述可提炼以下真实用户痛点：

- **认证流程不透明**：OAuth 刷新静默失败（#5413）和 Google 连接状态矛盾（#5416）导致用户困惑，无法理解为何工具调用失败。
- **自动化功能不可靠**：Routine 交付目标全局性（#5420）和创建失败（#5426）使自动化用例（如定时读取表格、发送 Slack）无法按预期工作。
- **工具选择逻辑缺陷**：错误技能激活（#5417）表明意图识别或工具路由逻辑需校准，影响任务完成效率。
- **UI 细节缺失**：无法重命名自动化（#5419）、消息顺序错乱（#5418）降低用户控制感和可预测性。
- **配置摩擦**：网络搜索需 API 密钥（#5421）违背“开箱即用”理念，增加新用户门槛。

**满意度线索**：今日无正面反馈 Issue，但 PR 中大量测试覆盖和 UI 修复（如日志复制、配对流程硬化）显示团队在积极响应用户体验细节。

## 8. 待处理积压
以下长期未决事项需维护者优先关注：

- **Issue #4108**（[Nightly E2E 失败](https://github.com/nearai/ironclaw/issues/4108)）：自 2026-05-27 持续失败，可能指示基础架构或环境问题，影响每日质量门禁。
- **Issue #4776**（[添加全局 Always Allow 设置](https://github.com/nearai/ironclaw/issues/4776)）：自 2026-06-11 未关闭，是用户请求的权限管理功能，但需与 Reborn 多用户 RBAC 设计（PR #5425）对齐。
- **PR #3706**（[文档依赖升级](https://github.com/nearai/ironclaw/pull/3706)）：自 2026-05-16 待合并，涉及 PostCSS 和 Remotion 升级，虽风险低但积压较久，可能影响文档构建。
- **PR #

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-30)

## 1. 今日速览
过去24小时，LobsterAI 项目保持**高度开发活跃度**，共处理 **40 个 Pull Requests**（合并/关闭 39 个，合并率 97.5%），表明核心团队迭代迅速、版本发布流程高效。同时，社区新增 **8 个活跃 Issues**，但仅关闭 3 个，**社区反馈积压有所增加**。今日核心工作围绕 **2026.6.29 版本的发布后修复与 OpenClaw 集成的稳定性增强**，重点修复了工作空间隔离、历史记录同步及用户界面体验问题。

## 2. 版本发布
**新版本：** `LobsterAI 2026.6.29` (已于 2026-06-29 发布)
*   **核心修复与改进：**
    *   **OpenClaw 集成稳定性：** 修复了插件审批路由（`#2217`）、用户回合缓存稳定性（`#2219`）、代理启动工作空间与任务工作目录分离（`#2227`）、定时任务历史记录保留与同步（`#2220`, `#2190`, `#2189`）等关键问题。
    *   **Cowork 用户体验：** 清理并优化了会话侧边栏（Conversation Rail）的工具提示预览、悬停样式及导航逻辑（`#2223`, `#2222`, `#2226`）。
    *   **插件生态：** 升级并预装了 OpenClaw 的 IM 插件（钉钉、飞书、企微、POPO、QQ、Discord），并改进了插件安装与运行时支持（`#2182`, `#2198`）。
    *   **其他：** 修复了 OpenAI OAuth 路由问题（`#2221`）。
*   **破坏性变更：** 本次发布主要为修复性更新，未提及重大破坏性变更。但 **OpenClaw 工作空间隔离修复（`#2227`）** 可能影响依赖旧行为（将项目目录作为工作空间）的自定义插件或脚本，建议用户验证其 OpenClaw 任务在代理独立工作空间下的行为。
*   **迁移注意事项：** 无特殊迁移步骤。建议用户更新至最新版本以获得 OpenClaw 任务稳定性和会话导航的改进体验。

## 3. 项目进展
今日合并的 PR 主要服务于 **2026.6.29 版本的发布与质量保障**，项目在以下方向取得明确进展：
*   **OpenClaw 运行时健壮性：** 通过 `#2227`（工作空间隔离）、`#2220`（cron 历史保留）、`#2189`（legacy cron 迁移）等 PR，系统性地解决了 v2026.6.1 引入的缓存、工作目录和历史同步相关回归问题，**显著提升了长时间运行和定时任务的可靠性**。
*   **UI/UX 精细化打磨：** `#2223`/`#2222` 系列 PR 清理了会话侧边栏的视觉噪音，优化了信息密度，**提升了高分辨率屏幕（如 2560x1600）下的可用性**，回应了用户对界面布局的反馈。
*   **发布流程规范化：** `#2228` 完成了版本向主分支的合并，`#2225`/`#2224` 处理了意外合并的 revert 操作，**展示了成熟的分支管理与发布回滚能力**。
*   **依赖与文档：** `#1277` 更新了 Electron 依赖；`#2184` 更新了 Agent 开发指南，**保持了技术栈与文档的同步**。

## 4. 社区热点
*   **最活跃的 Issues 讨论：**
    *   **[#2120] 功能建议** (评论数: 2, 👍: 0) - 用户提出三项具体建议：**任务预输入以提升连续性**、**延长单次任务运行时长**、**调整技能界面为三列布局**。该 Issue 集中反映了高级用户对**工作流连续性、长时间任务稳定性及高分辨率适配**的核心诉求，与近期 PR 中修复的 cron 历史、工作空间问题高度相关，**很可能影响后续版本的功能规划**。
    *   **[#2079] 执行结果窗口滚动假死** (评论数: 2) - 一个可复现的 UI 阻塞问题，影响基本使用体验，但尚未看到直接关联的修复 PR。
*   **最受关注的 PR 线程：**
    *   **[#2222] & [#2223] fix(cowork): clean and align conversation rail tooltips** - 这两个 PR（后者为前者的修正）经历了 `revert` 和 `reapply`（`#2225`, `#2226`），**讨论和修改频繁**，表明团队对 UI 细节的严谨态度，也说明此改动对用户体验影响较大。

## 5. Bug 与稳定性
| 严重程度 | Issue | 问题描述 | 状态 | 关联修复 |
| :--- | :--- | :--- | :--- | :--- |
| **高** | [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) | 执行结果窗口滚动到顶端导致界面假死（可复现） | OPEN | 无直接关联 PR |
| **高** | [#1388](https://github.com/netease-youdao/LobsterAI/issues/1388) | 邮箱配置“测试连通性”后无响应，状态卡死 | OPEN (stale) | 无 |
| **中** | [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) | 定时任务编辑后“更新”按钮点击无响应（偶现） | OPEN (stale) | 可能由 `#2220`, `#2190` 等 cron 修复间接解决 |
| **中** | [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) | Claw 重复输出文字，疑似 token 浪费 | OPEN | 无直接关联 PR |
| **低** | [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389) | 英文界面下，中文选项显示为英文文本 | OPEN (stale) | 无 |
| **低** | [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386) | 会话分享长图内容不全 | OPEN (stale) | 无 |

**说明：** 今日新报告的高优先级 Bug（`#2079`）暂无对应修复 PR。部分 stale 的定时任务问题（`#1390`）可能已被近期 cron 历史同步的底层修复（`#2220` 等）覆盖，需验证。

## 6. 功能请求与路线图信号
*   **明确的新功能需求：**
    *   **[#2131](https://github.com/netease-youdao/LobsterAI/issues/2131)**：询问 **Hermes Agent** 支持计划。这是一个关于**扩展 Agent 框架兼容性**的明确信号。
    *   **[#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)**：建议 **任务预输入队列**、**延长任务运行时长**、**技能界面三列布局**。其中“任务预输入”与“延长时长”是提升**开发工作流连续性**的关键需求，与当前 OpenClaw 任务稳定性修复方向一致，**可能被纳入下一迭代**。
*   **路线图推断：** 近期 PR 密集修复 OpenClaw 集成，表明 **OpenClaw 作为核心执行引擎的稳定性是当前最高优先级**。在此基础上，**工作流连续性（预输入、长任务）** 和 **高级 UI 适配（多列布局）** 很可能是下一版本的功能重点。

## 7. 用户反馈摘要
*   **核心痛点：**
    1.  **工作流中断：** 长时间任务意外终止（`#2120`）、定时任务更新失败（`#1390`），严重影响开发脚本运行和自动化流程。
    2.  **连续性不足：** 无法在任务运行中预输入后续任务，需等待当前任务完全结束，降低效率（`#2120`）。
    3.  **UI 适配缺陷：** 高分辨率下技能界面双列布局不美观（`#2120`）；会话分享长图内容截断（`#1386`）；语言切换不彻底（`#1389`, `#1434`）。
    4.  **配置体验差：** 邮箱连通性测试无反馈（`#1388`），用户无法确认配置是否正确。
    5.  **资源效率疑虑：** Claw 重复输出可能造成 token 浪费（`#2121`）。
*   **满意点：** 从 PR 的高效合并和版本发布速度看，**核心团队响应迅速，对底层稳定性（OpenClaw 集成）投入大量精力**，用户对此类修复是认可的（尽管未直接评论）。

## 8. 待处理积压
以下为创建时间较早（2026-04-03）、标记为 `[stale]` 但近期（2026-06-29）仍有更新、**可能影响基础体验且未解决**的重要 Issue，**建议维护者优先复查**：
*   **[#1386](https://github.com/netease-youdao/LobsterAI/issues/1386)**：会话分享长图内容不全（功能缺陷）。
*   **[#1388](https://github.com/netease-youdao/LobsterAI/issues/1388)**：邮箱配置测试连通性无响应（配置流程阻塞）。
*   **[#1390](https://github.com/netease-youdao/LobsterAI/issues/1390)**：定时任务更新无响应（偶现，但影响自动化核心功能）。
*   **[#1389](https://github.com/netease-youdao/LobsterAI/issues/1389)**：语言切换不彻底（国际化体验问题）。
*   **[#1434](https://github.com/netease-youdao/LobsterAI/issues/1434)**, **[#1435](https://github.com/netease-youdao/LobsterAI/issues/1435)**：Agent 界面搜索无数据提示、名称过长显示问题（UI 细节）。

---
**报告生成依据：** GitHub 仓库 `netease-youdao/LobsterAI` 数据 (截至 2026-06-30 24小时)。

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

# CoPaw 项目动态日报 (2026-06-30)

## 1. 今日速览
过去24小时，CoPaw 项目社区活跃度极高，共处理 **29 个 Issues**（20 个新开/活跃，9 个已关闭）和 **50 个 Pull Requests**（31 个待合并，19 个已合并/关闭）。无新版本发布。开发重点集中于**多模型兼容性修复**（DeepSeek、MiniMax）、**工具调用稳定性**（结果卡片计数、审批通知）及**上下文管理**（防御性裁剪、滚动策略）的深度优化。社区对**成本控制**（前缀缓存）、**数据持久化**（对话记录断点保存）及**跨平台体验**（钉钉/飞书通道）的诉求尤为突出，项目整体处于高速迭代与问题修复并行的阶段。

## 2. 版本发布
- **无新版本发布**。最新稳定版仍为 v1.1.12.post2，Beta 版 v2.0.0-beta.1 的发布验证流程已于 6 月 26 日启动（#5571），但今日无新 Tag 创建。

## 3. 项目进展
今日多个关键修复与改进 PR 已合并或接近完成，推动项目在稳定性与用户体验上显著前进：
- **已合并/关闭的重要 PR**：
  - **#5515**：升级 `@agentscope-ai/chat` 至最新 Beta 版，启用新版聊天 UI 能力（如用户消息导航锚点），为前端体验现代化奠定基础。
  - **#5628**：修复工具调用结果卡片计数错误（#5624），现在正确统计归一化后的输出行数，解决 `glob_search`/`read_file` 等工具显示“1文件”的 Bug。
  - **#5601**：修复 Runtime v2 重构后工具审批通知未推送至 IM 通道（飞书/钉钉/Telegram 等）的问题，恢复第三方通道的审批交互能力。
  - **#5614**：全面更新上下文管理文档，以“滚动策略”替代旧的“背包类比”，详细说明新架构、配置选项及迁移路径，降低用户使用门槛。
- **重要开放 PR（已通过审查，待合并）**：
  - **#5629**：在 UI 中暴露原生/滚动上下文策略选择器，并抑制过度积极的记忆写入行为，优化记忆系统噪声。
  - **#5510**：在工具响应插入上下文前增加**执行层硬性上限**（defense-in-depth），防止因 LLM 调用失败导致工具结果无限累积引发上下文爆炸（对应 #5342）。
  - **#5557**：将心跳检测的执行超时时间从硬编码改为可配置（默认 300 秒），提升运维灵活性。

## 4. 社区热点
今日讨论最活跃的议题围绕**成本优化**与**核心功能缺陷**：
- **最高热度 Issue**：**[#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)**（5 评论，1 👍）- DeepSeek 前缀缓存命中率仅 ~95%，导致用户承担高额 Cache Miss 费用（差距 4-20 倍）。社区正在探索请求合并、提示词优化等方案，**成本敏感用户高度关注**。
- **高活跃 Issue**：**[#5624](https://github.com/agentscope-ai/QwenPaw/issues/5624)**（3 评论）- 工具结果卡片计数错误，影响 `glob_search`、`read_file` 等高频工具，**已通过 PR #5628 修复**，但合并前用户仍受困扰。
- **高价值 PR 讨论**：**[#5515](https://github.com/agentscope-ai/QwenPaw/pull/5515)**（评论数未显示但为关键依赖更新）- 更新聊天 UI 组件库，是 v2.0 前端体验升级的基础，影响所有通道的界面一致性。

## 5. Bug 与稳定性
按严重程度排序，今日报告或确认的 Bug：
1.  **严重（数据丢失/任务中断）**：
    - **[#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579)**：异常中断（如宿主机重启、服务崩溃）导致对话记录完全丢失，**无断点恢复机制**。用户痛点极深，需优先解决。
    - **[#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873)**：同时启动两个 subagent 导致主 agent 无限快速轮询，且**飞书侧无法打断**。已存在 29 天，稳定性风险高。
2.  **高（核心功能失效）**：
    - **[#5561](https://github.com/agentscope-ai/QwenPaw/issues/5561)**：飞书通道无法发送较长回复，被迫降级为文件传输，**影响日常协作**。
    - **[#5505](https://github.com/agentscope-ai/QwenPaw/issues/5505)**：MiniMax-M3 图片安全审核错误被错误缓存为 `rejects_media=True`，导致后续视觉请求被静默剥离，**模型能力误判**。
    - **[#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573)**：DeepSeek V4 thinking 模式在 OpenAI 兼容端点触发两类 400 错误（流式 reasoning_content 缺失、工具 Schema null 类型），**多轮对话几乎必现**。
3.  **中（UI/显示错误）**：
    - **[#5624](https://github.com/agentscope-ai/QwenPaw/issues/5624)**：工具结果卡片计数恒为 1。**已有修复 PR #5628 待合并**。
    - **[#5583](https://github.com/agentscope-ai/QwenPaw/issues/5583)**：聊天界面右侧弹出层默认选中背景不明显（UI 易用性）。

## 6. 功能请求与路线图信号
用户提出的高价值新功能需求，结合现有 PR 判断纳入下一版本（v2.0 或后续）的可能性：
- **高可能性（已有相关 PR 或设计讨论）**：
  - **模型自动降级**（#5572）：配额耗尽/调用失败/超时自动切换备选模型。与 #5510 的防御性设计及 Runtime 架构改进方向一致，**可靠性核心功能**。
  - **纯文本模型图片自动 fallback**（#5615）：检测到纯文本模型时，自动调用视觉模型生成描述并注入。与多模态支持（#5515）及插件化（#5221）架构契合。
  - **记忆搜索专用 Reranker**（#5588）：实现 embedding 粗筛 + LLM 精排的两阶段检索，提升长记忆库精度。与 #5629 的记忆优化同属记忆系统升级。
- **中可能性（需评估实现成本）**：
  - **钉钉通道图片预览消息**（#5593）：上传图片为 `media_id` 而非文件，提升体验。需钉钉 API 支持，已有通道改造基础。
  - **Telegram 自定义 BaseURL**（#5630）：支持代理/私有部署场景，**通道扩展性需求**。
  - **Windows 系统托盘支持**（#5622）：后台运行不占任务栏，**桌面端体验优化**。
- **基础设施需求**：
  - **自定义模型协议/端点**（#5609）：支持非标准 `/v1/chat/completions` 路径（如 `/v1/images/generations`），以接入更多免费模型。**需抽象模型客户端层**。

## 7. 用户反馈摘要
从 Issues 描述与评论中提炼的真实用户痛点与场景：
- **成本敏感**：DeepSeek 用户对 5% 的缓存未命中率带来的**成本飙升**极为不满（#3891），期望底层优化。
- **稳定性焦虑**：长任务执行中因服务异常、宿主机重启导致**进度全丢**（#5579），或因子 agent 并发导致**无限轮询**（#4873），用户缺乏控制感。
- **多模型适配碎片化**：用户在不同模型（DeepSeek V4、MiniMax-M3、ascend-vllm）上遇到**兼容性陷阱**（#5573, #5505, #5584），配置后仍无法正常使用，**文档与错误提示不足**。
- **通道体验割裂**：飞书/钉钉通道在**长消息、图片、审批通知**等场景下功能缺失或降级（#5561, #5593, #5601），与 Web 端体验差距大。
- **性能感知**：部分用户反馈“最新版本越来越卡顿”（#5555），可能与上下文膨胀、记忆写入过频（#5629）有关，需性能剖析。
- **正面反馈隐含**：MCP 工具可见性（#2495）、定时任务基础功能（#4939）等已关闭 Issue 表明基础功能逐步完善，但**高级管理操作（如更新）仍缺失**。

## 8. 待处理积压
以下为创建时间较长（>1 周）、影响范围较广或严重程度高但尚未关闭的 Issue，提醒维护者优先关注：
- **[#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873)**（创建于 2026-06-01）：**严重稳定性 Bug**，并发子 agent 导致无限轮询且飞书端无法打断，已滞留 29 天。
- **[#5342](https://github.com/agentscope-ai/QwenPaw/issues/5342)**（创建于 2026-06-20）：工具结果大小硬限制需求，与上下文爆炸防御直接相关，**已有 PR #5510 部分解决**，但 Issue 未关闭。
- **[#552

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