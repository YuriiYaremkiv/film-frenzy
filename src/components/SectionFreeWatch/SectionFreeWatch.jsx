import { useState } from 'react';
import { SliderMovies } from 'components/SliderMovies/SliderMovies';
import css from './SectionFreeWatch.module.scss';

export const SectionFreeWatch = ({ movies }) => {
  const [type, setType] = useState('movie');

  const handleChangeRadioButton = e => {
    setType(e.target.value);
  };

  let styles = {};

  switch (type) {
    case 'movie':
      styles.left = 0;
      styles.width = '95px';
      break;
    case 'tv':
      styles.left = 0;
      styles.width = '110px';

      styles.transform = 'translateX(95px)';
      break;
    default:
      return styles;
  }

  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.title__container}>
          <h2 className={css.title}>Free To Watch</h2>
          <div className={css.selector}>
            <label>
              <h3
                className={
                  type === 'movie' ? css.activeTitle : css.disableTitle
                }
              >
                Movies
              </h3>
              <input
                type="radio"
                checked={type === 'movie'}
                name="type"
                value="movie"
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <label>
              <h3
                className={type === 'tv' ? css.activeTitle : css.disableTitle}
              >
                TV
              </h3>
              <input
                type="radio"
                checked={type === 'tv'}
                name="type"
                value="tv"
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
