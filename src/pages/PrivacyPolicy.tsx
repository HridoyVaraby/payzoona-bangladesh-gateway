
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/shared/SectionHeader';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container-custom py-16 md:py-24">
        <SectionHeader
          title="Privacy Policy"
          subtitle="Last updated: May 21, 2025"
          description="This Privacy Policy explains how Payzoona collects, uses, and protects your personal information."
          centered={true}
        />
        
        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          <section className="space-y-4">
            <h2 className="heading-sm">1. Information We Collect</h2>
            <p className="text-gray-600">
              We collect information you provide directly to us when you register for an account, use our Services, 
              or communicate with us. This information may include:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
              <li>Personal information, such as your name, email address, phone number, and business information</li>
              <li>Financial information, such as bank account details, credit card information, and transaction history</li>
              <li>Device information, such as your IP address, browser type, and operating system</li>
              <li>Usage data, including how you interact with our Services</li>
            </ul>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">2. How We Use Your Information</h2>
            <p className="text-gray-600">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
              <li>Providing, maintaining, and improving our Services</li>
              <li>Processing transactions and sending related notifications</li>
              <li>Verifying your identity and preventing fraud</li>
              <li>Communicating with you about products, services, promotions, and events</li>
              <li>Responding to your comments, questions, and customer service requests</li>
              <li>Complying with legal obligations and enforcing our terms of service</li>
            </ul>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">3. Information Sharing</h2>
            <p className="text-gray-600">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
              <li>Service providers who perform services on our behalf</li>
              <li>Financial institutions and payment processors necessary to complete transactions</li>
              <li>Third parties as required by law or to protect our rights</li>
              <li>Business partners with your consent or at your direction</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">4. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic 
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">5. International Data Transfers</h2>
            <p className="text-gray-600">
              We may transfer your information to countries other than the country in which you are located, including to 
              countries that may not provide the same level of data protection as your home country. We take steps to ensure 
              that your information receives an adequate level of protection in the countries in which we process it.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">6. Data Retention</h2>
            <p className="text-gray-600">
              We retain your information for as long as necessary to fulfill the purposes for which we collected it, 
              including to satisfy legal, accounting, or reporting requirements.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">7. Your Rights</h2>
            <p className="text-gray-600">
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
              <li>Accessing and obtaining a copy of your information</li>
              <li>Correcting inaccurate information</li>
              <li>Deleting your information</li>
              <li>Restricting or objecting to certain processing</li>
              <li>Data portability</li>
              <li>Withdrawing consent</li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise these rights, please contact us at privacy@payzoona.com.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on our website and updating the "Last Updated" date at the top of this page.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">9. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              Email: privacy@payzoona.com<br />
              Address: Payzoona Ltd., Dhaka, Bangladesh
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
