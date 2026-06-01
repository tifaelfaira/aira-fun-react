import { Link, useLocation } from "react-router-dom";
import {
  FiGrid,
  FiShoppingCart,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiSearch,
  FiChevronLeft,
  FiPackage,
  FiLayers, // <-- INI TAMBAHAN IKON UNTUK MENU COMPONENTS KAP!
  FiScissors, // <-- TAMBAHAN IKON UNTUK MENU TREATMENTS PERTEMUAN 11 GENTLECUT!
} from "react-icons/fi";

// LOGO PERSIS (Tetap utuh gak gua utak-atik)
function RealBarbershopChair() {
  return (
    <svg
      className="w-[25px] h-[25px]"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="21" y="8" width="22" height="20" rx="2" fill="white" />
      <rect x="16" y="28" width="32" height="7" rx="1.5" fill="white" />
      <rect x="10" y="24" width="4" height="14" rx="1" fill="white" />
      <rect x="50" y="24" width="4" height="14" rx="1" fill="white" />
      <rect x="29" y="35" width="6" height="13" rx="2" fill="white" />
      <rect x="23" y="49" width="18" height="4" rx="1" fill="white" />
      <rect x="18" y="55" width="28" height="3" rx="1.5" fill="white" />
    </svg>
  );
}

export default function Sidebar() {
  const location = useLocation();

  const menus = [
    { name: "Overview", path: "/", icon: <FiGrid /> },
    { name: "Customers", path: "/customers", icon: <FiUsers /> },
    { name: "Orders", path: "/orders", icon: <FiShoppingCart /> },
    { name: "Products", path: "/products", icon: <FiPackage /> },
    { name: "Components", path: "/components", icon: <FiLayers /> }, // <-- CUMA NAMBAH INI DI BAWAH PRODUCTS PAS!
    { name: "Treatments", path: "/treatments", icon: <FiScissors /> }, // <-- MENU BARU PERTEMUAN 11 UNTUK GENTLECUT!
    { name: "Settings", path: "/settings", icon: <FiSettings /> },
  ];

  return (
    <div className="w-64 min-h-screen bg-black px-5 py-6 flex flex-col">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] bg-[#F5B301] rounded-[13px] flex items-center justify-center">
            <RealBarbershopChair />
          </div>
          <h1 className="text-white text-[22px] font-bold tracking-[-0.5px]">
            GentleCut
          </h1>
        </div>

        {/* BUTTON */}
        <button className="w-7 h-7 rounded-lg bg-[#050505] flex items-center justify-center text-zinc-500 hover:text-white transition-all">
          <FiChevronLeft size={14} />
        </button>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-[1px] bg-[#050505] mb-6"></div>

      {/* SEARCH */}
      <div className="relative mb-8">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 text-sm" />
        <input
          type="text"
          placeholder="Search"
          className="
            w-full
            bg-[#111111]
            rounded-xl
            py-3
            pl-11
            pr-14
            text-sm
            text-zinc-300
            placeholder:text-zinc-700
            outline-none
            transition-all
            duration-200
            hover:bg-[#181818]
            focus:bg-[#1C1C1C]
          "
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-[2px] opacity-30">
          <span className="text-[9px] text-zinc-600">⌘</span>
          <span className="text-[9px] text-zinc-600">K</span>
        </div>
      </div>

      {/* MENU */}
      <div className="flex-1">
        <h2 className="px-4 mb-4 text-[11px] font-bold uppercase tracking-[2px] text-zinc-700">
          Home
        </h2>

        <nav className="space-y-2">
          {menus.map((menu) => {
            const isActive = location.pathname === menu.path;

            return (
              <Link
                key={menu.name}
                to={menu.path}
                className={`
                  flex items-center gap-3
                  px-4 py-3.5
                  rounded-2xl
                  text-sm font-semibold
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#F5B301] text-white"
                      : "text-zinc-500 hover:bg-[#050505] hover:text-white"
                  }
                `}
              >
                <span className="text-[18px]">
                  {menu.icon}
                </span>
                {menu.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* LOGOUT */}
      <div className="pt-6 border-t border-[#050505]">
        <button
          className="
            w-full
            flex items-center gap-3
            px-4 py-3
            rounded-xl
            text-sm font-semibold
            text-zinc-500
            hover:bg-[#050505]
            hover:text-white
            transition-all
          "
        >
          <FiLogOut className="text-[18px]" />
          Logout
        </button>
      </div>
    </div>
  );
}