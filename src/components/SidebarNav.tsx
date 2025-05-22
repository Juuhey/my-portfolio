import { Box, List, ListItemButton, ListItemText } from '@mui/material';

type SidebarNavProps = {
  pages: { label: string; anchor: string }[];
  currentSection: string;
};

export default function SidebarNav({ pages, currentSection }: SidebarNavProps) {
  return (
    <Box sx={{
      width: 220,
      minHeight: '100vh',
      bgcolor: 'background.paper',
      borderRight: 1,
      borderColor: 'divider',
      position: 'fixed',
      top: 0,
      left: 0,
      pt: 8,
    }}>
      <List>
        {pages.map((page) => (
          <ListItemButton
            key={page.anchor}
            component="a"
            href={`#${page.anchor}`}
            selected={currentSection === page.anchor}
            sx={{
              borderRadius: 2,
              my: 1,
              bgcolor: currentSection === page.anchor ? 'primary.main' : 'transparent',
              color: currentSection === page.anchor ? 'primary.contrastText' : 'inherit',
              '&:hover': { bgcolor: 'primary.light', color: 'primary.contrastText' },
              scrollBehavior: 'smooth',
            }}
          >
            <ListItemText primary={page.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}