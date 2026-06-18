# OpenClaw 生态日报 2026-06-18

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-06-18 00:41 UTC

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

# OpenClaw 项目动态日报 (2026-06-18)

## 1. 今日速览
过去24小时，OpenClaw 项目保持极高活跃度：Issues 更新达 500 条（新开/活跃 491，已关闭 9），PR 更新 500 条（待合并 441，已合并/关闭 59）。社区讨论聚焦于跨平台支持、安全漏洞修复及架构稳定性，无新版本发布。项目整体处于快速迭代期，但 P1 级别回归问题频发，需关注核心路径的稳定性维护。

## 2. 版本发布
- 过去 24 小时无新版本发布。

## 3. 项目进展
今日 59 个 PR 已合并/关闭，主要推进方向：
- **安全性加固**：`secrets` 范围隔离（PR #94106）、消息泄漏防护（PR #94312）等，降低敏感信息暴露风险。
- **稳定性提升**：会话锁重入支持（PR #88919）、cron 守护进程空指针防护（PR #85249）、非流式最终回复去重（PR #94294），减少崩溃与数据不一致。
- **通道功能扩展**：Discord 画布支持（PR #18778）、LINE 消息格式全面修复（PR #86013）、Telegram 静音标记正确处理（PR #94051），提升多平台用户体验。
- **开发者体验**：Agent SDK 打包规范骨架（PR #93404）、`doctor --explain` 诊断增强（PR #94253）、工具架构动态发现（PR #18860），降低二次开发门槛。
- **核心架构**：上下文感知延续机制（PR #85651）、删除代理会话清理生命周期化（PR #93713），为大规模部署提供保障。

## 4. 社区热点
- **#75** ([109 评论](https://github.com/openclaw/openclaw/issues/75))：Linux/Windows Clawdbot 应用缺失。诉求：补齐桌面端支持，与 macOS/iOS/Android 功能对齐。反映跨平台部署的迫切需求。
- **#25592** ([32

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-06-18)

## 1. 生态全景
当前生态呈现 **“基础框架竞争、垂直场景深耕、生产就绪攻坚”** 的多元态势。以 **OpenClaw** 为核心参照的多个“Claw”系项目，在快速迭代中持续扩大功能边界与渠道集成，同时社区对**安全性、稳定性、多租户支持及部署体验**的诉求显著上升。项目活跃度两极分化：头部项目 Issues/PR 日均数百条，处于高速功能迭代期；部分项目转向质量巩固，而少数已进入休眠。整体生态正从“个人玩具”向“生产级工具”演进，安全与运维能力成为下一阶段关键分水岭。

## 2. 各项目活跃度对比

| 项目 | Issues (新开/活跃 | 已关闭) | PR (待合并 | 已合并/关闭) | Release | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (491 | 9) | 500 (441 | 59) | 无 | **中**。活跃度极高，但 P1 回归频发，积压严重（Issues 关闭率仅 1.8%），核心稳定性需优先保障。 |
| **NanoBot** | 10 (7 | 3) | 30 (12 | 18) | 无 | **高**。问题关闭率 30%，PR 合并率 60%，修复覆盖稳定性、兼容性、安全策略，迭代稳健。 |
| **Zeroclaw** | 50 (49 | 1) | 50 (40 | 10) | 无 (v0.8.1 候选中) | **中**。活跃度高，但 Issues 关闭率仅 2%，多个 S2 级 Bug 开放，架构演进与稳定性需平衡。 |
| **PicoClaw** | 4 (2 | 2) | 10 (4 | 6) | Nightly 构建 | **高**。对高危安全漏洞与关键兼容性问题响应迅速（PR 合并率 60%），代码库健康度提升明显。 |
| **NanoClaw** | 5 (未细分) | 19 (未细分) | **v2.1.17, v2.1.0** | **中高**。发布节奏稳定，修复覆盖安全、部署、功能阻断，但合并流水线或有压力（16 PR 待合并）。 |
| **IronClaw** | 48 (26 | 22) | 50 (33 | 17) | 无 | **中**。Issues 关闭率 45.8%，修复了 Bedrock、OAuth 等关键问题，但新 Critical Bug（RCE）报告需紧急关注。 |
| **LobsterAI** | 0 新增 | 13 (13 | 0) | **2026.6.15** | **高**。无新 Issues，所有 PR 为修复/优化，显示版本发布后质量巩固阶段，稳定性良好。 |
| **CoPaw** | 45 (未细分) | 50 (未细分) | **v1.1.12, v1.1.12-beta.2** | **低**。新报 Critical 安全漏洞与多个 Severe 稳定性问题（冻结、死循环），处于“高速迭代与稳定性攻坚并行”阵

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-18)

**数据周期**：过去24小时 (截至 2026-06-18 00:00 UTC)  
**数据来源**：GitHub (github.com/HKUDS/nanobot)

---

## 1. 今日速览
过去24小时，NanoBot 项目保持高度活跃，共处理 **30 个 PR**（18 个已合并/关闭）和 **10 个 Issues**（3 个已关闭）。开发重点集中于**稳定性修复**（如代理处理、Feishu 流式传输、文件系统安全）和**功能增强**（如新搜索提供商、模型支持优化）。社区反馈积极，多个用户提出关于多租户、移动端体验和配置易用性的需求，但暂无新版本发布，项目处于快速迭代期。

---

## 2. 版本发布
- **无新版本发布**。最新稳定版本仍为 `v0.2.1`（根据仓库历史记录推断）。

---

## 3. 项目进展
今日合并/关闭的 PR 主要推进了以下关键领域：

