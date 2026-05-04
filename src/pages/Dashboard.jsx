import { FaCut, FaUsers, FaCalendarCheck, FaMoneyBillWave, FaArrowRight } from "react-icons/fa";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, CartesianGrid } from 'recharts'; // Tambahan untuk grafik
import PageHeader from "../components/PageHeader";

// Data untuk grafik tren (Tambahan)
const dataPerformance = [
    { name: 'Sen', revenue: 1500000 },
    { name: 'Sel', revenue: 1800000 },
    { name: 'Rab', revenue: 1200000 },
    { name: 'Kam', revenue: 2100000 },
    { name: 'Jum', revenue: 2500000 },
    { name: 'Sab', revenue: 3800000 },
    { name: 'Min', revenue: 4200000 },
];

export default function Dashboard() {
    return (
        <div id="dashboard-container" className="min-h-screen bg-gray-50/50">
            <PageHeader title="Barber Dashboard" breadcrumb={["Home", "Dashboard"]} />
            
            {/* Stat Cards (Tetap seperti aslinya) */}
            <div id="dashboard-grid" className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center space-x-5 bg-white rounded-3xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
                    <div className="bg-zinc-900 rounded-2xl p-4 text-2xl text-amber-500 shadow-inner">
                        <FaUsers />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-black text-zinc-800">12</span>
                        <span className="text-zinc-400 text-[11px] font-bold uppercase tracking-wider">Antrean</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white rounded-3xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
                    <div className="bg-zinc-100 rounded-2xl p-4 text-2xl text-zinc-500">
                        <FaCalendarCheck />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-black text-zinc-800">45</span>
                        <span className="text-zinc-400 text-[11px] font-bold uppercase tracking-wider">Selesai</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white rounded-3xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
                    <div className="bg-amber-50 rounded-2xl p-4 text-2xl text-amber-600">
                        <FaCut />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-black text-zinc-800">3</span>
                        <span className="text-zinc-400 text-[11px] font-bold uppercase tracking-wider">Stylist</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-zinc-900 rounded-3xl shadow-lg p-6 group transition-all">
                    <div className="bg-amber-500 rounded-2xl p-4 text-2xl text-zinc-900 group-hover:scale-110 transition-transform">
                        <FaMoneyBillWave />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-black text-white">Rp 2.5jt</span>
                        <span className="text-amber-500/80 text-[11px] font-bold uppercase tracking-wider">Omzet Hari Ini</span>
                    </div>
                </div>
            </div>

            {/* --- FITUR BARU: GRAFIK & PEAK HOURS (TAMBAHAN) --- */}
            <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Graph */}
                <div className="lg:col-span-2 bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                    <div className="mb-6">
                        <h3 className="text-lg font-black text-zinc-800">Tren Pendapatan Mingguan</h3>
                        <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mt-1">GentleCut Performance</p>
                    </div>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={dataPerformance}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700, fill: '#a1a1aa'}} />
                                <Tooltip contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }} />
                                <Area type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={3} fill="url(#colorRev)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Peak Hours Info */}
                <div className="bg-zinc-900 p-8 rounded-[32px] shadow-xl text-white">
                    <h3 className="text-lg font-black mb-1">Jam Teramai</h3>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6">Prediksi Kunjungan</p>
                    <div className="space-y-5">
                        {['10:00', '13:00', '16:00', '19:00'].map((time, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter">
                                    <span>Pukul {time}</span>
                                    <span className="text-amber-500">{[45, 90, 65, 80][i]}%</span>
                                </div>
                                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500" style={{ width: `${[45, 90, 65, 80][i]}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tabel Antrean Terbaru (Tetap seperti aslinya) */}
            <div className="p-4 mt-2">
                <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-xl font-black text-zinc-800 tracking-tight">Antrean Terbaru</h3>
                            <p className="text-xs text-zinc-400 mt-1 font-medium">Monitoring aktivitas cukur secara real-time</p>
                        </div>
                        <button className="flex items-center gap-2 bg-zinc-50 text-zinc-600 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all shadow-sm">
                            Lihat Semua <FaArrowRight size={10} />
                        </button>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-separate border-spacing-y-2">
                            <thead>
                                <tr className="text-zinc-400 text-[10px] uppercase tracking-[0.2em]">
                                    <th className="px-4 pb-4 font-bold">Nama Pelanggan</th>
                                    <th className="px-4 pb-4 font-bold">Layanan</th>
                                    <th className="px-4 pb-4 font-bold text-center">Status</th>
                                    <th className="px-4 pb-4 text-right font-bold">Harga</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="group hover:bg-zinc-50 transition-all duration-300">
                                    <td className="p-4 font-bold text-zinc-800 rounded-l-2xl">Ahmad Subarjo</td>
                                    <td className="p-4 text-zinc-500 font-medium italic text-xs">Gentleman Haircut + Wash</td>
                                    <td className="p-4 text-center">
                                        <span className="bg-zinc-900 text-amber-500 px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase shadow-sm">SEDANG DICUKUR</span>
                                    </td>
                                    <td className="p-4 text-right font-black text-zinc-900 rounded-r-2xl text-base">Rp 50.000</td>
                                </tr>
                                <tr className="group hover:bg-zinc-50 transition-all duration-300">
                                    <td className="p-4 font-bold text-zinc-800 rounded-l-2xl">Rizky Billiar</td>
                                    <td className="p-4 text-zinc-500 font-medium italic text-xs">Beard Trim & Shaving</td>
                                    <td className="p-4 text-center">
                                        <span className="bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase">MENUNGGU</span>
                                    </td>
                                    <td className="p-4 text-right font-black text-zinc-900 rounded-r-2xl text-base">Rp 35.000</td>
                                </tr>
                                <tr className="group hover:bg-zinc-50 transition-all duration-300">
                                    <td className="p-4 font-bold text-zinc-800 rounded-l-2xl">Dani Ramadhan</td>
                                    <td className="p-4 text-zinc-500 font-medium italic text-xs">Hair Color (Black)</td>
                                    <td className="p-4 text-center">
                                        <span className="bg-zinc-100 text-zinc-500 px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase">BOOKED</span>
                                    </td>
                                    <td className="p-4 text-right font-black text-zinc-900 rounded-r-2xl text-base">Rp 85.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}