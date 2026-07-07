import { useState } from "react";
import { FiTag, FiClock, FiUsers, FiPercent, FiGift, FiCopy, FiCheck, FiAward } from "react-icons/fi";

// DATA PROMOTIONS DENGAN LEVEL MEMBERSHIP
const promotionsData = [
  {
    id: 1,
    title: "Promo Potong Rambut + Beard",
    description: "Dapatkan diskon 20% untuk paket potong rambut + cukur jenggot",
    discount: "20%",
    code: "CROWN20",
    validUntil: "2026-07-31",
    image: "https://www.shutterstock.com/image-photo/shaggy-bearded-young-guy-long-260nw-2483725761.jpg",
    type: "Diskon",
    membership: "Semua Level",
    isActive: true,
  },
  {
    id: 2,
    title: "Paket Wedding Hair Styling",
    description: "Spesial paket tata rambut pengantin + makeup, diskon 15%",
    discount: "15%",
    code: "WEDDING15",
    validUntil: "2026-08-15",
    image: "https://wp-assets.makemebridal.co.uk/uploads/2022/01/008-naturally-curly-hair-wedding-hairstyles-zoe-sharman-hair-and-makeup-681x1024.jpeg",
    type: "Paket",
    membership: "Gold & Platinum",
    isActive: true,
  },
  {
    id: 3,
    title: "Gratis Treatment Rambut",
    description: "Dapatkan gratis hair treatment dengan pembelian produk Crown&Co",
    discount: "100%",
    code: "TREATMENTFREE",
    validUntil: "2026-07-25",
    image: "https://images.alodokter.com/dk0z4ums3/image/upload/v1675244075/attached_image/pilihan-perawatan-di-salon-rambut-yang-bisa-kamu-coba.jpg",
    type: "Gratis",
    membership: "Platinum Only",
    isActive: true,
  },
  {
    id: 4,
    title: "Diskon Member Baru",
    description: "Diskon 10% untuk member baru yang registrasi di bulan Juli",
    discount: "10%",
    code: "NEWMEMBER10",
    validUntil: "2026-07-30",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=200&fit=crop",
    type: "Member",
    membership: "Silver & Gold",
    isActive: true,
  },
  {
    id: 5,
    title: "Promo Spesial Platinum",
    description: "Diskon 30% untuk semua layanan khusus member Platinum",
    discount: "30%",
    code: "PLATINUM30",
    validUntil: "2026-08-31",
    image: "https://i0.wp.com/zaloraadmin.wpcomstaging.com/wp-content/uploads/2025/08/inspirasi-warna-rambut-blonde-hair.png?fit=1200%2C600&ssl=1",
    type: "Diskon",
    membership: "Platinum Only",
    isActive: true,
  },
];

