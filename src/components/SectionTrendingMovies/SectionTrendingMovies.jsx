import css from './SectionTrendingMovies.module.scss';

import React from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SliderMovies } from 'components/SliderMovies/SliderMovies';

export const SectionTrendingMovies = ({ movies }) => {
  return (
    <section>
      <div className="container">
        <h2 className={css.title}>Trending</h2>
        <SliderMovies movies={movies} />
      </div>
    </section>
  );
};
