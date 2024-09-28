import React, {useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'
const useMovieTrailer = (movieId) => {
    
    const dispatch = useDispatch()

    console.log(movieId);
    
    const getMovieVideos = async()=>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/"
            +
            movieId
            +
            "/videos?language=en-US", 
             API_OPTIONS
            )
        const json = await data.json();
        console.log(json);
        const res = json.results
        const filterData = res.filter(video => video.type == "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
       
        console.log(trailer);
        dispatch(addTrailerVideo(trailer))
    }

     useEffect(()=>{
        getMovieVideos()
    },[])
 
}

export default useMovieTrailer