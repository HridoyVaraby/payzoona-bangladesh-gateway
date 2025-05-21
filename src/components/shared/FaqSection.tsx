
import React from 'react';
import FaqAccordion from './FaqAccordion';
import SectionHeader from './SectionHeader';

interface FaqSectionProps {
  bgColor?: string;
  faqs: { question: string; answer: string }[];
}

const FaqSection = ({ bgColor = "bg-gray-50", faqs }: FaqSectionProps) => {
  return (
    <section className={`section ${bgColor} py-16`}>
      <div className="container-custom">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to the most common questions about Payzoona's payment services"
          centered
        />
        
        <div className="max-w-3xl mx-auto mt-8">
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
