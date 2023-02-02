import css from './SectionTrendingMovies.module.scss';

import { useState } from 'react';
import { SliderMovies } from 'components/SliderMovies/SliderMovies';

export const SectionTrendingMovies = ({ movies }) => {
  const [time, setTime] = useState('today');

  const handleChangeRadioButton = e => {
    setTime(e.target.value);
  };

  return (
    <section>
      <div className="container">
        <h2 className={css.title}>Trending</h2>
        <div className={css.selector}>
          <label
            className={
              time === 'today' ? css.select__active : css.select__disable
            }
          >
            <h3
              className={
                time === 'today'
                  ? css.select__activeTitle
                  : css.select__disableTitle
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
          <label
            className={
              time === 'this-week' ? css.select__active : css.select__disable
            }
          >
            <h3
              className={
                time === 'this-week'
                  ? css.select__activeTitle
                  : css.select__disableTitle
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
          <div className={css.backGroung}></div>
        </div>
        <SliderMovies movies={movies} />
      </div>
    </section>
  );
};
