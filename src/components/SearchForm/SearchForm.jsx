import { useState } from 'react';
import toast from 'react-hot-toast';

import { Input, Btn } from './SearchForm.styled';

export const SearchForm = ({ setSearchParams }) => {
  const [filmQuery, setFilmQuery] = useState();

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

  return (
    <form onSubmit={setQuery}>
      <Input
        type="text"
        name="filmInput"
        placeholder="Enter the movie(s) title or keywords"
      />
      <Btn type="submit">Search</Btn>
    </form>
  );
};
