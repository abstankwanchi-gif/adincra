"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login error:", error);
      alert(error.message);
      return;
    }

    alert("Login successful");

    const { data: userData } = await supabase.auth.getUser();

    console.log("Authenticated user:", userData.user);

    const { data: userRole, error: roleError } = await supabase
      .from("users")
      .select("role")
      .eq("id", userData.user?.id)
      .single();

    if (roleError) {
      console.error(roleError);
      alert("Unable to determine user role.");
      return;
    }

    if (userRole.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/dashboard");
    }
  }

  async function handleForgotPassword() {
    if (!email) {
      alert("Please enter your email address first.");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/reset-password",
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Password reset link sent. Check your email.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">
        Login to ADINCRA
      </h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Login
      </button>

      <button
        onClick={handleForgotPassword}
        className="text-sm text-blue-600 hover:underline"
      >
        Forgot Password?
      </button>
    </div>
  );
}