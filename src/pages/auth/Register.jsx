import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoEyeOutline, IoEyeOffOutline, IoArrowForwardOutline, IoCutOutline } from "react-icons/io5";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { userAPI } from "../../services/userAPI";

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        full_name: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        if (!dataForm.email) {
            setError("Email tidak boleh kosong!");
            setLoading(false);
            return;
        }

        if (dataForm.password !== dataForm.confirmPassword) {
            setError("Password tidak cocok!");
            setLoading(false);
            return;
        }

        if (dataForm.password.length < 6) {
            setError("Password minimal 6 karakter!");
            setLoading(false);
            return;
        }

        try {
            // Register ke Supabase
            await userAPI.register({
                email: dataForm.email,
                password: dataForm.password,
                full_name: dataForm.full_name
            });

            setSuccess("Registrasi Berhasil! Silahkan Login.");
            
            // Kosongkan form
            setDataForm({
                email: "",
                password: "",
                confirmPassword: "",
                full_name: ""
            });

            // Redirect ke login setelah 2 detik
            setTimeout(() => {
                navigate("/login");
            }, 2000);
            
        } catch (err) {
            setError(err.message || "Registrasi gagal! Email mungkin sudah terdaftar.");
        } finally {
            setLoading(false);
        }
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
                    
                    {/* LEFT SIDE */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="hidden md:flex md:w-1/2 bg-gradient-to-br from-amber-500 to-amber-700 p-6 flex-col justify-between relative overflow-hidden min-h-[560px]"
                    >
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-10"></div>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl"></div>
                        
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
                                    <p className="text-[8px] font-black text-amber-200 uppercase tracking-wider">PREMIUM UNISEX BARBERSHOP</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative z-10 text-white space-y-3">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-2xl font-black leading-tight"
                            >
                                Bergabunglah<br />
                                <span className="text-amber-200">dengan Kami</span>
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-xs text-white/80 leading-relaxed"
                            >
                                Daftar sekarang dan nikmati pengalaman grooming premium dengan sentuhan K-Beauty.
                            </motion.p>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="space-y-2 pt-1"
                            >
                                {["Diskon 20% untuk member baru", "Voucher Rp 25.000", "Gratis hair serum"].map((item, idx) => (
                                    <motion.div 
                                        key={idx}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 text-[10px] text-white/80"
                                    >
                                        <div className="w-1 h-1 bg-amber-200 rounded-full"></div>
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                        
                        <div className="relative z-10 text-white/40 text-[8px]">
                            <p>© 2026 Crown & Co. All rights reserved.</p>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full md:w-1/2 p-6 flex flex-col justify-center min-h-[560px]"
                    >
                        
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
                            className="flex justify-center mb-4"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shadow-md">
                                <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white shadow-inner">
                                    <FaUser className="text-base" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="text-center mb-5"
                        >
                            <h2 className="text-xl md:text-2xl font-black text-neutral-900 tracking-tight">Create Account</h2>
                            <p className="text-neutral-400 text-xs mt-1">Daftar untuk mengelola barbershop Anda</p>
                        </motion.div>

                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-red-50 mb-4 p-2 text-[10px] font-semibold text-red-600 rounded-lg flex items-center border border-red-100"
                            >
                                <BsFillExclamationDiamondFill className="me-1 text-sm" />
                                {error}
                            </motion.div>
                        )}

                        {success && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-50 mb-4 p-2 text-[10px] font-semibold text-green-600 rounded-lg flex items-center border border-green-100"
                            >
                                <BsFillExclamationDiamondFill className="me-1 text-sm" />
                                {success}
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                            >
                                <label className="block text-[9px] font-black text-neutral-400 uppercase tracking-wider mb-1 ml-1">
                                    FULL NAME <span className="text-amber-500">*</span>
                                </label>
                                <input 
                                    type="text" 
                                    name="full_name" 
                                    onChange={handleChange} 
                                    value={dataForm.full_name}
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none text-sm text-neutral-800" 
                                    placeholder="Masukkan nama lengkap" 
                                    required 
                                />
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                            >
                                <label className="block text-[9px] font-black text-neutral-400 uppercase tracking-wider mb-1 ml-1">
                                    EMAIL ADDRESS <span className="text-amber-500">*</span>
                                </label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    onChange={handleChange} 
                                    value={dataForm.email}
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none text-sm text-neutral-800" 
                                    placeholder="you@example.com" 
                                    required 
                                />
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                            >
                                <label className="block text-[9px] font-black text-neutral-400 uppercase tracking-wider mb-1 ml-1">
                                    PASSWORD <span className="text-amber-500">*</span>
                                </label>
                                <div className="relative">
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        name="password" 
                                        onChange={handleChange} 
                                        value={dataForm.password}
                                        className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none text-sm text-neutral-800 pr-10" 
                                        placeholder="Minimal 6 karakter" 
                                        required 
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-amber-500 transition"
                                    >
                                        {showPassword ? <IoEyeOffOutline className="text-base" /> : <IoEyeOutline className="text-base" />}
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                            >
                                <label className="block text-[9px] font-black text-neutral-400 uppercase tracking-wider mb-1 ml-1">
                                    CONFIRM PASSWORD <span className="text-amber-500">*</span>
                                </label>
                                <div className="relative">
                                    <input 
                                        type={showConfirmPassword ? "text" : "password"} 
                                        name="confirmPassword" 
                                        onChange={handleChange} 
                                        value={dataForm.confirmPassword}
                                        className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none text-sm text-neutral-800 pr-10" 
                                        placeholder="Ketik ulang password" 
                                        required 
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-amber-500 transition"
                                    >
                                        {showConfirmPassword ? <IoEyeOffOutline className="text-base" /> : <IoEyeOutline className="text-base" />}
                                    </button>
                                </div>
                            </motion.div>

                            <motion.button 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.9 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit" 
                                disabled={loading} 
                                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black py-2.5 rounded-lg transition-all flex justify-center items-center shadow-lg shadow-amber-500/30 mt-2 uppercase text-[10px] tracking-widest gap-2 group"
                            >
                                {loading ? (
                                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                                ) : (
                                    <>
                                        <span>REGISTER ACCOUNT</span>
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                                        >
                                            <IoArrowForwardOutline className="text-xs" />
                                        </motion.span>
                                    </>
                                )}
                            </motion.button>
                        </form>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 1.0 }}
                            className="mt-4 text-center"
                        >
                            <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider">
                                SUDAH PUNYA AKUN?{" "}
                                <Link to="/login" className="text-amber-500 hover:text-amber-600 hover:underline transition">
                                    LOGIN DI SINI
                                </Link>
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}