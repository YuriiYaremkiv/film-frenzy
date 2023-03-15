import { useSelector } from 'react-redux';
import modeConfig from 'configs/mode.config';
import css from './SelectorList.module.scss';

export const SelectorList = ({
  type,
  list,
  onChangeValue,
  stylesHorizontal,
  stylesVertical,
  stylesMaxWidth,
}) => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <div
      style={{ ...modeConfig.bgBorderAccent[themeMode], ...stylesMaxWidth }}
      className={css.selector}
    >
      {list?.map(({ title, value }, index) => {
        return (
          <label key={index}>
            <h3
              className={
                type === value
                  ? css[`active__${themeMode}`]
                  : css[`disable__${themeMode}`]
              }
            >
              {title}
            </h3>
            <input
              type="radio"
              checked={type === value}
              name="radio"
              value={value}
              onChange={onChangeValue}
              className={css.input}
            />
          </label>
        );
      })}

      <div
        style={{ ...modeConfig.bgSecondary[themeMode], ...stylesHorizontal }}
        className={css.bgHorizontal}
      ></div>
      <div
        style={{ ...modeConfig.bgSecondary[themeMode], ...stylesVertical }}
        className={css.bgVertical}
      ></div>
    </div>
  );
};
