import React from 'react';
import { Calendar, Mail, Phone } from 'lucide-react';
import { CTASectionContent } from '../components/CTASection';
import { FrameContainer, FrameData } from '../components/FrameContainer';

export const Contact = () => {
  const frames: FrameData[] = [
    {
      id: 'contact-form',
      className: 'bg-[#F3F3F3] flex flex-col lg:flex-row',
      content: (
        <>
          <div className="w-full lg:w-1/2 p-12 md:p-20 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-medium text-[#111111] tracking-tight mb-16">
              Contact Us
            </h1>
            <form className="flex flex-col gap-[45.6px] flex-1">
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
              <div className="mt-auto pt-10 flex flex-wrap gap-x-[30.4px] gap-y-[22.8px] justify-between items-center">
                <button type="button" className="flex items-center gap-[11.4px] group">
                  <div className="bg-brand-orange p-2.5 rounded-sm text-white group-hover:bg-[#e03a1f] transition-colors">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#111111]">BOOK A MEETING</span>
                </button>
                <div className="flex items-center gap-[11.4px]">
                  <div className="bg-brand-orange p-2.5 rounded-sm text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#111111]">HI@STRATON.AI</span>
                </div>
                <div className="flex items-center gap-[11.4px]">
                  <div className="bg-brand-orange p-2.5 rounded-sm text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#111111]">+91 9829101789</span>
                </div>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="City lights blurred" 
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#6B46C1]/40 to-[#FF4D2E]/30 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-[#1A0905]/40"></div>
            <div className="absolute inset-0 bg-dotted-grid opacity-30"></div>
          </div>
        </>
      )
    },
    {
      id: 'cta',
      className: 'relative h-[400px] md:h-[500px] flex items-center px-12 md:px-24',
      content: <CTASectionContent />
    }
  ];

  return <FrameContainer frames={frames} parentClassName="animate-fade-in" />;
};
