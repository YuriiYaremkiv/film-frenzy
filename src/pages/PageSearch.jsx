import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ListNavigation } from 'components/ListNavigation/ListNavigation';
import searchAPI from 'api/modules/search.api';
import tmdbConfigs from 'api/configs/tmdb.configs';
import { InputSearch } from 'components/InputSearch/InputSearch';
import { SectionMoviesList } from 'components/SectionMoviesList/SectionMoviesList';
import { SectionSearchList } from 'components/SectionSearchList/SectionSearchList';
import { SectionPeopleList } from 'components/SectionPeopleList/SectionPeopleList';
import modeConfig from 'configs/mode.config';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';

import { PaginationList } from 'components/PaginationList/PaginationList';

const PageSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [type, setType] = useState(tmdbConfigs.searchType.movie);
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(1);
  const { themeMode } = useSelector(state => state.themeMode);

  useEffect(() => {
    if (!query) return;
    (async () => {
      setIsLoading(true);
      const { response, err } = await searchAPI.getSearch({
        searchType: type,
        query,
        page,
      });

      if (response) {
        if (type === tmdbConfigs.searchType.people) {
          setPeople(response.data.results);
          setPage(response.data.page);
          setAllPages(response.data.total_pages);
          setMovies([]);
        } else {
          setMovies(response.data.results);
          setPage(response.data.page);
          setAllPages(response.data.total_pages);
          setPeople([]);
        }
        setIsLoading(false);
      }

      if (err) {
        setError(err.message);
        setIsLoading(false);
      }
    })();
    //eslint-disable-next-line
  }, [query, type]);

  const handleLoadMore = () => {
    (async () => {
      const { response, err } = await searchAPI.getSearch({
        searchType: type,
        query,
        page: page + 1,
      });

      if (response) {
        if (type === tmdbConfigs.searchType.people) {
          setPeople([...people, ...response.data.results]);
          setPage(response.data.page);
          setAllPages(response.data.total_pages);
          setMovies([]);
        } else {
          setMovies([...movies, ...response.data.results]);
          setPage(response.data.page);
          setAllPages(response.data.total_pages);
          setPeople([]);
        }
        setIsLoading(false);
      }

      if (err) {
        setError(err.message);
        setIsLoading(false);
      }
    })();
  };

  const handlePaginationPageChange = newPage => {
    if (page === newPage) return;

    (async () => {
      const { response, err } = await searchAPI.getSearch({
        searchType: type,
        query,
        page: newPage,
      });

      if (response) {
        if (type === tmdbConfigs.searchType.people) {
          setPeople(response.data.results);
          setPage(response.data.page);
          setAllPages(response.data.total_pages);
          setMovies([]);
        } else {
          setMovies(response.data.results);
          setPage(response.data.page);
          setAllPages(response.data.total_pages);
          setPeople([]);
        }
        setIsLoading(false);
      }

      if (err) {
        setError(err.message);
        setIsLoading(false);
      }
    })();
  };

  const handleChangeType = type => {
    setType(type);
    setPage(1);
  };

  const handleChangeQuery = value => {
    setQuery(value);
  };

  return (
    <main style={{ ...modeConfig.style.backgroundColorHeader[themeMode] }}>
      <div className="container">
        <ListNavigation
          title="Search"
          type={type}
          handleChangeType={handleChangeType}
          categories={[
            { category: 'Movie', type: tmdbConfigs.searchType.movie },
            { category: 'TV Series', type: tmdbConfigs.searchType.tv },
            { category: 'People', type: tmdbConfigs.searchType.people },
          ]}
        />
        <div
          style={{
            margin: '0 auto',
            maxWidth: '750px',
          }}
        >
          <InputSearch query={query} handleChangeQuery={handleChangeQuery} />
        </div>

        {type !== tmdbConfigs.searchType.people ? (
          <SectionMoviesList movies={movies} />
        ) : (
          <SectionPeopleList people={people} />
        )}

        {!isLoading && (movies.length || people.length) ? (
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
        {!isLoading && (movies.length || people.length) ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '8px 0 ',
            }}
          >
            <PaginationList
              currentPage={page}
              allPages={allPages}
              paginationPage={handlePaginationPageChange}
            />
          </div>
        ) : null}
      </div>
      {error && <p>{error}</p>}
    </main>
  );
};

export default PageSearch;
