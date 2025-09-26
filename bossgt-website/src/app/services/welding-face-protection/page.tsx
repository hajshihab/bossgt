"use client";
import Image from "next/image";

export default function WeldingFaceProtection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8]">Welding Helmet & Face Protection</h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 text-center">Welding helmets, face shields, and accessories for industrial and construction safety.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Welding Helmets" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Welding Helmets</span>
          <p className="text-gray-300 mt-2 text-center">Auto-darkening and standard helmets.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Standard: EN 175, EN 379</li>
            <li>Auto-darkening filter</li>
            <li>Shade: 9-13 adjustable</li>
            <li>Lightweight, comfortable</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Face Shields" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Face Shields</span>
          <p className="text-gray-300 mt-2 text-center">Full-face protection for welding and grinding.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Material: Polycarbonate, Acetate</li>
            <li>Standard: EN 166</li>
            <li>Adjustable headgear</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Accessories" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Accessories</span>
          <p className="text-gray-300 mt-2 text-center">Replacement lenses, sweatbands, and more.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Replacement lenses: clear, tinted</li>
            <li>Sweatbands: cotton, synthetic</li>
            <li>Compatible with most helmets</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
      </div>
    </div>
  );
}
