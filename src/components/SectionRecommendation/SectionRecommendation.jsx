import { useSelector } from 'react-redux';
import { SliderList } from 'components/SliderList/SliderList';
import modeConfig from 'configs/mode.config';
import css from './SectionRecommendation.module.scss';

export const SectionRecommendation = ({
  recommendation,
  isLoading = false,
}) => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <section>
      <div className="container">
        <h3
          style={{ ...modeConfig.textColor[themeMode] }}
          className={css.title}
        >
          Recommendations
        </h3>
        <SliderList movies={recommendation} isLoading={isLoading} />
      </div>
    </section>
  );
};
