import React, { useState } from "react";
import { 
    FaCut, FaArrowLeft, FaUser, FaCalendarAlt, FaWallet, FaClock, FaCheckCircle 
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Orders() {
    const [showForm, setShowForm] = useState(false);
    
    const [listOrders, setListOrders] = useState([
        {
            id: "GENTLE-2026001",
            customerName: "Budi Santoso",
            service: "Gentleman Haircut",
            status: "In Progress",
            totalPrice: 50000,
            date: "2026-05-04"
        },
        {
            id: "GENTLE-2026002",
            customerName: "Andi Wijaya",
            service: "Beard Trim",
            status: "Waiting",
            totalPrice: 35000,
            date: "2026-05-04"
        }
    ]);

    const [formData, setFormData] = useState({
        name: "",
        service: "Gentleman Haircut",
        price: ""
    });

    const handleSaveOrder = (e) => {
        e.preventDefault();
        const newOrder = {
            id: `GENTLE-${Date.now().toString().slice(-7)}`,
            customerName: formData.name,
            service: formData.service,
            status: "Waiting",
            totalPrice: parseInt(formData.price),
            date: new Date().toISOString().split('T')[0]
        };

        setListOrders([newOrder, ...listOrders]);
        setFormData({ name: "", service: "Gentleman Haircut", price: "" });
        setShowForm(false);
    };

    // Style Status dengan tema Amber & Zinc
    const getStatusStyle = (status) => {
        switch (status) {
            case "Completed": return "bg-zinc-100 text-zinc-800 border border-zinc-200";
            case "In Progress": return "bg-amber-50 text-amber-600 border border-amber-100";
            case "Waiting": return "bg-orange-50 text-orange-600 border border-orange-100";
            default: return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div id="orders-container" className="min-h-screen bg-gray-50/30">
            <PageHeader title={showForm ? "Tambah Antrean" : "Antrean Cukur"}>
                {!showForm && (
                    /* Tombol Hitam/Zinc khas Barbershop Modern */
                    <button 
                        onClick={() => setShowForm(true)} 
                        className="bg-zinc-900 hover:bg-black text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg active:scale-95"
                    >
                        <FaCut size={14} className="text-amber-500" /> + Tambah Antrean
                    </button>
                )}
            </PageHeader>

            {showForm ? (
                /* --- FORM TAMBAH DATA (Tema Amber/Zinc) --- */
                <div className="mt-8 bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 max-w-2xl">
                    <button onClick={() => setShowForm(false)} className="flex items-center text-zinc-400 mb-8 text-sm font-medium hover:text-amber-600 transition-colors">
                        <FaArrowLeft className="mr-2" /> Kembali ke Antrean
                    </button>
                    
                    <form onSubmit={handleSaveOrder} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-zinc-700 mb-2 ml-1">Nama Pelanggan</label>
                            <input 
                                type="text" required 
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" 
                                placeholder="Masukkan nama..." 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-zinc-700 mb-2 ml-1">Layanan</label>
                            <select 
                                value={formData.service}
                                onChange={(e) => setFormData({...formData, service: e.target.value})}
                                className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none"
                            >
                                <option>Gentleman Haircut</option>
                                <option>Beard Trim</option>
                                <option>Premium Shaving</option>
                                <option>Hair Color</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-zinc-700 mb-2 ml-1">Harga (Rp)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-4 text-zinc-400 font-bold">Rp</span>
                                <input 
                                    type="number" required 
                                    value={formData.price}
                                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                                    className="w-full p-4 pl-12 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" 
                                    placeholder="50000" 
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-zinc-900 hover:bg-black text-white py-4 rounded-2xl font-bold shadow-xl transition-all active:scale-[0.98]">
                            Konfirmasi Antrean
                        </button>
                    </form>
                </div>
            ) : (
                /* --- TABEL DATA (Tanpa Garis Kaku, Hover Lembut) --- */
                <div className="mt-8 bg-white rounded-[32px] shadow-sm border border-gray-50 overflow-hidden">
                    <table className="w-full text-left border-separate border-spacing-0">
                        <thead>
                            <tr className="bg-zinc-50/50 text-zinc-400 text-[10px] uppercase tracking-[0.2em]">
                                <th className="px-8 py-6 font-bold">ID Transaksi</th>
                                <th className="px-8 py-6 font-bold">Pelanggan</th>
                                <th className="px-8 py-6 font-bold">Layanan</th>
                                <th className="px-8 py-6 font-bold text-center">Status</th>
                                <th className="px-8 py-6 font-bold">Harga</th>
                            </tr>
                        </thead>
                        <tbody className="text-zinc-600 text-sm">
                            {listOrders.map((order) => (
                                <tr key={order.id} className="group hover:bg-amber-50/30 transition-all duration-300">
                                    <td className="px-8 py-6 font-mono text-[11px] text-zinc-300 group-hover:text-amber-600 transition-colors">
                                        {order.id}
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-amber-100 group-hover:text-amber-600 transition-all">
                                                <FaUser size={14} />
                                            </div>
                                            <span className="font-bold text-zinc-800 group-hover:text-black">{order.customerName}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 font-medium">
                                        <div className="flex items-center gap-2">
                                            <FaCut className="text-zinc-300" size={12} />
                                            {order.service}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase ${getStatusStyle(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 font-black text-zinc-900 text-base">
                                        <span className="text-xs font-normal text-zinc-400 mr-1">Rp</span>
                                        {order.totalPrice.toLocaleString("id-ID")}
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