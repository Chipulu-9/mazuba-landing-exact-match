import solarPanelsImage from "@/assets/solar-panels-field.jpg";

const WhyChooseSection = () => {
  return (
    <section className="py-16 bg-secondary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={solarPanelsImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="section-divider">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Why Choose <span className="text-primary">Mazuba Envirotech?</span>
          </h2>
        </div>

        <p className="text-center text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
          Looking for the best solar solution for your home or business? Explore electricity in, simple days!
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20 text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-primary-foreground/80">Years Experience</div>
          </div>
          <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20 text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-primary-foreground/80">Installations</div>
          </div>
          <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20 text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-primary-foreground/80">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
