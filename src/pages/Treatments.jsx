import React, { useState } from "react";

// IMPORT 3 KOMPONEN UTAMA SHADCN UI (SYARAT WAJIB PERTEMUAN 11)
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

// DATA DUMMY LEBIH BANYAK & PADAT (Mirip CRM BerryLaundry temanmu)
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

  // Logika filter kategori
  const filteredTreatments = filterCategory === "All"
    ? initialTreatments
    : initialTreatments.filter(t => t.category === filterCategory);

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
          <Dialog>
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
              <div className="space-y-4 py-4 text-sm">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-slate-700">Nama Layanan</label>
                  <input type="text" placeholder="Contoh: Creambath Premium" className="border p-2 rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-slate-700">Durasi Perawatan</label>
                  <input type="text" placeholder="Contoh: 45 Menit" className="border p-2 rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-slate-700">Tarif Harga (Rp)</label>
                  <input type="text" placeholder="Contoh: Rp 85.000" className="border p-2 rounded-md outline-none" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button className="px-4 py-2 border rounded-md text-sm hover:bg-slate-100">Batal</button>
                <button className="px-4 py-2 bg-amber-500 text-white rounded-md text-sm hover:bg-amber-600">Simpan Paket</button>
              </div>
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

      {/* TABLE DATA SECTION (DIBUAT RAMAI MIRIP BERRYLAUNDRY) */}
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
                    <Switch id={`toggle-${treatment.id}`} defaultChecked={treatment.available} />
                    <span className={`text-[10px] font-bold uppercase ${treatment.available ? "text-emerald-600" : "text-rose-500"}`}>
                      {treatment.available ? "Aktif" : "Tutup"}
                    </span>
                  </div>
                </td>

                {/* KOLOM AKSI BIAR MIRIP BANGET PUNYA TEMENMU */}
                <td className="p-4">
                  <div className="flex items-center justify-center gap-2 text-base">
                    <button className="text-blue-500 hover:text-blue-700 cursor-pointer" title="Lihat">👁</button>
                    <button className="text-amber-500 hover:text-amber-700 cursor-pointer" title="Edit">📝</button>
                    <button className="text-rose-500 hover:text-rose-700 cursor-pointer" title="Hapus">🗑</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}