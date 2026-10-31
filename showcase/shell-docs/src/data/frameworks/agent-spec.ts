// Hand-maintained landing-page content for this framework's `/<slug>` route,
// read through `frameworkOverviews`. An earlier header credited
// `scripts/extract-framework-overviews.ts`; no such script exists in this
// repository and none ever has, so edit this file directly.
//
// Open Agent Spec has no showcase integration of its own, so this record
// carries no `showcase` block and the page ends after "Connect your agent".
import type { FrameworkOverviewData } from "./types";

const data: FrameworkOverviewData = {
  slug: "agent-spec",
  frameworkName: "Open Agent Spec",
  iconKey: "agentspecMark",
  header: "把你的 Open Agent Spec 智能体带到用户面前",
  subheader:
    "Open Agent Spec 负责描述你的智能体，CopilotKit 则为它提供一个用户看得见、可中断、也能操控的界面。",
  guideLink: "/agent-spec/quickstart",
  initCommand: "npx copilotkit@latest init",
  featuresLink:
    "https://feature-viewer.copilotkit.ai/agent-spec/feature/agentic_chat",

  lede: "Open Agent Spec 以其他工具能够运行的形式来描述智能体，但它没有描述的，是用户实际操作的界面。下方的每项能力，都构建在一份正在运行的规范已有的输出之上。",
  supportedFeatures: [
    {
      title: "生成式 UI",
      iconKey: "paintbrush",
      description:
        "你的智能体发出的工具调用会实时到达。CopilotKit 会把每一次调用渲染为你自己应用中的 React 组件，而不是让用户对着一个加载转圈干等。",
      documentationLink: "/agent-spec/generative-ui",
    },
    {
      title: "人机协同（human-in-the-loop）",
      iconKey: "user",
      description:
        "通过 useHumanInTheLoop 注册的前端工具会渲染你自己的 UI，等待用户作答，再把答案作为工具结果交还给智能体。",
      documentationLink: "/agent-spec/human-in-the-loop",
    },
    {
      title: "共享状态",
      iconKey: "repeat",
      description:
        "你的智能体会在多轮对话之间携带状态。CopilotKit 把它同步到你的应用、再同步回去，让用户的编辑和智能体的写入落在同一处。",
      documentationLink: "/agent-spec/shared-state",
    },
  ],
  capabilitiesFootnote: {
    text: "对话界面、无头（headless）UI、前端工具与多智能体流程同样适用于 Open Agent Spec。",
    linkLabel: "以及更多",
    href: "/agent-spec/build-with-agents",
  },

  connect: {
    intro:
      "你的智能体仍在如今运行的地方继续运行，只是置于一个 AG-UI 端点之后。CopilotKit 通过 HTTP 访问它，智能体内部无需任何改动。",
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
    guideLink: "/agent-spec/quickstart",
  },

  liveDemos: [],
};

export default data;
