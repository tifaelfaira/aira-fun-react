import { Link } from "react-router-dom";
import products from "../data/products.json";

export default function Products() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Breadcrumb & Title */}
      <div className="mb-2">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Home · <span className="text-amber-500">Page</span>
        </span>
      </div>
      <h1 className="text-4xl font-black text-gray-900 mb-8 italic uppercase tracking-tighter">
        Products
      </h1>

      {/* Search Bar di sini dihapus karena sudah ada di Sidebar Captain.
         Ini membuat tampilan lebih bersih dan tidak membingungkan user.
      */}

      <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            {/* Header menggunakan aksen Amber/Kuning sesuai logo Captain agar serasi */}
            <tr className="bg-amber-500 text-zinc-900">
              <th className="p-5 font-bold text-[11px] uppercase tracking-wider w-16 text-center">
                # ID
              </th>
              <th className="p-5 font-bold text-[11px] uppercase tracking-wider">
                Name
              </th>
              <th className="p-5 font-bold text-[11px] uppercase tracking-wider">
                Code
              </th>
              <th className="p-5 font-bold text-[11px] uppercase tracking-wider">
                Brand
              </th>
              <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-center">
                Stock
              </th>
              <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-right">
                Price
              </th>
              <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-right">
                Category
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {products.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-amber-50/50 transition-colors group"
              >
                <td className="p-5 text-sm text-gray-400 text-center font-mono">
                  {item.id}
                </td>
                <td className="p-5">
                  <Link
                    to={`/products/${item.id}`}
                    className="font-bold text-amber-600 hover:text-amber-700 hover:underline transition-colors"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="p-5 text-sm text-gray-500 font-mono">
                  {item.code}
                </td>
                <td className="p-5 text-sm text-gray-600">{item.brand}</td>
                <td className="p-5 text-sm text-center">
                  <span
                    className={`font-bold ${item.stock < 15 ? "text-red-500" : "text-gray-700"}`}
                  >
                    {item.stock}
                  </span>
                </td>
                <td className="p-5 text-sm text-right font-bold text-gray-900">
                  Rp {item.price.toLocaleString("id-ID")}
                </td>
                <td className="p-5 text-right text-sm text-gray-400 font-medium">
                  {item.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
