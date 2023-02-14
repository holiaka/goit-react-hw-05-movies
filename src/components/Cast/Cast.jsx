import { useState, useEffect } from 'react';
import { findActors } from 'axiosAPI/axios';
import noPhoto from '../../images/pic.jpeg';

const baseImageURL = 'https://image.tmdb.org/t/p/w500/';

export const Cast = ({ id }) => {
  const [actorList, setActorList] = useState([]);

  useEffect(() => {
    const showActors = async () => {
      let actors = await findActors(id);
      setActorList(actors);
    };
    showActors();
  }, [id]);

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
              <li key={id}>
                <div>
                  <img
                    src={
                      profile_path ? `${baseImageURL}${profile_path}` : noPhoto
                    }
                    alt={name}
                    width="250"
                  />
                </div>
                <h3>Actor's name: {name}</h3>
                <p>Character: {character}</p>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};
