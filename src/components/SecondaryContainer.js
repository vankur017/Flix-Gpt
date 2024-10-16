import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import useNowPlayingMovie from '../utils/useNowPlayingMovie'
import PopularMoviesList from './PoplularMoviesList'
import TopRatedMovieList from './TopRatedMovieList'
import UpcomingMovieList from './UpcomingMovieList'
import usePopularMovies from '../utils/usePopularMovies'
import useTopRatedMovies from '../utils/useTopRatedMovies'
import useUpcomingMovie from '../utils/useUpcomingMovie'

const SecondaryContainer = () => {


      const nowPlayingList = useSelector((store)=>store.movies?.nowPlayingList)
      useNowPlayingMovie()

      const popularMovieList = useSelector((store)=>store.movies?.popularMovieList)
      usePopularMovies()
  
      const topRatedMoviesList = useSelector((store)=>store.movies.topRatedMoviesList)
      useTopRatedMovies()
      console.log(topRatedMoviesList);

      const upcomingMoviesList = useSelector((store)=>store.movies?.upcomingMoviesList)
      useUpcomingMovie()
      console.log(upcomingMoviesList);
      
   
  return (
    
    <div className=' bg-black'>
       
         <div className=' -mt-[250px] relative z-20 pl-10 -mr-[15px]' >
           <MovieList title={"Now Playing"} movies={nowPlayingList}/>
           <PopularMoviesList title={"Popular Movies"} popularmovies={popularMovieList}/>
           <TopRatedMovieList title={"Top Rated"} toprated={topRatedMoviesList}/>
           <UpcomingMovieList title={"Upcoming"} upcoming = {upcomingMoviesList}/>
         </div>
  
      
    </div>
  )
}

export default SecondaryContainer