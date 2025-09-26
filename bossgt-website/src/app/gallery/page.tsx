"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { src: "/gallery1.jpg", alt: "Industrial Safety 1" },
  { src: "/gallery2.jpg", alt: "Industrial Safety 2" },
  { src: "/gallery3.jpg", alt: "Industrial Safety 3" },
  { src: "/gallery4.jpg", alt: "Industrial Safety 4" },
  // Ajoutez d'autres images ici si besoin
];

export default function Page() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] text-black dark:text-white font-display py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#38bdf8] animate-fade-in">Gallery</h1>
      <p className="max-w-2xl text-lg md:text-xl text-black dark:text-gray-200 mb-10 text-center animate-fade-in delay-100">Discover our world of safety: real projects, equipment in action, and the latest in industrial protection. Explore our gallery for inspiration and proof of quality.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-xl group relative cursor-pointer transition-transform hover:scale-105 hover:z-10"
            onClick={() => setSelected(idx)}
            tabIndex={0}
            aria-label={`View ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="object-cover w-full h-56 group-hover:brightness-75 transition duration-300 ease-in-out group-hover:scale-110"
              style={{ transition: "transform 0.4s cubic-bezier(.4,2,.3,1), filter 0.3s" }}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/60">
              <span className="text-lg font-semibold text-white drop-shadow-lg animate-fade-in">{img.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-3xl w-full p-4" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-2 hover:bg-[#38bdf8] hover:text-[#0f172a] transition"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <Image
              src={galleryImages[selected].src}
              alt={galleryImages[selected].alt}
              width={900}
              height={600}
              className="rounded-xl shadow-2xl w-full h-auto object-contain animate-zoom-in"
            />
            <div className="text-center text-white mt-4 text-xl font-bold animate-fade-in">
              {galleryImages[selected].alt}
            </div>
          </div>
        </div>
      )}

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
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-zoom-in {
          animation: zoom-in 0.5s cubic-bezier(.4,2,.3,1) both;
        }
      `}</style>
    </div>
  );
}
