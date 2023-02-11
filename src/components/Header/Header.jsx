import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './Header.module.scss';

import { SelectThemeMode } from 'components/SelectThemeMode/SelectThemeMode';

import modeConfig from 'configs/mode.config';

export const Header = () => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <header
      style={{ ...modeConfig.style.backgroundColorHeader[themeMode] }}
      className={css.header}
    >
      <div className="container">
        <div className={css.header__container}>
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
          <ul className={css.list__mode}>
            <li>
              <div className={css[`select__${themeMode}`]}>
                <SelectThemeMode />
              </div>
            </li>
            <li>
              <Link className={css[`link__${themeMode}`]}>SIGN IN</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
