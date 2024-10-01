import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import useNowPlayingMovie from '../utils/useNowPlayingMovie'
import PopularMoviesList from './PoplularMoviesList'
import usePopularMovies from '../utils/usePopularMovies'

const SecondaryContainer = () => {


   const nowPlayingList = useSelector((store)=>store.movies?.nowPlayingList)
    useNowPlayingMovie()
   console.log(nowPlayingList);

   
  const popularMovieList = useSelector((store)=>store.movies?.popularMovieList)
  usePopularMovies()
  console.log(popularMovieList);
  
   
   
  return (
    
    <div className=' bg-black'>
       
         <div className='-mt-[230px] pl-12 relative z-20' >
           <MovieList title={"Now Playing"} movies={nowPlayingList}/>
           <PopularMoviesList title={"Popular Movies"} popularmovies={popularMovieList}/>
         </div>
  
      
    </div>
  )
}

export default SecondaryContainer