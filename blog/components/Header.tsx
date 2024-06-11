import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <div>
      <a href="/"> Home</a>
      </div>
      <div>
        <Link href="/">Blog</Link>
      </div>
      <div>
        <a href="/about">About us</a>
      </div>
    </nav>
  );
}
