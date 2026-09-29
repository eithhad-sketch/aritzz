import { useState } from 'react';
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';

type Vehicle = {
  name: string;
  category: string;
  image: string;
  price: string;
  features: string[];
  badge?: string;
};

const vehicles: Vehicle[] = [
  {
    name: 'Rolls-Royce Cullinan',
    category: 'Luxury SUV',
    image:
      'https://images.pexels.com/photos/3894049/pexels-photo-3894049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$1,500/day',
    features: ['Chauffeur Available', 'Seats 4', 'VIP Experience'],
    badge: 'Signature',
  },
  {
    name: 'Lamborghini Huracán',
    category: 'Exotic Supercar',
    image:
      'https://images.pexels.com/photos/13980815/pexels-photo-13980815.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$1,200/day',
    features: ['Self-Drive', 'V10 Engine', 'Track Ready'],
  },
  {
    name: 'Mercedes-Maybach S680',
    category: 'Luxury Sedan',
    image:
      'https://images.pexels.com/photos/10638649/pexels-photo-10638649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$800/day',
    features: ['Chauffeur Included', 'Executive Class', 'Seats 4'],
  },
  {
    name: 'Bentley Bentayga',
    category: 'Luxury SUV',
    image:
      'https://images.pexels.com/photos/15824825/pexels-photo-15824825.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$1,100/day',
    features: ['Chauffeur Available', 'Handcrafted Interior', 'Seats 5'],
  },
  {
    name: 'McLaren 720S',
    category: 'Exotic Supercar',
    image:
      'https://images.pexels.com/photos/9452144/pexels-photo-9452144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$1,800/day',
    features: ['Self-Drive', 'Twin-Turbo V8', '0-60 in 2.9s'],
    badge: 'New',
  },
  {
    name: 'Range Rover Autobiography',
    category: 'Luxury SUV',
    image:
      'https://images.pexels.com/photos/14471686/pexels-photo-14471686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$650/day',
    features: ['Self-Drive or Chauffeur', 'All-Terrain', 'Seats 5'],
  },
];

const categories = ['All', 'Luxury SUV', 'Exotic Supercar', 'Luxury Sedan'];

export function Fleet() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState<Vehicle | null>(null);

  const filtered =
    activeCategory === 'All'
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory);

  return (
    <section id="fleet" className="py-24 md:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c5a572] text-sm tracking-[0.3em] uppercase mb-3">
            Our Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
            The Elite Fleet
          </h2>
          <div className="w-16 h-px bg-[#c5a572] mx-auto" />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-sm tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#c5a572] text-black font-semibold'
                  : 'border border-white/20 text-white/60 hover:border-[#c5a572] hover:text-[#c5a572]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicle grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((v) => (
            <div
              key={v.name}
              className="group relative bg-[#141414] border border-white/5 hover:border-[#c5a572]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
                {v.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-[#c5a572] text-black text-xs font-semibold tracking-wider uppercase">
                    {v.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#c5a572] text-xs tracking-widest uppercase mb-2">
                  {v.category}
                </p>
                <h3 className="text-xl font-medium mb-3">{v.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {v.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-white/50 px-2 py-1 border border-white/10"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-[#c5a572] text-lg font-semibold">
                    {v.price}
                  </span>
                  <button
                    onClick={() => setSelected(v)}
                    className="flex items-center gap-1 text-sm text-white/60 hover:text-[#c5a572] transition-colors group/btn"
                  >
                    Details
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#141414] border border-[#c5a572]/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/60 text-white hover:bg-[#c5a572] hover:text-black transition-colors text-xl"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <p className="text-[#c5a572] text-xs tracking-widest uppercase mb-2">
                {selected.category}
              </p>
              <h3 className="text-3xl font-light mb-4">{selected.name}</h3>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#c5a572] text-2xl font-semibold">
                  {selected.price}
                </span>
                <span className="text-white/40 text-sm">+ security deposit</span>
              </div>
              <div className="space-y-3 mb-8">
                {selected.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#c5a572]" />
                    <span className="text-white/80">{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setSelected(null)}
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#c5a572] text-black font-semibold tracking-wider uppercase text-sm hover:bg-[#d4b88a] transition-colors"
              >
                <Calendar size={18} />
                Reserve This Vehicle
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
