import React from 'react';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const ContractPlacementsPage = () => {
const services = {
  title: "Contract Placements",
  tagline: "Agile Talent Solutions Tailored for Your Business Needs",
  bannerImage: "/images/contract_positions.png",
  alt:'Banner For Postions',
  description:
    "In today’s fast-moving business environment, flexibility and speed are critical. Our Contract Placement solutions give you access to a diverse pool of pre-vetted professionals who can seamlessly integrate into your projects, ensuring quick turnarounds and measurable impact without long-term commitments.",
  services: [
    {
      title: "Fast & Reliable Talent Onboarding",
      description:
        "Get the expertise you need—fast. Our efficient recruitment process ensures your contract positions are filled within days, reducing downtime and keeping your projects on track.",
      image: "/images/onboard.png",
      alt:'OnBoard'
    },
    {
      title: "Expertise Across Niche Skill Sets",
      description:
        "Whether it’s specialized IT professionals, skilled engineers, or experienced project managers, we provide talent with the right skill sets to match your unique requirements.",
      image: "/images/skills.png"
      ,
      alt:'Skills'
    },
    {
      title: "End-to-End Contractor Management",
      description:
        "We take care of contracts, payroll, compliance, and benefits so you can focus on strategic priorities while we handle the complexities of workforce management.",
      image: "/images/project_manage.png"
      ,
      alt:'Contract Manage'
    }
  ],
  cta: {
    title: "Looking for Scalable Talent Solutions?",
    description:
      "Leverage our flexible contract workforce to meet your project goals without compromising on quality or timelines.",
    buttonText: "Hire Now"
  }
};


  return (
    <PageWrapper>
      <Helmet>
        <title>{services.title} | Clarifox</title>
        <meta name="description" content={services.tagline} />
      </Helmet>
      <ServicePageLayout {...services} />
    </PageWrapper>
  );
};

export default ContractPlacementsPage;