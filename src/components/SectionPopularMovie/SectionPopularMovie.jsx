import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SliderList } from 'components/SliderList/SliderList';
import { Error } from 'components/Error/Error';
import mediaApi from 'api/modules/media.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './SectionPopularMovie.module.scss';
import { SelectorList } from 'components/SelectorList/SelectorList';

const list = [
  { title: 'Today', value: tmdbConfigs.mediaTime.day },
  { title: 'This Week', value: tmdbConfigs.mediaTime.week },
];

export const SectionPopularMovie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [time, setTime] = useState(tmdbConfigs.mediaTime.day);
  const { themeMode } = useSelector(state => state.themeMode);

  const handleChangeRadioButton = e => {
    setTime(e.target.value);
  };

  useEffect(() => {
    (() => {
      setIsLoading(true);

      const timer = setTimeout(async () => {
        const { response, err } = await mediaApi.getList({
          mediaType: tmdbConfigs.mediaType.movie,
          timeWindow:
            time === tmdbConfigs.mediaTime.day
              ? tmdbConfigs.mediaTime.day
              : tmdbConfigs.mediaTime.week,
        });

        if (response) {
          setMovies(response.data.results);
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
  }, [time]);

  const stylesHorizontal = {};
  const stylesVertical = {};
  const stylesMaxWidth = { maxWidth: '210px' };

  switch (time) {
    case tmdbConfigs.mediaTime.day:
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '90px';
      stylesVertical.transform = 'translateY(0px)';
      break;
    case tmdbConfigs.mediaTime.week:
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '125px';
      stylesHorizontal.transform = 'translateX(85px)';
      stylesVertical.transform = 'translateY(30px)';
      break;
    default:
      return stylesHorizontal;
  }

  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.title__container}>
          <h2
            className={css.title}
            style={{ ...modeConfig.textColor[themeMode] }}
          >
            Popular Movies
          </h2>
          <SelectorList
            type={time}
            list={list}
            onChangeValue={handleChangeRadioButton}
            stylesHorizontal={stylesHorizontal}
            stylesVertical={stylesVertical}
            stylesMaxWidth={stylesMaxWidth}
          />
        </div>

        {!error ? (
          <SliderList
            movies={movies}
            isLoading={isLoading}
            themeMode={themeMode}
          />
        ) : (
          <Error title="Sorry, we're experiencing a temporary network issue. Please try again later." />
        )}
      </div>
    </section>
  );
};
