import BiodataDiri from "./pertemuan-2/BiodataDiri";
import LaporanForm from "./pertemuan-3/LaporanForm";
import "./pertemuan-3/tailwind.css";

function App() {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-white min-h-screen py-10">

      {/* BIODATA */}
      <div className="mb-12 flex justify-center">
        <BiodataDiri />
      </div>

      {/* FORM */}
      <div className="flex justify-center">
        <LaporanForm />
      </div>

    </div>
  );
}

export default App;
