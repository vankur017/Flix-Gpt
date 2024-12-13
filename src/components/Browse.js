import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearchPage from './GptSearchPage'
import { useSelector } from 'react-redux'
import GptMovieSuggestions from './GptMovieSuggestions'

const Browse = () => {

  const showGptSearch = useSelector(store=> store.gpt.showGptSearch)

  useNowPlayingMovies()



  return (

    <div className='bg-black overflow-x-hidden overflow-y-hidden'>
      <Header/>
      {showGptSearch ?
      <>    
          
          <GptSearchPage/> 
       
      </>
     :
      
        <>
            <MainContainer/>
            <SecondaryContainer/>
        </>
        
      }
  
    
    </div>
   
  )
}

export default Browse