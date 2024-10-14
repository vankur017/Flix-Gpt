import React from 'react'
import TopRatedMovieCard from './TopRatedMovieCard'
const TopRatedMovieList = ({title, toprated}) => {

  
    
    
  
    return (
        <div className="px-6">
        <h1 className="text-white font-bold text-3xl italic">
          {title}
        </h1>
        <div className="py-5 flex overflow-x-scroll   hide-scrollbar">
          <div className="flex ">
            {toprated?.map((movie) => (
              <TopRatedMovieCard key={movie?.id} movieTitle = {movie.title} posterPath={movie.poster_path}/>
            ))}
          </div>
        </div>
      </div>
  )
}

export default TopRatedMovieList