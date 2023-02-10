import { useEffect, useState } from 'react';
import { SliderList } from 'components/SliderList/SliderList';
import mediaApi from 'api/modules/media.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import css from './SectionMoreMovies.module.scss';

import { useSelector } from 'react-redux';
import modeConfig from 'configs/mode.config';

export const SectionMoreMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [type, setType] = useState(tmdbConfigs.movieType.now_playing);

  const { themeMode } = useSelector(state => state.themeMode);

  const handleChangeRadioButton = e => {
    setType(e.target.value);
  };

  useEffect(() => {
    (async () => {
      const { response, err } = await mediaApi.getMovies({ movieType: type });

      if (response) {
        setMovies(response.data.results);
        setIsLoading(false);
      }

      if (err) {
        console.log(err);
        setError(err.message);
        setIsLoading(false);
      }
    })();
  }, [type]);

  let styles = {};
  switch (type) {
    case 'now_playing':
      styles.left = 0;
      styles.width = '135px';
      break;
    case 'top_rated':
      styles.left = 0;
      styles.width = '110px';
      styles.transform = 'translateX(140px)';
      break;
    case 'upcoming':
      styles.left = 0;
      styles.width = '120px';
      styles.transform = 'translateX(255px)';
      break;
    default:
      return styles;
  }

  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.title__container}>
          <h2
            className={css.title}
            style={{ ...modeConfig.style.textColor[themeMode] }}
          >
            More Movies
          </h2>
          <div className={css[`selector__${themeMode}`]}>
            <label>
              <h3
                className={
                  type === tmdbConfigs.movieType.now_playing
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                Now Playing
              </h3>
              <input
                type="radio"
                checked={type === tmdbConfigs.movieType.now_playing}
                name="time"
                value={tmdbConfigs.movieType.now_playing}
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <label>
              <h3
                className={
                  type === tmdbConfigs.movieType.top_rated
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                Top Rated
              </h3>
              <input
                type="radio"
                checked={type === tmdbConfigs.movieType.top_rated}
                name="time"
                value={tmdbConfigs.movieType.top_rated}
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <label>
              <h3
                className={
                  type === tmdbConfigs.movieType.upcoming
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                Upcoming
              </h3>
              <input
                type="radio"
                checked={type === tmdbConfigs.movieType.upcoming}
                name="time"
                value={tmdbConfigs.movieType.upcoming}
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <div
              className={css[`backGroung__${themeMode}`]}
              style={styles}
            ></div>
          </div>
        </div>
        <SliderList movies={movies} isLoading={isLoading} />
      </div>
    </section>
  );
};
