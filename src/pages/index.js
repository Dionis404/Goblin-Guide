import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Добро пожаловать"
      description="Официальное руководство по Sunflower Land">
      <main className="container margin-vert--lg backgroundmain">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h2>Добро пожаловать в Гоблинский путеводитель</h2>
            <p>
              Это база знаний гайдов по игре Sunflower Land
            </p>

            <h2>Многое находится в разработке. Если у вас есть желание помочь, вы можете внести изменения на GitHub или связаться со мной.</h2>

            <h2>Как пользоваться этим руководством</h2>
            <p>Руководство разделено на несколько разделов:</p>
            
            <div className="margin-top--lg text--center">
              <Link
                className="button button--primary button--lg margin-right--md"
                to="/guides/intro">
                Гайды
              </Link>
              <Link
                className="button button--primary button--lg"
                to="/database/intro">
                База данных
              </Link>
              <Link
                className="button button--primary button--lg"
                to="/usefullinks/intro">
                Полезные ссылки
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}