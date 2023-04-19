import { useState } from 'react';
import { useSelector } from 'react-redux';
import imageNotFound from '../../image/not-found.jpg';
import Button from '@mui/material/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Rating from '@mui/material/Rating';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './SectionMovieDetails.module.scss';

export const NumberToTime = props => {
  const hours = Math.floor(props.number / 60);
  const minutes = props.number % 60;

  return (
    <span>
      {hours}h {minutes}m
    </span>
  );
};

export const SectionMovieDetails = ({ movieInfo, trailer }) => {
  const {
    title,
    original_name,
    release_date: date,
    first_air_date: dateTv,
    overview,
    genres,
    backdrop_path: backdrop,
    poster_path: poster,
    production_countries,
    runtime,
    vote_average: rating,
  } = movieInfo;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { themeMode } = useSelector(state => state.themeMode);

  const produceCountries = production_countries
    ?.map(country => country.iso_3166_1)
    .join(', ');
  const allGenres = genres?.map(genre => genre.name).join(', ');

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

  return (
    <section
      style={{
        backgroundImage: `url(${tmdbConfigs.backdropPath(backdrop || poster)})`,
      }}
      className={css.section}
    >
      <div className={css.wrapper}>
        <div className="container">
          <div className={css.block}>
            <div className={css.image__container}>
              <img
                src={tmdbConfigs.posterImage(poster)}
                alt={title}
                className={css.image}
                onError={e => {
                  e.target.onerror = null;
                  if (e.target.src !== imageNotFound) {
                    e.target.src = null;
                    e.target.src = imageNotFound;
                  }
                }}
              />
            </div>

            <div className={css.details__container}>
              <h1 className={css.title}>
                {title || original_name}{' '}
                <span className={css.title__date}>
                  {`(${parseInt(date || dateTv)})`}
                </span>
              </h1>

              <ul className={css.list}>
                <li className={css.list__item}>{date || dateTv}</li>
                <li className={css.list__item}>{`(${produceCountries})`}</li>
                <li>{allGenres}</li>
                <li>{runtime && <NumberToTime number={runtime} />}</li>
              </ul>

              <div className={css.rating}>
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
                  style={{ ...modeConfig.style.textColorAccent[themeMode] }}
                >
                  {rating?.toFixed(2)}
                </p>
              </div>

              <h2 className={css.overview}>Overview</h2>
              <p className={css.overview__text}>{overview}</p>

              {trailer[0] && (
                <>
                  <Button
                    variant="contained"
                    startIcon={<PlayCircleIcon />}
                    sx={{
                      ...modeConfig.style.backgroundColorAccent[themeMode],
                    }}
                    onClick={() => setModalIsOpen(true)}
                  >
                    Play Trailer
                  </Button>
                  <Modal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    onRequestClose={() => setModalIsOpen(false)}
                  >
                    <ReactPlayer
                      url={tmdbConfigs.youtubePath(trailer[0]?.key)}
                    />
                  </Modal>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
