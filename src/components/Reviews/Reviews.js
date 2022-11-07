import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { getFetchByReviews } from '../../components/utils/fetchAPI';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoadind] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoadind(true);
    (async () => {
      try {
        const reviews = await getFetchByReviews(movieId);
        setReviews(reviews);
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
      <ul>
        {reviews.length
          ? reviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <b>{author}</b>
                  <p>{content}</p>
                </li>
              );
            })
          : null}
      </ul>
      {reviews.length === 0 && loading === false ? (
        <p>We don't have any reviews for this movie</p>
      ) : null}
    </>
  );
};
