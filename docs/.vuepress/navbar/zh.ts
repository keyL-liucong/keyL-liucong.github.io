import { navbar } from "vuepress-theme-hope";
export const zh = navbar([
  "/",
  // "/home",
  {
    text: "技术规范",
    icon: "code",
    prefix: "/technical-specifications/",
    children: [
      "version-control/",
      "code-style/",
      "apis-style",
      "document-style"
    ],
  },
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
      "angular/",
      "mini-app/"
    ]
  },
  { 
    text: "工程化", 
    icon: "list", 
    prefix: "/engineering/",
    children: [
      "webpack5/",
      "vite/",
      "esbuild",
      "rollup"
    ]
  },
  { 
    text: "进阶", 
    icon: "advance", 
    prefix: "/advanced/",
    children: [
      // { text: "随笔", link: "", icon: "note", activeMatch: "^/note/$" },
      {
        text: "前端",
        // link: "performance-optimizing",
        children: ["performance-optimizing/","browser/"],
      },
      {
        text: "运维",
        children: ["CICD/","nginx/", "jenkins/", "docker/"],
      },
      {
        text: "服务端",
        children: ["nodejs/"],
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
      "records/"
    ]
  },
]);