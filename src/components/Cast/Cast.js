import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { getFetchByCredits } from '../../utils/fetchAPI';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import css from './Cast.module.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Media from 'react-media';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoadind] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  const [actorsWithImage, setActorsWithImage] = useState([]);
  const [actorOthers, setActorsOthers] = useState([]);

  const { themeMode } = useSelector(state => state.themeMode);

  useEffect(() => {
    setIsLoadind(true);
    (async () => {
      try {
        const movie = await getFetchByCredits(movieId);
        setActors(movie);
        setIsLoadind(false);
      } catch (error) {
        setIsLoadind(false);
        setError(true);
      }
    })();
  }, [movieId]);

  useEffect(() => {
    const actorImages = actors.filter(actor => {
      return actor.profile_path !== null;
    });

    const other = actors.filter(actor => {
      return actor.profile_path === null;
    });
    setActorsWithImage(actorImages);
    setActorsOthers(other);
  }, [actors]);

  return (
    <div className="container">
      <Media
        queries={{
          responsive: '(max-width: 479px)',
          mobile: '(max-width: 767px)',
          tablet: '(min-width: 768px) and (max-width: 1300px)',
          desktop: '(min-width: 1300px)',
        }}
      >
        {matches => (
          <Slider
            className="center"
            infinite={true}
            centerPadding="60px"
            swipeToSlide={true}
            slidesToShow={
              matches.responsive
                ? 1
                : matches.mobile
                ? 2
                : matches.tablet
                ? 5
                : 8
            }
            slidesToScroll={
              matches.responsive
                ? 1
                : matches.mobile
                ? 2
                : matches.tablet
                ? 2
                : 2
            }
          >
            {actors.map(({ id, name, profile_path: path }) => (
              <div key={id} className={css.card}>
                <div className={css.card__container}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${path}`}
                    alt="ias"
                    className={css.image}
                  />
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={css.progress}>
                <Box>
                  <CircularProgress />
                </Box>
              </div>
            )}
          </Slider>
        )}
      </Media>
    </div>
  );
};

export default Cast;
