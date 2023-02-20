import { useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

export const PaginationList = ({ currentPage, allPages, paginationPage }) => {
  const { themeMode } = useSelector(state => state.themeMode);

  function handlePageChange(event, newPage) {
    console.log(newPage);
    paginationPage(newPage);
  }

  const CustomPagination = styled(Pagination)`
    .MuiPaginationItem-text {
      color: ${themeMode === 'light'
        ? '#000'
        : themeMode === 'dark'
        ? '#fff'
        : '#d50000'};
    }
    .Mui-selected {
      background-color: ${themeMode === 'red'
        ? '#d50000'
        : 'rgba(1, 180, 228, 1)'} !important;
      color: #fff;
    }
    .MuiButtonBase-root:hover {
      background-color: ${themeMode === 'light' || themeMode === 'dark'
        ? '#40c4ff'
        : '#ff1744'} !important;
      color: #fff;
    }
  `;

  return (
    <CustomPagination
      showFirstButton
      showLastButton
      page={currentPage}
      count={allPages}
      onChange={handlePageChange}
    />
  );
};
