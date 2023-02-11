import { Link } from 'react-router-dom';
import css from './Footer.module.scss';

import { useSelector } from 'react-redux';
import modeConfig from 'configs/mode.config';

export const Footer = () => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <footer
      className={css.footer}
      style={{ ...modeConfig.style.backgroundColorHeader[themeMode] }}
    >
      <div className="container">
        <div className={css.footer__container}>
          <Link
            to="/"
            className={css.logo}
            style={{ ...modeConfig.style.textColor[themeMode] }}
          >
            Film<span className={css[`logo__${themeMode}`]}>Frenzy</span>
          </Link>
          <ul className={css.list__menu}>
            <li>
              <Link to="/movies" className={css[`link__${themeMode}`]}>
                MOVIES
              </Link>
            </li>
            <li>
              <Link to="/tv" className={css[`link__${themeMode}`]}>
                TV SERIES
              </Link>
            </li>
            <li>
              <Link to="/search" className={css[`link__${themeMode}`]}>
                SEARCH
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
