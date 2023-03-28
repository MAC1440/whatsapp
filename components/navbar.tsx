import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-3 justify-center gap-10 font-medium w-100 ">
        <li className="cursor-pointer">
          <Link href="/"> Home🏠</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/contact-us"> Call me 🤙</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/about-us">About Us 👥</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/among-us">Among Us 🛸</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/api/hello">API ⚙</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
