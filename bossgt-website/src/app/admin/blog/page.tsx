"use client";

import { useState, useEffect, useRef } from "react";

type BlogPost = {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
};

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLoading(true);
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load blog posts");
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
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newPost.title,
          content: newPost.content,
          image: uploadedUrl,
        }),
      });
      if (!res.ok) throw new Error("Failed to add post");
      const added = await res.json();
      setPosts((prev) => [added, ...prev]);
      setShowAdd(false);
      setNewPost({ title: "", content: "" });
      setImage(null);
      setImagePreview("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch {
      setError("Failed to add post");
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
      const res = await fetch(`/api/blog?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setPosts(posts.filter((p) => p.id !== id));
    } catch {
      setError("Failed to delete post");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#38bdf8] mb-8 animate-fade-in">Manage Blog</h1>
      <button
        onClick={() => setShowAdd(true)}
        className="mb-6 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-6 py-2 rounded-full font-bold text-lg shadow-lg transition"
      >
        + Add Post
      </button>
      <div className="w-full max-w-3xl animate-fade-in delay-100">
        {loading && <div className="text-gray-400">Loading...</div>}
        {error && <div className="text-red-400">{error}</div>}
        {!loading && posts.length === 0 && <div className="text-gray-400">No blog posts found.</div>}
        {posts.map((post) => (
          <div key={post.id} className="bg-[#1e293b] rounded-xl p-6 shadow-lg mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              {post.image && <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded border border-gray-700" />}
              <div>
                <div className="font-bold text-xl mb-1">{post.title}</div>
                <div className="text-gray-300 text-sm line-clamp-2 max-w-xs">{post.content}</div>
              </div>
            </div>
            <button
              onClick={() => handleDelete(post.id)}
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
            <h2 className="text-2xl font-bold text-[#38bdf8] mb-2">Add Blog Post</h2>
            <input
              type="text"
              placeholder="Title"
              value={newPost.title}
              onChange={e => setNewPost({ ...newPost, title: e.target.value })}
              className="p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              required
            />
            <textarea
              placeholder="Content"
              value={newPost.content}
              onChange={e => setNewPost({ ...newPost, content: e.target.value })}
              className="p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              rows={4}
              required
            />
            <div>
              <label className="block text-sm mb-1">Post Image</label>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#38bdf8] file:text-[#0f172a] hover:file:bg-[#0ea5e9]"
              />
              {imagePreview && (
                <div className="flex gap-2 mt-2 flex-wrap">
                  <img src={imagePreview} alt="preview" className="w-16 h-16 object-cover rounded border border-gray-700" />
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
