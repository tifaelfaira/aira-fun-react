import { FiTrendingUp, FiTrendingDown, FiCalendar, FiDollarSign, FiUsers, FiStar } from "react-icons/fi";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
    { n: 'Mon', v: 1200 }, { n: 'Tue', v: 2100 }, { n: 'Wed', v: 1800 },
    { n: 'Thu', v: 2400 }, { n: 'Fri', v: 3800 }, { n: 'Sat', v: 4200 }, { n: 'Sun', v: 3500 }
];

export default function Dashboard() {
    return (
        <div className="animate-fadeIn space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: "Today's Revenue", val: "Rp 5.2jt", up: true, icon: <FiDollarSign /> },
                    { label: "Total Bookings", val: "24", up: true, icon: <FiCalendar /> },
                    { label: "Active Customers", val: "1.2k", up: false, icon: <FiUsers /> },
                    { label: "Avg Rating", val: "4.9", up: true, icon: <FiStar /> }
                ].map((s, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">{s.icon}</div>
                            <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${s.up ? 'bg-emerald-50 text-emerald-600' : 'bg-pink-50 text-pink-600'}`}>
                                {s.up ? '+12%' : '-2%'}
                            </span>
                        </div>
                        <p className="text-zinc-400 text-[10px] uppercase font-black tracking-widest">{s.label}</p>
                        <h3 className="text-2xl font-black mt-1">{s.val}</h3>
                    </div>
                ))}
            </div>

            {/* Chart */}
            <div className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm">
                <h3 className="font-black text-zinc-800 uppercase text-xs tracking-widest mb-6">Revenue Performance</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorV" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                            <XAxis dataKey="n" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700}} />
                            <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
                            <Area type="monotone" dataKey="v" stroke="#f59e0b" strokeWidth={4} fill="url(#colorV)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}