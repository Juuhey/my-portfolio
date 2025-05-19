import { useColorScheme } from '@mui/material/styles';
import { Switch, FormControlLabel } from '@mui/material';

export default function SwitchMode() {
  const { mode, setMode } = useColorScheme();
  return (
    <FormControlLabel
      control={
        <Switch
          checked={mode === 'dark'}
          onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
        />
      }
      label={mode === 'dark' ? 'Dark' : 'Light'}
    />
  );
}