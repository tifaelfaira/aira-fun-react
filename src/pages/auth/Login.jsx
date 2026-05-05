import axios from "axios";
import { useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate, Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6"; // Import ikon user

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({ email: "", password: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    axios.post("https://dummyjson.com/user/login", {
      username: dataForm.email,
      password: dataForm.password,
    })
    .then((res) => { if (res.status === 200) navigate("/"); })
    .catch((err) => { setError(err.response?.data?.message || "Email atau Password salah"); })
    .finally(() => { setLoading(false); });
  };

  return (
    <div className="w-full bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 border border-gray-100/50">
      
      {/* Profile Icon Bulat (Tengah Card) */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-[#FFF9EB] rounded-full flex items-center justify-center border-4 border-white shadow-sm">
          <div className="w-10 h-10 bg-[#FFB800] rounded-full flex items-center justify-center text-white">
            <FaUser className="text-lg" />
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#111111]">Welcome Back</h2>
        <p className="text-gray-400 text-sm mt-2">Glad to see you again. Log in to your account.</p>
      </div>

      {error && (
        <div className="bg-red-50 mb-6 p-4 text-[11px] font-semibold text-red-600 rounded-2xl flex items-center border border-red-100">
          <BsFillExclamationDiamondFill className="me-2 text-lg" />
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Email Address <span className="text-red-500">*</span></label>
          <input type="text" name="email" onChange={handleChange} className="w-full px-4 py-3.5 bg-[#F8F9FA] border border-transparent rounded-xl focus:bg-white focus:border-[#FFB800] transition-all outline-none text-sm text-gray-800" placeholder="johndoe@example.com" required />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2 px-1">
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Password <span className="text-red-500">*</span></label>
            <Link to="/forgot" className="text-[11px] font-bold text-[#FFB800] uppercase tracking-wider">Forgot Password?</Link>
          </div>
          <input type="password" name="password" onChange={handleChange} className="w-full px-4 py-3.5 bg-[#F8F9FA] border border-transparent rounded-xl focus:bg-white focus:border-[#FFB800] transition-all outline-none text-sm text-gray-800" placeholder="••••••••" required />
        </div>

        <button type="submit" disabled={loading} className="w-full bg-[#FFB800] hover:bg-[#E6A600] text-white font-bold py-4 rounded-xl transition-all flex justify-center items-center shadow-lg shadow-yellow-500/20 mt-4 uppercase text-xs tracking-widest active:scale-95">
          {loading ? <ImSpinner2 className="animate-spin text-xl" /> : "Login"}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
          Don't have an account? <Link to="/register" className="text-[#FFB800] hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
}