import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { Target, Eye, Award, Lightbulb, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    { icon: Lightbulb, title: "Innovation", description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions." },
    { icon: Users, title: "Partnership", description: "We build long-term, collaborative relationships with our clients based on trust and mutual success." },
    { icon: Award, title: "Excellence", description: "We are committed to the highest standards of quality and performance in everything we do." },
    { icon: CheckCircle, title: "Integrity", description: "We operate with transparency, honesty, and a strong sense of corporate responsibility." }
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>About Us | Clarifox</title>
        <meta name="description" content="Learn about Clarifox's mission, vision, and the values that drive our commitment to delivering exceptional IT and staffing solutions." />
      </Helmet>

      <div className="relative bg-secondary pt-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
          >
            About Clarifox
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Your strategic partner in navigating the ever-evolving landscape of technology and talent.
          </motion.p>
        </div>
      </div>

      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
        <div className="max-w-screen-xl mx-auto">
          <section className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[500px]"
              >
                <img  className="absolute w-full h-full object-cover rounded-2xl shadow-lg" alt="Team meeting in a modern conference room" src="https://images.unsplash.com/photo-1690191886622-fd8d6cda73bd" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                    <p className="text-lg text-muted-foreground mt-2">To empower businesses with transformative technology solutions and connect them with the exceptional talent needed to drive innovation and growth.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                    <p className="text-lg text-muted-foreground mt-2">To be the most trusted and sought-after partner for IT and staffing solutions, recognized for our commitment to excellence, integrity, and client success.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="mb-24 bg-secondary p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-secondary rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Partner with a team that's as invested in your success as you are.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white pulse-glow">
                <NavLink to="/contact">Contact Us Today</NavLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;