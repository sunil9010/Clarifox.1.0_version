import { useState,useEffect } from 'react';
import AOS from 'aos';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/PageWrapper';
import HeroSection from '@/components/HeroSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import CountUp from 'react-countup';

import { ArrowRight, CheckCircle, Quote, HeartHandshake as Handshake, Presentation,Zap , Briefcase } from 'lucide-react';

const HomePage = () => {
  const solutions = [
    { title: "Microsoft Services", description: "Harness the power of Microsoft technologies with our expert consulting and implementation services.",url:'images/Microsoftservices.png', link: "/microsoft-services", image: "AI-generated image of the Microsoft logo reimagined as a dynamic, glowing data hub" },
    { title: "Artificial Intelligence", description: "Integrate intelligent automation and predictive analytics into your business operations.",url:'images/Artificial.png', link: "/artificial-intelligence", image: "AI-generated image of a humanoid robot and a human shaking hands over a glowing circuit board" },
    { title: "Cyber Security", description: "Protect your digital assets with our comprehensive cybersecurity strategies and solutions.",url:'images/cyber.png', link: "/cyber-security", image: "AI-generated image of a digital shield deflecting cyber threats in a futuristic city" },
    { title: "Analytics & BI", description: "Transform raw data into actionable insights with our advanced analytics and business intelligence.",url:'images/powerBi.jpg', link: "/analytics-bi", image: "AI-generated image of a 3D holographic bar chart growing out of a businessperson's hand" },
    { title: "Talent Services", description: "Find the right IT professionals to drive your projects forward with our specialized staffing services.",url:'images/talent_services.png', link: "/talent-services", image: "AI-generated image of a constellation forming human figures, representing a network of talent" },
     { title: "RPA", description: "Streamlined processes through robotic process automation for enhanced efficiency.", link: "/talent-services",url:'images/RPA.png', image: "AI-generated image of a constellation forming human figures, representing a network of talent" },
  ];

  const whyClarifox = [
    { title: "Expert Team", description: "Our certified professionals bring deep industry knowledge." },
    { title: "Proven Methodologies", description: "We deliver consistent, high-quality results on time and on budget." },
    { title: "Client-Centric Approach", description: "Your success is our primary metric. We build lasting partnerships." },
    { title: "Innovative Solutions", description: "We leverage the latest technologies to solve complex business challenges." },
  ];

  const partners = [
    
    {url:"images/teamlease.png"},
    {url:"images/quesscrop.svg"},
    {url:"images/accent_hr.png"},
     {url:"images/tesla_2.png"},

  ];

 const testimonials = [
  { name: "John Carter", company: "Tech Solutions Inc.", text: "Clarifox's team was instrumental in our cloud migration project. Their expertise and dedication were second to none.", image: "Professional headshot of John Carter" },
  // { name: "Maria Garcia", company: "Innovate Corp.", text: "The AI solution they developed has revolutionized our workflow, increasing efficiency by over 40%. Highly recommended!", image: "Professional headshot of Maria Garcia" },
  { name: "David Lee", company: "SecureNet", text: "Their cybersecurity audit was incredibly thorough and insightful. We feel much more secure thanks to Clarifox.", image: "Professional headshot of David Lee" },
  { name: "Sophia Brown", company: "NextGen AI", text: "Clarifox exceeded our expectations with their fast delivery and outstanding quality. True professionals!", image: "Professional headshot of Sophia Brown" },
  { name: "Michael Adams", company: "CloudSphere", text: "We achieved a smooth transition to microservices thanks to Clarifox's architectural expertise.", image: "Professional headshot of Michael Adams" },
];
const steps = [
  { title: "Discovery", description: "Understanding your business and goals." },
  { title: "Planning", description: "Creating a custom roadmap for success." },
  { title: "Execution", description: "Bringing your vision to life with precision." },
  { title: "Delivery", description: "On-time, high-quality results guaranteed." },
];
const stats = [
  { label: "Clients Served", value: 150 },
  { label: "Projects Delivered", value: 75 },
  { label: "Years of Experience", value: 10 },
];
const duplicated = [...testimonials, ...testimonials]; 

const carouselMessages = [
          "Azure DevOps Solutions",
          "Dynamics 365 Integrate",
          "Artifical Intillegence",
          "Microsoft Power BI",
          "Office 365 Automation",
          "Cyber Security"
];

const [carouselIndex, setCarouselIndex] = useState(0);


useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselMessages.length);
    }, 3000);
    console.log(interval)

    return () => clearInterval(interval);

  }, []);
  const teamMembers = [
    { name: "Bhanu Prakash Reddy", role: "Founder & Lead Consultant", bio: "With over 4 years of dedicated experience in talent acquisition and career consulting, Sreekanth has successfully guided hundreds of professionals to their dream careers. His vision for Career Waves is to be a beacon of opportunity and growth for job seekers across India.", image: "Professional headshot of Bhanu", delay: 0.2 },
  ];
    const statics = [
    { value: "100+", label: "Successful Placements", icon: CheckCircle, delay: 0.1 },
    { value: "4+", label: "Years of Experience", icon: Zap, delay: 0.3 },
    { value: "Diverse", label: "Industries Covered", icon: Briefcase, delay: 0.5 },
  ];

  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    
    <PageWrapper>
      <Helmet>
        <title>Clarifox - Premier IT & Staffing Solutions</title>
        <meta name="description" content="Welcome to Clarifox. We provide expert IT consulting, staffing solutions, and training to help your business thrive in the digital age." />
      </Helmet>

      <HeroSection />
      
      <section className="py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
          
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              <img  className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-lg" alt="Modern office interior" src="/images/statergy.png" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your Strategic Partner in <span className="gradient-text">Technology and Talent</span></h2>
              <p className="text-lg text-muted-foreground mb-4">Clarifox is a premier IT and staffing solutions provider dedicated to helping businesses navigate the complexities of the digital world. Our mission is to deliver innovative technology services and connect exceptional talent with leading companies.</p>
              <p className="text-lg text-muted-foreground mb-8">We believe in building long-term partnerships based on trust, integrity, and a deep understanding of our clients' needs.</p>
              <Button asChild variant="link" className="text-primary text-lg p-0 h-auto">
                <NavLink to="/about">
                  Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
                </NavLink>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
