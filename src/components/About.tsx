import { Sparkles, Star } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Satisfied Clients' },
  { value: '40+', label: 'Premium Vehicles' },
  { value: '24/7', label: 'Availability' },
  { value: '100%', label: 'Satisfaction' },
];

const testimonials = [
  {
    name: 'Marcus Wellington',
    role: 'CEO, Wellington Capital',
    text: 'Flawless from start to finish. The chauffeur was punctual, professional, and the vehicle was immaculate. This is how luxury transportation should feel.',
  },
  {
    name: 'Isabella Fontaine',
    role: 'Event Planner',
    text: 'I book Velora Grand for all my high-end clients. They never disappoint. The fleet is extraordinary and the service is consistently five-star.',
  },
  {
    name: 'Richard Sterling',
    role: 'Private Client',
    text: 'Rented the Cullinan for a weekend getaway. The booking was effortless and the car was pristine. Absolutely the best in the business.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* About text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <p className="text-[#c5a572] text-sm tracking-[0.3em] uppercase mb-3">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
              A New Standard in
              <br />
              <span className="text-[#c5a572]">Luxury Transportation</span>
            </h2>
            <div className="w-16 h-px bg-[#c5a572] mb-6" />
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Founded on a passion for automotive excellence and an unwavering
              commitment to hospitality, Velora Grand was born to redefine what
              luxury transportation means. Every vehicle in our collection is
              meticulously maintained, and every chauffeur is hand-selected for
              their professionalism and discretion.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              From the moment you book to the moment you arrive, we orchestrate
              every detail with precision so you can simply enjoy the journey.
              Whether it's a corporate engagement, a wedding, or a weekend of
              driving pleasure — we deliver an experience worthy of the
              extraordinary vehicles in our fleet.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl md:text-3xl text-[#c5a572] font-light">
                    {s.value}
                  </p>
                  <p className="text-xs text-white/40 tracking-wider uppercase mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[420px] md:h-[520px] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8425380/pexels-photo-8425380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Luxury chauffeur service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#c5a572]/40" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#c5a572]/40" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={16} className="text-[#c5a572]" />
            <p className="text-[#c5a572] text-sm tracking-[0.3em] uppercase">
              Client Experiences
            </p>
            <Sparkles size={16} className="text-[#c5a572]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 bg-[#141414] border border-white/5 hover:border-[#c5a572]/20 transition-colors duration-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-[#c5a572] fill-[#c5a572]"
                  />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed italic mb-6">
                "{t.text}"
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#c5a572] font-medium text-sm">{t.name}</p>
                <p className="text-white/40 text-xs mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
