
import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, Settings, MessageSquare, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const AdminLayout: React.FC = () => {
  const { signOut } = useAuth();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navLinks = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: Home },
    { name: 'Contact Info', path: '/admin/contact-info', icon: Settings },
    { name: 'Social Media', path: '/admin/social-media', icon: Settings },
    { name: 'Messages', path: '/admin/messages', icon: MessageSquare },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Toggle for Mobile */}
      <div className="lg:hidden fixed top-4 left-4 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="rounded-full bg-white shadow-md"
        >
          {isSidebarOpen ? (
            <span className="sr-only">Close sidebar</span>
          ) : (
            <span className="sr-only">Open sidebar</span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isSidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-10 w-64 transform transition-transform bg-white shadow-lg 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-center h-16 px-4 border-b">
            <Link to="/admin/dashboard" className="flex items-center space-x-2">
              <img src="/payzoona_icon.svg" alt="Payzoona Logo" className="w-8 h-8" />
              <span className="text-xl font-semibold text-payzoona-teal">Admin Panel</span>
            </Link>
          </div>
          <div className="flex-1 px-4 py-6 overflow-y-auto">
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                    isActive(link.path)
                      ? 'bg-payzoona-teal text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <link.icon className="w-5 h-5 mr-3" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="p-4 border-t">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={signOut}
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </Button>
            <div className="mt-4 text-xs text-center text-gray-500">
              <Link to="/" className="hover:underline">
                Return to Website
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
