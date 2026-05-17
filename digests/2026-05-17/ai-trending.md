# AI 开源趋势日报 2026-05-17

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-17 00:30 UTC

---

# AI 开源趋势日报 (2026-05-17)

## 第一步：AI 相关性筛选
- **Trending 榜单**：过滤掉非 AI 项目 `oven-sh/bun` (JavaScript 运行时)，保留其余 7 个 AI 相关项目。
- **主题搜索**：所有 80 个项目均带有 `llm`、`ai-agent`、`rag`、`vector-db` 等明确 AI 主题标签，全部保留。

---

## 今日速览
今日 AI 开源领域，**智能体框架与 RAG 工具**持续高热，特别是围绕 **Claude Code 的生态工具**爆发式增长。同时，**本地化部署方案**（如 Ollama、Anything-LLM）和**垂直领域智能体**（科学、金融）获得大量关注。新兴方向如**非视觉感知**（WiFi 信号分析）和**代码知识图谱**首次登上 Trending 榜单，显示 AI 正从纯文本向多模态、具身智能与开发范式革新延伸。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
| 项目 | Stars | 说明 |
|------|-------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | 171,545 ⭐ | 一键运行 Kimi-K2.5、DeepSeek、Qwen 等主流模型，本地 LLM 部署的事实标准。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 136,900 ⭐ | 老牌 LLM 应用开发框架，提供统一的 Agent、工具调用与链式编排能力。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 80,204 ⭐ | 高性能 LLM 推理与 Serving 引擎，以 PagedAttention 技术实现高吞吐、低内存占用。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 120,677 ⭐ | 专为 AI Agent 设计的网络爬虫与数据清洗工具，将任意网站转为结构化 LLM 就绪数据。 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 26,292 ⭐ (+1,305 today) | Google Workspace 统一 CLI，内置 AI Agent 技能，可自动化处理邮件、文档、表格等。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
| 项目 | Stars | 说明 |
|------|-------|------|
| [obra/superpowers](https://github.com/obra/superpowers) | 0 ⭐ (+1,305 today) | 今日 Trending 榜首，一套“有能力的”智能体技能框架与软件开发方法论，强调 Agent 的自主性与技能库。 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 184,586 ⭐ | Claude Code 性能优化与技能增强系统，提供 instincts、memory、security 等深度定制能力。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,356 ⭐ | 经典自主智能体项目，目标是让 AI 自主设定目标、分解任务并执行，今日仍保持极高活跃度。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 153,426 ⭐ | “与你共同成长的 Agent”，强调长期记忆与持续学习能力，适配多种后端模型。 |
| [langgenius/dify](https://github.com/langgenius/dify) | 141,605 ⭐ | 生产级 Agentic 工作流开发平台，可视化编排 RAG、工具调用与多 Agent 协作。 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 73,768 ⭐ | AI 驱动的软件开发 Agent，能自主完成代码编写、调试、测试等全流程。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 76,160 ⭐ | 多智能体金融交易框架，整合市场数据、新闻与 LLM 决策，实现自动化量化策略。 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
| 项目 | Stars | 说明 |
|------|-------|------|
| [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) | 0 ⭐ (+317 today) | 开源 AI 视频/图像生成平台，集成 Flux、Midjourney、Kling 等 200+ 模型，支持自托管与无过滤。 |
| [supertone-inc/supertonic](https://github.com/supertone-inc/supertonic) | 0 ⭐ (+749 today) | 超快、端侧、多语言 TTS 引擎，通过 ONNX 原生运行，适合移动与边缘设备。 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 0 ⭐ (+1,549 today) | 个人 AI 超级助手，强调隐私、简洁与强大功能，今日 Trending 高增长。 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 0 ⭐ (+1,010 today) | 创新非视觉感知项目，利用 commodity WiFi 信号实现实时空间智能、生命体征监测与存在检测。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 137,362 ⭐ | 用户友好的 Web UI，支持 Ollama、OpenAI API 等，是本地模型交互的最流行前端之一。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 45,788 ⭐ | AI 生产力工作室，集成智能聊天、自主 Agent 与 300+ 助手，统一访问前沿 LLM。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
| 项目 | Stars | 说明 |
|------|-------|------|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 49,984 ⭐ | 仅用 2 小时从零训练 64M 参数小模型，是学习 LLM 训练全流程的绝佳实践项目。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 6,997 ⭐ | 大模型评测平台，支持 Llama3、Qwen、Claude 等 100+ 数据集，提供标准化基准测试。 |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | 25,450 ⭐ | 基于 LLM 的智能爬虫，能理解页面结构并提取目标数据，是构建高质量训练数据的工具。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 7,299 ⭐ | 用 Rust 构建模块化、可扩展 LLM 应用，为高性能、低延迟场景提供新选择。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 312 ⭐ | 端侧 LLM 推理引擎，通过 X-Bit 量化技术实现高效本地运行，专注隐私与离线场景。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
| 项目 | Stars | 说明 |
|------|-------|------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 80,632 ⭐ | 领先的开源 RAG 引擎，深度融合 Agent 能力，提供深度的文档理解与上下文增强。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 55,878 ⭐ | AI Agent 的通用记忆层，为智能体提供长期、个性化的上下文管理能力。 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | 77,959 ⭐ | 超轻量 OCR 工具包，支持 100+ 语言，是将 PDF/图像转为 LLM 可读文本的关键基础设施。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 76,172 ⭐ | 为 Claude Code 等 Agent 提供跨会话持久化记忆，自动压缩与注入相关上下文。 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 52,859 ⭐ | 可视化拖拽式构建 RAG 与 Agent 流程，大幅降低开发门槛，社区活跃度极高。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,326 ⭐ | 云原生高性能向量数据库，为大规模 AI 应用提供可扩展的向量检索服务。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 60,135 ⭐ | 全功能本地 AI 生产力加速器，集成 RAG、多模型支持与优雅界面，强调隐私与易用。 |

---

## 趋势信号分析
1. **爆发性关注点**：**AI 智能体/工作流**类工具正获得社区爆发性关注。今日 Trending 榜单 7 个 AI 项目中 5 个属于此类（`superpowers`、`scientific-agent-skills`、`Open-Generative-AI`、`supertonic`、`openhuman`），且主题搜索中 `ai-agent` 标签项目 stars 数普遍极高（如 `everything-claude-code` 近 18.5 万）。这反映开发者对“可编程、可组合、能自主执行”的 AI 工具需求达到顶峰。
2. **新兴技术栈/方向**：
    - **非视觉多模态感知**：`ruvnet/RuView` 利用 WiFi 信号进行空间感知与生命体征监测，首次登榜，标志 AI 感知技术向低成本、无摄像头、隐私友好的方向探索。
    - **代码知识图谱**：`colbymchenry/codegraph` 为 Claude Code 预索引代码库，将项目结构、依赖、文档构建为知识图谱，是“AI 编程助手”基础设施的重要演进。
3. **与近期事件关联**：趋势与 **Claude Code 的发布与生态开放** 强相关。大量项目（`everything-claude-code`、`codegraph`、`claude-mem`）直接针对 Claude Code 进行优化、增强或集成，显示其正快速形成类似“iOS 的 AI 开发生态”。同时，**本地化与隐私优先**（Ollama、Anything-LLM、picollm）和**垂直领域深化**（科学 Agent、金融 Agent）是持续主线。

---

## 社区关注热点
- **Claude Code 生态工具链**：围绕 Claude Code 的性能优化、记忆增强、技能扩展工具（如 `everything-claude-code`、`codegraph`）正成为新热点，开发者竞相构建其“护城河”式插件。
- **本地化 RAG 一体化方案**：`Anything-LLM`、`RAGFlow` 等项目将 RAG、多模型支持、UI 深度整合，满足企业及个人对数据隐私与成本控制的需求，增长迅猛。
- **轻量级模型训练与端侧部署**：`minimind`（小模型快速训练）、`picollm`（端侧量化推理）等项目推动“每个人都能训练和运行自己的模型”的愿景，是边缘 AI 的关键方向。
- **多模态感知与具身智能探索**：`RuView`（WiFi 感知）等非传统数据源项目出现，预示 AI 正从数字世界向物理世界交互延伸，为机器人、智能家居提供新思路。
- **金融 AI Agent 垂直深化**：`TradingAgents` 等项目显示 AI Agent 在金融分析、自动化交易等高风险、高价值垂直领域正在快速成熟和落地。

---
*本日报由 [Big Model Radar](https://github.com/zx0828/big_model_radar) 自动生成。*