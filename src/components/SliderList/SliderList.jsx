import { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Media from 'react-media';
import StarIcon from '@mui/icons-material/Star';

import css from './SliderList.module.scss';

export class SliderList extends Component {
  render() {
    const { movies = [], isLoading = false } = this.props;

    return (
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
                vote_average: rating,
              }) => (
                <Link key={id} to={`/movies/${id}`} className={css.link}>
                  <div className={css.card}>
                    <div className={css.card__container}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${path}`}
                        alt="ias"
                        className={css.image}
                      />
                      <div className={css.description}></div>
                      <Stack spacing={1} className={css.rating}>
                        <Rating
                          name="text-feedback"
                          value={rating / 2}
                          readOnly
                          precision={0.5}
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.55 }}
                              fontSize="inherit"
                            />
                          }
                        />
                      </Stack>
                      <div className={css.card__tumb}>
                        <p className={css.date}>{date.slice(0, 4)}</p>
                        <p className={css.title}>{title || name}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )}
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
    );
  }
}
