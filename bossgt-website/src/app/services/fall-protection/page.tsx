"use client";
import Image from "next/image";

export default function FallProtection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8]">Fall Protection</h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 text-center">Harnesses, lanyards, and fall arrest systems for working at heights. Certified solutions for maximum safety.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Harnesses" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Harnesses</span>
          <p className="text-gray-300 mt-2 text-center">Full body and work positioning harnesses.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Standard: EN 361, EN 358</li>
            <li>Attachment points: dorsal, sternal, lateral</li>
            <li>Sizes: Universal, XL</li>
            <li>Adjustable straps, quick-release buckles</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Lanyards" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Lanyards</span>
          <p className="text-gray-300 mt-2 text-center">Shock-absorbing and adjustable lanyards.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Standard: EN 354, EN 355</li>
            <li>Types: single, double, adjustable</li>
            <li>Length: 1.5m - 2m</li>
            <li>Shock absorber, steel hooks</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Fall Arrest" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Fall Arrest Systems</span>
          <p className="text-gray-300 mt-2 text-center">Complete fall protection kits and accessories.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Kit: harness, lanyard, bag</li>
            <li>Accessories: anchor points, connectors</li>
            <li>Standard: EN 363</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
      </div>
    </div>
  );
}
