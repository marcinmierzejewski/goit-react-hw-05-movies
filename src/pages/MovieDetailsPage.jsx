import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";
  

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      <h3>Details for {movieId}</h3>
      <ul>
        <li>
          <Link to="cast" state={location.state}>Cast for {movieId}</Link>
        </li>
        <li>
          <Link to="reviews" state={location.state}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};