"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
        <div className="p-6 space-y-6 max-w-xl mx-auto">
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
      <h1 className="text-3xl font-bold">Contact & Support</h1>

      <p className="text-gray-600">
        If you would like to support ADINCRA as a donor, volunteer, or partner,
        please use the form below.
      </p>

      <form className="space-y-3">
        <input
          className="w-full border p-2"
          placeholder="Name"
        />

        <input
          className="w-full border p-2"
          placeholder="Email"
        />

        <textarea
          className="w-full border p-2"
          placeholder="How would you like to support ADINCRA?"
        />

        <button className="px-5 py-2 rounded-xl text-white bg-black">
  Submit Inquiry
</button>
      </form>

        <Link href="/">
  <span className="text-blue-600 cursor-pointer">
    ← Back to Home
  </span>
</Link>

    </div>
  );
}