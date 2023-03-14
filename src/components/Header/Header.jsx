import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { SelectThemeMode } from '../SelectThemeMode/SelectThemeMode';
import { Logo } from 'components/Logo/Logo';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import MenuIcon from '@mui/icons-material/Menu';
import Media from 'react-media';
import modeConfig from 'configs/mode.config';
import css from './Header.module.scss';

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { themeMode } = useSelector(state => state.themeMode);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const message = () => Notify.warning('This section is under development.');

  return (
    <header
      style={{ ...modeConfig.style.backgroundColorHeader[themeMode] }}
      className={css.header}
    >
      <div className="container">
        <div className={css.container}>
          <Media query={{ maxWidth: 767 }}>
            {matches =>
              matches ? (
                <div className={css.container__block}>
                  <IconButton
                    onClick={toggleSidebar}
                    style={{ ...modeConfig.textColor[themeMode] }}
                  >
                    <MenuIcon fontSize="large" />
                  </IconButton>
                  <Logo />
                </div>
              ) : (
                <div className={css.container__block}>
                  <Logo />
                  <Navigation />
                  <SelectThemeMode />
                </div>
              )
            }
          </Media>

          <Button
            onClick={message}
            sx={{
              ...modeConfig.bgAccent[themeMode],
            }}
            className={css.button}
          >
            SIGN IN
          </Button>
        </div>
      </div>
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};
