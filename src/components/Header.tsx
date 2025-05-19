import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import SwitchMode from './SwitchMode';

type HeaderProps = {
  pages: { label: string; path: string }[];
};

export default function Header({ pages }: HeaderProps) {
  const location = useLocation();

  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {pages.map((page) => (
            <Button
              key={page.path}
              component={Link}
              to={page.path}
              color={location.pathname === page.path ? 'primary' : 'inherit'}
              sx={{ fontWeight: location.pathname === page.path ? 'bold' : 'normal' }}
            >
              {page.label}
            </Button>
          ))}
        </Box>
        <SwitchMode />
      </Toolbar>
    </AppBar>
  );
}