import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/MovieDetails";

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>          
          <Route path="/movies" element={<p>MoviesSearch</p>}></Route>
          <Route path="movies/:id/*" element={<MovieDetails />}></Route>
          <Route path="*" element={<p>No fond</p>}></Route>
        </Route>
      </Routes>
      
    </div>
  );
};
