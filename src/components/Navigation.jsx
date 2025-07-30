import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, User, LogOut, Briefcase, Home, Users, BrainCircuit,
  ShieldCheck, BarChart, Search, Mail, ChevronDown, Bot,
  HeartHandshake as Handshake, FileText, BookOpenCheck, Landmark
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth.jsx';

const ClarifoxLogo = () => {
  return (
    <div className="flex items-center">
      <motion.img
        whileHover={{ scale: 1.05 }}
        src="/images/modern_2.png"
        alt="Clarifox Logo"
        className="w-28 sm:w-40 md:w-40 h-auto max-h-20 object-contain"
      />
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const navItems = [
    { name: 'Home', href: '/', icon: <Home className="w-4 h-4 mr-2" /> },
    { name: 'Talent Services', href: '/talent-services', icon: <Handshake className="w-4 h-4 mr-2" /> },
    { name: 'Hire.Train.Deploy', href: '/hire-train-deploy', icon: <Users className="w-4 h-4 mr-2" /> },
    { name: 'Microsoft Services', href: '/microsoft-services', icon: <Bot className="w-4 h-4 mr-2" /> },
    { name: 'Artificial Intelligence', href: '/artificial-intelligence', icon: <BrainCircuit className="w-4 h-4 mr-2" /> },
    { name: 'Analytics', href: '/analytics-bi', icon: <BarChart className="w-4 h-4 mr-2" /> },
    { name: 'Cyber Security', href: '/cyber-security', icon: <ShieldCheck className="w-4 h-4 mr-2" /> },
  ];

  const topUtilityItems = [
    { name: 'Jobs', href: '/jobs', icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { name: 'Blogs', href: '/blogs', icon: <FileText className="w-4 h-4 mr-2" /> },
    { name: 'Contact Us', href: '/contact', icon: <Mail className="w-4 h-4 mr-2" /> },
    { name: 'About Us', href: '/about', icon: <Landmark className="w-4 h-4 mr-2" /> },
    { name: 'Courses', href: '/courses', icon: <BookOpenCheck className="w-4 h-4 mr-2" /> },
    { name: 'Exclusive Search', href: '/exclusive-search', icon: <Search className="w-4 h-4 mr-2" /> },
  ];

  const trainingSolutions = [
    { name: 'Contract Placements', href: '/training/contract-placements' },
    { name: 'Permanent Placements', href: '/training/permanent-placements' },
    { name: 'Project Consulting', href: '/training/project-consulting' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setDropdownOpen(false);
      if (isOpen) setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const NavItem = ({ icon, href, name, isMobile = false }) => (
    <NavLink
      to={href}
      onClick={() => isMobile && setIsOpen(false)}
      className={({ isActive }) =>
        `relative transition-colors text-sm font-medium flex items-center 
        ${isMobile 
          ? `${isActive ? 'text-primary' : 'text-foreground'} block py-2 px-4 rounded-md hover:bg-muted` 
          : `${isActive ? 'text-primary' : 'text-white hover:text-primary'} 
            after:content-[""] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-primary after:transition-all hover:after:w-full`
        }`
      }
    >
      {icon}
      <span>{name}</span>
    </NavLink>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${scrolled ? 'bg-black/20 backdrop-blur-lg border-b border-white/10' : ''}`}
    >
      {/* Top utility bar */}
      <div className="hidden lg:flex justify-end items-center py-2 px-8 space-x-6 text-sm text-muted-foreground">
        {topUtilityItems.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}
        {isAuthenticated ? (
          <Button
            onClick={handleLogout}
            size="sm"
            variant="outline"
            className="text-primary border-primary hover:bg-primary hover:text-white"
          >
            <LogOut className="w-4 h-4 mr-1" /> Logout
          </Button>
        ) : (
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-primary to-accent text-white"
          >

            <NavLink to="/login">
              <User className="w-4 h-4 mr-1" /> Login
            </NavLink>
          </Button>
        )}
      </div>

      {/* Main nav bar with logo and nav items aligned */}
      <div className="flex justify-between items-center px-8 ">
<div className="flex-shrink-0 mb-2">
        <NavLink to="/" className="flex min-w-15 ">
          <ClarifoxLogo />
        </NavLink>
</div>
        <div className="hidden lg:flex items-end space-x-6 pt-4">
          {navItems.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-sm font-medium text-white hover:text-primary"
            >
              Training Solutions <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-2 w-56 bg-background rounded-md shadow-lg border border-border z-50"
                >
                  <div className="p-2">
                    {trainingSolutions.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm rounded-md ${
                            isActive
                              ? 'bg-secondary text-primary'
                              : 'text-foreground hover:bg-secondary'
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden backdrop-blur-md bg-background/80 border-t border-border shadow-md"
          >
            <div className="px-4 py-5 space-y-4">
              <div className="space-y-1">
                {topUtilityItems.map((item) => (
                  <NavItem key={item.name} {...item} isMobile />
                ))}
              </div>
              <div className="space-y-1">
                {navItems.map((item) => (
                  <NavItem key={item.name} {...item} isMobile />
                ))}
              </div>
              <div>
                <p className="pt-2 font-semibold text-muted-foreground text-sm uppercase tracking-wide">
                  Training Solutions
                </p>
                <div className="pl-2 space-y-1 mt-1">
                  {trainingSolutions.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-3 rounded-md hover:bg-primary/10 text-sm text-green-950 duration-200"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-border space-y-2">
                {isAuthenticated ? (
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="text-primary border-primary hover:bg-primary hover:text-white w-full"
                  >
                    <LogOut className="w-4 h-4 mr-2" /> Logout
                  </Button>
                ) : (
                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-accent text-white w-full"
                  >
                    <NavLink to="/login" onClick={() => setIsOpen(false)}>
                      <User className="w-4 h-4 mr-2" /> Login
                    </NavLink>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
