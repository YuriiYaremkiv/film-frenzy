import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { MovieDetail } from '../components/MovieDetail/MovieDetail';
import { Loader } from '../components/Loader/Loader';
import { Error } from '../components/Error/Error';
import { getFetchById } from '../utils/fetchAPI';

import { SectionMovieDetails } from 'components/SectionMovieDetails/SectionMovieDetails';

import mediaApi from 'api/modules/media.api';
import { SliderList } from 'components/SliderList/SliderList';
import Cast from 'components/Cast/Cast';

const PageMovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const { response, err } = await mediaApi.getDetailsForMovie({
        movieId: movieId,
      });

      if (response) {
        setMovieInfo(response.data);
        setIsLoading(false);
      }

      if (err) {
        setError(err.message);
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <div>
      {isLoading ? <Loader /> : null}
      {error ? <Error /> : null}
      {movieInfo && !error ? (
        <SectionMovieDetails movieInfo={movieInfo} />
      ) : null}
      <Cast />
    </div>
  );
};

export default PageMovieDetails;
