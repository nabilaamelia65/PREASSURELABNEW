import React, { useState } from 'react';
import { Layers, ArrowDown, Gauge, Info, RotateCcw } from 'lucide-react';

export default function SimulationSolid() {
  const [force, setForce] = useState(200); // Newton (N)
  const [area, setArea] = useState(0.02); // m^2

  // Presets
  const presets = [
    { label: '👠 Sepatu Hak Tinggi', force: 500, area: 0.001, desc: 'Luas sangat kecil (1 cm²), tekanan menusuk!' },
    { label: '👟 Sepatu Kets', force: 500, area: 0.025, desc: 'Luas sedang (250 cm²), tekanan seimbang.' },
    { label: '🏂 Papan Salju', force: 500, area: 0.15, desc: 'Luas sangat besar (1500 cm²), tidak amblas di salju!' },
  ];

  // Calculation: P = F / A (Pascal)
  const pressure = Math.round(force / area);
  const pressureKPa = (pressure / 1000).toFixed(1);

  // Depth in sponge (0 to 120px) based on pressure (scaled logarithmically or capped)
  // Max pressure ~ 500,000 Pa, min ~ 333 Pa
  const sinkDepth = Math.min(100, Math.max(10, Math.log10(pressure) * 18));
  // Block width representing Area (narrow for small area, wide for big area)
  const blockWidthPct = Math.min(85, Math.max(15, area * 450));

  return (
    <div className="bg-white rounded-3xl border border-[#E5E7F0] p-6 lg:p-8 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Controls Column */}
        <div className="w-full lg:w-5/12 space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EDFF] text-[#6C5CE7] text-xs font-bold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Simulasi 1: Tekanan Zat Padat</span>
            </div>
            <h3 className="text-xl font-bold text-[#141527]">
              Eksperimen Gaya &amp; Luas Penampang
            </h3>
            <p className="text-xs text-[#686889] mt-1">
              Geser slider atau pilih preset benda di bawah untuk mengamati kedalaman amblas balok pada permukaan spons.
            </p>
          </div>

          {/* Presets */}
          <div>
            <label className="text-xs font-bold text-[#373848] uppercase tracking-wider block mb-2">
              Pilih Contoh Nyata:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {presets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setForce(p.force);
                    setArea(p.area);
                  }}
                  className={`px-3 py-2 rounded-xl text-left border text-xs transition cursor-pointer ${
                    Math.abs(area - p.area) < 0.001
                      ? 'bg-[#6C5CE7] text-white border-[#6C5CE7] shadow-sm font-semibold'
                      : 'bg-[#F8F9FD] text-[#373848] border-[#E5E7F0] hover:bg-[#F0EDFF]'
                  }`}
                >
                  <div className="font-medium truncate">{p.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-4 bg-[#F8F9FD] p-4 rounded-2xl border border-[#E5E7F0]">
            {/* Force Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-[#141527] mb-1.5">
                <span>Gaya Tekan / Berat Beban (F):</span>
                <span className="font-mono text-[#6C5CE7] text-sm bg-white px-2 py-0.5 rounded border border-[#E5E7F0]">
                  {force} N
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                step="25"
                value={force}
                onChange={(e) => setForce(Number(e.target.value))}
                className="w-full accent-[#6C5CE7] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#686889] mt-1">
                <span>Ringan (50 N)</span>
                <span>Sedang (500 N)</span>
                <span>Berat (1000 N)</span>
              </div>
            </div>

            {/* Area Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-[#141527] mb-1.5">
                <span>Luas Bidang Tekan (A):</span>
                <span className="font-mono text-[#6C5CE7] text-sm bg-white px-2 py-0.5 rounded border border-[#E5E7F0]">
                  {area} m² ({(area * 10000).toFixed(0)} cm²)
                </span>
              </div>
              <input
                type="range"
                min="0.001"
                max="0.2"
                step="0.005"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-[#6C5CE7] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#686889] mt-1">
                <span>Runcing / Hak (0.001 m²)</span>
                <span>Lebar / Sepatu Salju (0.2 m²)</span>
              </div>
            </div>

            <button
              onClick={() => { setForce(200); setArea(0.02); }}
              className="flex items-center gap-1.5 text-xs text-[#686889] hover:text-[#6C5CE7] transition font-medium cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Posisi Normal</span>
            </button>
          </div>

          {/* Formula Breakdown Card */}
          <div className="bg-[#141527] text-white p-4 rounded-2xl">
            <div className="text-[11px] font-semibold text-[#38BDF8] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5" />
              <span>Perhitungan Tekanan Otomatis:</span>
            </div>
            <div className="font-mono text-xs flex items-center gap-2 mt-2">
              <span className="text-[#A8ACC1]">P = F / A</span>
              <span>➔</span>
              <span>{force} N / {area} m²</span>
            </div>
            <div className="mt-2 text-2xl font-extrabold text-white flex items-baseline gap-2">
              <span>{pressure.toLocaleString()}</span>
              <span className="text-sm font-normal text-[#A8ACC1]">Pascal (Pa)</span>
              <span className="text-xs bg-[#6C5CE7] text-white px-2 py-0.5 rounded-full ml-auto">
                {pressureKPa} kPa
              </span>
            </div>
          </div>
        </div>

        {/* Visual Canvas Column */}
        <div className="w-full lg:w-7/12 flex flex-col items-center">
          <div className="w-full bg-gradient-to-b from-[#F0F1F5] to-[#E6E8EE] rounded-2xl p-6 border border-[#E5E7F0] relative overflow-hidden flex flex-col justify-end min-h-[380px]">
            
            {/* Sky / Air label */}
            <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-semibold text-[#686889]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
              <span>Uji Penekanan pada Matras Spons Elastis</span>
            </div>

            {/* Manometer Floating Card */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-[#E5E7F0] shadow-sm text-right">
              <div className="text-[10px] uppercase font-bold text-[#686889]">Indikator Tekanan</div>
              <div className="text-lg font-black text-[#6C5CE7]">
                {pressure > 100000 ? '⚡ SANGAT TINGGI' : pressure > 20000 ? '⚠️ TINGGI' : '✅ SEDANG / AMAN'}
              </div>
            </div>

            {/* Dynamic Interactive Stage */}
            <div className="relative w-full h-[240px] flex flex-col items-center justify-end">
              
              {/* Force Arrow Indicator */}
              <div 
                className="flex flex-col items-center text-[#6C5CE7] transition-all duration-300"
                style={{
                  transform: `translateY(-${Math.max(0, 100 - sinkDepth)}px)`,
                  opacity: 0.95
                }}
              >
                <div className="text-[11px] font-bold bg-white px-2 py-0.5 rounded-full shadow-xs border border-[#6C5CE7]/30">
                  Gaya Beban: {force} N
                </div>
                <ArrowDown className="w-6 h-6 animate-bounce" />
              </div>

              {/* The Block Object */}
              <div 
                className="bg-gradient-to-b from-[#6C5CE7] to-[#3B3DBA] rounded-t-lg shadow-md border-t-2 border-white/40 flex items-center justify-center text-white text-xs font-bold transition-all duration-300"
                style={{
                  width: `${blockWidthPct}%`,
                  height: '75px',
                  transform: `translateY(${sinkDepth * 0.4}px)`
                }}
              >
                <div className="text-center px-1">
                  <div>Luas Alas:</div>
                  <div className="font-mono text-[11px] text-white/90">{(area * 10000).toFixed(0)} cm²</div>
                </div>
              </div>

              {/* The Sponge Base with dynamic indentation */}
              <div className="w-full relative mt-[-2px]">
                {/* Visual Sinking Foam Indentation */}
                <div 
                  className="w-full h-24 bg-gradient-to-b from-[#F59E0B]/30 to-[#D97706]/40 border-t-4 border-[#D97706] rounded-b-xl relative overflow-hidden flex flex-col items-center justify-center transition-all duration-300"
                  style={{
                    boxShadow: `inset 0 ${sinkDepth * 0.35}px 15px rgba(180, 83, 9, 0.35)`
                  }}
                >
                  <div className="text-xs font-bold text-[#92400E] z-10 text-center">
                    Matras Spons Uji (Elastis)
                  </div>
                  <div className="text-[11px] font-mono text-[#B45309] z-10">
                    Kedalaman Amblas: {(sinkDepth * 0.1).toFixed(1)} cm
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Real-life Analogy Hint */}
            <div className="mt-4 bg-white/90 p-3 rounded-xl border border-[#E5E7F0] text-xs text-[#373848] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#6C5CE7] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#141527]">Kesimpulan Interaktif: </strong>
                {area <= 0.005 ? (
                  <span>Luas bidang sangat kecil membuat tekanan melonjak luar biasa tinggi, sehingga balok amblas dalam. Inilah alasan jarum suntik dan pisau tajam mudah menembus benda!</span>
                ) : area >= 0.1 ? (
                  <span>Luas bidang yang sangat lebar membagi gaya secara merata, sehingga tekanan menjadi sangat kecil. Inilah alasan orang berjalan di salju memakai papan luncur lebar agar tidak terperosok!</span>
                ) : (
                  <span>Tekanan berbanding lurus dengan gaya (F), dan berbanding terbalik dengan luas penampang (A).</span>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
