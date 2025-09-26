import Image from "next/image";

export default function Page() {
  return (
  <div className="bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] min-h-screen text-black dark:text-white font-display">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-[#0f172a] to-transparent">
        <Image src="/globe.svg" alt="Boss General Trading Logo" width={80} height={80} className="mb-6" />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">YOUR WAY TO SAFETY</h1>
    <p className="max-w-2xl text-xl md:text-2xl mb-8 text-black dark:text-gray-200">Supplying the UAE & Gulf with certified safety equipment and industrial solutions for over 20 years. Trusted by oil & gas, civil, and industrial leaders. Your safety, our mission.</p>
        <a href="#contact" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-8 py-3 rounded-full font-bold text-lg shadow-lg transition">Contact Us</a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#38bdf8]">About Boss General Trading</h2>
        <p className="text-lg md:text-xl text-black dark:text-gray-200 mb-4">Our expert team delivers high-quality products and technical support tailored to your needs. We represent world-leading manufacturers and guarantee reliability, innovation, and fast service.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
            <p className="text-black dark:text-gray-300">Delivering the best safety solutions at competitive prices, with fast and reliable customer service.</p>
          </div>
          <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold text-xl mb-2">Why Choose Us?</h3>
            <ul className="text-black dark:text-gray-300 list-disc list-inside space-y-1">
              <li>Wide range of certified safety products</li>
              <li>Custom solutions for every industry</li>
              <li>Expert technical support</li>
              <li>Fast delivery and after-sales service</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Brands Section */}
      <section id="brands" className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#38bdf8] text-center">Our Brands</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src="/next.svg" alt="3M" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          <img src="/vercel.svg" alt="Honeywell" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          <img src="/globe.svg" alt="MSA" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          <img src="/window.svg" alt="DuPont" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          <img src="/file.svg" alt="Uvex" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#38bdf8] text-center">Certificates & Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex flex-col items-center">
            <span className="text-5xl">🏅</span>
            <span className="mt-2 font-semibold">ISO 9001:2015</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl">🔒</span>
            <span className="mt-2 font-semibold">EN, ANSI, CE</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl">🤝</span>
            <span className="mt-2 font-semibold">Authorized Distributor</span>
          </div>
        </div>
      </section>

      {/* Modern Services Section */}
      <section id="services" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#38bdf8] text-center">Our Products & Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <a href="/services/body-protection" className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-[#334155] transition">
            <img src="/file.svg" alt="Body Protection" className="h-10 mb-2" />
            <span className="text-lg font-bold mb-1">Body Protection</span>
          </a>
          <a href="/services/head-protection" className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-[#334155] transition">
            <img src="/file.svg" alt="Head Protection" className="h-10 mb-2" />
            <span className="text-lg font-bold mb-1">Head Protection</span>
          </a>
          <a href="/services/hand-protection" className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-[#334155] transition">
            <img src="/file.svg" alt="Hand Protection" className="h-10 mb-2" />
            <span className="text-lg font-bold mb-1">Hand Protection</span>
          </a>
          <a href="/services/safety-footwear" className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-[#334155] transition">
            <img src="/file.svg" alt="Safety Footwear" className="h-10 mb-2" />
            <span className="text-lg font-bold mb-1">Safety Footwear</span>
          </a>
          <a href="/services/fall-protection" className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-[#334155] transition">
            <img src="/file.svg" alt="Fall Protection" className="h-10 mb-2" />
            <span className="text-lg font-bold mb-1">Fall Protection</span>
          </a>
          <a href="/services/fire-fighting" className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-[#334155] transition">
            <img src="/file.svg" alt="Fire Fighting" className="h-10 mb-2" />
            <span className="text-lg font-bold mb-1">Fire Fighting</span>
          </a>
          <a href="/services/life-saving" className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-[#334155] transition">
            <img src="/file.svg" alt="Life Saving" className="h-10 mb-2" />
            <span className="text-lg font-bold mb-1">Life Saving</span>
          </a>
          <a href="/services/traffic-safety" className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-[#334155] transition">
            <img src="/file.svg" alt="Traffic Safety" className="h-10 mb-2" />
            <span className="text-lg font-bold mb-1">Traffic Safety</span>
          </a>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section id="gallery-preview" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#38bdf8] text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img src="/gallery1.jpg" alt="Industrial Safety 1" className="rounded-xl shadow-lg object-cover w-full h-40" />
          <img src="/gallery2.jpg" alt="Industrial Safety 2" className="rounded-xl shadow-lg object-cover w-full h-40" />
          <img src="/gallery3.jpg" alt="Industrial Safety 3" className="rounded-xl shadow-lg object-cover w-full h-40" />
          <img src="/gallery4.jpg" alt="Industrial Safety 4" className="rounded-xl shadow-lg object-cover w-full h-40" />
        </div>
        <div className="flex justify-center mt-6">
          <a href="/gallery" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-8 py-3 rounded-full font-bold text-lg shadow-lg transition">View Full Gallery</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-[#1e293b]">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#38bdf8] text-center">Contact Us</h2>
        <div className="max-w-2xl mx-auto flex flex-col gap-6 bg-[#0f172a] p-8 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">Address</h3>
              <p className="text-gray-300">Mussafah M-45, Shop 91, Abu Dhabi, UAE</p>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-gray-300">026660233 / 0551960890</p>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-300">sales@boss-gt.com<br/>mahram@boss-gt.com</p>
            </div>
          </div>
          <form className="flex flex-col gap-4 mt-8">
            <input type="text" placeholder="Your Name" className="p-3 rounded bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none" required />
            <input type="email" placeholder="Your Email" className="p-3 rounded bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none" required />
            <textarea placeholder="Your Message" className="p-3 rounded bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none" rows={5} required />
            <button type="submit" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] px-8 py-3 rounded-full font-bold text-lg shadow-lg transition">Send Message</button>
          </form>
          <div className="flex gap-4 mt-6 justify-center">
            <a href="https://wa.me/971551960890" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2"><span>WhatsApp</span></a>
            <a href="https://instagram.com/boss_gt_abudhabi" target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2"><span>Instagram</span></a>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <iframe src="https://www.google.com/maps?q=Mussafah+M-45,+Abu+Dhabi,+UAE&output=embed" width="400" height="200" className="rounded-xl border-0 shadow-lg" loading="lazy" title="Boss General Trading Location"></iframe>
        </div>
      </section>

      {/* Footer */}
  <footer className="py-8 text-center text-gray-400 bg-[#0f172a] border-t border-[#1e293b] mt-8 font-display">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-2">
          <span>Address: Mussafah M-45, Shop 91, Abu Dhabi, UAE</span>
          <span>Phone: 026660233 / 0551960890</span>
          <span>Email: sales@boss-gt.com</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Boss General Trading. All rights reserved.</p>
      </footer>
    </div>
  );
}
