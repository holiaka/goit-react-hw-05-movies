import { useState, useEffect, Suspense, lazy } from 'react';
import {
  useParams,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { findFilmDetails } from 'axiosAPI/axios';
import { Loader } from '../Loader/Loader';
import { AddInformBox, Btn, Disc, Wrapper, Link } from './MovieDetails.styled';
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../../pages/Reviews'));

const baseImageURL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  let {
    poster_path ='',
    original_title = '',
    release_date = '',
    vote_average,
    overview = '',
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
      navigate('/');
    }
  }

  return (
    <>
      <Btn type="button" onClick={goPrevPage}>
        <b>&#8678;</b> GO BACK
      </Btn>
      <Wrapper>
        <div>
          <img
            src={`${baseImageURL}${poster_path}`}
            alt={`${original_title}`} 
            width="350"
          />
        </div>
        <div>
          <h2>
            {`${original_title}`} <span>({release_date.slice(0, 4)})</span>
          </h2>
          <Disc>User Scope: {`${Math.round(vote_average * 10)}%`}</Disc>
          <h3>Overview</h3>
          <Disc>{overview}</Disc>
          <h3>Genres</h3>
          <Disc>
            {genres.map(genre => (
              <span key={genre.id}>{genre.name + ' '}</span>
            ))}
          </Disc>
        </div>
      </Wrapper>
      <AddInformBox>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </AddInformBox>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast id={id} />}></Route>
          <Route path="reviews" element={<Reviews id={id} />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetails;
