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
<svg viewBox="0 0 64 64" className="w-12 h-12">
      <circle cx="32" cy="32" r="18" fill="none" stroke="#C99700" strokeWidth="3" />
      <circle cx="32" cy="32" r="10" fill="none" stroke="#C99700" strokeWidth="3" />
      <circle cx="32" cy="32" r="4" fill="#C99700" />
</svg>
  );
}

function NyansapoIcon() {
  return (    
<svg viewBox="0 0 64 64" className="w-10 h-10">
      <rect x="16" y="16" width="32" height="32" fill="none" stroke="#C99700" strokeWidth="3" />
      <line x1="32" y1="16" x2="32" y2="48" stroke="#C99700" strokeWidth="3" />
      <line x1="16" y1="32" x2="48" y2="32" stroke="#C99700" strokeWidth="3" />
      <circle cx="32" cy="32" r="4" fill="#C99700" />
    </svg>
  );
}

function SankofaIcon() {
  return (  
<svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M20 36 C20 20 44 20 44 36 C44 48 30 50 30 50" 
            fill="none" stroke="#C99700" strokeWidth="3" />
      <circle cx="44" cy="20" r="5" fill="#C99700" />
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

  <div className="flex gap-4 text-sm font-medium">
    <Link href="/profile"><span>Profile</span></Link>
    <Link href="/about"><span>About</span></Link>
    <Link href="/contact"><span>Support</span></Link>
  </div>

</nav>

      {/* HERO */}
      <section className="text-center space-y-6 py-12">
  <h1 className="text-5xl font-bold tracking-wider">
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
  
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="px-6 py-2 rounded-xl text-white font-medium hover:opacity-90 transition"
  style={{ backgroundColor: "#C99700" }}>
    Join ADINCRA
  </motion.button>
</Link>

{/* MISSION */}
<section className="max-w-3xl mx-auto text-center py-12 space-y-6">
<motion.section
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="max-w-3xl mx-auto text-center py-12 space-y-6"
>
</motion.section>

  <div className="flex justify-center mb-4">
  <SankofaIcon />
</div>
  <h2 className="text-2xl font-semibold tracking-wide text-[#C99700]">
  Our Mission
</h2>
  <p className="text-gray-700 leading-relaxed">
    ADINCRA creates a space where knowledge systems rooted in African traditions
    and global scholarship meet to foster collaboration, reflection, and impactful research.
  </p>
</section>

{/* FEATURES / GRID */}
<section className="py-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
</div>
  
<motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="p-5 border rounded-2xl shadow-sm hover:shadow-md hover:border-yellow-600 transition"
>

  <div className="flex justify-center mb-4">
    <NyansapoIcon />
  </div>

  <h3 className="font-semibold text-lg text-center">
    Profiles
  </h3>

  <p className="text-gray-700 leading-relaxed text-center">
    Connect with interdisciplinary scholars and practitioners.
  </p>

</motion.div>

 <motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="p-5 border rounded-2xl shadow-sm hover:shadow-md hover:border-yellow-600 transition"
>

  <div className="flex justify-center mb-4">
    <NyansapoIcon />
  </div>

  <h3 className="font-semibold text-lg text-center">
    Research
  </h3>

  <p className="text-gray-700 leading-relaxed text-center">
    Share and explore collaborative research across disciplines.
  </p>

</motion.div>

<motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="p-5 border rounded-2xl shadow-sm hover:shadow-md hover:border-yellow-600 transition"
>

  <div className="flex justify-center mb-4">
    <NyansapoIcon />
  </div>

  <h3 className="font-semibold text-lg text-center">
    Collaboration
  </h3>

  <p className="text-gray-700 leading-relaxed text-center">
    Build partnerships grounded in collective knowledge.
  </p>

</motion.div>

</section>

      {/* SUPPORT CTA */}
      
<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center py-12 space-y-6"
>
</motion.section>
        <h2 className="text-2xl font-semibold">Support ADINCRA</h2>
        <p className="max-w-lg mx-auto text-gray-700 leading-relaxed">
          Join us as a donor, volunteer, or partner in building a global research network grounded in collaboration and knowledge.
        </p>
        <Link href="/contact">
          
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="px-6 py-2 rounded-xl text-white font-medium hover:opacity-90 transition"
  style={{ backgroundColor: "#C99700" }}>
  Get Involved
</motion.button>
        </Link>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="max-w-xl mx-auto py-12 space-y-6">
        <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
        <form className="space-y-3">
          <input className="w-full border p-2" placeholder="Name" />
          <input className="w-full border p-2" placeholder="Email" />
          <textarea className="w-full border p-2" placeholder="Message" />
          <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="px-6 py-2 rounded-xl text-white font-medium hover:opacity-90 transition"
  style={{ backgroundColor: "#C99700" }}>
            Send Message
          </motion.button>
        </form>
      </section>

    </div>
  );
}