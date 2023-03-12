import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import css from './InputSearchMultiMobile.module.scss';

export const InputSearchMultiMobile = ({
  inputRef,
  throttledChangeHandler,
  showClearBtn,
  handleClearSearch,
  handleSearchMovies,
  handleShowList,
}) => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <div className={css.input__container}>
      <input
        type="text"
        ref={inputRef}
        onChange={throttledChangeHandler}
        onBlur={handleShowList}
        className={css[`input__${themeMode}`]}
      />

      {showClearBtn && (
        <button onClick={handleClearSearch} className={css.button__clear}>
          <CloseIcon />
        </button>
      )}

      <IconButton
        size="large"
        aria-label="search"
        color="inherit"
        className={css[`button__search__${themeMode}`]}
        onClick={handleSearchMovies}
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};
