import { useState } from "react";
import { 
  FiCalendar, 
  FiClock, 
  FiUser, 
  FiCheckCircle,
  FiXCircle,
  FiClock as FiPending,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiX,
} from "react-icons/fi";

// DATA APPOINTMENTS AWAL - CAPSTER SUDAH DIGANTI
const initialData = [
  {
    id: 1,
    customer: "Rina Febriani",
    capster: "Jun Samuel",
    service: "Potong Rambut Pria",
    date: "2026-07-08",
    time: "10:00",
    status: "confirmed",
    phone: "0812-3456-7890",
  },
  {
    id: 2,
    customer: "Budi Darmawan",
    capster: "Sarah Young",
    service: "Coloring & Balayage",
    date: "2026-07-08",
    time: "14:30",
    status: "pending",
    phone: "0813-4567-8901",
  },
  {
    id: 3,
    customer: "Sari Anggraeni",
    capster: "Rizky M",
    service: "Potong Klasik + Beard",
    date: "2026-07-09",
    time: "09:00",
    status: "completed",
    phone: "0814-5678-9012",
  },
  {
    id: 4,
    customer: "Doni Salman",
    capster: "Mina Jey",
    service: "Treatment Rambut Keriting",
    date: "2026-07-09",
    time: "16:00",
    status: "cancelled",
    phone: "0815-6789-0123",
  },
  {
    id: 5,
    customer: "Mega Putri",
    capster: "Erick Rein",
    service: "Beard Grooming",
    date: "2026-07-10",
    time: "11:30",
    status: "confirmed",
    phone: "0816-7890-1234",
  },
  {
    id: 6,
    customer: "Dinda Cahya",
    capster: "Maya Sari",
    service: "Bridal Hair Styling",
    date: "2026-07-10",
    time: "13:00",
    status: "pending",
    phone: "0817-8901-2345",
  },
];

// LIST CAPSTER - SUDAH DIGANTI PAKE NAMA YANG DI CAPSTER.JSX
const capsterList = [
  "Jun Samuel", 
  "Sarah Young", 
  "Rizky M", 
  "Mina Jey", 
  "Erick Rein", 
  "Maya Sari"
];

const serviceList = [
  "Potong Rambut Pria",
  "Potong Rambut Wanita",
  "Coloring & Balayage",
  "Potong Klasik + Beard",
  "Treatment Rambut Keriting",
  "Beard Grooming",
  "Bridal Hair Styling",
  "Hair Styling",
];

