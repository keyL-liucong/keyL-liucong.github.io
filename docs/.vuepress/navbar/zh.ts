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
      "javascript/",
      "typescript/",
    ],
  },
  { 
    text: "框架", 
    icon: "creative", 
    prefix: "/frame/",
    children: [
      "vuejs/",
      "react/",
      "angular/"
    ]
  },
  { 
    text: "工程化", 
    icon: "creative", 
    prefix: "/engineering/",
    children: [
      "webpack5/",
      "vite/"
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
        children: ["nginx/", "jenkins/", "docker/"],
      },
    ],
    // children: [
    //   {
    //     text: "webpack",
    //     icon: "edit",
    //     link: "/optimizing",
    //   }
    // ]
  },
  // { 
  //   text: "性能优化", 
  //   icon: "creative", 
  //   prefix: "/performance",
  //   children: [
  //     {
  //       text: "webpack",
  //       icon: "edit",
  //       link: "/optimizing",
  //     }
  //   ]
  // },
  { 
    text: "其他", 
    icon: "creative", 
    prefix: "/others",
    children: [
      {
        text: "github部署Vuepress",
        icon: "edit",
        link: "/vuepress",
      },
      {
        text: "CICD",
        icon: "edit",
        link: "/CICD",
      },
    ]
  },
]);