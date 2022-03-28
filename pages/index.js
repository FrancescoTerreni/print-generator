import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Components & Friends.
import PrintContainer from "../components/PrintContainer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Print Generator</title>
        <meta name="description" content="Print Generator by PuntoWeb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Print Generator</h1>
        <PrintContainer />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>PuntoWeb</b>
        </a>
      </footer>
    </div>
  );
}
