import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  IoArrowBackOutline, IoCheckmarkCircle, IoTimeOutline,
  IoCalendarOutline, IoCutOutline, IoColorPaletteOutline,
  IoSparklesOutline, IoHappyOutline, IoCloseCircleOutline
} from "react-icons/io5";

export default function MemberHistory() {
  const bookings = [
    { 
      id: 1,
      service: "Haircut & Styling", 
      date: "15 Juni 2024",
      time: "14:30",
      status: "Selesai",
      price: "Rp 85.000",
      stylist: "Kak Jun",
      icon: <IoCutOutline className="text-amber-500" />
    },
    { 
      id: 2,
      service: "K-Treatment Scalp", 
      date: "10 Juni 2024",
      time: "10:00",
      status: "Proses",
      price: "Rp 130.000",
      stylist: "Kak Rizky",
      icon: <IoSparklesOutline className="text-amber-500" />
    },
    { 
      id: 3,
      service: "Coloring Ash Grey", 
      date: "05 Juni 2024",
      time: "15:45",
      status: "Proses",
      price: "Rp 195.000",
      stylist: "Kak Mina",
      icon: <IoColorPaletteOutline className="text-amber-500" />
    },
    { 
      id: 4,
      service: "Beard Grooming", 
      date: "28 Mei 2024",
      time: "11:20",
      status: "Selesai",
      price: "Rp 60.000",
      stylist: "Kak Sarah",
      icon: <IoHappyOutline className="text-amber-500" />
    },
    { 
      id: 5,
      service: "Haircut & Styling", 
      date: "20 Mei 2024",
      time: "09:00",
      status: "Dibatalkan",
      price: "Rp 85.000",
      stylist: "Kak Jun",
      icon: <IoCutOutline className="text-amber-500" />
    },
  ];

  const getStatusStyle = (status) => {
    switch(status) {
      case "Selesai":
        return "bg-green-100 text-green-600 border-green-200";
      case "Proses":
        return "bg-amber-100 text-amber-600 border-amber-200";
      case "Dibatalkan":
        return "bg-red-100 text-red-600 border-red-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case "Selesai":
        return <IoCheckmarkCircle className="inline mr-1" />;
      case "Proses":
        return <IoTimeOutline className="inline mr-1" />;
      case "Dibatalkan":
        return <IoCloseCircleOutline className="inline mr-1" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full p-6"
    >
      {/* Back Button */}
      <Link to="/member/dashboard" className="inline-flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-amber-500 transition mb-6">
        <IoArrowBackOutline /> Kembali ke Dashboard
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-amber-100 px-3 py-1 rounded-full mb-2">
          <IoCalendarOutline className="text-amber-500 text-xs" />
          <span className="text-[9px] font-black text-amber-600 uppercase tracking-wider">Riwayat</span>
        </div>
        <h1 className="text-3xl font-black text-neutral-900">Riwayat Booking</h1>
        <p className="text-neutral-400 text-sm mt-1">Lihat semua riwayat booking Anda</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
          <p className="text-2xl font-black text-amber-500">5</p>
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Total</p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
          <p className="text-2xl font-black text-green-500">3</p>
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Selesai</p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
          <p className="text-2xl font-black text-amber-500">2</p>
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Proses</p>
        </div>
      </div>

      {/* Booking List */}
      <div className="space-y-4">
        {bookings.map((booking, idx) => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 text-xl">
                  {booking.icon}
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800">{booking.service}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-neutral-500 mt-1">
                    <span className="flex items-center gap-1">
                      <IoCalendarOutline className="text-xs" />
                      {booking.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <IoTimeOutline className="text-xs" />
                      {booking.time}
                    </span>
                    <span className="font-medium text-amber-600">{booking.price}</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">💇 Stylist: {booking.stylist}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${getStatusStyle(booking.status)}`}>
                  {getStatusIcon(booking.status)}
                  {booking.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State (just in case) */}
      {bookings.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📋</div>
          <p className="text-neutral-400">Belum ada riwayat booking</p>
        </div>
      )}
    </motion.div>
  );
}