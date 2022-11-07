import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import css from './MovieDetail.module.scss';

export const MovieDetail = ({ movieInfo }) => {
  const { title, release_date, vote_average, overview, genres, poster_path } =
    movieInfo;

  const location = useLocation();
  const navigation = useNavigate();

  const onBtnClick = () => {
    navigation(location?.state?.from ?? '/');
  };

  return (
    <div className={css.details}>
      <button className={css.details__btn} type="button" onClick={onBtnClick}>
        <IconContext.Provider value={{ size: '20px' }}>
          <AiOutlineArrowLeft className={css.details__icon} />
        </IconContext.Provider>
        Go back
      </button>

      <div className={css.details__container}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width="300px"
          heigth="450px"
        />
        <div className={css.details}>
          <h2 className={css.details__title}>
            {`${title} (${parseInt(release_date)})`}
          </h2>
          <p>
            User score:
            {vote_average * 10
              ? ` ${(vote_average * 10).toFixed(2)}%`
              : ' no rating'}
          </p>
          <b>Overview</b>
          <p>{overview}</p>
          <b>Genres</b>
          <p>{genres && genres.map(({ name }) => name).join(', ')}</p>
        </div>
      </div>
      <div className={css.additional}>
        <p className={css.additional__title}>Additional information</p>
        <ul>
          <li>
            <Link
              className={css.additional__link}
              to="cast"
              state={location.state}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              className={css.additional__link}
              to="reviews"
              state={location.state}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
