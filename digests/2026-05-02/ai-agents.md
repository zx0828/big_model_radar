# OpenClaw 生态日报 2026-05-02

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-05-02 11:10 UTC

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

⚠️ 摘要生成失败。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-05-02)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于 **“高速发展与深度重构并行”** 的关键阶段。一方面，社区围绕**模型兼容性**（尤其是国产及新兴模型如 DeepSeek、Xiaomi MiMo）、**渠道可靠性**（Telegram、Discord、Matrix）和**多端体验一致性**展开密集的稳定性修复；另一方面，多个头部项目正推进**破坏性架构升级**（如 Zeroclaw 的 Schema v3、IronClaw 的 Reborn 架构），并加速向**企业级特性**（安全隔离、K8s 部署、审计日志）演进。社区需求从“能用”转向“可靠、安全、可扩展”，技术重心从快速集成转向构建健壮的运行时与开发者生态。

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | Release 动态 | 健康度评估 | 活跃度层级 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **NanoBot** | 11 (3新/8关) | 27 (8待/19合) | 无新版本 | **极高**：高吞吐、快速闭环、Bug 修复与 UX 改进并重。 | **快速迭代** |
| **Zeroclaw** | 41 | 50 (42待) | 无新版本 | **高**：社区参与深，但 PR 积压高，合并流水线需优化。聚焦 v0.8.0 重构。 | **快速迭代** |
| **PicoClaw** | 12 | 24 (部分合并) | **v0.2.8-nightly** | **高**：发布节奏稳定，安全与部署能力增强，合并效率良好。 | **快速迭代** |
| **NanoClaw** | 10 (6新/4关) | 27 (16待/11合) | 无新版本 | **高**：响应迅速，核心稳定性修复（OpenCode provider）落地快。 | **快速迭代** |
| **IronClaw** | 30 (21新/9关) | 50 (34待/16合) | 无新版本 | **中高**：Reborn 架构集成测试密集，新贡献者活跃，但合并压力大。 | **质量巩固** |
| **Moltis** | 6 (5关) | 9 (7合/2待) | 无新版本 | **优秀**：高合并率，修复与功能推进平衡，测试覆盖增强。 | **快速迭代** |
| **CoPaw** | 7 (新增) | 3 (待审查) | 无新版本 | **中**：需求活跃，但**无任何合并**，审查环节成明显瓶颈。 | **需求收集** |
| **LobsterAI** | 0 | 4 (全待) | 无新版本 | **低**：无社区互动，PR 长期积压（最长38天），维护者响应停滞。 | **停滞风险** |
| **OpenClaw** | - | - | - | **未知/失败**：摘要生成失败，可能为项目停滞或数据异常。 | **需核实** |
| TinyClaw/ZeptoClaw/EasyClaw | 0 | 0 | 无 | **停滞** | **停滞** |

**注**：健康度综合考量 Issue/PR 的创建-关闭比、合并效率、社区评论互动及版本节奏。

## 3. OpenClaw 在生态中的定位
**OpenClaw 作为被参照的核心项目，今日动态摘要生成失败，这一异常本身即是一个重要信号。** 若项目仍在维护，此故障可能反映其社区数据接口或自动化流程存在问题；若项目已实质停滞，则标志着生态核心参照点的缺失。

*   **假设其仍为技术标杆**：OpenClaw 历史上通常代表**最简内核与极致灵活性**的路线，强调核心 Agent 循环的纯净性与插件生态的开放性。与 NanoBot（强 WebUI/即时通讯集成）、Zeroclaw（强配置与多代理流程）、PicoClaw（强嵌入式与企业安全）相比，OpenClaw 的差异化在于**不预设任何渠道或 UI，提供最基础的 LLM 交互原语**，供社区构建各类上层应用。
*   **与同类对比**：当前最活跃的 **NanoBot** 和 **Zeroclaw** 均已发展出丰富的内置渠道和配置系统，而 OpenClaw 若保持原路线，其社区规模可能小于这些“开箱即用”型项目，但仍是**架构创新**（如工具调用范式、记忆管理）的重要试验场。
*   **结论**：OpenClaw 的现状是生态当前最大的不确定性因素。其技术路线（极简内核）仍有价值，但需观察其社区是否已转移至其分支项目（如 NanoBot、Zeroclaw 是否吸收其核心思想）。

## 4. 共同关注的技术方向
多项目共同涌现的需求，反映了行业共性痛点：

| 技术方向 | 涉及项目 | 具体诉求与表现 |
| :--- | :--- | :--- |
| **模型层抽象与兼容性** | NanoBot, Zeroclaw, PicoClaw, CoPaw, IronClaw | 1. **推理模式控制**：Xiaomi MiMo、DeepSeek 的 `reasoning_effort`/`reasoning_content` 处理混乱（NanoBot #3585, Zeroclaw #5600）。<br>2. **流式传输稳定性**：工具调用时 SSE 流过早结束（NanoBot #3551）、`reasoning_content` 在流中丢失（Zeroclaw #6233）。<br>3. **国产/新兴模型适配**：小米 MiMo、DeepSeek、Kimi 的 API 差异导致集成故障频发。 |
| **Agent 状态与会话管理** | NanoBot, Zeroclaw, IronClaw, CoPaw | 1. **会话隔离与数据安全**：跨会话缓存污染（NanoBot #3571）、会话 ID 不匹配导致记忆不可见（Zeroclaw #5550）、多租户安全加固（PicoClaw）。<br>2. **长期任务与中断恢复**：Agent 被打断后无法返回主任务（NanoBot #3292）、中断运行可见性与恢复（NanoClaw #2173, #2174）。 |
| **渠道与身份识别** | NanoBot, PicoClaw, Moltis, CoPaw | 1. **群聊身份区分**：在 Discord、飞书、Telegram 群组中无法识别不同用户（NanoBot #3552, PicoClaw 需求）。<br>2. **渠道可靠性**：Telegram 论坛崩溃（Moltis #947）、cron 任务触发错误（PicoClaw #1757）、Matrix 认证循环（NanoBot #1851）。 |
| **企业级与部署特性** | PicoClaw, Zeroclaw, IronClaw, Moltis | 1. **安全加固**：技能白名单、会话级工作区隔离（PicoClaw）、秘密注入与网络策略（IronClaw Reborn）。<br>2. **部署便利性**：K8s 部署清单（PicoClaw）、远程沙盒支持（Moltis #942）、配置扁平化（Zeroclaw Schema v3）。<br>3. **可观测性与审计**：审计记录（IronClaw）、错误可追踪（NanoClaw）。 |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **NanoBot** | **全渠道 Web 智能体** | 需要强大 WebUI 和即时通讯（飞书、Discord、Matrix）集成的个人/团队用户。 | 钩子系统（`HookCenter`）、工具循环防护、会话持久化优化。强于**前端交互与渠道适配**。 |
| **Zeroclaw** | **可配置多代理平台** | 需要复杂工作流、多代理协作、严格配置管理的开发者与中小团队。 | **Schema v3 配置扁平化**、微内核（精简默认工具）、ACP 协议。强于**配置驱动与架构清晰度**。 |
| **PicoClaw** | **嵌入式与企业安全** | 嵌入式开发者、对安全与部署有高要求的企业用户。 | **技能白名单、会话隔离、K8s 部署**、异步 API。强于**安全边界与部署就绪**。 |
| **NanoClaw** | **OpenCode Provider 专家** | 深度依赖 Claude 指令文件（`CLAU.md`）生态的用户与开发者。 | 专精于 **OpenCode provider 的上下文注入与指令解析**，容器化与资源清理。 |
| **IronClaw** | **安全沙箱与合规** | 对安全、审计、资源管控有极端要求的金融、法律等受监管行业。 | **Reborn 架构**：义务（Obligation）系统、HostRuntime 服务图、沙箱内存保护。强于**运行时安全与合规**。 |
| **Moltis** | **全渠道对话中心** | 追求跨平台（Telegram、Discord、终端、Web）一致体验的终端用户与社区管理者。 | **可移植数据层**（`moltis-portable`）、远程沙盒、电话集成。强于**渠道覆盖与用户体验**。 |
| **CoPaw** | **多平台同步助手** | 需要在微信、浏览器等多端保持状态同步的个人用户。 | 多端状态同步、记忆系统（Ollama 优化）、CLI 测试工具。强于**跨平台一致性**。 |
| **LobsterAI** | **OpenClaw 衍生渠道增强** | OpenClaw 用户，需 Cowork 会话等特定功能。 | 基于 OpenClaw 的渠道与 UI 扩展，但维护缓慢。 |

