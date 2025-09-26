"use client";
import Image from "next/image";

export default function BodyProtection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8]">Body Protection</h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 text-center">Industrial coveralls, jackets, vests, and more. Designed for comfort, durability, and maximum protection in all work environments.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Coveralls" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Coveralls</span>
          <p className="text-gray-300 mt-2 text-center">Flame-resistant and anti-static coveralls.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Material: Cotton/Polyester/FR</li>
            <li>Standard: EN ISO 11612, EN 1149</li>
            <li>Sizes: S-5XL</li>
            <li>Colors: Navy, Orange, Custom</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Jackets" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Jackets & Vests</span>
          <p className="text-gray-300 mt-2 text-center">High-visibility and insulated jackets.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Hi-Vis: EN ISO 20471</li>
            <li>Insulated for cold weather</li>
            <li>Reflective tape options</li>
            <li>Custom branding available</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Accessories" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Accessories</span>
          <p className="text-gray-300 mt-2 text-center">Aprons, sleeves, and more.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Aprons: PVC, Leather, Cotton</li>
            <li>Sleeves: Cut-resistant, FR</li>
            <li>Other: Hoods, gaiters, etc.</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
      </div>
    </div>
  );
}
