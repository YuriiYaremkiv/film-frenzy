import { useSelector } from 'react-redux';
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

export const SectionPerson = ({ personInfo }) => {
  const { themeMode } = useSelector(state => state.themeMode);

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
            <div className={css.container__image}>
              <img
                src={tmdbConfigs.personDetailImage(path)}
                alt={name}
                className={css.image}
              />
              <h3 style={{ ...modeConfig.textColor[themeMode] }}>
                Personal Info
              </h3>
              <ul
                style={{ ...modeConfig.textColor[themeMode] }}
                className={css.list__info}
              >
                <li>
                  Known For:
                  <p
                    style={{ ...modeConfig.textColor[themeMode] }}
                    className={css.list__info__item}
                  >
                    {known}
                  </p>
                </li>
                <li>
                  Gender:
                  <p
                    style={{ ...modeConfig.textColor[themeMode] }}
                    className={css.list__info__item}
                  >
                    {gender === '1' ? 'Female' : 'Male'}
                  </p>
                </li>
                <li>
                  Birthday:
                  <p
                    style={{ ...modeConfig.textColor[themeMode] }}
                    className={css.list__info__item}
                  >
                    {birthday}
                  </p>
                </li>
                <li>
                  Place of Birth:
                  <p
                    style={{ ...modeConfig.textColor[themeMode] }}
                    className={css.list__info__item}
                  >
                    {place_of_birth}
                  </p>
                </li>
              </ul>
            </div>

            <div className={css.contaner__description}>
              <h2 style={{ ...modeConfig.textColor[themeMode] }}>{name}</h2>
              <h3 style={{ ...modeConfig.textColor[themeMode] }}>Biography</h3>
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
                          style={{ ...modeConfig.textColor[themeMode] }}
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
        </div>
      </section>
    </>
  );
};
