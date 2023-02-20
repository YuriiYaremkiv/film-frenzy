import { useState } from 'react';
import { useSelector } from 'react-redux';
import css from './InputSearch.module.scss';

export const InputSearch = ({ query, handleChangeQuery }) => {
  const [value, setValue] = useState('');
  const { themeMode } = useSelector(state => state.themeMode);

  const handleChangeInput = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleChangeQuery(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        value={value}
        onChange={handleChangeInput}
        className={css[`input__${themeMode}`]}
      />
      <button type="submit" className={css[`button__${themeMode}`]}>
        Search
      </button>
    </form>
  );
};
