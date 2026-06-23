# OpenClaw 生态日报 2026-06-23

> Issues: 265 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-06-23 00:36 UTC

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

# OpenClaw 项目动态日报 (2026-06-23)

## 今日速览

OpenClaw 项目今日保持极高活跃度，24小时内处理了265个issues和500个PRs，社区参与度旺盛。新版本v2026.6.10-beta.2发布，引入了自动快速对话模式和更可靠的模型路由功能。项目当前面临的主要挑战集中在会话状态管理、消息丢失和内存泄漏等稳定性问题上，多个P0/P1级阻塞性问题需要优先解决。大量PR集中在安全加固、兼容性修复和性能优化，显示项目正在向生产就绪方向快速演进。

## 版本发布

**v2026.6.10-beta.2** 已发布（2026-06-10）

### 主要更新
- **Automatic fast mode for talks**: OpenClaw现在能为短对话自动启用快速模式，并在长运行时返回正常模式，具备有界回退和交付行为控制（#85104）
- **More reliable model routing**: Zai模型路由改进（具体细节待补充）

### 迁移注意事项
- 无明确破坏性变更报告，但建议用户在升级前备份SQLite数据库（近期存在迁移问题#95495）
- 注意新版本可能改变会话状态管理行为，影响现有运行中的长会话

## 项目进展

### 今日重要合并/关闭的PRs

**稳定性与可靠性修复**
- **#95614** (已合并): `fix(memory-wiki)` - 修复源重新摄取时用户笔记块被销毁的问题，保护用户自定义内容
- **#95218** (已合并): `fix(agents)` - 为提供商JSON响应读取添加大小限制，防止内存耗尽攻击
- **#68936** (已合并): 添加PR审查自动修复流水线 + Windows后台守护进程，提升维护效率
- **#95880** (已合并): `ci: generalize QA profile evidence workflow` - 通用化QA配置文件证据工作流

**安全加固**
- **#78521** (开放中): `security: wrap tool results at transport boundary` - 在传输边界包装工具结果，增强安全边界
- **#92522** (开放中): `Secrets audit misses LaunchAgent service env plaintext` - 修复SecretRef迁移后审计盲点

**用户体验改进**
- **#76027** (开放中): `feat(webchat): add gateway read aloud` - WebChat添加网关朗读功能
- **#78184** (开放中): `fix(exec): clean approval-pending chat prompts` - 清理待批准聊天提示，解决Telegram/Zollie批准循环问题

**兼容性修复**
- **#95722** (开放中): `fix: normalize provider keys during model config merge` - 修复模型配置合并时提供商键规范化问题
- **#78113** (开放中): `fix(agents): restore workspace-<id> sibling layout` - 恢复非默认代理的工作空间布局

**性能优化**
- **#76230** (开放中): `perf: optimize agent tool result middleware runtime check` - 将O(N×M)查找优化为O(N+M)

### 项目整体进展评估
- **代码质量**: 大量安全边界和输入验证PR显示项目正在加强安全 posture
- **测试覆盖**: 多个PR添加了回归测试覆盖
- **CI/CD**: 自动化改进（#95010）和QA工作流通用化显示工程实践在成熟
- **跨平台支持**: Windows、macOS、Android、iOS等平台的兼容性问题正在系统性地修复

## 社区热点

### 最活跃 Issues (按评论数)

1. **#88838** (34评论, 👍1) - [P1, diamond lobster]  
   **Track core session/transcript SQLite migration via accessor seam**  
   https://github.com/openclaw/openclaw/issues/88838  
   *诉求*: 跟踪核心会话/转录SQLite迁移，确保数据完整性和迁移路径清晰。这是架构级问题，影响所有使用SQLite存储的用户。

2. **#88312** (17评论, 👍4) - [P1, regression]  
   **[Bug]: [Regression] 2026.5.27: Codex app-server turn-completion stall returns**  
   https://github.com/openclaw/openclaw/issues/88312  
   *诉求*: 修复Codex应用服务器在2026.5.27版本后出现的转完成停滞问题，影响多工具代理会话。社区反应强烈（👍4），显示影响范围广。

3. **#86538** (13评论, 👍1) - [P1]  
   **[Bug]: Session write-lock timeouts block subagent delivery lanes**  
   https://github.com/openclaw/openclaw/issues/86538  
   *诉求*: 会话JSONL写入锁超时阻塞主、cron嵌套和子代理通道，导致交付/生命周期失败。这是深层并发问题。

4. **#91588** (13评论, 👍1) - [P0, crash-loop]  
   **Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB over days**  
   https://github.com/openclaw/openclaw/issues/91588  
   *诉求*: 网关进程存在严重内存泄漏，2-3天内从350MB增长到15.5GB，触发OOM杀死。这是最高优先级稳定性问题。

