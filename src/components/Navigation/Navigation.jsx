import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.scss';
import { Button } from '@mui/material';

import modeConfig from 'configs/mode.config';

const list = [
  { category: 'HOME', link: '/' },
  { category: 'MOVIES', link: '/movies' },
  { category: 'TV SERIES', link: '/tv' },
  { category: 'SEARCH', link: '/search' },
];

const StyledLink = styled(NavLink)`
  &.active {
    color: #fff !important;
    background-color: ${props => {
      return props.thememode === 'red' ? '#d50000' : 'rgba(1, 180, 228, 1)';
    }};
  }
`;

export const Navigation = () => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <nav>
      <ul className={css.list}>
        {list.map(({ category, link }) => {
          return (
            <li key={category}>
              <StyledLink
                to={link}
                style={{ ...modeConfig.style.textColor[themeMode] }}
                className={css[`link__${themeMode}`]}
                thememode={themeMode}
              >
                <Button className={css[`button__${themeMode}`]}>
                  {category}
                </Button>
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
