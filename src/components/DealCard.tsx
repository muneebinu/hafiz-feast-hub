
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
      className="deal-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {deal.popular && (
        <span className="tag">Popular</span>
      )}
      <div className="food-image-container">
        <img 
          src={deal.image} 
          alt={deal.name} 
          className="food-image"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{deal.name}</h3>
        <p className="text-restaurant-red font-bold text-xl mt-2">Rs. {deal.price}/-</p>
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">Includes:</p>
          <ul className="text-sm text-gray-700 space-y-1">
            {deal.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-restaurant-red">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <a 
          href="tel:+923488826061" 
          className="mt-6 btn-primary text-sm w-full flex justify-center"
        >
          Order Now
        </a>
      </div>
    </motion.div>
  );
};

export default DealCard;
