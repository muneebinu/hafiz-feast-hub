
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface LocationProps {
  id: string;
  name: string;
  address: string;
  phone: string[];
  mapUrl: string;
}

const LocationCard = ({ location }: { location: LocationProps }) => {
  return (
    <motion.div 
      className="location-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-4">{location.name}</h3>
      
      <div className="flex items-start gap-3 mb-3">
        <MapPin size={18} className="text-restaurant-red mt-1" />
        <p className="text-gray-700">{location.address}</p>
      </div>
      
      <div className="flex items-start gap-3 mb-3">
        <Phone size={18} className="text-restaurant-red mt-1" />
        <div>
          {location.phone.map((number, index) => (
            <p key={index} className="text-gray-700">
              <a href={`tel:${number.replace(/-/g, '')}`} className="hover:text-restaurant-red transition-colors">
                {number}
              </a>
            </p>
          ))}
        </div>
      </div>
      
      <div className="flex items-start gap-3 mb-6">
        <Clock size={18} className="text-restaurant-red mt-1" />
        <p className="text-gray-700">11:00 AM - 11:00 PM</p>
      </div>
      
      <a 
        href={location.mapUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-outline text-sm w-full flex justify-center mt-4"
      >
        View on Map
      </a>
    </motion.div>
  );
};

export default LocationCard;
