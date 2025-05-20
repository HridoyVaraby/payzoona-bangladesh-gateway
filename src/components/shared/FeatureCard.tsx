
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-soft-lg transition-all duration-300 group">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 inline-flex items-center justify-center rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6 text-payzoona-blue group-hover:text-payzoona-indigo transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-3 font-space-grotesk">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
