import { createRoot } from "react-dom/client";
import LaporanForm from "./LaporanForm";
import "../tailwind.css"; // Panggil tailwind dari luar folder

createRoot(document.getElementById("root")).render(
  <LaporanForm /> 
);