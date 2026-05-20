"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const COLORS = {
  gold: "#C99700",
  green: "#2FAF5A",
  red: "#D63A2F",
};

function AdinkraheneIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-8 h-8">
      <circle cx="32" cy="32" r="16" fill="none" stroke={COLORS.gold} strokeWidth="4" />
      <circle cx="32" cy="32" r="6" fill={COLORS.gold} />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="p-6 space-y-12 bg-white min-h-screen text-black">

      {/* NAVBAR */}
<nav className="flex items-center justify-between pb-4 border-b">
  <Link href="/">
    <div className="flex items-center gap-2 cursor-pointer">
      <span className="font-bold text-lg">ADINCRA</span>
    </div>
  </Link>

  <div className="flex gap-6 text-sm font-medium">
    <Link href="/">
      <span className="cursor-pointer">Home</span>
    </Link>

    <Link href="/profile">
      <span className="cursor-pointer">Profile</span>
    </Link>

    <Link href="/about">
      <span className="cursor-pointer">About</span>
    </Link>

    <Link href="/contact">
      <span className="cursor-pointer">Support</span>
    </Link>
  </div>
</nav>

      {/* HERO */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">ADINCRA</h1>
        <p className="max-w-xl mx-auto">
          African Diasporic and Interdisciplinary Network for Collaborative Research and Action.
        </p>
      </section>

      {/* SUPPORT CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Support ADINCRA</h2>
        <p className="max-w-lg mx-auto text-gray-600">
          Join us as a donor, volunteer, or partner in building a global research network grounded in collaboration and knowledge.
        </p>
        <Link href="/contact">
          <button className="px-4 py-2 border" style={{ borderColor: COLORS.gold, color: COLORS.gold }}>
            Get Involved
          </button>
        </Link>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="max-w-xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
        <form className="space-y-3">
          <input className="w-full border p-2" placeholder="Name" />
          <input className="w-full border p-2" placeholder="Email" />
          <textarea className="w-full border p-2" placeholder="Message" />
          <button className="px-4 py-2" style={{ backgroundColor: COLORS.gold, color: "white" }}>
            Send Message
          </button>
        </form>
      </section>

    </div>
  );
}