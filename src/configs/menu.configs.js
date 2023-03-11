import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const main = [
  {
    display: 'home',
    path: '/',
    icon: <HomeOutlinedIcon />,
    state: 'home',
  },
  {
    display: 'movies',
    path: '/movies',
    icon: <SlideshowOutlinedIcon />,
    state: 'movies',
  },
  {
    display: 'tv series',
    path: '/tv',
    icon: <LiveTvOutlinedIcon />,
    state: 'tv',
  },
  {
    display: 'search',
    path: '/search',
    icon: <SearchOutlinedIcon />,
    state: 'search',
  },
];

const menuConfigs = { main };

export default menuConfigs;
