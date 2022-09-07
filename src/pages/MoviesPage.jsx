// import { getMovies } from "tryApi";
// import { Link, useLocation } from "react-router-dom";

export const MoviesPage = ({ value, onChange }) => {
  // const movies = getMovies()
  // const location = useLocation();
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {/* {movies.map((movie) => (
        <ul key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <h4>{movie.title}</h4>
          </Link>
        </ul>
     ))} */}
    </div>
  );
};