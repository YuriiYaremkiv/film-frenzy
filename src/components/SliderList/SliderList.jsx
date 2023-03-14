import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GlobalLoader } from 'components/GlobalLoader/GlobalLoader';
import Stack from '@mui/material/Stack';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Media from 'react-media';
import StarIcon from '@mui/icons-material/Star';
import css from './SliderList.module.scss';

export const SliderList = ({ movies = [], isLoading = false }) => {
  const { themeMode } = useSelector(state => state.themeMode);

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
                ? 3
                : 5
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
            {movies.map(
              ({
                id,
                title,
                name,
                poster_path: path,
                release_date: date,
                first_air_date = '',
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
                        src={`https://image.tmdb.org/t/p/w500/${path}`}
                        alt="ias"
                        className={css.image}
                      />
                      <div className={css.description}></div>
                      <Stack spacing={1} className={css.rating}>
                        <p className={css[`rating__text__${themeMode}`]}>
                          {rating ? rating.toFixed(1) : null}
                        </p>
                        <StarIcon
                          fontSize="medium"
                          className={css[`rating__icon__${themeMode}`]}
                        />
                      </Stack>
                      <div className={css.card__tumb}>
                        <p className={css[`date__${themeMode}`]}>
                          {date ? date.slice(0, 4) : first_air_date.slice(0, 4)}
                        </p>
                        <p className={css[`title__${themeMode}`]}>
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
