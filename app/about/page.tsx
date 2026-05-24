"use client";

import Link from "next/link";

export default function AboutPage() {
  return (    
        <div className="p-6 space-y-6 max-w-3xl mx-auto">
            {/* NAVBAR */}
{/* NAVBAR */}
<nav className="flex items-center justify-between py-4 border-b">

  <Link href="/">
    <span className="font-bold text-lg cursor-pointer">
      ADINCRA
    </span>
  </Link>

  <div className="flex gap-6 text-sm font-medium">
    <Link href="/"><span>Home</span></Link>
    <Link href="/profile"><span>Profile</span></Link>
    <Link href="/about"><span>About</span></Link>
    <Link href="/contact"><span>Support</span></Link>
  </div>

</nav>
      <h1 className="text-3xl font-bold">About ADINCRA</h1>

      <p>
        ADINCRA is a research and collaboration platform rooted in African
        symbolic knowledge systems.
      </p>

      <p>
        The platform connects scholars, professionals, and communities to
        foster interdisciplinary research and meaningful action across the
        African Diaspora.
      </p>

      <p>
        Guided by Adinkra philosophy, ADINCRA integrates knowledge, reflection,
        and collaboration into a unified digital environment.
      </p>

      <Link href="/">
        <span className="text-blue-600 cursor-pointer">
          ← Back to Home
        </span>
      </Link>

    </div>
  );
}
