// Hand-maintained landing-page content for this framework's `/<slug>` route,
// read through `frameworkOverviews`. An earlier header credited
// `scripts/extract-framework-overviews.ts`; no such script exists in this
// repository and none ever has, so edit this file directly.
//
// Links carry the `/adk/` prefix because that is the docs folder this
// framework's pages live in; `FrameworkOverview` rewrites them onto the URL
// slug (`google-adk`).
import type { FrameworkOverviewData } from "./types";

const data: FrameworkOverviewData = {
  slug: "google-adk",
  frameworkName: "ADK",
  iconKey: "adk",
  header: "把你的 ADK 智能体带到用户面前",
  subheader:
    "ADK 负责运行你的智能体，CopilotKit 则为它们提供一个用户看得见、可中断、也能操控的界面。",
  // Was "/adk/quickstart/adk", which the link rewriter turns into
  // /google-adk/quickstart/adk — a 404. The quickstart lives one level up.
  guideLink: "/adk/quickstart",
  initCommand: "npx copilotkit@latest init",
  featuresLink: "https://feature-viewer.copilotkit.ai/adk/feature/agentic_chat",

  lede: "ADK 为你提供智能体本身：工具、会话，以及为它们服务的运行器。它没有提供的，是界面——一个让对话发生的地方，一种在运行过程中展示运行状态的方式，一个让人适时介入的时机。下方的每项能力，都建立在你的智能体已经在做的事情之上。",
  supportedFeatures: [
    {
      title: "生成式 UI",
      iconKey: "paintbrush",
      description:
        "你的智能体在运行过程中调用工具并更新会话状态。CopilotKit 将两者流式传输到浏览器，并渲染为 React 组件，让用户在智能体工作的同时亲眼看着它们更新。",
      documentationLink: "/adk/generative-ui",
    },
    {
      title: "人机协同（human-in-the-loop）",
      iconKey: "user",
      description:
        "AGUIToolset() 让你的智能体能够调用前端工具。CopilotKit 会渲染出那个需要用户做决定的工具，等待用户作答，再把答案作为工具结果交还回去。",
      documentationLink: "/adk/human-in-the-loop",
    },
    {
      title: "共享状态",
      iconKey: "repeat",
      description:
        "ADK 会话在服务器端跨轮次保存状态。CopilotKit 把它同步到你的应用、再同步回去，让用户的编辑和智能体的写入落在同一处。",
      documentationLink: "/adk/shared-state",
    },
  ],
  hasAfterFeaturesMdx: true,
  capabilitiesFootnote: {
    text: "对话界面、无头（headless）UI、前端工具与多智能体流程同样适用于 ADK。",
    linkLabel: "以及更多",
    href: "/adk/build-with-agents",
  },

  connect: {
    intro:
      "你的智能体继续作为独立的 Python 服务运行，前面加上来自 ag_ui_adk 的 AG-UI 桥接器。CopilotKit 通过 HTTP 访问该服务，智能体内部无需任何改动。",
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
    guideLink: "/adk/quickstart",
  },

  showcase: {
    integration: "google-adk",
    intro:
      "ADK 与 CopilotKit 在 React 前端中协同运行。下面的每个演示都是同一个集成，只是开启了不同的能力。",
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
