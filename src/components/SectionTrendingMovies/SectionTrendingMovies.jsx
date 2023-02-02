import css from './SectionTrendingMovies.module.scss';

import { useState } from 'react';
import { SliderMovies } from 'components/SliderMovies/SliderMovies';

export const SectionTrendingMovies = ({ movies }) => {
  const [time, setTime] = useState('today');

  const handleChangeRadioButton = e => {
    setTime(e.target.value);
  };

  let styles = {};

  switch (time) {
    case 'today':
      styles.left = 0;
      styles.width = '90px';
      break;
    case 'this-week':
      styles.left = 0;
      styles.width = '125px';

      styles.transform = 'translateX(85px)';
      break;
    default:
      return styles;
  }

  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.title__container}>
          <h2 className={css.title}>Trending</h2>
          <div className={css.selector}>
            <label>
              <h3
                className={
                  time === 'today' ? css.activeTitle : css.disableTitle
                }
              >
                Today
              </h3>
              <input
                type="radio"
                checked={time === 'today'}
                name="time"
                value="today"
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <label>
              <h3
                className={
                  time === 'this-week' ? css.activeTitle : css.disableTitle
                }
              >
                This Week
              </h3>
              <input
                type="radio"
                checked={time === 'this-week'}
                name="time"
                value="this-week"
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <div className={css.backGroung} style={styles}></div>
          </div>
        </div>
        <SliderMovies movies={movies} />
      </div>
    </section>
  );
};
