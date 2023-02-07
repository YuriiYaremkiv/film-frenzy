import { useState, useEffect } from 'react';

import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';

import { useDispatch } from 'react-redux';

import { SectionSearch } from 'components/SectionSearch/SectionSearch';
import { SectionTrendingAll } from 'components/SectionTrendingAll/SectionTrendingAll';
import { SectionLatestTrailers } from 'components/SectionLatestTrailers/SectionLatestTrailers';
import { SectionJoin } from 'components/SectionJoin/SectionJoin';
import { SectionFreeWatch } from 'components/SectionFreeWatch/SectionFreeWatch';
import { SectionPopular } from 'components/SectionPopular/SectionPopular';
import { SectionTV } from 'components/SectionTV/SectionTV';

import mediaApi from 'redux/media/mediaOperations';
import tmdbConfigs from 'api/configs/tmdb.configs';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoadind] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <SectionSearch />
      <SectionTrendingAll movies={movies} />
      <SectionLatestTrailers movies={movies} />
      <SectionPopular movies={movies} />
      <SectionJoin />
      <SectionTV movies={movies} />
      {loading ? <Loader /> : null}
      {error ? <Error /> : null}
    </>
  );
};

export default HomePage;
