import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import css from './MyListSearch.module.scss';

export const MyInputSearch = ({ options = [], showList = true, isLoading }) => {
  return (
    <>
      {options.length ? (
        <div className={css.container}>
          <ul className={showList ? css.list__open : css.list__close}>
            {options.map(({ id, title, poster_path, release_date }) => (
              <li key={id} className={css.item}>
                <NavLink to={`/movies/${id}`} className={css.navlink}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    width="36"
                    height="54"
                    alt="dsdssdvvd"
                    className={css.image}
                  />
                  <p className={css.title}>{title}</p>
                  <p className={css.data}>{`(${release_date.slice(0, 4)})`}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};
