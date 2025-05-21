
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/shared/SectionHeader';
import ContactForm from '../components/shared/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
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
                <div className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-2 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-payzoona-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Visit Our Office</h3>
                    <p className="text-gray-600">
                      Level 5, House 11, Road 92<br />
                      Gulshan 2, Dhaka 1212<br />
                      Bangladesh
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-payzoona-indigo/10 p-2 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-payzoona-indigo" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-1">
                      General Inquiries: <a href="mailto:info@payzoona.com" className="text-payzoona-blue">info@payzoona.com</a>
                    </p>
                    <p className="text-gray-600 mb-1">
                      Support: <a href="mailto:support@payzoona.com" className="text-payzoona-blue">support@payzoona.com</a>
                    </p>
                    <p className="text-gray-600">
                      Sales: <a href="mailto:sales@payzoona.com" className="text-payzoona-blue">sales@payzoona.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-2 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-payzoona-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600 mb-1">
                      Bangladesh: <a href="tel:+8809612345678" className="text-payzoona-blue">+880 9612-345678</a>
                    </p>
                    <p className="text-gray-600">
                      International: <a href="tel:+18882345678" className="text-payzoona-blue">+1 (888) 234-5678</a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="mb-2"><span className="font-medium">Sunday to Thursday:</span> 9:00 AM - 6:00 PM (GMT+6)</p>
                  <p className="mb-2"><span className="font-medium">Friday:</span> 9:00 AM - 12:00 PM (GMT+6)</p>
                  <p><span className="font-medium">Saturday:</span> Closed</p>
                  <p className="mt-4 text-sm text-gray-600">
                    Emergency support is available 24/7 for critical issues.
                  </p>
                </div>
              </div>
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
      

      {/* Follow Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Follow Us"
            subtitle="Stay updated with our latest news and announcements."
            centered
          />
          
          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full transition-colors">
              <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full transition-colors">
              <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full transition-colors">
              <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full transition-colors">
              <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
