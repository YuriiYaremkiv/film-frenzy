import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IconContext } from 'react-icons';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import css from './SectionMovieDetails.module.scss';

import tmdbConfigs from 'api/configs/tmdb.configs';

import mediaApi from 'api/modules/media.api';

// -----------------------------------------------------------
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import modeConfig from 'configs/mode.config';

export const SectionMovieDetails = ({ movieInfo }) => {
  const {
    title,
    release_date: date,
    overview,
    genres,
    backdrop_path: backdrop,
    poster_path: poster,
    production_countries,
    runtime,
    vote_average: rating,
  } = movieInfo;

  const [trailer, setTrailer] = useState([]);
  const [error, setError] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigation = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  const { themeMode } = useSelector(state => state.themeMode);

  const produceCountries = production_countries
    ?.map(country => country.iso_3166_1)
    .join(', ');
  const allGenres = genres.map(genre => genre.name).join(', ');
  const officailTrailer = trailer.filter(trailer => {
    if (trailer.name === 'Official Trailer') {
      return true;
    }
  });

  useEffect(() => {
    (async () => {
      const { response, err } = await mediaApi.getTrailer({
        movieId: movieId,
      });

      if (response) {
        setTrailer(response.data.results);
      }

      if (err) {
        console.log(err);
        setError(err.message);
      }
    })();
  }, [movieId]);

  const onBtnClick = () => {
    navigation(location?.state?.from ?? '/');
  };

  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 20,
      ...modeConfig.style.backgroundColorModal[themeMode],
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: '4px',
      marginRight: '-50%',
      border: 'none',
      borderRadius: 'none',
      transform: 'translate(-50%, -50%)',
      ...modeConfig.style.backgroundColorModal[themeMode],
    },
  };

  console.log(officailTrailer[0]?.key);

  return (
    <section
      style={{
        backgroundImage: `url(${tmdbConfigs.backdropPath(backdrop || poster)})`,
      }}
      className={css.section}
    >
      <div className={css.wrapper}>
        <div className="container">
          <button
            className={css.details__btn}
            type="button"
            onClick={onBtnClick}
          >
            <IconContext.Provider value={{ size: '20px' }}>
              <AiOutlineArrowLeft className={css.details__icon} />
            </IconContext.Provider>
            Go back
          </button>

          <div className={css.details__container}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster}`}
              alt={title}
              width="300px"
              heigth="450px"
            />
            <div className={css.details}>
              <h2 className={css.details__title}>
                {`${title}`}{' '}
                <span style={{ fontWeight: 400, opacity: 0.8 }}>
                  {date ? `(${parseInt(date)})` : null}
                </span>
              </h2>
              <ul className={css.list}>
                {date ? <li className={css.list__item}>{date}</li> : null}
                {produceCountries ? (
                  <li className={css.list__item}>{`(${produceCountries})`}</li>
                ) : null}
                {allGenres ? <li>{allGenres}</li> : null}
                {runtime ? <li>{<NumberToTime number={runtime} />}</li> : null}
              </ul>
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
              <b>Overview</b>
              <p>{overview}</p>
              {/* video */}
              <div className={css.video}>
                <button
                  className={css.video__button}
                  onClick={() => setModalIsOpen(true)}
                >
                  Play Trailer
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  style={customStyles}
                  onRequestClose={() => setModalIsOpen(false)}
                >
                  {/* <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" /> */}
                  <ReactPlayer
                    url={tmdbConfigs.youtubePath(officailTrailer[0]?.key)}
                    width="50%"
                    height="50%"
                  />
                </Modal>
              </div>
              {/* video */}
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

const NumberToTime = props => {
  const hours = Math.floor(props.number / 60);
  const minutes = props.number % 60;

  return (
    <span>
      {hours}h {minutes}m
    </span>
  );
};

export default NumberToTime;
