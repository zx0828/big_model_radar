# OpenClaw 生态日报 2026-06-14

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-06-14 00:39 UTC

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

# OpenClaw 项目动态日报 (2026-06-14)

## 1. 今日速览

OpenClaw 项目今日保持高度活跃，24小时内处理了 500 个 Issues（361 新开/活跃，139 关闭）和 500 个 PRs（309 待合并，191 已合并/关闭），反映出社区贡献旺盛且维护团队响应及时。项目连续发布两个 beta 版本（v2026.6.7 和 v2026.6.8），重点强化了多平台频道交付能力。当前核心矛盾集中在**稳定性修复**（内存泄漏、会话状态管理、交付可靠性）与**安全加固**（输入验证、权限控制）上，同时社区对成本控制、配置灵活性等高级功能的需求持续增长。

## 2. 版本发布

### v2026.6.8-beta.1
- **核心改进**：Telegram 和 WhatsApp 频道交付能力显著增强
  - Telegram 支持结构化富文本（表格、列表、可展开引用块）
  - 保留 CLI 后端交付的提示信息
  - 弃用原生草稿迁移，优化富媒体边界处理
- **影响**：提升移动端用户体验，减少交付 brittleness
- **迁移注意**：WhatsApp 相关功能需重新配置媒体边界策略

### v2026.6.7-beta.1
- **核心改进**：跨频道交付一致性优化
  - Slack 最终消息持久化到转录
  - 顶级 `image` 消息工具支持附件媒体
  - Telegram 可展开引用块与分页操作结果优化
- **影响**：解决跨平台消息顺序与格式问题

## 3. 项目进展

今日多个关键 PR 合并，推动项目在稳定性、安全性和交付质量上取得进展：

