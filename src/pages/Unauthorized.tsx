
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

const Unauthorized: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="flex justify-center">
          <div className="rounded-full bg-red-100 p-3">
            <Shield className="h-10 w-10 text-red-600" />
          </div>
        </div>
        <h1 className="mt-5 text-2xl font-bold text-gray-900">Access Denied</h1>
        <p className="mt-2 text-gray-600">
          You don't have permission to access this page. This area is reserved for administrators only.
        </p>
        <div className="mt-6 flex flex-col space-y-3">
          <Button asChild className="bg-gradient-primary hover:brightness-110">
            <Link to="/admin">Go to Login</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
