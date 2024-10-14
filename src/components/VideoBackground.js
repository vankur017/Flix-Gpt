import React from 'react'
import useMovieTrailer from '../utils/useMovieTrailer'
import { useSelector } from 'react-redux'

const VideoBackground = ({id}) => {
    
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo)    
    
    //fetch trailer Video && updating the store with trailer video data
    useMovieTrailer(id)
  
   
  
    return (
        <div className='w-full'>
       
        {trailerVideo ? (  // Check if trailerVideo exists
          <iframe
            className='w-screen aspect-video h-full object-fill'
            src={`https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1`} // Using trailerVideo key to embed
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            
          ></iframe>
        ) : (
          <p>Loading trailer...</p>  // Provide a fallback when trailerVideo is null
        )}
      </div>
  )
}

export default VideoBackground