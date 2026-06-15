import { FiTrendingUp, FiTrendingDown, FiActivity, FiSearch, FiUsers } from "react-icons/fi"; 
import { useState, useRef, useEffect } from "react";
import { 
    ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, CartesianGrid,
    PieChart, Pie, Cell 
} from 'recharts';

// 1. DATA GRAFIK OMSET MINGGUAN
const revenueData = [
    { n: 'Mon', v: 250000 }, 
    { n: 'Tue', v: 490000 }, 
    { n: 'Wed', v: 380000 },
    { n: 'Thu', v: 450000 }, 
    { n: 'Fri', v: 580000 }, 
    { n: 'Sat', v: 720000 }, 
    { n: 'Sun', v: 650000 }
];

// 2. DATA DIAGRAM BULAT (Pie Chart)
const pieData = [
    { name: 'Haircut', value: 40 },
    { name: 'Treatment', value: 35 },
    { name: 'Shaving', value: 15 },
    { name: 'Coloring', value: 7 },
    { name: 'Styling', value: 3 },
];

const COLORS = ['#F2B438', '#18181B', '#71717A', '#A1A1AA', '#E4E4E7'];

// 3. DATA BARIS MURNI DIAMBIL DARI BARIS 1-7 EXCEL SPREADSHEET GENTLECUT
const excelRecentOrders = [
  { id: "GC-1001", name: "Hendra Kusuma", level: "Gold", totalTx: 17, lastItem: "Haircut & Wash", payment: "Tunai", levelStyle: "bg-amber-100 text-amber-800 border-amber-300" },
  { id: "GC-1002", name: "Reza Pratama", level: "Regular", totalTx: 9, lastItem: "Gentle Shaving", payment: "QRIS", levelStyle: "bg-zinc-100 text-zinc-700 border-zinc-300" },
  { id: "GC-1003", name: "Gavin Lubis", level: "Regular", totalTx: 12, lastItem: "Creambath & Massage", payment: "QRIS", levelStyle: "bg-zinc-100 text-zinc-700 border-zinc-300" },
  { id: "GC-1797", name: "Zaki Santoso", level: "Silver", totalTx: 15, lastItem: "Creambath & Massage", payment: "Tunai", levelStyle: "bg-slate-100 text-slate-700 border-slate-300" },
  { id: "GC-1796", name: "Aris Hidayat", level: "Regular", totalTx: 20, lastItem: "Creambath & Massage", payment: "QRIS", levelStyle: "bg-zinc-100 text-zinc-700 border-zinc-300" },
  { id: "GC-1795", name: "Reza Purnomo", level: "Regular", totalTx: 24, lastItem: "Creambath & Massage", payment: "Tunai", levelStyle: "bg-zinc-100 text-zinc-700 border-zinc-300" }
];

// SVGS ICON SET
function FigmaKoinBulatIcon() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10" />
      <text x="50%" y="62%" fontSize="8" fontWeight="900" fontFamily="sans-serif" fill="currentColor" textAnchor="middle">Rp</text>
    </svg>
  );
}

function FigmaCalendarPutihIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}

function BarbershopServiceIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="9.8" y1="8.5" x2="20" y2="17" />
      <line x1="9.8" y1="15.5" x2="20" y2="7" />
    </svg>
  );
}

