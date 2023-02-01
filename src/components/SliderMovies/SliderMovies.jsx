import React, { Component } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import css from './SliderMovies.module.scss';

import image from '../../images/images.jpg';

export class SliderMovies extends Component {
  render() {
    const settings = {
      className: 'center',
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };

    const { movies } = this.props;

    return (
      <div>
        <Slider {...settings}>
          {movies.map(({ title, name, poster_path: path }) => (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${path}`}
                alt="ias"
                width="250"
              />
              <p>{title || name}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
