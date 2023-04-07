import { AppBar, Toolbar, Container } from '@mui/material';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import { AuthMenu } from './AuthMenu';
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
          <AuthMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
