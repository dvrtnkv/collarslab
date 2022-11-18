import React from "react";
import { Button, Box, TextField, Input } from "@mui/material";
import Head from "next/head";
import Link from "../components/Link";
import Layout from "../components/Layout";

export default function Form() {
  const [value, setValue] = React.useState("Сообщение");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Layout title="Обратная связь | Collars Lab." desc="Форма обратной связи">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        textAlign="center"
      >
        <TextField
          id="standard-basic"
          label="Имя"
          variant="standard"
          autoFocus
        />
        <br />
        <TextField
          id="standard-multiline-flexible"
          label="Сообщение"
          multiline
          maxRows={10}
          placeholder={value}
          onChange={handleChange}
          variant="standard"
        />
        <br />
        <Button variant="contained" type="submit">
          Отправить
        </Button>
      </Box>
    </Layout>
  );
}
