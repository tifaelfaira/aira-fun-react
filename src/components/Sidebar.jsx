import { LuLayoutDashboard, LuScissors, LuUsers, LuPlus, LuClock } from "react-icons/lu"; 
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    // Tombol aktif tetap hitam pekat agar kontras dengan sidebar putih
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4 space-x-2 transition-all duration-300
        ${isActive ? 
            "text-amber-500 bg-zinc-900 font-black shadow-lg translate-x-2" : 
            "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 font-semibold"
        }`

    return (
        /* MODIFIKASI UTAMA: Background Putih dengan Gradien Hitam di Pinggir Kanan */
        <div 
            id="sidebar" 
            className="flex min-h-screen w-90 flex-col bg-white p-10 relative overflow-hidden border-r border-gray-100"
            style={{
                // Gradien hitam transparan tipis yang hanya muncul di sisi kanan (pinggir)
                backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 60px)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right'
            }}
        >
            {/* Logo GentleCut */}
            <div id="sidebar-logo" className="flex flex-col relative z-10">
                <span id="logo-title" className="font-poppins text-[40px] text-zinc-900 leading-tight tracking-tighter">
                    Gentle<b id="logo-dot" className="text-amber-500">Cut.</b>
                </span>
                <span id="logo-subtitle" className="font-bold text-zinc-300 text-[10px] uppercase tracking-[0.3em]">
                    Premium Barbershop Admin
                </span>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu" className="mt-12 overflow-y-auto relative z-10">
                <ul id="menu-list" className="space-y-4">
                    <li>
                        <NavLink id="menu-1" to="/" className={menuClass}>
                            <LuLayoutDashboard className="mr-4 text-xl" /> Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-2" to="/orders" className={menuClass}>
                            <LuScissors className="mr-4 text-xl" /> Antrean Cukur
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-3" to="/customers" className={menuClass}>
                            <LuUsers className="mr-4 text-xl" /> Pelanggan
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Daily Target */}
            <div className="mt-12 mb-5 bg-zinc-50 p-5 rounded-[24px] border border-zinc-100 relative z-10">
                <div className="flex justify-between text-[10px] font-black mb-3">
                    <span className="text-zinc-400 uppercase tracking-widest flex items-center">
                        <LuClock className="mr-1 text-amber-500" /> Target Kapasitas
                    </span>
                    <span className="text-zinc-900">80%</span>
                </div>
                <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden shadow-inner">
                    <div className="bg-zinc-900 h-full w-[80%] transition-all duration-1000"></div>
                </div>
            </div>

            {/* FOOTER SECTION */}
            <div id="sidebar-footer" className="mt-auto relative z-10">
                <div id="footer-card" className="bg-zinc-900 px-5 py-7 rounded-[32px] shadow-2xl mb-10 flex items-center relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all"></div>
                    
                    <div id="footer-text" className="text-white text-sm z-10 w-2/3">
                        <p className="mb-4 leading-tight font-black tracking-tight text-zinc-100">Butuh Stylist Tambahan?</p>
                        <div id="add-menu-button" className="flex justify-center items-center py-2 px-3 bg-amber-500 hover:bg-amber-400 rounded-xl space-x-2 cursor-pointer active:scale-95 transition-all shadow-lg">
                            <span className="text-zinc-900 font-black flex items-center text-[10px] uppercase tracking-tighter">
                                <LuPlus className="mr-1 stroke-[3]" /> Rekrut Stylist
                            </span>
                        </div>
                    </div>
                    <img 
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-500/30 ml-auto shadow-md grayscale-[0.5] group-hover:grayscale-0 transition-all" 
                        src="/img/foto.png" 
                        alt="avatar" 
                    />
                </div>
                
                <div className="flex flex-col text-center sm:text-left pl-2">
                    <span id="footer-brand" className="font-black text-zinc-800 text-[11px] uppercase tracking-widest">
                        GentleCut System
                    </span>
                    <p id="footer-copyright" className="font-bold text-zinc-300 text-[9px] tracking-tight mt-1">
                        © 2026 GentleCut Indonesia
                    </p>
                </div>
            </div>
        </div>
    );
}