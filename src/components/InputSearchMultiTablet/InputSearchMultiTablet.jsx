import { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import css from './InputSearchMultiTablet.module.scss';

export const InputSearchMultiTablet = ({
  list,
  throttledChangeHandler,
  handleShowList,
  showList,
  handleShoeListBtn,
  showClearBtn,
  handleClearSearch,
  handleSearchMovies,
}) => {
  const inputRef = useRef(null);
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

      <div className={css.options}>
        {list.length && !showList ? (
          <button
            onClick={handleShoeListBtn}
            className={showList ? css.button__open : css.button__close}
          >
            <KeyboardArrowDownIcon />
          </button>
        ) : null}

        {showClearBtn && (
          <button onClick={handleClearSearch} className={css.button__clear}>
            <CloseIcon />
          </button>
        )}
      </div>

      <button
        onClick={handleSearchMovies}
        className={css[`button__search__${themeMode}`]}
      >
        SEARCH
      </button>
    </div>
  );
};
