import { Link } from "react-router-dom";

export const MoviesSearchList = ({ searchFilmList }) => {
    console.log(searchFilmList);
  
    return (
    <ul>
            {searchFilmList.map(({ id, title }) => { return (<li key={id}> <Link to={`${id}`}>{title}</Link></li>) })}
    </ul>
  );
};
