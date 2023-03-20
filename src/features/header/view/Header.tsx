import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
