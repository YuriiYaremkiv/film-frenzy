import { Outlet, NavLink } from 'react-router-dom';
import css from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.link}>
          Movies
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
