"use client";
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] text-black dark:text-white font-display py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8] animate-fade-in">Contact Us</h1>
      <div className="max-w-2xl mx-auto flex flex-col gap-6 bg-[#0f172a] p-8 rounded-xl shadow-lg w-full animate-fade-in delay-100">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Address</h3>
            <p className="text-gray-300">Mussafah M-45, Shop 91, Abu Dhabi, UAE</p>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-gray-300">026660233</p>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
            <p className="text-gray-300">0551960890</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-300">sales@boss-gt.com<br/>mahram@boss-gt.com</p>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Instagram</h3>
            <a href="https://instagram.com/boss_gt_abudhabi" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline">boss_gt_abudhabi</a>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Facebook</h3>
            <a href="#" className="text-[#38bdf8] hover:underline">Official Facebook Page</a>
          </div>
        </div>
        <form className="flex flex-col gap-4 mt-8 animate-fade-in delay-200">
          <input type="text" placeholder="Your Name" className="p-3 rounded bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] transition" required />
          <input type="email" placeholder="Your Email" className="p-3 rounded bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] transition" required />
          <textarea placeholder="Your Message" className="p-3 rounded bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] transition" rows={5} required />
          <button type="submit" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-8 py-3 rounded-full font-bold text-lg shadow-lg transition">Send Message</button>
        </form>
        <div className="flex gap-4 mt-6 justify-center animate-fade-in delay-300">
          <a href="https://wa.me/971551960890" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 transition"><span>WhatsApp</span></a>
          <a href="https://instagram.com/boss_gt_abudhabi" target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 transition"><span>Instagram</span></a>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 transition"><span>Facebook</span></a>
        </div>
      </div>
      <div className="mt-10 flex justify-center animate-fade-in delay-400">
        <iframe src="https://www.google.com/maps?q=Mussafah+M-45,+Abu+Dhabi,+UAE&output=embed" width="400" height="200" className="rounded-xl border-0 shadow-lg" loading="lazy" title="Boss General Trading Location"></iframe>
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
        .animate-fade-in.delay-300 {
          animation-delay: 0.3s;
        }
        .animate-fade-in.delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
