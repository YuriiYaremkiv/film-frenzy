import { Outlet } from 'react-router-dom';
import { ActiveLink } from './Layout.styled';
import css from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.container}>
          <ActiveLink to={'/'} end>
            Home
          </ActiveLink>
          <ActiveLink to={'/movies'}>Movies</ActiveLink>
        </nav>
      </header>
      <main>
        <div className={css.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
