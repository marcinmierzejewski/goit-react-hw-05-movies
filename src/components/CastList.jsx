export const CastList = ({movieCast}) => {
  
  return (
    <>
      {movieCast && (
        <ul>
          {movieCast.map(({id, profile_path, name, character}) => (
            <li key={id}>
              <img src={profile_path && (`https://image.tmdb.org/t/p/w185${profile_path}`)} alt="unavailable" />
              <p>{name}</p>
              <p>{`Character: ${character}`}</p>
            </li>            
          ))}
        </ul>
      )}      
    </>
  )
}