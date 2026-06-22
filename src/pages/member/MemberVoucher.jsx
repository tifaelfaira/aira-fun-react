import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoArrowBackOutline, IoGiftOutline, IoTicketOutline, IoCalendarOutline, IoCheckmarkCircle } from "react-icons/io5";

export default function MemberVoucher() {
  const vouchers = [
    { id: 1, title: "Diskon 20% Haircut", code: "CROWN20", expires: "31 Des 2026", status: "Aktif", discount: "20%" },
    { id: 2, title: "Voucher Rp 25.000", code: "CROWN25", expires: "15 Jul 2026", status: "Aktif", discount: "Rp 25.000" },
    { id: 3, title: "Free Hair Serum", code: "SERUMFREE", expires: "01 Ags 2026", status: "Kadaluarsa", discount: "Gratis" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full p-6"
    >
      <Link to="/member/dashboard" className="inline-flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-amber-500 transition mb-6">
        <IoArrowBackOutline /> Kembali ke Dashboard
      </Link>

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-amber-100 px-3 py-1 rounded-full mb-2">
          <IoTicketOutline className="text-amber-500 text-xs" />
          <span className="text-[9px] font-black text-amber-600 uppercase tracking-wider">Voucher</span>
        </div>
        <h1 className="text-3xl font-black text-neutral-900">Voucher Saya</h1>
        <p className="text-neutral-400 text-sm mt-1">Kumpulkan dan gunakan voucher eksklusif Crown&Co.</p>
      </div>

      <div className="space-y-4">
        {vouchers.map((voucher, idx) => (
          <motion.div
            key={voucher.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className={`bg-white rounded-2xl p-5 shadow-sm border ${
              voucher.status === "Aktif" ? "border-amber-200" : "border-gray-200 opacity-60"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                  voucher.status === "Aktif" ? "bg-amber-100 text-amber-500" : "bg-gray-100 text-gray-400"
                }`}>
                  <IoGiftOutline />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800">{voucher.title}</h3>
                  <div className="flex flex-wrap gap-3 text-xs text-neutral-500 mt-1">
                    <span className="bg-amber-50 px-2 py-0.5 rounded font-mono">{voucher.code}</span>
                    <span className="flex items-center gap-1">
                      <IoCalendarOutline className="text-xs" />
                      {voucher.expires}
                    </span>
                    <span className="font-bold text-amber-600">{voucher.discount}</span>
                  </div>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                voucher.status === "Aktif" 
                  ? "bg-green-100 text-green-600" 
                  : "bg-gray-100 text-gray-400"
              }`}>
                {voucher.status === "Aktif" ? <><IoCheckmarkCircle className="inline mr-1" /> {voucher.status}</> : voucher.status}
              </span>
            </div>
            {voucher.status === "Aktif" && (
              <button className="mt-3 w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black text-xs py-2 rounded-xl transition">
                Gunakan Voucher
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {vouchers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎫</div>
          <p className="text-neutral-400">Belum ada voucher tersedia</p>
        </div>
      )}
    </motion.div>
  );
}