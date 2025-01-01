import React,{useEffect, useState} from 'react'
import { API_OPTIONS, MOVIE_PAGE_URL } from './constants'




const useMovieDetails = ({id}) => {
  const [movieInfo, setMovieInfo] = useState(null)
  console.log(id);

  useEffect(() => {
    data()
  }, [id])
  
  const data = async () => {
    const response = await fetch(`${MOVIE_PAGE_URL}${id}`, API_OPTIONS)

    if (!response.ok) {
      throw new Error('Network response was not ok.');
  }

    const movieData = await response.json()
    setMovieInfo(movieData)

    console.log(movieData);
    

    return movieInfo


  }

  
}

export default useMovieDetails