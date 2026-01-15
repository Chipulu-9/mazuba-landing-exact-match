import solarPanelsImage from "@/assets/solar-panels-field.jpg";
import inverterImage from "@/assets/inverter.jpg";
import batteryImage from "@/assets/battery-storage.jpg";
import mountingImage from "@/assets/mounting-rails.jpg";

const products = [
  {
    image: solarPanelsImage,
    title: "Solar System Design",
    description: "High-efficiency solar panels for residential, commercial, and industrial use.",
  },
  {
    image: inverterImage,
    title: "Inverters",
    description: "Advanced inverters for efficient energy conversion.",
  },
  {
    image: batteryImage,
    title: "Battery Storage Solutions",
    description: "Reliable supply of solar components and systems.",
  },
  {
    image: mountingImage,
    title: "Mounting Rails & Accessories",
    description: "Durable, easy to install mounting solutions, and installation kits.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 bg-gradient-dark relative overflow-hidden">
      {/* Decorative solar panel image */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-20">
        <img
          src={solarPanelsImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="section-divider">
          <h2 className="section-title-light">Our Products</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 shadow-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-primary text-sm md:text-base mb-1">
                {product.title}
              </h3>
              <p className="text-xs md:text-sm text-white/70">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl">
            Learn More About Our Services →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
