import { Handshake, Settings, Leaf, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "Trusted Expertise",
    description: "Years of experience in solar energy solutions.",
  },
  {
    icon: Settings,
    title: "High-Quality Products",
    description: "Top tier solar panels, inverters and accessories.",
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    description: "Environmentally friendly energy efficient solar systems.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    description: "Dedicated support and personalized service.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-secondary mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-cta text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore All Products →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