## 6. 社区热度与成熟度分层

*   **快速迭代层（高活跃、高合并率）**：**NanoBot, PicoClaw, Moltis, NanoClaw**。这些项目 Issue/PR 处理高效，社区反馈闭环快，版本节奏健康，处于**功能快速填充与稳定性并重**的成长期。
*   **质量巩固层（重大重构、测试驱动）**：**Zeroclaw, IronClaw**。两者均在进行**破坏性架构升级**（Schema v3, Reborn），社区讨论深入，测试覆盖要求高，合并节奏受架构质量约束，处于**从“能用”到“可靠”** 的关键转型期。
*   **需求收集层（请求多、合并慢）**：**CoPaw**。功能请求（模型回退、记忆管理）活跃，但 PR 审查积压严重，**开发吞吐是瓶颈**，可能面临社区耐心考验。
*   **停滞风险层（无活动或严重积压）**：**LobsterAI, TinyClaw, ZeptoClaw, EasyClaw**。无新活动或 PR 长期未合并，**社区参与度低**，项目活力存疑。**OpenClaw** 因数据异常需单独核实。

## 7. 值得关注的趋势信号

1.  **模型抽象层成为新竞争壁垒**：DeepSeek、Xiaomi MiMo 等模型的 API 差异导致各项目重复“踩坑”。未来胜出者需提供**强大的模型抽象层**，能自动适配不同提供商的 `reasoning_content`、流式协议、参数命名（如 `reasoning_effort`）。开发者应关注 **Zeroclaw 的提供商抽象设计** 与 **NanoBot 的模型检测逻辑**。
2.  **Agent 状态管理从“会话”走向“任务”**：`#3292`（NanoBot）提出的 **Session-Level Focus Tool** 和 NanoClaw 的 **中断恢复** 议题，标志社区意识到当前基于“会话”的上下文管理不足以支撑**长期、可中断的自主任务**。**任务（Task）作为一级抽象**，关联记忆、工具调用权限与恢复点，可能是下一代 Agent 框架的核心。
3.  **企业级特性从“加分项”变为“入场券”**：PicoClaw 的**技能白名单与会话隔离**、IronClaw 的**审计与秘密管理**、Zeroclaw 的**配置扁平化**，均指向生态正严肃对待**多租户、可审计、可部署**的需求。开发者若面向企业市场，必须优先构建这些能力。
4.  **渠道生态向“非即时”与“硬件”延伸**：PicoClaw 的 **Email 渠道请求**、Moltis 的 **电话集成**、PicoClaw 的 **串口（UART）工具**，显示应用场景从聊天机器人向**自动化工作流、物联网控制、语音交互**扩展。渠道抽象层需支持异步、非实时消息。
5.  **开发者体验（DX）工具化**：CoPaw 的 **CLI Skill 测试命令**、Zeroclaw 的 **Schema 迁移工具**、NanoBot 的 **钩子系统**，表明项目开始提供**专用工具链**以降低插件/技能开发与系统维护的复杂度。优秀的 DX 将成为吸引贡献者的关键。

**对 AI 智能体开发者的核心建议**：
*   **短期**：优先解决**模型兼容性**与**渠道可靠性**（尤其是群聊身份）问题，这是用户留存的基础。
*   **中期**：投入 **Agent 状态与任务管理** 的架构设计，这是实现真正自主性的关键。
*   **长期**：将**安全、可观测性、部署就绪**作为核心设计原则，而非事后补丁。关注 **Zeroclaw 的 Schema v3** 与 **IronClaw 的 Reborn** 的最终形态，它们可能定义下一代企业级 Agent 框架的标准。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-02)

## 1. 今日速览
NanoBot 项目今日维持**极高活跃度**，社区贡献密集。过去24小时内共处理 **11 个 Issues**（3 个新开/活跃，8 个关闭）和 **27 个 Pull Requests**（8 个待合并，19 个已合并/关闭）。开发重点集中于**提升稳定性与兼容性**：多个关键 Bug 修复（如 DeepSeek API、流式传输、Matrix 认证）已合并；同时，围绕用户体验的改进（WebUI 交互、群聊身份识别）和核心架构优化（钩子系统、工具循环防护）正在积极推进。无新版本发布，但代码库健康度显著提升。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展（重要合并/关闭的 PR）
今日合并的 PR 覆盖了错误处理、用户体验、安全与核心功能多个层面，项目向前迈出坚实一步：

*   **修复关键模型兼容性问题**：
    *   `#3587` (boogieLing): 修复 `reasoning_effort: null` 无法在 Xiaomi MiMo 等模型上正确禁用推理模式的问题。**（对应 Issue #3585）**
    *   `#3560` (JiajunBernoulli): 调整 DeepSeek 推理模式检测逻辑，修复历史消息处理错误。
    *   `#3579` (coldxiangyu163): Anthropic 长请求错误自动回退至流式调用，解决非流式调用超时问题。**（对应 Issue #2709）**
*   **增强 API 与流式传输稳定性**：
    *   `#3555` (boogieLing): 修复 OpenAI 兼容 API 在 `stream=true` 且涉及工具调用时 SSE 流过早终止的问题。**（对应 Issue #3551）**
    *   `#3577` (hongshunanhai): 防止流式输出中不完整的思考标签（如 `<thi`）泄露给用户。
*   **改善用户体验与身份识别**：
    *   `#3583` (ramonpaolo): 改进 Beta WebUI 流式交互体验，确保加载状态持续至后端明确结束；修复聊天切换时的消息缓存污染问题。
    *   `#3552` (BarclayII): 为飞书频道添加发送者身份信息（显示名、ID）到模型提示，解决群聊中用户身份无法区分的问题。
    *   `#3528` (XJPeng12): 清理 `WebFetchTool` 参数中的 Markdown 反引号和引号，防止 URL 解析失败。
*   **提升健壮性与安全性**：
    *   `#3582` (yorkhellen): 恢复 `estimate_prompt_tokens_chain` 中的 tiktoken 回退机制，防止因提供商计数器异常导致崩溃。**（对应 Issue #3581）**
    *   `#3578` (coldxiangyu163): 修复 Matrix 频道在致命认证错误（如 `M_UNKNOWN_TOKEN`）后无限重试循环的问题。**（对应 Issue #1851）**
    *   `#3492` (mohamed-elkholy95): **安全加固**：修复公共部署（如通过 Cloudflared/ngrok）时 `/webui/bootstrap` 和 `/api/sessions` 的权限 footgun 问题。
