import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Mazuba Envirotech LTD</h3>
            <p className="text-white/70 text-sm">
              Empowering communities with reliable, affordable solar energy solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-white/70 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>+260761695008</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>mazubaenvirotec@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>Shop No. 8, HardWork Shopping Complex, Chingola, Zambia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © 2026 Mazuba Envirotech Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
