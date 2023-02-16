import { Btn } from 'components/MovieDetails/MovieDetails.styled';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MoviesSearchList } from '../../pages/MoviesSearchList';
import { Input } from './MoviesSearch.styled';

const MoviesSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchString = new URLSearchParams(location.search).get('query');
  const [filmQuery, setFilmQuery] = useState('');

  function setQuery(evt) {
    evt.preventDefault();
    const keywordQuery = evt.target.elements.filmInput.value
      .trim()
      .toLowerCase();
    if (keywordQuery === '') {
      alert('The query input field is empty');
      return;
    } else if (keywordQuery === filmQuery) {
      alert('You have not changed your request');
      return;
    }
    setFilmQuery(keywordQuery);
    navigate(`?query=${keywordQuery}`);
    evt.target.elements.filmInput.value = '';
  }

  return (
    <>
      <div>
        <form onSubmit={setQuery}>
          <Input
          type="text" 
          name="filmInput"
          placeholder='Enter the movie(s) title or keywords' />
          <Btn type="submit">Search</Btn>
        </form>
      </div>
      {searchString && <MoviesSearchList filmQuery={searchString} />}
    </>
  );
};

export default MoviesSearch;
