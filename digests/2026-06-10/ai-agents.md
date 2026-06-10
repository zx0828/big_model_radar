# OpenClaw 生态日报 2026-06-10

> Issues: 453 | PRs: 497 | 覆盖项目: 12 个 | 生成时间: 2026-06-10 00:38 UTC

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

# OpenClaw 项目动态日报 (2026-06

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-06-10)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态呈现 **“多线并行、高速迭代、安全与生产就绪成为焦点”** 的态势。核心项目普遍围绕 **多模态输入（语音、图像）、多提供商适配（OpenAI、Anthropic、本地模型）、多通道集成（微信、Slack、飞书）** 展开功能竞争。同时，社区对 **协议互操作性（如 GitAgent、MCP）、架构安全性、生产环境部署可靠性** 的诉求显著上升，反映出生态正从“功能验证”阶段向“企业级可用”阶段过渡。项目间分化明显：部分处于快速功能扩张期，部分陷入安全危机或重大架构重构，亦有项目停滞不前。

## 2. 各项目活跃度对比

| 项目 | 今日新增 Issues | 今日 PR 处理 (合并/关闭) | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **NanoBot** | 6 | 23 (11) | 无 | **良好**。合并效率高，功能与修复同步推进，但存在高优先级架构缺陷（历史污染）待解。 |
| **Zeroclaw** | ~50 | ~50 (1) | 无 (v0.8.0-beta-1) | **中等偏低**。讨论与迭代极活跃，但合并率极低，大量关键PR积压，可能处于重大版本前夜的整合阵痛期。 |
| **PicoClaw** | 20 (含14个安全漏洞) | 20 (5) | v0.2.9-nightly | **危险**。爆发大规模安全漏洞，核心安全模型受冲击，需紧急响应。功能修复在进行中。 |
| **NanoClaw** | 1 | 43 (39) | 无 | **优秀**。合并率极高（~91%），推进迅速，安全与可观测性增强显著。但存在长期阻塞的架构级PR。 |
| **IronClaw** | ~50 | ~50 (多个关键合并) | 无 | **良好**。在“生产就绪”与“WebUI v2”两大主线取得决定性进展，但高严重性提供商兼容Bug未修复。 |
| **LobsterAI** | 2 | 5 (4) | 无 | **中等**。活动适中，通知系统等核心功能完善，但跨模型协作的核心架构问题悬而未决。 |
| **CoPaw** | >30 | >30 (多个合并) | v1.1.11-beta.2 | **中等**。发布新版本，修复关键Bug并增强浏览器控制，但Windows桌面端稳定性问题严重。 |
| **TinyClaw / Moltis / ZeptoClaw / EasyClaw** | 0 | 0 | 无 | **停滞**。过去24小时无任何公开活动，项目可能已归档或进入维护休眠。 |

## 3. OpenClaw 在生态中的定位
作为核心参照项目，**OpenClaw 很可能定位为“基础框架与标准定义者”**。
*   **优势**：可能拥有最广泛的社区认知度与信任基础，其设计决策（如协议、数据格式）常被其他项目（如 NanoBot 的 GitAgent 支持、NanoClaw 的插件系统）所追随或兼容。技术路线偏向**稳定性、规范性和生态整合**，而非激进的功能堆砌。
*   **技术路线差异**：相较于其他项目在特定通道（Zeroclaw）、特定平台（CoPaw 桌面端）或特定架构（IronClaw Reborn）上的深度定制，OpenClaw 可能更强调**核心抽象层的通用性与简洁性**，为衍生项目提供稳固基座。
*   **社区规模对比**：从衍生项目的活跃度反推，OpenClaw 的**直接贡献者活跃度可能低于 NanoBot、IronClaw 等**，但其**生态影响力（通过被引用、协议采纳）可能最大**，属于“幕后基石”型项目。

## 4. 共同关注的技术方向
多项目同时涌现的需求，代表了社区共识：
1.  **协议互操作与开放标准**：
    *   **涉及项目**：NanoBot (GitAgent Protocol)、CoPaw (MCP 插件)、NanoClaw (技能市场/插件系统)。
    *   **诉求**：打破项目孤岛，允许不同 AI 代理系统、工具和技能通过标准接口（`agent.yaml`, `SOUL.md`, MCP）互联，构建可组合的智能体网络。
2.  **安全模型的内置与加固**：
    *   **涉及项目**：PicoClaw (SSRF/权限绕过漏洞爆发)、NanoClaw (Telegram 配对码修复)、CoPaw (OpenSandbox 沙箱集成)。
    *   **诉求**：从“依赖外部配置”转向“架构级安全”，包括网络请求边界控制、凭证安全存储、代码执行隔离、权限最小化原则的默认实施。
3.  **提供商兼容性抽象层**：
    *   **涉及项目**：NanoBot (OpenAI 兼容提供商工具调用格式)、IronClaw (DeepSeek/Minimax/Claude Opus 参数差异)、CoPaw (免费模型零配置)。
    *   **诉求**：统一不同 LLM 提供商在参数（`max_tokens` vs `max_completion_tokens`）、认证、流式响应、工具调用格式上的差异，降低用户配置成本。
4.  **生产环境就绪与可观测性**：
    *   **涉及项目**：IronClaw (Reborn 生产切换)、NanoClaw (直接运行模式、代理跟踪 Web UI)、CoPaw (E2E CI 流水线)。
    *   **诉求**：提供清晰的部署指南、配置验证、监控指标（如成本、调用链）、回滚方案及自动化测试覆盖，满足企业级运维需求。
5.  **上下文与记忆管理的可靠性**：
    *   **涉及项目**：NanoBot (`history.jsonl` 跨会话污染)、CoPaw (压缩忽略模型限制)、LobsterAI (跨模型子任务状态同步)。
    *   **诉求**：确保长期记忆的准确性、会话隔离的有效性，以及跨智能体协作时状态传递的可靠性，这是 AI 助手核心价值的基础。

## 5. 差异化定位分析
| 维度 | NanoBot | Zeroclaw | PicoClaw | NanoClaw | IronClaw | LobsterAI | CoPaw |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | WebUI 交互体验、协议开放 | 多通信通道扩展（SMS/IM） | Agent 协作总线、多通道 | 模块化（技能/插件）、部署灵活 | 生产就绪、WebUI v2、统一搜索 | 任务通知、多模型网关 | 桌面端体验、浏览器控制 |
| **目标用户** | 开发者、高级用户 | 需多通道触达的用户 | 多通道平台搭建者 | 需定制化、灵活运行时的用户 | 企业/生产环境部署者 | 多模型复杂任务编排者 | 桌面端生产力用户 |
| **技术架构** | 单体应用，模块化设计 | 通道驱动，运行时分离 | 内置 Agent 总线，权限感知 | 插件化，技能即服务 | Reborn 架构（项目级所有权） | 任务网关，子代理协调 | AgentScope 衍生，Tauri 桌面 |
| **核心优势** | 友好文档、协议支持 | 通道覆盖最广 | 协作能力、总线设计 | 极高的开发活跃度与合并率 | 全面的生产环境功能规划 | 任务完成通知系统 | 本土化体验、浏览器自动化 |

