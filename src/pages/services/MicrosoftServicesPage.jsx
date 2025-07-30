import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';

const MicrosoftServicesPage = () => {
  const pageData = {
    title: "Microsoft Services",
    tagline: "Unlocking the Full Potential of the Microsoft Ecosystem",
    bannerImage: "images/microsoft_azure.png",
    description:
      "As a Microsoft partner, Clarifox provides comprehensive services across the entire Microsoft stack. From cloud infrastructure on Azure to business applications with Dynamics 365 and modern workplace solutions with Microsoft 365, our certified experts help you design, implement, and manage solutions that drive efficiency and innovation.",
    services: [
      {
        title: "Enterprise-Grade Azure Cloud Solutions",
        description:
          "Unlock the full potential of Microsoft Azure with our expert-driven cloud transformation services. From seamless migration of your existing infrastructure to designing highly secure, scalable, and resilient architectures, we provide end-to-end Azure solutions that empower businesses to innovate faster, reduce costs, and ensure business continuity. Our managed services ensure continuous monitoring, optimization, and compliance to meet your evolving business needs.",
        image: "images/Azure_cloud.png",
      },
      {
        title: "Intelligent Dynamics 365 Implementation & Optimization",
        description:
          "Revolutionize your business operations with our tailored Dynamics 365 solutions. Whether it's CRM for customer engagement or ERP for robust business process automation, we specialize in delivering industry-specific implementations designed to enhance efficiency, drive sales, and improve decision-making. Our approach includes strategic planning, seamless integration with your existing systems, and user adoption programs to maximize ROI and deliver long-term success.",
        image: "images/Microsoft_365_2.png",
      },
      {
        title: "Microsoft 365 & Modern Workplace Transformation",
        description:
          "Boost organizational collaboration and productivity with our comprehensive Microsoft 365 solutions. We enable businesses to fully leverage tools such as Microsoft Teams, SharePoint, Outlook, OneDrive, and the Power Platform to create a secure, modern, and connected workplace. Our services include migration, deployment, governance, and employee training, ensuring smooth adoption and unlocking the true potential of cloud-powered teamwork and innovation.",
        image: "images/Microsoft_365.png",
      },
    ],
    cta: {
      title: "Ready to Leverage Microsoft Technologies?",
      description:
        "Talk to our Microsoft certified experts to start your digital transformation journey.",
      buttonText: "Consult an Expert",
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
      className="w-full h-full object-cover opacity-90"
      alt={title}
      src={bannerImage}
    />
    {/* Overlay to enhance text visibility */}
    <div className="absolute inset-0 bg-black/40 z-10"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-20"></div>
  </div>

  <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-30">
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
        index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
      }`}
    >
      <motion.div
        className={`relative h-96 ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}
        whileHover={{ scale: 1.05, rotate: 1 }} // Hover effect on image container
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover rounded-2xl shadow-lg"
          whileHover={{
            scale: 1.08,
            rotate: 2,
            boxShadow: '0px 20px 30px rgba(0,0,0,0.2)',
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold gradient-text">{service.title}</h2>
        <p className="text-lg text-muted-foreground">{service.description}</p>
      </motion.div>
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
    </PageWrapper>
  );
};

export default MicrosoftServicesPage;
