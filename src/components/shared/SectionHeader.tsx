
import React, { useEffect, useRef } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, description, centered = false }: SectionHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Make the element visible immediately instead of relying on external animations
    if (headerRef.current) {
      headerRef.current.style.opacity = '1';
    }
  }, []);

  return (
    <div 
      ref={headerRef} 
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      style={{ opacity: 0, transition: 'opacity 0.6s ease-out' }}
    >
      <div className="relative inline-block">
        <h2 className="heading-lg text-gray-900 mb-4 relative z-10">{title}</h2>
        <div className={`absolute h-3 bg-gradient-to-r from-payzoona-teal/20 to-payzoona-green/20 bottom-0 ${centered ? 'left-1/4 w-1/2' : 'left-0 w-3/4'} -z-10 rounded-full`}></div>
      </div>
      {subtitle && (
        <p className={`text-lg text-gray-600 mt-4 leading-relaxed ${centered ? 'mx-auto' : ''} max-w-2xl`}>
          {subtitle}
        </p>
      )}
      {description && (
        <p className={`text-base text-gray-500 mt-2 ${centered ? 'mx-auto' : ''} max-w-2xl`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
