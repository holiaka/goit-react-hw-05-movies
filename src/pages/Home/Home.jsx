import { useState, useEffect } from 'react';
import { trendQuery } from '../../axiosAPI/axios';
import { HomeTitle } from './Home.styled';
import { MovieList } from '../../components/MovieList/MovieList';

const Home = () => {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    const createFilmList = async () => {
      let films = await trendQuery();
      setFilmList(films);
    };
    createFilmList();
  }, []);

  return (
    <div>
      <HomeTitle>Trending today</HomeTitle>
      <MovieList filmList={filmList}/>
    </div>
  );
};

export default Home;
