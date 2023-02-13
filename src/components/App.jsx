import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from "../pages/Home";
import { MoviesSearch } from "../pages/MoviesSearch";
import { MovieDetails } from "../pages/MovieDetails";
import { NoPage } from "../pages/NoPage";

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>          
          <Route path="/movies" element={<MoviesSearch />}></Route>
          <Route path="movies/:id/*" element={<MovieDetails />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Route>
      </Routes>
      
    </div>
  );
};
