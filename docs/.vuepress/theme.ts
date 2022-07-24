import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://keyl-liucong.github.io/",
  author: {
    name: "keyL-liucong",
    url: "https://keyl-liucong.github.io/",
  },
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "keyL-liucong",

  docsDir: "demo/src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      Baidu: "https://keyl-liucong.github.io/",
      Bitbucket: "https://keyl-liucong.github.io/",
      Dingding: "https://keyl-liucong.github.io/",
      Discord: "https://keyl-liucong.github.io/",
      Dribbble: "https://keyl-liucong.github.io/",
      Email: "https://keyl-liucong.github.io/",
      Evernote: "https://keyl-liucong.github.io/",
      Facebook: "https://keyl-liucong.github.io/",
      Flipboard: "https://keyl-liucong.github.io/",
      Gitee: "https://keyl-liucong.github.io/",
      GitHub: "https://keyl-liucong.github.io/",
      Gitlab: "https://keyl-liucong.github.io/",
      Gmail: "https://keyl-liucong.github.io/",
      Instagram: "https://keyl-liucong.github.io/",
      Lines: "https://keyl-liucong.github.io/",
      Linkedin: "https://keyl-liucong.github.io/",
      Pinterest: "https://keyl-liucong.github.io/",
      Pocket: "https://keyl-liucong.github.io/",
      QQ: "https://keyl-liucong.github.io/",
      Qzone: "https://keyl-liucong.github.io/",
      Reddit: "https://keyl-liucong.github.io/",
      Rss: "https://keyl-liucong.github.io/",
      Steam: "https://keyl-liucong.github.io/",
      Twitter: "https://keyl-liucong.github.io/",
      Wechat: "https://keyl-liucong.github.io/",
      Weibo: "https://keyl-liucong.github.io/",
      Whatsapp: "https://keyl-liucong.github.io/",
      Youtube: "https://keyl-liucong.github.io/",
      Zhihu: "https://keyl-liucong.github.io/",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: "默认页脚",

      displayFooter: true,

      blog: {
        description: "一个前端开发者",
        intro: "/intro.html",
      },

    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: sidebar.en,

      footer: "Default footer",

      displayFooter: true,

      blog: {
        description: "A FrontEnd programmer",
        intro: "/intro.html",
      },

    },
  },

  encrypt: {
    // config: {
    //   "/guide/encrypt.html": ["1234"],
    //   "/zh/guide/encrypt.html": ["1234"],
    // },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      // enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
