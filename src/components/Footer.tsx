import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'WordPress Development', href: '#services' },
      { name: 'Custom Applications', href: '#services' },
      { name: 'E-commerce Solutions', href: '#services' },
      { name: 'Performance Optimization', href: '#services' }
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Work', href: '#portfolio' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' }
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Free Consultation', href: '#contact' },
      { name: 'Support', href: '#contact' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' }
    ]
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent to-agency-cyan"></div>
      </div>

      <div className="relative">
        {/* Main Footer */}
        <div className="section-padding border-b border-white/10">
          <div className="container-agency">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-gradient mb-4">
                    DevStudio
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed max-w-md">
                    Crafting websites that perform. We combine modern development 
                    practices with proven WordPress solutions to deliver exceptional 
                    digital experiences.
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-accent hover:bg-agency-cyan text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      Start Your Project
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Links Sections */}
              {Object.entries(footerLinks).map(([title, links], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-white mb-4">{title}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-white/70 hover:text-accent transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="container-agency">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
            >
              {/* Copyright */}
              <div className="flex items-center space-x-1 text-white/70 text-sm">
                <span>© {currentYear} DevStudio. Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>in San Francisco</span>
              </div>

              {/* Tagline */}
              <div className="text-white/70 text-sm text-center md:text-right">
                Crafting websites that perform.
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-8 right-8 w-12 h-12 bg-accent hover:bg-agency-cyan text-white rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;