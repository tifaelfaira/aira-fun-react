import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

export default function LaporanForm() {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [gaji, setGaji] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const errors = {};

  if (!nama) errors.nama = "Nama wajib diisi";
  else if (!isNaN(nama)) errors.nama = "Nama tidak boleh angka";
  else if (nama.length < 3) errors.nama = "Minimal 3 karakter";

  if (!umur) errors.umur = "Umur wajib diisi";
  else if (isNaN(umur)) errors.umur = "Umur harus angka";
  else if (Number(umur) < 18) errors.umur = "Minimal umur 18";

  if (!gaji) errors.gaji = "Gaji wajib diisi";
  else if (isNaN(gaji)) errors.gaji = "Gaji harus angka";
  else if (Number(gaji) <= 0) errors.gaji = "Gaji harus lebih dari 0";

  if (!jabatan) errors.jabatan = "Pilih jabatan";
  if (!status) errors.status = "Pilih status";

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div className="flex justify-center mt-10 p-4">
      {/* Warna tetap bg-pink-50, tapi w-full dan max-w-2xl biar LEBAR */}
      <div className="bg-pink-50 p-8 rounded-[40px] shadow-lg w-full max-w-2xl border border-pink-100">

        {/* Judul */}
        <h2 className="text-3xl font-extrabold mb-8 text-center text-pink-400">
          Form Laporan
        </h2>

        {/* Grid ini yang bikin tampilannya menyamping (horizontal) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          <InputField
            label="Nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            error={errors.nama}
          />

          <InputField
            label="Umur"
            type="number"
            value={umur}
            onChange={(e) => setUmur(e.target.value)}
            error={errors.umur}
          />

          <div className="md:col-span-2">
            <InputField
              label="Gaji"
              type="number"
              value={gaji}
              onChange={(e) => setGaji(e.target.value)}
              error={errors.gaji}
            />
          </div>

          <SelectField
            label="Jabatan"
            value={jabatan}
            onChange={(e) => setJabatan(e.target.value)}
            options={["Staff", "Manager"]}
            error={errors.jabatan}
          />

          <SelectField
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            options={["Tetap", "Kontrak"]}
            error={errors.status}
          />
        </div>

        {/* Tombol Submit */}
        {isFormValid && (
          <button
            onClick={() => setSubmitted(true)}
            className="w-full p-4 rounded-full mt-8 font-bold text-white bg-pink-300 hover:bg-pink-400 shadow-md transition-all transform hover:scale-[1.01]"
          >
            Submit
          </button>
        )}

        {/* Hasil Submit Card */}
        {submitted && (
          <div className="mt-8 bg-pink-100 border border-pink-200 p-6 rounded-[30px] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-2">
            <p className="font-bold text-pink-600">Nama: {nama}</p>
            <p className="font-bold text-pink-600">Umur: {umur}</p>
            <p className="font-bold text-pink-600">Gaji: {gaji}</p>
            <p className="font-bold text-pink-600">Jabatan: {jabatan}</p>
            <p className="font-bold text-pink-600 md:col-span-2">Status: {status}</p>
          </div>
        )}

      </div>
    </div>
  );
}