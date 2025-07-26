import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const BlogsPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Intelligence",
      author: "Jane Doe",
      date: "July 23, 2025",
      excerpt: "Explore how artificial intelligence is revolutionizing the way businesses gather, analyze, and act on data...",
      image: "/images/Ai in bussiness.png",
      category: "AI & Analytics"
    },
    {
      id: 2,
      title: "Top 5 Cybersecurity Threats to Watch in 2025",
      author: "John Smith",
      date: "July 20, 2025",
      excerpt: "As technology evolves, so do the threats. Here are the top cybersecurity risks your organization needs to be aware of...",
      image: "/images/cyber_understand.png",
      category: "Cyber Security"
    },
    {
      id: 3,
      title: "Mastering the Art of Technical Recruitment",
      author: "Emily White",
      date: "July 15, 2025",
      excerpt: "Finding the right tech talent is more challenging than ever. Discover proven strategies for attracting and hiring top IT professionals...",
      image: "/images/mastering.png",
      category: "Talent Services"
    },
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>Blogs | Clarifox</title>
        <meta name="description" content="Read the latest insights, trends, and news from the experts at Clarifox on IT, staffing, and technology." />
      </Helmet>

    <div className="relative bg-secondary pt-20 overflow-hidden">
   {/* Background image */}
   <div className="absolute inset-0">
     <img
       className="w-full h-full object-cover opacity-100"
       alt="Abstract background of a digital shield"
       src="/images/blogs_banner.png"
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
      Threats. Solutions. Clarity.
     </motion.h1>
 
     <motion.p
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.2 }}
       className="text-xl text-gray-200 max-w-3xl mx-auto"
     >
       Insights that help decode security challenges and empower your digital defense.
     </motion.p>
   </div>
 </div>
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg flex flex-col group"
              >
                <div className="overflow-hidden">
                  <img  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" alt={post.title} src={post.image} />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm font-medium text-primary mb-2">{post.category}</p>
                  <h2 className="text-xl font-bold text-foreground mb-3">{post.title}</h2>
                  <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                    <span className="flex items-center"><User className="w-4 h-4 mr-1.5" /> {post.author}</span>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> {post.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow">{post.excerpt}</p>
                  <Button asChild variant="link" className="p-0 h-auto self-start text-primary">
                    <NavLink to="#">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </NavLink>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button size="lg" variant="outline">Load More Posts</Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BlogsPage;