import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from '@/features/header';

export function Layout() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Box sx={{ minHeight: '100vh' }}>
          <Outlet />
        </Box>
        <footer>
          <p>Copyrajt, orajt </p>
        </footer>
      </Container>
    </>
  );
}
