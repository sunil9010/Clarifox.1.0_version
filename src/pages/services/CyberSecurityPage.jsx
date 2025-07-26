import React, { useState,useEffect } from 'react';

import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Shield, Search, Server, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const CyberSecurityPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const servicesCarousel = [
    {
      icon: Shield,
      title: "Threat & Vulnerability Management",
      description: "We conduct thorough security assessments, penetration testing, and vulnerability scanning to identify and remediate weaknesses in your systems before attackers can exploit them.",
      image: "images/Cyber_shield.png",
      alt:'Threat & Vulnerability Management'
    },
    {
      icon: Server,
      title: "Managed Security Services (MSSP)",
      description: "Our 24/7 Security Operations Center (SOC) provides continuous monitoring, threat detection, and incident response to keep you protected around the clock.",
      image: "images/Mssp.png",
      alt:'Managed Security Services (MSSP)'
    },
    {
      icon: Users,
      title: "Security Awareness Training",
      description: "Your employees are your first line of defense. We provide engaging training programs to educate your team on identifying and avoiding phishing, malware, and other social engineering attacks.",
      image: "images/cyber_training.png",
      alt:'Security Awareness Training'
    },
    {
      icon: Search,
      title: "Compliance & Governance",
      description: "Navigate complex regulatory landscapes with ease. We help you achieve and maintain compliance with standards like GDPR, HIPAA, and ISO 27001.",
      image: "images/law_2.png",
      alt:'Compliance & Governance'
    }
  ];

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide(prev => (prev + 1) % servicesCarousel.length);
  }, 3000); // Auto-scroll every 5 seconds

  return () => clearInterval(interval);
}, [servicesCarousel.length]);

  const next = () => setCurrentSlide(currentSlide === servicesCarousel.length - 1 ? 0 : currentSlide + 1);
  const prev = () => setCurrentSlide(currentSlide === 0 ? servicesCarousel.length - 1 : currentSlide - 1);

  return (
    <PageWrapper>
      <Helmet>
        <title>Cyber Security | Clarifox</title>
        <meta name="description" content="Protecting Your Digital Assets with Clarifox's comprehensive cybersecurity services, including threat management, MSSP, and compliance." />
      </Helmet>

   <div className="relative bg-secondary pt-20 overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0">
    <img
      className="w-full h-full object-cover opacity-100"
      alt="Abstract background of a digital shield"
      src="images/cyber_side_2.png"
    />
    {/* Optional background gradient (if needed) */}
    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
    {/* ✨ Global dark overlay for readability */}
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Content block */}
  <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold text-white mb-6"
    >
      Cyber Security
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-xl text-gray-200 max-w-3xl mx-auto"
    >
      Fortifying Your Digital Frontier Against Evolving Threats.
    </motion.p>
  </div>
</div>

              <div className="bg-primary text-white py-2 overflow-hidden relative">
  <div className="whitespace-nowrap animate-marquee">
    ⚠️ Latest Threats Detected: Phishing Campaigns | Log4Shell Exploit | Ransomware Surge in Healthcare Sector | Zero-Day in Microsoft Exchange ⚠️
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Proactive Defense for a Digital World</h2>
            <p className="text-lg text-muted-foreground">As digital threats become more sophisticated, a proactive and robust cybersecurity posture is non-negotiable. Clarifox offers a comprehensive suite of cybersecurity services to protect your organization from threats, ensure compliance, and build a resilient security framework. We help you identify vulnerabilities, respond to incidents, and foster a culture of security.</p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-card border">
              <motion.div
                className="flex"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {servicesCarousel.map((service, index) => (
                  <div key={index} className="flex-shrink-0 w-full grid md:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="h-64 md:h-full">
                      <img  className="w-full h-full object-cover" alt={service.alt} src={service.image} />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <Button onClick={prev} variant="outline" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background/50 border-border text-foreground hover:bg-background rounded-full shadow-lg">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button onClick={next} variant="outline" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background/50 border-border text-foreground hover:bg-background rounded-full shadow-lg">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-24"
          >
            <div className="bg-secondary rounded-2xl p-12 max-w-4xl mx-auto shadow-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6">Is Your Business Secure?</h2>
              <p className="text-xl text-muted-foreground mb-8">Don't wait for a breach. Strengthen your defenses with our expert cybersecurity services.</p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white pulse-glow">
                <NavLink to="/contact">
                  Request a Security Assessment <ArrowRight className="ml-2 w-5 h-5" />
                </NavLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CyberSecurityPage;
