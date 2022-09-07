import { fetchPhotos } from 'api/fetchPhotos';
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';

export const App = () => {
  const search = async () => {
    const photos = await fetchPhotos()
    console.log(photos)
  }
  
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage/>} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>


        </Route>
      </Routes>
      <button onClick={search}> Search </button>
      
      {/* api keyv 13376ece24dd3764203e2484d15e71b5 */}
      {/* przykłąd https://api.themoviedb.org/3/movie/550?api_key=13376ece24dd3764203e2484d15e71b5 */}
      
{/* https://api.themoviedb.org/3/trending/all/day?api_key=13376ece24dd3764203e2484d15e71b5 */}
    </div>
    
  );
};
