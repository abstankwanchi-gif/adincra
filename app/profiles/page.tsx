"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Navbar from "../components/Navbar";

export default function ProfilesPage() {
  const [selectedField, setSelectedField] = useState("");
const [selectedInstitution, setSelectedInstitution] = useState("");
const [profiles, setProfiles] = useState<any[]>([]);
const [searchTerm, setSearchTerm] = useState("");
const fields = [...new Set(profiles.map((p: any) => p.field))];
const institutions = [...new Set(profiles.map((p: any) => p.institution))];

  useEffect(() => {
    getProfiles();
  }, []);

  async function getProfiles() {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("status", "approved");

    if (error) {
      console.error(error);
    } else {
      setProfiles(data);
    }
  }

  return (
    <div className="p-6 space-y-12 bg-white min-h-screen text-black">

      <Navbar />

      <h1 className="text-3xl font-bold text-center">
        ADINCRA Research Network
      </h1>

      <div className="flex flex-col md:flex-row gap-3 justify-center mt-4">

  {/* 🔍 Search box */}
  <input
    type="text"
    placeholder="Search by name, field, or institution..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full max-w-md border p-2 rounded"
  />

  {/* 🎓 Field dropdown */}
  <select
    value={selectedField}
    onChange={(e) => setSelectedField(e.target.value)}
    className="border p-2 rounded"
  >
    <option value="">All Fields</option>
    {fields.map((field, i) => (
      <option key={i} value={field}>
        {field}
      </option>
    ))}
  </select>

  {/* 🏛️ Institution dropdown */}
  <select
    value={selectedInstitution}
    onChange={(e) => setSelectedInstitution(e.target.value)}
    className="border p-2 rounded"
  >
    <option value="">All Institutions</option>
    {institutions.map((inst, i) => (
      <option key={i} value={inst}>
        {inst}
      </option>
    ))}
  </select>

</div>

      <p className="text-center text-gray-700">
        Explore approved scholars and researchers within the ADINCRA network.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {profiles
  .filter((profile: any) => {
    const term = searchTerm.toLowerCase();

    const matchesSearch =
      profile.name?.toLowerCase().includes(term) ||
      profile.field?.toLowerCase().includes(term) ||
      profile.institution?.toLowerCase().includes(term);

    const matchesField =
      selectedField === "" || profile.field === selectedField;

    const matchesInstitution =
      selectedInstitution === "" || profile.institution === selectedInstitution;

    return matchesSearch && matchesField && matchesInstitution;
  })
  .map((profile: any, index: number) => (

          <div
            key={index}
            className="p-5 border rounded-2xl shadow-sm hover:shadow-md transition space-y-3"
          >
            <h2 className="text-xl font-semibold">
              {profile.name}
            </h2>

            <p className="text-sm text-gray-600">
              {profile.field}
            </p>

            <p className="text-sm">
              <strong>Institution:</strong> {profile.institution}
            </p>

            <p className="text-sm">
              <strong>Research:</strong> {profile.bio}
            </p>

            {profile.publications && (
              <p className="text-sm">
                <strong>Publications:</strong> {profile.publications}
              </p>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}