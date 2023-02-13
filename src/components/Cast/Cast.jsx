import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';
import { getFetchByCredits } from '../../utils/fetchAPI';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import css from './Cast.module.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Media from 'react-media';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import modeConfig from 'configs/mode.config';
import tmdbConfigs from 'api/configs/tmdb.configs';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoadind] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  const [actorsWithImage, setActorsWithImage] = useState([]);
  const [actorOthers, setActorsOthers] = useState([]);

  const { themeMode } = useSelector(state => state.themeMode);

  const location = useLocation();

  useEffect(() => {
    setIsLoadind(true);
    (async () => {
      try {
        const movie = await getFetchByCredits(movieId);
        const actors = movie.filter(actor => {
          if (actor.profile_path) {
            return actor;
          }
        });

        setActors(actors);
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
      <h3
        style={{ ...modeConfig.style.textColor[themeMode] }}
        className={css.title}
      >
        Top Billed Cast
      </h3>
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
                ? 3
                : matches.mobile
                ? 3
                : matches.tablet
                ? 5
                : 9
            }
            slidesToScroll={
              matches.responsive
                ? 1
                : matches.mobile
                ? 2
                : matches.tablet
                ? 4
                : 4
            }
          >
            {actors.map(({ id, name, profile_path: path, character }) => (
              <div key={id} className={css.card}>
                <Link
                  to={`/person/${id}`}
                  state={{ from: location }}
                  style={{ ...modeConfig.style.textColor[themeMode] }}
                  className={css[`link__${themeMode}`]}
                >
                  <div
                    className={css.card__container}
                    style={{
                      ...modeConfig.style.backgroundColorSecondary[themeMode],
                    }}
                  >
                    <img
                      src={tmdbConfigs.personImage(path)}
                      alt={name}
                      className={css.card__image}
                    />
                    <div
                      className={css.card__tumb}
                      style={{ minHeight: '90px' }}
                    >
                      <p className={css.card__name}>{name}</p>
                      <p className={css.card__character}>{character}</p>
                    </div>
                  </div>
                </Link>
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
