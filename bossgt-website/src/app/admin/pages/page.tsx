"use client";

import { useState } from "react";

const initialPages = [
  { id: 1, name: "About", slug: "/about", content: "Boss General Trading is a leading supplier..." },
  { id: 2, name: "Contact", slug: "/contact", content: "Contact us at sales@boss-gt.com..." },
  { id: 3, name: "Services", slug: "/services", content: "We supply a full range of PPE..." },
];

export default function AdminPages() {
  const [pages, setPages] = useState(initialPages);
  const [editId, setEditId] = useState<number|null>(null);
  const [editContent, setEditContent] = useState("");

  const handleEdit = (id: number, content: string) => {
    setEditId(id);
    setEditContent(content);
  };

  const handleSave = () => {
    setPages(pages.map(p => p.id === editId ? { ...p, content: editContent } : p));
    setEditId(null);
    setEditContent("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#38bdf8] mb-8 animate-fade-in">Manage Pages</h1>
      <div className="w-full max-w-3xl animate-fade-in delay-100">
        {pages.map(page => (
          <div key={page.id} className="bg-[#1e293b] rounded-xl p-6 shadow-lg mb-6">
            <div className="font-bold text-xl mb-1">{page.name}</div>
            <div className="text-[#38bdf8] mb-2">{page.slug}</div>
            {editId === page.id ? (
              <>
                <textarea
                  value={editContent}
                  onChange={e => setEditContent(e.target.value)}
                  className="w-full p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] mb-2"
                  rows={5}
                />
                <div className="flex gap-4">
                  <button onClick={handleSave} className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-6 py-2 rounded-full font-bold text-lg shadow-lg transition">Save</button>
                  <button onClick={() => setEditId(null)} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg transition">Cancel</button>
                </div>
              </>
            ) : (
              <>
                <div className="text-gray-300 mb-2 whitespace-pre-line">{page.content}</div>
                <button onClick={() => handleEdit(page.id, page.content)} className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-6 py-2 rounded-full font-bold text-lg shadow-lg transition">Edit</button>
              </>
            )}
          </div>
        ))}
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
