
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2"
          aria-label="Hafiz Pizza Hut Home"
        >
          <span className="text-2xl font-display font-bold text-restaurant-red">Hafiz</span>
          <span className="text-2xl font-display font-bold text-restaurant-dark">Pizza Hut</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={`nav-link ${isActive('/menu') ? 'active' : ''}`}
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
          <a 
            href="tel:+923488826061" 
            className="flex items-center gap-2 bg-restaurant-red text-white px-4 py-2 rounded-full hover:bg-restaurant-red/90 transition-all duration-300"
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <a 
            href="tel:+923488826061" 
            className="bg-restaurant-red text-white p-2 rounded-full"
            aria-label="Call Now"
          >
            <Phone size={18} />
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-restaurant-dark p-1"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobile && (
        <div 
          className={`fixed inset-0 bg-white z-40 pt-20 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center gap-6 p-8">
            <Link 
              to="/" 
              className={`text-xl font-medium ${isActive('/') ? 'text-restaurant-red' : 'text-restaurant-dark'}`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`text-xl font-medium ${isActive('/menu') ? 'text-restaurant-red' : 'text-restaurant-dark'}`}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              className={`text-xl font-medium ${isActive('/about') ? 'text-restaurant-red' : 'text-restaurant-dark'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-xl font-medium ${isActive('/contact') ? 'text-restaurant-red' : 'text-restaurant-dark'}`}
            >
              Contact
            </Link>
            <a 
              href="tel:+923488826061" 
              className="flex items-center gap-2 bg-restaurant-red text-white px-6 py-3 rounded-full mt-4 hover:bg-restaurant-red/90 transition-all duration-300"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
