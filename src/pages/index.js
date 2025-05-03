import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Добро пожаловать"
      description="Официальное руководство по Sunflower Land">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Добро пожаловать в Sunflower Land Guide</h1>
            <p>
              Добро пожаловать в официальное руководство по Sunflower Land! Это руководство поможет вам освоиться в игре и стать успешным фермером.
            </p>

            <h2>Что такое Sunflower Land?</h2>
            <p>Sunflower Land - это фермерская игра, где вы можете:</p>
            <ul>
              <li>Выращивать урожай и собирать ресурсы</li>
              <li>Строить и улучшать свою ферму</li>
              <li>Торговать с другими игроками</li>
              <li>Выполнять квесты и получать награды</li>
              <li>Собирать уникальные NFT</li>
            </ul>

            <h2>Как пользоваться этим руководством</h2>
            <p>Руководство разделено на несколько разделов:</p>
            <ul>
              <li><Link to="/guides/intro">Гайды</Link> - базовые механики игры и первые шаги</li>
              <li><Link to="/database/intro">База данных</Link> - подробная информация о всех элементах игры</li>
            </ul>

            <div className="margin-top--lg">
              <Link
                className="button button--primary button--lg"
                to="/guides/intro">
                Начать обучение →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 