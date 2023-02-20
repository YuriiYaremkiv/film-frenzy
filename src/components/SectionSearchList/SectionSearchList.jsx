import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import css from './SectionSearchList.module.scss';

export const SectionSearchList = ({ movies }) => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <section>
      <ul className={css.list}>
        {movies.map(
          ({
            id,
            title,
            name,
            profile_path: path,
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
                          {date?.slice(0, 4)}
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
    </section>
  );
};
