import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './SectionMoviesList.module.scss';

export const SectionMoviesList = ({ movies }) => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <section>
      <ul className={css.list}>
        {movies.map(
          (
            {
              id,
              title,
              name,
              poster_path: path,
              release_date: date,
              first_air_date: dateTV,
              vote_average: rating,
            },
            index
          ) => {
            return (
              <li key={index} className={css.list__item}>
                <Link
                  className={css.list__link}
                  to={`/${dateTV ? 'tv' : 'movie'}/${id}`}
                >
                  <div className={css.card}>
                    <div className={css.card__container}>
                      <img
                        src={tmdbConfigs.posterImage(path)}
                        alt={title}
                        className={css.image}
                      />
                      <div className={css.description}></div>
                      <Stack spacing={1} className={css.rating}>
                        <p
                          style={{
                            ...modeConfig.style.textColorAccent[themeMode],
                          }}
                          className={css.rating__text}
                        >
                          {rating?.toFixed(1)}
                        </p>
                        <StarIcon
                          fontSize="medium"
                          style={{
                            ...modeConfig.style.textColorAccent[themeMode],
                          }}
                          className={css.rating__icon}
                        />
                      </Stack>
                      <div className={css.card__tumb}>
                        <p
                          style={{
                            ...modeConfig.style.textColorAccent[themeMode],
                          }}
                          className={css.date}
                        >
                          {(dateTV || date)?.slice(0, 4)}
                        </p>
                        <p
                          style={{
                            ...modeConfig.style.textColorAccent[themeMode],
                          }}
                          className={css.title}
                        >
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
    </section>
  );
};
