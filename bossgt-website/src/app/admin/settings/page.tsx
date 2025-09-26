"use client";

import { useState, useEffect, useRef } from "react";

type Settings = {
  siteName: string;
  logo: string;
  primaryColor: string;
  contactEmail: string;
};

export default function AdminSettings() {
  const [settings, setSettings] = useState<Settings>({ siteName: "", logo: "", primaryColor: "#38bdf8", contactEmail: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLoading(true);
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
        setSettings(data);
        setLogoPreview(data.logo || "");
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load settings");
        setLoading(false);
      });
  }, []);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setLogoFile(file);
    setLogoPreview(file ? URL.createObjectURL(file) : settings.logo);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    let logoUrl = settings.logo;
    try {
      if (logoFile) {
        const formData = new FormData();
        formData.append("file", logoFile);
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        if (!res.ok) throw new Error("Upload failed");
        const data = await res.json();
        logoUrl = data.url;
      }
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...settings, logo: logoUrl }),
      });
      if (!res.ok) throw new Error("Failed to save settings");
      const updated = await res.json();
      setSettings(updated);
      setSuccess("Settings saved successfully");
      setLogoFile(null);
      setLogoPreview(updated.logo);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch {
      setError("Failed to save settings");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#38bdf8] mb-8 animate-fade-in">Settings</h1>
      <form onSubmit={handleSave} className="w-full max-w-md bg-[#1e293b] p-8 rounded-xl shadow-lg flex flex-col gap-4 animate-fade-in delay-100">
        <label className="font-semibold">Site Name</label>
        <input
          type="text"
          value={settings.siteName}
          onChange={e => setSettings({ ...settings, siteName: e.target.value })}
          className="p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
          required
        />
        <label className="font-semibold">Primary Color</label>
        <input
          type="color"
          value={settings.primaryColor}
          onChange={e => setSettings({ ...settings, primaryColor: e.target.value })}
          className="w-16 h-10 rounded border-0"
        />
        <label className="font-semibold">Contact Email</label>
        <input
          type="email"
          value={settings.contactEmail}
          onChange={e => setSettings({ ...settings, contactEmail: e.target.value })}
          className="p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
        />
        <label className="font-semibold">Logo</label>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleLogoChange}
          className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#38bdf8] file:text-[#0f172a] hover:file:bg-[#0ea5e9]"
        />
        {logoPreview && (
          <div className="flex gap-2 mt-2 flex-wrap">
            <img src={logoPreview} alt="logo" className="w-24 h-24 object-contain bg-white rounded border border-gray-700" />
          </div>
        )}
        <button type="submit" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-6 py-2 rounded-full font-bold text-lg shadow-lg transition mt-4">Save Settings</button>
        {loading && <div className="text-gray-400">Saving...</div>}
        {error && <div className="text-red-400">{error}</div>}
        {success && <div className="text-green-400">{success}</div>}
      </form>
    </div>
  );
}
