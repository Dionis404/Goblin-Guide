// @ts-check
// Аннотации `@type` JSDoc позволяют автодополнение в редакторе и проверку типов
// (при использовании с `@ts-check`).
// Есть несколько эквивалентных способов объявления конфигурации Docusaurus.
// См.: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// Этот код выполняется в Node.js - Не используйте клиентский код здесь (API браузера, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Goblin Guide',
  tagline: 'Руководство по Sunflower Land',
  favicon: 'img/favicon.ico',

  // Установите URL вашего сайта в продакшене
  url: 'https://dionis404.github.io',
  // Установите путь /<baseUrl>/ под которым будет обслуживаться ваш сайт
  // Для деплоя на GitHub Pages это обычно '/<projectName>/'
  baseUrl: '/Goblin-Guide/',

  // Конфигурация деплоя на GitHub Pages.
  // Если вы не используете GitHub Pages, эти настройки не нужны.
  organizationName: 'Dionis404', // Обычно имя вашей организации/пользователя GitHub.
  projectName: 'Goblin-Guide', // Обычно имя вашего репозитория.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Даже если вы не используете интернационализацию, вы можете использовать это поле для установки
  // полезных метаданных, например html lang. Например, если ваш сайт на китайском, вы
  // можете заменить "en" на "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Dionis404/Goblin-Guide',
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Goblin Guide',
        logo: {
          alt: 'Goblin Guide Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Гайды',
          },
          {
            type: 'docSidebar',
            sidebarId: 'databaseSidebar',
            position: 'left',
            label: 'База данных',
          },
          {
            type: 'docSidebar',
            sidebarId: 'usefullinksSidebar',
            position: 'left',
            label: 'Полезные ссылки',
          },
          {
            href: 'https://github.com/Dionis404/Goblin-Guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
        style: 'primary',
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Goblin Guide. Построен с помощью Докусавра.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      breadcrumbs: {
        home: {
          label: 'Главная'
        }
      },
      // Кастомные цвета
      customCss: './src/css/custom.css',
    }),
};

export default config;

