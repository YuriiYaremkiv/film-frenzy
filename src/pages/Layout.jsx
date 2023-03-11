import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import modeConfig from 'configs/mode.config';

const Layout = () => {
  const { themeMode } = useSelector(state => state.themeMode);
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header />
      <main
        style={{
          ...modeConfig.style.backgroundColorMain[themeMode],
          flex: 1,
        }}
      >
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
