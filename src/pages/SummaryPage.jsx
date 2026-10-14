import React, { useState } from 'react';
import { Zap, Lightbulb, ArrowLeft, ArrowRight, BarChart3 } from 'lucide-react';

export default function SummaryPage({ navigate }) {
  const [activeSub, setActiveSub] = useState(0);

  const topics = [
    {
      title: '1. Tekanan Zat Padat',
      formula: 'P = F / A',
      units: 'P: Tekanan (Pa atau N/m²), F: Gaya Tekan (N), A: Luas Alas (m²)',
      hook: 'Mengapa pisau yang tajam jauh lebih mudah memotong daging dibanding pisau yang tumpul?',
      explanation: 'Tekanan berbanding terbalik dengan luas permukaan (A). Pisau tajam memiliki luas mata pisau sangat kecil (A mendekati 0), sehingga gaya tekan tangan yang kecil pun menghasilkan tekanan melonjak tinggi dan membelah serat daging.',
      examples: [
        { label: 'Sepatu Hak Tinggi', desc: 'Konsentrasi gaya pada ujung hak kecil menghasilkan tekanan sangat besar pada lantai.' },
        { label: 'Roda Traktor / Tank', desc: 'Rantai roda lebar memperluas bidang tekan agar traktor tidak terperosok ke tanah gembur.' },
        { label: 'Ujung Paku Runcing', desc: 'Dibuat sangat runcing agar mudah menembus dinding beton saat dipukul martil.' }
      ]
    },
    {
      title: '2. Tekanan Zat Cair (Hidrostatis)',
      formula: 'P = ρ · g · h',
      units: 'P: Tekanan (Pa), ρ: Massa jenis fluida (kg/m³), g: Gravitasi (m/s²), h: Kedalaman (m)',
      hook: 'Mengapa semakin dalam kita menyelam, telinga kita terasa sakit dan berdengung?',
      explanation: 'Tekanan hidrostatis berbanding lurus dengan kedalaman (h). Semakin dalam posisi benda di dalam cairan, semakin banyak massa air di atasnya yang menekan akibat tarikan gravitasi bumi.',
      examples: [
        { label: 'Dinding Bendungan', desc: 'Dibuat mengerucut menebal di bagian dasar untuk menahan tekanan hidrostatis dasar yang ekstrem.' },
        { label: 'Pemasangan Infus Pasien', desc: 'Botol cairan infus selalu digantung tinggi agar tekanan cairan infus lebih besar dari tekanan darah pasien.' },
        { label: 'Hukum Archimedes', desc: 'Benda terapung bila massa jenis rata-ratanya lebih kecil dari massa jenis zat cair.' }
      ]
    },
    {
      title: '3. Tekanan Gas & Atmosfer',
      formula: '1 atm ≈ 76 cmHg ≈ 101.325 Pa',
      units: 'Alat ukur: Barometer (tekanan udara luar), Manometer (tekanan gas tertutup)',
      hook: 'Mengapa sedotan bisa memindahkan minuman ke dalam mulut kita?',
      explanation: 'Ketika mulut menyedot sedotan, udara di dalam sedotan dikeluarkan sehingga tekanannya turun (vakum parsial). Tekanan atmosfer luar yang lebih tinggi di atas permukaan gelas menekan cairan masuk dan naik ke atas sedotan.',
      examples: [
        { label: 'Sedotan Minuman', desc: 'Perbedaan tekanan udara luar dan dalam sedotan mendorong air naik.' },
        { label: 'Balon Udara Panas', desc: 'Udara panas memiliki massa jenis lebih renggang daripada udara dingin sekitarnya.' },
        { label: 'Alat Suntik Medis', desc: 'Penarikan pengisap suntik menciptakan tekanan rendah di dalam tabung jarum.' }
      ]
    }
  ];

  const current = topics[activeSub];

  return (
    <div className="space-y-8 pb-12">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <button 
            onClick={() => navigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#625F7A] hover:text-[#6C5CE7] transition mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </button>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#14132B] tracking-tight">
            Rangkuman Materi Kilat
          </h1>
          <p className="text-xs sm:text-sm text-[#625F7A] mt-1">
            Format baca intisari berdurasi kurang dari 3 menit dengan analogi fenomena sehari-hari.
          </p>
        </div>

        {/* Topic Selector Tabs */}
        <div className="glass-panel p-1.5 rounded-2xl flex items-center gap-1.5 overflow-x-auto shadow-sm">
          {topics.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSub(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                activeSub === idx
                  ? 'bg-[#6C5CE7] text-white shadow-sm'
                  : 'text-[#625F7A] hover:text-[#14132B] hover:bg-white/60'
              }`}
            >
              Topik {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F0EDFF] text-[#6C5CE7]">
              Modul Kilat
            </span>
            <h2 className="text-2xl font-black text-[#14132B] mt-2">{current.title}</h2>
          </div>

          <div className="glass-pill px-4 py-2 rounded-2xl flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            <div className="font-mono text-xs sm:text-sm font-bold text-[#6C5CE7]">{current.formula}</div>
          </div>
        </div>

        {/* Hook Pemantik */}
        <div className="bg-amber-50/80 border border-amber-200/60 p-5 rounded-2xl">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>Pertanyaan Pemantik Logika:</span>
          </div>
          <p className="text-sm font-bold text-[#14132B] italic">
            "{current.hook}"
          </p>
        </div>

        {/* Konseptual */}
        <div className="bg-white/90 p-5 sm:p-6 rounded-2xl border border-white space-y-2 shadow-xs">
          <div className="text-xs font-bold text-[#625F7A] uppercase tracking-wider">
            Intisari Penjelasan Ilmiah:
          </div>
          <p className="text-xs sm:text-sm text-[#14132B] leading-relaxed">
            {current.explanation}
          </p>
          <div className="text-[11px] font-mono text-[#625F7A] pt-2 border-t border-slate-100">
            {current.units}
          </div>
        </div>

        {/* Analogi 3 Kartu */}
        <div>
          <div className="text-xs font-bold text-[#14132B] uppercase tracking-wider mb-3">
            Penerapan Nyata di Kehidupan:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.examples.map((ex, i) => (
              <div key={i} className="bg-white/70 p-4 rounded-2xl border border-white hover:border-[#6C5CE7]/30 transition shadow-xs">
                <div className="text-xs font-bold text-[#14132B] mb-1">{ex.label}</div>
                <div className="text-xs text-[#625F7A] leading-relaxed">{ex.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Next Step Banner */}
      <div className="glass-panel rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-2xl bg-[#6C5CE7]/10 text-[#6C5CE7] flex items-center justify-center font-bold shrink-0">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-[#14132B]">Guru atau pengajar IPA?</div>
            <div className="text-xs text-[#625F7A]">Buka Dashboard Monitoring Guru untuk memantau data serapan kelas.</div>
          </div>
        </div>

        <button
          onClick={() => navigate('teacher')}
          className="px-5 py-2.5 rounded-full bg-[#131127] hover:bg-[#201D3D] text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-sm active:scale-98"
        >
          <span>Buka Dashboard Guru</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
