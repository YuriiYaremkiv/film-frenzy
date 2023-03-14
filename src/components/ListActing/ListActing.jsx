import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import modeConfig from 'configs/mode.config';
import css from './ListActing.module.scss';

export const ListActing = ({ allMovies }) => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <div className="container">
      <div>
        <h3
          style={{
            ...modeConfig.textColor[themeMode],
            marginTop: '8px',
          }}
        >
          Acting
        </h3>
        <ul className={css.list}>
          {allMovies?.map(
            ({ id, release_date: date, title, character }, index, array) => {
              return (
                <li key={index}>
                  <div className={css.item}>
                    <p
                      style={{ ...modeConfig.textColor[themeMode] }}
                      className={css[`item__date__${themeMode}`]}
                    >
                      {date.slice(0, 4)}
                    </p>
                    <Link
                      to={`/movie/${id}`}
                      style={{ ...modeConfig.textColor[themeMode] }}
                      className={css[`item__link__${themeMode}`]}
                    >
                      {title}
                    </Link>
                    <p style={{ ...modeConfig.textColor[themeMode] }}>
                      as {character}
                    </p>
                  </div>
                  {date.slice(0, 4) ===
                  array[index + 1]?.release_date.slice(0, 4) ? null : (
                    <hr className={css.line} />
                  )}
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};
