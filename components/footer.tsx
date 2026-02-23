 "use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
          
          {/* Left Column: Contact & Branding */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-12">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-3">
                    CONTACT US
                  </h4>
                  <p className="text-sm font-medium hover:text-white/80 transition-colors">
                    +918089713241
                  </p>
                  <p className="text-sm font-medium hover:text-white/80 transition-colors">
                    adrenalineadventuresindia@gmail.com
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[10px] font-bold text-[#b8a47e] uppercase tracking-[0.3em] mb-3">
                    WHATSAPP
                  </h4>
                  <p className="text-sm font-bold text-[#b8a47e]">
                    +918089713241
                  </p>
                </div>

                <div>
                  <p className="text-xs text-white/40 leading-relaxed max-w-[180px]">
                    2972 Westheimer Rd. Santa Ana,<br />
                    Illinois 85486
                  </p>
                </div>
              </div>

              <div className="pt-20">
                <h2 className="text-4xl md:text-5xl font-black mb-1">
                  Adrenaline Adventures
                </h2>
                <p className="text-sm font-medium text-white/50 italic tracking-wider">
                  Curated adventures, Crafted memories
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Newsletter & Links */}
          <div className="lg:col-span-6 flex flex-col justify-between items-end">
            <div className="w-full max-w-md">
              <h3 className="text-4xl font-bold mb-10 text-[#cbb68d]">
                Newsletter
              </h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-white/5 border-none focus:ring-1 focus:ring-white/20 p-4 rounded-sm text-sm"
                  />
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-white/5 border-none focus:ring-1 focus:ring-white/20 p-4 rounded-sm text-sm"
                  />
                </div>
                <button className="w-full bg-[#333333] hover:bg-[#444444] text-white/80 font-bold py-4 transition-all duration-300 rounded-sm">
                  Submit
                </button>
              </form>
            </div>

            <div className="w-full mt-24">
              <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8 border-t border-white/10 pt-8">
                <div>
                  <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-4">
                    FOLLOW US
                  </h4>
                  <div className="flex gap-6 text-xs font-medium">
                    <a href="#" className="hover:text-white/70 transition-colors">Telegram</a>
                    <span className="text-white/10">|</span>
                    <a href="#" className="hover:text-white/70 transition-colors">Whatsapp</a>
                    <span className="text-white/10">|</span>
                    <a href="#" className="hover:text-white/70 transition-colors">Instagram</a>
                  </div>
                </div>

                <div className="flex gap-6 text-[10px] font-bold text-white/70 uppercase tracking-widest">
                  <a href="/" className="hover:text-white transition-colors">Home</a>
                  <a href="#" className="hover:text-[#cbb68d] transition-colors text-[#cbb68d]">Services</a>
                  <a href="#" className="hover:text-white transition-colors">Event</a>
                  <a href="#" className="hover:text-white transition-colors">About us</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Background "A" or abstract shape */}
        <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden pointer-events-none opacity-10">
           <svg viewBox="0 0 100 100" className="w-full h-full text-white">
             <path fill="currentColor" d="M50 0 L100 100 L85 100 L50 30 L15 100 L0 100 Z" />
           </svg>
        </div>
      </div>
    </footer>
  );
}
