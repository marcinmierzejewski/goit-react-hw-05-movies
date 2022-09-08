import axios from 'axios';

export const fetchMovies = async () => {

  // const API_KEY = '1424879-278d005ef871cdc02a09416fb';
  // const params = new URLSearchParams({
  //   image_type: 'photo',
  //   orientation: 'horizontal',
  //   safesearch: 'true',
  //   per_page: 12,
  //   page: currentPage,
  // });

  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=13376ece24dd3764203e2484d15e71b5`
  );
  const responseData = response.data.results;
  return responseData;
};

