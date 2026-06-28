# OpenClaw 生态日报 2026-06-28

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-06-28 00:35 UTC

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

# OpenClaw 项目动态日报 (2026-06-28)

## 今日速览

OpenClaw 项目今日保持极高活跃度，24小时内 Issues 更新达 500 条（新开/活跃 486 条，关闭 14 条），PR 更新同样 500 条（待合并 447 条，已合并/关闭 53 条）。尽管无新版本发布，但大量 PR 正在推进核心功能修复与增强。社区讨论焦点集中在 **session 状态管理可靠性**、**消息投递保证**、**安全性增强** 以及 **多平台适配** 等关键领域。项目整体健康度呈现高活跃但高积压状态，需关注长期未决的 P1 级稳定性问题。

---

## 版本发布
*今日无新版本发布。最新稳定版本仍为 2026.3.23-2 系列。*

---

## 项目进展

### 今日合并/关闭的重要 PR

| PR | 标题 | 状态 | 影响 |
|----|------|------|------|
| [#97334](https://github.com/openclaw/openclaw/pull/97334) | fix(daemon): pin Node heap ceiling via CLI flag for managed services | **CLOSED** | 为托管服务提供可控的内存上限，防止 OOM |
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | Autofix: add PR review autofix pipeline + Windows daemon | **CLOSED** | 引入 Claude Agent SDK 自动修复审查意见，增强 Windows 服务支持 |
| [#97075](https://github.com/openclaw/openclaw/pull/97075) | Doctor: expose gateway runtime findings | **CLOSED** | 增强 `openclaw doctor` 对网关运行时的健康检查能力 |

### 重要推进中的 PR (OPEN)

| PR | 标题 | 优先级 | 进展 |
|----|------|--------|------|
| [#97265](https://github.com/openclaw/openclaw/pull/97265) | fix(gateway): tools.effective fails for global sessions on non-default agents | P2 | 修复全局会话在非默认代理下的工具列表显示问题 |
| [#97337](https://github.com/openclaw/openclaw/pull/97337) | fix(ui): show cron job model selection in quick-create and job list/detail | P2 | 修复 Web UI 中 cron 作业模型选择缺失问题 |
| [#95964](https://github.com/openclaw/openclaw/pull/95964) | Persist hosted catalog snapshots in state | P2 | Hosted Marketplace Feed Stack 第 4 步，持久化目录快照 |
| [#90239](https://github.com/openclaw/openclaw/pull/90239) | [AI-assisted] Add session history family lookup | P2 | 支持跨重置 transcripts 的会话历史家族查找 |
| [#85249](https://github.com/openclaw/openclaw/pull/85249) | fix(cron): guard against undefined sourceDelivery in isolated executor | P1 | 修复孤立 cron 执行器中 `sourceDelivery` 未定义导致的崩溃 |
| [#63330](https://github.com/openclaw/openclaw/pull/63330) | feat(plugins): add session followup turn API and gateway-restart extension | P2 | 新增插件 API 支持为任何会话调度后续轮次（含冷会话） |

---

## 社区热点

### 最活跃 Issues (按评论数)

| Issue | 标题 | 评论 | 诉求分析 |
|-------|------|------|----------|
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | feat: centralized filename encoding utility for multi-encoding Content-Disposition handling | 18 | 解决多语言文件名（Shift-JIS, EUC-KR, GB18030 等）在飞书等渠道的乱码问题，需架构级统一编码处理 |
| [#58450](https://github.com/openclaw/openclaw/issues/58450) | Agent can promise a later follow-up without starting any actual follow-up action | 15 | 修复 agent 虚假承诺后续行动但未实际启动后台任务/子代理的问题，提升用户信任度 |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | Embedded runner: freshly streamed thinking signatures intermittently invalid on replay (Anthropic) | 15 | 修复 Slack 插件中 Anthropic 思考块签名在重放时间歇性失效，恢复机制因错误信息泛化未触发 |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) | Community Skill Development & ClawHub | 15 | 技能生态承诺与实践差距大，需完善 ClawHub 发布、安装、维护流程 |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | [Bug]: Coding Agent never completes anything (worked in 2026.4.2 and earlier) | 14 | **严重回归**：编码代理完全停止工作，仅输出模糊状态更新，影响开发工作流 |

### 高热度 PRs

| PR | 标题 | 热度信号 |
|----|------|----------|
| [#61576](https://github.com/openclaw/openclaw/pull/61576) | feat: Rust/GTK4 Linux companion app (#75, alternative track) | 提供 Rust 实现的 Linux 桌面伴侣应用，与 C/GTK4 版本并行，满足不同偏好 |
| [#63330](https://github.com/openclaw/openclaw/pull/63330) | feat(plugins): add session followup turn API and gateway-restart extension | 解决 #50739 等需求，支持插件调度后续轮次，提升系统事件可靠性 |
| [#64127](https://github.com/openclaw/openclaw/pull/64127) | feat: Provider circuit breaker for quota exhaustion | 为配额耗尽提供持久退避，避免无限重试 |

---

## Bug 与稳定性

### P1 级严重问题 (需立即关注)

| Issue | 标题 | 状态 | 影响 | 关联 PR |
|-------|------|------|------|---------|
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | Embedded runner: freshly streamed thinking signatures intermittently invalid on replay (Anthropic) | OPEN | 消息丢失、会话状态不一致 | 无直接 PR |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | [Bug]: Coding Agent never completes anything | OPEN | **功能完全失效**，回归问题 | 无直接 PR |
| [#57326](https://github.com/openclaw/openclaw/issues/57326) | CLI-backed helper paths still bypass CLI dispatch on latest main | OPEN | 安全边界绕过，CLI 模型行为异常 | 部分修复已合并，剩余表面待处理 |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | Repeated hard resets on same session key despite high reserveTokensFloor | OPEN | 会话频繁硬重置，上下文丢失 | 无直接 PR |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | clearUnboundScopes strips operator scopes unconditionally for non-local token-auth clients | OPEN | **安全回归**：非本地客户端权限被错误剥离 | 无直接 PR |
| [#49603](https://github.com/openclaw/openclaw/issues/49603) | Orphaned lock files not cleared on gateway restart when PID matches current process | OPEN | 会话永久锁定，"Something went wrong" 循环 | 无直接 PR |
| [#58957](https://github.com/openclaw/openclaw/issues/58957) | Model switch can fail silently when carried-over session context is too large | OPEN | 模型切换静默失败，用户体验差 | 无直接 PR |
| [#58514](https://github.com/openclaw/openclaw/issues/58514) | Google Chat: Space/Group messages silently ignored (DMs work correctly) | OPEN | 群组消息完全丢失 | 无直接 PR |
| [#53599](https://github.com/openclaw/openclaw/issues/53599) | Chrome extension browser relay removed with no cross-machine replacement (regression) | OPEN | **严重回归**：托管服务商跨机器控制能力丧失 | 无直接 PR |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | Embedded runner "Network connection lost" when LLM generates a tool call with large parameters | OPEN | 大型工具调用导致连接断开 | 无直接 PR |

### 稳定性与性能问题

- **内存泄漏**： [#54155](https://github.com/openclaw/openclaw/issues/54155) 报告 Gateway 内存 389MB → 14.7GB/4天，与 `sessions.json` 无限制增长相关（#55334 同因）。
- **会话存储膨胀**： [#55334](https://github.com/openclaw/openclaw/issues/55334) `sessions.json` 无 pruning，`skillsSnapshot` 重复导致 OOM。
- **锁管理缺陷**： [#49603](https://github.com/openclaw/openclaw/issues/49603) 重启时 PID 匹配导致锁文件残留。

---

## 功能请求与路线图信号

### 高需求功能 (👍 数高或评论多)

| Issue | 标题 | 需求强度 | 路线图关联 |
|-------|------|----------|------------|
| [#63829](https://

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向对比分析报告 (2026-06-28)

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现 **“核心繁荣、分支 diverging”** 的态势。以 **OpenClaw** 为事实标准的项目持续高活跃度，但面临严重的稳定性与可维护性挑战（高积压、P1 级 Bug 众多），反映出核心架构在规模化场景下的压力。与此同时，多个分支项目（如 Zeroclaw、IronClaw、NanoBot）在**安全性、渠道扩展、权限模型、硬件集成**等方向进行激进创新，但普遍存在 **“合并瓶颈”** —— 社区贡献踊跃而核心维护者审查能力不足。整体生态处于从“功能验证”向“生产就绪”过渡的关键阶段，**稳定性、安全性和运维体验**已成为比新功能更紧迫的集体诉求。

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | 今日合并/关闭 | Release 状态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (新开/活跃486) | 500 | 53 | 无新版本 (最新 2026.3.23-2) | **高活跃但高积压**：社区规模最大，讨论最深，但 P1 级稳定性问题堆积，需关注长期未决 Bug。 |
| **NanoBot** | 8 (7关闭, 1活跃) | 47 (29合并/关闭, 18待合并) | 29 | 无新版本 | **健康度良好**：活跃度高，问题修复及时，安全加固显著，WebUI 状态同步为唯一活跃中危 Bug。 |
| **Zeroclaw** | 46 | 50 | 3 | 无新版本 (最新 v0.8.2) | **快速迭代但审查瓶颈**：贡献旺盛，多里程碑并行，但合并速度远低于新增，积压严重。 |
| **PicoClaw** | 1 (新开) | 7 (5待合并) | 2 | 无新版本 | **中等活跃**：开发稳步推进（代理协作总线、Simplex 通道），但新 Bug（Matrix 加密）需关注。 |
| **NanoClaw** | 1 (新开) | 8 (0合并) | 0 | 无新版本 | **良好但交付慢**：社区贡献积极，但无合并操作，交付速度是瓶颈。 |
| **IronClaw** | 12 (9关闭) | 50 (22合并/关闭) | 22 | 无新版本 (最新 0.29.1) | **极高活跃度**：重大架构升级（能力策略）完成，测试强化，但 OAuth 稳定性与 E2E 测试失败是隐患。 |
| **LobsterAI** | 2 (新开, 高严重度) | 7 (全为 stale 修复合并) | 7 | 无新版本 | **问题修复阶段**：无新功能，专注清理历史技术债务，但新报告安装与备份 Bug 严重。 |
| **Moltis** | 1 (新开) | 2 (均待合并 >3周) | 0 | 无新版本 (无 Release) | **中等活跃，合并慢**：聚焦小模型工具调用兼容性，但 PR 合并延迟影响用户。 |
| **CoPaw** | 5 (2严重) | 15 (14待合并) | 1 | 无新版本 | **极高活跃但需平衡**：测试覆盖强化，但 DeepSeek V4 兼容性与对话丢失为严重阻塞。 |
| **TinyClaw** | 0 | 0 | 0 | - | **无活动** | |
| **ZeptoClaw** | 0 | 0 | 0 | - | **无活动** | |
| **EasyClaw** | 0 | 0 | 0 | - | **无活动** | |

## 3. OpenClaw 在生态中的定位

*   **优势**：**无可争议的社区规模与讨论深度中心**。其 Issues 和 PR 数量远超其他项目总和，问题覆盖从底层 session 状态管理、消息投递保证到上层 UI 的完整链路，形成了最全面的“问题-方案”知识库。作为“核心参照”，其 API 设计和架构模式被其他项目广泛借鉴或 divergence。
*   **技术路线差异**：路线更偏向**企业级托管服务与网关运行时**（如 `daemon` 内存 pinning、`gateway` 健康检查、`hosted catalog` 持久化）。相比之下，NanoBot 强调轻量，Zeroclaw 探索 Wasm 插件，IronClaw 重构权限模型，PicoClaw 专注硬件集成。OpenClaw 在**复杂状态管理与多租户隔离**方面的问题最为突出，反映了其承载高并发、长会话场景的挑战。
*   **社区规模对比**：断层领先。其单日 Issues/PR 互动量（500+）是第二名（Zeroclaw/IronClaw ~50）的10倍，社区贡献者基数大，但维护者审查能力已触及瓶颈，导致“高活跃、高积压”的畸形健康状态。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与表现 |
| :--- | :--- | :--- |
| **安全加固** | OpenClaw, Zeroclaw, NanoBot, IronClaw | OpenClaw 强调安全性增强；Zeroclaw 推进供应链签名（硬件 PGP、SLSA）；NanoBot 修复 `exec` 工具高危漏洞；IronClaw 在能力策略中细化权限边界。**安全正从“功能”变为“基础设施”**。 |
| **稳定性与可靠性** | **所有活跃项目** | OpenClaw 的 session 状态、消息投递；Zeroclaw 的上下文预算、记忆管理；IronClaw 的 OAuth 刷新；NanoBot 的 WebUI 状态同步；LobsterAI 的备份卡死。**核心运行时在复杂场景下的健壮性成为最大痛点**。 |
| **多通道/平台适配与抽象** | OpenClaw, Zeroclaw, PicoClaw, IronClaw | OpenClaw 的多平台适配；Zeroclaw 新增 WhatsApp 被动上下文、Inkbox 集成；PicoClaw 添加 Simplex 通道并修复 Windows 路径；IronClaw 要求将通道配对从 Slack 扩展。**各项目在独立扩展通道，缺乏统一抽象层，可能导致生态碎片化**。 |
| **权限与访问控制精细化** | IronClaw, Zeroclaw, OpenClaw | IronClaw 的“能力策略”系统（Epic #5261）是重大架构升级；Zeroclaw 讨论插件权限模型细化；OpenClaw 的安全性增强亦涉及此领域。**从“全有或全无”向基于角色/场景的细粒度控制演进**。 |
| **技能/插件生态与生命周期管理** | OpenClaw, NanoClaw, Zeroclaw | OpenClaw 的 ClawHub 发布安装流程；NanoClaw 的 `/update-skills` 更新机制失效；Zeroclaw 的 Wasm-first 插件运行时。**技能的可发现性、可安装性、可更新性、安全性是生态繁荣的基础设施**。 |
| **模型兼容性与输出鲁棒性** | Moltis, CoPaw, OpenClaw | Moltis 修复小模型（Gemma 4, oMLX）工具参数字符串化/`null` 值问题；CoPaw 修复 DeepSeek V4 thinking 模式兼容性；OpenClaw 关注 Anthropic 签名失效。**必须兼容从顶级云模型到本地小模型的多样化、非标准输出**。 |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全功能、企业级网关、托管服务

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-28)

## 1. 今日速览
NanoBot 项目在过去24小时维持**高开发活跃度**，共处理 **47 个 PR**（29 个已合并/关闭，18 个待合并）和 **8 个 Issues**（7 个已关闭，1 个活跃）。项目在**稳定性修复**、**安全增强**和**新功能开发**方面均有显著进展，但 WebUI 状态同步问题（#4500）仍为当前唯一活跃 Bug，可能影响连续对话体验。无新版本发布，代码库健康度良好。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日多个关键 PR 被合并，推动项目在可靠性、安全性和功能性上迈出重要一步：
- **修复 WebUI 状态同步 Bug**：PR [#4565](https://github.com/HKUDS/nanobot/pull/4565) 解决自重启后 UI 卡在“处理中”状态、停止按钮误报问题（对应 Issue #4500）。
- **安全加固**：PR [#4562](https://github.com/HKUDS/nanobot/pull/4562) 修复 `exec.allowPatterns` 的 shell 链式绕过漏洞；PR [#4518](https://github.com/HKUDS/nanobot/pull/4518)（已合并）修复默认登录 shell 执行导致密钥泄露问题。
- **数据一致性修复**：PR [#4533](https://github.com/HKUDS/nanobot/pull/4533) 防止会话键磁盘冲突；PR [#4532](https://github.com/HKUDS/nanobot/pull/4532) 确保 Anthropic 内容块包含必需 `type` 字段；PR [#4531](https://github.com/HKUDS/nanobot/pull/4531) 修正流合并逻辑以区分不同流 ID；PR [#4530](https://github.com/HKUDS/nanobot/pull/4530) 修复 OpenAI 兼容非流解析器中工具调用 ID 重复问题。
- **功能增强**：PR [#4555](https://github.com/HKUDS/nanobot/pull/4555) 实现每会话模型预设，支持不同对话使用不同模型；PR [#4542](https://github.com/HKUDS/nanobot/pull/4542) 使 MCP 工具图像内容作为 artifact 交付，改善多媒体处理。

## 4. 社区热点
今日社区讨论最活跃的议题围绕**项目架构争议**和**用户体验 Bug**：
- **Issue [#660](https://github.com/HKUDS/nanobot/issues/660)**（14 条评论，5 👍）：争议项目“ultra-lightweight”声称与 Dockerfile 中 Node.js 依赖的矛盾，反映用户对部署复杂性的担忧。虽已关闭，但可能持续引发关于项目定位的讨论。
- **Issue [#4500](https://github.com/HKUDS/nanobot/issues/4500)**（2 条评论）：WebUI 自重启后状态不同步，为当前唯一活跃 Bug，已关联 PR #4565 修复，社区关注其解决进度。
- **安全相关 Issues**：[#4521](https://github.com/HKUDS/nanobot/issues/4521) 和 [#4518](https://github.com/HKUDS/nanobot/issues/4518) 虽评论较少，但涉及 `exec` 工具高危漏洞，引起维护者高度重视并快速修复。

## 5. Bug 与稳定性
今日唯一新报告 Bug 为：
- **#4500 [OPEN] WebUI 状态同步问题**（严重程度：中）：自重启后 UI 卡在“处理中”状态，停止按钮误报“无活动任务”。影响连续对话体验，已有修复 PR [#4565](https://github.com/HKUDS/nanobot/pull/4565) 待合并。
其他稳定性问题（如会话键冲突、流合并错误、工具调用 ID 重复等）均已通过今日合并的 PR 修复。

## 6. 功能请求与路线图信号
多个功能增强 PR 正在开发，可能纳入下一版本：
- **扩展搜索能力**：PR [#4406](https://github.com/HKUDS/nanobot/pull/4406) 添加 Serper.dev 作为 web search 后端，丰富搜索提供商选项。
- **提升交互性**：PR [#4527](https://github.com/HKUDS/nanobot/pull/4527) 新增 `ask_clarification` 工具，支持智能体主动请求澄清。
- **改善媒体处理**：PR [#4353](https://github.com/HKUDS/nanobot/pull/4353) 在音频转录前自动转换为 WAV 16k mono，提高 STT 可靠性（尤其对 WhatsApp 语音笔记）。
- **优化智能体行为**：PR [#4554](https://github.com/HKUDS/nanobot/pull/4554) 为 Dream 添加技能创建写保护；PR [#4556](https://github.com/HKUDS/nanobot/pull/4556) 实现 Dream 模型覆盖 consolidation。
这些 PR 显示项目正朝着更健壮、功能更丰富的方向发展。

## 7. 用户反馈摘要
从 Issues 和 PR 讨论中提炼：
- **核心痛点**：
  - 部署依赖复杂性（Node.js 需求与“ultra-lightweight”声称不符）。
  -

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-28)

## 今日速览
过去24小时，Zeroclaw 项目保持高度活跃，共处理46个Issues和50个PRs，但合并/关闭速度（仅3个PR）显著低于新增量，显示社区贡献旺盛而维护审查存在瓶颈。核心开发聚焦于**安全加固**（供应链签名、Wasm插件运行时）、**稳定性修复**（内存与上下文预算问题）及**渠道扩展**（WhatsApp被动上下文、Inkbox集成）。无新版本发布，但多个里程碑（v0.8.3、v0.9.0）的跟踪器显示大量工作正在进行中，项目整体处于快速迭代期，但需关注积压问题处理效率。

---

## 版本发布
*无新版本发布。最新稳定版本仍为 v0.8.2（截至2026-06-27）。*

---

## 项目进展
### 已合并/关闭的重要PR（3条）
- **PR #8344**：修复CI部署中稳定指针标签检查失败问题，确保文档发布流程可靠。
- **PR #8225**：统一工作空间依赖（`strum`库），减少锁文件冗余，提升构建一致性。
- **PR #8148**：修复Anthropic提供商流式请求构建中的序列化错误传播，避免潜在panic。

### 已关闭的重要Issues（12条中的关键修复）
- **Issue #5844**：修复系统提示过度强调记忆导致性能下降的问题（S2严重性）。
- **Issue #4879**：解决Gemini CLI OAuth认证完全失效的阻塞问题（S1严重性）。
- **Issue #6434**：修复完全自主模式下Shell工具调用被错误拒绝的问题（S1严重性）。
- **Issue #8047**：修正`ReadSkillTool`在紧凑技能模式下路径查找错误（S2严重性）。

### 待合并的高优先级PR（47条）
- **PR #8389**：为WhatsApp群聊添加被动上下文支持（XL size，多频道变更）。
- **PR #8384**：集成Inkbox（邮件/SMS/iMessage）作为原生频道并附带快速入门引导。
- **PR #8368**：用wasmtime组件模型主机替换Extism，实现Wasm-first插件运行时（高风险，DO NOT MERGE标记）。
- **PR #8400**：将SOP定时触发器接入守护进程维护周期，启用失效关闭审批超时。
- **PR #8399**：实现SOP步骤实时执行器，支持代理启动的SOP工作流。

---

## 社区热点
### 最活跃Issues（评论数Top 3）
1. **[Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)** - RFC：供应链签名（硬件PGP、封闭构建、SLSA来源）  
   *评论：10 | 状态：OPEN*  
   **诉求分析**：社区对软件供应链安全高度关注，该RFC提出硬件支持密钥、多方仲裁和离线签名等企业级需求，反映项目向生产环境深化过程中对合规性的迫切要求。

2. **[Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)** - Bug：系统提示对记忆过度强调  
   *评论：7 | 状态：CLOSED*  
   **诉求分析**：用户反馈在定时任务等场景下，记忆系统过度消耗上下文预算，导致性能下降。已修复，但暴露记忆管理策略需更精细控制。

3. **[Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)** - Bug：默认32k上下文预算在首次迭代即超限  
   *评论：6 | 状态：OPEN*  
   **诉求分析**：核心运行时缺陷，系统提示+工具定义即超过默认预算，触发预emptive修剪，影响所有新会话。高严重性（S1），需紧急优化。

### 最活跃PRs（评论数Top 3）
1. **[PR #8389](https://github.com/zeroclaw-labs/zeroclaw/pull/8389)** - feat(channels)：添加被动WhatsApp群组上下文  
   *评论：未显示 | 状态：OPEN*  
   **关注点**：扩展WhatsApp频道功能，支持非直接提及的群消息作为被动上下文，提升群聊体验。涉及多频道架构变更，风险高。

2. **[PR #8344](https://github.com/zeroclaw-labs/zeroclaw/pull/8344)** - fix(ci)：将稳定指针标签检查推迟至部署时  
   *评论：未显示 | 状态：OPEN*  
   **关注点**：修复文档发布CI失败问题，确保版本标签与git标签同步，属于基础设施可靠性改进。

3. **[PR #8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384)** - feat(inkbox)：添加原生Inkbox频道（邮件/SMS/语音/iMessage）  
   *评论：未显示 | 状态：OPEN*  
   **关注点**：重大渠道扩展，集成Inkbox API提供持久化通信身份，附带交互式快速入门，降低用户上手门槛。

---

## Bug 与稳定性
### 按严重程度排列的今日报告/活跃Bug
- **S1 - 工作流阻塞**
  - **[Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)**：默认上下文预算不足导致首次迭代即超限（OPEN，无直接fix PR）。
  - **[Issue #4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879)**：Gemini CLI OAuth失效（CLOSED，修复已合并）。
  - **[Issue #6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)**：完全自主模式下Shell工具被拒绝（CLOSED，修复已合并）。

- **S2 - 行为降级**
  - **[Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)**：记忆过度强调（CLOSED，修复已合并）。
  - **[Issue #6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)**：Telegram频道提示缓存不工作（OPEN，无直接fix PR）。
  - **[Issue #8047](https://github.com/zeroclaw-labs/zeroclaw/issues/8047)**：ReadSkillTool路径错误（CLOSED，修复已合并）。

- **S3 - 轻微影响**
  - 无今日新报告。

### 稳定性观察
- **内存与上下文管理**：两个高严重性Bug（#5808、#5844）均围绕资源管理，反映当前上下文预算和记忆策略需系统性优化。
- **提供商兼容性**：Gemini和Telegram问题暴露第三方集成测试覆盖不足。
- **自主模式安全**：Shell工具在`level="full"`下被拒绝，表明权限检查逻辑可能存在过度严格或条件错误。

---

## 功能请求与路线图信号
### 高频需求（结合PR进展判断纳入可能性）
1. **MCP资源与提示支持** ([Issue #4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467), 👍4)  
   *现状*：当前仅支持MCP工具调用。  
   *路线图*：PR #未直接对应，但属于v0.8.3技能平台范畴（Tracker #8071），**高概率纳入下一版本**。

2. **OpenRouter模型回退数组** ([Issue #8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138))  
   *现状*：仅支持单一模型字符串。  
   *路线图*：配置扩展，改动小，**易纳入v0.8.3或补丁**。

3. **目标模式（Goal Mode）** ([Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303), 👍1)  
   *现状*：缺乏持久化目标追求模式。  
   *路线图*：对应ADR-008（PR #8393），属于v0.9.0范围（Tracker #7432），**中长期路线图**。

4. **Wasm-first插件运行时** ([Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135))  
   *现状*：Node.js仍为默认。  
   *路线图*：PR #8368已实现核心替换，但标记高风险，**v0.8.3关键特性**。

5. **WhatsApp被动群组上下文** ([Issue #8379](https://github.com/zeroclaw-labs/zeroclaw/issues/8379))  
   *现状*：群聊非提及消息被丢弃。  
   *路线图*：PR #8389已提交，**极可能随v0.8.3发布**。

### 其他值得关注
- **供应链签名**（#8177）与**SLSA来源**（#8058、PR #8277）：安全 hardening 重点，v0.9.0核心。
- **zerorelay中继节点**（#8358）：解决NAT穿透，独立里程碑。
- **插件权限模型细化**（#8398）：Wasm插件安全关键，需尽快决策。

---

## 用户反馈摘要
### 核心痛点
1. **资源管理不透明**：用户无法有效预测和控制上下文/记忆消耗（#5808、#5844），导致会话不稳定。
2. **渠道行为不一致**：Telegram缓存失效（#6360）与WhatsApp群聊体验缺失（#8379）表明频道实现差异大，缺乏统一抽象。
3. **提供商集成脆弱**：Gemini OAuth完全失效（#4879）暴露认证流程缺乏监控和回退机制。
4. **自主模式困惑**：`level="full"`下Shell工具被拒（#6434）与文档不符，用户难以调试权限问题。

### 积极反馈
- **快速响应**：多个高严重性Bug（#4879、#6434、#8047）在2-3个月内关闭，显示维护团队对阻塞问题响应及时。
- **生态扩展**：Inkbox频道（PR #8384）和MCP增强（#4467）表明项目积极

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-28)

## 1. 今日速览
过去24小时，PicoClaw 项目社区活跃度**中等**。开发活动以**维护性提交和功能增量**为主，共提交7个PR，其中5个待合并。新开Issue仅1个，为Matrix通道的加密消息处理错误，暴露出稳定性问题。核心进展包括**代理协作总线**功能正式合并，以及**Simplex通道**支持PR的提交，项目在扩展通道生态和内部架构上稳步推进。但跨平台兼容性（Windows路径）与加密消息处理的稳定性仍需关注。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日有两个重要PR被合并/关闭，推动了项目核心能力：
- **#2937 [CLOSED]**: 合并 `Feat/agent collaboration`，引入了**第一类内部代理协作总线**，提供持久化代理间通信、协作线程和权限感知消息传递。这是多智能体协作架构的关键基础。
- **#3048 [CLOSED]**: 合并 `fix(mcp): reject unknown pre-positional flags in add`，修复了 `mcp add` 命令在特定参数顺序下的解析错误，提升了CLI工具的健壮性。

同时，以下**新功能PR**已提交待合并，可能进入下一版本：
- **#3193 [OPEN]**: `Added simplex channel type`，新增对 **Simplex 聊天协议**的通道支持，进一步扩展了平台连接能力。

## 4. 社区热点
- **最活跃 Issue**: **#2472 [CLOSED]** (评论数: 7, 👍: 1)。讨论聚焦于 Windows 系统下 `list_dir` 因路径分隔符导致的 `invalid argument` 错误。诉求核心是**确保跨平台文件系统操作的兼容性**，这是基础功能稳定性的关键。
- **最受关注 PR**: **#3193 [OPEN]** (Simplex通道)。作为新增通道类型的特性PR，其合并将直接影响用户可连接的通信平台范围，是近期功能扩展的重点。

## 5. Bug 与稳定性
| 严重程度 | Issue/PR | 问题描述 | 状态 | 关联 Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **中** | **#3194 [OPEN]** | Matrix 通道接收加密消息时报错 “crypto is not enabled”，可能导致消息处理中断。 | **新报告** | 暂无 |
| **低** | #2472 [CLOSED] | Windows 路径分隔符不匹配导致 `list_dir` 失败。 | **已修复** | #2472 自身即修复 |

**说明**：`#3194` 是今日唯一新报告的运行时错误，影响 Matrix 通道的加密消息处理流程，需优先调查。`#2472` 已关闭，表明历史跨平台问题得到解决。

## 6. 功能请求与路线图信号
- **高可能性纳入下一版本**:
  - **Simplex 通道支持 (#3193)**：PR 已提交，属于明确的新通道集成，符合项目多平台连接战略。
- **中长期需求信号**:
  - **Telegram 权限分级 (#3114 [CLOSED])**：用户提出按对话类型（私聊/群组/频道）细化权限控制，以限制群组/频道中的危险操作。该 Issue 已关闭，但诉求反映了对**安全模型精细化**的强烈需求，可能在未来版本中作为安全增强项重新评估。

## 7. 用户反馈摘要
- **核心痛点**:
  - **跨平台兼容性**：Windows 用户遭遇路径处理问题（#2472），凸显基础IO层需更彻底的平台抽象。
  - **安全控制粒度不足**：Telegram 群组中，白名单机制无法防止成员执行危险命令（#3114），用户需要基于对话类型的“安全边界”。
  - **通道可靠性**：Matrix 加密消息处理错误（#3194）表明加密功能集成可能存在缺陷，影响特定通道的可用性。
- **积极信号**：代理协作总线（#2937）的合并表明项目在向多智能体协作架构演进，满足高级用户需求。

## 8. 待处理积压
当前**无长期（>30天）未响应的开放重要 Issue 或 PR**。但需注意：
- **5个待合并 PR**（包括 #3193, #3189, #3192, #3191, #3190）需及时进行代码审查，特别是新功能 PR #3193，其合并将直接影响版本功能集。
- 所有标记为 `[stale]` 的 Issue/PR（如 #2472, #3114, #3048, #2937）均已**关闭**，无 stale 状态的开放积压项。

---
**报告生成时间**: 2026-06-28  
**数据来源**: [PicoClaw GitHub Repository](https://github.com/sipeed/picoclaw) (过去24小时动态)  
**分析师备注**: 项目开发活跃，重心在通道扩展与架构增强。建议优先审查待合并PR，并跟进新Bug #3194 的复现与修复。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-28)

## 1. 今日速览
项目今日保持高活跃度，共记录1个新Issue和8个新Pull Request，但无合并或关闭操作，表明社区贡献积极而核心维护团队的评审与合并流程可能面临 backlog。主要焦点集中在技能更新机制修复、部署流程改进及OpenCode功能增强上，整体健康度良好但交付速度有待提升。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无PR被合并或关闭，代码库暂无直接推进。但存在8个待合并PR，涵盖关键修复（如技能更新逻辑、信号稳定性）和新功能（如OpenCode模型覆盖、仪表盘推送），一旦合并将显著提升系统可靠性与可观测性。

## 4. 社区热点
最活跃的讨论围绕[Issue #2868](https://github.com/nanocoai/nanoclaw/issues/2868)及其关联PR [PR #2873](https://github.com/nanocoai/nanoclaw/pull/2873)。Issue报告了`/update-skills`命令在已安装频道上不刷新代码与依赖的严重问题，导致用户无法遵循CHANGELOG迁移步骤。PR #2873直接针对此问题提出修复方案，分离pre-flight与credentials逻辑。此热点反映了用户对更新机制可靠性的迫切需求，并引发了关于技能生命周期管理的潜在讨论。

## 5. Bug 与稳定性
- **高严重度**：[Issue #2868](https://github.com/nanocoai/nanoclaw/issues/2868) - `/update-skills`对已安装频道静默失败，不刷新代码/依赖，破坏更新流程。已有修复PR [PR #2873](https://github.com/nanocoai/nanoclaw/pull/2873)。
- **中严重度**：[PR #2874](https://github.com/nanocoai/nanoclaw/pull/2874) - 修复signal-cli启动不稳定导致的崩溃循环，提升消息通道可靠性。
- 注：今日无新崩溃报告，但稳定性修复是重点。

## 6. 功能请求与路线图信号
- [PR #2872](https://github.com/nanocoai/nanoclaw/pull/2872): 为OpenCode代理组添加每组分模型覆盖功能，增强部署灵活性。
- [PR #2871](https://github.com/nanocoai/nanoclaw/pull/2871): 添加支持OpenCode的仪表盘推送器，提升可观测性。
- [PR #2875](https://github.com/nanocoai/nanoclaw/pull/2875): 部署/Coolify集成改进，可能简化容器化部署。
这些功能若合并，将丰富OpenCode生态并改善运维体验，可能纳入下一版本。

## 7. 用户反馈摘要
从[Issue #2868](https://github.com/nanocoai/nanoclaw/issues/2868)可见，用户期望`/update-skills`能可靠刷新已安装频道的代码与依赖，以遵循版本迁移指南。当前静默失败导致更新流程断裂，影响用户信任与升级体验。无其他用户评论数据，但该问题直接关联到用户日常维护操作，痛点明确。

## 8. 待处理积压
存在多个创建于2026-06-20（距今8天）仍未合并的PR，建议维护团队优先评审：
- [PR #2822](https://github.com/nanocoai/nanoclaw/pull/2822): 容器运行器重构，移除死 mounts。
- [PR #2823](https://github.com/nanocoai/nanoclaw/pull/2823): 移除主机启动时删除的全局文件。
- [PR #2824](https://github.com/nanocoai/nanoclaw/pull/2824): 清理主种子提示中的过时“Global Memory”指令。
这些PR涉及代码清理与稳定性改进，延迟合并可能累积技术债务。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-28)

## 1. 今日速览
项目今日保持**极高活跃度**，过去24小时共处理50个PR（合并/关闭22个）和12个Issues（关闭9个）。核心开发聚焦于 **Reborn 架构下的能力策略（capability-policy）系统**，该史诗级功能（#5261）的多层实现（模型、引擎、可用性、控制平面）已全部合并完毕，标志着权限管理架构的重大升级。同时，团队持续投入质量保障，多个PR致力于完善WebUI v2的QA覆盖、修复运行时问题及改进测试框架。社区反馈集中在OAuth集成稳定性、多通道支持及长期存在的E2E测试失败问题上，需优先关注。

## 2. 版本发布
*无新版本发布。* 最近一次版本更新为 `ironclaw` 0.29.1（见PR #5311），包含多项依赖升级及API破坏性变更。

## 3. 项目进展
今日合并/关闭的PR主要推进了以下关键领域：
- **能力策略系统（Epic #5261）全面落地**：完成了从策略模型（#5262）、引擎与存储（#5344）、可用性维度（#5349）到控制平面REST接口（#5355）的完整链路，实现了基于用户角色（所有者/管理员/成员）的细粒度权限管理，为Reborn栈的admin-shared工具功能奠定基础。
- **稳定性修复**：PR #5382 修复了 `hosted-single-tenant` 配置下卷挂载的运行时启动失败问题，恢复了关键部署场景的功能。
- **质量与测试强化**：PR #5279 修复了Reborn WebUI v2的消息队列引导逻辑；PR #5365 修正了聊天重试按钮功能；PR #5370/5384 统一并固定了WebUI v2的前端Node工具链版本，减少环境差异问题。

## 4. 社区热点
讨论最集中的主题围绕 **Reborn能力策略的实现与使用**（关联Epic #5261及其子Issues #5272, #5268, #5273, #5267, #5266）。这些Issues及对应PRs（如#5262, #5344, #5355）定义了新的权限模型、REST管理接口和存储层，是当前架构演进的核心。开发者关注点在于：1）如何通过新REST接口手动配置用户权限；2）策略的四个维度（配置、身份、批准、可用性）如何协同工作；3）本地开发环境如何模拟多用户测试。此外，**Nightly E2E测试持续失败**（#4108）引发了对CI/CD稳定性的普遍担忧。

## 5. Bug 与稳定性
| 严重程度 | Issue | 问题描述 | 状态 | 关联PR |
| :--- | :--- | :--- | :--- | :--- |
| **高** | [#5378](https://github.com/nearai/ironclaw/issues/5378) | Google OAuth令牌在`hosted-single-tenant`/本地配置下每小时刷新失败，强制用户重新授权，影响Gmail、日历等能力。 | Open | 无 |
| **高** | [#4928](https://github.com/nearai/ironclaw/issues/4928) | Notion OAuth在Railway部署时回调URL错误指向localhost，导致授权流程无法完成。 | Open | 无 |
| **中** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | 定时E2E测试任务连续失败，阻塞质量门禁。 | Open (长期) | 无 |
| **低** | [#5385](https://github.com/nearai/ironclaw/issues/5385) | 新开Issue：要求明确三种用户类型（owner/admin/member）的配置状态与策略应用方式。 | Open | 无 |

## 6. 功能请求与路线图信号
- **非Slack通道的端到端支持**：Issue [#5368](https://github.com/nearai/ironclaw/issues/5368) 提出需将WebUI的通道配对功能从Slack扩展到其他类型（如本地配对），是提升平台通用性的关键下一步。已有PR #5362为Slack流程加固，为扩展打下基础。
- **默认用户体验优化**：Issue [#5364](https://github.com/nearai/ironclaw/issues/5364)（已关闭）已实现将“始终允许符合条件的工具”默认开启，减少新用户摩擦，体现了对开箱即用体验的重视。
- **能力策略配置完善**：新开Issue [#5385](https://github.com/nearai/ironclaw/issues/5385) 要求更清晰地定义用户类型与策略状态，这可能是对刚合并的能力策略系统的补充文档或UI需求。

## 7. 用户反馈摘要
从Issues讨论中提炼的核心痛点：
- **权限管理缺失**：在Reborn栈中，缺乏基于角色的用户区分和admin边界，导致无法进行多用户场景下的权限测试和实际管理（#5272, #5266）。
- **OAuth集成不稳定**：生产环境（Railway）的OAuth回调配置问题（Notion）及令牌刷新机制缺陷（Google）严重影响依赖第三方服务的核心功能可用性（#4928, #5378）。
- **测试与质量保障不足**：Nightly E2E测试长期失败（#4108）削弱了对代码质量的信心；WebUI v2的某些交互（如重试）存在功能缺陷（#5365）。
- **多通道支持局限**：当前通道配对功能深度绑定Slack，限制了平台在非Slack协作场景下的应用（#5368）。

## 8. 待处理积压
- **阻塞性问题**：**Nightly E2E测试失败**（Issue [#4108](https://github.com/nearai/ironclaw/issues/4108)）自2026-05-27起持续未解决，已超过一个月，严重阻碍自动化质量监控，需立即分配资源诊断。
- **高优先级Bug**：Google OAuth刷新失败（#5378）和Notion OAuth回调问题（#4928）均影响关键集成，且无可见修复PR，需尽快跟进。
- **功能缺口**：非Slack通道端到端支持（#5368）是扩展用户场景的重要功能，建议在能力策略稳定后规划排期。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-28)

## 1. 今日速览
今日LobsterAI项目无新版本发布，代码合并活动以历史遗留PR的收尾为主。社区焦点集中在两个新报告的严重Bug上：安装流程的环境检测缺陷与数据备份功能的主进程卡死问题，两者均影响核心用户体验，需优先关注。项目整体处于问题修复与技术债务清理阶段，新功能开发活跃度较低。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日共有7个PR被合并/关闭，均为标记为`[stale]`的历史问题修复，表明项目正在系统性处理累积的技术债务。主要进展包括：
- **基础设施与协议支持**：PR #1001 修复了MCP服务器对SSE及流式HTTP传输类型的支持问题，使配置生效。
- **核心稳定性**：PR #1446 修复了OpenClaw网关在启动失败后陷入无限重启循环的竞态条件，防止应用瘫痪。
- **用户体验与国际化**：PR #1448 修复了Agent设置页面的删除按钮及技能选择器的英文硬编码问题；PR #1449 优化了定时任务执行记录，对同一任务的多次执行进行折叠分组，避免侧栏列表过度堆积。
- **功能逻辑修正**：PR #1453 修复了已停用技能仍被注入对话提示词的严重逻辑漏洞；PR #1454 修复了“不重复”模式定时任务在清空日期后创建按钮无响应的表单缺陷；PR #1456 为快捷键设置增加了重复检测，防止冲突导致功能失效。
- **整体评估**：这些修复覆盖了从底层网关、数据管理到前端交互的多个关键模块，显著提升了应用的健壮性和可用性，但多为对既有功能的修正，未引入显著新特性。

## 4. 社区热点
今日社区讨论最活跃的议题为两个新开的高严重度Bug报告，均来自同一用户`@woxinsj`，反映了在核心使用流程上遇到了严重障碍：
- **Issue #2215: 安装失败** - 用户详细记录了排查“Resource extraction failed”错误的完整过程，最终定位到安装程序对非标准盘符路径（G:\）的支持问题。该Issue揭示了NSIS安装包在路径处理上的环境适应性缺陷。
  - **链接**: https://github.com/netease-youdao/LobsterAI/issues/2215
  - **核心诉求**: 修复安装程序，使其能正确识别和处理非系统盘符的安装路径。
- **Issue #2214: 数据备份导致主进程卡死** - 用户报告在Windows 11上使用“数据备份”功能时，主进程会100%复现地变为“未响应”，只能强制结束进程。该问题直接威胁用户数据安全与操作连续性。
  - **链接**: https://github.com/netease-youdao/LobsterAI/issues/2214
  - **核心诉求**: 立即修复备份功能，避免主进程阻塞，确保数据迁移操作的可靠性。

## 5. Bug 与稳定性
今日报告的新Bug按严重程度排列如下，均暂无已提交的修复PR：
1.  **【严重】数据备份功能导致主进程完全卡死** (Issue #2214)
    - **影响**: 用户无法进行数据备份，必须强制结束进程，严重损害对产品数据管理能力的信任。
    - **状态**: 新报告，待确认与修复。
2.  **【高】安装程序在特定路径下失败** (Issue #2215)
    - **影响**: 用户无法完成安装，安装程序环境检测逻辑存在缺陷。
    - **状态**: 新报告，待确认与修复。

## 6. 功能请求与路线图信号
- **PR #2065 (OPEN)**: 提出使用短UUID替代基于名称生成Agent ID，以解决删除Agent后“数据复活”的遗留问题。该改进关联到`cowork_sessions`等数据的清理逻辑，是数据模型层面的重要修正，**很可能被纳入下一版本**以根治数据管理隐患。
  - **链接**: https://github.com/netease-youdao/LobsterAI/pull/2065
- **社区新请求**: 今日Issues均为Bug报告，未提出明确的新功能需求。近期合并的PR（如#1449的定时任务折叠）可视为对现有功能体验的增强，反映了优化工作流管理的路线图方向。

## 7. 用户反馈摘要
从今日报告的Issues中提炼的关键用户痛点：
- **安装体验不佳**: 安装程序的环境检查（`extractor process`）过于僵化，未能正确处理非C盘安装或存在特定环境（如盘符、权限）的场景，导致用户需进行复杂的手动排查，首次体验差。
- **核心数据操作不可靠**: “数据备份”作为数据安全的关键功能，竟导致主进程完全无响应，使用户对产品的稳定性和数据完整性产生严重担忧。用户强调“100%可复现”，表明问题具有普遍性。
- **日志与错误提示不足**: 安装失败日志（`install-timing.log`）信息有限，备份失败无任何报错提示，用户被迫进行“盲人摸象”式排查，增加了问题解决成本。

## 8. 待处理积压
- **PR #2065 (OPEN, stale)**: 创建于2026-05-28，涉及Agent ID生成策略的根本性改变及关联数据清理方案。该PR对数据持久化层的健康至关重要，但已搁置近一个月，**需维护者明确审查意见与合并计划**。
  - **链接**: https://github.com/netease-youdao/LobsterAI/pull/2065
- **新开高优Issues (#2214, #2215)**: 虽为今日新开，但因其高严重度与核心功能影响，应被**立即纳入最高优先级修复队列**，避免更多用户受阻。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-28)

**报告生成时间：** 2026-06-28  
**数据周期：** 过去24小时 (2026-06-27 至 2026-06-28)  
**项目健康度评估：** 中等活跃。社区贡献聚焦于工具调用鲁棒性修复，但合并流程存在延迟，需关注积压 PR 的审查效率。

---

### 1. 今日速览
项目在过去24小时维持中等活跃度，共报告1个新Bug并开放2个修复PR，无新版本发布。社区贡献集中于提升对小型本地模型（如Gemma 4、oMLX）输出格式的容错处理，特别是针对工具参数字符串化与`null`值的标准化。当前无紧急崩溃报告，但PR合并流程较慢，两个关键修复已等待合并超过3周，可能影响下游用户稳定性体验。

---

### 2. 版本发布
*无新版本发布。最新Release版本信息为空，项目处于功能迭代期而非发布周期。*

---

### 3. 项目进展
**今日无合并/关闭的PR。**  
当前有2个待合并PR，分别修复工具参数验证逻辑，推进了项目对非标准模型输出的兼容性：
- **PR #1136**：修复了小型模型将标量工具参数输出为JSON字符串（如`"true"`而非`true`）时的预派验证失败问题。
- **PR #1098**：修复了浏览器工具调用中，模型显式传递`null`值导致反序列化失败的问题。

---

### 4. 社区热点
**最活跃讨论：** 两个待合并PR（#1136、#1098）虽无评论，但均于昨日更新，且由同一贡献者连续提交，反映社区对“小模型工具调用兼容性”这一核心痛点的高度关注。  
- **PR #1136**：https://github.com/moltis-org/moltis/pull/1136  
- **PR #1098**：https://github.com/moltis-org/moltis/pull/1098  
**诉求分析：** 用户（尤其是本地模型使用者）频繁遇到工具调用因参数格式问题失败，社区通过PR提供通用性修复，旨在降低模型集成门槛，提升Moltis在边缘/本地部署场景的可用性。

---

### 5. Bug 与稳定性
| 严重程度 | Issue | 描述 | 状态 | 关联修复 |
|----------|-------|------|------|----------|
| 中 | [#1137](https://github.com/moltis-org/moltis/issues/1137) | Apple Container ID 超过名称长度限制，可能导致Apple平台容器创建失败。 | 新开，待处理 | 暂无已知PR |

---

### 6. 功能请求与路线图信号
**今日无新增功能请求。**  
现有PR（#1136、#1098）虽为修复性质，但隐含了对“更宽松的工具参数解析策略”的需求，可能影响下一版本的工具调用模块设计。建议路线图考虑将参数规范化作为独立中间层。

---

### 7. 用户反馈摘要
- **痛点：** Issue #1137 报告Apple平台特定配置限制，反映Moltis在多平台配置兼容性上存在细节问题。
- **使用场景：** PR修复针对“小型本地模型”（Gemma 4、oMLX），表明用户在资源受限环境或特定模型生态中使用Moltis，对输出格式的鲁棒性要求高。
- **满意度：** 无直接评论，但PR的连续提交显示贡献者对问题有明确解决方案，社区可能对修复进展持积极态度。

---

### 8. 待处理积压
- **PR #1098**：创建于2026-06-03，已开放超过3周，昨日虽有更新但未合并。该修复针对浏览器工具的基础稳定性，建议维护者优先审查，以避免影响所有浏览器自动化用户。
- **PR #1136**：创建于2026-06-27，虽较新，但与#1098高度相关，合并后可成组发布，减少测试碎片化。

---

**维护建议：**  
1. 优先合并两个工具参数修复PR，以解决小模型用户的核心痛点。  
2. 跟进Issue #1137，确认是否为Apple平台普遍问题，并评估修复工作量。  
3. 考虑建立“工具调用兼容性”测试套件，防止未来模型输出格式变化导致回归。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-06-28)

## 今日速览
- **开发活跃度极高**：过去24小时共15个PR更新，其中14个待合并，显示核心团队与社区贡献者提交代码积极，项目迭代速度快。
- **质量保障成重点**：多数PR聚焦测试覆盖（如crons、runner、console模块），表明项目正系统性地提升后端与前端单元测试覆盖率，以锁定Agentscope 2.0合约并预防回归。
- **用户反馈集中**：5个Issues中2个为严重bug（DeepSeek V4兼容性、对话记录丢失），反映真实使用场景中的稳定性挑战，需优先处理。
- **无新版本发布**：项目可能处于功能冻结或测试阶段，暂不发布新版本，集中精力修复问题与完善测试。
- **整体健康度**：高开发活跃度与用户问题反馈并存，社区参与度良好，但需平衡新功能开发与关键稳定性修复。

## 版本发布
无新版本发布。

## 项目进展
- **今日合并/关闭的重要PR**：
  - **PR #5213**（已合并）：`fix(console): improve MCP access policy layout`  
    改进MCP客户端卡片操作区域对齐，使工具与权限模态框在不同视口下响应式布局，避免小窗口操作控件溢出，提升前端UI一致性。  
    [链接](https://github.com/agentscope-ai/QwenPaw/pull/5213)

## 社区热点
- **最活跃讨论**：**Issue #5573**（DeepSeek V4流式推理错误）获2条评论，涉及非官方OpenAI兼容端点在thinking模式下的两类400错误（流式`reasoning_content`缺失、工具Schema null类型未清洗）。  
  - **关联PR**：#5582正在修复流式路径的异常处理，学习非流式路径的兜底逻辑。  
  - **诉求分析**：社区强烈要求提升对DeepSeek V4等第三方中转站模型的兼容性，尤其是多轮对话场景，否则影响广泛使用。  
  [Issue链接](https://github.com/agentscope-ai/QwenPaw/issues/5573) | [PR链接](https://github.com/agentscope-ai/QwenPaw/pull/5582)

## Bug 与稳定性
按严重程度排列，标注是否已有修复PR：
1. **严重级**：  
   - **#5579**：对话记录在异常中断（如宿主机重启、服务崩溃）下完全丢失，缺乏断点保存机制。用户可能丢失全部进度，暂无直接修复PR。  
     [链接](https://github.com/agentscope-ai/QwenPaw/issues/5579)
2. **高优先级**：  
   - **#5573**：DeepSeek V4 thinking模式在OpenAI兼容端点触发400错误，已关联PR #5582修复流式推理内容缺失与Schema清洗问题。  
     [Issue链接](https://github.com/agentscope-ai/QwenPaw/issues/5573) | [PR链接](https://github.com/agentscope-ai/QwenPaw/pull/5582)
3. **中优先级**：  
   - **#5584**：无法连接自定义ascend-vllm模型（1.1.7后版本失效），vllm后端正常但客户端报`APIConnectionError`，暂无修复PR。  
     [链接](https://github.com/agentscope-ai/QwenPaw/issues/5584)

## 功能请求与路线图信号
- **新功能PR（可能纳入下一版本）**：
  - **#558

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