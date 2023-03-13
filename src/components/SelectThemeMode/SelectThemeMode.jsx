import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeMode } from 'redux/themeModeSlice';
import { IconButton } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';

export const SelectThemeMode = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.themeMode.themeMode);
  const [mode, setMode] = useState(currentTheme);

  useEffect(() => {
    dispatch(setThemeMode(mode));
  }, [mode, dispatch]);

  const getIcon = () => {
    switch (mode) {
      case 'light':
        return <LightModeOutlinedIcon style={{ color: '#000' }} />;
      case 'dark':
        return <DarkModeOutlinedIcon style={{ color: '#fff' }} />;
      case 'red':
        return <NightsStayOutlinedIcon style={{ color: '#fff' }} />;
      default:
        return null;
    }
  };

  return (
    <IconButton
      color="inherit"
      onClick={() =>
        setMode(mode === 'light' ? 'dark' : mode === 'dark' ? 'red' : 'light')
      }
    >
      {getIcon()}
    </IconButton>
  );
};
