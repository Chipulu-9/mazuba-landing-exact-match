import { useState } from 'react';

const allProducts = [
  'Inverters', 'Batteries', 'Solar Panels', 'Solar Power Backup Systems',
  'Protection Kits', 'AC & DC Pumps', 'Incubators', 'Laptops',
  'Gaming Consoles', 'Gadgets', 'Electronics',
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-divider">
          <h2 className="section-title">Our Services</h2>
        </div>

        {/* Service Tags */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium text-secondary text-sm sm:text-base">Solar Installation</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium text-secondary text-sm sm:text-base">Energy Efficiency Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium text-secondary text-sm sm:text-base">Distributor Partnerships</span>
          </div>

          {/* Products & Equipment Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-md font-medium hover:opacity-90 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Products &amp; Equipment
          </button>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* About Card */}
          <div className="bg-background rounded-xl overflow-hidden shadow-lg border border-border animate-fade-in">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/assets/images/solar-technician.png"
                alt="Solar technician installing panels"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                About <span className="italic">Mazuba</span> LTD
              </h3>
              <p className="text-secondary leading-relaxed">
                Mazuba Envirotech LTD specializes in renewable energy solutions, providing high-quality{' '}
                <span className="font-semibold text-secondary">solar panels</span>, inverters, and mounting rails. Based in Chingola, Zambia, we empower communities with reliable, affordable solar energy for residential, commercial and industrial needs.
              </p>
            </div>
          </div>

          {/* Location Card */}
          <div
            className="bg-background rounded-xl overflow-hidden shadow-lg border border-border animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src="/assets/images/shop-mockup.jpg"
                alt="Mazuba Solar Store"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                MAZUBA SOLAR STORE
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Our Locat<span className="text-accent">ion</span>{' '}
                <span className="italic font-normal text-secondary">store in</span>
              </h3>
              <p className="text-secondary mb-4">
                HardWork Shopping Complex |{' '}
                <span className="font-semibold text-secondary">Shop No. 8</span> &ndash; 1 Corner Of 1th Street &amp; Fern Avenue. Chingola, Copperbelt, Zambia
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <span className="text-secondary font-medium">+260761695008</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span className="text-secondary">mazubaenvirotec@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products & Equipment Modal */}
      <div
        className={`modal-overlay${modalOpen ? ' active' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
      >
        <div className="modal-content">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-primary">Our Products &amp; Equipment</h3>
              <p className="text-sm text-secondary">Browse our complete range of solar and electronic products</p>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="p-1 rounded hover:bg-muted transition-colors"
            >
              <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
            {allProducts.map((product) => (
              <div
                key={product}
                className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-accent/10 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-secondary">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
