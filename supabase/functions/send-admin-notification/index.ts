
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NotificationRequest {
  type: 'contact' | 'onboarding';
  data: any;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { type, data }: NotificationRequest = await req.json();
    
    console.log('Received notification request:', { type, data });

    // Get admin email from website settings
    const { data: settingsData, error: settingsError } = await supabase
      .from('website_settings')
      .select('setting_value')
      .eq('setting_key', 'contact_info')
      .single();

    if (settingsError) {
      console.error('Error fetching admin email:', settingsError);
      throw new Error('Could not fetch admin email');
    }

    const contactInfo = settingsData.setting_value as any;
    const adminEmail = contactInfo.email;

    if (!adminEmail) {
      throw new Error('Admin email not configured');
    }

    let subject = '';
    let htmlContent = '';

    if (type === 'contact') {
      subject = `New Contact Form Submission from ${data.name}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `;
    } else if (type === 'onboarding') {
      subject = `New Merchant Application from ${data.business_name}`;
      htmlContent = `
        <h2>New Merchant Application</h2>
        <p><strong>Business Name:</strong> ${data.business_name}</p>
        <p><strong>Contact Person:</strong> ${data.contact_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Website:</strong> ${data.website}</p>
        <p><strong>Business Type:</strong> ${data.business_type}</p>
        <p><strong>Monthly Volume:</strong> ${data.monthly_volume}</p>
        <p><strong>Settlement Currency:</strong> ${data.settlement_currency}</p>
        <p><strong>Business Description:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${data.business_description.replace(/\n/g, '<br>')}
        </div>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
        <hr>
        <p>Please review this application in the admin dashboard.</p>
      `;
    }

    // Send email using Supabase's built-in email functionality
    const { error: emailError } = await supabase.functions.invoke('resend', {
      body: {
        to: [adminEmail],
        subject: subject,
        html: htmlContent,
      },
    });

    if (emailError) {
      console.error('Error sending email:', emailError);
      throw new Error('Failed to send email notification');
    }

    console.log('Admin notification email sent successfully');

    return new Response(
      JSON.stringify({ success: true, message: 'Admin notification sent' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error('Error in send-admin-notification function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);
