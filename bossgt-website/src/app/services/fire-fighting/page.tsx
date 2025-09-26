"use client";
import Image from "next/image";

export default function FireFighting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8]">Fire Fighting & Gas Detection</h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 text-center">Fire extinguishers, blankets, gas detectors, and fire safety gear for all industries. Certified and reliable solutions.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Extinguishers" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Fire Extinguishers</span>
          <p className="text-gray-300 mt-2 text-center">Portable and fixed extinguishers for all hazards.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Types: CO2, Dry Powder, Foam, Water</li>
            <li>Capacity: 1kg - 12kg</li>
            <li>Standard: EN 3, BS 5306</li>
            <li>Wall/floor mounting</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Gas Detectors" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Gas Detectors</span>
          <p className="text-gray-300 mt-2 text-center">Portable and fixed gas detection devices.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Types: Single, Multi-gas</li>
            <li>Detection: O2, CO, H2S, LEL, etc.</li>
            <li>Standard: ATEX, IECEx</li>
            <li>Alarm: Visual, Audible, Vibrating</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Fire Blankets" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Fire Blankets & Accessories</span>
          <p className="text-gray-300 mt-2 text-center">Blankets, hoses, and fire safety accessories.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Blankets: Fiberglass, Wool</li>
            <li>Sizes: 1x1m, 1.2x1.8m, etc.</li>
            <li>Accessories: Hoses, nozzles</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
      </div>
    </div>
  );
}
