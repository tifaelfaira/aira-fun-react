import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { 
  FiCheck, 
  FiX, 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiCalendar,
  FiCreditCard,
  FiShield,
  FiAward,
  FiStar,
  FiGift,
  FiZap
} from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";

const membershipPlans = [
  {
    id: "regular",
    name: "Regular",
    price: "Gratis",
    priceYearly: "Rp 0",
    icon: <FiUser className="text-2xl" />,
    color: "from-gray-600 to-gray-800",
    borderColor: "border-gray-600",
    badgeColor: "bg-gray-600",
    benefits: [
      "Diskon 5% setiap transaksi",
      "Poin 0.5x lipat",
      "Akses ke semua layanan"
    ]
  },
  {
    id: "silver",
    name: "Silver",
    price: "Rp 75.000",
    priceYearly: "Rp 75.000 / tahun",
    icon: <FiStar className="text-2xl" />,
    color: "from-gray-400 to-gray-500",
    borderColor: "border-gray-400",
    badgeColor: "bg-gray-400",
    benefits: [
      "Diskon 10% setiap transaksi",
      "Free konsultasi styling",
      "Poin 1x lipat",
      "Voucher ulang tahun Rp 25.000"
    ]
  },
  {
    id: "gold",
    name: "Gold",
    price: "Rp 150.000",
    priceYearly: "Rp 150.000 / tahun",
    icon: <FiAward className="text-2xl" />,
    color: "from-yellow-400 to-yellow-600",
    borderColor: "border-yellow-500",
    badgeColor: "bg-yellow-500",
    benefits: [
      "Diskon 20% setiap transaksi",
      "Free hair serum setiap bulan",
      "Poin 2x lipat",
      "Voucher ulang tahun Rp 50.000"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    price: "Rp 350.000",
    priceYearly: "Rp 350.000 / tahun",
    icon: <IoDiamondOutline className="text-2xl" />,
    color: "from-purple-400 to-purple-600",
    borderColor: "border-purple-500",
    badgeColor: "bg-purple-500",
    benefits: [
      "Diskon 30% setiap transaksi",
      "Free treatment setiap bulan",
      "Poin 3x lipat",
      "Voucher ulang tahun Rp 100.000",
      "Akses prioritas booking",
      "Free hair product setiap 3 bulan"
    ]
  }
];

export default function MemberUpgrade() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const packageParam = searchParams.get("package");
  
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "saldo",
    agreeTerms: false,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // AMBIL PAKET DARI URL
  useEffect(() => {
    if (packageParam) {
      const found = membershipPlans.find(p => p.name.toLowerCase() === packageParam.toLowerCase());
      if (found && found.id !== "regular") {
        setSelectedPlan(found);
        setShowConfirmModal(true);
      }
    }
  }, [packageParam]);

  const handlePlanSelect = (plan) => {
    if (plan.id === "regular") {
      alert("Anda sudah menjadi member Regular!");
      return;
    }
    setSelectedPlan(plan);
    setShowConfirmModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // ====== FUNGSI SIMPAN DATA ======
  const saveMemberData = () => {
    // CEK FORM LENGKAP
    if (!formData.agreeTerms) {
      alert("Harap setuju dengan syarat & ketentuan!");
      return;
    }
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      alert("Harap isi semua data diri!");
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      // DATA YANG DISIMPAN
      const memberData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        membership: selectedPlan?.name || "Regular",
        joinDate: new Date().toISOString().split('T')[0],
        totalBooking: 8,
        totalPoints: 1250,
        totalSpent: 850000,
      };
      
      // SIMPAN KE LOCAL STORAGE
      localStorage.setItem("memberData", JSON.stringify(memberData));
      
      // CEK DI CONSOLE
      console.log("✅ DATA TERSIMPAN:", memberData);
      console.log("✅ CEK LOCALSTORAGE:", localStorage.getItem("memberData"));
      
      setIsProcessing(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        setShowConfirmModal(false);
        setSelectedPlan(null);
        window.location.href = "/member/dashboard";
      }, 1500);
    }, 1000);
  };

  return (
    <div className="px-8 pb-8 pt-0">
      <div className="mb-6">
        <h1 className="text-5xl font-extralight tracking-[0.15em] text-white mb-0">Upgrade Membership</h1>
        <p className="text-zinc-400 text-xl font-light tracking-[0.2em] uppercase">Pilih paket yang sesuai dengan kebutuhanmu</p>
      </div>

      {/* MEMBER SAAT INI */}
      <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFEFD5] rounded-2xl p-4 mb-6 border border-[#F5B301]/30 shadow-lg shadow-[#F5B301]/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F5B301]/20 flex items-center justify-center">
            <FiUser className="text-[#8B6914] text-lg" />
          </div>
          <div>
            <p className="text-[#5C4A1E] text-sm font-medium">Member Saat Ini</p>
            <p className="text-[#3D2B00] font-bold text-lg">Regular</p>
          </div>
          <span className="ml-auto px-3 py-1 bg-[#F5B301]/20 text-[#8B6914] rounded-full text-xs font-semibold">
            Aktif
          </span>
        </div>
      </div>

      {/* GRID PLANS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {membershipPlans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-gradient-to-br ${plan.color} rounded-2xl overflow-hidden border ${plan.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
              selectedPlan?.id === plan.id ? "ring-2 ring-[#F5B301] ring-offset-2 ring-offset-black" : ""
            } ${plan.id === "regular" ? "opacity-60 cursor-not-allowed" : ""}`}
            onClick={() => handlePlanSelect(plan)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                  {plan.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${plan.badgeColor}`}>
                  {plan.id === "regular" ? "Saat Ini" : "Berbayar"}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-white/80 text-sm font-medium">{plan.priceYearly}</p>
              
              <ul className="mt-4 space-y-2">
                {plan.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white/90 text-sm">
                    <FiCheck className="text-white/70 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlanSelect(plan);
                }}
                disabled={plan.id === "regular"}
                className={`w-full mt-6 py-2.5 rounded-xl font-semibold transition-all ${
                  plan.id === "regular"
                    ? "bg-white/10 text-white/50 cursor-not-allowed"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {plan.id === "regular" ? "Member Saat Ini" : "Pilih Paket"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL KONFIRMASI UPGRADE */}
      {showConfirmModal && selectedPlan && selectedPlan.id !== "regular" && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFEFD5] rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#F5B301]/30 shadow-2xl shadow-[#F5B301]/20">
            
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="text-green-500 text-4xl" />
                </div>
                <h2 className="text-2xl font-bold text-[#3D2B00] mb-2">🎉 Upgrade Berhasil!</h2>
                <p className="text-[#5C4A1E]">Selamat! Anda sekarang menjadi member <span className="font-bold">{selectedPlan.name}</span></p>
                <p className="text-[#8B7A3A] text-sm mt-2">Mengarahkan ke dashboard...</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#3D2B00]">Konfirmasi Upgrade</h2>
                    <p className="text-[#8B7A3A] text-sm">Isi form berikut untuk menyelesaikan upgrade</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowConfirmModal(false);
                      setSelectedPlan(null);
                    }}
                    className="text-[#8B7A3A] hover:text-[#5C4A1E] transition-colors"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                <div className="bg-white/40 rounded-xl p-4 mb-6 border border-[#F5B301]/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#8B7A3A] text-sm">Paket yang dipilih</p>
                      <p className="text-[#3D2B00] font-bold text-xl">{selectedPlan.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#8B7A3A] text-sm">Biaya</p>
                      <p className="text-[#3D2B00] font-bold text-xl">{selectedPlan.price}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[#5C4A1E] text-sm font-medium block mb-1">Nama Lengkap</label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B7A3A]" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama lengkap"
                        className="w-full bg-white/60 border border-[#F5B301]/30 rounded-xl pl-11 pr-4 py-3 text-[#3D2B00] focus:border-[#F5B301] focus:outline-none focus:ring-2 focus:ring-[#F5B301]/30 transition-all placeholder:text-[#8B7A3A]/50"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#5C4A1E] text-sm font-medium block mb-1">Email</label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B7A3A]" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Masukkan email aktif"
                        className="w-full bg-white/60 border border-[#F5B301]/30 rounded-xl pl-11 pr-4 py-3 text-[#3D2B00] focus:border-[#F5B301] focus:outline-none focus:ring-2 focus:ring-[#F5B301]/30 transition-all placeholder:text-[#8B7A3A]/50"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#5C4A1E] text-sm font-medium block mb-1">No. Telepon</label>
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B7A3A]" />
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0812-3456-7890"
                        className="w-full bg-white/60 border border-[#F5B301]/30 rounded-xl pl-11 pr-4 py-3 text-[#3D2B00] focus:border-[#F5B301] focus:outline-none focus:ring-2 focus:ring-[#F5B301]/30 transition-all placeholder:text-[#8B7A3A]/50"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#5C4A1E] text-sm font-medium block mb-1">Alamat</label>
                    <div className="relative">
                      <FiCalendar className="absolute left-4 top-4 text-[#8B7A3A]" />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="2"
                        placeholder="Masukkan alamat lengkap"
                        className="w-full bg-white/60 border border-[#F5B301]/30 rounded-xl pl-11 pr-4 py-3 text-[#3D2B00] focus:border-[#F5B301] focus:outline-none focus:ring-2 focus:ring-[#F5B301]/30 transition-all placeholder:text-[#8B7A3A]/50"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#5C4A1E] text-sm font-medium block mb-1">Metode Pembayaran</label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full bg-white/60 border border-[#F5B301]/30 rounded-xl px-4 py-3 text-[#3D2B00] focus:border-[#F5B301] focus:outline-none focus:ring-2 focus:ring-[#F5B301]/30 transition-all"
                    >
                      <option value="saldo">Saldo Member</option>
                      <option value="bank">Transfer Bank</option>
                      <option value="qris">QRIS</option>
                      <option value="credit">Kartu Kredit</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-[#F5B301]"
                      required
                    />
                    <label className="text-[#5C4A1E] text-sm">
                      Saya setuju dengan syarat dan ketentuan upgrade membership
                    </label>
                  </div>

                  <div className="bg-yellow-50/80 rounded-xl p-4 border border-yellow-200">
                    <p className="text-[#8B7A3A] text-xs">
                      ⚠️ Upgrade dapat dilakukan kapan saja. Biaya akan dipotong dari saldo member.
                    </p>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setShowConfirmModal(false);
                        setSelectedPlan(null);
                      }}
                      className="flex-1 px-6 py-3 rounded-xl bg-white/60 border border-[#F5B301]/30 text-[#8B7A3A] hover:text-[#5C4A1E] transition-colors"
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      onClick={saveMemberData}
                      disabled={isProcessing || !formData.agreeTerms}
                      className="flex-1 px-6 py-3 rounded-xl bg-[#F5B301] text-black font-bold hover:bg-[#dba102] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Memproses...
                        </>
                      ) : (
                        `Konfirmasi Upgrade ke ${selectedPlan.name}`
                      )}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}