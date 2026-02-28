import React from 'react';
import { Linkedin } from 'lucide-react';
import { StratonLogo } from '../components/Icons';
import { PurpleCardCubes } from '../components/PurpleCardCubes';
import { CTASectionContent } from '../components/CTASection';
import { FrameContainer, FrameData } from '../components/FrameContainer';

export const About = () => {
  const frames: FrameData[] = [
    {
      id: 'business-statement',
      className: 'relative bg-[#1A0905] p-16 md:p-32 flex items-center justify-center',
      content: (
        <>
          <div className="absolute inset-0 bg-dotted-grid opacity-20"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center p-10">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-brand-orange"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-brand-orange"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-brand-orange"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-brand-orange"></div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-brand-orange leading-[1.3] tracking-tight">
              Straton AI is a business-driven, AI-first transformation partner for financial institutions.
              <br /><br />
              We dig deep into the business problem and use AI solutions at speed with purpose to deliver business value.
            </h1>
          </div>
        </>
      )
    },
    {
      id: 'how-we-work',
      className: 'bg-[#1A0905] p-12 md:p-16',
      content: (
        <>
          <h2 className="text-white text-3xl md:text-4xl font-medium tracking-tight mb-12">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[22.8px]">
            {[
              {
                title: "BUSINESS-FIRST ALIGNMENT",
                points: ["Understanding your business, its tech stack and the workflow", "Problem discovery", "Identify opportunities for impact"],
                type: 1
              },
              {
                title: "CO-CREATION",
                points: ["Solutions designed with you in the picture", "Defining clear success metrics of implementation"],
                type: 2
              },
              {
                title: "ENGINEERING & SHIPPING",
                points: ["Build, test and deploy in rapid cycles for faster continuous feedback loops", "From implementation to training, we design to handover with perfection"],
                type: 3
              },
              {
                title: "MEASURING & OPTIMIZING",
                points: ["We measure the impact of the solution on your business", "Continuous optimise for performance and ROI"],
                type: 4
              }
            ].map((card, i) => (
              <div key={i} className="bg-[#6B46C1] rounded-[18px] p-8 relative overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-3 border border-dashed border-brand-orange/40 rounded-[10px] pointer-events-none"></div>
                <div className="relative z-10 flex-1 flex flex-col">
                  <PurpleCardCubes type={card.type as 1|2|3|4} />
                  <h3 className="text-white text-sm tracking-widest uppercase font-semibold mt-8 mb-6">
                    {card.title}
                  </h3>
                  <ul className="space-y-[15.2px] mt-auto">
                    {card.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-[11.4px] text-white/90 text-xs leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-brand-orange mt-1.5 shrink-0"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 'founders',
      className: 'bg-[#1A0905] p-12 md:p-16',
      content: (
        <div className="flex flex-col lg:flex-row gap-[30.4px] lg:gap-[45.6px] items-start">
          <div className="w-full lg:w-1/2 bg-[#F3F3F3] rounded-[20px] overflow-hidden flex flex-col sm:flex-row">
            <div className="sm:w-2/5 relative">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" 
                alt="Himanshu Goyal" 
                className="w-full h-full object-cover min-h-[300px]"
              />
              <div className="absolute bottom-4 left-4 bg-brand-orange p-2 rounded-sm">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="sm:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-[11.4px] mb-2">
                <div className="w-2 h-2 bg-brand-orange"></div>
                <h3 className="text-2xl font-medium text-[#111111]">Himanshu Goyal</h3>
              </div>
              <p className="text-[10px] tracking-widest uppercase text-[#6E6E6E] font-bold mb-6">CO-FOUNDER</p>
              <div className="space-y-[15.2px] text-sm text-[#111111] leading-relaxed">
                <p>Himanshu is a persistent product builder who thrives at the intersection of business and technology. An engineering alumnus of BITS Pilani, he has spent over five years experimenting with LLMs and Generative AI. Today, his passion lies in leveraging these technologies to drive real, scalable business impact.</p>
                <p>Previously, he was part of the founding team at Pepper Content, a Series B startup backed by Bessemer and Lightspeed. There, he played a pivotal role in scaling the company from college dorm rooms to $10 million in revenue.</p>
                <p className="italic text-[#6E6E6E]">Beyond work, you will likely find Himanshu with a suitcase somewhere in the world. He also unwinds with a deep love for Bollywood music and movies.</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-[#F3F3F3] rounded-[20px] overflow-hidden flex flex-col sm:flex-row lg:mt-24">
            <div className="sm:w-2/5 relative">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" 
                alt="Gaurav Mandlecha" 
                className="w-full h-full object-cover min-h-[300px]"
              />
              <div className="absolute bottom-4 left-4 bg-brand-orange p-2 rounded-sm">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="sm:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-[11.4px] mb-2">
                <div className="w-2 h-2 bg-[#8B5CF6]"></div>
                <h3 className="text-2xl font-medium text-[#111111]">Gaurav Mandlecha</h3>
              </div>
              <p className="text-[10px] tracking-widest uppercase text-[#6E6E6E] font-bold mb-6">CO-FOUNDER</p>
              <div className="space-y-[15.2px] text-sm text-[#111111] leading-relaxed">
                <p>Gaurav holds a double major in Economics and Mechanical Engineering from BITS Pilani. A Pan Macmillan published author by 23, his professional journey spans both at a VC fund and at early-stage startups, experiences that have made him comfortable with uncertainty and the joy of building.</p>
                <p>With a sharp Marwadi instinct for business, he thinks in numbers, margins, and potential, backing 8 startups as an angel investor to pay it forward. He once organized a Guinness World Record attempt, teaching 4,000 people to solve a Rubik's cube.</p>
                <p className="italic text-[#6E6E6E]">Outside work, he's learning to code with AI, loves dancing, and binges spy thrillers. He proudly counts getting Mr. Ratan Tata's autograph among his most prized memories.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'founders-letter',
      className: 'bg-gradient-to-br from-[#FF4D2E] via-[#ff6b52] to-[#ff8f7a] p-8 md:p-24 flex justify-center',
      content: (
        <div className="bg-white rounded-[12px] max-w-4xl w-full relative p-12 md:p-20 shadow-2xl">
          <svg className="absolute top-0 right-0 w-16 h-16 rounded-tr-[12px]" viewBox="0 0 64 64">
            <polygon points="0,0 64,0 64,64" fill="#7C3AED" />
          </svg>
          <div className="flex items-center gap-[11.4px] mb-16">
            <StratonLogo className="w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight text-[#111111]">straton</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-12 text-[#111111]">Founders' Letter</h2>
          <div className="space-y-[30.4px] text-lg md:text-xl text-[#111111] font-light leading-relaxed max-w-3xl">
            <p>BFSI teams deserve AI they can finally trust.</p>
            <p>We've watched institutions invest millions into AI projects that never made it out of a sandbox.</p>
            <p>Vendors over-promised and under-delivered. Models were impressive on paper but brittle in production.</p>
            <p>Teams were left with prototypes instead of progress. We founded Straton AI to change that.</p>
            <p>We are engineers by training and operators by instinct — methodical, precise, and ten steps ahead of what it takes for AI to stand up in the real world.</p>
            <p>We don't chase hype.<br/>We don't ship guesswork.<br/>We build intelligence that is accountable, explainable, and capable of performing under live conditions.</p>
            <p>AI will redefine BFSI — but only if it's reliable. Straton AI exists to make that reliability real.<br/>If it doesn't create impact, it doesn't ship.</p>
            <p>Kudos if you've read this far.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-[60.8px] mt-20">
            <div>
              <div className="font-['Caveat'] text-4xl mb-2 text-[#111111]">Himanshu Goyal</div>
              <div className="text-xs tracking-widest uppercase text-[#6E6E6E] font-semibold">Himanshu Goyal</div>
            </div>
            <div>
              <div className="font-['Caveat'] text-4xl mb-2 text-[#111111]">Gaurav Mandlecha</div>
              <div className="text-xs tracking-widest uppercase text-[#6E6E6E] font-semibold">Gaurav Mandlecha</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'built-for-reality',
      className: 'bg-[#1A0905] p-12 md:p-16',
      content: (
        <>
          <h2 className="text-white text-3xl md:text-4xl font-medium tracking-tight mb-12">Built for reality</h2>
          <div className="flex flex-col lg:flex-row rounded-[20px] overflow-hidden border border-white/10">
            <div className="w-full lg:w-1/2 bg-[#1A0905] p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
              <h3 className="text-white/80 text-xs tracking-widest uppercase font-semibold mb-10">CURRENT STATE</h3>
              <ul className="space-y-[30.4px]">
                {[
                  "Most AI vendors sell experiments.",
                  "Most projects generate proof-of-concepts.",
                  "Most models need disclaimers.",
                  "Most systems degrade.",
                  "We don't just build AI."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-[15.2px] text-white/70 text-sm md:text-base">
                    <div className="w-2 h-2 bg-[#6E6E6E] shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2 bg-[#6B46C1] p-10 md:p-16 relative overflow-hidden">
              <h3 className="text-white text-xs tracking-widest uppercase font-semibold mb-10 relative z-10">THE STRATON DIFFERENCE</h3>
              <ul className="space-y-[30.4px] relative z-10">
                {[
                  "Straton delivers AI you can stake your business on.",
                  "Straton generates proof of performance.",
                  "Straton's models pass audits.",
                  "Straton's systems are built to adapt.",
                  "We build intelligence that lasts."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-[15.2px] text-white text-sm md:text-base font-medium">
                    <div className="w-2 h-2 bg-brand-orange shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
