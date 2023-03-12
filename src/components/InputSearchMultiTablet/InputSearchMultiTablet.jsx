import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import css from './InputSearchMultiTablet.module.scss';

export const InputSearchMultiTablet = ({
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

      <Button
        variant="contained"
        onClick={handleSearchMovies}
        className={css[`button__search__${themeMode}`]}
      >
        SEARCH
      </Button>
    </div>
  );
};
