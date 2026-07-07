import { Link } from "react-router-dom";
import { FiStar, FiShoppingBag, FiEye, FiHeart } from "react-icons/fi";
import { useState } from "react";
import products from "../data/Products.json";

export default function Products() {
  const [hoveredId, setHoveredId] = useState(null);

  // ================= TAMBAHAN: FUNGSI UNTUK DETAIL PRODUCT =================
  const handleDetailClick = (productId) => {
    // Redirect ke halaman detail produk
    window.location.href = `/products/${productId}`;
  };
  // ========================================================================

  return (
    <div className="p-8 bg-gradient-to-br from-amber-50/30 via-white to-amber-50/20 min-h-screen">
      
      {/* Breadcrumb & Title ala K-Beauty */}
      <div className="mb-2 text-center md:text-left">
        <span className="text-[10px] font-black text-amber-400 uppercase tracking-[0.3em]">
          ✧ Crown Collection ✧
        </span>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <h1 className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tight italic">
            Our<span className="text-amber-500"> Products</span>
          </h1>
          <div className="w-20 h-1 bg-amber-400 rounded-full mt-3"></div>
        </div>
        <p className="text-sm text-neutral-400 mt-3 md:mt-0 flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
          {products.length} K-Beauty Essentials
        </p>
      </div>

      {/* Product Grid - K-Beauty Style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {products.map((product) => (
          <div
            key={product.id}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-100/50"
          >
            {/* Image Container dengan efek Korea */}
            <Link to={`/products/${product.id}`} className="block overflow-hidden relative bg-gradient-to-br from-amber-50 to-amber-100/50">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain p-4 group-hover:scale-110 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80";
                }}
              />
              
              {/* Badge ala Korea */}
              <div className="absolute top-3 left-3">
                <span className="bg-black/70 backdrop-blur-sm text-amber-400 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-amber-500/30">
                  ✧ {product.category} ✧
                </span>
              </div>
              
              {/* Rating dengan bintang Korea */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 shadow-md border border-amber-200">
                <FiStar className="text-amber-400 text-[10px] fill-amber-400" />
                <span className="text-[10px] font-bold text-neutral-700">{product.rating}</span>
                <span className="text-[8px] text-neutral-400">| 234+</span>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-5 gap-3 ${hoveredId === product.id ? 'opacity-100' : ''}`}>
                <button 
                  onClick={() => handleDetailClick(product.id)}
                  className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                >
                  <FiEye className="text-sm" />
                </button>
                <button className="bg-white/90 hover:bg-amber-500 text-neutral-700 hover:text-white p-2 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <FiHeart className="text-sm" />
                </button>
                <button className="bg-neutral-800 hover:bg-amber-500 text-white p-2 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <FiShoppingBag className="text-sm" />
                </button>
              </div>
            </Link>

            {/* Content ala K-Beauty */}
            <div className="p-5 bg-white">
              {/* Brand & Code */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-full">
                  {product.brand}
                </span>
                <span className="text-[8px] font-mono text-neutral-300">
                  {product.code}
                </span>
              </div>

              {/* Title */}
              <Link to={`/products/${product.id}`}>
                <h3 className="font-black text-neutral-800 text-base mb-2 hover:text-amber-500 transition-colors line-clamp-1">
                  {product.title}
                </h3>
              </Link>

              {/* Description singkat ala Korea */}
              <p className="text-neutral-500 text-[11px] leading-relaxed mb-3 line-clamp-2">
                {product.description}
              </p>

              {/* Price dengan style Korea */}
              <div className="flex justify-between items-center pt-2 border-t border-amber-100/50">
                <div>
                  <span className="text-[8px] text-neutral-400 uppercase tracking-wider">Price</span>
                  <p className="font-black text-amber-600 text-base">
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[8px] text-neutral-400 uppercase tracking-wider">Stock</span>
                  <p className={`font-bold text-sm ${product.stock < 15 ? 'text-rose-500' : 'text-emerald-600'}`}>
                    {product.stock < 15 ? `⚠️ Only ${product.stock}` : `${product.stock} pcs`}
                  </p>
                </div>
              </div>

              {/* Quick Add Button ala Korea - SUDAH BERFUNGSI */}
              <button
                onClick={() => handleDetailClick(product.id)}
                className="mt-4 w-full block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black text-[10px] uppercase tracking-wider py-2.5 rounded-xl transition-all text-center shadow-md hover:shadow-lg cursor-pointer"
              >
                ✧ DETAIL PRODUCT ✧
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-20">
          <div className="w-24 h-24 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <FiShoppingBag className="text-amber-400 text-4xl" />
          </div>
          <p className="text-neutral-400">Belum ada produk tersedia.</p>
        </div>
      )}
    </div>
  );
}