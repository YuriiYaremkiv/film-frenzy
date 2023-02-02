import { useState, useEffect } from 'react';

import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';

import { getFetchTrending } from '../../utils/fetchAPI';
import { SectionSearch } from 'components/SectionSearch/SectionSearch';
import { SectionTrendingMovies } from 'components/SectionTrendingMovies/SectionTrendingMovies';
import { SectionLatestTrailers } from 'components/SectionLatestTrailers/SectionLatestTrailers';
import { SectionJoin } from 'components/SectionJoin/SectionJoin';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoadind] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoadind(true);
    (async () => {
      try {
        const movies = await getFetchTrending();
        setMovies(movies);
        setLoadind(false);
      } catch (error) {
        setLoadind(false);
        setError(true);
      }
    })();
  }, []);

  return (
    <>
      <SectionSearch />
      <SectionTrendingMovies movies={movies} />
      <SectionLatestTrailers movies={movies} />
      <SectionTrendingMovies movies={movies} />
      <SectionTrendingMovies movies={movies} />
      <SectionJoin />
      {loading ? <Loader /> : null}
      {error ? <Error /> : null}
    </>
  );
};

export default HomePage;
