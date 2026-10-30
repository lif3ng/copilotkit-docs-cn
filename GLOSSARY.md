# 术语表（GLOSSARY）

> 并行子代理必须注入本表；终检时按本表 grep 全站抽查一致性。译法如有分歧，以终检多数派定稿并回写此表。

## 不译名单（产品/工具/协议/库名）

CopilotKit、Copilot Cloud、Copilot Runtime、Copilot Studio、AG-UI、A2A、MCP、A2UI、
LangGraph、LlamaIndex、CrewAI、AG2、Agno、Mastra、Pydantic AI、Strands、Spring AI、
Langroid、Claude Agent SDK、Google ADK、Microsoft Agent Framework、DeepAgents、
Next.js、React、Vue、Angular、React Native、TypeScript、Python、FastAPI、Node、npm、
npx、pnpm、git、Docker、Vercel、Railway、Clerk、PostHog、Slack、Microsoft Teams、
Vercel AI SDK、OpenAI、Anthropic、Gemini、Groq、Ollama、Zoom、Webex、Playwright、
Vitest、ESLint、Prettier、Tailwind CSS、shadcn/ui、Radix UI、Fumadocs、MDX、JSON、YAML、
Zod、tRPC、GraphQL、gRPC、WebSocket、SSE、JSX、TSX、SDK、API、UI、CLI、CI/CD、
CoAgent、CoState、CoTool、useCoAgent、useCopilotChat、useCopilotAction、
BizChat（如出现）、GitHub Codespaces、Cursor、Windsurf、VS Code

## 概念术语（英文 → 中文；首现附原词，其后可用中文）

| 英文 | 中文 | 备注 |
|---|---|---|
| agent | 智能体 | 概念义；作为 SDK 类/实体专名（如 CoAgent、remote agent 模式名）不译 |
| generative UI | 生成式 UI | |
| human-in-the-loop（HITL） | 人机协同 | 首现写「人机协同（human-in-the-loop）」 |
| shared state | 共享状态 | |
| frontend tools / frontend actions | 前端工具 / 前端操作 | |
| tool calling | 工具调用 | |
| agent state | 智能体状态 | |
| intermediate state | 中间状态 | 流式渲染场景 |
| streaming | 流式（传输） | 「streaming responses」→「流式响应」 |
| headless | 无头 | 首现「无头（headless）」；「headless mode」→「无头模式」 |
| threads | 线程 | 会话线程语境 |
| interrupts | 中断 | HITL 中断流 |
| middleware | 中间件 | Copilot Middleware 专名保留 |
| endpoint | 端点 | |
| runtime | 运行时 | |
| integration | 集成 | |
| quickstart | 快速开始 | |
| cookbook | 示例集 | 栏目名 |
| setup wizard | 配置向导 | |
| channels | 渠道 | Slack/Teams 集成语境 |
| provider | 提供方 | 服务提供方语境；「model provider」→「模型提供方」 |
| slot | 插槽 | UI 自定义语境 |
| prebuilt components | 预构建组件 | |
| sidebar | 侧边栏 | |
| popup | 弹窗 | |
| playground | 演练场 | |
| starter | 起步模板 | starter project → 起步模板项目 |
| boilerplate | 样板代码 | |
| backend | 后端 | |
| frontend | 前端 | |
| deploy / deployment | 部署 | |
| self-hosted | 自托管 | |
| API key | API 密钥 | |
| environment variable | 环境变量 | |
| callback | 回调 | |
| render | 渲染 | |
| feed | 订阅源 | 如无更佳语境 |
| transcript | 会话记录 | |
| persistence | 持久化 | |
| scalability | 可扩展性 | |
| observability | 可观测性 | |
| wrapper | 包装器 | |
| out-of-the-box | 开箱即用 | |
| built-in agent | 内置智能体 | Built-in Agent 作为产品特性名译此 |
| agentic | 智能体化的 | 视语境可简化 |
| chat | 对话/聊天 | UI 组件语境（CopilotChat）常保留「聊天」，体验性文本用「对话」 |
| prompt | 提示 | prompt 文本框语境 |
| suggestion | 建议 | |
| message | 消息 | |
| assistant | 助手 | |
| user | 用户 | |
| authentication | 身份验证 | |
| authorization | 授权 | |
| sign in / sign up | 登录 / 注册 | |
| telemetry | 遥测 | |
| feature | 特性/功能 | 按语境 |
| guide | 指南 | |
| tutorial | 教程 | |
| reference | 参考 | API 参考语境 |
| overview | 概览 | |
| prerequisites | 前置条件 | |
| troubleshooting | 故障排查 | |
| migration / migrate | 迁移 | |
| deprecation | 弃用 | |
| legacy | 旧版 | |

## 排版规则（全站强制）

1. 全角标点：，。：；？！、（）“”——；代码/命令/路径内半角。
2. 中英文/数字之间一个半角空格：「使用 LangGraph 构建」。
3. 引号用 “”（不用「」）；破折号 —— 不带空格。
4. **粗体 CJK 闭合**：句读/括注移出粗体。`**……。**后文` ✗ → `**……**。后文` ✓；`**标题：**正文` ✗ → `**标题**：正文` ✓。
5. 代码块、命令、CLI 子命令、环境变量（`XXX_*`）、配置键、API 方法名、路径、报错原文一律不译；CLI 命令清单的 `#` 注释要译，代码内 `#`/`//` 注释不译。
6. frontmatter 的 title/description 必译；description 保持一句话。
7. 锚点：标题译中文后重算页内 `#锚点` 链接；每文件产出锚点映射 `.anchor-maps/<batch>/<file>.map.md`，行格式 `原英文标题 | 中文标题 | 新锚点`。

## 终检补充批次

（终检发现的译法分歧在此登记定稿）
