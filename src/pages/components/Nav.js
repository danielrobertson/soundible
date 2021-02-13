import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <ul className="ml-4 mt-5">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/account">
          <a>Account</a>
        </Link>
      </li>
      <li>
        <Link href="/browse">
          <a>Browse</a>
        </Link>
      </li>
    </ul>
  );
}
