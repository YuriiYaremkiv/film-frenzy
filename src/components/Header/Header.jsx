import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { Link } from 'react-router-dom';

import css from './Header.module.scss';

import sprite from './icons/sprite.svg';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.header__container}>
          <div className={css.logo}>
            <Link to="/">
              <svg className={css.icon}>
                <use href={sprite + '#logo'}></use>
              </svg>
            </Link>
          </div>
          <ul className={css.list__menu}>
            <li>
              <a href="/" className={css.link}>
                Movies
              </a>
            </li>
            <li>
              <a href="/" className={css.link}>
                TV Shows
              </a>
            </li>
            <li>
              <a href="/" className={css.link}>
                People
              </a>
            </li>
          </ul>
          <ul className={css.list__contacts}>
            <li>
              <a href="/" className={css.link}>
                EN
              </a>
            </li>
            <li>
              <a href="/" className={css.link}>
                Login
              </a>
            </li>
            <li>
              <a href="/" className={css.link}>
                Join
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
