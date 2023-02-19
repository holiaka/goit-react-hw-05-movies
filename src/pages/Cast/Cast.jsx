import { useState, useEffect } from 'react';
import { findActors } from 'axiosAPI/axios';
import { useLocation } from 'react-router-dom';
import { filterFuncToArrById } from 'filterFuncToArrById/filterFuncToArrById';
import noPhoto from '../../images/pic.jpeg';
import { CastLi } from './Cast.styled';

const baseImageURL = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  const [actorList, setActorList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const showActors = async () => {
      let actors = await findActors(location.state);
      actors = filterFuncToArrById(actors);
      setActorList(actors);
    };
    showActors();
  }, [location]);

  return (
    <>
      {actorList.length === 0 ? (
        <h3>
          There is no information about the cast of the film in the database!
        </h3>
      ) : (
        <ul>
          {actorList.map(
            ({
              id,
              profile_path,
              name = 'Not available',
              character = 'Not available',
            }) => (
              <CastLi key={id}>
                <div>
                  <img
                    src={
                      profile_path ? `${baseImageURL}${profile_path}` : noPhoto
                    }
                    alt={name}
                    width="250"
                  />
                </div>
                <div>
                  <h3>Actor's name: {name}</h3>
                  <p>Character: {character}</p>
                </div>                
              </CastLi>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default Cast;
