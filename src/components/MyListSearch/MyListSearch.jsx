import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import css from './MyListSearch.module.scss';

import photoNotFound from './images/not_found.jpg';

export const MyInputSearch = ({ options = [], showList = true, isLoading }) => {
  return (
    <>
      {options.length ? (
        <div className={css.container}>
          <ul className={showList ? css.list__open : css.list__close}>
            {options.map(
              ({ id, title, poster_path: path, release_date: data }) => (
                <li key={id} className={css.item}>
                  <NavLink to={`/movies/${id}`} className={css.navlink}>
                    <img
                      src={
                        path
                          ? `https://image.tmdb.org/t/p/w500/${path}`
                          : photoNotFound
                      }
                      width="36"
                      height="54"
                      alt=""
                      className={css.image}
                    />
                    <p className={css.title}>{title}</p>
                    <p className={css.data}>
                      {data ? `(${data.slice(0, 4)})` : null}
                    </p>
                  </NavLink>
                </li>
              )
            )}
            {isLoading && (
              <div className={css.progress}>
                <CircularProgress />
              </div>
            )}
          </ul>
        </div>
      ) : null}
    </>
  );
};

// `https://image.tmdb.org/t/p/w500/${poster_path}`;