## 6. 社区热度与成熟度
*   **快速迭代阶段（功能驱动）**：**NanoBot、CoPaw、IronClaw**。PR/Issues 数量庞大，新功能与修复频繁合并，社区讨论热烈，处于“构建核心能力”的爆发期。
*   **质量巩固阶段（修复与稳定）**：**NanoClaw、LobsterAI**。合并率高，重点在修复 Bug、完善文档、增强可观测性，为下一阶段功能释放做准备，但存在长期阻塞的架构决策。
*   **安全危机阶段（风险应对）**：**PicoClaw**。因大规模安全漏洞报告，社区注意力全部集中于紧急修复与安全审计，正常功能开发可能暂停。
*   **架构重构阶段（技术债务清理）**：**Zeroclaw、IronClaw**。Zeroclaw 大量 PR 待合并，可能进行 providers 架构等重大调整；IronClaw 正在进行“项目级所有权”等影响深远的重构，合并速度暂时受影响。
*   **停滞阶段**：**TinyClaw、Moltis、ZeptoClaw、EasyClaw**。无任何活动，可能已失去维护或社区兴趣。

## 7. 值得关注的趋势信号
1.  **“协议即生态”趋势**：GitAgent Protocol、MCP 等开放协议正成为项目间互联的“通用语言”。**开发者应优先评估目标项目对主流协议的支持情况**，这比单一功能列表更能决定其长期生态价值。
2.  **安全左移与默认安全**：PicoClaw 的漏洞爆发是警示。未来新项目或大版本必须将 **安全设计（网络边界、权限、沙箱）作为架构核心而非附加项**。NanoClaw 的 `allow_edit_identity_files`

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-10)

## 1. 今日速览
过去24小时，NanoBot 项目保持**高度活跃**的开发和社区互动状态。共处理 **23 条 Pull Request**，其中 **11 条已成功合并/关闭**，显示核心贡献者与维护者推进代码集成效率极高。同时，社区新开 **6 个 Issues**，讨论聚焦于**上下文管理、模型兼容性与用户体验细节**等核心功能模块，反映出用户正在深入使用并积极反馈边缘场景问题。项目整体健康度良好，功能迭代与缺陷修复同步快速进行。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展 (已合并/关闭的重要 PR)
今日合并的 PR 覆盖了**功能增强、文档优化、稳定性修复与协议扩展**等多个关键领域，推动项目向更健壮、更易用的方向发展。

*   **PR #4208**: [webui] feat(webui): add assistant reply fork-from-here
    *   **进展**: 为 WebUI 已完成助手回复添加“从此处fork”功能，允许用户基于特定回复点创建新对话分支，极大提升对话探索与回溯的灵活性。
    *   **链接**: https://github.com/HKUDS/nanobot/pull/4208

*   **PR #4177**: [documentation, valid] docs: make onboarding friendlier for beginners
    *   **进展**: 全面重构文档入口，为不同背景用户（新手、CLI用户、WebUI用户、部署者、贡献者）提供清晰路径，显著降低项目上手门槛。
    *   **链接**: https://github.com/HKUDS/nanobot/pull/4177

*   **PR #4265**: [CLOSED] feat(english-read): change cron schedule from daily to every 2 days
    *   **进展**: 调整内置 `daily-english-read` 技能的调度频率，从每日改为每两天一次，优化资源消耗。
    *   **链接**: https://github.com/HKUDS/nanobot/pull/4265

*   **PR #3434**: [CLOSED] feat(lateX): add lateX to feishu channel using codecogs
    *   **进展**: 为飞书频道添加 LaTeX 公式渲染支持（通过 CodeCogs API），增强了学术与技术场景下的消息表达能力。
    *   **链接**: https://github.com/HKUDS/nanobot/pull/3434

*   **PR #3400**: [CLOSED] feat(dream): allow users to decide whether dream can edit USER.md and SOUL.md or not
    *   **进展**: 新增 `allow_edit_identity_files` 配置项，允许用户限制 Dream 模块对核心身份文件（`USER.md`, `SOUL.md`）的自动修改，提升身份数据控制权与安全性。
    *   **链接**: https://github.com/HKUDS/nanobot/pull/3400

*   **PR #4034**: [CLOSED] [duplicate] Add GitAgent Protocol support (agent.yaml + SOUL.md)
    *   **进展**: 添加对 **GitAgent Protocol** 的支持，通过标准 `agent.yaml` 和 `SOUL.md` 文件，使 NanoBot 能与其他遵循该协议的 AI 代理系统互操作，扩展了生态边界。
    *   **链接**: https://github.com/HKUDS/nanobot/pull/4034

*   **PR #4190**: [CLOSED] [enhancement, valid] Improve tool call validation strictness
    *   **进展**: 强化工具调用验证逻辑，不再静默修复格式错误的参数，确保只有符合 JSON 对象规范的调用才会被执行，提升了工具执行的安全性与可预测性。
    *   **链接**: https://github.com/HKUDS/nanobot/pull/4190

*   **PR #4252**: [CLOSED] [bug, valid, webui] fix(webui): render TeX math delimiters
    *   **进展**: 修复 WebUI 对 TeX 风格分隔符（`\(...\)`, `\[...\]`, 保护的单美元符号）的渲染支持，使数学公式在界面中正确显示。
    *   **链接**: https://github.com/HKUDS/nanobot/pull/4252

## 4. 社区热点
今日讨论最活跃的议题集中在**数据一致性、模型配置灵活性及提供商兼容性**上，反映了用户在生产环境中的核心关切。

*   **Issue #4259** (评论数: 2): `[enhancement, refactor] history.jsonl 跨会话注入导致上下文污染`
    *   **诉求分析**: 用户指出一个严重的**数据流设计缺陷**：`history.jsonl` 中的历史摘要未按会话隔离，被全局注入到后续会话的 System Prompt 中，导致严重的上下文污染。这是一个影响记忆准确性的**核心架构问题**，已引发关于 `Consolidator` 与 `ContextBuilder` 协作机制的深度讨论。
    *   **链接**: https://github.com/HKUDS/nanobot/issues/4259

*   **Issue #4253** (评论数: 3): `[OPEN] [enhancement] support overriding model per conversation`
    *   **诉求分析**: 用户提出**高频实用需求**：希望能在单个会话级别覆盖全局模型预设，以平衡隐私（本地模型）与速度/能力（云端模型）需求。这指向了配置系统的灵活性不足，是提升工作流效率的关键功能缺口。
    *   **链接**: https://github.com/HKUDS/nanobot/issues/4253

*   **PR #4267** (待合并): `fix(websocket): Fix bug in webui where session content is dropped`
    *   **热点分析**: 该 PR 修复一个**棘手的 WebUI 渲染 Bug**：在快速流式输出时，助手回复会静默丢失（虽已持久化到文件）。问题描述详细，且属于影响用户体验的“丢数据”级别缺陷，受到高度关注。
    *   **链接**: https://github.com/HKUDS/nanobot/pull/4267

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及**数据持久化、模型调用协议与历史压缩逻辑**，部分已有修复 PR 跟进。

