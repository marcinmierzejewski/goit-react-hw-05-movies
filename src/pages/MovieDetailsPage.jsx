import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { fetchMovieById } from "api/fetchMovies";
import { MovieDetails } from 'components/MovieDetails';

export const MovieDetailsPage = () => {
  const [movieById, setMovieById] = useState([])
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  useEffect(() => {
    const getMovieById = async () => {
      const movie = await fetchMovieById(movieId);
      setMovieById(movie);
    }
    getMovieById();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      <MovieDetails movieById={movieById}/>
      <ul>
        <li>
          <Link to="cast" state={location.state}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={location.state}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};