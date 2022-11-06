import { Outlet } from 'react-router-dom';
import { ActiveLink } from './Layout.styled';
import css from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/movies">Movies</ActiveLink>
        </div>
      </header>
      <main>
        <div className={css.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
};
