import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import mediaApi from 'api/modules/media.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './SectionMovieSlider.module.scss';

export const SectionMovieSlider = () => {
  const [movies, setMovies] = useState([]);
  const [AllGenres, setAllGenres] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { themeMode } = useSelector(state => state.themeMode);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const { response, err } = await mediaApi.getMovies({
        movieType: tmdbConfigs.movieType.popular,
      });

      if (response) {
        setMovies(response.data.results);
        setIsLoading(false);
      }
      if (err) {
        setError(err.message);
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const { response, err } = await mediaApi.getGenres();

      if (response) {
        setAllGenres(response.data.genres);
        setIsLoading(false);
      }
      if (err) {
        setError(err.message);
        setIsLoading(false);
      }
    })();
  }, []);

  const params = {
    modules: [Autoplay],
    speed: 1500,
    autoplay: {
      delay: 114500,
      disableOnInteraction: false,
    },
    spaceBetween: 0,
    slidesPerView: 1,
  };

  return (
    <Swiper {...params} style={{ width: '100%', height: 'max-content' }}>
      {movies.map(
        (
          {
            id,
            title,
            name,
            backdrop_path: path,
            poster_path: poster,
            vote_average: rating,
            genre_ids: genres,
            overview,
            release_date: date,
          },
          index
        ) => {
          return (
            <SwiperSlide key={id}>
              <section
                style={{
                  backgroundImage: `url(${tmdbConfigs.backdropPath(
                    path || poster
                  )})`,
                }}
                className={css.section}
              >
                <div className="container">
                  <div className={css.container}>
                    <h2
                      style={{
                        zIndex: 10,
                        ...modeConfig.style.textColor[themeMode],
                      }}
                      className={css.title}
                    >
                      {title || name}
                    </h2>
                    <Stack className={css.rating}>
                      <Rating
                        name="read-only"
                        size="large"
                        color="#fff"
                        defaultValue={rating / 2}
                        precision={0.5}
                        readOnly
                        className={css[`rating__icon__${themeMode}`]}
                      />
                      <p className={css[`rating__text__${themeMode}`]}>
                        {rating ? rating.toFixed(2) : null}
                      </p>
                    </Stack>
                    {genres.length && AllGenres.length ? (
                      <ul className={css.genres}>
                        {genres?.map((genreId, index) => {
                          return (
                            <li
                              key={index}
                              className={css[`genres__item__${themeMode}`]}
                            >
                              {
                                AllGenres.find(item => {
                                  return item.id === genreId;
                                }).name
                              }
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                    <p
                      style={{ ...modeConfig.style.textColor[themeMode] }}
                      className={css.overview}
                    >
                      {overview}
                    </p>
                    <p
                      style={{ ...modeConfig.style.textColor[themeMode] }}
                      className={css.date}
                    >
                      <b>Release date: </b>
                      {new Date(date).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <Link
                      to={`/movies/${id}`}
                      className={css[`link__${themeMode}`]}
                    >
                      Go To Movie
                    </Link>
                  </div>
                </div>
                <div
                  style={{
                    width: '80%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    ...modeConfig.style.horizontalGradientBgImage[themeMode],
                  }}
                ></div>
                <div
                  style={{
                    width: '100%',
                    height: '70%',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    ...modeConfig.style.verticalGradientBgImage[themeMode],
                  }}
                ></div>
              </section>
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
};
