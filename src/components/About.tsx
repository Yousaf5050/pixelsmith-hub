import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Users, Award } from 'lucide-react';
import developerAvatar from '@/assets/developer-avatar.jpg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'WordPress', 'Elementor', 'WooCommerce', 'TypeScript', 
    'React', 'Next.js', 'Tailwind CSS', 'Node.js'
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Modern Development',
      description: 'Cutting-edge technologies and best practices for every project.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Rapid development cycles without compromising on quality.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Collaborative approach ensuring your vision becomes reality.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Thorough testing and optimization for peak performance.'
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
                We design and develop
                <span className="text-gradient block">websites that convert</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our agency combines the flexibility of WordPress with the power of modern 
                TypeScript development. We create custom solutions that scale with your 
                business, from simple landing pages to complex e-commerce platforms.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With expertise in both content management systems and custom web applications, 
                we deliver the perfect solution for your unique requirements.
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
                  src={developerAvatar}
                  alt="Professional Developer"
                  className="w-80 h-80 rounded-2xl object-cover mx-auto shadow-strong"
                />
                
                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-medium"
                >
                  <div className="text-3xl font-bold text-accent mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
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