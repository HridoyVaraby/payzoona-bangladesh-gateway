
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/shared/SectionHeader';
import { Separator } from '@/components/ui/separator';
import { Shield, LockKeyhole, File } from 'lucide-react';

const Security = () => {
  return (
    <Layout>
      <div className="container-custom py-16 md:py-24">
        <SectionHeader
          title="Security"
          subtitle="Enterprise-grade security for your payments"
          description="We take security seriously. Payzoona employs industry-leading security practices to protect your data and transactions."
          centered={true}
        />
        
        <div className="max-w-4xl mx-auto mt-12 space-y-12">
          {/* Security Overview */}
          <section className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 text-center">
              <div className="mx-auto w-12 h-12 bg-payzoona-blue/10 flex items-center justify-center rounded-full mb-4">
                <Shield className="w-6 h-6 text-payzoona-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">PCI DSS Compliant</h3>
              <p className="text-gray-600 text-sm">We maintain the highest level of PCI DSS compliance to ensure secure payment processing.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 text-center">
              <div className="mx-auto w-12 h-12 bg-payzoona-blue/10 flex items-center justify-center rounded-full mb-4">
                <LockKeyhole className="w-6 h-6 text-payzoona-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600 text-sm">All sensitive data is encrypted in transit and at rest using industry-standard encryption protocols.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 text-center">
              <div className="mx-auto w-12 h-12 bg-payzoona-blue/10 flex items-center justify-center rounded-full mb-4">
                <File className="w-6 h-6 text-payzoona-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fraud Prevention</h3>
              <p className="text-gray-600 text-sm">Advanced fraud detection systems to protect you and your customers from fraudulent transactions.</p>
            </div>
          </section>
          
          <Separator className="my-12" />
          
          {/* Detailed Security Measures */}
          <section className="space-y-8">
            <h2 className="heading-md text-center mb-8">Our Security Measures</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="heading-sm">Data Protection</h3>
                <p className="text-gray-600">
                  All data is encrypted both in transit and at rest using industry-standard AES-256 encryption. 
                  Sensitive payment information is tokenized, ensuring that actual card data is never stored on our servers.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="heading-sm">Compliance Certifications</h3>
                <p className="text-gray-600">
                  Payzoona maintains compliance with international security standards:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>PCI DSS Level 1 (Payment Card Industry Data Security Standard)</li>
                  <li>ISO 27001 (Information Security Management)</li>
                  <li>GDPR compliance for European data processing</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="heading-sm">System Security</h3>
                <p className="text-gray-600">
                  Our infrastructure employs multiple layers of security:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>Regular security audits and penetration testing</li>
                  <li>24/7 monitoring for suspicious activities</li>
                  <li>Advanced firewalls and intrusion detection systems</li>
                  <li>DDoS protection to ensure service availability</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="heading-sm">Fraud Prevention</h3>
                <p className="text-gray-600">
                  Our intelligent fraud detection system analyzes transactions in real-time to identify and prevent fraudulent activities:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>Machine learning algorithms that adapt to emerging fraud patterns</li>
                  <li>Risk scoring for every transaction</li>
                  <li>Custom rules and filters to match your business needs</li>
                  <li>Velocity checks to identify unusual transaction patterns</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="heading-sm">Authentication & Access Control</h3>
                <p className="text-gray-600">
                  We implement strong authentication measures:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>Multi-factor authentication (MFA) for all dashboard access</li>
                  <li>Role-based access control for your team members</li>
                  <li>Detailed audit logs of all system access</li>
                  <li>IP whitelisting options for API access</li>
                </ul>
              </div>
            </div>
          </section>
          
          <Separator className="my-12" />
          
          {/* Security Reporting */}
          <section className="space-y-6">
            <h2 className="heading-md text-center mb-8">Security Reporting</h2>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="heading-sm mb-4">Vulnerability Disclosure Program</h3>
              <p className="text-gray-600 mb-4">
                We welcome security researchers to participate in our responsible disclosure program. If you discover a security vulnerability, please report it to us at:
              </p>
              <p className="text-payzoona-blue font-medium">security@payzoona.com</p>
              
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-2">Our commitment:</h4>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>We will acknowledge receipt of your report within 24 hours</li>
                  <li>We will provide regular updates on our investigation</li>
                  <li>We will fix verified vulnerabilities in a timely manner</li>
                  <li>We will not take legal action against researchers who follow responsible disclosure principles</li>
                </ul>
              </div>
            </div>
          </section>
          
          <Separator className="my-12" />
          
          {/* Contact */}
          <section className="text-center">
            <h2 className="heading-md mb-4">Security Questions?</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions or concerns about our security practices, please contact our security team.
            </p>
            <div className="inline-block">
              <a href="mailto:security@payzoona.com" className="btn-primary">Contact Security Team</a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Security;
