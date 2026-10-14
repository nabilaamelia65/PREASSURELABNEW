import React, { useState } from 'react';
import { Truck, ArrowDown, ArrowUp, Gauge, Info } from 'lucide-react';

export default function SimulationPascal() {
  const [inputForce, setInputForce] = useState(250); // N pada piston 1
  const [areaRatio, setAreaRatio] = useState(25); // Piston 2 is 25x larger than Piston 1

  // Area Piston 1 = 10 cm^2 = 0.001 m^2
  const _area1 = 0.001; 
  const _area2 = _area1 * areaRatio; // 0.025 m^2

  // By Pascal's principle: P1 = P2 -> F1 / A1 = F2 / A2 -> F2 = F1 * (A2 / A1)
  const outputForce = inputForce * areaRatio; // Newton
  const liftedMassKg = Math.round(outputForce / 9.8); // kg

  // Piston movement calculations
  // If Piston 1 moves down by d1, Piston 2 moves up by d2 = d1 / ratio (conservation of liquid volume)
  const piston1Down = Math.min(60, (inputForce / 500) * 50);
  const piston2Up = piston1Down / (areaRatio / 5);

  return (
    <div className="bg-white rounded-3xl border border-[#E5E7F0] p-6 lg:p-8 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Controls Column */}
        <div className="w-full lg:w-5/12 space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EDFF] text-[#6C5CE7] text-xs font-bold mb-2">
              <Truck className="w-3.5 h-3.5" />
              <span>Simulasi 3: Hukum Pascal</span>
            </div>
            <h3 className="text-xl font-bold text-[#141527]">
              Dongkrak Hidrolik Pengangkat Beban
            </h3>
            <p className="text-xs text-[#686889] mt-1">
              Hukum Pascal menyatakan bahwa tekanan yang diberikan pada zat cair dalam ruang tertutup akan diteruskan ke segala arah dengan sama besar.
            </p>
          </div>

          {/* Sliders */}
          <div className="space-y-4 bg-[#F8F9FD] p-4 rounded-2xl border border-[#E5E7F0]">
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-[#141527] mb-1.5">
                <span>Gaya Input Tekan (F₁):</span>
                <span className="font-mono text-[#6C5CE7] text-sm bg-white px-2 py-0.5 rounded border border-[#E5E7F0]">
                  {inputForce} N (~{(inputForce / 9.8).toFixed(1)} kg)
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="25"
                value={inputForce}
                onChange={(e) => setInputForce(Number(e.target.value))}
                className="w-full accent-[#6C5CE7] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#686889] mt-1">
                <span>Tenaga Tangan (50 N)</span>
                <span>Tenaga Kaki (500 N)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-bold text-[#141527] mb-1.5">
                <span>Perbandingan Luas Piston (A₂ / A₁):</span>
                <span className="font-mono text-[#6C5CE7] text-sm bg-white px-2 py-0.5 rounded border border-[#E5E7F0]">
                  {areaRatio}&times; Lipat Lebih Besar
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={areaRatio}
                onChange={(e) => setAreaRatio(Number(e.target.value))}
                className="w-full accent-[#6C5CE7] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#686889] mt-1">
                <span>Kecil (5&times;)</span>
                <span>Sedang (25&times;)</span>
                <span>Sangat Besar (50&times;)</span>
              </div>
            </div>
          </div>

          {/* Formula Card */}
          <div className="bg-[#141527] text-white p-4 rounded-2xl">
            <div className="text-[11px] font-semibold text-[#38BDF8] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5" />
              <span>Prinsip Pascal (P₁ = P₂):</span>
            </div>
            <div className="font-mono text-xs text-[#A8ACC1] mt-2">
              F₂ = F₁ &times; (A₂ / A₁) = {inputForce} N &times; {areaRatio}
            </div>
            <div className="mt-2 text-2xl font-extrabold text-[#10B981] flex items-baseline gap-2">
              <span>{outputForce.toLocaleString()} N</span>
              <span className="text-xs text-white/80 font-normal">
                (Setara Mengangkat Beban {liftedMassKg.toLocaleString()} kg!)
              </span>
            </div>
            <div className="mt-2 text-xs text-[#A8ACC1]">
              Hanya dengan gaya <span className="text-white font-bold">{inputForce} N</span>, kamu bisa mengangkat mobil seberat <span className="text-[#10B981] font-bold">{liftedMassKg} kg</span>!
            </div>
          </div>
        </div>

        {/* Visual Hydraulic U-Tube Column */}
        <div className="w-full lg:w-7/12 flex flex-col items-center">
          <div className="w-full bg-[#F0F1F5] rounded-2xl p-6 border border-[#E5E7F0] relative overflow-hidden flex flex-col justify-end min-h-[440px]">
            
            <div className="absolute top-4 left-4 text-xs font-semibold text-[#686889]">
              Visual Sistem Hidrolik Bejana Berhubungan (U-Tube)
            </div>

            {/* Stage */}
            <div className="relative w-full h-[320px] flex items-end justify-center">
              
              {/* Piston 1 (Small) Container */}
              <div className="w-1/4 h-64 bg-slate-200 border-x-4 border-slate-400 relative flex flex-col justify-end overflow-hidden">
                {/* Fluid in Piston 1 */}
                <div 
                  className="w-full bg-blue-500 transition-all duration-300 relative"
                  style={{ height: `${120 - piston1Down}px` }}
                >
                  {/* Piston Rod 1 */}
                  <div className="absolute -top-6 left-0 right-0 h-6 bg-slate-700 border-t-2 border-slate-900 flex items-center justify-center">
                    <span className="text-[9px] text-white font-mono">A₁</span>
                  </div>
                </div>

                {/* Force 1 push indicator */}
                <div 
                  className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-300"
                  style={{ top: `${110 + piston1Down}px` }}
                >
                  <ArrowDown className="w-5 h-5 text-red-500 animate-bounce" />
                  <span className="text-[10px] font-bold text-red-600 bg-white px-1.5 rounded shadow-xs">
                    {inputForce} N
                  </span>
                </div>
              </div>

              {/* Connecting pipe at bottom */}
              <div className="w-1/4 h-16 bg-blue-500 border-b-4 border-slate-400"></div>

              {/* Piston 2 (Large) Container */}
              <div className="w-1/2 h-64 bg-slate-200 border-x-4 border-slate-400 relative flex flex-col justify-end overflow-hidden">
                {/* Fluid in Piston 2 */}
                <div 
                  className="w-full bg-blue-500 transition-all duration-300 relative"
                  style={{ height: `${120 + piston2Up}px` }}
                >
                  {/* Piston Platform 2 */}
                  <div className="absolute -top-6 left-0 right-0 h-6 bg-slate-700 border-t-2 border-slate-900 flex items-center justify-center">
                    <span className="text-[9px] text-white font-mono">A₂ ({areaRatio}&times; A₁)</span>
                  </div>
                </div>

                {/* Car / Truck being lifted */}
                <div 
                  className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-300"
                  style={{ bottom: `${125 + piston2Up}px` }}
                >
                  <div className="text-4xl">🚗</div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-green-700 bg-white px-2 py-0.5 rounded-full shadow-xs border border-green-200">
                    <ArrowUp className="w-3.5 h-3.5 text-green-600" />
                    <span>Terangkat: {outputForce.toLocaleString()} N</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Insight */}
            <div className="mt-4 bg-white/90 p-3 rounded-xl border border-[#E5E7F0] text-xs text-[#373848] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#6C5CE7] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#141527]">Aplikasi Nyata Hukum Pascal: </strong>
                Dongkrak mobil di tempat cuci mobil, rem hidrolik piringan pada sepeda motor, dan alat berat ekskavator (bego) yang mampu mengangkat beton raksasa.
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
