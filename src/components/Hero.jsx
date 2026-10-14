import React from 'react';
import { Sparkles, ArrowRight, Play, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export default function Hero({ onStartDemo }) {
  return (
    <section className="relative pt-8 pb-16 overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#5C5EE6]/15 to-[#38BDF8]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Badge Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7F0] shadow-xs text-xs font-semibold text-[#373848]">
            <span className="flex h-2 w-2 rounded-full bg-[#5C5EE6]"></span>
            <span>Platform Pembelajaran Fisika Interaktif Kelas IX</span>
            <span className="text-[#686889]">|</span>
            <span className="text-[#5C5EE6] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Kurikulum Merdeka
            </span>
          </div>
        </div>

        {/* Headline & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#141527] tracking-tight leading-[1.15]">
            Eksplorasi Tekanan Fisika <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5C5EE6] via-[#7B7DF6] to-[#00D2D3]">
              Bukan Sekadar Hafalan Rumus.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#686889] leading-relaxed max-w-2xl mx-auto">
            Hentikan kebiasaan menghafal mati <code className="bg-[#EEF0FF] text-[#5C5EE6] px-1.5 py-0.5 rounded font-mono text-sm font-semibold">P = F/A</code>. 
            Amati langsung perubahan tekanan zat padat, zat cair, dan hukum Pascal melalui simulasi virtual real-time dengan deteksi miskonsepsi otomatis.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onStartDemo}
              className="px-6 py-3.5 rounded-full bg-[#5C5EE6] text-white text-sm font-bold hover:bg-[#4B4DC7] transition-all shadow-md shadow-[#5C5EE6]/25 hover:shadow-lg hover:shadow-[#5C5EE6]/30 flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Buka Lab Virtual Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#quiz"
              className="px-6 py-3.5 rounded-full bg-white text-[#141527] text-sm font-bold border border-[#E5E7F0] hover:bg-[#F0F1F5] hover:border-[#D4D6E2] transition shadow-xs"
            >
              Uji Miskonsepsi & Kuis
            </a>
          </div>

          <div className="mt-5 flex items-center justify-center gap-6 text-xs text-[#686889]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Gaya PhET Interactive
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Gamifikasi Quizizz
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Modul Kilat RuangGuru
            </span>
          </div>
        </div>

        {/* Metrics Banner Ribbon (Inspired by reference mockup numbers) */}
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl border border-[#E5E7F0] p-4 sm:p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-[#E5E7F0]">
            
            <div className="pt-2 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#141527]">3 Topik</div>
              <p className="text-xs text-[#686889] mt-1 font-medium">Padat, Cair, & Gas</p>
            </div>

            <div className="pt-2 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#5C5EE6]">4 Tahap</div>
              <p className="text-xs text-[#686889] mt-1 font-medium">Predict • Explore • Observe • Explain</p>
            </div>

            <div className="pt-2 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#10B981]">&lt; 3 Menit</div>
              <p className="text-xs text-[#686889] mt-1 font-medium">Rangkuman Konsep Kilat</p>
            </div>

            <div className="pt-2 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#141527]">100% HOTS</div>
              <p className="text-xs text-[#686889] mt-1 font-medium">Soal Analisis Berbobot</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
