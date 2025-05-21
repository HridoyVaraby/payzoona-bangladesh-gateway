
import React from 'react';
import { Code, CheckCircle, Zap } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const DeveloperSupport = () => {
  return (
    <section className="section bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="container-custom">
        <SectionHeader
          title="Complete Integration Support"
          subtitle="After you sign up, our developer team handles everything for you"
          centered
        />
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-payzoona-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-5">
              <Code className="h-8 w-8 text-payzoona-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Integration</h3>
            <p className="text-gray-600 mb-4">
              Our dedicated developer team will set up and integrate the payment gateway into your system without you needing to hire additional developers.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-payzoona-indigo/10 rounded-full w-16 h-16 flex items-center justify-center mb-5">
              <CheckCircle className="h-8 w-8 text-payzoona-indigo" />
            </div>
            <h3 className="text-xl font-semibold mb-3">End-to-End Setup</h3>
            <p className="text-gray-600 mb-4">
              We handle everything from account configuration to system integration. You don't need to worry about the technical details or coding requirements.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-payzoona-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-5">
              <Zap className="h-8 w-8 text-payzoona-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
            <p className="text-gray-600 mb-4">
              Our team remains available to handle any technical questions or adjustments needed after the initial setup is complete.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Focus on growing your business while we handle the payment infrastructure. Our technical team ensures a smooth integration process without any hassle on your part.
          </p>
          <Link to="/onboarding">
            <Button className="bg-gradient-primary hover:brightness-110 rounded-full px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSupport;
