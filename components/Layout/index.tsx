import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "../Link";
import Nav from "../Nav";
import Footer from "../Footer";
import { Box, Container, Grid } from "@mui/material";

type Props = {
  children?: ReactNode;
  title?: string;
  desc?: string;
  asPath?: string;
};

const Layout = ({
  children,
  title = "Collars Lab.",
  desc = "Collars Lab. App",
  asPath = "/",
}: Props) => (
  <Box sx={{ width: "100%" }}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={desc} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Grid container rowSpacing={0} columnSpacing={0}>
      <Grid xs={12}>
        <Nav asPath={asPath} />
      </Grid>
      <Grid xs={8}>{children}</Grid>
      <Grid xs={12}>
        <Footer />
      </Grid>
    </Grid>
  </Box>
);

export default Layout;
