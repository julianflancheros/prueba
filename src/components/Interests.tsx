'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  FiRadio, FiBarChart, FiCode, FiEdit3, 
  FiDatabase, FiTruck, FiShoppingCart, FiFeather 
} from 'react-icons/fi';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';

const iconMap: Record<string, any> = {
  radar: FiRadio,
  chart: FiBarChart,
  code: FiCode,
  brush: FiEdit3,
  database: FiDatabase,
  truck: FiTruck,
  store: FiShoppingCart,
  leaf: FiFeather,
};

const colors = [
  'var(--color-green)',
  'var(--color-second-green)',
  '#ffa76e',
  '#5578ff',
  '#4233ff',
  '#e361ff',
  '#47aeff',
  '#b2904f',
];

export default function Interests() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'es';
  const content = locale === 'es' ? contentEs : contentEn;

  return (
    <section className="section-container relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{content.interests.title}</h2>
          <div className="h-1 w-20 rounded-full mx-auto mt-4" 
               style={{ backgroundColor: 'var(--color-green)' }} />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {content.interests.items.map((interest, index) => {
            const Icon = iconMap[interest.icon];
            const color = colors[index % colors.length];
            
            return (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="relative group cursor-pointer"
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ backgroundColor: color }}
                />
                
                {/* Card */}
                <div 
                  className="relative p-6 rounded-2xl border-2 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'var(--color-body)',
                    borderColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  {/* Icon container */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      {/* Icon background */}
                      <div 
                        className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden"
                        style={{ backgroundColor: 'var(--color-container-light)' }}
                      >
                        {/* Animated gradient background */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`
                          }}
                        />
                        
                        <Icon
                          className="w-10 h-10 relative z-10 transition-colors duration-300"
                          style={{
                            color: 'var(--color-text-secondary)'
                          }}
                          onMouseEnter={(e: React.MouseEvent<SVGElement>) => {
                            (e.target as SVGElement).style.color = color;
                          }}
                          onMouseLeave={(e: React.MouseEvent<SVGElement>) => {
                            (e.target as SVGElement).style.color = 'var(--color-text-secondary)';
                          }}
                        />
                      </div>
                      
                      {/* Corner accent */}
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                        style={{ backgroundColor: color }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                      />
                    </motion.div>

                    {/* Text */}
                    <h3 
                      className="font-semibold text-sm md:text-base transition-colors duration-300"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {interest.name}
                    </h3>
                  </div>

                  {/* Bottom line accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 rounded-full"
                    style={{ backgroundColor: color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
