# OpenClaw 生态日报 2026-05-02

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-05-02 10:35 UTC

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

# OpenClaw 项目动态日报 (2026-05-02)

## 今日速览

OpenClaw 项目今日保持**极高活跃度**，24小时内处理 500 条 Issues 更新（447 新开/活跃，53 关闭）和 500 条 PR 更新（441 待合并，59 已合并/关闭）。社区焦点集中在**性能回归修复**与**安全加固**两大方向：多个高热度 Issue 报告了 Gateway 在 4.25+ 版本中的稳定性退化，而 PR #76031 已关闭的关键安全补丁表明项目正在积极应对审计发现。尽管无新版本发布，但大量修复性 PR 处于开放状态，显示维护团队正在快速响应社区反馈。项目整体健康度呈现**高活跃、高压力**状态，需重点关注 ARM64 设备（Raspberry Pi）和 macOS 平台的稳定性问题。

---

## 版本发布
*无新版本发布。最新稳定版仍为 2026.4.26（be8c246），但该版本存在多项已知严重回归问题。*

---

## 项目进展

### 已合并/关闭的重要 PR
- **PR #76031** (已关闭) - `[security]` 全面安全加固：修复 `python_orchestrator` shell 注入漏洞、清理 Zod 死代码、补充 DeepSeek 定价数据。**（P0 级别修复）**
- **PR #75559** (已关闭) - `[discord]` 兼容 Discord API 的 snake_case 字段（`owner_id`、`parent_id`），修复线程消息解析。
- **PR #75845** (已关闭) - `[telegram]` 修复插件命令主题会话文件元数据持久化问题。
- **PR #76037** (已关闭) - `[discord]` 在 `describeDiscordMessageTool` 中正确广告 `upload-file` 操作。
- **PR #76005** (已关闭) - `[perf]` 缓存 `resolveTranscriptPolicy` 结果，消除每轮 ~0.9 秒的同步开销。

### 开放中的关键 PR
- **PR #76021** (开放) - `[webchat]` 为 Control UI 添加服务器端音频听写功能，支持浏览器录音转文本。
- **PR #76034** (开放) - `[config-ui]` 在配置表单中引入“基本/高级”字段分割，简化用户界面。
- **PR #75924** (开放) - `[loop-detection]` 阻止跨工具错误级联，避免无效重试消耗令牌。
- **PR #76036** (开放) - `[slack]` 修复 Slack hook 内容回退逻辑，正确处理仅含 attachment 的警报消息。

---

## 社区热点

以下 Issues 讨论最活跃（按评论数排序），反映了当前社区的核心关切：

| Issue | 主题 | 评论数 | 严重性 | 链接 |
|-------|------|--------|--------|------|
| #12590 | `memoryFlush` 触发不规律（每两次自动压缩仅触发一次） | 19 | 中 | [查看](https://github.com/openclaw/openclaw/issues/12590) |
| #73323 | Gateway 运行时降级：定价获取 60s 超时、Telegram 轮询停滞、RPC 缓慢（跨 4.23/4.25/4.26） | 15 | **关键** | [查看](https://github.com/openclaw/openclaw/issues/73323) |
| #73303 | v2026.4.26：Gateway 重启挂起 3-4 分钟（macOS LaunchAgent 模式） | 12 | 高 | [查看](https://github.com/openclaw/openclaw/issues/73303) |
| #43735 | Skills 未从 `~/.openclaw/workspace/skills/` 加载 | 12 | 中 | [查看](https://github.com/openclaw/openclaw/issues/43735) |
| #62505 | Coding Agent 完全无响应（2026.4.2 前正常） | 12 | **关键** | [查看](https://github.com/openclaw/openclaw/issues/62505) |

**热点分析**：
- **性能退化集中爆发**：`#73323` 和 `#73303` 均指向 4.25+ 版本的 Gateway 稳定性问题，涉及网络 I/O、定时器和进程管理多个子系统，影响多通道（Telegram、Slack、WhatsApp）可靠性。
- **核心功能受损**：`#62505` 报告 Coding Agent 失效，直接影响生产力场景；`#43735` 涉及插件生态的 Skills 加载机制，影响扩展性。
- **平台特定问题**：`#73303` 仅限 macOS，而 `#75703`（Raspberry Pi 5）显示 ARM64 设备在 4.24+ 普遍存在 WS 处理器饥饿问题。

---

## Bug 与稳定性

### 关键严重性（已确认影响生产环境）
1. **#45438** - `structuredClone` 在会话存储缓存中导致原生内存泄漏（~1GB/min），RSS 快速升至 4-5GB。**（无 PR，需优先修复）**
2. **#75882** (已关闭) - Gateway 事件循环停滞数十至数百秒，导致跨通道延迟、回复丢失、连接断开。**（已修复但需验证是否复发）**
3. **#75598** (已关闭) - 低功耗设备（N355 Proxmox）上 EventLoopDelayMaxMs  spikes 6-24s，会话卡死（4.23 正常，4.25+ 复发）。
4. **#75703** - Raspberry Pi 5 / ARM64 上 Gateway WS 处理器 100% CPU 自旋，4.24→4.29 均复现，仅 4.23 正常。

