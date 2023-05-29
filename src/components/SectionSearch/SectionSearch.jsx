import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import mediaApi from 'api/modules/media.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './SectionSearch.module.scss';

export const SectionSearch = () => {
  const [posterMovies, setPosterMovies] = useState([]);
  const { themeMode } = useSelector(state => state.themeMode);

  useEffect(() => {
    (async () => {
      const { response } = await mediaApi.getList({
        mediaType: tmdbConfigs.mediaType.movie,
        timeWindow: tmdbConfigs.mediaTime.week,
        page: 2,
      });

      if (response) {
        setPosterMovies(response.data.results);
      }
    })();
  }, []);

  const params = {
    modules: [Autoplay],
    speed: 2000,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
    spaceBetween: 0,
    slidesPerView: 1,
    grabCursor: false,
  };

  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.section__container}>
          <div className={css.wrapper}>
            {/* Slider - start */}
            <Swiper {...params}>
              {posterMovies.map(
                ({ id, backdrop_path: backdrop, poster_path: poster }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div
                        className={css.slide}
                        style={{
                          backgroundImage: `url(${tmdbConfigs.backdropPath(
                            backdrop || poster
                          )})`,
                        }}
                      ></div>
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          pointerEvents: 'none',
                          ...modeConfig.style.horizontalGradientBgImage[
                            themeMode
                          ],
                        }}
                      ></div>
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          pointerEvents: 'none',
                          ...modeConfig.style.gradientBgImage[themeMode],
                        }}
                      ></div>
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
            {/* Slider - end */}
            <div />
            <div className={css.title__container}>
              <h2
                style={{
                  ...modeConfig.textColor[themeMode],
                }}
              >
                Welcome
              </h2>
              <h3
                style={{
                  ...modeConfig.textColor[themeMode],
                }}
              >
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
