import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SliderTV } from './SliderTV/SliderTV';
import tvAPI from 'api/modules/tv.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './SectionTV.module.scss';
import { Error } from 'components/Error/Error';

export const SectionTV = () => {
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [type, setType] = useState(tmdbConfigs.tvType.popular);
  const { themeMode } = useSelector(state => state.themeMode);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const timer = setTimeout(async () => {
        const { response, err } = await tvAPI.getTV({
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
      }, 600);

      return () => {
        clearTimeout(timer);
      };
    })();
  }, [type]);

  const handleChangeRadioButton = e => {
    setType(e.target.value);
  };

  let stylesHorizontal = {};
  let stylesVertical = {};

  switch (type) {
    case 'popular':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '105px';
      stylesVertical.transform = 'translateY(0px)';

      break;
    case 'top_rated':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '115px';
      stylesHorizontal.transform = 'translateX(105px)';
      stylesVertical.transform = 'translateY(28px)';
      break;
    case 'on_the_air':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '125px';
      stylesHorizontal.transform = 'translateX(220px)';
      stylesVertical.transform = 'translateY(60px)';
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
              style={stylesVertical}
            ></div>
          </div>
        </div>
        {!error ? (
          <SliderTV movies={series} isLoading={isLoading} />
        ) : (
          <Error title="Sorry, we're experiencing a temporary network issue. Please try again later." />
        )}
      </div>
    </section>
  );
};
