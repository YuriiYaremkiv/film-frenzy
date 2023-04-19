import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Media from 'react-media';
import css from './SliderTrailers.module.scss';

export class SliderTrailers extends Component {
  render() {
    const { movies } = this.props;

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
                ? 4
                : 4
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
              ({ id, title, name, poster_path: path, release_date: date }) => (
                <div key={id} className={css.card}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${path}`}
                    alt="ias"
                    className={css.image}
                  />
                  <p className={css.title}>{title || name}</p>
                  <p className={css.date}>{date}</p>
                </div>
              )
            )}
          </Slider>
        )}
      </Media>
    );
  }
}
