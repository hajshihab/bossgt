"use client";

import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#38bdf8] animate-fade-in">Admin Dashboard</h1>
      <div className="w-full max-w-5xl animate-fade-in delay-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">📦</span>
            <span className="text-lg font-bold mb-1">Products</span>
            <span className="text-2xl font-extrabold text-[#38bdf8]">—</span>
          </div>
          <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">👥</span>
            <span className="text-lg font-bold mb-1">Team</span>
            <span className="text-2xl font-extrabold text-[#38bdf8]">—</span>
          </div>
          <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">📜</span>
            <span className="text-lg font-bold mb-1">Certificates</span>
            <span className="text-2xl font-extrabold text-[#38bdf8]">—</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Link href="/admin/products" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
            <span className="text-3xl mb-2 group-hover:scale-110 transition">📦</span>
            <span className="text-xl font-bold mb-1">Manage Products</span>
            <span className="text-gray-300 text-center">Add, edit, or delete products and specifications.</span>
          </Link>
          <Link href="/admin/pages" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
            <span className="text-3xl mb-2 group-hover:scale-110 transition">📄</span>
            <span className="text-xl font-bold mb-1">Manage Pages</span>
            <span className="text-gray-300 text-center">Edit website pages and content.</span>
          </Link>
          <Link href="/admin/team" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
            <span className="text-3xl mb-2 group-hover:scale-110 transition">👥</span>
            <span className="text-xl font-bold mb-1">Manage Team</span>
            <span className="text-gray-300 text-center">Add, edit, or remove team members.</span>
          </Link>
          <Link href="/admin/certificates" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
            <span className="text-3xl mb-2 group-hover:scale-110 transition">📜</span>
            <span className="text-xl font-bold mb-1">Manage Certificates</span>
            <span className="text-gray-300 text-center">Add, edit, or remove certificates.</span>
          </Link>
          <Link href="/admin/blog" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
            <span className="text-3xl mb-2 group-hover:scale-110 transition">📝</span>
            <span className="text-xl font-bold mb-1">Manage Blog</span>
            <span className="text-gray-300 text-center">Add, edit, or remove blog posts.</span>
          </Link>
          <Link href="/admin/messages" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
            <span className="text-3xl mb-2 group-hover:scale-110 transition">✉️</span>
            <span className="text-xl font-bold mb-1">Messages</span>
            <span className="text-gray-300 text-center">View and manage contact messages.</span>
          </Link>
          <Link href="/admin/settings" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
            <span className="text-3xl mb-2 group-hover:scale-110 transition">⚙️</span>
            <span className="text-xl font-bold mb-1">Settings</span>
            <span className="text-gray-300 text-center">Site settings and configuration.</span>
          </Link>
          <Link href="/admin/users" className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-center hover:bg-[#38bdf8] hover:text-[#0f172a] transition group">
            <span className="text-3xl mb-2 group-hover:scale-110 transition">👤</span>
            <span className="text-xl font-bold mb-1">Users</span>
            <span className="text-gray-300 text-center">Manage admin users and roles.</span>
          </Link>
        </div>
      </div>
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