5. **#92201** (12评论, 👍1) - [P1]  
   **Embedded runner: freshly streamed thinking signatures intermittently invalid on replay (Anthropic

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告  
**报告周期**：2026-06-23（基于过去24小时社区动态）  
**数据来源**：各项目 GitHub 仓库公开 Issues/PRs 及 Release 信息  

---

## 1. 生态全景  
当前个人 AI 助手/自主智能体开源生态呈现 **“多极分化、快速演进”** 的态势。头部项目（如 OpenClaw、CoPaw、PicoClaw、IronClaw）保持极高开发活跃度，核心竞争焦点从功能堆砌转向 **生产就绪**——即稳定性、安全性与企业级部署能力。中型项目（NanoBot、Zeroclaw）则深耕特定架构方向（如网关抽象、Wasm 安全），试图建立技术壁垒。尾部项目（NanoClaw、TinyClaw 等）活跃度显著偏低，面临社区参与不足的挑战。整体趋势显示，生态正从“实验性工具”向“可靠基础设施”过渡，移动端体验、供应链安全与智能体自进化成为下一阶段的关键赛点。

---

## 2. 各项目活跃度对比  

| 项目 | 24h Issues 更新 | 24h PRs 更新 | Release 动态 | 健康度评估 | 核心状态 |
|------|----------------|-------------|-------------|-----------|----------|
| **OpenClaw** | 265（处理） | 500（处理） | v2026.6.10-beta.2 (2026-06-10) | 🔴 高活跃但稳定性承压 | 功能爆发期，P0/P1 阻塞性问题集中 |
| **CoPaw** | 21 | 50 | 无（最新 v1.1.12.post1） | 🔴 极高活跃，多线并行 | 稳定性修复 + 移动端适配 + 功能增强 |
| **PicoClaw** | 2（1严重Bug） | 44（34合并） | v0.3.0-nightly.20260622 | 🔴 极高活跃，修复密集 | 健壮性提升 + 工具链扩展 |
| **IronClaw** | ~41（合并计数） | ~41（合并计数） | 无 | 🔴 高度活跃，重构关键期 | Reborn 架构攻坚，高严重性回归 |
| **Zeroclaw** | 50 | 50（2合并） | 无（v0.8.1, 2026-06-10） | 🟡 高度活跃，安全/架构聚焦 | RFC 讨论密集，S0/S1 Bug 待解 |
| **NanoBot** | 4（平缓） | 27（12合并，15待合并） | v0.2.2 准备中 | 🟡 高活跃，稳定性优先 | 网关生命周期修复 + 企业集成 |
| **LobsterAI** | 5（均 stale） | 6（合并） | 无 | 🟡 开发活跃但反馈积压 | 功能推进，UI/统计 Bug 长期未解 |
| **NanoClaw** | 0 | 6（1合并，5待合并） | 无 | 🟢 低活跃，审查严格 | 功能扩展缓慢，社区互动弱 |
| **EasyClaw** | 0 | 0 | v1.8.40 发布 | 🟢 稳定，发布驱动 | 社区活跃度持续低迷 |
| TinyClaw / Moltis / ZeptoClaw | 0 | 0 | 无 | ⚪ 停滞 | 无近期活动 |

**健康度说明**：  
- 🔴 **高活跃**：每日 PR/Issue 处理 >20，快速迭代，但可能伴随稳定性波动。  
- 🟡 **中高活跃**：持续有合并/讨论，但节奏相对可控，聚焦特定主题。  
- 🟢 **稳定/低活跃**：无新增活动，以维护或版本发布为主。  
- ⚪ **停滞**：长期无任何活动。

---

## 3. OpenClaw 在生态中的定位  
**优势**：  
- **规模与生态**：社区规模显著领先（日处理 500 PRs），拥有最广泛的模型路由、插件系统及多平台支持（Web、移动端、桌面端）。  
- **技术广度**：提供从网关、会话管理到前端 UI 的全栈解决方案，是生态中“事实上的核心参照”。  

**技术路线差异**：  
- 相比 **Zeroclaw** 的“Wasm-first 安全优先”和 **PicoClaw** 的“嵌入式轻量”路线，OpenClaw 更倾向于 **“全集成、高可用”** 的通用平台路径，牺牲部分架构纯粹性以换取开箱即用体验。  
- 相比 **IronClaw** 的“AI 自进化”实验性，OpenClaw 更注重 **生产环境稳定性**（如 SQLite 迁移、内存泄漏修复）。  

**社区规模对比**：  
- OpenClaw 的 Issues/PRs 数量约为第二名（CoPaw）的 **10 倍以上**，显示其作为生态基石的吸引力，但也面临大规模使用带来的复杂性问题（如会话状态管理）。

---

## 4. 共同关注的技术方向  
| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **稳定性与可靠性** | OpenClaw, CoPaw, PicoClaw, IronClaw, NanoBot | 会话状态管理、消息丢失、内存泄漏、进程冻结、网关关闭稳定性、任务挂起等 P0/P1 问题修复。 |
| **安全加固** | OpenClaw, Zeroclaw, CoPaw | 工具结果传输边界包装、Secret 审计、供应链签名（硬件 PGP）、密钥隔离、输入验证限制。 |
| **上下文与记忆管理** | OpenClaw, Zeroclaw, CoPaw | 会话迁移路径、上下文预算超限、滚动策略（SQLite 持久化）、记忆时效排名、工具调用泄露。 |
| **移动端与多平台体验** | CoPaw, NanoBot, PicoClaw | 响应式布局、PWA 支持、Android ADB 远程操作、Telegram 富消息、跨平台兼容性（Windows/macOS）。 |
| **企业级部署与集成** | NanoBot, Zeroclaw, OpenClaw | 后台守护进程语义、Mattermost/钉钉集成、硬件安全模块、Postgres 托管配置、SLSA 合规。 |
| **架构现代化** | Zeroclaw, IronClaw, OpenClaw | 消除 Node.js 依赖、Wasm 插件系统、单体 crate 分解、OpenAI 兼容接口、模型路由抽象。 |

---

## 5. 差异化定位分析  
| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw | CoPaw | IronClaw | LobsterAI |
|------|----------|---------|----------|----------|-------|----------|-----------|
| **功能侧重** | 全栈平台（网关+Web+移动） | 网关与多平台集成 | 安全与 Wasm 运行时 | 嵌入式/移动设备控制 | 移动端优先 + 知识库 | AI 自进化与自动化 | OpenClaw 插件生态 |
| **目标用户** | 需要高度定制的开发者/企业 | 企业协作场景（Mattermost等） | 安全敏感环境（金融、政府） | IoT/移动自动化开发者 | 移动优先的个人/团队 | 高级自动化与自进化实验 | OpenClaw 用户的功能扩展者 |
| **技术架构** | Go + 多语言插件 | Python + AnyIO | Rust + Wasmtime | Go + 轻量设计 | Python + 响应式前端 | Rust + 单体分解中 | 基于 OpenClaw 的 NIM 插件 |
| **部署模式** | 全栈一体/分布式 | 网关-客户端分离 | 单机/容器化 | 单机/设备嵌入 | 单机/云 | 托管/单租户 | 作为 OpenClaw 插件运行 |

---

## 6. 社区热度与成熟度  
- **快速迭代阶段（功能爆发）**：  
  **OpenClaw, CoPaw, PicoClaw, IronClaw**  
  特征：PR 合并量极大，同时推进稳定性修复、新

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-23)

## 1. 今日速览
项目整体处于**高活跃开发状态**，过去24小时共处理 **27 条 PR**（12 条合并/关闭，15 条待合并），Issues 活动相对平缓（4 条更新）。开发重点集中于**系统稳定性修复**（尤其是网关关闭与 WebUI 交互问题）和**多平台集成扩展**（Mattermost、DingTalk 改进）。核心版本 **v0.2.2** 的发布准备工作已基本完成，预计近期正式发布。社区新功能提案（PWA 支持、Telegram 富消息）持续涌现，显示项目生态在稳步扩大。

## 2. 版本发布
- **无新版本发布**。
- **重要进展**：PR #4445 已完成 v0.2.2 的版本号 bump、文档更新及代码清理，该版本将包含大量稳定性修复（见下文）。建议用户关注即将发布的 v0.2.2 以获取关键修复。

## 3. 项目进展
今日合并/关闭的 **12 条 PR** 主要推进了以下关键改进：

| PR 编号 | 标题 | 影响范围 | 进展意义 |
| :--- | :--- | :--- | :--- |
| **#4454** | `fix: stabilize gateway shutdown` | 核心网关 | 解决前台网关在信号处理下的关闭稳定性问题，防止任务泄漏。 |
| **#4455** | `fix(webui): preserve fork replies` | WebUI | 修复 fork 回复在历史刷新时丢失的竞态条件，提升会话连续性。 |
| **#4453** | `fix(webui): follow active turn output` | WebUI | 优化发送后提示锚定与流式输出跟随逻辑，改善交互体验。 |
| **#4451** | `fix(webui): stabilize sent turn layout` | WebUI | 稳定发送消息后的布局，避免短消息导致的界面跳动。 |
| **#4450** | `fix: close MCP stdio transports` | MCP 集成 | 从正确任务上下文关闭 MCP 传输，消除 AnyIO 取消作用域错误。 |
| **#4448** | `chore(config): default context window to 200k` | 配置 | 将默认上下文窗口从 65K 提升至 200K，适应现代大模型需求。 |
| **#4445** | `chore(release): prepare v0.2.2` | 发布流程 | 完成 v0.2.2 的所有版本准备与文档工作。 |
| **#4456** | `fix(gateway): tolerate cancelled tasks` | 核心网关 | 修复网关关闭时对已取消任务的异常处理。 |
| **#4459** | `feat: add Mattermost channel support` | 平台集成 | **新增功能**：通过 WebSocket + REST API 集成 Mattermost，支持实时消息与流式回复。 |
| **#4439** | `feat(tools): add read-only search_history tool` | 工具链 | **新增工具**：提供只读的历史搜索工具，增强记忆召回能力。 |

