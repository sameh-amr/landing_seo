import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const binaryStrings: BinaryString[] = [];
    const numStrings = 50;

    class BinaryString {
      x: number;
      y: number;
      speed: number;
      text: string;
      fontSize: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 2 + 1;
        this.text = Math.random().toString(2).substring(2, 10);
        this.fontSize = Math.random() * 12 + 8;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -20;
          this.x = Math.random() * canvas.width;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.font = `${this.fontSize}px monospace`;
        ctx.fillStyle = `rgba(79, 70, 229, ${this.opacity})`;
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      binaryStrings.length = 0;
      
      for (let i = 0; i < numStrings; i++) {
        binaryStrings.push(new BinaryString());
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      binaryStrings.forEach(string => {
        string.update();
        string.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 to-primary-800/90 z-10" />
      
      <div className="relative container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 animate-slide-up">
              <span className="block">Stacking Ideas.</span>
              <span className="block text-accent-400">Vibing Innovation.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              We transform complex challenges into elegant digital solutions. 
              Our tech expertise brings your vision to life with cutting-edge web and mobile applications.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a 
                href="#demos" 
                className="px-6 py-3 bg-accent-500 text-white rounded-md font-medium hover:bg-accent-600 transition-colors flex items-center justify-center group"
              >
                View Our Work 
                <ArrowRight size={18} className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-md font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Start Your Project
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <Code size={20} className="text-accent-400" />
                <span className="ml-2 text-white">Modern Tech Stack</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <Zap size={20} className="text-accent-400" />
                <span className="ml-2 text-white">Fast Delivery</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <Globe size={20} className="text-accent-400" />
                <span className="ml-2 text-white">Global Solutions</span>
              </div>
            </div>
          </div>
          
<div className="relative hidden lg:block">
  <div className="relative z-10 bg-white/5 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-white/10 transform hover:scale-105 transition-transform duration-300 group">
    {/* Retro Terminal Header */}
    <div className="flex justify-between items-center mb-6">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors"></div>
      </div>
      <span className="text-xs text-white/50 tracking-wider">DEV_MODE: ACTIVE</span>
    </div>

    {/* Glitchy Terminal Text */}
    <div className="font-mono space-y-3 text-white/90">
      <div className="flex items-center">
        <span className="text-purple-400 mr-2">❯❯❯</span>
        <span className="typing-animation">Welcome to StackVibes_</span>
        <span className="blink">|</span>
      </div>
      <div className="flex">
        <span className="text-cyan-300 mr-2">{'>>'}</span>
        <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Build. Ship. Wow.
        </span>
      </div>
      <div className="flex">
        <span className="text-yellow-300 mr-2">$</span>
        <span className="hover:text-accent-300 transition-colors cursor-default">
          npm run unleash-creativity
        </span>
      </div>
      <div className="flex opacity-80">
        <span className="text-green-300 mr-2">✓</span>
        <span>Loading: 100% awesome</span>
      </div>
    </div>

    {/* Hacker-style Progress Bar */}
    <div className="mt-6 mb-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" 
        style={{ width: "85%" }}
      ></div>
    </div>

    {/* Glowing CTA Button */}
    {/* <div className="mt-6 flex justify-end">
      <button className="px-5 py-2 bg-gradient-to-br from-cyan-500/90 to-purple-600/90 text-white font-medium rounded-lg hover:shadow-glow hover:shadow-cyan-500/30 transition-all duration-300 group-hover:scale-105">
        DEPLOY AWESOME →
      </button>
    </div> */}
  </div>

  {/* Neon Glow Effects */}
  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:opacity-80 transition-opacity"></div>
  <div className="absolute -top-8 -left-8 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:opacity-80 transition-opacity"></div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;