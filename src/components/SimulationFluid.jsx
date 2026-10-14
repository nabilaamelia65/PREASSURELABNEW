import React, { useState } from 'react';
import { Waves, ArrowDown, Gauge, Info, Compass } from 'lucide-react';

export default function SimulationFluid() {
  const [depth, setDepth] = useState(4.0); // meter (0 to 10m)
  const [fluidType, setFluidType] = useState('water'); // oil, water, seawater, syrup
  const [gravity, setGravity] = useState(9.8); // m/s^2

  const fluids = {
    oil: { name: 'Minyak Goreng', density: 800, color: '#FCD34D', waterColor: 'from-amber-200/50 to-amber-500/70', badge: 'bg-amber-100 text-amber-800' },
    water: { name: 'Air Murni', density: 1000, color: '#38BDF8', waterColor: 'from-sky-200/60 to-blue-500/80', badge: 'bg-sky-100 text-sky-800' },
    seawater: { name: 'Air Laut Asin', density: 1025, color: '#0EA5E9', waterColor: 'from-cyan-300/60 to-indigo-600/80', badge: 'bg-cyan-100 text-cyan-800' },
    syrup: { name: 'Sirup / Madu Kental', density: 1400, color: '#EA580C', waterColor: 'from-orange-300/60 to-rose-600/80', badge: 'bg-orange-100 text-orange-800' }
  };

  const currentFluid = fluids[fluidType];
  
  // Hydrostatic pressure: P = rho * g * h
  const hydroPressure = Math.round(currentFluid.density * gravity * depth);
  const pressureKPa = (hydroPressure / 1000).toFixed(2);
  const totalAtmPressure = Math.round(101325 + hydroPressure); // incl 1 atm

  // Diver position (0 to 10m maps to top: 15% to 85%)
  const diverTopPct = Math.min(85, Math.max(15, (depth / 10) * 70 + 15));

  return (
    <div className="bg-white rounded-3xl border border-[#E5E7F0] p-6 lg:p-8 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Controls Column */}
        <div className="w-full lg:w-5/12 space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF0FF] text-[#5C5EE6] text-xs font-bold mb-2">
              <Waves className="w-3.5 h-3.5" />
              <span>Simulasi 2: Tekanan Hidrostatis</span>
            </div>
            <h3 className="text-xl font-bold text-[#141527]">
              Eksperimen Zat Cair &amp; Kedalaman
            </h3>
            <p className="text-xs text-[#686889] mt-1">
              Geser slider kedalaman atau ubah jenis fluida cair untuk mengamati kenaikan tekanan hidrostatis.
            </p>
          </div>

          {/* Fluid Type Selector */}
          <div>
            <label className="text-xs font-bold text-[#373848] uppercase tracking-wider block mb-2">
              Pilih Jenis Zat Cair (Massa Jenis &rho;):
            </label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(fluids).map(([key, f]) => (
                <button
                  key={key}
                  onClick={() => setFluidType(key)}
                  className={`p-2.5 rounded-xl text-left border text-xs transition cursor-pointer ${
                    fluidType === key
                      ? 'bg-[#5C5EE6] text-white border-[#5C5EE6] shadow-sm font-semibold'
                      : 'bg-[#F8F9FD] text-[#373848] border-[#E5E7F0] hover:bg-[#EEF0FF]'
                  }`}
                >
                  <div className="font-bold">{f.name}</div>
                  <div className="text-[11px] opacity-80">&rho; = {f.density} kg/m³</div>
                </button>
              ))}
            </div>
          </div>

          {/* Depth Slider */}
          <div className="space-y-4 bg-[#F8F9FD] p-4 rounded-2xl border border-[#E5E7F0]">
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-[#141527] mb-1.5">
                <span>Kedalaman Menyelam (h):</span>
                <span className="font-mono text-[#5C5EE6] text-sm bg-white px-2 py-0.5 rounded border border-[#E5E7F0]">
                  {depth.toFixed(1)} meter
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={depth}
                onChange={(e) => setDepth(Number(e.target.value))}
                className="w-full accent-[#5C5EE6] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#686889] mt-1">
                <span>Permukaan (0 m)</span>
                <span>Sedang (5 m)</span>
                <span>Dasar (10 m)</span>
              </div>
            </div>

            {/* Gravity Toggle */}
            <div className="pt-2 border-t border-[#E5E7F0] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#373848]">Percepatan Gravitasi (g):</span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setGravity(9.8)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    gravity === 9.8 ? 'bg-[#141527] text-white' : 'bg-white border text-[#686889]'
                  }`}
                >
                  🌍 Bumi (9.8 m/s²)
                </button>
                <button
                  onClick={() => setGravity(1.6)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    gravity === 1.6 ? 'bg-[#141527] text-white' : 'bg-white border text-[#686889]'
                  }`}
                >
                  🌙 Bulan (1.6 m/s²)
                </button>
              </div>
            </div>
          </div>

          {/* Formula Display Card */}
          <div className="bg-[#141527] text-white p-4 rounded-2xl">
            <div className="text-[11px] font-semibold text-[#38BDF8] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5" />
              <span>Rumus Tekanan Hidrostatis:</span>
            </div>
            <div className="font-mono text-xs flex items-center gap-2 mt-2">
              <span className="text-[#A8ACC1]">P = &rho; &times; g &times; h</span>
              <span>➔</span>
              <span>{currentFluid.density} &times; {gravity} &times; {depth}</span>
            </div>
            <div className="mt-2 text-2xl font-extrabold text-white flex items-baseline gap-2">
              <span>{hydroPressure.toLocaleString()}</span>
              <span className="text-sm font-normal text-[#A8ACC1]">Pascal (Pa)</span>
              <span className="text-xs bg-[#0EA5E9] text-white px-2 py-0.5 rounded-full ml-auto">
                {pressureKPa} kPa
              </span>
            </div>
            <div className="mt-2 pt-2 border-t border-white/10 text-[11px] text-[#A8ACC1] flex justify-between">
              <span>Total + Tekanan Atmosfer Udara:</span>
              <span className="font-mono text-white">{(totalAtmPressure / 1000).toFixed(1)} kPa</span>
            </div>
          </div>
        </div>

        {/* Visual Water Tank Column */}
        <div className="w-full lg:w-7/12 flex flex-col items-center">
          <div className="w-full bg-[#F0F1F5] rounded-2xl p-6 border border-[#E5E7F0] relative overflow-hidden flex flex-col justify-end min-h-[440px]">
            
            {/* Header label */}
            <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-semibold text-[#686889] z-20">
              <Compass className="w-4 h-4 text-[#5C5EE6]" />
              <span>Tabung Pengujian Hidrostatis (Skala Kedalaman 0 - 10 m)</span>
            </div>

            {/* Gauge widget top right */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-[#E5E7F0] shadow-sm text-right z-20">
              <div className="text-[10px] uppercase font-bold text-[#686889]">Beban Tekanan Air</div>
              <div className="text-lg font-black text-[#0EA5E9]">
                {depth > 7 ? '🌊 TEKANAN EKSTREM' : depth > 3 ? '🏊 TEKANAN SEDANG' : '🏖️ TEKANAN RENDAH'}
              </div>
            </div>

            {/* Giant Water Tank Simulation Visual */}
            <div className="relative w-full h-[320px] rounded-2xl border-4 border-slate-300 bg-white/50 overflow-hidden flex flex-col justify-end shadow-inner">
              
              {/* Depth scale ticks on the left */}
              <div className="absolute left-2 top-0 bottom-0 w-8 flex flex-col justify-between py-3 text-[10px] font-mono text-slate-500 font-bold z-20 pointer-events-none">
                <span>0m</span>
                <span>2m</span>
                <span>4m</span>
                <span>6m</span>
                <span>8m</span>
                <span>10m</span>
              </div>

              {/* Dam Wall Thickness Visual on the right */}
              <div className="absolute right-0 top-0 bottom-0 w-12 flex flex-col items-end z-20 pointer-events-none">
                {/* Visual triangle representation of a concrete dam (thick at bottom) */}
                <div 
                  className="h-full bg-slate-400/80 border-l border-slate-500 flex items-center justify-center text-[9px] text-white font-bold [writing-mode:vertical-lr] rotate-180"
                  style={{
                    clipPath: 'polygon(70% 0, 100% 0, 100% 100%, 0% 100%)'
                  }}
                >
                  Dinding Bendungan
                </div>
              </div>

              {/* Water Body with dynamic gradient */}
              <div className={`w-full h-[90%] bg-gradient-to-b ${currentFluid.waterColor} relative transition-all duration-500`}>
                
                {/* Surface Waves */}
                <div className="absolute -top-3 left-0 right-0 h-4 bg-white/40 blur-xs"></div>

                {/* Animated Rising Bubbles */}
                <div className="absolute bottom-4 left-1/4 w-2 h-2 rounded-full bg-white/60 animate-ping"></div>
                <div className="absolute bottom-12 left-1/2 w-3 h-3 rounded-full bg-white/50 animate-pulse"></div>
                <div className="absolute bottom-20 left-3/4 w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce"></div>

                {/* The Diver / Submarine Sensor Pin */}
                <div 
                  className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 z-30 flex items-center gap-3"
                  style={{
                    top: `${diverTopPct}%`
                  }}
                >
                  {/* Diver / Sensor avatar */}
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-lg border-2 border-[#5C5EE6] flex items-center justify-center text-2xl animate-pulse">
                    🤿
                  </div>

                  {/* Tooltip callout */}
                  <div className="bg-[#141527] text-white px-3 py-1.5 rounded-xl shadow-lg border border-white/20 whitespace-nowrap text-xs font-mono">
                    <div className="text-[10px] text-[#38BDF8]">Kedalaman: {depth.toFixed(1)} m</div>
                    <div className="font-bold">{pressureKPa} kPa</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Insight */}
            <div className="mt-4 bg-white/90 p-3 rounded-xl border border-[#E5E7F0] text-xs text-[#373848] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#5C5EE6] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#141527]">Mengapa Telinga Berdengung saat Menyelam? </strong>
                Semakin dalam kamu menyelam, semakin banyak tumpukan partikel air di atas tubuhmu yang menekan gendang telinga.
                Itu sebabnya dinding bendungan PLTA di bagian bawah selalu dibuat <strong>jauh lebih tebal</strong> daripada bagian atasnya!
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
