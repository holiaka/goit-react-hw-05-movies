import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Loader } from './Loader/Loader';
const Home = lazy(() => import('./Home/Home'));
const MoviesSearch = lazy(() => import('./MoviesSearch/MoviesSearch'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const NoPage = lazy(() => import('./NoPage/NoPage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/movies" element={<MoviesSearch />}></Route>
            <Route path="movies/:id/*" element={<MovieDetails />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
