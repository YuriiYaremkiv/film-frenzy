import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SliderList } from 'components/SliderList/SliderList';

import tvApi from 'api/modules/tv.api';
import tmdbConfigs from 'api/configs/tmdb.configs';

import { SliderTV } from './SliderTV/SliderTV';
import css from './SectionTV.module.scss';

import modeConfig from 'configs/mode.config';

export const SectionTV = () => {
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [type, setType] = useState(tmdbConfigs.tvType.popular);

  const { themeMode } = useSelector(state => state.themeMode);

  useEffect(() => {
    (async () => {
      const { response, err } = await tvApi.getList({
        mediaType: tmdbConfigs.mediaType.tv,
        tvType: type,
        page: 1,
      });

      if (response) {
        setSeries(response.data.results);
        setIsLoading(false);
      }

      if (err) {
        console.log(err);
        setError(err.message);
        setIsLoading(false);
      }
    })();
  }, [type]);

  const handleChangeRadioButton = e => {
    setType(e.target.value);
  };

  let stylesHorizontal = {};

  switch (type) {
    case 'popular':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '105px';
      stylesHorizontal.transform = 'translateX(0px)';
      break;
    case 'top_rated':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '115px';
      stylesHorizontal.transform = 'translateX(105px)';
      break;
    case 'on_the_air':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '125px';
      stylesHorizontal.transform = 'translateX(220px)';
      break;
    default:
      return stylesHorizontal;
  }

  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.title__container}>
          <h2
            className={css.title}
            style={{ ...modeConfig.style.textColor[themeMode] }}
          >
            Television
          </h2>
          {/* selector */}
          <div className={css[`selector__${themeMode}`]}>
            <label>
              <h3
                className={
                  type === tmdbConfigs.tvType.popular
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                Popular
              </h3>
              <input
                type="radio"
                checked={type === tmdbConfigs.tvType.popular}
                name="time"
                value={tmdbConfigs.tvType.popular}
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <label>
              <h3
                className={
                  type === tmdbConfigs.tvType.top_rated
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                Top Rated
              </h3>
              <input
                type="radio"
                checked={type === tmdbConfigs.tvType.top_rated}
                name="time"
                value={tmdbConfigs.tvType.top_rated}
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <label>
              <h3
                className={
                  type === tmdbConfigs.tvType.on_the_air
                    ? css[`activeTitle__${themeMode}`]
                    : css[`disableTitle__${themeMode}`]
                }
              >
                On The Air
              </h3>
              <input
                type="radio"
                checked={type === tmdbConfigs.tvType.on_the_air}
                name="time"
                value={tmdbConfigs.tvType.on_the_air}
                onChange={handleChangeRadioButton}
                className={css.select__input}
              />
            </label>
            <div
              className={css[`backGroungHorizontal__${themeMode}`]}
              style={stylesHorizontal}
            ></div>
            <div
              className={css[`backGroungVertical__${themeMode}`]}
              style={stylesHorizontal}
            ></div>
          </div>
          {/* selector */}
        </div>
        <SliderTV movies={series} isLoading={isLoading} />
      </div>
    </section>
  );
};
