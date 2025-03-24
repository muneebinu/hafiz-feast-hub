
import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const CallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="tel:+923488826061"
      className={`call-button ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} transition-all duration-300`}
      aria-label="Call Now"
    >
      <div className="relative">
        <Phone size={24} className="z-10 relative" />
        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
      </div>
    </a>
  );
};

export default CallButton;
