"use client";
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] text-black dark:text-white font-display py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8] animate-fade-in">Our Team</h1>
      <div className="max-w-3xl text-lg md:text-xl text-black dark:text-gray-200 mb-8 text-center animate-fade-in delay-100">
        <p className="mb-4">Meet the experts behind Boss General Trading. Our team brings decades of experience in safety, engineering, and customer service to deliver the best solutions for every client.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl animate-fade-in delay-200">
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] mb-4 flex items-center justify-center text-4xl text-white font-bold group-hover:scale-110 transition">A</div>
          <span className="mt-2 font-semibold text-xl">Eng. Ahmed Al Mansoori</span>
          <span className="text-gray-400">General Manager</span>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] mb-4 flex items-center justify-center text-4xl text-white font-bold group-hover:scale-110 transition">S</div>
          <span className="mt-2 font-semibold text-xl">Sarah Khaled</span>
          <span className="text-gray-400">Sales Director</span>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] mb-4 flex items-center justify-center text-4xl text-white font-bold group-hover:scale-110 transition">M</div>
          <span className="mt-2 font-semibold text-xl">Mohamed Hassan</span>
          <span className="text-gray-400">Technical Support</span>
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
