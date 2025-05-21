
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/shared/SectionHeader';
import { Separator } from '@/components/ui/separator';

const TermsOfService = () => {
  return (
    <Layout>
      <div className="container-custom py-16 md:py-24">
        <SectionHeader
          title="Terms of Service"
          subtitle="Last updated: May 21, 2025"
          description="Please read these terms carefully before using Payzoona's services."
          centered={true}
        />
        
        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          <section className="space-y-4">
            <h2 className="heading-sm">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing or using Payzoona's services, website, or any applications made available by Payzoona (collectively, the "Services"), 
              you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">2. Description of Services</h2>
            <p className="text-gray-600">
              Payzoona provides payment gateway services that allow businesses to accept payments in Bangladeshi Taka (BDT) 
              and receive settlements in their preferred currency. Our services include online payment processing, 
              cross-border settlement, subscription billing, and various e-commerce integrations.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">3. Account Registration</h2>
            <p className="text-gray-600">
              To use certain features of our Services, you may be required to register for an account. You agree to provide accurate, 
              current, and complete information during the registration process and to update such information to keep it accurate, 
              current, and complete.
            </p>
            <p className="text-gray-600">
              You are responsible for safeguarding your account credentials and for all activities that occur under your account. 
              You agree to notify Payzoona immediately of any unauthorized use of your account.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">4. Fees and Payment</h2>
            <p className="text-gray-600">
              Payzoona charges fees for the use of our Services as outlined on our Pricing page. We reserve the right to change our fees 
              at any time upon notice. By continuing to use our Services after a fee change, you agree to be bound by the updated fee structure.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">5. Prohibited Activities</h2>
            <p className="text-gray-600">
              You agree not to use our Services for any illegal purposes or to conduct activities that would violate any applicable law or regulation. 
              Prohibited activities include, but are not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
              <li>Using our Services to process payments for illegal goods or services</li>
              <li>Attempting to bypass or circumvent our security measures</li>
              <li>Using our Services to conduct fraudulent transactions</li>
              <li>Engaging in money laundering activities</li>
              <li>Infringing on the intellectual property rights of others</li>
            </ul>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">6. Termination</h2>
            <p className="text-gray-600">
              Payzoona reserves the right to suspend or terminate your access to our Services at any time for any reason, 
              including but not limited to violation of these Terms of Service.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">7. Limitation of Liability</h2>
            <p className="text-gray-600">
              To the maximum extent permitted by law, Payzoona shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
              or any loss of data, use, goodwill, or other intangible losses resulting from your use of our Services.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">8. Governing Law</h2>
            <p className="text-gray-600">
              These Terms of Service shall be governed by and construed in accordance with the laws of Bangladesh, 
              without regard to its conflict of law provisions.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">9. Changes to Terms</h2>
            <p className="text-gray-600">
              Payzoona reserves the right to modify these Terms of Service at any time. We will provide notice of significant changes 
              by posting the updated terms on our website. Your continued use of our Services after such modifications constitutes 
              your acceptance of the revised terms.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="space-y-4">
            <h2 className="heading-sm">10. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at legal@payzoona.com.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
