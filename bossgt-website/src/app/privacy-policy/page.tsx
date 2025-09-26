"use client";
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] text-black dark:text-white font-display py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#38bdf8] animate-fade-in">Privacy Policy & Terms of Use</h1>
      <div className="max-w-3xl text-lg md:text-xl text-black dark:text-gray-200 mb-8 animate-fade-in delay-100">
        <p className="mb-4">We value your privacy and are committed to protecting your personal information. All contact data is handled securely and in accordance with Google privacy standards. By using this website, you agree to our terms of use and privacy policy.</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li className="transition-all hover:text-[#38bdf8]">Contact information is used solely for business communication.</li>
          <li className="transition-all hover:text-[#38bdf8]">We do not share your data with third parties except as required by law.</li>
          <li className="transition-all hover:text-[#38bdf8]">Our site uses Google reCAPTCHA for security and spam protection.</li>
          <li className="transition-all hover:text-[#38bdf8]">For any privacy concerns, contact us at sales@boss-gt.com.</li>
        </ul>
        <p>For full details, please contact our team or review our official documentation.</p>
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
      `}</style>
    </div>
  );
}
