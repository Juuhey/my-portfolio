import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// THEME
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import mytheme from './theme/MyTheme.tsx'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <CssBaseline />

    <ThemeProvider theme={mytheme}>
      <App />
    </ThemeProvider>

  </StrictMode>,
)
