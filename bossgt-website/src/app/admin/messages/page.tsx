"use client";

import { useState, useEffect } from "react";

type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  body: string;
  createdAt: string;
};

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("/api/messages")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load messages");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/messages?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setMessages(messages.filter((m) => m.id !== id));
    } catch {
      setError("Failed to delete message");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#38bdf8] mb-8 animate-fade-in">Messages</h1>
      <div className="w-full max-w-3xl animate-fade-in delay-100">
        {loading && <div className="text-gray-400">Loading...</div>}
        {error && <div className="text-red-400">{error}</div>}
        {!loading && messages.length === 0 && <div className="text-gray-400">No messages found.</div>}
        {messages.map((msg) => (
          <div key={msg.id} className="bg-[#1e293b] rounded-xl p-6 shadow-lg mb-6 flex flex-col gap-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="font-bold text-lg">{msg.subject}</div>
                <div className="text-[#38bdf8]">{msg.name} &lt;{msg.email}&gt;</div>
                <div className="text-gray-400 text-xs">{new Date(msg.createdAt).toLocaleString()}</div>
              </div>
              <button
                onClick={() => handleDelete(msg.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold"
              >
                Delete
              </button>
            </div>
            <div className="text-gray-200 mt-2 whitespace-pre-line">{msg.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