**整体推进评估**：今日合并的 PR 几乎全部为**修复性工作**，系统性解决了网关生命周期、WebUI 交互、MCP 连接稳定性等深层次问题，并提升了默认配置的合理性。这标志着项目在**可靠性**和**用户体验**上迈出重要一步，为 v0.2.2 的稳定发布奠定了坚实基础。新增的 Mattermost 集成则进一步扩展了平台支持边界。

## 4. 社区热点
基于 Issue 评论数与 PR 主题，今日社区讨论焦点如下：

- **Issue #1461** (已关闭，4 条评论)：关于“提供统一的后台守护进程网关语义层”。尽管创建较早（3月），但其讨论涉及项目架构升级（双层模式），是**长期架构演进**的核心议题，影响网关部署模式的未来设计。
- **PR #4459** (新建，Mattermost 集成)：作为今日最重要的**新功能 PR**，它展示了社区对扩展企业级协作平台（如 Mattermost）支持的积极贡献，可能吸引相关用户群体关注。
- **Issue #4457** (新建，PWA 支持)：关于为 WebUI 添加 PWA 支持，直接回应移动端用户体验需求，是**前端体验优化**的热点提案。
- **PR #4439** (新建，`search_history` 工具)：新增记忆工具，触及 Agent 核心能力，可能引发关于“记忆管理最佳实践”的后续讨论。

**背后诉求分析**：热点集中反映了社区两大诉求：1) **企业级部署的规范化**（网关守护进程、Mattermost 集成）；2) **终端用户体验的现代化**（PWA、富消息、更友好的向导）。项目正从“可用”向“好用且易部署”演进。

## 5. Bug 与稳定性
**今日无新报告的 Bug**（新开 Issues 均为功能请求）。但有多项**严重稳定性问题**的修复已合并：

| 严重程度 | 问题描述 | 相关 PR | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | 网关关闭时因任务取消导致崩溃 | #4456, #4454, #4450 | **已合并** |
| **高** | WebUI fork 回复在历史刷新时丢失 | #4455 | **已合并** |
| **中** | 流式 Anthropic 响应中重复 `tool_use` ID 导致会话永久损坏 | #4443 | **已合并** |
| **中** | MCP 重连失败时 `RuntimeError` 导致网关崩溃 | #4441 | **已合并** |
| **中** | MCP 资源和提示未受 `enabledTools` 约束，可能泄露配置 | #4436, #4452 | **已合并** |

**总结**：今日合并的修复 PR 系统性解决了**网关生命周期管理**、**WebUI 状态同步**和**MCP 安全隔离**三大类稳定性隐患，显著降低了生产环境崩溃风险。

## 6. 功能请求与路线图信号
**新功能请求**：
- **Issue #4413**：支持 Telegram Bot API 10.1 富消息格式（Markdown 转换）。
- **Issue #4457**：为 WebUI 添加 PWA 支持，实现移动端主屏幕安装。

**相关 PR 与路线图信号**：
- **高优先级（代码已提交）**：PR #4459 (Mattermost 集成) 和 PR #4457 (PWA) 的实现已开始，**极有可能纳入下一版本**（v0.2.2 之后）。
- **中优先级（设计讨论中）**：PR #4291（子代理使用可配置模型预设）功能明确但合并缓慢（自 6/11 创建），需维护者推动决策。
- **低优先级（需求明确）**：Issue #4413（Telegram 富消息）需求清晰，但尚未有实现 PR，可能排期较后。

**路线图推断**：项目下一周期将聚焦 **“多平台深度集成”**（Mattermost、DingTalk 改进）与 **“前端体验现代化”**（PWA），同时持续加固核心稳定性。

## 7. 用户反馈摘要
从 Issues 描述与评论中提炼的核心反馈：

- **新用户上手门槛高**：Issue #4376 指出 `nanobot onboard --wizard` 假设用户具备技术知识，**需要更直观的配置向导**。这反映了项目在“开箱即用”体验上的不足。
- **移动端体验缺失**：Issue #4457 明确要求 PWA 支持，说明现有 WebUI 在移动设备上缺乏原生应用般的便捷性。
- **消息能力局限**：Issue #4413 希望 Telegram 支持富消息，表明当前消息格式（纯 Markdown）已无法满足高级格式化需求，影响在 Telegram 平台的表现力。
- **企业部署需求**：Issue #1461 和 PR #4459 共同指向对**标准化后台服务管理**和**企业协作平台（Mattermost）集成**的强烈需求，显示项目用户群向企业级应用延伸。

**满意度点**：社区对项目快速响应稳定性问题（如网关关闭、WebUI 竞态）表示认可，相关修复 PR 获得合并。

## 8. 待处理积压
以下 PR/Issue 创建时间较长或讨论停滞，建议维护者关注：

| 编号 |

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-23)

## 1. 今日速览
过去24小时，Zeroclaw 项目保持**高度活跃**，共产生 100 条 Issues/PR 更新（Issues 50 条，PR 50 条）。社区围绕**核心架构安全化**（消除 Node.js、Wasm 插件、供应链签名）和**运行时稳定性**（上下文管理、工具可用性）展开密集讨论。多个高严重性（S0/S1）Bug 被报告，但部分已有修复 PR 待合并。项目正处于 v0.9.0 功能冻结前的关键迭代期，安全与架构类 RFC 成为焦点。

## 2. 版本发布
*无新版本发布。最新稳定版仍为 v0.8.1（2026-06-10）。*

## 3. 项目进展
今日有 **2 个 PR 被合并/关闭**，主要推进稳定性与测试覆盖：
- **PR #7853** (已合并): 修复 Windows 自更新机制，解决因文件锁导致的更新失败问题，并强化更新管道。
- **PR #7688** (已合并): 增加运行时钩子的panic恢复与取消传播测试覆盖，提升核心运行时可靠性。

同时，**8 个 Issues 被关闭**，包括：
- **#7420** (RFC: 原生动态库插件系统) 和 **#7674** (RFC: 消除 Node.js) 的讨论告一段落，进入决策阶段。
- **#8013** (禁用 Agent 未停止 Discord 频道) 和 **#6037** (Cron 重复执行) 等 Bug 被修复关闭。

## 4. 社区热点
今日讨论最活跃的议题集中在**架构重构与供应链安全**：
- **Issue #7420** ([RFC: 原生动态库插件系统](https://github.com/zeroclaw-labs/zeroclaw/issues/7420)) - 评论 6 条。探讨从 Extism 转向直接 wasmtime 组件模型，以解决插件目标冲突。**核心诉求**：统一插件架构，消除外部运行时依赖。
- **Issue #7674** ([RFC: WebAssembly-first, 消除 Node.js](https://github.com/zeroclaw-labs/zeroclaw/issues/7674)) - 评论 5 条。提议彻底移除构建与运行时的 Node.js 依赖，降低供应链风险。**核心诉求**：纯 Rust/Wasm 技术栈，提升安全性与可审计性。
- **Issue #8177** ([RFC: 供应链签名 - 硬件 PGP 等](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)) - 评论 3 条。提出为容器镜像和发布二进制文件添加硬件 backed PGP 签名与 SLSA  provenance。**核心诉求**：达到 StageX 级别的供应链安全标准。

