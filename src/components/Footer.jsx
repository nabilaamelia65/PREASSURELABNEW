import React from 'react';


export default function Footer({ navigate }) {
  return (
    <footer className="mt-auto border-t border-white/60 bg-white/40 backdrop-blur-md py-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center border border-white shadow-xs">
              <img src="/logo-clean.png" alt="PressureLab" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-[#14132B]">
                  Pressure<span className="text-[#6C5CE7]">Lab</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F0EDFF] text-[#6C5CE7]">
                  Fisika SMP IX
                </span>
              </div>
              <p className="text-[11px] text-[#625F7A]">Platform Pembelajaran Tekanan Interaktif</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#625F7A]">
            <button onClick={() => navigate?.('home')} className="hover:text-[#6C5CE7] transition cursor-pointer">Beranda</button>
            <button onClick={() => navigate?.('lab')} className="hover:text-[#6C5CE7] transition cursor-pointer">Lab Simulasi</button>
            <button onClick={() => navigate?.('detector')} className="hover:text-[#6C5CE7] transition cursor-pointer">Detektor Miskonsepsi</button>
            <button onClick={() => navigate?.('quiz')} className="hover:text-[#6C5CE7] transition cursor-pointer">Kuis Tantangan</button>
            <button onClick={() => navigate?.('summary')} className="hover:text-[#6C5CE7] transition cursor-pointer">Materi Kilat</button>
            <button onClick={() => navigate?.('teacher')} className="hover:text-[#6C5CE7] transition cursor-pointer">Dashboard Guru</button>
          </div>

          <div className="text-xs text-[#625F7A] text-center md:text-right">
            <p>Sesuai Capaian Pembelajaran IPA Kurikulum Merdeka.</p>
            <p className="mt-1 flex items-center justify-center md:justify-end gap-1.5 text-[11px] text-[#85829D]">
              <span>Simulasi Fisika Realistis</span>
              <span>•</span>
              <span>100% Interaktif</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
