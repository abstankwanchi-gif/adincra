"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Navbar from "../components/Navbar";

export default function AdminPage() {
  const [profiles, setProfiles] = useState<any[]>([]);

  useEffect(() => {
    getPendingProfiles();
  }, []);

  async function getPendingProfiles() {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("status", "pending");

    if (error) {
      console.error(error);
    } else {
      setProfiles(data);
    }
  }

  async function approveProfile(id: number) {
    const { error } = await supabase
      .from("profiles")
      .update({ status: "approved" })
      .eq("id", id);

    if (error) {
      console.error(error);
    } else {
      alert("Profile approved!");
      getPendingProfiles(); // refresh list
    }
  }

  return (
    <div className="p-6 space-y-12 bg-white min-h-screen text-black">

      <Navbar />

      <h1 className="text-3xl font-bold text-center">
        Moderation Dashboard
      </h1>

      <p className="text-center text-gray-700">
        Review and approve submitted profiles.
      </p>

      <div className="max-w-4xl mx-auto space-y-4">

        {profiles.length === 0 ? (
          <p className="text-center text-gray-500">
            No pending profiles.
          </p>
        ) : (
          profiles.map((profile: any) => (
            <div
              key={profile.id}
              className="p-5 border rounded-xl shadow-sm space-y-3"
            >
              <h2 className="text-lg font-semibold">
                {profile.name}
              </h2>

              <p>
                <strong>Field:</strong> {profile.field}
              </p>

              <p>
                <strong>Institution:</strong> {profile.institution}
              </p>

              <p>
                <strong>Bio:</strong> {profile.bio}
              </p>

              <button
                onClick={() => approveProfile(profile.id)}
                className="px-4 py-2 rounded-lg text-white"
                style={{ backgroundColor: "#2FAF5A" }}
              >
                Approve
              </button>

            </div>
          ))
        )}

      </div>

    </div>
  );
}