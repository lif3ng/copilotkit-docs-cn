# CopilotKit 文档中文镜像（copilotkit-docs-cn）

[CopilotKit](https://docs.copilotkit.ai/) 官方文档的全站简体中文汉化项目。非官方翻译，仅供学习参考；内容以[英文原站](https://docs.copilotkit.ai/)为准。

- **源 URL**：https://docs.copilotkit.ai/
- **上游快照**：`CopilotKit/CopilotKit` main 分支（2026-10-30 sparse checkout，基线 commit `6e262496`，快照 commit 记录于首个基线提交）
- **许可证**：上游 MIT（`showcase` 目录随上游快照携带）

## 覆盖范围

| 语料 | 数量 | 状态 |
|---|---|---|
| 文档正文（content/docs + reference + snippets + integrations/*/docs） | 1056 篇 md/mdx | 全量汉化（含 236+136 篇同文组员经基线 hash 校验套用） |
| sidebar 导航 meta.json | 142 个 | 58 个唯一分组标题已汉化 |
| frontmatter nav_title | 41 个 | 已汉化 |
| 集成清单 manifest.yaml（name/description） | 22 个 | description 已汉化 |
| feature-registry.json（分类名/特性名/描述） | 11 + 50 | 已汉化 |
| 框架落地页数据 data/frameworks/*.ts | 8 个 | 已汉化 |
| UI 组件可见文案 | 精选 14 个组件 | 已汉化 |
| CJK 粗体闭合 | — | 自动修复 42 处句读 + 55 处括注移出，配对检测归零 |
| 锚点映射 | .anchor-maps/（工作区，不入库） | 每文件一份「英文标题 \| 中文标题 \| 新锚点」 |

站点 UI 大部分文案（框架选择器、搜索、向导等组件）以精选批次汉化；未被批次覆盖的组件内嵌字符串保留英文。

## 本地运行

```bash
cd showcase/shell-docs
npm install        # 首次约 900 包
npm run dev        # http://localhost:3003
```

前置：Node.js ≥ 22（读 `shell-docs/package.json` engines）。首次构建前需 `cd showcase/scripts && npm install`（build 前置脚本依赖），`showcase/harness` 需补装 `npm install js-yaml --no-save --ignore-scripts`（上游靠 pnpm workspace 提升，独立 npm 下缺失）。

## 构建

```bash
cd showcase/shell-docs
npm run build
```

动态应用构建（上游形态）。**静态导出**（GitHub Pages 部署用）：

```bash
# 1) 移走导出不兼容文件（middleware、llms*/og 路由、frontends 重定向路由）
# 2) NEXT_STATIC_EXPORT=1 next build（generateStaticParams 按 sitemap 枚举全部规范 URL）
# 3) 还原
```

封装脚本待沉淀为 `scripts/build-export.ps1`（实验期间置于 TEMP，改动点已提交：`lib/export-mode.ts`、`scripts/patch-dynamic.cjs`、两 catch-all 路由的 sitemap 权威枚举、`navigation-stub.ts`、`runtime-config.ts` 导出分支）。导出验证曾因宿主磁盘仅剩 11GB 被迫中断，待磁盘清理后补跑。

## 目录结构

```
copilotkit-docs-cn/
├─ GLOSSARY.md          # 术语表与排版规则（子代理注入材料 + 终检依据）
├─ README.md
└─ showcase/            # 上游 showcase 子集快照
   ├─ shell-docs/       # 文档站（fumadocs + Next.js 16）
   ├─ scripts/          # 构建前置生成脚本（+ patch-dynamic.cjs 导出补丁）
   ├─ harness/          # registry 生成的依赖（catalog-flatten）
   ├─ integrations/     # 22 个集成：manifest.yaml + docs/ + demo 源码
   ├─ shared/           # manifest schema、feature-registry 等
   └─ angular/, vue/    # 前端 demo（public/ 符号链接目标，未构建则缺）
```

## 翻译规范要点

详见 `GLOSSARY.md`。核心：产品名不译（CopilotKit、LangGraph、AG-UI、MCP…）；首现术语附英文原词（人机协同（human-in-the-loop））；中英文间半角空格；粗体闭合句读/括注移出粗体；代码块、命令、环境变量、API 名一律不译；frontmatter title/description 必译，其余字段（slug、nav_title 除外另行批量）不动。

## 同步口径

一次性快照，不随上游自动同步。上游更新后以基线 commit diff 手动对照。
