export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-6 rounded-xl mt-10 shadow-inner border border-zinc-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-bold mb-1 tracking-wide">
          GentleCut <span className="text-[#F5B301]">CRM</span>
        </h2>
        <p className="text-zinc-400 text-xs mb-4">
          Barbershop Management & Booking System Platform.
        </p>
        <div className="flex justify-center gap-6 text-sm mb-4 font-medium">
          <a href="#" className="text-zinc-400 hover:text-[#F5B301] transition-colors">Overview</a>
          <a href="#" className="text-zinc-400 hover:text-[#F5B301] transition-colors">Orders</a>
          <a href="#" className="text-zinc-400 hover:text-[#F5B301] transition-colors">Products</a>
        </div>
        <p className="text-zinc-500 text-xs">
          © 2026 GentleCut. All rights reserved.
        </p>
      </div>
    </footer>
  );
}