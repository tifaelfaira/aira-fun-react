import { FaBell, FaSearch } from "react-icons/fa";
import { LuTrendingUp } from "react-icons/lu"; // Ganti FcAreaChart agar bisa diubah warnanya
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <div className="flex justify-between items-center p-6 bg-transparent">
            <div className="relative w-full max-w-lg">
                <input
                    className="border-none p-3 pr-10 bg-white w-full rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                    type="text"
                    placeholder="Search Here..."
                />
                <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-300" />
            </div>

            <div className="flex items-center space-x-4">
                {/* Lonceng - Warna Zinc & Amber */}
                <div className="relative p-3 bg-white rounded-2xl text-zinc-400 cursor-pointer shadow-sm hover:bg-zinc-900 hover:text-amber-500 transition-all group">
                    <FaBell />
                    <span className="absolute top-2 right-2 h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 border-2 border-white"></span>
                    </span>
                </div>
                
                {/* Statistik - Ganti ke LuTrendingUp agar warna icon bisa seragam */}
                <div className="p-3 bg-white rounded-2xl cursor-pointer text-zinc-400 shadow-sm hover:bg-zinc-900 hover:text-amber-500 transition-all">
                    <LuTrendingUp />
                </div>

                {/* Settings - Warna Zinc & Amber */}
                <div className="p-3 bg-white rounded-2xl text-zinc-400 cursor-pointer shadow-sm hover:bg-zinc-900 hover:text-amber-500 transition-all">
                    <SlSettings />
                </div>

                <div className="flex items-center space-x-4 border-l pl-4 border-zinc-200">
                    <div className="text-right">
                        <span className="text-[11px] block text-zinc-400 font-bold uppercase tracking-wider">Admin</span>
                        <span className="text-sm font-black text-zinc-800">Hello, Roujwa Tifaelfaira</span>
                    </div>
                    {/* Foto Profil dengan Ring Amber */}
                    <div className="relative">
                        <img src="/img/foto.png" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="profile" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-amber-500 border-2 border-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}