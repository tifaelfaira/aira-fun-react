import { useState, useEffect, Suspense, lazy } from "react"; // Tambahkan useEffect di sini
import React from "react";
import "./assets/tailwind.css"; 
import { Route, Routes } from "react-router-dom";

// 1. Import komponen Loading (Bukan lazy karena dipakai sebagai fallback utama)
import Loading from "./components/Loading"; 

// 2. IMPORT PAGES & LAYOUTS MENGGUNAKAN LAZY (Syarat P7)
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Customers = lazy(() => import("./pages/Customers"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Forgot = lazy(() => import("./pages/auth/Forgot"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Components = lazy(() => import("./pages/Components")); 
const Treatments = lazy(() => import("./pages/Treatments")); 


function App() {
  const [count, setCount] = useState(0);

  // --- KODE TAMBAHAN BARU UNTUK SESI LOGIN GENTLECUT ---
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
      return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
      localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);
  // -----------------------------------------------------

  return (
    /* 3. Bungkus Routes dengan Suspense dan panggil komponen Loading */
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* GROUP LAYOUT UTAMA */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/components" element={<Components />} /> 
          <Route path="/treatments" element={<Treatments />} /> 

          <Route 
            path="/error-400" 
            element={<ErrorPage code="400" description="Bad Request" image="https://cdn-icons-png.flaticon.com/512/8286/8286703.png" />} 
          />
          <Route 
            path="/error-401" 
            element={<ErrorPage code="401" description="Unauthorized Access" image="https://cdn-icons-png.flaticon.com/512/12034/12034913.png" />} 
          />
          <Route 
            path="/error-403" 
            element={<ErrorPage code="403" description="Forbidden Access" image="https://cdn-icons-png.flaticon.com/512/7518/7518544.png" />} 
          />
          
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* GROUP LAYOUT AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

/* KODINGAN LAMA (P2 & P3) TETAP AMAN DI BAWAH SINI
// import LaporanForm from "./pertemuan-3/LaporanForm";
*/