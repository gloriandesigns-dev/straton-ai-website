import React from 'react';
import { Calendar, Mail, Phone } from 'lucide-react';
import { CTASection } from '../components/CTASection';

export const Contact = () => {
  return (
    <div className="flex flex-col gap-10 animate-fade-in">
      
      {/* Contact Form Section */}
      <section className="bg-[#F3F3F3] rounded-[20px] border-2 border-brand-orange overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        
        {/* Left Panel - Form */}
        <div className="w-full lg:w-1/2 p-12 md:p-20 flex flex-col">
          <h1 className="text-4xl md:text-5xl font-medium text-[#111111] tracking-tight mb-16">
            Contact Us
          </h1>
          
          <form className="flex flex-col gap-12 flex-1">
            
            {/* Name Input */}
            <div className="relative">
              <label className="block text-[10px] font-bold tracking-widest uppercase text-[#111111] mb-4">
                NAME <span className="text-brand-orange">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter Name" 
                required
                className="w-full bg-transparent border-b border-[#111111]/20 pb-4 text-[#111111] placeholder:text-[#6E6E6E] focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <label className="block text-[10px] font-bold tracking-widest uppercase text-[#111111] mb-4">
                EMAIL <span className="text-brand-orange">*</span>
              </label>
              <input 
                type="email" 
                placeholder="Enter Email" 
                required
                className="w-full bg-transparent border-b border-[#111111]/20 pb-4 text-[#111111] placeholder:text-[#6E6E6E] focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>

            {/* Message Input */}
            <div className="relative">
              <label className="block text-[10px] font-bold tracking-widest uppercase text-[#111111] mb-4">
                MESSAGE
              </label>
              <input 
                type="text" 
                placeholder="Enter Message" 
                className="w-full bg-transparent border-b border-[#111111]/20 pb-4 text-[#111111] placeholder:text-[#6E6E6E] focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>

            {/* Contact Info Row */}
            <div className="mt-auto pt-10 flex flex-wrap gap-x-8 gap-y-6 justify-between items-center">
              
              <button type="button" className="flex items-center gap-3 group">
                <div className="bg-brand-orange p-2.5 rounded-sm text-white group-hover:bg-[#e03a1f] transition-colors">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#111111]">BOOK A MEETING</span>
              </button>

              <div className="flex items-center gap-3">
                <div className="bg-brand-orange p-2.5 rounded-sm text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#111111]">HI@STRATON.AI</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-brand-orange p-2.5 rounded-sm text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#111111]">+91 9829101789</span>
              </div>

            </div>
          </form>
        </div>

        {/* Right Panel - Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="City lights blurred" 
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6B46C1]/40 to-[#FF4D2E]/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[#1A0905]/40"></div>
          {/* Dotted grid overlay */}
          <div className="absolute inset-0 bg-dotted-grid opacity-30"></div>
        </div>

      </section>

      <CTASection />

    </div>
  );
};