<h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:flex-row sm:flex-col flex flex-wrap items-center justify-center gap-2 text-center px-4">
  <span className="text-primary">Our Solutions</span>

  <div className="relative h-8 sm:h-10 w-[70%] sm:w-[450px] overflow-hidden whitespace-nowrap text-left">
    <AnimatePresence mode="wait">
      <motion.span
        key={carouselMessages[carouselIndex]}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute text-amber-500 font-semibold left-0"
      >
        {carouselMessages[carouselIndex]}
      </motion.span>
    </AnimatePresence>
  </div>
</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">We provide a comprehensive suite of services to meet your technology and staffing needs.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card rounded-2xl group bg-background overflow-hidden shadow-lg"
              >
                <div className="relative h-56">
                  <img  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={solution.image} src={solution.url} />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{solution.description}</p>
                  <Button asChild variant="link" className="text-primary">
                    <NavLink to={solution.link}>
                      Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </NavLink>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       <section id="stats" className="bg-slate-800 text-white section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {statics.map((stat) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className="p-6 rounded-lg"
              >
                <stat.icon size={48} className="mx-auto mb-4 text-sky-400" />
                <p className="text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="text-slate-300 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Strategic<span className="gradient-text"> Collaborations</span> </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Partnering with industry leaders to bring you the best-in-class tools and platforms.</p>
          </div>
         <div className="grid md:grid-cols-2 gap-8">
  <motion.a
    href="https://tracks.run/tracktest-en/"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.03, y: -5 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    viewport={{ once: true }}
    className="group block p-8 rounded-2xl shadow-lg bg-gradient-to-br from-white/80 to-white/60 
               dark:from-gray-900/80 dark:to-gray-800/60 backdrop-blur-md border border-transparent 
               hover:border-primary/30 hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-center mb-5">
      <div className="w-14 h-14 rounded-full flex items-center justify-center mr-4 
                      bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
        <Handshake className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
        Test Track Test
      </h3>
    </div>
    <p className="text-muted-foreground text-lg leading-relaxed">
      We've collaborated with the most advanced AI-based testing platform to ensure robust, efficient, 
      and intelligent quality assurance for all our software solutions.
    </p>
  </motion.a>

  <motion.a
    href="https://www.classpoint.io/"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.03, y: -5 }}
    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
    viewport={{ once: true }}
    className="group block p-8 rounded-2xl shadow-lg bg-gradient-to-br from-white/80 to-white/60 
               dark:from-gray-900/80 dark:to-gray-800/60 backdrop-blur-md border border-transparent 
               hover:border-accent/30 hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-center mb-5">
      <div className="w-14 h-14 rounded-full flex items-center justify-center mr-4 
                      bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
        <Presentation className="w-7 h-7 text-accent" />
      </div>
      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
        Classpoint
      </h3>
    </div>
    <p className="text-muted-foreground text-lg leading-relaxed">
      Our tie-up with Classpoint empowers our training programs with powerful, interactive teaching 
      tools, making learning more engaging and effective than ever before.
    </p>
  </motion.a>
