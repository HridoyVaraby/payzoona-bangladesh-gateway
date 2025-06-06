
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Session, User } from '@supabase/supabase-js';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, useLocation } from 'react-router-dom';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  checkingAdminStatus: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdminStatus, setCheckingAdminStatus] = useState(false);
  const [hasRedirectedOnLogin, setHasRedirectedOnLogin] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        // Check admin status after auth state changes
        if (currentSession?.user) {
          setCheckingAdminStatus(true);
          setTimeout(() => {
            checkAdminStatus(currentSession.user.id, event === 'SIGNED_IN');
          }, 0);
        } else {
          setIsAdmin(false);
          setCheckingAdminStatus(false);
          setHasRedirectedOnLogin(false);
        }
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      // Check admin status on initial load
      if (currentSession?.user) {
        setCheckingAdminStatus(true);
        checkAdminStatus(currentSession.user.id, false);
      } else {
        setIsLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const checkAdminStatus = async (userId: string, isNewLogin: boolean = false) => {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('id')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error checking admin status:', error);
        setIsAdmin(false);
      } else {
        setIsAdmin(!!data);
        // Only navigate to admin dashboard on new login, not on every admin check
        if (data && isNewLogin && !hasRedirectedOnLogin) {
          setHasRedirectedOnLogin(true);
          navigate('/admin-dashboard/dashboard');
        }
      }
    } catch (error) {
      console.error('Error in admin check:', error);
      setIsAdmin(false);
    } finally {
      setCheckingAdminStatus(false);
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: 'Login failed',
          description: error.message,
          variant: 'destructive',
        });
        setIsLoading(false);
        return;
      }

      if (data.session) {
        toast({
          title: 'Login successful',
          description: 'Welcome back!',
        });
        // Navigation will happen after admin status is checked via onAuthStateChange
      }
    } catch (error) {
      console.error('Error signing in:', error);
      toast({
        title: 'Login failed',
        description: 'An unexpected error occurred',
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setHasRedirectedOnLogin(false);
      toast({
        title: 'Logged out',
        description: 'You have been successfully logged out',
      });
      navigate('/pz-auth');
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: 'Error',
        description: 'Failed to sign out',
        variant: 'destructive',
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        isLoading,
        isAdmin,
        signIn,
        signOut,
        checkingAdminStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
