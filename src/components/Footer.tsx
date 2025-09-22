import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterProps {
  brandName?: string;
  location?: string;
}

const Footer = ({ brandName = 'KaizenScript', location = '' }: FooterProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'WordPress Development', href: '#services' },
      { name: 'Custom Applications', href: '#services' },
      { name: 'E-commerce Solutions', href: '#services' },
      { name: 'Performance Optimization', href: '#services' },
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Work', href: '#portfolio' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Free Consultation', href: '#contact' },
      { name: 'Support', href: '#contact' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' },
    ],
  };

  return (
    <footer className="bg-agency-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-agency-cyan/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/10 rounded-full blur-lg" />
      </div>

      <div className="relative">
        {/* Main Footer */}
        <div className="section-padding border-b border-border">
          <div className="container-agency">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-3xl font-bold text-gradient mb-4">
                    {brandName}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                    Crafting websites that perform. We combine modern development
                    practices with proven WordPress + TypeScript solutions to deliver
                    exceptional digital experiences.
                  </p>

                  <Button
                    onClick={() =>
                      document
                        .getElementById('contact')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="px-6 py-3 rounded-lg font-semibold"
                  >
                    Start Your Project
                  </Button>
                </motion.div>
              </div>

              {/* Links Sections */}
              {Object.entries(footerLinks).map(([title, links], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
                >
                  <h3 className="font-semibold text-foreground mb-4">{title}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
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
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
            >
              {/* Copyright */}
              <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                <span>
                  © {currentYear} {brandName}.
                </span>
                <span>{location}</span>
              </div>

              {/* Tagline */}
              <div className="text-muted-foreground text-sm text-center md:text-right">
                Crafting websites that perform.
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="absolute bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
