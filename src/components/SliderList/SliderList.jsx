import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GlobalLoader } from 'components/GlobalLoader/GlobalLoader';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Media from 'react-media';
import StarIcon from '@mui/icons-material/Star';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './SliderList.module.scss';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        transform: 'translate(-45px, -20px) scale(1.8)',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        transform: 'translate(45px, -20px) scale(1.8)',
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

export const SliderList = ({ movies = [], isLoading = false }) => {
  const { themeMode } = useSelector(state => state.themeMode);

  const count = movies.length || 1;

  return (
    <div className={css.container}>
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
            swipeToSlide={true}
            slidesToShow={
              matches.responsive
                ? 1
                : matches.mobile
                ? count > 2
                  ? 2
                  : count
                : matches.tablet
                ? count > 3
                  ? 3
                  : count
                : count > 5
                ? 5
                : count
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
            nextArrow={<SampleNextArrow />}
            prevArrow={<SamplePrevArrow />}
          >
            {movies.map(
              ({
                id,
                title,
                name,
                poster_path: path,
                release_date: date,
                first_air_date: dateTV,
                vote_average: rating,
                media_type: type,
              }) => (
                <Link
                  key={id}
                  to={`/${type === 'tv' ? 'tv' : 'movie'}/${id}`}
                  className={css.link}
                >
                  <div className={css.card}>
                    <div className={css.card__container}>
                      <img
                        src={tmdbConfigs.posterImage(path)}
                        alt={title || name}
                        className={css.image}
                      />
                      <div className={css.description}></div>
                      <div spacing={1} className={css.rating}>
                        <p
                          style={{
                            ...modeConfig.style.textColorAccent[themeMode],
                          }}
                          className={css.rating__text}
                        >
                          {rating.toFixed(1)}
                        </p>
                        <StarIcon
                          fontSize="medium"
                          style={{
                            ...modeConfig.style.textColorAccent[themeMode],
                          }}
                          className={css.rating__icon}
                        />
                      </div>
                      <div className={css.card__tumb}>
                        <p
                          style={{
                            ...modeConfig.style.textColorAccent[themeMode],
                          }}
                          className={css.date}
                        >
                          {(date || dateTV)?.slice(0, 4)}
                        </p>
                        <p
                          style={{
                            ...modeConfig.style.textColorAccent[themeMode],
                          }}
                          className={css.title}
                        >
                          {title || name}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )}
          </Slider>
        )}
      </Media>
      {isLoading && <GlobalLoader />}
    </div>
  );
};
