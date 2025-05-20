
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/shared/SectionHeader';
import CallToAction from '../components/shared/CallToAction';
import FaqAccordion from '../components/shared/FaqAccordion';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';

const Faqs = () => {
  const generalFaqs = [
    {
      question: "What is Payzoona?",
      answer: "Payzoona is a payment gateway and financial technology company that helps businesses accept payments in Bangladesh while enabling them to receive settlements in various international currencies. We provide a complete payment infrastructure for both local and foreign businesses operating in Bangladesh."
    },
    {
      question: "Which payment methods are supported?",
      answer: "Payzoona supports all major payment methods in Bangladesh, including credit/debit cards (Visa, Mastercard, American Express), mobile banking (bKash, Nagad, Rocket), and internet banking. We also support international cards for foreign customers paying in BDT."
    },
    {
      question: "How quickly will I receive my funds?",
      answer: "Settlement times depend on your plan level. Standard accounts receive weekly settlements, Growth accounts bi-weekly settlements, and Enterprise accounts can have custom settlement schedules. Expedited settlements are available for eligible merchants."
    },
    {
      question: "Is Payzoona secure?",
      answer: "Yes, security is our top priority. Payzoona is PCI DSS compliant and uses industry-standard encryption to protect transaction data. We also employ advanced fraud detection systems to protect both merchants and customers from unauthorized transactions."
    },
    {
      question: "Can I use Payzoona for recurring payments?",
      answer: "Absolutely. Payzoona offers comprehensive subscription billing tools that allow you to set up and manage recurring payments for your customers. You can configure various billing cycles, manage failed payments with automatic retry, and provide customer self-service for subscription management."
    }
  ];
  
  const integrationFaqs = [
    {
      question: "How do I integrate Payzoona with my website?",
      answer: "Payzoona offers multiple integration options. You can use our RESTful API, client-side SDK, server-side libraries for various programming languages, or pre-built plugins for popular platforms like WooCommerce, Shopify, and Magento."
    },
    {
      question: "Do you have a sandbox environment for testing?",
      answer: "Yes, all merchants get access to our sandbox environment where you can test your integration without processing real transactions. The sandbox mimics our production environment and allows you to simulate various payment scenarios."
    },
    {
      question: "What programming languages do you support?",
      answer: "We provide official SDKs for JavaScript/TypeScript, PHP, Python, and Java. Our RESTful API can be used with any programming language that can make HTTP requests."
    },
    {
      question: "How do I handle webhooks?",
      answer: "Payzoona sends webhook notifications for important events like successful payments, failed transactions, and subscription renewals. You can configure webhook endpoints in your developer dashboard and implement event handlers in your backend to process these notifications."
    },
    {
      question: "Can I customize the checkout experience?",
      answer: "Yes, you can customize the appearance of our checkout page to match your brand colors and style. For more advanced customization, you can use our Elements SDK to build your own checkout flow while maintaining our security standards."
    }
  ];
  
  const merchantFaqs = [
    {
      question: "How do I apply for a Payzoona merchant account?",
      answer: "You can apply by completing the merchant application form on our website. We'll need some basic information about your business, estimated transaction volume, and preferred settlement currency."
    },
    {
      question: "What documents are required for verification?",
      answer: "For Bangladesh-based businesses, we typically require business registration documents, trade license, TIN certificate, and bank account details. For foreign businesses, we require proof of incorporation in your country and identification documents for authorized representatives."
    },
    {
      question: "How long does the approval process take?",
      answer: "Most applications are reviewed within 1-3 business days. Complex applications may take longer. We'll keep you updated throughout the process and let you know if we need any additional information."
    },
    {
      question: "Can I accept payments in multiple currencies?",
      answer: "Payzoona primarily processes payments in Bangladeshi Taka (BDT), but you can choose to receive settlements in various currencies including USD, EUR, and GBP."
    },
    {
      question: "What are the transaction limits?",
      answer: "Transaction limits depend on your business type and risk profile. Standard accounts typically have a monthly transaction limit, which can be increased as you build transaction history. Enterprise accounts have higher or custom limits."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-payzoona-blue/5 to-payzoona-indigo/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about Payzoona's payment solutions.
              If you don't see what you're looking for, don't hesitate to contact us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section bg-white">
        <div className="container-custom">
          <Tabs defaultValue="general" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="integration">Integration</TabsTrigger>
              <TabsTrigger value="merchant">Merchant</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <FaqAccordion faqs={generalFaqs} />
            </TabsContent>
            <TabsContent value="integration">
              <FaqAccordion faqs={integrationFaqs} />
            </TabsContent>
            <TabsContent value="merchant">
              <FaqAccordion faqs={merchantFaqs} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Still Have Questions */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Still Have Questions?"
            subtitle="Our support team is here to help you with any questions you might have about our payment services."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-payzoona-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-payzoona-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Email Support</h3>
              <p className="text-gray-600 mb-6">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a href="mailto:support@payzoona.com" className="text-payzoona-blue font-medium">support@payzoona.com</a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center transform md:-translate-y-4 relative before:absolute before:top-0 before:right-0 before:left-0 before:h-1 before:bg-gradient-primary">
              <div className="bg-payzoona-indigo/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-payzoona-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-6">
                Chat with our support team during business hours for immediate assistance.
              </p>
              <button className="text-payzoona-blue font-medium">Start Chat</button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-payzoona-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-payzoona-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Help Center</h3>
              <p className="text-gray-600 mb-6">
                Browse our knowledge base for detailed guides and tutorials.
              </p>
              <a href="#" className="text-payzoona-blue font-medium">Visit Help Center</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="section bg-white">
        <div className="container-custom">
          <CallToAction
            title="Ready to transform your payment experience?"
            description="Join hundreds of businesses using Payzoona to power their payment infrastructure in Bangladesh."
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

export default Faqs;
