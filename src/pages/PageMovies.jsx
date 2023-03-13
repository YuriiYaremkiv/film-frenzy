import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { SectionMovieSlider } from 'components/SectionMovieSlider/SectionMovieSlider';
import { SectionMoviesList } from 'components/SectionMoviesList/SectionMoviesList';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import Pagination from '@mui/material/Pagination';
import mediaApi from 'api/modules/media.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import { ListNavigation } from 'components/ListNavigation/ListNavigation';

const PageMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(1);
  const [type, setType] = useState(tmdbConfigs.movieType.popular);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { themeMode } = useSelector(state => state.themeMode);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { response, err } = await mediaApi.getMovies({
        movieType: type,
        page,
      });

      if (response) {
        setMovies(response.data.results);
        setAllPages(response.data.total_pages);
        setIsLoading(false);
      }

      if (err) {
        console.log(err);
        setError(err.message);
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line
  }, [type]);

  const handleChangeType = type => {
    setType(type);
    setPage(1);
  };

  const handleChangePages = number => {
    (async () => {
      const { response, err } = await mediaApi.getMovies({
        movieType: type,
        page: number,
      });

      if (response) {
        setMovies(response.data.results);
        setPage(response.data.page);
        setAllPages(response.data.total_pages);
        setIsLoading(false);
      }

      if (err) {
        setError(err.message);
        setIsLoading(false);
      }
    })();
  };

  const handleLoadMore = () => {
    (async () => {
      const { response, err } = await mediaApi.getMovies({
        movieType: type,
        page: page + 1,
      });

      if (response) {
        setMovies([...movies, ...response.data.results]);
        setPage(response.data.page);
        setAllPages(response.data.total_pages);

        setIsLoading(false);
      }

      if (err) {
        setError(err.message);
        setIsLoading(false);
      }
    })();
  };

  const handlePageChange = (event, newPage) => {
    handleChangePages(newPage);
  };

  const CustomPagination = styled(Pagination)`
    .MuiPaginationItem-text {
      color: ${themeMode === 'light'
        ? '#000'
        : themeMode === 'dark'
        ? '#fff'
        : '#d50000'};
    }
    .Mui-selected {
      background-color: ${themeMode === 'light' || themeMode === 'dark'
        ? 'rgba(1, 180, 228, 1)'
        : '#d50000'};
      color: #fff;
    }
    .MuiButtonBase-root:hover {
      background-color: ${themeMode === 'light' || themeMode === 'dark'
        ? '#40c4ff'
        : '#ff1744'};
      color: #fff;
    }
  `;

  return (
    <main style={{ ...modeConfig.style.backgroundColorMain[themeMode] }}>
      <SectionMovieSlider />
      <div className="container">
        <ListNavigation
          title="Movies"
          type={type}
          handleChangeType={handleChangeType}
          categories={[
            { category: 'Popular', type: tmdbConfigs.movieType.popular },
            { category: 'Top Rated', type: tmdbConfigs.movieType.top_rated },
          ]}
        />
        <SectionMoviesList movies={movies} />
        {!isLoading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '8px 0 ',
            }}
          >
            <ButtonLoadMore
              handleLoadMore={handleLoadMore}
              isLoading={isLoading}
            />
          </div>
        ) : null}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '8px 0 ',
          }}
        >
          <CustomPagination
            showFirstButton
            showLastButton
            count={allPages}
            page={page}
            onChange={handlePageChange}
          />
        </div>
      </div>
      {error}
    </main>
  );
};

export default PageMovies;
