import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, name }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
