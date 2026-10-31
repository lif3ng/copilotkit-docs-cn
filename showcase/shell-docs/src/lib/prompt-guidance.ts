// Shown beside the onboarding prompt, never inside it: the copied prompt must
// stay byte-identical to the Intelligence app and Inspector copies.
//
// Most copied prompts are never pasted anywhere, and nothing near the button
// said where the prompt goes (PE-340). A new terminal also starts in the home
// folder, where the agent would build the starter app (PE-301). This line
// answers both.
//
// The Intelligence app and copilotkit.ai show the same words and cannot import
// this module. Change all three together.
export const PROMPT_DESTINATION_HINT =
  "在你的项目文件夹（或新建应用的空文件夹）中打开你的编码智能体。"

// On a phone the prompt has nowhere to go: it runs in a coding agent on the
// computer that holds the project. 46 phone run ids copied in two days led to
// 1 run (PE-339).
export const PROMPT_PHONE_HINT =
  "它将运行在你计算机上的编码智能体中。"