*   **核心功能与数据持久化**：
    *   `#2334` (LZDQ): 将会话消息持久化频率从“LLM 停止时”提升至“每次迭代后”，防止 Agent 中途失败导致进度丢失。
    *   `#3561` (tongtianli03-code): 添加 `origin_message_id` 支持与出站消息去重，提升多会话场景下的消息追踪准确性。

## 4. 社区热点
*   **最活跃 Issue**: `#3292` - **Session-Level Focus Tool** 功能请求（4 条评论）。该议题提出了一个深刻的架构挑战：如何让 LLM Agent 在被打断后能像人类一样“锚定”主要任务并返回。这触及了当前 `my` 工具和 `_runtime_vars` 在**长期任务管理**上的根本局限，可能影响 Agent 的核心记忆与规划机制。
*   **最受关注 PR** (基于创建/更新时间与关联 Issue):
    *   `#3587` & `#3585`: 直接回应 Xiaomi MiMo 模型用户无法禁用推理模式的痛点，修复了文档与实现的不一致。
    *   `#3583`: 针对 Beta WebUI 的 UX 改进，反映了早期用户对交互流畅度的迫切需求。
    *   `#3555` & `#3551`: 修复 OpenAI 兼容 API 流式传输的严重缺陷，对依赖流式输出的集成场景至关重要。

## 5. Bug 与稳定性（按影响范围排序）
| 严重程度 | 问题描述 | 关联 Issue | 状态 | 修复 PR |
| :--- | :--- | :--- | :--- | :--- |
| **高** | **OpenAI 兼容 API 流式传输过早结束**：涉及工具调用的请求在 `stream=true` 时 SSE 流异常终止。 | #3551 | **已关闭** | #3555 |
| **高** | **DeepSeek 模型 API 错误**：`reasoning_content` 字段验证失败，导致 Agent 循环崩溃。 | #3584 | **开放** | 无（根因已定位，待提交） |
| **高** | **Xiaomi MiMo 推理模式无法禁用**：`reasoning_effort: null` 被忽略，强制开启推理。 | #3585 | **开放** | #3587 (待合并) |
| **中** | **Matrix 认证错误无限循环**：`M_UNKNOWN_TOKEN` 等错误导致同步循环每 2 秒 spam 服务器。 | #1851 | **已关闭** | #3578 |
| **中** | **tiktoken 回退机制崩溃**：`estimate_prompt_tokens_chain` 在提供商计数器异常时引发 `NameError`，影响基于 Token 的内存合并。 | #3581 | **已关闭** | #3582 |
| **中** | **ReadFileTool 跨会话缓存污染**：文件内容缓存未按会话隔离，导致新会话读取到“文件未更改”的存根而非实际内容。 | #3571 | **已关闭** | 无（问题已识别） |
| **低** | **WebFetchTool URL 解析失败**：LLM 生成的 URL 常包裹 Markdown 反引号，导致验证失败。 | 无（PR #3528 自发） | **已关闭** | #3528 |

## 6. 功能请求与路线图信号
*   **重大架构级请求**：`#3292` - **Session-Level Focus Tool**。用户期望 Agent 具备跨中断的“主任务锚定”能力，这可能需要重构任务管理、记忆检索和工具调用逻辑，是潜在的**路线图级功能**。
*   **近期可能纳入的增强**：
    *   `PR #3358` (chengyongru): **模型预设**功能，允许用户保存和快速切换模型+参数组合，极大提升配置灵活性，已接近合并。
    *   `PR #3564` (aiguozhi123456): **HookCenter 类型化事件钩子系统**，为插件生态提供标准化的 `observe/transform/guard` 扩展点，是重要的可扩展性基础。
    *   `PR #3580` (coldxiangyu163): **工具循环防护**，防止小模型在工具调用失败后陷入重复尝试的无限循环，提升鲁棒性。
*   **平台扩展信号**：`Issue #3518` 要求支持小米模型，结合 `#3585` 和 `#3587`，表明社区积极推动对**国产及新兴模型**的兼容性。

## 7. 用户反馈摘要
从 Issues 和 PRs 中提炼的核心用户痛点与场景：

*   **身份识别困境**：在 **Discord 家庭群组** (`#3511`) 和 **飞书群聊** (`#3552`) 中，Bot 无法区分不同用户，导致上下文混乱。用户强烈需要将 `sender_id` 等元数据注入 LLM 提示。
*   **模型兼容性焦虑**：用户在使用 **Xiaomi MiMo** (`#3585`)、**DeepSeek** (`#3584`)、**Anthropic 长请求** (`#2709`) 时遭遇特定错误，反映项目对**非主流或新发布模型**的测试覆盖与适配需加强。
*   **生产环境稳定性担忧**：Matrix 认证错误无限循环 (`#1851`)、流式传输提前结束 (`#3551`)、会话持久化不足 (`#2334`) 等问题，暴露了**长期运行服务**在错误恢复和数据安全上的脆弱点。
*   **高级使用场景支持不足**：`ReadFileTool` 的跨会话缓存问题 (`#3571`) 影响了多任务并行工作流；`WebFetchTool` 对 Markdown 格式的脆弱性 (`#3528`) 降低了与 LLM 生成内容的协同性。
*   **积极反馈**：社区对 Bug 的响应速度（多个 Issue 在 1-2 天内有关闭或修复 PR）表示认可，尤其是 Matrix 和 Anthropic 问题的快速修复。

## 8. 待处理积压（需维护者关注）
以下议题创建时间较长或影响较大，目前仍处于开放状态，建议优先评估：

| Issue/PR | 标题 | 创建时间 | 状态 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| `#3292` | Session-Level Focus Tool | 2026-04-19 | **OPEN** | **高优先级功能请求**，讨论深入（4 评论），触及 Agent 核心范式，但无对应 PR，需明确是否纳入路线图及技术方案。 |
| `#1759` | Reduces MCP tool context overhead with lazy loading and auto-demotion | 2026-03-09 | **OPEN** | **长期待处理优化**，针对 MCP 工具上下文开销的性能改进，对使用大量工具的部署至关重要，但近 2 个月无更新。 |
| `#3584` | DeepSeek API 'reasoning_content' error | 2026-05-01 | **OPEN** | **高严重度 Bug**，根因已由报告者定位，但尚未有官方修复 PR 合并，影响 DeepSeek 模型用户。 |
| `#3585` | `reasoning_effort: null` does not disable thinking on Xiaomi MiMo | 2026-05-02 | **OPEN** | **高严重度 Bug**，已有修复 PR `#3587` 创建，但尚未合并，需审查并尽快合入以解决模型兼容性问题。 |
| `#3358` | feat(config): add model presets for quick model switching | 2026-04-21 | **OPEN** | **高价值功能增强**，PR 已创建并持续更新，但近一周无活动，建议审查以提升用户配置体验。 |

---
*报告生成时间：2026-05-02*  
*数据来源：NanoBot GitHub (github.com/HKUDS/nanobot) 过去 24 小时公开数据

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-02)

