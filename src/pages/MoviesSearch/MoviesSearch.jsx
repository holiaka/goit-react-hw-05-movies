import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { findFilmByKeyword } from '../../axiosAPI/axios';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MovieList } from '../../components/MovieList/MovieList';

const MoviesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchFilmList, setSearchFilmList] = useState([]);
  let query = searchParams.get('query');

  useEffect(() => {
    const fetchFilmList = async () => {
      if (!query) {
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
  }, [query]);

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {searchFilmList && <MovieList filmList={searchFilmList} />}
    </>
  );
};

export default MoviesSearch;
