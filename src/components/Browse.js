import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearchPage from './GptSearchPage'
import { useSelector } from 'react-redux'
const Browse = () => {

  const showGptSearch = useSelector(store=> store.gpt.showGptSearch)

  useNowPlayingMovies()


  return (

    <div className='bg-black'>
      <Header/>
      {showGptSearch ?
        <GptSearchPage/>  :
      
        <>
            <MainContainer/>
            <SecondaryContainer/>
        </>
        
      }
  
    
    </div>
   
  )
}

export default Browse