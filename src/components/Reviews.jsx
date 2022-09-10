import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchMovieAdd } from "api/fetchMovies";
import { ReviewList } from './ReviewList';

export const Reviews = () => {
  const [movieReview, setMovieReview] = useState([])
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReview = async () => {
      const reviews = await fetchMovieAdd(movieId, 'reviews');
      setMovieReview(reviews);
    }
    getMovieReview();
  }, [movieId]);

  return (
    <div>
      {movieReview.result > 0 ? (
        <ReviewList movieReview={movieReview.results}/>
      ) : (
        <p>No result review</p>
      )
      }
      
    </div>
  );
};