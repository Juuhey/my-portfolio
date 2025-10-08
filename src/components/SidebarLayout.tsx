import { Box } from "@mui/material";
import SidebarNav from "./SidebarNav";
import HeaderNav from "./HeaderNav";
import { Outlet } from "react-router-dom";

const pages = [
  { label: "Qui suis-je ?", path: "/" },
  { label: "Projets", path: "/projets" },
  { label: "CV", path: "/cv" },
];

export default function SidebarLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar desktop only */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <SidebarNav pages={pages} />
      </Box>
      {/* Header mobile/tablette only */}
      <HeaderNav pages={pages} />
      <Box
        sx={{
          flex: 1,
          ml: { xs: 0, md: "220px" },
          pt: { xs: "56px", md: 0 },
          minHeight: "100vh",
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}