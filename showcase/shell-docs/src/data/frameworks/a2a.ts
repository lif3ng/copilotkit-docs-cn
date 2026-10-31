// Hand-maintained landing-page content for this framework's `/<slug>` route,
// read through `frameworkOverviews`. An earlier header credited
// `scripts/extract-framework-overviews.ts`; no such script exists in this
// repository and none ever has, so edit this file directly.
//
// A2A is the one partner with no showcase integration of its own, so this
// record carries no `showcase` block and the page ends after "Connect your
// agent". It also documents exactly one capability; a second and third card
// would have to be invented, and the section renders what is there.
import type { FrameworkOverviewData } from "./types";

const data: FrameworkOverviewData = {
  slug: "a2a",
  frameworkName: "A2A",
  iconKey: "a2a",
  header: "把你的 A2A 智能体带到用户面前",
  subheader:
    "A2A 负责让你的智能体彼此相连，CopilotKit 则为它们提供一个用户看得见、也能操控的界面。",
  guideLink: "/a2a/quickstart",
  // The org was `copilotkit-ai`, which 404s. The repository is under
  // `CopilotKit`, so the command on the page could not be pasted and run.
  initCommand: "git clone https://github.com/CopilotKit/with-a2a-a2ui.git",
  featuresLink: "https://feature-viewer.copilotkit.ai/a2a/feature/a2ui",

  lede: "A2A 为你的智能体提供了相互对话的协议，却没有提供用户用来对话的界面。下方的这项能力，正是构建在你的 A2A 智能体已有的输出之上。",
  supportedFeatures: [
    {
      title: "声明式 UI",
      iconKey: "paintbrush",
      description:
        "你的智能体只需描述要展示什么，而不必规定如何渲染。CopilotKit 会把这些 A2UI 描述转换为你自己应用中的 React 组件。",
      documentationLink: "/a2a/generative-ui",
    },
  ],
  capabilitiesFootnote: {
    text: "对话界面、无头（headless）UI、前端工具与共享状态同样适用于 A2A。",
    linkLabel: "以及更多",
    href: "/a2a/build-with-agents",
  },

  connect: {
    intro:
      "A2A 的配置从一个可运行的示例入手，而不是一段代码片段：克隆下方仓库，然后按照快速开始指南将其指向你自己的智能体。",
    filename: "",
    guideLink: "/a2a/quickstart",
    initCommand: "git clone https://github.com/CopilotKit/with-a2a-a2ui.git",
  },

  liveDemos: [],
};

export default data;
