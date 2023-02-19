import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SliderList } from 'components/SliderList/SliderList';
import mediaApi from 'api/modules/media.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './SectionPopularMovie.module.scss';

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
    const start = async () => {
      setIsLoading(true);

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
    };
    start();
  }, [time]);

  let stylesHorizontal = {};
  let stylesVertical = {};

  switch (time) {
    case 'day':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '90px';
      stylesVertical.transform = 'translateY(0px)';
      break;
    case 'week':
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
            style={{ ...modeConfig.style.textColor[themeMode] }}
          >
            Popular Movies
          </h2>
          <div className={css[`selector__${themeMode}`]}>
            <label>
              <h3
                className={
                  time === 'day'
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                Today
              </h3>
              <input
                type="radio"
                checked={time === tmdbConfigs.mediaTime.day}
                name="time"
                value={tmdbConfigs.mediaTime.day}
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <label>
              <h3
                className={
                  time === 'week'
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                This Week
              </h3>
              <input
                type="radio"
                checked={time === tmdbConfigs.mediaTime.week}
                name="time"
                value={tmdbConfigs.mediaTime.week}
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <div
              className={css[`backGroungHorizontal__${themeMode}`]}
              style={stylesHorizontal}
            ></div>
            <div
              className={css[`backGroungVertical__${themeMode}`]}
              style={stylesVertical}
            ></div>
          </div>
        </div>
        {error && <div>{error}</div>}
        <SliderList
          movies={movies}
          isLoading={isLoading}
          themeMode={themeMode}
        />
      </div>
    </section>
  );
};
