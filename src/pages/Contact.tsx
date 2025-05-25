
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/shared/SectionHeader';
import ContactForm from '../components/shared/ContactForm';
import SocialMediaLinks from '../components/shared/SocialMediaLinks';
import { useContactInfo } from '../hooks/use-contact-info';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const { contactInfo, isLoading } = useContactInfo();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-payzoona-blue/5 to-payzoona-indigo/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Have questions or want to learn more about our payment solutions?
              We'd love to hear from you. Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                title="Get in Touch"
                subtitle="Our team is here to help you with any questions about our payment solutions."
              />
              
              <div className="space-y-8 mt-8">
                {/* Address Section */}
                {isLoading ? (
                  <div className="flex items-start">
                    <div className="bg-payzoona-blue/10 p-2 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-payzoona-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Visit Our Office</h3>
                      <div className="space-y-2">
                        <span className="block h-6 w-48 bg-gray-200 animate-pulse rounded"></span>
                        <span className="block h-6 w-40 bg-gray-200 animate-pulse rounded"></span>
                      </div>
                    </div>
                  </div>
                ) : contactInfo?.address ? (
                  <div className="flex items-start">
                    <div className="bg-payzoona-blue/10 p-2 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-payzoona-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Visit Our Office</h3>
                      <p className="text-gray-600">
                        {contactInfo.address.split('\n').map((line, index) => (
                          <React.Fragment key={index}>
                            {line}<br />
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                ) : null}
                
                {/* Email Section */}
                {isLoading ? (
                  <div className="flex items-start">
                    <div className="bg-payzoona-indigo/10 p-2 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-payzoona-indigo" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                      <span className="block h-6 w-48 bg-gray-200 animate-pulse rounded"></span>
                    </div>
                  </div>
                ) : contactInfo?.email ? (
                  <div className="flex items-start">
                    <div className="bg-payzoona-indigo/10 p-2 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-payzoona-indigo" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                      <p className="text-gray-600">
                        <a href={`mailto:${contactInfo.email}`} className="text-payzoona-blue">
                          {contactInfo.email}
                        </a>
                      </p>
                    </div>
                  </div>
                ) : null}

                {/* Phone Section - only show if phone exists */}
                {!isLoading && contactInfo?.phone && (
                  <div className="flex items-start">
                    <div className="bg-payzoona-blue/10 p-2 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-payzoona-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                      <p className="text-gray-600">
                        <a href={`tel:${contactInfo.phone}`} className="text-payzoona-blue">
                          {contactInfo.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Business Hours Section */}
              {isLoading ? (
                <div className="mt-12">
                  <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-2">
                      <span className="block h-6 w-full bg-gray-200 animate-pulse rounded"></span>
                      <span className="block h-6 w-full bg-gray-200 animate-pulse rounded"></span>
                      <span className="block h-6 w-full bg-gray-200 animate-pulse rounded"></span>
                    </div>
                  </div>
                </div>
              ) : contactInfo?.business_hours ? (
                <div className="mt-12">
                  <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    {contactInfo.business_hours.split('\n').map((line, index) => (
                      <p key={index} className={index < contactInfo.business_hours.split('\n').length - 1 ? "mb-2" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Follow Us - Only show if social media links exist */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Follow Us"
            subtitle="Stay updated with our latest news and announcements."
            centered
          />
          
          <div className="flex justify-center mt-8">
            <SocialMediaLinks 
              className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full transition-colors" 
              iconClassName="h-6 w-6 text-gray-700"
              containerClassName="flex space-x-6"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
