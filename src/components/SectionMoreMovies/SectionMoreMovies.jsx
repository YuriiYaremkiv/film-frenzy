import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SliderList } from 'components/SliderList/SliderList';
import mediaApi from 'api/modules/media.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './SectionMoreMovies.module.scss';
import { Error } from 'components/Error/Error';

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
      setIsLoading(true);

      const timer = setTimeout(async () => {
        const { response, err } = await mediaApi.getMovies({ movieType: type });

        if (response) {
          setMovies(response.data.results);
          setIsLoading(false);
        }

        if (err) {
          setError(err.message);
          setIsLoading(false);
        }
      }, 600);

      return () => {
        clearTimeout(timer);
      };
    })();
  }, [type]);

  let stylesHorizontal = {};
  let stylesVertical = {};

  switch (type) {
    case 'now_playing':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '135px';
      stylesVertical.transform = 'translateY(0px)';
      break;
    case 'top_rated':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '110px';
      stylesHorizontal.transform = 'translateX(140px)';
      stylesVertical.transform = 'translateY(28px)';
      break;
    case 'upcoming':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '120px';
      stylesHorizontal.transform = 'translateX(255px)';
      stylesVertical.transform = 'translateY(60px)';
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
              className={css[`backGroungHorizontal__${themeMode}`]}
              style={stylesHorizontal}
            ></div>
            <div
              className={css[`backGroungVertical__${themeMode}`]}
              style={stylesVertical}
            ></div>
          </div>
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