</div>



        </div>
      </section>
<section className="relative py-24 bg-secondary">
  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>

  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-handwritten">
        Why Choose <span className="gradient-text">Clarifox?</span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        We are committed to excellence and delivering tangible results for our clients.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10">
      {whyClarifox.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true }}
          className="group bg-background rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <CheckCircle className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      <section className="py-20 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-muted-foreground mb-12">Trusted by Industry Leaders</h2>
          <div className="relative overflow-hidden">
            <div className="partners-carousel">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8">
                  <img  className="max-h-12 w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt={partner} src={partner.url} />
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"></div>
          </div>
        </div>
      </section>

   <section className="py-24 bg-secondary">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold  mb-4">What Our <span className="gradient-text">Clients Say</span> </h2>
    </div>

    <div className="relative overflow-hidden pb-10">
      <Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 3000 }}
  loop
  breakpoints={{
    640: { slidesPerView: 1 },
    1024: { slidesPerView: 3 },
  }}
  spaceBetween={24}
>
  {testimonials.map((testimonial, index) => (
    <SwiperSlide key={index}>
      <div className="testimonial-card bg-background p-8 rounded-2xl shadow-lg">
        <Quote className="w-10 h-10 text-primary/30 mb-4" />
        <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary">
            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-bold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-primary">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>
     <section className="bg-white pb-11 pt-10">
        <div className="container mx-auto px-4">
          {/* <motion.h2 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-10"
          >
            Meet Our <span className="gradient-text">Founder</span>
          </motion.h2> */}
          {teamMembers.map((member) => (
            <motion.div 
              key={member.name} 
              className="max-w-4xl mx-auto bg-gradient-to-r from-sky-50 via-white to-cyan-50 p-8 md:p-12 rounded-xl shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: member.delay }}
            >
              <img  
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-sky-300" 
                alt={member.name}
               src="https://images.unsplash.com/photo-1649015931204-15a3c789e6ea" />
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-sky-600 font-semibold text-lg mb-4">{member.role}</p>
                <p className="text-slate-600 leading-relaxed">{member.bio}</p>
                 <blockquote className="italic text-sm text-sky-700 border-l-4 pl-4 border-sky-400">
            “We believe everyone deserves a fulfilling career. At Clarifox, we empower dreams through dedication, innovation, and impact.”
          </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
  </div>
</section>

    </PageWrapper>
  );
};

export default HomePage;