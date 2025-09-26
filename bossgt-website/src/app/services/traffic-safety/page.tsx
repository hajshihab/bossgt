"use client";
import Image from "next/image";

export default function TrafficSafety() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8]">Traffic Safety Products</h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 text-center">Cones, barriers, road signs, and other traffic safety solutions for industrial and civil sectors.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Cones" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Traffic Cones</span>
          <p className="text-gray-300 mt-2 text-center">High-visibility cones for road safety.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Material: PVC, Rubber</li>
            <li>Height: 50cm, 75cm, 100cm</li>
            <li>Reflective tape</li>
            <li>Weighted base</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Barriers" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Barriers & Signs</span>
          <p className="text-gray-300 mt-2 text-center">Road barriers and warning signs.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Material: PE, Metal</li>
            <li>Types: Water-filled, Metal</li>
            <li>Custom signage available</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Accessories" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Accessories</span>
          <p className="text-gray-300 mt-2 text-center">Reflective tapes, speed bumps, and more.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Reflective tapes: various widths</li>
            <li>Speed bumps: rubber, plastic</li>
            <li>Other: delineators, cones, etc.</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
      </div>
    </div>
  );
}
