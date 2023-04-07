import { NavLink } from 'react-router-dom';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navItems } from '@/app/providers/router';
import { useMobileMenu } from '../hooks/useMobileMenu';

export function MobileMenu() {
  const { anchorElNav, handleOpenNavMenu, handleCloseNavMenu } =
    useMobileMenu();
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {navItems.map(({ path, label }) => (
          <MenuItem key={path} onClick={handleCloseNavMenu}>
            <NavLink to={path as string}>
              <Typography textAlign="center" sx={{ color: '#505050' }}>
                {label}
              </Typography>
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
