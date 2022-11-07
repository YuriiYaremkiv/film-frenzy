import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './MoviesList.module.scss';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.movies__list}>
      {movies.map(({ id, title, name, poster_path }) => {
        return (
          <li key={id} className={css.movies_item}>
            <Link
              className={css.movies__link}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              <img
                className={css.movies__img}
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                width="270"
                height="409"
              />
              <p className={css.movies__description}>{title || name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
