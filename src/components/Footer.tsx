
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-restaurant-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-restaurant-red">Hafiz</span>
              <span className="text-2xl font-display font-bold text-white">Pizza Hut</span>
            </div>
            <p className="text-gray-300 mt-2">
              Delicious Burgers & Pizzas, Just a Call Away!
            </p>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-restaurant-red p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-restaurant-red p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-restaurant-red p-2 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-display font-semibold">Quick Links</h3>
            <div className="h-1 w-12 bg-restaurant-red rounded-full mb-2"></div>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-restaurant-red transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-restaurant-red transition-colors duration-300">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-restaurant-red transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-restaurant-red transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-display font-semibold">Contact Us</h3>
            <div className="h-1 w-12 bg-restaurant-red rounded-full mb-2"></div>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-restaurant-red mt-1" />
                <div>
                  <p className="text-gray-300">Branch 1:</p>
                  <p className="text-gray-300">0946-723238 / 0348-8826061</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-restaurant-red mt-1" />
                <div>
                  <p className="text-gray-300">Branch 2:</p>
                  <p className="text-gray-300">0946-883904 / 0344-8426566</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-restaurant-red mt-1" />
                <p className="text-gray-300">info@hafizpizzahut.com</p>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-display font-semibold">Opening Hours</h3>
            <div className="h-1 w-12 bg-restaurant-red rounded-full mb-2"></div>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-restaurant-red" />
                <div>
                  <p className="text-gray-300">Monday - Thursday</p>
                  <p className="text-gray-300">11:00 AM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-restaurant-red" />
                <div>
                  <p className="text-gray-300">Friday - Sunday</p>
                  <p className="text-gray-300">11:00 AM - 12:00 AM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Hafiz Pizza Hut. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 text-sm hover:text-restaurant-red transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-restaurant-red transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
