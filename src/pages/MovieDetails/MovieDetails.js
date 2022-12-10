import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { MovieDetail } from '../../components/MovieDetail/MovieDetail';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { getFetchById } from '../../components/utils/fetchAPI';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoadind] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoadind(true);
    (async () => {
      try {
        const movie = await getFetchById(movieId);
        setMovieInfo(movie);
        setLoadind(false);
      } catch (error) {
        setLoadind(false);
        setError(true);
      }
    })();
  }, [movieId]);

  return (
    <>
      {loading ? <Loader /> : null}
      {error ? <Error /> : null}
      {movieInfo && !error ? <MovieDetail movieInfo={movieInfo} /> : null}
    </>
  );
};

export default MovieDetails;
