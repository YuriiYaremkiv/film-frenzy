import { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import debounce from 'lodash/debounce';
import Media from 'react-media';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

import {
  getQueryMoviesListRemove,
  getTrendingAll,
} from 'redux/transactions/transactionsOperations';
import { MyInputSearch } from 'components/MyListSearch/MyListSearch';

import { getQueryMoviesList } from 'redux/transactions/transactionsOperations';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import mediaApi from 'api/modules/media.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';

import css from './SectionSearch.module.scss';
import { InputSearchMultiMobile } from 'components/InputSearchMultiMobile/InputSearchMultiMobile';
import { InputSearchMultiTablet } from 'components/InputSearchMultiTablet/InputSearchMultiTablet';

export const SectionSearch = () => {
  const [query, setQuery] = useState('');
  const [showClearBtn, setShowClearBtn] = useState(false);
  const [showList, setShowList] = useState(true);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const list = useSelector(state => state.movies.list);
  const isLoading = useSelector(state => state.movies.isLoading);

  const [posterMovies, setPosterMovies] = useState([]);
  const [error, setError] = useState('');

  const { themeMode } = useSelector(state => state.themeMode);

  useEffect(() => {
    (async () => {
      const { response, err } = await mediaApi.getList({
        mediaType: tmdbConfigs.mediaType.movie,
        timeWindow: tmdbConfigs.mediaTime.week,
        page: 2,
      });

      if (response) {
        setPosterMovies(response.data.results);
      }

      if (err) {
        console.log(err);
        setError(err.message);
      }
    })();
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      dispatch(getQueryMoviesList(query));
    } else {
      dispatch(getQueryMoviesListRemove());
    }
    // eslint-disable-next-line
  }, [query]);

  const handleInputChange = e => {
    setQuery(e.target.value);
    if (e.target.value) {
      setShowClearBtn(true);
    } else {
      setShowClearBtn(false);
    }
  };

  // eslint-disable-next-line
  const throttledChangeHandler = useCallback(
    debounce(handleInputChange, 500),
    []
  );

  const handleClearSearch = () => {
    inputRef.current.focus();
    inputRef.current.value = '';
    dispatch(getQueryMoviesListRemove());
    setShowClearBtn(false);
  };

  const handleShowList = () => {
    setShowList(false);
  };

  const handleShoeListBtn = () => {
    setShowList(!showList);
    inputRef.current.focus();
  };

  const handleSearchMovies = () => {
    if (!inputRef.current.value) {
      return alert('dsshvdhjv');
    }
    dispatch(getTrendingAll(inputRef.current.value));
  };

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
                  ...modeConfig.style.textColor[themeMode],
                }}
              >
                Welcome
              </h2>
              <h3
                style={{
                  ...modeConfig.style.textColor[themeMode],
                }}
              >
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h3>
              {/* Inpur search - start */}

              <Media queries={{ small: { maxWidth: 767 } }}>
                {matches =>
                  matches.small ? (
                    <>
                      <InputSearchMultiMobile
                        list={list}
                        handleShoeListBtn={handleShoeListBtn}
                        throttledChangeHandler={throttledChangeHandler}
                        handleShowList={handleShowList}
                      />
                      <MyInputSearch
                        options={list}
                        showList={showList}
                        isLoading={isLoading}
                      />
                    </>
                  ) : (
                    <>
                      <InputSearchMultiTablet
                        list={list}
                        throttledChangeHandler={throttledChangeHandler}
                        handleShowList={handleShowList}
                        showList={showList}
                        handleShoeListBtn={handleShoeListBtn}
                        showClearBtn={showClearBtn}
                        handleClearSearch={handleClearSearch}
                        handleSearchMovies={handleSearchMovies}
                      />
                      <MyInputSearch
                        options={list}
                        showList={showList}
                        isLoading={isLoading}
                      />
                    </>
                  )
                }
              </Media>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
