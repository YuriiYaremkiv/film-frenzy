import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import styled from 'styled-components';
import modeConfig from 'configs/mode.config';
import css from './Navigation.module.scss';

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
      return props.thememode === modeConfig.themeConfig.red
        ? modeConfig.color.red
        : modeConfig.color.blue;
    }};
  }
`;

export const Navigation = () => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <nav>
      <ul className={css.list}>
        {list.map(({ category, link }, index) => {
          return (
            <li key={index}>
              <StyledLink
                to={link}
                style={{
                  ...modeConfig.textColor[themeMode],
                }}
                className={css.link}
                thememode={themeMode}
              >
                <Button
                  sx={{
                    ...modeConfig.bgAccentHover[themeMode],
                  }}
                  className={css.button}
                >
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
