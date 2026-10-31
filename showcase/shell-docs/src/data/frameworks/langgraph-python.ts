// Hand-maintained landing-page content for this framework's `/<slug>` route,
// read through `frameworkOverviews`. An earlier header credited
// `scripts/extract-framework-overviews.ts`; no such script exists in this
// repository and none ever has, so edit this file directly.
//
// This record serves three URLs — /langgraph-python, /langgraph-typescript and
// /langgraph-fastapi — so the copy stays language-neutral and the snippet below
// shows the shape all three share. Links carry the `/langgraph/` prefix and are
// rewritten to the URL-active variant by `FrameworkOverview`.
import type { FrameworkOverviewData } from "./types";

const data: FrameworkOverviewData = {
  slug: "langgraph-python",
  // Was "LangChain", which nothing else in the repository agrees with: the
  // registry names these integrations "LangGraph Python" and "LangGraph
  // (TypeScript)", the icon key is `langgraph`, the docs folder is
  // `integrations/langgraph/`, and every page inside it says LangGraph.
  frameworkName: "LangGraph",
  iconKey: "langgraph",
  header: "把你的 LangGraph 智能体带到用户面前",
  subheader:
    "LangGraph 负责运行你的图，CopilotKit 则为它提供一个用户看得见、可中断、也能操控的界面。",
  bannerVideo:
    "https://cdn.copilotkit.ai/docs/copilotkit/videos/coagents/overview.mp4",
  guideLink: "/langgraph/quickstart",
  initCommand: "npx copilotkit@latest init",
  featuresLink:
    "https://feature-viewer.copilotkit.ai/langgraph/feature/agentic_chat",

  lede: "LangGraph 为你提供图本身：节点、边、一个状态对象，以及能在节点执行中途让运行停下来的中断。它没有提供的，是界面——一个让对话发生的地方，一种在运行过程中展示运行状态的方式，一个让人适时介入的时机。下方的每项能力，都建立在你的图已经在做的事情之上。",
  supportedFeatures: [
    {
      title: "生成式 UI",
      iconKey: "paintbrush",
      description:
        "你的节点在运行时返回状态更新和工具调用。CopilotKit 默认将两者流式传输到浏览器，并渲染为 React 组件，让用户在图工作的同时亲眼看着它们更新。",
      documentationLink: "/langgraph/generative-ui",
    },
    {
      title: "人机协同（human-in-the-loop）",
      iconKey: "user",
      description:
        "节点调用 interrupt() 并在执行中途停止。CopilotKit 捕获该事件，渲染出你自己的 UI 供用户做决定，然后带着答案恢复图的执行。",
      documentationLink: "/langgraph/human-in-the-loop/interrupt-flow",
    },
    {
      title: "共享状态",
      iconKey: "repeat",
      description:
        "你的图让同一个状态对象在节点之间传递。CopilotKit 把它同步到你的应用、再同步回去，让用户的编辑和节点的写入落在同一处。",
      documentationLink: "/langgraph/shared-state",
    },
  ],
  capabilitiesFootnote: {
    text: "对话界面、无头（headless）UI、前端工具与子智能体流程同样适用于 LangGraph。",
    linkLabel: "以及更多",
    href: "/langgraph/build-with-agents",
  },

  connect: {
    intro:
      "你的图留在如今运行的地方：LangGraph Platform、LangSmith，或你自己的 FastAPI 服务。CopilotKit 通过 AG-UI 访问它，图内部无需任何改动。",
    filename: "app/api/copilotkit/[[...slug]]/route.ts",
    language: "ts",
    code: `import { CopilotRuntime, createCopilotRuntimeHandler } from "@copilotkit/runtime/v2";
import { LangGraphAgent } from "@copilotkit/runtime/langgraph";

const runtime = new CopilotRuntime({
  agents: {
    sample_agent: new LangGraphAgent({
      deploymentUrl: process.env.LANGGRAPH_DEPLOYMENT_URL!,
      graphId: "sample_agent",
      langsmithApiKey: process.env.LANGSMITH_API_KEY!,
    }),
  },
});

const handler = createCopilotRuntimeHandler({
  runtime,
  basePath: "/api/copilotkit",
});

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const DELETE = handler;
`,
    guideLink: "/langgraph/quickstart",
  },

  showcase: {
    integration: "langgraph-python",
    // Each variant has its own running cell, so /langgraph-typescript embeds
    // the TypeScript one rather than the Python one it shares this record with.
    integrationBySlug: {
      "langgraph-python": "langgraph-python",
      "langgraph-typescript": "langgraph-typescript",
      "langgraph-fastapi": "langgraph-fastapi",
    },
    intro:
      "LangGraph 与 CopilotKit 在 React 前端中协同运行。下面的每个演示都是同一个集成，只是开启了不同的能力。",
    // Titles are the showcase's own labels for these cells, so a reader who
    // clicks through finds the same name on the page they land on.
    demos: [
      { slug: "agentic-chat", title: "预构建：CopilotChat" },
      { slug: "hitl-in-chat", title: "人机协同：对话中" },
      { slug: "shared-state-read-write", title: "共享状态：读 + 写" },
      { slug: "gen-ui-agent", title: "生成式 UI：智能体状态" },
    ],
  },

  // Legacy fields below. `architectureImage`, `liveDemos`, `tutorialLink` and
  // `cta` are only read by the pre-capability layout, which this record no
  // longer uses; they stay until every partner page has moved over and the old
  // branch comes out of the template in one piece.
  architectureImage:
    "https://cdn.copilotkit.ai/docs/copilotkit/images/coagents/coagents-highlevel-overview.png",
  liveDemos: [],
  tutorialLink: "/langgraph/tutorials/ai-travel-app",
  cta: {
    variant: "card",
    title: "把你的 LangGraph 智能体推向生产环境",
    body: "借助 CopilotKit Intelligence 添加持久化线程、可观测性与检查器。",
    ctaLabel: "创建免费账户",
    surface: "docs_langgraph_overview",
  },
  hasAfterFeaturesMdx: true,
};

export default data;
