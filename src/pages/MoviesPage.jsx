// import { getMovies } from "tryApi";
// import { Link, useLocation } from "react-router-dom";
import { useState } from 'react'
import { useSearchParams } from "react-router-dom";

export const MoviesPage = () => {
  // const movies = getMovies()
  // const location = useLocation();
  const [querySearch, setQuerySearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  // const name = searchParams.get("query");

  const querySearchValue = e => {
    setQuerySearch(e.target.value)
  }

  const submitQueryValue = e => {
    e.preventDefault();
    setSearchParams({ query: querySearch});
    const searchMovie = searchParams.get('query');
    console.log(searchMovie)
    setQuerySearch('');
  }

  return (
    <div>
      <form onSubmit={submitQueryValue}>
        <input
          type="text"
          value={querySearch}
          onChange={querySearchValue}
        />
        <button>Search</button>
      </form>
      
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