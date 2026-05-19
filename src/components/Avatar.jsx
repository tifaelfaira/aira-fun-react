export default function Avatar({ name }) {
  return (
    <div className="w-8 h-8 rounded-full bg-gray-300 border border-gray-400 flex items-center justify-center font-bold text-xs text-gray-800 uppercase shadow-sm">
      {name ? name.charAt(0) : "?"}
    </div>
  );
}