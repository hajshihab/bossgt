"use client";

import { useState } from "react";

export default function AdminLogin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple check: username admin, password admin
    if (username === "admin" && password === "admin") {
      window.location.href = "/admin/dashboard";
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      <form onSubmit={handleSubmit} className="bg-[#1e293b] p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-[#38bdf8] text-center mb-2">Admin Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
          required
        />
        {error && <div className="text-red-500 text-center">{error}</div>}
        <button type="submit" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-8 py-3 rounded-full font-bold text-lg shadow-lg transition">Login</button>
      </form>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,2,.3,1) both;
        }
      `}</style>
    </div>
  );
}
