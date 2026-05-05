import React, { useState } from "react";
import { 
    FaCrown, FaEnvelope, FaMobileAlt, 
    FaUserCircle, FaCalendarCheck, FaArrowLeft, FaPlus
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
    // State untuk toggle Form vs List
    const [showForm, setShowForm] = useState(false);
    
    // Data dummy yang lebih lengkap
    const [listCustomers] = useState([
        { 
            id: "CUST-001", 
            name: "Roujwa Tifaelfaira", 
            email: "roujwa.tf@gentlecut.com", 
            phone: "0812-3456-7890", 
            loyalty: "GOLD", 
            lastVisit: "2026-05-01", 
            totalVisits: 24 
        },
        { 
            id: "CUST-002", 
            name: "Budi Santoso", 
            email: "budi.san@example.com", 
            phone: "0812-9876-5432", 
            loyalty: "SILVER", 
            lastVisit: "2026-04-28", 
            totalVisits: 12 
        },
        { 
            id: "CUST-003", 
            name: "Andi Wijaya", 
            email: "andi.w@example.com", 
            phone: "0813-1122-3344", 
            loyalty: "BRONZE", 
            lastVisit: "2026-05-03", 
            totalVisits: 3 
        }
    ]);

    // Helper styling untuk Badge Loyalty
    const getLoyaltyStyle = (loyalty) => {
        switch (loyalty) {
            case "GOLD": return "bg-amber-50 text-amber-600 border border-amber-100";
            case "SILVER": return "bg-slate-50 text-slate-600 border border-slate-100";
            case "BRONZE": return "bg-orange-50 text-orange-600 border border-orange-100";
            default: return "bg-zinc-50 text-zinc-600";
        }
    };

    return (
        <div id="customers-container" className="animate-fadeIn">
            {/* Header Dinamis */}
            <PageHeader 
                title={showForm ? "Tambah Pelanggan" : "Database Pelanggan"} 
                breadcrumb={["Home", "Customers"]}
            >
                {!showForm && (
                    <button 
                        onClick={() => setShowForm(true)} 
                        className="bg-zinc-900 hover:bg-black text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all shadow-lg active:scale-95 flex items-center gap-2"
                    >
                        <FaPlus className="text-amber-500" /> Tambah Pelanggan
                    </button>
                )}
            </PageHeader>

            {showForm ? (
                /* --- FORM TAMBAH PELANGGAN --- */
                <div className="bg-white p-10 rounded-[40px] shadow-sm border border-zinc-100 max-w-2xl animate-fadeIn">
                    <button 
                        onClick={() => setShowForm(false)} 
                        className="flex items-center text-zinc-400 mb-8 text-sm font-bold hover:text-amber-600 transition-colors"
                    >
                        <FaArrowLeft className="mr-2" /> Kembali ke Daftar
                    </button>
                    
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Nama Lengkap</label>
                                <input type="text" className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium" placeholder="Masukkan nama..." />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Email Aktif</label>
                                <input type="email" className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium" placeholder="email@gentlecut.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Nomor WhatsApp</label>
                                <input type="text" className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium" placeholder="0812xxxx" />
                            </div>
                        </div>
                        <button type="button" onClick={() => setShowForm(false)} className="w-full bg-zinc-900 text-amber-500 py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl hover:bg-black transition-all mt-4">
                            Simpan Data Pelanggan
                        </button>
                    </form>
                </div>
            ) : (
                /* --- TABEL PELANGGAN --- */
                <div className="bg-white rounded-[40px] shadow-sm overflow-hidden border border-zinc-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-separate border-spacing-0">
                            <thead>
                                <tr className="text-zinc-400 text-[10px] uppercase tracking-[0.2em] bg-zinc-50/50">
                                    <th className="px-8 py-6 font-black">Member ID</th>
                                    <th className="px-8 py-6 font-black">Customer</th>
                                    <th className="px-8 py-6 font-black">Contact Info</th>
                                    <th className="px-8 py-6 font-black text-center">Total Visit</th>
                                    <th className="px-8 py-6 font-black text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-600 text-sm">
                                {listCustomers.map((cust) => (
                                    <tr key={cust.id} className="group hover:bg-amber-50/30 transition-all duration-300 cursor-default">
                                        <td className="px-8 py-6 font-mono text-[11px] text-zinc-300 group-hover:text-zinc-500">{cust.id}</td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-amber-600 group-hover:bg-amber-50 group-hover:rotate-6 transition-all duration-300">
                                                    <FaUserCircle size={28} />
                                                </div>
                                                <div>
                                                    <span className="font-black text-zinc-800 block text-base group-hover:text-black transition-colors">{cust.name}</span>
                                                    <span className="text-[10px] font-bold text-zinc-400 uppercase italic">Last: {cust.lastVisit}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex flex-col gap-1.5">
                                                <div className="flex items-center gap-2 text-zinc-500 font-bold text-[11px]"><FaEnvelope className="text-zinc-300 group-hover:text-amber-500" /> {cust.email}</div>
                                                <div className="flex items-center gap-2 text-zinc-400 font-bold text-[11px]"><FaMobileAlt className="text-zinc-300 group-hover:text-amber-500" /> {cust.phone}</div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-center">
                                            <div className="inline-flex flex-col items-center p-2 rounded-xl group-hover:bg-white transition-all">
                                                <span className="text-zinc-800 font-black text-lg leading-none">{cust.totalVisits}</span>
                                                <span className="text-[9px] text-zinc-400 uppercase font-black tracking-tighter mt-1">Cukur</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-center">
                                            <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[10px] font-black tracking-widest transition-all ${getLoyaltyStyle(cust.loyalty)} group-hover:scale-105`}>
                                                {cust.loyalty === "GOLD" && <FaCrown size={12} className="mb-0.5" />}
                                                {cust.loyalty}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}