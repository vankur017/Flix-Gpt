import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from './constants'
import { addUpcomingMovies } from './movieSlice'

const useUpcomingMovie = () => {

    const dispatch = useDispatch()

    const upcomingMovieList = async ()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();

        // console.log(json.results);
        dispatch(addUpcomingMovies(json.results))
     //    console.log(dispatch);
        
    }

    useEffect(()=>{
        upcomingMovieList()
    }, [])

}

export default useUpcomingMovie