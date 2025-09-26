"use client";

import { useState, useRef, useEffect } from "react";


type Product = {
  id: number;
  name: string;
  category: string;
  specs: string[];
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Recherche/filtrage avancé (une seule définition)
  const filteredProducts = products.filter((product) => {
    const q = search.toLowerCase();
    return (
      product.name.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q) ||
      (Array.isArray(product.specs) && product.specs.some((s) => s.toLowerCase().includes(q)))
    );
  });
  const [showAdd, setShowAdd] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    specs: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch products from API
  useEffect(() => {
    setLoading(true);
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  // Ajouter un produit
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      let uploadedUrls: string[] = [];
      if (images.length > 0) {
        const uploads = await Promise.all(images.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });
          if (!res.ok) throw new Error("Upload failed");
          const data = await res.json();
          return data.url;
        }));
        uploadedUrls = uploads;
      }
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newProduct.name,
          category: newProduct.category,
          specs: newProduct.specs.split("\n").map((s) => s.trim()).filter(Boolean),
          images: uploadedUrls,
        }),
      });
      if (!res.ok) throw new Error("Failed to add product");
      const added = await res.json();
      setProducts((prev) => [added, ...prev]);
      setShowAdd(false);
      setNewProduct({ name: "", category: "", specs: "" });
      setImages([]);
      setImagePreviews([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch {
      setError("Failed to add product");
    }
    setLoading(false);
  };
  // Handle image file selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages(files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  // Delete product via API
  const handleDelete = async (id: number) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setProducts(products.filter((p) => p.id !== id));
    } catch {
      setError("Failed to delete product");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans py-20 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#38bdf8] mb-8 animate-fade-in">Manage Products</h1>
      <button
        onClick={() => setShowAdd(true)}
        className="mb-6 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-6 py-2 rounded-full font-bold text-lg shadow-lg transition"
      >
        + Add Product
      </button>
      <input
        type="text"
        placeholder="Search by name, category, or spec..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-6 w-full max-w-3xl p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
      />
      <div className="w-full max-w-3xl animate-fade-in delay-100">
        {loading && <div className="text-gray-400">Loading...</div>}
        {error && <div className="text-red-400">{error}</div>}
        {!loading && filteredProducts.length === 0 && <div className="text-gray-400">No products found.</div>}
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-[#1e293b] rounded-xl p-6 shadow-lg mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="font-bold text-xl mb-1">{product.name}</div>
              <div className="text-[#38bdf8] mb-2">{product.category}</div>
              <ul className="text-gray-300 text-sm list-disc list-inside">
                {product.specs.map((spec: string, i: number) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
              {product.images && product.images.length > 0 && (
                <div className="flex gap-2 mt-2 flex-wrap">
                  {product.images.map((img: string, i: number) => (
                    <img key={i} src={img} alt="product" className="w-16 h-16 object-cover rounded border border-gray-700" />
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => handleDelete(product.id)}
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
            <h2 className="text-2xl font-bold text-[#38bdf8] mb-2">Add Product</h2>
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
              className="p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
              className="p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              required
            />
            <textarea
              placeholder="Specifications (one per line)"
              value={newProduct.specs}
              onChange={e => setNewProduct({ ...newProduct, specs: e.target.value })}
              className="p-3 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              rows={4}
              required
            />
            <div>
              <label className="block text-sm mb-1">Product Images</label>
              <input
                type="file"
                accept="image/*"
                multiple
                ref={fileInputRef}
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#38bdf8] file:text-[#0f172a] hover:file:bg-[#0ea5e9]"
              />
              {imagePreviews.length > 0 && (
                <div className="flex gap-2 mt-2 flex-wrap">
                  {imagePreviews.map((src, i) => (
                    <img key={i} src={src} alt="preview" className="w-16 h-16 object-cover rounded border border-gray-700" />
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-4 mt-2">
              <button type="submit" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-6 py-2 rounded-full font-bold text-lg shadow-lg transition">Save</button>
              <button type="button" onClick={() => { setShowAdd(false); setImages([]); setImagePreviews([]); if (fileInputRef.current) fileInputRef.current.value = ""; }} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg transition">Cancel</button>
            </div>
          </form>
        </div>
      )}
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
