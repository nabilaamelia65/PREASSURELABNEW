import React from 'react';
import { 
  Play, 
  BrainCircuit, 
  Sparkles, 
  BookOpen, 
  BarChart3, 
  ArrowRight, 
  Layers, 
  Waves, 
  Truck
} from 'lucide-react';

export default function HomePage({ navigate }) {
  return (
    <div className="w-full space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION (Full-Width, Clean, Uncluttered) */}
      <section className="w-full pt-4 sm:pt-8 md:pt-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Focused Copy & Direct Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-white/90 shadow-xs text-xs font-bold text-[#14132B]">
              <span className="w-2 h-2 rounded-full bg-[#6C5CE7]"></span>
              <span>Laboratorium Fisika Interaktif SMP Kelas IX</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#14132B] tracking-tight leading-[1.12]">
              Kuasai Konsep Tekanan Fisika Dengan Eksplorasi Visual
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#625F7A] leading-relaxed max-w-[55ch]">
              Eksperimen langsung variabel gaya, luas alas, dan kedalaman fluida secara real-time. Hilangkan miskonsepsi melalui simulasi virtual interaktif.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => navigate('lab')}
                className="px-7 py-3.5 rounded-full bg-[#6C5CE7] hover:bg-[#5A4AD1] text-white text-sm font-bold transition shadow-md shadow-[#6C5CE7]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Buka Lab Virtual</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('detector')}
                className="px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#14132B] text-sm font-bold border border-white/90 transition shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <BrainCircuit className="w-4 h-4 text-[#6C5CE7]" />
                <span>Uji Miskonsepsi</span>
              </button>
            </div>

          </div>

          {/* Right Column: High-Res Glass Apparatus Visual from Reference */}
          <div className="lg:col-span-5 w-full flex justify-center items-center">
            <div className="relative w-full max-w-[480px] glass-panel rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-xl overflow-hidden group">
              
              {/* Glass Laboratory Render from Reference */}
              <div className="w-full flex items-center justify-center py-2">
                <img 
                  src="/glass-apparatus-clean.png" 
                  alt="Simulasi Tabung Tekanan Fisika" 
                  className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Minimalist Live Stat Ribbon */}
              <div className="w-full dark-glass-card rounded-2xl p-4 text-white flex items-center justify-between shadow-lg mt-4">
                <div>
                  <div className="text-[10px] text-purple-200 uppercase tracking-wider font-semibold">Sensor Hidrostatis</div>
                  <div className="text-base sm:text-lg font-black text-white">
                    61.500 Pa <span className="text-xs text-emerald-400 font-normal">(61,5 kPa)</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#6C5CE7] text-white shadow-xs">
                  Live PhET
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Clean Stat Pills */}
        <div className="w-full mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="glass-pill rounded-2xl p-4 flex items-center justify-between">
            <div>
              <div className="text-xs text-[#625F7A] font-semibold">Laboratorium</div>
              <div className="text-lg sm:text-2xl font-black text-[#14132B]">3 Modul</div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#6C5CE7] text-white">
              PhET
            </span>
          </div>

          <div className="glass-pill rounded-2xl p-4 flex items-center justify-between">
            <div>
              <div className="text-xs text-[#625F7A] font-semibold">Tantangan Kuis</div>
              <div className="text-lg sm:text-2xl font-black text-[#14132B]">100% HOTS</div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#6C5CE7] text-white">
              Quizizz
            </span>
          </div>

          <div className="glass-pill rounded-2xl p-4 flex items-center justify-between">
            <div>
              <div className="text-xs text-[#625F7A] font-semibold">Durasi Baca</div>
              <div className="text-lg sm:text-2xl font-black text-[#14132B]">&lt; 3 Menit</div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#6C5CE7] text-white">
              RuangGuru
            </span>
          </div>

          <div className="glass-pill rounded-2xl p-4 flex items-center justify-between">
            <div>
              <div className="text-xs text-[#625F7A] font-semibold">Deteksi Error</div>
              <div className="text-lg sm:text-2xl font-black text-[#14132B]">AI Engine</div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#6C5CE7] text-white">
              Diagnostik
            </span>
          </div>
        </div>

      </section>

      {/* 2. BENTO GRID FITUR (Clean, Responsive, Calm) */}
      <section className="w-full space-y-6">
        
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14132B] tracking-tight">
            5 Modul Pembelajaran Tekanan
          </h2>
          <p className="text-xs sm:text-sm text-[#625F7A] mt-1">
            Pilih modul untuk membuka halaman eksperimen dan materi secara fokus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Detektor Miskonsepsi (Dark Card) */}
          <div className="md:col-span-5 dark-glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-white shadow-xl relative overflow-hidden">
            <div className="space-y-4">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#A29BFE] bg-white/10 px-2.5 py-0.5 rounded-full">
                AI Diagnostic Engine
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Detektor Miskonsepsi
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                Uji studi kasus jebakan konsep fisika. Sistem secara otomatis mendeteksi kesalahan berpikir umum siswa SMP beserta koreksi ilmiah.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={() => navigate('detector')}
                className="w-full py-3 rounded-2xl bg-[#6C5CE7] hover:bg-[#5A4AD1] text-white text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Buka Detektor Kasus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Lab Simulasi Interaktif (Large White Glass Card) */}
          <div className="md:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#14132B]">
                  Lab Simulasi Interaktif
                </h3>
                <span className="text-[10px] font-bold text-[#6C5CE7] bg-[#F0EDFF] px-2.5 py-1 rounded-full">
                  Mode PhET Real-Time
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#625F7A] leading-relaxed">
                Tiga simulator praktikum: Tekanan Zat Padat (P = F/A), Tekanan Hidrostatis (P = ρgh), dan Hukum Pascal dengan dongkrak hidrolik mobil.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/80 p-3 rounded-2xl border border-white flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-[#6C5CE7] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#14132B]">Zat Padat</div>
                    <div className="text-[10px] text-[#625F7A]">Spons &amp; sepatu hak</div>
                  </div>
                </div>

                <div className="bg-white/80 p-3 rounded-2xl border border-white flex items-center gap-2.5">
                  <Waves className="w-4 h-4 text-[#0984E3] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#14132B]">Hidrostatis</div>
                    <div className="text-[10px] text-[#625F7A]">Penyelam &amp; bendungan</div>
                  </div>
                </div>

                <div className="bg-white/80 p-3 rounded-2xl border border-white flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-[#FD79A8] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#14132B]">Hukum Pascal</div>
                    <div className="text-[10px] text-[#625F7A]">Dongkrak hidrolik</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => navigate('lab')}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#14132B] hover:bg-[#201D3D] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition"
              >
                <span>Buka Praktikum</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Kuis Gamifikasi */}
          <div className="md:col-span-4 glass-panel rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#6C5CE7]/10 text-[#6C5CE7] flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-extrabold text-[#14132B]">
                Kuis Tantangan HOTS
              </h3>
              <p className="text-xs text-[#625F7A] leading-relaxed">
                5 butir soal studi kasus dunia nyata dengan live scoring (0-100), koreksi instan, dan selebrasi confetti digital.
              </p>
            </div>
            <div className="pt-5">
              <button
                onClick={() => navigate('quiz')}
                className="w-full py-2.5 rounded-2xl bg-white hover:bg-[#F4F2FB] text-[#14132B] text-xs font-bold border border-white transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Mulai Kuis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Rangkuman Materi Kilat */}
          <div className="md:col-span-4 glass-panel rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-extrabold text-[#14132B]">
                Rangkuman Materi Kilat
              </h3>
              <p className="text-xs text-[#625F7A] leading-relaxed">
                Intisari konsep esensial &lt; 3 menit baca: Hook pemantik, analogi pisau tajam, sedotan, dan kapal selam.
              </p>
            </div>
            <div className="pt-5">
              <button
                onClick={() => navigate('summary')}
                className="w-full py-2.5 rounded-2xl bg-white hover:bg-[#F4F2FB] text-[#14132B] text-xs font-bold border border-white transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Baca Rangkuman</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 5: Dashboard Monitoring Guru */}
          <div className="md:col-span-4 dark-glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-white shadow-xl">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 text-[#A29BFE] flex items-center justify-center font-bold">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-extrabold text-white">
                Dashboard Guru
              </h3>
              <p className="text-xs text-purple-200/80 leading-relaxed">
                Pantau statistik serapan kelas, tingkat perbaikan miskonsepsi siswa, dan ekspor rekap asesmen formatif.
              </p>
            </div>
            <div className="pt-5">
              <button
                onClick={() => navigate('teacher')}
                className="w-full py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Buka Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
