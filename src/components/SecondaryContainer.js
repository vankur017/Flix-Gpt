import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import useNowPlayingMovie from '../utils/useNowPlayingMovie'
import PopularMoviesList from './PoplularMoviesList'
import TopRatedMovieList from './TopRatedMovieList'
import usePopularMovies from '../utils/usePopularMovies'
import useTopRatedMovies from '../utils/useTopRatedMovies'

const SecondaryContainer = () => {


      const nowPlayingList = useSelector((store)=>store.movies?.nowPlayingList)
      useNowPlayingMovie()

      const popularMovieList = useSelector((store)=>store.movies?.popularMovieList)
      usePopularMovies()
  
      const topRatedMoviesList = useSelector((store)=>store.movies.topRatedMoviesList)
      useTopRatedMovies()
      console.log(topRatedMoviesList);
   
  return (
    
    <div className=' bg-black'>
       
         <div className=' -mt-[230px] pl-12 relative z-20' >
           <MovieList title={"Now Playing"} movies={nowPlayingList}/>
           <PopularMoviesList title={"Popular Movies"} popularmovies={popularMovieList}/>
           <TopRatedMovieList title={"Top Rated"} toprated={topRatedMoviesList}/>
         </div>
  
      
    </div>
  )
}

export default SecondaryContainer