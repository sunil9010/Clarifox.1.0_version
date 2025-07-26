import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';

const CookiePolicyPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Cookie Policy | Clarifox</title>
        <meta name="description" content="Learn about how Clarifox uses cookies to improve your browsing experience on our website." />
      </Helmet>

      <div className="relative bg-secondary pt-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
          >
            Cookie Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Last updated: July 23, 2025
          </motion.p>
        </div>
      </div>

      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto prose prose-lg text-foreground prose-headings:text-foreground prose-a:text-primary">
          <h2>What are cookies?</h2>
          <p>
            A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.
          </p>

          <h2>How do we use cookies?</h2>
          <p>
            We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may use cookies for:
          </p>
          <ul>
            <li><strong>Essential Operations:</strong> Cookies that are essential to provide you with services you have requested.</li>
            <li><strong>Performance and Analytics:</strong> We use cookies to analyze how our services are accessed, used, or are performing. We use this information to maintain, operate, and continually improve our services.</li>
            <li><strong>Functionality:</strong> These cookies allow us to remember choices you make on our site and provide enhanced, more personal features.</li>
          </ul>

          <h2>Types of Cookies We Use</h2>
          <p>
            <strong>Session Cookies:</strong> These are temporary cookies that expire and are automatically erased when you close your browser. We use session cookies to grant our users access to content and to enable actions they must be logged in to perform.
          </p>
          <p>
            <strong>Persistent Cookies:</strong> These cookies usually have an expiration date far into the future and thus stay in your browser until they expire, or until you manually delete them. We use persistent cookies to better understand usage patterns so that we can improve the site for our customers.
          </p>

          <h2>How to control cookies</h2>
          <p>
            You can control and/or delete cookies as you wish – for details, see aboutcookies.org. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
          </p>

          <h2>Changes to This Cookie Policy</h2>
          <p>
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CookiePolicyPage;