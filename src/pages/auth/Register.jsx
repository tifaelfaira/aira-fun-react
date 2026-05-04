import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validasi: Cek apakah password sama
        if (dataForm.password !== dataForm.confirmPassword) {
            alert("Password tidak cocok!");
            return;
        }

        console.log("Data Terdaftar:", dataForm);
        
        // Alur Modul P7: Alert lalu pindah ke Login
        alert("Registrasi Berhasil! Silahkan Login.");
        navigate("/login"); 
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#f8f9fa] z-[9999]">
            <div className="w-full max-w-[420px] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-12 border border-gray-50">
                
                {/* Branding GentleCut */}
                <div className="text-center mb-10">
                    <h1 className="font-poppins text-[38px] text-zinc-900 font-bold leading-tight tracking-tighter">
                        Gentle<span className="text-amber-500">Cut.</span>
                    </h1>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1">
                        Premium Barbershop Admin
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-[11px] font-black text-zinc-400 mb-2 uppercase tracking-widest pl-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email" // Harus sesuai dengan key di dataForm
                            onChange={handleChange}
                            /* FIX: Menghapus typo 'fslate-1009' */
                            className="w-full px-5 py-4 bg-[#f1f5f9] border-none rounded-2xl focus:ring-2 focus:ring-amber-500 transition-all outline-none text-zinc-800"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[11px] font-black text-zinc-400 mb-2 uppercase tracking-widest pl-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password" // Harus sesuai dengan key di dataForm
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-[#f1f5f9] border-none rounded-2xl focus:ring-2 focus:ring-amber-500 transition-all outline-none text-zinc-800"
                            placeholder="********"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[11px] font-black text-zinc-400 mb-2 uppercase tracking-widest pl-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword" // Harus sesuai dengan key di dataForm
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-[#f1f5f9] border-none rounded-2xl focus:ring-2 focus:ring-amber-500 transition-all outline-none text-zinc-800"
                            placeholder="********"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-zinc-900 hover:bg-black text-white font-black py-4 rounded-2xl transition-all flex justify-center items-center shadow-lg mt-2 active:scale-95"
                    >
                        REGISTER ACCOUNT
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-xs text-zinc-500 font-medium">
                        Sudah punya akun?{" "}
                        <Link to="/login" className="text-amber-600 font-bold hover:underline">
                            Login di sini
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}