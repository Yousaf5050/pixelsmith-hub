import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Layout, 
  ShoppingCart, 
  Smartphone, 
  Zap, 
  Shield,
  Database,
  Palette
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code2,
      title: 'Custom WordPress Development',
      description: 'Tailored WordPress solutions with custom themes, plugins, and advanced functionality for your unique requirements.',
      features: ['Custom Themes', 'Plugin Development', 'API Integration', 'Performance Optimization']
    },
    {
      icon: Layout,
      title: 'Landing Page Design',
      description: 'High-converting landing pages designed to capture leads and drive conversions with modern design principles.',
      features: ['Conversion Focused', 'Mobile Responsive', 'A/B Testing Ready', 'SEO Optimized']
    },
    {
      icon: ShoppingCart,
      title: 'WooCommerce Stores',
      description: 'Complete e-commerce solutions with custom checkout flows, inventory management, and payment integration.',
      features: ['Custom Checkout', 'Payment Gateway', 'Inventory System', 'Order Management']
    },
    {
      icon: Smartphone,
      title: 'React & TypeScript Development',
      description: 'Modern web applications built with React and TypeScript for scalability, maintainability, and performance.',
      features: ['Type Safety', 'Component Library', 'State Management', 'Testing Suite']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your existing website with advanced optimization techniques and modern best practices.',
      features: ['Core Web Vitals', 'Image Optimization', 'Code Splitting', 'Caching Strategy']
    },
    {
      icon: Database,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development services including backend APIs, databases, and cloud infrastructure.',
      features: ['API Development', 'Database Design', 'Cloud Deployment', 'DevOps Setup']
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Ongoing security monitoring, updates, and maintenance to keep your website safe and performing.',
      features: ['Security Audits', 'Regular Updates', 'Backup Solutions', 'Monitoring']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive interfaces that enhance user experience and engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    }
  ];

  return (
    <section id="services" className="section-padding bg-agency-light">
      <div className="container-agency">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive web development services to help your business 
            succeed online. From WordPress to custom applications, we've got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="card-agency group hover:shadow-glow"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-accent rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom solution that fits your needs and budget.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;