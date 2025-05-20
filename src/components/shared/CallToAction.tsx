
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
    <div className={`py-16 ${gradient ? 'bg-gradient-primary text-white' : 'bg-gray-50'} rounded-2xl`}>
      <div className="container-custom text-center">
        <h2 className="heading-lg mb-4">{title}</h2>
        <p className={`text-lg mx-auto max-w-2xl mb-8 ${gradient ? 'text-white/90' : 'text-gray-600'}`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to={primaryButtonLink}>
            <Button className={gradient 
              ? "bg-white text-payzoona-indigo hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold" 
              : "bg-gradient-primary hover:brightness-110 rounded-full px-8 py-6 text-lg font-semibold"
            }>
              {primaryButtonText}
            </Button>
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link to={secondaryButtonLink}>
              <Button variant={gradient ? "outline" : "secondary"} className={`rounded-full px-8 py-6 text-lg font-semibold ${gradient ? 'border-white text-white hover:bg-white/10' : ''}`}>
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
