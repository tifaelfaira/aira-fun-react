import { createRoot } from "react-dom/client";
import BiodataDiri from "./BiodataDiri";
import LaporanForm from "../pertemuan-3/LaporanForm";
import "../tailwind.css";

createRoot(document.getElementById("root")).render(
  <>
    <BiodataDiri />
    <LaporanForm />
  </>
);