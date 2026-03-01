import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '../components/Icons';
import { HeroCubes, CardCube } from '../components/IsometricCubes';
import { CTASectionContent } from '../components/CTASection';
import { FrameContainer, FrameData } from '../components/FrameContainer';

interface BfsiFeature {
  title: string;
  image: string;
}

export const Home = () => {
  const bfsiItems: BfsiFeature[] = [
    {
      title: 'Risk & Compliance',
      image: 'https://www.dropbox.com/scl/fi/qop296bq2jrjvbee9vsnl/Screenshot-2026-03-01-000025.webp?rlkey=uokb1cmd5afbqle5d9feawt7g&st=9x6vc2hx&raw=1'
    },
    {
      title: 'Customer Experience',
      image: 'https://www.dropbox.com/scl/fi/4ar5uz8z2vpyetsigifks/Screenshot-2026-02-28-235940.webp?rlkey=ioakitje33jglwbqn5auv3eth&st=hr5cdxex&raw=1'
    },
    {
      title: 'Operational Efficiency',
      image: 'https://www.dropbox.com/scl/fi/3ekz5tnp4bbxj4wfgfd50/Screenshot-2026-03-01-000036.webp?rlkey=sm2vb8pd9efl1mjfknra11qme&st=igld0r4g&raw=1'
    }
  ];

  const [activeBfsi, setActiveBfsi] = useState<string>(bfsiItems[0].title);
  const [currentSlide, setCurrentSlide] = useState(0);

  const opportunitiesData = [
    {
      title: 'SALES ACCELERATION & LEAD QUALIFICATION',
      desc: 'Identify and prioritize high-value prospects instantly with predictive AI models.',
      bullets: ['Predictive lead scoring', 'Automated email sequences', 'Intent signaling']
    },
    {
      title: 'CUSTOMER ENGAGEMENT & SERVICE',
      desc: 'Deliver personalized, 24/7 support at scale without compromising quality.',
      bullets: ['Conversational AI agents', 'Sentiment analysis', 'Omnichannel routing']
    },
    {
      title: 'DOCUMENT PROCESSING & MANAGEMENT',
      desc: 'Extract and organize unstructured data seamlessly from complex documents.',
      bullets: ['Automated OCR extraction', 'Contract analysis', 'Compliance checking']
    },
    {
      title: 'INTELLIGENT ASSISTANTS & COPILOTS',
      desc: 'Empower your workforce with AI-driven insights and workflow automation.',
      bullets: ['Workflow automation', 'Knowledge retrieval', 'Decision support']
    }
  ];

  const tickerLogos = [
    "https://www.dropbox.com/scl/fi/znk0s5qat7nkryqz6e67z/69394a922f3b8543cf61d719_Meta.webp?rlkey=gbh1wmdizhxuafbjrnglej6f1&st=cjnd6f2m&raw=1",
    "https://www.dropbox.com/scl/fi/x9x78ik0vwfdikfxvzwxn/69394a927c792072df0161d6_n8n.webp?rlkey=nemiir1q66uz6t56215enz9qv&st=s437opu7&raw=1",
    "https://www.dropbox.com/scl/fi/mpm3pho7gxrf9ezf9lm4y/69394a9220390d212ed84353_MCP.webp?rlkey=ddra1v5w0xb2umrudkut6cbt1&st=6pvu7pw7&raw=1",
    "https://www.dropbox.com/scl/fi/4zatepspi24lurik65gq4/69394a92ecfb9355bc15a244_Deepgram.webp?rlkey=pfmpj2osidrqpj8uincnh8h4y&st=sipvombs&raw=1",
    "https://www.dropbox.com/scl/fi/5if15g67hylj4wbonojvd/69394a929821752bd48b94fe_LangChain.webp?rlkey=ttof9ujs7au3smump0n1y4mvi&st=ia3jy2xu&raw=1",
    "https://www.dropbox.com/scl/fi/7uu0cswiu8yqs6zlh9igf/69394a927db35245931058ee_elevenlabs.webp?rlkey=r1f1twjfs4fwb33bqkxsc69on&st=9r955ttw&raw=1",
    "https://www.dropbox.com/scl/fi/vy4xji2xje33ntacym7tp/69394a9214d0c503d4b81de2_Gemini.webp?rlkey=5b9i840w6aop000y5hsznpxy0&st=ltvizn23&raw=1",
    "https://www.dropbox.com/scl/fi/dfdfeqdsmod7x7iih8gio/69394a922f4a689ff1ee7700_Qwen.webp?rlkey=awovz9hlmzi2gwojg2ivzaeth&st=lrjaqp11&raw=1"
  ];

  const stratonCards = [
    {
      title: "SPEED WITH PURPOSE",
      desc: "Pre-built, BFSI-focused AI solutions designed to deliver business impact quickly, not just technology.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "MITIGATE RISK WHILST STAYING COMPLIANT",
      desc: "AI models tested and deployed with accuracy, reliability, and regulatory safeguards, so your operations stay secure.",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2084&auto=format&fit=crop"
    },
    {
      title: "SCALABLE ARCHITECTURE",
      desc: "Built on robust foundations that grow with your enterprise, ensuring long-term viability and performance.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % stratonCards.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + stratonCards.length) % stratonCards.length);

  const frames: FrameData[] = [
    {
      id: 'hero',
      className: 'relative bg-[#1A0905] min-h-[600px] flex items-center overflow-hidden',
      content: (
        <>
          <img 
            src="https://www.dropbox.com/scl/fi/a7cm1eaws9t5pesc1vr5l/Screenshot-2026-02-28-235957.webp?rlkey=4y2hiulv2opkk3ay7udzy16a7&st=8h1cz7i0&raw=1" 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
          />
          <div className="absolute inset-0 bg-dotted-grid opacity-20 z-0"></div>
          <div className="relative z-10 w-full flex flex-col lg:flex-row">
            <div className="lg:w-[55%] p-12 md:p-20 flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-medium text-white leading-[1.05] tracking-tight">
                Production-ready<br />
                AI Solutions<br />
                for BFSI.
              </h1>
            </div>
            
            <div className="lg:w-[45%] relative min-h-[400px] lg:min-h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1A0905] z-10"></div>
              <div className="absolute top-1/4 right-1/4 z-20">
                <p className="text-brand-orange font-medium tracking-widest uppercase text-sm">NOT JUST PROTOTYPES.</p>
              </div>
              <div className="w-full h-full absolute inset-0 animate-[float_6s_ease-in-out_infinite]">
                <HeroCubes />
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'bfsi',
      className: 'bg-[#1A0905] flex flex-col lg:flex-row overflow-hidden',
      content: (
        <>
          <div className="lg:w-1/2 p-12 md:p-20 border-b lg:border-b-0 lg:border-r border-white/10 relative z-10 bg-[#1A0905] flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-[1.2]">
              We build AI that understands the nuances of Banking, Financial Services, and Insurance.
            </h2>
            
            <p className="text-white/70 mb-12 text-sm md:text-base leading-relaxed max-w-lg">
              Our domain-specific models are trained on industry data to ensure compliance, enhance customer journeys, and streamline complex operations from day one.
            </p>
            
            <div className="space-y-[22.8px] mb-12">
              {bfsiItems.map((item, i) => (
                <div 
                  key={i} 
                  className="border-b border-white/10 pb-6 group cursor-pointer"
                  onMouseEnter={() => setActiveBfsi(item.title)}
                >
                  <div className={`flex items-center justify-between transition-colors ${activeBfsi === item.title ? 'text-brand-orange' : 'text-white/70 group-hover:text-brand-orange'}`}>
                    <span className="text-lg font-medium">{item.title}</span>
                    <ArrowRight className={`w-5 h-5 transition-opacity ${activeBfsi === item.title ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-[15.2px] text-xs font-bold tracking-widest uppercase group text-white w-fit">
              <div className="bg-brand-orange text-white p-2.5 rounded-sm group-hover:bg-[#e03a1f] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              EXPLORE OUR SOLUTIONS
            </button>
          </div>
          
          <div className="lg:w-1/2 bg-[#2A0F08] relative min-h-[400px] flex items-center justify-center p-12 overflow-hidden">
            {bfsiItems.map((item, i) => (
              <img
                key={i}
                src={item.image}
                alt={`${item.title} visualization for BFSI industry`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${activeBfsi === item.title ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}
              />
            ))}
          </div>
        </>
      )
    },
    {
      id: 'ai-stack-ticker',
      className: 'bg-white p-8 md:p-12 flex flex-col items-center overflow-hidden',
      content: (
        <>
          <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-[#6E6E6E]">AI STACK</h3>
          <div className="w-full overflow-hidden relative">
            <div className="flex w-[200%] animate-ticker items-center">
              {[...tickerLogos, ...tickerLogos].map((logo, i) => (
                <div key={i} className="w-1/8 flex justify-center px-8 shrink-0">
                  <img src={logo} alt="Partner Logo" className="h-8 md:h-12 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </>
      )
    },
    {
      id: 'value-prop',
      className: 'bg-[#1A0905] flex flex-col lg:flex-row',
      content: (
        <>
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1] tracking-tight mb-8">
              Measurable impact.<br />
              Not just metrics.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              Our solutions are designed to integrate seamlessly with your existing infrastructure, delivering rapid ROI and sustainable growth.
            </p>
          </div>
          
          <div className="lg:w-1/2 p-8 md:p-12 bg-[#2A0F08] flex flex-col gap-[22.8px]">
            {[
              { metric: "40%", label: "Reduction in processing time" },
              { metric: "2.5x", label: "Increase in lead qualification" },
              { metric: "99.9%", label: "Uptime and reliability" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#1A0905] border border-brand-orange/30 rounded-[20px] p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <CardCube />
                <div className="relative z-10">
                  <h3 className="text-5xl font-bold text-brand-orange mb-2">{stat.metric}</h3>
                  <p className="text-white/80 font-medium tracking-wide">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 'gradient-statement',
      className: 'relative bg-gradient-to-br from-[#FF4D2E] via-[#ff6b52] to-[#ff8f7a] text-white px-12 py-24 md:px-20 md:py-32 animate-gradient overflow-hidden',
      content: (
        <>
          <img 
            src="https://www.dropbox.com/scl/fi/a7cm1eaws9t5pesc1vr5l/Screenshot-2026-02-28-235957.webp?rlkey=4y2hiulv2opkk3ay7udzy16a7&st=8h1cz7i0&raw=1" 
            alt="Background Texture" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-dotted-grid opacity-40 mix-blend-overlay z-0"></div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-[60.8px] lg:gap-[91.2px] items-start">
            <div className="flex-1 relative">
              <h2 className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.05]">
                Good enough isn't<br />
                good enough anymore.
              </h2>
              <div className="absolute -bottom-12 left-0 w-8 h-8 border-b-[1.5px] border-l-[1.5px] border-white/80"></div>
            </div>
            
            <div className="flex-1 flex flex-col gap-[38px] text-2xl md:text-3xl font-light tracking-wide max-w-xl relative">
              <div className="absolute -top-12 right-0 w-8 h-8 border-t-[1.5px] border-r-[1.5px] border-white/80"></div>
              <p className="leading-snug">Your customers now expect instant answers, personalized experiences.</p>
              <p className="leading-snug">If you fail to deliver that, you're not just behind in tech, you're behind in relevance, altogether.</p>
              <p className="opacity-80 leading-snug">Building upon what works is not always a bad idea.</p>
              <p className="opacity-50 leading-snug">Because when you sprint in the right direction, you reach the right destination fast, and sometimes, even first.</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'opportunities',
      className: 'bg-[#1A0905] text-white p-12 md:p-20',
      content: (
        <>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 max-w-2xl leading-[1.2]">
            Opportunities we identified<br />
            and solved already using AI.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[22.8px]">
            {opportunitiesData.map((opp, i) => (
              <div 
                key={i} 
                className="relative bg-[#2A0F08] border border-[#FF4D2E]/20 rounded-[18px] flex flex-col min-h-[420px] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,77,46,0.15)] transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-sm tracking-widest uppercase font-semibold text-white/90 leading-relaxed">
                    {opp.title}
                  </h3>
                  
                  <div className="mt-auto flex justify-center w-full">
                    <div className="relative px-6 py-3 text-[10px] tracking-[0.2em] uppercase text-white/50 transition-colors">
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-orange"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-orange"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-orange"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-orange"></div>
                      HOVER TO KNOW MORE
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-[#FF4D2E] z-20 h-0 transition-[height] duration-[350ms] ease-in group-hover:h-full group-hover:duration-[450ms] group-hover:ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[height]"></div>

                <div className="absolute inset-0 p-8 flex flex-col z-30 pointer-events-none">
                  <h3 className="text-sm tracking-widest uppercase font-semibold text-white leading-relaxed opacity-0 translate-y-[8px] transition-all duration-[200ms] ease-in delay-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-[350ms] group-hover:ease-out group-hover:delay-[150ms] will-change-[opacity,transform]">
                    {opp.title}
                  </h3>
                  
                  <p className="mt-4 text-white/90 text-sm opacity-0 translate-y-[8px] transition-all duration-[200ms] ease-in delay-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-[350ms] group-hover:ease-out group-hover:delay-[250ms] will-change-[opacity,transform]">
                    {opp.desc}
                  </p>
                  
                  <ul className="mt-6 space-y-3">
                    {opp.bullets.map((b, j) => {
                      const delays = ['group-hover:delay-[330ms]', 'group-hover:delay-[410ms]', 'group-hover:delay-[490ms]'];
                      return (
                        <li key={j} className={`flex items-center gap-3 text-white text-sm opacity-0 translate-y-[8px] transition-all duration-[200ms] ease-in delay-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-[300ms] group-hover:ease-out ${delays[j]} will-change-[opacity,transform]`}>
                          <div className="w-1.5 h-1.5 bg-white rounded-full shrink-0"></div>
                          {b}
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-auto flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase opacity-0 transition-opacity duration-[200ms] ease-in delay-0 group-hover:opacity-100 group-hover:duration-[300ms] group-hover:delay-[400ms] will-change-[opacity]">
                    EXPLORE <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 'straton-way',
      className: 'bg-[#F3F3F3] text-[#111111] p-12 md:p-20',
      content: (
        <>
          <div className="mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-[38px]">
            <div className="max-w-3xl">
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-[#6E6E6E]">THE STRATON WAY</h3>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.1]">
                We use AI with purpose.<br />
                We start with the end goal: business impact.
              </h2>
            </div>
            <p className="text-sm md:text-base max-w-[280px] text-right font-medium leading-relaxed">
              Every solution we build is designed to understand your business, anticipate challenges, and deliver business impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[22.8px] mb-12">
            <div className="lg:col-span-8 relative rounded-[20px] overflow-hidden group h-[480px]">
              <img 
                src={stratonCards[currentSlide].image} 
                alt={stratonCards[currentSlide].title} 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-[1.03] transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 bg-[#111111]/80 backdrop-blur-md p-8 rounded-xl max-w-sm border border-white/10">
                <div className="flex items-center gap-[11.4px] mb-5">
                  <div className="w-2.5 h-2.5 bg-brand-orange"></div>
                  <h4 className="text-white text-[11px] font-bold tracking-[0.15em] uppercase">{stratonCards[currentSlide].title}</h4>
                </div>
                <p className="text-white/80 text-sm leading-relaxed font-light">
                  {stratonCards[currentSlide].desc}
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-4 relative rounded-[20px] overflow-hidden group h-[480px]">
              <img 
                src={stratonCards[(currentSlide + 1) % stratonCards.length].image} 
                alt={stratonCards[(currentSlide + 1) % stratonCards.length].title} 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-[1.03] transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-[#111111]/80 backdrop-blur-md p-8 rounded-xl border border-white/10">
                <div className="flex items-center gap-[11.4px] mb-5">
                  <div className="w-2.5 h-2.5 bg-brand-orange"></div>
                  <h4 className="text-white text-[11px] font-bold tracking-[0.15em] uppercase">{stratonCards[(currentSlide + 1) % stratonCards.length].title}</h4>
                </div>
                <p className="text-white/80 text-sm leading-relaxed font-light">
                  {stratonCards[(currentSlide + 1) % stratonCards.length].desc}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex gap-[9.5px]">
              {stratonCards.map((_, idx) => (
                <div key={idx} className={`w-3.5 h-3.5 transition-colors ${idx === currentSlide ? 'bg-brand-orange' : 'bg-[#111111]'}`}></div>
              ))}
            </div>
            <div className="flex gap-[11.4px]">
              <button onClick={prevSlide} className="w-12 h-12 bg-[#FF4D2E]/30 text-[#FF4D2E] flex items-center justify-center hover:bg-[#FF4D2E]/50 transition-colors rounded-sm">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button onClick={nextSlide} className="w-12 h-12 bg-[#FF4D2E] text-white flex items-center justify-center hover:bg-[#e03a1f] transition-colors rounded-sm">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'ai-value',
      className: 'relative bg-[#1A0905] py-32 px-12 md:px-20 flex items-center justify-center overflow-hidden',
      content: (
        <>
          <img 
            src="https://www.dropbox.com/scl/fi/a7cm1eaws9t5pesc1vr5l/Screenshot-2026-02-28-235957.webp?rlkey=4y2hiulv2opkk3ay7udzy16a7&st=8h1cz7i0&raw=1" 
            alt="Background Texture" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-dotted-grid opacity-20 z-0"></div>
          <div className="relative z-10 max-w-[54rem] mx-auto text-center p-10 md:p-14">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-brand-orange"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-brand-orange"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-brand-orange"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-brand-orange"></div>

            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium text-brand-orange leading-[1.15] tracking-tight">
              AI is only valuable when it solves<br />
              the right business problems<br />
              and adds measurable value.
            </h2>
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
