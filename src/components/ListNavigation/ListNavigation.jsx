import { useSelector } from 'react-redux';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './ListNavigation.module.scss';

const list = [
  { category: 'Popular', type: tmdbConfigs.movieType.popular },
  { category: 'Top Rated', type: tmdbConfigs.movieType.top_rated },
];

export const ListNavigation = ({
  title,
  type,
  handleChangeType,
  categories,
}) => {
  const { themeMode } = useSelector(state => state.themeMode);

  const categoriesList = categories || list;

  const handleChangeRadioButton = e => {
    handleChangeType(e.target.value);
  };

  return (
    <div className={css.container}>
      {title ? (
        <h2
          style={{
            ...modeConfig.style.textColor[themeMode],
          }}
        >
          {title}
        </h2>
      ) : null}
      {categoriesList.length ? (
        <div className={css.selector}>
          <label>
            <h3
              className={
                type === categoriesList[0].type
                  ? css[`activeTitle__${themeMode}`]
                  : css[`disableTitle__${themeMode}`]
              }
            >
              {categoriesList[0].category}
            </h3>
            <input
              type="radio"
              checked={type === categoriesList[0].type}
              name="list"
              value={categoriesList[0].type}
              onChange={handleChangeRadioButton}
              className={css.select__input}
            />
          </label>
          <label>
            <h3
              className={
                type === categoriesList[1].type
                  ? css[`activeTitle__${themeMode}`]
                  : css[`disableTitle__${themeMode}`]
              }
            >
              {categoriesList[1].category}
            </h3>
            <input
              type="radio"
              checked={type === categoriesList[1].type}
              name="list"
              value={categoriesList[1].type}
              onChange={handleChangeRadioButton}
              className={css.select__input}
            />
          </label>
          {categoriesList[2] ? (
            <label>
              <h3
                className={
                  type === categoriesList[2].type
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                {categoriesList[2].category}
              </h3>
              <input
                type="radio"
                checked={type === categoriesList[2].type}
                name="list"
                value={categoriesList[2].type}
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
          ) : null}
          {categoriesList[3] ? (
            <label>
              <h3
                className={
                  type === categoriesList[3].type
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                {categoriesList[3].category}
              </h3>
              <input
                type="radio"
                checked={type === categoriesList[3].type}
                name="list"
                value={categoriesList[3].type}
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
          ) : null}
          {categoriesList[4] ? (
            <label>
              <h3
                className={
                  type === categoriesList[4].type
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                {categoriesList[4].category}
              </h3>
              <input
                type="radio"
                checked={type === categoriesList[4].type}
                name="list"
                value={categoriesList[4].type}
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
