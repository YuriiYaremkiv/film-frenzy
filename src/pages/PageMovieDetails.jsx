import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SectionMovieDetails } from 'components/SectionMovieDetails/SectionMovieDetails';
import { Error } from '../components/Error/Error';
import { SectionRecommendation } from 'components/SectionRecommendation/SectionRecommendation';
import { GlobalLoaderLogo } from 'components/GlobalLoaderLogo/GlobalLoaderLogo';
import { getFetchByCredits, getFetchByReviews } from 'utils/fetchAPI';
import Cast from 'components/SectionCast/SectionCast';
import Reviews from 'components/SectopmReviews/SectionReviews';
import mediaApi from 'api/modules/media.api';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

const PageMovieDetails = () => {
  const [movie, setMovie] = useState(initialState);
  const [actors, setActors] = useState(initialState);
  const [reviews, setReviews] = useState(initialState);
  const [recommendation, setRecommendation] = useState(initialState);
  const [trailer, setTrailer] = useState(initialState);
  const { movieId } = useParams();

  const globalLoading =
    movie.isLoading &&
    actors.isLoading &&
    reviews.isLoading &&
    recommendation.isLoading &&
    trailer.isLoading;

  useEffect(() => {
    (async () => {
      setMovie({
        data: [],
        isLoading: true,
        error: '',
      });

      const { response, err } = await mediaApi.getDetailsForMovie({
        movieId: movieId,
      });

      if (response) {
        setMovie({
          data: response.data,
          isLoading: false,
          error: '',
        });
      }

      if (err) {
        setMovie({
          data: [],
          isLoading: false,
          error: err.message,
        });
      }
    })();
  }, [movieId]);

  useEffect(() => {
    (async () => {
      setActors({
        data: [],
        isLoading: true,
        error: '',
      });
      try {
        const movie = await getFetchByCredits(movieId);
        const actors = movie.filter(actor => {
          if (actor.profile_path) {
            return actor;
          }
          return false;
        });

        setActors({
          data: actors,
          isLoading: false,
          error: '',
        });
      } catch (err) {
        setActors({
          data: [],
          isLoading: false,
          error: err.message,
        });
      }
    })();
  }, [movieId]);

  useEffect(() => {
    (async () => {
      setReviews({
        data: [],
        isLoading: true,
        error: '',
      });
      try {
        const response = await getFetchByReviews(movieId);
        const reviews = response.filter(review => {
          if (review.author_details.avatar_path) {
            return true;
          }
          return false;
        });

        setReviews({
          data: reviews,
          isLoading: false,
          error: '',
        });
      } catch (err) {
        setReviews({
          data: [],
          isLoading: false,
          error: err.message,
        });
      }
    })();
  }, [movieId]);

  useEffect(() => {
    (async () => {
      setRecommendation({
        data: [],
        isLoading: true,
        error: '',
      });

      const { response, err } = await mediaApi.getRecommendationMovies({
        movieId: movieId,
      });

      if (response) {
        setRecommendation({
          data: response.data.results,
          isLoading: false,
          error: '',
        });
      }

      if (err) {
        setRecommendation({
          data: [],
          isLoading: false,
          error: err.message,
        });
      }
    })();
  }, [movieId]);

  useEffect(() => {
    (async () => {
      setTrailer({
        data: [],
        isLoading: true,
        error: '',
      });

      const { response, err } = await mediaApi.getTrailer({
        movieId: movieId,
      });

      if (response) {
        const officailTrailer = response.data.results.filter(trailer => {
          if (trailer.name === 'Official Trailer') {
            return true;
          }
          return false;
        });
        setTrailer({
          data: officailTrailer,
          isLoading: false,
          error: '',
        });
      }

      if (err) {
        setTrailer({
          data: [],
          isLoading: false,
          error: err.message,
        });
      }
    })();
  }, [movieId]);

  return (
    <div style={{ position: 'relative' }}>
      <div>
        {movie.data && !movie.error ? (
          <SectionMovieDetails movieInfo={movie.data} trailer={trailer.data} />
        ) : (
          <Error title="Sorry, we're experiencing a temporary network issue. Please try again later." />
        )}

        {actors.data.length && !actors.error && !movie.error ? (
          <Cast actors={actors.data} />
        ) : null}

        {reviews.data.length && !reviews.error && !movie.error ? (
          <Reviews reviews={reviews.data} />
        ) : null}

        {recommendation.data.length && !recommendation.error && !movie.error ? (
          <SectionRecommendation recommendation={recommendation.data} />
        ) : null}
      </div>
      {globalLoading && <GlobalLoaderLogo />}
    </div>
  );
};

export default PageMovieDetails;
