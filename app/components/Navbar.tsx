"use client";

import Link from "next/link";
import AdinkraheneIcon from "./AdinkraheneIcon";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 border-b">

      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <AdinkraheneIcon />
        <span className="font-bold text-lg tracking-wide">
          ADINCRA
        </span>
      </Link>

      <div className="flex gap-4 text-sm font-medium">
        <Link href="/"><span>Home</span></Link>
        <Link href="/profile"><span>Profile</span></Link>
        <Link href="/about"><span>About</span></Link>
        <Link href="/contact"><span>Support</span></Link>
      </div>

    </nav>
  );
}