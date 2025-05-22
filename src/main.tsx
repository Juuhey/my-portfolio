import { StrictMode, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import myTheme from "./theme/MyTheme";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./views/Home";
import Colortesting from "./views/Colortesting";
import ProjectsList from "./views/ProjectsList";
import SidebarNav from "./components/SidebarNav";

const pages = [
  { label: "Accueil", path: "/" },
  { label: "Test Couleurs", path: "/colortesting" },
  { label: "Projets", path: "/projets" },
];

function ScrollRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const pageIndex = pages.findIndex(p => p.path === location.pathname);
  const isScrolling = useRef(false);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      if (e.deltaY > 0 && pageIndex < pages.length - 1) {
        navigate(pages[pageIndex + 1].path);
      } else if (e.deltaY < 0 && pageIndex > 0) {
        navigate(pages[pageIndex - 1].path);
      }

      setTimeout(() => { isScrolling.current = false; }, 800); // anti-spam
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [pageIndex, navigate]);

  return (
    <Box sx={{ display: 'flex' }}>
      <SidebarNav
        pages={pages.map(p => ({ label: p.label, anchor: p.path.replace("/", "") || "home" }))}
        currentSection={pages[pageIndex]?.path.replace("/", "") || "home"}
      />
      <Box sx={{ flex: 1, ml: { xs: 0, md: '220px' }, minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colortesting" element={<Colortesting />} />
          <Route path="/projets" element={<ProjectsList />} />
        </Routes>
      </Box>
    </Box>
  );
}

function Main() {
  return (
    <CssVarsProvider theme={myTheme} defaultMode="system">
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <CssBaseline />
      <BrowserRouter>
        <ScrollRouter />
      </BrowserRouter>
    </CssVarsProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);