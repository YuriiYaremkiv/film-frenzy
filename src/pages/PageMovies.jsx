import { useEffect, useState } from 'react';

import mediaApi from 'api/modules/media.api';
import tmdbConfigs from 'api/configs/tmdb.configs';

import { MoviesList } from 'components/MoviesList/MoviesList';

import {
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderBg } from 'components/SliderBg/SliderBg';

const PageMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoadind, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const { response, err } = await mediaApi.getList({
        mediaType: tmdbConfigs.mediaType.movie,
        timeWindow: tmdbConfigs.mediaTime.week,
        page: page,
      });

      if (response) {
        if (page > 1) {
          setMovies([...movies, ...response.data.results]);
        } else {
          setMovies(response.data.results);
        }

        setIsLoading(false);
      }

      if (err) {
        setError(err.message);
        setIsLoading(false);
      }
    })();
  }, [page]);

  const handleChangePage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SliderBg />
      <div>
        <MoviesList movies={movies} />
        <button
          onClick={handleChangePage}
          style={{ margin: '45px auto', padding: '16px' }}
        >
          Load more
        </button>
      </div>
    </>
  );
};

export default PageMovies;
