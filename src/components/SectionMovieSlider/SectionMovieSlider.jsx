import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './SectionMovieSlider.module.scss';

export const SectionMovieSlider = ({ movies, allGenres }) => {
  const { themeMode } = useSelector(state => state.themeMode);

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
      {[...movies]
        .reverse()
        .map(
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
              first_air_date: dateTV,
            },
            index
          ) => {
            return (
              <SwiperSlide key={index}>
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
                          value={rating / 2}
                          precision={0.5}
                          readOnly
                          sx={{
                            ...modeConfig.style.textColorAccent[themeMode],
                          }}
                        />
                        <p
                          className={css.rating__text}
                          style={{
                            ...modeConfig.style.textColorAccent[themeMode],
                          }}
                        >
                          {rating?.toFixed(2)}
                        </p>
                      </Stack>
                      {genres.length && allGenres.length ? (
                        <ul className={css.genres}>
                          {genres?.map((genreId, index) => {
                            return (
                              <li
                                key={index}
                                className={css.genres__item}
                                style={{
                                  ...modeConfig.style.backgroundColorAccent[
                                    themeMode
                                  ],
                                }}
                              >
                                {
                                  allGenres.find(item => {
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
                        {new Date(date || dateTV).toLocaleDateString('en-GB', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <Link
                        to={`/${dateTV ? 'tv' : 'movie'}/${id}`}
                        className={css.link}
                        style={{
                          ...modeConfig.style.backgroundColorAccent[themeMode],
                        }}
                      >
                        {dateTV ? ' Go To TV' : 'Go To Movie'}
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
