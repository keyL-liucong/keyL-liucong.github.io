import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  "/en/": [
    "",
    "home",
    "slide",
    {
      icon: "creative",
      text: "Guide",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
  ],
});
