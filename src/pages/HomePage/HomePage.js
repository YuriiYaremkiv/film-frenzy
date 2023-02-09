import { SectionSearch } from 'components/SectionSearch/SectionSearch';
import { SectionPopularMovie } from 'components/SectionPopularMovie/SectionPopularMovie';
import { SectionLatestTrailers } from 'components/SectionLatestTrailers/SectionLatestTrailers';
import { SectionJoin } from 'components/SectionJoin/SectionJoin';
import { SectionMoreMovies } from 'components/SectionMoreMovies/SectionMoreMovies';
import { SectionTV } from 'components/SectionTV/SectionTV';

const HomePage = () => {
  return (
    <>
      <SectionSearch />
      <SectionPopularMovie />
      <SectionLatestTrailers />
      <SectionMoreMovies />
      <SectionJoin />
      <SectionTV />
    </>
  );
};

export default HomePage;
