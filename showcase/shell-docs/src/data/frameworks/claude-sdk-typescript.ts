// Hand-maintained landing-page content for this framework's `/<slug>` route,
// read through `frameworkOverviews`. An earlier header credited
// `scripts/extract-framework-overviews.ts`; no such script exists in this
// repository and none ever has, so edit this file directly.
import type { FrameworkOverviewData } from "./types";

const data: FrameworkOverviewData = {
  slug: "claude-sdk-typescript",
  frameworkName: "Claude Agent SDK (TypeScript)",
  iconKey: "anthropic",
  header: "把你的 Claude 智能体带到用户面前",
  subheader:
    "Claude Agent SDK 负责运行你的智能体循环，CopilotKit 则为它提供一个用户看得见、可中断、也能操控的界面。",
  guideLink: "/claude-sdk-typescript/quickstart",
  initCommand: "npx copilotkit@latest init --framework claude-sdk-typescript",
  featuresLink:
    "https://feature-viewer.copilotkit.ai/claude-sdk-typescript/feature/agentic_chat",

  lede: "Claude Agent SDK 为你提供智能体循环：工具、上下文处理，以及一个保留历史记录的会话。它没有提供的，是界面——一个让对话发生的地方，一种在运行过程中展示运行状态的方式，一个让人适时介入的时机。下方的每项能力，都建立在你的智能体已经在做的事情之上。",
  supportedFeatures: [
    {
      title: "生成式 UI",
      iconKey: "paintbrush",
      description:
        "你的智能体在工作中调用工具并汇报进度。CopilotKit 将这些调用流式传输到浏览器，并把每一次调用渲染为一个 React 组件，而不是让用户对着加载转圈干等。",
      documentationLink: "/claude-sdk-typescript/generative-ui",
    },
    {
      title: "人机协同（human-in-the-loop）",
      iconKey: "user",
      description:
        "智能体调用一个审批工具并等待其结果。用户做出决定后，CopilotKit 会从浏览器侧解析该工具，同一个 Claude 运行随即带着答案继续执行。",
      documentationLink: "/claude-sdk-typescript/human-in-the-loop",
    },
    {
      title: "共享状态",
      iconKey: "repeat",
      description:
        "你的会话在服务器端跨轮次携带状态。CopilotKit 把它同步到你的应用、再同步回去，让用户的编辑和智能体的写入落在同一处。",
      documentationLink: "/claude-sdk-typescript/shared-state",
    },
  ],
  capabilitiesFootnote: {
    text: "对话界面、无头（headless）UI、前端工具与多智能体流程同样适用于 Claude Agent SDK。",
    linkLabel: "以及更多",
    href: "/claude-sdk-typescript/build-with-agents",
  },

  connect: {
    intro:
      "你的智能体继续作为独立服务运行，前面加上来自 @ag-ui/claude-agent-sdk 的 AG-UI 适配器。CopilotKit 通过 HTTP 访问该服务，智能体内部无需任何改动。",
    filename: "app/api/copilotkit/route.ts",
    language: "ts",
    code: `import {
  CopilotRuntime,
  createCopilotRuntimeHandler,
} from "@copilotkit/runtime/v2";
import { HttpAgent } from "@ag-ui/client";

const runtime = new CopilotRuntime({
  agents: {
    my_agent: new HttpAgent({ url: process.env.AGENT_URL! }),
  },
});

const handler = createCopilotRuntimeHandler({
  runtime,
  basePath: "/api/copilotkit",
});

export const GET = handler;
export const POST = handler;`,
    guideLink: "/claude-sdk-typescript/quickstart",
    // Not the generic CLI command: this record's init selects the framework
    // template explicitly, and nothing else on the page carries it.
    initCommand: "npx copilotkit@latest init --framework claude-sdk-typescript",
  },

  showcase: {
    integration: "claude-sdk-typescript",
    intro:
      "Claude Agent SDK 与 CopilotKit 在 React 前端中协同运行。下面的每个演示都是同一个集成，只是开启了不同的能力。",
    demos: [
      { slug: "agentic-chat", title: "预构建：CopilotChat" },
      { slug: "hitl-in-chat", title: "人机协同：对话中" },
      { slug: "shared-state-read-write", title: "共享状态：读 + 写" },
      { slug: "gen-ui-agent", title: "生成式 UI：智能体状态" },
    ],
  },

  liveDemos: [],
};

export default data;
