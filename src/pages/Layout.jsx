import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import modeConfig from 'configs/mode.config';

const Layout = () => {
  const { themeMode } = useSelector(state => state.themeMode);
  return (
    <>
      <Header />
      <main
        style={{
          ...modeConfig.style.backgroundColorMain[themeMode],
        }}
      >
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
