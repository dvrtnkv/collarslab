import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Разработка сайта под ключ</title>
        <meta name="description" content="Collars Lab. App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Разработка сайта под ключ</h1>

        <p className={styles.description}>Бесплатно для первого клиента!</p>
        <button className={styles.button} type="button">
          Заполнить анкету
        </button>
        <div className={styles.grid}>
          <a href="https://collarslab.com/server" className={styles.card}>
            <h2>Разработка серверного кода &rarr;</h2>
            <p>Nginx, Nodejs, Express, JWT.</p>
          </a>

          <a href="https://collarslab.com/client" className={styles.card}>
            <h2>Клиентское приложение &rarr;</h2>
            <p>Next.js, React, Material UI.</p>
          </a>

          <a href="https://collarslab.com/vcard" className={styles.card}>
            <h2>Портфолио &rarr;</h2>
            <p>Будь первым в моём портфолио</p>
          </a>

          <a href="https://collarslab.com/" className={styles.card}>
            <h2>Весь путь от и до &rarr;</h2>
            <p>Регистрация домена, аренда сервера &rarr; настройка UX.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/dvrtnkv">&copy; collarslab on github</a>
      </footer>
    </div>
  );
}
