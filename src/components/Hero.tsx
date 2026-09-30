import { ChevronRight, Star } from 'lucide-react';
import { useRef, useEffect } from 'react';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onLoaded = () => {
      video.playbackRate = 1.8;
    };
    video.addEventListener('loadedmetadata', onLoaded);
    video.addEventListener('canplay', onLoaded);
    if (video.readyState >= 2) onLoaded();
    return () => {
      video.removeEventListener('loadedmetadata', onLoaded);
      video.removeEventListener('canplay', onLoaded);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.mevoyages.com/A%20Tier%20Exotics/hero-mobile.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.mevoyages.com/A%20Tier%20Exotics/hero.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="flex items-center gap-2 mb-6 animate-[fadeIn_1s_ease-in]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-[#c5a572] fill-[#c5a572]" />
          ))}
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-white mb-4 animate-[fadeInUp_1.2s_ease-out]">
          DISTINCTION
          <br />
          <span className="text-[#c5a572] font-normal">IN MOTION</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl tracking-wide mb-10 animate-[fadeInUp_1.4s_ease-out]">
          Premium chauffeur services and elite exotic car rentals for those who
          expect nothing less than extraordinary.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_1.6s_ease-out]">
          <a
            href="#fleet"
            className="group flex items-center gap-3 px-10 py-4 bg-[#c5a572] text-black font-semibold tracking-wider uppercase text-sm hover:bg-[#d4b88a] transition-all duration-300"
          >
            Explore Our Fleet
            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border border-white/30 text-white font-semibold tracking-wider uppercase text-sm hover:border-[#c5a572] hover:text-[#c5a572] transition-all duration-300"
          >
            Book Chauffeur
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-[bounce_2s_infinite]">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronRight size={16} className="rotate-90" />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
