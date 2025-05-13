import React from 'react';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Cloud, 
  Brain, 
  GitMerge,
  ArrowRight
} from 'lucide-react';
import { services } from '../data/services';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="h-6 w-6 text-primary-500" />;
      case 'mobile':
        return <Smartphone className="h-6 w-6 text-primary-500" />;
      case 'palette':
        return <Palette className="h-6 w-6 text-primary-500" />;
      case 'cloud':
        return <Cloud className="h-6 w-6 text-primary-500" />;
      case 'brain':
        return <Brain className="h-6 w-6 text-primary-500" />;
      case 'git-merge':
        return <GitMerge className="h-6 w-6 text-primary-500" />;
      default:
        return <Code className="h-6 w-6 text-primary-500" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Our <span className="text-primary-500">Tech Stack</span> Powers Your Vision
          </h2>
          <p className="text-lg text-gray-600">
            We leverage cutting-edge technologies to build scalable, 
            secure, and performant applications tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg transform group-hover:-translate-y-2 transition-transform">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-primary-500 font-medium">
                    <span className="mr-2">Learn More</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Start Your Project
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;