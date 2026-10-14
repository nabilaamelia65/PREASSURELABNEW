import React, { useState } from 'react';
import { Layers, Waves, Truck, ArrowLeft, ArrowRight, BrainCircuit } from 'lucide-react';
import SimulationSolid from '../components/SimulationSolid';
import SimulationFluid from '../components/SimulationFluid';
import SimulationPascal from '../components/SimulationPascal';

export default function LabPage({ navigate }) {
  const [activeLabMode, setActiveLabMode] = useState('solid'); // 'solid' | 'fluid' | 'pascal'

  return (
    <div className="space-y-8 pb-12">
      
      {/* Top Header & Breadcrumb */}
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
            Laboratorium Fisika Interaktif
          </h1>
          <p className="text-xs sm:text-sm text-[#625F7A] mt-1">
            Manipulasi variabel gaya, luas penampang, massa jenis fluida, dan dongkrak hidrolik secara langsung.
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="glass-panel p-1.5 rounded-2xl flex items-center gap-1.5 overflow-x-auto shadow-sm">
          <button
            onClick={() => setActiveLabMode('solid')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeLabMode === 'solid'
                ? 'bg-[#6C5CE7] text-white shadow-sm'
                : 'text-[#625F7A] hover:text-[#14132B] hover:bg-white/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Zat Padat</span>
          </button>

          <button
            onClick={() => setActiveLabMode('fluid')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeLabMode === 'fluid'
                ? 'bg-[#6C5CE7] text-white shadow-sm'
                : 'text-[#625F7A] hover:text-[#14132B] hover:bg-white/60'
            }`}
          >
            <Waves className="w-3.5 h-3.5" />
            <span>Hidrostatis</span>
          </button>

          <button
            onClick={() => setActiveLabMode('pascal')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeLabMode === 'pascal'
                ? 'bg-[#6C5CE7] text-white shadow-sm'
                : 'text-[#625F7A] hover:text-[#14132B] hover:bg-white/60'
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Hukum Pascal</span>
          </button>
        </div>
      </div>

      {/* Active Simulation View */}
      <div className="transition-all duration-300">
        {activeLabMode === 'solid' && <SimulationSolid />}
        {activeLabMode === 'fluid' && <SimulationFluid />}
        {activeLabMode === 'pascal' && <SimulationPascal />}
      </div>

      {/* Next Step / Guidance Banner */}
      <div className="glass-panel rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-2xl bg-[#6C5CE7]/10 text-[#6C5CE7] flex items-center justify-center font-bold shrink-0">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-[#14132B]">Sudah paham pola rumusnya?</div>
            <div className="text-xs text-[#625F7A]">Uji apakah kamu terjebak di miskonsepsi umum fisika pada modul berikutnya.</div>
          </div>
        </div>

        <button
          onClick={() => navigate('detector')}
          className="px-5 py-2.5 rounded-full bg-[#131127] hover:bg-[#201D3D] text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-sm active:scale-98"
        >
          <span>Lanjut ke Detektor Miskonsepsi</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
