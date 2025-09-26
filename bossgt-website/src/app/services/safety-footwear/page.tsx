"use client";
import Image from "next/image";

export default function SafetyFootwear() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8]">Safety Footwear</h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 text-center">Industrial safety shoes, boots, and anti-slip footwear. Designed for comfort, durability, and protection in all work environments.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Safety Shoes" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Safety Shoes</span>
          <p className="text-gray-300 mt-2 text-center">Steel toe, anti-slip, and waterproof options.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Standard: EN ISO 20345, S1-S3</li>
            <li>Toe: Steel/Composite</li>
            <li>Slip-resistant, oil-resistant</li>
            <li>Sizes: 38-48</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Safety Boots" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Safety Boots</span>
          <p className="text-gray-300 mt-2 text-center">High-ankle and heavy-duty boots.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Standard: EN ISO 20345, S3</li>
            <li>Waterproof, insulated</li>
            <li>Steel/Composite toe & midsole</li>
            <li>Sizes: 38-48</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Accessories" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Accessories</span>
          <p className="text-gray-300 mt-2 text-center">Socks, insoles, and shoe covers.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Anti-static, anti-bacterial</li>
            <li>Disposable/Reusable</li>
            <li>For all shoe sizes</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
      </div>
    </div>
  );
}
