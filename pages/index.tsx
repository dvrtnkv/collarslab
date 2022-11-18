import Layout from "../components/Layout";
import Link from "../components/Link";
import { useRouter } from "next/router";

const Home = () => {
  const { asPath } = useRouter();
  return (
    <Layout
      title="Разработка сайта под ключ"
      desc="Разработка сайта под ключ"
      asPath={asPath}
    >
      <h1>Разработка сайта под ключ</h1>
      <p>Бесплатно для первого клиента!</p>
      <Link href="/contact">Заполнить анкету</Link>
      <div>
        <Link href="/server">
          <h2>Разработка серверного кода &rarr;</h2>
          <p>Nginx, Nodejs, Express, JWT.</p>
        </Link>
        <Link href="/client">
          <h2>Клиентское приложение &rarr;</h2>
          <p>Next.js, React, Material UI.</p>
        </Link>
        <Link href="https://collarslab.com/vcard">
          <h2>Портфолио &rarr;</h2>
          <p>Будь первым в моём портфолио</p>
        </Link>
        <Link href="https://collarslab.com/">
          <h2>Весь путь от и до &rarr;</h2>
          <p>Регистрация домена, аренда сервера &rarr; настройка UX.</p>
        </Link>
      </div>
    </Layout>
  );
};
export default Home;
