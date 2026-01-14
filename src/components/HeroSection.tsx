import { useState } from "react";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-solar-equipment.jpg";
import Logo from "./Logo";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote requested for:", email);
    setEmail("");
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/40 to-secondary-dark/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Logo */}
        <div className="pt-6 pb-12">
          <div className="bg-background/95 backdrop-blur-sm rounded-lg p-3 w-fit shadow-lg">
            <Logo />
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight">
            Get a <span className="text-primary">FREE</span><br />
            Solar Package Quote!
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Looking for the best solar solution for your home or business?<br />
            Get a customized quote today!
          </p>
        </div>

        {/* Quote Form Card */}
        <div className="max-w-xl mx-auto mt-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-secondary-dark/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-secondary-light/20">
            <h2 className="text-xl md:text-2xl font-semibold text-primary text-center mb-6">
              Would you like a free solar package quote?
            </h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 rounded-lg text-secondary bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="px-6 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Get My Free Quote
              </button>
            </form>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 text-white/90">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">No Obligation</span>
              </div>
              <span className="hidden md:block text-white/50">•</span>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Fast & Easy</span>
              </div>
              <span className="hidden md:block text-white/50">•</span>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Expert Advice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
