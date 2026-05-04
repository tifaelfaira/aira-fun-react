import React, { useState } from "react";
import { 
    FaCrown, FaEnvelope, FaMobileAlt, 
    FaUserCircle, FaCalendarCheck, FaArrowLeft 
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
    // 1. Tambahkan state showForm supaya bisa buka/tutup form
    const [showForm, setShowForm] = useState(false);
    
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

    const getLoyaltyStyle = (loyalty) => {
        switch (loyalty) {
            case "GOLD": return "bg-amber-50 text-amber-600 border border-amber-100";
            case "SILVER": return "bg-slate-50 text-slate-600 border border-slate-100";
            case "BRONZE": return "bg-orange-50 text-orange-600 border border-orange-100";
            default: return "bg-zinc-50 text-zinc-600";
        }
    };

    return (
        <div id="customers-container" className="min-h-screen bg-gray-50/50">
            {/* 2. Judul berubah saat form terbuka */}
            <PageHeader title={showForm ? "Tambah Pelanggan Baru" : "Pelanggan"}>
                {!showForm && (
                    <button 
                        onClick={() => setShowForm(true)} // 3. SEKARANG BISA DIKLIK
                        className="bg-zinc-900 hover:bg-black text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg active:scale-95 flex items-center gap-2"
                    >
                        <span className="text-amber-500 text-lg">+</span> Tambah Pelanggan
                    </button>
                )}
            </PageHeader>

            {showForm ? (
                /* --- FORM TAMBAH PELANGGAN (Mirip Orders agar konsisten) --- */
                <div className="mt-8 bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 max-w-2xl">
                    <button onClick={() => setShowForm(false)} className="flex items-center text-zinc-400 mb-8 text-sm font-medium hover:text-amber-600 transition-colors">
                        <FaArrowLeft className="mr-2" /> Kembali ke Daftar Pelanggan
                    </button>
                    
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-zinc-700 mb-2">Nama Lengkap</label>
                            <input type="text" className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:border-amber-500" placeholder="Masukkan nama pelanggan..." />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-zinc-700 mb-2">Email</label>
                            <input type="email" className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:border-amber-500" placeholder="contoh@gentlecut.com" />
                        </div>
                        <button type="button" onClick={() => setShowForm(false)} className="w-full bg-zinc-900 text-white py-4 rounded-2xl font-bold shadow-xl">
                            Simpan Pelanggan
                        </button>
                    </form>
                </div>
            ) : (
                /* --- TABEL PELANGGAN --- */
                <div className="mt-8 bg-white rounded-[32px] shadow-sm overflow-hidden border border-gray-100">
                    <table className="w-full text-left border-separate border-spacing-0">
                        <thead>
                            <tr className="text-zinc-400 text-[10px] uppercase tracking-[0.2em] bg-zinc-50/50">
                                <th className="px-8 py-6 font-bold">ID</th>
                                <th className="px-8 py-6 font-bold">Nama Pelanggan</th>
                                <th className="px-8 py-6 font-bold">Kontak</th>
                                <th className="px-8 py-6 font-bold text-center">Terakhir</th>
                                <th className="px-8 py-6 font-bold text-center">Kunjungan</th>
                                <th className="px-8 py-6 font-bold text-center">Loyalty</th>
                            </tr>
                        </thead>
                        <tbody className="text-zinc-600 text-sm">
                            {listCustomers.map((cust) => (
                                <tr key={cust.id} className="group hover:bg-amber-50/30 transition-all duration-300 cursor-default">
                                    <td className="px-8 py-6 font-mono text-[11px] text-zinc-300 group-hover:text-zinc-400">{cust.id}</td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-11 h-11 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-amber-600 group-hover:bg-amber-50 transition-all duration-300">
                                                <FaUserCircle size={26} />
                                            </div>
                                            <span className="font-bold text-zinc-800 tracking-tight text-base group-hover:text-black">{cust.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-center gap-2 text-zinc-500 font-medium text-[11px]"><FaEnvelope className="text-zinc-400 group-hover:text-amber-500" size={12} /> {cust.email}</div>
                                            <div className="flex items-center gap-2 text-zinc-400 text-[11px]"><FaMobileAlt className="text-zinc-400 group-hover:text-amber-500" size={12} /> {cust.phone}</div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <div className="inline-flex items-center gap-2 text-[12px] font-semibold text-zinc-500 bg-zinc-50 group-hover:bg-amber-50 px-3 py-1.5 rounded-lg transition-colors">
                                            <FaCalendarCheck className="text-amber-500/50" /> {cust.lastVisit}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <div className="flex flex-col items-center">
                                            <span className="text-zinc-800 font-black text-base group-hover:text-black">{cust.totalVisits}</span>
                                            <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-tighter">Kunjungan</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest ${getLoyaltyStyle(cust.loyalty)}`}>
                                            {cust.loyalty === "GOLD" && <FaCrown size={12} className="mb-0.5" />}
                                            {cust.loyalty}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}