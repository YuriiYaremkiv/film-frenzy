import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d08efe59ac708d7aace6afed9ba7eae9&language=en-US`
    )
      .then(response => response.json())
      .then(data => setActors(data.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul>
      {actors.length &&
        actors.map(({ id, name, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width="70"
              />
              <p>{name}</p>
            </li>
          );
        })}
    </ul>
  );
};
