"use client";
import Image from "next/image";

export default function HandProtection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8]">Hand Protection</h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 text-center">A wide range of gloves for every industry: cut-resistant, chemical-resistant, heat-resistant, and more. Certified for safety and comfort.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Cut Resistant" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Cut Resistant Gloves</span>
          <p className="text-gray-300 mt-2 text-center">Protection against sharp objects and blades.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Material: HPPE, Kevlar, Nitrile</li>
            <li>Standard: EN 388, ANSI A4-A9</li>
            <li>Sizes: 7-11</li>
            <li>Level: Cut 3/5, Puncture 2/4</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Chemical Resistant" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Chemical Resistant Gloves</span>
          <p className="text-gray-300 mt-2 text-center">For handling chemicals and hazardous materials.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Material: Nitrile, Latex, PVC</li>
            <li>Standard: EN 374, EN 388</li>
            <li>Length: 30-45cm</li>
            <li>Resistant to acids, solvents</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Heat Resistant" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Heat Resistant Gloves</span>
          <p className="text-gray-300 mt-2 text-center">For high-temperature environments.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Material: Kevlar, Leather, Cotton</li>
            <li>Standard: EN 407, EN 388</li>
            <li>Temp: Up to 500°C</li>
            <li>For welding, foundry, etc.</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
      </div>
    </div>
  );
}
