import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { findFilmByKeyword } from '../../axiosAPI/axios';
import { Btn } from '../MovieDetails/MovieDetails.styled';
import { MovieList } from '../../components/MovieList/MovieList';
import { Input } from './MoviesSearch.styled';

const MoviesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [filmQuery, setFilmQuery] = useState();
  const [searchFilmList, setSearchFilmList] = useState([]);
  let query = searchParams.get('query');

  function setQuery(evt) {
    evt.preventDefault();
    const keywordQuery = evt.target.elements.filmInput.value
      .trim()
      .toLowerCase();
    if (keywordQuery === '') {
      toast.error('The query input field is empty');
      return;
    }
    if (keywordQuery === filmQuery) {
      toast.error('You have not changed your request');
      return;
    }
    setFilmQuery(keywordQuery);
    setSearchParams({ query: keywordQuery });
    evt.target.elements.filmInput.value = '';
  }

  useEffect(() => {
    const fetchFilmList = async () => {
      if (!query ) {
        return;
      }
      const films = await findFilmByKeyword(query);
      if (films.length > 0) {
        setSearchFilmList(films);
      } else {
        toast.error('Nothing was found for your request!!!');
      }
    };
    fetchFilmList();
  }, [query, searchFilmList, location]);

  return (
    <>
      <div>
        <form onSubmit={setQuery}>
          <Input
            type="text"
            name="filmInput"
            placeholder="Enter the movie(s) title or keywords"
          />
          <Btn type="submit">Search</Btn>
        </form>
      </div>
      {searchFilmList && <MovieList filmList={searchFilmList} />}
    </>
  );
};

export default MoviesSearch;
