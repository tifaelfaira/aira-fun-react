import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaArrowLeft, FaBox, FaTag, FaMoneyBillWave, FaBuilding, FaStar, FaStarHalfAlt } from "react-icons/fa"
import productsData from "../data/Products.json"

export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const foundProduct = productsData.find((item) => item.id === parseInt(id))
        
        if (foundProduct) {
            setProduct(foundProduct)
            setError(null)
        } else {
            setError("Produk dengan ID tersebut tidak ditemukan.")
        }
    }, [id])

    // Render rating stars
    const renderRating = (rating) => {
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 >= 0.5
        const stars = []
        
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className="text-amber-500 fill-amber-500" />)
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" className="text-amber-500 fill-amber-500" />)
        }
        return stars
    }

    if (error) {
        return (
            <div className="p-8 text-center">
                <div className="bg-red-50 text-red-600 p-6 rounded-3xl border border-red-100 max-w-md mx-auto font-bold shadow-sm">
                    {error}
                </div>
                <Link to="/products" className="inline-flex items-center gap-2 text-gray-600 font-bold mt-6 hover:text-amber-500 transition-colors">
                    <FaArrowLeft /> Kembali ke Daftar Produk
                </Link>
            </div>
        )
    }

    if (!product) return (
        <div className="p-8 flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-amber-500"></div>
        </div>
    )

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Tombol Kembali */}
            <div className="max-w-5xl mx-auto mb-6">
                <Link 
                    to="/products" 
                    className="inline-flex items-center gap-2 text-sm font-black text-gray-400 hover:text-amber-500 transition-colors uppercase tracking-widest"
                >
                    <FaArrowLeft /> Kembali ke Daftar Produk
                </Link>
            </div>

            {/* Container Utama Detail Produk */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row">
                    
                    {/* Bagian Gambar Kiri */}
                    <div className="w-full md:w-1/2 bg-gradient-to-br from-amber-50 to-amber-100 p-8 flex items-center justify-center min-h-[400px]">
                        <img 
                            src={product.image} 
                            alt={product.title}
                            className="w-full max-w-sm object-contain rounded-2xl shadow-lg"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80";
                            }}
                        />
                        
                        {/* Badge Kode Produk */}
                        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-amber-400 font-mono text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest border border-amber-500/30">
                            {product.code}
                        </div>
                    </div>

                    {/* Bagian Detail Konten Kanan */}
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-between bg-white">
                        <div>
                            <div className="mb-3">
                                <span className="text-[9px] bg-amber-500/10 text-amber-600 px-3 py-1 rounded-md font-black uppercase tracking-wider">
                                    {product.category}
                                </span>
                            </div>
                            <h2 className="text-2xl font-black text-gray-900 leading-tight mb-2">
                                {product.title}
                            </h2>
                            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                                {product.description}
                            </p>
                            
                            {/* Rating */}
                            <div className="flex items-center gap-2 mt-4">
                                <div className="flex gap-0.5">
                                    {renderRating(product.rating)}
                                </div>
                                <span className="text-xs font-bold text-gray-600">{product.rating}</span>
                                <span className="text-[10px] text-gray-400">(234 reviews)</span>
                            </div>
                            
                            <div className="space-y-3 border-t border-gray-100 pt-5 mt-5">
                                <div className="flex items-center gap-3 text-sm font-bold text-gray-500">
                                    <FaTag className="text-amber-500 w-4" />
                                    <span>Kategori: <span className="text-gray-800">{product.category}</span></span>
                                </div>
                                <div className="flex items-center gap-3 text-sm font-bold text-gray-500">
                                    <FaBuilding className="text-amber-500 w-4" />
                                    <span>Brand: <span className="text-gray-800">{product.brand}</span></span>
                                </div>
                                <div className="flex items-center gap-3 text-sm font-bold text-gray-500">
                                    <FaBox className="text-amber-500 w-4" />
                                    <span>Stok: <span className={`font-black ${product.stock < 15 ? 'text-red-500' : 'text-gray-800'}`}>{product.stock} pcs</span></span>
                                </div>
                            </div>
                        </div>

                        {/* Harga Section */}
                        <div className="mt-8 border-t border-gray-100 pt-5 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-gray-400 font-black text-[10px] uppercase tracking-widest">
                                <FaMoneyBillWave className="text-emerald-500" size={14} /> Harga
                            </div>
                            <div className="text-2xl font-black text-gray-900">
                                Rp {product.price.toLocaleString("id-ID")}
                            </div>
                        </div>

                        {/* Tombol Aksi */}
                        <div className="mt-6 flex gap-3">
                            <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-black py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
                                <FaShoppingBag className="text-sm" />
                                Beli Sekarang
                            </button>
                            <button className="px-5 py-3 border border-gray-200 hover:border-amber-500 text-gray-600 hover:text-amber-500 font-bold rounded-xl transition-all text-xs uppercase tracking-wider">
                                <FiHeart className="text-base" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Tambahan import
import { FiShoppingBag, FiHeart } from "react-icons/fi"