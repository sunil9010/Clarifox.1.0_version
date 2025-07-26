import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';

const HireTrainDeployPage = () => {
 const pageData = {
  title: "Hire, Train & Deploy Talent",
  tagline: "Empowering Businesses with Industry-Ready Professionals",
  bannerImage: "images/Hire.TrainDeploy-program.jpg",
  description:
    "Our Hire, Train & Deploy (HTD) model bridges the skill gap by providing organizations with thoroughly vetted, custom-trained professionals who are project-ready from day one. We identify top talent, equip them with specialized skills tailored to your business needs, and seamlessly integrate them into your workforce, reducing hiring risks and accelerating delivery timelines.",
  services: [
    {
      title: "Tailored Training Programs",
      description:
        "We design and deliver bespoke training modules aligned with your technology stack, workflows, and organizational culture, ensuring candidates gain the exact skills your projects demand.",
      image: "images/tailored_training.png",
    },
    {
      title: "Strategic Talent Sourcing",
      description:
        "Our expert recruiters leverage advanced assessments to identify individuals with the right technical aptitude and mindset, building a strong pipeline of high-potential professionals.",
      image: "images/stratergy_soluctions.png",
    },
    {
      title: "Smooth Workforce Integration",
      description:
        "From training completion to deployment, we ensure hassle-free onboarding and continuous support to help new hires integrate quickly and contribute effectively from day one.",
      image: "images/smooth_work_force.png",
    },
  ],
  cta: {
    title: "Build Your Skilled Workforce Today",
    description:
      "Leverage our Hire, Train & Deploy model to access custom-trained talent and accelerate business growth.",
    buttonText: "Get Started with HTD",
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
      <div className="relative bg-secondary pt-20">
  <div className="absolute inset-0">
    <img
      className="w-full h-full object-cover opacity-80"
      alt={title}
      src={bannerImage}
    />
    {/* Dark overlay for better text readability */}
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
                  index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`relative h-96 ${index % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                  <img
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                    alt={service.title}
                    src={service.image}
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {service.description}
                  </p>
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
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {cta.title}
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  {cta.description}
                </p>
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

export default HireTrainDeployPage;
