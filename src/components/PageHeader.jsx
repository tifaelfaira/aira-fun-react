import React from 'react';
import { LuFilter } from "react-icons/lu";

export default function PageHeader(props) {
    const renderBreadcrumb = () => {
        if (Array.isArray(props.breadcrumb)) {
            return props.breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                    {/* Ganti text-hijau jadi text-amber-600 agar konsisten emas */}
                    <span className={`text-gray-400 ${index === props.breadcrumb.length - 1 ? 'font-black text-amber-600' : ''}`}>
                        {item}
                    </span>
                    {index < props.breadcrumb.length - 1 && <span className="text-gray-400">/</span>}
                </React.Fragment>
            ));
        }
        return <span className="text-gray-400 font-black text-amber-600">{props.breadcrumb}</span>;
    };

    return (
        <div id="pageheader-container" className="p-4 mt-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div id="pageheader-left" className="flex flex-col">
                    <span id="page-title" className="text-3xl font-black text-zinc-800 tracking-tight">
                       {props.title}
                    </span>
                    <div id="breadcrumb-links" className="flex items-center font-bold space-x-2 mt-1 text-[10px] uppercase tracking-widest">
                        <span className="text-zinc-300">Home</span>
                        <span className="text-zinc-300">/</span>
                        {renderBreadcrumb()}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Tombol Add (Children) - Otomatis ikut style dari parent */}
                    {props.children}

                    {/* Filter Tab - Sekarang sudah tema Midnight Amber */}
                    <div id="header-filter" className="flex items-center bg-white p-1.5 rounded-2xl shadow-sm border border-zinc-100">
                        <div className="flex items-center px-3 text-zinc-400 border-r border-zinc-100 mr-1">
                            <LuFilter size={14} />
                        </div>
                        <div className="flex space-x-1">
                            {/* Ganti bg-hijau jadi bg-zinc-900 (Hitam) & text-amber-500 (Emas) */}
                            <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-tighter bg-zinc-900 text-amber-500 rounded-xl shadow-lg transition-all">
                                Daily
                            </button>
                            <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-tighter text-zinc-400 hover:text-zinc-800 hover:bg-zinc-50 rounded-xl transition-all">
                                Weekly
                            </button>
                            <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-tighter text-zinc-400 hover:text-zinc-800 hover:bg-zinc-50 rounded-xl transition-all">
                                Monthly
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Garis pemisah tipis */}
            <div className="w-full h-[1px] bg-zinc-100 mt-6"></div>
        </div>
    );
}