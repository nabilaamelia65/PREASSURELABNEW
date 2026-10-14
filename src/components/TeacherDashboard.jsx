import React from 'react';
import { BarChart3, Users, CheckCircle, AlertTriangle, Download, Sparkles } from 'lucide-react';

export default function TeacherDashboard() {
  const students = [
    { name: 'Ahmad Faiz', class: 'IX-A', progress: '100%', score: 95, status: 'Konsep Matang', tagColor: 'bg-emerald-100 text-emerald-800' },
    { name: 'Nabila Amelia', class: 'IX-A', progress: '100%', score: 100, status: 'Konsep Matang', tagColor: 'bg-emerald-100 text-emerald-800' },
    { name: 'Budi Santoso', class: 'IX-A', progress: '75%', score: 70, status: 'Miskonsepsi Hidrostatis', tagColor: 'bg-amber-100 text-amber-800' },
    { name: 'Siti Rahma', class: 'IX-A', progress: '85%', score: 80, status: 'Konsep Matang', tagColor: 'bg-emerald-100 text-emerald-800' },
    { name: 'Dion Pratama', class: 'IX-A', progress: '50%', score: 55, status: 'Miskonsepsi Luas Penampang', tagColor: 'bg-rose-100 text-rose-800' },
  ];

  return (
    <div id="teacher" className="bg-white rounded-3xl border border-[#E5E7F0] p-6 lg:p-10 shadow-sm">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF0FF] text-[#5C5EE6] text-xs font-bold mb-2">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Mode Guru &amp; Pemantau Kelas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141527]">
            Dashboard Monitoring Pemahaman Siswa
          </h2>
          <p className="text-xs sm:text-sm text-[#686889] mt-1">
            Data real-time tingkat penyerapan materi dan titik miskonsepsi per kelas.
          </p>
        </div>

        <button
          onClick={() => alert('Fitur ekspor laporan hasil asesmen diagnostik diunduh!')}
          className="px-4 py-2 rounded-xl bg-[#F8F9FD] border border-[#E5E7F0] text-xs font-bold text-[#141527] hover:bg-[#EEF0FF] hover:border-[#5C5EE6] transition flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <Download className="w-4 h-4 text-[#5C5EE6]" />
          <span>Ekspor Rekap Asesmen</span>
        </button>
      </div>

      {/* Analytics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        
        <div className="bg-[#F8F9FD] p-5 rounded-2xl border border-[#E5E7F0]">
          <div className="flex items-center justify-between text-[#686889] text-xs font-bold mb-2">
            <span>Rata-Rata Nilai HOTS</span>
            <Sparkles className="w-4 h-4 text-[#5C5EE6]" />
          </div>
          <div className="text-3xl font-black text-[#141527]">82.4</div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-1">↑ +18% setelah simulasi PhET</div>
        </div>

        <div className="bg-[#F8F9FD] p-5 rounded-2xl border border-[#E5E7F0]">
          <div className="flex items-center justify-between text-[#686889] text-xs font-bold mb-2">
            <span>Miskonsepsi Terselesaikan</span>
            <CheckCircle className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-3xl font-black text-emerald-600">89%</div>
          <div className="text-[11px] text-[#686889] font-medium mt-1">Siswa berhasil memperbaiki konsep</div>
        </div>

        <div className="bg-[#F8F9FD] p-5 rounded-2xl border border-[#E5E7F0]">
          <div className="flex items-center justify-between text-[#686889] text-xs font-bold mb-2">
            <span>Fokus Penguatan Kelas</span>
            <AlertTriangle className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-lg font-black text-amber-600 truncate">Hukum Pascal (Dongkrak)</div>
          <div className="text-[11px] text-[#686889] font-medium mt-1">11% siswa masih butuh latihan rasio luas</div>
        </div>

      </div>

      {/* Student List Table */}
      <div className="border border-[#E5E7F0] rounded-2xl overflow-hidden">
        <div className="px-5 py-4 bg-[#F8F9FD] border-b border-[#E5E7F0] font-bold text-xs text-[#141527] flex justify-between items-center">
          <span>Daftar Siswa Kelas IX-A (SMP Lab)</span>
          <span className="text-[#686889] font-normal">Total: 32 Siswa</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white text-[#686889] font-semibold border-b border-[#E5E7F0]">
              <tr>
                <th className="px-5 py-3">Nama Siswa</th>
                <th className="px-5 py-3">Kelas</th>
                <th className="px-5 py-3">Progres Lab</th>
                <th className="px-5 py-3">Skor Kuis</th>
                <th className="px-5 py-3">Status Diagnostik</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7F0] bg-white">
              {students.map((s, idx) => (
                <tr key={idx} className="hover:bg-[#F8F9FD] transition">
                  <td className="px-5 py-3.5 font-bold text-[#141527]">{s.name}</td>
                  <td className="px-5 py-3.5 text-[#686889]">{s.class}</td>
                  <td className="px-5 py-3.5 font-mono text-[#5C5EE6]">{s.progress}</td>
                  <td className="px-5 py-3.5 font-bold text-[#141527]">{s.score}</td>
                  <td className="px-5 py-3.5">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${s.tagColor}`}>
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
