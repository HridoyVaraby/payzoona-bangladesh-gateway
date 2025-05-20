
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/shared/SectionHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, CheckCircle, Code } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Onboarding = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // This would submit the form to your backend in a real application
    toast({
      title: "Application received!",
      description: "We'll review your information and get back to you shortly.",
    });
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-payzoona-blue/5 to-payzoona-indigo/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Get Started with Payzoona</h1>
            <p className="text-xl text-gray-600">
              Start accepting payments in Bangladesh in just a few simple steps.
              Our onboarding process is designed to get you up and running quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Onboarding Steps */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="How to Get Started"
            subtitle="Follow these simple steps to start accepting payments with Payzoona."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-payzoona-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto relative">
                <span className="text-2xl font-bold text-payzoona-blue">1</span>
                <div className="absolute h-px w-full md:w-[calc(100%+4rem)] bg-dashed border-t border-dashed border-payzoona-blue/30 top-1/2 left-full hidden md:block"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Register</h3>
              <p className="text-gray-600 mb-6">
                Complete our merchant application form with your business details and documentation.
              </p>
              <img 
                src="/placeholder.svg"
                alt="Registration illustration"
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="text-sm text-gray-500">Estimated time: 10 minutes</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-payzoona-indigo/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto relative">
                <span className="text-2xl font-bold text-payzoona-indigo">2</span>
                <div className="absolute h-px w-full md:w-[calc(100%+4rem)] bg-dashed border-t border-dashed border-payzoona-indigo/30 top-1/2 left-full hidden md:block"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Verify</h3>
              <p className="text-gray-600 mb-6">
                Our team will review your application and verify your business information.
              </p>
              <img 
                src="/placeholder.svg"
                alt="Verification illustration"
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="text-sm text-gray-500">Estimated time: 1-3 business days</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-payzoona-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-payzoona-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrate</h3>
              <p className="text-gray-600 mb-6">
                Once approved, integrate our payment solution using our API or plugins.
              </p>
              <img 
                src="/placeholder.svg"
                alt="Integration illustration"
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="text-sm text-gray-500">Estimated time: 1-5 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                title="Apply Now"
                subtitle="Fill out the form to start your Payzoona merchant application."
              />
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Quick Approval Process</h4>
                    <p className="text-gray-600">Most applications are reviewed within 1-3 business days.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Comprehensive Support</h4>
                    <p className="text-gray-600">Our team will guide you through the entire setup process.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Developer-Friendly</h4>
                    <p className="text-gray-600">Access to our sandbox environment to test the integration.</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                  <h4 className="font-medium text-lg mb-4">Need Help Getting Started?</h4>
                  <p className="text-gray-600 mb-4">
                    Schedule a call with our onboarding specialists who will guide you through the process.
                  </p>
                  <Button className="bg-gradient-primary hover:brightness-110 rounded-full inline-flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book a Call
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-6">Merchant Application Form</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="businessName" className="text-sm font-medium text-gray-700">Business Name</label>
                      <Input id="businessName" placeholder="Your company name" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="website" className="text-sm font-medium text-gray-700">Website</label>
                      <Input id="website" placeholder="https://yourwebsite.com" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contactName" className="text-sm font-medium text-gray-700">Contact Person</label>
                      <Input id="contactName" placeholder="Full name" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Business Email</label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                      <Input id="phone" placeholder="Including country code" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="businessType" className="text-sm font-medium text-gray-700">Business Type</label>
                      <select id="businessType" className="w-full border border-gray-300 rounded-md p-2">
                        <option value="">Select business type</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="saas">SaaS/Subscription</option>
                        <option value="services">Services</option>
                        <option value="ngo">NGO/Non-profit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="volume" className="text-sm font-medium text-gray-700">Estimated Monthly Volume (BDT)</label>
                    <select id="volume" className="w-full border border-gray-300 rounded-md p-2">
                      <option value="">Select monthly volume</option>
                      <option value="less50k">Less than ৳50,000</option>
                      <option value="50k-200k">৳50,000 - ৳2,00,000</option>
                      <option value="200k-500k">৳2,00,000 - ৳5,00,000</option>
                      <option value="500k-1m">৳5,00,000 - ৳10,00,000</option>
                      <option value="more1m">More than ৳10,00,000</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="businessDescription" className="text-sm font-medium text-gray-700">Business Description</label>
                    <Textarea id="businessDescription" placeholder="Tell us about your business and how you plan to use Payzoona" rows={4} required />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Settlement Currency Preference</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <input type="radio" id="bdt" name="currency" value="bdt" className="mr-2" />
                        <label htmlFor="bdt">BDT</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="usd" name="currency" value="usd" className="mr-2" />
                        <label htmlFor="usd">USD</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="eur" name="currency" value="eur" className="mr-2" />
                        <label htmlFor="eur">EUR</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="gbp" name="currency" value="gbp" className="mr-2" />
                        <label htmlFor="gbp">GBP</label>
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-primary hover:brightness-110 rounded-full">
                    Submit Application
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integration Preview */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="What Happens After Approval?"
            subtitle="Once your application is approved, you'll have access to our developer dashboard."
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Simple Integration Process</h3>
              <p className="text-gray-600 mb-6">
                Our APIs and SDKs make integration straightforward for developers of all skill levels. 
                You'll have access to comprehensive documentation and code samples.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-1 rounded-full mr-3 mt-1">
                    <Code className="h-4 w-4 text-payzoona-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">API Access</h4>
                    <p className="text-gray-600">Secure API keys for your development and production environments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-1 rounded-full mr-3 mt-1">
                    <Code className="h-4 w-4 text-payzoona-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Sandbox Environment</h4>
                    <p className="text-gray-600">Test your integration thoroughly before going live.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-1 rounded-full mr-3 mt-1">
                    <Code className="h-4 w-4 text-payzoona-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Plugin Support</h4>
                    <p className="text-gray-600">Easy-to-install plugins for popular platforms like WooCommerce and Shopify.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-1 rounded-full mr-3 mt-1">
                    <Code className="h-4 w-4 text-payzoona-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Technical Support</h4>
                    <p className="text-gray-600">Dedicated support to help you with any integration questions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-xl shadow-xl overflow-hidden">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>
{`// Example Payzoona integration code
import { Payzoona } from 'payzoona-sdk';

// Initialize with your API key
const payzoona = new Payzoona({
  apiKey: 'YOUR_API_KEY',
  environment: 'production' // or 'sandbox'
});

// Create a payment
async function createPayment() {
  try {
    const payment = await payzoona.createPayment({
      amount: 1000, // Amount in BDT (৳10.00)
      currency: 'BDT',
      description: 'Order #123',
      redirectUrl: 'https://yoursite.com/thank-you',
      cancelUrl: 'https://yoursite.com/cart'
    });
    
    // Redirect customer to payment page
    window.location.href = payment.checkoutUrl;
  } catch (error) {
    console.error('Payment error:', error);
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Onboarding;
