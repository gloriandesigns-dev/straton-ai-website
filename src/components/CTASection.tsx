import React from 'react';

// Extracted inner content to be used within the FrameContainer
export const CTASectionContent = () => {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
        alt="Fast moving train tunnel"
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A0905]/90 via-[#1A0905]/40 to-transparent"></div>
      <div className="absolute inset-0 bg-dotted-grid opacity-20 mix-blend-overlay"></div>

      <div className="relative z-10 max-w-3xl p-8 md:p-12">
        {/* Corner Brackets */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-white"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-white"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-white"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-white"></div>

        <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-medium text-white leading-[1.1] tracking-tight">
          Ready to move fast,<br />
          with purpose?
        </h2>
      </div>
    </>
  );
};

// Legacy export for backward compatibility if needed elsewhere, though pages now use CTASectionContent via FrameContainer
export const CTASection = () => (
  <section className="relative h-[400px] md:h-[500px] flex items-center px-12 md:px-24 rounded-[20px] border-2 border-brand-orange overflow-hidden shadow-2xl">
    <CTASectionContent />
  </section>
);
