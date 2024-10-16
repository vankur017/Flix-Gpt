import { useEffect } from "react"
import { API_OPTIONS } from "./constants"
import { addTopRatedMovieList } from "./movieSlice"
import { useDispatch } from "react-redux"

const useTopRatedMovies= ()=>{

    const dispatch = useDispatch();

    const topRatedMoviesList = async()=>{
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', 
            API_OPTIONS
        )

        const json =await data.json()

        dispatch(addTopRatedMovieList(json.results))
        
    }

    useEffect(()=>{
        topRatedMoviesList()
    }, [])
}

export default useTopRatedMovies 