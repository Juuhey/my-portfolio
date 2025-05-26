import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tagColors: Record<string, string>;
  }
  interface PaletteOptions {
    tagColors?: Record<string, string>;
  }
}