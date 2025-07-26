import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicePageLayout = ({ title,alt, tagline, bannerImage, description, services, cta }) => {
  return (
    <>
   <div className="relative bg-secondary pt-20">
  <div className="absolute inset-0">
    <img
      className="w-full h-full object-cover opacity-80" // Adjusted for visibility
      alt={alt}
      src={bannerImage}
    />
    {/* Overlay to darken image */}
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold text-white mb-6"
    >
      {title}
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-xl text-white max-w-3xl mx-auto"
    >
      {tagline}
    </motion.p>
  </div>
</div>


      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <p className="text-lg text-muted-foreground">{description}</p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`relative h-96 ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <img  className="w-full h-full object-cover rounded-2xl shadow-lg" alt={service.alt} src={service.image} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-24"
            >
              <div className="bg-secondary rounded-2xl p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">{cta.title}</h2>
                <p className="text-xl text-muted-foreground mb-8">{cta.description}</p>
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white pulse-glow">
                  <NavLink to="/contact">
                    {cta.buttonText} <ArrowRight className="ml-2 w-5 h-5" />
                  </NavLink>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServicePageLayout;