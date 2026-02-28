 "use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Event", href: "#events" },
    { name: "About us", href: "#about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "Whatsapp", href: "#" },
    { name: "Facebook", href: "#" },
  ];

  return (
    <footer className="bg-[#121212] text-[#808080] py-16 lg:py-20 overflow-hidden relative border-t border-white/5">
      <div className="mx-auto w-full max-w-[1400px] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* Left: Contact Info */}
          <motion.div 
            className="space-y-12 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8 inline-block lg:block text-left">
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold text-[#808080] uppercase tracking-[0.2em] font-inter">
                  CONTACT US
                </h4>
                <div className="space-y-1">
                  <p className="text-sm sm:text-base font-medium text-white/90 font-inter">
                    +918089713241
                  </p>
                  <p className="text-sm sm:text-base font-medium text-white/90 font-inter">
                    adrenalineadventuresindia@gmail.com
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold text-[#FFD700] uppercase tracking-[0.2em] font-inter">
                  WHATSAPP
                </h4>
                <p className="text-sm sm:text-base font-bold text-[#FFD700] font-inter">
                  +918089713241
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[12px] text-[#808080] leading-relaxed font-inter opacity-80">
                  2972 Westheimer Rd. Santa Ana,<br />
                  Illinois 85486
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Newsletter */}
          <motion.div 
            className="flex flex-col items-center lg:items-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full max-w-lg">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#FFD700] font-inter text-center lg:text-right">
                Newsletter
              </h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#FFD700]/30 focus:ring-0 p-4 rounded-md text-sm text-white placeholder:text-[#555555] font-inter transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#FFD700]/30 focus:ring-0 p-4 rounded-md text-sm text-white placeholder:text-[#555555] font-inter transition-colors"
                  />
                </div>
                <button className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-bold py-4 transition-all duration-300 rounded-md text-sm tracking-widest font-inter">
                  SUBMIT
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-20 pt-12 border-t border-white/5 flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:items-center lg:gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Logo Branding - Horizontal on all screens now with better spacing */}
          <div className="flex items-center gap-5 group">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
              <Image 
                src="/logo.png" 
                alt="Adrenaline Icon" 
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-formula1-bold text-white mb-1 leading-none tracking-tight">
                Adrenaline Adventures
              </h2>
              <p className="text-[10px] sm:text-[11px] font-medium text-white/50 tracking-widest font-encode-sans-expanded uppercase">
                Curated adventures, Crafted memories
              </p>
            </div>
          </div>

          {/* Socials & Navigation */}
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            {/* Social Links */}
            <div className="text-center lg:text-left">
              <h4 className="text-[9px] font-bold text-[#808080] uppercase tracking-[0.3em] mb-4 font-inter">
                FOLLOW US
              </h4>
              <div className="flex items-center justify-center lg:justify-start gap-5 text-xs font-semibold font-inter">
                {socialLinks.map((social, i) => (
                  <div key={social.name} className="flex items-center gap-5">
                    <a href={social.href} className="text-white/60 hover:text-[#FFD700] transition-colors tracking-wide">
                      {social.name}
                    </a>
                    {i < socialLinks.length - 1 && <span className="text-[#333333] select-none">/</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 sm:gap-8 text-[11px] font-bold uppercase tracking-[0.2em] font-inter">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`transition-all whitespace-nowrap hover:scale-105 ${
                    pathname === link.href || (link.name === "Event" && pathname === "/#events")
                      ? "text-[#FFD700]" 
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
