import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  IoCutOutline, IoCalendarOutline, IoGiftOutline, 
  IoWalletOutline, IoStar, IoLogOutOutline, 
  IoPersonOutline, IoTimeOutline, IoCheckmarkCircle,
  IoArrowForwardOutline
} from "react-icons/io5";

export default function MemberDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full p-6"
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-amber-500 text-sm mb-2">
          <IoCutOutline className="text-xl transform -rotate-45" />
          <span className="font-black uppercase tracking-wider text-amber-600">Member Area</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-neutral-900">
          Hai, <span className="text-amber-500">Member!</span>
        </h1>
        <p className="text-neutral-400 text-sm mt-1">Selamat datang di dashboard member Crown&Co.</p>
      </div>

      {/* Card Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Booking", value: "8", icon: <IoCalendarOutline />, color: "amber" },
          { label: "Poin Saya", value: "1.250", icon: <IoStar />, color: "blue" },
          { label: "Voucher", value: "2", icon: <IoGiftOutline />, color: "green" },
          { label: "Total Belanja", value: "Rp 850K", icon: <IoWalletOutline />, color: "purple" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`bg-white rounded-2xl p-5 shadow-sm border border-${stat.color === 'amber' ? 'amber' : stat.color === 'blue' ? 'blue' : stat.color === 'green' ? 'emerald' : 'purple'}-100`}
          >
            <div className={`text-${stat.color === 'amber' ? 'amber' : stat.color === 'blue' ? 'blue' : stat.color === 'green' ? 'emerald' : 'purple'}-500 text-2xl mb-2`}>
              {stat.icon}
            </div>
            <p className="text-sm text-neutral-500">{stat.label}</p>
            <p className="text-2xl font-black text-neutral-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Profil Saya", icon: <IoPersonOutline />, path: "/member/profile" },
          { label: "Riwayat Booking", icon: <IoTimeOutline />, path: "/member/history" },
          { label: "Voucher Saya", icon: <IoGiftOutline />, path: "/member/voucher" },
          { label: "Logout", icon: <IoLogOutOutline />, path: "/" },
        ].map((menu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to={menu.path}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200 transition-all block group"
            >
              <div className="text-amber-500 text-3xl mb-2 group-hover:scale-110 transition-transform">
                {menu.icon}
              </div>
              <span className="text-sm font-bold text-neutral-700 group-hover:text-amber-600 transition-colors">
                {menu.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Recent Booking */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-black text-neutral-900">📋 Riwayat Booking Terbaru</h3>
          <Link to="/member/history" className="text-xs font-bold text-amber-500 hover:text-amber-600 transition flex items-center gap-1">
            Lihat Semua <IoArrowForwardOutline className="text-xs" />
          </Link>
        </div>
        <div className="space-y-3">
          {[
            { service: "Haircut & Styling", date: "15 Juni 2024", status: "Selesai" },
            { service: "K-Treatment Scalp", date: "10 Juni 2024", status: "Proses" },
            { service: "Coloring Ash Grey", date: "05 Juni 2024", status: "Proses" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + idx * 0.1 }}
              className="flex justify-between items-center p-3 bg-neutral-50 rounded-xl hover:bg-amber-50/50 transition"
            >
              <div>
                <p className="font-bold text-neutral-800">{item.service}</p>
                <p className="text-xs text-neutral-400">{item.date}</p>
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                item.status === "Selesai" 
                  ? "bg-green-100 text-green-600" 
                  : "bg-amber-100 text-amber-600"
              }`}>
                {item.status === "Selesai" ? <><IoCheckmarkCircle className="inline mr-1" /> {item.status}</> : item.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Back to Home */}
      <div className="mt-6 text-center">
        <Link to="/" className="text-xs font-bold text-neutral-400 hover:text-amber-500 transition inline-flex items-center gap-1">
          ← Kembali ke Beranda
        </Link>
      </div>
    </motion.div>
  );
}