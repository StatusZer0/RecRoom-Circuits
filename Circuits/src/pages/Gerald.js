import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Gerald the Chicken</h1>
        <p className="hero__subtitle">You found him! You found the holy Chicken whose name is Gerald!</p>
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#E1E8ED" d="M20.143 32.215c0 1.183-.959 2.143-2.143 2.143s-2.143-.96-2.143-2.143c0-1.184.96-2.144 2.143-2.144s2.143.96 2.143 2.144z"/><path fill="#E1E8ED" d="M27.643 15.643C27.643 10.317 23.324 6 18 6c-5.326 0-9.643 4.317-9.643 9.643 0 5.357-1.071 16.572-1.071 16.572 0 1.183.959 2.143 2.143 2.143 1.183 0 2.143-.96 2.143-2.143 0 1.183.96 2.143 2.143 2.143 1.183 0 2.142-.96 2.142-2.143h4.286c0 1.183.96 2.143 2.144 2.143 1.183 0 2.143-.96 2.143-2.143 0 1.183.959 2.143 2.143 2.143 1.184 0 2.143-.96 2.143-2.143-.002 0-1.073-11.215-1.073-16.572z"/><path fill="#DD2E44" d="M20 3c0 2.209-1.447 6-2 6-.552 0-2-3.791-2-6s1.448-3 2-3c.553 0 2 .791 2 3zm-4.365 30c0-2.612 1.711-8 2.365-8 .653 0 2.365 5.388 2.365 8S18.652 36 18 36c-.654 0-2.365-.388-2.365-3z"/><ellipse fill="#F4900C" cx="18" cy="22.5" rx="7" ry="4.5"/><path fill="#FFAC33" d="M25 22.5c0 1.5-14 1.5-14 0s4.791-4.5 7-4.5 7 3 7 4.5z"/><circle fill="#292F33" cx="11.5" cy="18.5" r="1.5"/><circle fill="#292F33" cx="24.5" cy="18.5" r="1.5"/></svg>
      </main>
    </Layout>
  );
}
