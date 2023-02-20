import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';

import css from './SelectThemeMode.module.scss';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeMode } from 'redux/themeModeSlice';

import modeConfig from 'configs/mode.config';

export const SelectThemeMode = () => {
  const [mode, setMode] = useState(modeConfig.themeConfig.light);
  const { themeMode } = useSelector(state => state.themeMode);

  const dispatch = useDispatch();

  const handleChange = event => {
    setMode(event.target.value);
  };

  useEffect(() => {
    dispatch(setThemeMode(mode));
  }, [mode, dispatch]);

  const StyledSelect = styled(Select)`
    .MuiList-root {
      color: #456543 !important;
    }
    .MuiMenu-list {
      color: #451111 !important;
    }
    .MuiList-root {
      color: #456543 !important;
    }
  `;

  return (
    <FormControl fullWidth className={css.form}>
      <StyledSelect
        value={mode}
        onChange={handleChange}
        className={css.select}
        variant="standard"
      >
        <MenuItem value="light" className={css.item}>
          <LightModeOutlinedIcon
            style={{ ...modeConfig.style.textColor[themeMode] }}
          />
        </MenuItem>
        <MenuItem value="dark" className={css.item}>
          <DarkModeOutlinedIcon
            style={{ ...modeConfig.style.textColor[themeMode] }}
          />
        </MenuItem>
        <MenuItem value="red" className={css.item}>
          <NightsStayOutlinedIcon
            style={{ ...modeConfig.style.textColor[themeMode] }}
          />
        </MenuItem>
      </StyledSelect>
    </FormControl>
  );
};
