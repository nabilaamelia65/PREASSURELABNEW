import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, ArrowLeft, ArrowRight, Sparkles, Lightbulb } from 'lucide-react';

export default function DetectorPage({ navigate }) {
  const [selectedCase, setSelectedCase] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const cases = [
    {
      id: 1,
      topic: 'Tekanan Zat Padat',
      title: 'Miskonsepsi: Massa Benda vs Tekanan',
      scenario: 'Dua buah balok A dan B memiliki massa yang sama persis (10 kg). Balok A diletakkan dengan posisi berdiri tegak (luas alas 5 cm²), sedangkan Balok B diletakkan mendatar (luas alas 50 cm²). Manakah pernyataan yang paling tepat mengenai tekanan pada lantai?',
      options: [
        {
          id: 'A',
          text: 'Tekanan Balok A dan Balok B sama persis, karena berat kedua balok sama (10 kg).',
          isMisconception: true,
          feedback: 'Miskonsepsi Klasik Terdeteksi! 🚨',
          explanation: 'Banyak siswa mengira tekanan HANYA dipengaruhi oleh berat benda. Padahal rumusnya adalah P = F / A. Karena luas alas Balok A (5 cm²) 10x lebih kecil dari Balok B (50 cm²), maka Balok A menghasilkan tekanan 10 KALI LEBIH BESAR pada lantai!'
        },
        {
          id: 'B',
          text: 'Balok A menghasilkan tekanan lebih besar karena luas bidang tekannya jauh lebih kecil.',
          isMisconception: false,
          feedback: 'Analisis Sempurna! 🎯',
          explanation: 'Tepat sekali! Gaya tekan (F) kedua balok memang sama, tetapi Balok A menumpukan gaya tersebut pada permukaan yang sempit, sehingga konsentrasi tekanannya jauh lebih tinggi.'
        },
        {
          id: 'C',
          text: 'Balok B menghasilkan tekanan lebih besar karena menyentuh lantai lebih luas.',
          isMisconception: true,
          feedback: 'Salah Arah Pemahaman! ⚠️',
          explanation: 'Menyentuh lantai lebih luas justru membagi beban ke area yang lebih lebar, sehingga tekanannya menjadi LEBIH KECIL, bukan lebih besar!'
        }
      ]
    },
    {
      id: 2,
      topic: 'Tekanan Hidrostatis',
      title: 'Miskonsepsi: Bentuk Wadah vs Kedalaman Air',
      scenario: 'Terdapat dua kolam air: Kolam 1 adalah kolam renang olimpiade yang sangat luas dengan kedalaman 2 meter. Kolam 2 adalah pipa vertikal sempit dengan kedalaman air 5 meter. Manakah titik dasar yang memiliki tekanan air paling besar?',
      options: [
        {
          id: 'A',
          text: 'Dasar Kolam 1 lebih besar tekanannya karena volume air kolam olimpiade jauh lebih banyak berton-ton.',
          isMisconception: true,
          feedback: 'Miskonsepsi Volume Terdeteksi! 🚨',
          explanation: 'Ini jebakan yang paling sering dialami siswa SMP! Tekanan hidrostatis (P = ρ·g·h) TIDAK BERGANTUNG pada volume atau luas kolam, melainkan HANYA bergantung pada massa jenis zat cair (ρ) dan kedalaman (h). Pipa 5 meter memiliki kedalaman lebih tinggi, sehingga tekanannya lebih besar!'
        },
        {
          id: 'B',
          text: 'Dasar Kolam 2 lebih besar tekanannya karena kedalamannya lebih tinggi (5 meter vs 2 meter).',
          isMisconception: false,
          feedback: 'Pemahaman Konsep Sangat Kuat! 🎯',
          explanation: 'Benar sekali! Tekanan hidrostatis murni dipengaruhi oleh kedalaman fluida (h), bukan bentuk wadah atau banyaknya galon air di dalam wadah tersebut.'
        },
        {
          id: 'C',
          text: 'Kedua kolam memiliki tekanan yang sama karena sama-sama berisi air tawar.',
          isMisconception: true,
          feedback: 'Variabel Kedalaman Terlupakan! ⚠️',
          explanation: 'Massa jenisnya memang sama, tetapi kedalamannya berbeda (5m vs 2m). Kedalaman yang lebih besar menghasilkan kolom air penekan yang lebih tinggi!'
        }
      ]
    },
    {
      id: 3,
      topic: 'Hukum Archimedes',
      title: 'Miskonsepsi: Benda Berat Selalu Tenggelam',
      scenario: 'Mengapa sebutir jarum kecil berbahan besi seberat 1 gram tenggelam ke dasar laut, sedangkan kapal pesiar raksasa bermassa 50.000 ton bisa mengapung di lautan?',
      options: [
        {
          id: 'A',
          text: 'Jarum tenggelam karena besi memiliki sifat alami tidak bisa mengapung di air.',
          isMisconception: true,
          feedback: 'Miskonsepsi Sifat Bahan! 🚨',
          explanation: 'Kapal pesiar juga terbuat dari besi dan baja! Yang menentukan mengapung atau tenggelam bukan bahan murni, tetapi massa jenis rata-rata total benda (massa total dibagi volume total).'
        },
        {
          id: 'B',
          text: 'Kapal pesiar memiliki rongga udara raksasa di lambungnya sehingga massa jenis totalnya lebih kecil dari air laut.',
          isMisconception: false,
          feedback: 'Logika Ilmiah Brilian! 🎯',
          explanation: 'Tepat sekali! Lambung kapal memiliki rongga udara yang membuat volume kapal menjadi sangat besar. Akibatnya, gaya apung ke atas (Fa) yang dihasilkan sama dengan berat air yang dipindahkan, melebihi berat kapal itu sendiri.'
        },
        {
          id: 'C',
          text: 'Laut memiliki garam yang hanya bisa menahan benda berukuran raksasa.',
          isMisconception: true,
          feedback: 'Miskonsepsi Fisika! ⚠️',
          explanation: 'Kadar garam menaikkan massa jenis air laut, tapi hukum Archimedes berlaku sama untuk semua ukuran benda, baik kecil maupun raksasa.'
        }
      ]
    }
  ];

  const current = cases[selectedCase];

  const handleSelect = (idx) => {
    setSelectedOption(idx);
    setShowExplanation(true);
  };

  const handleNextCase = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setSelectedCase((prev) => (prev + 1) % cases.length);
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Top Header & Breadcrumbs */}
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
            Detektor Miskonsepsi Fisika
          </h1>
          <p className="text-xs sm:text-sm text-[#625F7A] mt-1">
            Engine diagnostik untuk mengungkap kekeliruan pemikiran umum tentang tekanan dan solusinya.
          </p>
        </div>

        {/* Case selector tabs */}
        <div className="glass-panel p-1.5 rounded-2xl flex items-center gap-1.5 shadow-sm">
          {cases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCase(i);
                setSelectedOption(null);
                setShowExplanation(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                selectedCase === i
                  ? 'bg-[#131127] text-white shadow-sm'
                  : 'text-[#625F7A] hover:text-[#14132B] hover:bg-white/60'
              }`}
            >
              Kasus {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Dark Card Stage (Refined from reference image dark container) */}
      <div className="dark-glass-card rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl">
        
        {/* Glow orb */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#6C5CE7]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#6C5CE7] text-white">
                {current.topic}
              </span>
              <span className="text-xs text-purple-200">
                Studi Kasus {selectedCase + 1} dari {cases.length}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-purple-200 font-medium">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Pilih satu opsi jawaban untuk verifikasi</span>
            </div>
          </div>

          {/* Scenario Text */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
              {current.scenario}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3 pt-2">
            {current.options.map((opt, idx) => {
              const isChosen = selectedOption === idx;
              let borderStyle = 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30';
              if (isChosen) {
                borderStyle = opt.isMisconception
                  ? 'border-rose-400 bg-rose-500/20 text-rose-100'
                  : 'border-emerald-400 bg-emerald-500/20 text-emerald-100';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-4 cursor-pointer ${borderStyle}`}
                >
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5 ${
                    isChosen
                      ? opt.isMisconception ? 'bg-rose-500 text-white' : 'bg-emerald-500 text-white'
                      : 'bg-white/15 text-white'
                  }`}>
                    {opt.id}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {showExplanation && selectedOption !== null && (
            <div className={`p-5 sm:p-6 rounded-2xl border transition-all animate-fadeIn ${
              current.options[selectedOption].isMisconception
                ? 'bg-rose-950/50 border-rose-500/40 text-rose-100'
                : 'bg-emerald-950/50 border-emerald-500/40 text-emerald-100'
            }`}>
              <div className="flex items-center gap-2 font-bold text-sm sm:text-base mb-2">
                {current.options[selectedOption].isMisconception ? (
                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                )}
                <span>{current.options[selectedOption].feedback}</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
                {current.options[selectedOption].explanation}
              </p>
            </div>
          )}

          {/* Action Row */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setSelectedOption(null);
                setShowExplanation(false);
              }}
              className="text-xs text-purple-200 hover:text-white transition font-medium cursor-pointer"
            >
              Reset Jawaban
            </button>

            <button
              onClick={handleNextCase}
              className="px-6 py-3 rounded-full bg-[#6C5CE7] hover:bg-[#5A4AD1] text-white text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer shadow-md shadow-[#6C5CE7]/30 active:scale-98"
            >
              <span>Uji Kasus Berikutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Next Step Banner */}
      <div className="glass-panel rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-2xl bg-[#6C5CE7]/10 text-[#6C5CE7] flex items-center justify-center font-bold shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-[#14132B]">Siap uji pemahaman secara komprehensif?</div>
            <div className="text-xs text-[#625F7A]">Jawab 5 soal tantangan HOTS berhadiah confetti di Kuis Gamifikasi.</div>
          </div>
        </div>

        <button
          onClick={() => navigate('quiz')}
          className="px-5 py-2.5 rounded-full bg-[#131127] hover:bg-[#201D3D] text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-sm active:scale-98"
        >
          <span>Masuk ke Kuis Tantangan</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
