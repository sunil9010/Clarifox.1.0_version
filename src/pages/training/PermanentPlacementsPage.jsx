import React from 'react';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const PermanentPlacementsPage = () => {
  const pageData = {
    title: "Permanent Placements",
    tagline: "Building Your Long-Term Success, One Hire at a Time",
    bannerImage: "/images/welcomes_team.png",
    alt:'Wlcome Team',
    description: "Finding the right permanent employee is an investment in your company's future. Our Permanent Placement service is a comprehensive, consultative approach to recruitment. We take the time to understand your technical requirements, business goals, and company culture to find candidates who will not only excel in their role but also contribute to your long-term success.",
    services: [
      {
        title: "In-Depth Candidate Screening",
        description: "Our multi-stage screening process includes technical assessments, behavioral interviews, and reference checks to ensure the highest quality candidates.",
        image: "/images/recuter_conducting.png",
        alt:'Interview'
      },
      {
        title: "Cultural Fit Analysis",
        description: "We believe a strong cultural fit is as important as technical skill. We assess candidates for alignment with your company's values and work environment.",
        image: "/images/puzzles.png",
        alt:'Puzzles'
      },
      {
        title: "End-to-End Recruitment Management",
        description: "From creating the job description to sourcing, interviewing, and negotiating the final offer, we manage the entire process, saving you time and resources.",
        image: "/images/hiring_flow.png",
        alt:'Hiring'
      }
    ],
    cta: {
      title: "Ready to Make Your Next Great Hire?",
      description: "Let us find the perfect permanent addition to your team.",
      buttonText: "Start Your Search"
    }
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>{pageData.title} | Clarifox</title>
        <meta name="description" content={pageData.tagline} />
      </Helmet>
      <ServicePageLayout {...pageData} />
    </PageWrapper>
  );
};

export default PermanentPlacementsPage;