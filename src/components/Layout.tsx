import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { StratonLogo, ArrowUpRight } from './Icons';

export const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col px-[1%] gap-[10px] py-[10px]">
      {/* Navigation Frame (Sticky) */}
      <nav className="sticky top-[10px] z-[100] flex items-center justify-between px-8 py-5 bg-brand-white rounded-[20px] border-2 border-brand-orange shadow-md bg-white">
        <Link to="/" className="flex items-center gap-[11.4px]">
          <StratonLogo className="w-8 h-8" />
          <span className="text-2xl font-bold tracking-tight text-[#111111]">Straton AI</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-[60.8px] text-xs font-semibold tracking-widest uppercase text-[#111111]">
          <Link to="/" className={`flex items-center gap-[7.6px] hover:text-brand-orange transition-colors ${location.pathname === '/' ? 'text-[#111111]' : 'text-[#6E6E6E]'}`}>
            {location.pathname === '/' && <div className="w-2 h-2 bg-[#8B5CF6]" />}
            HOME
          </Link>
          <Link to="/about" className={`flex items-center gap-[7.6px] hover:text-brand-orange transition-colors ${location.pathname === '/about' ? 'text-[#111111]' : 'text-[#6E6E6E]'}`}>
            {location.pathname === '/about' && <div className="w-2 h-2 bg-[#8B5CF6]" />}
            ABOUT US
          </Link>
          <Link to="/contact" className={`flex items-center gap-[7.6px] hover:text-brand-orange transition-colors ${location.pathname === '/contact' ? 'text-[#111111]' : 'text-[#6E6E6E]'}`}>
            {location.pathname === '/contact' && <div className="w-2 h-2 bg-[#8B5CF6]" />}
            CONTACT US
          </Link>
        </div>

        <button className="relative flex items-center gap-[15.2px] text-xs font-bold tracking-widest uppercase group text-[#111111] hover:text-white transition-colors duration-300 rounded-sm overflow-hidden bg-transparent">
          <div className="absolute left-0 top-0 bottom-0 w-[36px] bg-brand-orange group-hover:w-full transition-all duration-300 ease-out z-0 rounded-sm"></div>
          <div className="relative z-10 text-white p-2.5 flex items-center justify-center w-[36px]">
            <ArrowUpRight className="w-4 h-4" />
          </div>
          <span className="relative z-10 pr-4">TALK TO AN AI EXPERT</span>
        </button>
      </nav>

      {/* Page Content */}
      <main className="flex flex-col w-full relative z-10">
        <Outlet />
      </main>

      {/* Footer Frame */}
      <footer className="bg-[#1A0905] text-white pt-20 pb-8 px-12 md:px-20 rounded-[20px] border-2 border-brand-orange shadow-2xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="flex flex-col md:flex-row gap-[60.8px] md:gap-[121.6px]">
            <div>
              <h4 className="text-[10px] text-white/50 tracking-widest uppercase mb-6">PAGES</h4>
              <ul className="space-y-[15.2px] text-sm font-medium">
                <li><Link to="/" className={`hover:text-brand-orange transition-colors ${location.pathname === '/' ? 'text-brand-orange' : ''}`}>Home</Link></li>
                <li><Link to="/about" className={`hover:text-brand-orange transition-colors ${location.pathname === '/about' ? 'text-brand-orange' : ''}`}>About Us</Link></li>
                <li><Link to="/contact" className={`hover:text-brand-orange transition-colors ${location.pathname === '/contact' ? 'text-brand-orange' : ''}`}>Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] text-white/50 tracking-widest uppercase mb-6">SOCIALS</h4>
              <ul className="space-y-[15.2px] text-sm font-medium">
                <li><a href="#" className="hover:text-brand-orange transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">X (Twitter)</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <svg className="w-[72px] h-[72px]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              <text x="50" y="48" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">ISO</text>
              <text x="50" y="66" textAnchor="middle" fill="white" fontSize="14">27001</text>
              <path id="curve" d="M 20 50 A 30 30 0 1 1 80 50 A 30 30 0 1 1 20 50" fill="transparent" />
              <text fontSize="5.5" fill="rgba(255,255,255,0.6)" letterSpacing="0.5">
                <textPath href="#curve" startOffset="50%" textAnchor="middle">INFORMATION SECURITY MANAGEMENT</textPath>
              </text>
            </svg>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-end gap-[45.6px] mb-16">
          <div className="flex items-center gap-[22.8px]">
            <StratonLogo className="w-20 h-20 md:w-28 md:h-28" />
            <span className="text-[72px] md:text-[130px] leading-[0.8] font-medium tracking-tighter -mb-2 md:-mb-4">straton</span>
          </div>

          <div className="flex flex-wrap gap-[45.6px] text-sm mb-2">
            <div>
              <h4 className="text-[10px] text-white/50 tracking-widest uppercase mb-2">EMAIL</h4>
              <p>hi@straton.ai</p>
            </div>
            <div>
              <h4 className="text-[10px] text-white/50 tracking-widest uppercase mb-2">PHONE</h4>
              <p>+91 8209710898</p>
            </div>
            <div>
              <h4 className="text-[10px] text-white/50 tracking-widest uppercase mb-2">ADDRESS</h4>
              <p>HSR Layout, Bangalore, India</p>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/20 mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-white/50">
          <div className="flex gap-[22.8px] mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
          <p>Design Partner | Everything Design</p>
        </div>
      </footer>
    </div>
  );
};
