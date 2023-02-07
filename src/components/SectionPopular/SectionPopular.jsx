import css from './SectionPopular.module.scss';

import { useEffect, useState } from 'react';
import { SliderMovies } from 'components/SliderMovies/SliderMovies';
import { useSelector, useDispatch } from 'react-redux';

import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpComing,
} from 'redux/transactions/transactionsOperations';

export const SectionPopular = () => {
  const [type, setType] = useState('streaming');
  const dispatch = useDispatch();

  const list = useSelector(state => state.movies.popular.items);
  const isLoading = useSelector(state => state.movies.popular.isLoading);

  useEffect(() => {
    switch (type) {
      case 'streaming':
        dispatch(getNowPlaying());
        break;
      case 'on-tv':
        dispatch(getPopular());
        break;
      case 'for-rent':
        dispatch(getTopRated());
        break;
      case 'in-theaters':
        dispatch(getUpComing());
        break;
      default:
        dispatch(getNowPlaying());
    }
  }, [type, dispatch]);

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
    case 'in-theaters':
      styles.left = 0;
      styles.width = '130px';
      styles.transform = 'translateX(310px)';
      break;
    default:
      return styles;
  }

  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.title__container}>
          <h2 className={css.title}>What's Popular</h2>
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
                name="time"
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
                name="time"
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
                name="time"
                value="for-rent"
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <label>
              <h3
                className={
                  type === 'in-theaters' ? css.activeTitle : css.disableTitle
                }
              >
                In Theaters
              </h3>
              <input
                type="radio"
                checked={type === 'in-theaters'}
                name="time"
                value="in-theaters"
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
