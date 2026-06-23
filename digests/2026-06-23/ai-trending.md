# AI 开源趋势日报 2026-06-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-23 00:36 UTC

---

## AI 开源趋势日报 (2026-06-23)

### 第一步：AI相关性筛选
已从 **Trending 榜单** 中过滤掉非 AI 项目（如 `penpot/penpot` 设计工具、`Stirling-Tools/Stirling-PDF` PDF 编辑器），仅保留明确以 AI 为核心或为 AI 工作流提供关键支撑的项目。**主题搜索** 结果已按 `topic:ai-agent`, `topic:ml`, `topic:llm`, `topic:rag`, `topic:vector-db`, `topic:llm-model` 等标签预筛选，均为 AI 相关项目。

### 第二步：项目分类
以下为筛选后项目的核心分类（按主要功能归类）：

| 类别 | 项目示例 (来自 Trending & 主题搜索) |
| :--- | :--- |
| 🔧 **AI 基础工具** | `vllm-project/vllm`, `ollama/ollama`, `langchain-ai/langchain`, `firecrawl/firecrawl`, `DeusData/codebase-memory-mcp` |
| 🤖 **AI 智能体/工作流** | `bytedance/deer-flow`, `NousResearch/hermes-agent`, `zhayujie/CowAgent`, `OpenHands/OpenHands`, `mattpocock/skills` |
| 📦 **AI 应用** | `calesthio/OpenMontage`, `palmier-io/palmier-pro`, `jamiepine/voicebox`, `ZhuLinsen/daily_stock_analysis`, `heygen-com/hyperframes` |
| 🧠 **大模型/训练** | `open-compass/opencompass`, `Eigenwise/atomic-agents`, `galilai-group/stable-pretraining` |
| 🔍 **RAG/知识库** | `infiniflow/ragflow`, `mem0ai/mem0`, `run-llama/llama_index`, `topoteretes/cognee`, `PaddlePaddle/PaddleOCR` |

---

### 第三步：输出报告

#### 1. 今日速览
今日 GitHub AI 开源社区呈现 **“智能体生态大爆发”** 与 **“垂直场景深度整合”** 两大主线。Trending 榜单被多个 **AI 智能体框架** 和 **AI 原生应用** 霸榜，单日新增 stars 动辄数千，反映开发者对“可执行、多工具、长周期”的 Agent 需求强烈。同时，**视频生成、代码智能体、金融分析** 等垂直领域出现重量级新项目，标志 AI 正从通用对话快速渗透至专业生产流程。**MCP（Model Context Protocol）** 相关工具在多个项目中成为标配，显示开放协议正成为 Agent 互联的基础设施。

#### 2. 各维度热门项目

##### 🔧 AI 基础工具
| 项目 | Stars 数据 | 说明 |
| :--- | :--- | :--- |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐ 83,581 | 高性能 LLM 推理引擎，持续优化以支撑大规模 Agent 服务的低延迟需求。 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐ 174,746 | 本地运行大模型的标杆工具，今日热度反映社区对私有化、低成本部署的持续关注。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐ 139,904 | 老牌 Agent 编排框架，生态庞大，是构建复杂工作流的基础选择。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐ 137,265 (+615 today) | 专为 AI 设计的网页抓取与交互 API，解决 Agent 获取实时网络信息的核心痛点。 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | ⭐ 0 (+1,185 today) | **今日新星**。高性能代码知识图谱 MCP 服务器，将代码库索引为持久化知识，极大降低代码智能体的上下文成本。 |

