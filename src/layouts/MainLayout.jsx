import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"

export default function MainLayout() {
    return (
        /* Background dasar kita ganti ke krem pucat agar emasnya 'nyambung' */
        <div id="app-container" className="bg-[#FAF9F6] min-h-screen flex relative overflow-hidden">
            
            {/* --- EFEK REAL GOLD GRADIENT (BUKAN KUNING) --- */}
            
            {/* Utama: Warna Champagne Gold (#E6BE8A) */}
            <div className="absolute -top-40 -right-20 w-[900px] h-[900px] bg-[#E6BE8A]/30 rounded-full blur-[160px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }}></div>
            
            {/* Tengah: Warna Bronze/Metallic Gold (#D4AF37) */}
            <div className="absolute top-1/4 -left-40 w-[700px] h-[700px] bg-[#D4AF37]/15 rounded-full blur-[140px] pointer-events-none"></div>
            
            {/* Bawah: Soft Sand Gold (#C2B280) */}
            <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-[#C2B280]/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div id="layout-wrapper" className="flex flex-row flex-1 relative z-10">
                <Sidebar />

                <div id="main-content" className="flex-1 p-4 overflow-y-auto">
                    <Header />
                    <div className="relative">
                         <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}