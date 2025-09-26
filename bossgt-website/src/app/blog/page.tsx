"use client";
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] text-black dark:text-white font-display py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8] animate-fade-in">Blog & News</h1>
      <div className="max-w-3xl text-lg md:text-xl text-black dark:text-gray-200 mb-8 text-center animate-fade-in delay-100">
        <p className="mb-4">Stay updated with the latest trends, safety tips, and industry news from Boss General Trading. Explore our articles for valuable insights and best practices in safety and industrial solutions.</p>
      </div>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in delay-200">
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col hover:bg-[#38bdf8] hover:text-[#0f172a] transition group cursor-pointer">
          <span className="text-xl font-bold mb-2 group-hover:scale-105 transition">How to Choose the Right PPE for Your Industry</span>
          <span className="text-gray-400 mb-2">September 2025</span>
          <p className="text-gray-300">A practical guide to selecting certified personal protective equipment for oil, gas, and civil sectors.</p>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col hover:bg-[#38bdf8] hover:text-[#0f172a] transition group cursor-pointer">
          <span className="text-xl font-bold mb-2 group-hover:scale-105 transition">Fire Safety: Essential Equipment for Every Workplace</span>
          <span className="text-gray-400 mb-2">August 2025</span>
          <p className="text-gray-300">Discover the must-have fire fighting and gas detection solutions for industrial safety.</p>
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
