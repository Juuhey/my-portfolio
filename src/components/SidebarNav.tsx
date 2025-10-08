import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import SwitchMode from "./SwitchMode";
import Typography from "@mui/material/Typography";

type SidebarNavProps = {
  pages: { label: string; path: string }[];
};

export default function SidebarNav({ pages }: SidebarNavProps) {
  const location = useLocation();
  return (
    <Box
      sx={{
        width: { xs: "100%", md: 220 },
        height: { xs: 56, md: "100vh" },
        position: "fixed",
        top: { xs: 0, md: 0 },
        left: { xs: 0, md: 0 },
        borderRight: { xs: 0, md: 1 },
        borderBottom: { xs: 1, md: 0 },
        borderColor: "divider",
        zIndex: 1200,
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        justifyContent: { xs: "space-between", md: "space-between" },
        alignItems: "center",
        py: { xs: 0, md: 2 },
        px: { xs: 2, md: 0 },
      }}
    >
      {/* Menu */}
      <Box
        sx={{
          width: { xs: "auto", md: "100%" },
          height: { xs: "100%", md: "auto" },
          display: "flex",
          alignItems: "center",
          flex: 1,
          justifyContent: { xs: "flex-start", md: "center" },
        }}
      >
        <List
          sx={{
            width: { xs: "auto", md: "100%" },
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            alignItems: "center",
            p: 0,
            m: 0,
          }}
        >
          {pages.map((page) => (
            <ListItemButton
              key={page.path}
              component={Link}
              to={page.path}
              selected={location.pathname === page.path}
              sx={{
                borderRadius: 2,
                mx: { xs: 1, md: 0 },
                my: { xs: 0, md: 1 },

                "&.Mui-selected": {
                  bgcolor: "primary.dark"
                },

                color:
                  location.pathname === page.path
                    ? "primary.contrastText"
                    : "inherit",
                
                "&:hover": {
                  bgcolor: "primary.dark",
                  color: "primary.contrastText",
                },

                width: { xs: "auto", md: "90%" },
                justifyContent: "center",
                minWidth: 64,
                minHeight: { xs: 40, md: 48 },
                px: 2,
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: location.pathname === page.path ? 700 : 400,
                      textAlign: "center",
                    }}
                  >
                    {page.label}
                  </Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
      {/* SwitchMode à droite sur mobile, en bas sur desktop */}
      <Box sx={{ mb: { xs: 0, md: 2 }, ml: { xs: 2, md: 0 } }}>
        <SwitchMode />
      </Box>
    </Box>
  );
}
