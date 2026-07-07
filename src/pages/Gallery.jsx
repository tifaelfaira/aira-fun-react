import { useState } from "react";
import { FiX, FiZoomIn } from "react-icons/fi";

// DATA GALLERY
const galleryData = [
  {
    id: 1,
    title: "Potongan Fade Modern",
    capster: "Andi Pratama",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=300&fit=crop",
    category: "Pria",
  },
  {
    id: 2,
    title: "Balayage Rambut Panjang",
    capster: "Siti Rahayu",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop",
    category: "Wanita",
  },
  {
    id: 3,
    title: "Potongan Klasik Undercut",
    capster: "Budi Santoso",
    image: "https://www.thefashionisto.com/wp-content/uploads/2024/01/Comb-Over-Undercut-Hairstyle.jpg",
    category: "Pria",
  },
  {
    id: 4,
    title: "Styling Rambut Keriting",
    capster: "Dewi Lestari",
    image: "https://c.inilah.com/reborn/2025/10/Rekomendasi_model_rambut_pria_keriting_Foto_Gemini_11zon_affb17e0c7.jpg",
    category: "Wanita",
  },
  {
    id: 5,
    title: "Cukur Jenggot & Grooming",
    capster: "Rizky Febrian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJGyGTfCX9MsYzsq_9ONd7u6tbxCjXbMGWAtNLqYqlexnQj1XZdrFZio&s=10",
    category: "Pria",
  },
  {
    id: 6,
    title: "Tata Rambut Pengantin",
    capster: "Maya Sari",
    image: "https://images.weddingku.com/images/upload/articles/images/braidedhairstyleforbrides1.jpg",
    category: "Wanita",
  },
  {
    id: 7,
    title: "Pompadour Classic",
    capster: "Andi Pratama",
    image: "https://gatsby.sg/img/men-lifestyle/longtail_pompadour-img/07_FullVolumePompadour.jpg",
    category: "Pria",
  },
  {
    id: 8,
    title: "Hair Treatment Smoothing",
    capster: "Siti Rahayu",
    image: "https://i0.wp.com/zaloraadmin.wpcomstaging.com/wp-content/uploads/2025/09/image-273.png?fit=1200%2C620&ssl=1",
    category: "Wanita",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("Semua");

  const categories = ["Semua", "Pria", "Wanita"];

  const filteredData = filter === "Semua" 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  // MODAL ZOOM
  if (selectedImage) {
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-6 right-6 text-white hover:text-[#F5B301] transition-colors"
        >
          <FiX size={32} />
        </button>
        <img
          src={selectedImage.image}
          alt={selectedImage.title}
          className="max-w-full max-h-[90vh] rounded-2xl object-contain"
        />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white">
          <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
          <p className="text-zinc-400">By: {selectedImage.capster}</p>
          <span className="inline-block mt-2 px-3 py-1 bg-[#F5B301]/20 text-[#F5B301] rounded-full text-xs font-semibold">
            {selectedImage.category}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="px-8 pb-8 pt-0">
      <div className="mb-6">
        <h1 className="text-5xl font-extralight tracking-[0.15em] text-white mb-0">Gallery</h1>
        <p className="text-zinc-400 text-xl font-light tracking-[0.2em] uppercase">Koleksi Hasil Karya Kami</p>
      </div>

      {/* FILTER KATEGORI */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${filter === cat 
                ? "bg-[#F5B301] text-white" 
                : "bg-[#111111] text-zinc-400 hover:bg-[#1a1a1a]"}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID GALLERY */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="group relative bg-[#111111] rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300"
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-zinc-400 text-sm">By: {item.capster}</p>
              <span className="inline-block mt-2 text-[#F5B301] text-xs font-semibold uppercase tracking-wider">
                {item.category}
              </span>
            </div>
            <div className="absolute top-4 right-4 bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
              <FiZoomIn className="text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}