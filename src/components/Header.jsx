import { FaBell, FaSearch } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <div className="flex justify-between items-center p-6 bg-transparent">
            {/* Search Bar - Gaya Clean Modern */}
            <div className="relative w-full max-w-lg">
                <input
                    className="border-none p-4 pr-12 bg-white w-full rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-amber-500/20 transition-all text-sm font-medium placeholder:text-zinc-300"
                    type="text"
                    placeholder="Cari transaksi, pelanggan, atau layanan..."
                />
                <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-300" />
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
                {/* Settings Icon */}
                <div className="p-3.5 bg-white rounded-2xl text-zinc-400 cursor-pointer shadow-sm hover:bg-zinc-900 hover:text-amber-500 transition-all duration-300">
                    <SlSettings size={18} />
                </div>

                {/* Notification Bell with Ping Effect */}
                <div className="relative p-3.5 bg-white rounded-2xl text-zinc-400 cursor-pointer shadow-sm hover:bg-zinc-900 hover:text-amber-500 transition-all duration-300 group">
                    <FaBell size={18} />
                    <span className="absolute top-2.5 right-2.5 h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 border-2 border-white"></span>
                    </span>
                </div>

                {/* Divider */}
                <div className="h-10 w-[1px] bg-zinc-200 mx-2"></div>

                {/* Profile Admin Section */}
                <div className="flex items-center gap-3 pl-2 group cursor-pointer">
                    <div className="text-right hidden md:block">
                        <p className="text-xs font-black text-zinc-800 leading-none group-hover:text-amber-600 transition-colors">GentleCut Barber</p>
                        <p className="text-[10px] font-bold text-amber-600 mt-1 uppercase tracking-tighter">Admin Station</p>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-zinc-900 border-2 border-white shadow-md flex items-center justify-center text-amber-500 font-black text-xs hover:scale-105 transition-transform">
                        AD
                    </div>
                </div>
            </div>
        </div>
    );
}