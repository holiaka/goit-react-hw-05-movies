import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { trendQuery } from "axiosAPI/axios";
import { SharedLayout } from "./SharedLayout/SharedLayout";

export const App = () => {
  useEffect(() => {
    trendQuery()
  },[])



  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<p>My home page</p>}></Route>          
          <Route path="/movies" element={<p>Movies list</p>}></Route>
          <Route path="*" element={<p>No fond</p>}></Route>
        </Route>
      </Routes>
      
    </div>
  );
};
