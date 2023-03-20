import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

type LogoProps = {
  pageName: string;
  variant?: 'desktop' | 'mobile';
};

export function Logo({ pageName, variant = 'desktop' }: LogoProps) {
  const mobileDisplay = { xs: 'flex', md: 'none' };
  const desktopDisplay = { xs: 'none', md: 'flex' };

  return (
    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
      <Typography
        variant={variant === 'desktop' ? 'h6' : 'h5'}
        noWrap
        sx={{
          mr: 2,
          display: variant === 'desktop' ? desktopDisplay : mobileDisplay,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        {pageName}
      </Typography>
    </Link>
  );
}
