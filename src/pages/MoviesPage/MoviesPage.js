import { useState } from 'react';

export const MoviesPage = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    console.log(e.currentTarget);
  };

  return (
    <div>
      <form></form>
      <input />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};
