import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Error } from '../components/Error/Error';
import { SectionMovieDetails } from 'components/SectionMovieDetails/SectionMovieDetails';
import { SectionRecommendation } from 'components/SectionRecommendation/SectionRecommendation';
import { GlobalLoaderLogo } from 'components/GlobalLoaderLogo/GlobalLoaderLogo';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import tvAPI from 'api/modules/tv.api';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

const PageMovieDetails = () => {
  const [tv, setTv] = useState(initialState);
  const [actors, setActors] = useState(initialState);
  const [reviews, setReviews] = useState(initialState);
  const [recommendation, setRecommendation] = useState(initialState);
  const [trailer, setTrailer] = useState(initialState);
  const { tvId } = useParams();

  const globalLoading =
    tv.isLoading &&
    actors.isLoading &&
    reviews.isLoading &&
    recommendation.isLoading &&
    trailer.isLoading;

  //  Get info on tv:
  useEffect(() => {
    (async () => {
      setTv({
        data: [],
        isLoading: true,
        error: '',
      });

      const { response, err } = await tvAPI.getDetailsForTV({
        tvId,
      });

      if (response) {
        setTv({
          data: response.data,
          isLoading: false,
          error: '',
        });
      }

      if (err) {
        setTv({
          data: [],
          isLoading: false,
          error: err.message,
        });
      }
    })();
  }, [tvId]);

  // Get all actors on tv:
  useEffect(() => {
    (async () => {
      setActors({
        data: [],
        isLoading: true,
        error: '',
      });

      const { response, err } = await tvAPI.getCreditsByTV({
        tvId,
      });

      if (response) {
        const allActors = [...response.data.cast];
        const actorsOnlyImage = allActors.filter(actor => {
          if (actor.profile_path) {
            return actor;
          }
          return false;
        });
        setActors({
          data: actorsOnlyImage.sort((a, b) => b.popularity - a.popularity),
          isLoading: false,
          error: '',
        });
      }

      if (err) {
        setActors({
          data: [],
          isLoading: false,
          error: err.message,
        });
      }
    })();
  }, [tvId]);

  // Get reviews for tv:
  useEffect(() => {
    (async () => {
      setReviews({
        data: [],
        isLoading: true,
        error: '',
      });

      const { response, err } = await tvAPI.getReviewsByTV({
        tvId,
      });

      if (response) {
        setReviews({
          data: response.data.results,
          isLoading: false,
          error: '',
        });
      }

      if (err) {
        setReviews({
          data: [],
          isLoading: false,
          error: err.message,
        });
      }
    })();
  }, [tvId]);

  // Ger recomendations on tv:
  useEffect(() => {
    (async () => {
      setRecommendation({
        data: [],
        isLoading: true,
        error: '',
      });

      const { response, err } = await tvAPI.getRecommendationsByTV({
        tvId,
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
  }, [tvId]);

  // Get trailers on tv:
  useEffect(() => {
    (async () => {
      setTrailer({
        data: [],
        isLoading: true,
        error: '',
      });

      const { response, err } = await tvAPI.getTrailersByTV({
        tvId: tvId,
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
  }, [tvId]);

  return (
    <div style={{ position: 'relative' }}>
      <div>
        {tv.data && !tv.error ? (
          <SectionMovieDetails movieInfo={tv.data} trailer={trailer.data} />
        ) : (
          <Error title="Sorry, we're experiencing a temporary network issue. Please try again later." />
        )}

        {actors.data.length && !actors.error && !tv.error ? (
          <Cast actors={actors.data} />
        ) : null}

        {reviews.data.length && !reviews.error && !tv.error ? (
          <Reviews reviews={reviews.data} />
        ) : null}

        {recommendation.data.length && !recommendation.error && !tv.error ? (
          <SectionRecommendation recommendation={recommendation.data} />
        ) : null}
      </div>
      {globalLoading && <GlobalLoaderLogo />}
    </div>
  );
};

export default PageMovieDetails;
