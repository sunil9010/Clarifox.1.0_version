import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/PageWrapper';

const AiPage = () => {
  const pageData = {
    title: "Artificial Intelligence",
    tagline: "Integrating Intelligence into Your Business",
    bannerImage: "images/AI-02.jpg", // Replace with actual image URL
    description:
      "Artificial Intelligence is no longer a futuristic concept; it's a business reality. Clarifox helps you harness the power of AI to automate processes, gain deeper insights, and create innovative products and services. Our team of data scientists and AI engineers can guide you from strategy and development to full-scale implementation.",
    services: [
      {
        title: "Machine Learning Models",
        description:
          "We build and deploy custom machine learning models for predictive analytics, natural language processing, computer vision, and more.",
        image: "images/Ai_automation.png",
      },
      {
        title: "AI-Powered Automation (RPA)",
        description:
          "Streamline your business operations by automating repetitive tasks with Robotic Process Automation (RPA) and intelligent workflows.",
        image: "images/Rap_2.png",
      },
      {
        title: "AI Strategy & Consulting",
        description:
          "Not sure where to start with AI? Our experts can help you identify high-impact use cases and create a roadmap for AI adoption.",
        image: "images/Ai_training.png",
      },
    ],
    cta: {
      title: "Ready to Unlock the Power of AI?",
      description:
        "Let's explore how artificial intelligence can revolutionize your business.",
      buttonText: "Start Your AI Journey",
    },
  };

  const { title, tagline, bannerImage, description, services, cta } = pageData;

  return (
    <PageWrapper>
      <Helmet>
        <title>{title} | Clarifox</title>
        <meta name="description" content={tagline} />
      </Helmet>

      {/* Banner Section */}
      <div className="relative bg-secondary pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-100"
          alt={title}
          src={bannerImage}
        />
        {/* Optional Top Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        {/* ✨ Global Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
  Analytics & Business <span className="animate-shimmer font-semibold">Intelligence</span>
</h1>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-200 max-w-3xl mx-auto"
        >
          {tagline}
        </motion.p>
      </div>
    </div>
      {/* Description Section */}
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

          {/* Services Section */}
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`relative h-96 ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <img
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                    alt={service.title}
                    src={service.image}
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
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
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-white pulse-glow"
                >
                  <NavLink to="/contact">
                    {cta.buttonText} <ArrowRight className="ml-2 w-5 h-5" />
                  </NavLink>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default AiPage;
