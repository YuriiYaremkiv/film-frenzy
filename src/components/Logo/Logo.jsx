import { useSelector } from 'react-redux';
import modeConfig from 'configs/mode.config';
import css from './Logo.module.scss';

export const Logo = ({ fontSize = '' }) => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <p
      style={{
        ...modeConfig.textColor[themeMode],
        fontSize: `${fontSize}px`,
      }}
      className={css.logo}
    >
      Film<span className={css[`logo__${themeMode}`]}>Frenzy</span>
    </p>
  );
};
