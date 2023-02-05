import { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Media from 'react-media';

import css from './SliderTrailers.module.scss';

export class SliderTrailers extends Component {
  render() {
    const { movies = [], isLoading = false } = this.props;

    return (
      <Media
        queries={{
          responsive: '(max-width: 479px)',
          mobile: '(max-width: 767px)',
          tablet: '(min-width: 768px) and (max-width: 1199px)',
          desktop: '(min-width: 1200px)',
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
                ? 6
                : 8
            }
            slidesToScroll={
              matches.responsive
                ? 1
                : matches.mobile
                ? 2
                : matches.tablet
                ? 2
                : 4
            }
          >
            {movies.map(
              ({ id, title, name, poster_path: path, release_date: date }) => (
                <Link to={`/movies/${id}`} className={css.link}>
                  <div key={id} className={css.card}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${path}`}
                      alt="ias"
                      className={css.image}
                    />
                    <p className={css.title}>{title || name}</p>
                    <p className={css.date}>{date}</p>
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