| PR 编号 | 类型 | 简要说明 | 影响 |
| :--- | :--- | :--- | :--- |
| [#4367](https://github.com/HKUDS/nanobot/pull/4367) | Bug 修复 | 修复本地模型服务器（如 Ollama）在主机设置代理时无法访问的问题，确保本地端点绕过代理，云端点尊重环境代理。 | **稳定性**：解决本地部署常见故障。 |
| [#4380](https://github.com/HKUDS/nanobot/pull/4380) | Bug 修复 | 修复 shell 安全守卫，允许在 workspace 子目录中执行 `git` 等命令。 | **功能**：恢复子目录下版本控制工具的正常使用。 |
| [#4381](https://github.com/HKUDS/nanobot/pull/4381) | Bug 修复 | 修复 Feishu 流式卡片更新失败问题，通过重试机制和清理 broken 卡片提升可靠性。 | **稳定性**：改善飞书渠道用户体验。 |
| [#4350](https://github.com/HKUDS/nanobot/pull/4350) | 功能增强 | 新增 **Keenable** 作为内置网络搜索提供商，扩展搜索选项。 | **功能**：丰富工具链，提供更多搜索后端选择。 |
| [#4351](https://github.com/HKUDS/nanobot/pull/4351) | 功能增强 | 改进 Mistral 模型支持，适配其 API 对 `reasoning_effort` 等参数的严格限制。 | **兼容性**：提升与 Mistral 官方 API 的兼容性。 |
| [#4349](https://github.com/HKUDS/nanobot/pull/4349) | Bug 修复 | 修复重播窗口历史修剪逻辑，防止在长用户回复中丢失消息前缀。 | **稳定性**：确保对话上下文完整性。 |
| [#4202](https://github.com/HKUDS/nanobot/pull/4202) | 策略澄清 | 明确文件系统工作区写入策略，将 `extra_allowed_dirs` 区分为只读/可写，并统一路径处理。 | **安全性**：强化文件操作权限模型。 |

**整体进展评估**：今日合并的 PR 覆盖了**渠道可靠性**（Feishu）、**本地部署体验**（代理、git）、**模型兼容性**（Mistral）和**安全策略**（文件系统）等多个核心模块，项目在健壮性和易用性上取得稳步进展。

---

## 4. 社区热点
讨论最活跃的议题反映了用户对**生产环境部署**和**高级管理功能**的迫切需求：

| 议题 | 类型 | 评论/👍 | 核心诉求 |
| :--- | :--- | :--- | :--- |
| [#4360](https://github.com/HKUDS/nanobot/issues/4360) | Bug | 9 评论 | Docker 官方镜像安装失败（`pip: Syntax error: end of file unexpected`），涉及基础安装流程的可靠性。 |
| [#936](https://github.com/HKUDS/nanobot/issues/936) | 功能请求 | 1 评论 | **多租户网关**：希望单个网关容器管理多个代理，降低资源开销和管理复杂度。 |
| [#4388](https://github.com/HKUDS/nanobot/issues/4388) | Bug | 1 评论 | iOS Safari 点击输入框触发页面放大，影响移动端 WebUI 可用性。 |
| [#4376](https://github.com/HKUDS/nanobot/issues/4376) | 增强 | 1 👍 | **用户友好向导**：`nanobot onboard --wizard` 对非技术用户不够直观，需要更平滑的初始化配置流程。 |

**热点分析**：  
- **安装与部署**（#4360）是吸引新用户的**第一道门槛**，持续出现的安装问题需优先关注。  
- **多租户**（#936）和**移动端体验**（#4388）是项目从“个人工具”向“团队/生产环境”演进的关键需求，社区投票（👍）和重复提及表明其重要性。  
- **配置易用性**（#4376）直接关系到用户留存，是降低使用门槛的核心。

---

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列：

| 优先级 | Issue | 问题描述 | 状态 | 关联 Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **高** | [#4322](https://github.com/HKUDS/nanobot/issues/4322) | `NameError: 'session_key' is not defined` 导致代理启动崩溃（合并 `fix/prompt-caching` 后引入）。 | **已关闭** | 可能通过合并相关分支解决（未在今日 PR 中明确标注）。 |
| **中** | [#4388](https://github.com/HKUDS/nanobot/issues/4388) | iOS Safari 点击输入框页面自动放大，导致 UI 变形。 | **开放** | 无。需前端团队检查视口 meta 标签或输入框样式。 |
| **低** | [#4366](https://github.com/HKUDS/nanobot/issues/4366) | 主机设置代理时，本地模型服务器（如 Ollama）请求被错误路由到代理，导致连接失败。 | **已关闭** | [#4367](https://github.com/HKUDS/nanobot/pull/4367) |

**稳定性评估**：今日无新增崩溃性 Bug 报告，但 **iOS 移动端 UI 问题**（#4388）影响特定用户群体，需纳入下个修复周期。历史严重 Bug（#4322）已关闭，代理问题（#4366）修复已合并，整体稳定性有所提升。

---

## 6. 功能请求与路线图信号
用户提出的新功能需求及潜在纳入可能性分析：

| Issue | 需求描述 | 与现有 PR 关联 | 纳入可能性评估 |
| :--- | :--- | :--- | :--- |
| [#936](https://github.com/HKUDS/nanobot/issues/936) | **多租户网关**：单容器管理多代理。 | 间接相关：PR [#4205](https://github.com/HKUDS/nanobot/pull/4205)（邮箱后备子代理结果）可能为多代理通信提供基础。 | **高**。这是长期架构需求，社区呼声高，可能已进入路线图。 |
| [#4389](https://github.com/HKUDS/nanobot/issues/4389) | **每模型 `contextWindowTokens`**：为回退模型单独设置上下文窗口。 | 相关：PR [#4392](https://github.com/HKUDS/nanobot/pull/4392) 使工具微压缩可配置，显示对**细粒度配置**的重视。 | **中高**。与模型管理深度集成，技术复杂度低，易实现。 |
| [#4378](https://github.com/HKUDS/nanobot/issues/4378) | **Cron 级别模型/预设切换**：通过定时任务动态切换模型。 | 无直接 PR。但 PR [#4347](https://github.com/HKUDS/nanobot/pull/4347) 已改进 `MyTool` 的模型预设切换，为自动化提供基础。 | **中**。需设计安全的定时任务接口，可能作为高级功能纳入。 |
| [#4390](https://github.com/HKUDS/nanobot/issues/4390) | **多实例简化**：为“普通用户”提供更简单的多实例管理 UI/配置。 | 无直接 PR。但 PR [#4376](https://github.com/HKUDS/nanobot/issues/4376)（用户友好向导）与之目标一致。 | **中**。属于易用性范畴，可能随向导改进逐步实现。 |

**路线图信号**：社区对**多租户架构**（#936）和**细粒度模型控制**（#4389）的需求最为突出，且与近期 PR 的改进方向（配置灵活性、子代理管理）吻合，**极有可能成为下一版本（v0.2.2+）的重点功能**。

---

## 7. 用户反馈摘要
从 Issues 评论和描述中提炼的真实用户痛点与场景：

- **部署与安装痛点**：
  - Docker 环境安装失败（#4360），表明**容器化部署文档或脚本**需要加强测试。
  - 本地模型服务器需手动处理代理（#4366），**环境配置自动化**不足。
- **生产环境管理需求**：
  - 多代理需独立网关容器，**资源消耗大**（#936）。用户期望更高效的资源利用和集中管理。
- **移动端体验缺失**：
  - iOS Safari 输入框放大问题（#4388）显示**移动端适配不完善**，影响随时随地使用。
- **易用性瓶颈**：
  - 初始化向导对非技术用户不友好（#4376），**学习曲线陡峭**，可能阻碍新用户采纳。
- **高级控制需求**：
  - 希望为不同模型（尤其是回退模型）单独设置上下文窗口（#4389），显示用户对**成本与性能的精细权衡**。
  - 通过 cron 动态切换模型（#4378），反映**自动化工作流**的潜在场景。

**满意点**：近期对文件系统策略（#4202）、Feishu 流式传输（#4381）和代理处理（#4367）的修复，获得了社区积极反馈（问题关闭且无负面评论），表明核心稳定性工作得到认可。

---

## 8. 待处理积压
以下为创建时间较早、讨论相对较少或长期开放的重要议题，建议维护者关注：

| Issue | 标题 | 创建时间 | 最后更新 | 状态 | 提醒理由 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [#936](https://github.com/HKUDS/nanobot/issues/936) | Feature Request: Add Multi-Tenant Gateway for Multiple Agents | 2026-02-21 | 2026-06-17 | OPEN | **高需求、长周期**：创建近4个月，评论仅1条，但诉求重大，可能需架构设计讨论。 |
| [#3437](https://github.com/HKUDS/nanobot/issues/

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-18)

## 1. 今日速览
过去24小时，Zeroclaw 项目维持**高度活跃**状态，共处理 **50 条 Issues 更新**（新开/活跃 49，已关闭 1）和 **50 条 PR 更新**（待合并 40，已合并/关闭 10）。社区讨论聚焦于**核心架构演进**（如 WASM 插件生命周期、A2A 代理发现）与**生产稳定性**（如 cron 上下文、SSRF 防护）。多个版本跟踪器（v0.8.1/0.8.2/0.8.3/0.9.0）同步推进，显示项目处于密集迭代期。整体健康度良好，但部分高优先级功能（如桌面交互、GitHub 原生通道）仍需更多实现投入。

## 2. 版本发布
**无新版本发布**。最新稳定版仍为 v0.8.0，v0.8.1 候选版本正在集成测试中（跟踪器 #6970）。

## 3. 项目进展
今日合并/关闭的 **3 个重要 PR** 推进了关键修复与基础增强：
- **PR #7840** (`[CLOSED]`): `feat(config): rename_with_cascade for aliased entries`  
  实现配置别名的级联重命名，提升配置管理安全性（为后续 CRUD 操作奠基）。  
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7840)
- **PR #7684** (`[CLOSED]`): `fix(acp): surface history-pruner and turn-cancel as visible events`  
  将历史修剪和回合取消操作渲染为可见系统事件，改善 ACP 用户体验。  
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7684)
- **PR #7678** (`[CLOSED]`): `fix(runtime): thread shared CanvasStore into WS chat and ACP agent sessions`  
  **修复严重回归**：修复 WebSocket 聊天与 ACP 会话中 CanvasStore 未共享导致 `/canvas` 空白的问题（对应 Issue #7563）。  
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7678)

## 4. 社区热点
评论最活跃的 **3 个 Issues**（各 6 条评论）反映社区核心诉求：
- **Issue #6909**: `RFC: Computer-use support for desktop screen interaction and input control`  
  **诉求**：添加桌面 GUI 交互能力（截屏、鼠标/键盘控制），以与 OpenAI Codex 等竞品功能对齐。  
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)
- **Issue #2079**: `[Feature]: Restore GitHub as a native channel`  
  **诉求**：将 GitHub 设为一等通道，原生支持 issues/PRs/评论监听与操作，避免自定义 Webhook 胶水代码。  
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)
- **Issue #6067**: `[Feature]: Make channel reply-intent precheck configurable`  
  **诉求**：允许通道回复意图预检使用轻量模型、超时控制与耗时日志，避免阻塞主推理流程。  
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)

## 5. Bug 与稳定性
按风险等级排列，**High 风险 Bug** 需优先关注：
- **#7563** (`[CLOSED]`): `canvas-store regression in WS chat/ACP sessions` (S1 - 工作流阻塞)  
  **状态**：已由 PR #7678 修复。  
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7563)
- **#6105** (`[OPEN]`): `Agent doesn't have context of the cron job it's run` (S2 - 降级行为)  
  **问题**：cron 触发的回复缺乏作业上下文，导致 agent 无法引用自身发送的消息。  
  **关联**：与 #6954（根本原因 RFC）相关。  
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)
- **#7737** (`[OPEN]`): `carry approval attribution without a global side channel` (S2)  
  **问题**：批准归因依赖全局侧信道 `Channel::last_decision_channel()`，并发场景下状态可能被覆盖。  
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7737)
- **#7902** (`[OPEN]`): `pin http_request requests to vetted DNS addresses` (安全相关)  
  **修复**：PR #7902 已开放，为 `http_request` 工具添加解析 IP 的 SSRF 检查。  
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7902)
- **#2128** (`[OPEN]`): `Cron and heartbeat delivery still send NO_REPLY sentinel text` (S2)  
  **问题**：cron/心跳任务向频道发送字面量 `"NO_REPLY"`，造成噪音。  
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-18)

**数据周期**：过去24小时 (截至 2026-06-17 23:59 UTC)  
**报告生成时间**：2026-06-18 08:00 UTC

---

## 1. 今日速览
过去24小时，PicoClaw 项目开发活动**高度活跃**，共处理 10 个 Pull Request（6 个合并/关闭，4 个待合并）和 4 个 Issues（2 个新开/活跃，2 个关闭）。核心焦点集中于**安全性修复**（OneBot 媒体获取漏洞）、**多模型兼容性**（Gemini 3.5 Flash 支持）以及**第三方网关集成**（DeltaChat、NEAR AI）。同时发布了最新的 nightly 构建版本，表明项目迭代迅速，社区贡献持续。

---

## 2. 版本发布
- **新版本**：`v0.3.0-nightly.20260617.a16a1e15` (Nightly Build)
  - **性质**：自动化每日构建版本，包含最新合并的代码变更，**非稳定版**。
  - **主要更新**：集成今日合并的多个修复与功能，包括 Gemini 3.5 兼容性、OneBot 安全补丁、Sogou 搜索解析更新等。
  - **破坏性变更**：无明确记录，但 Nightly 版本可能存在未充分测试的回归问题。
  - **迁移注意事项**：**仅建议用于测试与开发环境**。生产环境用户应等待正式版发布，并关注 Full Changelog 以评估变更影响。
  - **链接**：[Nightly Build Artifacts](https://github.com/sipeed/picoclaw/actions) (需从 Actions 标签页下载对应构建)

---

## 3. 项目进展
今日合并/关闭的 6 个 PR 推动了项目在多个关键领域的实质性进展：

| PR 编号 | 标题 | 影响领域 | 进展意义 |
| :--- | :--- | :--- | :--- |
| [#3136](https://github.com/sipeed/picoclaw/pull/3136) | fix(gemini): set both camelCase and snake_case thought_signature | 核心/LLM 集成 | **关键兼容性修复**：使工具调用支持 Gemini 3.5 Flash 的 Agentic 推理模式，恢复该模型工具功能。 |
| [#3140](https://github.com/sipeed/picoclaw/pull/3140) | fix(onebot): block private inbound media fetches | 安全/OneBot | **高危安全修复**：阻止 OneBot  inbound 媒体 URL 被用于探测或攻击内网，修复 CVE 类问题。 |
| [#3139](https://github.com/sipeed/picoclaw/pull/3139) | fix(web): update sogou search regex | 工具/Web 搜索 | 修复 `web_search` 工具因搜狗 HTML 结构变更导致的解析失败，恢复搜索功能。 |
| [#2990](https://github.com/sipeed/picoclaw/pull/2990) | fix(web): read full session history | Web UI | 修复 Web UI 会话历史仅显示最后一条用户消息的 Bug，提升多轮对话回顾体验。 |
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) | feat(provider): add NEAR AI Cloud provider | 提供商/扩展 | **新提供商集成**：将 NEAR AI Cloud 作为一级 OpenAI 兼容提供商加入，扩展模型选择。 |
| [#3138](https://github.com/sipeed/picoclaw/pull/3138) | 리뷰기능 추가 | 功能/UI | 添加评论功能（描述为空，需查看具体提交确认细节）。 |

**整体迈进**：项目在**安全性**、**多模型支持**、**搜索工具健壮性**和**UI 体验**四个维度取得重要修复，同时**提供商生态**进一步扩大。代码库健康度得到提升。

---

## 4. 社区热点
最活跃的讨论围绕**安全与依赖维护**以及**新网关需求**：

- **最受关注 Issue**：[#3088](https://github.com/sipeed/picoclaw/issues/3088) - `[Feature] use vodozemac instead of libolm`
  - **热度**：1 条评论，2 个 👍（在 Issues 中最高）。
  - **诉求分析**：社区（核心开发者 @pbsds）强烈要求替换已停止维护且存在安全风险的 `libolm` 库，转向官方替代品 `vodozemac`。这反映了项目对**长期维护性**和**密码学安全**的重视，是影响项目可持续性的关键议题。

- **重要安全讨论**：[#3070](https://github.com/sipeed/picoclaw/issues/3070) - `OneBot inbound media URL handling allows host-side arbitrary fetch`
  - **热度**：已关闭，但关联 PR [#3140](https://github.com/sipeed/picoclaw/pull/3140) 是今日重点合并项。
  - **诉求分析**：报告了一个高危安全漏洞，项目响应迅速并已修复。体现了社区对**安全响应速度**的认可，也警示了外部输入验证的重要性。

---

## 5. Bug 与稳定性
今日报告的 Bug 均已被修复或关闭，无已知未修复的崩溃或严重回归。

| 严重程度 | Issue/PR | 问题描述 | 状态 | 修复 PR |
| :--- | :--- | :--- | :--- | :--- |
| **高危** | [#3070](https://github.com/sipeed/picoclaw/issues/3070) | OneBot 媒体 URL 可被用于主机端任意获取（内网探测/SSRF） | **已关闭** | [#3140](https://github.com/sipeed/picoclaw/pull/3140) |
| **中** | [#3111](https://github.com/sipeed/picoclaw/issues/3111) | Gemini 3.5 Flash 工具执行失败（`thought_signature` 字段缺失） | **已关闭** | [#3136](https://github.com/sipeed/picoclaw/pull/3136) |

**稳定性评估**：项目对安全与兼容性 Bug 响应迅速，今日合并的修复 PR 显著提升了核心功能的稳定性和安全性。无新增未修复 Bug 报告。

---

## 6. 功能请求与路线图信号
基于今日 Issue 与 PR 活动，可识别以下路线图信号：

- **高概率纳入下一版本**：
  - **DeltaChat 网关集成** ([#3063](https://github.com/sipeed/picoclaw/pull/3063) - `feat: add deltachat gateway`)：PR 已开放但未合并，是明确的扩展通信渠道功能，技术实现已完成，合并可能性高。
  - **NEAR AI Cloud 提供商**：已合并 ([#2917](https://github.com/sipeed/picoclaw/pull/2917))，表明“增加更多 LLM 提供商”是持续战略。

- **高优先级需求（待决策）**：
  - **替换 libolm 为 vodozemac** ([#3088](https://github.com/sipeed/picoclaw/issues/3088))：社区推动强烈，涉及安全与维护，虽无直接 PR，但极可能进入近期路线图。

- **低优先级/待澄清**：
  - **SimpleX/Tox 网关** ([#3093](https://github.com/sipeed/picoclaw/issues/3093))：标记为 `stale`，需求存在但缺乏持续推动或具体方案，优先级较低。

---

## 7. 用户反馈摘要
从 Issues 评论与描述中提炼的反馈：

- **痛点**：
  1. **安全隐忧**：对 `libolm` 等未维护依赖的担忧 ([#3088])。
  2. **模型兼容性断裂**：新模型（如 Gemini 3.5）发布导致工具调用失败 ([#3111])，影响工作流。
  3. **外部服务脆弱性**：依赖的第三方搜索/解析服务（如搜狗）HTML 变更即导致功能失效 ([#3139])，需频繁维护。
  4. **信息呈现缺陷**：Web UI 会话历史显示不完整 ([#2990])，影响用户体验。

- **满意点**：
  1. **响应速度**：安全漏洞 ([#3070]) 和关键兼容性问题 ([#3111]) 在报告后迅速修复，社区对维护团队效率表示认可。
  2. **生态扩展**：持续增加新提供商（NEAR AI）和网关（DeltaChat），满足多样化需求。

---

## 8. 待处理积压
以下 Issue/PR 创建时间较长，且涉及重要功能或修复，建议维护者优先关注：

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 说明 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| PR | [#3092](https://github.com/sipeed/picoclaw/pull/3092) | fix(skills_install): add ok checks for version and force type assertions | 2026-06-10 | `OPEN` (标记 `stale`) | 修复 `skills_install` 工具中类型断言忽略 `ok` 值的潜在 UX 问题。虽标记 stale，但属于代码健壮性修复，可评估合并。 |
| PR | [#3063](https://github.com/sipeed/picoclaw/pull/3063) | feat: add deltachat gateway | 2026-06-08 | `OPEN` | **重要功能扩展**：添加新的通信网关。PR 已开放近 10 天，技术实现完成，是社区明确需求，建议尽快评审合并。 |
| Issue | [#3088](https://github.com/sipeed/picoclaw/issues/3088) | [Feature] use vodozemac instead of libolm | 2026-06-09 | `OPEN` (高优先级) | **关键依赖替换**：涉及项目安全与长期维护。虽为 Issue，但需要主导设计并可能伴随较大重构，建议启动技术方案讨论。 |

**提醒**：`#3063`（新网关）和 `#3088`（依赖替换）是影响项目未来方向与健康度的关键积压项，建议安排专项评审。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-18)

## 1. 今日速览
项目今日保持**高度活跃**，共处理 19 个 Pull Request 和 5 个 Issues，并发布 2 个新版本（v2.1.17 及 v2.1.0）。PR 内容覆盖关键稳定性修复、安全补丁、功能增强及文档完善，显示项目在快速迭代中同步注重质量与用户体验。然而，16 个 PR 处于待合并状态，合并流水线可能存在压力，需关注处理效率以避免积压影响发布节奏。

## 2. 版本发布
### v2.1.17 (汇总发布)
- **覆盖范围**：汇总自 v2.1.1 至 v2.1.17 的所有 `package.json` 版本 bump。
- **破坏性变更**：
  1. **`@onecli-sh/sdk` 升级**：从 `0.5.0` 强制升级至 `2.2.1`，要求 OneCLI 服务器支持 `/v1` API。旧版本服务器将对所有 SDK 调用返回 `404`，官方网关与 CLI 版本现已固定。
  2. **启动强制检查**：主机启动需验证 `data/upgrade-state.json` 存在且记录当前版本升级路径，否则拒绝启动。
- **迁移注意事项**：
  - 必须同步升级 OneCLI 服务器与 CLI 至兼容版本（建议使用 v2.1.17 及以上）。
  - 确保 `upgrade-state.json` 由安装流程生成；不可变镜像部署可通过环境变量 `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1` 临时绕过检查（见 PR #2780）。

### v2.1.0 (汇总发布)
- **覆盖范围**：汇总自 v2.0.65 至 v2.1.0 的所有 `package.json` 版本 bump。
- **破坏性变更**：启动同样要求 `upgrade-state.json` 升级标记，确保版本升级可追溯。
- **迁移注意事项**：同上，建议直接升级至 v2.1.17 以获取全部修复。

## 3. 项目进展
今日合并/关闭的 PR 推动以下关键改进：
- **稳定性修复**：PR [#2797](https://github.com/nanocoai/nanoclaw/pull/2797) 修复 [#2796](https://github.com/nanocoai/nanoclaw/issues/2796)，隔离单会话失败对全局消息投递的影响，防止因单个 `outbound.db` 读取异常导致整个安装的消息传递停滞。
- **部署修复**：PR [#2794](https://github.com/nanocoai/nanoclaw/pull/2794) 恢复 managed fleets 的环境变量网关认证，解决 v2.1.17 中 LLM 认证失败（401）问题。
- **部署灵活性**：PR [#2780](https://github.com/nanocoai/nanoclaw/pull/2780) 为升级启动检查添加 `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE` 环境变量 opt-out，优化不可变镜像部署体验。
- **文档质量提升**：4 个 PR 修正技能文档细节（见社区热点），降低用户操作门槛。

## 4. 社区热点
讨论最集中的议题为 **技能（Skill）文档的精确性与完整性**，由用户 `@specterslient95-lgtm` 发起：
- **Issues**：[#2791](https://github.com/nanocoai/nanoclaw/issues/2791)（add-imessage 步骤失败）、[#2789](https://github.com/nanocoai/nanoclaw/issues/2789)（setup 技能过于简略）、[#2787](https://github.com/nanocoai/nanoclaw/issues/2787)（init-onecli 端口声明缺失）、[#2785](https://github.com/nanocoai/nanoclaw/issues/2785)（migrate-nanoclaw 标题不 descriptive）。
- **对应 PRs**：[#2792](https://github.com/nanocoai/nanoclaw/pull/2792)、[#2790](https://github.com/nanocoai/nanoclaw/pull/2790)、[#2788](https://github.com/nanocoai/nanoclaw/pull/2788)、[#2786](https://github.com/nanocoai/nanoclaw/pull/2786) 已快速响应并修复。
- **诉求分析**：社区期望文档提供**可操作、无歧义**的指导，尤其关注技能执行前的环境假设（如目录存在）和关键配置（如端口）的提前声明。这反映用户对“开箱即用”体验的重视。

## 5. Bug 与稳定性
按严重程度排列，今日报告或修复的问题：
1. **高危安全漏洞**：
   - PR [#2799](https://github.com/nanocoai/nanoclaw/pull/2799)（CVE-2026-29611）：修复 `send_file` 未限制读取路径，防止代理读取任意容器可见文件。**已修复**。
   - PR [#2800](https://github.com/nanocoai/nanoclaw/pull/2800)：修复 `ncl groups create` 路径遍历漏洞（CWE-22），通过文件夹验证器 confine 至 `GROUPS_DIR`。**已修复**。
2. **功能阻断**：
   - PR [#2804](https://github.com/nanocoai/nanoclaw/pull/2804)：修复 `ncl messaging-groups create` 因 `NOT NULL` 约束失败而完全不可用。**已修复**。
   - PR [#2802](https://github.com/nanocoai/nanoclaw/pull/2802)：为 socket client 添加请求超时与响应大小上限，避免主机无响应导致

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-18)

## 今日速览
- 项目今日保持**高度活跃**，过去24小时共处理48个Issues（26个新开/活跃，22个关闭）和50个PRs（33个待合并，17个已合并/关闭），显示开发节奏紧凑。
- 核心开发聚焦**Reborn架构完善**，特别是Projects功能栈（5个关联PR）和OAuth安全加固，同时推进多平台集成（Bedrock、WeChat、Slack）。
- 社区反馈集中于**WebUI体验**、**工具审批流程**和**自动化功能**的UX问题，多个相关Bug已修复或正在处理。
- 无新版本发布，表明功能仍处于密集开发期，尚未进入发布阶段。
- 安全与稳定性受到重视，Slack OAuth路径、模型配置错误等关键问题均获得快速修复响应。

---

## 项目进展
今日合并/关闭的重要PR：
- **#5052** ([CLOSED] [size: L] fix(reborn): live Slack OAuth path structural DM-parity)  
  修复Slack实时OAuth路径，实现与触发式路径相同的结构化DM检查，提升安全性（对应Issue #5009）。
- **#5022 + #5000** ([CLOSED] [size: XL/PR2] feat(agent-loop): output-aware no-progress detection)  
  引入内容摘要机制，使agent循环能基于输出感知进度，避免无进展误判，改进长时间运行任务的反馈。
- **#5055** ([OPEN] [size: M] [codex] Soften automation run error presentation)  
  将自动化运行错误从红色终端错误改为黄色“Needs attention”提示，并修复空状态文本重复问题，改善用户体验。
- **#3708** ([CLOSED] [size: M] chore: release)  
  版本发布自动化chore，更新多个内部crate版本（`ironclaw_common` 0.5.0、`ironclaw_skills` 0.4.0等），含破坏性变更。
- **#5035** ([CLOSED] [size: M] feat(reborn): show tool arguments live while the tool is running)  
  实现工具参数在运行时实时显示（而非完成后），增强Activity视图的透明度。

**重大功能进展**：  
Projects功能栈5个PR（#5015-#5019）全部开放，构成完整的项目管理和协作功能后端与WebUI v2集成，是Reborn架构的关键扩展。

---

## 社区热点
- **Issue #5058** ([OPEN] Bedrock unreachable from ironclaw-reborn binary)  
  新开（0评论），报告AWS Bedrock在独立二进制中不可用。关联PR #5059已立即创建，显示问题紧急且开发者响应迅速。
- **Issue #5009** ([OPEN] [security] Bring live Slack OAuth path to structural DM-parity)  
  新开（1评论），要求实时Slack OAuth路径达到与触发式路径相同的安全级别。已由PR #5052修复，体现社区对OAuth安全的关注。
- **Issue #5044** ([OPEN] NEARAI_MODEL=auto is rejected by cloud-api.near.ai)  
  新开（0评论），桌面端`NEARAI_MODEL=auto`配置导致API 400错误。关联PR #5045提供修复，反映模型配置的易用性问题。
- **Issue #1584** ([CLOSED] WeChat channel for IronClaw)  
  已关闭（3条评论），WeChat插件可用但需移植到Reborn，显示社区对多平台集成的持续需求。
- **PR #5059** ([OPEN] [size: XL] feat(bedrock): wire bedrock feature through ironclaw-reborn)  
  新开（0评论），XL级PR，解决Bedrock集成问题，可能引发关于LLM提供商抽象的技术讨论。

---

## Bug 与稳定性
**高严重度（已修复）**：
- #5058: Bedrock完全不可用（PR #5059修复）
- #5044: `auto`模型导致无限重试（PR #5045修复）
- #4764: 拒绝shell审批后工具调用挂起且无反馈（已关闭）
- #4961: "Working"指示器在响应完成后仍显示（已关闭）
- #4986: 定期自动化因工具审批永久阻塞（已关闭）

**中严重度（部分修复）**：
- #4853: 工具活动在Railway多租户环境完成后消失（已关闭）
- #4762: 工具工作流失败导致消息顺序不一致（已关闭）
- #3729: 失败的`tool_install`调用刷新后误显示为成功（**OPEN**，需关注）
- #4974: 活动工具行显示重复"..."按钮（已关闭）

**低严重度/UX（部分修复）**：
- #4723: 新对话composer悬停仅高亮顶部边框（已关闭）
- #5007: 技能验证错误在填写字段后不消失（**OPEN**）
- #5031: Slack连接卡片在配对后仍可调用且仅英文（**OPEN**）

---

## 功能请求与路线图信号
- **Projects功能栈**（PR #5015-#5019）：实现项目创建、

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-18)

## 1. 今日速览
过去24小时，LobsterAI 项目开发活跃度极高，共合并/关闭 **13 个 Pull Request**，无新开或活跃 Issues 报告。所有合并均为修复性更新和优化，聚焦于用户体验、稳定性及核心功能连续性，未引入新功能。社区讨论相对平静，无显著争议或热点话题。项目整体健康度良好，团队推进节奏稳健，持续进行技术债务清理和细节打磨。

## 2. 版本发布
**最新版本：** [LobsterAI 2026.6.15](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.15)  
**发布日期：** 2026-06-15（非今日发布，但为当前最新稳定版）  

### 主要更新内容
- **新功能：**
  - `feat: add computer use`：新增计算机操作能力，允许 AI 直接与操作系统交互（如控制鼠标、键盘）。
  - `feat(cowork): add realtime ASR voice input`：在 Cowork 协作模式中集成实时语音识别输入，支持更自然的交互。
  - `feat(cowork): improve post-compaction context continuity`：优化 OpenClaw 历史压缩后的上下文连续性，提升长会话任务延续性。
- **破坏性变更：** 无明确破坏性变更公告。
- **迁移注意事项：** 升级后建议检查计算机使用权限配置及语音输入设置；Cowork 用户可体验更流畅的语音交互和上下文保持。

## 3. 项目进展
今日合并的 13 个 PR 全部为 **修复与优化**，覆盖渲染器、核心逻辑、OpenClaw 网关及文档，推动项目在稳定性、性能和用户体验上显著前进。关键进展如下：

- **用户体验修复：**
  - [#2174](https://github.com/netease-youdao/LobsterAI/pull/2174)：修复 Cowork 滚动到底部位置偏移问题，确保新消息正确对齐。
  - [#2173](https://github.com/netease-youdao/LobsterAI/pull/2173)：保留用户消息中的换行符，提升文本可读性。
  - [#2171](https://github.com/netease-youdao/LobsterAI/pull/2171)：优化长会话中 rail 导航性能，减少卡顿。
- **稳定性提升：**
  - [#2149](https://github.com/netease-youdao/LobsterAI/pull/2149)：为 OpenClaw 网关设置 V8 堆内存上限，减少多通道长运行时的 OOM 崩溃。
  - [#2147](https://github.com/netease-youdao/LobsterAI/pull/2147)：防止启动阶段被停止时误发消息，解决启动-停止竞争条件。
  - [#2154](https://github.com/netease-youdao/LobsterAI/pull/2154)：确保手动停止流式回复后仍显示模型元数据。
- **功能可靠性增强：**
  - [#2162](https://github.com/netease-youdao/LobsterAI/pull/2162)：解决语音输入合并冲突，保留实时 ASR 流程及会话切换取消逻辑。
  - [#2153](https://github.com/netease-youdao/LobsterAI/pull/2153)：区分同名包模型与自定义模型，避免选择混淆。
  - [#2145](https://github.com/netease-youdao/LobsterAI/pull/2145)：增强上下文压缩连续性，添加任务状态和工作区摘要机制。
- **基础设施与文档：**
  - [#2175](https://github.com/netease-youdao/LobsterAI/pull/2175)：优化 README 文档。
  - [#2144](https://github.com/netease-youdao/LobsterAI/pull/2144)：更新认证门户回退 URL，适配新域名。
  - [#2172](https://github.com/netease-youdao/LobsterAI/pull/2172)：支持恢复因分享数量上限关闭的 HTML 分享，完善服务端逻辑。
  - [#1463](https://github.com/netease-youdao/LobsterAI/pull/1463)：修复长模态标题溢出问题（ stale PR 今日关闭）。

## 4. 社区热点
今日无 Issues 新增，所有 PR 均为维护性更新，**未引发大量评论或反应**。社区互动处于低活跃状态，可能因近期版本发布后团队集中于内部修复，或用户反馈渠道未通过 GitHub Issues 集中表达。建议维护者关注 Discord/论坛等非代码平台的用户讨论。

## 5. Bug 与稳定性
无新报告 Bug，但今日合并的 PR 主要针对已发现问题的修复。按影响程度排列如下：

| 严重程度 | 问题描述 | 关联 PR | 状态 |
|----------|----------|---------|------|
| **严重** | OpenClaw 网关在长运行多通道场景下 OOM 崩溃 | [#2149](https://github.com/netease-youdao/LobsterAI/pull/2149) | ✅ 已修复 |
| **高** | 手动停止流式回复后模型元数据丢失 | [#2154](https://github.com/netease-youdao/LobsterAI/pull/2154) | ✅ 已修复 |
| **高** | 启动阶段收到停止指令时可能误发消息 | [#2147](https://github.com/netease-youdao/LobsterAI/pull/2147) | ✅ 已修复 |
| **中** | Cowork 滚动位置与消息高度不同步 | [#2174](https://github.com/netease-youdao/LobsterAI/pull/2174) | ✅ 已修复 |
| **中** | 语音输入功能在分支合并后出现冲突 | [#2162](https://github.com/netease-youdao/LobsterAI/pull/2162) | ✅ 已修复 |
| **中** | 同名包模型与自定义模型选择状态混淆 | [#2153](https://github.com/netease-youdao/LobsterAI/pull/2153) | ✅ 已修复 |
| **低** | 长模态标题在对话框中溢出 | [#1463](https://github.com/netease-youdao/LobsterAI/pull/1463) | ✅ 已修复 |
| **低** | 用户消息换行符未保留 | [#2173](https://github.com/netease-youdao/LobsterAI/pull/2173) | ✅ 已修复 |

## 6. 功能请求与路线图信号
- **无新功能请求**：过去24小时无 Issues 提出新功能需求。
- **路线图信号：** 近期版本（2026.6.15）已落地 **计算机操作** 和 **实时语音输入**，表明团队正拓展 AI 交互模态。今日 PR 集中于 Cowork 模式的体验打磨（滚动、导航、上下文连续性），推测下一版本将继续深化 **协作场景的流畅性与可靠性**，而非大规模新功能。建议关注 `cowork` 标签下的后续 PR。

## 7. 用户反馈摘要
由于无 Issues 和评论数据，无法直接提炼用户反馈。但从修复 PR 可间接推断潜在痛点：
- **UI 细节问题：** 滚动不准确、消息换行丢失、模态标题溢出，影响视觉体验。
- **功能稳定性：**

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-18)

**报告生成时间：** 2026-06-18  
**数据周期：** 过去24小时 (2026-06-17 至 2026-06-18)

---

### 1. 今日速览
Moltis 社区今日保持中等活跃度，共处理 4 个 Issues（3 个新开/活跃，1 个已关闭）及 1 个待合并 Pull Request。核心讨论聚焦于**实时交互体验优化**（如回声消除）与**输出格式自定义**，显示用户对生产级部署的深度需求。无新版本发布，项目处于功能迭代与稳定性修复并行阶段。

---

### 2. 版本发布
*今日无新版本发布。*

---

### 3. 项目进展
- **唯一技术推进**：PR #1130 ([`feat: make webui rpc timeout configurable`](https://github.com/moltis-org/moltis/pull/1130)) 由 @khimaros 提交，目前待合并。该PR通过增加配置项，使 WebUI 的 RPC 调用超时时间可调，**解决了 Issue #1127**，旨在提升系统在慢速网络或高负载环境下的鲁棒性。此改进属于基础设施优化，为稳定性奠定基础。

---

### 4. 社区热点
- **最活跃讨论**：Issue #1126 ([`[Feature]: allow to configure the format of tts output`](https://github.com/moltis-org/moltis/issues/1126)) 拥有 **3 条评论**，是今日社区焦点。
    - **诉求分析**：用户强烈要求自定义 TTS（文本转语音）输出格式（如音频容器、编码、采样率等）。这反映了用户希望将 Moltis 的语音输出无缝集成到特定下游工作流（如字幕生成、多模态应用、专业音频处理）中的迫切需求，是提升产品通用性和专业度的关键功能请求。

---

### 5. Bug 与稳定性
今日报告两个新 Bug，均暂无修复 PR：
1.  **严重 - 实时交互阻塞**：Issue #1129 ([`[Bug]: lack of echo cancellation causes agent to retrigger itself in live mode`](https://github.com/moltis-org/moltis/issues/1129))。在实时对话模式下，缺乏回声消除导致 AI 代理误识别自身输出并重复触发，可能造成对话循环崩溃。**影响核心用户体验，需优先关注。**
2.  **中等 - 输出准确性**：Issue #1128 ([`[Bug]: transcription errors with self-hosted whisper.cpp`](https://github.com/moltis-org/moltis/issues/1128))。用户报告在使用自托管 `whisper.cpp` 时出现转录错误，可能指向模型兼容性、配置参数或预处理问题。该问题已关闭，但关闭原因未详述，需确认是否为临时规避或已内部修复。

---

### 6. 功能请求与路线图信号
今日两个新功能请求，均指向“输出与集成”方向：
- **高优先级信号**：**TTS 输出格式配置 (#1126)**。因社区讨论活跃（3 评论）且涉及核心 AI 能力输出，该功能很可能被纳入近期路线图，以满足高级用户的集成需求。
- **辅助功能**：**添加复制 + 导出为 Markdown (#1131)**。此请求提升聊天内容复用的便利性，实现成本相对较低，可能作为效率改进项在后续版本中跟进。
- **关联 PR**：PR #1130 的 RPC 超时配置虽非直接功能，但为上述功能在复杂网络环境下的稳定调用提供了基础设施支持。

---

### 7. 用户反馈摘要
从 Issues 描述及有限评论中提炼关键反馈：
- **核心痛点**：
    - **输出可控性不足**：用户对 TTS 输出格式的“黑盒”状态不满，渴望更多控制权以适应专业场景。
    - **自托管环境稳定性**：在非标准部署（如自托管 `whisper.cpp`）下，转录准确性和实时音频处理（回声）出现兼容性问题，表明项目在多样化部署场景的测试覆盖可能不足。
- **使用场景**：反馈者多为技术熟练用户，尝试将 Moltis 用于**实时对话系统**和**自托管/离线环境**，对系统鲁棒性和集成灵活性要求极高。
- **满意点**：用户主动提交详细 Bug 报告（含复现步骤和预检清单）和功能请求，体现了对项目发展的积极参与和期待。

---

### 8. 待处理积压
基于当前数据，需维护者关注以下**未分配且讨论活跃**的 Issue：
- **Issue #1126** ([TTS 输出格式配置](https://github.com/moltis-org/moltis/issues/1126))：创建于 2026-06-16，更新于昨日，拥有 3 条评论，但状态仍为 `OPEN` 且无明确负责人。该功能请求社区需求明确，建议评估其实现复杂度与对现有架构的影响，并尽快纳入开发计划或给出明确反馈，以维持社区贡献热情。

---
**报告说明**：本报告基于 GitHub 公开数据自动生成，旨在提供客观的项目健康度快照。建议维护者结合内部开发看板进行综合决策。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-06-18)

## 1. 今日速览
过去24小时，CoPaw 项目保持极高活跃度，共处理 45 个 Issues 和 50 个 Pull Requests，并同步发布两个新版本（v1.1.12 稳定版与 v1.1.12-beta.2）。社区讨论聚焦于**稳定性问题**（如进程冻结、崩溃、功能失效）与**核心功能改进**（如上下文压缩、定时任务、频道集成）。尽管修复工作密集，但新报告的 Bug 数量仍较多，尤其在向量存储、多频道消息路由及跨平台兼容性方面，项目整体处于 **“高速迭代与稳定性攻坚并行”** 阶段。

## 2. 版本发布
### v1.1.12 (稳定版)
- **新增功能**：
  - **Console 模型页重构**：支持提供商聚合、统一卡片 UI 与布局优化 ([#5203](https://github.com/agentscope-ai/QwenPaw/pull/5203))
  - **简单模式**：新增扁平导航与会话按更新时间排序 ([#5222](https://github.com/agentscope-ai/QwenPaw/pull/5222))
- **迁移注意事项**：无破坏性变更报告，建议所有用户升级以获取最新模型管理体验。

### v1.1.12-beta.2 (测试版)
- **性能优化**：移除 Agent 配置中的不必要深拷贝操作 ([#5240](https://github.com/agentscope-ai/QwenPaw/pull/5240))
- **功能改进**：Console 会话列表支持按标题过滤 ([#5178](https://github.com/agentscope-ai/QwenPaw/pull/5178))
- **注意**：此为预览版本，不建议生产环境使用。

## 3. 项目进展
今日合并/关闭的 PR 涵盖关键修复与架构升级：
- **核心架构升级**：版本号跃升至 `2.0.0a1`，正式开启向 **AgentScope 2.0** 的迁移工作 ([#5281](https://github.com/agentscope-ai/QwenPaw/pull/5281))。
- **稳定性修复**：
  - 修复 ChromaDB Rust 绑定导致的 macOS 崩溃问题，增加异步探针检测 ([#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271))
  - 修复 Tauri 桌面版插件依赖安装循环弹窗问题 ([#5260](https://github.com/agentscope-ai/QwenPaw/pull/5260))
  - 重构小艺频道为双 WebSocket 连接，解决回复失败问题 ([#5274](https://github.com/agentscope-ai/QwenPaw/pull/5274))
- **功能完善**：
  - 增加 Agent 头像上传与显示支持 ([#5263](https://github.com/agentscope-ai/QwenPaw/pull/5263))
  - 新增 `qwenpaw cron update` 命令以修改现有定时任务 ([#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210))
  - 添加 OpenClaw 配置迁移工具 ([#5276](https://github.com/agentscope-ai/QwenPaw/pull/5276))

## 4. 社区热点
评论数最多的 Issues 反映核心痛点：
- **[#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)** (16 评论)：子 Agent 触发上下文压缩时进程冻结。**诉求**：需要超时保护与更稳健的压缩逻辑，避免全应用无响应。
- **[#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)** (12 评论)：Agent 生成的定时任务无法自动触发且不可编辑。**诉求**：修复定时任务调度器集成，支持手动配置。
- **[#1911](https://github.com/agentscope-ai/QwenPaw/issues/1911)** (22 评论，已关闭)：小艺频道消息接收但回复失败。**诉求**：解决华为小艺开放平台协议兼容性与连接稳定性（相关修复已合并 [#5274](https://github.com/agentscope-ai/QwenPaw/pull/5274)）。

## 5. Bug 与稳定性
按严重程度排列今日新报/活跃 Bug：
- **Critical**：
  - **[#5234](https://github.com/agentscope-ai/QwenPaw/issues/5234)**：云端部署存在 Prompt Injection 导致的 RCE 及隧道逃逸风险。**状态**：已报告，待修复。
- **Severe**：
  - **[#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)**：上下文压缩引发进程冻结（已有修复 PR [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) 添加超时）。
  - **[#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967)**：执行过程陷入死循环无法退出。
  - **[#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162)**：对话思考逻辑死循环。
- **High**：
  - **[#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)**：上下文压缩保留阈值计算错误导致信息完全丢失。
  - **[#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259)**：Windows 上向量索引无法持久化，依赖“启动时重建”选项。
  - **[#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)**：定时任务不触发且不可编辑。
- **Medium**：
  - **[#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140)**：v1.1.11.post2 附件下载失败（docx/pdf 报 404）。
  - **[#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264)**：飞书群聊消息错误回复至私聊窗口。
  - **[#5237](https://github.com/agentscope-ai/QwenPaw/issues/5237)**：uv 安装后钉钉频道配置不生效（安装包版本正常）。
  - **[#5284](https://github.com/agentscope-ai/QwenPaw/issues/5284)**：ChromaDB 探针因集合名以下划线开头失败。

## 6. 功能请求与路线图信号
- **UI/UX 增强**：
  - **[#4077](https://github.com/agentscope-ai/QwenPaw/issues/4077)**：请求全局字体缩放与文件路径超链接支持（需求持续存在）。
- **管理功能**：
  - **[#5263](https://github.com/agentscope-ai/QwenPaw/pull/5263)**：Agent 头像上传功能已实现，预计纳入下一版本。
  - **[#5276](https://github.com/agentscope-ai/QwenPaw/pull/5276)**：OpenClaw 配置迁移工具，降低用户迁移成本。
- **运维改进**：
  - **[#5272](https://github.com/agentscope-ai/QwenPaw/pull/5272)**：桌面版支持固定端口配置，便于部署。
  - **[#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210)**：`cron update` 命令完善定时任务管理。

## 7. 用户反馈摘要
- **稳定性焦虑**：多个用户报告进程冻结/崩溃（上下文压缩、ChromaDB、死循环），严重影响连续使用体验，期望获得更健壮的错误隔离与恢复机制。
- **功能完整性**：定时任务、附件下载、群聊消息路由等基础功能在特定场景下失效，用户质疑核心功能的可靠性。
- **升级体验差**：内置技能禁用状态在升级后丢失 ([#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262))，用户需重复配置，反映配置持久化设计缺陷。
- **平台差异困惑**：uv 安装与安装包行为不一致（钉钉频道）、Windows 与 macOS 的向量索引表现不同，用户期望跨平台一致性。
- **积极信号**：小艺频道修复 ([#5274](https://github.com/agentscope-ai/QwenPaw/pull/5274))、头像上传 ([#5263](https://github.com/agentscope-ai/QwenPaw/pull/5263)) 等改进获得社区正面反馈。

## 8. 待处理积压
- **[#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)**：迁移后端至 AgentScope 2.0（创建于 2026-05-27，11 评论，2 👍）。此为重大架构变更，影响所有依赖，需制定详细迁移指南与兼容层，目前处于规划阶段。
- **[#4057](https://github.com/agentscope-ai/QwenPaw/issues/4057)**：支持 AgentScope 链路追踪初始化（创建于 2026-05-06，5 评论）。用户希望集成监控平台（如 Arize Phoenix），但缺乏统一初始化入口，需设计配置方案。
- **[#4232](https://github.com/agentscope-ai/QwenPaw/issues/4232)**：SafeJSONSession 并发写入导致会话状态覆盖（创建于 2026-05-12，3 评论）。此为数据一致性隐患，需引入文件锁或事务机制，优先级高但尚未安排。

---
**报告生成时间**：2026-06-18  
**数据来源**：CoPaw GitHub (github.com/agentscope-ai/CoPaw) 过去 24 小时动态  
**分析师备注**：项目迭代迅速，但稳定性与数据一致性风险需优先关注。AgentScope 2.0 迁移是下一阶段核心任务，建议社区提前测试并提供反馈。

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