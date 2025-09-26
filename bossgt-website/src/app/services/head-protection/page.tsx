"use client";
import Image from "next/image";

export default function HeadProtection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8]">Head Protection</h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 text-center">Certified helmets, bump caps, and hearing protection for industrial and construction safety. Our products meet international standards for head and hearing protection.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Helmet" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Safety Helmets</span>
          <p className="text-gray-300 mt-2 text-center">Impact-resistant helmets for all industries.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Material: ABS/Polycarbonate</li>
            <li>Standard: EN 397, ANSI Z89.1</li>
            <li>Adjustable suspension</li>
            <li>Optional: Chin strap, visor</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Ear Muffs" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Ear Muffs & Plugs</span>
          <p className="text-gray-300 mt-2 text-center">Hearing protection for noisy environments.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>NRR: 22-34 dB</li>
            <li>Standard: EN 352, ANSI S3.19</li>
            <li>Types: Over-ear, in-ear</li>
            <li>Comfort fit, reusable/disposable</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Accessories" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Accessories</span>
          <p className="text-gray-300 mt-2 text-center">Chin straps, visors, and helmet accessories.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Chin straps: 2/4-point</li>
            <li>Visors: Polycarbonate, mesh</li>
            <li>Compatible with most helmets</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
      </div>
    </div>
  );
}
