import { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import { findFilmDetails } from 'axiosAPI/axios';

const baseImageURL = 'https://image.tmdb.org/t/p/w500/';

export const MovieDetails = () => {
  const [details, setDetails] = useState({});
  //   const location = useLocation();
  const { id } = useParams();

  let {
    poster_path,
    original_title,
    release_date = '',
    vote_average,
    overview,
    genres=[],
  } = details;
    
  useEffect(() => {
    const showMainDetails = async () => {
      let discr = await findFilmDetails(id);
      setDetails(discr);
    };
    showMainDetails();
  }, [id]);

  return (
    <>
      <button type="button">GO BACK</button>
      <div>
        <div>
          <img
            src={`${baseImageURL}${poster_path}`}
            alt={`${original_title}`}
          />
        </div>
        <div>
          <h2>
            {`${original_title}`}{' '}
                      <span>({release_date.slice(0, 4)})</span>
          </h2>
          <p>User Scope: {`${Math.round(vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres.map(genre => 
              <span key={genre.id}>{genre.name + ' '}</span>
            )}
          </p>
        </div>
          </div>
          <div>
              <p>Additional information</p>
              <ul>
                  <li><Link>Cast</Link></li>
                  <li><Link>Reviews</Link></li>
              </ul>
          </div>
    </>
  );
};
