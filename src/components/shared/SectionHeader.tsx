
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = false }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} animate-on-scroll`}>
      <div className="relative inline-block">
        <h2 className="heading-lg text-gray-900 mb-4 relative z-10">{title}</h2>
        <div className="absolute h-3 bg-gradient-to-r from-blue-100 to-indigo-100 bottom-0 left-0 w-1/2 -z-10 rounded-full"></div>
      </div>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mt-4 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
