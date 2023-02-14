import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { findFilmByKeyword } from 'axiosAPI/axios';

export const MoviesSearchList = ({ filmQuery }) => {
    const location = useLocation();
  const [searchFilmList, setSearchFilmList] = useState([]);

  useEffect(() => {
    const fetchFilmList = async () => {        
        const films = await findFilmByKeyword(filmQuery);
        if (films.length > 0) {        
        setSearchFilmList(films);
      } else {
        alert('Nothing was found for your request!!!');
      }
    };
    fetchFilmList();
  }, [filmQuery]);

  return (
      <ul>        
      {searchFilmList.map(({ id, title }) => {
        return (
          <li key={id}>
            {' '}
            <Link to={`${id}`} state={location}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
