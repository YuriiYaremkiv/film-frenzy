import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import personApi from 'api/modules/person.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import { SliderMovies } from './SliderMovies/SliderMovies';
import { Link } from 'react-router-dom';

import modeConfig from 'configs/mode.config';
import css from './SectionPerson.module.scss';

export const SectionPerson = () => {
  const [personInfo, setPersonInfo] = useState([]);
  const [personMovieCredits, setPersonMovieCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { personId } = useParams();

  const { themeMode } = useSelector(state => state.themeMode);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const { response, err } = await personApi.getDetails({
        personId: personId,
      });

      if (response) {
        setPersonInfo(response.data);
        setIsLoading(false);
      }

      if (err) {
        setError(err.message);
        setIsLoading(false);
      }
    })();
  }, [personId]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const { response, err } = await personApi.getMovieCredits({
        personId: personId,
      });

      if (response) {
        setPersonMovieCredits(response.data);
        setIsLoading(false);
      }

      if (err) {
        setError(err.message);
        setIsLoading(false);
      }
    })();
  }, [personId]);

  const movies = personMovieCredits.cast
    ?.filter(movie => {
      if (movie.backdrop_path) {
        return true;
      }
    })
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 10);
  const allMovies = personMovieCredits.cast
    ?.filter(movie => {
      if (movie.backdrop_path) {
        return true;
      }
    })
    .sort((a, b) => b.release_date.slice(0, 4) - a.release_date.slice(0, 4));

  const {
    name,
    profile_path: path,
    known_for_department: known,
    gender,
    birthday,
    biography,
    place_of_birth,
    also_known_as,
  } = personInfo;

  return (
    <>
      <section className={css.section}>
        <div className="container">
          <div className={css.container}>
            <div className={css.container__image}>
              <img src={tmdbConfigs.personDetailImage(path)} alt={name} />
              <h3 style={{ ...modeConfig.style.textColor[themeMode] }}>
                Personal Info
              </h3>
              <p style={{ ...modeConfig.style.textColor[themeMode] }}>
                Known For: {known}
              </p>
              <p style={{ ...modeConfig.style.textColor[themeMode] }}>
                Gender: {gender === '1' ? 'Female' : 'Male'}
              </p>
              <p style={{ ...modeConfig.style.textColor[themeMode] }}>
                Birthday: {birthday}
              </p>
              <p style={{ ...modeConfig.style.textColor[themeMode] }}>
                Place of Birth {place_of_birth}
              </p>
              <p style={{ ...modeConfig.style.textColor[themeMode] }}>
                Also Known As
              </p>
              <ul>
                {also_known_as?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      style={{ ...modeConfig.style.textColor[themeMode] }}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={css.contaner__description}>
              <h2 style={{ ...modeConfig.style.textColor[themeMode] }}>
                {name}
              </h2>
              <h3 style={{ ...modeConfig.style.textColor[themeMode] }}>
                Biography
              </h3>
              <p style={{ ...modeConfig.style.textColor[themeMode] }}>
                {biography}
              </p>
              <SliderMovies movies={movies} />
              <h3 style={{ ...modeConfig.style.textColor[themeMode] }}>
                Acting
              </h3>
              <ul className={css.list}>
                {allMovies?.map(
                  (
                    { id, release_date: date, title, character },
                    index,
                    array
                  ) => {
                    return (
                      <>
                        <li key={id} className={css.item}>
                          <p
                            style={{ ...modeConfig.style.textColor[themeMode] }}
                            className={css.item__date}
                          >
                            {date.slice(0, 4)}
                          </p>
                          <Link
                            to={`/movies/${id}`}
                            style={{ ...modeConfig.style.textColor[themeMode] }}
                            className={css[`item__link__${themeMode}`]}
                          >
                            {title}
                          </Link>
                          <p
                            style={{ ...modeConfig.style.textColor[themeMode] }}
                          >
                            as {character}
                          </p>
                        </li>
                        {date.slice(0, 4) ===
                        array[index + 1]?.release_date.slice(0, 4) ? null : (
                          <hr
                            style={{
                              border: 0,
                              height: '1px',
                              backgroundColor: '#333',
                              width: '100%',
                            }}
                          />
                        )}
                      </>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
