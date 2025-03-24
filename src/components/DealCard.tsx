
import { motion } from 'framer-motion';

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
      className="deal-card border-2 border-restaurant-red bg-restaurant-cream rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-restaurant-red text-white py-1 px-3 text-center">
        <h3 className="font-bold">{deal.name}</h3>
      </div>
      
      <div className="p-4 flex flex-col items-center">
        <p className="text-restaurant-red font-bold text-xl mb-3">Rs. {deal.price}/-</p>
        
        <div className="flex items-center gap-4">
          <div className="w-1/3">
            <img 
              src="/lovable-uploads/7ff8890d-e310-4f9f-b66b-edfdefe90b74.png" 
              alt="Hafiz Pizza Hut Logo" 
              className="w-20 h-20 object-contain mx-auto opacity-20"
            />
          </div>
          
          <div className="w-2/3">
            <ul className="text-sm text-restaurant-brown space-y-1">
              {deal.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-semibold">{item}</span>
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
