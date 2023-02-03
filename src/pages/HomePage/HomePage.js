import { useState, useEffect } from 'react';

import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';

import { SectionSearch } from 'components/SectionSearch/SectionSearch';
import { SectionTrendingAll } from 'components/SectionTrendingAll/SectionTrendingAll';
import { SectionLatestTrailers } from 'components/SectionLatestTrailers/SectionLatestTrailers';
import { SectionJoin } from 'components/SectionJoin/SectionJoin';
import { SectionFreeWatch } from 'components/SectionFreeWatch/SectionFreeWatch';
import { SectionPopular } from 'components/SectionPopular/SectionPopular';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoadind] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <SectionSearch />
      <SectionTrendingAll movies={movies} />
      <SectionLatestTrailers movies={movies} />
      <SectionPopular movies={movies} />
      <SectionJoin />
      <SectionFreeWatch movies={movies} />
      {loading ? <Loader /> : null}
      {error ? <Error /> : null}
    </>
  );
};

export default HomePage;
