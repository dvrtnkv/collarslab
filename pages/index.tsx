import * as React from "react";
import Layout from "../components/Layout";
import Link from "../components/Link";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const Home = () => {
  return (
    <Layout title="Cайт под ключ" desc="Разработка сайта под ключ">
      <Box textAlign="center">
        <Typography variant="h3" gutterBottom>
          Cайт под ключ бесплатно*
        </Typography>
        <Button
          variant="contained"
          component={Link}
          href="/contact"
          disableElevation
          sx={{ color: "#FFFFFF" }}
        >
          Заказать
        </Button>
      </Box>
      <Box
        sx={{
          my: 2,
          display: "grid",
          gap: 2,
          gridTemplateColumns: { sm: "repeat(2, 1fr)" },
        }}
      >
        <Card variant="outlined">
          <CardContent sx={{ p: 2, "&:last-child": { pb: 0 } }}>
            <Typography variant="h5" gutterBottom>
              Backend
            </Typography>
            <Typography variant="body1">
              Nginx, Nodejs, Express, JWT.
            </Typography>
            <Link href="/server">
              <CardActions>
                <Button size="small">Подробнее</Button>
              </CardActions>
            </Link>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent sx={{ p: 2, "&:last-child": { pb: 0 } }}>
            <Typography variant="h5" gutterBottom>
              Frontend
            </Typography>
            <Typography variant="body1">
              Next.js, React, Material UI.
            </Typography>
            <Link href="/client">
              <CardActions>
                <Button size="small">Подробнее</Button>
              </CardActions>
            </Link>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent sx={{ p: 2, "&:last-child": { pb: 0 } }}>
            <Typography variant="h5" gutterBottom>
              Выполнено
            </Typography>
            <Typography variant="body1">Будь первым в списке!</Typography>
            <Link href="https://collarslab.com/vcard">
              <CardActions>
                <Button size="small">Подробнее</Button>
              </CardActions>
            </Link>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent sx={{ p: 2, "&:last-child": { pb: 0 } }}>
            <Typography variant="h5" gutterBottom>
              Сопровождение
            </Typography>
            <Typography variant="body1">
              Регистрация домена, аренда сервера настройка UX.
            </Typography>
            <Link href="https://collarslab.com/">
              <CardActions>
                <Button size="small">Подробнее</Button>
              </CardActions>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
};
export default Home;
