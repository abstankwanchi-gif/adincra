"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSignup(e: any) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "https://adincra.app/auth/callback",
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email to confirm signup!");
    }
  }

  return (
    <form onSubmit={handleSignup} className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Join ADINCRA</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full"
      />

      <button className="bg-black text-white px-4 py-2">
        Sign Up
      </button>
    </form>
  );
}