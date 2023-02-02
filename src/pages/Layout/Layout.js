import { Outlet } from 'react-router-dom';
import { ActiveLink } from './Layout.styled';
import { Suspense } from 'react';
import css from './Layout.module.scss';

import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
