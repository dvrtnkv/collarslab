import Link from "../Link";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box textAlign="right" fontSize={12} >
      &copy; collarslab on{" "}
      <Link
        href="https://github.com/dvrtnkv"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </Link>
    </Box>
  );
}