export default function Dashboard() {
    const searchInputRef = useRef(null); 
    const [searchQuery, setSearchQuery] = useState("");
    
    // ================= TAMBAHAN: STATE UNTUK USER DARI SUPABASE =================
    const [usersData, setUsersData] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(false);

    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, []);

    // ================= TAMBAHAN: FETCH USERS DARI SUPABASE =================
    useEffect(() => {
        const fetchUsers = async () => {
            setLoadingUsers(true);
            try {
                const { userAPI } = await import("../services/userAPI");
                const data = await userAPI.fetchUsers();
                setUsersData(data.slice(0, 5)); // Ambil 5 user terbaru
            } catch (err) {
                console.error("Gagal load users:", err);
            } finally {
                setLoadingUsers(false);
            }
        };
        fetchUsers();
    }, []);

    const filteredOrders = excelRecentOrders.filter(order => 
        order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="animate-fadeIn space-y-8 bg-[#FAFAFA] min-h-screen p-4">
            
            {/* ================= CARD TOP STATS ================= */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: "Total Revenue", val: "Rp 435.000", up: true, pct: "12.3%", icon: <FigmaKoinBulatIcon /> },
                    { label: "Total Bookings", val: "2 Antrean", up: false, pct: "5.2%", icon: <FigmaCalendarPutihIcon /> },
                    { label: "Total Services", val: "7 Layanan", up: true, pct: "16.6%", icon: <BarbershopServiceIcon /> }
                ].map((s, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
                        <div className="w-11 h-11 bg-[#F2B438] rounded-xl flex items-center justify-center mb-4 shadow-sm">
                            {s.icon}
                        </div>
                        <p className="text-zinc-400 text-sm font-medium">{s.label}</p>
                        <div className="flex justify-between items-center mt-1">
                            <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">{s.val}</h3>
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 ${
                                s.up ? 'bg-[#EBFDF5] text-[#10B981]' : 'bg-[#FFF1F2] text-[#F43F5E]'
                            }`}>
                                {s.up ? <FiTrendingUp /> : <FiTrendingDown />}
                                {s.pct}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= CHARTS SECTION ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-zinc-800 text-sm tracking-tight flex items-center gap-2">
                            <FiActivity className="text-[#F2B438]" /> Revenue Performance (IDR)
                        </h3>
                    </div>
                    <div className="h-[280px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorV" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#F2B438" stopOpacity={0.2}/>
                                        <stop offset="95%" stopColor="#F2B438" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#F1F1F2" />
                                <XAxis dataKey="n" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 500, fill: '#A1A1AA' }} dy={10} />
                                <Tooltip formatter={(value) => [`Rp ${value.toLocaleString('id-ID')}`, 'Revenue']} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }} />
                                <Area type="monotone" dataKey="v" stroke="#F2B438" strokeWidth={3.5} fill="url(#colorV)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-zinc-800 text-sm tracking-tight">Kategori Terlaris (%)</h3>
                        <p className="text-xs text-zinc-400 mt-0.5">Segmentasi orderan masuk</p>
                    </div>
                    <div className="h-[220px] relative flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={85} paddingAngle={5} dataKey="value">
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => [`${value}%`, 'Proporsi']} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute text-center">
                            <p className="text-2xl font-black text-zinc-800">Gentle</p>
                            <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Cut Lab</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-100 text-[11px] font-medium text-zinc-500">
                        {pieData.slice(0, 3).map((item, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 truncate">
                                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: COLORS[idx] }} />
                                <span className="truncate">{item.name}</span>
                            </div>
                        ))}
                        <div className="col-span-3 text-center text-[10px] text-zinc-400 font-normal italic pt-1">
                            + Coloring & Styling
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= TABEL DATA CUSTOMER DENGAN SEARCH BAR ================= */}
            <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)] overflow-hidden">
                <div className="p-6 border-b border-zinc-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h3 className="font-bold text-zinc-800 text-sm tracking-tight">Data Pelanggan Terbaru (CRM Database)</h3>
                        <p className="text-xs text-zinc-400 mt-0.5">Sinkronisasi data langsung dengan lembar spreadsheet utama GentleCut</p>
                    </div>
                    
                    <div className="relative w-full sm:w-64">
                        <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 text-base" />
                        <input 
                            ref={searchInputRef} 
                            type="text" 
                            placeholder="Cari ID / Nama..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-xs text-zinc-800 focus:bg-white focus:border-[#F2B438] focus:ring-1 focus:ring-[#F2B438] outline-none transition"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-zinc-50 text-zinc-500 font-semibold text-[11px] uppercase tracking-wider border-b border-zinc-100">
                                <th className="p-4 pl-6">ID Customer</th>
                                <th className="p-4">Nama Lengkap</th>
                                <th className="p-4">Status Member</th>
                                <th className="p-4 text-center">Total Transaksi (Kali)</th>
                                <th className="p-4">Produk/Item Terakhir</th>
                                <th className="p-4 pr-6">Metode Pembayaran</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 text-xs text-zinc-600">
                            {filteredOrders.length > 0 ? (
                                filteredOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-zinc-50/50 transition">
                                        <td className="p-4 pl-6 font-mono font-bold text-amber-600">{order.id}</td>
                                        <td className="p-4 font-bold text-zinc-800">{order.name}</td>
                                        <td className="p-4">
                                            <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${order.levelStyle}`}>
                                                {order.level}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center font-bold text-zinc-700">{order.totalTx}x</td>
                                        <td className="p-4 font-medium text-zinc-800">{order.lastItem}</td>
                                        <td className="p-4 pr-6">
                                            <span className={`px-2 py-1 rounded text-[10px] font-semibold ${
                                                order.payment === "QRIS" ? "bg-blue-50 text-blue-700 border border-blue-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                            }`}>
                                                {order.payment}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="p-8 text-center text-zinc-400 italic">Data pelanggan tidak ditemukan...</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ================= TAMBAHAN: DAFTAR USER TERBARU DARI SUPABASE ================= */}
            <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)] overflow-hidden">
                <div className="p-6 border-b border-zinc-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h3 className="font-bold text-zinc-800 text-sm tracking-tight flex items-center gap-2">
                            <FiUsers className="text-[#F2B438] text-base" />
                            Daftar User Terbaru (Supabase)
                        </h3>
                        <p className="text-xs text-zinc-400 mt-0.5">Data user yang terdaftar di database Supabase</p>
                    </div>
                    <button 
                        onClick={() => window.location.href = '/users'}
                        className="text-xs font-semibold text-[#F2B438] hover:text-amber-600 transition flex items-center gap-1"
                    >
                        Lihat Semua User →
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-zinc-50 text-zinc-500 font-semibold text-[11px] uppercase tracking-wider border-b border-zinc-100">
                                <th className="p-4 pl-6">No</th>
                                <th className="p-4">Email</th>
                                <th className="p-4">Nama Lengkap</th>
                                <th className="p-4">Role</th>
                                <th className="p-4 pr-6">Tanggal Daftar</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 text-xs text-zinc-600">
                            {loadingUsers ? (
                                <tr>
                                    <td colSpan="5" className="p-8 text-center text-zinc-400">
                                        <div className="flex justify-center items-center gap-2">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-amber-500"></div>
                                            Loading users...
                                        </div>
                                    </td>
                                </tr>
                            ) : usersData.length > 0 ? (
                                usersData.map((user, index) => (
                                    <tr key={user.id} className="hover:bg-zinc-50/50 transition">
                                        <td className="p-4 pl-6 font-mono text-zinc-500">{index + 1}.</td>
                                        <td className="p-4 font-medium text-zinc-800">{user.email}</td>
                                        <td className="p-4 text-zinc-600">{user.full_name || "-"}</td>
                                        <td className="p-4">
                                            <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                                                user.role === 'admin' 
                                                    ? 'bg-amber-100 text-amber-700 border border-amber-200' 
                                                    : 'bg-gray-100 text-gray-600 border border-gray-200'
                                            }`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="p-4 pr-6 text-zinc-500">
                                            {user.created_at ? new Date(user.created_at).toLocaleDateString('id-ID') : '-'}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="p-8 text-center text-zinc-400">
                                        Belum ada data user. Silahkan registrasi terlebih dahulu.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}