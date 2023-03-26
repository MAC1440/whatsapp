import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en" className="p-4">
      <Head />
      <body>
        <main>
          <nav>
            <ul className="flex space-x-3">
              <li className="cursor-pointer">
                <Link href={"/"}> Home🏠</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"/contact-us"}> Call me 🤙</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"/about-us"}>About Us 👥</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"/among-us"}>Among Us 🛸</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"/api/hello"}>API ⚙</Link>
              </li>
            </ul>
          </nav>
        </main>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
