import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  IoArrowBackOutline, IoCameraOutline, IoPersonOutline,
  IoMailOutline, IoCalendarOutline, IoPhonePortraitOutline,
  IoLocationOutline, IoCheckmarkCircle, IoCloseOutline,
  IoCreateOutline, IoShieldOutline, IoWalletOutline,
  IoStarOutline, IoGiftOutline
} from "react-icons/io5";

export default function MemberProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    membership: "Regular",
    joinedDate: "",
    totalBooking: 0,
    totalPoints: 0,
    totalSpent: 0,
    avatar: "https://ui-avatars.com/api/?name=Member&background=F5B301&color=fff&size=128"
  });

  // AMBIL DATA DARI LOCALSTORAGE
  useEffect(() => {
    const savedData = localStorage.getItem("memberData");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setProfile(prev => ({
          ...prev,
          fullName: parsed.fullName || "",
          email: parsed.email || "",
          phone: parsed.phone || "",
          address: parsed.address || "",
          membership: parsed.membership || "Regular",
          joinedDate: parsed.joinDate || new Date().toISOString().split('T')[0],
          totalBooking: parsed.totalBooking || 0,
          totalPoints: parsed.totalPoints || 0,
          totalSpent: parsed.totalSpent || 0,
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(parsed.fullName || 'Member')}&background=F5B301&color=fff&size=128`
        }));
      } catch (e) {}
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    // SIMPAN KE LOCALSTORAGE
    const memberData = {
      fullName: profile.fullName,
      email: profile.email,
      phone: profile.phone,
      address: profile.address,
      membership: profile.membership,
      joinDate: profile.joinedDate,
      totalBooking: profile.totalBooking,
      totalPoints: profile.totalPoints,
      totalSpent: profile.totalSpent,
    };
    localStorage.setItem("memberData", JSON.stringify(memberData));
    setIsEditing(false);
    alert("✅ Profil berhasil diupdate!");
  };

  // BADGE MEMBERSHIP
  const membershipBadge = {
    Regular: { color: "bg-gray-500 text-white", text: "Regular" },
    Silver: { color: "bg-gray-400 text-white", text: "Silver" },
    Gold: { color: "bg-yellow-500 text-white", text: "Gold" },
    Premium: { color: "bg-purple-500 text-white", text: "Premium" },
  };

  const membershipIcon = {
    Regular: <IoPersonOutline />,
    Silver: <IoStarOutline />,
    Gold: <IoShieldOutline />,
    Premium: <IoWalletOutline />,
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
        <div className="flex items-center gap-2 text-amber-500 text-sm mb-2">
          <IoPersonOutline className="text-xl" />
          <span className="font-black uppercase tracking-wider text-amber-600">Profil Member</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-neutral-900">Profil Saya</h1>
        <p className="text-neutral-400 text-sm mt-1">Kelola data diri Anda di sini</p>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-3xl mx-auto"
      >
        {/* Header Card - Avatar & Membership */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-center relative">
          <div className="relative inline-block">
            <img 
              src={profile.avatar} 
              alt={profile.fullName || "Member"}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg mx-auto object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md hover:bg-amber-50 transition">
              <IoCameraOutline className="text-amber-500 text-sm" />
            </button>
          </div>
          <h2 className="text-white font-black text-xl mt-3">{profile.fullName || "Member"}</h2>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className={`px-3 py-0.5 rounded-full text-xs font-bold ${membershipBadge[profile.membership]?.color || 'bg-gray-500 text-white'}`}>
              {membershipIcon[profile.membership]} {profile.membership || "Regular"}
            </span>
            <span className="text-amber-100 text-xs">⭐ Member Sejak {profile.joinedDate}</span>
          </div>
        </div>

        {/* Stats Ringkas */}
        <div className="grid grid-cols-3 gap-2 p-4 bg-neutral-50 border-b border-gray-100">
          <div className="text-center">
            <p className="text-xl font-black text-neutral-900">{profile.totalBooking}</p>
            <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Total Booking</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-black text-neutral-900">{profile.totalPoints}</p>
            <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Total Poin</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-black text-neutral-900">Rp {(profile.totalSpent / 1000).toFixed(0)}K</p>
            <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Total Belanja</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-neutral-800 text-lg">Data Diri</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-1 text-xs font-bold text-amber-500 hover:text-amber-600 transition"
            >
              {isEditing ? <IoCloseOutline className="text-base" /> : <IoCreateOutline className="text-base" />}
              {isEditing ? "Batal" : "Edit Profil"}
            </button>
          </div>

          <div className="space-y-4">
            {/* Nama */}
            <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl">
              <IoPersonOutline className="text-amber-500 text-lg mt-0.5" />
              <div className="flex-1">
                <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Nama Lengkap</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-neutral-800"
                  />
                ) : (
                  <p className="text-sm font-medium text-neutral-800 mt-1">{profile.fullName || "-"}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl">
              <IoMailOutline className="text-amber-500 text-lg mt-0.5" />
              <div className="flex-1">
                <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-neutral-800"
                  />
                ) : (
                  <p className="text-sm font-medium text-neutral-800 mt-1">{profile.email || "-"}</p>
                )}
              </div>
            </div>

            {/* Telepon */}
            <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl">
              <IoPhonePortraitOutline className="text-amber-500 text-lg mt-0.5" />
              <div className="flex-1">
                <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">No. Telepon</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-neutral-800"
                  />
                ) : (
                  <p className="text-sm font-medium text-neutral-800 mt-1">{profile.phone || "-"}</p>
                )}
              </div>
            </div>

            {/* Alamat */}
            <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl">
              <IoLocationOutline className="text-amber-500 text-lg mt-0.5" />
              <div className="flex-1">
                <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Alamat</label>
                {isEditing ? (
                  <textarea
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                    rows="2"
                    className="w-full mt-1 px-3 py-2 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-neutral-800 resize-none"
                  />
                ) : (
                  <p className="text-sm font-medium text-neutral-800 mt-1">{profile.address || "-"}</p>
                )}
              </div>
            </div>

            {/* Membership (Read Only) */}
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl border border-amber-200">
              <IoShieldOutline className="text-amber-500 text-lg mt-0.5" />
              <div className="flex-1">
                <label className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Membership</label>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-3 py-0.5 rounded-full text-xs font-bold ${membershipBadge[profile.membership]?.color || 'bg-gray-500 text-white'}`}>
                    {profile.membership || "Regular"}
                  </span>
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <IoCheckmarkCircle className="text-xs" />
                    Aktif
                  </span>
                </div>
              </div>
            </div>
          </div>

          {isEditing && (
            <button
              onClick={handleSave}
              className="w-full mt-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
            >
              <IoCheckmarkCircle className="text-base" />
              Simpan Perubahan
            </button>
          )}

          {/* Tombol Upgrade */}
          {profile.membership !== "Premium" && (
            <Link
              to="/member/upgrade"
              className="w-full mt-4 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm border border-neutral-200"
            >
              <IoShieldOutline />
              Upgrade Membership
            </Link>
          )}

          {profile.membership === "Premium" && (
            <div className="w-full mt-4 py-3 bg-purple-100 text-purple-700 font-bold rounded-xl flex items-center justify-center gap-2 text-sm border border-purple-200">
              <IoCheckmarkCircle />
              🏆 Premium Member - Level Tertinggi!
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}