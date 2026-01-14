import { Check, Phone, Mail } from "lucide-react";
import technicianImage from "@/assets/solar-technician.jpg";
import storeImage from "@/assets/solar-store.jpg";

const services = [
  "Solar Installation",
  "Energy Efficiency Consultation",
  "Distributor Partnerships",
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-divider">
          <h2 className="section-title">Our Services</h2>
        </div>

        {/* Service Tags */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {services.map((service) => (
            <div key={service} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" strokeWidth={3} />
              <span className="font-medium text-secondary">{service}</span>
            </div>
          ))}
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* About Card */}
          <div className="bg-background rounded-xl overflow-hidden shadow-lg border border-border animate-fade-in">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={technicianImage}
                alt="Solar technician installing panels"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">
                About <span className="italic">Mazuba</span> LTD
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Mazuba Envirotech LTD specializes in renewable energy solutions, providing high-quality{" "}
                <span className="font-semibold text-foreground">solar panels</span>, inverters, and mounting rails. Based in Chingola, Zambia, we empower communities with reliable, affordable solar energy for residential, commercial and industrial needs.
              </p>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-background rounded-xl overflow-hidden shadow-lg border border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={storeImage}
                alt="Mazuba Solar Store"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                MAZUBA SOLAR STORE
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">
                Our Locat<span className="text-primary">ion</span> <span className="italic font-normal text-muted-foreground">store in</span>
              </h3>
              <p className="text-muted-foreground mb-4">
                HardWork Shopping Complex | <span className="font-semibold text-foreground">Shop No. 8</span> – 1 Corner Of 1th Street & Fern Avenue. Chingola, Copperbelt, Zambia
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">+260761695008</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">mazubaenvirotec@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
