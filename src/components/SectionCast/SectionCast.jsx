import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Media from 'react-media';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import modeConfig from 'configs/mode.config';
import tmdbConfigs from 'api/configs/tmdb.configs';
import css from './SectionCast.module.scss';

const Cast = ({ actors, isLoading = false }) => {
  const { themeMode } = useSelector(state => state.themeMode);
  const location = useLocation();

  const count = actors.length;

  return (
    <section className={css.section}>
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
            tablet: '(min-width: 768px) and (max-width: 1279px)',
            desktop: '(min-width: 1280px)',
          }}
        >
          {matches => (
            <Slider
              className="left-align-slider"
              swipeToSlide={true}
              centerMode={false}
              slidesToShow={
                matches.responsive
                  ? count > 2
                    ? 2
                    : count
                  : matches.mobile
                  ? 3
                  : matches.tablet
                  ? count > 5
                    ? 5
                    : count
                  : count > 9
                  ? 9
                  : count
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
    </section>
  );
};

export default Cast;
