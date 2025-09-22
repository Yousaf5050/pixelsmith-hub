import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Users, Award, ShoppingCart, Mail, Phone } from 'lucide-react';
import teamAvatar from '@/assets/developer-avatar.jpg'; // replace with your actual group/team picture

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'WordPress', 'Elementor', 'WooCommerce', 'Shopify',
    'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MERN Stack'
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Tech-Driven',
      description: 'Blending creativity with code to deliver impactful solutions.'
    },
    {
      icon: Zap,
      title: 'Agile Execution',
      description: 'Fast iterations and quick turnarounds while maintaining quality.'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Experts',
      description: 'Building conversion-focused online stores with WooCommerce & Shopify.'
    },
    {
      icon: Award,
      title: 'Excellence from NUST',
      description: 'Built on the strong foundation of innovation and discipline at NUST.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-agency-light">
      <div className="container-agency">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                We are <span className="text-gradient">Kaizen Script</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At <strong>Kaizen Script</strong>, we craft modern, performance-driven digital 
                experiences for businesses that want to stand out. Founded by three passionate 
                <strong> Computer Science undergraduates from NUST</strong>, we combine academic 
                rigor with real-world expertise to deliver impactful solutions.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our expertise spans <strong>WordPress development</strong>, <strong>Shopify store 
                creation</strong>, and <strong>MERN stack applications</strong>. Whether it’s a 
                conversion-focused business website, a scalable e-commerce platform, or a complex 
                web application, we turn ideas into seamless, high-performance products.
              </p>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium border border-accent/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href="mailto:contact@kaizen.microservices.site" className="hover:underline">
                    contact@kaizen.microservices.site
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-accent" />
                  <a href="tel:+923027907961" className="hover:underline">
                    +92 302 790 7961
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image & Stats */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src={teamAvatar}
                  alt="Kaizen Script Team"
                  className="w-80 h-80 rounded-2xl object-cover mx-auto shadow-strong"
                />
                
                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-medium"
                >
                  <div className="text-3xl font-bold text-accent mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Innovators from NUST</div>
                </motion.div>
              </div>

              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl transform rotate-6 opacity-20 -z-10"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              className="card-agency text-center"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
