const mediaType = {
  all: 'all',
  movie: 'movie',
  tv: 'tv',
};

const movieType = {
  now_playing: 'now_playing',
  popular: 'popular',
  top_rated: 'top_rated',
  upcoming: 'upcoming',
};

const tvType = {
  latest: 'latest',
  airing_today: 'airing_today',
  on_the_air: 'on_the_air',
  popular: 'popular',
  top_rated: 'top_rated',
};

const mediaTime = {
  day: 'day',
  week: 'week',
};

const sectionBgImage = imageId =>
  `url(https://image.tmdb.org/t/p/w1920_and_h427_multi_faces/${imageId})`;

const personImage = imageId =>
  `https://image.tmdb.org/t/p/w138_and_h175_face/${imageId}`;

const avatarImage = avatarId =>
  `https://image.tmdb.org/t/p/w64_and_h64_face/${avatarId}`;

const backdropPath = imgEndpoint =>
  `https://image.tmdb.org/t/p/original${imgEndpoint}`;

const youtubePath = videoId =>
  `https://www.youtube.com/embed/${videoId}?controls=0`;

const tmdbConfigs = {
  mediaType,
  mediaTime,
  movieType,
  tvType,
  sectionBgImage,
  personImage,
  avatarImage,
  backdropPath,
  youtubePath,
};

export default tmdbConfigs;
