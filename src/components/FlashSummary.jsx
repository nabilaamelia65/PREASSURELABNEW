import React, { useState } from 'react';
import { BookOpen, Check, Zap, Lightbulb, Compass, Shield } from 'lucide-react';

export default function FlashSummary() {
  const [activeSub, setActiveSub] = useState(0);

  const topics = [
    {
      title: '1. Tekanan Zat Padat',
      formula: 'P = F / A',
      units: 'P: Tekanan (Pa atau N/m²), F: Gaya Tekan (N), A: Luas Alas (m²)',
      hook: 'Mengapa pisau yang tajam jauh lebih mudah memotong daging dibanding pisau yang tumpul?',
      explanation: 'Tekanan berbanding terbalik dengan luas permukaan (A). Pisau tajam memiliki luas mata pisau yang sangat kecil (A mendekati 0), sehingga dengan gaya tekan tangan yang kecil pun, tekanan yang dihasilkan melonjak tinggi dan langsung membelah serat daging.',
      examples: [
        { label: '👠 Sepatu Hak Tinggi', desc: 'Konsentrasi gaya pada ujung hak kecil menghasilkan tekanan sangat besar pada lantai.' },
        { label: '🚜 Roda Traktor / Tank', desc: 'Rantai roda yang lebar memperluas bidang tekan agar traktor tidak terperosok ke tanah gembur.' },
        { label: '📌 Ujung Paku Runcing', desc: 'Dibuat sangat runcing agar mudah menembus dinding beton saat dipukul martil.' }
      ]
    },
    {
      title: '2. Tekanan Zat Cair (Hidrostatis)',
      formula: 'P = ρ · g · h',
      units: 'P: Tekanan (Pa), ρ: Massa jenis fluida (kg/m³), g: Gravitasi (m/s²), h: Kedalaman (m)',
      hook: 'Mengapa semakin dalam kita menyelam, telinga kita terasa sakit dan berdengung?',
      explanation: 'Tekanan hidrostatis berbanding lurus dengan kedalaman (h). Semakin dalam posisi benda di dalam cairan, semakin banyak massa air di atasnya yang menekan akibat tarikan gravitasi bumi.',
      examples: [
        { label: '🌊 Dinding Bendungan', desc: 'Dibuat mengerucut menebal di bagian dasar untuk menahan tekanan hidrostatis dasar yang ekstrem.' },
        { label: '🩸 Pemasangan Infus Pasien', desc: 'Botol cairan infus selalu digantung tinggi agar tekanan cairan infus lebih besar dari tekanan darah pasien.' },
        { label: '🚢 Hukum Archimedes', desc: 'Benda terapung bila massa jenis rata-ratanya lebih kecil dari massa jenis zat cair.' }
      ]
    },
    {
      title: '3. Tekanan Gas & Atmosfer',
      formula: '1 atm ≈ 76 cmHg ≈ 101.325 Pa',
      units: 'Alat ukur: Barometer (tekanan udara luar), Manometer (tekanan gas tertutup)',
      hook: 'Mengapa sedotan bisa memindahkan minuman ke dalam mulut kita?',
      explanation: 'Ketika mulut menyedot sedotan, udara di dalam sedotan dikeluarkan sehingga tekanannya turun (vakum parsial). Tekanan atmosfer luar yang lebih tinggi di atas permukaan gelas menekan cairan masuk dan naik ke atas sedotan.',
      examples: [
        { label: '🥤 Sedotan Minuman', desc: 'Perbedaan tekanan udara luar dan dalam sedotan yang mendorong air naik.' },
        { label: '🎈 Balon Udara Panas', desc: 'Udara panas memiliki massa jenis lebih renggang daripada udara dingin di sekitarnya.' },
        { label: '💉 Alat Suntik Medis', desc: 'Penarikan pengisap suntik menciptakan tekanan rendah di dalam tabung jarum.' }
      ]
    }
  ];

  const current = topics[activeSub];

  return (
    <div id="summary" className="bg-white rounded-3xl border border-[#E5E7F0] p-6 lg:p-10 shadow-sm">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF0FF] text-[#5C5EE6] text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Mode Rangkuman Kilat RuangGuru (&lt; 3 Menit)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141527]">
            Modul Intisari Materi Tekanan
          </h2>
          <p className="text-xs sm:text-sm text-[#686889] mt-1">
            Konsep inti kurikulum dirangkum dengan analogi keseharian yang mudah dipahami.
          </p>
        </div>

        {/* Subtopic tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {topics.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSub(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                activeSub === idx
                  ? 'bg-[#5C5EE6] text-white shadow-sm'
                  : 'bg-[#F8F9FD] text-[#686889] hover:text-[#141527] border border-[#E5E7F0]'
              }`}
            >
              {t.title.split('.')[1] || t.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left main explanation */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#F8F9FD] p-6 rounded-2xl border border-[#E5E7F0]">
            
            <div className="flex items-center gap-2 text-xs font-bold text-[#5C5EE6] uppercase tracking-wider mb-2">
              <Lightbulb className="w-4 h-4" />
              <span>Pertanyaan Pemantik:</span>
            </div>
            
            <h3 className="text-base sm:text-lg font-bold text-[#141527] mb-3">
              "{current.hook}"
            </h3>

            <p className="text-xs sm:text-sm text-[#373848] leading-relaxed mb-4">
              {current.explanation}
            </p>

            <div className="bg-white p-3.5 rounded-xl border border-[#E5E7F0]">
              <div className="text-[11px] font-bold text-[#686889] uppercase tracking-wider mb-1">Rumusan Matematis:</div>
              <div className="font-mono text-base font-bold text-[#5C5EE6]">{current.formula}</div>
              <div className="text-[11px] text-[#686889] mt-1">{current.units}</div>
            </div>

          </div>
        </div>

        {/* Right real-world application examples */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#373848] mb-2 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Aplikasi Nyata di Sekitar Kita:</span>
          </div>

          {current.examples.map((ex, i) => (
            <div key={i} className="bg-[#F8F9FD] p-4 rounded-xl border border-[#E5E7F0] hover:border-[#5C5EE6] transition">
              <div className="text-xs font-bold text-[#141527] mb-1">{ex.label}</div>
              <p className="text-xs text-[#686889] leading-relaxed">{ex.desc}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
