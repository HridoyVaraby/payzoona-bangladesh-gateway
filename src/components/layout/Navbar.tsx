
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-bold text-2xl text-payzoona-indigo">Payzoona</div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-payzoona-blue font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-payzoona-blue font-medium transition-colors">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-payzoona-blue font-medium transition-colors">Services</Link>
            <Link to="/developers" className="text-gray-700 hover:text-payzoona-blue font-medium transition-colors">Developers</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-payzoona-blue font-medium transition-colors">Pricing</Link>
            <Link to="/contact" className="text-gray-700 hover:text-payzoona-blue font-medium transition-colors">Contact</Link>
          </nav>

          {/* Action Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://wa.me/8801301100382" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-full">Contact Sales</Button>
            </a>
            <Link to="/onboarding">
              <Button className="bg-gradient-primary hover:brightness-110 rounded-full">Get Started</Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button type="button" onClick={toggleMenu} className="p-2 text-gray-500">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden py-4 px-6 border-t border-gray-100 bg-white">
          <nav className="space-y-4 pb-5">
            <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-payzoona-blue font-medium transition-colors">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="block text-gray-700 hover:text-payzoona-blue font-medium transition-colors">About Us</Link>
            <Link to="/services" onClick={toggleMenu} className="block text-gray-700 hover:text-payzoona-blue font-medium transition-colors">Services</Link>
            <Link to="/developers" onClick={toggleMenu} className="block text-gray-700 hover:text-payzoona-blue font-medium transition-colors">Developers</Link>
            <Link to="/pricing" onClick={toggleMenu} className="block text-gray-700 hover:text-payzoona-blue font-medium transition-colors">Pricing</Link>
            <Link to="/contact" onClick={toggleMenu} className="block text-gray-700 hover:text-payzoona-blue font-medium transition-colors">Contact</Link>
          </nav>
          <div className="flex flex-col space-y-3">
            <a href="https://wa.me/8801301100382" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              <Button variant="outline" className="w-full rounded-full">Contact Sales</Button>
            </a>
            <Link to="/onboarding" onClick={toggleMenu}>
              <Button className="w-full bg-gradient-primary hover:brightness-110 rounded-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
