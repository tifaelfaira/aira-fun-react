import { useState } from "react";
import { FiPlus, FiScissors, FiUser, FiClock } from "react-icons/fi";

export default function Orders() {
    const [orders] = useState([
        { id: "TX-001", name: "Ahmad Subarjo", service: "Gentleman Cut", status: "Proses", price: "50k" },
        { id: "TX-002", name: "Rizky Billiar", service: "Beard Trim", status: "Antre", price: "35k" }
    ]);

    return (
        <div className="animate-fadeIn">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-3xl font-black text-zinc-900">Antrean Cukur</h2>
                    <p className="text-zinc-400 text-sm font-bold mt-1">Real-time barber station monitor</p>
                </div>
                <button className="bg-zinc-900 text-amber-500 px-6 py-4 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-black transition-all shadow-lg">
                    <FiPlus /> TAMBAH ANTREAN
                </button>
            </div>

            <div className="bg-white rounded-[32px] overflow-hidden border border-zinc-100 shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-zinc-50/50 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                        <tr>
                            <th className="px-8 py-6">Pelanggan</th>
                            <th className="px-8 py-6">Layanan</th>
                            <th className="px-8 py-6 text-center">Status</th>
                            <th className="px-8 py-6 text-right">Harga</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-50">
                        {orders.map((o) => (
                            <tr key={o.id} className="hover:bg-amber-50/20 transition-all">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400"><FiUser/></div>
                                        <div>
                                            <p className="font-black text-zinc-800">{o.name}</p>
                                            <p className="text-[10px] text-zinc-400 font-mono">{o.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-2 text-sm font-bold text-zinc-500">
                                        <FiScissors className="text-amber-500"/> {o.service}
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-center">
                                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-tighter ${o.status === 'Proses' ? 'bg-zinc-900 text-amber-500' : 'bg-amber-100 text-amber-700'}`}>
                                        {o.status}
                                    </span>
                                </td>
                                <td className="px-8 py-6 text-right font-black text-zinc-900">{o.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}