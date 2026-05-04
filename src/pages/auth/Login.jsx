import axios from "axios";
import { useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate, Link } from "react-router-dom"; // Tambahkan Link di sini

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status === 200) navigate("/");
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Email atau Password salah");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f8f9fa] z-[9999]">
      <div className="w-full max-w-[420px] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-12 border border-gray-50">
        
        {/* Header: GentleCut Branding */}
        <div className="text-center mb-10">
          <h1 className="font-poppins text-[38px] text-zinc-900 font-bold leading-tight tracking-tighter">
            Gentle<span className="text-amber-500">Cut.</span>
          </h1>
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1">
            Premium Barbershop Admin
          </p>
        </div>

        <div className="text-center mb-8">
           <h2 className="text-lg font-bold text-zinc-800">Welcome Back 👋</h2>
           <p className="text-zinc-400 text-xs mt-1 font-medium">Silahkan login ke akun anda</p>
        </div>

        {error && (
          <div className="bg-red-50 mb-6 p-4 text-xs font-semibold text-red-600 rounded-2xl flex items-center border border-red-100">
            <BsFillExclamationDiamondFill className="me-2 text-lg" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[11px] font-black text-zinc-400 mb-2 uppercase tracking-widest pl-1">
              Email Address / Username
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              className="w-full px-5 py-4 bg-[#f1f5f9] border-none rounded-2xl focus:ring-2 focus:ring-amber-500 transition-all outline-none text-zinc-800 font-medium"
              placeholder="Contoh: emilys"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2 px-1">
              <label className="block text-[11px] font-black text-zinc-400 uppercase tracking-widest">
                Password
              </label>
              {/* Tambahan: Link ke Forgot Password sesuai Modul */}
              <Link to="/forgot" className="text-[10px] font-bold text-amber-600 hover:underline">
                Lupa Password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full px-5 py-4 bg-[#f1f5f9] border-none rounded-2xl focus:ring-2 focus:ring-amber-500 transition-all outline-none text-zinc-800"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-zinc-900 hover:bg-black text-white font-black py-4 rounded-2xl transition-all flex justify-center items-center shadow-lg active:scale-[0.98]"
          >
            {loading ? (
              <ImSpinner2 className="animate-spin text-amber-500 text-2xl" />
            ) : (
              "LOGIN KE DASHBOARD"
            )}
          </button>
        </form>

        {/* Tambahan: Navigasi ke Register sesuai Modul P7 */}
        <div className="mt-8 text-center">
            <p className="text-xs text-zinc-500 font-medium">
                Belum punya akun?{" "}
                <Link to="/register" className="text-amber-600 font-bold hover:underline">
                    Daftar di sini
                </Link>
            </p>
        </div>

        <div className="mt-10 text-center border-t border-gray-50 pt-6">
          <p className="text-[10px] text-zinc-300 font-bold uppercase tracking-widest">
            © 2026 GENTLECUT INDONESIA
          </p>
        </div>
      </div>
    </div>
  );
}