import css from './SectionTrendingMovies.module.scss';

import React from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const SectionTrendingMovies = ({ movies }) => {
  return (
    <section>
      <div className="container">
        <h2 className={css.title}>Trending</h2>
        <MoviesList movies={movies} />
        <div>SectionTrendingMovies</div>
        <div>SectionTrendingMovies</div>
        <div>SectionTrendingMovies</div>
      </div>
    </section>
  );
};
