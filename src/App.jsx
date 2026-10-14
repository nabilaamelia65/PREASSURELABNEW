import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SimulationSolid from './components/SimulationSolid';
import SimulationFluid from './components/SimulationFluid';
import SimulationPascal from './components/SimulationPascal';
import MisconceptionDetector from './components/MisconceptionDetector';
import QuizSection from './components/QuizSection';
import FlashSummary from './components/FlashSummary';
import TeacherDashboard from './components/TeacherDashboard';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { Layers, Waves, Truck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('lab');
  const [activeLabMode, setActiveLabMode] = useState('solid'); // 'solid' | 'fluid' | 'pascal'

  const scrollToLab = () => {
    setActiveTab('lab');
    const el = document.getElementById('lab');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FD] text-[#141527] flex flex-col font-sans selection:bg-[#5C5EE6] selection:text-white">
      {/* Top Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Container */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20 w-full">
        
        {/* 1. Hero Section */}
        <Hero onStartDemo={scrollToLab} />

        {/* 2. Interactive Simulation Lab (PhET Mode) */}
        <section id="lab" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF0FF] text-[#5C5EE6] text-xs font-bold mb-2">
                <span>🧪 Laboratorium Virtual (Mode PhET)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141527]">
                Pusat Simulasi Interaktif
              </h2>
              <p className="text-xs sm:text-sm text-[#686889] mt-1">
                Pilih topik praktikum virtual di bawah ini dan manipulasi variabelnya secara langsung.
              </p>
            </div>

            {/* Lab Mode Switcher Buttons */}
            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-[#E5E7F0] shadow-xs overflow-x-auto">
              <button
                onClick={() => setActiveLabMode('solid')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  activeLabMode === 'solid'
                    ? 'bg-[#5C5EE6] text-white shadow-sm'
                    : 'text-[#686889] hover:text-[#141527] hover:bg-[#F0F1F5]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Tekanan Zat Padat</span>
              </button>

              <button
                onClick={() => setActiveLabMode('fluid')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  activeLabMode === 'fluid'
                    ? 'bg-[#5C5EE6] text-white shadow-sm'
                    : 'text-[#686889] hover:text-[#141527] hover:bg-[#F0F1F5]'
                }`}
              >
                <Waves className="w-3.5 h-3.5" />
                <span>Tekanan Hidrostatis</span>
              </button>

              <button
                onClick={() => setActiveLabMode('pascal')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  activeLabMode === 'pascal'
                    ? 'bg-[#5C5EE6] text-white shadow-sm'
                    : 'text-[#686889] hover:text-[#141527] hover:bg-[#F0F1F5]'
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                <span>Hukum Pascal</span>
              </button>
            </div>
          </div>

          {/* Render Active Simulation */}
          <div className="transition-all duration-300">
            {activeLabMode === 'solid' && <SimulationSolid />}
            {activeLabMode === 'fluid' && <SimulationFluid />}
            {activeLabMode === 'pascal' && <SimulationPascal />}
          </div>
        </section>

        {/* 3. Misconception Detector (Dark Container Section inspired by reference mockup) */}
        <MisconceptionDetector />

        {/* 4. Gamified Quiz Section (Quizizz Mode) */}
        <QuizSection />

        {/* 5. Flash Summary (RuangGuru Mode) */}
        <FlashSummary />

        {/* 6. Teacher Dashboard Preview */}
        <TeacherDashboard />

        {/* 7. Pricing & School Licensing Section */}
        <Pricing />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
