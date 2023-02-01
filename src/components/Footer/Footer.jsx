import { Link } from 'react-router-dom';
import css from './Footer.module.scss';

import sprite from './icons/sprite.svg';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.footer__container}>
          <div className={css.logo}>
            <Link to="/">
              <svg className={css.icon}>
                <use href={sprite + '#logo'}></use>
              </svg>
            </Link>
          </div>
          <div className={css.button__container}>
            <button className={css.button}>JOIN THE COMMUNITY</button>
          </div>
          <ul className={css.list}>
            <li>
              <h3 className={css.list__title}>THE BASICS</h3>
            </li>
            <li>
              <Link to="/" className={css.link}>
                About TMDB
              </Link>
            </li>
            <li>
              <Link to="/" className={css.link}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className={css.link}>
                Support Forums
              </Link>
            </li>
            <li>
              <Link to="/" className={css.link}>
                API
              </Link>
            </li>
            <li>
              <Link to="/" className={css.link}>
                TSystem Status
              </Link>
            </li>
          </ul>
          <ul className={css.list}>
            <li>
              <h3 className={css.list__title}>GET INVOLVED</h3>
            </li>
            <li>
              <Link to="/" className={css.link}>
                Contribution Bible
              </Link>
            </li>
            <li>
              <Link to="/" className={css.link}>
                Add New Movie
              </Link>
            </li>
            <li>
              <Link to="/" className={css.link}>
                Add New TV Show
              </Link>
            </li>
          </ul>
          <ul className={css.list}>
            <li>
              <h3 className={css.list__title}>COMMUNITY</h3>
            </li>
            <li>
              <Link to="/" className={css.link}>
                Guidelines
              </Link>
            </li>
            <li>
              <Link to="/" className={css.link}>
                Discussions
              </Link>
            </li>
            <li>
              <Link to="/" className={css.link}>
                Leaderboard
              </Link>
            </li>
            <li>
              <Link to="/" className={css.link}>
                Twitter
              </Link>
            </li>
          </ul>
          <ul className={css.list}>
            <li>
              <h3 className={css.list__title}>LEGAL</h3>
            </li>
            <li>
              <Link to="/" className={css.link}>
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/" className={css.link}>
                API Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/" className={css.link}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
