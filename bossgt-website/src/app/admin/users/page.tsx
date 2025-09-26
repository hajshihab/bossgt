"use client";

import { useState, useEffect } from "react";

type User = {
  id: number;
  username: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newUser, setNewUser] = useState({ username: "", password: "", role: "admin" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load users");
        setLoading(false);
      });
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!res.ok) throw new Error("Failed to add user");
      const added = await res.json();
      setUsers((prev) => [added, ...prev]);
      setShowAdd(false);
      setNewUser({ username: "", password: "", role: "admin" });
    } catch {
      setError("Failed to add user");
    }
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/users?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setUsers(users.filter((u) => u.id !== id));
    } catch {
      setError("Failed to delete user");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#38bdf8] mb-8 animate-fade-in">Users</h1>
      <button
        onClick={() => setShowAdd(true)}
        className="mb-6 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-6 py-2 rounded-full font-bold text-lg shadow-lg transition"
      >
        + Add User
      </button>
      <div className="w-full max-w-3xl animate-fade-in delay-100">
        {loading && <div className="text-gray-400">Loading...</div>}
        {error && <div className="text-red-400">{error}</div>}
        {!loading && users.length === 0 && <div className="text-gray-400">No users found.</div>}
        {users.map((user) => (
          <div key={user.id} className="bg-[#1e293b] rounded-xl p-6 shadow-lg mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="font-bold text-xl mb-1">{user.username}</div>
              <div className="text-[#38bdf8] mb-1">{user.role}</div>
              <div className="text-gray-400 text-xs">{new Date(user.createdAt).toLocaleString()}</div>
            </div>
            <button
              onClick={() => handleDelete(user.id)}
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
            <h2 className="text-2xl font-bold text-[#38bdf8] mb-2">Add User</h2>
            <input
              type="text"
              placeholder="Username"
              value={newUser.username}
              onChange={e => setNewUser({ ...newUser, username: e.target.value })}
              className="p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={newUser.password}
              onChange={e => setNewUser({ ...newUser, password: e.target.value })}
              className="p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              required
            />
            <select
              value={newUser.role}
              onChange={e => setNewUser({ ...newUser, role: e.target.value })}
              className="p-3 rounded bg-[#0f172a] text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            >
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
            </select>
            <div className="flex gap-4 mt-2">
              <button type="submit" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-6 py-2 rounded-full font-bold text-lg shadow-lg transition">Save</button>
              <button type="button" onClick={() => setShowAdd(false)} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg transition">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
