import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h3>Details for {movieId}</h3>
      <ul>
        <li>
          <Link to="cast">Cast for {movieId}</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};