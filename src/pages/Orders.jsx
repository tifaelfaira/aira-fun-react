import { useState } from "react";
import { 
    FiPlus, FiScissors, FiUser, FiX, FiSearch, 
    FiEye, FiEdit2, FiTrash2, FiCreditCard, FiPercent 
} from "react-icons/fi";

export default function Orders() {
    // STATE UTAMA: Data dummy disinkronkan 100% dengan baris utama spreadsheet Excel kamu
    const [orders, setOrders] = useState([
        { 
            id: "GC-TX1001", 
            name: "Hendra Kusuma", 
            service: "Haircut & Wash", 
            payment: "Tunai", 
            campaign: "Promo New Member", 
            status: "Proses", 
            price: "Rp 60.000" 
        },
        { 
            id: "GC-TX1002", 
            name: "Reza Pratama", 
            service: "Gentle Shaving", 
            payment: "QRIS", 
            campaign: "Promo New Member", 
            status: "Antre", 
            price: "Rp 45.000" 
        },
        { 
            id: "GC-TX1003", 
            name: "Gavin Lubis", 
            service: "Creambath & Massage", 
            payment: "Tunai", 
            campaign: "Tidak Ada", 
            status: "Antre", 
            price: "Rp 70.000" 
        },
        { 
            id: "GC-TX1797", 
            name: "Zaki Santoso", 
            service: "Creambath & Massage", 
            payment: "QRIS", 
            campaign: "Grooming Gajian", 
            status: "Antre", 
            price: "Rp 70.000" 
        },
        { 
            id: "GC-TX1796", 
            name: "Aris Hidayat", 
            service: "Creambath & Massage", 
            payment: "QRIS", 
            campaign: "Diskon Jumat Berkah", 
            status: "Antre", 
            price: "Rp 70.000" 
        },
        { 
            id: "GC-TX1795", 
            name: "Reza Purnomo", 
            service: "Creambath & Massage", 
            payment: "Tunai", 
            campaign: "Grooming Gajian", 
            status: "Antre", 
            price: "Rp 70.000" 
        }
    ]);

    // State untuk Kolom Pencarian (Search Bar)
    const [searchQuery, setSearchQuery] = useState("");

    // State untuk kontrol buka/tutup Pop-up Form (Modal)
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State untuk menampung inputan form baru
    const [newName, setNewName] = useState("");
    const [newService, setNewService] = useState("Haircut & Wash");
    const [newPayment, setNewPayment] = useState("Tunai");
    const [newCampaign, setNewCampaign] = useState("Tidak Ada");

    // Helper untuk menentukan harga otomatis berdasarkan layanan yang dipilih
    const getServicePrice = (serviceName) => {
        switch (serviceName) {
            case "Gentle Shaving": return "Rp 45.000";
            case "Haircut & Wash": return "Rp 60.000";
            case "Creambath & Massage": return "Rp 70.000";
            case "Hair Coloring": return "Rp 85.000";
            case "Premium Grooming Package": return "Rp 120.000";
            default: return "Rp 60.000";
        }
    };

    // Fungsi Logika untuk Menambahkan Antrean Baru
    const handleAddOrder = (e) => {
        e.preventDefault();
        if (!newName.trim()) return alert("Nama pelanggan tidak boleh kosong!");

        const nextId = `GC-TX${1003 + orders.length}`;

        const newOrder = {
            id: nextId,
            name: newName,
            service: newService,
            payment: newPayment,
            campaign: newCampaign,
            status: "Antre",
            price: getServicePrice(newService)
        };

        setOrders([...orders, newOrder]); 
        setNewName(""); 
        setIsModalOpen(false); 
    };

    // Fungsi Filter Data berdasarkan Live Search Query
    const filteredOrders = orders.filter(order => 
        order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleActionClick = (actionType, name) => {
        alert(`Aksi [${actionType}] berhasil dipicu untuk antrean: ${name}`);
    };

    return (
        <div className="animate-fadeIn relative space-y-6">
            {/* --- HEADER --- */}
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h2 className="text-3xl font-black text-zinc-900">Antrean & Transaksi</h2>
                    <p className="text-zinc-400 text-sm font-bold mt-1">Real-time barber station & cashier monitor</p>
                </div>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-zinc-900 text-[#F2B438] px-6 py-4 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-black transition-all shadow-lg active:scale-95"
                >
                    <FiPlus /> TAMBAH ANTREAN
                </button>
            </div>

            {/* --- LIVE SEARCH BAR --- */}
            <div className="relative w-full max-w-md">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-zinc-400">
                    <FiSearch size={16} />
                </span>
                <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari antrean berdasarkan nama atau ID..." 
                    className="w-full pl-11 pr-4 py-3.5 bg-white border border-zinc-200 rounded-2xl outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-[#F2B438] text-sm font-medium shadow-sm transition-all"
                />
            </div>

            {/* --- TABEL ANTREAN --- */}
            <div className="bg-white rounded-[32px] overflow-hidden border border-zinc-200/60 shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-zinc-50/70 text-[10px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-100 whitespace-nowrap">
                            <tr>
                                <th className="px-6 py-5">Pelanggan (ID)</th>
                                <th className="px-6 py-5">Layanan Terpilih</th>
                                <th className="px-6 py-5">Metode Bayar</th>
                                <th className="px-6 py-5">Campaign / Promo</th>
                                <th className="px-6 py-5 text-center">Status</th>
                                <th className="px-6 py-5 text-right">Harga Satuan</th>
                                <th className="px-6 py-5 text-center">Menu Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 text-xs text-zinc-600 whitespace-nowrap">
                            {filteredOrders.length > 0 ? (
                                filteredOrders.map((o) => (
                                    <tr key={o.id} className="hover:bg-zinc-50/50 transition-all duration-200">
                                        {/* 1. Pelanggan */}
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-400">
                                                    <FiUser size={16}/>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-zinc-800 text-sm">{o.name}</p>
                                                    <p className="text-[10px] text-amber-600 font-mono font-bold mt-0.5">{o.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        
                                        {/* 2. Layanan Terpilih */}
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2 font-semibold text-zinc-700">
                                                <FiScissors className="text-[#F2B438]"/> {o.service}
                                            </div>
                                        </td>

                                        {/* 3. Metode Pembayaran (Excel Data) */}
                                        <td className="px-6 py-5">
                                            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded-lg font-medium text-zinc-600 text-[11px]">
                                                <FiCreditCard size={11} className="text-zinc-400" />
                                                {o.payment}
                                            </span>
                                        </td>

                                        {/* 4. Campaign / Promo (Excel Data) */}
                                        <td className="px-6 py-5">
                                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded font-medium text-[11px] ${
                                                o.campaign === "Tidak Ada" 
                                                    ? "text-zinc-400 italic" 
                                                    : "text-amber-700 bg-amber-50 border border-amber-200"
                                            }`}>
                                                {o.campaign !== "Tidak Ada" && <FiPercent size={10} />}
                                                {o.campaign}
                                            </span>
                                        </td>
                                        
                                        {/* 5. Status */}
                                        <td className="px-6 py-5 text-center">
                                            <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border ${
                                                o.status === 'Proses' 
                                                    ? 'bg-zinc-950 text-[#F2B438] border-zinc-950' 
                                                    : 'bg-zinc-100 text-zinc-600 border-zinc-200'
                                            }`}>
                                                {o.status}
                                            </span>
                                        </td>
                                        
                                        {/* 6. Harga Satuan */}
                                        <td className="px-6 py-5 text-right font-bold text-zinc-900 text-sm">{o.price}</td>

                                        {/* 7. Menu Aksi */}
                                        <td className="px-6 py-5 text-center">
                                            <div className="flex items-center justify-center gap-1.5">
                                                <button onClick={() => handleActionClick("SEE", o.name)} title="See Detail" className="p-1.5 bg-zinc-50 hover:bg-zinc-900 text-zinc-500 hover:text-[#F2B438] rounded-lg border border-zinc-200 hover:border-zinc-900 transition-all active:scale-90"><FiEye size={12} /></button>
                                                <button onClick={() => handleActionClick("EDIT", o.name)} title="Edit Data" className="p-1.5 bg-zinc-50 hover:bg-zinc-900 text-zinc-500 hover:text-emerald-500 rounded-lg border border-zinc-200 hover:border-zinc-900 transition-all active:scale-90"><FiEdit2 size={12} /></button>
                                                <button onClick={() => handleActionClick("HAPUS", o.name)} title="Hapus Data" className="p-1.5 bg-red-50 hover:bg-red-600 text-red-500 hover:text-white rounded-lg border border-red-100 hover:border-red-600 transition-all active:scale-90"><FiTrash2 size={12} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center py-12 text-zinc-400 font-medium italic bg-zinc-50/20">
                                        Data antrean tidak ditemukan.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- MODAL POP-UP FORM --- */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
                    <div className="bg-white rounded-[32px] p-8 w-full max-w-md border border-zinc-200/60 shadow-2xl relative mx-4">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-600 transition-colors"><FiX size={20} /></button>
                        <h3 className="text-xl font-black text-zinc-900 mb-6">Tambah Antrean Baru</h3>
                        
                        <form onSubmit={handleAddOrder} className="space-y-4">
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-1">Nama Pelanggan</label>
                                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className="w-full p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-[#F2B438] transition-all font-bold text-zinc-700 text-sm" placeholder="Masukkan nama..." required />
                            </div>

                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-1">Pilih Layanan</label>
                                <select value={newService} onChange={(e) => setNewService(e.target.value)} className="w-full p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-[#F2B438] transition-all font-bold text-zinc-600 text-sm cursor-pointer">
                                    <option value="Haircut & Wash">Haircut & Wash (Rp 60.000)</option>
                                    <option value="Gentle Shaving">Gentle Shaving (Rp 45.000)</option>
                                    <option value="Creambath & Massage">Creambath & Massage (Rp 70.000)</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-1">Metode Bayar</label>
                                    <select value={newPayment} onChange={(e) => setNewPayment(e.target.value)} className="w-full p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-bold text-zinc-600">
                                        <option value="Tunai">Tunai</option>
                                        <option value="QRIS">QRIS</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-1">Campaign</label>
                                    <select value={newCampaign} onChange={(e) => setNewCampaign(e.target.value)} className="w-full p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-bold text-zinc-600">
                                        <option value="Tidak Ada">Tidak Ada</option>
                                        <option value="Promo New Member">New Member</option>
                                        <option value="Grooming Gajian">Gajian</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-zinc-900 text-[#F2B438] py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-md mt-2">
                                Masukkan Ke Antrean
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}