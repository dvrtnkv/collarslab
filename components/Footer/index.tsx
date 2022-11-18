import Link from "../Link";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box component="footer" textAlign="center" fontSize={12} padding={1}>
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
