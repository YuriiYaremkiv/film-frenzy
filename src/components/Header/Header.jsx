import { Link } from 'react-router-dom';

import css from './Header.module.scss';

import sprite from './icons/sprite.svg';

import { SelectThemeMode } from 'components/SelectThemeMode/SelectThemeMode';

import { useTheme } from '@mui/material';

export const Header = () => {
  const theme = useTheme();

  return (
    <header className={css.header}>
      <div className="container header">
        <div className={css.header__container}>
          <div className={css.logo}>
            <Link to="/" className={css.logo__link}>
              <p className={css.logo__text}>
                Film<span>Frenzy</span>
              </p>
            </Link>
          </div>
          <ul className={css.list__menu}>
            <li>
              <Link to="/" className={css.link}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/movies" className={css.link}>
                MOVIES
              </Link>
            </li>
            <li>
              <Link to="/tv" className={css.link}>
                TV SERIES
              </Link>
            </li>
            <li>
              <Link to="/search" className={css.link}>
                SEARCH
              </Link>
            </li>
          </ul>
          <ul className={css.list__contacts}>
            <li>
              <a href="/" className={css.link}>
                <SelectThemeMode />
              </a>
            </li>
            <li>
              <a href="/" className={css.link}>
                SIGN IN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
