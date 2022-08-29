import { navbar } from "vuepress-theme-hope";
export const zh = navbar([
  "/",
  // "/home",
  "/summary",
  { 
    text: "基础", 
    icon: "creative", 
    prefix: "/foundation/",
    children: [
      "html/",
      "css/",
      "es6/",
      "javascript/",
      "typescript/",
    ],
  },
  { 
    text: "框架", 
    icon: "frame", 
    prefix: "/frame/",
    children: [
      "vuejs/",
      "react/",
      "angular/"
    ]
  },
  { 
    text: "工程化", 
    icon: "list", 
    prefix: "/engineering/",
    children: [
      {
        text: "模块化",
        icon: 'module',
        prefix: "modules/",
        children: ["AMD/","CMD/","CommonJs/","ESM/","UMD/"],
      },
      {
        text: "规范化",
        icon: "code",
        prefix: "normalization/",
        children: [
          "version-control/",
          "code-style/",
          "apis-style",
          "document-style"
        ],
      },
      {
        text: "自动化",
        prefix: "automation/",
        children: [
          "structure/",
          "deploy/"
        ],
      },
      {
        text: "工具",
        prefix: "tools/",
        children: [
          "webpack5/"
        ],
      },
    ]
  },
  { 
    text: "进阶", 
    icon: "advance", 
    prefix: "/advanced/",
    children: [
      {
        text: "计算机基础",
        // link: "performance-optimizing",
        children: ["fundamentals-of-computer/","browser/"],
      },
      {
        text: "前端",
        // link: "performance-optimizing",
        children: ["performance-optimizing/","design-mode/","technical-solutions/"],
      },
      {
        text: "其他",
        children: ["nodejs/","docker/"],
      },
    ],
  },
  { 
    text: "其他", 
    icon: "others", 
    prefix: "/others/",
    children: [
      {
        text: "工具",
        children: ["vscode/","git/","github"],
      },
      {
        text: "泛客户端",
        children: ["mobile-terminal/","desktop-applications/","mini-app","fast-application/"],
      },
      "records/",
      "interview/",
      "article/",
      "commonds/"
    ]
  },
]);