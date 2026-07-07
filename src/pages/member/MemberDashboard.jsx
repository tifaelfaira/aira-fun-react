import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  IoCutOutline, IoCalendarOutline, IoGiftOutline, 
  IoWalletOutline, IoStar, IoLogOutOutline, 
  IoPersonOutline, IoTimeOutline, IoCheckmarkCircle,
  IoArrowForwardOutline, IoDiamondOutline, IoMedalOutline,
  IoRibbonOutline, IoCloseOutline,
  IoSparklesOutline, IoStarOutline
} from "react-icons/io5";

export default function MemberDashboard() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("Reguler");
  const [currentLevel, setCurrentLevel] = useState("Reguler");
  const [isLoading, setIsLoading] = useState(false);
  
  // STATE UNTUK DATA MEMBER
  const [memberName, setMemberName] = useState("Member");
  const [memberMembership, setMemberMembership] = useState("Regular");
  const [memberData, setMemberData] = useState({
    totalBooking: 0,
    totalPoints: 0,
    totalSpent: 0,
  });

  // AMBIL DATA DARI LOCALSTORAGE
  useEffect(() => {
    const savedData = localStorage.getItem("memberData");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setMemberName(parsed.fullName || "Member");
        setMemberMembership(parsed.membership || "Regular");
        setMemberData({
          totalBooking: parsed.totalBooking || 0,
          totalPoints: parsed.totalPoints || 0,
          totalSpent: parsed.totalSpent || 0,
        });
        setCurrentLevel(parsed.membership || "Reguler");
      } catch (e) {}
    }
  }, []);

  // Data paket membership
  const membershipPackages = [
    { 
      level: "Reguler", 
      icon: <IoStarOutline className="text-3xl" />, 
      color: "from-gray-300 to-gray-400", 
      textColor: "text-gray-600",
      benefits: [
        "Diskon 5% setiap transaksi",
        "Poin 0.5x lipat",
        "Akses ke semua layanan"
      ],
      price: "Gratis",
      priceDetail: "Selamanya",
      isPopular: false
    },
    { 
      level: "Silver", 
      icon: <IoMedalOutline className="text-3xl" />, 
      color: "from-gray-400 to-gray-500", 
      textColor: "text-gray-600",
      benefits: [
        "Diskon 10% setiap transaksi",
        "Free konsultasi styling",
        "Poin 1x lipat",
        "Voucher ulang tahun Rp 25.000"
      ],
      price: "Rp 75.000",
      priceDetail: "/ tahun",
      isPopular: false
    },
    { 
      level: "Gold", 
      icon: <IoStar className="text-3xl" />, 
      color: "from-amber-400 to-amber-600", 
      textColor: "text-amber-600",
      benefits: [
        "Diskon 20% setiap transaksi",
        "Free hair serum setiap bulan",
        "Poin 2x lipat",
        "Voucher ulang tahun Rp 50.000"
      ],
      price: "Rp 150.000",
      priceDetail: "/ tahun",
      isPopular: true
    },
    { 
      level: "Premium", 
      icon: <IoDiamondOutline className="text-3xl" />, 
      color: "from-purple-500 to-purple-700", 
      textColor: "text-purple-600",
      benefits: [
        "Diskon 30% setiap transaksi",
        "Free treatment setiap bulan",
        "Poin 3x lipat",
        "Voucher ulang tahun Rp 100.000",
        "Akses prioritas booking",
        "Free hair product setiap 3 bulan"
      ],
      price: "Rp 350.000",
      priceDetail: "/ tahun",
      isPopular: false
    }
  ];

  const handleUpgrade = () => {
    setIsModalOpen(false);
    navigate(`/member/upgrade?package=${selectedPackage}`);
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  // BADGE MEMBERSHIP
  const membershipBadge = {
    Regular: "bg-gray-500",
    Silver: "bg-gray-400",
    Gold: "bg-yellow-500",
    Premium: "bg-purple-500",
  };

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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-neutral-900">
              Hai, <span className="text-amber-500">{memberName}!</span> {/* <-- NAMA MEMBER */}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-neutral-400 text-sm">Selamat datang di dashboard member Crown&Co.</p>
              <span className={`px-3 py-0.5 rounded-full text-xs font-bold text-white ${membershipBadge[memberMembership] || 'bg-gray-500'}`}>
                {memberMembership}
              </span>
            </div>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black text-xs px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2"
          >
            <IoSparklesOutline className="text-sm" />
            Upgrade Membership
          </button>
        </div>
      </div>

      {/* Card Stats - PAKE DATA DARI LOCALSTORAGE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-100">
          <IoCalendarOutline className="text-amber-500 text-2xl mb-2" />
          <p className="text-sm text-neutral-500">Total Booking</p>
          <p className="text-2xl font-black text-neutral-900">{memberData.totalBooking}</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100">
          <IoStar className="text-blue-500 text-2xl mb-2" />
          <p className="text-sm text-neutral-500">Poin Saya</p>
          <p className="text-2xl font-black text-neutral-900">{memberData.totalPoints}</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-green-100">
          <IoGiftOutline className="text-green-500 text-2xl mb-2" />
          <p className="text-sm text-neutral-500">Voucher</p>
          <p className="text-2xl font-black text-neutral-900">2</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-purple-100">
          <IoWalletOutline className="text-purple-500 text-2xl mb-2" />
          <p className="text-sm text-neutral-500">Total Belanja</p>
          <p className="text-2xl font-black text-neutral-900">Rp {(memberData.totalSpent / 1000).toFixed(0)}K</p>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Link to="/member/profile" className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200 transition-all block group">
          <div className="text-amber-500 text-3xl mb-2 group-hover:scale-110 transition-transform">
            <IoPersonOutline />
          </div>
          <span className="text-sm font-bold text-neutral-700 group-hover:text-amber-600 transition-colors">Profil Saya</span>
        </Link>
        <Link to="/member/history" className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200 transition-all block group">
          <div className="text-amber-500 text-3xl mb-2 group-hover:scale-110 transition-transform">
            <IoTimeOutline />
          </div>
          <span className="text-sm font-bold text-neutral-700 group-hover:text-amber-600 transition-colors">Riwayat Booking</span>
        </Link>
        <Link to="/member/voucher" className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200 transition-all block group">
          <div className="text-amber-500 text-3xl mb-2 group-hover:scale-110 transition-transform">
            <IoGiftOutline />
          </div>
          <span className="text-sm font-bold text-neutral-700 group-hover:text-amber-600 transition-colors">Voucher Saya</span>
        </Link>
        <button onClick={handleLogout} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200 transition-all block group">
          <div className="text-red-400 text-3xl mb-2 group-hover:scale-110 transition-transform">
            <IoLogOutOutline />
          </div>
          <span className="text-sm font-bold text-neutral-700 group-hover:text-red-500 transition-colors">Logout</span>
        </button>
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

      {/* ========== MODAL UPGRADE MEMBERSHIP ========== */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-2xl max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Header Modal */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-black text-neutral-900 flex items-center gap-2">
                  <IoRibbonOutline className="text-amber-500" />
                  Upgrade Membership
                </h3>
                <p className="text-sm text-neutral-400 mt-1">Pilih paket yang sesuai dengan kebutuhanmu</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
              >
                <IoCloseOutline className="text-2xl" />
              </button>
            </div>

            {/* Member Saat Ini */}
            <div className="bg-amber-50 rounded-xl p-3 mb-6 flex items-center justify-between">
              <span className="text-sm text-neutral-600">📌 Member Saat Ini</span>
              <span className={`font-black px-4 py-1 rounded-full shadow-sm border ${
                currentLevel === "Gold" ? "text-amber-600 bg-white border-amber-200" :
                currentLevel === "Premium" ? "text-purple-600 bg-white border-purple-200" :
                currentLevel === "Silver" ? "text-gray-600 bg-white border-gray-200" :
                "text-gray-500 bg-white border-gray-200"
              }`}>
                {currentLevel}
              </span>
            </div>

            {/* Paket Membership */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {membershipPackages.map((pkg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    selectedPackage === pkg.level 
                      ? 'border-amber-500 bg-amber-50 shadow-md' 
                      : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50/50'
                  } ${pkg.level === "Gold" && selectedPackage !== pkg.level ? 'border-amber-300' : ''}`}
                  onClick={() => setSelectedPackage(pkg.level)}
                >
                  {pkg.isPopular && (
                    <div className="flex justify-between items-start">
                      <div className="bg-amber-500 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Popular
                      </div>
                    </div>
                  )}
                  {!pkg.isPopular && <div className="h-5"></div>}

                  <div className="text-center">
                    <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${pkg.color} text-white flex items-center justify-center mb-2 ${selectedPackage === pkg.level ? 'scale-110' : ''} transition-transform`}>
                      {pkg.icon}
                    </div>
                    <h4 className={`font-black text-lg ${pkg.textColor}`}>{pkg.level}</h4>
                    <div className="flex items-center justify-center gap-1">
                      <span className="font-black text-neutral-900">{pkg.price}</span>
                      <span className="text-xs text-neutral-400">{pkg.priceDetail}</span>
                    </div>
                  </div>

                  <div className="flex justify-center mt-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedPackage === pkg.level 
                        ? 'border-amber-500 bg-amber-500' 
                        : 'border-gray-300'
                    }`}>
                      {selectedPackage === pkg.level && (
                        <IoCheckmarkCircle className="text-white text-xs" />
                      )}
                    </div>
                  </div>

                  <ul className="mt-3 space-y-1.5 border-t border-gray-100 pt-3">
                    {pkg.benefits.map((benefit, i) => (
                      <li key={i} className="text-[10px] text-neutral-600 flex items-start gap-1.5">
                        <IoCheckmarkCircle className={`text-${pkg.level === 'Gold' ? 'amber' : pkg.level === 'Premium' ? 'purple' : pkg.level === 'Silver' ? 'gray' : 'gray'}-500 text-[10px] flex-shrink-0 mt-0.5`} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <button
              onClick={handleUpgrade}
              disabled={isLoading}
              className="w-full mt-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/30 text-sm uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <>
                <IoSparklesOutline className="text-lg" />
                Konfirmasi Upgrade ke {selectedPackage}
              </>
            </button>

            <p className="text-center text-[9px] text-neutral-400 mt-3">
              ⚡ Upgrade dapat dilakukan kapan saja. Biaya akan dipotong dari saldo member.
            </p>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}