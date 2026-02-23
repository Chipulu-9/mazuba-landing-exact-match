import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isQuotePage = location.pathname === '/quote';

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/assets/images/mazuba-logo.webp"
              alt="Mazuba Envirotech Limited"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isQuotePage ? (
              <Link
                to="/"
                className="text-secondary font-medium hover:text-accent transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full" />
              </Link>
            ) : (
              <>
                <a href="#home" className="text-secondary font-medium hover:text-accent transition-colors duration-200 relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full" />
                </a>
                <a href="#about" className="text-secondary font-medium hover:text-accent transition-colors duration-200 relative group">
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full" />
                </a>
                <a href="#products" className="text-secondary font-medium hover:text-accent transition-colors duration-200 relative group">
                  Products
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full" />
                </a>
                <a href="#contact" className="text-secondary font-medium hover:text-accent transition-colors duration-200 relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full" />
                </a>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {isQuotePage ? (
              <Link to="/" onClick={closeMenu} className="block py-2 text-secondary font-medium hover:text-accent transition-colors duration-200">
                Home
              </Link>
            ) : (
              <>
                <a href="#home" onClick={closeMenu} className="block py-2 text-secondary font-medium hover:text-accent transition-colors duration-200">Home</a>
                <a href="#about" onClick={closeMenu} className="block py-2 text-secondary font-medium hover:text-accent transition-colors duration-200">About Us</a>
                <a href="#products" onClick={closeMenu} className="block py-2 text-secondary font-medium hover:text-accent transition-colors duration-200">Products</a>
                <a href="#contact" onClick={closeMenu} className="block py-2 text-secondary font-medium hover:text-accent transition-colors duration-200">Contact</a>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
