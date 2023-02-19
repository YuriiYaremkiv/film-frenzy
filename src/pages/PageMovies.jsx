import { useSelector } from 'react-redux';
import { SectionMovieSlider } from 'components/SectionMovieSlider/SectionMovieSlider';
import { SectionMoviesList } from 'components/SectionMoviesList/SectionMoviesList';
import modeConfig from 'configs/mode.config';

const PageMovies = () => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <main style={{ ...modeConfig.style.backgroundColorMain[themeMode] }}>
      <SectionMovieSlider />
      <SectionMoviesList />
    </main>
  );
};

export default PageMovies;
