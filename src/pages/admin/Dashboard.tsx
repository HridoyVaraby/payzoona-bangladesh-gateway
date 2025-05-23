
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, MessageSquare, ArrowRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const { data: contactSubmissions, isLoading: isLoadingMessages } = useQuery({
    queryKey: ['contactSubmissions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      return data || [];
    },
  });

  const { data: merchantApplications, isLoading: isLoadingApplications } = useQuery({
    queryKey: ['dashboardApplications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('merchant_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      return data || [];
    },
  });

  const unreadMessages = contactSubmissions?.filter((submission) => !submission.is_read).length || 0;
  const pendingApplications = merchantApplications?.filter((app) => !app.is_reviewed).length || 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">
          Welcome back, {user?.email}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              Messages
            </CardTitle>
            <CardDescription>Contact form submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {isLoadingMessages ? '...' : contactSubmissions?.length || 0}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              {unreadMessages} unread messages
            </p>
            <Link to="/admin/messages">
              <Button variant="ghost" size="sm" className="flex items-center">
                View <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Applications
            </CardTitle>
            <CardDescription>Merchant applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {isLoadingApplications ? '...' : merchantApplications?.length || 0}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              {pendingApplications} pending review
            </p>
            <Link to="/admin/applications">
              <Button variant="ghost" size="sm" className="flex items-center">
                View <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Website Settings</CardTitle>
            <CardDescription>Contact information and social links</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Manage your website settings
            </p>
            <Link to="/admin/contact-info">
              <Button variant="ghost" size="sm" className="flex items-center">
                View <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="border rounded-lg p-4 bg-white">
        <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link to="/admin/applications" className="block p-3 border rounded-md hover:bg-gray-50 transition-colors">
            Review Merchant Applications
          </Link>
          <Link to="/admin/contact-info" className="block p-3 border rounded-md hover:bg-gray-50 transition-colors">
            Update Contact Information
          </Link>
          <Link to="/admin/social-media" className="block p-3 border rounded-md hover:bg-gray-50 transition-colors">
            Manage Social Media Links
          </Link>
          <Link to="/admin/messages" className="block p-3 border rounded-md hover:bg-gray-50 transition-colors">
            View Contact Messages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
