import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchMovieAdd } from "api/fetchMovies";
import { CastList } from './CastList';


export const Cast = () => {
  const [movieCast, setMovieCast] = useState([])
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      const cast = await fetchMovieAdd(movieId, 'credits');
      setMovieCast(cast);
    }
    getMovieCast();
  }, [movieId]);


  return (
    <div>
      <CastList movieCast={movieCast.cast}/>
    </div>
  );
};