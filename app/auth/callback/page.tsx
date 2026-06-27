"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    // Let Supabase automatically detect session from URL hash
    setTimeout(() => {
      router.push("/contact");
    }, 500);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Signing you in...</p>
    </div>
  );
}