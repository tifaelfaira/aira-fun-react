import { Link, useLocation } from "react-router-dom";
import { 
  FiGrid, 
  FiShoppingCart, 
  FiUsers, 
  FiSettings, 
  FiLogOut, 
  FiSearch,
  FiBriefcase, 
  FiChevronLeft,
  FiPackage // Ikon untuk Products
} from "react-icons/fi";

export default function Sidebar() {
    const location = useLocation();

    // Menu lengkap: Overview, Customers, Orders, Products, dan Settings
    const menus = [
        { name: "Overview", path: "/", icon: <FiGrid /> },
        { name: "Customers", path: "/customers", icon: <FiUsers /> },
        { name: "Orders", path: "/orders", icon: <FiShoppingCart /> },
        { name: "Products", path: "/products", icon: <FiPackage /> }, 
        { name: "Settings", path: "/settings", icon: <FiSettings /> },
    ];

    return (
        <div className="w-64 bg-[#121218] min-h-screen p-6 flex flex-col border-r border-zinc-800">
            {/* Header Logo Captain */}
            <div className="mb-8 flex items-center justify-between px-1">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center text-zinc-900 shadow-lg shadow-amber-500/20">
                        <FiBriefcase className="text-xl" />
                    </div>
                    <h1 className="text-white font-bold text-lg tracking-tight">Captain</h1>
                </div>
                <div className="w-6 h-6 bg-zinc-800/50 rounded flex items-center justify-center text-zinc-500 text-xs cursor-pointer">
                    <FiChevronLeft />
                </div>
            </div>

            <div className="h-[1px] bg-zinc-800 w-full mb-6"></div>

            {/* Search Bar */}
            <div className="mb-8 relative group">
                <FiSearch className="absolute left-3 top-3 text-zinc-500" />
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-full bg-[#1c1c24] border border-zinc-800/50 rounded-xl py-2.5 pl-10 pr-4 text-xs text-zinc-400 focus:outline-none focus:border-amber-500/50"
                />
                <div className="absolute right-3 top-2.5 flex gap-0.5 opacity-30">
                    <span className="text-[10px] text-zinc-400 border border-zinc-600 px-1 rounded">⌘</span>
                    <span className="text-[10px] text-zinc-400 border border-zinc-600 px-1 rounded">K</span>
                </div>
            </div>
            
            {/* Menu List */}
            <div className="flex-1">
                <h2 className="px-4 text-[10px] font-bold text-zinc-600 uppercase tracking-[2px] mb-4">
                    Home
                </h2>
                <nav className="space-y-1.5">
                    {menus.map((menu) => {
                        const isActive = location.pathname === menu.path;
                        return (
                            <Link 
                                key={menu.name} 
                                to={menu.path} 
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                                    isActive 
                                    ? 'bg-amber-500 text-zinc-900 font-bold shadow-lg shadow-amber-500/10' 
                                    : 'text-zinc-500 hover:text-white hover:bg-zinc-800/30'
                                }`}
                            >
                                <span className="text-lg">{menu.icon}</span>
                                {menu.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Logout Section */}
            <div className="pt-6 border-t border-zinc-800">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-500 text-sm font-medium hover:text-pink-500 transition-colors">
                    <FiLogOut className="text-lg" /> Logout
                </button>
            </div>
        </div>
    );
}