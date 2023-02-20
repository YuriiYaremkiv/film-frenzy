import { useSelector } from 'react-redux';
import modeConfig from 'configs/mode.config';
import css from './ListNavigation.module.scss';

export const ListNavigation = ({
  title,
  type,
  handleChangeType,
  categories = [],
}) => {
  const { themeMode } = useSelector(state => state.themeMode);

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
      {categories.length ? (
        <div className={css.selector}>
          <label>
            <h3
              className={
                type === categories[0].type
                  ? css[`activeTitle__${themeMode}`]
                  : css[`disableTitle__${themeMode}`]
              }
            >
              {categories[0].category}
            </h3>
            <input
              type="radio"
              checked={type === categories[0].type}
              name="list"
              value={categories[0].type}
              onChange={handleChangeRadioButton}
              className={css.select__input}
            />
          </label>
          <label>
            <h3
              className={
                type === categories[1].type
                  ? css[`activeTitle__${themeMode}`]
                  : css[`disableTitle__${themeMode}`]
              }
            >
              {categories[1].category}
            </h3>
            <input
              type="radio"
              checked={type === categories[1].type}
              name="list"
              value={categories[1].type}
              onChange={handleChangeRadioButton}
              className={css.select__input}
            />
          </label>
          {categories[2] ? (
            <label>
              <h3
                className={
                  type === categories[2].type
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                {categories[2].category}
              </h3>
              <input
                type="radio"
                checked={type === categories[2].type}
                name="list"
                value={categories[2].type}
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
          ) : null}
          {categories[3] ? (
            <label>
              <h3
                className={
                  type === categories[3].type
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                {categories[3].category}
              </h3>
              <input
                type="radio"
                checked={type === categories[3].type}
                name="list"
                value={categories[3].type}
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
          ) : null}
          {categories[4] ? (
            <label>
              <h3
                className={
                  type === categories[4].type
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                {categories[4].category}
              </h3>
              <input
                type="radio"
                checked={type === categories[4].type}
                name="list"
                value={categories[4].type}
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
