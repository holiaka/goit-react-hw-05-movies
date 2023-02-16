import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { trendQuery } from '../../axiosAPI/axios';
import { HomeLi, HomeTitle } from './Home.styled';

const Home = () => {
  const [filmList, setFilmList] = useState([]);
  const location = useLocation();

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
      <ul>
        {filmList.map(({ id, original_title, name }) => (
          <li key={id}>
            <HomeLi to={`movies/${id}`} state={location}>
              {!original_title ? name : original_title}&#9759;
            </HomeLi>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
