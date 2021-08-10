import Link from "next/link";

export function Header() {
  return (
    <header className="py-4 shadow-lg flex justify-center">
      <nav className="flex">
        <Link href="/" passHref>
          <div className="ml-4 cursor-pointer">Home</div>
        </Link>
        <Link href="/tag" passHref>
          <div className="ml-4 cursor-pointer">Tags</div>
        </Link>
        <Link href="/about" passHref>
          <div className="ml-4 cursor-pointer">About</div>
        </Link>
      </nav>
    </header>
  );
}
