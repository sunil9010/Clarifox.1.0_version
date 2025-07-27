import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Zap,
  Clock,
  Users,
  Star,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { NavLink } from 'react-router-dom';

const CoursesPage = () => {
  const { toast } = useToast();

  const courses = [
    {
      id: 1,
      title: "Python Programming",
      icon: Code,
      image: "/images/python.png",
      duration: "3 months",
      students: "1200+",
      rating: 4.9,
      description:
        "Master Python from basics to advanced concepts including web development, data science, and automation.",
      level: "Beginner to Advanced",
      price: "8000Rs"
    },
    {
      id: 2,
      title: "HTML & CSS",
      icon: Globe,
      image: "/images/html.png",
      duration: "2 months",
      students: "2000+",
      rating: 4.8,
      description:
        "Build responsive and modern websites with HTML5, CSS3, and modern layout techniques.",
      level: "Beginner",
      price: "$199"
    },
    {
      id: 3,
      title: "JavaScript Mastery",
      icon: Zap,
      image: "/images/javascript.png",
      duration: "4 months",
      students: "1500+",
      rating: 4.9,
      description:
        "Become proficient in JavaScript, from fundamentals to advanced concepts and modern ES6+ features.",
      level: "Beginner to Intermediate",
      price: "$349"
    },
    {
      id: 4,
      title: "SQLite Database",
      icon: Database,
      image: "/images/sqlite.png",
      duration: "2 months",
      students: "800+",
      rating: 4.7,
      description:
        "Learn database design, SQL queries, and database management with SQLite.",
      level: "Beginner to Intermediate",
      price: "$249"
    },
    {
      id: 5,
      title: "React JS Development",
      icon: Smartphone,
      image: "/images/react_vite.png",
      duration: "5 months",
      students: "1100+",
      rating: 4.9,
      description:
        "Build dynamic and interactive web applications using React.js and modern development practices.",
      level: "Intermediate",
      price: "$449"
    },
    {
      id: 6,
      title: "Node.js Backend",
      icon: Server,
      image: "/images/node.png",
      duration: "4 months",
      students: "900+",
      rating: 4.8,
      description:
        "Master server-side development with Node.js, Express, and database integration.",
      level: "Intermediate to Advanced",
      price: "$399"
    },
    {
      id: 7,
      title: "React Native (App Development)",
      icon: Smartphone,
      image: "/images/native.png",
      duration: "4 months",
      students: "900+",
      rating: 4.8,
      description:
        "Create cross-platform mobile apps with React Native. Learn native components, navigation, and deployment.",
      level: "Intermediate to Advanced",
      price: "$399"
    },{
      id: 8,
      title: "SEO Strategies",
      icon: Globe,
      image: "/images/seo.png",
      duration: "4 months",
      students: "900+",
      rating: 4.8,
      description:
        "Boost your site's visibility with modern SEO techniques including keyword research, meta tags, and technical SEO.",
      level: "Intermediate to Advanced",
      price: "$399"
    },{
      id: 9,
      title: "Full Stack (MERN)",
      icon: Code,
      image: "/images/mern.png",
      duration: "4 months",
      students: "900+",
      rating: 4.8,
      description:
        "Become a full stack developer by building complete applications using MongoDB, Express, React, and Node.js.",
      level: "Intermediate to Advanced",
      price: "$399"
    }


  ];

  const handleEnrollClick = (courseName) => {
    toast({
      title: "🚧 Feature In Progress",
      description: `Enrollment for ${courseName} is not yet available online. Please contact us for details.`
    });
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>Our Courses | Clarifox</title>
        <meta
          name="description"
          content="Explore our wide range of expert-led IT and Non-IT courses, including Python, React, JavaScript, and more. Find the perfect course to launch your career."
        />
      </Helmet>
       <div className="relative bg-secondary pt-52 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-80"
            alt="Students learning and coding together"
            src="/images/courses_banners.png"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-20"></div>
        </div>
        <div className="relative z-30 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
         
        </div>
        
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Training Courses
            </h1>

<div className="w-full overflow-hidden whitespace-nowrap text-primary font-semibold text-base bg-white border border-primary rounded-full shadow-md py-2 px-4">
  <motion.div
    animate={{ x: ['100%', '-100%'] }}
    transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
    className="inline-block"
  >
    🚀 Vertical Learning Experience &nbsp;&nbsp;&nbsp; | 💼 100% Job Offer for Staffing &nbsp;&nbsp;&nbsp; | 🚀 Vertical Learning Experience &nbsp;&nbsp;&nbsp;
  </motion.div>
</div>


            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to make you industry-ready with hands-on projects and expert guidance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group flex flex-col"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">
                        {course.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-foreground font-semibold ml-2">
                      {course.rating}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 flex-grow">
                    {course.description}
                  </p>

                  <div className="flex justify-between items-center mb-6">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                    <span className="text-2xl font-bold text-foreground">
                      {course.price}
                    </span>
                  </div>

                  <Button
                    onClick={() => handleEnrollClick(course.title)}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 transition-all duration-300 mt-auto"
                  >
                    Enroll Now
                  </Button>
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
            <div className="bg-secondary rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Not Sure Which Course to Choose?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get personalized course recommendations based on your career goals and current skill level.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <NavLink to="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </NavLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CoursesPage;