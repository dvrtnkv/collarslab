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
        <Typography variant="h1">Веб-разработка</Typography>
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
            <Typography variant="h3" gutterBottom>
              Визитка
            </Typography>
            <Typography variant="body1">
              Эффектная презентация компании с конверсией в приток клиентов
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h3" gutterBottom>
              Блог
            </Typography>
            <Typography variant="body1">
              Размещение цифрового контента
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h3" gutterBottom>
              Интернет-магазин
            </Typography>
            <Typography variant="body1">
              Товары и услуги с возможностью оплаты онлайн
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h3" gutterBottom>
              Портал
            </Typography>
            <Typography variant="body1">
              Работа с базой данных, персонализированные личные кабинеты с
              уникальным наборов функций
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
};
export default Home;
