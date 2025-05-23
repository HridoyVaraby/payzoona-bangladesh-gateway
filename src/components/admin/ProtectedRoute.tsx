
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = true }: ProtectedRouteProps) => {
  const { user, isLoading, isAdmin, checkingAdminStatus } = useAuth();
  const location = useLocation();

  useEffect(() => {
    // Console log for debugging authentication state
    console.log('Auth state in protected route:', { user, isLoading, isAdmin, checkingAdminStatus });
  }, [user, isLoading, isAdmin, checkingAdminStatus]);

  if (isLoading || checkingAdminStatus) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-payzoona-teal"></div>
          <p className="text-payzoona-teal">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    // Redirect to login if not logged in
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  if (requireAdmin && !isAdmin) {
    // Redirect to unauthorized page if not an admin
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