export default function Promotions() {
  const [copyCode, setCopyCode] = useState(null);
  const [filter, setFilter] = useState("Semua");
  const [membershipFilter, setMembershipFilter] = useState("Semua Level");

  const typeColors = {
    Diskon: "bg-green-500/20 text-green-600 border-green-500/30",
    Paket: "bg-blue-500/20 text-blue-600 border-blue-500/30",
    Gratis: "bg-purple-500/20 text-purple-600 border-purple-500/30",
    Member: "bg-orange-500/20 text-orange-600 border-orange-500/30",
  };

  const typeIcons = {
    Diskon: <FiPercent />,
    Paket: <FiGift />,
    Gratis: <FiGift />,
    Member: <FiUsers />,
  };

  const membershipColors = {
    "Semua Level": "text-zinc-600 bg-zinc-200/50",
    "Silver & Gold": "text-gray-600 bg-gray-200/50",
    "Gold & Platinum": "text-yellow-600 bg-yellow-200/50",
    "Platinum Only": "text-purple-600 bg-purple-200/50",
  };

  const filterTypes = ["Semua", "Diskon", "Paket", "Gratis", "Member"];
  const filterMembership = ["Semua Level", "Silver & Gold", "Gold & Platinum", "Platinum Only"];

  const filteredData = promotionsData.filter(item => {
    const matchType = filter === "Semua" || item.type === filter;
    const matchMembership = membershipFilter === "Semua Level" || item.membership === membershipFilter;
    return matchType && matchMembership;
  });

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopyCode(code);
    setTimeout(() => setCopyCode(null), 2000);
  };

  // HITUNG STATISTIK
  const stats = {
    total: promotionsData.length,
    active: promotionsData.filter(item => item.isActive).length,
    inactive: promotionsData.filter(item => !item.isActive).length,
  };

  return (
    <div className="px-8 pb-8 pt-0">
      <div className="mb-6">
        <h1 className="text-5xl font-extralight tracking-[0.15em] text-white mb-0">Promotions</h1>
        <p className="text-zinc-400 text-xl font-light tracking-[0.2em] uppercase">Promo & Diskon Spesial</p>
      </div>

      {/* STATISTIK */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#FFF8E7] rounded-2xl p-4 border border-[#F5B301]/30">
          <p className="text-[#8B7A3A] text-sm font-medium">Total Promo</p>
          <p className="text-[#5C4A1E] text-2xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-[#E8F5E9] rounded-2xl p-4 border border-green-500/30">
          <p className="text-green-700 text-sm font-medium">Aktif</p>
          <p className="text-green-800 text-2xl font-bold">{stats.active}</p>
        </div>
        <div className="bg-[#FFEBEE] rounded-2xl p-4 border border-red-500/30">
          <p className="text-red-600 text-sm font-medium">Tidak Aktif</p>
          <p className="text-red-700 text-2xl font-bold">{stats.inactive}</p>
        </div>
      </div>

      {/* FILTER TIPE */}
      <div className="flex gap-3 mb-4 flex-wrap">
        {filterTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize
              ${filter === type 
                ? "bg-[#F5B301] text-black font-bold shadow-lg shadow-[#F5B301]/30" 
                : "bg-[#FFF8E7] text-[#5C4A1E] hover:bg-[#F5B301]/20 hover:text-black"}
            `}
          >
            {type}
          </button>
        ))}
      </div>

      {/* FILTER MEMBERSHIP */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {filterMembership.map((level) => (
          <button
            key={level}
            onClick={() => setMembershipFilter(level)}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${membershipFilter === level 
                ? "bg-[#F5B301] text-black font-bold shadow-lg shadow-[#F5B301]/30" 
                : "bg-[#FFF8E7] text-[#5C4A1E] hover:bg-[#F5B301]/20 hover:text-black"}
            `}
          >
            <div className="flex items-center gap-2">
              <FiAward size={14} />
              {level}
            </div>
          </button>
        ))}
      </div>

      {/* GRID PROMOTIONS - CARD KUNING MUDA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredData.map((promo) => (
          <div
            key={promo.id}
            className={`bg-gradient-to-br from-[#FFF8E7] to-[#FFEFD5] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 border border-[#F5B301]/30 shadow-lg shadow-[#F5B301]/10 ${
              !promo.isActive ? "opacity-50" : ""
            }`}
          >
            {/* GAMBAR */}
            <div className="relative h-48">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <span className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm bg-white/80 ${typeColors[promo.type]}`}>
                  {typeIcons[promo.type]}
                  {promo.type}
                </span>
                <span className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm bg-white/80 ${membershipColors[promo.membership] || "text-zinc-600 bg-white/80"}`}>
                  <FiAward size={12} />
                  {promo.membership}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white text-3xl font-bold">{promo.discount}</span>
                <span className="text-white/80 text-sm ml-2 font-medium">OFF</span>
              </div>
              {!promo.isActive && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white text-xl font-bold uppercase tracking-widest">Expired</span>
                </div>
              )}
            </div>

            {/* KONTEN */}
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#3D2B00] mb-2">{promo.title}</h3>
                  <p className="text-[#5C4A1E]/80 text-sm mb-4">{promo.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2 text-[#5C4A1E]/60 text-sm">
                  <FiClock />
                  <span>Berlaku hingga: {promo.validUntil}</span>
                </div>
              </div>

              {/* KODE PROMO */}
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white/60 rounded-xl px-4 py-3 border border-[#F5B301]/30">
                  <span className="text-[#8B6914] font-mono font-bold tracking-wider">
                    {promo.code}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(promo.code)}
                  className="px-6 py-3 bg-[#F5B301] text-black font-semibold rounded-xl hover:bg-[#dba102] transition-all flex items-center gap-2 shadow-lg shadow-[#F5B301]/30"
                >
                  {copyCode === promo.code ? (
                    <>
                      <FiCheck />
                      Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* KALO GA ADA DATA */}
      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <div className="text-zinc-600 text-6xl mb-4">🏷️</div>
          <h3 className="text-white text-xl font-semibold mb-2">Tidak Ada Promo</h3>
          <p className="text-zinc-500">Tidak ada promo dengan filter yang dipilih</p>
        </div>
      )}
    </div>
  );
}