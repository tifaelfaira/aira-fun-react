import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        <div className="bg-[#FAF9F6] min-h-screen flex relative overflow-hidden font-sans text-zinc-800">
          
            <div className="absolute -top-40 -right-20 w-[800px] h-[800px] bg-[#E6BE8A]/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-0 -left-20 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <Sidebar />

            <div className="flex-1 flex flex-col h-screen overflow-hidden relative z-10">
                <Header />
                <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}