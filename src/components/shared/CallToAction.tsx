
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  gradient?: boolean;
}

const CallToAction = ({ 
  title, 
  description, 
  primaryButtonText, 
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  gradient = true 
}: CallToActionProps) => {
  return (
    <div className={`py-16 relative overflow-hidden ${gradient ? 'bg-gradient-primary text-white' : 'bg-gray-50 text-gray-900'} rounded-2xl shadow-soft`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dot-pattern"></div>
      
      {/* Floating orbs for visual interest */}
      {gradient && (
        <>
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </>
      )}
      
      <div className="container-custom text-center relative z-10">
        <h2 className={`heading-lg mb-4 ${!gradient && 'gradient-text'}`}>{title}</h2>
        <p className={`text-lg mx-auto max-w-2xl mb-8 ${gradient ? 'text-white/90' : 'text-gray-600'}`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to={primaryButtonLink}>
            <Button className={gradient 
              ? "bg-white text-payzoona-indigo hover:bg-gray-100 shadow-soft hover:shadow-soft-lg rounded-full px-8 py-6 text-lg font-semibold" 
              : "bg-gradient-primary shadow-soft hover:shadow-soft-lg hover:brightness-110 rounded-full px-8 py-6 text-lg font-semibold"
            }>
              {primaryButtonText}
            </Button>
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link to={secondaryButtonLink}>
              <Button variant={gradient ? "outline" : "secondary"} className={`rounded-full px-8 py-6 text-lg font-semibold ${gradient ? 'border-white text-gray-800 bg-white hover:bg-white/90 hover:text-gray-900' : ''}`}>
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
