import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import useNowPlayingMovie from "../utils/useNowPlayingMovie";

const MovieList = ({ title, movies }) => {

  // const {error} = useNowPlayingMovie()
  // if(error){
  //   return <h1 className="text-white p-5 m-5 text-2xl">Api Error</h1>
  // }
  return (
    <div className="px-6">
      <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic">
        {title}
      </h1>
      <div className="py-5 flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
                
            <Link to={`/moviedetails/${movie?.id}`} key={movie?.id} >
              <MovieCard key={movie?.id} id={movie?.id} movieTitle={movie.title} posterPath={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;