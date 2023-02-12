import { SectionSearch } from 'components/SectionSearch/SectionSearch';
import { SectionPopularMovie } from 'components/SectionPopularMovie/SectionPopularMovie';
import { SectionJoin } from 'components/SectionJoin/SectionJoin';
import { SectionMoreMovies } from 'components/SectionMoreMovies/SectionMoreMovies';
import { SectionTV } from 'components/SectionTV/SectionTV';

const PageHome = () => {
  return (
    <>
      <SectionSearch />
      <SectionPopularMovie />
      <SectionMoreMovies />
      <SectionJoin />
      <SectionTV />
    </>
  );
};

export default PageHome;
