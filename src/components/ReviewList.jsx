export const ReviewList = ({movieReview}) => {
  
  return (
    <>
      {movieReview ? (
        <ul>
          {movieReview.map(({id, author, content}) => (
            <li key={id}>
               <h4>{`Author: ${author}`}</h4>
              <p>{content}</p>
            </li>            
          ))}
        </ul>
      ): (
        <p> No review</p>
      )}      
    </>
  )
}