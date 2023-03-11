import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
import { Logo } from 'components/Logo/Logo';
import Media from 'react-media';
import modeConfig from 'configs/mode.config';
import css from './Footer.module.scss';

export const Footer = () => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <footer
      className={css.footer}
      style={{
        ...modeConfig.style.backgroundColorHeader[themeMode],
        marginTop: 'auto',
      }}
    >
      <div className="container">
        <div className={css.wrapper}>
          <Logo />
          <Media query="(min-width: 767px)" render={() => <Navigation />} />
        </div>
      </div>
    </footer>
  );
};