### 高严重性
1. **#62505** - Coding Agent 仅输出模糊状态更新，无实际工作（回归）。
2. **#72808** - Slack 连接静默丢失， bot 在线但无响应。
3. **#73655** - 插件重启泄漏 triad：Manifest EADDRINUSE 重试循环、信号处理器累积、同步 I/O 导致 WS 握手饥饿。
4. **#75283** (已关闭) - Gateway 重复触发 `runtime-deps` pnpm 安装，耗尽事件循环。

### 中严重性
1. **#12590** - `memoryFlush` 不规律触发，可能导致内存管理失效。
2. **#73323** - 多子系统网络/定时器退化（定价获取、Telegram 轮询、RPC）。
3. **#43735** - Skills 仅部分加载到 Agent 上下文。
4. **#75137** - TUI 进程空闲时占用 89-99% CPU（busy-loop）。

**修复状态**：多数关键 Bug 已有 Issue 跟踪，但**仅少数有对应 PR**（如 #75882、#75598 已关闭）。`#45438`（内存泄漏）和 `#75703`（ARM64 饥饿）暂无修复 PR，需紧急关注。

---

## 功能请求与路线图信号

### 高需求功能（结合 👍 数与评论活跃度）
1. **#60572** - **多槽内存架构**（5 评论，3 👍）：替换单 `plugins.slots.memory` 为多目的槽，允许多个内存提供商同时处理不同内存层。**（架构级改进，可能纳入下个主要版本）**
2. **#12219** - **技能权限清单标准**（5 评论）：引入 `skill.yaml` 声明技能所需权限，实现安装前审查。**（安全关键，与近期安全审计方向一致）**
3. **#11665** - **Webhook 会话重用**（6 评论）：当 `sessionKey` 一致时复用现有会话，支持多轮对话。**（文档已承诺但未实现）**

### 其他值得关注的需求
- **#147** - Brabble 作为 Clawdis 节点实现分布式语音唤醒（9 评论，0 👍）：树莓派部署 + Tailscale 组网。
- **#71736** - Control UI 贡献槽位数据驱动化（8 评论，0 👍）：为插件聊天模式、审批卡片等提供 SDK 表面。
- **#41140** - exec 审批支持命令内容拒绝模式（5 评论，1 👍）：防止通过允许的 shell 绕过路径白名单。

---

## 用户反馈摘要

从 Issues 评论与描述中提炼的真实痛点：

### 生产环境稳定性担忧
- **版本升级恐惧**：多位用户报告从 4.23 升级至 4.25+ 后出现“慢性”性能退化（`#73323`、`#75598`），导致对自动升级的抵触。
- **硬件特定崩溃**：ARM64 设备（Raspberry Pi 5）在 4.24+ 普遍无法正常启动（`#75703`），Apple Silicon 内存嵌入可能导致网关崩溃（`#44202`）。
- **重启可靠性**：macOS 用户遭遇 3-4 分钟重启挂起（`#73303`），影响服务连续性。

### 功能回归影响工作流
- **Coding Agent 停摆**：`#62505` 用户描述“数周来一直产出工作，现在只做模糊状态更新”，直接影响开发效率。
- **通道连接静默失败**：Slack（`#72808`）、Telegram 媒体下载（`#45799`）、Discord 线程（`#74617`）出现无错误提示的失效，增加调试成本。
- **会话管理问题**：多工具回放产生孤立 `tool_use` 块导致 Anthropic 400 错误（`#74907`）；心跳会话文件累积（`#65564`）。

### 用户体验细节
- **Control UI 卡顿**：`#45698` 报告“打开一段时间后逐渐卡死”，`#71992` 报告 WebChat 每条回复重复两次。
- **TUI 资源占用**：`#75137` 用户指出 TUI 空闲时 89-99% CPU，违背“轻量客户端”预期。
- **配置复杂性**：`#61005` 反映 Android  onboarding 在运营商离线时“Connect”按钮禁用，流程卡死。

### 积极反馈
- **安全审计响应**：PR #76031 的全面修复获得社区认可（虽无 👍 但评论积极）。
- **性能优化见效**：PR #76005 的缓存

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告 (2026-05-02)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态呈现 **“核心承压、多线探索”** 的态势。以 **OpenClaw** 为事实标准的通用型项目，正面临 4.25+ 版本引发的系统性性能回归与稳定性危机，社区处于高压力修复状态。与此同时，多个分支项目在 **垂直领域深化**（如 IronClaw 的法律套件）、**硬件场景适配**（如 PicoClaw 的嵌入式支持）和 **架构激进重构**（如 IronClaw 的 Reborn）方向上积极演进。整体生态从“功能堆叠”转向 **“稳定性、安全性与场景精细化”** 的深度优化阶段，但核心项目的质量波动正考验着用户信任与社区凝聚力。

## 2. 各项目活跃度对比

| 项目 | 24h 新开 Issues | 24h 活跃 PRs (待合并) | 24h 已合并/关闭 PRs | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 447 | 441 | 59 | 无 (最新 2026.4.26) | **高活跃、高压力**：社区反馈海量，但关键性能回归未解，压力巨大。 |
| **PicoClaw** | 12 | 9 (总24，15已合) | 15 | Nightly (v0.2.8-nightly.20260502) | **活跃且成熟**：问题响应快，PR 合并率高，迭代节奏健康。 |
| **IronClaw** | 30 | ~32 (总50，合并率32%) | 16 | 无 (最新 v0.26.0) | **良好但需关注阻塞**：讨论深度高，但 PR 合并缓慢，架构迁移期效率待提升。 |
| **LobsterAI** | 0 | 4 (均 stale) | 0 | 无 | **可能停滞**：无新反馈，关键 PR 积压超 30 天，社区活跃度低。 |
| **CoPaw** | 7 | 3 | 0 | 无 | **快速迭代但压力**：新问题不断涌现，处理速度可能跟不上反馈增长。 |
| *其他 (NanoClaw等)* | *无活动/数据缺失* | *无活动/数据缺失* | *无活动/数据缺失* | *无* | *低活跃或休眠* |

