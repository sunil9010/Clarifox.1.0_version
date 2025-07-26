import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Frown, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>404 - Page Not Found | Clarifox</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-background text-foreground">
        <div className="text-center p-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
          >
            <Frown className="w-32 h-32 text-primary mx-auto mb-8" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-6xl font-extrabold text-foreground mb-4"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl font-semibold text-muted-foreground mb-2"
          >
            Oops! Page Not Found.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg text-muted-foreground max-w-md mx-auto mb-8"
          >
            It seems the page you were looking for has moved, been removed, or never existed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white">
              <NavLink to="/">
                <Home className="mr-2 h-5 w-5" />
                Go Back Home
              </NavLink>
            </Button>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default NotFoundPage;