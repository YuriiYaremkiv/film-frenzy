import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./pages/Layout'));
const PageHome = lazy(() => import('./pages/PageHome'));
const PageMovieDetails = lazy(() => import('./pages/PageMovieDetails'));
const PageTVDetails = lazy(() => import('./pages/PageTVDetails'));
const Cast = lazy(() => import('./components/SectionCast/SectionCast'));
const Reviews = lazy(() =>
  import('./components/SectopmReviews/SectionReviews')
);
const PageMovies = lazy(() => import('./pages/PageMovies'));
const PageTV = lazy(() => import('./pages/PageTV'));
const PagePerson = lazy(() => import('./pages/PagePerson'));
const PageSearch = lazy(() => import('./pages/PageSearch'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageHome />} />
        <Route path="movies" element={<PageMovies />} />
        <Route path="tv" element={<PageTV />} />
        <Route path="search" element={<PageSearch />} />
        <Route path="movie/:movieId" element={<PageMovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="tv/:tvId" element={<PageTVDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="person/:personId" element={<PagePerson />} />
        <Route path="*" element={<PageHome />} />
      </Route>
    </Routes>
  );
};
