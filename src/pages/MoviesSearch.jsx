import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { findFilmByKeyword } from 'axiosAPI/axios';
import { MoviesSearchList } from './MoviesSearchList';

export const MoviesSearch = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchString = new URLSearchParams(location.search).get('query');
    const [filmQuery, setFilmQuery] = useState('');
    const [searchFilmList, setSearchFilmList] = useState([])

  // useEffect(() => {
  //     setFilmQuery(setQuery);
  // }, []);

  async function setQuery(evt) {
    evt.preventDefault();
    const keywordQuery = evt.target.elements.filmInput.value.trim().toLowerCase();
    if (keywordQuery === '') {
      alert('The query input field is empty');
      return;
    } else if (keywordQuery === filmQuery) {
      alert('You have not changed your request');
      return;
    }
    setFilmQuery(keywordQuery);
    const films = await findFilmByKeyword(keywordQuery);
      console.log(films);
    if (films.length>0) {
        navigate(`?query=${keywordQuery}`);
        setSearchFilmList(films);
    } else {
        alert('Nothing was found for your request!!!');
    }
    evt.target.elements.filmInput.value = '';
  }

  return (
    <>
      <div>
        <form onSubmit={setQuery}>
          <input type="text" name="filmInput" />
          <button type="submit">Search</button>
        </form>
      </div>
          {searchString && <MoviesSearchList searchFilmList={searchFilmList} />}
    </>
  );
};