##### 🤖 AI 智能体/工作流
| 项目 | Stars 数据 | 说明 |
| :--- | :--- | :--- |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐ 73,241 (+738 today) | **字节跳动开源 SuperAgent 框架**。支持长周期任务（分钟到小时级），集成沙箱、记忆、工具链，代表工业级 Agent 设计方向。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐ 199,952 | 高星老牌 Agent 项目，强调“随用户成长”，生态成熟，是研究 Agent 架构的典范。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐ 45,557 | 轻量级、可扩展的超级 AI 助手与 Agent 框架，支持多模型多通道，易于部署。 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐ 78,028 | 专注于“AI 驱动开发”的 Agent，能自主执行编程任务，与 IDE 深度集成。 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | ⭐ 0 (+2,051 today) | **今日爆款**。来自知名开发者的 Claude Code 技能集，提供 23 个开箱即用的“角色化”工具（CEO、设计师等），体现“技能库”模式流行。 |
| [garrytan/gstack](https://github.com/garrytan/gstack) | ⭐ 0 (+573 today) | 另一位知名创业者的 Claude Code 完整配置，强调“opinionated tools”，反映顶级开发者工作流的开源化趋势。 |

##### 📦 AI 应用
| 项目 | Stars 数据 | 说明 |
| :--- | :--- | :--- |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | ⭐ 0 (+2,938 today) | **今日榜首**。世界首个开源“智能体化”视频制作系统，将 AI 编码助手变为视频工作室，12 条管道、52 个工具，重新定义视频生产流程。 |
| [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | ⭐ 0 (+2,463 today) | 专为 AI 设计的 macOS 视频编辑器，可能深度集成 AI 辅助剪辑、生成功能。 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | ⭐ 0 (+529 today) | 开源 AI 语音工作室，支持克隆、口述、创作，是音频生成领域的垂直应用。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐ 45,802 (+1,557 today) | LLM 驱动的多市场股票分析系统，整合行情、新闻、看板与自动推送，展示 AI 在金融分析场景的落地。 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | ⭐ 0 (+395 today) | “写 HTML，渲染视频”，专为 Agent 设计的视频生成工具，降低视频内容创作门槛。 |

##### 🧠 大模型/训练
| 项目 | Stars 数据 | 说明 |
| :--- | :--- | :--- |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐ 7,112 | 来自上海 AI Lab 的 LLM 评测平台，支持百种模型和数据集，是模型能力评估的基础设施。 |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | ⭐ 6,000 | “原子化”构建 AI Agent 的框架，强调模块化和可组合性，代表 Agent 开发的新范式。 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | ⭐ 266 | 专注于稳定、可扩展的基础模型预训练库，关注训练过程的可靠性。 |

##### 🔍 RAG/知识库
| 项目 | Stars 数据 | 说明 |
| :--- | :--- | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐ 83,370 | 领先的开源 RAG 引擎，融合 Agent 能力，提供 superior 的上下文层，是构建知识库应用的热门选择。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐ 59,149 | 通用 AI Agent 记忆层，为 Agent 提供跨会话的持久化长时记忆，是解决 Agent “遗忘”问题的关键组件。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐ 19,328 | 开源 AI 记忆平台，基于知识图谱为 Agent 提供结构化长期记忆。 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐ 83,320 | 百度的 OCR 工具包，支持 100+ 语言，是连接图像/PDF 文档与 LLM 的关键桥梁。 |

#### 3. 趋势信号分析
1.  **智能体（Agent）生态全面爆发**：今日 Trending 榜单前五名中占据三席（`OpenMontage`, `deer-flow`, `mattpocock/skills`），且新增 stars 均超 2000。这不再是概念验证，而是 **“可生产、多工具、长任务”** 的完整系统。字节、HeyGen 等公司级项目入场，标志 Agent 技术进入工业化阶段。
2.  **“技能库”与“角色化配置”成为新热点**：`mattpocock/skills` 和 `garrytan/gstack` 的爆火表明，社区不再满足于通用 Agent 框架，更渴望 **“开箱即用的专家技能集”** 和 **“顶尖开发者工作流配置”**。这降低了 Agent 应用门槛，形成了“框架 + 技能库”的新生态模式。
3.  **MCP 协议快速渗透**：`codebase-memory-mcp` 等项目明确基于 MCP，`OpenMontage` 等也强调与各类工具集成。**MCP 正迅速成为 Agent 与外部工具/数据交互的“事实标准”**，类似早期的 OpenAI Function Calling。
4.  **垂直场景深度整合**：视频（`OpenMontage`, `hyperframes`）、金融（`daily_stock_analysis`）、代码（`codebase-memory-mcp`）等领域的 AI 原生应用集中出现，说明 AI 正在从“通用助手”向 **“领域专家”** 演进，与具体行业工作流深度绑定。
5.  **与行业事件关联**：Claude Code 生态的持续火热（多个项目围绕其构建）直接推动了今日智能体工具的热潮。同时，视频生成领域竞争加剧（Sora 等），催生了 `OpenMontage` 这类将生成式 AI 与专业制作流程结合的开源项目。

#### 4. 社区关注热点
*   **🔥 `calesthio/OpenMontage`**：重新定义视频生产，将 AI 智能体引入专业视频制作全流程，是 **“AI 原生应用”** 的标杆案例，值得所有内容创作工具开发者关注。
*   **🧠 `bytedance/deer-flow`**：字节跳动开源的 **长周期 SuperAgent 框架**，其“研究、编码、创造”的设计理念和沙箱、记忆等模块化架构，为构建复杂自主系统提供了重要参考。
*   **🔌 `DeusData/codebase-memory-mcp`**：**代码智能体的关键基础设施**。通过知识图谱将代码库转化为低 Token 消耗的持久上下文，直接解决了当前代码 Agent 的核心瓶颈，技术路径新颖。
*   **🎯 `mattpocock/skills` & `garrytan/gstack`**：代表了 **“顶级开发者工作流开源化”** 的新趋势。这类“角色化技能集”配置可能成为未来 Agent 分发和复用的重要形式，类似“Agent 版的 Awesome List”。
*   **📊 `infiniflow/ragflow` & `mem0ai/mem0`**：分别代表了 **RAG 引擎** 和 **Agent 记忆层** 两大关键组件的成熟方案。随着 Agent 复杂度的提升，高质量的知识检索与长期记忆已成为必选项，二者是构建企业级 Agent 的基石。

---
*本日报由 [Big Model Radar](https://github.com/zx0828/big_model_radar) 自动生成。*