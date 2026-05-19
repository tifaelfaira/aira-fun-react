import Card from "./Card";
import Badge from "./Badge";

export default function ProductCard({ image, title, category, price, description }) {
  return (
    <Card className="overflow-hidden !p-0">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        {/* Manggil Badge yang udah ada garis hitam tipisnya kap! */}
        <div className="mb-3">
          <Badge type="primary">{category}</Badge>
        </div>

        <h2 className="text-xl font-bold mb-2 text-gray-900">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <h3 className="text-xl font-extrabold text-blue-600">
            {price}
          </h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm">
            Detail
          </button>
        </div>
      </div>
    </Card>
  );
}