## 1. 今日速览
过去24小时，Zeroclaw 项目维持**极高活跃度**，共产生 91 条 Issue/PR 更新（41 条 Issue，50 条 PR）。社区贡献聚焦于 **v0.8.0 版本的前置工程工作**，包括配置架构升级（Schema v3）、核心工具集精简及多代理体验设计。PR 待合并数量（42 条）持续高位，表明合并流水线需优化。无新版本发布，团队重心明显偏向重大内部重构而非功能迭代。项目整体健康度表现为 **“高社区参与、高技术债务清理、发布节奏主动放缓”**。

## 2. 版本发布
*无新版本发布。最新稳定版仍为 v0.7.4（2026-04-30）。*

## 3. 项目进展
今日合并/关闭的 PR 主要推进了**工程基础、协议兼容性与开发者体验**：
- **#6167** (已合并): 实现 ACP 协议 v1，恢复与 Nori 等外部工具的连接，解决关键集成阻塞。
- **#6195** (已合并): 修复 `SkillMeta` 静默丢弃未知字段问题，提升技能开发调试效率。
- **#6098** (已合并): 删除 `zeroclaw-runtime` 中未使用的死代码 (`tracker.rs`)，减少技术债务。
- **#6265** (已合并): 修复发布工作流中 `CHANGELOG-next.md` 清理步骤因分支保护失败的问题，优化发布自动化。
- **#6100** (已关闭): 修复 ACP 服务器未提供 v1 schema 的问题，与 #6167 协同确保协议一致性。

**整体推进幅度**：解决了外部工具集成的关键阻塞，清理了代码库冗余，并修复了发布流水线的稳定性问题，为 **v0.8.0 的大规模 Schema 迁移**扫清了部分工程障碍。

## 4. 社区热点
讨论最活跃的议题集中在**配置复杂性、工具发现性与核心架构演进**：
- **Issue #5847** (8 评论, OPEN): 用户困惑于 `gateway.web_dist_dir` 与 `ZEROCLAW_WEB_DIST_DIR` 的使用文档缺失，反映配置项暴露不清晰、文档滞后于代码的普遍问题。
- **Issue #5862** (8 评论, OPEN): 用户发现 Agent 无法自主调用 `zeroclaw cron` 工具，暴露出**工具能力自发现机制**存在缺陷，Agent 对自身可用工具认知不足。
- **PR #6266** (新建, 核心 PR): Schema v3 批量迁移的“总控”PR，涉及配置扁平化、通道别名、模型提供商别名等破坏性变更，是 v0.8.0 的核心，社区关注其设计细节与迁移路径。
- **PR #6107** (进行中): 修复 DeepSeek 等提供商在流式响应中丢失 `reasoning_content` 的问题，直接影响多轮对话能力，引发对提供商兼容性抽象层的深入讨论。

## 5. Bug 与稳定性
按严重程度排列，今日重点关注：

| 严重等级 | Issue | 问题简述 | 状态 | 关联 Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **S0** (数据丢失/安全风险) | #5528 | Email 通道配置逻辑错误，可能导致认证失败或消息丢失。 | OPEN | 无 |
| | #5533 | `allowed_path` 的 `contains` 逻辑不生效，路径限制被绕过。 | OPEN | 无 |
| **S1** (工作流阻塞) | #5600 | Kimi-code 提供商在流式工具调用中因 `reasoning_content` 缺失报错。 | OPEN | #6107 (进行中) |
| | #5613 | Jira Server 使用 PAT 认证时因邮箱字段逻辑死锁导致 401/403。 | OPEN | 无 |
| **S2** (降级行为) | #6233 | DeepSeek 提供商 `chat_messages_to_native()` 在纯文本助手消息中丢弃 `reasoning_content`。 | OPEN | #6107 (可能覆盖) |
| | **#6269** (新) | 上下文压缩器在压缩助手消息时丢失 `reasoning_content`。 | OPEN | 无 |
| **S3** (次要) | #5862 | Agent 不知道可以使用 `zeroclaw cron` 工具。 | OPEN | 无 |
| | #5556 | Ollama 小模型摘要时 60s 超时不足，导致上下文丢失。 | OPEN | #6277 (部分相关) |

**注**：已关闭的 S1 级 Bug #6100 (ACP v1 schema) 由 #6167 修复。

## 6. 功能请求与路线图信号
结合 Issue 与 PR，以下需求可能影响 **v0.8.0 及后续版本**：
- **架构级**:
  - **#5890** (RFC 已通过): 多代理用户体验流程设计，是核心交互范式演进。
  - **#5947** & **PR #6266**: Schema v3 批量迁移，实现配置扁平化、字段迁移，是 v0.8.0 的**核心破坏性变更**。
  - **#5617**: Phase 2 D5 — 将内核默认工具集精简至 10-12 个，推动微内核架构落地。
- **集成增强**:
  - **#5601**: 为 Ollama Cloud、Kimi、MiniMax 等提供商添加订阅原生 OAuth，提升用户体验。
  - **#6165**: 倾向于更轻量的核心，将专用集成（如 gws-cli, jira）移至 Skills，与 #5617 方向一致。
- **性能与体验**:
  - **#5570**: 优化 SQLite 内存后端的向量搜索，从 O(n) 全表扫描改为 ANN 索引，显著提升召回速度。
  - **#6241**: 为 `agent_browser` 后端添加 headed/headless 配置选项，增强调试灵活性。

## 7. 用户反馈摘要
从 Issue 评论与描述中提炼的核心痛点：
1.  **配置与文档鸿沟**: 多个 Issue (#5847, #5605) 反映配置项（如 `gateway.web_dist_dir`, 多实例路径）文档缺失或行为不符预期，导致用户无法正确部署。
2.  **工具能力可见性差**: #5862 显示 Agent 无法感知自身工具（如 cron），用户需“知道”工具存在才能使用，违背 Agent 自主性原则。
3.  **提供商兼容性脆弱**: #5600, #6233, #5527 表明对 DeepSeek、Kimi、Gemini 等提供商 API 变化的响应滞后，`reasoning_content` 处理成重灾区，影响推理质量。
4.  **会话状态不一致**: #5550 揭示自动保存的记忆因 `session_id` 不匹配而不可见，破坏对话连续性，属于严重数据一致性问题。
5.  **渠道集成细节问题**: #5528 (Email), #5558 (Feishu), #5604 (Mattermost) 反映各通道在认证、反应、私信等细节上存在逻辑缺陷，影响特定用户群体验。

## 8. 待处理积压
以下为创建较早、评论较多、严重性高或处于关键路径但尚未解决的 Issue，需维护团队优先关注：
- **#5847** (OPEN, S0, 8 评): `gateway.web_dist_dir` 文档缺失。**高优先级**，直接影响 Web UI 部署。
- **#5600** (OPEN, S1, 6 评): Kimi-code 提供商流式工具调用失败。有进行中的 PR #6107，需加速审查合并。
- **#5550** (OPEN, S1, 6 评): 自动保存记忆因 session_id 不匹配不可见。核心数据一致性问题，需修复。
- **#5947** (OPEN, P2, 6 评): Schema v3 批量迁移。**v0.8.0 里程碑**，依赖 PR #6266 等批量合并，需协调。
- **#5601** (OPEN, P2, 4 评): 新增提供商 OAuth 支持。社区需求明确，需维护者审查方案。
- **#5533** (OPEN, S0, 2 评): `allowed_path` 逻辑缺陷。安全相关路径限制失效，需紧急修复。

---
*报告生成于 2026-05-02，基于 GitHub API 数据。所有链接指向 Zeroclaw 仓库 (github.com/zeroclaw-labs/zeroclaw)。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-02)

---

