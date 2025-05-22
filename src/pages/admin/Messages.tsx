
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { formatDistanceToNow } from 'date-fns';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
};

const Messages: React.FC = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedMessage, setSelectedMessage] = useState<ContactSubmission | null>(null);

  const { data: messages, isLoading } = useQuery({
    queryKey: ['contactSubmissions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      return data as ContactSubmission[];
    },
  });

  const markAsRead = useMutation({
    mutationFn: async (id: string) => {
      const { data, error } = await supabase
        .from('contact_submissions')
        .update({ is_read: true })
        .eq('id', id);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: `Failed to update message: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: 'destructive',
      });
    },
  });

  const handleViewMessage = (message: ContactSubmission) => {
    setSelectedMessage(message);
    if (!message.is_read) {
      markAsRead.mutate(message.id);
    }
  };

  const handleCloseDialog = () => {
    setSelectedMessage(null);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-payzoona-teal"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Contact Messages</h1>
        <p className="text-gray-500">Manage contact form submissions</p>
      </div>

      {messages && messages.length > 0 ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message.id} className={!message.is_read ? 'bg-blue-50' : ''}>
                  <TableCell>
                    {!message.is_read ? (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300">
                        New
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-gray-500">
                        Read
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>
                    {formatDistanceToNow(new Date(message.created_at), { addSuffix: true })}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleViewMessage(message)}
                      className="hover:bg-gray-100"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500">No messages found</p>
        </div>
      )}

      <Dialog open={!!selectedMessage} onOpenChange={() => handleCloseDialog()}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Message from {selectedMessage?.name}</DialogTitle>
            <DialogDescription>
              Received {selectedMessage && formatDistanceToNow(new Date(selectedMessage.created_at), { addSuffix: true })}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Name</p>
                <p>{selectedMessage?.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p>{selectedMessage?.email}</p>
              </div>
              {selectedMessage?.company && (
                <div>
                  <p className="text-sm font-medium text-gray-500">Company</p>
                  <p>{selectedMessage.company}</p>
                </div>
              )}
              {selectedMessage?.phone && (
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p>{selectedMessage.phone}</p>
                </div>
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Message</p>
              <div className="mt-2 p-4 bg-gray-50 rounded-md">
                <p className="whitespace-pre-wrap">{selectedMessage?.message}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Messages;
