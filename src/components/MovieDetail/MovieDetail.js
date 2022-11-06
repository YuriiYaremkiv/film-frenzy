import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MovieDetail = ({ movieInfo }) => {
  const { title, release_date, vote_average, overview, genres, poster_path } =
    movieInfo;

  const location = useLocation();
  const navigation = useNavigate();

  const onBtnClick = () => {
    navigation(location?.state?.from ?? '/');
  };

  return (
    <>
      <button type="button" onClick={onBtnClick}>
        Go back
      </button>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <h2>
        {title} - {release_date}
      </h2>
      <p>User score: {vote_average * 10}%</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genres && genres.map(({ name }) => name).join(', ')}</p>
      <p>Additional information</p>
      <Link to="cast">Cast</Link>
      <br />
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};
