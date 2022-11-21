import Link from "../Link";
import { Box, Divider } from "@mui/material";

export default function Footer() {
  const dateY = new Date().getFullYear();
  return (
    <>
      <Divider />
      &copy; collarslab.com, 2020
      {2020 != dateY && " - " + dateY}{" | "}
      <Link
        href="https://github.com/dvrtnkv"
        target="_blank"
        rel="norefferer nofollow"
      >
        Github
      </Link>
    </>
  );
}
