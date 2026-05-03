# OpenClaw 生态日报 2026-05-03

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-05-03 00:27 UTC

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

# OpenClaw 项目动态日报 (2026-05-03)

## 1. 今日速览
OpenClaw 项目今日保持极高活跃度，24小时内新增 465 个活跃 Issues 并关闭 35 个，同时处理 500 个 PR（451 个待合并，49 个已合并/关闭）。社区发布了 v2026.5.2 正式版及两个 beta 版本，重点改进外部插件管理流程与网关/代理性能。尽管版本迭代迅速，但 v2026.4.29 引发的性能回归问题仍在持续发酵，多个高优先级 Bug 报告集中在 CPU 占用、消息延迟和通道可靠性上。项目维护团队通过大量 PR 积极修复稳定性问题，但功能请求积压明显，新特性开发进度相对滞后。

## 2. 版本发布
**v2026.5.2** (https://github.com/openclaw/openclaw/releases/tag/v2026.5.2)  
**主要更新：**
- **外部插件系统全面升级**：覆盖安装、更新、doctor 修复、依赖报告和工件元数据管理，解决 npm 首次切换、过时配置安装、缺失包负载及 beta 频道插件回退问题（感谢 @vincentkoc）。
- **性能优化**：网关和代理热路径代码精简，预期降低资源占用。
- **破坏性变更**：无明确破坏性变更公告，但插件安装流程变更可能影响自定义插件部署流程，建议测试环境验证后升级。
- **迁移注意事项**：升级后建议运行 `openclaw doctor` 检查插件状态；若使用 beta 频道插件，注意回退机制已自动启用。

**同期 beta 版本**（v2026.5.2-beta.3 / beta.2）包含相同核心改进，适用于需要提前验证的部署。

## 3. 项目进展
今日合并/关闭的 PR 聚焦**稳定性修复与安全加固**，推动项目向更可靠方向迈进：

- **安全修复**：PR #76322 (https://github.com/openclaw/openclaw/pull/76322) 修复引导令牌路径无速率限制的 DoS 漏洞，新增 `rateLimiter` 保护。
- **性能回归修复**：PR #62164 (https://github.com/openclaw/openclaw/pull/62164) 为 `sessions.list` 添加缓存，避免重复重建会话数据，缓解 Gateway 延迟压力（关联 Issue #76166）。
- **通道可靠性**：
  - PR #76314 (https://github.com/openclaw/openclaw/pull/76314) 修复 WhatsApp  inbound DM 路由，确保不同联系人使用独立会话。
  - PR #76330 (https://github.com/openclaw/openclaw/pull/76330) 启用 Slack 扁平 DM 的预览流式传输。
- **兼容性修复**：PR #76326 (https://github.com/openclaw/openclaw/pull/76326) 排除 `gpt-5.4-mini` 对 `reasoning_effort` 参数的支持，避免 400 错误导致 Telegram 代理挂起。
- **生命周期管理**：PR #76332 (https://github.com/openclaw/openclaw/pull/76332) 修复子代理完成通知的竞争条件，防止子运行被卡在清理阶段。

**整体进展评估**：今日合并的 PR 主要针对 v2026.4.29 引入的连锁问题（性能、通道、兼容性），显示维护团队正集中资源修复近期回归。安全与性能基础设施得到加强，但功能开发相对缓慢。

## 4. 社区热点
评论数最高的 Issues 反映社区核心诉求：

| Issue | 评论数 | 主题 | 诉求分析 |
|-------|--------|------|----------|
| #12602 (https://github.com/openclaw/openclaw/issues/12602) | 13 | Slack Block Kit 支持 | 用户需要富文本交互消息（如 CRM 摘要、操作按钮），当前仅支持 Markdown plain text，限制 Slack 场景的实用性。 |
| #75999 (https://github.com/openclaw/openclaw/issues/75999) | 12 | 4.29 版本性能回归 | 升级后首次回复延迟 2-5 分钟，dispatch 准备阶段同步 CPU 工作阻塞事件循环 73 秒，严重影响生产环境。 |
| #67288 (https://github.com/openclaw/openclaw/issues/67288) | 10 | amazon-bedrock-mantle 配置缺失 | 插件每次请求都运行 IAM 发现，无 `config.discovery.enabled` 开关，导致不必要的延迟和成本。 |
| #75707 (https://github.com/openclaw/openclaw/issues/75707) | 10 | Gateway CPU 100% | v2026.4.29 导致网关空闲时 CPU 持续 100-130%，`node.list` 延迟 >20s，关联 #75688。 |
| #13583 (https://github.com/openclaw/openclaw/issues/13583) | 10 | 预响应强制钩子 | 高安全场景（金融、运维）需要机械阻止代理在调用必需工具前生成最终答案，当前仅靠 prompt 软规则不足。 |

**热点趋势**：性能与可靠性问题（#75999, #75707）讨论最热烈，影响范围广；功能请求（#12602, #13583）反映企业级需求增长。

## 5. Bug 与稳定性
**严重程度排序**（基于影响范围与复现难度）：

| 严重性 | Issue | 问题摘要 | 状态 | 关联 PR |
|--------|-------|----------|------|---------|
| 🔴 高 | #75999 (https://github.com/openclaw/openclaw/issues/75999) | 4.29 dispatch 准备阶段同步阻塞 73s，导致首次回复延迟 2-5 分钟。 | OPEN | 无直接 PR，可能需优化同步代码路径 |
| 🔴 高 | #75707 (https://github.com/openclaw/openclaw/issues/75707) | Gateway CPU 100-130% 空闲，`node.list` 延迟 >20s。 | OPEN | 无直接 PR，可能关联 #76166 缓存修复 |
| 🔴 高 | #76174 (https://github.com/openclaw/openclaw/issues/76174) | OpenAI 嵌入运行挂起至超时，零 token 输出；直接 curl 正常。 | OPEN | 无直接 PR |
| 🟠 中 | #75824 (https://github.com/openclaw/openclaw/issues/75824) | Web UI 聊天气泡显示后消失，直接 OpenAI API 正常。 | OPEN | 无直接 PR |
| 🟠 中 | #74209 (https://github.com/openclaw/openclaw/issues/74209) | 默认捆绑插件（如 bonjour）阻塞网关启动。 | OPEN | 无直接 PR |
| 🟡 低 | #73602 (https://github.com/openclaw/openclaw/issues/73602) | WhatsApp 与 Telegram 在 WSL2 上不可靠（断开、DNS 错误）。 | OPEN | 无直接 PR |

**注**：多个性能问题（#75999, #75707）可能由同一批同步代码变更引起，需系统性审查 v2026.4.29 的 dispatch 与网关热路径改动。

## 6. 功能请求与路线图信号
**高潜力功能**（评论多、需求明确、有 PR 迹象）：

- **Slack Block Kit 支持** (#12602, 13👍)：评论最多，企业集成关键需求。若实现，需扩展消息渲染层与 Slack API 对接。
- **预响应强制钩子** (#13583, 2👍)：高安全场景刚需，可能通过插件钩子或运行时策略实现。
- **会话快照** (#13700, 0👍)：开发与调试友好功能，已有概念设计，但实现复杂度较高。
- **备份/恢复 CLI** (#13616, 0👍)：运维痛点，已有 `.gitignore` 模式请求（#40786），可能分阶段实施。
- **原生 web_search 支持扩展** (#17925, 5👍)：已支持 xAI Grok，请求扩展至 ZAI/GLM 和 Google Gemini，技术路径清晰。

**路线图信号**：v2026.5.2 聚焦插件管理与性能，下一版本可能继续回归修复；功能请求预计在 v2026.6.x 后逐步纳入，除非社区贡献 PR。

## 7. 用户反馈摘要
从 Issues 评论与描述提炼真实痛点：

- **性能焦虑**：v2026.4.29 用户普遍报告“无法用于生产”，首次回复延迟分钟级，CPU 持续跑满，导致回退至旧版本（#74886 提及回滚至 2026.4.23 解决 WhatsApp 问题）。
- **消息可靠性**：Telegram 话题会话中心跳中断导致回复丢失（#64810）；WhatsApp 路由错误导致多租户会话混杂（#76314 修复中）；Cron 会话在工具失败时产生幻觉输出（#49876），信任风险高。
- **配置复杂性**：插件权限过度宽泛（如 Feishu 需 `contact:contact.base:readonly`，#13751）；默认插件过多阻塞启动（#74209）；降级时残留配置导致失败（#75502）。
- **企业级缺失**：缺乏备份/恢复、审计日志、成本跟踪（#13219）；会话管理能力弱（无快照、归档混乱）。
- **模型兼容性**：`gpt-5.4-mini` 因 `reasoning_effort` 参数不兼容导致挂起（#76326 修复）；Claude 推理默认开启导致成本飙升（#73182）。

**满意度点**：v2026.5.2 的插件管理改进获 @vincentkoc 贡献认可；安全修复（#76322）和 SSE 帧处理（#76324）获得社区积极反馈。

## 8. 待处理积压
**长期未响应但高影响 Issue**（创建超过 30 天，评论 ≥5，未关闭）：

| Issue | 创建日期 | 评论 | 主题 | 积压风险 |
|-------|----------|------|------|----------|
| #12602 | 2026-02-09 | 13 | Slack Block Kit 支持 | 高：企业集成关键，但实现需跨团队协调 |
| #13583 | 2026-02-10 | 10 | 预响应强制钩子 | 高：安全合规刚需，设计复杂度高 |
| #13616 | 2026-02-10 | 8 | 备份/恢复工具 | 中：运维痛点，

---

## 横向生态对比

## AI 智能体开源生态横向对比分析报告 (2026-05-03)

### 1. 生态全景
当前个人 AI 助手/自主智能体开源生态处于**高速发展与深度重构并行**的阶段。头部项目（如 OpenClaw, Zeroclaw, IronClaw）在快速迭代功能的同时，正经历因架构演进（如插件系统、配置Schema V3、事件溯源）带来的稳定性阵痛，核心矛盾集中在**功能丰富性**与**生产就绪度**之间的平衡。中坚项目（NanoBot, NanoClaw, CoPaw）则聚焦于**渠道扩展**、**模型兼容性**与**关键Bug修复**，积极补足企业级应用短板。整体趋势显示，社区对**推理模型（Reasoning Model）的深度集成**、**通道可靠性**及**运维可观测性**的需求已成为共识，驱动各项目向更健壮、更易部署的方向演进。

### 2. 各项目活跃度对比

| 项目 | 24h Issues (新增/活跃) | 24h PRs (新增/合并) | Release 动态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 465 (新增) | 500 (451待合, 49已合) | v2026.5.2 正式版 + 2 beta | **中等**：处理量大但积压严重，v2026.4.29性能回归未根治，新功能滞后。 |
| **NanoBot** | 4 (1关3新) | 20 (8合, 12待) | 无 | **良好**：合并积极，响应迅速，聚焦稳定性与渠道增强。 |
| **Zeroclaw** | 50 (48新/活, 2关) | 36 (29待, 7合) | 无 (v0.7.5准备中, v0.8.0重构启动) | **中等**：问题报告多但修复同步，v0.8.0大规模迁移是核心焦点。 |
| **PicoClaw** | 7 (新开) | 8 (2关, 6待) | v0.2.8-nightly (自动化构建) | **需关注**：无重大合并，新开Issues多，积压风险初显。 |
| **NanoClaw** | 12 (新开) | 15 (7合, 8待) | 无 | **良好**：关键Bug（如host-sweep崩溃）24小时内闭环，社区协作高效。 |
| **IronClaw** | 高活跃 (未统计总数) | 47 (仅6合, 41待合) | 无 (v0.26.0最新) | **承压**：合并瓶颈严重（合并率~13%），XL尺寸PR积压影响迭代。 |
| **LobsterAI** | 0 | 4 (全部待合) | 无 | **较差**：无新Issues，无合并，项目活跃度停滞。 |
| **CoPaw** | 14 (新开) | 6 (全部待合) | 无 | **中等**：问题报告速度超过解决速度，无合并记录，积压增加。 |
| **其他** (TinyClaw等) | 0 | 0 | 无 | **停滞**：无任何活动。 |

**注**：健康度综合评估合并效率、严重Bug修复速度、版本发布节奏及社区反馈。

### 3. OpenClaw 在生态中的定位
- **优势**：**功能最全、生态最庞大**的“一体化平台”。拥有最广泛的通道支持（WhatsApp, Slack, Telegram等）和成熟的插件系统，社区贡献者数量与问题处理量级远超同类，是事实上的生态核心参照。
- **技术路线差异**：采用 **“单体核心 + 外部插件”** 的架构，通过插件管理流程升级（v2026.5.2）试图解决生态繁荣带来的碎片化问题。这与 Zeroclaw 的“严格配置Schema”、IronClaw 的“事件溯源重构”等路线形成鲜明对比。
- **社区规模对比**：社区规模（Issues/PRs数量）约为第二名（Zerocaw）的**10倍以上**，但维护压力也最大。当前处于 **“修复回归、巩固基础”** 阶段，新特性开发明显让位于稳定性修复，反映出大规模生态的典型挑战。

### 4. 共同关注的技术方向
1.  **推理模型（Reasoning Model）深度集成与兼容性**
    - **涉及项目**：OpenClaw, Zeroclaw, NanoBot, CoPaw, Moltis。
    - **具体诉求**：正确处理并传递 `reasoning_content`/`thought_signature`，避免在流式调用、多轮对话、上下文压缩中丢失，导致工具调用失败或API错误（如 Gemini, DeepSeek, Claude, MiMo）。这是当前**最普遍且高优先级**的技术债务。

2.  **通道（Channel）可靠性与功能深化**
    - **涉及项目**：OpenClaw (WhatsApp路由, Slack Block Kit), Zeroclaw (Telegram加密, 媒体消息), NanoBot (Discord组件, 飞书线程), CoPaw (Discord线程, 多端同步), NanoClaw (WhatsApp LID映射)。
    - **具体诉求**：修复路由错误、消息丢失、媒体支持、线程隔离、提及-only 逻辑等，并扩展富文本交互（按钮、菜单）能力，以满足企业级场景需求。

3.  **配置管理、安全与运维就绪**
    - **涉及项目**：OpenClaw (插件管理), NanoBot (环境变量引用, ExecTool安全), Zeroclaw (环境变量覆盖, 沙盒策略, 多实例部署), IronClaw (审计日志, 资源上限), CoPaw (Ollama集成)。
    - **具体诉求**：敏感信息（令牌、密钥）的安全存储（如 `{env:VAR}`）、细粒度工具权限控制（`allow_patterns` 优先级）、可配置的超时与资源限制、多实例/多租户配置隔离、备份恢复工具。

4.  **模型提供商适配与弹性策略**
    - **涉及项目**：OpenClaw, Zeroclaw, CoPaw, PicoClaw, LobsterAI。
    - **具体诉求**：快速适配新模型（如小米 MiMo, xAI Grok）、处理模型特有参数（如 `reasoning_effort`）、实现**模型回退链（Model Fallback）** 以应对速率限制或服务中断（CoPaw #1327 高频需求）。

### 5. 差异化定位分析
| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全功能平台，渠道与插件生态 | 追求“一站式”解决方案的团队/个人 | 单体核心 + 外部插件系统，配置复杂 |
| **NanoBot** | 轻量、易部署，渠道扩展 | 开发者、小团队、快速原型 | 代码简洁，内置技能丰富，强调开箱即用 |
| **Zeroclaw** | 企业级可靠性，严格安全 | 运维人员、企业级部署 | 严格配置Schema (V3迁移)，沙

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-03)

## 今日速览
过去24小时，NanoBot 项目保持**高活跃开发状态**，共处理 20 个 PR（8 个合并/关闭，12 个待审）和 4 个 Issues（1 个关闭，3 个新开）。核心团队与社区贡献者聚焦于**渠道扩展**（Discord 交互组件）、**安全性增强**（环境变量引用、WebUI 加固）及**核心稳定性修复**（exec 超时控制、reasoning 模式兼容）。社区讨论围绕功能增强与模型适配展开，项目生态持续向多平台、高可靠性方向演进。

---

## 版本发布
*无新版本发布。*

---

## 项目进展
今日合并/关闭的 8 个 PR 涵盖关键功能与修复，推动项目在多方面取得实质性进展：

| PR | 标题 | 影响领域 | 进展说明 |
|----|------|----------|----------|
| [#2010](https://github.com/HKUDS/nanobot/pull/2010) | feat(whatsapp): add media send/receive support | 渠道扩展 | 实现 WhatsApp 媒体（图片、音频、视频、文档）收发，显著增强移动端渠道能力。 |
| [#2218](https://github.com/HKUDS/nanobot/pull/2218) | feat(security): support `{env:VAR}` syntax | 安全性 | 支持在 `config.json` 中通过 `{env:VAR}` 引用环境变量，避免敏感信息明文存储。 |
| [#3456](https://github.com/HKUDS/nanobot/pull/3456) | feat(skills): add create-instance built-in skill + webui remote backend | 可扩展性 | 新增 `create-instance` 内置技能，并支持 WebUI 远程后端部署（基于 GitHub Pages + 密钥认证）。 |
| [#3419](https://github.com/HKUDS/nanobot/pull/3419) | fix(provider): preserve reasoning_content when merging consecutive assistant messages | 模型兼容性 | 修复 DeepSeek 等模型思考模式下的 400 错误，确保 `reasoning_content` 在消息合并时不丢失。 |
| [#3414](https://github.com/HKUDS/nanobot/pull/3414) | fix(agent): cap recent history section in system prompt | 系统稳定性 | 限制系统提示中“Recent History”部分为 32K 字符，防止历史记录膨胀导致提示溢出。 |
| [#3176](https://github.com/HKUDS/nanobot/pull/3176) | feat(feishu): thread-scoped sessions, reply_in_thread, non-blocking reaction | 渠道体验 | 飞书支持线程隔离会话、线程内回复及非阻塞反应，提升群聊交互体验。 |
| [#3247](https://github.com/HKUDS/nanobot/pull/3247) | fix(memory): fall back to raw_archive on LLM error response | 记忆可靠性 | 当 LLM 调用失败时，自动回退到原始存档，避免记忆数据丢失。 |
| [#3594](https://github.com/HKUDS/nanobot/pull/3594) | [bug] fix: allow_patterns take priority over deny_patterns in ExecTool | 工具安全性 | 修复 ExecTool 模式匹配逻辑，确保 `allow_patterns` 可覆盖 `deny_patterns`，避免黑名单无法白名单化。 |

**整体推进评估**：本次合并集中解决了**渠道碎片化**（WhatsApp、飞书）、**安全配置**（环境变量、WebUI 风险）、**记忆与提示管理**（历史截断、错误回退）及**工具链健壮性**（exec 模式、reasoning 保留）等核心问题，项目在**生产就绪度**和**多平台适配**上迈出重要一步。

---

## 社区热点
今日讨论最活跃的 PR 聚焦于**开发者体验扩展**与**插件生态建设**：

1. **[PR #3589](https://github.com/HKUDS/nanobot/pull/3589)** - `feat(discord): interactive components (buttons, select menus, modals)`  
   **热度分析**：为 Discord 渠道添加按钮、下拉菜单和模态表单，通过现有 `message` 工具的 `buttons` 参数实现向后兼容。该功能将极大丰富 Discord 机器人交互能力，可能吸引大量 Discord 社区用户关注与测试。

2. **[PR #3564](https://github.com/HKUDS/nanobot/pull/3564)** - `feat(hooks): HookCenter typed-event hook system with plugin support`  
   **热度分析**：用类型化事件钩子系统替换原有 `AgentHook` 方法重写模式，支持通过 `entry_points` 分发钩子插件。此 PR 为外部开发者提供标准化扩展点，可能引发插件生态构建的讨论，是项目**可扩展性架构**的重要升级。

---

## Bug 与稳定性
按严重程度排列今日报告/修复的 Bug：

| 严重度 | Issue/PR | 标题 | 状态 | 说明 |
|--------|----------|------|------|------|
| **高** | [#3597](https://github.com/HKUDS/nanobot/issues/3597) | [bug] NanoBot confused and couldn't access workspace root | **新开** | 用户报告 NanoBot 无法正确访问工作区根目录，导致文件保存失败。影响基本工作流，**尚无修复 PR**，需优先调查。 |
| **中** | [#3585](https://github.com/HKUDS/nanobot/issues/3585) | [bug] `reasoning_effort: null` does not disable thinking on Xiaomi MiMo | **新开** | 文档称 `reasoning_effort: null` 可禁用思考模式，但实现中 `null` 被错误处理。**已有 PR [#3587](https://github.com/HKUDS/nanobot/pull/3587) 提交修复**。 |
| **低** | PR [#3594](https://github.com/HKUDS/nanobot/pull/3594) | fix: allow_patterns take priority over deny_patterns in ExecTool | **已关闭** | 修复 ExecTool 中 `allow_patterns` 无法覆盖 `deny_patterns` 的逻辑缺陷，提升工具配置灵活性。 |

---

## 功能请求与路线图信号
用户提出的新功能需求及关联 PR 显示项目未来方向：

- ** exec 超时配置放宽**：  
  Issue [#3595](https://github.com/HKUDS/nanobot/issues/3595) 请求移除 600 秒硬编码上限，**PR [#3596](https://github.com/HKUDS/nanobot/pull/3596) 已提交**，引入活动感知超时控制（硬超时 + 空闲超时），**极可能纳入下一版本**。

- **其他活跃 PR 暗示的路线图重点**：  
  - **渠道深化**：Discord 交互组件（#3589）、音频转录本地化（#3513）。  
  - **可观测性**：心跳手动触发（#3590）、Dream 更新范围控制（#3591）。  
  - **用户体验**：WebUI 流式响应优化（#3583，WIP）、CLI 行为改进（#3592）。  
  - **生态建设**：HookCenter 插件系统（#3564）为第三方集成铺路。

---

## 用户反馈摘要
从 Issues 描述中提炼的真实用户痛点与场景：

- **模型兼容性缺口**：  
  用户明确请求支持小米模型（#3518 已关闭），但小米 MiMo 的 `reasoning_effort: null` 问题（#3585）表明**特定模型适配仍不完善**，文档与实现存在不一致。

- **配置灵活性不足**：  
  exec 工具的 600 秒超时硬编码（#3595）无法满足长时间任务（如下载、延时脚本），用户需要**更细粒度的超时控制**。

- **工作区路径管理混乱**：  
  Issue #3597 反映 NanoBot 在文件操作时对工作区根目录的解析存在混淆，可能涉及**会话隔离或路径规范化**的 bug，影响自动化工作流可靠性。

- **积极反馈**：  
  社区积极贡献渠道扩展（WhatsApp 媒体、飞书线程）与安全增强（环境变量、WebUI 加固），显示用户对项目**实用性与安全性**的高度关注。

---

## 待处理积压
当前无长期未响应（>30 天）的开放 Issue 或 PR。所有列出的项目更新日期均为 2026-05-02 或更近。但需关注：

- **PR [#3583](https://github.com/H

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-03)

## 今日速览
过去24小时，Zeroclaw 项目保持高度活跃，共处理 50 条 Issues 更新（48 条新开/活跃，2 条关闭）和 36 条 PR 更新（29 条待合并，7 条已合并/关闭）。社区聚焦于 **v0.7.5 发布自动化** 与 **v0.8.0 重大架构迁移** 的准备工作，同时密集修复高优先级稳定性问题（尤其是 provider 兼容性与 channel 配置）。多个核心贡献者（如 @theonlyhennygod、@singlerider）同步推进多项关键修复与重构，项目整体向前推进显著，但部分长期存在的配置与集成问题仍需关注。

## 版本发布
- **无新版本发布**。当前最新稳定版本仍为 v0.7.4（假设），v0.7.5 正在通过自动化流程准备中（见 Issues #5878），同时 v0.8.0 的大规模 schema 迁移工作已启动（见 PR #6266）。

## 项目进展
今日合并/关闭的 PR 主要集中于稳定性修复与国际化增强：
1. **PR #6087**（已关闭）：为 Slack、Discord、Telegram 通道令牌添加环境变量覆盖支持，提升部署灵活性。
2. **PR #6242**（已关闭）：为 WeChat CLI 添加简体中文翻译，完善 i18n 支持。
3. **PR #6264**（已关闭）：修复 OpenAI 兼容 provider 对 Gemini `thoughtSignature` 的 `tool_call extra_content` 丢失问题，恢复 Gemini 3.x 思考模型的原生工具调用能力。
4. **PR #5206**（已关闭）：清理 CI 中过时的 `main.py` 依赖，升级 `rumqttc` 并抑制安全警告，解除 CI 阻塞。
5. **PR #6282**（已关闭）：修复 Windows 全量构建中 `zeroclaw-hardware` 的路径解析问题，提升跨平台构建成功率。
6. **PR #6287**（已合并）：使 Slack `bot_token` 变为可选并从环境变量加载，解决 #6237 导致的崩溃问题。
7. **PR #6288**（已合并）：修正 `zeroclaw status` 等命令对命名实例的系统服务单元名称推导，解决多实例部署状态误报。

这些合并显著改善了配置体验、跨平台兼容性与 provider 稳定性，为下一版本打下基础。

## 社区热点
讨论最活跃的 Issues（按评论数）：
1. **Issue #5849**（9 评论）：**Dream Mode** 功能提案，旨在实现周期性记忆整合与反思学习。社区关注其与现有 memory 系统的集成复杂度及资源开销。
   - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5849
2. **Issue #5722**（6 评论）：默认 shell 沙盒配置过于严格，阻断 realistic Python 技能模式。影响第三方技能（如 InvestorClaw）开发，急需放宽策略或提供白名单机制。
   - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5722
3. **Issue #5600**（6 评论）：使用 kimi-code provider 时流式调用工具触发 API 错误（`reasoning_content` 缺失）。反映 provider 适配层对思考模式支持不完善。
   - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5600
4. **Issue #6233**（5 评论）：DeepSeek V4 多轮对话中 `chat_messages_to_native()` 丢弃 `reasoning_content`，导致第二轮请求失败。与 #5600 同属思考内容传递缺陷。
   - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6233

**诉求分析**：社区核心关切集中在 **provider 兼容性**（尤其是思考模型的内容传递）、**沙盒安全策略的平衡** 以及 **长期记忆机制创新**。高优先级 bug 的讨论常涉及具体生产环境用例，表明用户正在复杂场景中深度使用 Zeroclaw。

## Bug 与稳定性
### 高风险 (S1/S2, priority p1)
- **#5722**：Shell 沙盒阻断 Python 技能。**已有讨论无直接 PR**，需设计更精细的沙盒规则。
- **#5600**：kimi-code 流式工具调用失败。**已修复**：PR #6284 保留 `reasoning_content`。
- **#5654**：Telegram 通道加密配置不生效导致无响应。**无公开 PR**，需检查加密逻辑。
- **#5605**：多实例部署中配置路径硬编码导致冲突。**无公开 PR**，影响企业级部署。
- **#6237**：Slack `bot_token` 必须写配置文件，不支持环境变量。**已修复**：PR #6287。
- **#6269**：上下文压缩丢失 `reasoning_content`。**已修复**：PR #6285。
- **#6243**：自定义 HTTP provider 流式解码错误后长时间挂起。**无公开 PR**，需增强错误恢复。

### 中风险 (S2/S3, priority p2)
- **#6233**：DeepSeek 多轮对话失败（同属高风险，但已修复）。
- **#6095**：Bedrock Claude Opus 4.7 因 `temperature` 字段弃用报错。**无公开 PR**。
- **#5628**：守护进程自启动导致端口冲突。**无公开 PR**。
- **#6245**：Tavily 搜索 provider 仅为存根。**无公开 PR**，功能未实现。
- **#6254**：WASM 插件安装与扫描路径不一致。**无公开 PR**。
- **#6227**：命名实例 `status` 命令误报服务停止。**已修复**：PR #6288。
- **#6229**：Telegram 群组 `mention_only=true` 对媒体消息失效。**已修复**：PR #6286。
- **#6243**：流式解码错误挂起（同上）。
- **#6280**：Windows 全量构建失败。**已修复**：PR #6282。

**总结**：今日报告/活跃的 15+ 个 bug 中，**至少 6 个已有修复 PR 合并或待合并**，主要集中在 provider 内容传递、channel 配置与系统服务管理。剩余问题多涉及配置路径、沙盒策略与未实现功能，需排期处理。

## 功能请求与路线图信号
- **Dream Mode**（#5849）：长期记忆的高级形态，可能纳入 v0.8.0 或更高版本，但需评估资源影响。
- **OAuth 支持扩展**（#5601）：为 Ollama Cloud、Zhipu、Kimi、MiniMax 添加订阅原生登录。**无直接 PR**，依赖 provider 生态合作。
- **Webhook 重试机制**（#5761）：提升通道可靠性。**无 PR**，但属高价值增强。
- **技能系统 UX  overhaul**（#6253）：v0.7.6 主题，协调 `zeroclaw skills` 的 CLI、加载器、沙盒等体验。**无 PR 但为版本焦点**。
- **V3 配置架构迁移**（#6270, #6271, #6272, #6273）：由 @singlerider 提出，定义 SwarmConfig、Agent 文件系统布局、ModelProviderConfig 类型拆分等。**PR #6266** 已开启大规模实现，是 v0.8.0 的核心。
- **WhatsApp 定时任务支持**（PR #6261）：已实现，扩展 cron 工具通道。
- **WebUI 模型热切换**（PR #6101）：进行中，改善交互体验。

**路线图判断**：v0.7.6 将聚焦 **技能系统 UX**；v0.8.0 将是 **配置 schema V3 的 breaking change 版本**，涉及通道别名、模型别名、配置文件结构重构（PR #6266）。Dream Mode、OAuth 等大型功能可能延后。

## 用户反馈摘要
从 Issues 描述与评论提炼的真实痛点：
1. **配置复杂性**：多实例部署（#5605）、环境变量支持不足（#6237）、路径硬编码（#6254）导致运维困难，用户期望更灵活的配置管理。
2. **Provider 兼容性陷阱**：思考模型（DeepSeek、Kimi、Gemini）的 `reasoning_content` 在传输与压缩中丢失（#5600, #6233, #6269），破坏原生工具调用链，用户在生产环境中遭遇 silent failure。
3. **通道功能不一致**：Telegram 加密失效（#5654）、媒体消息忽略 `mention_only`（#6229）、Slack 令牌限制（#6237）、Webhook 无重试（#5761），影响关键业务集成。
4. **安全与便利的平衡**：Shell 沙盒过严（#5722）阻碍技能开发，用户请求可配置白名单或模式。
5. **状态可见性**：守护进程状态误报（#6227）降低运维信任度

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-03)

## 1. 今日速览
过去24小时，PicoClaw 项目保持较高活跃度，共处理7个新开/活跃 Issues 和8个 PRs。核心进展集中于**稳定性修复**（如路径解析、PID检查）与**用户体验优化**（如Web界面时间显示）。值得注意的是，所有Issues均为新开或更新，无关闭记录，表明问题积压可能正在增加。社区讨论焦点集中在**扩展通信通道**（Email）与**简化认证流程**（OAuth 2.1）等增强性需求上。

## 2. 版本发布
- **新版本**: `v0.2.8-nightly.20260502.6e1fab80` (Nightly Build)
  - **性质**: 自动化构建版本，**可能存在不稳定因素**，建议谨慎使用。
  - **更新内容**: 基于 `v0.2.8` 到 `main` 分支的完整变更，具体修复与改进需查阅 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)。
  - **迁移注意**: Nightly 版本不保证向后兼容，生产环境应继续使用稳定版 `v0.2.8`。

## 3. 项目进展
今日无重大功能合并。已关闭的2个PR均为维护性工作：
- **#2747 [CLOSED]**: 更新微信群二维码图片，属于社区运营维护。
- **#2746 [CLOSED]**: 为 OpenRouter 推理模型添加抑制推理输出的预设文档，属于文档完善。
**整体推进评估**: 项目在核心代码层面未取得突破性进展，主要工作集中在问题修复与文档补充。

## 4. 社区热点
讨论最活跃的议题为**功能增强请求**，反映了用户对降低使用门槛和扩展集成能力的迫切需求：
- **#2421 (4条评论)**: [Feature] 添加 Email 作为原生通道。
  - **诉求分析**: 满足在受限环境（企业、科研）或作为唯一通信渠道的用户需求，旨在扩大PicoClaw的适用场景。
  - [链接](https://github.com/sipeed/picoclaw/issues/2421)
- **#2546 (3条评论)**: [Feature] 支持从仪表盘通过URL添加OAuth 2.1 + PKCE保护的MCP服务器。
  - **诉求分析**: 为非技术用户提供类似Claude.ai的“添加连接器”体验，无需命令行操作，特别适用于云VM环境。
  - [链接](https://github.com/sipeed/picoclaw/issues/2546)

## 5. Bug 与稳定性
按严重程度排序，今日新开及更新的关键问题：
1.  **高严重 - 启动崩溃风险**:
    - **#2720**: PID文件检查未验证进程身份，导致复用PID引发崩溃循环。**已有潜在修复思路**，但无直接关联PR。
    - [链接](https://github.com/sipeed/picoclaw/issues/2720)
2.  **中严重 - 功能错误**:
    - **#2749**: Bash工具执行时错误地将相对路径解析为根目录绝对路径，触发工作区检查失败。**已有修复PR #2750 待合并**。
    - [链接](https://github.com/sipeed/picoclaw/issues/2749) | [修复PR](https://github.com/sipeed/picoclaw/pull/2750)
    - **#2745**: OpenRouter推理模型（如Nemotron）的推理内容泄漏到助手回复中，污染输出。
    - [链接](https://github.com/sipeed/picoclaw/issues/2745)
3.  **中低严重 - 兼容性问题**:
    - **#2668**: Gemini API对复杂JSON Schema（含`$ref`, `anyOf`）的工具调用返回400错误。**已关联PR #2740 尝试修复DeepSeek流式解析，但非直接针对Gemini**。
    - [链接](https://github.com/sipeed/picoclaw/issues/2668)
    - **#2665**: Anthropic提供商下拉菜单使用错误的模型ID格式（点代替连字符）。
    - [链接](https://github.com/sipeed/picoclaw/issues/2665)

## 6. 功能请求与路线图信号
- **高票/高讨论需求**:
  - **Email原生通道 (#2421)**: 若实现，将显著拓展PicoClaw在传统通信场景的适用性。目前无直接开发PR，但需求明确。
  - **仪表盘OAuth MCP添加 (#2546)**: 指向“无代码配置”的UX方向，与项目“易用性”目标高度一致。无直接PR，但相关OAuth/配置改进可能间接支持。
- **相关现有PR参考**:
  - **#2260**: 添加xAI提供商支持，显示项目在持续扩展模型提供商兼容性。
  - **#2163**: 修复Google Antigravity的OAuth scope刷新，体现了对OAuth流程的持续优化经验。

## 7. 用户反馈摘要
从Issue描述中提炼的核心痛点：
- **环境限制**: 用户受限于必须使用Email或无法使用常见聊天平台的环境（#2421）。
- **配置复杂度**: 非技术用户添加需要OAuth的MCP服务器时，面临命令行和Node.js依赖障碍，渴望图形化、URL驱动的简单流程（#2546）。
- **输出质量**: 推理模型（OpenRouter）的“思考过程”泄漏污染最终回复，影响用户体验（#2745）。
- **工具可靠性**: 工具执行因路径解析Bug而失败，影响自动化工作流（#2749）。
- **提供商兼容性**: 与Gemini、Anthropic等主流提供商的模型接口细节不匹配，导致运行时错误（#2668, #2665）。

## 8. 待处理积压
以下Issues/PRs标记为 `stale` 或长时间未更新，需维护者关注以避免社区贡献流失：
- **#2462 (PR)**: 修复Codex流式输出及Telegram重复重试。创建于4月9日，涉及特定Android TV盒场景，可能影响小众但重要的用户群。
  - [链接](https://github.com/sipeed/picoclaw/pull/2462)
- **#2630 (PR)**: Web UI显示完整回复时间并保留历史记录。创建于4月23日，用户体验改进。
  - [链接](https://github.com/sipeed/picoclaw/pull/2630)
- **#2546 (Issue)**: OAuth 2.1仪表盘支持。创建于4月16日，高讨论度功能请求。
  - [链接](https://github.com/sipeed/picoclaw/issues/2546)
- **#2668 (Issue)**: Gemini复杂Schema支持。创建于4月25日，影响Notion等MCP集成。
  - [链接](https://github.com/sipeed/picoclaw/issues/2668)
- **#2260 (PR)**: xAI提供商支持。创建于4月2日，功能扩展PR。
  - [链接](https://github.com/sipeed/picoclaw/pull/2260)
- **#2163 (PR)**: Google Antigravity OAuth修复。创建于3月29日，认证相关重要修复。
  - [链接](https://github.com/sipeed/picoclaw/pull/2163)

**维护建议**: 建议对上述 `stale` 项目进行状态复核（确认是否仍可复现、是否有新信息），并明确下一步行动（合并、要求补充信息或关闭），以保持项目响应效率。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-03)

## 今日速览
项目今日社区活跃度极高，过去24小时内新增12个Issues和15个PRs，其中7个PR已合并关闭，显示维护团队响应迅速。核心稳定性问题（如host-sweep数据库崩溃）在报告后24小时内即获修复，同时多个新功能集成（Matrix、Home Assistant等）的PR持续迭代。整体项目健康度良好，但部分环境特定问题（如OpenRC安装）和长期开放的大型功能PR需关注。

## 版本发布
无新版本发布。最近版本信息未在数据中提供。

## 项目进展
今日合并/关闭的PR共7项，推进关键修复与功能：
- **稳定性修复**：PR [#2183](https://github.com/qwibitai/nanoclaw/pull/2183) 修复 `host-sweep` 尝试写入只读数据库导致服务崩溃的严重Bug（对应 Issues [#2188](https://github.com/qwibitai/nanoclaw/issues/2188), [#2196](https://github.com/qwibitai/nanoclaw/issues/2196)）。
- **兼容性修复**：PR [#2179](https://github.com/qwibitai/nanoclaw/pull/2179) 修复 OneCLI agent identifier 中下划线与连字符不匹配问题（对应 Issue [#2046](https://github.com/qwibitai/nanoclaw/issues/2046)），解决容器启动失败。
- **交互修复**：PR [#2181](https://github.com/qwibitai/nanoclaw/pull/2181) 修复 poll-loop 中 slash 命令在热容器上静默失效的问题。
- **新功能**：PR [#2192](https://github.com/qwibitai/nanoclaw/pull/2192) 合并 DeltaChat channel adapter，扩展消息通道支持。
- **迁移流程**：PR [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) 合并 v1 → v2 自动化迁移流程（实验性），简化升级路径。

## 社区热点
- **host-sweep 严重Bug（Issues [#2188](https://github.com/qwibitai/nanoclaw/issues/2188), [#2196](https://github.com/qwibitai/nanoclaw/issues/2196)）**：同一问题被两位用户报告，描述详细且附带堆栈跟踪，引发社区对数据库操作安全性的关注。该Bug在24小时内由 PR [#2183](https://github.com/qwibitai/nanoclaw/pull/2183) 修复，体现高效协作。
- **性能优化倡议（Issue [#2189](https://github.com/qwibitai/nanoclaw/issues/2189)）**：用户主动提出 token 效率优化方案，并愿意提交PR，反映社区对运行成本与性能的深度关切，可能催生一系列小型改进。

## Bug 与稳定性
| 严重程度 | 问题描述 | 相关链接 | 修复状态 |
|----------|----------|----------|----------|
| **严重** | `host-sweep` 中 `deleteOrphanProcessingClaims` 尝试写入只读数据库，导致服务定期崩溃。 | Issue [#2188](https://github.com/qwibitai/nanoclaw/issues/2188), [#2196](https://github.com/qwibitai/nanoclaw/issues/2196) | **已修复** (PR [#2183](https://github.com/qwibitai/nanoclaw/pull/2183)) |
| **高** | CLI channel 的 `namespacedPlatformId` 生成错误格式（`cli:local`），导致路由查找失败。 | Issue [#2186](https://github.com/qwibitai/nanoclaw/issues/2186) | **已修复** (PR [#2187](https://github.com/qwibitai/nanoclaw/pull/2187)) |
| **中** | WhatsApp LID→phone JID 映射未持久化，重启后导致基于LID的发送者路由失败。 | Issue [#2194](https://github.com/qwibitai/nanoclaw/issues/2194) | 无修复PR |
| **中** | `init-first-agent` 存储带频道前缀的 `platform_id`，与原生WhatsApp适配器输出的裸JID不匹配，造成静默路由失败。 | Issue [#2193](https://github.com/qwibitai/nanoclaw/issues/2193) | 无修复PR |
| **低** | 安装脚本在 OpenRC 系统上失败，因 `tryStartDocker` 函数不兼容。 | Issue [#2199](https://github.com/qwibitai/nanoclaw/issues/2199) | 无修复PR |

## 功能请求与路线图信号
- **高优先级需求**：**Gmail多账户支持**（Issue [#2195](https://github.com/qwibitai/nanoclaw/issues/2195)）。当前 `add-gmail-tool` 仅支持单OAuth连接，用户需同时管理个人与工作邮箱，需求明确且影响实际工作流。
- **大型功能进行中**：
  - **Matrix E2EE channel**（PR [#1624](https://github.com/qwibitai/nanoclaw/pull/1624)，创建于2026-04-04）：添加完整Matrix端到端加密通道及per-group模型配置，功能重大但审查周期较长。
  - **Home Assistant MCP集成**（PR [#1327](https://github.com/qwibitai/nanoclaw/pull/1327)，创建于2026-03-22）：通过MCP服务器提供HA REST API控制，扩展智能家居场景。
- **其他技能请求**：`webchat v1` 技能（PR [#2069](https://github.com/qwibitai/nanoclaw/pull/2069)）持续开发中，旨在提供Web界面交互能力。
- **优化方向**：token效率优化（Issue [#2189](https://github.com/qwibitai/nanoclaw/issues/2189)）可能催生非功能性改进PR，影响成本与性能。

## 用户反馈摘要
**核心痛点**：
1. **安装与部署**：脚本在非标准Linux发行版（OpenRC）上失败，缺乏环境检测与降级处理。
2. **多账户支持**：Gmail、可能还包括其他OAuth服务，缺乏多连接文档或实现。
3. **数据持久化缺陷**：WhatsApp适配器缓存未持久化，重启后功能受损；`init-first-agent` 的 `platform_id` 格式不一致导致静默故障。
4. **CLI工具可用性**：`namespacedPlatformId` 错误使本地CLI测试无法工作，影响开发者体验。

**积极反馈**：用户对项目潜力表示认可（如Issue [#2189](https://github.com/qwibitai/nanoclaw/issues/2189) 开篇致谢），并主动提出性能优化方案，显示社区建设意愿强烈。维护团队对关键Bug的快速修复（host-sweep问题24小时内闭环）也获得隐性认可。

## 待处理积压
需维护者重点关注以下长期开放PR，其功能重大但审查进展缓慢：
- **PR [#1624](https://github.com/qwibitai/nanoclaw/pull/1624)**（Matrix E2EE channel，创建于2026-04-04）：添加完整Matrix支持，代码量较大，可能影响下一版本功能集。
- **PR [#1327](https://github.com/qwibitai/nanoclaw/pull/1327)**（Home Assistant MCP，创建于2026-03-22）：集成智能家居平台，同样需投入审查资源。

此外，Issue [#1017](https://github.com/qwibitai/nanoclaw/issues/1017)（repo-tokens badge百分比显示）虽创建较早（2026-03-

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-03)

## 今日速览
过去24小时项目社区活跃度极高，共提交47个PR，但仅6个被合并/关闭，合并率约13%，**审查与合并积压严重**，可能影响迭代速度。技术焦点集中于 **Reborn 架构重构**，一系列定义核心边界与API的Issues密集创建，显示底层设计进入关键阶段。同时，用户报告的**生产环境Bug**（如Gemini工具调用失败）得到快速响应并提交修复PR，社区对稳定性保持高度关注。新功能贡献方面，@abbyshekit 主导的CLI增强（备份/导入/洞察）与NEAR Intents交易代理迭代迅速，**功能交付能力强劲**。

---

## 版本发布
*无新版本发布。最新稳定版为 `v0.26.0`（2026-04-21），当前开发分支为 `v0.27.0` 系列。*

---

## 项目进展
今日有6个PR被合并/关闭，但具体内容未在展示列表中。从关联Issues推断，可能包括：
- **安装器修复**：`#2818`（v0.26.0安装器在x86_64 Linux失败）已关闭，提升安装可靠性。
- **安全与审计增强**：`#3144`（资源上限强制执行）与 `#3147`（义务审计记录接入生产事件流）已关闭，为Reborn安全模型落地关键步骤。
- **通道激活修复**：`#3105`（Wasm通道回退逻辑）已关闭，改善无头服务器部署体验。

**整体推进**：Reborn架构定义工作（见“社区热点”）为后续大规模开发奠定基础；CLI工具链与NEAR Intents功能持续完善，产品能力边界扩展。

---

## 社区热点
### Issues 讨论焦点
- **`#3016`** ([链接](https://github.com/nearai/ironclaw/issues/3016))：Reborn核心组件 `AgentLoopHost`  facade定义，评论3条。作为“cutover blocker”，此Issue及关联系列（`#3013`, `#3193`-`#3199`等）是**当前最高优先级技术决策点**，涉及主机层协调、执行模型、存储边界等，社区（核心团队）正密集定义接口契约。
- **`#90`** ([链接](https://github.com/nearai/ironclaw/issues/90))：音频管道（STT/TTS）功能请求，创建于2月但仍在活跃。虽评论仅2条，但标记为P1-P2，是**WhatsApp语音笔记等功能的前提**，长期未推进可能成为产品缺口。

### PRs 贡献热点
- **@abbyshekit 批量贡献**：今日提交至少12个PR，覆盖CLI备份/导入/洞察命令、NEAR Intents交易代理付费研究层、Docker多架构支持、bug修复（如Gemini thoughtSignature）等。**单个贡献者驱动多线程功能交付**，显示健康的社区贡献生态。
- **核心团队架构PR**：`#3212` ([链接](https://github.com/nearai/ironclaw/pull/3212))（事件投影服务）与 `#3184` ([链接](https://github.com/nearai/ironclaw/pull/3184))（Reborn内存测试）由核心成员推进，支撑Reborn事件溯源与测试体系。

---

## Bug 与稳定性
| 严重程度 | Issue | 问题描述 | 状态 | 关联PR |
|----------|-------|----------|------|--------|
| **高** | `#3214` ([链接](https://github.com/nearai/ironclaw/issues/3214)) | Gemini 3.x模型工具调用返回 `INVALID_ARGUMENT`（缺失 `thought_signature`），此前两次修复（#1565, #1752）未根治，**生产环境回归**。 | 新开 | `#3215` ([链接](https://github.com/nearai/ironclaw/pull/3215)) 已提交修复 |
| **中** | `#2344` ([链接](https://github.com/nearai/ironclaw/issues/2344)) | 预发布Web UI加载时控制台报TypeError/ReferenceError/CSP违规，**影响用户体验与调试**。 | 活跃 | 未明确关联PR |
| **中** | `#3201` ([链接](https://github.com/nearai/ironclaw/issues/3201)) | DeepSeek模型工具调用失败，**LLM提供商兼容性问题**。 | 新开 | 未明确关联PR |

**稳定性评估**：关键LLM集成（Gemini）存在顽固性回归，需紧急关注；Web UI基础稳定性问题持续存在，可能需系统性CSP与错误处理审查。

---

## 功能请求与路线图信号
- **音频管道（`#90`）**：长期P1-P2需求，但近3个月无实质进展。**可能被Reborn重构阻塞**，需评估是否纳入下一大版本（v0.28+）。
- **NEAR Intents交易代理**：相关PR（`#3207`, `#3211`, `#3218`）密集迭代，显示**金融工具集成是当前产品重点**，预计近期发布试用版。
- **CLI运维增强**：`backup/import/insights` 命令（PR `#3178`, `#3186`, `#3177`）表明**重视可运维性与数据迁移**，符合企业部署需求。
- **Docker多架构支持（`#3168`/`#3208`）**：已提交PR，**将显著扩大硬件兼容性**（Apple Silicon、ARM服务器等），预计下一版本包含。

---

## 用户反馈摘要
- **痛点集中**：工具调用失败（Gemini/DeepSeek）、Web UI控制台错误、安装器兼容性，反映**生产环境鲁棒性不足**，尤其多LLM提供商场景。
- **配置体验问题**：`#3081`（可选凭据工具显示“Configure”按钮）已修复，显示对**UI细节与误导性提示**的敏感度提升。
- **身份显示错误**：`#3035`（硬编码preamble覆盖用户配置）已修复，体现对**个性化设置**的重视。
- **积极信号**：备份/导入命令受关注，用户有**数据迁移与跨主机部署**的明确需求。

---

## 待处理积压
### 长期未响应重要 Issues
- **`#90`** ([链接](https://github.com/nearai/ironclaw/issues/90))：音频管道（创建于2026-02-14）。**超3个月未推进**，P1-P2优先级，是媒体处理功能链的关键缺口。建议核心团队明确时间表或降级优先级。

### PR 合并积压
- **41个PR待合并**，其中多个为XL尺寸（如 `#3187` 邀请系统、`#3211` NEAR Intents付费研究层），涉及数据库迁移、新功能模块，**审查资源明显不足**。建议：
  1. 优先合并阻塞Reborn架构的PR（如 `#3212` 事件投影）。
  2. 为XL PR分配专项审查轮次，避免功能碎片化。
  3. 考虑扩大核心维护者团队或引入自动化预检（如CI增强）。

---

**报告生成时间**：2026-05-03  
**数据来源**：[IronClaw GitHub](https://github.com/nearai/ironclaw) (近24小时活跃数据)  
**分析师备注**：项目处于**大规模重构与功能扩张并行**阶段，社区贡献活跃但合并瓶颈凸显。建议优先保障Reborn架构定义Issue的决策速度，并系统性解决LLM集成稳定性问题，以维持用户信任。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-03)

**报告生成时间**: 2026-05-03  
**数据周期**: 过去24小时 (2026-05-02 至 2026-05-03)

---

### 1. 今日速览
过去24小时，LobsterAI 项目无新开或活跃的 Issues，也无新版本发布。代码贡献方面，共有 **4 个 Pull Requests 处于待合并状态**，但无任何 PR 被合并或关闭。项目整体活跃度**中等偏低**，核心工作集中于代码审查与修复，但合并流程可能存在瓶颈。社区讨论未见显著活跃迹象。

---

### 2. 版本发布
*无新版本发布。*

---

### 3. 项目进展
**今日无 PR 被合并或关闭**，项目核心代码库未向前推进。目前有 4 个 PR 等待合并，它们分别针对配置同步、模型支持、会话显示和定时任务通知等关键模块的修复与增强。这些 PR 若合并，将提升系统稳定性与用户体验，但当前处于停滞状态。

---

### 4. 社区热点
由于所有 PR 的评论数均未定义（`undefined`），**今日未观察到显著的社区讨论热点**。但以下 PR 因涉及核心功能修复，可能隐含较高关注度：
- **#1879**: 修复插件配置同步问题（今日新开）。
- **#813**: 小米渠道模型支持（标记为 `stale`，但今日有更新）。
- **#1181** & **#1191**: 分别涉及会话列表过滤和定时任务通知渠道修复（均标记为 `stale`，今日有更新）。

---

### 5. Bug 与稳定性
- **无新报告的 Bug 或崩溃问题**（过去24小时无 Issues 更新）。
- **待合并的修复性 PR**:
  - **#1879** (中优先级): 修复 `OpenClawConfigSync.sync()` 会覆盖用户手动添加的插件加载路径，导致社区插件（如 `memory-lancedb-pro`）安装后失效。**已有修复方案，待合并**。
  - **#1181** (中优先级): 修复 OpenClaw 主代理会话错误显示在用户 Cowork 会话列表中的问题。**已有修复方案，待合并**。
  - **#1191** (中优先级): 修复定时任务通知渠道选择器中 POPO、企业微信不显示、微信错误标记及编码显示问题。**已有修复方案，待合并**。

---

### 6. 功能请求与路线图信号
- **#813**: 为小米（Xiaomi）渠道新增 `MiMo V2 Pro` 和 `MiMo V2 Omni` 模型支持。这是一个明确的**功能扩展请求**，若合并将丰富渠道模型选择。鉴于其已标记为 `stale` 但今日有更新，可能被纳入下一版本以完善渠道生态。

---

### 7. 用户反馈摘要
从 PR 描述中可提炼以下**真实用户痛点**：
- **配置管理**: 用户手动安装的插件路径被系统自动同步覆盖，导致插件“丢失”，体验不透明。
- **通知体验**: 定时任务通知渠道选择器存在多个缺陷（渠道缺失、错误标记、编码显示），影响用户配置效率和理解。
- **界面清晰度**: 内部使用的 OpenClaw 主代理会话错误暴露在用户界面，造成混淆。
- **渠道支持**: 小米渠道模型列表过时，用户无法使用最新发布的模型（如 `mimo-v2-pro`）。

---

### 8. 待处理积压
以下 PR 创建时间较长（超过1个月），状态均为 `OPEN` 且标记为 `stale`，**提醒维护者优先审查**：
- **#813** (创建于 2026-03-25): 小米模型支持，已等待 **39 天**。
- **#1181** (创建于 2026-04-01): 会话列表过滤，已等待 **32 天**。
- **#1191** (创建于 2026-04-01): 定时任务通知渠道修复，已等待 **32 天**。
- **#1879** (创建于 2026-05-02): 插件路径修复，虽为新开，但作为高优先级修复，建议加速处理。

**积压分析**: 长期未合并的 PR 集中在配置、UI 和渠道集成等用户体验层面，可能反映**代码审查资源紧张**或**优先级排序问题**。这些修复对用户日常使用影响直接，建议评估后尽快合并。

---

**报告说明**: 本报告基于 GitHub 公开数据自动生成，旨在客观反映项目动态。所有链接均指向对应 GitHub 页面。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-03)

---

### 1. 今日速览
项目今日保持**高活跃度**，社区共新增4个Issues（均为新开或活跃状态），无关闭记录；Pull Requests方面有3条更新，其中2条待合并，1条已关闭。核心开发工作聚焦于**远程沙盒支持**与**身份认证调试**，同时社区提出了关于**AI代理信誉系统**与**多模态生成**的新功能构想。未发布新版本，项目处于功能迭代与问题修复的并行阶段。

---

### 2. 版本发布
*今日无新版本发布。*

---

### 3. 项目进展
- **PR #339 [CLOSED]**: `feat(i18n): add zh-TW Traditional Chinese locale support`
  - **进展**: 已合并/关闭。为macOS与Web应用完整添加了繁体中文（台湾）本地化支持，包括UI字符串、区域检测与语言选择功能。
  - **影响**: 显著提升了非简体中文用户的使用体验，是国际化路线的重要一步。
  - **链接**: https://github.com/moltis-org/moltis/pull/339

---

### 4. 社区热点
- **Issue #959 [OPEN]**: `[bug] DeepSeek - Error: The reasoning_content in the thinking mode must be passed back to the API.`
  - **热度**: 今日唯一收到评论的Issue（1条），涉及核心AI模型（DeepSeek）的“思考模式”集成故障，可能影响多模型会话的稳定性。
  - **诉求**: 用户报告了在启用推理模式时API调用失败，需开发团队修复数据传递逻辑。
  - **链接**: https://github.com/moltis-org/moltis/issues/959

- **PR #942 [OPEN]**: `feat(sandbox): remote & multi-backend sandbox support (Vercel, Daytona, Firecracker)`
  - **热度**: 待合并PR中评论数未显示，但功能重要性高。该PR旨在解决云部署环境（如DigitalOcean、Fly.io）下Docker-in-Docker不可用的问题，通过支持远程沙箱提供商扩展了Moltis的部署灵活性。
  - **诉求**: 社区与维护者共同推动基础设施改进，以适应更广泛的云原生场景。
  - **链接**: https://github.com/moltis-org/moltis/pull/942

---

### 5. Bug 与稳定性
| 严重程度 | Issue | 问题描述 | 状态 | 关联Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **高** | #959 | DeepSeek模型在“思考模式”下，`reasoning_content`未正确传回API，导致会话失败。 | OPEN | 无 |
| **中** | #958 | 文档中“本地TTS提供商设置”链接指向已归档/未维护的第三方仓库（如Coqui），导致用户配置失败。 | OPEN | 无 |

---

### 6. 功能请求与路线图信号
- **高可能性（已有PR）**:
  - **远程/多后端沙盒支持** (PR #942): 解决云部署痛点，架构级改进，**极有可能纳入下一版本**。
  - **Matrix OIDC注册调试增强** (PR #957): 提升运维诊断能力，属于稳定性优化，**很可能随下一版本发布**。
- **提案评估中（社区请求）**:
  - **SwarmScore集成** (Issue #960): 为AI代理添加可移植的信誉评分系统。这是一个跨项目生态提案，需评估其与Moltis代理框架的契合度与标准化成本。
  - **OpenAI Codex OAuth图像生成支持** (Issue #956): 请求通过OAuth集成`gpt-image-2`，扩展多模态能力。需确认API权限模型与现有图像处理流程的兼容性。

---

### 7. 用户反馈摘要
- **核心功能痛点**: 用户@krokozha报告了DeepSeek模型在高级推理模式下的集成故障，反映出**多模型、多模式（如思考模式）的稳定性**是当前关键挑战。
- **文档维护滞后**: 用户@Thndr指出技术文档链接失效，表明**文档与代码的同步机制**存在疏漏，直接影响用户自托管配置成功率。
- **生态扩展期待**: 社区主动提出**SwarmScore**（信誉系统）与**图像生成**等需求，显示用户将Moltis视为可扩展的代理平台，期待其融入更广阔的AI代理生态。

---

### 8. 待处理积压
- **需优先审查的PR**:
  - **#942** (远程沙盒支持): 创建于4月30日，已讨论2天，功能影响大，建议核心维护者尽快审查。
  - **#957** (Matrix OIDC调试): 创建于5月2日，属于问题修复与优化，审查周期应较短。
- **需跟进的文档Issue**: **#958** (文档链接失效) 虽为新开，但属于低复杂度、高价值的修复，建议文档维护者立即处理以避免新用户困惑。
- **整体评估**: 无长期（>1个月）未响应的严重积压，但**待合并PR的审查速度**是影响版本迭代节奏的关键因素。

---
*报告生成时间: 2026-05-03*  
*数据来源: [Moltis GitHub Repository](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-05-03)

**报告生成时间**：2026-05-03 00:00 UTC  
**数据周期**：过去24小时（2026-05-02 至 2026-05-03）  
**项目仓库**：https://github.com/agentscope-ai/QwenPaw

---

## 1. 今日速览
今日CoPaw社区活跃度极高，新增14个Issues和6个PRs，全部处于活跃或待合并状态，无关闭或合并记录。核心问题聚焦于**MCP客户端稳定性**（Agent假死问题）、**模型回退机制缺失**以及**Ollama集成缺陷**。多位首次贡献者提交PR，显示社区参与度提升，但问题积压速度超过解决速度，项目整体处于高负荷的反馈与开发并行阶段，需关注关键Bug的修复优先级。

---

## 2. 版本发布
- **无新版本发布**。最新稳定版仍为 1.5.1（根据 Issues 提及版本推断）。

---

## 3. 项目进展
今日无PR被合并或关闭，但以下6个待合并PR推进了多项功能与修复，若合并将显著提升项目能力：
- **CLI技能测试命令** ([#3999](https://github.com/agentscope-ai/QwenPaw/pull/3999))：新增 `qwenpaw skills test` 命令，支持在分配前验证技能。
- **巴西葡萄牙语本地化** ([#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009))：为Console和网站添加pt-BR语言支持（约46%字符串已翻译）。
- **MemoryHook长期记忆增强** ([#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007))：修复向量索引构建（#3182）与配置同步（#3828）问题，并新增类似OpenClaw的记忆Hook。
- **WSL2网络修复** ([#4005](https://github.com/agentscope-ai/QwenPaw/pull/4005))：解决WSL2 NAT环境下API超时问题（#3041）。
- **向量模型连接测试** ([#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831))：添加向量数据库连接验证功能（Under Review）。
- **Discord线程创建** ([#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525))：Cron任务调度至Discord时自动创建线程，避免消息混杂（Under Review）。

---

## 4. 社区热点
最活跃的讨论集中在以下Issue，反映了社区对**核心稳定性**和**关键功能缺失**的高度关注：
- **[#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)**（6条评论）：MCP客户端内部TaskGroup异常导致Agent假死（无响应但不退出）。该问题影响多渠道（钉钉、微信）使用，为**最高优先级稳定性问题**。
- **[#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327)**（5条评论）：请求模型回退链（Model Fallback Chain）以自动处理速率限制。该需求被多次提及（另见#4011、#3789），是**路线图关键信号**。
- **[#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006)**（2条评论）：OpenAI兼容提供商未过滤推理内容（Reasoning Content），可能影响输出正确性，涉及MiniMax等提供商。

---

## 5. Bug 与稳定性
按严重程度排序（今日新报告或更新）：
1. **严重**：  
   - [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)：MCP客户端TaskGroup异常导致Agent假死，影响多渠道运行。**尚无Fix PR**。
2. **中高**：  
   - [#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006)：OpenAI兼容提供商未过滤推理内容，可能导致模型输出包含不应显示的思考过程。**尚无Fix PR**。
   - [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991)：Ollama频道会话记忆丢失，上下文无法传递。**尚无Fix PR**。
3. **中**：  
   - [#4004](https://github.com/agentscope-ai/QwenPaw/issues/4004)：`max_input_length`硬编码导致上下文压缩行为与模型不匹配。**尚无Fix PR**。
   - [#3997](https://github.com/agentscope-ai/QwenPaw/issues/3997)：MCP客户端`timeout`不可配置（默认30秒）。**尚无Fix PR**。
   - 注：PR [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007) 已修复部分记忆相关Bug（#3182、#3828），但未覆盖上述新问题。

---

## 6. 功能请求与路线图信号
高频需求指向**可靠性增强**与**生产就绪**：
- **模型回退机制**：  
  - [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327)（主模型速率限制时自动切换备用模型）  
  - [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011)（增加fallback模型选项）  
  - [#3789](https://github.com/agentscope-ai/QwenPaw/issues/3789)（模型回退功能界面）  
  **信号**：该功能需求强烈且重复，极可能纳入下一版本。
- **渠道控制增强**：  
  - [#4010](https://github.com/agentscope-ai/QwenPaw/issues/4010)（飞书、微信等渠道支持打断/终止）。
- **生产环境支持**：  
  - [#4008](https://github.com/agentscope-ai/QwenPaw/issues/4008)（Agent测评功能，查询完整聊天记录用于汇报）。
- **用户体验改进**：  
  - [#4002](https://github.com/agentscope-ai/QwenPaw/issues/4002)（对话界面可视化共享区域，支持框选/标注）。  
  - [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001)（手动删除单条消息）。
- **技术债务**：  
  - [#4004](https://github.com/agentscope-ai/QwenPaw/issues/4004)（自动推导`max_input_length`）已作为功能增强提出。

---

## 7. 用户反馈摘要
从Issues评论与描述中提炼的真实痛点：
- **多端同步缺失**：微信对话与浏览器操作不同步（[#4000](https://github.com/agentscope-ai/QwenPaw/issues/4000)），导致用户无法追踪Agent在浏览器的完整过程。
- **本地模型支持不足**：Ollama集成存在记忆丢失（[#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991)）及ARM架构子进程问题（[#4003](https://github.com/agentscope-ai/QwenPaw/issues/4003)），影响本地部署体验。
- **稳定性担忧**：MCP客户端假死（[#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)）和超时不可配（[#3997](https://github.com/agentscope-ai/QwenPaw/issues/3997)）削弱生产环境可信度。
- **生产就绪缺口**：缺乏

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