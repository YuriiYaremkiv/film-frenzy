import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./pages/Layout/Layout'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

const PageMovies = lazy(() => import('./pages/PageMovies'));
const PageTV = lazy(() => import('./pages/PageTV'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<PageMovies />} />
        <Route path="tv" element={<PageTV />} />
        <Route path="search" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
