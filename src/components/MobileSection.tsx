import React from 'react';
import { Smartphone, Check, CodeIcon, UsersIcon, RocketIcon } from 'lucide-react';

const MobileSection: React.FC = () => {
  const features = [
    'Native iOS and Android development',
    'Cross-platform with React Native & Flutter',
    'Progressive Web Apps (PWAs)',
    'Offline functionality',
    'Push notifications',
    'Mobile payments integration',
    'Location-based services',
    'Biometric authentication',
  ];

  return (
    <section id="mobile" className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-[280px]">
  {/* Phone frame */}
  <div className="relative z-10 border-8 border-gray-800 rounded-[3rem] overflow-hidden shadow-2xl h-[580px] w-[280px]">
    {/* Status bar */}
    <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 flex items-center justify-center">
      <div className="w-20 h-4 bg-black rounded-full"></div>
    </div>
    
    {/* Home indicator */}
    <div className="absolute bottom-2 inset-x-0 flex justify-center">
      <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
    </div>
    
    {/* Screen content - StackVibes App Preview */}
    <div className="absolute inset-0 mt-6 mb-2 bg-gradient-to-br from-primary-900 to-primary-700 p-4 flex flex-col">
      {/* App header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <span className="text-white font-bold text-lg">StackVibes</span>
        </div>
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
      
      {/* Notification cards */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-3 border border-white/5 transform hover:scale-[1.02] transition-transform">
        <div className="flex items-start mb-2">
          <div className="bg-accent-500 p-2 rounded-lg mr-3">
            <RocketIcon className="text-white" size={16} />
          </div>
          <div>
            <p className="text-white font-medium">New Feature!</p>
            <p className="text-white/60 text-sm">The eature you need !</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-3 border border-white/5">
        <div className="flex items-start mb-2">
          <div className="bg-purple-500 p-2 rounded-lg mr-3">
            <UsersIcon className="text-white" size={16} />
          </div>
          <div>
            <p className="text-white font-medium">3 teammates online</p>
            <p className="text-white/60 text-sm">Lets get the job done !</p>
          </div>
        </div>
      </div>
      
      {/* Code snippet preview */}
      <div className="mt-4 bg-black/40 rounded-xl p-3 mb-4 font-mono">
        <div className="text-green-400 text-sm">// Your latest snippet</div>
        <div className="text-white text-xs mt-2">
          <span className="text-purple-300">function</span>{' '}
          <span className="text-yellow-300">deployAwesome</span>() {'{'}
        </div>
        <div className="text-white text-xs ml-4">
          <span className="text-blue-300">return</span>{' '}
          <span className="text-cyan-300">🔥</span>;
        </div>
        <div className="text-white text-xs">{'}'}</div>
      </div>
      
      {/* CTA Button */}
      <button className="mt-auto bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl py-3 px-4 text-white font-bold flex items-center justify-center hover:shadow-lg hover:shadow-accent-500/30 transition-all">
        <CodeIcon className="mr-2" size={18} />
        Start Coding Now
      </button>
    </div>
  </div>
  
  {/* Glow effects */}
  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-500/30 rounded-full blur-2xl"></div>
  <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary-500/20 rounded-full blur-2xl"></div>
</div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Powerful <span className="text-accent-400">Mobile Applications</span> for Your Business
            </h2>
            
            <p className="text-gray-200 text-lg mb-8">
              Our expert team develops high-performance, feature-rich mobile applications 
              that engage users and drive growth. Experience our capabilities firsthand with a personalized demo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-accent-400" />
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-accent-500 text-white rounded-md font-medium hover:bg-accent-600 transition-colors inline-block"
              >
                Request a Mobile App Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;