"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    async function handleSession() {
      console.log("Checking session...");

      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Session error:", error);
      }

      if (data.session) {
        console.log("User session found ✅");
        router.push("/contact"); // ✅ go to profile setup
      } else {
        console.log("No session ❌");
      }
    }

    handleSession();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Signing you in...</p>
    </div>
  );
}