import { getMovies } from "tryApi";
import { Link, useLocation } from "react-router-dom";

export const HomePage = () => {
  const movies = getMovies()
  const location = useLocation();
  
  return (    
    <main>
      <h2>Trending today</h2>
      {movies.map((movie) => (
        <ul key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <h4>{movie.title}</h4>
          </Link>
        </ul>
     ))}
    </main>
  );
};