import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import Badge from "../components/Badge";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";
import Footer from "../components/Footer";

export default function Components() {
  // Data Header Tabel Layanan / Reservasi Barbershop
  const headers = ["No", "Nama Pelanggan", "Layanan", "Barber (Kapster)", "Status", "Total Harga"];

  // Data Dummy CRM Barbershop
  const transactions = [
    { id: 1, customer: "Rian Wijaya", service: "Gentleman Haircut + Wash", barber: "Ayy", status: "success", textStatus: "Selesai", price: "Rp 65.000" },
    { id: 2, customer: "Budi Santoso", service: "Hair Dyeing (Premium Black)", barber: "Yoga", status: "warning", textStatus: "Pending", price: "Rp 150.000" },
    { id: 3, customer: "Kevin Utama", service: "Shaving + Face Massage", barber: "Acha", status: "primary", textStatus: "Baru", price: "Rp 40.000" }
  ];

  return (
    <Container className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-[32px] font-bold text-gray-900 leading-tight">
          GentleCut Barbershop Components 
        </h1>
        <p className="text-gray-500 font-medium text-sm mt-1">
          GentleCut CRM / Master Components
        </p>
      </div>

      {/* 1. BASIC COMPONENTS */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button type="primary">Tambah Booking</Button>
          <Button type="success">Selesai Potong</Button>
          <Button type="danger">Batalkan Jadwal</Button>
          <Button type="secondary">Draft Nota</Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge type="primary">Antrean Baru</Badge>
          <Badge type="warning">Sedang Keramas</Badge>
          <Badge type="success">Pembayaran Lunas</Badge>
          <Badge type="danger">Mangkir (No Show)</Badge>
        </div>

        <div className="flex gap-2">
          <Avatar name="Ayy" />
          <Avatar name="Yoga" />
          <Avatar name="Acha" />
        </div>
      </div>

      {/* 2. DATA DISPLAY - CARD (Diberikan Aksen Highlight Kuning Khas GentleCut) */}
      <div className="space-y-4 max-w-2xl">
        <div className="bg-gradient-to-r from-amber-400 via-[#F5B301] to-yellow-500 p-[2px] rounded-2xl shadow-sm">
          <div className="bg-amber-50/90 rounded-[14px] p-1">
            <Card>
              <h4 className="text-md font-bold text-amber-800">Total Pendapatan Hari Ini</h4>
              <p className="text-3xl font-black text-zinc-900 mt-2">Rp 1.420.000</p>
              <p className="text-xs text-amber-700 mt-1 font-semibold">↑ 12% meningkat dari kemaren sore</p>
            </Card>
          </div>
        </div>
      </div>

      {/* 3. DATA DISPLAY - PRODUCT CARD  */}
      <div className="space-y-4">
        {/* Class [&_button]:!bg-zinc-950 dkk ini gunanya buat maksa semua tombol/link biru di dalemnya jadi hitam */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 [&_button]:!bg-zinc-950 [&_button]:hover:!bg-zinc-800 [&_button]:!text-white [&_a]:!bg-zinc-950 [&_a]:hover:!bg-zinc-800 [&_a]:!text-white">
          <div className="bg-amber-50/40 border border-amber-200 rounded-2xl p-2 shadow-sm">
            <ProductCard
              image="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600&auto=format&fit=crop"
              title="Premium Matte Pomade"
              category="Hair Styling Produk"
              price="Rp 120.000"
              description="Pomade water-based lokal berkualitas tinggi dengan aroma vanila maskulin. Daya rekat kuat sepanjang hari namun sangat mudah dibilas."
            />
          </div>
          <div className="bg-amber-50/40 border border-amber-200 rounded-2xl p-2 shadow-sm">
            <ProductCard
              image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop"
              title="Paket Gentleman Grooming"
              category="Paket Layanan Utama"
              price="Rp 95.000"
              description="Kombinasi cuci rambut premium, potong rambut mengikuti bentuk wajah, handuk hangat wajah, pijat bahu relaksasi, serta penataan gaya pomade."
            />
          </div>
        </div>
      </div>

      {/* BERSIH SEMULA - Teks header kolom atas yang dipaksa Hitam Pekat agar Tajam */}
      <div className="space-y-4">
        <div className="bg-amber-50/40 p-4 rounded-xl shadow-sm border border-amber-200 [&_th]:!text-gray-950 [&_th>*]:!text-gray-950 [&_th]:font-bold">
          <Table headers={headers}>
            {transactions.map((item, index) => (
              <tr key={item.id} className="hover:bg-amber-100/50 border-b border-amber-100 transition-colors">
                <td className="px-4 py-3 text-gray-600 font-medium text-sm">{index + 1}</td>
                <td className="px-4 py-3 font-semibold text-gray-900 text-sm">{item.customer}</td>
                <td className="px-4 py-3 text-gray-600 text-sm">{item.service}</td>
                <td className="px-4 py-3 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Avatar name={item.barber} />
                    <span>{item.barber}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">
                  <Badge type={item.status}>{item.textStatus}</Badge>
                </td>
                <td className="px-4 py-3 font-bold text-gray-900 text-sm">{item.price}</td>
              </tr>
            ))}
          </Table>
        </div>
      </div>

      {/* 4. FORM COMPONENT  */}
      <div className="space-y-4">
        <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-200 space-y-4 shadow-sm max-w-2xl">
          {/* InputField */}
          <div>
            <label className="block text-sm font-semibold text-zinc-800 mb-1">Nama Pelanggan Walk-in</label>
            <input type="text" className="w-full border border-amber-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5B301] bg-white" placeholder="Contoh: Mas Budi..." />
          </div>
          {/* SelectField */}
          <div>
            <label className="block text-sm font-semibold text-zinc-800 mb-1">Pilih Kapster / Barber Tersedia</label>
            <select className="w-full border border-amber-300 rounded-lg p-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#F5B301]">
              <option>Ayy (Status: Ready)</option>
              <option>Yoga (Status: Istirahat)</option>
              <option>Acha (Status: Sedang Memotong)</option>
            </select>
          </div>
          {/* TextArea */}
          <div>
            <label className="block text-sm font-semibold text-zinc-800 mb-1">Catatan Permintaan Khusus Pelanggan</label>
            <textarea className="w-full border border-amber-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5B301] bg-white" rows="2" placeholder="Misal: Samping tipis high fade, atas jangan dipotong terlalu banyak..."></textarea>
          </div>
          {/* PEMAKSAAN TOTAL: Kita overide pakai style inline dan !bg-zinc-950 biar birunya mampus */}
          <div className="pt-2">
            <button type="button" className="bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95 w-full md:w-auto">
              Masukkan ke Daftar Antrean
            </button>
          </div>
        </div>
      </div>

      {/* 5. FEEDBACK COMPONENT ) */}
      <div className="space-y-4">
        <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-200 shadow-sm max-w-2xl flex flex-col items-center justify-center gap-3">
          <div className="w-9 h-9 border-4 border-amber-200 border-t-[#F5B301] rounded-full animate-spin"></div>
          <p className="text-xs font-bold text-amber-800 tracking-wide animate-pulse">
            Memuat Data Antrean...
          </p>
        </div>
      </div>

      {/* 6. SECTION COMPONENT */}
      <div className="space-y-4">
        <div className="relative bg-zinc-950 text-white rounded-2xl overflow-hidden shadow-lg border border-zinc-800">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop')" }}></div>
          
          <div className="relative z-10 max-w-2xl px-8 py-12 md:py-16 space-y-4">
            <span className="bg-[#F5B301] text-black text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
              GentleCut Executive Lounge
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Gaya Rambut Sempurna Mencerminkan Karakter Pria Sejati
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Nikmati pelayanan potong rambut premium dengan kapster berpengalaman dan suasana lounge kasir barbershop modern yang nyaman.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button className="bg-[#F5B301] hover:bg-[#d69d02] text-black font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95">
                Booking Jadwal Sekarang
              </button>
              <button className="bg-transparent hover:bg-zinc-900 border border-zinc-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all">
                Lihat Semua Layanan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LAYOUT COMPONENT - FOOTER SYSTEM */}
      <Footer />
    </Container>
  );
}