"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
  const { data: userData } = await supabase.auth.getUser();

  if (!userData.user) {
    router.push("/login");
    return;
  }

  const user = userData.user;
  const userId = user.id;

  // ✅ Try to fetch profile
  let { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("owner_id", userId)
    .maybeSingle();

  if (error) {
    console.error("Fetch error:", error);
  }

  // ✅ If no profile → create one automatically
  if (!profile) {
    console.log("Creating new profile...");

    const { data: newProfile, error: insertError } = await supabase
      .from("profiles")
      .insert({
        owner_id: userId,
        name: user.email, // temporary
        field: "",
        institution: "",
        bio: "",
      })
      .select()
      .single();

    if (insertError) {
      console.error("Insert error:", insertError);
      return;
    }

    profile = newProfile;
  }

  setProfile(profile);
  setLoading(false);
}

  return (    
<>
    <Navbar />

    <div className="min-h-screen p-6 space-y-6">
      <h1 className="text-3xl font-bold">User Dashboard</h1>

      {loading && <p>Loading profile...</p>}

      {!loading && !profile && (
        <p>No profile found. Please contact admin or create one.</p>
      )}

      {!loading && profile && (
        <div className="p-5 border rounded-xl space-y-3">
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p><strong>Field:</strong> {profile.field}</p>
          <p><strong>Institution:</strong> {profile.institution}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>
        </div>      
      )}
    </div>
    </>
  );
}