export const INTELLIGENCE_DOCS_HREF = "/intelligence/overview";

export type MegaMenuIconName =
  | "book"
  | "rocket"
  | "terminal"
  | "message"
  | "sparkles"
  | "bot"
  | "layers"
  | "refresh"
  | "link"
  | "blocks"
  | "search"
  | "cloud"
  | "server"
  | "atom"
  | "box"
  | "radio"
  | "brain"
  | "lightbulb"
  | "chart"
  | "kite";

export interface MegaMenuLink {
  href: string;
  label: string;
  icon: MegaMenuIconName;
  description?: string;
  featured?: boolean;
}

export interface MegaMenuColumn {
  title: string;
  links: readonly MegaMenuLink[];
}

export const DOCS_MEGA_MENU_COLUMNS: readonly MegaMenuColumn[] = [
  {
    title: "开始",
    links: [
      { href: "/", label: "简介", icon: "book" },
      { href: "/quickstart", label: "快速开始", icon: "rocket" },
      { href: "/cli", label: "CLI", icon: "terminal" },
    ],
  },
  {
    title: "构建",
    links: [
      { href: "/prebuilt-components", label: "聊天 UI", icon: "message" },
      {
        href: "/generative-ui",
        label: "生成式 UI",
        icon: "sparkles",
      },
      { href: "/frontend-tools", label: "智能体行为", icon: "bot" },
    ],
  },
  {
    title: "连接",
    links: [
      { href: "/backend/copilot-runtime", label: "运行时", icon: "refresh" },
      { href: "/agentic-protocols/ag-ui", label: "AG-UI", icon: "link" },
      {
        href: "/build-with-agents",
        label: "与智能体协同构建",
        icon: "blocks",
      },
    ],
  },
  {
    title: "发布与运维",
    links: [
      {
        href: INTELLIGENCE_DOCS_HREF,
        label: "智能中枢",
        icon: "kite",
        featured: true,
      },
      { href: "/AG-UI-Streams", label: "AG-UI Streams", icon: "layers" },
      {
        href: "/learning",
        label: "自动学习",
        icon: "lightbulb",
      },
      {
        href: "/intelligence/analytics",
        label: "产品分析",
        icon: "chart",
      },
      { href: "/intelligence/memories", label: "用户记忆", icon: "brain" },
      { href: "/inspector", label: "Inspector", icon: "search" },
      { href: "/deploy/agentcore", label: "部署", icon: "cloud" },
      {
        href: "/intelligence/self-hosting",
        label: "自托管",
        icon: "server",
      },
    ],
  },
  {
    title: "参考",
    links: [
      { href: "/reference", label: "React API 参考", icon: "atom" },
      { href: "/reference/core", label: "运行时 API 参考", icon: "box" },
      { href: "/reference/channels", label: "渠道 API 参考", icon: "radio" },
    ],
  },
];

export function isIntelligenceDocsPath(pathname: string) {
  const path = pathname.split("?")[0] ?? pathname;
  return /(^|\/)(intelligence|premium)(\/|$)/.test(path);
}

export function isDocsExplorePath(pathname: string) {
  const firstSegment = pathname === "/" ? "/" : `/${pathname.split("/")[1]}`;
  return firstSegment !== "/reference" && firstSegment !== "/cookbook";
}