## 1. 今日速览
PicoClaw 项目在过去 24 小时维持**高度活跃**状态，共处理 **36 个** Issue/PR 更新（Issues 12 条，PRs 24 条），并发布了新的 nightly 构建版本。社区讨论聚焦于**渠道功能改进**、**提供商兼容性**及**企业级安全特性**。多个与安全加固、Kubernetes 部署及多提供商支持相关的重大 PR 已合并，项目正稳步向 v0.2.8 稳定版本推进。整体开发健康度良好，但部分长期存在的 Bug 和功能请求仍需关注。

---

## 2. 版本发布
- **新版本**: `v0.2.8-nightly.20260502.6e1fab80`
  - **类型**: Nightly Build（自动构建，可能存在不稳定因素）
  - **更新摘要**: 该版本集成了近期合并的安全加固、异步 API、新提供商支持等大量变更。完整更新日志见 [对比链接](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)。
  - **迁移注意**: 由于包含架构性安全更新（如会话隔离、技能白名单），升级前建议备份配置并测试关键工作流。Nightly 版本不推荐生产环境直接使用。

---

## 3. 项目进展
今日合并/关闭的 **15 个 PR** 中，以下为关键进展：

| 类别 | PR 编号 | 标题 | 影响 |
|------|---------|------|------|
| **安全加固** | #2325, #2322, #2095, #2102 | 技能白名单、会话级工作区隔离、多租户安全加固 | 显著提升多用户/生产环境下的安全边界，防止工具输出注入与会话数据泄露。 |
| **部署能力** | #2326 | 添加 K3s 部署清单与专用 Dockerfile | 提供开箱即用的 Kubernetes 生产部署方案，支持多架构构建。 |
| **提供商扩展** | #2323 | 增加 NVIDIA 与 Azure AI 提供商原生支持 | 扩展模型生态，增强与企业云 AI 服务的集成能力。 |
| **API 增强** | #2324, #1991 | 新增异步 `/chat` HTTP 端点 | 为外部系统（如 Teams 机器人、自定义前端）提供标准 REST 集成接口。 |
| **Bug 修复** | #2746, #2739, #2743 | OpenRouter 推理抑制文档、Telegram 表格渲染修复、DeepSeek 代理检测修复 | 解决特定提供商/渠道的兼容性问题，提升用户体验。 |

**整体推进**: 项目已完成“安全 Shield”特性主干合并，企业级功能矩阵基本成型。下一阶段重心可能转向稳定性修复与 v0.2.8 正式版打磨。

---

## 4. 社区热点
过去 24 小时讨论最活跃的 Issue（按评论数）：

