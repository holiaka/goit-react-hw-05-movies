import { useState, useEffect } from 'react';
import { useParams, Link, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import { findFilmDetails } from 'axiosAPI/axios';
import { Cast } from "../Cast/Cast";
import { Reviews } from "../../pages/Reviews";

const baseImageURL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  let {
    poster_path,
    original_title,
    release_date = '',
    vote_average,
    overview,
    genres = [],
  } = details;

  useEffect(() => {
    const showMainDetails = async () => {
      let discr = await findFilmDetails(id);
      setDetails(discr);
    };
    showMainDetails();
  }, [id]);

  function goPrevPage() {
    if (location.state) {
      navigate(location.state);
    } else {
      navigate("/");
    }
  }

  return (
    <>
      <button type="button" onClick={goPrevPage} state={'back'}><b>&#8678;</b> GO BACK</button>
      <div>
        <div>
          <img
            src={`${baseImageURL}${poster_path}`}
            alt={`${original_title}`}
          />
        </div>
        <div>
          <h2>
            {`${original_title}`} <span>({release_date.slice(0, 4)})</span>
          </h2>
          <p>User Scope: {`${Math.round(vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres.map(genre => (
              <span key={genre.id}>{genre.name + ' '}</span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="cast" element={<Cast id={id} />}></Route>
        <Route path="reviews" element={<Reviews id={id} />}></Route>
      </Routes>      
    </>
  );
};

export default MovieDetails;