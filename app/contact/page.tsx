"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [field, setField] = useState("");
  const [institution, setInstitution] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    // ✅ Get current user
    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user) {
      alert("User not logged in");
      return;
    }

    const userId = userData.user.id;

    // ✅ Update profile
    const { error } = await supabase
      .from("profiles")
      .update({
        name,
        field,
        institution,
        bio,
      })
      .eq("owner_id", userId);

    if (error) {
      console.error(error);
      alert("Failed to save profile");
    } else {
      alert("Profile saved!");
      router.push("/dashboard"); // ✅ go to dashboard
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl w-full space-y-4 border p-6 rounded-xl"
      >
        <h1 className="text-2xl font-bold">Complete Your Profile</h1>

        <input
          placeholder="Full Name"
          className="w-full border p-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Field of Research"
          className="w-full border p-3 rounded"
          value={field}
          onChange={(e) => setField(e.target.value)}
        />

        <input
          placeholder="Institution"
          className="w-full border p-3 rounded"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
        />

        <textarea
          placeholder="Short Bio"
          className="w-full border p-3 rounded"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-3 rounded w-full"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Profile"}
        </button>
      </form>
    </div>
  );
}