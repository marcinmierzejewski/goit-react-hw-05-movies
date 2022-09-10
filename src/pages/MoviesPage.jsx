import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from 'api/fetchMovies';

export const MoviesPage = () => {
  const location = useLocation();
  const [querySearch, setQuerySearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovieByQuery, setSearchMovieByQuery] = useState([])

  const querySearchValue = e => {
    setQuerySearch(e.target.value)
  }

  const submitQueryValue = e => {
    e.preventDefault();
    setSearchParams({ query: querySearch});
    setQuerySearch('');
  }

  useEffect(() => {
    const getMovieByQuery = async () => {
      const searchMovie = searchParams.get('query');
      const movieByQuery = await fetchMoviesByQuery(searchMovie);
      setSearchMovieByQuery(movieByQuery);
    }
    getMovieByQuery();
  }, [searchParams]);

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

      <main>
      <h2>Searching movie</h2>
      {searchMovieByQuery.map((movie) => (
        <ul >
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <h4>{movie.title}</h4>
            </Link>
          </li>
         
        </ul>
     ))}
    </main>

    </div>
  );
};