"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      
      {/* Hero / Contact Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#2a1d13] via-[#0d0d0d] to-[#1a140f]" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Column: Logo/Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/logoforcontactus.png"
                  alt="Adrenaline Adventures Contact Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="flex flex-col">
              <div className="mb-10">
                <h1 className="text-4xl md:text-6xl font-formula1-bold tracking-tighter mb-2">
                  Contact Us
                </h1>
                <p className="text-xl md:text-2xl font-formula1 text-white/90 tracking-tight">
                  Talk to Team
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-white/50 font-semibold ml-1">
                      first Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder=""
                      className="w-full bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none p-3 lg:p-4 transition-all text-sm"
                    />
                  </div>
                  {/* Last Name */}
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-white/50 font-semibold ml-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder=""
                      className="w-full bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none p-3 lg:p-4 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/50 font-semibold ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder=""
                      className="w-full bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none p-3 lg:p-4 transition-all text-sm"
                    />
                  </div>
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-white/50 font-semibold ml-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder=""
                      className="w-full bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none p-3 lg:p-4 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/50 font-semibold ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder=""
                    className="w-full bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none p-3 lg:p-4 transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <div className="pt-4 flex justify-center lg:justify-start">
                  <button
                    type="submit"
                    className="bg-[#f5f0e8] text-black font-bold py-3 px-8 rounded-sm hover:bg-white/90 transition-all uppercase tracking-widest text-xs shadow-lg shadow-white/5"
                  >
                    SUBMIT NOW
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

