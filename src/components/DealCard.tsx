
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export interface DealProps {
  id: string;
  name: string;
  price: number;
  image: string;
  items: string[];
  popular?: boolean;
}

const DealCard = ({ deal }: { deal: DealProps }) => {
  return (
    <motion.div 
      className="deal-card bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {deal.popular && (
        <div className="absolute top-4 right-4">
          <span className="bg-restaurant-red text-white text-xs px-3 py-1 rounded-full font-medium">
            Popular
          </span>
        </div>
      )}
      
      <div className="bg-gradient-to-r from-restaurant-dark to-restaurant-brown text-white py-3 px-4 text-center">
        <h3 className="font-display font-bold text-xl">{deal.name}</h3>
      </div>
      
      <div className="p-6 flex flex-col items-center">
        <div className="mb-4 w-full flex justify-center items-center">
          <img 
            src={deal.image || "/lovable-uploads/7ff8890d-e310-4f9f-b66b-edfdefe90b74.png"} 
            alt={deal.name} 
            className="w-20 h-20 object-contain mx-auto opacity-30"
          />
        </div>
        
        <p className="text-restaurant-red font-display font-bold text-2xl mb-5 border-b border-gray-100 pb-4 w-full text-center">
          Rs. {deal.price}/-
        </p>
        
        <div className="w-full">
          <ul className="text-restaurant-brown/90 space-y-3">
            {deal.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-restaurant-red mt-0.5">
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default DealCard;