| 严重程度 | 问题描述 | 关联 Issue | 状态/修复 PR |
| :--- | :--- | :--- | :--- |
| **高** | `history.jsonl` 跨会话上下文污染，破坏记忆准确性。 | #4259 | 讨论中，需架构级修复。 |
| **高** | OpenAI 兼容提供商以纯文本形式输出工具调用，导致工具无法执行。 | #4061 | 待修复，需增强解析器。 |
| **中** | `idleCompact` 机制在用户纠正对话后，可能将错误结论持久化到历史。 | #4264 | 新报告，需优化压缩触发时机。 |
| **中** | GPT-5.x 及推理模型（o1/o3/o4）需要 `max_completion_tokens` 参数，而非 `max_tokens`，导致调用失败。 | #4261 | **已有修复 PR #4263** 待合并。 |
| **低** | Agent 模式启动时，初始图标未使用配置的 `botIcon`。 | #4262 | 新报告，UI 细节问题。 |

## 6. 功能请求与路线图信号
用户提出的新功能需求清晰，且与项目现有增强方向（如协议支持、提供商扩展）高度契合，**部分极有可能进入下一版本**。

*   **按会话覆盖模型** (#4253): 这是一个强大的工作流增强需求，与项目多提供商、多配置的设计哲学一致。实现成本可控，**优先级高**。
*   **GitAgent 协议支持** (#4034 已合并): 该功能的合并表明项目积极拥抱开放标准，未来可能继续扩展对其他代理协议或数据格式的支持。
*   **新增转录提供商** (#4260 待合并): 添加 StepFun ASR 提供商，显示项目在**多模态输入（语音）** 领域的持续扩展。
*   **WebUI 按需版本检查** (#4255 待合并): 用轻量级点击检查替代后台轮询，符合性能优化趋势，**已接近合并**。

## 7. 用户反馈摘要
从 Issues 的创建动机与描述中，可提炼出以下真实用户痛点与场景：

*   **痛点**:
    1.  **隐私与效率的权衡困难**: 用户需要在本地（私密、慢、便宜）和云端（快速、强大）模型间快速切换，但当前缺乏会话级控制。
    2.  **对“智能记忆”的信任危机**: `history.jsonl` 的上下文污染问题动摇了用户对系统长期记忆准确性的信任，这是 AI 助手的核心价值之一。
    3.  **提供商碎片化兼容成本**: 不同提供商（如 Azure GPT-5、OpenRouter、本地推理模型）在 API 细节（参数名、工具调用格式）上的差异，给用户配置带来持续困扰。
    4.  **WebUI 交互可靠性**: 流式输出时内容丢失、图标显示错误等，影响了专业用户的生产力体验。

*   **满意点**:
    *   对 **“从此处 fork”** 功能（PR #4208）的期待，表明用户认可提升对话探索能力的改进方向。
    *   文档重构（PR #4177）受到社区重视，显示项目对新手体验的投入。

## 8. 待处理积压
基于创建时间与状态，以下 **OPEN 状态的 PR/Issue 需维护者特别关注**，部分已等待超过两周：

*   **PR #3982** & **PR #3983** (创建于 2026-05-24): `test: add scripted agent runner harness` 与 `test: cover runner blocked tool-call finish reasons`。这两项重要的**测试基础设施增强**已等待约 16 天，对于保障核心 runner 的稳定性至关重要，应尽快合并。
*   **Issue #4061** (创建于 2026-05-29): `Bug: OpenAI-compatible text-format tool calls are not parsed`。一个影响特定提供商生态的**高优先级 Bug**，已讨论近两周，需确定修复方案并实施。
*   **PR #4119** (创建于 2026-05-31): `fix(exec): block relative symlink workspace escapes`。一个**安全相关修复**，防止通过符号链接逃逸工作区，应优先评估与合并。

---
**报告生成时间**: 2026-06-10  
**数据来源**: [NanoBot GitHub Repository](https://github.com/HKUDS/nanobot) (过去24小时活动)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-10)

## 1. 今日速览
过去24小时，Zeroclaw 项目维持极高活跃度，Issues 与 PR 更新各达50条，但合并/关闭率较低（仅1个 PR 合并），表明开发工作集中于迭代、讨论与修复阶段。社区围绕多频道扩展、安全加固及运行时稳定性展开密集技术辩论，无新版本发布。项目整体健康度良好，但部分高优先级 Bug 和架构债务待解决，可能影响下一版本发布节奏。

## 2. 版本发布
无新版本发布。最新稳定版仍为 **v0.8.0-beta-1**（Docker 镜像 `ghcr.io/zeroclaw-labs/zeroclaw:beta`，提交 `846485da3fec`），当前主要开发聚焦于该测试版的缺陷修复与功能完善。

## 3. 项目进展
- **合并/关闭的 PR**：仅 **#7425**（`fix(runtime): resolve channel pricing via bare-type fallback in cost lookup`）被合并。该修复解决了通道成本跟踪中因 provider 类型键不匹配导致的 `cost_usd=0` 和预算 enforcement 失效问题，恢复了计费准确性。
- **待合并 PR 储备**：49个 PR 待合并，涵盖重大功能：
  - **渠道扩展**：5个 SMS 频道（#7265）、4个聊天/社交频道（#7270）、WeChat 流式响应支持（#7437）。
  - **架构统一**：per-turn 输出路由（#7361）、agent turn 引擎统一 RFC（#7415）、providers 架构重构（#5937）。
  - **安全加固**：网关 webhook 签名密钥动态读取（#7410）、子进程内存限制（#6916）、Composio 作用域过滤（#6917）。
  - **UX 改进**：cron 编辑模态框字段对齐（#7417）、zerocode 主题与快捷键修复（#7376-7378）。
- **整体推进**：尽管合并数少，但大量 PR 已通过代码审查，集成测试通过后即可批量合并，预计下一 beta 版将包含上述大部分改进。

## 4. 社区热点
讨论最活跃的议题（按评论数排序）：
- **Issue #4710**（19评论，已关闭）：Logo 设计征集，反映社区对品牌建设的参与热情。
- **Issue #5862**（12评论）：zeroclaw 无法识别 `zeroclaw cron` 工具，暴露工具发现与文档清晰度问题。
- **Issue #593

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-10)

## 1. 今日速览
过去24小时，PicoClaw 项目活动异常活跃，共处理 20 个 Issues 和 20 个 Pull Requests。**最显著的特征是爆发式报告了一组（14个）新的安全漏洞**，均由安全研究员 @YLChen-007 提交，涉及 SSRF 绕过、权限提升、CSRF 等多个攻击面，项目安全态势受到高度关注。同时，项目开发持续进行，多个功能修复和增强 PR 被合并，并发布了新的 Nightly 构建版本。社区需优先关注安全公告并评估影响。

## 2. 版本发布
- **新版本**: `v0.2.9-nightly.20260609.46b29a0a`
  - **性质**: 自动化夜间构建，**可能不稳定**，请谨慎使用。
  - **更新内容**: 基于 `main` 分支的最新提交构建，包含了近期合并的多个功能修复和安全补丁（如 Claude 模型兼容性修复、SSRF 防护增强等）。
  - **完整更新日志**: [查看对比](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
  - **迁移注意事项**: Nightly 版本不保证向后兼容，生产环境建议等待稳定版发布。用户应关注后续安全公告，并根据建议升级。

## 3. 项目进展 (已合并/关闭的重要 PR)
今日有 5 个 PR 被合并或关闭，推动了项目的稳定性和功能完善：

- **安全加固**:
  - [#2940](https://github.com/sipeed/picoclaw/pull/2940) (已关闭): 修复 Anthropic `claude-opus-4-7` 模型因废弃 `temperature` 参数导致的调用失败。
  - [#2942](https://github.com/sipeed/picoclaw/pull/2942) (已关闭): 修正默认配置中 Claude Sonnet 模型 ID 格式，使用官方连字符格式 (`claude-sonnet-4-6`)，避免首次运行失败。

- **核心功能修复**:
  - [#2990](https://github.com/sipeed/picoclaw/pull/2990) (待合并): 修复历史记录中多次用户消息仅显示最后一条的问题 (对应 #2796)。
  - [#2987](https://github.com/sipeed/picoclaw/pull/2987) (待合并): 修复活跃流式会话中 `tool_calls` 消息被错误过滤的问题。
  - [#2988](https://github.com/sipeed/picoclaw/pull/2988) (待合并): 修复 `/context` 命令忽略 `summarize_token_percent` 配置的显示问题。
  - [#2937](https://github.com/sipeed/picoclaw/pull/2937) (已关闭): 引入**内部 Agent 协作总线**，支持持久化跨代理通信、协作线程和权限感知消息传递，是架构层面的重要增强。

- **工程与配置**:
  - [#3064](https://github.com/sipeed/picoclaw/pull/3064) (已关闭): 修复配置迁移中模型名称索引的类型断言 panic 问题。
  - [#3067](https://github.com/sipeed/picoclaw/pull/3067) (待合并): 修复 Web UI 中“会话隔离范围” (`dm_scope`) 设置无法保存的问题。

## 4. 社区热点
今日讨论最集中的议题是**安全漏洞报告**。研究员 @YLChen-007 在短时间内提交了 14 个独立的安全 Issue，涵盖多个组件：
- **核心关注点**: SSRF 防护绕过 (`web_fetch` 工具)、权限控制缺陷（`allow_from`、`allowed_cidrs`、MQTT `client_id` 伪造）、以及启动器 (Launcher) 的 CSRF 和访问控制问题。
- **社区反应**: 这些 Issue 均标记为 `[Security]`，虽评论数不多（多为报告者单方面提交），但因其高严重性和广泛影响范围，已引起维护者和高级用户的高度警觉。这是项目近期最重要的安全事件，预计将触发紧急修复和版本发布。
- **其他热点**:
  - [#2404](https://github.com/sipeed/picoclaw/issues/2404): 关于支持流式 HTTP 请求 (类似 OpenAI `stream=True`) 的功能请求，讨论历时数月，有 11 条评论，反映了用户对实时交互体验的需求。
  - [#2984](https://github.com/sipeed/picoclaw/issues/2984): 关于为 Pico WebSocket 客户端添加显式回合完成信号的协议增强请求，对构建可靠外部客户端至关重要。

## 5. Bug 与稳定性
### 新报告 (高严重性)
今日报告的 Bug 几乎全部为**安全漏洞**，按潜在影响排序：
1.  **SSRF 防护系列绕过** (#3078, #3077, #3074): `web_fetch` 工具可通过环境代理、特殊 IPv4 范围 (`198.18.0.0/15`)、ISATAP IPv6 嵌入等方式绕过私有地址限制，可能导致内网探测。
2.  **启动器访问控制绕过** (#3080, #3069): `allowed_cidrs` 可通过本地回环代理或反向代理的 `RemoteAddr` 欺骗被绕过，使未授权访问成为可能。
3.  **授权逻辑缺陷** (#3081, #3068, #3076): `exec` 工具工作目录竞争条件、MQTT `client_id` 伪造、企业微信群组触发策略绕过，均可能导致未授权操作。
4.  **信息泄露与重放** (#3079, #3073): `exec` 白名单可泄露 jq 环境信息；LINE 签名 Webhook 可被重放导致重复执行。
5.  **配置与加载风险** (#3075, #3072): 自动加载工作目录下的 `skills/` 元数据可能导致恶意代码执行；首次运行密码设置存在 CSRF 风险。
6.  **权限提升** (#3071, #3070): 已认证 WebSocket 客户端可触发配置重载；OneBot 媒体 URL 处理允许主机端任意获取。

**状态**: 以上均暂无已合并的修复 PR，是当前最高优先级待办事项。

### 已修复/回归问题
- **历史记录显示 Bug** (#2796): 已通过 PR [#2990](https://github.com/sipeed/picoclaw/pull/2990) 修复，解决了多用户消息历史丢失问题。
- **Claude 模型兼容性** (#2939): 已通过 PR [#2940](https://github.com/sipeed/picoclaw/pull/2940) 和 [#2942](https://github.com/sipeed/picoclaw/pull/2942) 修复，解决了 `temperature` 参数和模型 ID 格式问题。
- **工具调用过滤 Bug** (#2958): 已通过 PR [#2987](https://github.com/sipeed/picoclaw/pull/2987) 修复。

## 6. 功能请求与路线图信号
- **高可能性 (有活跃 PR/讨论)**:
  - **流式 HTTP 请求支持** (#2404): 核心功能请求，提案成熟（添加 `"streaming": true` 配置），但尚未看到实现 PR。鉴于其高需求（11 条评论），可能进入下一版本规划。
  - **WebSocket 显式回合完成信号** (#2984): 协议层增强，对客户端开发者重要，有 1 个 👍。可能随协议更新推进。
  - **DeltaChat 网关集成** (#3063): 新增通信渠道的 PR，正在开发中，将扩展平台支持范围。

- **中长期探索**:
  - **替换 libolm 为 vodozemac** (#3088): 安全与维护性改进，提案清晰，但属底层加密库替换，影响较大，需评估后纳入路线图。
  - **NEAR AI Cloud 提供商支持** (#2917): PR 已存在但标记为 `[stale]`，表明该功能优先级可能不高或需要上游 API 变更。

## 7. 用户反馈摘要
从 Issues 描述和评论中提炼的关键反馈：
- **正面体验**:
  - Agent 协作功能 (#2937) 的引入被视为架构上的积极进步。
  - 对 Claude 模型错误的快速修复 (#2940, #2942) 获得了提交者的认可。
- **痛点与不满**:
  - **历史记录不完整** (#2796): 用户无法查看完整对话历史，严重影响回溯和审计体验，是明确的 UI/数据持久化缺陷。
  - **配置持久化失败** (#3067): Web UI 中关键设置（`dm_scope`）无法保存，导致用户困惑和配置无效。
  - **SSRF 防护不足**: 多个报告表明现有 `web_fetch` 的 IP 黑名单不完整，无法有效阻止内网扫描，用户对内置工具的安全性存疑。
  - **启动器网络控制薄弱**: `allowed_cidrs` 在反向代理场景下失效，使得部署在云环境或容器中的启动器安全性低于预期。
- **使用场景**: 用户期望 PicoClaw 作为多通道（微信、飞书、OneBot 等）AI 助手平台，需要**可靠的历史记录、严格的安全边界、稳定的模型兼容性**以及**可扩展的协议**。

## 8. 待处理积压
以下 Issue/PR 长期未更新（标记为 `[stale]`），维护者需评估其当前相关性并决定推进、关闭或重构：
- **功能/协议类**:
  - [#2984](https://github.com/sipeed/picoclaw/issues/2984): WebSocket 显式回合完成信号 (创建于 2026-06-02)。
  - [#2917](https://github.com/sipeed/picoclaw/pull/2917): NEAR AI Cloud 提供商支持 (创建于 2026-05-21)。
- **Bug 修复类**:
  - [#2990](https://github.com/sipeed/picoclaw/pull/2990): 修复历史记录显示 (对应 #2796)。
  - [#2988](https://github.com/sipeed/picoclaw/pull/2988): 修复上下文压缩配置显示。
  - [#2983](https://github.com/sipeed/picoclaw/pull/2983): 修复空 LLM 响应重试。
  - [#2987](https://github.com/sipeed/picoclaw/pull/2987): 修复工具调用过滤。
- **建议**: 鉴于今日爆发的安全 Issues，建议**暂停**对 `[stale]` 功能类 PR 的合并审查，集中资源评估和修复安全漏洞。对于 `[stale]` 的 Bug 修复 PR，应尽快验证其是否仍适用于当前 `main` 分支，并决定合并或关闭。

---
**报告生成时间**: 2026-06-10  
**数据来源**: PicoClaw GitHub (过去24小时活动)  
**报告立场**: 客观呈现数据，突出安全风险与项目健康度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-10)

## 1. 今日速览
项目今日保持**高开发活跃度**，过去24小时内有43个Pull Request（PR）更新，其中39个已合并/关闭，显示核心代码库推进迅速。社区讨论相对聚焦，仅1个Issue处于活跃状态，但围绕多运行时扩展的提案引发了初步讨论。无新版本发布，项目处于功能密集开发与集成阶段，安全与可观测性改进是近期合并重点。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日合并/关闭的PR涵盖**安全加固、可观测性、扩展性及文档完善**等多个关键领域，项目整体向更健壮、可扩展的方向迈进：
- **安全与稳定性**：合并了安全策略引擎（#1605），提供确定性用户门控与工具限制；Telegram配对码安全修复（#2722）虽待合并，但已提交关键补丁。
- **可观测性**：合并代理跟踪Web UI（#1202），支持完整工具调用记录与本地仪表板，显著提升调试能力。
- **扩展性与架构**：合并技能市场系统（#1309）、插件系统（#1387）、直接运行模式（#1285，无需Docker）及审批门控技能（#1245），强化模块化与部署灵活性。
- **文档与开发体验**：多项文档PR合并（如#214安全审计文档、#1084容器沙盒设计、#481群组CLAUDE.md示例），并新增`/setup-dev`技能（#1161）简化本地开发。

## 4. 社区热点
- **最活跃讨论**：[Issue #1690](https://github.com/nanocoai/nanoclaw/issues/1690) - “Multi-runtime agent SDK abstraction (Claude + Codex + local models)”。该提案提出构建多运行时抽象层，允许像添加频道一样模块化安装不同代理SDK，获得3个👍和4条评论，反映社区对**支持多样化AI后端（Claude、Codex、本地模型）** 的强烈需求。
- **高关注PR**：[PR #2722](https://github.com/nanocoai/nanoclaw/pull/2722) - 修复Telegram配对码随机数生成漏洞（`Math.random` → `crypto.randomInt`）。作为安全修复，虽评论数未显示，但因其影响配对注册安全，可能引发维护者紧急审查。

## 5. Bug 与稳定性
- **高严重性**：Telegram配对码生成使用可预测的`Math.random`（PR #2722），可能导致未授权访问。**已有修复PR待合并**。
- **其他稳定性改进**：合并了构建时版本元数据日志（#1333），有助于故障排查；安全策略引擎（#1605）通过确定性代码增强系统稳定性。

## 6. 功能请求与路线图信号
- **明确功能请求**：Issue #1690 的多运行时抽象是核心路线图信号，与已合并的**技能市场（#1309）** 和**插件系统（#1387）** 一脉相承，预示项目将向“运行时即技能”的模块化架构演进。
- **潜在下一版本特性**：基于长期PR的推进，**WebUI控制面板（#212）**、**提示跟踪日志（#337）** 及**外部Markdown种子文件（#357）** 若解除阻塞，可能成为未来版本亮点。

## 7. 用户反馈摘要
- **核心痛点**：从Issue #1690讨论可见，用户希望**突破当前单一运行时限制**，实现类似频道模式的灵活扩展，以适配Claude、Codex或本地模型，避免“合并冲突”并保持定制化。
- **满意点**：技能系统（如`/approve`/`reject`、市场注册）获得积极反馈，用户认可其“编辑优先，后技能化”的工作流，认为这平衡了灵活性与可维护性。
- **开发体验**：`/setup-dev`技能（#1161）的合并表明项目在响应“降低本地开发门槛”的反馈。

## 8. 待处理积压
多个重要PR长期处于**Blocked/Pending Closure**状态，需维护者优先关注：
- [PR #212](https://github.com/nanocoai/nanoclaw/pull/212) - WebUI控制面板（创建于2026-02-13，状态：Blocked）。功能完整但可能因依赖或设计争议受阻。
- [PR #337](https://github.com/nanocoai/nanoclaw/pull/337) - 提示跟踪日志（创建于2026-02-20，状态：Blocked）。对调试至关重要，但合并停滞。
- [PR #357](https://github.com/nanocoai/nanoclaw/pull/357) - 外部Markdown种子文件（创建于2026-02-21，状态：Blocked）。增强持久化上下文能力。
- [PR #379](https://github.com/nanocoai/nanoclaw/pull/379) & [PR #380](https://github.com/nanocoai/nanoclaw/pull/380) - JSDoc文档改进（创建于2026-02-22，状态：Needs Review/Blocked）。虽为文档，但影响开发者体验。
- **活跃Issue**：[Issue #1690](https://github.com/nanocoai/nanoclaw/issues/1690) 创建于4月，虽在更新但讨论未收敛，需明确设计决策以推进。

---
**报告生成时间**：2026-06-10  
**数据来源**：NanoClaw GitHub仓库 (github.com/qwibitai/nanoclaw) 过去24小时动态  
**注**：PR评论数在源数据中标记为`undefined`，可能因API限制或未公开，热点分析基于👍数、Issue评论数及PR摘要重要性综合判断。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-10)

## 1. 今日速览
项目今日保持**极高活跃度**，单日处理近50个PR和近50个Issues，核心开发聚焦于 **Reborn生产环境就绪** 与 **WebUI v2测试覆盖** 两大主线。大量PR集中于安全性增强（如钩子审计、凭证边界）、架构重构（项目级所有权模型、文件拆分）及第三方提供商适配（Minimax、DeepSeek、Opus）。同时，社区围绕生产部署、统一搜索、Slack集成等用户体验功能提出明确需求，项目处于快速迭代与质量加固并行的关键阶段。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日合并/关闭了多个关键PR，标志着重要里程碑的达成：
- **PR #4604**：解决了Reborn WebUI v2长期缺失的浏览器驱动全栈E2E测试问题，填补了测试覆盖的关键空白。
- **PR #4609**：完成了WebChat v2的认证审计，确保了与v1在Bearer/DB/OIDC/查询令牌等路径上的安全 parity。
- **PR #4591**：建立了Reborn操作平面（setup/config/diagnostics）的基础路由和处理框架，为后续管理功能奠定基础。
- **PR #4447 & #4446**：作为OpenAI兼容API迁移的最后两块拼图，分别完成了兼容性/安全测试和SSE流式响应实现，标志着该大型迁移项目基本收尾。
- **PR #4492**：修复了配置扩展凭证暂存问题，使本地开发默认使用SecretStore，提升了开发体验与安全性。

**整体推进评估**：项目在**API兼容性**、**WebUI v2测试完整性**、**操作平面基础**三大领域取得决定性进展，为下一阶段的“生产就绪”和“功能完善”扫清了基础障碍。

## 4. 社区热点
讨论最活跃的议题集中在**生产部署准备**与**核心架构决策**：
- **Issue #3026** (Epic, 3评论)：关于Reborn生产环境布线与切换就绪的顶层设计。这是当前最高优先级的Epic，驱动了多个子任务（如#4551, #4620, #4621），社区关注其验证和回滚方案。
- **PR #4559** (XL, 核心贡献者)：通过邀请链接实现代理驱动的Trace Commons onboarding。这是一个重要的用户体验改进，简化了外部服务集成流程，引发对扩展性和安全性的讨论。
- **PR #4662/4663/4664** (系列PR)：围绕“项目级所有权模型”的设计与实现。这是一次影响深远的架构调整，涉及自动化、出站目标等核心概念的重新设计，社区关注其向后兼容性和迁移路径。
- **Issue #4665 & #4666**：关于`slack_host_beta.rs`和`slack_host_state.rs`文件过大（超3000行）的拆分追踪。这反映了代码库在快速迭代中积累的技术债务，社区普遍认同需进行模块化解耦。

## 5. Bug 与稳定性
今日报告的严重Bug按优先级排序：
1.  **高严重 - #4642**：`strict-mode` LLM提供者（如Claude Opus）的可选参数传`null`时，被能力端口验证拒绝，**影响大多数第一方工具**。需修复验证逻辑以兼容OpenAI/Anthropic的严格模式。
2.  **高严重 - #4548**：向DeepSeek发送带工具的请求时，JSON体包含重复的`model`字段，导致API返回400错误。**已有明确修复方向**，需调整请求序列化逻辑。
3.  **中严重 - #4587**：Minimax提供者配置后无法使用，日志显示密钥元数据读取失败。影响新提供者集成。
4.  **中严重 - #4640**：Reborn的Google Calendar扩展`list_events`未设置`timeMin`和`orderBy`，返回最旧事件而非即将到来的事件，且 recurring 事件处理不正确。
5.  **低严重 - #4575**：`ResourceScope::system()`的JSON序列化-反序列化循环失败，因控制字符`\x1f`被拒绝。已通过PR #4575修复。

**Fix PR状态**：仅#4575已有关闭的修复PR。其余高优先级Bug（#4642, #4548, #4587）暂无公开修复PR，是当前稳定性修复的重点。

## 6. 功能请求与路线图信号
用户提出的高价值新功能需求：
- **统一搜索** (#4647)：在WebUI v2中实现跨线程、技能、扩展、记忆的“全能搜索”。此需求与当前“项目级所有权”重构高度相关，可能成为下一周期核心体验升级。
- **Slack个人与团队代理路由** (#4625)：一个Slack应用同时支持个人DM（带个人记忆）和团队频道代理。这与出站目标架构（#4600）和权限模型（#4628）紧密耦合，是重要的渠道扩展。
- **管理员共享工具/技能** (#4628)：多租户环境下，管理员预配置共享工具和技能。这是企业级功能，依赖于项目级所有权模型（#4663）的实现。
- **统一Google OAuth凭证** (#4657)：整合不同GSuite范围的OAuth流程，减少用户重复授权。属于第一方扩展体验优化。

**路线图判断**：以上需求均与正在进行的**Reborn生产就绪**（#3026）和**所有权模型重构**（#4662系列）在架构上对齐，很可能已纳入远期路线图，但具体排期取决于核心重构的完成进度。

## 7. 用户反馈摘要
从Issue描述与讨论中提炼的核心痛点：
- **生产部署复杂性**：用户（如#3026, #4551, #4646）明确需要清晰的“生产环境配置、验证、监控和回滚”故事，当前文档和自动化不足。
- **提供商兼容性碎片化**：不同LLM提供者（DeepSeek, Minimax, Claude Opus）在参数、认证、流式响应上的差异导致集成困难（#4642, #4548, #4587, #4650），需要更强的抽象层。
- **认证状态管理混乱**：扩展的认证状态未正确投影到当前用户（#4658），以及SSO与操作员权限混淆（#4659），导致WebUI v2的权限模型不清晰。
- **代码可维护性担忧**：关键文件（`slack_host_*.rs`）过大，违反架构规则，增加了修改风险和认知负担（#4665, #4666），社区呼吁主动拆分。
- **测试覆盖缺口**：WebUI v2在SSO、管理界面、流式传输、工具调用等关键路径上缺乏真实浏览器E2E测试（#4632系列），是质量风险点。

## 8. 待处理积压
以下为创建时间较早、影响范围大、但尚未关闭的重要Issue/PR，需维护团队重点关注：
- **Issue #3026** (创建于2026-04-28)：Reborn生产切换就绪Epic。作为多个子任务的父级，其整体进度和验收标准需定期审视。
- **Issue #88** (创建于2026-02-14)：安全加固功能清单。虽为P2-P3，但涉及设备配对、提升模式等基础安全特性，长期未关闭。
- **PR #4492** (创建于2026-06-05, XL尺寸, DB迁移标签)：修复配置扩展凭证暂存。涉及持久化存储变更，审查和合并需格外谨慎，但延迟可能影响其他依赖它的PR。
- **Issue #4629** (创建于2026-06-09)：Reborn/Crabshack收尾——删除遗留路径。这是重要的技术债务清理工作，需在迁移基本稳定后尽快推进，否则会持续增加认知负荷。
- **Issue #4632** (创建于2026-06-09)：构建WebUI v2 E2E测试覆盖的Epic。其下的子任务（#4633-#4636）是提升发布信心的关键，建议分配专门资源。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-10)

## 1. 今日速览
过去24小时，LobsterAI 社区活跃度处于中等水平。共新增2个技术讨论类 Issues，聚焦于多模型协作架构与外部模型集成；PR 活动频繁，5个更新中有4个已成功合并，主要推进了任务完成通知系统的完善与数据备份模块的调整。无新版本发布，但核心功能模块持续迭代，项目整体保持稳定向前推进的态势，但跨模型协作的深层架构问题仍需重点关注。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日合并的4个 PR 主要围绕**通知系统优化**与**数据管理**展开，项目在用户体验与稳定性上取得明确进展：
- **任务完成通知功能完善**：PR #2130 与 #2134 合并，实现了隐私安全的任务完成提醒（不暴露任务细节），并修复了主窗口关闭后通知恢复、渲染器处理器就绪等待等关键问题，同时增强了 macOS Dock 与 Windows 任务栏的集成。
- **数据备份模块调整**：PR #2136 与 #2135 合并，引入了数据备份与迁移的基础功能框架，并进行了临时性配置调整，为后续数据持久化功能打下基础。
- **整体评估**：项目在异步工作流通知和数据可靠性方面迈出重要一步，但跨模型任务调用的核心机制（见 Issues #2132）尚未有直接修复，是下一阶段需要攻克的技术高地。

## 4. 社区热点
- **最受关注的技术讨论**：**Issue #2132**（跨模型子任务调用问题）虽评论数暂为0，但其描述的问题触及项目核心架构——主任务（M3）无法感知跨模型子任务（DeepSeek）的状态。该问题由用户通过实际场景定位，并提出了“子任务主动通知主任务”的优化方案，**很可能成为后续架构讨论的焦点**。
    - 链接：https://github.com/netease-youdao/LobsterAI/issues/2132
- **待观察的修复 PR**：**PR #2133**（修复导出和代码复制 Bug）目前仍为开放状态，其修复的 UI 功能问题直接影响日常使用体验，合并后应能显著提升用户满意度。
    - 链接：https://github.com/netease-youdao/LobsterAI/pull/2133

## 5. Bug 与稳定性
| 严重程度 | 问题描述 | 来源 | 状态 | 关联 PR |
| :--- | :--- | :--- | :--- | :--- |
| **高** | 跨模型子任务调用时，网关级函数调用（如 `call_function_gblu0nmqpcej_1`）未被正确纳入 `sessions_list` 或 `subagents` 管理，导致主任务无法感知子任务完成或卡点，多模型协作流程中断。 | Issue #2132 | 讨论中，根因待分析 | 无直接修复 PR |
| **中** | 导出功能与代码复制功能存在 Bug，影响内容输出体验。 | PR #2133 (描述) | 修复 PR 已提交，待合并 | #2133 |

## 6. 功能请求与路线图信号
- **明确的新模型集成请求**：**Issue #2131** 直接询问是否计划支持 **Hermes agent**。这反映了社区对扩展 LobsterAI 多模型生态的强烈意愿，若采纳，将丰富可用的专业智能体阵容。
    - 链接：https://github.com/netease-youdao/LobsterAI/issues/2131
- **架构优化建议**：Issue #2132 中用户提出的“跨模型子任务主动通知主任务”方案，与已合并的任务通知系统（PR #2130）思想一脉相承，**可能被纳入通知系统的下一阶段迭代**，以统一处理同/跨模型场景。

## 7. 用户反馈摘要
- **核心痛点**：用户在进行**复杂、多阶段的跨模型任务**时，遭遇了**状态同步失败**的严重问题（Issue #2132）。这暴露了当前架构在支持“规划-执行”分离模式下的脆弱性，用户需要更健壮、透明的跨智能体协作机制。
- **积极期待**：用户不仅报告问题，还提供了详细的**根因分析**和**可行的优化方案**，显示出深度用户对项目技术发展的积极参与和较高期待。
- **功能期望**：对 **Hermes 等新模型/Agent 的集成**（Issue #2131）有明确需求，表明用户视 LobsterAI 为可扩展的智能体平台，而不仅是单一模型应用。

## 8. 待处理积压
- **需优先合并的修复**：**PR #2133**（修复导出/复制 Bug）已提交但未合并，应尽快评审合并以解决影响日常使用的 UI 问题。
- **需技术评估的新议题**：**Issue #2132** 描述的跨模型调用问题技术复杂度高，建议核心维护者尽快介入，评估其影响范围并规划修复方案，避免成为长期技术债。
- **需明确回应的功能请求**：**Issue #2131**（Hermes agent 支持）需项目维护者给出初步评估或路线图时间表，以管理社区预期。

---
**报告生成说明**：本报告基于 LobsterAI 仓库 2026-06-09 至 2026-06-10 的公开 GitHub 数据（Issues, PRs, Releases）自动生成，旨在提供客观的项目健康度快照。

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

# CoPaw 项目动态日报 (2026-06-10)

## 1. 今日速览
项目今日保持**极高活跃度**，社区贡献与问题反馈密集。过去24小时内， Issues 与 PR 处理量均超过30条，显示开发节奏快、社区参与度高。核心进展包括 **v1.1.11-beta.2 版本发布**，重点增强了浏览器控制能力；同时，多个关键 Bug 修复（如 Windows 路径问题、桌面端跨代理调用）已合并。社区讨论焦点集中于**功能对标（Hermes Agent）、重大架构迁移（AgentScope 2.0）以及 Windows 桌面端稳定性**，需维护团队优先关注。

## 2. 版本发布
**新版本：** `1.1.11-beta.2`
*   **发布说明：** [Release 1.1.11-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/1.1.11-beta.2)
*   **主要更新：**
    *   `feat(browser)`: 为 `browser_control` 工具添加页面坐标点击支持，提升网页自动化操作的精确度。
    *   `fix(browser)`: 引入 CDP 超时参数，并实现浏览器配置文件隔离，以支持跨浏览器切换时的环境独立。
*   **破坏性变更/迁移注意：** 本次为测试版更新，未报告重大破坏性变更。但浏览器相关配置项可能需根据新参数进行调整。

## 3. 项目进展 (已合并/关闭的重要 PR)
以下 PR 已合并，直接推动项目向前：
*   **`#5036`**: [fix: resolve session filename duplication and Desktop inter-agent call failures](https://github.com/agentscope-ai/QwenPaw/pull/5036) - **关键修复**。解决 Windows 下因会话文件名重复导致的路径超限问题，并修复了桌面版中 Agent 间工具调用（`list_agents`, `chat_with_agent`）的连接失败问题。
*   **`#5021`**: [fix: resolve /compact and auto-compaction ignoring model's max_input_length](https://github.com/agentscope-ai/QwenPaw/pull/5021) - 修复 `/compact` 命令及自动压缩功能在 `active_model` 未设置时，错误回退至 128K 默认值而非使用模型实际上下文窗口的问题。
*   **`#5043`**: [Add OpenSandbox plugin with MCP protocol](https://github.com/agentscope-ai/QwenPaw/pull/5043) - 集成 OpenSandbox 工具插件，通过 MCP 协议为 Agent 提供安全的代码/命令执行沙箱，**回应了社区对安全性的需求**。
*   **`#5049`**: [feat(providers): zero-config free models & one-click OAuth authentication](https://github.com/agentscope-ai/QwenPaw/pull/5049) - 新增免费模型零配置支持及提供商一键 OAuth 认证，显著降低新用户使用门槛。
*   **`#5054`**: [ci(e2e): complete E2E integration CI pipeline](https://github.com/agentscope-ai/QwenPaw/pull/5054) - 建立完整的端到端 Playwright CI 流水线，覆盖后端启动、代码覆盖率收集与测试修复，提升交付质量与自动化测试水平。
*   **`#4857`**: [feat(skills): enhanced make-skill flow to support self-evolving skill creation](https://github.com/agentscope-ai/QwenPaw/pull/4857) - 增强技能创建流程，支持后台执行模式下的技能自进化，**为记忆与技能系统演进奠定基础**。

## 4. 社区热点 (评论最多的讨论)
*   **`#5017`** ([讨论链接](https://github.com/agentscope-ai/QwenPaw/issues/5017)) - **评论数: 10**。主题：建议借鉴 Hermes Agent 的“学习循环”等特性。**诉求分析**：社区将 QwenPaw 与新兴标杆 Hermes Agent 进行对比，强烈期望项目在 Agent 自进化、技能自动迭代等核心 AI 能力上加速创新，以保持竞争力。这反映了用户对“智能体智能程度”的深层期待。
*   **`#5003`** ([讨论链接](https://github.com/agentscope-ai/QwenPaw/issues/5003)) - **评论数: 8**。主题：使用阿里 coding plan qwen3.7-plus 会一直卡住。**诉求分析**：指向特定模型/服务集成的兼容性与性能问题，是典型的“模型供应商适配”类反馈，影响特定用户群体的核心体验。
*   **`#4727`** ([讨论链接](https://github.com/agentscope-ai/QwenPaw/issues/4727)) - **评论数: 7**。主题：将后端从 AgentScope 1.x 迁移到 2.0。**诉求分析**：这是一个**重大架构升级**的跟踪 Issue。社区关注迁移路线图、时间表及潜在破坏性变更，是项目技术债务清理和未来扩展性的关键。

## 5. Bug 与稳定性 (按严重程度排列)
| 严重程度 | Issue | 问题描述 | 状态 | 关联 Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **高** | `#5015` | Windows 桌面版前端加载不流畅，任务执行时会话切换卡顿，CPU 激增。 | OPEN | 无 |
| **高** | `#4989` | 1.1.9/1.1.10 版本，使用本地 vLLM 部署的千问 3.6-27B 模型，对话提交后无响应（转圈）。 | OPEN | 无 |
| **高** | `#4792` | 后台流式输出长回复时，本地访问客户端（浏览器）出现系统级严重卡顿。 | CLOSED | 未在今日 PR 中明确修复 |
| **中** | `#4988` | 会话文件名重复拼接导致 Windows `MAX_PATH` 溢出。 | OPEN | `#5036` (已修复) |
| **中** | `#5025` | `submit_to_agent` (后台任务提交) 因会话文件路径生成错误导致 `FileNotFoundError`。 | OPEN | 无 |
| **中** | `#5044` | Tauri 桌面版外部链接无法打开，文件下载被阻止。 | CLOSED | 无 |
| **中** | `#5042` | Windows 下 `code-Open Directory` 无法打开 C 盘外的目录。 | CLOSED | 无 |
| **低** | `#4962`, `#5013` | DeepSeek/KimiCode API 的“思考过程”内容未正确显示/折叠。 | CLOSED | 无 |

## 6. 功能请求与路线图信号
*   **AI 能力进化**：`#5017` (学习循环) 与 `#4994` (记忆系统自进化) 指向**Agent 核心智能架构**的升级需求。已有 PR `#4857` 在技能自进化方向做出初步探索。
*   **安全与隔离**：`#4951` (OpenSandbox 支持) 已被 PR `#5043` 实现，满足了对代码执行安全沙箱的迫切需求。
*   **易用性与 UX**：
    *   `#4971` (会话管理优化) 和 `#4778` (定时任务优化) 反映了对**工作流效率**的改进诉求。
    *   `#4992` (独立视觉模型配置) 提出了多模态处理的灵活降级方案，是提升模型兼容性的重要思路。
*   **可观测性与运维**：`#5009` 询问 Langfuse/OpenTelemetry 集成路线图，表明企业级用户对**监控、追踪和成本分析**的潜在需求，是未来商业化的重要功能点。
*   **零配置体验**：PR `#5049` 已响应“零配置免费模型”需求，是降低使用门槛的关键一步。

## 7. 用户反馈摘要
*   **正面反馈**：用户高度认可 QwenPaw 的**本土化体验**，认为“设置清晰无门槛，开箱即用”，在国内环境下使用舒适。
*   **核心痛点**：
    1.  **Windows 桌面端稳定性**：卡顿、CPU 飙升、路径限制、外部链接失效等问题集中爆发，严重影响桌面用户体验。
    2.  **模型兼容性回归**：新版本（1.1.9+）导致部分本地部署模型（千问 27B）或特定 API（DeepSeek, KimiCode）的响应处理异常，显示“思考内容”逻辑需持续适配。
    3.  **功能复杂性**：会话管理、定时任务配置等操作流程被用户认为“太麻烦”，需要简化。
    4.  **架构升级焦虑**：社区对即将到来的 AgentScope 2.0 迁移存在疑虑，期待清晰的迁移指南和兼容性保证。

## 8. 待处理积压 (需维护者关注)
*   **`#2777`** ([链接](https://github.com/agentscope-ai/QwenPaw/issues/2777)) - **GPT-5.x models fail with max_tokens parameter error**。创建于 2026-04-01，距今超 2 个月，评论 4 条。这是一个**长期未解决的模型兼容性问题**，涉及硬编码模型列表和参数传递，影响最新 OpenAI 模型的使用。
*   **`#4727`** ([链接](https://github.com/agentscope-ai/QwenPaw/issues/4727)) - **Migrate backend from AgentScope 1.x to AgentScope 2.0**。虽创建较晚（5月27日），但作为**重大架构变更**的跟踪 Issue，评论活跃（7条），目前仍为 OPEN 状态。需要尽快明确迁移计划、时间表及 Breaking Changes 清单，以管理社区预期。
*   **`#5009`** ([链接](https://github.com/agentscope-ai/QwenPaw/issues/5009)) - **Roadmap for observability/tracing (Langfuse, OpenTelemetry)**。企业级功能需求，评论 2 条，OPEN。建议评估纳入后续版本规划的可能性。

---
**报告生成时间：** 2026-06-10  
**数据来源：** CoPaw (agentscope-ai/QwenPaw) GitHub Issues & Pull Requests (过去24小时)

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