- **交付序列化** ([PR #44143](https://github.com/openclaw/openclaw/pull/44143))：修复多会话并发发送导致消息乱序问题，确保同一接收者的消息按发送顺序到达
- **网关安全加固** ([PR #44884](https://github.com/openclaw/openclaw/pull/44884))：实施公共网络暴露时的全面安全策略，包括 IP 访问控制、认证强化和 CORS 检查
- **MCP 进程清理** ([PR #92696](https://github.com/openclaw/openclaw/pull/92696))：确保会话重置时清理遗留 MCP 进程，防止文件锁竞争
- **内存管理修复** ([PR #92698](https://github.com/openclaw/openclaw/pull/92698))：阻止 markdown 占位符片段进入短期记忆，避免 MEMORY.md 污染
- **状态清理** ([PR #92790](https://github.com/openclaw/openclaw/pull/92790))：清除过时的自动回退源，防止模型选择错误
- **安装脚本加固** ([PR #87799](https://github.com/openclaw/openclaw/pull/87799))：修复 `curl | bash` 安装时的管道损坏问题

## 4. 社区热点

最活跃讨论集中在以下高评论 Issues：

- **[#44925](https://github.com/openclaw/openclaw/issues/44925)** (19 评论, 🦞 P1)：子代理完成通知静默丢失，涉及超时、重试和自动重启机制失效。社区提供多个复现路径，凸显多代理编排的可靠性危机。
- **[#54253](https://github.com/openclaw/openclaw/issues/54253)** (14 评论, 🦪 P2)：RISC-V64 架构上 LLM 请求失败，反映跨平台兼容性测试不足。
- **[#45740](https://github.com/openclaw/openclaw/issues/45740)** (13 评论, 🦞 P1)：`gh-issues` 技能未过滤 GitHub issue 内容直接注入子代理提示，构成提示注入攻击面。
- **[#90991](https://github.com/openclaw/openclaw/issues/90991)** (13 评论, 🐚 P1)：Cron 触发器污染全局运行时状态，导致系统级过载失败，已关闭但修复验证中。
- **[#42475](https://github.com/openclaw/openclaw/issues/42475)** (12 评论, 🌊 P2）：网关层实施每代理成本预算控制的需求，反映企业对成本管控的迫切需求。

## 5. Bug 与稳定性

### 严重级别 P0-P1

| Issue | 严重度 | 问题描述 | 状态 | 关联 PR |
|-------|--------|----------|------|---------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | P0 | 网关内存泄漏：RSS 从 350MB 增长至 15.5GB 导致 OOM 崩溃 | 活跃 | 无 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | P1 | 子代理完成静默丢失（无重试、无通知、超时无重启） | 活跃 | 无 |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | P1 | `gh-issues` 技能未过滤 issue body 注入子代理提示 | 活跃 | 无 |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | P1 | Discord 泄露内部工具调用痕迹（NO_REPLY、to=functions 等） | 活跃 | 无 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | P1 | 多代理编排不稳定：并发配置覆盖、会话锁失败、子进程脱离 | 活跃 | 无 |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) | P1 | 压缩超时导致会话挂起，触发重复消息发送循环 | 活跃 | 无 |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) | P1 | Playwright 断言错误未处理导致网关进程崩溃 | 活跃 | 无 |
| [#45049](https://github.com/openclaw/openclaw/issues/45049) | P1 | 代理循环允许模拟工具调用而非强制真实调用 | 活跃 | 无 |
| [#44502](https://github.com/openclaw/openclaw/issues/44502) | P1 | Discord 路由/提及门控回归问题 | 活跃 | 无 |
| [#43996](https://github.com/openclaw/openclaw/issues/43996) | P1 | 沙箱容器应用 `no-new-privileges` 后立即退出 | 活跃 | 无 |

### 回归问题
- **会话状态管理**：心跳时间戳陈旧（[#44993](https://github.com/openclaw/openclaw/issues/44993)）、Write 工具无追加模式导致数据丢失（[#40001](https://github.com/openclaw/openclaw/issues/40001)）、Feishu 图片附件丢失（[#41744](https://github.com/openclaw/openclaw/issues/41744)）
- **交付问题**：Telegram DM 仍路由到主会话（[#41165](https://github.com/openclaw/openclaw/issues/41165)）、早期中止响应模板变量未填充（[#45314](https://github.com/openclaw/openclaw/issues/45314)）

## 6. 功能请求与路线图信号

结合高需求 Issues 与相关 PR，以下功能可能进入下一版本：

- **成本管控**：每代理成本预算（[#42475](https://github.com/openclaw/openclaw/issues/42475)）—— 网关层预调度检查，防止超额支出
- **记忆管理**：重置前内存自动刷新（[#45608](https://github.com/openclaw/openclaw/issues/45608)）—— 与压缩机制一致的预清理
- **配置灵活性**：YAML 配置支持（[#45758](https://github.com/openclaw/openclaw/issues/45758)）—— 提升可读性，PR 未出现但需求明确
- **工具增强**：浏览器工具 CSS 选择器支持（[#44431](https://github.com/openclaw/openclaw/issues/44431)）、外部重排序器（[PR #92725](https://github.com/openclaw/openclaw/pull/92725)）
- **生命周期钩子**：网关事件钩子（[#43454](https://github.com/openclaw/openclaw/issues/43454)）—— 支持 onSubagentComplete、onToolCallThreshold 等
- **会话记忆**：自动保存与合成（[#40418](https://github.com/openclaw/openclaw/issues/40418)）—— 跨会话持续学习
- **UI 增强**：MathJax/LaTeX 渲染（[#42840](https://github.com/openclaw/openclaw/issues/42840)）—— 科学计算场景刚需

## 7. 用户反馈摘要

从 Issues 评论与描述提炼的核心痛点：

- **可靠性优先**：用户最焦虑的是**静默失败**（消息丢失、会话挂起、超时无通知），这直接破坏自动化工作流信任。子代理完成丢失（#44925）和会话压缩超时（#43661）是典型。
- **状态隔离失败**：Cron 作业和心跳机制污染主会话状态（#90991, #44993），导致多任务场景数据混乱。
- **安全边界模糊**：未过滤的第三方内容注入（#45740）和内部工具调用泄露（#44905）暴露攻击面，企业用户尤为关注。
- **交付质量参差**：不同频道（Telegram、Discord、Feishu）行为不一致，富媒体处理、消息顺序、提及门控等问题频发，影响终端用户体验。
- **成本不可控**：缺乏细粒度预算控制（#42475），用户遭遇意外支出（如 DeepSeek 缓存失效导致费用激增 #91018）。
- **配置与运维复杂度**：YAML 支持、备份排除、路径权限等需求反映现有 JSON5 配置和工具权限模型难以满足高级运维场景。

## 8. 待

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-06-14)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态呈现 **“一超多强、全面演进”** 的态势。以 **OpenClaw** 为核心参照的项目社区规模与开发活跃度遥遥领先，但正面临从“功能快速迭代”向“企业级稳定性与安全”转型的核心矛盾。其他主流项目（NanoBot、Zeroclaw、IronClaw、NanoClaw）同样处于高强度开发状态，但技术路线分化明显：部分聚焦**架构解耦与插件化**（Zeroclaw、NanoClaw），部分深耕**特定渠道与用户体验**（IronClaw 的 Slack/附件、NanoBot 的 WebUI）。整体趋势显示，社区对**可靠性、安全性、成本可控性**的诉求已超越单纯的功能扩展，成为下一阶段竞争的关键维度。

## 2. 各项目活跃度对比

| 项目 | 24h Issues (新/关) | 24h PRs (待/已) | Release | 健康度评估 | 关键特征 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 361新 / 139关 | 309待 / 191已 | 2个 beta | **中高** | 规模巨大，交付与稳定性修复并重，安全加固需求突出 |
| **NanoBot** | 2新 / 3关 | 14待 / 5已 | 无 | **中** | 高PR合并率，但存在严重回归Bug（启动崩溃、API兼容） |
| **Zeroclaw** | 25新 / 17关 | 38待 / 12已 | 无 (0.8.0) | **中** | 架构演进（插件、统一运行时）与Web/TUI稳定性问题并存 |
| **IronClaw** | 数据未细分 | 18待 / 6已 | 无 | **中** | 附件功能全链路快速推进，但Nightly E2E失败阻塞发布 |
| **NanoClaw** | 0新 / 1关 | 1待 / 14已 | 无 | **观察中** | PR合并极快，架构演进积极，但社区零互动，反馈循环缺失 |
| **PicoClaw** | 1新 / 0关 | 2待 / 5已 | 1个 nightly | **中** | 聚焦资源优化（图像压缩），但“进化模式”资源消耗问题待查 |
| **CoPaw** | 10活跃 | 6待 / 2已 | 无 | **中低** | 多Bug报告（下载、启动、会话卡死），稳定性受质疑 |
| **LobsterAI** | 0新 / 2关 | 3待 / 2已 | 无 | **低** | 活动仅限陈旧议题标记，无新讨论，维护活跃度不足 |
| **Moltis** | 1新 / 0关 | 1待 / 0已 | 无 | **低** | 围绕单一OAuth Bug快速响应，但整体贡献者参与度有限 |
| **TinyClaw** | 无活动 | 无活动 | - | **停滞** | - |
| **ZeptoClaw** | 无活动 | 无活动 | - | **停滞** | - |
| **EasyClaw** | 无活动 | 无活动 | - | **停滞** | - |

**注**：健康度评估结合了Bug严重性、发布节奏、社区互动及技术债务清理情况。

## 3. OpenClaw 在生态中的定位
- **规模与影响力**：作为生态的“事实核心”，其每日处理 **500+ Issues/PRs** 的量级是其他项目的 **10-50倍**，社区贡献者基数庞大，技术决策具有风向标意义。
- **技术路线**：聚焦 **“多平台交付一致性”** 与 **“网关层稳定性”**，路径务实。与 Zeroclaw 的“插件架构”、NanoClaw 的“Provider seam”等底层解耦路线不同，OpenClaw 更倾向于在现有单体/微服务边界内强化交付管道和状态管理。
- **社区对比**：社区规模远超其他，但高活跃度也带来了高密度的严重Bug报告（P0-P1 列表长），反映出在快速支持多频道（Telegram/WhatsApp/Discord）过程中，核心状态的可靠性与安全性成为主要技术债。

## 4. 共同关注的技术方向
多项目共同涌现的需求，反映了行业共性挑战：
1.  **状态管理与隔离**（OpenClaw, Zeroclaw, IronClaw, CoPaw）
    - **诉求**：防止 Cron、心跳、多代理并发等场景下的全局状态污染与会话数据混乱。
    - **表现**：OpenClaw 清理过时回退源、Zeroclaw 统一 SopEngine 单例、IronClaw 优化 DeferredBusy drain。
2.  **静默失败与可观测性**（OpenClaw, NanoBot, IronClaw, CoPaw）
    - **诉求**：消除消息丢失、会话挂起、超时无通知等“无声故障”，建立清晰的错误反馈与重试机制。
    - **表现**：OpenClaw 修复子代理完成通知丢失、NanoBot 修复启动崩溃、IronClaw 修复 ask_user 失败。
3.  **安全边界加固**（OpenClaw, Zeroclaw, IronClaw）
    - **诉求**：从输入验证（gh-issues 注入）、权限控制（delegate 工具）、到内部信息泄露（Discord 工具痕迹）的全链路防护。
    - **表现**：OpenClaw 网关安全 PR、Zeroclaw delegate 工具修复、IronClaw 附件权限链路。
4.  **成本与资源可见性**（OpenClaw, PicoClaw）
    - **诉求**：每代理/每会话的预算控制、后台任务（如“进化”模式）的资源消耗监控。
    - **表现**：OpenClaw 每代理成本预算需求、PicoClaw 调查周期性 Token 消耗。
5.  **配置与部署体验**（OpenClaw, NanoBot, Zeroclaw）
    - **诉求**：YAML 支持、WebUI 与配置文件同步、插件安装路径统一、Docker 文档完善。
    - **表现**：OpenClaw YAML 需求、NanoBot WebUI/config.json 同步、Zeroclaw 插件路径迁移。

## 5. 差异化定位分析
| 维度 | OpenClaw | NanoBot | Zeroclaw | IronClaw | NanoClaw | PicoClaw | CoPaw |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 多平台交付、网关稳定性 | WebUI 自动化、TTS 多提供商 | 插件系统、TUI、Dream Mode | 附件全链路、Slack 深度集成 | Provider 能力 seam、持久化内存 | 资源优化（图像压缩）、进化模式 | 多语言、区域渠道（Zalo） |
| **目标用户** | 企业/团队，需多频道统一 | 开发者，偏好 Web 控制台 | 高级用户/研究者，追求可扩展性 | 企业（Slack 优先），重度文件协作 | 多 Agent 系统构建者 | 成本敏感、轻量部署用户 | 特定地区（越南）或本地化需求强 |
| **技术架构** | 网关中心化，强化交付层 | WebUI 驱动，配置即代码 | 插件化（WASM/动态库），统一运行时 | 转录合同驱动，附件字节存储 | Provider 抽象，能力发现 | 轻量内核，视觉管道优化 | 多技能/Agent 管理，前端丰富 |
| **当前阶段** | 规模扩张后的稳定化 | 功能完善与兼容性修复 | 架构重构（插件、TUI） | 核心功能（附件）攻坚 | 架构演进（seam、内存） | 性能优化与问题排查 | Bug 修复与区域化适配 |

## 6. 社区热度与成熟度
- **快速迭代期（高活跃、高变更）**：**OpenClaw, NanoBot, Zeroclaw, IronClaw, NanoClaw**。这些项目 PR/Issue 流转快，新功能与架构改动频繁，但伴随较高的严重 Bug 密度，属于 **“成长阵痛期”**。其中 **NanoClaw** 虽 PR 合并快，但社区零互动，需警惕“闭门造车”风险。
- **质量巩固期（中活跃、重修复）**：**PicoClaw, CoPaw, LobsterAI**。新功能开发放缓，工作重心转向修复回归 Bug 和提升用户体验，属于 **“稳定化阶段”**。LobsterAI 的陈旧议题积压是显著风险点。
- **停滞/观察期（低/无活动）**：**TinyClaw, ZeptoClaw, EasyClaw**。过去24小时无任何活动，可能已停止维护或处于极低活跃状态，**技术选型时需高度谨慎**。

## 7. 值得关注的趋势信号
1.  **“可靠性”取代“功能数量”成为核心竞争指标**：用户对静默失败、状态污染、交付不一致的容忍度极低。开发者需将 **“失败可观测、状态可隔离、操作可重试”** 作为架构设计的基线要求，而非事后补充。
2.  **安全左移与攻击面管理**：提示注入、内部信息泄露等安全问题从理论讨论进入实际报告阶段。未来项目必须将 **第三方内容过滤、工具调用审计、最小权限原则** 集成到开发流水线中。
3.  **成本控制从“后端特性”变为“用户界面需求”**：用户要求预调度预算检查、资源消耗可视化。这表明 AI 助手正从“玩具”走向“生产工具”，**经济性** 成为关键用户体验。
4.  **配置管理向“声明式”与“可视化”双路演进**：YAML 支持（OpenClaw）与 WebUI 配置同步（NanoBot）并行，反映开发者与运维人员对配置的易读性、可审计性、可操作性均有强烈需求。
5.  **插件化与能力抽象成为架构演进主流**：Zeroclaw 的插件 RFC、NanoClaw 的 Provider seam，都指向通过 **严格的能力契约（Capability Seam）** 解耦核心与扩展，这是支撑生态繁荣的长期技术投资。
6.  **区域化与渠道深度集成是差异化关键**：CoPaw 对越南语和 Zalo 的需求，IronClaw 对 Slack 附件的极致优化，表明通用型助手需通过 **本地化渠道与合规集成** 获取细分市场优势。

---
**报告生成依据**：2026-06-14 各项目 GitHub 社区动态日报。数据涵盖 Issues、PRs、Release 及社区讨论，分析聚焦于技术趋势、健康度与生态定位，为技术选型、贡献方向及架构设计提供参考。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-14)

## 1. 今日速览
项目今日维持高活跃开发状态，共处理 **5 个 Issues**（2 个新开/活跃，3 个关闭）和 **19 个 Pull Requests**（14 个待合并，5 个已合并/关闭）。核心开发聚焦于 **稳定性修复**（如 Anthropic API 兼容性、启动崩溃问题）和 **功能增强**（WebUI 自动化管理、TTS 系统、子代理配置）。社区持续提出集成需求（如 Ollama 支持）和配置改进，显示项目生态在快速演进，但需关注部分严重 Bug 的紧急修复。

---

## 2. 版本发布
*无新版本发布。*

---

## 3. 项目进展
今日合并/关闭的 5 个 PR 主要推进了稳定性、配置一致性和用户体验：

| PR | 标题 | 影响 |
|----|------|------|
| [#4326](https://github.com/HKUDS/nanobot/pull/4326) | fix(memory): summarize full session tail during idle compaction (#4264) | **修复核心 Bug**：确保 `idleCompact` 在会话空闲压缩时使用完整尾部历史，避免错误总结残留。 |
| [#4327](https://github.com/HKUDS/nanobot/pull/4327) | Fix WebUI startup blocking on slow gateway routes | **性能优化**：将慢速 WebUI 处理器移出网关事件循环，提升启动响应速度。 |
| [#4314](https://github.com/HKUDS/nanobot/pull/4314) | [valid, refactor] Break tool config schema import cycle | **架构改进**：重构配置模块，打破工具配置 Pydantic schema 的导入循环，提升代码可维护性。 |
| [#4332](https://github.com/HKUDS/nanobot/pull/4332) | Fix Codex image SSE handling | **稳定性修复**：修复 Codex 图像生成流处理，避免 `RemoteProtocolError` 崩溃。 |
| [#4313](https://github.com/HKUDS/nanobot/pull/4313) | Feat(webui): config.json/webui parity | **功能完善**：实现 WebUI 设置面板与 `config.json` 的大部分配置项同步，增强配置一致性。 |

**整体推进评估**：今日合并的 PR 覆盖了 **内存管理、WebUI 性能、代码架构、API 兼容性、配置同步** 五个关键领域，显著提升了系统的健壮性和开发者体验，为下一版本打下坚实基础。

---

## 4. 社区热点
讨论最活跃的议题集中在 **生产环境稳定性** 和 **新功能探索**：

| 链接 | 类型 | 核心诉求 |
|------|------|----------|
| [#4333](https://github.com/HKUDS/nanobot/issues/4333) | Issue | Anthropic `opus-4-8`/`Fable` 模型因发送弃用 `temperature` 参数遭 API 拒绝（400 错误），需扩展豁免列表。 |
| [#4322](https://github.com/HKUDS/nanobot/issues/4322) | Issue | 合并 `fix/prompt-caching` 后出现 `session_key` 未定义，导致 Agent 启动崩溃，属紧急回归问题。 |
| [#4330](https://github.com/HKUDS/nanobot/pull/4330) | PR | 新增 WebUI 自动化管理视图（列表、过滤、运行、暂停/恢复、删除），满足用户对自动化工作流的可视化管理需求。 |
| [#4316](https://github.com/HKUDS/nanobot/pull/4316) | PR | 添加多提供商 TTS 配置系统（OpenAI/Groq/ElevenLabs），响应语音合成功能的可配置性需求。 |

**背后分析**：社区对 **第三方 API 的即时兼容性**（Anthropic 新模型）和 **启动可靠性** 极为敏感，这直接关系到生产部署。同时，用户积极贡献 **UI 增强**（自动化管理）和 **多模态扩展**（TTS），显示项目正从核心 Agent 向完整平台演进。

---

## 5. Bug 与稳定性
按严重程度排序：

| 严重度 | Issue/PR | 问题描述 | 状态 |
|--------|----------|----------|------|
| 🔴 **严重** | [#4322](https://github.com/HKUDS/nanobot/issues/4322) | `NameError: 'session_key' is not defined` 导致 Agent 启动崩溃。 | **待修复**：关联 PR #4303 可能相关但未明确解决，需紧急合并修复。 |
| 🔴 **严重** | [#4333](https://github.com/HKUDS/nanobot/issues/4333) | Anthropic `opus-4-8`/`Fable` 模型请求因发送 `temperature` 参数被拒（400）。 | **修复中**：PR [#4334](https://github.com/HKUDS/nanobot/pull/4334) 已开放，扩大 `omit_temperature` 模型列表。 |
| 🟡 **中等** | [#4264](https://github.com/HKUDS/nanobot/issues/4264) | `idleCompact` 仅对除最后 8 条外的历史总结，可能遗漏关键纠正对话。 | **已修复**：PR [#4326](https://github.com/HKUDS/nanobot/pull/4326) 已合并。 |
| 🟢 **低** | [#4083](https://github.com/HKUDS/nanobot/issues/4083) | `pathAppend` 路径追加导致工具可执行文件查找优先级低于系统路径。 | **已修复**：PR [#4098](https://github.com/HKUDS/nanobot/pull/4098) 已合并。 |

---

## 6. 功能请求与路线图信号
基于开放 PR 和 Issues，以下功能很可能纳入下一版本：

- **✅ 高概率**：
  - **TTS 多提供商系统**（PR [#4316](https://github.com/HKUDS/nanobot/pull/4316)）：提供语音输出能力，配置与 WebUI 集成。
  - **WebUI 自动化管理**（PR [#4330](https://github.com/HKUDS/nanobot/pull/4330)）：增强用户对自动化流程的控制。
  - **子代理模型预设**（PR [#4291](https://github.com/HKUDS/nanobot/pull/4291)）：允许子代理使用独立模型配置，提升多智能体灵活性。
  - **WebUI 子路径部署支持**（PR [#4328](https://github.com/HKUDS/nanobot/pull/4328)）：解决反向代理/子路径场景下的资源加载问题。

- **⚠️ 待定**：
  - **Ollama API 支持**（Issue [#193](https://github.com/HKUDS/nanobot/issues/193)）：虽已关闭，但社区仍有需求，需评估与现有 vLLM 集成的技术路径。
  - **内置文件系统工具开关**（PR [#4138](https://github.com/HKUDS/nanobot/pull/4138)）：通过 `tools.file.enable` 控制，满足安全部署场景。

---

## 7. 用户反馈摘要
从 Issues 评论及描述中提炼的真实反馈：

- **核心痛点**：
  - **API 兼容性滞后**：Anthropic 新模型（opus-4-8/Fable）的弃用参数问题导致服务中断，用户期望更快的模型特性适配。
  - **启动可靠性**：合并分支后出现 `session_key` 未定义崩溃，影响 CI/CD 和升级流程的稳定性。
  - **会话管理精度**：`idleCompact` 的历史截断逻辑在纠错场景下产生错误总结，影响长期对话质量。
  - **工具链优先级**：`pathAppend` 行为导致自定义工具被系统可执行文件覆盖，不符合预期。

- **积极反馈**：
  - 对 **WebUI 配置与 `config.json` 并行**（PR #4313）表示欢迎，认为提升了配置灵活性。
  - **Codex 图像 SSE 修复**（PR #4332）解决了实际使用中的流处理错误。
  - 社区对 **TTS** 和 **自动化管理** 等新功能贡献代码，显示较高的参与度。

- **使用场景**：
  - 生产环境部署需严格 **API 稳定性** 和 **启动容错**。
  - 开发者依赖 **清晰的配置结构** 和 **环境变量解析**（如转录配置问题 PR #4323）。
  - 高级用户需要 **细粒度工具控制**（如文件系统工具开关、路径优先级）。

---

## 8. 待处理积压
需维护者优先关注的长期未决项：

| 链接 | 类型 | 创建时间 | 状态 | 说明 |
|------|------|----------|------|------|
| [#4303](https://github.com/HKUDS/nanobot/pull/4303) | PR | 2026-06-11 | Open | 修复 MCP 服务器 `_close_server` 中生成器关闭导致的 GC 崩溃。**高优先级**：涉及异步任务崩溃，影响 MCP 连接稳定性。 |
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) | PR | 2026-06-11 | Open | 允许子代理使用可配置模型预设。**中优先级**：功能增强，但需审查安全模型预设列表逻辑。 |
| [#193](https://github.com/HKUDS/nanobot/issues/193) | Issue | 2026-02-06 | Closed | Ollama API 支持请求。虽已关闭，但作为 **长期高频需求**，建议在路线图中明确状态（如“已拒绝”或“未来可能”），避免社区重复提问。 |

**建议**：优先合并 #4303 以防止运行时崩溃；评估 #4291 的测试覆盖率；对 #193 等历史 Issue 进行归档或明确回复。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-14)

## 今日速览

过去24小时，Zeroclaw 项目保持高活跃度：共处理 42 条 Issues（25 条新开/活跃，17 条关闭）和 50 条 PRs（38 条待合并，12 条已合并/关闭）。社区围绕 **WebSocket 会话稳定性**、**插件系统架构** 和 **TUI 开发** 展开密集讨论，多个高优先级 Bug 修复 PR 已提交。核心开发重点正从 v0.8.1 的集成工作流（#6970）向更底层的插件架构（#7420, #7497）和统一运行时（#7546）推进，项目整体健康度良好，但 macOS 桌面端和 Web 仪表板的稳定性问题需紧急关注。

---

## 版本发布
*无新版本发布。最新稳定版仍为 0.8.0-beta-1。*

---

## 项目进展

### 今日合并/关闭的重要 PR
1.  **#7398 `feat(cron): add pause/resume for scheduled tasks`** (已合并)
    *   为定时任务（cron）添加了暂停/恢复功能，通过 `cron_add` 和 `cron_update` 的 `enabled` 字段实现，无需删除重建任务。这增强了任务管理的灵活性。
2.  **#7574 `fix(runtime): honor empty delegate allowed tools`** (待合并)
    *   修复了 `delegate` 工具的行为：当 `risk_profile.allowed_tools` 为空时，应视为“无授权约束”而非拒绝目标，符合文档预期。这提升了代理委派的安全性和灵活性。
3.  **#7549 `fix(plugins): align install/discovery paths and add legacy migration`** (待合并)
    *   修复了 CLI 安装的 WASM 插件因路径不匹配（`config.data_dir/plugins` vs `config.plugins.plugins_dir`）而不可见的严重问题，并添加了迁移逻辑。**此修复对插件用户至关重要**。
4.  **#7546 `fix(runtime): unify SopEngine construction`** (待合并)
    *   将 `SopEngine` 的构造统一为每个守护进程一个单例，消除了代理工具和 MQTT 监听器各自拥有独立状态实例导致的潜在状态不一致问题。

### 整体推进评估
今日合并的 PR 主要聚焦于 **稳定性修复**（插件路径、SopEngine 单例、delegate 工具）和 **功能增强**（cron 控制）。核心架构的统一工作（如 #7558 的安装规范、#7361 的输出路由）正在大型 PR 中推进，尚未合并。项目正稳步向 v0.8.1 的集成目标迈进。

---

## 社区热点

### 最活跃的 Issues
1.  **#5849 [Feature]: Dream Mode — Periodic Memory Consolidation & Reflective Learning** (18 评论)
    *   **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/5849
    *   **诉求**: 在空闲期启用“梦境模式”，周期性整合记忆、反思交互并更新长期知识结构。这是一个高阶认知功能请求，涉及内存系统的核心架构，讨论激烈。
2.  **#7415 [RFC]: Unify the three agent turn engines** (4 评论)
    *   **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/7415
    *   **诉求**: 统一 `run_tool_call_loop`、`turn_streamed` 和 `Agent::turn` 三个代理回合引擎。RFC 已执行，相关实现 PR 已提交，是减少运行时复杂性的关键一步。
3.  **#6760 [Feature]: Update Documentation for Docker - Tested v0.7.5-debian** (4 评论)
    *   **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/6760
    *   **诉求**: 提供经过验证的 Docker 配置（Gateway 和 Web UI），解决部署文档缺失问题，对容器化部署用户至关重要。

### 最活跃的 PRs
*注：PR 评论数在数据中标记为 "undefined"，此处依据创建/更新频率和关联 Issue 热度判断。*
1.  **#7558 `feat(xtask): canonical install spec + cargo generate installers`** (L 规模)
    *   **链接**: https://github.com/zeroclaw-labs/zeroclaw/pull/7558
    *   **热点**: 建立统一的安装规范，消除各部署表面（CLI、TUI、服务）间的特性漂移。这是基础设施的重大改进，影响所有安装脚本。
2.  **#7586 & #7587 `fix(gateway): fail fast on free-form ask_user for WS approval`** (S 规模，成对提交)
    *   **链接**: https://github.com/zeroclaw-labs/zeroclaw/pull/7586, https://github.com/zeroclaw-labs/zeroclaw/pull/7587
    *   **热点**: 快速修复 #7542 和 #7551 中报告的 WebSocket 会话 `ask_user` 工具失败问题，确保网关在无法处理自由表单询问时立即返回清晰错误，而非 misleading 的“通道关闭”消息。

---

## Bug 与稳定性

### 高严重性 (P1/S1 - 工作流阻塞)
| Issue | 问题描述 | 状态 | 关联 PR |
| :--- | :--- | :--- | :--- |
| **#7563** | `canvas-store` 回归：WebSocket 聊天/ACP 会话后 `/canvas` 页面空白 | OPEN (今日新开) | 无 |
| **#7523** | Web 仪表板不可用（`cargo web build` 后仍无法访问） | OPEN | 无 |
| **#7527** | macOS 应用无法检测权限，响应空白，窗口消失 | OPEN | 无 |
| **#7542** | `ask_user` 在网关 Web 仪表板会话中瞬间失败 | OPEN | **#7586** (修复中) |
| **#6223** | `web_fetch` 在 WhatsApp Web 频道中不工作 | CLOSED | 已修复 |

### 中高严重性 (P2/S2 - 降级行为)
| Issue | 问题描述 | 状态 | 关联 PR |
| :--- | :--- | :--- | :--- |
| **#5470** | 运行时多个问题：Telegram 消息重复保存、内存泄漏等 | CLOSED | 已修复 |
| **#5570** | SQLite 内存后端向量搜索为 O(n) 全表扫描，性能低下 | CLOSED | 已修复 |
| **#6876** | `risk_profile.allowed_tools` 不限制 MCP 工具（设计或文档缺口） | CLOSED | 已澄清 |
| **#7514** | `delegate` 工具不允许子代理使用不同风险配置文件 | OPEN | 无 |
| **#7521** | `file_read` 无法解码非 UTF-8 文本（如 cp1251） | OPEN | 无 |

### 其他
- **#7507**: `quickstart` 在非 TTY  stdin 下导致 4.3GB 输出洪泛（S1，已关闭，修复合并）。
- **#7378**: macOS Cmd-C 被误识别为退出组合键（S3，已关闭）。
- **#7377**: zerocode 深色主题在浅色终端中前景文本不可读（S2，已关闭）。

---

## 功能请求与路线图信号

1.  **Dream Mode (#5849)** - 高需求（18 评论），涉及核心记忆系统，可能纳入中长期路线图，但实现复杂度高。
2.  **原生动态库插件系统 (#7420)** - RFC 状态，旨在解决“单体痛苦”，是架构演进的关键方向，与 #7497 (OCI 注册表) 可能并行或互补。
3.  **Web UI 多会话支持 (#7543)** - 直接提升 Web 用户体验，需求明确，实现相对独立，**有望进入 v0.8.1 或 v0.8.2**。
4.  **流式卡片消息 (#7531)** - 为 QQ/钉钉/微信/飞书添加流式卡片，减少等待焦虑，属于渠道增强，优先级中。
5.  **llama.cpp 模型路由器 (#7539)** - 方便本地模型快速切换，符合本地部署用户需求。
6.  **Zerocode ACP 桥 (#6823) / Zerocode (#6826) / Zerocode UX (#6825)** - 三个 Tracker Issue 共同定义了 TUI 开发的里程碑，是 0.8.x 周期的重要工作流。

---

## 用户反馈摘要

从 Issues 和 PRs 评论中提炼的关键痛点：

*   **部署与配置困难**：Docker 配置文档缺失（#6760）、插件安装路径不一致导致“插件安装后不可见”（#7549）、快速入门在 CI/脚本中崩溃（#7507）。**用户需要更稳健、文档更清晰的安装体验**。
*   **Web/TUI 稳定性问题**：Web 仪表板完全不可用（#7523）、macOS 桌面应用权限和窗口异常（#7527）、TUI 深色主题可读性（#7377）。**桌面端和 Web 端的用户体验亟待修复**。
*   **工具行为不符合预期**：`ask_user` 在 WebSocket 中失败（#7542）、`delegate` 工具的风险约束过于严格（#7514）、`web_fetch` 在 WhatsApp 中失效（#6223）。**工具链的跨平台一致性和错误处理需要加强**。
*   **性能与架构瓶颈**：SQLite 向量搜索性能差（#5570）、SopEngine 多实例导致状态问题（#7546）。**底层性能优化和状态管理统一是技术债偿还重点**。
*   **积极反馈**：社区对 **Dream Mode**（#5849）、**插件系统现代化**（#7420, #7497）和 **TUI 开发**（#6826）表现出高度热情，认为这些是 ZeroClaw 区别于其他 AI 助手的关键差异化特性。

---

## 待处理积压

以下为创建时间较长（>3周）、评论较多或标记为 Tracker 的重要 OPEN Issues，提醒维护者关注：

| Issue | 标题 | 创建时间 | 评论 | 状态标签 | 说明 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#5849** | Dream Mode — Periodic Memory Consolidation & Reflective Learning | 2026-04-18 | 18 | `accepted`, `no-stale` | 高需求功能请求，需架构评审和排期。 |
| **#6289** | Prompt-triggered install suggestions for missing skills and plugins | 2026-05-02 | 3 | `accepted`, `no-stale` | 提升插件发现性的重要功能。 |
| **#6823** | Tracker: Zerocode ACP Bridge | 2026-05-21 | 1 | `accepted`, `no-stale` | TUI 客户端连接层，是 TUI 开发的阻塞点。 |
| **#6826** | Tracker: Zerocode | 2026-05-21 | 0 | `accepted`, `no-stale` | TUI 主程序 Tracker，定义整体范围。 |
| **#6825** | Tracker: Zerocode UX | 2026-05-21 | 0 | `accepted`, `no-stale` | TUI 用户体验 Tracker，涵盖主题、导航等。 |
| **#6970** | Tracker: v0.8.1 integration/channel/provider/tool PR queue | 2026-05-27 | 0 | `accepted` | v0.8.1 集成工作的操作队列，需定期梳理优先级。 |
| **#7497** | RFC: OCI-Compliant Container Registries as the Plugin Storage | 2026-06-11 | 2 | `needs-maintainer-review` | 插件存储和分发机制的激进重构，RFC 需评审。 |
| **#7420** | RFC: Native Dynamic-Library Plugin System | 2026-06-09 | 3 | `needs-maintainer-review` | 解决单体架构痛点的核心 RFC，评审中。 |

**建议**：优先评审 #7420 和 #7497 这两个影响插件架构未来的 RFC，并明确 #6823

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-14)

## 1. 今日速览
项目今日保持较高开发活跃度，共处理 7 个 Pull Request，其中 5 个已成功合并，推动代码库持续演进。同时发布了新的 Nightly 构建版本（v0.2.9-nightly.20260613），但需注意其潜在不稳定性。社区方面，一个新 Bug 报告（#3012）聚焦于资源消耗问题，而一个关键的功能性 Bug（#3108）已被修复并关闭。整体来看，项目在功能迭代、代码质量修复和问题响应方面均有所推进，健康度良好。

## 2. 版本发布
- **新版本**: `v0.2.9-nightly.20260613.c362114c` (Nightly Build)
  - **性质**: 自动生成的每日构建版本，**可能包含未充分测试的更改，不稳定，请谨慎使用**。
  - **更新内容**: 基于 `v0.2.9` 标签到 `main` 分支的完整变更集。具体变更需查看完整更新日志。
  - **迁移注意事项**: 此为开发预览版，不适用于生产环境。使用前请确保已了解最新开发动态并做好数据备份。
  - **链接**: [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日合并的 PR 主要集中于**缺陷修复**与**代码质量提升**，为稳定性奠定基础：
- **修复关键功能缺陷**: PR #3117 修复了当活跃模型缺乏视觉能力时，图像描述请求产生幻觉的问题（对应 Issue #3108），确保了媒体处理路由的正确性。
- **增强 TTS 配置灵活性**: PR #3119 为 OpenRouter 的 TTS 请求添加了 `voice` 和 `response_format` 的模型级覆盖支持，并实现了失败时的自动回退机制。
- **代码质量与规范**: PR #3065 与 PR #3066 分别修复了数据库操作和临时文件处理中忽略 `Close()` 错误的问题，消除了 Linter 警告，提升了代码健壮性。
- **国际化文档**: PR #2935 完成了繁体中文（zh-TW）的文档与前端本地化支持，扩大了项目的可及性。

## 4. 社区热点
- **最活跃讨论**: **Issue #3012** ([链接](https://github.com/sipeed/picoclaw/issues/3012))
  - **状态**: 开放中，3 条评论。
  - **诉求分析**: 用户报告在启用“进化”模式后，系统存在持续、周期性的 Token 消耗现象，即使无明确用户交互。这直接关联到**运营成本**与**资源效率**，是影响用户体验和部署经济性的核心问题，需优先调查。
- **高关注度 PR**: **PR #2964** ([链接](https://github.com/sipeed/picoclaw/pull/2964))
  - **状态**: 开放待合并（创建于 5 月 28 日）。
  - **诉求分析**: 提出为视觉管道引入**可配置的 inbound 图像压缩**功能。这回应了处理高分辨率图像时可能面临的**性能与成本压力**，是优化资源使用的关键功能增强，社区关注度较高。

## 5. Bug 与稳定性
| 严重程度 | 问题描述 | 关联 Issue/PR | 状态 | 已有修复 |
| :--- | :--- | :--- | :--- | :--- |
| **高** | 启用“进化”模式后，存在无交互情况下的周期性 Token 消耗。 | [#3012](https://github.com/sipeed/picoclaw/issues/3012) | 开放 | 否 |
| **中** | 使用无视觉能力的文本模型（如 deepseek-v4-flash）时，`load_image` 工具加载图像后，回答内容与图像无关（幻觉）。 | [#3108](https://github.com/sipeed/picoclaw/issues/3108) | 已关闭 | 是 (PR [#3117](https://github.com/sipeed/picoclaw/pull/3117)) |

## 6. 功能请求与路线图信号
- **已开发待合并功能**:
  - **图像处理优化**: PR #2964 的图像压缩策略，预计将成为下个版本优化视觉模块性能的关键特性。
  - **远程连接能力**: PR #3118 为 `picoclaw agent` 添加了远程 WebSocket 模式，增强了部署灵活性和与外部系统的集成能力。
- **潜在需求**: 从 Issue #3012 可看出，用户对**后台任务/进化模式的资源监控与管控**有强烈需求，这可能成为未来控制面功能开发的信号。

## 7. 用户反馈摘要
- **核心痛点**:
  - **资源成本不可控**: Issue #3012 揭示了在特定高级功能（进化）下，存在隐性的、周期性的资源消耗，用户无法直观理解或控制，引发对账单和资源占用的担忧。
  - **功能正确性**: Issue #3108 反映了用户对多模态能力（图像理解）的期望与模型实际能力匹配的问题，期望系统能更智能地路由请求或给出明确提示。
- **积极反馈**: 社区贡献者积极提交 PR，涵盖从国际化（PR #2935）到底层错误处理（PR #3065/3066）等多个层面，显示健康的协作生态。

## 8. 待处理积压
- **重要开放 PR**: **PR #2964** ([链接](https://github.com/sipeed/picoclaw/pull/2964))
  - **创建时间**: 2026-05-28 (已开放约 17 天)
  - **内容**: 图像输入压缩功能。
  - **提醒**: 该功能针对性能优化，且社区关注度高，建议维护团队评估合并优先级，以避免功能碎片化或重复造轮子。
- **其他**: 当前无长期（超过 30 天）无任何活动（评论/更新）的开放 Issue 或 PR 需要特别提醒。Issue #3012 在近期（2026-06-13）有更新，处于活跃响应状态。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-14)

## 1. 今日速览
过去24小时，NanoClaw 项目呈现**高强度开发活跃度**与**低社区互动**的鲜明对比。PR 活动极为密集：共15条 PR 更新，其中14条已合并/关闭，仅1条（安全加固）待合并。与此同时，Issues 无新增内容，仅有一条误开的 Issue 被关闭，且所有 PR/Issue 均无评论或反应数据。这表明项目正处于**核心功能快速迭代与架构演进的关键阶段**，开发团队推进迅速，但社区讨论与用户反馈渠道相对沉寂，需关注沟通效率。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
过去24小时内有**14个 PR 成功合并**，涵盖核心架构增强、可靠性修复与渠道功能扩展，项目整体向前迈出显著一步。重要合并包括：

- **[PR #2746](https://github.com/nanocoai/nanoclaw/pull/2746)**: 实现 `agent-surfaces` capability seam，为 Provider 建立能力声明与发现机制，是解耦核心服务的关键架构演进。
- **[PR #2745](https://github.com/nanocoai/nanoclaw/pull/2745)**: 引入 Provider 可选持久化内存脚手架，支持跨会话状态保持，为复杂工作流奠定基础。
- **[PR #2084](https://github.com/nanocoai/nanoclaw/pull/2084)**: 新增每日项目自动备份及按 Agent 恢复功能，支持本地/S3 存储，大幅提升灾难恢复能力。
- **[PR #2267](https://github.com/nanocoai/nanoclaw/pull/2267)**: 修复 Agent-to-Agent 路由逻辑，确保回复正确返回原始会话，解决多通道场景下的对话分裂问题。
- **[PR #2692](https://github.com/nanocoai/nanoclaw/pull/2692)**: 增强 poll-loop 对瞬态 5xx API 错误的处理，实现自动重试并在耗尽时通知，提升外部服务调用韧性。
- **[PR #2040](https://github.com/nanocoai/nanoclaw/pull/2040)**: 为 Signal 原生适配器添加出站附件支持，丰富媒体交互能力。

**当前重点待合并 PR**:
- **[PR #2732](https://github.com/nanocoai/nanoclaw/pull/2732)** (OPEN): 来自多 Agent 健康审计的安全加固，涵盖容器生命周期管理、并发控制、崩溃防护等，是保障生产环境稳定性的关键更新，建议优先合并。

## 4. 社区热点
*所有 Issues 与 PRs 的评论数均为 `undefined` 或 `0`，无反应（👍）数据。*  
这表明 GitHub 上的社区讨论几乎不存在，可能原因包括：1) 主要沟通发生在 Discord/Slack 等即时通讯渠道；2) 用户更倾向于直接提交 Issue/PR 而非评论；3) 项目维护者响应迅速，减少了 prolonged 讨论。建议维护团队主动将关键设计讨论同步至 GitHub，以提升透明度和社区参与感。

## 5

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-14)

## 1. 今日速览
项目在过去24小时维持极高活跃度，共处理24条PR和6条Issues更新。核心开发团队正全力推进**附件功能全链路集成**（#4644系列）并修复**Slack重新批准循环**的关键用户体验问题。尽管无新版本发布，但大量PR（18条待合并）表明代码库处于快速迭代状态，系统可靠性与功能完整性持续提升。需关注持续存在的Nightly E2E失败（#4108）对CI/CD的影响。

## 2. 版本发布
无新版本发布。最近一次发布流程由PR #3708（chore: release）驱动，该PR自5月16日起待合并，涉及`ironclaw_common`（0.4.2 → 0.5.0，含破坏性变更）和`ironclaw_skills`（0.3.0 → 0.4.0，含破坏性变更）等多crate升级，其合并将是下一版本发布的前提。

## 3. 项目进展
今日合并/关闭的重要PR共6条，显著推进了附件功能与系统健壮性：

- **附件功能基础层**：
  - [#4655](https://github.com/nearai/ironclaw/pull/4655) (已合并): 使Reborn转录合同支持附件引用，确保上传文件在`accept → resume`流程中持久化。
  - [#4668](https://github.com/nearai/ironclaw/pull/4668) (已合并): 提供基于MountView的附件落地crate，实现字节存储 foundation。
  - [#4670](https://github.com/nearai/ironclaw/pull/4670) (已合并): 桥接入站字节到转录AttachmentRefs，连接存储与 transcript。
  - [#4672](https://github.com/nearai/ironclaw/pull/4672) (已合并): WebChat v2前端支持内联附件上传，完成用户交互入口。

- **DeferredBusy drain优化**：
  - [#4831](https://github.com/nearai/ironclaw/pull/4831) (已合并): 将drain重提交路由至`product_workflow`重放入口，统一结构。
  - [#4832](https://github.com/nearai/ironclaw/pull/4832) (已合并): 批处理drain消息，减少运行次数与延迟。
  - [#4833](https://github.com/nearai/ironclaw/pull/4833) (已合并): 文件系统后端增加每线程索引，避免全量扫描。

这些合并使附件功能从“字节存储”到“模型可见”的链路基本贯通，并优化了后台消息处理效率。

## 4. 社区热点
讨论最活跃的议题集中在**Slack重新批准循环修复**与**DeferredBusy设计权衡**：

- **PR #4839** ([链接](https://github.com/nearai/ironclaw/pull/4839)): 修复Slack中需同时批准和凭证的能力调用出现多次批准gate的问题。评论数最多（数据标记undefined，但属核心讨论），涉及身份保留与resume路径优化，直接影响企业用户Slack集成体验。
- **Issue #4817** ([链接](https://github.com/nearai/ironclaw/issues/4817)): 跟踪DeferredBusy drain的三个后续设计决策（提交doorway、stale-intent策略、启动扫描），3条评论反映团队对架构边界与长期维护性的深入讨论。
- **PR #4838** ([链接](https://github.com/nearai/ironclaw/pull/4838)): 将busy线程行为从“隐式defer”改为“显式拒绝通知”，改变并发模型，引发对用户反馈清晰度的关注。

诉求核心：**提升交互可靠性**（避免重复认证）、**明确系统状态反馈**（用户应知线程为何busy）、**保持架构一致性**（避免特殊路径drift）。

## 5. Bug 与稳定性
按严重程度排列：

- **严重（CI阻塞）**:
  - [#4108](https://github.com/nearai/ironclaw/issues/4108): Nightly E2E持续失败（自5月27日），影响发布流水线，根因未明。

- **高（用户体验回归）**:
  - Slack重新批准循环相关bug，已通过多个PR修复：
    - PR [#4844](https://github.com/nearai/ironclaw/pull/4844): 修复gate过滤逻辑，避免按路由分配。
    - PR [#4843](https://github.com/nearai/ironclaw/pull/4843): 解决resolution-ack扇出导致的重复gate。
    - PR [#4840](https://github.com/nearai/ironclaw/pull/4840): 调整gate顺序，先显示缺失凭证gate。
    - PR [#4839](https://github.com/nearai/ironclaw/pull/4839): 保留调用身份，避免重复批准。

- **中（功能边缘情况）**:
  - PR [#4680](https://github.com/nearai/ironclaw/pull/4680): 停止为非文本部分发射`[non_text_content]`占位符，避免模型混淆。
  - PR [#4842](https://github.com/nearai/ironclaw/pull/4842): 修复QA-trace录制在auth gate挂起问题。

多数已知bug已有修复PR待合并，但E2E失败需优先处理。

## 6. 功能请求与路线图信号
- **明确需求**:
  - Issue [#4845](https://github.com/nearai/ironclaw/issues/4845): 提取`resume_json`/`auth_resume_json`共享head，减少代码重复，属设计优化。
  - PR [#4264](https://github.com/nearai/ironclaw/pull/4264): 网关添加`POST /api/routines`端点，扩展API功能，支持程序化routine创建。

- **路线图信号**:
  - **附件功能（#4644）** 作为当前最大主题，相关PR密集合并/待合并（如#4738 WebChat v2附件UX），预计将成为下一版本核心特性。
  - **运行时上下文增强**（PR #4836）和**无运行破坏错误处理**（PR #4841）显示项目正提升模型可见性与系统韧性，属基础设施改进。

## 7. 用户反馈摘要
从Issues与PR讨论中提炼：

- **痛点**:
  - Slack集成中，需批准+凭证的能力调用触发**多次批准gate**，用户需重复操作，体验极差（PR #4839背景）。
  - 线程busy时，用户仅见消息“parked”，**无明确反馈**为何无法处理（PR #4838动机）。
  - 附件上传后，**模型无法看到内容**（因转录合同原为text-only），导致功能形同虚设（PR #4677解决）。

- **满意点**:
  - 附件功能逐步打通，从上传、存储、提取到模型可见性链路清晰，用户看到端到端进展。
  - DeferredBusy drain的批处理优化（PR #4832）将提升吞吐量，用户感知延迟降低。

- **使用场景**:
  - 企业团队通过Slack与IronClaw交互，频繁需要**文件上传**（如CSV、文档）并基于内容执行任务。
  - 自动化routine创建需求出现（PR #4264），用户希望API驱动工作流。

## 8. 待处理积压
需维护者关注以下长期未决项：

- **PR #3708** ([链接](https://github.com/nearai/ironclaw/pull/3708)): `chore: release`，自5月16日待合并，涉及多个crate破坏性变更，积压可能阻塞新功能发布。
- **Issue #4108** ([链接](https://github.com/nearai/ironclaw/issues/4108)): Nightly E2E失败，自5月27日持续，需根因分析并修复。
- **高优先级待合并PR**（共18条）:
  - 附件WebChat v2 UX（#4738）
  - 网关routine端点（#4264）
  - 运行时上下文表面化（#4836）
  - 无运行破坏错误（#4841）
  这些PR均标记为`size: XL/M`，合并后将显著提升功能与稳定性，建议优先评审。

---
*数据来源: [IronClaw GitHub](https://github.com/nearai/ironclaw) | 统计周期: 2026-06-13 至 2026-06-14*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-14)

## 1. 今日速览
项目今日无新增代码提交或讨论活跃度。所有动态均为对**长期未解决（stale）** 历史议题的标记更新，无新开 Issues 或 PR。过去24小时仅有的5条PR更新中，3条仍待合并，2条为已关闭的修复。这表明项目核心开发活动已显著放缓，社区维护可能处于低活跃状态，需关注陈旧议题的积压情况。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日有两个修复类PR被合并关闭，推动了用户体验的微小改进：
- **PR #1466**: 修复了MCP服务器配置模态框在内容过高时，底部关闭按钮被遮挡无法点击的UI问题，提升了表单操作的可用性。
- **PR #1467**: 修复了macOS系统下设置面板快捷键显示错误（显示Ctrl而非Cmd）的问题，改善了跨平台一致性。
这两个修复均属于界面易用性范畴，项目在稳定性与细节体验上有所推进，但无重大功能更新。

## 4. 社区热点
今日无真正活跃的讨论（所有Issues评论数≤2，PRs无评论）。所有“更新”均为对**stale标签**的维护操作，非社区新互动。历史议题中，以下问题因涉及核心功能而持续受到关注：
- **技能状态管理** (#1439, #1442)：用户反复报告技能停用/选择后状态展示异常，反映状态同步逻辑可能存在缺陷。
- **依赖兼容性** (#1443)：关于OpenClaw新版本升级的兼容性问题，是影响项目可运行性的关键外部依赖风险。
- **UI交互逻辑** (#1437)：定时任务创建无响应，指向前端事件处理或校验逻辑的潜在漏洞。

## 5. Bug 与稳定性
今日报告的Bug均来自陈旧Issues，按潜在影响评估：
1.  **高严重性 - 核心功能异常**：
    - **技能状态不同步** (#1439)：已停用技能在对话中仍可被调用，可能导致非预期行为与安全风险。**暂无对应修复PR**。
    - **Agent技能选择失效** (#1442)：技能选择后对话中不展示，用户体验断裂。**暂无对应修复PR**。
2.  **中严重性 - 功能阻塞**：
    - **定时任务创建无响应** (#1437)：特定操作下UI完全无反馈，功能不可用。**暂无对应修复PR**。
3.  **中严重性 - 依赖风险**：
    - **OpenClaw v2026.3.24 兼容失败** (#1443)：升级后服务无法启动，直接影响项目运行。**暂无对应修复PR**。
4.  **已修复**：
    - **技能导入重复与目录名异常**：由 **PR #1445** 修复，解决了重复安装和临时目录名问题，增强了技能管理的稳定性。

## 6. 功能请求与路线图信号
今日无明确的新功能请求。但以下**开放中的PR**代表了正在进行的改进方向，可能影响下一版本：
- **PR #1440**：UI改进 - 将已选技能标签移至输入框顶部，优化布局与视觉层级。
- **PR #1441**：功能扩展 - 为Artifacts添加可扩展的HTML/React/Mermaid预览管道，增强富内容渲染能力。
这两个PR若合并，将分别提升交互体验与内容展示能力。

## 7. 用户反馈摘要
从有限的Issue评论及描述中提炼的痛点：
- **核心诉求是可靠性**：用户最关注的是“功能是否按预期工作”，如技能状态准确、任务创建成功、依赖升级顺利。
- **状态反馈缺失**：多个问题（#1437, #1442）均提到“无报错提示”或“展示异常”，反映出前端在状态管理和错误提示上存在不足。
- **管理体验不佳**：技能导入的重复校验缺失（#1445）和Agent技能选择逻辑不清晰（#1442），增加了用户的管理困惑。
- **无正面反馈**：今日数据中未观察到用户对现有功能的满意表达。

## 8. 待处理积压
**所有今日涉及的Issues与PR均创建于2026-04-03，已积压超过3个月，且均标记为 `[stale]`**。这是项目健康度的显著警示信号，表明维护者资源可能不足以及时响应社区报告。需优先关注：
- **#1443 (OpenClaw兼容性)**：外部依赖升级问题，若不解决将阻碍项目跟进生态发展。
- **#1439 & #1442 (技能状态管理)**：涉及AI助手核心“技能”机制的稳定性，影响面广。
- **#1437 (定时任务UI)**：基础功能阻塞问题。
建议维护团队评估资源，对stale议题进行系统性清理或明确后续处理计划。

---
*数据来源：LobsterAI GitHub (github.com/netease-youdao/LobsterAI) | 统计周期：2026-06-13 至 2026-06-14*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

## Moltis 项目动态日报 (2026-06-14)

### 1. 今日速览
项目今日活跃度较低，仅围绕一个核心问题展开快速迭代。社区报告了一个关键的 OAuth 集成 Bug（Issue #1119），并随即提交了对应的修复 PR（PR #1120），体现了良好的问题响应闭环。但整体贡献者参与度有限，无新版本发布，项目健康度依赖单一核心议题的推进。

### 2. 版本发布
*无新版本发布。*

### 3. 项目进展
- **待合并 PR**: [#1120](https://github.com/moltis-org/moltis/pull/1120) - `fix(mcp): use direct fetch for resource_metadata URL from WWW-Authenticate`
    - **推进内容**: 修复了 MCP OAuth 流程中，因服务器在 `WWW-Authenticate` 头中包含 `resource_metadata` 参数（如 Notion、Linear）而导致的 `invalid_target` 错误。该修复修改了 `discover_and_register()` 对元数据 URL 的处理逻辑，使其能直接获取并传递正确的目标地址。
    - **进展评估**: 项目在关键第三方服务（Notion, Linear）的集成路径上取得重要修复进展，但 PR 尚待合并，功能未正式进入代码库。

### 4. 社区热点
- **最活跃议题**: **Issue #1119** 与 **PR #1120** 构成今日唯一热点，两者紧密关联。
    - **链接**: [Issue #1119](https://github.com/moltis-org/moltis/issues/1119) | [PR #1120](https://github.com/moltis-org/moltis/pull/1120)
    - **诉求分析**: 核心诉求是**兼容主流 MCP 服务器（Notion, Linear）的 OAuth 实现标准**。该问题直接阻塞了用户连接这些流行服务，属于高优先级的集成兼容性需求。快速从 Issue 到 PR 的转化，表明维护者对生态兼容性问题的重视。

### 5. Bug 与稳定性
- **高严重度**:
    - **[Bug] #1119**: MCP OAuth 在连接 Notion、Linear 等服务时因 `resource_metadata` 处理不当而失败，导致授权流程完全中断。
    - **状态**: **已有修复 PR (#1120) 待合并**。此 Bug 为阻塞性集成问题，修复后应能恢复与受影响服务的连接。

### 6. 功能请求与路线图信号
- **今日无新增功能请求**。当前开发焦点集中于修复上述关键 Bug，无明确的新功能规划信号从今日数据中浮现。

### 7. 用户反馈摘要
- **核心痛点**: 用户（@xzavrel）在尝试添加 Notion 和 Linear 的 MCP 服务器时，OAuth 流程在浏览器端以 `invalid_target` JSON 错误失败，无法完成授权。这揭示了 Moltis 的 OAuth 客户端实现与部分服务器对 `WWW-Authenticate` 头中 `resource_metadata` 参数的解释存在不一致。
- **使用场景**: 集成 Notion、Linear 等通过 MCP 协议提供 AI 助手能力的主流生产力工具。
- **满意度**: 用户主动提交详细 Bug 报告并附带修复方案，表明其有较高技术参与意愿，但对当前兼容性状态不满意。社区快速响应可能提升用户对项目维护效率的信心。

### 8. 待处理积压
- **根据提供的 24 小时数据，无法评估长期未响应的 Issue 或 PR**。建议维护者定期审查整体 Issue/PR 列表，特别是那些标记为 `bug`、`help wanted` 或长时间（如超过 30 天）无活动的项目，以确保关键问题不被遗漏。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-06-14)

---

## 1. 今日速览
过去24小时，CoPaw 项目社区活跃度较高，共产生10条活跃 Issues 和8条 PR 更新。核心矛盾集中在**稳定性修复**与**功能扩展**两个方向：用户报告了多个影响核心体验的 Bug（如附件下载失败、桌面端启动缓慢、聊天会话卡死），同时提出了丰富的国际化与渠道集成需求（越南语、Zalo、Kimi 接入）。社区贡献者 `ly-wang19` 提交了一系列系统性底层修复 PR，显示外部贡献者正积极参与质量提升，但多数 PR 仍处于评审阶段，合并速度有待加快。项目整体处于快速迭代期，但稳定性与性能问题需优先关注。

---

## 2. 版本发布
*无新版本发布。*

---

## 3. 项目进展
今日无新版本合并，但有2个重要 PR 被关闭：
- **PR #2498**：修复新创建 Agent 的语言继承逻辑，使其正确遵循用户界面语言设置，并改进不兼容语言的回退机制。这修正了长期存在的本地化基础缺陷。
- **PR #4969**：为 Skill 批量下载功能添加标签过滤支持，提升了工作流管理的灵活性。

**整体推进评估**：今日代码库未向前演进新功能，主要进展为历史问题修复。6个待合并的 PR 均为关键稳定性修复，其合并将直接改善多个模块的健壮性。

---

## 4. 社区热点
讨论最活跃的议题反映了用户对**核心功能可靠性**和**生态接入广度**的迫切诉求：

| 议题 | 链接 | 评论数 | 核心诉求 |
| :--- | :--- | :--- | :--- |
| **附件下载 Bug** | #5140 | 6 | v1.1.11.post2 版本中，docx/pdf 等非纯文本文件下载报 404 错误，基础功能回归。 |
| **Kimi 接入请求** | #5156 | 4 | 希望将 `kimi-for-coding` 加入 `uv` 白名单，以支持已订阅用户的直接接入。 |
| **桌面端性能** | #5047 | 3 | 切换至 Tauri 后，Windows 桌面端启动时间从分钟级恶化至十几分钟，严重影响可用性。 |

**分析**：高热度 Issue 均涉及“关键路径”体验——文件获取、模型接入、客户端启动。这表明用户对项目的基础设施稳定性和第三方集成能力不满，诉求已从“能用”转向“好用且稳定”。

---

## 5. Bug 与稳定性
按严重程度排序：

| 严重程度 | Issue | 问题描述 | 状态 | 关联 PR |
| :--- | :--- | :--- | :--- | :--- |
| **严重** | #5172 | 聊天会话在闲置后回复无响应，必须手动停止并报错 `Task has been cancelled!`，导致连续对话流程中断。 | Open | 无 |
| **高** | #5140 | 附件下载功能在 v1.1.11.post2 中对 docx/pdf 等格式返回 404，纯文本正常。 | **Closed** | 无（可能需进一步验证） |
| **高** | #5171 | 上下文压缩在 Agent 人设文件 Token 超过保留阈值时，可能将上下文完全压缩为 0，导致任务无法继续。 | Open | 无 |
| **中** | #5047 | Windows Tauri 桌面端启动极慢（>10分钟）且常无响应。 | Open | 无 |
| **中** | #5174 | 定时任务（Cron）与心跳（Heartbeat）Agent 无法执行 `write_file` 或 `spawn_subagent` 等重操作，机制存在限制。 | Open | 无 |

**备注**：`ly-wang19` 的一系列 PR（如 #5038, #5040, #5041）正在系统性修复类似场景的容错问题，但尚未覆盖上述所有具体 Bug。

---

## 6. 功能请求与路线图信号
用户提出的新需求及实现可能性评估：

| 需求 | Issue | 描述 | 实现信号 |
| :--- | :--- | :--- | :--- |
| **支持 Kimi for Coding** | #5156 | 将 `kimi-for-coding` 加入 `uv` 白名单，绕过官方 API 限制。 | **中**：需评估技术可行性与合规性，可能涉及核心配置变更。 |
| **越南语界面** | #5169 | 为 Console 添加越南语 (`vi`) 支持，参考印尼语/巴西葡萄牙语实现。 | **高**：PR #2498 已改进语言处理机制，此需求为纯前端文本扩展，易于实现。 |
| **Zalo Bot 频道** | #5168 | 添加对越南主流通讯应用 Zalo 的官方 Bot 支持。 | **低**：需全新频道开发，工作量较大，取决于维护者优先级。 |
| **优化飞书流式卡片** | #5167 | 改进长回复场景下 Feishu CardKit 的刷新速度与体验。 | **中**：属于前端性能优化，可能涉及流式传输逻辑调整。 |

**路线图信号**：多语言支持（#5169）因基础架构改进而成为最可能快速落地的需求。模型/渠道集成类请求（#5156, #5168）需社区或维护者投入专项开发。

---

## 7. 用户反馈摘要
从 Issues 评论与描述中提炼的关键痛点：

- **稳定性焦虑**：多个用户报告“回归型”Bug（如 #5140 下载问题），质疑版本测试充分性。“这么严重问题竟然一直存在”（#5172）反映了用户对问题响应速度的不满。
- **性能退化敏感**：从 Python 打包转向 Tauri 后桌面端启动性能大幅下降（#5047），用户对技术迁移的代价非常敏感。
- **核心功能缺陷**：上下文压缩导致信息完全丢失（#5171）和定时任务能力受限（#5174），暴露了核心 Agent 引擎在复杂场景下的鲁棒性不足。
- **生态集成渴望**：用户积极请求接入更多本地化/专业化服务（Zalo, Kimi Coding），显示项目在“连接能力”上有巨大扩展空间。
- **正面信号**：已合并的 Skill 标签批量下载（#4969）受到欢迎，说明实用型功能增强能直接提升用户满意度。

---

## 8. 待处理积压
需维护者优先关注的长期未决事项：

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 风险提示 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Issue** | #5047 | Windows Tauri 桌面端启动特别慢 | 2026-06-09 | Open | 影响核心用户体验，技术栈迁移问题可能需架构层排查。 |
| **PR** | #5035 | fix(local_models): parse llama.cpp server version... | 2026-06-09 | Under Review | 修复版本解析硬编码，影响模型后端兼容性，应尽快合并。 |
| **PR** | #5040 | fix(crons): tolerate invalid jobs in jobs.json... | 2026-06-09 | Under Review | 提升定时任务系统容错性，防止单点配置错误导致全局失效。 |
| **PR** | #5037 | fix(config): avoid IndexError on empty Exec=... | 2026-06-09 | Under Review | 修复 Linux 浏览器检测崩溃，影响跨平台安装体验。 |
| **PR** | #5041 | fix(backup): skip unreadable files... | 2026-06-09 | Under Review | 防止备份因单个文件问题整体失败，提升数据安全性。 |
| **PR** | #5038 | fix(context): guard empty msg list... | 2026-06-09 | Under Review | 修复上下文管理空列表崩溃，是 #5172 等聊天问题的潜在相关修复。 |

**总结建议**：`ly-wang19` 的 6 个 PR 构成一个“稳定性修复包”，覆盖了模型、配置、备份、上下文、定时任务等多个关键模块，建议维护团队集中评审合并，以系统性提升当前版本质量。同时，**#5047（启动慢）** 作为高热度 Issue 长期未解决，需明确技术根因与排期。

---

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