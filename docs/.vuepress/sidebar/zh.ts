import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/": [
    "",
    "home",
  ],
  "/foundation/html/": [
    {
      text: "HTML",
      icon: "html",
      link: "/foundation/html/",
      children: ["html-basic-structure", "semantic-elements", "to-be-continued"]
    },
  ],
  "/foundation/css/": [
    {
      text: "CSS",
      icon: "css",
      link: "/foundation/css/",
      children: ["ways-to-insert-css", "selectors-and-selector-priority", "pseudo-elements-and-pseudo-classes","length-and-units","box-model","position-property","float-property","bfc","layout","flexbox","grid","to-be-continued"]
    },
  ],
  "/foundation/javascript/": [
    {
      text: "javascript",
      icon: "git",
      link: "/foundation/javascript/",
      children: ["data-types", "stack-and-heap", "execution-context","scope","closure","this-keyword","prototype-and-prototype-chain","gc","sync-and-async","event-loop","shallow-clone-and-deep-clone","function-currying","to-be-continued"]
    },
  ],
  "/technical-specifications/version-control/": [
    {
      text: "版本控制",
      icon: "git",
      link: "/technical-specifications/version-control/",
      children: ["version-number", "git-workflow", "git-commit-message"]
    },
  ],
  "/technical-specifications/code-style/": [
    {
      text: "代码风格",
      icon: "code",
      link: "/technical-specifications/code-style/",
      children: ["html-spec", "css-spec", "javascript-spec", "vuejs-spec","code-review"]
    },
  ],
  "/frame/vuejs/": [
    {
      text: "vuejs",
      icon: "vue",
      link: "/frame/vuejs/",
      children: ["basic-use", "advanced-use", "reactive-data", "virtual-dom-and-diff","template-compile","component-render-and-update","vue-router"]
    },
  ],
  "/frame/react/": [
    {
      text: "react",
      icon: "react",
      link: "/frame/react/",
      children: ["react-jsx"]
    },
  ],
  "/frame/angular/": [
    {
      text: "angular",
      icon: "angular",
      link: "/frame/angular/",
    },
  ],
  "/engineering/webpack5/": [
    {
      text: "webpack5",
      icon: "tool",
      link: "/engineering/webpack5/",
      children: ["core-concept","basic-config","advanced-config","performance-optimization-in-build","performance-optimization-in-output","generic-template"]
    },
  ],
  "/engineering/vite/": [
    {
      text: "vite",
      icon: "note",
      link: "/engineering/vite/",
    },
  ],
});

// export const zh = sidebar({
//   "/": [
//     "",
//     "home",
//     "slide",  // 幻灯片
//     {
//       text: "如何使用",
//       icon: "creative",
//       prefix: "guide/",
//       link: "guide/",
//       children: "structure",
//     },
//     {
//       text: "文章",
//       icon: "note",
//       prefix: "posts/",
//       children: [
//         {
//           text: "文章 1-4",
//           icon: "note",
//           collapsable: true,
//           prefix: "article/",
//           children: ["article1", "article2", "article3", "article4"],
//         },
//         {
//           text: "文章 5-12",
//           icon: "note",
//           children: [
//             {
//               text: "文章 5-8",
//               icon: "note",
//               collapsable: true,
//               prefix: "article/",
//               children: ["article5", "article6", "article7", "article8"],
//             },
//             {
//               text: "文章 9-12",
//               icon: "note",
//               children: ["article9", "article10", "article11", "article12"],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// });
