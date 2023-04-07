import { NavLink } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { RoutePaths } from '@/router';
import { useAuth } from '@/app/providers/auth/useAuth';

export function AuthMenu() {
  const { isAuthenticated, signOut } = useAuth();

  return isAuthenticated ? (
    <Button sx={{ color: '#fff', fontWeight: 'bold' }} onClick={signOut}>
      Sign Out
    </Button>
  ) : (
    <NavLink
      to={RoutePaths.LOGIN}
      style={{
        color: '#fff',
        textDecoration: 'none',
      }}
    >
      <Typography textAlign="center" fontWeight="bold" sx={{ p: 1, mx: 2 }}>
        Sign In
      </Typography>
    </NavLink>
  );
}
