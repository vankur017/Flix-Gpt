import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from './constants'
import { addPopularMovieList } from './movieSlice'

const usePopularMovies = () => {

    const dispatch = useDispatch()

    const popluarMovieList = async ()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();

        console.log(json.results);
        dispatch(addPopularMovieList(json.results))
        console.log(dispatch);
        
    }

    useEffect(()=>{
        popluarMovieList()
    }, [])

}

export default usePopularMovies