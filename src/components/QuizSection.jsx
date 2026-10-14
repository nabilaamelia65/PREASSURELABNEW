import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Trophy, CheckCircle, XCircle, RotateCcw, ArrowRight, Award } from 'lucide-react';

export default function QuizSection() {
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
    <div id="quiz" className="bg-white rounded-3xl border border-[#E5E7F0] p-6 lg:p-10 shadow-sm">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF0FF] text-[#5C5EE6] text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mode Tantangan Quizizz</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141527]">
            Kuis Tantangan HOTS Interaktif
          </h2>
          <p className="text-xs sm:text-sm text-[#686889] mt-1">
            Uji pemahaman konsep tekananmu melalui 5 soal studi kasus kehidupan sehari-hari.
          </p>
        </div>

        {/* Live Score Counter */}
        <div className="flex items-center gap-3">
          <div className="bg-[#F8F9FD] border border-[#E5E7F0] px-4 py-2 rounded-2xl flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <div>
              <div className="text-[10px] text-[#686889] font-bold uppercase">Skor Kamu</div>
              <div className="text-lg font-black text-[#141527]">{score} <span className="text-xs text-[#686889] font-normal">/ 100</span></div>
            </div>
          </div>
        </div>
      </div>

      {!quizFinished ? (
        <div className="max-w-3xl mx-auto">
          
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs font-semibold text-[#686889] mb-2">
              <span>Pertanyaan {currentQ + 1} dari {questions.length}</span>
              <span>{Math.round(((currentQ + 1) / questions.length) * 100)}% Selesai</span>
            </div>
            <div className="w-full h-2 bg-[#F0F1F5] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#5C5EE6] transition-all duration-300"
                style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Box */}
          <div className="bg-[#F8F9FD] rounded-2xl border border-[#E5E7F0] p-6 mb-6">
            <h3 className="text-base sm:text-lg font-bold text-[#141527] leading-snug">
              {questions[currentQ].question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-3 mb-6">
            {questions[currentQ].options.map((opt, idx) => {
              const isSelected = selectedAns === idx;
              let style = 'bg-white border-[#E5E7F0] hover:border-[#5C5EE6] hover:bg-[#EEF0FF]/40 text-[#373848]';

              if (isAnswered) {
                if (opt.correct) {
                  style = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold';
                } else if (isSelected && !opt.correct) {
                  style = 'bg-rose-50 border-rose-500 text-rose-900 line-through';
                } else {
                  style = 'bg-white border-[#E5E7F0] opacity-50 text-[#686889]';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx, opt.correct)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between cursor-pointer ${style}`}
                >
                  <span className="text-xs sm:text-sm">{opt.text}</span>
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

          {/* Explanation Box */}
          {isAnswered && (
            <div className="p-4 rounded-xl bg-[#EEF0FF] border border-[#5C5EE6]/30 text-xs text-[#373848] mb-6 animate-fadeIn">
              <strong className="text-[#5C5EE6] block mb-1">💡 Pembahasan Konseptual:</strong>
              {questions[currentQ].explanation}
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-full bg-[#5C5EE6] hover:bg-[#4B4DC7] text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>{currentQ < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Quiz Finished Result Screen */
        <div className="max-w-md mx-auto text-center py-8">
          <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mx-auto mb-4 shadow-sm">
            <Award className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-black text-[#141527] mb-1">
            {score >= 80 ? 'Luar Biasa, Calon Fisikawan! 🚀' : score >= 60 ? 'Bagus! Hampir Sempurna 👏' : 'Jangan Menyerah, Coba Lagi! 💪'}
          </h3>
          <p className="text-xs text-[#686889] mb-6">
            Kamu telah menyelesaikan 5 soal kuis diagnostik konsep tekanan.
          </p>

          <div className="bg-[#F8F9FD] rounded-2xl p-6 border border-[#E5E7F0] mb-6">
            <div className="text-xs text-[#686889] uppercase font-bold tracking-wider">Nilai Akhir</div>
            <div className="text-5xl font-black text-[#5C5EE6] my-2">{score}</div>
            <div className="text-xs text-[#373848]">
              {score >= 80 ? 'Kamu sudah bebas dari miskonsepsi umum materi tekanan!' : 'Pelajari kembali simulasi virtual untuk menguatkan konsep dasar.'}
            </div>
          </div>

          <button
            onClick={resetQuiz}
            className="px-6 py-3 rounded-full bg-[#141527] hover:bg-[#202138] text-white text-xs font-bold transition flex items-center gap-2 mx-auto cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ulangi Kuis</span>
          </button>
        </div>
      )}

    </div>
  );
}
