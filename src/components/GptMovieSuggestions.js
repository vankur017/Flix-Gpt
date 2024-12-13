import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieList from './MovieList'



const GptMovieSuggestions = () => {

    const {movieNames, movieResults} = useSelector((store)=>store?.gpt)
    const {gptsearch} = useSelector((store)=>store?.gpt?.showGptSearch)
    const dispatch = useDispatch()
    if(!movieNames ){
        return null
    }
    // console.log(movieNames);

    // if(!gptsearch){
    //     dispatch(clearAllData())
    // }
    
    return (

    <div className='p-4 m-4 pt-32 bg-black text-white'>
        <div>
            {
                movieNames.map((movieName, index)=> 
                <MovieList 
                key={movieName} 
                title={movieName} 
                movies={movieResults[index]}
                
                />)
            }

          
        </div>

    </div>
  )
}

export default GptMovieSuggestions