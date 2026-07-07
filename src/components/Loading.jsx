import React from 'react';
import { IoCutOutline } from 'react-icons/io5';

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-neutral-50 via-white to-amber-50/30 overflow-hidden">
            
            {/* Background animasi garis-garis barbershop */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,black_40px,black_41px)] animate-[slide_3s_linear_infinite]"></div>
            </div>

            {/* Logo dengan animasi kompleks */}
            <div className="relative mb-6">
                {/* Lingkaran berputar */}
                <div className="w-32 h-32 rounded-full border-8 border-amber-200/30 border-t-amber-500 border-r-amber-400 animate-spin"></div>
                
                {/* Lingkaran kedua (reverse) */}
                <div className="absolute inset-0 w-32 h-32 rounded-full border-8 border-amber-300/20 border-b-amber-600 border-l-amber-500 animate-[spin_reverse_2s_linear_infinite]"></div>
                
                {/* Icon Gunting di tengah */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-500/30">
                        <IoCutOutline className="text-4xl text-white transform -rotate-45 animate-[scissor_1s_ease-in-out_infinite]" />
                    </div>
                </div>
                
                {/* Efek kilatan */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-amber-300 rounded-full animate-ping opacity-50" style={{ animationDelay: '500ms' }}></div>
            </div>
            
            {/* Brand Name */}
            <h1 className="text-3xl font-black text-neutral-900 tracking-tight">
                Crown<span className="text-amber-500">&Co.</span>
            </h1>
            
            {/* Animated barbershop text */}
            <div className="mt-4 flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <p className="text-amber-600 text-sm font-medium animate-pulse">
                    Sedang memotong...
                </p>
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
            </div>
            
            <p className="text-neutral-400 text-xs mt-3 animate-pulse">
                ✂️ Hasil terbaik butuh proses yang tepat
            </p>

            {/* CSS Animations */}
            <style>{`
                @keyframes scissor {
                    0% { transform: rotate(-45deg) scale(1); }
                    30% { transform: rotate(-45deg) scale(1.15) rotate(-8deg); }
                    60% { transform: rotate(-45deg) scale(1.15) rotate(8deg); }
                    100% { transform: rotate(-45deg) scale(1); }
                }
                @keyframes spin_reverse {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
                @keyframes slide {
                    from { transform: translateX(0); }
                    to { transform: translateX(100px); }
                }
            `}</style>
        </div>
    );
}