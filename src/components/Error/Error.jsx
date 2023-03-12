import css from './Error.module.scss';

export const Error = ({ title }) => {
  return <div className={css.error}>{title}</div>;
};
