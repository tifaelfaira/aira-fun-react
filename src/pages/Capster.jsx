import { useState } from "react";
import { FiStar, FiChevronRight, FiArrowLeft } from "react-icons/fi";

// DATA CAPSTER
const capsterData = [
  {
    id: 1,
    name: "Jun Samuel",
    photo: "https://akcdn.detik.net.id/visual/2020/03/11/326efe2f-a673-4ea1-a7b3-28a636be8c54_11.jpeg?w=480&q=90",
    specialty: "Spesialis Potong Pria & Modern",
    description: "Berpengalaman 5 tahun di salon premium. Ahli dalam teknik fade dan potong klasik.",
    rating: 4.8,
    totalReviews: 120,
    experience: "5 Tahun",
    schedule: "Senin - Jumat, 10:00 - 20:00",
  },
  {
    id: 2,
    name: "Sarah Young",
    photo: "https://i.pinimg.com/1200x/57/db/5f/57db5f4aeca0870f40cc99b0aa3d58d5.jpg",
    specialty: "Ahli Pewarnaan & Styling",
    description: "Spesialis coloring, balayage, dan hair styling untuk berbagai acara.",
    rating: 4.9,
    totalReviews: 95,
    experience: "7 Tahun",
    schedule: "Senin - Sabtu, 09:00 - 18:00",
  },
  {
    id: 3,
    name: "Rizky M",
    photo: "https://assets.unileversolutions.com/v1/134327704.jpg",
    specialty: "Master Potong Klasik & Kreasi",
    description: "Pakar potongan rambut klasik, undercut, dan desain kreatif untuk pria & wanita.",
    rating: 4.7,
    totalReviews: 85,
    experience: "4 Tahun",
    schedule: "Selasa - Minggu, 11:00 - 21:00",
  },
  {
    id: 4,
    name: "Mina jey",
    photo: "https://media.suara.com/pictures/original/2019/06/22/77271-nyma-tang-instagramatnymatang.jpg",
    specialty: "Spesialis Rambut Keriting & Treatment",
    description: "Ahli perawatan rambut keriting, smoothing, dan hair mask treatment.",
    rating: 4.6,
    totalReviews: 70,
    experience: "3 Tahun",
    schedule: "Rabu - Minggu, 10:00 - 19:00",
  },
  {
    id: 5,
    name: "Erick Rein",
    photo: "https://maaz.id/wp-content/uploads/2021/02/Model-Rambut-Bro-Flow-Maaz-Grooming.webp",
    specialty: "Barber & Beard Stylist",
    description: "Spesialis cukur jenggot, potong rambut pria, dan grooming.",
    rating: 4.9,
    totalReviews: 150,
    experience: "6 Tahun",
    schedule: "Senin - Sabtu, 08:00 - 17:00",
  },
  {
    id: 6,
    name: "Maya Sari",
    photo: "https://www.ruparupa.com/blog/wp-content/uploads/2021/11/medium-length-leyered-hair.jpg",
    specialty: "Hair Stylist Bridal & Special Occasion",
    description: "Spesialis tata rambut pengantin, pesta, dan acara formal.",
    rating: 4.8,
    totalReviews: 110,
    experience: "8 Tahun",
    schedule: "Selasa - Minggu, 09:00 - 20:00",
  },
];

export default function Capster() {
  const [selectedCapster, setSelectedCapster] = useState(null);

  // RENDER BINTANG RATING
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FiStar key={i} className="fill-yellow-400 text-yellow-400" />);
    }
    if (rating % 1 !== 0) {
      stars.push(<FiStar key="half" className="fill-yellow-400 text-yellow-400 opacity-50" />);
    }
    return stars;
  };

  // KALO ADA CAPSTER YANG DI KLIK "SEE DETAIL"
  if (selectedCapster) {
    return (
      <div className="p-8">
        <button
          onClick={() => setSelectedCapster(null)}
          className="mb-6 text-zinc-500 hover:text-white transition-colors flex items-center gap-2"
        >
          <FiArrowLeft />
          Kembali ke Daftar Capster
        </button>

        <div className="bg-[#111111] rounded-3xl p-8 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={selectedCapster.photo}
              alt={selectedCapster.name}
              className="w-48 h-48 rounded-2xl object-cover"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">{selectedCapster.name}</h2>
              <p className="text-[#F5B301] font-semibold mb-4">{selectedCapster.specialty}</p>
              
              <div className="flex items-center gap-2 mb-4">
                {renderStars(selectedCapster.rating)}
                <span className="text-white font-semibold ml-2">{selectedCapster.rating}</span>
                <span className="text-zinc-500">({selectedCapster.totalReviews} ulasan)</span>
              </div>

              <p className="text-zinc-300 mb-6 leading-relaxed">{selectedCapster.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-zinc-500">Pengalaman</span>
                  <p className="text-white font-semibold">{selectedCapster.experience}</p>
                </div>
                <div>
                  <span className="text-zinc-500">Jadwal</span>
                  <p className="text-white font-semibold">{selectedCapster.schedule}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // TAMPILAN DAFTAR CAPSTER (STYLE ELEGAN)
  return (
    <div className="px-8 pb-8 pt-0">
      <div className="mb-3">
        <h1 className="text-5xl font-extralight tracking-[0.15em] text-white mb-0">Capster</h1>
        <p className="text-zinc-400 text-xl font-light tracking-[0.2em] uppercase">Daftar Hairstylist Profesional Kami</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capsterData.map((capster) => (
          <div
            key={capster.id}
            className="bg-[#111111] rounded-2xl p-6 hover:bg-[#181818] transition-all duration-300"
          >
            {/* GAMBAR */}
            <div className="flex justify-center mb-4">
              <img
                src={capster.photo}
                alt={capster.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-[#F5B301]"
              />
            </div>

            {/* NAMA */}
            <h3 className="text-xl font-bold text-white text-center mb-1">{capster.name}</h3>

            {/* SPESIALIS */}
            <p className="text-[#F5B301] text-sm text-center mb-3">{capster.specialty}</p>

            {/* DESKRIPSI */}
            <p className="text-zinc-400 text-sm text-center mb-4 line-clamp-2">
              {capster.description}
            </p>

            {/* RATING */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {renderStars(capster.rating)}
              <span className="text-white font-semibold ml-1">{capster.rating}</span>
              <span className="text-zinc-500 text-sm">({capster.totalReviews})</span>
            </div>

            {/* SEE DETAIL BUTTON */}
            <button
              onClick={() => setSelectedCapster(capster)}
              className="
                w-full
                bg-[#F5B301]
                text-white
                font-semibold
                py-2.5
                rounded-xl
                hover:bg-[#dba102]
                transition-all
                flex items-center justify-center gap-2
              "
            >
              See Detail
              <FiChevronRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}