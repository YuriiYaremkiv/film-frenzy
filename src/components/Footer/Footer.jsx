import css from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.footer__container}>
          <ul className={css.list}>
            <li>THE BASICS</li>
            <li>About TMDB</li>
            <li>Contact Us</li>
            <li>Support Forums</li>
            <li>API</li>
            <li>TSystem Status</li>
          </ul>
          <ul className={css.list}>
            <li>GET INVOLVED</li>
            <li>Contribution Bible</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
          </ul>
          <ul className={css.list}>
            <li>COMMUNITY</li>
            <li>Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
            <li>Twitter</li>
          </ul>
          <ul className={css.list}>
            <li>LEGAL</li>
            <li>Terms of Use</li>
            <li>API Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
