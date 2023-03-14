import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';

export const CustomPagination = () => {
  const { themeMode } = useSelector(state => state.themeMode);

  const StyledPagination = styled(Pagination)`
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

  return <StyledPagination />;
};
