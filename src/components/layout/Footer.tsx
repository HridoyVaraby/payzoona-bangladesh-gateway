
import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaLinks from '@/components/shared/SocialMediaLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center space-x-2 mb-4">
              <img src="/payzoona_icon.svg" alt="Payzoona Logo" className="w-8 h-8" />
              <div className="font-bold text-2xl text-payzoona-teal font-inter">Payzoona<span className="text-sm align-bottom">.com</span></div>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Accept payments in BDT, receive settlements in your preferred currency. 
              Powering payments for businesses in Bangladesh and around the world.
            </p>
            <SocialMediaLinks 
              className="text-gray-500 hover:text-payzoona-teal" 
              containerClassName="flex space-x-4"
            />
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-payzoona-teal">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-payzoona-teal">Services</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-payzoona-teal">Contact</Link></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-600 hover:text-payzoona-teal">Online Payment Gateway</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-payzoona-teal">Cross-border Settlement</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-payzoona-teal">Subscription Billing</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-payzoona-teal">E-commerce Integrations</Link></li>
            </ul>
          </div>
          
          {/* Developers */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Developers</h3>
            <ul className="space-y-3">
              <li><Link to="/developers" className="text-gray-600 hover:text-payzoona-teal">API Documentation</Link></li>
              <li><Link to="/developers" className="text-gray-600 hover:text-payzoona-teal">SDKs</Link></li>
              <li><Link to="/developers" className="text-gray-600 hover:text-payzoona-teal">Sandbox</Link></li>
              <li><Link to="/developers" className="text-gray-600 hover:text-payzoona-teal">Integration Guides</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2022 - {currentYear} Payzoona. All rights reserved. Developed by <a href="https://varabit.com/" >Varabit Web Design & Development.</a>
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-sm text-gray-500 hover:text-payzoona-teal">Terms of Service</Link>
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-payzoona-teal">Privacy Policy</Link>
              <Link to="/security" className="text-sm text-gray-500 hover:text-payzoona-teal">Security</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
