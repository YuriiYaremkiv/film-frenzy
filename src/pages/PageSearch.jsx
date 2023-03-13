import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListNavigation } from 'components/ListNavigation/ListNavigation';
import { InputSearch } from 'components/InputSearch/InputSearch';
import { SectionMoviesList } from 'components/SectionMoviesList/SectionMoviesList';
import { SectionPeopleList } from 'components/SectionPeopleList/SectionPeopleList';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import { PaginationList } from 'components/PaginationList/PaginationList';
import {
  getSearchMedia,
  getSearchPeople,
  getSearchMediaAdd,
  getSearchPeopleAdd,
} from 'redux/search/searchOperations';
import { setPage, setQuery } from 'redux/search/searchSlice';
import tmdbConfigs from 'api/configs/tmdb.configs';

const PageSearch = () => {
  const [type, setType] = useState(tmdbConfigs.searchType.movie);
  const dispatch = useDispatch();

  const media = useSelector(state => state.search.media);
  const people = useSelector(state => state.search.people);
  const query = useSelector(state => state.search.query);
  const page = useSelector(state => state.search.page);
  const totalPages = useSelector(state => state.search.totalPages);
  const isLoading = useSelector(state => state.search.isLoading);
  const error = useSelector(state => state.search.error);

  useEffect(() => {
    if (!query) return;

    if (type === tmdbConfigs.searchType.people) {
      dispatch(
        getSearchPeople({
          searchType: type,
          query,
          page,
        })
      );
    } else {
      dispatch(
        getSearchMedia({
          searchType: type,
          query,
          page,
        })
      );
    }
    //eslint-disable-next-line
  }, [query, type]);

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));

    if (type === tmdbConfigs.searchType.people) {
      dispatch(
        getSearchPeopleAdd({
          searchType: type,
          query,
          page: page + 1,
        })
      );
    } else {
      dispatch(
        getSearchMediaAdd({
          searchType: type,
          query,
          page: page + 1,
        })
      );
    }
  };

  const handlePaginationPageChange = newPage => {
    if (page === newPage) return;

    dispatch(setPage(newPage));

    if (type === tmdbConfigs.searchType.people) {
      dispatch(
        getSearchPeople({
          searchType: type,
          query,
          page: newPage,
        })
      );
    } else {
      dispatch(
        getSearchMedia({
          searchType: type,
          query,
          page: newPage,
        })
      );
    }
  };

  const handleChangeType = type => {
    setType(type);
    dispatch(setPage(1));
  };

  const handleChangeQuery = value => {
    dispatch(setQuery(value));
    dispatch(setPage(1));
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        <ListNavigation
          type={type}
          handleChangeType={handleChangeType}
          categories={[
            { category: 'Movie', type: tmdbConfigs.searchType.movie },
            { category: 'TV Series', type: tmdbConfigs.searchType.tv },
            { category: 'People', type: tmdbConfigs.searchType.people },
          ]}
        />
      </div>
      <div
        style={{
          margin: '0 auto',
          maxWidth: '750px',
        }}
      >
        <InputSearch query={query} handleChangeQuery={handleChangeQuery} />
      </div>

      {type !== tmdbConfigs.searchType.people ? (
        <SectionMoviesList movies={media} />
      ) : (
        <SectionPeopleList people={people} />
      )}

      {!isLoading && (media.length || people.length) ? (
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
      {!isLoading && (media.length || people.length) ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '8px 0 ',
          }}
        >
          <PaginationList
            currentPage={page}
            allPages={totalPages}
            paginationPage={handlePaginationPageChange}
          />
        </div>
      ) : null}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PageSearch;
