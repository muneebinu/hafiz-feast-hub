
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
      className="deal-card border-2 border-restaurant-red bg-restaurant-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-restaurant-red text-white py-2 px-3 text-center">
        <h3 className="font-bold text-lg">{deal.name}</h3>
      </div>
      
      <div className="p-5 flex flex-col items-center">
        <p className="text-restaurant-red font-bold text-2xl mb-4">Rs. {deal.price}/-</p>
        
        <div className="flex flex-col w-full">
          <div className="w-full mb-3">
            <img 
              src="/lovable-uploads/7ff8890d-e310-4f9f-b66b-edfdefe90b74.png" 
              alt="Hafiz Pizza Hut Logo" 
              className="w-20 h-20 object-contain mx-auto opacity-20"
            />
          </div>
          
          <div className="w-full">
            <ul className="text-restaurant-brown space-y-2">
              {deal.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-restaurant-red mt-0.5">
                    <Check size={16} />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DealCard;
