import React from 'react'
import useMovieTrailer from '../utils/useMovieTrailer'
import { useSelector } from 'react-redux'

const VideoBackground = ({id}) => {
    
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo)    
    
    //fetch trailer Video && updating the store with trailer video data
    useMovieTrailer(id)
  
    return (
      <div className="w-full h-0 relative" style={{ paddingBottom: '56.25%' }}>
  {trailerVideo ? (
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={`https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
  ) : (
    <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-sm md:text-base lg:text-lg">
      Loading trailer...
    </p>
  )}
</div>

    );
  }    

export default VideoBackground