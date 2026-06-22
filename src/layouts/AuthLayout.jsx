import { Outlet, useLocation } from "react-router-dom";
import { IoCutOutline, IoSparklesOutline } from "react-icons/io5";

export default function AuthLayout() {
  const location = useLocation();
  const isMemberPage = location.pathname.includes('/member');

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-neutral-50 via-white to-amber-50/30 font-sans relative">
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Header */}
      <header className="w-full p-4 md:p-5 z-20 flex justify-between items-center bg-transparent relative">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = '/'}>
          <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-300">
            <IoCutOutline className="text-sm transform -rotate-45" />
          </div>
          <div>
            <span className="text-base md:text-lg font-black text-neutral-900 tracking-tight">
              Crown<span className="text-amber-500">&Co.</span>
            </span>
            <p className="text-[7px] font-black text-neutral-400 uppercase tracking-wider hidden sm:block">
              {isMemberPage ? 'MEMBER AREA' : 'PREMIUM UNISEX BARBERSHOP'}
            </p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-1.5 bg-white/60 backdrop-blur-sm px-2 py-1 rounded-full border border-amber-200/50 shadow-sm">
          <IoSparklesOutline className="text-amber-500 text-[10px]" />
          <span className="text-[8px] font-black text-amber-600 uppercase tracking-wider">
            {isMemberPage ? 'Member Exclusive' : 'K-Beauty'}
          </span>
          <IoSparklesOutline className="text-amber-500 text-[10px]" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 z-10">
        <div className="w-full max-w-4xl">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-3 md:p-4 flex flex-col md:flex-row justify-between items-center gap-2 text-[8px] md:text-[9px] text-neutral-400 font-black uppercase tracking-wider z-20 bg-white/30 backdrop-blur-sm border-t border-white/50 relative">
        <p>© 2026 Crown & Co. Studio. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-amber-500 transition-colors duration-300">PRIVACY</a>
          <a href="#" className="hover:text-amber-500 transition-colors duration-300">TERMS</a>
          <a href="#" className="hover:text-amber-500 transition-colors duration-300">GET HELP</a>
        </div>
      </footer>
    </div>
  );
}