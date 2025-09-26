"use client";
import Image from "next/image";

export default function Miscellaneous() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8]">Miscellaneous Items</h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 text-center">Other safety and industrial products: aprons, sleeves, reflective vests, and more. Contact us for custom solutions.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Aprons" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Aprons & Sleeves</span>
          <p className="text-gray-300 mt-2 text-center">Protection for arms and body.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Aprons: PVC, Leather, Cotton</li>
            <li>Sleeves: Cut-resistant, FR</li>
            <li>Sizes: S-XXL</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Reflective Vests" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Reflective Vests</span>
          <p className="text-gray-300 mt-2 text-center">High-visibility vests for road and site safety.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Standard: EN ISO 20471</li>
            <li>Colors: Yellow, Orange, Custom</li>
            <li>Sizes: S-5XL</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
          <Image src="/file.svg" alt="Custom Solutions" width={56} height={56} />
          <span className="mt-4 font-semibold text-xl">Custom Solutions</span>
          <p className="text-gray-300 mt-2 text-center">Contact us for special requirements.</p>
          <ul className="text-sm text-gray-400 mt-2 list-disc list-inside text-left">
            <li>Custom-made PPE & accessories</li>
            <li>Branding & logo printing</li>
            <li>Consultation available</li>
          </ul>
          <a href="/contact" className="mt-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-4 py-2 rounded-full font-bold text-sm shadow transition">Request Quote</a>
        </div>
      </div>
    </div>
  );
}
