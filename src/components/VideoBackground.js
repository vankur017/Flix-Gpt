import React from 'react'
import useMovieTrailer from '../utils/useMovieTrailer'
import { useSelector } from 'react-redux'

const VideoBackground = ({id}) => {
    
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo)    
    
    //fetch trailer Video && updating the store with trailer video data
    useMovieTrailer(id)
  
    return (
      <div className="w-full aspect-video">
        {trailerVideo ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        ) : (
          <p>Loading trailer...</p>
        )}
      </div>
    );
  }    

export default VideoBackground