
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Add fade-in animation to content on page load, but make sure elements don't disappear
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-element');
          // Don't unobserve to prevent elements from disappearing
        }
      });
    }, { threshold: 0.1 });

    // Replace animate-on-scroll with fade-in-element for better stability
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => {
      el.classList.remove('animate-on-scroll');
      el.classList.add('fade-in-element');
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.fade-in-element').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      <div className="fixed w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/20 rounded-full blur-3xl -top-48 -left-48 z-0"></div>
      <div className="fixed w-96 h-96 bg-gradient-to-bl from-blue-200/20 to-indigo-200/10 rounded-full blur-3xl -bottom-48 -right-48 z-0"></div>
      
      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
