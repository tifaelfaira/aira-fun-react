import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoEyeOutline, IoEyeOffOutline, IoArrowForwardOutline, IoCutOutline, IoSparklesOutline } from "react-icons/io5";
import { BsFillExclamationDiamondFill } from "react-icons/bs";

export default function MemberLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [dataForm, setDataForm] = useState({ email: "", password: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulasi login member (prototype)
    setTimeout(() => {
      setLoading(false);
      // Redirect ke dashboard member
      navigate("/member/dashboard");
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      <div className="w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/50">
        
        <div className="flex flex-col md:flex-row">
          
          {/* LEFT SIDE - Branding Member */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex md:w-1/2 bg-gradient-to-br from-amber-400 to-amber-600 p-8 flex-col justify-between relative overflow-hidden min-h-[520px]"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  className="p-1.5 rounded-lg bg-white/20 backdrop-blur-sm text-white"
                >
                  <IoCutOutline className="text-base transform -rotate-45" />
                </motion.div>
                <div>
                  <span className="text-lg font-black tracking-tight text-white">
                    Crown<span className="text-amber-200">&Co.</span>
                  </span>
                  <p className="text-[8px] font-black text-amber-200 uppercase tracking-wider">MEMBER AREA</p>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 text-white space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-black leading-tight"
              >
                Selamat Datang<br />
                <span className="text-amber-200">Member Setia</span> Kami!
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm text-white/80 leading-relaxed"
              >
                Nikmati berbagai keuntungan eksklusif untuk member Crown & Co. 
                Dapatkan poin, diskon, dan promo spesial setiap kunjunganmu.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2.5 pt-2"
              >
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <div className="w-1.5 h-1.5 bg-amber-200 rounded-full"></div>
                  <span>🎁 Diskon 20% setiap hari Sabtu</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <div className="w-1.5 h-1.5 bg-amber-200 rounded-full"></div>
                  <span>⭐ Kumpulkan poin untuk hadiah menarik</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <div className="w-1.5 h-1.5 bg-amber-200 rounded-full"></div>
                  <span>🎫 Voucher ulang tahun spesial</span>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="relative z-10 text-white/40 text-[8px]">
              <p>© 2026 Crown & Co. All rights reserved.</p>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Login Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 p-8 flex flex-col justify-center min-h-[520px]"
          >
            
            {/* Icon Member */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
              className="flex justify-center mb-5"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white shadow-inner">
                  <FaUser className="text-xl" />
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-center mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-amber-100 px-3 py-1 rounded-full mb-2">
                <IoSparklesOutline className="text-amber-500 text-xs" />
                <span className="text-[9px] font-black text-amber-600 uppercase tracking-wider">Member Area</span>
                <IoSparklesOutline className="text-amber-500 text-xs" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">Login Member</h2>
              <p className="text-neutral-400 text-sm mt-1">Masuk untuk akses semua keuntungan member</p>
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 mb-5 p-3 text-[11px] font-semibold text-red-600 rounded-xl flex items-center border border-red-100"
              >
                <BsFillExclamationDiamondFill className="me-2 text-sm" />
                {error}
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <label className="block text-[10px] font-black text-neutral-400 uppercase tracking-wider mb-2 ml-1">
                  EMAIL ADDRESS <span className="text-amber-500">*</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  onChange={handleChange} 
                  className="w-full px-5 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none text-sm text-neutral-800" 
                  placeholder="member@crownandco.id" 
                  required 
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="flex justify-between items-center mb-2 px-1">
                  <label className="block text-[10px] font-black text-neutral-400 uppercase tracking-wider">
                    PASSWORD <span className="text-amber-500">*</span>
                  </label>
                  <Link to="/member/forgot" className="text-[10px] font-bold text-amber-500 uppercase tracking-wider hover:text-amber-600 transition">
                    FORGOT?
                  </Link>
                </div>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="password" 
                    onChange={handleChange} 
                    className="w-full px-5 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none text-sm text-neutral-800 pr-12" 
                    placeholder="••••••••" 
                    required 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-amber-500 transition"
                  >
                    {showPassword ? <IoEyeOffOutline className="text-xl" /> : <IoEyeOutline className="text-xl" />}
                  </button>
                </div>
              </motion.div>

              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={loading} 
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black py-4 rounded-xl transition-all flex justify-center items-center shadow-lg shadow-amber-500/30 mt-3 uppercase text-xs tracking-widest active:scale-95 gap-2 group"
              >
                {loading ? (
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                ) : (
                  <>
                    <span>MASUK SEKARANG</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <IoArrowForwardOutline className="text-sm" />
                    </motion.span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Register Link */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="mt-6 text-center"
            >
              <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                BELUM PUNYA AKUN MEMBER?{" "}
                <Link to="/member/register" className="text-amber-500 hover:text-amber-600 hover:underline transition">
                  DAFTAR SEKARANG
                </Link>
              </p>
            </motion.div>

            {/* Back to Home */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="mt-4 text-center"
            >
              <Link to="/" className="text-[10px] font-bold text-neutral-400 hover:text-amber-500 transition">
                ← Kembali ke Beranda
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}