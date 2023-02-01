import { useState, useEffect, useCallback, useRef } from 'react';
import * as React from 'react';

import css from './SectionSearch.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

import {
  getQueryMoviesList,
  getQueryMoviesListRemove,
  getTrendingMovies,
} from 'redux/transactions/transactionsOperations';
import { MyInputSearch } from 'components/MyListSearch/MyListSearch';

export const SectionSearch = () => {
  const [query, setQuery] = useState('');
  const [showClearBtn, setShowClearBtn] = useState(false);
  const [showList, setShowList] = useState(true);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const list = useSelector(state => state.transactions.list);
  const isLoading = useSelector(state => state.transactions.isLoading);

  useEffect(() => {
    if (query.length > 0) {
      dispatch(getQueryMoviesList(query));
    } else {
      dispatch(getQueryMoviesListRemove());
    }
    // eslint-disable-next-line
  }, [query]);

  const handleInputChange = e => {
    setQuery(e.target.value);
    if (e.target.value) {
      setShowClearBtn(true);
    } else {
      setShowClearBtn(false);
    }
  };

  // eslint-disable-next-line
  const throttledChangeHandler = useCallback(
    debounce(handleInputChange, 500),
    []
  );

  const handleClearSearch = () => {
    inputRef.current.focus();
    inputRef.current.value = '';
    dispatch(getQueryMoviesListRemove());
    setShowClearBtn(false);
  };

  const handleShowList = () => {
    setShowList(false);
  };

  const handleShoeListBtn = () => {
    setShowList(!showList);
    inputRef.current.focus();
  };

  const handleSearchMovies = () => {
    if (!inputRef.current.value) {
      return alert('dsshvdhjv');
    }
    dispatch(getTrendingMovies(inputRef.current.value));
  };

  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.section__container}>
          <h2>Welcome</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <div className={css.container}>
            <input
              type="text"
              ref={inputRef}
              onChange={throttledChangeHandler}
              onBlur={handleShowList}
              className={css.input}
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
                <button
                  onClick={handleClearSearch}
                  className={css.button__clear}
                >
                  <CloseIcon />
                </button>
              )}
              <button
                onClick={handleSearchMovies}
                className={css.button__search}
              >
                SEARCH
              </button>
            </div>

            <div className={css.list}>
              <MyInputSearch
                options={list}
                showList={showList}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
