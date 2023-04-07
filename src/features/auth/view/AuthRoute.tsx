import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/app/providers/auth/useAuth';
import { RoutePaths } from '@/app/providers/router';

type AuthRouteProps = {
  children: JSX.Element;
};
export function AuthRoute({ children }: AuthRouteProps) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate to={RoutePaths.LOGIN} state={{ from: location }} replace />
    );
  }
  return children;
}
