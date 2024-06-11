import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <a href="/blog">Blog</a>
      </div>
      <div>
        <Link href="/about">About us</Link>
      </div>
    </nav>
  );
}
