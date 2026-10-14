import React, { useState } from 'react';
import { FlaskConical, Sparkles, BookOpen, BrainCircuit, BarChart3, Home, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentPage, navigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'lab', label: 'Lab Simulasi', icon: FlaskConical },
    { id: 'detector', label: 'Detektor', icon: BrainCircuit },
    { id: 'quiz', label: 'Kuis', icon: Sparkles },
    { id: 'summary', label: 'Materi Kilat', icon: BookOpen },
    { id: 'teacher', label: 'Guru', icon: BarChart3 },
  ];

  const handleNav = (id) => {
    navigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full mb-6">
      <div className="glass-panel rounded-full px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300">
        
        {/* Brand / Logo */}
        <div 
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-10 h-10 rounded-xl bg-white/90 p-1 flex items-center justify-center border border-white shadow-sm shadow-[#6C5CE7]/15 transition-transform group-hover:scale-105">
            <img src="/logo-clean.png" alt="PressureLab Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base sm:text-lg text-[#14132B] tracking-tight">
              Pressure<span className="text-[#6C5CE7]">Lab</span>
            </span>
            <span className="hidden sm:inline-flex text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F0EDFF] text-[#6C5CE7] border border-[#6C5CE7]/15">
              SMP IX
            </span>
          </div>
        </div>

        {/* Center Pill Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F4F2FB]/80 p-1 rounded-full border border-white/60">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#6C5CE7] shadow-sm shadow-[#6C5CE7]/10'
                    : 'text-[#625F7A] hover:text-[#14132B] hover:bg-white/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button (Dark Pill ala reference) */}
        <div className="hidden sm:flex items-center gap-2">
          {currentPage !== 'lab' ? (
            <button
              onClick={() => handleNav('lab')}
              className="px-4 py-2 rounded-full bg-[#131127] text-white text-xs font-semibold hover:bg-[#201D3D] transition shadow-sm hover:shadow-md flex items-center gap-1.5 cursor-pointer active:scale-98"
            >
              <span>Mulai Lab</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => handleNav('quiz')}
              className="px-4 py-2 rounded-full bg-[#6C5CE7] text-white text-xs font-semibold hover:bg-[#5A4AD1] transition shadow-sm shadow-[#6C5CE7]/30 flex items-center gap-1.5 cursor-pointer active:scale-98"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Uji Kuis</span>
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#625F7A] hover:text-[#14132B] hover:bg-white/80 transition cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 glass-panel rounded-2xl p-3 shadow-lg border border-white/80 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition cursor-pointer ${
                    isActive
                      ? 'bg-[#6C5CE7] text-white shadow-sm'
                      : 'text-[#14132B] hover:bg-white/80'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
