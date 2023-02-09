import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper';
import { toast } from 'react-toastify';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// import { setGlobalLoading } from '../../redux/features/globalLoadingSlice';
// import { routesGen } from '../../routes/routes';

import uiConfigs from '../../configs/ui.configs';
import 'swiper/css';
import {
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import CircularRate from './CircularRate';
// import CircularRate from './CircularRate';

// import tmdbConfigs from '../../api/configs/tmdb.configs';
// import genreApi from '../../api/modules/genre.api';
// import mediaApi from '../../api/modules/media.api';

import { Swiper, SwiperSlide } from 'swiper/react';

import mediaApi from 'api/modules/media.api';
import tmdbConfigs from 'api/configs/tmdb.configs';

export const SliderBg = () => {
  const [movies, setMovies] = useState([]);

  console.log('movies is: ', movies);

  useEffect(() => {
    (async () => {
      const { response, err } = await mediaApi.getMovies({
        movieType: tmdbConfigs.movieType.popular,
      });

      if (response) setMovies(response.data.results);
      if (err) toast.error(err.message);
    })();
  }, []);

  const params = {
    modules: [Autoplay],
    speed: 1000,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    spaceBetween: 50,
    slidesPerView: 1,
    onSlideChange: () => console.log('slide change'),
    on: {
      init: swiper => console.log(swiper),
    },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        color: 'primary.contrastText',
        '&::before': {
          content: '""',
          width: '100%',
          height: '30%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: 2,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))',
        },
      }}
    >
      <Swiper {...params} style={{ width: '100%', height: 'max-content' }}>
        {movies.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  paddingTop: {
                    xs: '130%',
                    sm: '80%',
                    md: '60%',
                    lg: '45%',
                  },
                  backgroundPosition: 'top',
                  backgroundSize: 'cover',
                  backgroundImage: `url(${tmdbConfigs.backdropPath(
                    movie.backdrop_path || movie.poster_path
                  )})`,
                }}
              />
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundImage:
                    'linear-gradient(to right, rgba(245,245,245,1), rgba(0,0,0,0))',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    paddingX: '30px',
                    color: 'text.primary',
                    width: { sm: 'unset', md: '30%', lg: '40%' },
                  }}
                >
                  <Stack spacing={4} direction="column">
                    {/* title */}
                    <Typography
                      variant="h4"
                      fontSize={{ xs: '2rem', md: '2rem', lg: '4rem' }}
                      fontWeight="700"
                      sx={{
                        ...uiConfigs.style.typoLines(2, 'left'),
                      }}
                    >
                      {movie.title || movie.name}
                    </Typography>
                    {/* title */}

                    <Stack direction="row" spacing={1} alignItems="center">
                      {/* rating */}
                      <CircularRate value={movie.vote_average} />
                      {/* rating */}

                      <Divider orientation="vertical" />
                      {/* genres */}
                      {[...movie.genre_ids]
                        .splice(0, 2)
                        .map((genreId, index) => (
                          <Chip
                            variant="filled"
                            color="primary"
                            key={index}
                            // label={
                            //   genres.find(e => e.id === genreId) &&
                            //   genres.find(e => e.id === genreId).name
                            // }
                          />
                        ))}
                      {/* genres */}
                    </Stack>
                    {/* overview */}
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: 'justify',
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                      }}
                    >
                      {movie.overview}
                    </Typography>
                    {/* overview */}

                    {/* buttons */}
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<PlayArrowIcon />}
                      component={Link}
                      // to={routesGen.mediaDetail(mediaType, movie.id)}
                      sx={{ width: 'max-content' }}
                    >
                      watch now
                    </Button>
                    {/* buttons */}
                  </Stack>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};
