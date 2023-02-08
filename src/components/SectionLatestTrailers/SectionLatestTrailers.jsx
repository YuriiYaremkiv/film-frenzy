import css from './SectionLatestTrailers.module.scss';

import { useEffect, useState } from 'react';

import { SliderTrailers } from './SliderTrailers/SliderTrailers';

import mediaApi from 'api/modules/media.api';
import tmdbConfigs from 'api/configs/tmdb.configs';

export const SectionLatestTrailers = () => {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [type, setType] = useState('streaming');
  const [path, setPath] = useState(movies);

  console.log(trailer, isLoading, error);

  useEffect(() => {
    setPath(movies[0]?.backdrop_path);
  }, [movies]);

  console.log(path);

  useEffect(() => {
    const start = async () => {
      setIsLoading(true);

      const { response, err } = await mediaApi.getList({
        mediaType: tmdbConfigs.mediaType.movie,
        timeWindow:
          type === tmdbConfigs.mediaTime.day
            ? tmdbConfigs.mediaTime.day
            : tmdbConfigs.mediaTime.week,
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
    };
    start();
  }, [type, trailer, isLoading, error]);

  const handleChangeRadioButton = e => {
    setType(e.target.value);
  };

  const changeBgImagesFunc = poster => {
    setPath(poster);
  };

  const showTrailerFunc = mediaId => {
    (async () => {
      setIsLoading(true);

      const { response, err } = await mediaApi.getTrailer({
        mediaId,
      });

      if (response) {
        setTrailer(response.data.results);
        setIsLoading(false);
      }

      if (err) {
        console.log(err);
        setError(err.message);
        setIsLoading(false);
      }
    })();
  };

  const styleBg = {
    backgroundImage: `linear-gradient(
    to right,
    rgba(3, 37, 65, 0.9) 0%,
    rgba(3, 37, 65, 0.3) 100%
  ), url(https://image.tmdb.org/t/p/w1920_and_h427_multi_faces/${path})`,
  };

  let styles = {};

  switch (type) {
    case 'streaming':
      styles.left = 0;
      styles.width = '120px';
      break;
    case 'on-tv':
      styles.left = 0;
      styles.width = '85px';
      styles.transform = 'translateX(120px)';
      break;
    case 'for-rent':
      styles.left = 0;
      styles.width = '105px';
      styles.transform = 'translateX(205px)';
      break;
    case 'in-theatres':
      styles.left = 0;
      styles.width = '130px';
      styles.transform = 'translateX(310px)';
      break;
    default:
      return styles;
  }

  return (
    <section className={css.section}>
      <div className="container SectionLatestTrailers">
        <div className={css.wrapper__container}>
          <div className={css.wrapper} style={styleBg}>
            <div className={css.title__container}>
              <h2 className={css.title}>Latest Trailers</h2>
              <div className={css.selector}>
                <label>
                  <h3
                    className={
                      type === 'streaming' ? css.activeTitle : css.disableTitle
                    }
                  >
                    Streaming
                  </h3>
                  <input
                    type="radio"
                    checked={type === 'streaming'}
                    name="type"
                    value="streaming"
                    onChange={handleChangeRadioButton}
                    className={css.select__input}
                  />
                </label>
                <label>
                  <h3
                    className={
                      type === 'on-tv' ? css.activeTitle : css.disableTitle
                    }
                  >
                    On TV
                  </h3>
                  <input
                    type="radio"
                    checked={type === 'on-tv'}
                    name="type"
                    value="on-tv"
                    onChange={handleChangeRadioButton}
                    className={css.select__input}
                  />
                </label>
                <label>
                  <h3
                    className={
                      type === 'for-rent' ? css.activeTitle : css.disableTitle
                    }
                  >
                    For Rent
                  </h3>
                  <input
                    type="radio"
                    checked={type === 'for-rent'}
                    name="type"
                    value="for-rent"
                    onChange={handleChangeRadioButton}
                    className={css.select__input}
                  />
                </label>
                <label>
                  <h3
                    className={
                      type === 'in-theatres'
                        ? css.activeTitle
                        : css.disableTitle
                    }
                  >
                    In Theaters
                  </h3>
                  <input
                    type="radio"
                    checked={type === 'in-theatres'}
                    name="type"
                    value="in-theatres"
                    onChange={handleChangeRadioButton}
                    className={css.select__input}
                  />
                </label>
                <div className={css.backGroung} style={styles}></div>
              </div>
            </div>
            <SliderTrailers
              movies={movies}
              className={css.slider}
              changeBgImagesFunc={changeBgImagesFunc}
              showTrailerFunc={showTrailerFunc}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
