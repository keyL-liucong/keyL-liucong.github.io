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
    prefix: "/foundation",
    children: [
      {
        text: "html",
        icon: "html",
        link: "/html",
      },
      {
        text: "css",
        icon: "css",
        link: "/css",
      },
      {
        text: "js",
        icon: "javascript",
        link: "/js",
      },
    ]
  },
  { 
    text: "框架", 
    icon: "creative", 
    prefix: "/frame",
    children: [
      {
        text: "vue",
        icon: "vue",
        link: "/vue",
      },
      {
        text: "react",
        icon: "react",
        link: "/react",
      },
      {
        text: "angular",
        icon: "angular",
        link: "/angular",
      },
    ]
  },
  { 
    text: "工程化", 
    icon: "creative", 
    prefix: "/engineering",
    children: [
      {
        text: "webpack",
        icon: "note",
        link: "/webpack",
      },
      {
        text: "vite",
        icon: "note",
        link: "/vite",
      },
      // {
      //   text: "rollup",
      //   icon: "rollup",
      //   link: "/rollup",
      // },
    ]
  },
  { 
    text: "性能优化", 
    icon: "creative", 
    prefix: "/performance",
    children: [
      {
        text: "webpack",
        icon: "edit",
        link: "/optimizing",
      }
    ]
  },
  { 
    text: "性能优化", 
    icon: "creative", 
    prefix: "/performance",
    children: [
      {
        text: "webpack",
        icon: "edit",
        link: "/optimizing",
      }
    ]
  },
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
  // { text: "使用指南", icon: "creative", link: "/zh/guide/" },
  // {
  //   text: "博文",
  //   icon: "edit",
  //   prefix: "/zh/posts/",
  //   children: [
  //     {
  //       text: "文章 1-4",
  //       icon: "edit",
  //       prefix: "article/",
  //       children: [
  //         { text: "文章 1", icon: "edit", link: "article1" },
  //         { text: "文章 2", icon: "edit", link: "article2" },
  //         "article3",
  //         "article4",
  //       ],
  //     },
  //     {
  //       text: "文章 5-12",
  //       icon: "edit",
  //       children: [
  //         {
  //           text: "文章 5",
  //           icon: "edit",
  //           link: "article/article5",
  //         },
  //         {
  //           text: "文章 6",
  //           icon: "edit",
  //           link: "article/article6",
  //         },
  //         "article/article7",
  //         "article/article8",
  //       ],
  //     },
  //     { text: "文章 9", icon: "edit", link: "article9" },
  //     { text: "文章 10", icon: "edit", link: "article10" },
  //     "article11",
  //     "article12",
  //   ],
  // },
  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);

// export const zh = navbar([
//   "/",
//   "/home",
//   { text: "使用指南", icon: "creative", link: "/zh/guide/" },
//   {
//     text: "博文",
//     icon: "edit",
//     prefix: "/zh/posts/",
//     children: [
//       {
//         text: "文章 1-4",
//         icon: "edit",
//         prefix: "article/",
//         children: [
//           { text: "文章 1", icon: "edit", link: "article1" },
//           { text: "文章 2", icon: "edit", link: "article2" },
//           "article3",
//           "article4",
//         ],
//       },
//       {
//         text: "文章 5-12",
//         icon: "edit",
//         children: [
//           {
//             text: "文章 5",
//             icon: "edit",
//             link: "article/article5",
//           },
//           {
//             text: "文章 6",
//             icon: "edit",
//             link: "article/article6",
//           },
//           "article/article7",
//           "article/article8",
//         ],
//       },
//       { text: "文章 9", icon: "edit", link: "article9" },
//       { text: "文章 10", icon: "edit", link: "article10" },
//       "article11",
//       "article12",
//     ],
//   },
//   {
//     text: "主题文档",
//     icon: "note",
//     link: "https://vuepress-theme-hope.github.io/v2/zh/",
//   },
// ]);
