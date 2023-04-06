import { AppBar, Toolbar, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { RoutePaths } from '@/router';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';

export function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo pageName="Kino" />
          <MobileMenu />
          <Logo pageName="Kino" variant="mobile" />
          <DesktopMenu />
          <NavLink
            to={RoutePaths.LOGIN}
            style={{
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            <Typography
              textAlign="center"
              fontWeight="bold"
              sx={{ p: 1, mx: 2 }}
            >
              Login
            </Typography>
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
