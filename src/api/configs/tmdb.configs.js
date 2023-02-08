const mediaType = {
  all: 'all',
  movie: 'movie',
  tv: 'tv',
};

const mediaTime = {
  day: 'day',
  week: 'week',
};

const sectionBgImage = imageId =>
  `url(https://image.tmdb.org/t/p/w1920_and_h427_multi_faces/${imageId})`;

const tmdbConfigs = {
  mediaType,
  mediaTime,
  sectionBgImage,
};

export default tmdbConfigs;
