import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // 1. Tambahkan useNavigate di sini
import { LuArrowLeft } from "react-icons/lu";

export default function Forgot() {
    const navigate = useNavigate(); // 2. Inisialisasi navigate
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (email) {
            // Munculkan notifikasi
            alert(`Link reset password telah dikirim ke: ${email}`);
            
            // 3. Pindahkan user ke halaman login setelah klik "OK" di alert
            navigate("/login"); 
        } else {
            alert("Silahkan masukkan email terlebih dahulu.");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#f8f9fa] z-[9999]">
            <div className="w-full max-w-[420px] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-12 border border-gray-50">
                
                {/* Logo Section */}
                <div className="text-center mb-10">
                    <h1 className="font-poppins text-[38px] text-zinc-900 font-bold leading-tight tracking-tighter">
                        Gentle<span className="text-amber-500">Cut.</span>
                    </h1>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1">
                        Premium Barbershop Admin
                    </p>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-lg font-bold text-zinc-800">Forgot Password? 🔑</h2>
                    <p className="text-zinc-400 text-xs mt-2 font-medium leading-relaxed">
                        Masukkan email anda dan kami akan mengirimkan link untuk reset password ke inbox anda.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-[11px] font-black text-zinc-400 mb-2 uppercase tracking-widest pl-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-5 py-4 bg-[#f1f5f9] border-none rounded-2xl focus:ring-2 focus:ring-amber-500 transition-all outline-none text-zinc-800 font-medium placeholder-zinc-300"
                            placeholder="Masukkan email terdaftar"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-zinc-900 hover:bg-black text-white font-black py-4 rounded-2xl transition-all flex justify-center items-center shadow-lg active:scale-[0.98]"
                    >
                        SEND RESET LINK
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <Link 
                        to="/login" 
                        className="inline-flex items-center text-xs text-zinc-500 font-bold hover:text-amber-600 transition-colors"
                    >
                        <LuArrowLeft className="me-2" /> Kembali ke Login
                    </Link>
                </div>

                <div className="mt-10 text-center border-t border-gray-50 pt-6">
                    <p className="text-[10px] text-zinc-300 font-bold uppercase tracking-widest">
                        © 2026 GENTLECUT INDONESIA
                    </p>
                </div>
            </div>
        </div>
    );
}