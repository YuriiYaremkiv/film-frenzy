import css from './Header.module.scss';

import sprite from './icons/sprite.svg';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.header__container}>
          <div className={css.logo}>
            <a href="#">
              <svg>
                <use href={ } />
              </svg>
            </a>
          </div>
          <ul className={css.list}>
            <li>
              <p>Movies</p>
            </li>
            <li>
              <p>TV Shows</p>
            </li>
            <li>
              <p>People</p>
            </li>
          </ul>
          <ul className={css.list}>
            <li>
              <p>EN</p>
            </li>
            <li>
              <p>Login</p>
            </li>
            <li>
              <p>Join</p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
