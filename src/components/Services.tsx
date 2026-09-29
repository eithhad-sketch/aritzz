import { Car, Crown, Clock, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Crown,
    title: 'Professional Chauffeur',
    description:
      'Discreet, background-checked chauffeurs delivering a seamless first-class journey for business, events, and airport transfers.',
    features: ['Punctual & Professional', 'Door-to-Door Service', 'Hourly or Daily Rates'],
  },
  {
    icon: Car,
    title: 'Self-Drive Rentals',
    description:
      'Take the wheel of the world\'s most coveted automobiles. Flexible daily, weekend, and weekly rentals with premium insurance options.',
    features: ['Daily & Weekly Rates', 'Premium Insurance', 'Free Delivery in Metro Area'],
  },
  {
    icon: Clock,
    title: 'Event & Wedding',
    description:
      'Make your special occasion unforgettable with bespoke luxury transportation tailored to your timeline and aesthetic.',
    features: ['Custom Packages', 'Multi-Vehicle Bookings', 'Decorated Upon Request'],
  },
  {
    icon: Shield,
    title: 'Corporate Accounts',
    description:
      'Reliable executive transportation for your team and clients. Dedicated account management with monthly invoicing.',
    features: ['Priority Booking', 'Monthly Invoicing', 'Dedicated Coordinator'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0f0f0f] relative">
      {/* Subtle gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c5a572]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c5a572] text-sm tracking-[0.3em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
            Signature Services
          </h2>
          <div className="w-16 h-px bg-[#c5a572] mx-auto" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative p-8 bg-[#141414] border border-white/5 hover:border-[#c5a572]/30 transition-all duration-500"
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-[#c5a572]/10 border border-[#c5a572]/20 group-hover:bg-[#c5a572] group-hover:border-[#c5a572] transition-all duration-500">
                    <Icon
                      size={26}
                      className="text-[#c5a572] group-hover:text-black transition-colors duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-3">{s.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {s.description}
                    </p>
                    <div className="space-y-2">
                      {s.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-sm text-white/50"
                        >
                          <span className="w-1 h-1 bg-[#c5a572] rounded-full" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[#c5a572] hover:text-[#d4b88a] tracking-wider uppercase text-sm font-semibold transition-colors group"
          >
            Request a Custom Quote
            <ArrowRight
              size={18}
              className="group-hover:translate-x-2 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
