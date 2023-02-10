import { SectionSearch } from 'components/SectionSearch/SectionSearch';
import { SectionPopularMovie } from 'components/SectionPopularMovie/SectionPopularMovie';
import { SectionLatestTrailers } from 'components/SectionLatestTrailers/SectionLatestTrailers';
import { SectionJoin } from 'components/SectionJoin/SectionJoin';
import { SectionMoreMovies } from 'components/SectionMoreMovies/SectionMoreMovies';
import { SectionTV } from 'components/SectionTV/SectionTV';

import { useSelector } from 'react-redux';
import modeConfig from 'configs/mode.config';

const PageHome = () => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <main style={{ ...modeConfig.style.backgroundColorMain[themeMode] }}>
      <SectionSearch />
      <SectionPopularMovie />
      {/* <SectionLatestTrailers /> */}
      <SectionMoreMovies />
      <SectionJoin />
      <SectionTV />
    </main>
  );
};

export default PageHome;
