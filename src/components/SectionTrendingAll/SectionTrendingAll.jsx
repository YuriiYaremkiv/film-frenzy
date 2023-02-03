import css from './SectionTrendingAll.module.scss';

import { useEffect, useState } from 'react';
import { SliderMovies } from 'components/SliderMovies/SliderMovies';
import { useSelector, useDispatch } from 'react-redux';

import { getTrendingAll } from 'redux/transactions/transactionsOperations';

export const SectionTrendingAll = () => {
  const [time, setTime] = useState('day');
  const dispatch = useDispatch();

  const list = useSelector(state => state.movies.trendingAll.items);
  const isLoading = useSelector(state => state.movies.trendingAll.isLoading);

  useEffect(() => {
    dispatch(getTrendingAll(time));
  }, [time, dispatch]);

  const handleChangeRadioButton = e => {
    setTime(e.target.value);
  };

  let styles = {};

  switch (time) {
    case 'day':
      styles.left = 0;
      styles.width = '90px';
      break;
    case 'week':
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
                className={time === 'day' ? css.activeTitle : css.disableTitle}
              >
                Today
              </h3>
              <input
                type="radio"
                checked={time === 'day'}
                name="time"
                value="day"
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <label>
              <h3
                className={time === 'week' ? css.activeTitle : css.disableTitle}
              >
                This Week
              </h3>
              <input
                type="radio"
                checked={time === 'week'}
                name="time"
                value="week"
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <div className={css.backGroung} style={styles}></div>
          </div>
        </div>
        <SliderMovies movies={list} isLoading={isLoading} />
      </div>
    </section>
  );
};
