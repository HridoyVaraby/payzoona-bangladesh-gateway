
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/shared/SectionHeader';
import CallToAction from '../components/shared/CallToAction';
import FaqSection from '../components/shared/FaqSection';
import { ShieldCheck, Globe, Users } from 'lucide-react';

const AboutUs = () => {
  // FAQ data specific to the About page
  const aboutFaqs = [
    {
      question: "Who is behind Payzoona?",
      answer: "Payzoona was founded by a team of fintech experts with extensive experience in payment processing, software development, and international finance, specifically focused on the Bangladesh market."
    },
    {
      question: "Is Payzoona licensed and regulated?",
      answer: "Yes, Payzoona operates under all required licenses from Bangladesh Bank and follows all regulations for payment processors operating in Bangladesh."
    },
    {
      question: "How secure are your payment systems?",
      answer: "Our payment infrastructure uses bank-grade security with PCI DSS compliance, end-to-end encryption, and advanced fraud detection systems to ensure maximum security."
    },
    {
      question: "Do you provide technical support for integration?",
      answer: "Yes, our dedicated developer team handles the entire integration process for you. After you sign up, we'll set up the payment gateway in your system without you needing to hire additional developers."
    },
    {
      question: "What makes Payzoona different from other payment gateways?",
      answer: "Payzoona specializes in connecting Bangladesh to the global economy, allowing businesses to accept BDT while settling in their preferred international currency, with full integration support from our team."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-payzoona-blue/5 to-payzoona-indigo/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">About Payzoona</h1>
            <p className="text-xl text-gray-600">
              We're building the next generation of payment infrastructure for Bangladesh, 
              connecting local businesses with the global economy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                title="Our Mission"
                subtitle="To simplify cross-border payments for businesses operating in Bangladesh, 
                          helping them connect with customers globally."
              />
              <p className="text-gray-600">
                At Payzoona, we believe that geographic boundaries shouldn't limit business growth. 
                Our mission is to provide a seamless payment experience that breaks down barriers 
                between Bangladeshi businesses and the global market.
              </p>
              <p className="text-gray-600 mt-4">
                By offering reliable, secure payment processing with flexible settlement options, 
                we help businesses focus on what they do best while we handle the complexities of 
                payment infrastructure.
              </p>
            </div>
            <div>
              <SectionHeader
                title="Our Vision"
                subtitle="To become the leading payment gateway connecting Bangladesh to the global economy."
              />
              <p className="text-gray-600">
                We envision a future where Bangladeshi businesses can easily participate in the 
                global digital economy, with access to the same tools and opportunities as companies 
                in more established markets.
              </p>
              <p className="text-gray-600 mt-4">
                By building world-class payment technology tailored to the unique needs of the 
                Bangladesh market, we aim to accelerate the growth of digital commerce throughout 
                the country and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Company Background"
            subtitle="Founded in 2022, Payzoona has quickly become a trusted payment partner for businesses across Bangladesh."
          />
          <div className="space-y-6 text-gray-600">
            <p>
              Payzoona was founded by a team of fintech experts who recognized the challenges that 
              Bangladeshi businesses face when trying to process online payments and connect with 
              global customers. With backgrounds in payment processing, software development, and 
              international finance, our founding team created Payzoona to address these specific needs.
            </p>
            <p>
              Starting with a handful of early adopters, we've grown rapidly to serve hundreds of 
              merchants across various industries. Our platform processes millions of transactions 
              monthly, helping businesses of all sizes—from startups to established enterprises—expand 
              their reach and streamline their payment operations.
            </p>
            <p>
              Based in Dhaka with a growing team of payment specialists, developers, and customer 
              success professionals, we're committed to continuous improvement of our platform and 
              services to meet the evolving needs of our clients. Our developer team handles all integration needs, so you can focus on your business.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-12 relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-12">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="font-semibold text-xl text-payzoona-indigo">2022</h3>
                  <p className="text-gray-600">Payzoona is founded in Dhaka</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-payzoona-indigo flex items-center justify-center z-10 mx-0 md:mx-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="flex-1 md:pl-8">
                  <p className="text-gray-600">Launch of our initial payment gateway solution</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center mb-12">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="font-semibold text-xl text-payzoona-indigo">2023</h3>
                  <p className="text-gray-600">Expanded to support international settlements</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-payzoona-indigo flex items-center justify-center z-10 mx-0 md:mx-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="flex-1 md:pl-8">
                  <p className="text-gray-600">Reached 100+ merchant partnerships</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center mb-12">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="font-semibold text-xl text-payzoona-indigo">2024</h3>
                  <p className="text-gray-600">Launched subscription billing platform</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-payzoona-indigo flex items-center justify-center z-10 mx-0 md:mx-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="flex-1 md:pl-8">
                  <p className="text-gray-600">Processing ৳500M+ in monthly transactions</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="font-semibold text-xl text-payzoona-indigo">2025</h3>
                  <p className="text-gray-600">Major platform upgrade with new features</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-payzoona-indigo flex items-center justify-center z-10 mx-0 md:mx-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="flex-1 md:pl-8">
                  <p className="text-gray-600">Expanding to additional South Asian markets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do at Payzoona."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-payzoona-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                <ShieldCheck className="h-8 w-8 text-payzoona-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Security</h3>
              <p className="text-gray-600">
                We prioritize the security of every transaction. Our platform employs the latest 
                encryption standards and fraud prevention tools to protect both merchants and their customers.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="bg-payzoona-indigo/10 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                <Globe className="h-8 w-8 text-payzoona-indigo" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to solve payment challenges. By staying ahead of industry 
                trends and customer needs, we develop solutions that help businesses grow.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="bg-payzoona-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                <Users className="h-8 w-8 text-payzoona-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-gray-600">
                We believe in clear communication and straightforward pricing. Our merchants always 
                know what they're paying for and can track every transaction in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection bgColor="bg-gray-50" faqs={aboutFaqs} />

      {/* Call To Action */}
      <section className="section bg-white">
        <div className="container-custom">
          <CallToAction
            title="Join us on our mission"
            description="Partner with Payzoona and help transform the payment landscape in Bangladesh."
            primaryButtonText="Get Started"
            primaryButtonLink="/onboarding"
            secondaryButtonText="Contact Us"
            secondaryButtonLink="/contact"
          />
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
