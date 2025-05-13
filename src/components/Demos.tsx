import React, { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { demos } from '../data/demos';

const DemoIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'crm':
      return <img src="/src/assets/icon-crm.svg" alt="CRM" className="h-5 w-5" />;
    case 'landing':
      return <img src="/src/assets/icon-landing.svg" alt="Landing Page" className="h-5 w-5" />;
    case 'ecommerce':
      return <img src="/src/assets/icon-ecommerce.svg" alt="E-commerce" className="h-5 w-5" />;
    case 'chatbot':
      return <img src="/src/assets/icon-chatbot.svg" alt="Chatbot" className="h-5 w-5" />;
    default:
      return <Code className="h-5 w-5" />;
  }
};

const Demos: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="demos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Our <span className="text-primary-500">Demo Showcase</span>
          </h2>
          <p className="text-lg text-gray-600">
            Explore our live demos to see the quality and capabilities of our work.
            Each project demonstrates our commitment to excellence in design and functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {demos.map((demo) => (
            <div 
              key={demo.id}
              className="group relative rounded-xl overflow-hidden shadow-lg h-[350px]"
              onMouseEnter={() => setHoveredCard(demo.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${demo.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 ease-in-out">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-primary-500 rounded-full p-1">
                    <DemoIcon type={demo.icon} />
                  </span>
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {demo.title}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">
                  {demo.title}
                </h3>
                
                <p className={`text-gray-300 mb-4 transform transition-all duration-300 ease-in-out ${
                  hoveredCard === demo.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {demo.description}
                </p>
                
                <a 
                  href={demo.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-md transition-all duration-300 ease-in-out ${
                    hoveredCard === demo.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  View Demo <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demos;