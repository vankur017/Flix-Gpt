import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
const MainContainer = () => {

    const movies = useSelector(store=>store.movies?.nowPlayingMovies)

    if(movies==null) return
    const i =Math.floor(Math.random() * 20) + 1
    const mainMovie = movies[i]
   

    const {original_title, overview, id } = mainMovie

  return (
    <div className='bg-black'>
        <VideoTitle title={original_title} overview={overview} id={id}/>
        <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer