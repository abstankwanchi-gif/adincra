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
    
<svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="32" cy="32" r="16" fill="none" stroke="#C99700" strokeWidth="4" />
      <circle cx="32" cy="32" r="6" fill="#C99700" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="p-6 space-y-12 bg-white min-h-screen text-black">

      {/* NAVBAR */}
<nav className="flex items-center justify-between py-4 border-b">

  <Link href="/">
  <div className="flex items-center gap-2 cursor-pointer">
    <AdinkraheneIcon />
    <span className="font-bold text-lg tracking-wide">
      ADINCRA
    </span>
  </div>
</Link>

  <div className="flex gap-6 text-sm font-medium">
    <Link href="/"><span>Home</span></Link>
    <Link href="/profile"><span>Profile</span></Link>
    <Link href="/about"><span>About</span></Link>
    <Link href="/contact"><span>Support</span></Link>
  </div>

</nav>

      {/* HERO */}
      <section className="text-center space-y-6 py-12">
  <h1 className="text-5xl font-bold tracking-wide">
    ADINCRA
  </h1>

<div className="flex justify-center">
    <AdinkraheneIcon />
  </div>

<p className="max-w-xl mx-auto text-gray-700">
    African Diasporic and Interdisciplinary Network for Collaborative Research and Action — a platform connecting knowledge, community, and transformation.
  </p>
</section>
<Link href="/contact">
  <button
    className="px-5 py-2 rounded-xl text-white"
    style={{ backgroundColor: "#C99700" }}
  >
    Join ADINCRA
  </button>
</Link>

{/* MISSION */}
<section className="max-w-3xl mx-auto text-center py-12 space-y-6">
  <h2 className="text-2xl font-semibold">Our Mission</h2>

  <p className="text-gray-600">
    ADINCRA creates a space where knowledge systems rooted in African traditions
    and global scholarship meet to foster collaboration, reflection, and impactful research.
  </p>
</section>

{/* FEATURES / GRID */}
<section className="py-12">

  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <h3 className="font-semibold text-lg">Profiles</h3>
    <p className="text-gray-600">
      Connect with interdisciplinary scholars and practitioners.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <h3 className="font-semibold text-lg">Research</h3>
    <p className="text-gray-600">
      Share and explore collaborative research across fields.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <h3 className="font-semibold text-lg">Collaboration</h3>
    <p className="text-gray-600">
      Build partnerships grounded in collective knowledge.
    </p>
  </div>

</section>

      {/* SUPPORT CTA */}
      <section className="text-center py-12 space-y-6">
        <h2 className="text-2xl font-semibold">Support ADINCRA</h2>
        <p className="max-w-lg mx-auto text-gray-600">
          Join us as a donor, volunteer, or partner in building a global research network grounded in collaboration and knowledge.
        </p>
        <Link href="/contact">
          <button className="px-5 py-2 rounded-xl text-white"
  style={{ backgroundColor: "#C99700" }}>
  Get Involved
</button>
        </Link>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="max-w-xl mx-auto py-12 space-y-6">
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