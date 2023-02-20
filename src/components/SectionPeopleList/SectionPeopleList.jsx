import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import tmdbConfigs from 'api/configs/tmdb.configs';
import css from './SectionPeopleList.module.scss';

export const SectionPeopleList = ({ people = [] }) => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <section>
      <ul className={css.list}>
        {people.map(({ id, name, original_name, profile_path: path }) => {
          return (
            <li key={id} className={css.list__item}>
              <div className={css.list__container}>
                <Link
                  style={{
                    backgroundImage: `url(${tmdbConfigs.personDetailImage(
                      path
                    )})`,
                  }}
                  className={css.list__link}
                  to={`/person/${id}`}
                >
                  <div className={css.card__tumb}>
                    <p className={css[`title__${themeMode}`]}>
                      {name || original_name}
                    </p>
                  </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
