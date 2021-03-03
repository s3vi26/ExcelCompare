import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Home() {
  const [fileA, setFileA] = useState('');
  const [fileB, setFileB] = useState('');
  const [fileAname, setFileAname] = useState('');
  const [fileBname, setFileBname] = useState('');

  const handleFileAInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      console.log(file.name);
      setFileA(file)
      setFileAname(file.name);
    } else 'No file selected'
  };

  const handleFileBInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      console.log(file.name);
      setFileB(file);
      setFileBname(file.name);
    } else 'No file selected'
  };

  const submit = (e) => {
    e.preventDefault();
    const res = axios({
      method: 'POST',
      url:'http://localhost:5000/upload',
      files: {
        fileA,
        fileB
      }
    })
    console.log(res);
  };

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
          <form encType='multipart/form-data'>
            <input type="file" onChange={handleFileAInput} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
            <input type="file" onChange={handleFileBInput} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
            <button onClick={submit}>Compare</button>
          </form>
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