## 5. Bug 与稳定性
**高严重性 (S0/S1) 问题**：
- **#5808** ([Bug]: 默认 32k 上下文预算在首次迭代即超限) - **S1 - 工作流阻塞**。系统提示+工具定义导致首次迭代即超预算 3.3 倍，触发预emptive trim。*已有历史修复尝试，但问题复现，需重新设计上下文管理。*
- **#8193** ([Bug]: MCP 工具在 TUI 会话中缺失) - **S1 - 工作流阻塞**。网关能发现 MCP 工具，但 Zerocode TUI 会话无法接收。*PR #8199 已提交修复，待合并。*
- **#8013** ([Bug]: 禁用 Agent 不停止其绑定的 Discord 频道) - **S0 - 数据丢失/安全风险**。在 v0.8.1 容器中，配置 `enabled = false` 后 Discord 频道仍保持在线。*已关闭，修复已合并。*
- **#7756** ([Bug]: 原生/MCP 工具在 OpenAI Responses/Anthropic turns 中不可用) - **S1 - 工作流阻塞**。工具注册成功，但模型轮次中是否实际接收取决于模型提供商。*待修复。*

**中低严重性**：
- **#7462** ([Bug]: Windows 74 个测试失败) - **S2 - 降级行为**。因 Unix 命令、路径语义和编码问题导致。*CI 未覆盖 Windows，需修复。*
- **#6360** ([Bug]: Telegram 上提示缓存不工作) - **S2**。CLI 正常，Telegram 频道强制全量重处理。*待修复。*

## 6. 功能请求与路线图信号
以下增强请求与 v0.9.0 安全/架构主题高度相关，**可能纳入下一版本**：
- **#8125** ([Feature]: 在 quickstart 中自动设置 `yolo` 风险预设) - 防止用户因 restrictive 预设导致体验不佳。
- **#8046** ([Feature]: Telegram 可选 webhook 模式) - 替代长轮询，改善 NAT 后部署。
- **#8138** ([Feature]: OpenRouter 模型回退数组支持) - 提升提供商容错能力。
- **#8076** ([Feature]: 本地用户名/密码 AuthProvider) - 为无 IdP 场景提供浏览器登录。
- **#8134** ([Feature]: 频道 `session_ttl_hours` 自动截断) - 减少 token 消耗，提升响应速度。

**架构方向信号**：
- **#8132** & **#8135** (RFC: 用 Rust→Wasm 框架替换 React 前端 / Wasm-first 插件运行时) - 与 #7674 一脉相承，推动全栈 Wasm 化。
- **#8043** (RFC: 合并 `aardvark-sys` 到 `zeroclaw-hardware`) - 硬件抽象层简化。

## 7. 用户反馈摘要
从 Issues 评论与描述中提炼的**真实痛点**：
- **配置复杂性**：用户对 `agent.max_context_tokens` 默认值（32k）与实际系统需求不匹配感到困惑，导致首次交互即失败（#5808）。
- **功能不一致**：MCP 工具在网关与 TUI 间表现不同（#8193），以及在不同模型提供商（OpenAI/Anthropic）间工具可用性差异（#7756），引发对抽象层可靠性的担忧。
- **运维控制缺失**：Discord/Telegram 等频道在 Agent 禁用后仍活跃（#8013），以及缺乏会话历史自动清理（#8134），导致资源浪费与安全顾虑。
- **安全焦虑**：社区主动提出多项供应链与运行时安全增强（#8177, #8128），反映用户对生产环境安全性的高要求。
- **跨平台体验**：Windows 用户遭遇大量测试失败（#7462），表明 CI 矩阵不完整，影响非 Linux 用户信心。

## 8. 待处理积压
以下为**创建时间较长、高优先级**但尚未解决或推进缓慢的 Issue，建议维护团队关注：
- **#5808** (创建于 2026-04-16) - 上下文预算超限，S1 阻塞性问题，影响所有新用户。*需架构级修复。*
- **#6037** (创建于 2026-04-23) - Cron 重复执行 Bug，可能导致任务爆炸。*已关闭，但修复合并状态需确认。*
- **#7462** (创建于 2026-06-10) - Windows 测试失败 74 项，S2 降级行为。*CI 未覆盖 Windows，需专项修复。*
- **#6943** (创建于 2026-05-26) - RFC: 插件系统目标冲突，影响 FND-001 第二阶段实施。*需 RFC 决策。*
- **#6360** (创建于 2026-05-04) - Telegram 提示缓存失效，S2 性能问题。*待修复。*

---
**报告生成时间**: 2026-06-23  
**数据来源**: [Zeroclaw GitHub Issues](https://github.com/zeroclaw-labs/zeroclaw/issues) & [Pull Requests](https://github.com/zeroclaw-labs/zeroclaw/pulls) (过去 24 小时更新)  
**报告说明**: 本报告基于 GitHub 公开数据自动生成，聚焦客观事实与数据趋势，不包含主观预测。链接均为原始 Issue/PR 页面。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-23)

## 1. 今日速览
过去24小时，PicoClaw 项目展现出极高的开发活跃度，共处理 **44 个 Pull Request**，其中 **34 个已合并/关闭**，表明核心团队与社区贡献者推进迅速。同时发布了新的 nightly 构建版本（v0.3.0-nightly.20260622），持续集成流程稳定运行。社区方面，新增 **2 个活跃 Issues**，其中包含一个关于 Volcengine Doubao 模型工具调用泄露的严重 Bug 报告，以及一个关于集成 SimpleX/tox 网关的功能请求，需关注后续修复与讨论。

## 2. 版本发布
- **新版本**: `v0.3.0-nightly.20260622.287853ab`
  - **类型**: Nightly Build（自动构建，可能存在不稳定因素）
  - **更新内容**: 基于 `main` 分支的每日自动构建，包含截至今日所有已合并的 PR 更改。
  - **注意事项**: 不建议用于生产环境。完整变更日志请查看 [v0.3.0...main 对比](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)。

