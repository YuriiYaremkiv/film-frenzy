import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQueryMoviesListRemove } from 'redux/transactions/transactionsOperations';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import css from './InputSearchMultiMobile.module.scss';

export const InputSearchMultiMobile = ({
  list,
  handleShoeListBtn,
  throttledChangeHandler,
  handleShowList,
}) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [showClearBtn, setShowClearBtn] = useState(false);
  const [showList, setShowList] = useState(true);
  const { themeMode } = useSelector(state => state.themeMode);

  const handleClearSearch = () => {
    inputRef.current.focus();
    inputRef.current.value = '';
    dispatch(getQueryMoviesListRemove());
    setShowClearBtn(false);
  };

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
      <IconButton
        size="large"
        aria-label="search"
        color="inherit"
        className={css[`button__search__${themeMode}`]}
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};
