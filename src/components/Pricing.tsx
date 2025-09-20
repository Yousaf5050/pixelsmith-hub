import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const packages = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and personal websites',
      price: '$2,500',
      period: 'Starting at',
      features: [
        'WordPress Website (Up to 5 pages)',
        'Responsive Design',
        'Basic SEO Setup',
        'Contact Form Integration',
        'Social Media Integration',
        '30 Days Support',
        'Basic Analytics Setup'
      ],
      popular: false,
      icon: Check
    },
    {
      name: 'Business',
      description: 'Ideal for growing businesses and e-commerce',
      price: '$5,500',
      period: 'Starting at',
      features: [
        'Everything in Starter',
        'WooCommerce Setup',
        'Advanced SEO Optimization',
        'Custom Plugin Development',
        'Performance Optimization',
        '60 Days Support',
        'Google Analytics & Search Console',
        'Payment Gateway Integration',
        'Custom Design Elements'
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Premium',
      description: 'For enterprises and complex applications',
      price: '$12,000',
      period: 'Starting at',
      features: [
        'Everything in Business',
        'Custom React/TypeScript App',
        'Advanced API Integration',
        'Custom Database Design',
        'Advanced Security Features',
        '90 Days Support',
        'Performance Monitoring',
        'Advanced Analytics Dashboard',
        'Custom Admin Panel',
        'Multi-language Support',
        'Cloud Deployment'
      ],
      popular: false,
      icon: Zap
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-agency-light">
      <div className="container-agency">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your needs. All packages include responsive design, 
            clean code, and ongoing support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className={`relative ${
                pkg.popular 
                  ? 'lg:scale-105 lg:-mt-4' 
                  : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-glow">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`card-agency h-full ${
                pkg.popular 
                  ? 'border-accent shadow-glow' 
                  : ''
              }`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    pkg.popular 
                      ? 'bg-gradient-accent' 
                      : 'bg-accent/10'
                  }`}>
                    <pkg.icon className={`w-6 h-6 ${
                      pkg.popular ? 'text-white' : 'text-accent'
                    }`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  
                  <div className="mb-2">
                    <span className="text-sm text-muted-foreground">{pkg.period}</span>
                    <div className="text-4xl font-bold text-foreground">{pkg.price}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'btn-hero' 
                      : 'btn-agency'
                  }`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Need something custom?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every project is unique. Contact us for a custom quote tailored to your 
              specific requirements and budget.
            </p>
            <Button 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Custom Quote
            </Button>
          </div>
        </motion.div>

        {/* FAQ Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            All packages include responsive design, cross-browser compatibility, and basic SEO setup. 
            <br />
            Hosting and domain setup assistance available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;