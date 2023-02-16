import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { findFilmByKeyword } from 'axiosAPI/axios';
import { Link } from 'components/MovieDetails/MovieDetails.styled';

export const MoviesSearchList = ({ filmQuery }) => {
    const location = useLocation();
  const [searchFilmList, setSearchFilmList] = useState([]);

  useEffect(() => {
    const fetchFilmList = async () => {        
        const films = await findFilmByKeyword(filmQuery);
        if (films.length > 0) {        
        setSearchFilmList(films);
      } else {
        toast.error('Nothing was found for your request!!!');
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
              {title}&#9759;
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesSearchList.propTypes = {
  filmQuery: PropTypes.string.isRequired,
}
