"use client";

import { useState, useEffect, useRef } from "react";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
};

export default function AdminTeam() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newMember, setNewMember] = useState({ name: "", role: "", bio: "" });
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLoading(true);
    fetch("/api/team")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load team");
        setLoading(false);
      });
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    let uploadedUrl = "";
    try {
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        if (!res.ok) throw new Error("Upload failed");
        const data = await res.json();
        uploadedUrl = data.url;
      }
      const res = await fetch("/api/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newMember.name,
          role: newMember.role,
          bio: newMember.bio,
          image: uploadedUrl,
        }),
      });
      if (!res.ok) throw new Error("Failed to add member");
      const added = await res.json();
      setMembers((prev) => [added, ...prev]);
      setShowAdd(false);
      setNewMember({ name: "", role: "", bio: "" });
      setImage(null);
      setImagePreview("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch {
      setError("Failed to add member");
    }
    setLoading(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    setImagePreview(file ? URL.createObjectURL(file) : "");
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/team?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setMembers(members.filter((m) => m.id !== id));
    } catch {
      setError("Failed to delete member");
    }
    setLoading(false);
  };

  // Recherche/filtrage avancé
  const [search, setSearch] = useState("");
  const filteredMembers = members.filter((member) => {
    const q = search.toLowerCase();
    return (
      member.name.toLowerCase().includes(q) ||
      member.role.toLowerCase().includes(q) ||
      (member.bio && member.bio.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#38bdf8] mb-8 animate-fade-in">Manage Team</h1>
      <button
        onClick={() => setShowAdd(true)}
        className="mb-6 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-6 py-2 rounded-full font-bold text-lg shadow-lg transition"
      >
        + Add Member
      </button>
      <input
        type="text"
        placeholder="Search by name, role, or bio..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-6 w-full max-w-3xl p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
      />
      <div className="w-full max-w-3xl animate-fade-in delay-100">
        {loading && <div className="text-gray-400">Loading...</div>}
        {error && <div className="text-red-400">{error}</div>}
        {!loading && filteredMembers.length === 0 && <div className="text-gray-400">No team members found.</div>}
        {filteredMembers.map((member) => (
          <div key={member.id} className="bg-[#1e293b] rounded-xl p-6 shadow-lg mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              {member.image && <img src={member.image} alt={member.name} className="w-16 h-16 object-cover rounded-full border border-gray-700" />}
              <div>
                <div className="font-bold text-xl mb-1">{member.name}</div>
                <div className="text-[#38bdf8] mb-1">{member.role}</div>
                {member.bio && <div className="text-gray-300 text-sm">{member.bio}</div>}
              </div>
            </div>
            <button
              onClick={() => handleDelete(member.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold mt-2 md:mt-0"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {showAdd && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in">
          <form
            onSubmit={handleAdd}
            className="bg-[#1e293b] p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-[#38bdf8] mb-2">Add Team Member</h2>
            <input
              type="text"
              placeholder="Name"
              value={newMember.name}
              onChange={e => setNewMember({ ...newMember, name: e.target.value })}
              className="p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              required
            />
            <input
              type="text"
              placeholder="Role"
              value={newMember.role}
              onChange={e => setNewMember({ ...newMember, role: e.target.value })}
              className="p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              required
            />
            <textarea
              placeholder="Bio (optional)"
              value={newMember.bio}
              onChange={e => setNewMember({ ...newMember, bio: e.target.value })}
              className="p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              rows={3}
            />
            <div>
              <label className="block text-sm mb-1">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#38bdf8] file:text-[#0f172a] hover:file:bg-[#0ea5e9]"
              />
              {imagePreview && (
                <div className="flex gap-2 mt-2 flex-wrap">
                  <img src={imagePreview} alt="preview" className="w-16 h-16 object-cover rounded-full border border-gray-700" />
                </div>
              )}
            </div>
            <div className="flex gap-4 mt-2">
              <button type="submit" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-6 py-2 rounded-full font-bold text-lg shadow-lg transition">Save</button>
              <button type="button" onClick={() => { setShowAdd(false); setImage(null); setImagePreview(""); if (fileInputRef.current) fileInputRef.current.value = ""; }} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg transition">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
