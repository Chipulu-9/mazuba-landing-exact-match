import { Check, Phone, Mail, ChevronDown } from "lucide-react";
import technicianImage from "@/assets/solar-technician.jpg";
import storeImage from "@/assets/solar-store.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const mainServices = [
  "Solar Installation",
  "Energy Efficiency Consultation",
  "Distributor Partnerships",
];

const allProducts = [
  "Inverters",
  "Batteries",
  "Solar Panels",
  "Solar Power Backup Systems",
  "Protection Kits",
  "AC & DC Pumps",
  "Incubators",
  "Laptops",
  "Gaming Consoles",
  "Gadgets",
  "Electronics",
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
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12">
          {mainServices.map((service) => (
            <div key={service} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-accent" strokeWidth={3} />
              <span className="font-medium text-secondary">{service}</span>
            </div>
          ))}
          
          {/* Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Check className="w-5 h-5" strokeWidth={3} />
                Products & Equipment
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background border border-border shadow-lg z-50">
              {allProducts.map((product) => (
                <DropdownMenuItem key={product} className="cursor-pointer hover:bg-accent/10 text-secondary">
                  <Check className="w-4 h-4 text-accent mr-2" />
                  {product}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
              <h3 className="text-xl font-bold text-primary mb-3">
                About <span className="italic">Mazuba</span> LTD
              </h3>
              <p className="text-secondary leading-relaxed">
                Mazuba Envirotech LTD specializes in renewable energy solutions, providing high-quality{" "}
                <span className="font-semibold text-secondary">solar panels</span>, inverters, and mounting rails. Based in Chingola, Zambia, we empower communities with reliable, affordable solar energy for residential, commercial and industrial needs.
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
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                MAZUBA SOLAR STORE
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Our Locat<span className="text-accent">ion</span> <span className="italic font-normal text-secondary">store in</span>
              </h3>
              <p className="text-secondary mb-4">
                HardWork Shopping Complex | <span className="font-semibold text-secondary">Shop No. 8</span> – 1 Corner Of 1th Street & Fern Avenue. Chingola, Copperbelt, Zambia
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <Phone className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-secondary font-medium">+260761695008</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <Mail className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-secondary">mazubaenvirotec@gmail.com</span>
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
