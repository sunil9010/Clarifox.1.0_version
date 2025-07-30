import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnalyticsBiPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const features = [
    {
      title: "Data Warehousing & ETL",
      description: "We build scalable data warehouses and implement efficient ETL (Extract, Transform, Load) processes to create a single source of truth for your data, ensuring data integrity and accessibility.",
      image: "images/aws.png",
      alt: "ETL",
    },
    {
      title: "Interactive Dashboards & Reporting",
      description: "Visualize your key performance indicators with custom, interactive dashboards using tools like Power BI, Tableau, and Looker. We make data beautiful and easy to understand.",
      image: "images/dashboard.png",
      alt: "Dashboard",
    },
    {
      title: "Advanced & Predictive Analytics",
      description: "Go beyond historical reporting. We use statistical modeling and machine learning to uncover trends, predict future outcomes, and optimize business strategies for a competitive edge.",
      image: "images/Acurate_preduct.png",
      alt: "Analysis",
    },
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>Analytics & Business Intelligence | Clarifox</title>
        <meta
          name="description"
          content="Transforming Data into Actionable Insights with Clarifox's Analytics & BI services. We offer data warehousing, interactive dashboards, and predictive analytics."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-secondary pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="images/analyis_banner.png"
            alt="Analytics background"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Analytics & Business Intelligence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Transforming Raw Data into Your Most Valuable Asset.
          </motion.p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Unlock Data-Driven Decisions
            </h2>
            <p className="text-lg text-muted-foreground">
              In the age of big data, the ability to extract meaningful insights is a key competitive advantage. Our Analytics & BI services help you make sense of your data. We design and build robust data pipelines, create intuitive dashboards, and implement advanced analytics solutions to empower data-driven decision-making across your organization.
            </p>
          </motion.div>

          <div className="space-y-20">
            {features.map((feature, index) => (
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
                <motion.div data-aos="zoom-in-right"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 10 }}
                  className={`relative h-96 rounded-2xl shadow-2xl overflow-hidden group ${
                    index % 2 !== 0 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <img 
                    className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                    alt={feature.alt}
                    src={feature.image}
                    loading="lazy"
                  />
                </motion.div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Example Dashboard Section */}
          <section className="py-24">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Example: Power BI Dashboard
            </h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-4 md:p-8 rounded-2xl shadow-2xl border"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Sales Performance Overview</h3>
                  <img
                    className="w-full h-auto rounded-md shadow-md"
                    alt="Bar chart showing sales performance"
                    src="images/sales_performance.png"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-bold">Key Metrics</h4>
                    <p className="text-3xl font-bold text-primary">$1.2M</p>
                    <p className="text-sm text-muted-foreground">Total Revenue (YTD)</p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <img
                      className="w-full h-auto rounded-md shadow-md"
                      alt="Pie chart showing market share"
                      src="https://images.unsplash.com/photo-1595512618325-86df927c7b4c"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-secondary rounded-2xl p-12 max-w-4xl mx-auto shadow-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Become a Data-Driven Organization?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Unlock the hidden value in your data with our expert analytics services.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-transform duration-300">
                <NavLink to="/contact">
                  Get Data-Driven <ArrowRight className="ml-2 w-5 h-5" />
                </NavLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AnalyticsBiPage;
