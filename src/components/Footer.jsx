import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ClarifoxLogo from '@/components/ClarifoxLogo';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const { toast } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAcceptCookies = () => {
    setShowCookieBanner(false);
    toast({
      title: "Cookies Accepted",
      description: "You've accepted our cookie policy.",
    });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Talent Services', href: '/talent-services' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' }
  ];

  const ourServices = [
    { name: 'Microsoft Services', href: '/microsoft-services' },
    { name: 'Artificial Intelligence', href: '/artificial-intelligence' },
    { name: 'Analytics & BI', href: '/analytics-bi' },
    { name: 'Cyber Security', href: '/cyber-security' },
    { name: 'Hire.Train.Deploy', href: '/hire-train-deploy' },
    { name: 'Exclusive Search', href: '/exclusive-search' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <>
      <footer className="bg-secondary text-secondary-foreground border-t border-border">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <ClarifoxLogo className="h-10 w-auto" />
              <p className="text-muted-foreground leading-relaxed">
                Your strategic partner in technology and talent solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-foreground">Our Services</h3>
              <ul className="space-y-3">
                {ourServices.map((service) => (
                  <li key={service.name}>
                    <NavLink to={service.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {service.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-foreground">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@clarifox.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91 9391150843</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>DBS House, Office No. 314,
Sardar Patel Road,
Sappu Bagh Apartment, Jogani,
Ramgopalpet, Hyderabad, Telangana – 500003.
Landmark: Opp. Paradise Metro Station
</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-border py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Clarifox. All rights reserved.
              </p>
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary hover:bg-secondary"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </footer>
      {showCookieBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 max-w-md bg-background/80 backdrop-blur-lg shadow-2xl rounded-lg p-4 z-50 border border-border"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <p className="text-sm text-foreground mb-4 sm:mb-0 sm:mr-4">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
              <NavLink to="/cookie-policy" className="text-primary underline ml-1">Learn more</NavLink>.
            </p>
            <Button onClick={handleAcceptCookies} size="sm" className="flex-shrink-0">Accept</Button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Footer;