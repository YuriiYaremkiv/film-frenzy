import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

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
      <Footer />
    </>
  );
};

export default Layout;
