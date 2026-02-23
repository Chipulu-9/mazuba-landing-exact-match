import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-screen w-full overflow-hidden pb-10 md:pb-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/hero-solar-equipment.jpg')" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/40 to-secondary-dark/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center max-w-3xl mx-auto animate-fade-in pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight">
            Get a <span className="text-primary">FREE</span>
            <br />
            Solar Package Quote!
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Looking for the best solar solution for your home or business?
            <br />
            Get a customized quote today!
          </p>
        </div>

        {/* Quote CTA Card */}
        <div className="max-w-xl mx-auto mt-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-secondary-dark/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-secondary-light/20">
            <h2 className="text-xl md:text-2xl font-semibold text-primary text-center mb-6">
              Would you like a free solar package quote?
            </h2>

            <div className="flex justify-center">
              <Link
                to="/quote"
                className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-10 py-4 rounded-lg transition-colors duration-200 text-lg"
              >
                Get Quote
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">No Obligation</span>
              </div>
              <span className="hidden md:block text-white/50">&bull;</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">Fast &amp; Easy</span>
              </div>
              <span className="hidden md:block text-white/50">&bull;</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">Expert Advice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
