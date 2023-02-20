import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { findFilmDetails } from 'axiosAPI/axios';
import { Loader } from '../../components/Loader/Loader';
import { AddInformBox, Btn, Disc, Wrapper, Link } from './MovieDetails.styled';

const baseImageURL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const [details, setDetails] = useState({
    poster_path: "",
    release_date: '',
    genres: [],
  });

  const location = useLocation("");
  const goBackLocation = useRef(`${location?.state?.pathname}${location?.state?.search}`);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const showMainDetails = async () => {
      let discr = await findFilmDetails(id);
      setDetails(discr);
    };
    showMainDetails();
  }, [id]);

  function goPrevPage() {
  if (!goBackLocation.current.includes("undefined")) {
      navigate(goBackLocation.current);
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
            src={`${baseImageURL}${details.poster_path}`}
            alt={`${details.original_title}`}
            width="350"
          />
        </div>
        <div>
          <h2>
            {`${details.original_title}`}{' '}
            <span>({details.release_date.slice(0, 4)})</span>
          </h2>
          <Disc>User Scope: {`${Math.round(details.vote_average * 10)}%`}</Disc>
          <h3>Overview</h3>
          <Disc>{details.overview}</Disc>
          <h3>Genres</h3>
          <Disc>
            {details.genres.map(genre => (
              <span key={genre.id}>{genre.name + ' '}</span>
            ))}
          </Disc>
        </div>
      </Wrapper>
      <AddInformBox>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={id}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={id}>
              Reviews
            </Link>
          </li>
        </ul>
      </AddInformBox>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
