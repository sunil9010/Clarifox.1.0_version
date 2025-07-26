import React from 'react';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const ExclusiveSearchPage = () => {
  const pageData = {
    title: "Exclusive Search",
    tagline: "Discreetly Connecting You with Elite Leadership Talent",
    bannerImage: "images/banner_excutive.png",
    alt:'banner',
    description: "Finding visionary leaders requires a specialized approach. Our Exclusive Search service is a retained, confidential search process dedicated to identifying and attracting top-tier executives and senior-level talent. We act as a trusted extension of your organization, leveraging our extensive network and deep industry knowledge to find leaders who will shape your company's future.",
    services: [
      {
        title: "Retained Executive Search",
        description: "A dedicated, partnership-based approach to fill your most critical leadership roles, from C-suite to VPs and Directors.",
        image: "images/retained_executive.png",
        alt:'Retained Executive Search'

      },
      {
        title: "Confidential & Discreet Process",
        description: "We understand the sensitivity of high-level searches. Our process ensures complete confidentiality for both clients and candidates.",
        image: "images/discloser.png",
        alt:'Confidential & Discreet Process'
      },
      {
        title: "In-Depth Market Mapping",
        description: "We conduct comprehensive research to map the talent landscape, ensuring we identify the best possible candidates, not just the most available ones.",
        image: "images/complex_network.png",
        alt:'In-Depth Market Mapping'
      }
    ],
    cta: {
      title: "Looking for Your Next Visionary Leader?",
      description: "Engage our Exclusive Search service to find the leadership talent that will define your success.",
      buttonText: "Initiate a Confidential Search"
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

export default ExclusiveSearchPage;