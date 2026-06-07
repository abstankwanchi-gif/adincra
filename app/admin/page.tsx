"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
  checkUser();
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

  async function checkUser() {
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    router.push("/login");
  } else {
    getPendingProfiles();
  }
}
  async function approveProfile(id: number) {
  console.log("Attempting to approve ID:", id);

  const { data, error } = await supabase
    .from("profiles")
    .update({ status: "approved" })
    .eq("id", id)
    .select();  // ✅ IMPORTANT ADD

  console.log("Update result:", data);
  console.log("Update error:", error);

  if (error) {
    alert("Error approving profile");
  } else if (!data || data.length === 0) {
    alert("No rows updated—check ID!");
  } else {
    alert("Profile approved!");
    getPendingProfiles();
  }
}

  async function rejectProfile(id: number) {
  console.log("Rejecting ID:", id);

  const { error } = await supabase
    .from("profiles")
    .update({ status: "rejected" })
    .eq("id", id);

  if (error) {
    console.error(error);
    alert("Error rejecting profile");
  } else {
    alert("Profile rejected");
    getPendingProfiles();
  }
}

async function deleteProfile(id: number) {
  console.log("Deleting ID:", id);

  const confirmDelete = confirm("Are you sure you want to delete this profile?");
  if (!confirmDelete) return;

  const { error } = await supabase
    .from("profiles")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    alert("Error deleting profile");
  } else {
    alert("Profile deleted successfully");
    getPendingProfiles(); // refresh list
  }
}

async function handleLogout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
  }

  router.push("/login");
}

return (
  <div className="p-6 space-y-12 bg-white min-h-screen text-black">

    <Navbar />

    <div className="flex justify-end">
  <button
    onClick={handleLogout}
    className="px-4 py-2 bg-black text-white rounded"
  >
    Logout
  </button>
</div>

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
        profiles.map((profile: any) => {
          console.log("Profile ID:", profile.id);

          return (
            <div
              key={`${profile.id}-${Math.random()}`}
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

              <div className="flex gap-3 mt-3">

  <button
    onClick={() => approveProfile(profile.id)}
    className="px-4 py-2 rounded-lg text-white"
    style={{ backgroundColor: "#2FAF5A" }}
  >
    Approve
  </button>

  <button
    onClick={() => rejectProfile(profile.id)}
    className="px-4 py-2 rounded-lg text-white"
    style={{ backgroundColor: "#D64545" }}
  >
    Reject
  </button>

  <button
    onClick={() => deleteProfile(profile.id)}
    className="px-4 py-2 rounded-lg text-white"
    style={{ backgroundColor: "#555555" }}
  >
    Delete
  </button>

</div>
            </div>
          );
        })
      )}

    </div>

  </div>
);
}