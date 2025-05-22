
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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

  const unreadMessages = contactSubmissions?.filter((submission) => !submission.is_read).length || 0;

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
            <CardTitle>Messages</CardTitle>
            <CardDescription>Contact form submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {isLoadingMessages ? '...' : contactSubmissions?.length || 0}
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">
              {unreadMessages} unread messages
            </p>
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
          <CardFooter>
            <p className="text-sm text-gray-500">
              Manage your website settings
            </p>
          </CardFooter>
        </Card>
      </div>

      <div className="border rounded-lg p-4 bg-white">
        <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a href="/admin/contact-info" className="block p-3 border rounded-md hover:bg-gray-50 transition-colors">
            Update Contact Information
          </a>
          <a href="/admin/social-media" className="block p-3 border rounded-md hover:bg-gray-50 transition-colors">
            Manage Social Media Links
          </a>
          <a href="/admin/messages" className="block p-3 border rounded-md hover:bg-gray-50 transition-colors">
            View Contact Messages
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
