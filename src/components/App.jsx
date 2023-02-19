import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Loader } from './Loader/Loader';
const Home = lazy(() => import('../pages/Home/Home'));
const MoviesSearch = lazy(() => import('../pages/MoviesSearch/MoviesSearch'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const NoPage = lazy(() => import('./NoPage/NoPage'));

<Toaster position="top-center" reverseOrder={false} />;

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/movies" element={<MoviesSearch />}></Route>
            <Route path="movies/:id/*" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<NoPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </div>
  );
};
