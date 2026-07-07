import React, { useState } from "react";
import { 
    FaCrown, FaEnvelope, FaMobileAlt, FaMapMarkerAlt,
    FaUserCircle, FaArrowLeft, FaPlus, FaFilter, 
    FaShareAlt, FaSearch, FaEye, FaEdit, FaTrash, FaMars
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
    const [showForm, setShowForm] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState("ALL");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isViewing, setIsViewing] = useState(false);
    
    // State untuk form edit/tambah
    const [formData, setFormData] = useState({
        name: "",
        gender: "Laki-laki",
        email: "",
        phone: "",
        address: "",
        level: "Regular",
        status: "Aktif",
        source: "Instagram"
    });

    // Data dummy diperluas fiturnya agar menampung kolom baru dari data asli Excel
    const [listCustomers, setListCustomers] = useState([
        { 
            id: "GC-1001", 
            name: "Hendra Kusuma", 
            gender: "Laki-laki",
            email: "hendrakusuma35@gmail.com", 
            phone: "081268151070", 
            address: "Jl. Raya No. 10, Semarang",
            level: "Gold", 
            status: "Aktif",
            totalTx: 17, 
            lastItem: "Haircut & Wash",
            lastTxDate: "2025-08-14",
            source: "Instagram"
        },
        { 
            id: "GC-1002", 
            name: "Reza Pratama", 
            gender: "Laki-laki",
            email: "rezapratama60@gmail.com", 
            phone: "081222962177", 
            address: "Jl. Raya No. 109, Makassar",
            level: "Regular", 
            status: "Aktif",
            totalTx: 9, 
            lastItem: "Gentle Shaving",
            lastTxDate: "2025-10-21",
            source: "Instagram"
        },
        { 
            id: "GC-1003", 
            name: "Gavin Lubis", 
            gender: "Laki-laki",
            email: "gavinlubis19@gmail.com", 
            phone: "081273910244", 
            address: "Jl. Raya No. 45, Bandung",
            level: "Regular", 
            status: "Tidak Aktif",
            totalTx: 12, 
            lastItem: "Creambath & Massage",
            lastTxDate: "2025-09-02",
            source: "Spanduk Jalan"
        },
        { 
            id: "GC-1797", 
            name: "Zaki Santoso", 
            gender: "Laki-laki",
            email: "zakisantoso44@gmail.com", 
            phone: "081284296558", 
            address: "Jl. Raya No. 8, Medan",
            level: "Silver", 
            status: "Aktif",
            totalTx: 15, 
            lastItem: "Creambath & Massage",
            lastTxDate: "2025-06-07",
            source: "Instagram"
        },
        { 
            id: "GC-1796", 
            name: "Aris Hidayat", 
            gender: "Laki-laki",
            email: "arishidayat85@gmail.com", 
            phone: "081257398414", 
            address: "Jl. Raya No. 113, Yogyakarta",
            level: "Regular", 
            status: "Aktif",
            totalTx: 20, 
            lastItem: "Creambath & Massage",
            lastTxDate: "2025-06-27",
            source: "Spanduk Jalan"
        },
        { 
            id: "GC-1795", 
            name: "Reza Purnomo", 
            gender: "Laki-laki",
            email: "rezapurnomo94@gmail.com", 
            phone: "081296702451", 
            address: "Jl. Raya No. 126, Surabaya",
            level: "Regular", 
            status: "Aktif",
            totalTx: 24, 
            lastItem: "Creambath & Massage",
            lastTxDate: "2025-11-09",
            source: "Instagram"
        }
    ]);

    // Helper styling warna badge kasta membership
    const getLevelStyle = (level) => {
        switch (level.toUpperCase()) {
            case "GOLD": return "bg-amber-100 text-amber-800 border border-amber-300";
            case "SILVER": return "bg-slate-100 text-slate-700 border border-slate-300";
            case "REGULAR": return "bg-zinc-100 text-zinc-600 border border-zinc-200";
            default: return "bg-zinc-50 text-zinc-400";
        }
    };

    // Fungsi Penggabungan Logika Filter Membership DAN Live Search Query
    const filteredCustomers = listCustomers.filter(cust => {
        const matchesLevel = selectedLevel === "ALL" || cust.level.toUpperCase() === selectedLevel.toUpperCase();
        const matchesSearch = cust.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              cust.email.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesLevel && matchesSearch;
    });

    // ================= TAMBAHAN: FUNGSI CRUD =================
    
    // Handle View Detail
    const handleViewDetail = (customer) => {
        setSelectedCustomer(customer);
        setIsViewing(true);
        setIsEditing(false);
    };

    // Handle Edit - Buka form dengan data customer
    const handleEdit = (customer) => {
        setSelectedCustomer(customer);
        setFormData({
            name: customer.name,
            gender: customer.gender,
            email: customer.email,
            phone: customer.phone,
            address: customer.address,
            level: customer.level,
            status: customer.status,
            source: customer.source
        });
        setIsEditing(true);
        setIsViewing(false);
        setShowForm(true);
    };

    // Handle Delete
    const handleDelete = (customer) => {
        if (window.confirm(`Yakin ingin menghapus pelanggan "${customer.name}"?`)) {
            const newList = listCustomers.filter(c => c.id !== customer.id);
            setListCustomers(newList);
            alert(`✅ Pelanggan "${customer.name}" berhasil dihapus!`);
        }
    };

    // Handle Save (Tambah/Edit)
    const handleSave = () => {
        if (!formData.name || !formData.email || !formData.phone) {
            alert("⚠️ Nama, Email, dan No Telepon wajib diisi!");
            return;
        }

        if (isEditing && selectedCustomer) {
            // Mode Edit
            const updatedList = listCustomers.map(c => 
                c.id === selectedCustomer.id 
                    ? { 
                        ...c, 
                        name: formData.name,
                        gender: formData.gender,
                        email: formData.email,
                        phone: formData.phone,
                        address: formData.address,
                        level: formData.level,
                        status: formData.status,
                        source: formData.source
                    }
                    : c
            );
            setListCustomers(updatedList);
            alert(`✅ Data pelanggan "${formData.name}" berhasil diupdate!`);
        } else {
            // Mode Tambah
            const newId = `GC-${String(listCustomers.length + 1).padStart(4, '0')}`;
            const newCustomer = {
                id: newId,
                name: formData.name,
                gender: formData.gender,
                email: formData.email,
                phone: formData.phone,
                address: formData.address || "-",
                level: formData.level,
                status: formData.status,
                totalTx: 0,
                lastItem: "-",
                lastTxDate: "-",
                source: formData.source
            };
            setListCustomers([...listCustomers, newCustomer]);
            alert(`✅ Pelanggan baru "${formData.name}" berhasil ditambahkan!`);
        }

        // Reset form
        setShowForm(false);
        setIsEditing(false);
        setSelectedCustomer(null);
        setFormData({
            name: "",
            gender: "Laki-laki",
            email: "",
            phone: "",
            address: "",
            level: "Regular",
            status: "Aktif",
            source: "Instagram"
        });
    };

    // Handle Close Form
    const handleCloseForm = () => {
        setShowForm(false);
        setIsEditing(false);
        setIsViewing(false);
        setSelectedCustomer(null);
        setFormData({
            name: "",
            gender: "Laki-laki",
            email: "",
            phone: "",
            address: "",
            level: "Regular",
            status: "Aktif",
            source: "Instagram"
        });
    };

    // ======================================================

    return (
        <div id="customers-container" className="animate-fadeIn space-y-6">
            {/* Header Dinamis */}
            <PageHeader 
                title={showForm ? (isEditing ? "Edit Pelanggan" : "Tambah Pelanggan") : "CRM Database Pelanggan"} 
                breadcrumb={["Home", "Customers"]}
            >
                {!showForm && (
                    <button 
                        onClick={() => { setShowForm(true); setIsEditing(false); setFormData({ name: "", gender: "Laki-laki", email: "", phone: "", address: "", level: "Regular", status: "Aktif", source: "Instagram" }); }} 
                        className="bg-zinc-900 hover:bg-black text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all shadow-lg active:scale-95 flex items-center gap-2"
                    >
                        <FaPlus className="text-[#F2B438]" /> Tambah Pelanggan
                    </button>
                )}
            </PageHeader>

            {/* --- TOOLBAR: SEARCH & FILTER BAR --- */}
            {!showForm && (
                <div className="space-y-4">
                    {/* BARIS 1: LIVE SEARCH BAR */}
                    <div className="relative w-full max-w-md">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-zinc-400">
                            <FaSearch size={14} />
                        </span>
                        <input 
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari pelanggan berdasarkan nama atau email..." 
                            className="w-full pl-11 pr-4 py-3.5 bg-white border border-zinc-200 rounded-2xl outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-[#F2B438] text-sm font-medium shadow-sm transition-all"
                        />
                    </div>

                    {/* BARIS 2: TAB FILTER MEMBERSHIP */}
                    <div className="bg-white p-4 rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-zinc-700 text-sm font-bold">
                            <FaFilter className="text-[#F2B438]" />
                            <span>Kategori Level Keanggotaan:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { code: "ALL", label: "Semua Member" },
                                { code: "GOLD", label: "Gold" },
                                { code: "SILVER", label: "Silver" },
                                { code: "REGULAR", label: "Regular" }
                            ].map((btn) => (
                                <button
                                    key={btn.code}
                                    onClick={() => setSelectedLevel(btn.code)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                                        selectedLevel === btn.code
                                            ? "bg-zinc-900 text-[#F2B438] border-zinc-900 shadow-md"
                                            : "bg-white text-zinc-500 border-zinc-200 hover:bg-zinc-50"
                                    }`}
                                >
                                    {btn.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {showForm ? (
                /* --- FORM TAMBAH/EDIT PELANGGAN --- */
                <div className="bg-white p-10 rounded-[40px] shadow-sm border border-zinc-100 max-w-2xl animate-fadeIn">
                    <button 
                        onClick={handleCloseForm} 
                        className="flex items-center text-zinc-400 mb-8 text-sm font-bold hover:text-amber-600 transition-colors"
                    >
                        <FaArrowLeft className="mr-2" /> Kembali ke Daftar
                    </button>
                    
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Nama Lengkap</label>
                                <input 
                                    type="text" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium" 
                                    placeholder="Masukkan nama..." 
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Jenis Kelamin</label>
                                <select 
                                    value={formData.gender}
                                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                                    className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium"
                                >
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Email Aktif</label>
                                <input 
                                    type="email" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium" 
                                    placeholder="email@gentlecut.com" 
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Nomor WhatsApp</label>
                                <input 
                                    type="text" 
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium" 
                                    placeholder="0812xxxx" 
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Alamat</label>
                                <input 
                                    type="text" 
                                    value={formData.address}
                                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                                    className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium" 
                                    placeholder="Jl. Raya No. ..." 
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Level Membership</label>
                                    <select 
                                        value={formData.level}
                                        onChange={(e) => setFormData({...formData, level: e.target.value})}
                                        className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium"
                                    >
                                        <option value="Regular">Regular</option>
                                        <option value="Silver">Silver</option>
                                        <option value="Gold">Gold</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Status</label>
                                    <select 
                                        value={formData.status}
                                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                                        className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium"
                                    >
                                        <option value="Aktif">Aktif</option>
                                        <option value="Tidak Aktif">Tidak Aktif</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Sumber User</label>
                                <input 
                                    type="text" 
                                    value={formData.source}
                                    onChange={(e) => setFormData({...formData, source: e.target.value})}
                                    className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium" 
                                    placeholder="Instagram / Spanduk Jalan / Referensi" 
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-zinc-900 text-amber-500 py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl hover:bg-black transition-all mt-4">
                            {isEditing ? "Update Data Pelanggan" : "Simpan Data Pelanggan"}
                        </button>
                    </form>
                </div>
            ) : (
                /* --- TABEL CUSTOMER --- */
                <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-zinc-200/60">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse table-auto">
                            <thead>
                                <tr className="text-zinc-400 text-[10px] uppercase tracking-[0.12em] bg-zinc-50/70 border-b border-zinc-100 whitespace-nowrap">
                                    <th className="px-5 py-4 font-bold">ID Customer</th>
                                    <th className="px-5 py-4 font-bold">Nama Lengkap</th>
                                    <th className="px-5 py-4 font-bold">Jenis Kelamin</th>
                                    <th className="px-5 py-4 font-bold">Kontak & Alamat</th>
                                    <th className="px-5 py-4 font-bold">Level Membership</th>
                                    <th className="px-5 py-4 font-bold text-center">Status</th>
                                    <th className="px-5 py-4 font-bold text-center">Total Transaksi (Kali)</th>
                                    <th className="px-5 py-4">Transaksi Terakhir</th>
                                    <th className="px-5 py-4">Sumber User</th>
                                    <th className="px-5 py-4 text-center">Menu Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-600 text-xs divide-y divide-zinc-100 whitespace-nowrap">
                                {filteredCustomers.length > 0 ? (
                                    filteredCustomers.map((cust) => (
                                        <tr key={cust.id} className="group hover:bg-zinc-50/50 transition-all duration-200">
                                            {/* 1. ID Customer */}
                                            <td className="px-5 py-4 font-mono text-[11px] text-amber-600 font-bold">{cust.id}</td>
                                            
                                            {/* 2. Nama Lengkap */}
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-[#F2B438] group-hover:bg-amber-50 transition-all duration-200">
                                                        <FaUserCircle size={18} />
                                                    </div>
                                                    <span className="font-bold text-zinc-800 block text-sm group-hover:text-black">{cust.name}</span>
                                                </div>
                                            </td>

                                            {/* 3. Jenis Kelamin */}
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-1.5 text-zinc-600 font-medium">
                                                    <FaMars size={12} className="text-sky-500" />
                                                    <span>{cust.gender}</span>
                                                </div>
                                            </td>

                                            {/* 4. Kontak dan Alamat */}
                                            <td className="px-5 py-4 max-w-xs truncate">
                                                <div className="flex flex-col gap-0.5 text-[11px]">
                                                    <span className="flex items-center gap-1 text-zinc-700 font-medium"><FaEnvelope size={10} className="text-zinc-400" /> {cust.email}</span>
                                                    <span className="flex items-center gap-1 text-zinc-500"><FaMobileAlt size={10} className="text-zinc-400" /> {cust.phone}</span>
                                                    <span className="flex items-center gap-1 text-zinc-400 italic"><FaMapMarkerAlt size={10} className="text-zinc-400" /> {cust.address}</span>
                                                </div>
                                            </td>

                                            {/* 5. Level Membership */}
                                            <td className="px-5 py-4">
                                                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border transition-all ${getLevelStyle(cust.level)}`}>
                                                    {cust.level.toUpperCase() === "GOLD" && <FaCrown size={10} className="mb-0.5" />}
                                                    {cust.level}
                                                </span>
                                            </td>

                                            {/* 6. Status */}
                                            <td className="px-5 py-4 text-center">
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                                    cust.status === "Aktif" 
                                                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                                                        : "bg-red-50 text-red-600 border border-red-200"
                                                }`}>
                                                    {cust.status}
                                                </span>
                                            </td>

                                            {/* 7. Total Transaksi (Kali) */}
                                            <td className="px-5 py-4 text-center font-bold text-zinc-800 text-sm">
                                                {cust.totalTx}x
                                            </td>

                                            {/* 8. Transaksi Terakhir */}
                                            <td className="px-5 py-4">
                                                <div className="flex flex-col gap-0.5 text-[11px]">
                                                    <span className="font-semibold text-zinc-800">{cust.lastItem}</span>
                                                    <span className="text-[10px] text-zinc-400 font-mono">Tgl: {cust.lastTxDate}</span>
                                                </div>
                                            </td>

                                            {/* 9. Sumber User */}
                                            <td className="px-5 py-4">
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-50 border border-zinc-200 rounded text-zinc-500 font-medium text-[11px]">
                                                    <FaShareAlt size={9} className="text-zinc-400" />
                                                    {cust.source}
                                                </span>
                                            </td>

                                            {/* 10. Menu Aksi (Detail, Edit, Hapus) */}
                                            <td className="px-5 py-4 text-center">
                                                <div className="flex items-center justify-center gap-1.5">
                                                    <button 
                                                        onClick={() => handleViewDetail(cust)}
                                                        title="Lihat Detail"
                                                        className="p-1.5 bg-zinc-50 hover:bg-blue-500 text-zinc-500 hover:text-white rounded-lg border border-zinc-200 hover:border-blue-500 transition-all active:scale-90"
                                                    >
                                                        <FaEye size={11} />
                                                    </button>
                                                    <button 
                                                        onClick={() => handleEdit(cust)}
                                                        title="Ubah Data"
                                                        className="p-1.5 bg-zinc-50 hover:bg-emerald-500 text-zinc-500 hover:text-white rounded-lg border border-zinc-200 hover:border-emerald-500 transition-all active:scale-90"
                                                    >
                                                        <FaEdit size={11} />
                                                    </button>
                                                    <button 
                                                        onClick={() => handleDelete(cust)}
                                                        title="Hapus Data"
                                                        className="p-1.5 bg-red-50 hover:bg-red-600 text-red-500 hover:text-white rounded-lg border border-red-100 hover:border-red-600 transition-all active:scale-90"
                                                    >
                                                        <FaTrash size={11} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="10" className="text-center py-12 text-zinc-400 font-medium italic bg-zinc-50/20">
                                            Data tidak ditemukan. Silakan periksa kembali kata kunci pencarian atau filter membership Anda.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* ===== MODAL VIEW DETAIL ===== */}
            {isViewing && selectedCustomer && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-black text-neutral-900">Detail Pelanggan</h2>
                            <button 
                                onClick={() => { setIsViewing(false); setSelectedCustomer(null); }}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                            >
                                ✕
                            </button>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-zinc-50 p-4 rounded-xl">
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">ID Customer</p>
                                    <p className="font-bold text-amber-600">{selectedCustomer.id}</p>
                                </div>
                                <div className="bg-zinc-50 p-4 rounded-xl">
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">Level Membership</p>
                                    <p className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getLevelStyle(selectedCustomer.level)}`}>
                                        {selectedCustomer.level}
                                    </p>
                                </div>
                                <div className="bg-zinc-50 p-4 rounded-xl">
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">Nama Lengkap</p>
                                    <p className="font-bold text-zinc-800">{selectedCustomer.name}</p>
                                </div>
                                <div className="bg-zinc-50 p-4 rounded-xl">
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">Jenis Kelamin</p>
                                    <p className="text-zinc-600">{selectedCustomer.gender}</p>
                                </div>
                                <div className="bg-zinc-50 p-4 rounded-xl">
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">Email</p>
                                    <p className="text-zinc-600">{selectedCustomer.email}</p>
                                </div>
                                <div className="bg-zinc-50 p-4 rounded-xl">
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">No Telepon</p>
                                    <p className="text-zinc-600">{selectedCustomer.phone}</p>
                                </div>
                                <div className="col-span-2 bg-zinc-50 p-4 rounded-xl">
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">Alamat</p>
                                    <p className="text-zinc-600">{selectedCustomer.address}</p>
                                </div>
                                <div className="bg-zinc-50 p-4 rounded-xl">
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">Status</p>
                                    <p className={`${selectedCustomer.status === "Aktif" ? "text-emerald-600" : "text-red-500"} font-bold`}>{selectedCustomer.status}</p>
                                </div>
                                <div className="bg-zinc-50 p-4 rounded-xl">
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">Total Transaksi</p>
                                    <p className="font-bold text-zinc-800">{selectedCustomer.totalTx}x</p>
                                </div>
                                <div className="bg-zinc-50 p-4 rounded-xl">
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">Transaksi Terakhir</p>
                                    <p className="text-zinc-600">{selectedCustomer.lastItem}</p>
                                    <p className="text-[10px] text-zinc-400">Tgl: {selectedCustomer.lastTxDate}</p>
                                </div>
                                <div className="bg-zinc-50 p-4 rounded-xl">
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">Sumber User</p>
                                    <p className="text-zinc-600">{selectedCustomer.source}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex gap-3 mt-6">
                            <button 
                                onClick={() => { setIsViewing(false); setSelectedCustomer(null); }}
                                className="flex-1 bg-zinc-900 hover:bg-black text-white font-black py-3 rounded-xl transition-all"
                            >
                                Tutup
                            </button>
                            <button 
                                onClick={() => { handleEdit(selectedCustomer); setIsViewing(false); }}
                                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-black py-3 rounded-xl transition-all"
                            >
                                <FaEdit className="inline mr-2" /> Edit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}