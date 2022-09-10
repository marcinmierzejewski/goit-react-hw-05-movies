export const MovieDetails = ({movieById}) => {
  const { poster_path, release_date, title, vote_average, overview, genres } = movieById
  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="No display" />
      </div>
      <div>
        <h2>{`${title} (${release_date})`}</h2>
        <p>{`User score: ${(vote_average * 10).toFixed(0)}%`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres?.map(genre => genre.name).join(', ')}</p>
      </div>
      

    </div>
  )
}