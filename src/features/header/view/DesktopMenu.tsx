import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { navItems } from '@/app/providers/router';

export function DesktopMenu() {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {navItems.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path as string}
          style={({ isActive }) => ({
            color: '#fff',
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          <Typography textAlign="center" fontWeight="bold" sx={{ p: 1, mx: 2 }}>
            {label}
          </Typography>
        </NavLink>
      ))}
    </Box>
  );
}
