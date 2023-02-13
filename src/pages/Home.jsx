import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { trendQuery } from '../axiosAPI/axios';

export const Home = () => {
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
      <p>Trending today</p>
      <ul>
        {filmList.map(({ id, original_title, name }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={location}>
              {!original_title ? name : original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
