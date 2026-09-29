import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-[0.2em] text-[#c5a572]">
                VELORA
              </span>
              <span className="text-xs tracking-[0.3em] text-white/40 mt-1">GRAND</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-md mb-6">
              Premium chauffeur services and exotic car rentals. Experience
              distinction in motion with our meticulously curated fleet and
              unwavering commitment to excellence.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#c5a572] hover:text-[#c5a572] text-white/40 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm tracking-wider uppercase text-white/60 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Fleet', href: '#fleet' },
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/40 hover:text-[#c5a572] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-wider uppercase text-white/60 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/40">
                <Phone size={14} className="text-[#c5a572]" />
                (305) 555-0192
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <Mail size={14} className="text-[#c5a572]" />
                reservations@veloragrand.com
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <MapPin size={14} className="text-[#c5a572]" />
                1200 Brickell Avenue, Miami, FL
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 tracking-wider">
            © 2026 Velora Grand. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-[#c5a572] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-[#c5a572] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-[#c5a572] transition-colors">
              Rental Agreement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
