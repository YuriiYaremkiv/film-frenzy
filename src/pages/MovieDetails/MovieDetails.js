import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { MovieDetail } from '../../components/MovieDetail/MovieDetail';

export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=d08efe59ac708d7aace6afed9ba7eae9&language=en-US`
    )
      .then(response => response.json())
      .then(data => setMovieInfo(data))
      .catch(error => console.log(error));
  }, [movieId]);

  console.log(movieId);
  return (
    <>
      {movieInfo && <MovieDetail movieInfo={movieInfo} />}
      {movieInfo && <Outlet />}
    </>
  );
};
