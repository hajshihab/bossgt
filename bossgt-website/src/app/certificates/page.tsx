"use client";
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] text-black dark:text-white font-display py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8] animate-fade-in">Certificates & Partners</h1>
      <div className="max-w-3xl text-lg md:text-xl text-black dark:text-gray-200 mb-8 text-center animate-fade-in delay-100">
        <p className="mb-4">Boss General Trading is proud to partner with world-leading manufacturers and holds certifications for quality and safety standards. Our products comply with international regulations and are trusted by major industries in the region.</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li className="transition-all hover:text-[#38bdf8]">ISO 9001:2015 Certified</li>
          <li className="transition-all hover:text-[#38bdf8]">Authorized distributor for top PPE brands</li>
          <li className="transition-all hover:text-[#38bdf8]">Compliance with EN, ANSI, and other global standards</li>
        </ul>
        <p>Contact us for more details about our certifications and partners.</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-10 animate-fade-in delay-200">
        <div className="flex flex-col items-center bg-[#1e293b] rounded-xl p-8 shadow-lg hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <span className="text-6xl mb-2 group-hover:scale-110 transition">🏅</span>
          <span className="font-bold text-lg">ISO 9001:2015</span>
        </div>
        <div className="flex flex-col items-center bg-[#1e293b] rounded-xl p-8 shadow-lg hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <span className="text-6xl mb-2 group-hover:scale-110 transition">🔒</span>
          <span className="font-bold text-lg">EN, ANSI, CE</span>
        </div>
        <div className="flex flex-col items-center bg-[#1e293b] rounded-xl p-8 shadow-lg hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <span className="text-6xl mb-2 group-hover:scale-110 transition">🤝</span>
          <span className="font-bold text-lg">Authorized Distributor</span>
        </div>
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
