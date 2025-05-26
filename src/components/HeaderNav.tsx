import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import SwitchMode from "./SwitchMode";

type Page = { label: string; path: string };
type HeaderNavProps = { pages: Page[] };

export default function HeaderNav({ pages }: HeaderNavProps) {
  const location = useLocation();
  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      sx={{
        display: { xs: "flex", md: "none" },
        top: 0,
        left: 0,
        width: "100%",
        minWidth: 0,
        overflowX: "auto",
        zIndex: 1201,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: { xs: 0.5, sm: 1 }, flexWrap: "nowrap" }}>
          {pages.map((page) => (
            <Button
              key={page.path}
              component={Link}
              to={page.path}
              color={location.pathname === page.path ? "primary" : "inherit"}
              sx={{
                fontWeight: location.pathname === page.path ? "bold" : "normal",
                bgcolor:
                  location.pathname === page.path
                    ? "primary.light"
                    : "transparent",
                borderRadius: 2,
                fontSize: { xs: "0.85rem", sm: "1rem" },
                minWidth: { xs: 0, sm: 64 },
                px: { xs: 1, sm: 2 },
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: location.pathname === page.path ? 700 : 400 }}
              >
                {page.label}
              </Typography>
            </Button>
          ))}
        </Box>
        <SwitchMode />
      </Toolbar>
    </AppBar>
  );
}