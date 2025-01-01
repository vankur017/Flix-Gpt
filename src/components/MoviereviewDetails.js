import React from 'react'
import useMovieDetails from '../utils/useMovieDetails'
import {useParams} from 'react-router-dom'

const MoviereviewDetails = () => {
    
    const movieId = useParams()
    console.log(movieId);
    

    const movieInfo = useMovieDetails(movieId)
 
    

    return (
    <div>MoviereviewDetails


    </div>
  )
}

export default MoviereviewDetails