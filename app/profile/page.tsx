"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Profile</h1>

      <p>Dr. Scholar Name</p>
      <p>Public Health | Interdisciplinary Research</p>

      <p className="text-yellow-600">
        Nyansapo Scholar – Community Knowledge Systems
      </p>

      <Link href="/">
        <span className="text-blue-600 cursor-pointer">
          ← Back to Home
        </span>
      </Link>

    </div>
  );
}