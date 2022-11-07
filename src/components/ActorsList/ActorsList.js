import { useEffect, useState } from 'react';

import css from './ActorsList.module.scss';

export const ActorsList = ({ actors }) => {
  const [actorsWithImage, setActorsWithImage] = useState([]);
  const [actorOthers, setActorsOthers] = useState([]);

  useEffect(() => {
    const actorImages = actors.filter(actor => {
      return actor.profile_path !== null;
    });

    const other = actors.filter(actor => {
      return actor.profile_path === null;
    });
    setActorsWithImage(actorImages);
    setActorsOthers(other);
  }, [actors]);

  return (
    <ul className={css.actorsList}>
      {actorsWithImage.length > 0
        ? actorsWithImage.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id} className={css.actorsList__item}>
                <img
                  className={css.actorsList__img}
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                  width="70"
                />
                <div>
                  <b>{name}</b>
                  <p>Character: {character}</p>
                </div>
              </li>
            );
          })
        : null}

      {actorOthers.length > 0 ? (
        <h2 className={css.actorsList__other}>Others actors:</h2>
      ) : null}
      {actorOthers.length > 0
        ? actorOthers.map(({ id, name }) => {
            return (
              <li key={id}>
                <b>{name}</b>
              </li>
            );
          })
        : null}
    </ul>
  );
};
