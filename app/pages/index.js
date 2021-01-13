import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [initialFile, setIntialFile] = useState('');
  const [validateFile, setValidateFile] = useState('');

  const fileChange = (e) => {
    console.log(e);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Excel Compare</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Compare Excel Sheets
        </h1>
        <div className={styles.grid}>
          <input value={initialFile} onChange={fileChange} type="file" accept="application/excel"/>
          <input value={validateFile} onChange={fileChange} type="file" accept="application/excel"/>
          <button onClick={} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
