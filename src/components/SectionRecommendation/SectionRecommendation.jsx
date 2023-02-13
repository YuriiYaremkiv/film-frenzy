import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SliderList } from 'components/SliderList/SliderList';
import mediaApi from 'api/modules/media.api';
import modeConfig from 'configs/mode.config';
import css from './SectionRecommendation.module.scss';

export const SectionRecommendation = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const { themeMode } = useSelector(state => state.themeMode);

  useEffect(() => {
    (async () => {
      const { response, err } = await mediaApi.getRecommendationMovies({
        movieId: movieId,
      });

      if (response) {
        setMovies(response.data.results);
        setIsLoading(false);
      }

      if (err) {
        console.log(err);
        setError(err.message);
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <section>
      <div className="container">
        <h3
          style={{ ...modeConfig.style.textColor[themeMode] }}
          className={css.title}
        >
          Recommendations
        </h3>
        <SliderList movies={movies} isLoading={isLoading} />
      </div>
    </section>
  );
};
