import React from 'react'
import UpcomingMovieCard from './UpcomingMovieCard'
const UpcomingMovieList = ({title, upcoming}) => {
  
    return (
        <div className="px-6">
        <h1 className="text-white font-bold text-3xl italic">
          {title}
        </h1>
        <div className="py-5 flex overflow-x-scroll   hide-scrollbar">
          <div className="flex ">
            {upcoming?.map((movie) => (
              <UpcomingMovieCard key={movie?.id} movieTitle = {movie.title} posterPath={movie.poster_path}/>
            ))}
          </div>
        </div>
      </div>
  )
}

export default UpcomingMovieList