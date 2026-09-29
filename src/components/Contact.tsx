import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, CheckCircle } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', phone: '', service: '', date: '', message: '' });
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '(305) 555-0192' },
    { icon: Mail, label: 'Email', value: 'reservations@veloragrand.com' },
    { icon: MapPin, label: 'Location', value: '1200 Brickell Avenue, Miami, FL 33131' },
    { icon: Clock, label: 'Hours', value: '24/7 — Always Available' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0f0f0f] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c5a572]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#c5a572] text-sm tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
            Reserve Your Experience
          </h2>
          <div className="w-16 h-px bg-[#c5a572] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-2xl font-light mb-6">
              Let us craft your <span className="text-[#c5a572]">perfect journey</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              Whether you need a chauffeur for an important engagement or want to
              experience the thrill of driving a supercar, our team is ready to
              accommodate your every request. Reach out and we'll respond within
              the hour.
            </p>

            <div className="space-y-5">
              {contactInfo.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#c5a572]/10 border border-[#c5a572]/20">
                      <Icon size={20} className="text-[#c5a572]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 tracking-wider uppercase">
                        {c.label}
                      </p>
                      <p className="text-white/80 text-sm mt-1">{c.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 mt-10">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 flex items-center justify-center border border-white/15 hover:border-[#c5a572] hover:bg-[#c5a572] hover:text-black text-white/60 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-[#141414] border border-white/5 p-8 md:p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <CheckCircle size={48} className="text-[#c5a572] mb-4" />
                <h3 className="text-xl font-light mb-2">Request Received</h3>
                <p className="text-white/50 text-sm">
                  Thank you. Our concierge team will contact you within the hour.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/40 tracking-wider uppercase mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a572] py-3 text-sm text-white outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 tracking-wider uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a572] py-3 text-sm text-white outline-none transition-colors"
                      placeholder="(305) 555-0100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/40 tracking-wider uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a572] py-3 text-sm text-white outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/40 tracking-wider uppercase mb-2">
                      Service Type
                    </label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a572] py-3 text-sm text-white outline-none transition-colors"
                    >
                      <option value="" className="bg-[#141414]">Select...</option>
                      <option value="chauffeur" className="bg-[#141414]">Chauffeur Service</option>
                      <option value="rental" className="bg-[#141414]">Self-Drive Rental</option>
                      <option value="event" className="bg-[#141414]">Event / Wedding</option>
                      <option value="corporate" className="bg-[#141414]">Corporate Account</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 tracking-wider uppercase mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a572] py-3 text-sm text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/40 tracking-wider uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a572] py-3 text-sm text-white outline-none transition-colors resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c5a572] text-black font-semibold tracking-wider uppercase text-sm hover:bg-[#d4b88a] transition-colors duration-300"
                >
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
