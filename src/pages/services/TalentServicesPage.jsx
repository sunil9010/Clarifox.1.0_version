import React from 'react';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Users, UserCheck, UserPlus } from 'lucide-react';

const TalentServicesPage = () => {
  const services = [
    {
      icon: UserPlus,
      title: "Contingent Staffing",
      description: "Quickly scale your team with our pool of pre-vetted, highly skilled professionals for short-term projects or temporary needs. We provide the agility you need to meet fluctuating demands without the overhead of permanent hires.",
      image: "Flexible team augmentation with contingent staff joining a project",
      url:'images/Staffing.jpg'
    },
    {
      icon: UserCheck,
      title: "Ai Direct Hire / Permanent Placement",
      description: "Let us handle the entire recruitment process, from sourcing and screening to negotiating offers, to find your next permanent team member. We focus on long-term fit, not just filling a seat.",
      image: "Successful candidate shaking hands with a hiring manager in an office",
      url:'images/Direct_hire.jpg'
    },
    {
      icon: Users,
      title: "Executive Search",
      description: "We specialize in identifying and attracting high-impact senior leaders and executives who can drive your company's vision forward. Our discreet and thorough process ensures you find the right leadership.",
      image: "Boardroom meeting with executive leadership discussing strategy",
      url:'images/Board meeting.jpg'
    }
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>Talent Services | Clarifox</title>
        <meta name="description" content="Connecting Exceptional Talent with Leading Companies through our specialized staffing and recruitment services." />
      </Helmet>
<div className="relative bg-secondary pt-20 overflow-hidden">
  <div className="absolute inset-0">
    <img
      className="w-full h-full object-cover opacity-80"
      alt="Abstract background of interconnected human figures"
      src="images/general_staffing.png"
    />
    {/* ✅ Dark overlay added below */}
    <div className="absolute inset-0 bg-black/40 z-10"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-20"></div>
  </div>

  <div className="relative z-30 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold text-white mb-6"
    >
      Talent Services
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-xl text-muted-foreground text-white/90 max-w-3xl mx-auto"
    >
      Connecting Exceptional Talent with Leading Companies.
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Building World-Class Teams</h2>
            <p className="text-lg text-muted-foreground">In today's competitive market, finding the right talent is crucial for success. Clarifox's Talent Services are designed to help you build a world-class team. We go beyond traditional recruiting to understand your company culture, technical needs, and long-term goals, ensuring we find candidates who are not just qualified, but are the perfect fit for your organization.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={service.image} src={service.url} />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-6 -mt-16 self-center z-10 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-center flex-grow">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-24"
          >
            <div className="bg-secondary rounded-2xl p-12 max-w-4xl mx-auto shadow-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Build Your Dream Team?</h2>
              <p className="text-xl text-muted-foreground mb-8">Partner with Clarifox to find the talent that will propel your business forward.</p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white pulse-glow">
                <NavLink to="/contact">
                  Find Talent Now <ArrowRight className="ml-2 w-5 h-5" />
                </NavLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TalentServicesPage;