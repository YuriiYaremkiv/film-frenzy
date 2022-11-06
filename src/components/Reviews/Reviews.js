import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=d08efe59ac708d7aace6afed9ba7eae9&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(data => setReviews(data.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul>
      {reviews.length &&
        reviews.map(({ id, content }) => {
          return <li key={id}>{content}</li>;
        })}
    </ul>
  );
};
