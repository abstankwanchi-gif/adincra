"use client";

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

  return (
    <div className="max-w-xl mx-auto py-12 space-y-6">

      <h1 className="text-3xl font-bold text-center">
        Join ADINCRA
      </h1>

      <p className="text-center text-gray-700">
        Submit your academic or professional profile to become part of the ADINCRA research network.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        {/* Field */}
        <input
          type="text"
          name="field"
          placeholder="Field of Work / Study"
          value={form.field}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        {/* Institution */}
        <input
          type="text"
          name="institution"
          placeholder="Institutional Affiliation"
          value={form.institution}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        {/* Publications */}
        <textarea
          name="publications"
          placeholder="Publications / Projects (list or describe)"
          value={form.publications}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          rows={3}
        />

        {/* Bio */}
        <textarea
          name="bio"
          placeholder="Research Interests / Short Bio"
          value={form.bio}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          rows={4}
          required
        />

        {/* Profile Image (URL for now) */}
        <input
          type="text"
          name="image"
          placeholder="Profile Image URL (optional)"
          value={form.image}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full px-6 py-2 rounded-xl text-white font-medium hover:opacity-90 transition"
          style={{ backgroundColor: "#C99700" }}
        >
          Submit Profile
        </button>

      </form>

    </div>
  );
}