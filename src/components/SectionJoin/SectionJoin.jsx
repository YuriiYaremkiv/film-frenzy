import { Link } from 'react-router-dom';
import css from './SectionJoin.module.scss';

export const SectionJoin = () => {
  return (
    <section className={css.section}>
      <div className="container SectionJoin">
        <h2 className={css.title}>Join Today</h2>
        <div className={css.container}>
          <div className={css.column}>
            <p className={css.text}>
              Get access to maintain your own custom personal lists, track what
              you've seen and search and filter for what to watch
              next—regardless if it's in theatres, on TV or available on popular
              streaming services like Netflix, Amazon Prime Video, Disney Plus,
              Apple TV Plus, and fuboTV.
            </p>
            <Link to="/" className={css.button}>
              Sign Up
            </Link>
          </div>
          <div className={css.column}>
            <ul className={css.list}>
              <li className={css.item}>Enjoy TMDB ad free</li>
              <li className={css.item}>Maintain a personal watchlist</li>
              <li className={css.item}>
                Filter by your subscribed streaming services and find something
                to watch
              </li>
              <li className={css.item}>
                Log the movies and TV shows you've seen
              </li>
              <li className={css.item}>Build custom lists</li>
              <li className={css.item}>
                Contribute to and improve our database
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
