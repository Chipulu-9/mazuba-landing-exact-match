const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Installations' },
  { value: '100%', label: 'Satisfaction' },
];

export default function WhyChoose() {
  return (
    <section className="py-16 bg-secondary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <img src="/assets/images/solar-panels-field.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="section-divider">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Why Choose <span className="text-primary">Mazuba Envirotech?</span>
          </h2>
        </div>

        <p className="text-center text-white/90 max-w-2xl mx-auto mb-8 text-base sm:text-lg px-2">
          Looking for the best solar solution for your home or business? Explore electricity in, simple days!
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-accent/20 text-center"
            >
              <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
