"use client";

import AdinkraheneIcon from "../components/AdinkraheneIcon";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    field: "",
    institution: "",
    publications: "",
    bio: "",
    image: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("Submitted profile:", form);

    alert("Profile submitted for review!");

    setForm({
      name: "",
      field: "",
      institution: "",
      publications: "",
      bio: "",
      image: "",
    });
  }

  <nav className="flex items-center justify-between py-4 border-b">

  <Link href="/" className="flex items-center gap-2 cursor-pointer">
      <AdinkraheneIcon />
      <span className="font-bold text-lg tracking-wide">
        ADINCRA
      </span>
  </Link>

  <div className="flex gap-4 text-sm font-medium">
    <Link href="/profile"><span>Profile</span></Link>
    <Link href="/about"><span>About</span></Link>
    <Link href="/contact"><span>Support</span></Link>
  </div>

</nav>

  return (
  <div className="p-6 space-y-12 bg-white min-h-screen text-black">

    {/* NAVBAR */}
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
      </div>

    </nav>

    {/* PAGE CONTENT */}
    <div className="max-w-xl mx-auto space-y-6">

      <h1 className="text-3xl font-bold text-center">
        Join ADINCRA
      </h1>

      <p className="text-center text-gray-700">
        Submit your academic or professional profile to become part of the ADINCRA research network.
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        <input
          type="text"
          name="field"
          placeholder="Field of Work / Study"
          value={form.field}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        <input
          type="text"
          name="institution"
          placeholder="Institutional Affiliation"
          value={form.institution}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        <textarea
          name="publications"
          placeholder="Publications / Projects"
          value={form.publications}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          rows={3}
        />

        <textarea
          name="bio"
          placeholder="Research Interests / Bio"
          value={form.bio}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          rows={4}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Profile Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full px-6 py-2 rounded-xl text-white font-medium hover:opacity-90 transition"
          style={{ backgroundColor: "#C99700" }}
        >
          Submit Profile
        </button>

      </form>

    </div>

  </div>
);
}