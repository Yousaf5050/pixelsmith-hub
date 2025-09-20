import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    'Free initial consultation',
    'Quick turnaround time',
    'Ongoing support included',
    'Money-back guarantee',
  ];

  return (
    <section className="section-padding bg-agency-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-agency-cyan/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/10 rounded-full blur-lg"></div>
      </div>

      <div className="container-agency relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-card border border-border rounded-full text-sm font-medium mb-8 shadow-medium"
          >
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
            Ready to start your project?
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            Let's Build Something
            <br />
            <span className="text-gradient">Amazing Together</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to transform your digital presence? Let's discuss your project 
            and create a solution that drives real results for your business.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          >
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center justify-center space-x-2 text-muted-foreground text-sm"
              >
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 rounded-xl font-semibold"
            >
              Work With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={() =>
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }
              variant="outline"
              className="px-8 py-4 rounded-xl font-semibold"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 pt-12 border-t border-border"
          >
            <div className="text-muted-foreground text-sm mb-4">
              Or reach out directly:
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-foreground">
              <a
                href="mailto:hello@devstudio.com"
                className="hover:text-accent transition-colors font-medium"
              >
                hello@devstudio.com
              </a>
              <a
                href="tel:+15551234567"
                className="hover:text-accent transition-colors font-medium"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
