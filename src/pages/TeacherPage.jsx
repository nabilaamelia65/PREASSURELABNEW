import React from 'react';
import { Users, CheckCircle, Download, Sparkles, ArrowLeft, ArrowRight, FlaskConical } from 'lucide-react';

export default function TeacherPage({ navigate }) {
  const students = [
    { name: 'Ahmad Faiz', class: 'IX-A', progress: '100%', score: 95, status: 'Konsep Matang', tagColor: 'bg-emerald-100 text-emerald-800' },
    { name: 'Nabila Amelia', class: 'IX-A', progress: '100%', score: 100, status: 'Konsep Matang', tagColor: 'bg-emerald-100 text-emerald-800' },
    { name: 'Budi Santoso', class: 'IX-A', progress: '75%', score: 70, status: 'Miskonsepsi Hidrostatis', tagColor: 'bg-amber-100 text-amber-800' },
    { name: 'Siti Rahma', class: 'IX-A', progress: '85%', score: 80, status: 'Konsep Matang', tagColor: 'bg-emerald-100 text-emerald-800' },
    { name: 'Dion Pratama', class: 'IX-A', progress: '50%', score: 55, status: 'Miskonsepsi Luas Penampang', tagColor: 'bg-rose-100 text-rose-800' },
  ];

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
            Dashboard Monitoring Guru
          </h1>
          <p className="text-xs sm:text-sm text-[#625F7A] mt-1">
            Data analitik pemahaman konsep tekanan fisika dan rekap miskonsepsi per kelas.
          </p>
        </div>

        <button
          onClick={() => alert('Laporan asesmen diagnostik kelas IX-A berhasil diunduh.')}
          className="px-5 py-2.5 rounded-full bg-[#131127] hover:bg-[#201D3D] text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-sm active:scale-98"
        >
          <Download className="w-4 h-4 text-[#A29BFE]" />
          <span>Ekspor Rekap Asesmen</span>
        </button>
      </div>

      {/* Analytics KPI Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="glass-panel p-5 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between text-[#625F7A] text-xs font-bold mb-2">
            <span>Rata-Rata Nilai HOTS</span>
            <Sparkles className="w-4 h-4 text-[#6C5CE7]" />
          </div>
          <div className="text-3xl font-black text-[#14132B]">82.4</div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-1">Naik +18% pasca simulasi PhET</div>
        </div>

        <div className="glass-panel p-5 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between text-[#625F7A] text-xs font-bold mb-2">
            <span>Resolusi Miskonsepsi</span>
            <CheckCircle className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-3xl font-black text-[#14132B]">88%</div>
          <div className="text-[11px] text-[#625F7A] font-semibold mt-1">Dari 3 kasus jebakan konsep</div>
        </div>

        <div className="glass-panel p-5 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between text-[#625F7A] text-xs font-bold mb-2">
            <span>Total Siswa Terdata</span>
            <Users className="w-4 h-4 text-[#6C5CE7]" />
          </div>
          <div className="text-3xl font-black text-[#14132B]">32 Siswa</div>
          <div className="text-[11px] text-[#625F7A] font-semibold mt-1">Kelas IX-A Kurikulum Merdeka</div>
        </div>

      </div>

      {/* Student Table */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#14132B]">
            Daftar Rekap Nilai Siswa
          </h2>
          <span className="text-xs text-[#625F7A] font-medium">Asesmen Formatif Bab Tekanan</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/80 text-[11px] font-bold text-[#625F7A] uppercase tracking-wider">
                <th className="pb-3 px-3">Nama Siswa</th>
                <th className="pb-3 px-3">Kelas</th>
                <th className="pb-3 px-3">Progres Lab</th>
                <th className="pb-3 px-3">Skor Kuis</th>
                <th className="pb-3 px-3">Status Diagnostik</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/60">
              {students.map((s, idx) => (
                <tr key={idx} className="hover:bg-white/40 transition">
                  <td className="py-3.5 px-3 font-bold text-[#14132B]">{s.name}</td>
                  <td className="py-3.5 px-3 text-[#625F7A]">{s.class}</td>
                  <td className="py-3.5 px-3 font-mono font-bold text-[#6C5CE7]">{s.progress}</td>
                  <td className="py-3.5 px-3 font-bold text-[#14132B]">{s.score}</td>
                  <td className="py-3.5 px-3">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold ${s.tagColor}`}>
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Return to Lab Banner */}
      <div className="glass-panel rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-2xl bg-[#6C5CE7]/10 text-[#6C5CE7] flex items-center justify-center font-bold shrink-0">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-[#14132B]">Ingin mendemonstrasikan simulasi di proyektor kelas?</div>
            <div className="text-xs text-[#625F7A]">Buka Lab Simulasi untuk mode praktikum langsung di depan murid.</div>
          </div>
        </div>

        <button
          onClick={() => navigate('lab')}
          className="px-5 py-2.5 rounded-full bg-[#6C5CE7] hover:bg-[#5A4AD1] text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-md shadow-[#6C5CE7]/30 active:scale-98"
        >
          <span>Buka Lab Virtual</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
