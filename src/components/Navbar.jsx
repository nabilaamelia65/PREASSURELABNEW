import React, { useState } from 'react';
import { FlaskConical, Sparkles, BookOpen, BrainCircuit, BarChart3, Menu, X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'lab', label: 'Lab Simulasi', icon: FlaskConical },
    { id: 'quiz', label: 'Kuis & Tantangan', icon: Sparkles },
    { id: 'detector', label: 'Detektor Miskonsepsi', icon: BrainCircuit },
    { id: 'summary', label: 'Materi Kilat', icon: BookOpen },
    { id: 'teacher', label: 'Dashboard Guru', icon: BarChart3 },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F8F9FD]/80 backdrop-blur-md border-b border-[#E5E7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-[#5C5EE6] flex items-center justify-center text-white shadow-lg shadow-[#5C5EE6]/25">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-[#141527] tracking-tight">Pressure<span className="text-[#5C5EE6]">Lab</span></span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#EEF0FF] text-[#5C5EE6]">
                  SMP IX
                </span>
              </div>
              <p className="text-[11px] text-[#686889] hidden sm:block">Interactive Pressure Learning Laboratory</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-white px-2 py-1.5 rounded-full border border-[#E5E7F0] shadow-xs">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#5C5EE6] text-white shadow-sm'
                      : 'text-[#686889] hover:text-[#141527] hover:bg-[#F0F1F5]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#pricing"
              className="text-xs font-semibold text-[#686889] hover:text-[#141527] px-3 py-2 transition"
            >
              Lisensi Sekolah
            </a>
            <button
              onClick={() => handleNavClick('lab')}
              className="px-4 py-2 rounded-full bg-[#141527] text-white text-xs font-semibold hover:bg-[#202138] transition shadow-xs flex items-center gap-1.5"
            >
              <span>Eksplorasi Sekarang</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#686889] hover:text-[#141527] hover:bg-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-[#E5E7F0] px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-[#373848] hover:bg-[#F8F9FD]"
              >
                <Icon className="w-4 h-4 text-[#5C5EE6]" />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
