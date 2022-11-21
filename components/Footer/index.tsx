import Link from "../Link";

export default function Footer() {
  const dateY = new Date().getFullYear();
  return (
    <>
      &copy; collarslab.com, 2020
      {2020 != dateY && " - " + dateY}
      {" | "}
      <Link
        href="https://github.com/dvrtnkv"
        target="_blank"
        rel="norefferer nofollow"
      >
        github/dvrtnkv
      </Link>
    </>
  );
}
