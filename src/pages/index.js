import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Добро пожаловать"
      description="Официальное руководство по Sunflower Land">
      <div className="backgroundmain">
        <main className="main-content">
          <div className="centered-content">
            <h2>Добро пожаловать в Гоблинский путеводитель</h2>
            <p>
              Это база знаний гайдов по игре Sunflower Land
            </p>
            <h2>Многое находится в разработке. Если у вас есть желание помочь, вы можете внести изменения на GitHub или связаться со мной.</h2>
            <h2>Как пользоваться этим руководством</h2>
            <p>Руководство разделено на несколько разделов:</p>
            <div className="button-column">
              <Link className="button button--primary button--lg" to="/guides/intro">
                Гайды
              </Link>
              <Link className="button button--primary button--lg" to="/database/intro">
                База данных
              </Link>
              <Link className="button button--primary button--lg" to="/usefullinks/intro">
                Полезные ссылки
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}