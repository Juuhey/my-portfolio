import { useColorScheme } from '@mui/material/styles';
import { Switch } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness2Icon from '@mui/icons-material/Brightness2';

export default function SwitchMode() {
  const { mode, setMode } = useColorScheme();

  // On ne rend rien tant que mode n'est pas défini (évite le warning)
  if (!mode) return null;

  return (
    <Switch
      checked={mode === 'dark'}
      onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
      icon={
        <Brightness7Icon
          sx={{
            fontSize: 20,
            color: "secondary.light",
          }}
        />
      }
      checkedIcon={
        <Brightness2Icon
          sx={{
            fontSize: 20,
            color: "secondary.dark",
          }}
        />
      }
      sx={{
        '& .MuiSwitch-thumb': {
          bgcolor: "secondary.light",
        },
        '& .MuiSwitch-track': {
          bgcolor: "secondary.dark",
        },
      }}
      color="default"
    />
  );
}