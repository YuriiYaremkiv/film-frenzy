import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SliderList } from 'components/SliderList/SliderList';
import mediaApi from 'api/modules/media.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './SectionMoreMovies.module.scss';
import { Error } from 'components/Error/Error';
import { SelectorList } from 'components/SelectorList/SelectorList';

const list = [
  { title: 'Now Playing', value: tmdbConfigs.movieType.now_playing },
  { title: 'Top Rated', value: tmdbConfigs.movieType.top_rated },
  { title: 'Upcoming', value: tmdbConfigs.movieType.upcoming },
];

export const SectionMoreMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [type, setType] = useState(tmdbConfigs.movieType.now_playing);
  const { themeMode } = useSelector(state => state.themeMode);

  const handleChangeRadioButton = e => {
    setType(e.target.value);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const timer = setTimeout(async () => {
        const { response, err } = await mediaApi.getMovies({ movieType: type });

        if (response) {
          setMovies(response.data.results);
          setIsLoading(false);
        }

        if (err) {
          setError(err.message);
          setIsLoading(false);
        }
      }, 600);

      return () => {
        clearTimeout(timer);
      };
    })();
  }, [type]);

  // Styles for select category - start:
  let stylesHorizontal = {};
  let stylesVertical = {};
  const stylesMaxWidth = {
    maxWidth: '375px',
  };

  switch (type) {
    case 'now_playing':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '135px';
      stylesVertical.transform = 'translateY(0px)';
      break;
    case 'top_rated':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '110px';
      stylesHorizontal.transform = 'translateX(140px)';
      stylesVertical.transform = 'translateY(28px)';
      break;
    case 'upcoming':
      stylesHorizontal.left = 0;
      stylesHorizontal.width = '120px';
      stylesHorizontal.transform = 'translateX(255px)';
      stylesVertical.transform = 'translateY(60px)';
      break;
    default:
      return stylesHorizontal;
  }
  // Styles for select category - end.

  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.title__container}>
          <h2
            className={css.title}
            style={{ ...modeConfig.textColor[themeMode] }}
          >
            More Movies
          </h2>
          <SelectorList
            type={type}
            list={list}
            onChangeValue={handleChangeRadioButton}
            stylesHorizontal={stylesHorizontal}
            stylesVertical={stylesVertical}
            stylesMaxWidth={stylesMaxWidth}
          />
        </div>

        {!error ? (
          <SliderList movies={movies} isLoading={isLoading} />
        ) : (
          <Error title="Sorry, we're experiencing a temporary network issue. Please try again later." />
        )}
      </div>
    </section>
  );
};
