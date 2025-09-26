"use client";
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] text-black dark:text-white font-display py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8] animate-fade-in">About Us</h1>
      <div className="max-w-3xl text-lg md:text-xl text-black dark:text-gray-200 mb-8 animate-fade-in delay-100">
        <p className="mb-4">Boss General Trading is a leading supplier of safety equipment and industrial solutions for oil & gas, civil, and industrial sectors in the UAE and Gulf. Our team has over 20 years of experience, representing top global brands in PPE and industrial wear.</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li className="transition-all hover:text-[#38bdf8]">Expert team with deep industry knowledge</li>
          <li className="transition-all hover:text-[#38bdf8]">Mission: Deliver integrated safety solutions and original products</li>
          <li className="transition-all hover:text-[#38bdf8]">Focus on quality, reliability, and professional service</li>
        </ul>
        <p>We are committed to providing the best products and technical support tailored to every client’s needs.</p>
      </div>

      {/* Team Section */}
      <div className="w-full max-w-4xl mt-12 animate-fade-in delay-200">
        <h2 className="text-2xl font-bold mb-6 text-[#38bdf8] text-center">Our Core Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-[#334155] transition group">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] mb-4 flex items-center justify-center text-3xl text-white font-bold group-hover:scale-110 transition">A</div>
            <span className="mt-2 font-semibold text-xl">Eng. Ahmed Al Mansoori</span>
            <span className="text-gray-400">General Manager</span>
          </div>
          <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-[#334155] transition group">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] mb-4 flex items-center justify-center text-3xl text-white font-bold group-hover:scale-110 transition">S</div>
            <span className="mt-2 font-semibold text-xl">Sarah Khaled</span>
            <span className="text-gray-400">Sales Director</span>
          </div>
          <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-[#334155] transition group">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] mb-4 flex items-center justify-center text-3xl text-white font-bold group-hover:scale-110 transition">M</div>
            <span className="mt-2 font-semibold text-xl">Mohamed Hassan</span>
            <span className="text-gray-400">Technical Support</span>
          </div>
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
