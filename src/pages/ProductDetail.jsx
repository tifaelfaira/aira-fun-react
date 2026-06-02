import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaArrowLeft, FaBox, FaTag, FaMoneyBillWave, FaBuilding } from "react-icons/fa"
// Import file JSON lokal yang berisi 30 data produk baru kita
import productsData from "../data/Products.json"

export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Cari produk berdasarkan ID dari file JSON lokal kita
        const foundProduct = productsData.find((item) => item.id === parseInt(id))
        
        if (foundProduct) {
            setProduct(foundProduct)
            setError(null)
        } else {
            setError("Produk dengan ID tersebut tidak ditemukan di sistem GentleCut.")
        }
    }, [id])

    // HELPER UNTUK MEMBUAT ILUSTRASI PRODUK MURNI PAKAI CSS/TAILWIND (ANTI-GAGAL)
    const renderProductIllustration = (category) => {
        let bgColor = "from-amber-500 to-amber-600";
        let labelText = "POMADE";

        if (category === "Hair Wash" || category === "Hair Treatment") {
            bgColor = "from-zinc-700 to-zinc-900";
            labelText = "SHAMPOO";
        } else if (category === "Beard Care" || category === "Skin Care") {
            bgColor = "from-amber-700 to-amber-900";
            labelText = "SERUM";
        } else if (category === "Tools") {
            bgColor = "from-zinc-800 to-black";
            labelText = "TOOLS";
        }

        return (
            <div className={`w-full h-full bg-gradient-to-br ${bgColor} flex flex-col items-center justify-center p-8 text-white relative select-none`}>
                {/* Desain Botol / Kotak Produk Premium */}
                <div className="w-28 h-40 bg-zinc-900/90 rounded-2xl border-2 border-amber-400/40 shadow-2xl flex flex-col justify-between p-3 relative transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    {/* Tutup Botol */}
                    <div className="w-12 h-3 bg-amber-500 rounded-t-sm mx-auto -mt-6 border-b border-zinc-900" />
                    
                    {/* Label Produk */}
                    <div className="border border-amber-500/30 rounded p-1.5 text-center bg-zinc-950/50 my-auto">
                        <p className="text-[7px] tracking-widest text-amber-500 font-black uppercase">GENTLE CUT</p>
                        <div className="h-[1px] bg-amber-500/20 my-1" />
                        <p className="text-[9px] font-mono tracking-tighter text-zinc-100 font-bold">{labelText}</p>
                    </div>

                    <p className="text-[7px] text-center text-zinc-500 font-mono">LAB SERIES</p>
                </div>

                {/* Bayangan di bagian bawah */}
                <div className="w-32 h-4 bg-black/20 rounded-full blur-md mt-4" />
                
                {/* Watermark background */}
                <span className="absolute bottom-4 right-6 text-white/5 font-black text-5xl uppercase tracking-tighter italic pointer-events-none">
                    GENTLE
                </span>
            </div>
        );
    };

    if (error) {
        return (
            <div className="p-8 text-center animate-fadeIn">
                <div className="bg-red-50 text-red-600 p-6 rounded-3xl border border-red-100 max-w-md mx-auto font-bold shadow-sm">
                    {error}
                </div>
                <Link to="/products" className="inline-flex items-center gap-2 text-zinc-600 font-bold mt-6 hover:text-amber-500 transition-colors">
                    <FaArrowLeft /> Kembali ke Daftar Produk
                </Link>
            </div>
        )
    }

    if (!product) return <div className="p-8 font-bold text-center text-zinc-400 animate-pulse">Loading Product Detail...</div>

    return (
        <div className="p-8 bg-zinc-50 min-h-screen animate-fadeIn">
            {/* Tombol Kembali */}
            <div className="max-w-2xl mx-auto mb-6">
                <Link 
                    to="/products" 
                    className="inline-flex items-center gap-2 text-sm font-black text-zinc-400 hover:text-amber-500 transition-colors uppercase tracking-widest"
                >
                    <FaArrowLeft /> Kembali ke Daftar
                </Link>
            </div>

            {/* Container Utama Detail Produk */}
            <div className="bg-white rounded-[40px] shadow-sm border border-zinc-100 overflow-hidden max-w-2xl mx-auto flex flex-col md:flex-row">
                
                {/* Bagian Gambar Kiri (SEKARANG DIJAMIN MUNCUL KARENA PAKAI CSS MURNI) */}
                <div className="w-full md:w-1/2 min-h-[320px] md:h-auto relative bg-zinc-100 overflow-hidden">
                    {renderProductIllustration(product.category)}
                    
                    {/* Badge Kode Produk */}
                    <span className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur-sm text-amber-500 font-mono text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest border border-zinc-800 shadow-md">
                        {product.code}
                    </span>
                </div>

                {/* Bagian Detail Konten Kanan */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-between bg-white">
                    <div>
                        <div className="mb-2">
                            <span className="text-[9px] bg-amber-500/10 text-amber-600 px-2.5 py-1 rounded-md font-black uppercase tracking-wider">
                                {product.category}
                            </span>
                        </div>
                        <h2 className="text-2xl font-black text-zinc-900 leading-tight mb-4">
                            {product.title}
                        </h2>
                        
                        <div className="space-y-3.5 border-t border-zinc-100 pt-5 mt-4">
                            <div className="flex items-center gap-3 text-sm font-bold text-zinc-500">
                                <FaTag className="text-amber-500 w-4" />
                                <span>Kategori: <span className="text-zinc-800">{product.category}</span></span>
                            </div>
                            <div className="flex items-center gap-3 text-sm font-bold text-zinc-500">
                                <FaBuilding className="text-amber-500 w-4" />
                                <span>Brand: <span className="text-zinc-800">{product.brand}</span></span>
                            </div>
                            <div className="flex items-center gap-3 text-sm font-bold text-zinc-500">
                                <FaBox className="text-amber-500 w-4" />
                                <span>Stok Gudang: <span className={`font-black ${product.stock < 15 ? 'text-red-500 bg-red-50 px-2.5 py-0.5 rounded-lg border border-red-100' : 'text-zinc-800'}`}>{product.stock} pcs</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Harga Section */}
                    <div className="mt-8 border-t border-zinc-100 pt-5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-zinc-400 font-black text-[10px] uppercase tracking-widest">
                            <FaMoneyBillWave className="text-emerald-500" size={14} /> Price Tag
                        </div>
                        <div className="text-2xl font-black text-zinc-900">
                            Rp {product.price.toLocaleString("id-ID")}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}