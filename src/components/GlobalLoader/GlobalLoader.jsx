import { useSelector } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import modeConfig from 'configs/mode.config';
import css from './GlobalLoader.module.scss';

export const GlobalLoader = () => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <div
      style={{ ...modeConfig.style.horizontalGradientBgProgress[themeMode] }}
      className={css[`progress__${themeMode}`]}
    >
      <LinearProgress
        className={css[`linear__${themeMode}`]}
        sx={{
          '& .MuiLinearProgress-bar': {
            bgcolor: themeMode === 'red' ? '#d50000' : '#01b4e4',
          },
        }}
      />
    </div>
  );
};
