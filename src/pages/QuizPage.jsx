import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, CheckCircle, XCircle, RotateCcw, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

export default function QuizPage({ navigate }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAns, setSelectedAns] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions = [
    {
      question: 'Seorang pemain ski menggunakan papan ski yang lebar saat melintasi salju tebal. Mengapa ia tidak terperosok ke dalam salju?',
      options: [
        { text: 'Papan ski mengurangi massa tubuh pemain ski.', correct: false },
        { text: 'Luas permukaan papan ski yang besar memperkecil tekanan pada salju.', correct: true },
        { text: 'Salju memiliki gaya tolak gravitasi terhadap kayu atau plastik papan ski.', correct: false },
        { text: 'Gaya gesek papan ski menghilangkan tekanan ke bawah.', correct: false },
      ],
      explanation: 'Sesuai P = F/A, memperbesar luas bidang tekan (A) akan memperkecil tekanan (P) yang dialami permukaan salju, sehingga pemain ski tidak amblas.'
    },
    {
      question: 'Seorang penyelam menyelam di kedalaman 6 meter di laut (massa jenis air laut = 1.025 kg/m³, g = 10 m/s²). Berapakah tekanan hidrostatis yang dialami penyelam tersebut?',
      options: [
        { text: '6.150 Pa', correct: false },
        { text: '61.500 Pa (61,5 kPa)', correct: true },
        { text: '10.250 Pa', correct: false },
        { text: '600.000 Pa', correct: false },
      ],
      explanation: 'P = ρ · g · h = 1.025 kg/m³ · 10 m/s² · 6 m = 61.500 Pascal atau 61,5 kPa.'
    },
    {
      question: 'Dinding bendungan penahan air waduk selalu dibangun dengan ketebalan yang semakin ke bawah semakin tebal. Prinsip fisika apa yang mendasarinya?',
      options: [
        { text: 'Tekanan hidrostatis berbanding lurus dengan kedalaman air (P = ρgh), sehingga tekanan di dasar waduk paling besar.', correct: true },
        { text: 'Suhu air di dasar waduk lebih panas sehingga dinding mudah retak jika tidak tebal.', correct: false },
        { text: 'Ikan-ikan besar sering menabrak bagian bawah bendungan.', correct: false },
        { text: 'Untuk menghemat semen di bagian atas bendungan saja.', correct: false },
      ],
      explanation: 'Semakin dalam posisi air (h bertambah), tekanan hidrostatis semakin besar. Dinding bawah harus ekstra tebal untuk menahan gaya dorong air yang sangat kuat.'
    },
    {
      question: 'Pada dongkrak hidrolik mobil (Hukum Pascal), luas penampang pipa kecil A₁ = 10 cm² dan luas pipa besar A₂ = 200 cm². Jika pipa kecil ditekan dengan gaya 150 N, gaya angkat pada pipa besar adalah...',
      options: [
        { text: '1.500 N', correct: false },
        { text: '3.000 N', correct: true },
        { text: '15.000 N', correct: false },
        { text: '75 N', correct: false },
      ],
      explanation: 'F₂ = F₁ · (A₂ / A₁) = 150 N · (200 cm² / 10 cm²) = 150 N · 20 = 3.000 Newton.'
    },
    {
      question: 'Ketika kita menyedot minuman menggunakan sedotan, cairan dapat naik ke mulut karena...',
      options: [
        { text: 'Mulut menarik cairan seperti magnet alami.', correct: false },
        { text: 'Tekanan udara di dalam sedotan menjadi lebih rendah dibandingkan tekanan atmosfer di luar permukaan air.', correct: true },
        { text: 'Sedotan memiliki gaya kapilaritas yang sangat tinggi.', correct: false },
        { text: 'Massa jenis cairan berkurang saat disedot.', correct: false },
      ],
      explanation: 'Saat kita menyedot, tekanan udara di dalam sedotan turun. Tekanan atmosfer di luar gelas yang lebih tinggi mendorong cairan naik ke dalam sedotan menuju mulut.'
    }
  ];

  const handleAnswer = (index, isCorrect) => {
    if (isAnswered) return;
    setSelectedAns(index);
    setIsAnswered(true);

    if (isCorrect) {
      setScore((prev) => prev + 20);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
      setSelectedAns(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelectedAns(null);
    setScore(0);
    setIsAnswered(false);
    setQuizFinished(false);
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
            Kuis Tantangan HOTS
          </h1>
          <p className="text-xs sm:text-sm text-[#625F7A] mt-1">
            Uji pemahaman aplikatif tekanan fisika dalam kehidupan nyata dengan umpan balik instan.
          </p>
        </div>

        {/* Live Score Pill */}
        <div className="glass-pill px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-xs">
          <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-[#625F7A] font-bold uppercase tracking-wider">Skor Kamu</div>
            <div className="text-base font-extrabold text-[#14132B]">
              {score} <span className="text-xs text-[#625F7A] font-normal">/ 100</span>
            </div>
          </div>
        </div>
      </div>

      {!quizFinished ? (
        <div className="max-w-3xl mx-auto glass-panel rounded-3xl p-6 sm:p-8 shadow-xl">
          
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs font-semibold text-[#625F7A] mb-2">
              <span>Pertanyaan {currentQ + 1} dari {questions.length}</span>
              <span>{Math.round(((currentQ + 1) / questions.length) * 100)}% Selesai</span>
            </div>
            <div className="w-full h-2.5 bg-[#F4F2FB] rounded-full overflow-hidden border border-white">
              <div
                className="h-full bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] rounded-full transition-all duration-300"
                style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="bg-white/90 rounded-2xl border border-white p-6 mb-6 shadow-xs">
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F0EDFF] text-[#6C5CE7] mb-2">
              Kasus #{currentQ + 1}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-[#14132B] leading-relaxed">
              {questions[currentQ].question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {questions[currentQ].options.map((opt, idx) => {
              const isSelected = selectedAns === idx;
              let style = 'bg-white/80 border-white hover:bg-white hover:border-[#6C5CE7]/40 text-[#14132B]';

              if (isAnswered) {
                if (opt.correct) {
                  style = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold';
                } else if (isSelected && !opt.correct) {
                  style = 'bg-rose-50 border-rose-400 text-rose-900 line-through';
                } else {
                  style = 'bg-white/40 border-white/60 opacity-40 text-[#625F7A]';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx, opt.correct)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${style}`}
                >
                  <span className="text-xs sm:text-sm leading-relaxed">{opt.text}</span>
                  {isAnswered && opt.correct && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                  )}
                  {isAnswered && isSelected && !opt.correct && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Conceptual Explanation Box */}
          {isAnswered && (
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F0EDFF] border border-[#6C5CE7]/30 text-xs sm:text-sm text-[#14132B] mb-6 animate-fadeIn">
              <strong className="text-[#6C5CE7] block mb-1 font-bold">Pembahasan Konseptual:</strong>
              <p className="leading-relaxed text-[#373848]">{questions[currentQ].explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-full bg-[#6C5CE7] hover:bg-[#5A4AD1] text-white text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer shadow-md shadow-[#6C5CE7]/30 active:scale-98"
              >
                <span>{currentQ < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Quiz Finished View */
        <div className="max-w-xl mx-auto glass-panel rounded-3xl p-8 sm:p-10 text-center shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Trophy className="w-8 h-8" />
          </div>

          <h2 className="text-2xl font-extrabold text-[#14132B] mb-1">
            Kuis Tantangan Selesai!
          </h2>
          <p className="text-xs text-[#625F7A] mb-4">
            Kamu telah menyelesaikan seluruh asesmen formatif pemahaman konsep tekanan.
          </p>

          <div className="text-5xl font-black text-[#6C5CE7] my-3">
            {score}
          </div>
          <p className="text-xs font-semibold text-[#625F7A] mb-8">
            {score >= 80 ? 'Luar biasa! Pemahaman konsep fisikamu sangat matang.' : 'Bagus! Pelajari kembali materi kilat untuk menyempurnakan konsep.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={resetQuiz}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-white hover:bg-[#F4F2FB] text-[#14132B] text-xs font-bold border border-white transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Kuis</span>
            </button>

            <button
              onClick={() => navigate('summary')}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#6C5CE7] hover:bg-[#5A4AD1] text-white text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#6C5CE7]/30"
            >
              <BookOpen className="w-4 h-4" />
              <span>Baca Rangkuman Kilat</span>
            </button>
          </div>
        </div>
      )}

      {/* Next Step Banner */}
      <div className="glass-panel rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-[#14132B]">Ingin memperkuat memori konsep?</div>
            <div className="text-xs text-[#625F7A]">Buka rangkuman intisari berdurasi baca kurang dari 3 menit.</div>
          </div>
        </div>

        <button
          onClick={() => navigate('summary')}
          className="px-5 py-2.5 rounded-full bg-[#131127] hover:bg-[#201D3D] text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-sm active:scale-98"
        >
          <span>Buka Materi Kilat</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
