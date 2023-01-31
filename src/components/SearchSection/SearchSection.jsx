import { NavLink } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import css from './SearchSection.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import throttle from 'lodash.throttle';
import debounce from 'lodash/debounce';

import {
  getQueryMoviesList,
  getQueryMoviesListRemove,
} from 'redux/transactions/transactionsOperations';
import { MyInputSearch } from 'components/MyListSearch/MyListSearch';

export const SearchSection = () => {
  const [query, setQuery] = useState('');
  const [showList, setShowList] = React.useState(true);

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
  };

  // eslint-disable-next-line
  const throttledChangeHandler = useCallback(
    debounce(handleInputChange, 500),
    []
  );

  const changeShowList = () => {
    setShowList(!showList);
  };

  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.container}>
          <input
            type="text"
            onChange={throttledChangeHandler}
            onBlur={changeShowList}
            className={css.input}
          />
          <button onClick={() => setShowList(!showList)} className={css.button}>
            SEND
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
    </section>
  );
};
