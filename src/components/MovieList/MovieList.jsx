import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'components/MovieDetails/MovieDetails.styled';

export const MovieList = ({ filmList }) => {
  const location = useLocation();

  const selectRoute = () => {
    if (location.pathname === "/") {
      return "movies/"
    } else {
      return '';
    }
  }

return (
      <ul>
        {filmList.map(({ id, original_title, name }) => (
          <li key={id}>
            <Link to={`${selectRoute()}${id}`} state={location}>
              {!original_title ? name : original_title}&#9759;
            </Link>
          </li>
        ))}
      </ul>
  );
};

MovieList.propTypes = {
  filmList: PropTypes.array.isRequired,
}
