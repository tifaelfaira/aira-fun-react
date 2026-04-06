export default function InputField({
  label,
  type,
  value,
  onChange,
  error
}) {
  return (
    <div className="mb-3">
      <label className="block mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}