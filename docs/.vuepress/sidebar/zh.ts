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
      children: ["ways-to-insert-css", "selectors-and-selector-priority", "pseudo-elements-and-pseudo-classes", "length-and-units", "box-model", "position-property", "float-property", "bfc", "layout", "flexbox", "grid", "to-be-continued"]
    },
  ],
  "/foundation/es6/": [
    {
      text: "es6",
      icon: "es6",
      link: "/foundation/es6/",
      children: [
        "intro",
        "let",
        "destructuring",
        "string",
        "regex",
        "number",
        "function",
        "array",
        "object",
        "symbol",
        "set-map",
        "proxy",
        "reflect",
        "promise",
        "iterator",
        "generator",
        "generator-async",
        "async",
        "class",
        "class-extends",
        "decorator",
        "module",
        "module-loader",
        "style",
        "spec",
        "arraybuffer",
      ],
    },
  ],
  "/foundation/javascript/": [
    {
      text: "javascript",
      icon: "git",
      link: "/foundation/javascript/",
      children: ["data-types", "stack-and-heap", "execution-context", "scope", "closure", "this-keyword", "prototype-and-prototype-chain", "gc", "sync-and-async", "event-loop", "shallow-clone-and-deep-clone", "function-currying", "to-be-continued"]
    },
  ],
  "/foundation/typescript/": [
    {
      text: "简介",
      icon: "typescript",
      prefix: 'introduction/',
      children: [
        'what-is-typescript',
        'get-typescript',
        'hello-typescript',
      ],
    },
    {
      text: "基础",
      icon: "typescript",
      prefix: 'basics/',
      collapsable: true,
      children: [
        'primitive-data-types',
        'any',
        'type-inference',
        'union-types',
        'type-of-object-interfaces',
        'type-of-array',
        'type-of-function',
        'type-assertion',
        'declaration-files',
        'built-in-objects',
      ],
    },
    {
      text: "进阶",
      icon: "typescript",
      prefix: 'advanced/',
      collapsable: true,
      children: [
        'type-aliases',
        'string-literal-types',
        'tuple',
        'enum',
        'class',
        'class-and-interfaces',
        'generics',
        'declaration-merging',
        'further-reading',
      ],
    },
    {
      text: "工程",
      icon: "typescript",
      prefix: 'engineering/',
      children: ['lint', 'compiler-options'],
    },
  ],
  "/frame/vuejs/": [
    {
      text: "vuejs",
      icon: "vue",
      link: "/frame/vuejs/",
      children: ["basic-use", "advanced-use", "reactive-data", "virtual-dom-and-diff", "diff", "template-compile", "component-render-and-update", "vue-router","source-code"]
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
      children: ["core-concept", "basic-config", "advanced-config", "performance-optimization-in-build", "performance-optimization-in-output", "generic-template"]
    },
  ],
  "/engineering/vite/": [
    {
      text: "vite",
      icon: "note",
      link: "/engineering/vite/",
    },
  ],
  // 进阶 前端 浏览器工作原理
  "/advanced/browser/": [
    {
      text: "浏览器工作原理",
      icon: "chrome",
      link: "/advanced/browser/",
      children: ["browser-macro-knowledge", "kernel-and-javascript-engine", "execution-details-of-rendering-process", "execution-details-of-v8-engine"]
    },
  ],
  "/advanced/nodejs/": "structure",
  // 其他 工具 vscode
  "/others/vscode/": [
    "install",
    "get-started",
    {
      text: "简易指南",
      icon: "guide",
      prefix: "guide/",
      children: [
        "basic",
        "customization",
        "extension",
        "file",
        "edit",
        "intellisense",
        "git",
        "debug",
        "task",
        "command",
      ],
    },
    "ui",
    "settings",
    "shortcut-key",
  ],
  // 其他 工具 git
  "/others/git/": [
    "install",
    "intro",
    "create-repo",
    "status",
    "recall",
    "reset",
    "working-directory",
    "change",
    "remote",
    "branch",
    "tag",
    "ignore",
    "working",
    "custom",
    "merger-rebase"
  ],
  // 其他 工具 git
  "/others/github/": [
    "intro",
    "pr",
    "semantic",
    "pages",
    "speedup",
    "token",
    {
      text: "Github Actions",
      icon: "actions",
      prefix: "actions/",
      children: [
        "",
        "intro",
        "config",
        {
          text: "常见 Actions",
          icon: "actions",
          collapsable: true,
          children: ["checkout", "cache", "gh-pages-deploy"],
        },
      ],
    },
    "deploy",
    "vuepress"
  ],
  "/others/mini-app/": [
    {
      text: "小程序教程",
      icon: "creative",
      prefix: "guide/",
      children: [
        "file-structure",
        "env",
        {
          text: "配置",
          icon: "config",
          prefix: "config/",
          children: ["", "app-config", "page-config", "sitemap-config"],
        },
        {
          text: "框架",
          icon: "frame",
          prefix: "frame/",
          children: ["intro", "scene", "env", "mechanism", "update"],
        },
        {
          text: "逻辑层",
          icon: "process",
          prefix: "service/",
          children: [
            "",
            "lifetime",
            "route",
            "register",
            "app",
            "page",
            "run",
            "module",
            {
              text: "API",
              icon: "api",
              prefix: "api/",
              children: ["", "route", "storage", "interact", "network", "system"],
            },
          ],
        },
        {
          text: "视图层",
          icon: "layout",
          prefix: "view/",
          children: [
            "",
            {
              text: "WXML",
              icon: "code",
              collapsable: true,
              children: [
                "wxml",
                "data-bind",
                "condition-render",
                "list-render",
                "template",
              ],
            },
            "wxss",
            "event",
            "component",
            "animation",
            "wxs",
            "wxs-event",
            "model",
            "selector",
            "rendering-cache",
          ],
        },
        {
          text: "能力",
          icon: "safe",
          prefix: "ability/",
          children: ["", "network", "storage", "file-system", "debug"],
        },
      ],
    },
    {
      text: "开发者工具",
      icon: "tool",
      prefix: "tools/",
      children: ["", "interface", "debug", "npm", "audit"],
    },
    {
      text: "小程序框架",
      icon: "frame",
      prefix: "framework/",
      children: ["", "simple-debug", "tag-list", "page", "demo"],
    },
    "qr-code",
  ],
  "/engineering/normalization/version-control/": [
    {
      text: "版本控制",
      icon: "git",
      link: "/technical-specifications/version-control/",
      children: ["version-number", "git-workflow", "git-commit-message"]
    },
  ],
  "/engineering/normalization/code-style/": [
    {
      text: "代码风格",
      icon: "code",
      link: "/technical-specifications/code-style/",
      children: ["html-spec", "css-spec", "javascript-spec", "vuejs-spec", "code-review"]
    },
  ],
  "/engineering/automation/deploy/": [
    {
      text: "自动部署",
      icon: "code",
      link: "/automation/deploy/",
      children: ["CICD", "nginx"]
    },
  ],
  "/engineering/automation/deploy/nginx/": [
    {
      text: "Nginx 用法整理",
      icon: "note",
      link: "/advanced/nginx/",
      children: ["forward-proxy-and-reverse-proxy", "load-balancing", "installation-of-nginx", "uninstallation-of-nginx", "common-commands", "set-auto-start-after-server-reboot", "config-file-params-explanation", "config-file-generic-template", "ngx-http-access-module", "ngx-http-autoindex-module", "ngx-http-auth-basic-module", "deploy-https-security-auth", "traffic-limiting-modules"]
    },
    {
      text: "Nginx 部署方案",
      icon: "note",
      link: "/advanced/nginx/",
      children: ["practice-in-front-end-separation-project"]
    },
  ],
  "/advanced/technical-solutions/": [
    {
      text: "技术解决方案",
      icon: "code",
      link: "/advanced/technical-solutions/",
      children: ["file-upload"]
    },
  ]
});
