import { useSelector } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import modeConfig from 'configs/mode.config';
import css from './GlobalLoaderLogo.module.scss';
import { Logo } from 'components/Logo/Logo';

export const GlobalLoaderLogo = () => {
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
      <div style={{ paddingTop: '100px' }}>
        <Logo fontSize="60" />
      </div>
    </div>
  );
};
