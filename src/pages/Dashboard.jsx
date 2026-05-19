import { FiTrendingUp, FiTrendingDown, FiCalendar } from "react-icons/fi";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
    { n: 'Mon', v: 1200 }, { n: 'Tue', v: 2100 }, { n: 'Wed', v: 1800 },
    { n: 'Thu', v: 2400 }, { n: 'Fri', v: 3800 }, { n: 'Sat', v: 4200 }, { n: 'Sun', v: 3500 }
];

// 1. IKON KOIN BULAT MINIMALIS UNTUK TOTAL REVENUE
function FigmaKoinBulatIcon() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Lingkaran koin utama */}
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
      {/* Simbol dollar di dalam koin */}
      <path d="M12 6v12M14.5 8H11a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H9.5" />
    </svg>
  );
}

// 2. IKON KALENDER PUTIH UNTUK TOTAL BOOKINGS
function FigmaCalendarPutihIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}

// 3. IKON GUNTING & SISIR BARBERSHOP PUTIH UNTUK TOTAL SERVICES
function BarbershopServiceIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="9.8" y1="8.5" x2="20" y2="17" />
      <line x1="9.8" y1="15.5" x2="20" y2="7" />
    </svg>
  );
}

export default function Dashboard() {
    return (
        <div className="animate-fadeIn space-y-8 bg-[#FAFAFA] min-h-screen p-1">
            
            {/* Stats Section: 3 Card Sesuai Pilihan Desain Figma */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: "Total Revenue", val: "$23,249.00", up: true, pct: "10.5%", icon: <FigmaKoinBulatIcon /> },
                    { label: "Total Bookings", val: "2.095", up: false, pct: "10.5%", icon: <FigmaCalendarPutihIcon /> },
                    { label: "Total Services", val: "27", up: true, pct: "10.5%", icon: <BarbershopServiceIcon /> }
                ].map((s, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
                        
                        {/* WADAH IKON: Diubah jadi warna kuning pekat #F2B438, dengan isi icon warna putih murni */}
                        <div className="w-11 h-11 bg-[#F2B438] rounded-xl flex items-center justify-center mb-4 shadow-sm">
                            {s.icon}
                        </div>
                        
                        {/* Label Teks Kategori */}
                        <p className="text-zinc-400 text-sm font-medium">{s.label}</p>
                        
                        {/* Baris Angka Nominal & Persentase */}
                        <div className="flex justify-between items-center mt-1">
                            <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">{s.val}</h3>
                            
                            {/* Badge Persentase di Kanan Angka Nominal */}
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 ${
                                s.up ? 'bg-[#EBFDF5] text-[#10B981]' : 'bg-[#FFF1F2] text-[#F43F5E]'
                            }`}>
                                {s.up ? <FiTrendingUp className="text-[10px]" /> : <FiTrendingDown className="text-[10px]" />}
                                {s.pct}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chart Section */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
                <h3 className="font-bold text-zinc-800 text-sm mb-6">Revenue Performance</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorV" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#F2B438" stopOpacity={0.2}/>
                                    <stop offset="95%" stopColor="#F2B438" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#F1F1F2" />
                            <XAxis 
                                dataKey="n" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fontSize: 12, fontWeight: 500, fill: '#A1A1AA' }} 
                                dy={10}
                            />
                            <Tooltip 
                                contentStyle={{
                                    borderRadius: '12px', 
                                    border: 'none', 
                                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
                                    backgroundColor: '#FFFFFF'
                                }} 
                            />
                            <Area 
                                type="monotone" 
                                dataKey="v" 
                                stroke="#F2B438" 
                                strokeWidth={3.5} 
                                fill="url(#colorV)" 
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}