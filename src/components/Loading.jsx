import React from 'react';

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white">
            {/* Spinner dengan warna hijau sesuai modul */}
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            
            {/* Teks Loading sesuai instruksi modul */}
            <p className="text-green-600 text-lg font-medium">
                Loading...
            </p>
            
            {/* Opsional: Tambahan teks kecil biar tema Barbershop-nya terasa */}
            <p className="text-gray-400 text-sm mt-2">
                Menyiapkan peralatan cukur...
            </p>
        </div>
    );
}