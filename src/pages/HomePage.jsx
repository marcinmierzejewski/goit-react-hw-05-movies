// import { getMovies } from "tryApi";
import { fetchMovies } from 'api/fetchMovies';
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

export const HomePage = () => {
  // const movies = getMovies()
  const [mostPopularMovie, setMostPopularMovie] = useState([])
  const location = useLocation();

  const getPopularMovies = async () => {
    
    try {
      const popularMovies = await fetchMovies();
      setMostPopularMovie(popularMovies);
      console.log(popularMovies)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
  
  return (    
    <main>
      <h2>Trending today</h2>
      {mostPopularMovie.map((movie) => (
        <ul key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <h4>{movie.title}</h4>
          </Link>
        </ul>
     ))}
    </main>
  );
};