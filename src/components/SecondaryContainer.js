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
import ApiError from './ApiError'

const SecondaryContainer = () => {


      const nowPlayingList = useSelector((store)=>store.movies?.nowPlayingList)
      useNowPlayingMovie()

      const popularMovieList = useSelector((store) => store.movies?.popularMovieList)
      usePopularMovies()
    
      const topRatedMoviesList = useSelector((store) => store.movies.topRatedMoviesList)
      useTopRatedMovies()
    
      const upcomingMoviesList = useSelector((store) => store.movies?.upcomingMoviesList)
      useUpcomingMovie()

    
      const ismovies = nowPlayingList && popularMovieList && topRatedMoviesList && upcomingMoviesList
      console.log(ismovies);

      
      return (
        <div className="bg-black pt-8">
          {
            ismovies.length===0 ?
                 '' :
            <>
                       <div className="relative z-20 pl-4 sm:pl-6 md:pl-10">

                            <MovieList title="Now Playing" movies={nowPlayingList} />
                            <PopularMoviesList title="Popular Movies" popularmovies={popularMovieList} />
                            <TopRatedMovieList title="Top Rated" toprated={topRatedMoviesList} />
                            <UpcomingMovieList title="Upcoming" upcoming={upcomingMoviesList} />
                       </div>
                      </>

          }
         
        </div>
      )
    }
    
    export default SecondaryContainer