export default function SelectField({
  label,
  value,
  onChange,
  options,
  error
}) {
  return (
    <div className="mb-3">
      <label className="block mb-1">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
      >
        <option value="">-- pilih --</option>
        {options.map((o, i) => (
          <option key={i}>{o}</option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}