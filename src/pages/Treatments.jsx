import React, { useState } from "react";

// IMPORT 3 KOMPONEN UTAMA SHADCN UI Saya
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";

// DATA DUMMY GentleCut 
const initialTreatments = [
  { id: "TRT-0001", name: "GentleCut Haircut & Wash", category: "Haircut", duration: "45 Menit", description: "Potong rambut premium + cuci bilas handuk hangat", price: "Rp 75.000", available: true },
  { id: "TRT-0002", name: "Premium Beard Shaving", category: "Shaving", duration: "30 Menit", description: "Cukur jenggot mulus + pijat wajah relaksasi", price: "Rp 50.000", available: true },
  { id: "TRT-0003", name: "Kids Haircut Service", category: "Haircut", duration: "30 Menit", description: "Potongan rambut ramah anak + bonus permen", price: "Rp 60.000", available: true },
  { id: "TRT-0004", name: "Gentle Black Hair Coloring", category: "Coloring", duration: "60 Menit", description: "Pewarnaan rambut hitam alami menolak tua", price: "Rp 120.000", available: false },
  { id: "TRT-0005", name: "Premium Hair Spa & Tonic", category: "Treatment", duration: "40 Menit", description: "Perawatan kulit kepala + hair tonic anti rontok", price: "Rp 95.000", available: true },
  { id: "TRT-0006", name: "Classic Pomade Styling", category: "Styling", duration: "15 Menit", description: "Styling rambut formal menggunakan pomade premium", price: "Rp 30.000", available: true },
];

