import { SectionSearch } from 'components/SectionSearch/SectionSearch';
import { SectionTrendinMovie } from 'components/SectionTrendinMovie/SectionTrendinMovie';
import { SectionLatestTrailers } from 'components/SectionLatestTrailers/SectionLatestTrailers';
import { SectionJoin } from 'components/SectionJoin/SectionJoin';
import { SectionPopular } from 'components/SectionPopular/SectionPopular';
import { SectionTV } from 'components/SectionTV/SectionTV';

const HomePage = () => {
  return (
    <>
      <SectionSearch />
      <SectionTrendinMovie />
      <SectionLatestTrailers />
      <SectionPopular />
      <SectionJoin />
      <SectionTV />
    </>
  );
};

export default HomePage;
