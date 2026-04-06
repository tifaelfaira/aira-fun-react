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

  // VALIDASI NAMA
  if (!nama) errors.nama = "Nama wajib diisi";
  else if (!isNaN(nama)) errors.nama = "Nama tidak boleh angka";
  else if (nama.length < 3) errors.nama = "Minimal 3 karakter";

  // VALIDASI UMUR
  if (!umur) errors.umur = "Umur wajib diisi";
  else if (isNaN(umur)) errors.umur = "Umur harus angka";
  else if (Number(umur) < 18) errors.umur = "Minimal umur 18";

  // VALIDASI GAJI
  if (!gaji) errors.gaji = "Gaji wajib diisi";
  else if (isNaN(gaji)) errors.gaji = "Gaji harus angka";
  else if (Number(gaji) <= 0) errors.gaji = "Gaji harus lebih dari 0";

  // VALIDASI SELECT
  if (!jabatan) errors.jabatan = "Pilih jabatan";
  if (!status) errors.status = "Pilih status";

  // Cek apakah form valid
  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-pink-50 p-6 rounded-3xl shadow-lg w-96">

        {/* Judul */}
        <h2 className="text-2xl font-extrabold mb-5 text-center text-pink-400">
          Form Laporan
        </h2>

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

        <InputField
          label="Gaji"
          type="number"
          value={gaji}
          onChange={(e) => setGaji(e.target.value)}
          error={errors.gaji}
        />

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

        {/* Tombol Submit muncul hanya kalau form valid */}
        {isFormValid && (
          <button
            onClick={() => setSubmitted(true)}
            className="w-full p-3 rounded-2xl mt-5 font-semibold text-white bg-pink-300 hover:bg-pink-400 transition-colors"
          >
            Submit
          </button>
        )}

        {/* Hasil Submit Card */}
        {submitted && (
          <div className="mt-5 bg-pink-100 border border-pink-200 p-4 rounded-2xl shadow-sm space-y-2">
            <p className="font-bold text-pink-600">Nama: {nama}</p>
            <p className="font-bold text-pink-600">Umur: {umur}</p>
            <p className="font-bold text-pink-600">Gaji: {gaji}</p>
            <p className="font-bold text-pink-600">Jabatan: {jabatan}</p>
            <p className="font-bold text-pink-600">Status: {status}</p>
          </div>
        )}

      </div>
    </div>
  );
}