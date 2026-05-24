"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="p-6 space-y-6">
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
      <h1 className="text-2xl font-bold">Profile</h1>

      <p>Dr. Scholar Name</p>
      <p>Public Health | Interdisciplinary Research</p>

      <p className="text-yellow-600">
        Nyansapo Scholar – Community Knowledge Systems
      </p>

      <Link href="/">
        <span className="text-blue-600 cursor-pointer">
          ← Back to Home
        </span>
      </Link>

    </div>
  );
}