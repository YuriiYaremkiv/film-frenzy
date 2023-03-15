import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Error } from 'components/Error/Error';
import { SelectorList } from 'components/SelectorList/SelectorList';
import { SliderList } from 'components/SliderList/SliderList';
import tvAPI from 'api/modules/tv.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './SectionTV.module.scss';

const list = [
  { title: 'Popular', value: tmdbConfigs.tvType.popular },
  { title: 'Top Rated', value: tmdbConfigs.tvType.top_rated },
  { title: 'On The Air', value: tmdbConfigs.tvType.on_the_air },
];

export const SectionTV = () => {
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [type, setType] = useState(tmdbConfigs.tvType.popular);
  const { themeMode } = useSelector(state => state.themeMode);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const timer = setTimeout(async () => {
        const { response, err } = await tvAPI.getTV({
          mediaType: tmdbConfigs.mediaType.tv,
          tvType: type,
          page: 1,
        });

        if (response) {
          setSeries(response.data.results);
          setIsLoading(false);
        }

        if (err) {
          console.log(err);
          setError(err.message);
          setIsLoading(false);
        }
      }, 600);

      return () => {
        clearTimeout(timer);
      };
    })();
  }, [type]);

  const handleChangeRadioButton = e => {
    setType(e.target.value);
  };

  // Styles for select category - start:
  const stylesHorizontal = {};
  const stylesVertical = {};
  const stylesMaxWidth = { maxWidth: '343px' };

  switch (type) {
    case 'popular':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '105px';
      stylesVertical.transform = 'translateY(0px)';

      break;
    case 'top_rated':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '115px';
      stylesHorizontal.transform = 'translateX(105px)';
      stylesVertical.transform = 'translateY(28px)';
      break;
    case 'on_the_air':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '125px';
      stylesHorizontal.transform = 'translateX(220px)';
      stylesVertical.transform = 'translateY(60px)';
      break;
    default:
      return stylesHorizontal;
  }
  // Styles for select category - end.

  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.title__container}>
          <h2
            className={css.title}
            style={{ ...modeConfig.textColor[themeMode] }}
          >
            Television
          </h2>
          <SelectorList
            type={type}
            list={list}
            onChangeValue={handleChangeRadioButton}
            stylesHorizontal={stylesHorizontal}
            stylesVertical={stylesVertical}
            stylesMaxWidth={stylesMaxWidth}
          />
        </div>

        {!error ? (
          <>
            <SliderList movies={series} isLoading={isLoading} />
          </>
        ) : (
          <Error title="Sorry, we're experiencing a temporary network issue. Please try again later." />
        )}
      </div>
    </section>
  );
};