| Issue | 主题 | 评论数 | 核心诉求 |
|-------|------|--------|----------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | 每小时定时任务触发 Channel 错误 | 6 | 修复 cron 任务在 Telegram 等渠道的稳定性问题，确保自动化可靠运行。 |
| [#2421](https://github.com/sipeed/picoclaw/issues/2421) | 请求添加 Email 作为原生渠道 | 4 | 满足企业/科研等依赖邮件通信的用户场景，扩展渠道生态。 |
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | 禁用 Enter 键发送消息（移动端） | 4 | 改善移动端输入体验，支持多行文本编辑。 |

**分析**: 热点集中于**渠道易用性**与**企业集成需求**。用户对自动化稳定性（cron）和移动端交互有强烈改进期望；Email 渠道请求反映项目在“非即时通讯”场景的覆盖不足。

---

## 5. Bug 与稳定性
### 新报告/活跃 Bug（按影响范围排序）

| 严重程度 | Issue | 问题描述 | 状态 | 关联 PR |
|----------|-------|----------|------|---------|
| **高** | [#2745](https://github.com/sipeed/picoclaw/issues/2745) | OpenRouter 推理模型（如 Nemotron）的思考内容泄露至助手回复 | 新开 (今日) | #2746 (已合并，提供文档方案) |
| **高** | [#2744](https://github.com/sipeed/picoclaw/issues/2744) | Android v0.2.8 客户端无法访问任何标签页数据 | 新开 (今日) | 无 |
| **中** | [#2602](https://github.com/sipeed/picoclaw/issues/2602) | OpenAI 与 Antigravity 的 OAuth 认证失败 | 活跃 (4/20 创建) | 无 |
| **中** | [#1757](https://github.com/sipeed/picoclaw/issues/1757) | 每小时 cron 任务触发 Channel 错误（Telegram） | 活跃 (3/18 创建) | 无 |

**说明**: 
- #2745 已有文档修复方案（PR #2746），但需评估是否需代码层自动处理。
- #2744 为移动端新版本回归问题，需紧急排查。
- #2602 与 #1757 为长期未决问题，影响核心功能使用。

---

## 6. 功能请求与路线图信号
用户提出的新功能请求及实现可能性评估：

| Issue | 请求功能 | 业务价值 | 实现信号 |
|-------|----------|----------|----------|
| [#2421](https://github.com/sipeed/picoclaw/issues/2421) | 添加 Email 原生渠道 | 高（企业/保守环境必需） | 无直接 PR，但渠道架构已支持扩展，可能纳入下一版本。 |
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) | 支持 OAuth 2.1 + PKCE 的 MCP 服务器（仪表板配置） | 高（降低非技术用户使用门槛） | 与现有安全架构（技能白名单）方向一致，优先级可能较高。 |
| [#2649](https://github.com/sipeed/picoclaw/issues/2649) | 添加串口（UART）工具支持 | 中（嵌入式开发场景关键） | 已有 I2C/SPI 工具，技术路径清晰，社区贡献可能性大。 |
| [#2652](https://github.com/sipeed/picoclaw/issues/2652) | 支持 GitHub/Copilot 作为提供商 | 中（开发者工具集成） | 需评估 Copilot API 兼容性，暂无 PR。 |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | 配置中支持流式 HTTP 请求 | 中（提升响应体验） | 提供商层已部分支持（如 DeepSeek 流式修复 #2740），配置化可能跟进。 |

**路线图信号**: 企业级集成（Email、OAuth 2.1）与嵌入式工具扩展是当前需求热点。鉴于安全与多提供商支持已基本完成，下一周期可能聚焦**渠道生态完善**与**配置灵活性**。

---

## 7. 用户反馈摘要
从 Issue 评论与描述中提炼的痛点与满意点：

**痛点**:
- **渠道可靠性**: cron 任务在 Telegram 上频繁失败（#1757），影响自动化场景。
- **移动端体验**: Android 客户端 Enter 键强制发送、v0.2.8 标签页数据无法访问（#2376, #2744），交互设计亟待优化。
- **提供商兼容性**: OAuth 认证错误（#2602）、OpenRouter 推理模型内容泄露（#2745）、DeepSeek 流式解析缺失（#2740 修复中），显示对多样化模型的支持仍不完善。
- **企业部署障碍**: 缺乏 Email 渠道、OAuth 配置复杂，限制在传统企业环境的应用。

**满意点**:
- **安全进展**: 技能白名单与会话隔离功能（已合并 PR）受到关注，被视为生产环境部署的关键里程碑。
- **提供商扩展**: NVIDIA 与 Azure 支持（已合并）获得积极反馈，拓宽了硬件与云服务选择。
- **API 改进**: 异步 `/chat` 端点（已合并）为系统集成提供了便利。

---

## 8. 待处理积压
以下 Issue/PR 创建时间较长或状态停滞，建议维护团队优先关注：

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 建议 |
|------|------|------|----------|------|------|
| Issue | #1757 | cron 任务 Channel 错误 | 2026-03-18 | OPEN (6 评论) | 高优先级，影响核心自动化功能。 |
| Issue | #2376 | 禁用 Enter 键发送消息 | 2026-04-06 | OPEN (4 评论) | 移动端用户体验关键问题。 |
| Issue | #2602 | OAuth 认证错误 | 2026-04-20 | OPEN (3 评论) | 认证流程阻塞

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
过去24小时，NanoClaw 项目保持**高度活跃**，共处理 10 个 Issues（6 新/活跃，4 关闭）和 27 个 PRs（16 待合并，11 已合并/关闭）。开发重点集中于**稳定性修复**（尤其是 OpenCode provider 相关漏洞）和**核心功能推进**（多通道、多模型支持）。社区响应迅速，多个高优先级 Bug 被快速修复，同时新功能 PR 持续流入，项目整体健康度良好，迭代节奏紧凑。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并/关闭的 PR 主要聚焦于关键稳定性修复与开发体验优化：
- **#2151** (closed): `fix(host-sweep): clear orphan processing_ack rows on kill` - 修复了容器异常终止后孤儿记录残留导致的“claim-stuck”循环问题，显著提升系统恢复能力。
- **#2165** (closed): `Resolve CLAUDE.md includes for OpenCode provider` - 修复 OpenCode provider 无法正确解析 `@./...md` 包含指令的 Bug，确保基础指令和片段能送达 LLM。
- **#2153** (closed): `fix(opencode): use native instructions config to load CLAUDE.md` - 优化 OpenCode provider 的指令加载机制，与原生配置对齐。
- **#2171** (closed): `chore(tooling): switch pre-commit hook to lint-staged` - 将 pre-commit 从全量格式化切换为 `lint-staged`，大幅提升大型仓库的提交速度。

这些修复共同解决了 OpenCode provider 的上下文注入、资源泄漏和开发效率问题，为 V2 稳定运行扫除了重要障碍。

## 4. 社区热点
**最活跃讨论：Issue #2150** (已关闭，5 条评论)
- **链接**: https://github.com/qwibitai/nanoclaw/issues/2150
- **诉求分析**: 该 Issue 报告了 OpenCode provider 的严重 Bug：`wrapPromptWithContext` 会向模型发送字面量的 `@./...md` 行，导致 `CLAUDE.md` 及片段无法送达。这直接造成 Agent 在无指令状态下运行，属于**高严重性、静默上下文丢失**问题。社区围绕该问题进行了多轮调试，最终通过 PR #2165 和 #2153 协同修复。讨论反映了用户对**提示词注入可靠性**的高度敏感，以及核心 provider 必须保证指令完整传递的刚性需求。

## 5. Bug 与稳定性
今日新报告的 **6 个 OPEN Issues** 按潜在影响排序：
1. **#2177** (yaniv-golan): `Active-query push-mode stalls silently after a turn produces empty-text result` - 推送模式在空结果后静默停滞，影响非聊天界面技能。**严重程度：高**（功能中断）。暂无 fix PR。
2. **#2173** (lazer-maker): `B-01: Interrupted-Run Detection and Observability` - 缺乏中断运行的可见性与标记，导致消息“丢失”。**严重程度：高**（可观测性缺失）。暂无 fix PR。
3. **#2174** (lazer-maker): `B-02: Interrupted-Run Recovery and Requeue` - 依赖 B-01，需实现中断消息的恢复与重入队机制。**严重程度：高**（数据可靠性）。暂无 fix PR。
4. **#2176** (lazer-maker): `SC short-follow-up continuity broken by Gmail fresh-session containment` - Gmail 强制新会话破坏 SC 连续任务上下文。**严重程度：中**（特定集成体验）。暂无 fix PR。
5. **#2175** (lazer-maker): `NanoClaw V1 → V2 Upgrade: operational contracts, diagnostics, and safe delegation` - V2 升级需保留 V1 的运营合同（权限、工具安全等）。**严重程度：中**（升级路径风险）。暂无 fix PR。
6. **#2172** (ariel-oversee): `Bug: container/build.sh and Node host compute different image slugs on

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
项目今日维持极高活跃度，共处理 **30 个 Issues**（21 新开/活跃，9 关闭）与 **50 个 Pull Requests**（34 待合并，16 已合并/关闭）。开发核心聚焦于 **Reborn 架构的深度集成与测试覆盖**，多个关键服务组合（如 HostRuntime、义务处理）已就绪。同时，新贡献者 `@abbyshekit` 主导的 **Legal harness 大型功能模块** 并行推进，涵盖文档处理、搜索、导出及 Slack 集成等完整链路。社区反馈集中于安装兼容性、Web UI 稳定性及特定 LLM 工具链问题，需维护团队优先关注。

## 2. 版本发布
- **无新版本发布**。最新稳定版仍为 `v0.26.0`（2026-04-21）。

## 3. 项目进展
今日合并/关闭的关键变更推动项目在稳定性、架构集成与功能扩展三方面取得进展：
- **安装器修复**：PR #3172 合并，将 `cargo-dist` 升级至 `0.31.0`，彻底解决 `v0.26.0` 安装器在 Linux 平台下载失败的问题（关联 Issue #2818）。
- **门控体验优化**：PR #3157 合并，修复 Approval 门控在 CodeAct 脚本中错误内抛为 `RuntimeError` 的问题，确保门控能正确暂停并等待用户交互。
- **Reborn 架构集成**：
  - PR #3159 关闭，将 `Obligation::EnforceResourceCeiling` 接入 Reborn 主机运行时与沙箱 enforcement，完善资源管控。
  - PR #3167 关闭，为 Reborn 内存写入添加提示安全策略与保护路径注册。
  - Issues #3143、#3146、#3140、#3139、#3144、#3147、#3145 等相继关闭，标志着生产环境信任决策、秘密注入、网络策略、审计记录及背景进程义务生命周期等核心路径已成功接入 HostRuntime 服务图。
- **Legal harness 基础加固**：PR #3173（未在列表但为堆叠基础）及系列 PR #3190、#3191、#3192、#3194、#3196、#3174 持续构建法律技能的后端能力，包括 Web UI、表格化审查、全文搜索、硬删除、DOCX/PDF 导出等。

## 4. 社区热点
讨论最活跃的议题围绕 **Reborn 架构的落地策略与质量保障**：
- **Issue #2987** ([链接](https://github.com/nearai/ironclaw/issues/2987))：**44 条评论**。作为 Reborn 架构的总跟踪器（EPIC），社区密集讨论“分组 PR 计划”与“架构着陆策略”，旨在避免巨型堆叠 PR，确保分阶段平稳集成。这是当前技术决策的核心焦点。
- **Issue #3067** ([链接](https://github.com/nearai/ironclaw/issues/3067))：**14 条评论**。规划 Reborn 垂直切片集成测试套件，强调通过公共入口点验证整个 substrate，而非仅依赖单元测试。该测试覆盖计划是质量门控的关键。

## 5. Bug 与稳定性
今日报告的新问题按潜在影响排序：
- **严重**：
  - **Issue #2949** ([链接](https://github.com/nearai/ironclaw/issues/2949))：安装器对 `x86_64-unknown-linux-gnu` 平台报告“无可用下载”，但发布页面实际存在对应资产。**可能与已修复的 #2818 同源，待验证**。
- **中高**：
  - **Issue #2344** ([链接](https://github.com/n

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-02)

## 1. 今日速览
项目今日处于**开发活跃但社区互动低迷**的状态。过去24小时内，无新 Issues 创建或关闭，也无新版本发布，但存在 **4 个待合并的 Pull Request**，表明核心开发工作仍在持续推进，代码审查与合并环节可能存在积压。社区讨论热度极低，所有 PR 的评论数均未定义（可能为0），需关注维护者的合并效率以保持开发节奏。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日**无 PR 被合并或关闭**，所有活动集中在**待合并队列**中。以下 PR 若合并，将分别推进配置稳定性、模型支持、用户体验和通知功能：
- **#1879**：修复 OpenClaw 配置同步时覆盖手动添加的插件路径问题，提升插件管理灵活性。
- **#813**：为小米渠道新增 `MiMo V2 Pro` 和 `MiMo V2 Omni` 模型，扩展多模态能力支持。
- **#1181**：隐藏 OpenClaw 主代理会话，避免在 Cowork 会话列表中造成用户困惑。
- **#1191**：重构定时任务通知渠道选择器，修复过滤缺陷并优化显示体验。

## 4. 社区热点
*过去24小时无 Issues 或 PR 产生有效评论（数据均显示 `undefined`），未形成显著讨论热点。*  
**观察**：最“活跃”的 PR 为 **#813**（创建于 2026-03-25，于今日更新），其主题为新增小米模型，可能因模型列表更新而被重新激活，但未引发社区反馈。

## 5. Bug 与稳定性
今日**无新报告的 Bug 或崩溃问题**。但以下**待合并的修复 PR** 针对已知稳定性问题：
1. **高优先级**：**#1879** - 配置同步逻辑缺陷导致用户手动安装的插件路径丢失，影响功能扩展性。
2. **中优先级**：**#1191** - 定时任务通知渠道选择器存在过滤错误与显示问题，影响任务配置可靠性。
3. **低优先级**：**#1181** - 内部会话暴露于用户界面，属于体验问题，无功能影响。

## 6. 功能请求与路线图信号
- **新增模型支持**：PR **#813** 明确请求将小米 MiMo V2 系列模型纳入官方配置，**很可能被纳入下一版本**，以保持渠道模型列表的时效性。
- **无其他新功能请求**：今日无新开 Issues 提出功能需求，社区需求输入暂不活跃。

## 7. 用户反馈摘要
*因无 Issues 评论，无法直接提炼用户反馈。*  
**间接推断**：从 PR 描述可窥见潜在痛点：
- **配置管理**：用户通过 `pm install` 手动安装插件（如 `memory-lancedb-pro`）后，被 LobsterAI 的自动同步覆盖，反映**配置持久化与用户自定义操作的冲突**。
- **通知体验**：定时任务通知渠道显示原始编码（如 `moltbot-popo`）或错误标记，反映**用户界面本地化与状态反馈不足**。
- **会话管理**：内部技术会话（`[OpenClaw]`）暴露给用户，反映**后台机制与用户视图的边界模糊**。

## 8. 待处理积压
以下 PR 创建时间较长，**建议维护者优先审查**，以防功能滞后或问题长期存在：
- **#813**（创建于 2026-03-25，已等待 38 天）：新增小米模型，**模型支持滞后风险**。
- **#1181**（创建于 2026-04-01，已等待 31 天）：隐藏内部会话，**用户体验问题待修复**。
- **#1191**（创建于 2026-04-01，已等待 31 天）：通知渠道修复，**功能缺陷待解决**。
- **#1879**（今日创建）：插件路径保留问题，**虽新但影响核心配置流程**，建议快速跟进。

---
**报告生成说明**：本报告基于 GitHub 公开数据自动生成，聚焦客观事实与数据指标。社区互动数据缺失可能因 API 限制或实际无评论，建议维护者主动在 PR 中引导讨论以提升透明度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-02)

## 1. 今日速览
过去24小时，Moltis 项目保持**高度活跃的开发节奏**，共处理9个PR（7个已合并/关闭）和6个Issues（5个已关闭）。核心工作聚焦于**稳定性修复**与**关键功能增强**，涵盖 Telegram、Discord 集成、终端体验及数据可移植性。无新版本发布，但大量修复已进入主分支，为下个版本奠定基础。社区新开一项图像生成功能请求，显示用户对扩展 AI 能力的期待。

## 2. 版本发布
- **无新版本发布**。近期合并的修复（如 Telegram 崩溃、Discord 命令、聊天布局）预计将包含在下一个补丁版本中。

## 3. 项目进展
今日合并/关闭的 PR 主要解决稳定性问题与用户体验优化，推动项目在多平台集成和可维护性上显著前进：

- **稳定性修复**：
  - [#954](https://github.com/moltis-org/moltis/pull/954) 升级 `teloxide` 至 0.17，彻底修复 Telegram 论坛主题聊天中上传文档导致的崩溃（对应 #947）。
  - [#955](https://github.com/moltis-org/moltis/pull/955) 修复终端标签页创建时的竞态条件，消除“窗口不存在”的误报错误。
  - [#950](https://github.com/moltis-org/moltis/pull/950) 修复 Discord 斜杠命令参数注册问题，使 `/mode`、`/model` 等参数生效（对应 #948）。

- **UI/UX 改进**：
  - [#952](https://github.com/moltis-org/moltis/pull/952) 修复聊天消息容器水平溢出问题，消除不必要的横向滚动条（对应 #945）。
  - [#953](https://github.com/moltis-org/moltis/pull/953) 为聊天自动滚动功能（#946）添加6个端到端回归测试，防止未来退化。

- **功能增强**：
  - [#951](https://github.com/moltis-org/moltis/pull/951) 引入 `moltis-portable`  crate，支持配置、数据库、会话的完整导入/导出，提升数据可移植性。
  - [#339](https://github.com/moltis-org/moltis/pull/339) 完成繁体中文（zh-TW）本地化支持，覆盖 macOS 与 Web 应用。

- **待合并重要 PR**（需关注）：
  - [#942](https://github.com/moltis-org/moltis/pull/942) 远程与多后端沙盒支持（Vercel/Daytona/Firecracker），解决云部署的 Docker-in-Docker 限制。
  - [#920](https://github.com/moltis-org/moltis/pull/920) 通过 Twilio 添加电话呼叫支持，包括音频转换与状态机。

## 4. 社区热点
今日 Issues 与 PRs 评论数普遍较低（多数为0），社区讨论相对平静。但以下两点值得关注：
- **新功能请求 #956**（[链接](https://github.com/moltis-org/moltis/issues/956)）提出添加 OpenAI `gpt-image-2` 图像生成支持，可能引发对多模态能力扩展的讨论。
- **待合并 PR #942 与 #920** 涉及架构级扩展（远程沙盒、电话集成），虽评论未显示，但其技术复杂度高，合并后将显著影响项目路线图，可能吸引后续社区反馈。

## 5. Bug 与稳定性
- **今日新报告 Bug**：无（新开 Issue #956 为功能请求）。
- **今日修复的 Bug**（5个，已关闭）：
  1. **严重**：Telegram `send_document` 在论坛主题聊天中崩溃（#947 → #954）。
  2. **中**：聊天布局水平溢出导致 UI 错乱（#945 → #952）。
  3. **中**：Discord 斜杠命令参数被忽略（#948 → #950）。
  4. **中**：终端标签页创建误报“窗口不存在”（#937 → #955）。
  5. **低**：聊天未在底部时自动滚动缺失（#946 → #953）。
- **稳定性评估**：核心集成（Telegram、Discord）与 UI 稳定性得到显著提升，回归测试的加入有助于长期维护。

## 6. 功能请求与路线图信号
- **新请求**：
  - [#956](https://github.com/moltis-org/moltis/issues/956)：添加图像生成支持（OpenAI Codex OAuth），反映用户对多模态 AI 的迫切需求。
- **潜在路线图影响**：
  - 若 [#942](https://github.com/moltis-org/moltis/pull/942)（远程沙盒）合并，将大幅提升云部署灵活性，可能成为 2026 下半年重点。
  - [#920](https://github.com/moltis-org/moltis/pull/920)（电话支持）若合并，将开辟语音交互场景，与现有文本/聊天能力形成互补。

## 7. 用户反馈摘要
从关闭的 Issues 中提炼真实痛点：
- **集成可靠性**：用户依赖 Telegram/Discord 作为主要交互渠道，但媒体上传崩溃和命令参数失效严重影响工作流，修复后预期体验将更可靠。
- **UI 细节**：聊天布局溢出和自动滚动问题表明用户对长对话的浏览体验有较高要求，修复后应减少视觉干扰。
- **终端体验**：tmux 集成错误提示困扰高级用户，修复后提升命令行用户的信任度。
- **数据控制**：新增的导入/导出功能（#951）直接回应用户对数据主权和迁移便利性的需求。

## 8. 待处理积压
以下开放 PR 超过3天未合并，建议维护者优先审查：
- [#942](https://github.com/moltis-org/moltis/pull/942) (feat(sandbox): remote & multi-backend support) - 创建于 2026-04-30，待合并，评论活跃，涉及架构变更。
- [#920](https://github.com/moltis-org/moltis/pull/920) (feat(telephony): add phone call support via Twilio) - 创建于 2026-04-29，待合并，功能重大但需仔细评估安全与音频处理。

---
**报告生成时间**：2026-05-02  
**数据来源**：Moltis GitHub (github.com/moltis-org/moltis) 过去24小时活动  
**分析师备注**：项目健康度**优秀**，PR 合并率高、问题响应快，建议加速合并高价值功能 PR（#942, #920）以保持 momentum。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-05-02)

## 1. 今日速览
过去24小时，CoPaw 项目社区活跃度中等，共新增7个活跃 Issues 和3个待审查 Pull Requests，无任何 Issues 或 PRs 被关闭或合并。社区讨论聚焦于**模型容错机制**（如速率限制回退）、**记忆系统可靠性**（特别是 Ollama 场景下的上下文丢失）以及**多平台体验一致性**（微信与浏览器同步）。项目当前处于**需求收集与功能迭代阶段**，代码合并速度较慢，存在一定积压，但新贡献者参与积极（见 PR #3999）。整体健康度显示为**活跃但处理效率有待提升**。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无 PR 被合并或关闭，所有变更均处于审查阶段。以下为待审查 PR 及其推进的功能：
- **PR #3999** (`feat(skills): add cli skill test command`): 新增 CLI 命令 `qwenpaw skills test`，用于在分配前验证 Skill 配置。这提升了开发体验，但尚未合并。
- **PR #3831** (`Add vector model connection test feature`): 添加向量模型连接测试功能，增强部署前的可靠性检查。
- **PR #3525** (`feat(cron): create Discord thread before agent dispatch`): 为 Cron 任务分派到 Discord 时自动创建线程，避免输出混杂，改善异步任务组织。

**整体推进评估**：功能开发持续进行，但审查流程是当前瓶颈，无代码进入主分支。

## 4. 社区热点
最活跃的讨论集中在 **Issue #1327**（5条评论），诉求为**实现模型回退链以自动处理速率限制**。该 Issue 创建于 3月12日，今日更新，反映了依赖高 tier 云模型（如 GPT-4、Claude）的用户对服务稳定性的核心关切。多个用户（#3789）重复提出类似需求，表明这是**高优先级路线图信号**。

其他值得关注的讨论：
- **Issue #3991**（2条评论）：Ollama 下记忆丢失的 Bug 报告，影响本地部署用户体验。
- **PR #3999**：标记为 `first-time-contributor`，显示社区吸引新开发者，但审查状态待定。

## 5. Bug 与稳定性
按严重程度排列（均**暂无修复 PR**）：
1. **严重** - **Issue #3991**: Ollama 频道无法携带对话历史，导致每轮对话均为全新请求，**破坏核心对话连续性**。影响本地模型用户。
2. **中高** - **Issue #3997**: MCP 客户端 `timeout` 参数无法配置（默认30秒），Pydantic 静默丢弃未知字段，**导致长时任务易失败**。
3. **中** - **Issue #4000**: 微信对话与浏览器操作不同步，且网页版语音输入功能缺失/误导，**影响多端体验一致性**。

## 6. 功能请求与路线图信号
结合 Issue 热度与 PR 进展，以下功能可能纳入近期版本：
- **高可能**:
  - **模型回退链**（#1327, #3789）：多个用户请求，且与云模型依赖场景强相关，技术方案相对明确。
  - **CLI Skill 测试命令**（PR #3999）：开发工具增强，审查中，新贡献者驱动，合并概率高。
- **中可能**:
  - **记忆系统增强**（#3995）：包括自动归档、冲突检测，是长期痛点但实现复杂度较高。
  - **DeepSeek V4 高级 thinking 级别支持**（#3996）：针对特定模型，需评估 API 兼容性。
- **低可能（短期）**:
  - **MCP 客户端 timeout 可配置**（#3997）：虽为配置缺失，但需修改核心配置模型，可能排期靠后。

## 7. 用户反馈摘要
从 Issues 摘要与评论中提炼关键痛点：
- **记忆可靠性是核心关切**：用户期望在本地（Ollama）和云端模型间获得一致的上下文保持能力（#3991）。长期记忆文件缺乏生命周期管理，导致文件臃肿（#3995）。
- **多平台/多通道体验割裂**：微信端与浏览器端状态不同步（#4000），削弱了“统一助手”的感知。
- **高级功能可配置性不足**：模型参数（如 DeepSeek thinking 级别）、客户端超时等无法调整，限制了高级用户和复杂场景的适用性（#3996, #3997）。
- **容错机制缺失**：云模型速率限制导致服务中断时无备用方案，影响生产环境可用性（#1327）。
- **界面误导**：网页版语音输入按钮存在但无效，造成困惑（#4000）。

**满意点**：未在今日数据中明确提及，但 PR #3999 显示开发工具正在改进，可能受开发者欢迎。

## 8. 待处理积压
以下 Issue/PR 创建时间较长、评论较多或涉及核心功能，建议维护者优先关注：
- **Issue #1327**（创建于 2026-03-12）：模型回退链，**近2个月未解决**，5条评论，高需求但无关联 PR。
- **PR #3525**（创建于 2026-04-17）：Discord 线程创建，**审查超2周**，解决 Cron 任务组织问题。
- **PR #3831**（创建于 2026-04-25）：向量模型连接测试，**审查超1周**，影响部署可靠性。
- **Issue #3789**（创建于 2026-04-24）：模型回退界面请求，与 #1327 诉求重叠，可合并处理。

---
*报告生成时间：2026-05-02*  
*数据来源：CoPaw GitHub (github.com/agentscope-ai/CoPaw) 过去24小时动态*

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