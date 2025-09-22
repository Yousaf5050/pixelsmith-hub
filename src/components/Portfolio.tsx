import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'WordPress', 'Landing Pages', 'Custom Code'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Fashion Store',
      description: 'Modern WooCommerce store with custom checkout flow and inventory management.',
      category: 'WordPress',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      liveUrl: 'https://ritual.microservices.site',
      tech: ['WordPress', 'WooCommerce', 'Custom CSS']
    },
    {
      id: 2,
      title: 'SaaS Landing Page',
      description: 'High-converting landing page built with React and optimized for conversions.',
      category: 'Landing Pages',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      liveUrl: 'https://rehmandentalclinic.microservices.site',
      tech: ['React', 'TypeScript', 'Tailwind']
    },
    {
      id: 3,
      title: 'Book Library & Management',
      description: 'Custom web application for managing digital/physical books, categories, and borrowing system.',
      category: 'Custom Code',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop', // library/books photo
      liveUrl: 'https://cyberlib-rho.vercel.app',
      tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL']
    },
    {
      id: 4,
      title: 'E-Commerce Book Store',
      description: 'Beautiful online bookstore built on WordPress with smooth checkout and book catalog.',
      category: 'WordPress',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop', // bookstore photo
      liveUrl: 'https://antiquarian.vercel.app',
      tech: ['WordPress', 'Elementor', 'Custom Plugins']
    },
    {
      id: 5,
      title: 'Startup Landing',
      description: 'Modern startup landing page with animated sections and lead capture.',
      category: 'Landing Pages',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
      liveUrl: 'https://rehmandentalclinic.microservices.site',
      tech: ['Next.js', 'Framer Motion', 'TypeScript']
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Custom portfolio site with advanced animations and performance optimization.',
      category: 'Custom Code',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      liveUrl: 'https://wasay-ahmad.vercel.app',
      tech: ['React', 'Three.js', 'GSAP']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-agency">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Recent <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our recent projects. From WordPress sites to custom applications, 
            we deliver solutions that drive results.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-accent text-white shadow-glow' 
                  : 'hover:border-accent hover:text-accent'
              }`}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              layout
              className="group cursor-pointer"
            >
              <div className="card-agency overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="bg-white text-blue-900 hover:bg-gray-100"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Site
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;
