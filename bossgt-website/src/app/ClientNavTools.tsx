"use client";
import { useState } from "react";

export default function ClientNavTools() {
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(true);
  return (
    <div className="flex items-center gap-4 ml-8">
      <form className="flex items-center gap-2" onSubmit={e => { e.preventDefault(); window.location.href = `/services?search=${encodeURIComponent(query)}`; }}>
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded bg-[#222] text-white placeholder-gray-400 focus:outline-none text-sm"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit" className="bg-[#38bdf8] text-[#0f172a] px-3 py-1 rounded font-semibold text-sm">Go</button>
      </form>
      <button
        aria-label="Toggle dark mode"
        className="ml-4 px-2 py-1 rounded bg-[#222] text-white hover:bg-[#38bdf8] hover:text-[#0f172a] transition"
        onClick={() => {
          setDark(!dark);
          if (typeof document !== "undefined") {
            document.documentElement.classList.toggle("dark", !dark);
          }
        }}
      >
        {dark ? "🌙" : "☀️"}
      </button>
    </div>
  );
}