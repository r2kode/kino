import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import { Header } from '@/features/header';

export function Layout() {
  return (
    <>
      {/* <CssBaseline /> */}
      <Header />
      <Container maxWidth="sm" sx={{ bgcolor: '#242424', pt: 4 }}>
        <Box sx={{ height: '100vh' }}>
          <Outlet />
        </Box>
        <footer>
          <p>Copyrajt, orajt </p>
        </footer>
      </Container>
    </>
  );
}
