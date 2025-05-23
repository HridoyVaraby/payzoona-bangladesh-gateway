
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Check, X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

type MerchantApplication = {
  id: string;
  business_name: string;
  website: string;
  contact_name: string;
  email: string;
  phone: string;
  business_type: string;
  monthly_volume: string;
  business_description: string;
  settlement_currency: string;
  created_at: string;
  is_reviewed: boolean;
};

const ApplicationsPage: React.FC = () => {
  const { toast } = useToast();
  const [selectedApplication, setSelectedApplication] = useState<MerchantApplication | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data: applications, isLoading, error, refetch } = useQuery({
    queryKey: ['merchantApplications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('merchant_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      return data as MerchantApplication[];
    },
  });

  const handleViewDetails = (application: MerchantApplication) => {
    setSelectedApplication(application);
    setIsDialogOpen(true);
  };

  const handleToggleReviewed = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('merchant_applications')
        .update({ is_reviewed: !currentStatus })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Status updated",
        description: `Application marked as ${!currentStatus ? 'reviewed' : 'pending'}`,
      });

      refetch();
    } catch (error) {
      console.error('Error updating application status:', error);
      toast({
        title: "Update failed",
        description: "There was an error updating the application status",
        variant: "destructive"
      });
    }
  };

  const formatCurrency = (value: string) => {
    switch (value) {
      case 'bdt': return 'BDT';
      case 'usd': return 'USD';
      case 'eur': return 'EUR';
      case 'gbp': return 'GBP';
      case 'crypto': return 'Cryptocurrency';
      default: return value;
    }
  };

  const formatBusinessType = (value: string) => {
    switch (value) {
      case 'ecommerce': return 'E-commerce';
      case 'saas': return 'SaaS/Subscription';
      case 'services': return 'Services';
      case 'ngo': return 'NGO/Non-profit';
      case 'other': return 'Other';
      default: return value;
    }
  };

  const formatMonthlyVolume = (value: string) => {
    switch (value) {
      case 'less50k': return 'Less than ৳50,000';
      case '50k-200k': return '৳50,000 - ৳2,00,000';
      case '200k-500k': return '৳2,00,000 - ৳5,00,000';
      case '500k-1m': return '৳5,00,000 - ৳10,00,000';
      case 'more1m': return 'More than ৳10,00,000';
      default: return value;
    }
  };

  if (isLoading) return <div className="text-center py-8">Loading applications...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error loading applications</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Merchant Applications</h1>
        <p className="text-gray-500">
          Manage merchant onboarding applications
        </p>
      </div>

      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Business Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Business Type</TableHead>
              <TableHead>Currency</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications && applications.length > 0 ? (
              applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">{application.business_name}</TableCell>
                  <TableCell>{application.contact_name}</TableCell>
                  <TableCell>{formatBusinessType(application.business_type)}</TableCell>
                  <TableCell>{formatCurrency(application.settlement_currency)}</TableCell>
                  <TableCell>
                    <Badge variant={application.is_reviewed ? "success" : "secondary"}>
                      {application.is_reviewed ? 'Reviewed' : 'Pending'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(application.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleViewDetails(application)}
                      >
                        View
                      </Button>
                      <Button
                        variant={application.is_reviewed ? "outline" : "default"}
                        size="sm"
                        onClick={() => handleToggleReviewed(application.id, application.is_reviewed)}
                      >
                        {application.is_reviewed ? (
                          <X className="h-4 w-4 mr-1" />
                        ) : (
                          <Check className="h-4 w-4 mr-1" />
                        )}
                        {application.is_reviewed ? 'Mark Pending' : 'Mark Reviewed'}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6">
                  No applications received yet
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {selectedApplication && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Application Details - {selectedApplication.business_name}</DialogTitle>
              <DialogDescription>
                Submitted on {new Date(selectedApplication.created_at).toLocaleString()}
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Business Information</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Name:</span> {selectedApplication.business_name}</p>
                  <p><span className="font-medium">Website:</span> {selectedApplication.website}</p>
                  <p><span className="font-medium">Type:</span> {formatBusinessType(selectedApplication.business_type)}</p>
                  <p><span className="font-medium">Monthly Volume:</span> {formatMonthlyVolume(selectedApplication.monthly_volume)}</p>
                  <p><span className="font-medium">Settlement Currency:</span> {formatCurrency(selectedApplication.settlement_currency)}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Name:</span> {selectedApplication.contact_name}</p>
                  <p><span className="font-medium">Email:</span> {selectedApplication.email}</p>
                  <p><span className="font-medium">Phone:</span> {selectedApplication.phone}</p>
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="font-semibold mb-2">Business Description</h3>
                <p className="text-gray-700 whitespace-pre-wrap border p-3 rounded-md bg-gray-50">
                  {selectedApplication.business_description}
                </p>
              </div>
            </div>

            <DialogFooter>
              <Button
                variant="ghost"
                onClick={() => setIsDialogOpen(false)}
              >
                Close
              </Button>
              <Button
                variant={selectedApplication.is_reviewed ? "outline" : "default"}
                onClick={() => {
                  handleToggleReviewed(selectedApplication.id, selectedApplication.is_reviewed);
                  setIsDialogOpen(false);
                }}
              >
                {selectedApplication.is_reviewed ? 'Mark as Pending' : 'Mark as Reviewed'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ApplicationsPage;
