import React from "react";

export default function PageHeader({ title, breadcrumb = ["Home", "Page"], children }) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 px-2 animate-fadeIn">
            <div>
                {/* Breadcrumb Gaya Minimalis */}
                <div className="flex items-center gap-2 mb-2">
                    {breadcrumb.map((item, index) => (
                        <React.Fragment key={index}>
                            <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                                index === breadcrumb.length - 1 ? "text-amber-600" : "text-zinc-300"
                            }`}>
                                {item}
                            </span>
                            {index < breadcrumb.length - 1 && (
                                <span className="text-[8px] text-zinc-200">•</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                
                {/* Page Title */}
                <h1 className="text-4xl font-black text-zinc-900 tracking-tighter uppercase italic">
                    {title.split(' ')[0]} <span className="text-amber-500">{title.split(' ').slice(1).join(' ')}</span>
                </h1>
            </div>

            {/* Tempat Naruh Tombol "Tambah Data" dll */}
            <div className="flex items-center gap-3">
                {children}
            </div>
        </div>
    );
}