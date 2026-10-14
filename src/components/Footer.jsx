import React from 'react';
import { FlaskConical, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7F0] bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#5C5EE6] flex items-center justify-center text-white">
              <FlaskConical className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-base text-[#141527]">Pressure<span className="text-[#5C5EE6]">Lab</span></span>
              <p className="text-[11px] text-[#686889]">Interactive Pressure Learning Laboratory</p>
            </div>
          </div>

          <div className="text-xs text-[#686889] text-center md:text-right">
            <p>Dirancang untuk Pembelajaran IPA Fisika SMP/MTs Kelas IX Kurikulum Merdeka.</p>
            <p className="mt-1 flex items-center justify-center md:justify-end gap-1">
              Dibuat dengan <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> &bull; Siap dideploy ke Vercel
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
