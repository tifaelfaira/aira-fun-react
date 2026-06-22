import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  IoArrowBackOutline, IoCameraOutline, IoPersonOutline,
  IoMailOutline, IoCalendarOutline, IoPhonePortraitOutline,
  IoLocationOutline, IoCheckmarkCircle, IoCloseOutline,
  IoCreateOutline
} from "react-icons/io5";

export default function MemberProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Rayel Member",
    email: "rayel@gmail.com",
    phone: "0812-3456-7890",
    birthDate: "15 Januari 2000",
    address: "Jl. Kebayoran Lama No. 88, Jakarta Selatan",
    joinedDate: "1 Januari 2026",
    avatar: "https://ui-avatars.com/api/?name=Rayel+Member&background=F5B301&color=fff&size=128"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profil berhasil diupdate!");
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
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-100 px-3 py-1 rounded-full mb-2">
          <IoPersonOutline className="text-amber-500 text-xs" />
          <span className="text-[9px] font-black text-amber-600 uppercase tracking-wider">Profil Member</span>
        </div>
        <h1 className="text-3xl font-black text-neutral-900">Profil Saya</h1>
        <p className="text-neutral-400 text-sm mt-1">Kelola data diri Anda di sini</p>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-2xl mx-auto"
      >
        {/* Avatar Section */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-center relative">
          <div className="relative inline-block">
            <img 
              src={profile.avatar} 
              alt={profile.fullName}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg mx-auto object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md hover:bg-amber-50 transition">
              <IoCameraOutline className="text-amber-500 text-sm" />
            </button>
          </div>
          <h2 className="text-white font-black text-xl mt-3">{profile.fullName}</h2>
          <p className="text-amber-100 text-sm">⭐ Member Sejak {profile.joinedDate}</p>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-neutral-800">Data Diri</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-1 text-xs font-bold text-amber-500 hover:text-amber-600 transition"
            >
              {isEditing ? <IoCloseOutline className="text-base" /> : <IoCreateOutline className="text-base" />}
              {isEditing ? "Batal" : "Edit Profil"}
            </button>
          </div>

          <div className="space-y-4">
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
                  <p className="text-sm font-medium text-neutral-800 mt-1">{profile.fullName}</p>
                )}
              </div>
            </div>

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
                  <p className="text-sm font-medium text-neutral-800 mt-1">{profile.email}</p>
                )}
              </div>
            </div>

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
                  <p className="text-sm font-medium text-neutral-800 mt-1">{profile.phone}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl">
              <IoCalendarOutline className="text-amber-500 text-lg mt-0.5" />
              <div className="flex-1">
                <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Tanggal Lahir</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="birthDate"
                    value={profile.birthDate}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-neutral-800"
                  />
                ) : (
                  <p className="text-sm font-medium text-neutral-800 mt-1">{profile.birthDate}</p>
                )}
              </div>
            </div>

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
                  <p className="text-sm font-medium text-neutral-800 mt-1">{profile.address}</p>
                )}
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
        </div>
      </motion.div>
    </motion.div>
  );
}