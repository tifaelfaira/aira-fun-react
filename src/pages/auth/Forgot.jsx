import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import { motion } from "framer-motion";
import { IoKeyOutline, IoArrowForwardOutline, IoCutOutline } from "react-icons/io5";
import { BsFillExclamationDiamondFill } from "react-icons/bs";

export default function Forgot() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!email) {
            setError("Silahkan masukkan email terlebih dahulu.");
            return;
        }

        setLoading(true);
        setError("");
        
        setTimeout(() => {
            setLoading(false);
            alert(`Link reset password telah dikirim ke: ${email}`);
            navigate("/login");
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
                    
                    {/* LEFT SIDE */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="hidden md:flex md:w-1/2 bg-gradient-to-br from-amber-500 to-amber-700 p-6 flex-col justify-between relative overflow-hidden min-h-[520px]"
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
                                Lupa<br />
                                <span className="text-amber-200">Password?</span>
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-xs text-white/80 leading-relaxed"
                            >
                                Jangan khawatir! Kami akan membantu Anda mereset password.
                            </motion.p>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="space-y-2 pt-1"
                            >
                                {["Link reset akan dikirim ke email Anda", "Cek folder Spam jika tidak ditemukan", "Link berlaku 1x24 jam"].map((item, idx) => (
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
                        className="w-full md:w-1/2 p-6 flex flex-col justify-center min-h-[520px]"
                    >
                        
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
                            className="flex justify-center mb-4"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shadow-md">
                                <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white shadow-inner">
                                    <IoKeyOutline className="text-base" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="text-center mb-5"
                        >
                            <h2 className="text-xl md:text-2xl font-black text-neutral-900 tracking-tight">Forgot Password?</h2>
                            <p className="text-neutral-400 text-xs mt-1">
                                Masukkan email anda dan kami akan mengirimkan<br />
                                link untuk reset password ke inbox anda.
                            </p>
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

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                            >
                                <label className="block text-[9px] font-black text-neutral-400 uppercase tracking-wider mb-1 ml-1">
                                    EMAIL ADDRESS <span className="text-amber-500">*</span>
                                </label>
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none text-sm text-neutral-800" 
                                    placeholder="Masukkan email terdaftar" 
                                    required 
                                />
                            </motion.div>

                            <motion.button 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
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
                                        <span>SEND RESET LINK</span>
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
                            transition={{ duration: 0.4, delay: 0.7 }}
                            className="mt-4 text-center"
                        >
                            <Link 
                                to="/login" 
                                className="inline-flex items-center gap-1 text-[9px] font-bold text-neutral-500 hover:text-amber-500 transition-colors uppercase tracking-wider"
                            >
                                <LuArrowLeft className="text-sm" />
                                Kembali ke Login
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}