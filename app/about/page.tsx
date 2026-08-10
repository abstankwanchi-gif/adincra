"use client";

import Link from "next/link";

export default function AboutPage() {
  return (    
        <div className="p-6 space-y-6 max-w-3xl mx-auto">
            {/* NAVBAR */}

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
