import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import modeConfig from 'configs/mode.config';
import mediaApi from 'api/modules/media.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import css from './SectionMoviesList.module.scss';

export const SectionMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [type, setType] = useState(tmdbConfigs.movieType.popular);
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

  return (
    <section>
      <div className="container">
        <div className={css.container}>
          <h2
            style={{
              ...modeConfig.style.textColor[themeMode],
            }}
          >
            Movies
          </h2>
          <div className={css.selector}>
            <label>
              <h3
                className={
                  type === tmdbConfigs.movieType.popular
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                Popular
              </h3>
              <input
                type="radio"
                checked={type === tmdbConfigs.movieType.now_playing}
                name="time"
                value={tmdbConfigs.movieType.popular}
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
          </div>
        </div>
        <ul className={css.list}>
          {movies.map(
            ({
              id,
              title,
              name,
              poster_path: path,
              release_date: date,
              vote_average: rating,
            }) => {
              return (
                <li key={id} className={css.list__item}>
                  <Link className={css.list__link} to={`/movies/${id}`}>
                    <div className={css.card}>
                      <div className={css.card__container}>
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${path}`}
                          alt="ias"
                          className={css.image}
                        />
                        <div className={css.description}></div>
                        <Stack spacing={1} className={css.rating}>
                          <p className={css[`rating__text__${themeMode}`]}>
                            {rating ? rating.toFixed(1) : null}
                          </p>
                          <StarIcon
                            fontSize="medium"
                            className={css[`rating__icon__${themeMode}`]}
                          />
                        </Stack>
                        <div className={css.card__tumb}>
                          <p className={css[`date__${themeMode}`]}>
                            {date.slice(0, 4)}
                          </p>
                          <p className={css[`title__${themeMode}`]}>
                            {title || name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            }
          )}
        </ul>
        {/* pagination */}
      </div>
    </section>
  );
};
