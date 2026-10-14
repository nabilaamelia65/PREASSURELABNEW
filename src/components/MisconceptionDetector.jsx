import React, { useState } from 'react';
import { BrainCircuit, AlertTriangle, CheckCircle, HelpCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function MisconceptionDetector() {
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
    <div id="detector" className="bg-[#141527] text-white rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden shadow-xl">
      
      {/* Background glow orb */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#5C5EE6]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5C5EE6]/20 text-[#38BDF8] text-xs font-bold border border-[#38BDF8]/30 mb-2">
              <BrainCircuit className="w-4 h-4 text-[#38BDF8]" />
              <span>AI Misconception Diagnostic Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Pendeteksi Miskonsepsi Fisika
            </h2>
            <p className="text-xs sm:text-sm text-[#A8ACC1] mt-1 max-w-xl">
              Sistem diagnostik yang mendeteksi pola salah paham siswa dan memberikan pembetulan konsep seketika.
            </p>
          </div>

          {/* Case switcher tabs */}
          <div className="flex items-center gap-1.5 bg-[#202138] p-1.5 rounded-2xl border border-white/10 overflow-x-auto">
            {cases.map((c, i) => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCase(i);
                  setSelectedOption(null);
                  setShowExplanation(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedCase === i
                    ? 'bg-[#5C5EE6] text-white shadow-sm'
                    : 'text-[#A8ACC1] hover:text-white hover:bg-white/5'
                }`}
              >
                Kasus {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Diagnostic Card Frame */}
        <div className="bg-[#202138] rounded-2xl border border-white/10 p-6 sm:p-8">
          
          <div className="flex items-center justify-between text-xs text-[#38BDF8] font-semibold mb-3">
            <span>Kategori: {current.topic}</span>
            <span>Kasus {selectedCase + 1} dari {cases.length}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
            {current.scenario}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {current.options.map((opt, idx) => {
              const isChosen = selectedOption === idx;
              let borderStyle = 'border-white/10 bg-[#141527]/60 hover:bg-[#141527] hover:border-[#5C5EE6]/50';
              if (isChosen) {
                borderStyle = opt.isMisconception
                  ? 'border-amber-500 bg-amber-500/10'
                  : 'border-emerald-500 bg-emerald-500/10';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer ${borderStyle}`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    isChosen
                      ? opt.isMisconception ? 'bg-amber-500 text-black' : 'bg-emerald-500 text-black'
                      : 'bg-white/10 text-white'
                  }`}>
                    {opt.id}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Diagnostic Result Box */}
          {showExplanation && selectedOption !== null && (
            <div className={`p-5 rounded-2xl border transition-all animate-fadeIn ${
              current.options[selectedOption].isMisconception
                ? 'bg-amber-950/40 border-amber-500/50 text-amber-200'
                : 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
            }`}>
              <div className="flex items-center gap-2 font-bold text-sm mb-2">
                {current.options[selectedOption].isMisconception ? (
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                )}
                <span>{current.options[selectedOption].feedback}</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
                {current.options[selectedOption].explanation}
              </p>
            </div>
          )}

          {/* Next Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNextCase}
              className="px-5 py-2.5 rounded-full bg-[#5C5EE6] hover:bg-[#4B4DC7] text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Uji Kasus Miskonsepsi Lainnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
