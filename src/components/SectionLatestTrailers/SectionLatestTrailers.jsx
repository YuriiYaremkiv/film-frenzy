import css from './SectionLatestTrailers.module.scss';

import { useState } from 'react';

import { SliderTrailers } from './SliderTrailers/SliderTrailers';

export const SectionLatestTrailers = ({ movies }) => {
  const [type, setType] = useState('streaming');

  const handleChangeRadioButton = e => {
    setType(e.target.value);
  };

  let styles = {};

  switch (type) {
    case 'streaming':
      styles.left = 0;
      styles.width = '120px';
      break;
    case 'on-tv':
      styles.left = 0;
      styles.width = '85px';
      styles.transform = 'translateX(120px)';
      break;
    case 'for-rent':
      styles.left = 0;
      styles.width = '105px';
      styles.transform = 'translateX(205px)';
      break;
    case 'in-theatres':
      styles.left = 0;
      styles.width = '130px';
      styles.transform = 'translateX(310px)';
      break;
    default:
      return styles;
  }

  return (
    <section className={css.section}>
      <div className="container SectionLatestTrailers">
        <div className={css.title__container}>
          <h2 className={css.title}>Latest Trailers</h2>
          <div className={css.selector}>
            <label>
              <h3
                className={
                  type === 'streaming' ? css.activeTitle : css.disableTitle
                }
              >
                Streaming
              </h3>
              <input
                type="radio"
                checked={type === 'streaming'}
                name="type"
                value="streaming"
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <label>
              <h3
                className={
                  type === 'on-tv' ? css.activeTitle : css.disableTitle
                }
              >
                On TV
              </h3>
              <input
                type="radio"
                checked={type === 'on-tv'}
                name="type"
                value="on-tv"
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <label>
              <h3
                className={
                  type === 'for-rent' ? css.activeTitle : css.disableTitle
                }
              >
                For Rent
              </h3>
              <input
                type="radio"
                checked={type === 'for-rent'}
                name="type"
                value="for-rent"
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <label>
              <h3
                className={
                  type === 'in-theatres' ? css.activeTitle : css.disableTitle
                }
              >
                In Theaters
              </h3>
              <input
                type="radio"
                checked={type === 'in-theatres'}
                name="type"
                value="in-theatres"
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <div className={css.backGroung} style={styles}></div>
          </div>
        </div>
        <SliderTrailers movies={movies} className={css.slider} />
      </div>
    </section>
  );
};
