import React, { useState } from "react";
import hotelData from "./hotel_services.json";

export default function HotelManagement() {
  const [viewMode, setViewMode] = useState("guest");
  const [dataForm, setDataForm] = useState({ searchTerm: "", selectedCategory: "", selectedStatus: "" });

  const handleChange = (e) => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

  const categories = [...new Set(hotelData.map((i) => i.category))];
  const statuses = [...new Set(hotelData.map((i) => i.status))];

  const filtered = hotelData.filter((i) => {
    return i.name.toLowerCase().includes(dataForm.searchTerm.toLowerCase()) &&
      (dataForm.selectedCategory ? i.category === dataForm.selectedCategory : true) &&
      (dataForm.selectedStatus ? i.status === dataForm.selectedStatus : true);
  });

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen font-sans text-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-black text-indigo-900 tracking-tighter">STAYCATION VIBES</h1>
          <div className="flex bg-slate-200 p-1 rounded-xl shadow-inner">
            <button onClick={() => setViewMode("guest")} className={`px-6 py-2 rounded-lg font-bold transition ${viewMode === "guest" ? "bg-white text-indigo-600 shadow-md" : "text-slate-500"}`}>Guest View</button>
            <button onClick={() => setViewMode("admin")} className={`px-6 py-2 rounded-lg font-bold transition ${viewMode === "admin" ? "bg-white text-indigo-600 shadow-md" : "text-slate-500"}`}>Admin View</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <input name="searchTerm" placeholder="Cari nama kamar..." className="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" onChange={handleChange} />
          <select name="selectedCategory" className="p-3 rounded-xl border border-slate-200 bg-white" onChange={handleChange}>
            <option value="">Semua Kategori</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select name="selectedStatus" className="p-3 rounded-xl border border-slate-200 bg-white" onChange={handleChange}>
            <option value="">Semua Status</option>
            {statuses.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {viewMode === "guest" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map(item => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl transition-all">
                <div className="h-44 overflow-hidden"><img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" /></div>
                <div className="p-4">
                  <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{item.category}</span>
                  <h3 className="font-bold text-lg mb-1 leading-tight">{item.name}</h3>
                  <p className="text-xs text-slate-400 mb-3">{item.room_details.size} • {item.room_details.bed_type}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.room_details.amenities.map((a, i) => <span key={i} className="bg-indigo-50 text-indigo-600 text-[9px] px-2 py-0.5 rounded-full font-bold">{a}</span>)}
                  </div>
                  <div className="pt-3 border-t flex justify-between items-center">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Price</span>
                    <span className="font-black text-indigo-600">Rp {item.pricing_package.base_price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-400 text-xs uppercase font-black">
                  <tr><th className="p-4">Room ID</th><th className="p-4">Room Name</th><th className="p-4">Base Price</th><th className="p-4">Location</th><th className="p-4">Status</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50 transition">
                      <td className="p-4 font-black text-indigo-600">{item.id}</td>
                      <td className="p-4 font-bold">{item.name} <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{item.category}</p></td>
                      <td className="p-4 font-bold text-slate-700">Rp {item.pricing_package.base_price.toLocaleString()}</td>
                      <td className="p-4 text-slate-500 font-medium">Floor {item.availability_info.floor}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase ${item.status === 'Available' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>{item.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}