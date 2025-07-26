import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'AI-generated image of a glowing neural network integrated with a city skyline at night',
      title: "Architecting Tomorrow's Intelligence, Today.",
      description: "Harness the power of AI to redefine possibilities. At Clarifox, we build intelligent systems that learn, adapt, and drive unprecedented growth.",
      url: "images/Ai_human.jpg"
    },
    {
      image: "images/hire_train_deploy.jpg",
      title: "Hire Smart. Train Fast. Deploy with Confidence.",
      description: "Customized workforce solutions designed to get your teams up to speed and ready to deliver, fast.",
      url: "images/hiring_1.jpg"
    },
    {
      image: "images/microsoft_services.jpg",
      title: "Unlock the Power of Microsoft Solutions.",
      description: "From cloud migration to advanced analytics, we make Microsoft technologies work for your business growth.",
      url: "images/cloud_computing.jpg"
    },
    {
      image: "images/artificial_intelligence.jpg",
      title: "Turning AI Dreams into Business Reality.",
      description: "Our AI solutions learn, adapt, and optimize, driving smarter decision-making and greater efficiency.",
      url: "images/Ai.jpg"
    },
    {
      image: "images/analytics_bi.jpg",
      title: "Transform Data into Decisions.",
      description: "With our analytics and BI solutions, you gain clarity and confidence to act on what matters most.",
      url: "images/powerBi.jpg"
    },
    {
      image: "images/cyber_security.jpg",
      title: "Fortify Your Digital Future.",
      description: "Proactive cybersecurity solutions designed to safeguard your assets and ensure resilience against threats.",
      url: "images/Cyber_security.jpg"
    },
    {
      image: "images/training_solutions.jpg",
      title: "Upskill. Reskill. Excel.",
      description: "Empowering teams with the knowledge and skills needed to thrive in a rapidly changing tech landscape.",
      url: "images/people_vr.jpg"
    },
    {
      image: "images/exclusive_search.jpg",
      title: "Finding Exceptional Leaders for Exceptional Futures.",
      description: "We deliver executive search solutions that align leadership with long-term vision.",
      url: "images/Professional.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[calc(100vh-0px)] min-h-[600px] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Slide with Overlay */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <img
            className="w-full h-full object-cover"
            alt={slides[currentSlide].image}
            src={slides[currentSlide].url}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/20 backdrop-blur-[1px]" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8 text-left">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="max-w-3xl"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}
          >
            {slides[currentSlide].title}
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            {slides[currentSlide].description}
          </motion.p>

          <motion.div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg font-semibold shadow-lg group"
            >
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-primary text-gradient-to-r px-8 py-4 text-lg font-semibold group shadow-md"
            >
              <Link to="/talent-services">
                Our Services
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary shadow-lg scale-125 ring-2 ring-white/80'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
