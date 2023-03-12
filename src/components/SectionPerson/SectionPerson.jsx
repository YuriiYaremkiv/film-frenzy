import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import personApi from 'api/modules/person.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './SectionPerson.module.scss';

function splitIntoParts(text) {
  var sentences = text.split('. ');
  var parts = [];
  var part = '';
  var count = 0;

  for (var i = 0; i < sentences.length; i++) {
    part += sentences[i] + '. ';
    count++;

    if (count === 4) {
      parts.push(part);
      part = '';
      count = 0;
    }
  }

  if (part.length > 0) {
    parts.push(part);
  }
  return parts;
}

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

  const {
    name,
    profile_path: path,
    known_for_department: known,
    gender,
    birthday,
    biography,
    place_of_birth,
  } = personInfo;

  return (
    <>
      <section className={css.section}>
        <div className="container">
          <div className={css.container}>
            {/* Image container - start */}
            <div className={css.container__image}>
              <img
                src={tmdbConfigs.personDetailImage(path)}
                alt={name}
                className={css.image}
              />
              <h3 style={{ ...modeConfig.style.textColor[themeMode] }}>
                Personal Info
              </h3>
              <ul
                style={{ ...modeConfig.style.textColor[themeMode] }}
                className={css.list__info}
              >
                <li>
                  Known For:
                  <p
                    style={{ ...modeConfig.style.textColor[themeMode] }}
                    className={css.list__info__item}
                  >
                    {known}
                  </p>
                </li>
                <li>
                  Gender:
                  <p
                    style={{ ...modeConfig.style.textColor[themeMode] }}
                    className={css.list__info__item}
                  >
                    {gender === '1' ? 'Female' : 'Male'}
                  </p>
                </li>
                <li>
                  Birthday:
                  <p
                    style={{ ...modeConfig.style.textColor[themeMode] }}
                    className={css.list__info__item}
                  >
                    {birthday}
                  </p>
                </li>
                <li>
                  Place of Birth:
                  <p
                    style={{ ...modeConfig.style.textColor[themeMode] }}
                    className={css.list__info__item}
                  >
                    {place_of_birth}
                  </p>
                </li>
              </ul>
            </div>
            {/* Image container - end */}

            {/* Description container - start */}

            <div className={css.contaner__description}>
              <h2 style={{ ...modeConfig.style.textColor[themeMode] }}>
                {name}
              </h2>
              <h3 style={{ ...modeConfig.style.textColor[themeMode] }}>
                Biography
              </h3>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  marginBottom: '16px',
                }}
              >
                {biography &&
                  splitIntoParts(biography).map((el, index) => {
                    return (
                      <li key={index}>
                        <p
                          style={{ ...modeConfig.style.textColor[themeMode] }}
                          className={css.text__biography}
                        >
                          {el}
                        </p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          {/* Description container - end */}
        </div>
      </section>
    </>
  );
};
