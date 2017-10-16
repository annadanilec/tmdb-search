const apiKey = '7bb34928db22b718e710ef7c713cf6e7';
const baseUrl = 'https://api.themoviedb.org/3/';
const searchUrl = `${baseUrl}search/movie?api_key=${apiKey}`;
const moviesUrl = `${baseUrl}discover/movie?api_key=${apiKey}&page=3&sort_by=popularity.desc`;

export default {
  apiKey,
  baseUrl,
  searchUrl,
  moviesUrl,
};