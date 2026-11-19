"use client";

import Link from "next/link";
import AdinkraheneIcon from "./AdinkraheneIcon";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 border-b">

      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <AdinkraheneIcon />
        <span className="font-bold text-base md:text-lg tracking-wide">
          ADINCRA
        </span>
      </Link>

      <div className="flex gap-4 text-sm font-semibold">
        <Link href="/profiles">
    <span>Directory</span>
  </Link>

  <Link href="/about">
    <span>About</span>
  </Link>

  <Link href="/login">
    <span>Sign In</span>
  </Link>

  <Link href="/signup">
    <span>Join</span>
  </Link>
</div>
    </nav>
  );
}