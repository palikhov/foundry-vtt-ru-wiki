const { path } = require("@vuepress/utils");

module.exports = {
  lang: "ru-RU",
  title: "База знаний Foundry VTT",
  description: "База знаний Foundry VTT на русском языке",

  themeConfig: {
    logo: "fvtt-logo-ru.png",
    favicon: "fvtt-logo-ru.png",
    repo: "Phenomen/foundry-vtt-ru-wiki",
    docsDir: "docs",
    lastUpdated: true,
    contributors: false,
    editLink: true,
    notFound: ["Страница не найдена"],
    backToHome: "Перейти на главную страницу",
    editLinkText: "Редактировать эту страницу",
    lastUpdatedText: "Обновлено",
    contributorsText: "Авторы",
    tip: "ПРИМЕЧАНИЕ",
    warning: "ВНИМАНИЕ",
    danger: "ВАЖНО",
    details: "ПОДРОБНЕЕ",
    sidebarDepth: 1,
    darkMode: false,
    sidebar: [
      {
        text: "Начало работы",
        link: "/foundry/",
        children: [
          "/foundry/faq.md",
          "/foundry/minimum-requirements.md",
          "/foundry/game-controls.md",
        ],
      },
      {
        text: "Основные инструменты",
        link: "/tools/",
        children: [
          "/tools/actors.md",
          "/tools/journals.md",
          "/tools/basic-dice.md",
        ],
      },
      {
        text: "Инструменты сцены",
        link: "/scenes/",
        children: [
          "/scenes/tiles.md",
          "/scenes/walls.md",
          "/scenes/lighting.md",
        ],
      },
      {
        text: "Продвинутые руководства",
        link: "/advanced/",
        children: [
          "/advanced/application-configuration.md",
          "/advanced/port-forwarding.md",
          "/advanced/aws-s3.md",
        ],
      },
      {
        text: "Модули и системы",
        link: "/modules/",
        children: ["/modules/install.md", "/modules/ru-ru.md"],
      },
    ],
  },
  markdown: {
    anchor: {
      slugify: function slugify(string) {
        const rControl = /[\u0000-\u001f]/g;
        const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>«»,.?/]+/g;
        const rCombining = /[\u0300-\u036F]/g;

        return string
          .toString()
          .normalize("NFC")
          .replace(rCombining, "")
          .replace(rControl, "")
          .replace(rSpecial, "-")
          .replace(/-{2,}/g, "-")
          .replace(/^-+|-+$/g, "")
          .replace(/^(\d)/, "_$1")
          .toLowerCase();
      },
    },
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Поиск",
          },
        },
      },
    ],
    [
      "@vuepress/register-components",
      {
        components: {
          DiceRoller: path.resolve(__dirname, "./components/DiceRoller.vue"),
        },
      },
    ],
  ],
};
