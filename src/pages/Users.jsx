import { useState, useEffect } from "react";
import { 
  IoTrashOutline, IoCreateOutline, IoAddOutline, 
  IoCloseOutline, IoCheckmarkOutline, IoRefreshOutline 
} from "react-icons/io5";
import { userAPI } from "../services/userAPI";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    full_name: "",
    role: "admin"
  });

  // Load users dari Supabase
  const loadUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await userAPI.fetchUsers();
      setUsers(data);
    } catch (err) {
      setError("Gagal memuat data user");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      full_name: "",
      role: "admin"
    });
    setIsEditing(false);
    setSelectedUser(null);
  };

  // Open modal untuk tambah user
  const openAddModal = () => {
    resetForm();
    setShowModal(true);
  };

  // Open modal untuk edit user
  const openEditModal = (user) => {
    setSelectedUser(user);
    setFormData({
      email: user.email,
      password: "", // Password dikosongkan saat edit
      full_name: user.full_name || "",
      role: user.role
    });
    setIsEditing(true);
    setShowModal(true);
  };

  // Handle submit (create atau update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (isEditing && selectedUser) {
        // Update user
        const updateData = {};
        if (formData.email) updateData.email = formData.email;
        if (formData.password) updateData.password = formData.password;
        if (formData.full_name !== undefined) updateData.full_name = formData.full_name;
        if (formData.role) updateData.role = formData.role;
        
        await userAPI.updateUser(selectedUser.id, updateData);
        setSuccess("User berhasil diupdate!");
      } else {
        // Create user baru
        if (!formData.password) {
          setError("Password harus diisi!");
          setLoading(false);
          return;
        }
        await userAPI.register({
          email: formData.email,
          password: formData.password,
          full_name: formData.full_name,
          role: formData.role
        });
        setSuccess("User berhasil ditambahkan!");
      }
      
      setShowModal(false);
      resetForm();
      loadUsers(); // Refresh data
      
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete user
  const handleDelete = async (user) => {
    const confirm = window.confirm(`Yakin ingin menghapus user "${user.email}"?`);
    if (!confirm) return;

    setLoading(true);
    try {
      await userAPI.deleteUser(user.id);
      setSuccess("User berhasil dihapus!");
      loadUsers();
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Gagal menghapus user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen User</h1>
          <p className="text-gray-500 text-sm mt-1">Kelola data user yang memiliki akses ke dashboard admin</p>
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg transition-all shadow-md"
        >
          <IoAddOutline className="text-lg" />
          Tambah User
        </button>
      </div>

      {/* Alert Success */}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
          <IoCheckmarkOutline className="text-lg" />
          {success}
        </div>
      )}

      {/* Alert Error */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && !showModal && (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
        </div>
      )}

      {/* Table Users */}
      {!loading && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">No</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nama Lengkap</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Tanggal Daftar</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-10 text-center text-gray-500">
                      Belum ada data user. Klik "Tambah User" untuk menambahkan.
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{user.full_name || "-"}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                          user.role === 'admin' 
                            ? 'bg-amber-100 text-amber-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(user.created_at).toLocaleDateString('id-ID')}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditModal(user)}
                            className="text-blue-500 hover:text-blue-700 transition-colors"
                            title="Edit User"
                          >
                            <IoCreateOutline className="text-xl" />
                          </button>
                          <button
                            onClick={() => handleDelete(user)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                            title="Hapus User"
                          >
                            <IoTrashOutline className="text-xl" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal Add/Edit User */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold">
                {isEditing ? "Edit User" : "Tambah User Baru"}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <IoCloseOutline className="text-2xl" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Password {!isEditing && <span className="text-red-500">*</span>}
                  {isEditing && <span className="text-xs text-gray-400 ml-1">(Kosongkan jika tidak diubah)</span>}
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required={!isEditing}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  ) : (
                    isEditing ? "Update" : "Simpan"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Refresh Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={loadUsers}
          className="flex items-center gap-2 text-gray-500 hover:text-amber-500 transition-colors text-sm"
        >
          <IoRefreshOutline className="text-base" />
          Refresh Data
        </button>
      </div>
    </div>
  );
}