"use client";
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] text-black dark:text-white font-display py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8] animate-fade-in">Our Products & Services</h1>
      <div className="max-w-3xl text-lg md:text-xl text-black dark:text-gray-200 mb-8 text-center animate-fade-in delay-100">
        <p className="mb-4">We supply a full range of personal protective equipment (PPE), fire fighting gear, gas detection devices, fall protection, and industrial safety solutions. Our products are certified and trusted by major industries in the UAE and Gulf.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl animate-fade-in delay-200">
        {/* Service Card */}
        <a href="/services/head-protection" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <span className="text-4xl mb-2 group-hover:scale-110 transition">🪖</span>
          <span className="text-2xl font-bold mb-2">Head Protection</span>
          <p className="text-gray-300 text-center">Helmets, bump caps, and hearing protection.</p>
        </a>
        <a href="/services/body-protection" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <span className="text-4xl mb-2 group-hover:scale-110 transition">🦺</span>
          <span className="text-2xl font-bold mb-2">Body Protection</span>
          <p className="text-gray-300 text-center">Coveralls, jackets, vests, and more.</p>
        </a>
        <a href="/services/hand-protection" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <span className="text-4xl mb-2 group-hover:scale-110 transition">🧤</span>
          <span className="text-2xl font-bold mb-2">Hand Protection</span>
          <p className="text-gray-300 text-center">Gloves for all industries and hazards.</p>
        </a>
        <a href="/services/safety-footwear" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <span className="text-4xl mb-2 group-hover:scale-110 transition">🥾</span>
          <span className="text-2xl font-bold mb-2">Safety Footwear</span>
          <p className="text-gray-300 text-center">Safety shoes, boots, and anti-slip footwear.</p>
        </a>
        <a href="/services/fall-protection" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <span className="text-4xl mb-2 group-hover:scale-110 transition">🪢</span>
          <span className="text-2xl font-bold mb-2">Fall Protection</span>
          <p className="text-gray-300 text-center">Harnesses, lanyards, and fall arrest systems.</p>
        </a>
        <a href="/services/fire-fighting" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <span className="text-4xl mb-2 group-hover:scale-110 transition">🧯</span>
          <span className="text-2xl font-bold mb-2">Fire Fighting & Gas Detection</span>
          <p className="text-gray-300 text-center">Extinguishers, blankets, gas detectors, and more.</p>
        </a>
        <a href="/services/traffic-safety" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <span className="text-4xl mb-2 group-hover:scale-110 transition">🚧</span>
          <span className="text-2xl font-bold mb-2">Traffic Safety Products</span>
          <p className="text-gray-300 text-center">Cones, barriers, and road safety solutions.</p>
        </a>
        <a href="/services/life-saving" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <span className="text-4xl mb-2 group-hover:scale-110 transition">🚑</span>
          <span className="text-2xl font-bold mb-2">Life Saving Equipment</span>
          <p className="text-gray-300 text-center">Rescue equipment and emergency kits.</p>
        </a>
        <a href="/services/welding-face-protection" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <span className="text-4xl mb-2 group-hover:scale-110 transition">🦾</span>
          <span className="text-2xl font-bold mb-2">Welding Helmet & Face Protection</span>
          <p className="text-gray-300 text-center">Welding helmets, face shields, and accessories.</p>
        </a>
        <a href="/services/miscellaneous" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <span className="text-4xl mb-2 group-hover:scale-110 transition">🔧</span>
          <span className="text-2xl font-bold mb-2">Miscellaneous Items</span>
          <p className="text-gray-300 text-center">Other safety and industrial products.</p>
        </a>
      </div>

      {/* Animations CSS */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,2,.3,1) both;
        }
        .animate-fade-in.delay-100 {
          animation-delay: 0.1s;
        }
        .animate-fade-in.delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}
