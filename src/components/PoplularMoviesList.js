import React from 'react'
import PopularMovieCard from './PopularMovieCard'

const PopularMoviesList = ({ title, popularmovies }) => {
  return (
    <div className="px-6 py-10">
      <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic">
        {title}
      </h1>
      <div className="py-5 flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {popularmovies?.map((popmov) => (
            <PopularMovieCard key={popmov?.id} movieTitle={popmov.title} posterPath={popmov.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularMoviesList