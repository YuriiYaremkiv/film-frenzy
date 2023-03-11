import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeMode } from 'redux/themeModeSlice';
import { Logo } from 'components/Logo/Logo';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import menuConfigs from '../../configs/menu.configs';
import modeConfig from 'configs/mode.config';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Sidebar.module.scss';

const StyledLink = styled(NavLink)`
  &.active {
    color: #fff !important;
    background-color: ${props => {
      return props.thememode === 'red' ? '#d50000' : 'rgba(1, 180, 228, 1)';
    }};
  }
`;

export const Sidebar = ({ open, toggleSidebar }) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState(modeConfig.themeConfig.light);
  const { themeMode } = useSelector(state => state.themeMode);

  useEffect(() => {
    dispatch(setThemeMode(mode));
  }, [mode, dispatch]);

  const drawer = (
    <div>
      <Toolbar sx={{ paddingY: '20px', color: 'text.primary' }}>
        <Stack width="100%" direction="row" justifyContent="center">
          <Logo />
        </Stack>
      </Toolbar>
      <List
        sx={{ paddingX: '30px' }}
        style={{ ...modeConfig.style.backgroundColorMenu[themeMode] }}
      >
        <Typography
          variant="h6"
          marginBottom="20px"
          style={{ ...modeConfig.style.textColor[themeMode] }}
        >
          MENU
        </Typography>
        <ul className={css.list}>
          {menuConfigs.main.map((item, index) => (
            <StyledLink
              key={index}
              to={item.path}
              style={{ ...modeConfig.style.textColor[themeMode] }}
              className={css[`link__${themeMode}`]}
              thememode={themeMode}
              onClick={() => toggleSidebar(false)}
            >
              <ListItemIcon
                style={{
                  color: 'inherit',
                  padding: 0,
                  margin: 0,
                }}
              >
                {item.icon}
              </ListItemIcon>
              {item.display}
            </StyledLink>
          ))}
        </ul>

        <Typography
          variant="h6"
          marginBottom="20px"
          style={{
            ...modeConfig.style.textColor[themeMode],
            marginTop: '12px',
          }}
        >
          THEME
        </Typography>
        <ListItemButton
          onClick={() =>
            setMode(
              mode === 'light' ? 'dark' : mode === 'dark' ? 'red' : 'light'
            )
          }
        >
          <ListItemIcon>
            {themeMode === 'light' && (
              <LightModeOutlinedIcon style={{ color: '#000' }} />
            )}
            {themeMode === 'dark' && (
              <DarkModeOutlinedIcon style={{ color: '#fff' }} />
            )}
            {themeMode === 'red' && (
              <NightsStayOutlinedIcon style={{ color: '#fff' }} />
            )}
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography
                textTransform="uppercase"
                style={{ ...modeConfig.style.textColor[themeMode] }}
                className={css.themeText}
              >
                {`${
                  themeMode === 'light'
                    ? 'dark'
                    : themeMode === 'dark'
                    ? 'red'
                    : 'light'
                } mode`}
              </Typography>
            }
          />
        </ListItemButton>
      </List>
    </div>
  );

  return (
    <>
      <Drawer
        open={open}
        onClose={() => toggleSidebar(false)}
        sx={{
          '& .MuiDrawer-Paper': {
            boxSizing: 'border-box',
            borderRight: '0px',
          },
        }}
      >
        <div
          style={{
            ...modeConfig.style.backgroundColorMenu[themeMode],
            height: '100vh',
          }}
        >
          {drawer}
        </div>
      </Drawer>
    </>
  );
};
