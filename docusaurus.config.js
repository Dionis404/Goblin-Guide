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
  url: 'https://github.com/Dionis404/',
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
          // Пожалуйста, измените это на ваш репозиторий.
          // Удалите это, чтобы убрать ссылки "редактировать эту страницу".
          editUrl:
            'https://github.com/Dionis404/Goblin-Guide',
          routeBasePath: '/', // Serve the docs at the site's root
        },
        blog: false, // Disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Замените на социальную карточку вашего проекта
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
            href: 'https://github.com/Dionis404/Goblin-Guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
        style: 'primary',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Сообщество',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/sunflowerland',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/sunflowerland',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Goblin Guide. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
      },
      // Кастомные цвета
      customCss: './src/css/custom.css',
    }),
};

export default config;

