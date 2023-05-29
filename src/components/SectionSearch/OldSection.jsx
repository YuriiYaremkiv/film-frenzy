// import { useState, useEffect, useCallback, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Navigate } from 'react-router';
// import debounce from 'lodash/debounce';
// import Media from 'react-media';
// import { MyInputSearch } from 'components/MyListSearch/MyListSearch';
// import {
//   getQueryMoviesList,
//   getQueryMoviesListRemove,
// } from 'redux/transactions/transactionsOperations';
// import { getSearchMedia } from 'redux/search/searchOperations';
// import 'swiper/css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper';
// import { InputSearchMultiMobile } from 'components/InputSearchMultiMobile/InputSearchMultiMobile';
// import { InputSearchMultiTablet } from 'components/InputSearchMultiTablet/InputSearchMultiTablet';
// import mediaApi from 'api/modules/media.api';
// import tmdbConfigs from 'api/configs/tmdb.configs';
// import modeConfig from 'configs/mode.config';
// import css from './SectionSearch.module.scss';

// export const SectionSearch = () => {
//   const [query, setQuery] = useState('');
//   const [showClearBtn, setShowClearBtn] = useState(false);
//   const [showList, setShowList] = useState(true);
//   const inputRef = useRef(null);
//   const dispatch = useDispatch();
//   const [posterMovies, setPosterMovies] = useState([]);
//   const [redirectToSearch, setRedirectToSearch] = useState(false);
//   const { themeMode } = useSelector(state => state.themeMode);
//   const isLoading = useSelector(state => state.movies.isLoading);
//   const list = useSelector(state => state.movies.list);

//   useEffect(() => {
//     setShowList(true);
//   }, [list]);

//   useEffect(() => {
//     (async () => {
//       const { response } = await mediaApi.getList({
//         mediaType: tmdbConfigs.mediaType.movie,
//         timeWindow: tmdbConfigs.mediaTime.week,
//         page: 2,
//       });

//       if (response) {
//         setPosterMovies(response.data.results);
//       }
//     })();
//   }, []);

//   useEffect(() => {
//     if (query.length > 0) {
//       dispatch(getQueryMoviesList(query));
//     } else {
//       dispatch(getQueryMoviesListRemove());
//     }
//     // eslint-disable-next-line
//   }, [query]);

//   const handleInputChange = e => {
//     setQuery(e.target.value);
//     if (e.target.value) {
//       setShowClearBtn(true);
//     } else {
//       setShowClearBtn(false);
//     }
//   };

//   // eslint-disable-next-line
//   const throttledChangeHandler = useCallback(
//     debounce(handleInputChange, 500),
//     []
//   );

//   const handleClearSearch = () => {
//     inputRef.current.focus();
//     inputRef.current.value = '';
//     dispatch(getQueryMoviesListRemove());
//     setShowClearBtn(false);
//   };

//   const handleShowList = () => {
//     setShowList(false);
//   };

//   const handleSearchMovies = () => {
//     if (!inputRef.current.value) {
//       return;
//     }
//     dispatch(
//       getSearchMedia({
//         searchType: tmdbConfigs.mediaType.movie,
//         query: inputRef.current.value,
//         page: 1,
//       })
//     );
//     setRedirectToSearch(true);
//   };

//   const params = {
//     modules: [Autoplay],
//     speed: 2000,
//     autoplay: {
//       delay: 8500,
//       disableOnInteraction: false,
//     },
//     spaceBetween: 0,
//     slidesPerView: 1,
//     grabCursor: false,
//   };

//   if (redirectToSearch) {
//     return <Navigate to="/search" />;
//   }

//   return (
//     <section className={css.section}>
//       <div className="container">
//         <div className={css.section__container}>
//           <div className={css.wrapper}>
//             {/* Slider - start */}
//             <Swiper {...params}>
//               {posterMovies.map(
//                 ({ id, backdrop_path: backdrop, poster_path: poster }) => {
//                   return (
//                     <SwiperSlide key={id}>
//                       <div
//                         className={css.slide}
//                         style={{
//                           backgroundImage: `url(${tmdbConfigs.backdropPath(
//                             backdrop || poster
//                           )})`,
//                         }}
//                       ></div>
//                       <div
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           position: 'absolute',
//                           top: 0,
//                           left: 0,
//                           pointerEvents: 'none',
//                           ...modeConfig.style.horizontalGradientBgImage[
//                             themeMode
//                           ],
//                         }}
//                       ></div>
//                       <div
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           position: 'absolute',
//                           bottom: 0,
//                           left: 0,
//                           pointerEvents: 'none',
//                           ...modeConfig.style.gradientBgImage[themeMode],
//                         }}
//                       ></div>
//                     </SwiperSlide>
//                   );
//                 }
//               )}
//             </Swiper>
//             {/* Slider - end */}
//             <div />
//             <div className={css.title__container}>
//               <h2
//                 style={{
//                   ...modeConfig.textColor[themeMode],
//                 }}
//               >
//                 Welcome
//               </h2>
//               <h3
//                 style={{
//                   ...modeConfig.textColor[themeMode],
//                 }}
//               >
//                 Millions of movies, TV shows and people to discover. Explore
//                 now.
//               </h3>

//               {/* <Media queries={{ small: { maxWidth: 767 } }}>
//                 {matches =>
//                   matches.small ? (
//                     <div style={{ position: 'relative' }}>
//                       <InputSearchMultiMobile
//                         inputRef={inputRef}
//                         throttledChangeHandler={throttledChangeHandler}
//                         showClearBtn={showClearBtn}
//                         handleClearSearch={handleClearSearch}
//                         handleSearchMovies={handleSearchMovies}
//                         handleShowList={handleShowList}
//                       />
//                       <MyInputSearch
//                         options={list}
//                         showList={showList}
//                         isLoading={isLoading}
//                       />
//                     </div>
//                   ) : (
//                     <div style={{ position: 'relative' }}>
//                       <InputSearchMultiTablet
//                         inputRef={inputRef}
//                         throttledChangeHandler={throttledChangeHandler}
//                         showClearBtn={showClearBtn}
//                         handleClearSearch={handleClearSearch}
//                         handleSearchMovies={handleSearchMovies}
//                         handleShowList={handleShowList}
//                       />
//                       <MyInputSearch
//                         options={list}
//                         showList={showList}
//                         isLoading={isLoading}
//                       />
//                     </div>
//                   )
//                 }
//               </Media> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
