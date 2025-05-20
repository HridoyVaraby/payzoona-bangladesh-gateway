
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CreditCard, Globe, ShieldCheck, Code, DollarSign } from 'lucide-react';
import FeatureCard from '../components/shared/FeatureCard';
import CallToAction from '../components/shared/CallToAction';
import SectionHeader from '../components/shared/SectionHeader';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-payzoona-blue/5 to-payzoona-indigo/10">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6 animate-fade-in">
              <h1 className="heading-xl">
                <span>Power Your Payments in Bangladesh —</span>
                <span className="block gradient-text"> From Anywhere in the World</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Accept payments in BDT, receive settlements in your preferred currency. 
                Secure, fast, and reliable payment processing for global businesses.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/onboarding">
                  <Button className="bg-gradient-primary hover:brightness-110 rounded-full px-8 py-6 text-lg font-semibold">
                    Get Started
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold">
                    Contact Sales
                  </Button>
                </Link>
              </div>
              <div className="pt-4 flex items-center space-x-2 text-sm">
                <ShieldCheck className="h-5 w-5 text-payzoona-blue" />
                <span className="text-gray-600">Trusted by 500+ businesses in Bangladesh</span>
              </div>
            </div>
            <div className="lg:w-1/2 animate-slide-up">
              <div className="relative">
                <div className="bg-white rounded-xl shadow-xl p-5 border border-gray-100 mx-auto max-w-md">
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium">Payment Dashboard</h3>
                      <span className="text-sm text-payzoona-blue">Real-time</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gradient-primary h-10 rounded-md w-2/3"></div>
                      <div className="flex space-x-2">
                        <div className="bg-gray-200 h-8 rounded-md w-1/3"></div>
                        <div className="bg-gray-200 h-8 rounded-md w-1/2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center p-3 border border-gray-100 rounded-md">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-payzoona-blue/10 rounded-full flex items-center justify-center">
                          <CreditCard className="h-4 w-4 text-payzoona-blue" />
                        </div>
                        <span className="ml-2 text-sm font-medium">Card Payment</span>
                      </div>
                      <span className="text-sm font-medium">৳4,580 BDT</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border border-gray-100 rounded-md">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-payzoona-indigo/10 rounded-full flex items-center justify-center">
                          <DollarSign className="h-4 w-4 text-payzoona-indigo" />
                        </div>
                        <span className="ml-2 text-sm font-medium">Settlement</span>
                      </div>
                      <span className="text-sm font-medium">$42.30 USD</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-primary hover:brightness-110 rounded-md">Transfer Funds</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="A complete payment solution for Bangladesh"
            subtitle="Accept payments from Bangladeshi customers and receive settlements anywhere in the world. Our platform is designed for both foreign and local businesses."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Globe}
              title="Global Settlements"
              description="Receive payments in USD, EUR, GBP and more. Settle funds to bank accounts worldwide."
            />
            <FeatureCard 
              icon={CreditCard}
              title="Mobile Wallet Support"
              description="Accept payments via bKash, Nagad, Rocket, and other popular mobile payment methods in Bangladesh."
            />
            <FeatureCard 
              icon={Code}
              title="Secure API"
              description="Our RESTful API and SDKs make integration easy for developers. Get up and running quickly."
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Fraud Detection"
              description="Advanced fraud prevention tools to protect your business and customers from fraudulent transactions."
            />
            <FeatureCard 
              icon={DollarSign}
              title="Subscription Management"
              description="Automated billing for recurring revenue. Manage subscriptions with ease."
            />
            <FeatureCard 
              icon={CreditCard}
              title="Multiple Payment Methods"
              description="Support for credit cards, debit cards, mobile banking, and internet banking in Bangladesh."
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Designed for businesses of all sizes"
            subtitle="From startups to enterprise companies, Payzoona helps businesses grow their revenue in Bangladesh."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-payzoona-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                <CreditCard className="h-8 w-8 text-payzoona-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Seamless checkout experiences with our payment gateway. Integrates with all major e-commerce platforms.
              </p>
              <Link to="/services" className="text-payzoona-blue font-medium hover:underline">Learn more</Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-payzoona-indigo/10 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                <Code className="h-8 w-8 text-payzoona-indigo" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SaaS Platforms</h3>
              <p className="text-gray-600 mb-4">
                Recurring billing and subscription management for software companies targeting the Bangladesh market.
              </p>
              <Link to="/services" className="text-payzoona-blue font-medium hover:underline">Learn more</Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-payzoona-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                <Globe className="h-8 w-8 text-payzoona-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Foreign Businesses</h3>
              <p className="text-gray-600 mb-4">
                Expand into Bangladesh without worrying about payment complexities. Accept BDT, settle in your currency.
              </p>
              <Link to="/services" className="text-payzoona-blue font-medium hover:underline">Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="How Payzoona Works"
            subtitle="Getting started with Payzoona is simple. Follow these four steps to begin accepting payments in Bangladesh."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-payzoona-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto relative">
                <span className="text-xl font-bold text-payzoona-blue">1</span>
                <div className="absolute h-px w-full md:w-[calc(100%+2rem)] bg-dashed border-t border-dashed border-payzoona-blue/30 top-1/2 left-full hidden lg:block"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Create Account</h3>
              <p className="text-gray-600">
                Sign up for a Payzoona account and complete the verification process.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-payzoona-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto relative">
                <span className="text-xl font-bold text-payzoona-blue">2</span>
                <div className="absolute h-px w-full md:w-[calc(100%+2rem)] bg-dashed border-t border-dashed border-payzoona-blue/30 top-1/2 left-full hidden lg:block"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Setup Integration</h3>
              <p className="text-gray-600">
                Use our documentation to integrate the payment gateway into your website or app.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-payzoona-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto relative">
                <span className="text-xl font-bold text-payzoona-blue">3</span>
                <div className="absolute h-px w-full md:w-[calc(100%+2rem)] bg-dashed border-t border-dashed border-payzoona-blue/30 top-1/2 left-full hidden lg:block"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Test Transactions</h3>
              <p className="text-gray-600">
                Test the payment flow in our sandbox environment to ensure everything works.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-payzoona-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                <span className="text-xl font-bold text-payzoona-blue">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Go Live</h3>
              <p className="text-gray-600">
                Switch to the production environment and start accepting real payments.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <CallToAction
            title="Ready to power your payments in Bangladesh?"
            description="Join hundreds of businesses that trust Payzoona for secure, reliable payment processing."
            primaryButtonText="Get Started"
            primaryButtonLink="/onboarding"
            secondaryButtonText="Contact Sales"
            secondaryButtonLink="/contact"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
