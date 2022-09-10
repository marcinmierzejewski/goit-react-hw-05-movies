import axios from 'axios';
const API_KEY = '13376ece24dd3764203e2484d15e71b5'

export const fetchMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  const responseData = response.data.results;
  return responseData;
};

export const fetchMovieById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  console.log(response)
  const responseData = response.data;
  return responseData;
}

export const fetchMovieAdd = async (movieId, param) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/${param}?api_key=${API_KEY}`
  );
  console.log(response)
  const responseData = response.data;
  return responseData;
}