## 3. 项目进展
今日大量 PR 被合并，项目在**稳定性、健壮性及功能体验**上取得显著进展：
- **稳定性与健壮性修复**:
  - **类型断言安全**: 合并了多个修复，为 `evolution/store.go`、`openai_compat/provider.go` 及 `tools/registry.go` 中的类型断言添加 `ok` 检查，防止因类型不匹配导致的 panic (#3053, #3091, #3131)。
  - **消息总线与健康检查**: 修复了消息总线背压处理逻辑，并改进了健康状态可见性，提升了运行时可靠性 (#2906)。
  - **存储一致性**: 修复了 JSONL 会话索引的热路径克隆性能问题及元数据在崩溃后可能漂移的问题，增强了存储层的持久化可靠性 (#2913, #2907)。
- **功能与体验增强**:
  - **技能搜索体验**: 增强了 `picoclaw skills search` 的输出，明确列出技能的安装方法，降低了用户使用门槛 (#3152)。
  - **模型支持**: 为 MiMo 提供商添加了 `CommonModels`，区分多模态 (`mimo-v2.5`) 与纯文本 (`mimo-v2.5-pro`) 模型，优化了 WebUI 的默认推荐逻辑 (#2915)。

## 4. 社区热点
今日讨论最活跃的议题围绕 **Bug 修复、新工具集成与测试覆盖**：
- **[PR #3154] fix(openai_compat): recover Doubao Seed tool calls leaked as <seed:tool_call>** ([链接](https://github.com/sipeed/picoclaw/pull/3154))
  - **背景**: 直接对应新报告的严重 Bug Issue #3153。
  - **诉求**: 社区（@hanZeng-08）快速响应，修复 Volcengine Doubao Seed 模型在特定条件下将工具调用以原始 XML 文本形式返回而非执行的问题。这是当前最高优先级的稳定性修复。
- **[PR #3157] feat: add Android ADB remote operations tool** ([链接](https://github.com/sipeed/picoclaw/pull/3157))
  - **背景**: 由社区贡献者 @danmobot 提交的新功能。
  - **诉求**: 扩展 PicoClaw 对 Android 设备的远程操作能力（如截图、UI 分析、点击、输入等），体现了社区对多平台自动化支持的需求。
- **[PR #3158] test: cover sandbox fs Windows path handling** ([链接](https://github.com/sipeed/picoclaw/pull/3158))
  - **背景**: 新提交的测试覆盖 PR。
  - **诉求**: 提升沙盒文件系统在 Windows 路径处理上的测试覆盖率，反映了项目对跨平台兼容性的持续关注。

## 5. Bug 与稳定性
- **严重 Bug**:
  - **#3153 [BUG] Volcengine Doubao Seed tool calls occasionally leak as <seed:tool_call> text** ([链接](https://github.com/sipeed/picoclaw/issues/3153))
    - **严重程度**: 高。导致工具调用失效，用户收到原始 XML 而非执行结果，严重影响使用体验。
    - **状态**: 已有修复 PR (#3154) 提交并开放，正在评审中。
- **其他稳定性改进**: 今日合并的多个 PR (#3053, #3091, #3131, #2906, #2913, #2907) 均属于预防性稳定性修复，解决了潜在 panic、资源泄漏与数据一致性问题，项目健壮性得到整体提升。

## 6. 功能请求与路线图信号
- **新功能请求**:
  - **#3093 [Feature] I need SimpleX or tox** ([链接](https://github.com/sipeed/picoclaw/issues/3093))
    - **诉求**: 用户请求集成 SimpleX 或 Tox 作为网关/通信协议。这是一个明确的扩展性需求，可能指向去中心化或隐私保护的通信场景。
- **已实现/进行中的功能扩展**:
  - **Android ADB 工具** (#3157): 实验性功能，若合并将显著扩展设备控制能力。
  - **远程 WebSocket 模式** (#3118): 为 `picoclaw agent` 添加远程连接能力，支持通过 WebSocket 与远程 Pico 实例交互，增强部署灵活性。
  - **LLM 令牌使用明细** (#3156): 在 Pico 通道上输出每轮对话的输入/输出令牌数，便于下游监控与成本分析。

## 7. 用户反馈摘要
从 Issues 与 PR 描述可提炼以下用户痛点与场景：
- **功能正确性优先**: 用户对模型（如 Doubao Seed）返回格式的异常极为敏感，工具调用必须可靠执行而非“静默失败” (#3153)。
- **易用性与文档**: 用户需要清晰的安装和配置指引，技能搜索功能增强 (#3152) 直接回应了“如何安装”的常见困惑。
- **异步行为清晰度**: 关于 `spawn` 异步回调导致重复消息的修复 (#3155) 表明用户期望精确的消息流控制，避免冗余通知。
- **多平台与远程控制**: 对 Android ADB 工具 (#3157) 和远程 WebSocket 模式 (#3118) 的需求，反映了用户在自动化脚本中跨设备、分布式部署的真实场景。

## 8. 待处理积压
以下 PR 标记为 `[stale]` 或长时间未更新，建议维护者关注其状态，决定合并、关闭或请求更新：
- **功能类**:
  - **[PR #3118] Add remote Pico WebSocket mode to picoclaw agent** ([链接](https://github.com/sipeed/picoclaw/pull/3118)) - 自 6月12 日未更新，功能重要但可能停滞。
- **依赖与维护类**:
  - **[PR #3104] build(deps): bump shadcn ... in /web/frontend** ([链接](https://github.com/sipeed/picoclaw/pull/3104))
  - **[PR #3100] build(deps-dev): bump @vitejs/plugin-react ...** ([链接](https://github.com/sipeed/picoclaw/pull/3100))
  - **[PR #3103] build(deps-dev): bump typescript-eslint ...** ([链接](https://github.com/sipeed/picoclaw/pull/3103))
  - **[PR #3101] build(deps-dev): bump vite ...** ([链接](https://github.com/sipeed/picoclaw/pull/3101))
  - **[PR #3105] build(deps-dev): bump eslint ...** ([链接](https://github.com/sipeed/picoclaw/pull/3105))
  - 上述依赖更新 PR 因依赖 Dependabot 或等待 CI，可能已过时，需确认是否仍适用当前代码库。
- **代码质量类**:
  - **[PR #3131] fix(registry): add ok checks for tool schema type assertions** ([链接](https://github.com/sipeed/picoclaw/pull/3131))
  - **[PR #3128] fix(web): explicitly ignore resp.Body.Close() errors ...** ([链接](https://github.com/sipeed/picoclaw/pull/3128))
  - 这些代码质量修复已开放较久，建议评估合并以提升代码健壮性。
- **长期未响应 Issue**:
  - **[Issue #3093] [Feature] I need SimpleX or tox** ([链接](https://github.com/sipeed/picoclaw/issues/3093)) - 创建于 6月10 日，有社区支持（👍1），但无官方回复，建议评估需求优先级并给予反馈。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-23)

## 1. 今日速览
过去24小时，NanoClaw 项目在 Pull Requests 层面保持活跃（共6条更新），但无新 Issues 报告、无新版本发布，社区互动处于低位。仅1条 PR 被关闭（Telegram 集成），其余5条待合并，表明代码审查流程严格或维护资源有限。项目整体处于功能扩展阶段，但需关注 contributor 体验与社区反馈渠道的激活。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
- **已合并/关闭**：
  - [PR #2831](https://github.com/nanocoai/nanoclaw/pull/2831): 添加 Telegram 集成（已关闭），成功支持 Telegram 作为通信渠道，增强多平台 agent 交互能力。
- **重要进行中 PR**（待合并）：
  - [PR #1235](https://github.com/nanocoai/nanoclaw/pull/1235): 添加 IMAP/SMTP 邮件集成（通道 + 工具集），功能全面但已开放近3个月。
  - [PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795): 添加 `/add-clidash` 技能（CLI 衍生仪表板），提供只读监控工具。
  - [PR #2832](https://github.com/nanocoai/nanoclaw/pull/2832): 为审批模块添加“拒绝并说明理由”选项，优化人机协作反馈。
  - [PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830): 修复 setup 脚本，清理失效的 peer 服务注册，提升安装稳定性。
  - [PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531): 修复 poll-loop 中消息重复问题，改善运行时消息处理。

## 4. 社区热点
过去24小时无 Issues 或 PR 评论数据，社区讨论不活跃。但基于 PR 类型与功能影响，以下方向可能引发潜在关注：
- **IMAP 邮件集成**（[PR #1235](https://github.com/nanocoai/nanoclaw/pull/1235)）：涉及核心通信能力，影响用户工作流整合，长期未合并可能引发疑虑。
- **审批拒绝理由功能**（[PR #2832](https://github.com/nanocoai/nanoclaw/pull/2832)）：直接优化 agent-human 交互，企业用户可能重视其反馈机制。
- **Telegram 集成**（[PR #2831](https://github.com/nanocoai/nanoclaw/pull/2831)）刚合并，可能吸引新用户尝试多平台部署。

## 5. Bug 与稳定性
- **高优先级**：
  - [PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531): 修复 poll-loop 重复消息问题，避免 agent 输出冗余，影响用户体验。已提交修复，待合并。
- **中优先级**：
  - [PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830): 修复 setup 中死注册残留，防止系统资源浪费和启动失败。已提交修复，待合并。
无崩溃或回归问题报告。

## 6. 功能请求与路线图信号
当前 PR 集中体现以下新功能需求：
1. **邮件集成**（IMAP/SMTP）—— 功能完整，覆盖通道与工具集，可能纳入下一版本。
2. **CLI 仪表板技能** —— 轻量级工具，易合并，增强监控能力。
3. **审批拒绝理由** —— 小但重要的交互改进，可能快速通过。
无独立功能请求 Issues，但 PR 提交反映开发者对**通信渠道扩展**（邮件、Telegram）和**工具丰富性**（仪表板、审批）的持续投入。

## 7. 用户反馈摘要
无 Issues 报告，无法直接获取用户反馈。PR 的提出可能源于开发者自用或早期测试需求，但缺乏社区声音。建议主动征集用户意见以指导优先级，特别是关于邮件集成和审批流程的实际使用场景。

## 8. 待处理积压
- **PR #1235**（IMAP 集成）：创建于 2026-03-18，距今近3个月，功能复杂但未合并，可能需重点审查测试覆盖度与安全考虑。
- **PR #2531**（poll-loop 修复）：创建于 2026-05-18，距今1个月，Bug 修复应优先处理以避免用户体验下降。
提醒维护者评估这些 PR 的兼容性、文档更新情况，并加速合并以稳定主分支。长期积压可能影响 contributor 积极性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-23)

**报告周期：** 过去24小时 (基于2026-06-22至2026-06-23的GitHub活动数据)

---

### 1. 今日速览
项目今日保持**高度活跃**，24小时内共产生41条Issue/PR更新，核心开发焦点明确集中在 **“Reborn”重构** 的稳定性、性能与功能完善上。社区报告了一个关键的回归问题（#5139），影响了部分任务执行，但同日已有多个重要PR合并，涉及并发执行、权限模型和部署架构等关键改进，项目整体在快速迭代中向前推进。

### 2. 版本发布
*无新版本发布。*

### 3. 项目进展 (已合并/关闭的重要PR)
今日合并的PR主要解决了架构、性能与权限管理的核心问题，显著推进了Reborn的成熟度：
- **并发执行能力**：PR [#5085](https://github.com/nearai/ironclaw/pull/5085) 已合并，实现了Turn的并发执行与用户/类型级配额控制，是提升吞吐量的关键基础设施。
- **权限模型完善**：PR [#5063](https://github.com/nearai/ironclaw/pull/5063) (per-turn auto-approve) 与 PR [#5062](https://github.com/nearai/ironclaw/pull/5062) (per-tool permission override) 已合并，共同构建了灵活、细粒度的审批策略系统。
- **部署与稳定性**：PR [#5081](https://github.com/nearai/ironclaw/pull/5081) 添加了 `hosted-single-tenant` Postgres配置，为托管部署铺平道路；PR [#5140](https://github.com/nearai/ironclaw/pull/5140) 修复了触发器创建时的错误提示不透明问题。
- **架构重构启动**：PR [#5137](https://github.com/nearai/ironclaw/pull/5137) (提取HTTP中间件) 已作为系列重构的第一步开启，旨在分解庞大的 `ironclaw_reborn_composition` 单体 crate。

### 4. 社区热点
讨论最活跃的议题围绕 **Reborn的稳定性、性能与用户体验**：
- **最活跃Issue**：**[#5139](https://github.com/nearai/ironclaw/issues/5139)** (rebron regression: web/research tasks hang) 报告了严重回归，21/147的基准任务在初始化时挂起且无LLM调用，是当前最高优先级的稳定性问题。
- **核心反馈渠道**：**[#5119](https://github.com/nearai/ironclaw/issues/5119)** (Local Dogfooding Findings 06/22-06/28) 作为本周的集中反馈帖，已开始收集启动、配置、模型提供商设置等第一手用户体验问题。
- **大型功能讨论**：PR **[#5061](https://github.com/nearai/ironclaw/pull/5061)** (skill extraction & self-evolution) 与 PR **[#5135](https://github.com/nearai/ironclaw/pull/5135)** (composition decomposition) 因其规模和战略性，吸引了核心贡献者的持续关注与讨论。

### 5. Bug 与稳定性
| 严重程度 | 问题描述 | 状态 | 关联PR/备注 |
| :--- | :--- | :--- | :--- |
| **高** | **#5139**: Reborn在web/research任务初始化时挂起，导致PinchBench每日大量任务失败（零LLM调用）。 | OPEN | 无已知修复PR。需紧急调查近期提交（704fcd43）引入的变更。 |
| **中** | **#4108**: Nightly E2E测试持续失败（已持续近一个月）。 | OPEN | 可能为环境或集成问题，需定期复查。 |
| **低** | **#4925**: NEAR AI MCP显示“SETUP NEEDED”尽管已就绪（UI状态不同步）。 | CLOSED | 修复应已随相关PR合并。 |
| **低** | **#4959/#4958**: 历史权限模型问题（全局自动批准、每工具权限）。 | CLOSED | 功能已由PR #5063、#5062实现并关闭。 |

### 6. 功能请求与路线图信号
- **明确的功能需求**：
  - **[#5124](https://github.com/nearai/ironclaw/issues/5124)**: 支持Telegram作为Reborn通道。
  - **[#5122](https://github.com/nearai/ironclaw/issues/5122)**: 为Reborn自动化添加删除支持。
  - **[#5121](https://github.com/nearai/ironclaw/issues/5121)**: 为Reborn自动化添加暂停/恢复支持。
  - *以上三个自动化相关Issue均有对应的PR [#5133](https://github.com/nearai/ironclaw/pull/5133)、[#5131](https://github.com/nearai/ironclaw/pull/5131) 正在开发中，表明是近期高优先级功能。*
- **路线图信号**：
  - **AI自进化**：PR [#5061](https://github.com/nearai/ironclaw/pull/5061) 引入Hermes风格的技能提取，是迈向“自我改进”的关键一步。
  - **OpenAI兼容**：PR [#5094](https://github.com/nearai/ironclaw/pull/5094) 添加 `/v1/models` 接口，为外部工具生态奠定基础。
  - **架构现代化**：PR [#5137](https://github.com/nearai/ironclaw/pull/5137) 启动的大规模 crate 分解，旨在改善可维护性与编译时间。

### 7. 用户反馈摘要
从Dogfooding报告（#4879, #5119）和性能Issue（#5125系列）中提炼的痛点：
- **首次用户体验差**：本地启动、配置、模型提供商设置流程存在摩擦，影响开发者采纳。
- **性能感知慢**：用户明确反馈“slowness”，性能优化（#5127, #5128）成为本周重点跟踪任务。
- **权限与审批混乱**：历史问题（#4959, #4958, #5120）表明用户对“自动批准”、“每工具权限”的语义和UI有强烈困惑，新模型（PR #5063, #5062）需配套清晰的UI/文档。
- **状态反馈不足**：如MCP的“SETUP NEEDED”误报（#4925），说明系统状态向用户传达不准确。

### 8. 待处理积压
以下Issue创建时间较长，反映持续性问题或需要长期关注：
- **[#4108](https://github.com/nearai/ironclaw/issues/4108)** (创建于2026-05-27): Nightly E2E失败。作为质量门禁，其长期未解决可能掩盖其他集成问题，需定期复查根本原因。
- **[#4879](https://github.com/nearai/ironclaw/issues/4879)** (创建于2026-06-15): 第一轮Dogfooding报告。虽然本周已开启新报告（#5119），但旧报告中的子问题可能仍有未关闭项，建议关联跟踪。

---
**报告生成说明**：本报告基于GitHub公开数据自动生成，旨在提供客观的项目健康度快照。所有链接均指向对应GitHub页面。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-23)

## 1. 今日速览
过去24小时，项目整体呈现**开发活跃但用户反馈积压**的状态。PR合并活动较为密集，共6个PR被合并，涉及核心功能增强（计划模式）、OpenClaw插件系统改进及多项稳定性修复，显示项目在技术债务偿还和功能迭代上持续推进。然而，Issues方面仅有5条旧Issue更新（均标记为 `[stale]`），无新Issue创建或关闭，且所有活跃Issue均为4月初提出的、长期未解决的UI/统计功能Bug，表明**用户反馈响应周期较长，用户体验层面存在明显短板**，项目健康度需关注社区积压问题的处理效率。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展 (已合并/关闭的重要 PR)
今日合并的6个PR主要聚焦于**功能增强、基础设施完善与测试对齐**，推动项目向更稳定、可扩展的方向发展：
- **功能增强**：`#2183` (feat(cowork): add plan mode workflow) 为协作功能引入了“计划模式”，允许用户生成、审查和执行独立计划块，提升了工作流的可控性。
- **OpenClaw 生态完善**：`#2186` (fix(openclaw): compile NIM plugin runtime entry) 和 `#2182` (fix(openclaw): support upgraded im plugin installs) 优化了OpenClaw的插件安装与运行时构建流程，特别是升级了钉钉、飞书、企业微信等IM插件，并统一了安装路径处理。
- **测试与元数据对齐**：`#2187` (test: align OpenClaw metadata expectations) 更新了针对推理能力模型元数据和历史消息元数据的测试预期，确保核心数据模型的一致性。
- **文档更新**：`#2184` (docs(agents): update repository guidance) 更新了`AGENTS.md`，反映了当前Cowork/OpenClaw架构、代码质量门禁和验证要求，对贡献者更具指导意义。

## 4. 社区热点
过去24小时无高讨论度议题。**最受关注的仍是长期悬置的概览页（`#/profile`）系列Bug**（Issues `#1411`, `#1414`, `#1416`），尽管评论数不多（各1条），但均涉及核心用户界面的基础功能（数据统计、交互控件、国际化布局），集中反映了用户对**数据可信度与界面可用性**的强烈诉求。这些Issue自4月创建后持续被标记为`[stale]`，可能已引发部分用户负面体验。

## 5. Bug 与稳定性
今日报告的5个Issue均为**前端UI/UX及数据统计类Bug**，均位于核心的“概览页”，严重程度评估为**中高**（影响核心数据展示与基本操作）：
1.  **`#1414`** (总会话数始终为0) - **高**：核心统计数据失效，严重损害用户对用量数据的信任。*暂无对应修复PR*。
2.  **`#1411`** (时间维度筛选器无响应) - **高**：关键交互控件失效，用户无法切换统计周期。*暂无对应修复PR*。
3.  **`#1416`** (英文界面布局错乱) - **中**：国际化支持不完善，影响英文用户体验。*暂无对应修复PR*。
4.  **`#1413`** (添加多技能时页面不友好) - **中**：特定操作场景下的UI展示问题。*暂无对应修复PR*。
5.  **`#1409`** (定时任务跨天未生成历史) - **中**：涉及任务可靠性与历史记录完整性。*暂无对应修复PR*。
**注**：今日合并的PR中未包含针对上述概览页问题的直接修复。

## 6. 功能请求与路线图信号
用户Issues中**未提出明确的新功能请求**，均为现有功能的问题反馈。从合并的PR `#2183` (计划模式) 可看出，**工作流规划与结构化输出**是近期内部开发的重点方向。待合并PR中的 `#1407` (OpenClaw Token Proxy请求体限制) 和 `#1410` (SQLite写入性能) 虽属修复，但体现了对**安全边界与性能优化**的持续投入，这些改进将为未来承载更复杂功能奠定基础。

## 7. 用户反馈摘要
从Issues描述可提炼出以下核心痛点：
- **数据可信度危机**：总会话数统计为0与API调用数、积分消耗并存，导致用户对后台数据统计逻辑产生根本性质疑。
- **基础交互失效**：时间筛选器“可点击却无响应”的设计缺陷，破坏了用户控制数据视图的基本预期。
- **国际化不彻底**：英文界面下关键卡片布局错乱，表明UI未充分考虑文本长度自适应，影响国际化用户。
- **特定场景体验差**：技能标签过多时布局混乱，以及定时任务在边界条件（跨天）下的可靠性问题，暴露了边缘场景测试不足。

## 8. 待处理积压
**需紧急关注的长期积压**：
- **高优先级 stale Issues**：5个创建于**2026-04-03**的概览页Bug（`#1409`, `#1411`, `#1413`, `#1414`, `#1416`）至今已近3个月未关闭，且昨日仍有更新，是社区最活跃的负面反馈源，严重损害用户体验和项目声誉。
- **待合并的关键PR**：8个待合并PR中，`#1407` (安全：请求体大小限制) 和 `#1410` (性能：SQLite批量写入) 涉及**安全与性能基线**，`#1420` (并发安全：cron重入) 涉及**系统稳定性**，建议维护者优先评估合并。

---
**报告生成说明**：本报告基于 LobsterAI 仓库 `2026-06-22` 至 `2026-06-23` 的公开数据。所有Issue与PR链接均指向GitHub对应页面。项目当前处于**功能开发积极但用户反馈响应滞后**的状态，建议平衡新功能开发与核心用户体验问题的修复。

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

# CoPaw 项目动态日报 (2026-06-23)

## 1. 今日速览
过去24小时项目活跃度极高，共处理21条Issues和50条PRs，显示社区参与度旺盛。核心问题集中在**稳定性修复**（如进程冻结、消息队列串台）与**移动端体验优化**（大量移动端适配PR）。同时，用户对**功能扩展**（知识库、智能体解耦）和**第三方集成**（OpenClaw配置导入、自定义提供商支持）的诉求强烈。尽管无新版本发布，但开发节奏紧凑，需优先关注高严重性Bug以确保核心功能可靠。

## 2. 版本发布
- **无新版本发布**。最新稳定版为 v1.1.12.post1（截至2026-06-22），近期更新主要聚焦于Bug修复与UI改进。

## 3. 项目进展
今日合并/关闭的重要PR（基于列表中的CLOSED状态及高影响力PR）：
- **安全加固**：  
  - `#5028` [CLOSED] 修复密钥链主密钥隔离问题，防止多安装实例间密钥冲突。  
  - `#5097` [CLOSED] 修正安全设置页面Shield图标垂直居中问题。  
- **体验优化**：  
  - `#5027` [CLOSED] 阻止后端预热会话污染控制台，并添加会话恢复功能。  
- **新功能开发（OPEN，但代表重要方向）**：  
  - `#5321` [OPEN] 引入“滚动”上下文管理策略，通过SQLite持久化历史并支持回忆REPL，作为压缩的替代方案。  
  - `#5325` [OPEN] 为每日记忆搜索添加时效性排名，基于时间衰减提升记忆相关性。  
  - `#5297` [OPEN] 实现模型批量测试与删除功能，提升提供商管理效率。  
  - `#5399` [OPEN] 支持提供商内自定义模型排序（拖拽或按钮调整）。  
- **移动端适配（批量推进）**：  
  由贡献者@yaozy2020主导，连续提交多个PR（`#5385`, `#5384`, `#5355`, `#5362`, `#5364`, `#5369`, `#5381`, `#5382`），为环境变量、工作空间、模型选择器、定时任务、会话、频道、MCP、ACP等页面完成移动端响应式布局，显著提升移动设备可用性。

**整体推进度**：项目正同时进行**稳定性修复**、**移动端覆盖**和**功能增强**三线工作。移动端适配接近完成，核心功能扩展（如上下文管理、记忆优化）已进入实现阶段，但部分基础Bug仍需优先解决。

## 4. 社区热点
- **最活跃Issue**：  
  - `#5218` [OPEN] 子Agent触发上下文压缩时进程冻结（17条评论）。用户报告严重稳定性问题，涉及多轮对话中上下文压缩导致应用无响应，需手动重启。讨论聚焦于复现步骤与临时规避方案。  
  - `#5262` [OPEN] 升级后禁用内置技能重置（9条评论）。用户抱怨每次升级后需重新禁用不需要的技能（如docx/xlsx），期望配置持久化。该问题已多次出现（关联#4807），反映配置管理缺陷。  
- **高需求功能请求**：  
  - `#2969` [OPEN] 增加个人知识库功能（5条评论，2👍）。用户希望将知识库与任务执行结合，增强Copaw能力，自4月5日提出后持续获得关注。  
- **关键PR讨论**：  
  - `#5357` [OPEN] 修复嵌入式模式会话切换卡死（对应Issue #5354）。PR已提交，但仍在审核中，社区关注其能否彻底解决切换问题。

## 5. Bug 与稳定性（按严重程度排序）
| 严重程度 | Issue | 问题摘要 | 状态 | 关联PR |
|----------|-------|----------|------|--------|
| **高** | `#5218` | 上下文压缩导致进程冻结，应用完全无响应。 | OPEN | 无 |
| | `#5379` | Python安装后启动报Internal Server Error（日志指向`get_remote_addr`）。 | OPEN | 无 |
| | `#5333` | 提交指令后Agent卡住，但文本框仍可提交（非

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报 (2026-06-23)**  
**报告生成时间：** 2026-06-23  
**数据周期：** 过去24小时 (UTC)  

---

### 1. 今日速览  
项目今日处于**维护与发布驱动**状态，社区互动（Issues/PRs）无新增，但核心团队完成了 **v1.8.40 版本发布**。该版本聚焦于工作流稳定性、国际化及计费模块优化，未引入破坏性变更。整体项目健康度**稳定**，开发节奏由版本发布主导，社区活跃度暂处低位。

---

### 2. 版本发布  
**新版本：** [v1.8.40: RivonClaw v1.8.40](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.40)  
**更新摘要：**  
- **稳定性增强：** 巩固了联盟管理、捆绑工作项、提案更新及时序增量处理的工作流。  
- **功能扩展：** 新增全局云配额横幅、回填面板国际化键，优化计费/商店分组界面。  
- **渠道健壮性：** 强化微信渠道异常状态处理及客服集成逻辑。  
**破坏性变更：** 无明确提及。  
**迁移注意事项：** 建议用户关注计费与商店分组界面的交互变化，并检查微信渠道配置以利用新的异常处理机制。  

---

### 3. 项目进展  
- **代码合并：** 今日无 PR 合并或关闭记录。  
- **版本推进：** v1.8.40 的发布标志着项目在**工作流稳定性**与**多语言支持**上的重要迭代，整体向前迈进一步。  

---

### 4. 社区热点  
- **今日无新增或活跃的 Issues/PRs**，无讨论热点。  
- **历史观察：** 近期社区互动持续偏低，建议维护者主动发起讨论或收集反馈以提升参与度。  

---

### 5. Bug 与稳定性  
- **今日报告：** 无新 Bug、崩溃或回归问题提交。  
- **版本关联：** v1.8.40 的“稳定性增强”内容可能已修复部分历史问题，但需用户反馈验证。  

---

### 6. 功能请求与路线图信号  
- **今日无新功能请求**。  
- **版本线索：** v1.8.40 中“回填面板国际化”与“计费分组优化”暗示下一周期可能继续深化**国际化**与**商业管理**体验。  

---

### 7. 用户反馈摘要  
- **今日无 Issues 评论**，无法提炼新反馈。  
- **历史痛点参考：** 过往 Issues 常涉及工作流配置复杂度、微信集成稳定性，v1.8.40 已针对性优化后者。  

---

### 8. 待处理积压  
- **长期未响应 Issue/PR：** 无今日新增，但建议维护者定期审查历史开放 Issues（尤其是功能请求类），避免需求积压。  
- **行动建议：** 可对超过30天未响应的核心功能请求进行状态标注（如“计划中/待评估”），以提升透明度。  

---

**项目健康度评估：** 🟢 **稳定**  
- **优势：** 版本发布节奏规律，聚焦核心工作流与稳定性。  
- **风险：** 社区活跃度持续低迷，可能影响问题发现与需求多样性。  
- **建议：** 在版本说明中增加“用户贡献致谢”板块，并主动在 Discussions 区发起功能投票，以激励社区参与。  

> 注：本报告基于 GitHub 公开数据生成，链接指向 EasyClaw 仓库（github.com/gaoyangz77/easyclaw）。

</details>

---
*本日报由 [Big Model Radar](https://github.com/zx0828/big_model_radar) 自动生成。*