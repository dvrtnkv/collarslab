import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid
} from "@mui/material";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "../components/Link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <Layout title="Cайт под ключ" desc="Разработка сайта под ключ">
      <Box textAlign="center">
        <Typography variant="h1" gutterBottom>
          Веб-разработка
        </Typography>
        <Box className={styles.landing_list}>
          <Link
            href="https://t.me/dvrtnkv"
            target="_blank"
            rel="norefferer nofollow"
          >
            <Image
              src="/icons/telegram_icon.svg"
              width={24}
              height={24}
              alt="telegram icon"
              loading="eager"
              layout="fixed"
            />
            t.me/dvrtnkv
          </Link>
          <Link
            href="https://t.me/collarslab"
            target="_blank"
            rel="norefferer nofollow"
          >
            <Image
              src="/icons/favicon-32x32.png"
              width={24}
              height={24}
              alt="telegram channel collars lab. icon"
              loading="eager"
              layout="fixed"
            />
            t.me/collarslab
          </Link>
          <Link
            href="mailto:dv@collarslab.com"
            target="_blank"
            rel="norefferer nofollow"
          >
            <Image
              src="/icons/email.png"
              width={24}
              height={24}
              alt="email icon"
              loading="eager"
              layout="fixed"
            />
            EMAIL
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          my: 2,
          display: "grid",
          gap: 2,
          gridTemplateColumns: { sm: "repeat(2, 1fr)" }
        }}
      >
        <Card variant="outlined">
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h2" gutterBottom>
              Backend
            </Typography>
            <Typography variant="body1">
              Nginx HTTP/3, Lets Encrypt Certificate, Nodejs, Express, JWT
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h2" gutterBottom>
              Frontend
            </Typography>
            <Typography variant="body1">Next.js, React</Typography>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h2" gutterBottom>
              Выполнено
            </Typography>
            <Typography variant="body1">Будь первым в списке!</Typography>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h2" gutterBottom>
              От А до Я
            </Typography>
            <Typography variant="body1">
              Регистрация домена, аренда сервера настройка UX.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
};
export default Home;
