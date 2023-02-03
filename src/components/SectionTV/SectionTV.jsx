import css from './SectionTV.module.scss';

import { useEffect, useState } from 'react';
import { SliderMovies } from 'components/SliderMovies/SliderMovies';
import { useSelector, useDispatch } from 'react-redux';

import {
  getTVToday,
  getTVPopular,
  getTVTopRated,
} from 'redux/transactions/transactionsOperations';

export const SectionTV = () => {
  const [type, setType] = useState('rated');
  const dispatch = useDispatch();

  const list = useSelector(state => state.movies.tv.items);
  const isLoading = useSelector(state => state.movies.tv.isLoading);

  useEffect(() => {
    switch (type) {
      case 'today':
        dispatch(getTVToday());
        break;
      case 'popular':
        dispatch(getTVPopular());
        break;
      case 'rated':
        dispatch(getTVTopRated());
        break;
      default:
        dispatch(getTVToday());
    }
  }, [type, dispatch]);

  const handleChangeRadioButton = e => {
    setType(e.target.value);
  };

  let styles = {};

  switch (type) {
    case 'rated':
      styles.left = 0;
      styles.width = '120px';
      styles.transform = 'translateX(0px)';
      break;
    case 'popular':
      styles.left = 0;
      styles.width = '95px';
      styles.transform = 'translateX(120px)';
      break;
    case 'today':
      styles.left = 0;
      styles.width = '95px';
      styles.transform = 'translateX(220px)';
      break;
    default:
      return styles;
  }

  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.title__container}>
          <h2 className={css.title}>TV</h2>
          <div className={css.selector}>
            <label>
              <h3
                className={
                  type === 'rated' ? css.activeTitle : css.disableTitle
                }
              >
                Top Rated
              </h3>
              <input
                type="radio"
                checked={type === 'rated'}
                name="time"
                value="rated"
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <label>
              <h3
                className={
                  type === 'popular' ? css.activeTitle : css.disableTitle
                }
              >
                Popular
              </h3>
              <input
                type="radio"
                checked={type === 'popular'}
                name="time"
                value="popular"
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <label>
              <h3
                className={
                  type === 'today' ? css.activeTitle : css.disableTitle
                }
              >
                Today
              </h3>
              <input
                type="radio"
                checked={type === 'today'}
                name="time"
                value="today"
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