export default function Treatments() {
  const [filterCategory, setFilterCategory] = useState("All");
  const [treatments, setTreatments] = useState(initialTreatments);

  // ================= TAMBAHAN: STATE UNTUK CRUD =================
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "Haircut",
    duration: "",
    description: "",
    price: "",
    available: true
  });

  // ================= FUNGSI CRUD =================

  // Generate ID baru
  const generateId = () => {
    const lastId = treatments[treatments.length - 1]?.id || "TRT-0000";
    const num = parseInt(lastId.split("-")[1]) + 1;
    return `TRT-${String(num).padStart(4, '0')}`;
  };

  // Tambah treatment baru
  const handleAddTreatment = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.duration || !formData.price) {
      alert("⚠️ Nama, Durasi, dan Harga wajib diisi!");
      return;
    }

    const newTreatment = {
      id: generateId(),
      name: formData.name,
      category: formData.category,
      duration: formData.duration,
      description: formData.description || "-",
      price: formData.price,
      available: formData.available
    };

    setTreatments([...treatments, newTreatment]);
    setIsAddModalOpen(false);
    resetForm();
    alert(`✅ Layanan "${formData.name}" berhasil ditambahkan!`);
  };

  // Edit treatment
  const handleEditTreatment = (treatment) => {
    setSelectedTreatment(treatment);
    setFormData({
      name: treatment.name,
      category: treatment.category,
      duration: treatment.duration,
      description: treatment.description,
      price: treatment.price,
      available: treatment.available
    });
    setIsEditModalOpen(true);
  };

  // Save edit
  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.duration || !formData.price) {
      alert("⚠️ Nama, Durasi, dan Harga wajib diisi!");
      return;
    }

    const updatedTreatments = treatments.map(t => 
      t.id === selectedTreatment.id 
        ? {
            ...t,
            name: formData.name,
            category: formData.category,
            duration: formData.duration,
            description: formData.description || "-",
            price: formData.price,
            available: formData.available
          }
        : t
    );
    
    setTreatments(updatedTreatments);
    setIsEditModalOpen(false);
    setSelectedTreatment(null);
    resetForm();
    alert(`✅ Layanan "${formData.name}" berhasil diupdate!`);
  };

  // Hapus treatment
  const handleDeleteTreatment = (treatment) => {
    if (window.confirm(`Yakin ingin menghapus layanan "${treatment.name}"?`)) {
      const newTreatments = treatments.filter(t => t.id !== treatment.id);
      setTreatments(newTreatments);
      alert(`✅ Layanan "${treatment.name}" berhasil dihapus!`);
    }
  };

  // Toggle status (Switch)
  const handleToggleStatus = (treatmentId) => {
    const updatedTreatments = treatments.map(t =>
      t.id === treatmentId ? { ...t, available: !t.available } : t
    );
    setTreatments(updatedTreatments);
  };

  // View detail
  const handleViewDetail = (treatment) => {
    setSelectedTreatment(treatment);
    setIsDetailModalOpen(true);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      category: "Haircut",
      duration: "",
      description: "",
      price: "",
      available: true
    });
  };

  // ======================================================

  // Logika filter kategori
  const filteredTreatments = filterCategory === "All"
    ? treatments
    : treatments.filter(t => t.category === filterCategory);

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-4 bg-white p-4 rounded-xl shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Katalog Perawatan Barber (CRM)</h1>
          <p className="text-sm text-slate-500">Analisis segmen jenis layanan, durasi, ketersediaan, dan tarif GentleCut.</p>
        </div>

        {/* 1. COMPONENT SHADCN UI: DIALOG */}
        <div className="mt-4 md:mt-0">
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger className="bg-amber-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-amber-600 transition text-sm shadow-sm">
              + Tambah Perawatan
            </DialogTrigger>
            <DialogContent className="bg-white">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">Tambah Layanan Baru</DialogTitle>
                <DialogDescription>
                  Masukkan paket treatment baru ke dalam database sistem CRM GentleCut Barber.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddTreatment} className="space-y-4 py-4 text-sm">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-slate-700">Nama Layanan</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Contoh: Creambath Premium" 
                    className="border p-2 rounded-md outline-none focus:ring-2 focus:ring-amber-500" 
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-slate-700">Kategori</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="border p-2 rounded-md outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Haircut">Haircut</option>
                    <option value="Shaving">Shaving</option>
                    <option value="Coloring">Coloring</option>
                    <option value="Treatment">Treatment</option>
                    <option value="Styling">Styling</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-slate-700">Durasi Perawatan</label>
                  <input 
                    type="text" 
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    placeholder="Contoh: 45 Menit" 
                    className="border p-2 rounded-md outline-none focus:ring-2 focus:ring-amber-500" 
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-slate-700">Deskripsi</label>
                  <input 
                    type="text" 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Deskripsi singkat layanan" 
                    className="border p-2 rounded-md outline-none focus:ring-2 focus:ring-amber-500" 
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-slate-700">Tarif Harga (Rp)</label>
                  <input 
                    type="text" 
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    placeholder="Contoh: Rp 85.000" 
                    className="border p-2 rounded-md outline-none focus:ring-2 focus:ring-amber-500" 
                    required
                  />
                </div>
                <div className="flex items-center gap-3">
                  <label className="font-semibold text-slate-700">Aktif</label>
                  <Switch 
                    checked={formData.available}
                    onCheckedChange={(checked) => setFormData({...formData, available: checked})}
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button 
                    type="button" 
                    onClick={() => { setIsAddModalOpen(false); resetForm(); }}
                    className="px-4 py-2 border rounded-md text-sm hover:bg-slate-100"
                  >
                    Batal
                  </button>
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-amber-500 text-white rounded-md text-sm hover:bg-amber-600"
                  >
                    Simpan Paket
                  </button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* FILTER CONTROLS SECTION */}
      <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* 2. COMPONENT SHADCN UI: SELECT */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-600">Kategori Perawatan:</span>
          <Select onValueChange={(value) => setFilterCategory(value)} defaultValue="All">
            <SelectTrigger className="w-[180px] bg-white border border-slate-300 rounded-lg">
              <SelectValue placeholder="Pilih Kategori" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="All">Semua Kategori</SelectItem>
              <SelectItem value="Haircut">Haircut</SelectItem>
              <SelectItem value="Shaving">Shaving</SelectItem>
              <SelectItem value="Coloring">Coloring</SelectItem>
              <SelectItem value="Treatment">Treatment</SelectItem>
              <SelectItem value="Styling">Styling</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="text-sm text-slate-500">
          Menampilkan <span className="font-bold text-slate-700">{filteredTreatments.length}</span> Perawatan
        </div>
      </div>

      {/* TABLE DATA SECTION  */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700 font-semibold text-xs uppercase border-b tracking-wider">
              <th className="p-4">ID Layanan</th>
              <th className="p-4">Nama Paket Perawatan</th>
              <th className="p-4">Kategori</th>
              <th className="p-4">Durasi Kerja</th>
              <th className="p-4">Deskripsi Singkat</th>
              <th className="p-4">Tarif Harga</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y text-xs text-slate-600">
            {filteredTreatments.map((treatment) => (
              <tr key={treatment.id} className="hover:bg-slate-50/80 transition">
                <td className="p-4 font-mono font-bold text-amber-600">{treatment.id}</td>
                <td className="p-4 font-bold text-slate-900 text-sm">{treatment.name}</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded-md font-medium border border-amber-200">
                    {treatment.category}
                  </span>
                </td>
                <td className="p-4 text-slate-700 font-medium">{treatment.duration}</td>
                <td className="p-4 text-slate-500 max-w-[200px] truncate" title={treatment.description}>
                  {treatment.description}
                </td>
                <td className="p-4 font-bold text-slate-900 text-sm">{treatment.price}</td>
                
                {/* 3. COMPONENT SHADCN UI: SWITCH */}
                <td className="p-4">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <Switch 
                      id={`toggle-${treatment.id}`} 
                      checked={treatment.available}
                      onCheckedChange={() => handleToggleStatus(treatment.id)}
                    />
                    <span className={`text-[10px] font-bold uppercase ${treatment.available ? "text-emerald-600" : "text-rose-500"}`}>
                      {treatment.available ? "Aktif" : "Tutup"}
                    </span>
                  </div>
                </td>

                {/* KOLOM AKSI - SUDAH BERFUNGSI */}
                <td className="p-4">
                  <div className="flex items-center justify-center gap-2 text-base">
                    <button 
                      onClick={() => handleViewDetail(treatment)}
                      className="text-blue-500 hover:text-blue-700 cursor-pointer transition-colors" 
                      title="Lihat Detail"
                    >
                      👁
                    </button>
                    <button 
                      onClick={() => handleEditTreatment(treatment)}
                      className="text-amber-500 hover:text-amber-700 cursor-pointer transition-colors" 
                      title="Edit"
                    >
                      📝
                    </button>
                    <button 
                      onClick={() => handleDeleteTreatment(treatment)}
                      className="text-rose-500 hover:text-rose-700 cursor-pointer transition-colors" 
                      title="Hapus"
                    >
                      🗑
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== MODAL DETAIL ===== */}
      {isDetailModalOpen && selectedTreatment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-neutral-900">Detail Layanan</h2>
              <button 
                onClick={() => { setIsDetailModalOpen(false); setSelectedTreatment(null); }}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-50 p-3 rounded-xl col-span-2">
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-wider">ID Layanan</p>
                  <p className="font-bold text-amber-600">{selectedTreatment.id}</p>
                </div>
                <div className="bg-zinc-50 p-3 rounded-xl col-span-2">
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-wider">Nama Paket</p>
                  <p className="font-bold text-zinc-800">{selectedTreatment.name}</p>
                </div>
                <div className="bg-zinc-50 p-3 rounded-xl">
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-wider">Kategori</p>
                  <p className="text-zinc-700">{selectedTreatment.category}</p>
                </div>
                <div className="bg-zinc-50 p-3 rounded-xl">
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-wider">Durasi</p>
                  <p className="text-zinc-700">{selectedTreatment.duration}</p>
                </div>
                <div className="bg-zinc-50 p-3 rounded-xl col-span-2">
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-wider">Deskripsi</p>
                  <p className="text-zinc-600">{selectedTreatment.description}</p>
                </div>
                <div className="bg-zinc-50 p-3 rounded-xl">
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-wider">Harga</p>
                  <p className="font-bold text-zinc-900 text-lg">{selectedTreatment.price}</p>
                </div>
                <div className="bg-zinc-50 p-3 rounded-xl">
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-wider">Status</p>
                  <p className={`font-bold ${selectedTreatment.available ? "text-emerald-600" : "text-rose-500"}`}>
                    {selectedTreatment.available ? "Aktif" : "Tutup"}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => { setIsDetailModalOpen(false); setSelectedTreatment(null); }}
                className="flex-1 bg-zinc-900 hover:bg-black text-white font-black py-3 rounded-xl transition-all text-sm"
              >
                Tutup
              </button>
              <button 
                onClick={() => { handleEditTreatment(selectedTreatment); setIsDetailModalOpen(false); }}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-black py-3 rounded-xl transition-all text-sm"
              >
                📝 Edit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== MODAL EDIT ===== */}
      {isEditModalOpen && selectedTreatment && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl relative mx-4">
            <button 
              onClick={() => { setIsEditModalOpen(false); setSelectedTreatment(null); resetForm(); }} 
              className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              ✕
            </button>
            <h3 className="text-xl font-black text-zinc-900 mb-6">Edit Layanan</h3>
            
            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-1">Nama Layanan</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-amber-500 transition-all" 
                  required
                />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-1">Kategori</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-amber-500 transition-all"
                >
                  <option value="Haircut">Haircut</option>
                  <option value="Shaving">Shaving</option>
                  <option value="Coloring">Coloring</option>
                  <option value="Treatment">Treatment</option>
                  <option value="Styling">Styling</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-1">Durasi</label>
                <input 
                  type="text" 
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  className="w-full p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-amber-500 transition-all" 
                  required
                />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-1">Deskripsi</label>
                <input 
                  type="text" 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-amber-500 transition-all" 
                />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-1">Harga</label>
                <input 
                  type="text" 
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-amber-500 transition-all" 
                  required
                />
              </div>
              <div className="flex items-center gap-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block">Status Aktif</label>
                <Switch 
                  checked={formData.available}
                  onCheckedChange={(checked) => setFormData({...formData, available: checked})}
                />
              </div>
              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-md mt-2">
                Update Layanan
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}