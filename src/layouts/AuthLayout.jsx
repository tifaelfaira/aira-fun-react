import { Outlet } from "react-router-dom";
import { FaScissors } from "react-icons/fa6";

export default function AuthLayout() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8F9FA] font-inter-tight relative overflow-hidden">
      
     
      <div className="absolute inset-0 pointer-events-none" 
           style={{ 
        
             backgroundImage: 'radial-gradient(#000000 1.5px, transparent 1.5px)', 
             backgroundSize: '30px 30px',
             maskImage: 'radial-gradient(circle, black 40%, transparent 85%)',
             WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 85%)',
             opacity: '0.2' 
           }}>
      </div>

     
      <header className="p-8 absolute top-0 left-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FFB800] rounded-xl flex items-center justify-center text-white shadow-sm">
            <FaScissors className="text-xl" /> 
          </div>
          <span className="text-2xl font-bold text-[#111111] tracking-tight">Captain</span>
        </div>
      </header>

   
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-[480px]">
          <Outlet /> 
        </div>
      </main>

  
      <footer className="p-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-400 font-medium uppercase tracking-[0.15em] z-20">
        <p>© 2026 GENTLECUT INDONESIA. ALL RIGHT RESERVED.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <span className="hover:text-[#FFB800] cursor-pointer">Privacy</span>
          <span className="hover:text-[#FFB800] cursor-pointer">Terms</span>
          <span className="hover:text-[#FFB800] cursor-pointer">Get Help</span>
        </div>
      </footer>
    </div>
  );
}