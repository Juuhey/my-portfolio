import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import SwitchMode from "./SwitchMode";
import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

type HeaderNavProps = {
  pages: { label: string; path: string }[];
};

export default function HeaderNav({ pages }: HeaderNavProps) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

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
      <Toolbar sx={{ justifyContent: "space-between", minHeight: 56 }}>
        {/* burger menu */}
        <Box sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((prev) => !prev)}
            sx={{ mr: 1 }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          <Drawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            slotProps={{
              paper: {
                sx: { width: 220 },
              },
            }}
          >
            <List
              sx={{
                pt: 7, // buttons under HeaderNav (56px + marge)
                pb: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {pages.map((page) => {
                const selected = location.pathname === page.path;
                return (
                  <ListItemButton
                    key={page.path}
                    component={Link}
                    to={page.path}
                    selected={selected}
                    onClick={() => setOpen(false)}
                    sx={{
                      borderRadius: 2,
                      "&.Mui-selected": {
                        bgcolor: "primary.dark",
                        color: "primary.contrastText",
                      },
                      color: selected ? "primary.contrastText" : "inherit",
                      "&:hover": {
                        bgcolor: "primary.dark",
                        color: "primary.contrastText",
                      },
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: selected ? 700 : 400,
                            textAlign: "center",
                          }}
                        >
                          {page.label}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                );
              })}
            </List>
          </Drawer>
        </Box>
        {/* 433px + */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: 1,
            flexWrap: "nowrap",
          }}
        >
          {pages.map((page) => {
            const selected = location.pathname === page.path;
            return (
              <Button
                key={page.path}
                component={Link}
                to={page.path}
                sx={{
                  borderRadius: 2,
                  fontWeight: selected ? 700 : 400,
                  fontSize: { xs: "0.85rem", sm: "1rem" },
                  minWidth: { xs: 0, sm: 64 },
                  px: { xs: 1, sm: 2 },
                  bgcolor: selected ? "primary.dark" : "transparent",
                  color: selected ? "primary.contrastText" : "inherit",
                  "&:hover": {
                    bgcolor: "primary.dark",
                    color: "primary.contrastText",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: selected ? 700 : 400,
                    textAlign: "center",
                  }}
                >
                  {page.label}
                </Typography>
              </Button>
            );
          })}
        </Box>
        <SwitchMode />
      </Toolbar>
    </AppBar>
  );
}
