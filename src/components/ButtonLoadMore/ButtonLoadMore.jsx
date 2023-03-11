import { useSelector } from 'react-redux';
import css from './ButtonLoadMore.module.scss';

export const ButtonLoadMore = ({ handleLoadMore, isLoading }) => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <button onClick={handleLoadMore} className={css[`button__${themeMode}`]}>
      <span>Load More</span>
    </button>
  );
};
