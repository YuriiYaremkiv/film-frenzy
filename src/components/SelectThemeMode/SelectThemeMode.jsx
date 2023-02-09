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

const FormControlStyled = styled(FormControl)`
  .MuiSelect-selectMenu {
    background-color: #234567;
  }
`;

export const SelectThemeMode = () => {
  const [mode, setMode] = useState('light');

  const { themeMode } = useSelector(state => state.themeMode);

  const dispatch = useDispatch();

  const handleChange = event => {
    setMode(event.target.value);
  };

  useEffect(() => {
    dispatch(setThemeMode(mode));
  }, [mode, dispatch]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControlStyled fullWidth className={css.form}>
        <Select value={mode} onChange={handleChange}>
          <MenuItem value="light">
            <LightModeOutlinedIcon style={{ color: '#fff' }} />
          </MenuItem>
          <MenuItem value="dark">
            <DarkModeOutlinedIcon style={{ color: '#fff' }} />
          </MenuItem>
          <MenuItem value="red">
            <NightsStayOutlinedIcon style={{ color: '#fff' }} />
          </MenuItem>
        </Select>
      </FormControlStyled>
    </Box>
  );
};
