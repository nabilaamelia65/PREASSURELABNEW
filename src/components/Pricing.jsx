import React from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Siswa Mandiri',
      price: 'Rp 0',
      period: '/ selamanya',
      desc: 'Akses penuh ke simulasi laboratorium interaktif dasar.',
      features: [
        'Akses 3 Lab Simulasi Utama',
        'Kuis HOTS Format Evaluasi Mandiri',
        'Detektor Miskonsepsi Instan',
        'Rangkuman Intisari Materi'
      ],
      cta: 'Mulai Belajar Gratis',
      popular: false,
      btnStyle: 'bg-white border border-[#E5E7F0] text-[#141527] hover:bg-[#F0F1F5]'
    },
    {
      name: 'Guru Pro',
      price: 'Rp 35.000',
      period: '/ bulan',
      desc: 'Bagi guru IPA yang ingin menggunakan proyektor kelas dan bank soal tak terbatas.',
      features: [
        'Semua fitur Siswa Mandiri',
        'Mode Presentasi Proyektor Tanpa Batas',
        'Akses Pembuat Soal AI Studio Generator',
        'Ekspor PDF Lembar Kerja Siswa (LKPD)',
        'Dukungan Prioritas Guru IPA'
      ],
      cta: 'Coba Guru Pro',
      popular: true,
      btnStyle: 'bg-[#5C5EE6] text-white hover:bg-[#4B4DC7] shadow-md shadow-[#5C5EE6]/25'
    },
    {
      name: 'Lisensi Sekolah / Bimbel',
      price: 'Rp 350.000',
      period: '/ sekolah / tahun',
      desc: 'Paket institusi untuk seluruh rombel kelas dengan dashboard analitik terpadu.',
      features: [
        'Semua fitur Guru Pro',
        'Dashboard Pemantau Analitik Semua Kelas',
        'Akun Multi-Guru & Ratusan Siswa',
        'Pelatihan / Workshop Penggunaan Platform',
        'Laporan Diagnostik Ketercapaian Kurikulum'
      ],
      cta: 'Hubungi Kemitraan Sekolah',
      popular: false,
      btnStyle: 'bg-[#141527] text-white hover:bg-[#202138]'
    }
  ];

  return (
    <div id="pricing" className="py-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141527]">
          Pilihan Paket &amp; Lisensi Pembelajaran
        </h2>
        <p className="text-xs sm:text-sm text-[#686889] mt-2">
          Model freemium ramah kantong siswa sekolah, didukung paket lisensi lengkap untuk sekolah dan bimbel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((p, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-6 sm:p-8 border transition-all relative flex flex-col justify-between ${
              p.popular
                ? 'bg-white border-[#5C5EE6] shadow-xl shadow-[#5C5EE6]/10 ring-2 ring-[#5C5EE6]/20'
                : 'bg-white border-[#E5E7F0] shadow-sm'
            }`}
          >
            {p.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#5C5EE6] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Pilihan Terfavorit
              </div>
            )}

            <div>
              <h3 className="font-bold text-lg text-[#141527] mb-1">{p.name}</h3>
              <p className="text-xs text-[#686889] mb-5 min-h-[32px]">{p.desc}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-black text-[#141527]">{p.price}</span>
                <span className="text-xs text-[#686889]">{p.period}</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#E5E7F0] mb-8">
                {p.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#373848]">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => alert(`Anda memilih paket ${p.name}`)}
              className={`w-full py-3 rounded-full text-xs font-bold transition cursor-pointer text-center ${p.btnStyle}`}
            >
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
