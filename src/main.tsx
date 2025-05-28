import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import myTheme from "./theme/MyTheme";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/Home";
import ProjectsList from "./views/ProjectsList";
import SidebarLayout from "./components/SidebarLayout";
import CV from "./views/CV";

function Main() {
  return (
    <CssVarsProvider theme={myTheme} defaultMode="system">
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SidebarLayout />}>
            <Route index element={<Home />} />
            <Route path="projets" element={<ProjectsList />} />
            <Route path="cv" element={<CV />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);