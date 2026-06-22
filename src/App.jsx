import { useState, useEffect, Suspense, lazy } from "react";
import React from "react";
import "./assets/tailwind.css"; 
import { Route, Routes } from "react-router-dom";

import Loading from "./components/Loading"; 

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
const Users = lazy(() => import("./pages/Users"));

const Guest = lazy(() => import("./pages/Guest"));

// ================= IMPORT MEMBER =================
const MemberLogin = lazy(() => import("./pages/member/MemberLogin"));
const MemberRegister = lazy(() => import("./pages/member/MemberRegister"));
const MemberDashboard = lazy(() => import("./pages/member/MemberDashboard"));
const MemberProfile = lazy(() => import("./pages/member/MemberProfile"));
const MemberHistory = lazy(() => import("./pages/member/MemberHistory"));
const MemberVoucher = lazy(() => import("./pages/member/MemberVoucher")); // <-- TAMBAHKAN
// =================================================

function App() {
  const [count, setCount] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
      return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
      localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Guest />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/components" element={<Components />} /> 
          <Route path="/treatments" element={<Treatments />} /> 
          <Route path="/users" element={<Users />} />

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

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          
          {/* ================= ROUTE MEMBER ================= */}
          <Route path="/member/login" element={<MemberLogin />} />
          <Route path="/member/register" element={<MemberRegister />} />
          <Route path="/member/dashboard" element={<MemberDashboard />} />
          <Route path="/member/profile" element={<MemberProfile />} />
          <Route path="/member/history" element={<MemberHistory />} />
          <Route path="/member/voucher" element={<MemberVoucher />} /> {/* <-- TAMBAHKAN */}
          {/* ================================================ */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

/* KODINGAN LAMA (P2 & P3) TETAP AMAN DI BAWAH SINI
// import LaporanForm from "./pertemuan-3/LaporanForm";
*/