export default function Appointments() {
  const [appointments, setAppointments] = useState(initialData);
  const [filter, setFilter] = useState("Semua");
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // STATE FORM
  const [formData, setFormData] = useState({
    customer: "",
    capster: "",
    service: "",
    date: "",
    time: "",
    status: "pending",
    phone: "",
  });

  const statusColors = {
    confirmed: "text-green-700 bg-green-200/60",
    pending: "text-yellow-700 bg-yellow-200/60",
    completed: "text-blue-700 bg-blue-200/60",
    cancelled: "text-red-700 bg-red-200/60",
  };

  const statusIcons = {
    confirmed: <FiCheckCircle className="text-green-600" />,
    pending: <FiPending className="text-yellow-600" />,
    completed: <FiCheckCircle className="text-blue-600" />,
    cancelled: <FiXCircle className="text-red-600" />,
  };

  const statusLabels = {
    confirmed: "Confirmed",
    pending: "Pending",
    completed: "Selesai",
    cancelled: "Dibatalkan",
  };

  const filterStatus = ["Semua", "pending", "confirmed", "completed", "cancelled"];

  const filteredData = filter === "Semua" 
    ? appointments 
    : appointments.filter(item => item.status === filter);

  // HITUNG STATISTIK
  const stats = {
    total: appointments.length,
    pending: appointments.filter(item => item.status === "pending").length,
    confirmed: appointments.filter(item => item.status === "confirmed").length,
    completed: appointments.filter(item => item.status === "completed").length,
  };

  // CRUD FUNCTIONS
  const handleAdd = () => {
    const newId = appointments.length > 0 ? Math.max(...appointments.map(a => a.id)) + 1 : 1;
    const newAppointment = {
      ...formData,
      id: newId,
    };
    setAppointments([...appointments, newAppointment]);
    resetForm();
    setShowModal(false);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      customer: item.customer,
      capster: item.capster,
      service: item.service,
      date: item.date,
      time: item.time,
      status: item.status,
      phone: item.phone,
    });
    setShowModal(true);
  };

  const handleUpdate = () => {
    setAppointments(appointments.map(item => 
      item.id === editingId ? { ...formData, id: editingId } : item
    ));
    resetForm();
    setShowModal(false);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin mau hapus booking ini?")) {
      setAppointments(appointments.filter(item => item.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      customer: "",
      capster: "",
      service: "",
      date: "",
      time: "",
      status: "pending",
      phone: "",
    });
    setEditingId(null);
  };

  const handleCloseModal = () => {
    resetForm();
    setShowModal(false);
    setEditingId(null);
  };

  return (
    <div className="px-8 pb-8 pt-0">
      <div className="mb-6">
        <h1 className="text-5xl font-extralight tracking-[0.15em] text-white mb-0">Appointments</h1>
        <p className="text-zinc-400 text-xl font-light tracking-[0.2em] uppercase">Manajemen Jadwal Booking</p>
      </div>

      {/* STATISTIK - KUNING MUDA */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFEFD5] rounded-2xl p-4 border border-[#F5B301]/30 shadow-lg shadow-[#F5B301]/10">
          <p className="text-[#8B7A3A] text-sm font-medium">Total Booking</p>
          <p className="text-[#5C4A1E] text-2xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFEFD5] rounded-2xl p-4 border border-[#F5B301]/30 shadow-lg shadow-[#F5B301]/10">
          <p className="text-yellow-600 text-sm font-medium">Pending</p>
          <p className="text-[#5C4A1E] text-2xl font-bold">{stats.pending}</p>
        </div>
        <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFEFD5] rounded-2xl p-4 border border-[#F5B301]/30 shadow-lg shadow-[#F5B301]/10">
          <p className="text-green-600 text-sm font-medium">Confirmed</p>
          <p className="text-[#5C4A1E] text-2xl font-bold">{stats.confirmed}</p>
        </div>
        <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFEFD5] rounded-2xl p-4 border border-[#F5B301]/30 shadow-lg shadow-[#F5B301]/10">
          <p className="text-blue-600 text-sm font-medium">Selesai</p>
          <p className="text-[#5C4A1E] text-2xl font-bold">{stats.completed}</p>
        </div>
      </div>

      {/* FILTER STATUS - KUNING MUDA */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {filterStatus.map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize
              ${filter === status 
                ? "bg-[#F5B301] text-black font-bold shadow-lg shadow-[#F5B301]/30" 
                : "bg-[#FFF8E7] text-[#5C4A1E] hover:bg-[#F5B301]/20 hover:text-black"}
            `}
          >
            {status === "Semua" ? "Semua" : statusLabels[status]}
          </button>
        ))}
      </div>

      {/* TABLE APPOINTMENTS - KUNING MUDA */}
      <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFEFD5] rounded-2xl overflow-hidden border border-[#F5B301]/30 shadow-lg shadow-[#F5B301]/10">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#F5B301]/20 to-[#FFEFD5] border-b border-[#F5B301]/30">
                <th className="text-left p-5 text-[#5C4A1E] font-semibold text-sm uppercase tracking-wider">Customer</th>
                <th className="text-left p-5 text-[#5C4A1E] font-semibold text-sm uppercase tracking-wider">Capster</th>
                <th className="text-left p-5 text-[#5C4A1E] font-semibold text-sm uppercase tracking-wider">Service</th>
                <th className="text-left p-5 text-[#5C4A1E] font-semibold text-sm uppercase tracking-wider">Date</th>
                <th className="text-left p-5 text-[#5C4A1E] font-semibold text-sm uppercase tracking-wider">Time</th>
                <th className="text-left p-5 text-[#5C4A1E] font-semibold text-sm uppercase tracking-wider">Status</th>
                <th className="text-left p-5 text-[#5C4A1E] font-semibold text-sm uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr 
                  key={item.id} 
                  className={`border-b border-[#F5B301]/20 hover:bg-[#F5B301]/10 transition-colors ${
                    index % 2 === 0 ? "bg-white/30" : "bg-transparent"
                  }`}
                >
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#F5B301]/30 flex items-center justify-center">
                        <FiUser className="text-[#8B6914] text-sm" />
                      </div>
                      <div>
                        <p className="text-[#3D2B00] font-semibold">{item.customer}</p>
                        <p className="text-[#8B7A3A] text-xs">{item.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 text-[#3D2B00] font-medium">{item.capster}</td>
                  <td className="p-5 text-[#5C4A1E]">{item.service}</td>
                  <td className="p-5 text-[#5C4A1E]">{item.date}</td>
                  <td className="p-5 text-[#5C4A1E]">{item.time}</td>
                  <td className="p-5">
                    <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold w-fit ${statusColors[item.status]}`}>
                      {statusIcons[item.status]}
                      {statusLabels[item.status]}
                    </span>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleEdit(item)}
                        className="p-2 rounded-lg bg-white/60 hover:bg-[#F5B301]/30 text-[#8B7A3A] hover:text-[#5C4A1E] transition-all border border-[#F5B301]/20"
                      >
                        <FiEdit2 size={14} />
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="p-2 rounded-lg bg-white/60 hover:bg-red-500/20 text-[#8B7A3A] hover:text-red-600 transition-all border border-[#F5B301]/20"
                      >
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredData.length === 0 && (
          <div className="text-center py-8 text-[#8B7A3A]">Tidak ada data booking</div>
        )}
      </div>

      {/* TOMBOL TAMBAH BOOKING */}
      <button
        onClick={() => {
          resetForm();
          setShowModal(true);
        }}
        className="
          fixed bottom-8 right-8
          bg-[#F5B301] text-black
          p-4 rounded-full
          shadow-lg shadow-[#F5B301]/40
          hover:bg-[#dba102] hover:shadow-[#F5B301]/60
          transition-all duration-300
          flex items-center justify-center
          font-bold
        "
      >
        <FiPlus size={24} />
      </button>

      {/* MODAL FORM - KUNING MUDA */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFEFD5] rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#F5B301]/30 shadow-2xl shadow-[#F5B301]/20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#3D2B00]">
                {editingId ? "Edit Booking" : "Tambah Booking Baru"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-[#8B7A3A] hover:text-[#5C4A1E] transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-[#5C4A1E] text-sm font-medium block mb-1">Nama Customer</label>
                <input
                  type="text"
                  value={formData.customer}
                  onChange={(e) => setFormData({...formData, customer: e.target.value})}
                  className="w-full bg-white/60 border border-[#F5B301]/30 rounded-xl px-4 py-3 text-[#3D2B00] focus:border-[#F5B301] focus:outline-none focus:ring-2 focus:ring-[#F5B301]/30 transition-all placeholder:text-[#8B7A3A]/50"
                  placeholder="Masukkan nama customer"
                />
              </div>

              <div>
                <label className="text-[#5C4A1E] text-sm font-medium block mb-1">No. Telepon</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white/60 border border-[#F5B301]/30 rounded-xl px-4 py-3 text-[#3D2B00] focus:border-[#F5B301] focus:outline-none focus:ring-2 focus:ring-[#F5B301]/30 transition-all placeholder:text-[#8B7A3A]/50"
                  placeholder="0812-3456-7890"
                />
              </div>

              <div>
                <label className="text-[#5C4A1E] text-sm font-medium block mb-1">Capster</label>
                <select
                  value={formData.capster}
                  onChange={(e) => setFormData({...formData, capster: e.target.value})}
                  className="w-full bg-white/60 border border-[#F5B301]/30 rounded-xl px-4 py-3 text-[#3D2B00] focus:border-[#F5B301] focus:outline-none focus:ring-2 focus:ring-[#F5B301]/30 transition-all"
                >
                  <option value="">Pilih Capster</option>
                  {capsterList.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[#5C4A1E] text-sm font-medium block mb-1">Layanan</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-white/60 border border-[#F5B301]/30 rounded-xl px-4 py-3 text-[#3D2B00] focus:border-[#F5B301] focus:outline-none focus:ring-2 focus:ring-[#F5B301]/30 transition-all"
                >
                  <option value="">Pilih Layanan</option>
                  {serviceList.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[#5C4A1E] text-sm font-medium block mb-1">Tanggal</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-white/60 border border-[#F5B301]/30 rounded-xl px-4 py-3 text-[#3D2B00] focus:border-[#F5B301] focus:outline-none focus:ring-2 focus:ring-[#F5B301]/30 transition-all"
                  />
                </div>
                <div>
                  <label className="text-[#5C4A1E] text-sm font-medium block mb-1">Jam</label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full bg-white/60 border border-[#F5B301]/30 rounded-xl px-4 py-3 text-[#3D2B00] focus:border-[#F5B301] focus:outline-none focus:ring-2 focus:ring-[#F5B301]/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#5C4A1E] text-sm font-medium block mb-1">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full bg-white/60 border border-[#F5B301]/30 rounded-xl px-4 py-3 text-[#3D2B00] focus:border-[#F5B301] focus:outline-none focus:ring-2 focus:ring-[#F5B301]/30 transition-all"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Selesai</option>
                  <option value="cancelled">Dibatalkan</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3 rounded-xl bg-white/60 border border-[#F5B301]/30 text-[#8B7A3A] hover:text-[#5C4A1E] transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={editingId ? handleUpdate : handleAdd}
                  className="flex-1 px-6 py-3 rounded-xl bg-[#F5B301] text-black font-bold hover:bg-[#dba102] transition-colors shadow-lg shadow-[#F5B301]/30"
                >
                  {editingId ? "Update" : "Simpan"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}