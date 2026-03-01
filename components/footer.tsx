 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", href: "#", icon: FaInstagram },
    { name: "Whatsapp", href: "#", icon: FaWhatsapp },
    { name: "Facebook", href: "#", icon: FaFacebook },
  ];

  return (
    <footer className="bg-[#121212] text-[#808080] pt-10 sm:pt-6 overflow-hidden relative border-t border-white/5">
      <div className="mx-auto w-full max-w-[1400px] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-4 items-center">
          
          {/* Left Column: Logo & Branding */}
          <div className="flex flex-col items-center sm:flex-row gap-5 group text-center sm:text-left">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
              <Image 
                src="/logo.png" 
                alt="Adrenaline Icon" 
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h2 className="text-xl sm:text-2xl font-formula1-bold text-white mb-0.5 leading-none tracking-tight">
                Adrenaline Adventures
              </h2>
              <p className="text-[10px] font-medium text-white/40 tracking-[0.3em] font-encode-sans-expanded uppercase">
                Curated adventures, Crafted memories
              </p>
            </div>
          </div>

          {/* Right Column: Contact info */}
          <div className="flex flex-col sm:flex-row justify-between lg:justify-end gap-10 lg:gap-20">
            <div className="space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className="text-[10px] font-bold text-[#808080] uppercase tracking-[0.2em] font-inter">
                CONTACT US
              </h4>
              <div className="space-y-1">
                <p className="text-sm font-medium text-white/90 font-inter">+918089713241</p>
                <p className="text-xs font-medium text-white/60 font-inter">adrenalineadventuresindia@gmail.com</p>
              </div>
            </div>

            <div className="space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className="text-[10px] font-bold text-[#FFD700] uppercase tracking-[0.2em] font-inter">
                WHATSAPP
              </h4>
              <p className="text-sm font-bold text-[#FFD700] font-inter">+918089713241</p>
              <p className="text-[11px] text-[#808080] leading-relaxed font-inter opacity-70">
                2972 Westheimer Rd. Santa Ana,<br />
                Illinois 85486
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Socials Centered */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <h4 className="hidden sm:block text-[9px] font-bold text-[#808080] uppercase tracking-[0.3em] font-inter">
              FOLLOW US
            </h4>
            <div className="flex items-center gap-6">
              {socialLinks.map((social, i) => (
                <div key={social.name} className="flex items-center gap-6">
                  <a 
                    href={social.href} 
                    aria-label={social.name}
                    className="text-white/60 hover:text-[#FFD700] transition-colors tracking-wide text-[10px] font-bold uppercase hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] flex items-center gap-2"
                  >
                    <social.icon className="size-8 sm:size-4" />
                    <span className="hidden sm:inline">{social.name}</span>
                  </a>
                  {i < socialLinks.length - 1 && <span className="hidden sm:inline text-white/10 select-none">/</span>}
                </div>
              ))}
            </div>
          </div>

          <p className="text-[7px] sm:text-[9px] text-white/20 tracking-widest uppercase font-inter">
            © {new Date().getFullYear()} Adrenaline Adventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