## 3. OpenClaw 在生态中的定位
- **优势**：无可争议的 **社区规模与活跃度核心**。24 小时处理 1000+ 社区互动（Issues+PRs），其 Issue 和 PR 数量级远超其他项目总和，定义了生态的技术议程与最佳实践。
- **技术路线差异**：采用 **集中式 Gateway 架构**，统一管理多通道（Discord/Telegram/Slack）与插件，追求“一个核心走天下”。这与 PicoClaw 的轻量嵌入式、IronClaw 的微服务化 Reborn 架构形成鲜明对比。
- **社区规模对比**：OpenClaw 的社区规模是其他项目的 **10 倍以上**（以日互动量计）。其问题（如 #73323）能迅速成为全生态关注的“公共议题”，而其他项目的问题多局限于自身用户群。

## 4. 共同关注的技术方向
多项目共同涌现的需求，反映了生态的 **共性挑战**：
1.  **生产环境稳定性与性能回归**：
    - **涉及项目**：OpenClaw (Gateway 超时、重启挂起 #73323/#73303)、PicoClaw (Android 客户端数据访问 #2744)、CoPaw (Ollama 记忆丢失 #3991)。
    - **诉求**：解决版本升级后的“慢性病”，确保长期运行可靠，尤其在 ARM64/macOS 等特定平台。
2.  **安全加固从审计响应转向主动设计**：
    - **涉及项目**：OpenClaw (shell 注入修复 PR #76031)、PicoClaw (技能权限清单 #12219)、IronClaw (Reborn 资源治理 PR #3159/#3167)。
    - **诉求**：超越补丁式修复，在架构层（如权限模型、资源隔离）建立安全基座，满足企业部署需求。
3.  **前沿 LLM 提供商集成与兼容性**：
    - **涉及项目**：OpenClaw (DeepSeek 定价数据)、PicoClaw (OpenRouter 推理泄漏 #2745、DeepSeek 流式解析 #2740)、IronClaw (DeepSeek 工具调用失败 #3201)、CoPaw (DeepSeek 高级思考模式 #3996)。
    - **诉求**：快速适配新模型（尤其推理模型）的独特协议（如 `reasoning_content`），处理流式响应、参数控制等细节，避免功能降级。
4.  **用户体验一致性与细节打磨**：
    - **涉及项目**：OpenClaw (Control UI 卡顿 #45698)、PicoClaw (禁用 Enter 发送 #2376)、LobsterAI (通知渠道显示缺陷 PR #1191)、CoPaw (微信/浏览器操作不同步 #4000)。
    - **诉求**：统一多端（Web/移动/桌面）交互逻辑，修复误导性 UI，优化资源占用（如 TUI CPU 占用 #75137）。

## 5. 差异化定位分析
| 维度 | OpenClaw | PicoClaw | IronClaw | LobsterAI | CoPaw |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 通用型全功能 AI 助手，多通道聚合 | 嵌入式/移动端优先，轻量部署，硬件集成（I2C/SPI/UART） | 法律垂直领域工作流自动化，企业级审批与合规 | OpenClaw 增强分支，专注配置同步与通知渠道管理 | 模型容错与记忆系统增强，多平台体验统一 |
| **目标用户** | 广泛开发者、个人用户、实验性场景 | 嵌入式开发者、IoT 爱好者、资源受限设备用户 | 法律专业人士、企业合规部门、需要严格审计的团队 | 需要企业级通知与配置管理的 OpenClaw 用户 | 关注高可用性与多端同步的终端用户 |
| **技术架构** | 单体 Gateway 架构，插件化扩展 | 轻量级核心，针对嵌入式优化，Nightly 迭代快 | **Reborn 架构**（服务组合、义务、资源治理），微服务化重构 | 基于 OpenClaw 的配置层增强，修改同步逻辑 | 可能基于 AgentScope 框架，强化记忆与 MCP 客户端 |

## 6. 社区热度与成熟度
- **快速迭代阶段（高活跃、问题驱动）**：
    - **OpenClaw**：日互动量巨大，但大量问题为 **严重回归 Bug**，处于“救火”状态，成熟度受质疑。
    - **PicoClaw**：活跃且 **合并效率高**，问题响应与修复闭环快，显示健康的贡献者流程。
    - **

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
过去24小时，PicoClaw 项目保持高度活跃，共处理 12 个 Issues 和 24 个 Pull Requests，其中 15 个 PR 已成功合并或关闭，体现了高效的社区协作与代码集成速度。项目发布了新的 nightly 构建版本（v0.2.8-nightly.20260502），持续迭代核心功能。社区焦点集中在 OpenRouter 推理模型的内容泄漏修复、Android 客户端数据访问问题，以及多项新功能请求（如邮件通道、串口工具支持），反映出用户对生产环境稳定性和扩展性的迫切需求。

## 2. 版本发布
- **新版本**: `v0.2.8-nightly.20260502.6e1fab80` (Nightly Build)
  - **性质**: 自动化构建版本，可能包含未充分测试的更改，建议谨慎使用。
  - **更新内容**: 基于 `main` 分支的每日构建，集成了近期合并的安全加固、提供商扩展及工具修复。完整变更日志参考 [v0.2.8 → main 对比](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)。
  - **迁移注意**: Nightly 版本不保证向后兼容，生产环境应使用稳定版（v0.2.8）并关注后续正式发布。

## 3. 项目进展
今日合并/关闭的 PR 主要聚焦于**文档完善、紧急修复与基础设施优化**：
- **PR #2746** ([链接](https://github.com/sipeed/picoclaw/pull/2746)): 合并。为 OpenRouter 推理模型添加了抑制推理内容输出的预设配置与文档，直接回应了用户报告的“推理泄漏”问题（Issue #2745）。
- **PR #2747** ([链接](https://github.com/sipeed/picoclaw/pull/2747)): 合并。更新了官方微信群二维码，维护社区沟通渠道。
- **PR #2739** ([链接](https://github.com/sipeed/picoclaw/pull/2739)): 合并。修复了 Telegram 通道对 Markdown 管道表格的渲染问题，提升多平台消息兼容性。
- **PR #2743** ([链接](https://github.com/sipeed/picoclaw/pull/2743)): 合并。增强了 DeepSeek 模型在非官方代理后的自动检测能力，完善了提供商兼容性逻辑。

**整体推进**: 项目在**提供商适配**（OpenRouter/DeepSeek）、**通道稳定性**（Telegram）和**文档实用性**方面取得明确进展，安全架构的长期合并工作（如 `security_shield_v2` 相关 PR）已基本完成，为 v0.2.8 稳定版奠定了基础。

## 4. 社区热点
- **最活跃 Issue**: **#2745** ([链接](https://github.com/sipeed/picoclaw/issues/2745)) - “OpenRouter reasoning model leaks thinking into assistant content”。该问题于今日新开，立即引发维护者关注，并催生了 PR #2746 的快速合并。诉求核心是确保推理模型（如 Nemotron）的中间思考过程不会污染最终回复，影响用户体验。
- **高讨论度 Issue**: **#2421** ([链接](https://github.com/sipeed/picoclaw/issues/2421)) - “Add email as native channel”。该功能请求已获得 4 条评论，反映了企业或保守网络环境中用户对非即时通讯通道的强烈需求，可能成为下一周期的重要功能。
- **高价值 PR**: **#2740** ([链接](https://github.com/sipeed/picoclaw/pull/2740)) - “fix(deepseek): capture reasoning_content from streaming”。虽为 OPEN 状态，但更新活跃，针对 DeepSeek 流式响应中 `reasoning_content` 被丢弃的问题进行修复，与 #2745 问题同属“推理内容处理”范畴，是当前技术焦点。

## 5. Bug 与稳定性
按严重程度与报告时间排序：
1.  **严重 - 输出内容错误**:
    - **#2745** ([链接](https://github.com/sipeed/picoclaw/issues/2745)): OpenRouter 推理模型将思考过程混入最终回复。**状态**: 新报告。**修复**: PR #2746 已提供配置方案，但核心流式解析逻辑可能需进一步代码修复（参考 PR #2740 对 DeepSeek 的类似处理）。
2.  **中高 - 功能失效**:
    - **#2744** ([链接](https://github.com/sipeed/picoclaw/issues/2744)): Android v0.2.8 客户端无法访问任何标签页数据。**状态**: 新报告。**影响**: 移动端核心功能受损。**修复**: 暂无直接关联 PR，需优先调查。
3.  **中 - 认证与配置**:
    - **#2602** ([链接](https://github.com/sipeed/picoclaw/issues/2602)): OAuth 认证在 OpenAI 和 Antigravity 提供商上失败。**状态**: 活跃（stale），自 4 月 20 日未更新。**影响**: 影响依赖 OAuth 的用户登录。
    - **#1757** ([链接](https://github.com/sipeed/picoclaw/issues/1757)): 定时任务（cron）触发时出现 channel 错误。**状态**: 活跃（stale），自 5 月 1 日未更新，但问题历史较长（3月18日）。**影响**: 自动化任务可靠性。

## 6. 功能请求与路线图信号
今日新增及活跃请求，结合近期合并的 PR 判断优先级：
- **高潜力（近期可能实现）**:
  - **邮件通道** (#2421): 需求明确，使用场景清晰。项目已具备多通道架构，技术可行性高，可能进入下一功能迭代。
  - **串口（UART）工具支持** (#2649): 嵌入式场景刚需。项目已有 I2C/SPI 工具，扩展 UART 符合工具集完善路线，且 PR #2649 已提供初步方案。
- **中长期（需评估设计）**:
  - **OAuth 2.1 + PKCE 支持** (#2546): 涉及安全协议升级，与当前“安全加固”主线（如 PR #2325 技能白名单）方向一致，但实现复杂度较高。
  - **GitHub Copilot 提供商支持** (#2652): 需评估 Copilot API 兼容性与授权机制，可能作为第三方提供商扩展。
- **体验优化**:
  - **禁用 Enter 键发送** (#2376): 移动端输入体验改进，实现成本低，可快速纳入客户端优化列表。

## 7. 用户反馈摘要
- **核心痛点**:
  - **生产环境稳定性**: 定时任务 channel 错误 (#1757)、OAuth 认证失败 (#2602) 表明在自动化与企业集成场景下，连接可靠性仍需加强。
  - **移动端体验**: Android 客户端数据访问问题 (#2744) 和输入键位冲突 (#2376) 显示移动端功能完整性与交互细节有待完善。
  - **高级模型支持**: 推理模型内容泄漏 (#2745) 和 DeepSeek 流式解析 (#2740) 反映用户正在使用前沿模型，对协议兼容性要求极高。
- **积极信号**:
  - 用户主动贡献 PR（如 PR #2647 启用 web_search 工具默认配置），显示社区对工具生态的投入。
  - 对安全特性（技能白名单、会话隔离）的 PR 获得合并，说明项目正响应企业级部署需求。

## 8. 待处理积压
以下为创建时间较长、评论较多或标记为 `stale` 但未关闭的重要条目，建议维护者优先评估：
- **Issues**:
  - **#1757** ([链接](https://github.com/sipeed/picoclaw/issues/1757)): cron 任务 channel 错误（创建于 2026-03-18，6 评论）。长期未决的定时任务可靠性问题。
  - **#2376** ([链接](https://github.com/sipeed/picoclaw/issues/2376)): 禁用 Enter 键发送（创建于 2026-04-06，4 评论，👍1）。移动端高频体验问题。
  - **#2546** ([链接](https://github.com/sipeed/picoclaw/issues/2546)): OAuth 2.1 + PKCE 支持（创建于 2026-04-16，3 评论）。企业级安全需求。
- **Pull Requests**:
  - **#2655** ([链接](https://github.com/sipeed/picoclaw/pull/2655)): “restore verified unified kernel baseline”（创建于 2026-04-24，OPEN）。涉及核心运行时安全基线恢复，技术重要性高，但讨论停滞。
  - **#2647** ([链接](https://github.com/sipeed/picoclaw/pull/2647)): “enable web_search tool config YAML support”（创建于 2026-04-24，OPEN）。工具配置改进，已获评论，需合并以完善默认行为。
  - **#2626** ([链接](https://github.com/sipeed/picoclaw/pull/2626)): “support native audio input for multimodal LLMs”（创建于 2026-04-22，OPEN）。多模态支持的关键扩展，技术价值高。

---
**报告生成说明**: 本报告基于 GitHub API 数据于 2026-05-02 生成，聚焦过去 24 小时活动。所有链接均为 GitHub 原生页面。项目健康度评估：**活跃且成熟**，PR 合并率高，社区贡献多样；但需关注新开 Bug 的响应速度与长期积压问题的清理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
IronClaw 项目今日保持高活跃度，共处理 **50 个 PR** 和 **30 个 Issues**，但合并/关闭率相对较低（PR 合并率 32%，Issues 关闭率 30%），表明大量功能处于开发中期或评审阶段。工作重心明确分为两大主线：1) **Reborn 架构迁移**（占活跃 Issues 约 40%），涉及主机运行时服务组合、义务处理、资源治理等底层重构；2) **法律技能套件** 开发，由新贡献者推动，已完成文档导出、搜索、聊天界面等核心功能。社区讨论围绕架构设计细节和工具集成问题展开，项目整体健康度良好但需关注部分用户体验阻塞问题。

---

## 2. 版本发布
*无新版本发布。最新稳定版本仍为 v0.26.0（2026-04-21）。*

---

## 3. 项目进展 (今日合并/关闭的重要 PR)
今日共合并/关闭 **16 个 PR**，关键进展如下：

| PR | 类型 | 影响范围 | 说明 |
| :--- | :--- | :--- | :--- |
| [#3172](https://github.com/nearai/ironclaw/pull/3172) | 修复 | 发布/安装 | 升级 `cargo-dist` 至 0.31.0，**修复 v0.26.0 安装器在 Linux 平台的问题**（关联 #2818）。 |
| [#3157](https://github.com/nearai/ironclaw/pull/3157) | 修复 | 引擎/门控 | 修复审批门在 CodeAct 脚本中的错误处理，使 `GatePaused` 能正确暂停脚本而非抛出运行时错误。 |
| [#3159](https://github.com/nearai/ironclaw/pull/3159) | 增强 | Reborn/安全 | 将 `Obligation::EnforceResourceCeiling` 集成到 Reborn 主机运行时，确保非输出资源限制得到强制执行。 |
| [#3167](https://github.com/nearai/ironclaw/pull/3167) | 增强 | Reborn/安全 | 为 Reborn 内存写入添加提示写入安全策略，保护关键提示路径。 |
| [#3170](https://github.com/nearai/ironclaw/pull/3170) | 测试 | Reborn/集成 | 在 `reborn-integration` 分支上增加主机运行时垂直门测试覆盖，验证重放游标、资源限制等行为。 |

**整体推进评估**：今日合并集中在 **稳定性修复**（安装器、门控）和 **Reborn 安全基座**（资源治理、内存保护）上，为架构迁移提供了更稳固的基础。法律套件相关 PR 多为开放状态，预计将在后续合并。

---

## 4. 社区热点 (最活跃讨论)
| 链接 | 类型 | 评论/反应 | 核心议题 |
| :--- | :--- | :--- | :--- |
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | Issue | 44 评论 | **Reborn 架构落地史诗**：跟踪分组 PR 计划，避免巨型堆叠 PR，协调多个子任务（服务组合、义务、资源等）的交付顺序。 |
| [#3067](https://github.com/nearai/ironclaw/issues/3067) | Issue | 14 评论 | **Reborn 垂直切片集成测试**：规划如何通过公共入口点测试整个 Reborn 栈，而非仅 crate 内单元测试。 |
| [#3200](https://github.com/nearai/ironclaw/pull/3200) | PR | 新贡献者 | **法律套件 - 段落级红对比**：实现文档差异对比的 HTML 渲染，是法律工作流的关键功能。 |
| [#3191](https://github.com/nearai/ironclaw/pull/3191) | PR | 新贡献者 | **法律套件 - 表格化多文档审查**：旗舰功能，跨项目文档批量问答，生成结构化答案表。 |

**诉求分析**：热点集中于 **Reborn 迁移的工程协调**（如何安全、有序地落地庞大架构）和 **新能力构建**（法律套件）。前者反映团队对复杂重构的谨慎态度，后者显示产品向垂直领域（法律）扩展的战略意图。新贡献者 @abbyshekit 的 PR 系列引发持续关注，表明社区对实用功能交付的积极反馈。

---

## 5. Bug 与稳定性
按严重程度排列，今日新开或更新的 Bug/问题：

| 问题 | 严重度 | 状态 | 关联 Fix PR |
| :--- | :--- | :--- | :--- |
| [#3201](https://github.com/nearai/ironclaw/issues/3201): DeepSeek 工具调用失败 | **高** | 新开 (05-02) | 无 |
| [#2344](https://github.com/nearai/ironclaw/issues/2344): Web UI 控制台错误 (TypeError, CSP) | **中** | 更新 (05-02) | 无 |
| [#2949](https://github.com/nearai/ironclaw/issues/2949): 安装脚本缺少 Linux 平台下载 | **中** | 更新 (05-02) | 无 |
| [#2963](https://github.com/nearai/ironclaw/issues/2963): Docker Hub 镜像 `nearai/ironclaw:latest` 缺失 | **低** | 更新 (05-02) | 无 |

**说明**：
- **#3201**：直接影响使用 DeepSeek 模型的用户，需排查 LLM 提供商集成或参数处理问题。
- **#2344**：长期存在的前端稳定性问题，影响 Staging 环境用户体验。
- **#2949**：安装体验问题，与已修复的 #2818（v0.26.0 安装器）不同，是新的平台支持缺口。
- **#2963**：文档与事实不符，可能导致新用户部署失败。

---

## 6. 功能请求与路线图信号
基于 Issues 和 PR 趋势，潜在的新功能/增强：

| 请求 | 来源 | 可能性评估 | 说明 |
| :--- | :--- | :--- | :--- |
| **ARM64 Docker 镜像支持** | Issue [#3168](https://github.com/nearai/ironclaw/issues/3168) | **高** | 明确的技术需求，与 Reborn 架构（Cranelift 已支持）兼容，很可能纳入下一个发布周期。 |
| **任务自动恢复（审批门后）** | Issue [#3166](https://github.com/nearai/ironclaw/issues/3166) | **中** | 基于已合并的 PR #3155（门暂停 surfaced），剩余逻辑可能作为增强跟进。 |
| **法律套件全套功能** | PR 系列 [#3174](https://github.com/nearai/ironclaw/pull/3174), [#3190-3200](https://github.com/nearai/ironclaw/pull/3190) 等 | **极高** | 多个 XL 尺寸 PR 已接近完成，代表一套完整的新技能模块，**极有可能作为 v0.27.x 或 v0.28.0 的核心功能发布**。 |

---

## 7. 用户反馈摘要
从 Issues 描述及评论中提炼的关键反馈：

- **安装与部署痛点**：用户多次报告安装脚本（#2949）和 Docker 镜像（#2963）问题，反映 **“开箱即用”体验不足**，文档与实际情况存在脱节。
- **工具集成可靠性**：DeepSeek 工具失败（#3201）和 Gmail 认证问题（#3133）表明 **第三方服务集成**（LLM 提供商、OAuth）需要更健壮的错误处理和回退机制。
- **前端稳定性**：Web UI 控制台错误（#2344）提示前端代码（可能是 CSP 或类型问题）需要清理，影响专业用户信任度。
- **积极信号**：新贡献者 @abbyshekit 推动的法律套件功能（红对比、表格审查、RAG 聊天）获得大量开发关注，**隐含用户对文档智能处理、合规工作流自动化的强烈需求**。

---

## 8. 待处理积压 (长期未响应的重要 Issue/PR)
以下 Issue 创建时间较长（>1周）且仍开放，建议维护团队优先关注：

| 问题 | 创建时间 | 天数 | 影响 |
| :--- | :--- | :--- | :--- |
| [#2344](https://github.com/nearai/ironclaw/issues/2344): Web UI 控制台错误 | 2026-04-11 | 21 | 用户体验、前端稳定性 |
| [#2949](https://github.com/nearai/ironclaw/issues/2949): 安装脚本平台缺失 | 2026-04-24 | 8 | 新用户获取、安装成功率 |
| [#2963](https://github.com/nearai/ironclaw/issues/2963): Docker Hub 镜像缺失 | 2026-04-26 | 6 | 容器化部署、文档准确性 |

**备注**：Reborn 史诗 #2987 虽创建较早（4月27日），但作为跟踪性 Issue 且评论活跃（44条），属于正常规划周期，不列入积压。

---

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-02)

## 1. 今日速览
过去24小时，LobsterAI 项目未报告新的 Issues，社区反馈渠道保持平静。开发活动方面，共有4个 Pull Requests 处于活跃状态（均待合并），涉及配置同步修复、模型支持扩展、会话列表优化和通知渠道改进。项目整体处于持续迭代阶段，但社区讨论热度较低，需关注长期未合并PR的积压情况，以维持贡献者积极性。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无 Pull Requests 被合并或关闭。以下4个PR正在推进中，代表近期开发重点：
- **#1879**: [OPEN] 修复插件加载路径在配置同步时被覆盖的问题  
  [链接](https://github.com/netease-youdao/LobsterAI/pull/1879)  
  确保用户手动添加的插件路径（如通过 `pm install` 安装的社区插件）在 `OpenClawConfigSync.sync()` 运行时不会丢失。
- **#813**: [OPEN] [stale] 小米渠道新增 MiMo V2 Pro 和 MiMo V2 Omni 模型  
  [链接](https://github.com/netease-youdao/LobsterAI/pull/813)  
  根据小米开放平台更新，为 `xiaomi` 渠道添加两个支持图像的新模型，扩展多模态能力。
- **#1181**: [OPEN] 隐藏 OpenClaw 主代理会话以避免用户困惑  
  [链接](https://github.com/netease-youdao/LobsterAI/pull/1181)  
  在 `cowork_sessions` 表中新增 `hidden` 列，将内部心跳/路由用的主代理会话从用户会话列表中隐藏。
- **#1191**: [OPEN] [stale] 修复定时任务通知渠道过滤缺陷并升级显示体验  
  [链接](https://github.com/netease-youdao/LobsterAI/pull/1191)  
  移除硬编码渠道映射，统一通过 `PlatformRegistry` 动态过滤，并修复 POPO、企业微信不显示、微信错误标记及编码显示问题。

## 4. 社区热点
由于今日 Issues 和 PRs 的评论数据未提供，无法识别评论最活跃的讨论。但以下 PR 因内容涉及核心功能而值得关注：
- **PR #1879** 针对插件管理的关键修复，可能影响第三方插件开发者生态。
- **PR #1191** 改善通知渠道用户体验，涉及多个平台集成，可能引发渠道插件维护者讨论。

## 5. Bug 与稳定性
今日无新 Bug 报告。但有两个已知 Bug 的修复 PR 待合并，若延迟合并可能影响用户体验：
- **插件路径丢失**（PR #1879）：配置同步会覆盖 `plugins.load.paths`，导致手动安装的插件失效，影响工作流连续性。
- **通知渠道显示缺陷**（PR #1191）：包括 POPO/企业微信不显示、微信错误标记为“暂不支持”、下拉框显示技术编码（如 `moltbot-popo`），降低定时任务配置效率。

## 6. 功能请求与路线图信号
今日无新功能请求 Issue，但以下 PR 体现了功能增强方向，若合并将纳入下一版本：
- **小米模型扩展**（PR #813）：支持 MiMo V2 Pro/Omni，表明项目在持续跟进主流厂商的多模态模型。
- **会话列表优化**（PR #1181）：通过隐藏内部会话提升 UI 清晰度，反映对用户体验细节的关注。
- **通知渠道统一**（PR #1191）：动态渠道过滤和友好显示，为未来新增渠道提供可扩展框架。

## 7. 用户反馈摘要
从 PR 问题描述中可提炼用户痛点（间接反馈）：
- **配置同步破坏手动扩展**：用户通过 `pm install` 安装社区插件（如 `memory-lancedb-pro`）后，被 LobsterAI 的自动同步覆盖，导致插件丢失，破坏自定义工作流。
- **通知渠道配置混乱**：定时任务通知渠道选择器存在多个缺陷，用户无法选择已启用的 POPO/企业微信，微信被错误禁用，且显示不可读的编码，增加配置成本。
- **内部会话暴露**：OpenClaw 主代理会话以 `[OpenClaw]` 标题出现在 Cowork 会话列表，造成普通用户困惑，误以为可用会话。

## 8. 待处理积压
以下 PR 创建时间较长（超过30天），尚未合并，且标记为 `[stale]`，建议维护者优先审查或确认是否仍适用：
- **PR #813**（创建于 2026-03-25）：小米模型新增，已滞留约38天。  
  [链接](https://github.com/netease-youdao/LobsterAI/pull/813)
- **PR #1181**（创建于 2026-04-01）：隐藏 OpenClaw 会话，已滞留约31天。  
  [链接](https://github.com/netease-youdao/LobsterAI/pull/1181)
- **PR #1191**（创建于 2026-04-01）：通知渠道修复，已滞留约31天。  
  [链接](https://github.com/netease-youdao/LobsterAI/pull/1191)

这些 PR 均涉及用户体验和功能完整性，长期积压可能影响用户满意度和贡献者参与度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-05-02)

**报告生成时间：** 2026-05-02  
**数据周期：** 过去24小时 (2026-05-01 至 2026-05-02)  
**项目仓库：** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) (CoPaw)

---

### 1. 今日速览
过去24小时，CoPaw 项目社区活跃度显著，共新增 **7 个 Issues** 并收到 **3 个 Pull Requests**，所有条目均处于开放或待审查状态，无关闭或合并记录。讨论焦点高度集中于**模型容错与回退机制**、**记忆系统增强**以及**多平台体验一致性**，反映出用户对生产环境稳定性、功能完整性和跨端同步的迫切需求。项目处于快速迭代与问题收集阶段，社区参与度高，但问题处理速度可能面临压力。

---

### 2. 版本发布
*无新版本发布。*

---

### 3. 项目进展
今日无 PR 被合并或关闭。以下为处于审查阶段、推进关键能力建设的 PR：
- **PR #3831** ([Under Review] Add vector model connection test feature): 为向量模型添加连接测试，提升运维与部署时的可靠性验证能力。
- **PR #3525** ([Under Review] feat(cron): create Discord thread before agent dispatch): 解决 Cron 任务在 Discord 中输出混乱的问题，通过创建独立线程改善社区协作体验。
- **PR #3999** ([Under Review] feat(skills): add cli skill test command): 新增 CLI 技能测试命令，允许开发者在分配前独立验证技能，强化开发者工具链。

**整体推进评估：** 项目在测试工具、集成体验和开发效率三个方向持续演进，但需加速审查流程以将改进落地至代码库。

---

### 4. 社区热点
**最活跃讨论：Issue #1327 - [Feature]: Model fallback chain for automatic rate limit handling**
- **链接：** https://github.com/agentscope-ai/QwenPaw/issues/1327
- **数据：** 创建于 2026-03-12，今日更新，累计 **5 条评论**，👍 0。
- **分析：** 该 Issue 是社区长期关注的核心痛点，直击用户在遭遇模型速率限制或服务中断时缺乏自动降级方案的困境。其讨论衍生出多个相似需求（如 #3789），形成了对“弹性模型调用链”的强烈集体诉求，是影响产品可靠性的关键功能缺口。

---

### 5. Bug 与稳定性
按严重程度排列，今日报告的新问题均暂无关联的 Fix PR：

| 严重程度 | Issue | 问题简述 | 链接 |
| :--- | :--- | :--- | :--- |
| **严重** | #3991 | Ollama 频道会话记忆丢失，上下文无法正确传递，影响本地部署核心体验。 | https://github.com/agentscope-ai/QwenPaw/issues/3991 |
| **高** | #4000 | 1) 微信对话与浏览器操作不同步；2) 网页版语音输入功能缺失（UI 误导）。 | https://github.com/agentscope-ai/QwenPaw/issues/4000 |
| **高** | #3997 | MCP 客户端 `timeout` 参数无法配置（默认 30s），Pydantic 模型静默丢弃未知字段。 | https://github.com/agentscope-ai/QwenPaw/issues/3997 |
| **中** | #3996 | DeepSeek V4 模型仅支持二进制的 `enable_thinking`，缺失 `xhigh`/`max` 等高级思考级别控制。 | https://github.com/agentscope-ai/QwenPaw/issues/3996 |
| **中** | #3995 | 记忆系统缺乏生命周期管理（每日笔记无限增长）与写入冲突检测，存在长期隐患。 | https://github.com/agentscope-ai/QwenPaw/issues/3995 |

---

### 6. 功能请求与路线图信号
结合 Issue 热度与 PR 进展，以下功能可能影响下一版本规划：
- **高优先级（强烈社区共识）：**
  - **模型回退链** (#1327, #3789)：两个 Issue 重叠，需求明确，是构建高可用架构的基石。
- **中优先级（系统性改进）：**
  - **记忆系统增强** (#3995)：涉及文件归档策略与冲突检测，需架构级设计。
  - **MCP 客户端超时配置** (#3997)：提升配置灵活性，修复关键配置缺陷。
- **工具链完善（已有 PR）：**
  - **CLI 技能测试** (PR #3999)：已提交，有望近期合并，提升开发体验。
- **模型支持扩展：**
  - **DeepSeek 高级思考模式** (#3996)：依赖特定 API 适配，可后续版本跟进。

---

### 7. 用户反馈摘要
从 Issues 评论及描述中提炼的真实用户痛点与场景：
- **本地部署体验不一致：** 使用 Ollama 时记忆功能失效，而在线 API 正常，暗示本地与云端通道的实现存在差异。
- **多端数据割裂：** 微信端对话无法反映浏览器端的操作过程，用户期望统一的会话状态视图。
- **功能误导与缺失：** 网页版界面暗示的语音输入功能不可用，导致困惑，需明确 UI 指引或规划开发。
- **高级控制需求：** 用户需要针对特定模型（如 DeepSeek）的细粒度参数控制，以及更灵活的网络超时设置。
- **长期维护担忧：** 基于文件的记忆系统在长期使用后缺乏自动清理，用户依赖自觉维护，易导致数据臃肿。

---

### 8. 待处理积压
以下为创建时间较长、评论活跃但尚未得到有效推进的重要条目，建议维护团队优先关注：
- **Issue #1327** (模型回退链)：创建于 **2026-03-12**，已超 2 个月，累计 5 条评论，是社区最关注的功能缺口。
- **PR #3525** (Discord 线程集成)：创建于 **2026-04-17**，审查停滞近 1 个月，影响 Discord 社区用户体验。

**建议：** 对 #1327 进行需求评估与排期；对 #3525 加速代码审查或明确后续步骤。

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