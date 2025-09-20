import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animated code elements
  const codeElements = [
    '<div className="dev">',
    'const build = () => {',
    '// TypeScript',
    'useState<T>',
    '</React.Fragment>',
    'npm run build',
    'git commit -m',
    '{ WordPress }',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-tech">
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-dev-cyan/20 via-transparent to-dev-purple/20" />
        {/* Floating Code Elements */}
        {codeElements.map((code, index) => (
          <motion.div
            key={index}
            className="absolute text-dev-cyan/30 font-mono text-sm md:text-base"
            initial={{ opacity: 0, x: -100 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              x: typeof window !== 'undefined' ? window.innerWidth + 100 : 1200,
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              delay: index * 2,
              ease: "linear"
            }}
            style={{
              top: `${10 + index * 10}%`,
              left: -100,
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--dev-cyan)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--dev-cyan)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30" />

      {/* Content */}
      <div className="relative z-10 container-agency text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-dev-secondary/80 backdrop-blur-md border border-dev-cyan/30 rounded-full text-dev-cyan text-sm font-mono mb-8"
          >
            <Terminal className="w-3 h-3 mr-2" />
            <span className="animate-pulse">●</span>
            <span className="ml-2">Available for new projects</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="font-mono text-dev-cyan">&lt;</span>
            WordPress & TypeScript
            <br />
            <span className="text-gradient font-mono">Developer Agency</span>
            <span className="font-mono text-dev-cyan">/&gt;</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We build fast, scalable, and conversion-focused websites for startups and businesses. 
            <span className="text-neon font-mono"> // Modern tech meets proven WordPress solutions</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection('portfolio')}
              className="btn-hero group"
            >
              <Code className="mr-2 h-5 w-5" />
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="btn-outline-hero"
            >
              <Terminal className="mr-2 h-5 w-5" />
              Hire Us Today
            </Button>
          </motion.div>

          {/* Developer Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-16 border-t border-dev-cyan/20"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-dev-cyan mb-2 font-mono">50+</div>
              <div className="text-white/80 text-sm font-mono">{"{ projects: 'delivered' }"}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-dev-cyan mb-2 font-mono">99%</div>
              <div className="text-white/80 text-sm font-mono">client.satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-dev-cyan mb-2 font-mono">&lt;24h</div>
              <div className="text-white/80 text-sm font-mono">response.time()</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Terminal Cursor Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <div className="text-dev-cyan font-mono text-sm mb-2">scroll_down()</div>
          <div className="w-6 h-10 border-2 border-dev-cyan/40 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-dev-cyan rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;