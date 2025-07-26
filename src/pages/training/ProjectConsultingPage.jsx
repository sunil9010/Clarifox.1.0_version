import React from 'react';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const ProjectConsultingPage = () => {
  const pageData = {
    title: "Project Consulting",
    tagline: "Expert Guidance to Ensure Your Project's Success",
    bannerImage: "/images/project_consulting.png",
    alt:'Project_consulting',
    description: "Complex projects require expert oversight and strategic guidance. Our Project Consulting services provide you with experienced project managers and subject matter experts who can lead your initiatives from conception to completion. We help you define project scope, manage resources, mitigate risks, and ensure your projects are delivered on time and within budget.",
    services: [
      {
        title: "Project Management as a Service (PMaaS)",
        description: "Get access to certified Project Managers (PMPs) who can lead your projects, implement best practices, and ensure successful outcomes.",
        image: "/images/project_milestone.png",
        alt:'A project manager at a whiteboard with a Gantt chart'
      },
      {
        title: "IT Strategy & Roadmap",
        description: "Our consultants work with your leadership to develop a technology roadmap that aligns with your business goals and drives competitive advantage.",
        image: "/images/charts_display.png",
        alt:'It Statergy'
      },
      {
        title: "Agile & DevOps Transformation",
        description: "We help you adopt and scale Agile and DevOps methodologies to increase development velocity, improve quality, and foster a culture of continuous improvement.",
        image: "/images/devops.png",
        alt:'Devops'
      }
    ],
    cta: {
      title: "Need Expert Leadership for Your Next Project?",
      description: "Ensure your project's success with our experienced consultants.",
      buttonText: "Discuss Your Project"
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

export default ProjectConsultingPage;