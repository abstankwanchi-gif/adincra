"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function InvitePage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const router = useRouter();

  async function handleInvite() {
  const res = await fetch("/api/invite", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, role }),
  });

  let data = null;

try {
  data = await res.json();
} catch (err) {
  // ✅ handle empty response
  data = null;
}

  if (!res.ok) {
  console.error("FULL ERROR:", data);
  alert(data?.error || "Error inviting user");
}
 else {
    alert("User invited successfully");
    setEmail("");
    setRole("user");
  }
}

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">

      <h1 className="text-2xl font-bold">Invite User</h1>

      <input
        type="email"
        placeholder="User email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button
        onClick={handleInvite}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Invite User
      </button>

      <button
        onClick={() => router.push("/admin")}
        className="px-4 py-2 border rounded"
      >
        Back to Admin
      </button>

    </div>
  );
}