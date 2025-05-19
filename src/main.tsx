import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import {Toolbar, Container } from "@mui/material";
import myTheme from "./theme/MyTheme";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Colortesting from "./views/Colortesting";

const pages = [
  { label: "Accueil", path: "/" },
  { label: "Test Couleurs", path: "/colortesting" },
];

function Main() {
  return (
    <CssVarsProvider theme={myTheme} defaultMode="system">
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <CssBaseline />
      <BrowserRouter>
        <Header pages={pages} />
        <Toolbar />
        <Container sx={{ pt: 4 }}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/colortesting" element={<Colortesting />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </CssVarsProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);