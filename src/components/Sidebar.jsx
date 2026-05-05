import { Link, useLocation } from "react-router-dom";
import { FiGrid, FiShoppingCart, FiUsers, FiSettings, FiLogOut } from "react-icons/fi";

export default function Sidebar() {
    const location = useLocation();
    const menus = [
        { name: "Overview", path: "/", icon: <FiGrid /> },
        { name: "Orders", path: "/orders", icon: <FiShoppingCart /> },
        { name: "Customers", path: "/customers", icon: <FiUsers /> },
        { name: "Settings", path: "/settings", icon: <FiSettings /> },
    ];

    return (
        <div className="w-72 bg-zinc-900 min-h-screen p-8 flex flex-col shadow-2xl">
            <div className="mb-12 flex items-center gap-3 px-2">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-zinc-900 font-black">GC</div>
                <h1 className="text-white font-black text-xl tracking-tighter">GENTLE<span className="text-amber-500">CUT</span></h1>
            </div>
            
            <nav className="flex-1 space-y-2">
                {menus.map((menu) => {
                    const isActive = location.pathname === menu.path;
                    return (
                        <Link key={menu.name} to={menu.path} className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm ${isActive ? 'bg-amber-500 text-zinc-900 shadow-lg shadow-amber-500/20' : 'text-zinc-500 hover:text-white hover:bg-zinc-800'}`}>
                            <span className="text-lg">{menu.icon}</span>
                            {menu.name}
                        </Link>
                    );
                })}
            </nav>

            <button className="flex items-center gap-4 px-6 py-4 text-zinc-500 font-bold text-sm hover:text-pink-500 transition-all mt-auto">
                <FiLogOut className="text-lg" /> Logout
            </button>
        </div>
    );
}