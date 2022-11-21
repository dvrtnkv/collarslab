import React, { ReactNode } from "react";
import Head from "next/head";
import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Paper } from "@mui/material";
import Footer from "../Footer";
import Link from "../Link";
import Nav from "../Nav";

type Props = {
  children?: ReactNode;
  title?: string;
  desc?: string;
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const Layout = ({
  children,
  title = "Collars Lab.",
  desc = "Collars Lab. App"
}: Props) => (
  <Box sx={{ flexGrow: 1 }}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={desc} />
      <link rel="canonical" href="https://collarslab.com/" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="start"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid item xs={12} margin={2}>
        {children}
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  </Box>
);

export default Layout;
