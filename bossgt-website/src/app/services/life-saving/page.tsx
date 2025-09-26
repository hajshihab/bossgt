"use client";
import Image from "next/image";

export default function LifeSaving() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8]">Life Saving Equipment</h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 text-center">Rescue equipment, emergency kits, and life jackets for industrial and marine safety.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Rescue Equipment" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Rescue Equipment</span>
          <p className="text-gray-300 mt-2 text-center">For emergency and industrial rescue operations.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Types: stretchers, tripods, winches</li>
            <li>Standard: EN 1497, EN 341</li>
            <li>For confined space, height rescue</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Life Jackets" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Life Jackets</span>
          <p className="text-gray-300 mt-2 text-center">Certified jackets for marine and industrial use.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Standard: EN ISO 12402</li>
            <li>Buoyancy: 100N, 150N, 275N</li>
            <li>Automatic/manual inflation</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Emergency Kits" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Emergency Kits</span>
          <p className="text-gray-300 mt-2 text-center">First aid and emergency response kits.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Contents: bandages, splints, CPR mask</li>
            <li>Standard: DIN 13157/13169</li>
            <li>Customizable contents</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
      </div>
    </div>
  );
}
