import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from './constants'
import { addNowPlayingList } from './movieSlice'
const useNowPlayingMovie = () => {

  const dispatch = useDispatch()

  const nowPlayingData = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    //console.log(json?.results);
    
    dispatch(addNowPlayingList(json.results))
    
 }


 useEffect(()=>{
  nowPlayingData()
 },[]) 


}

export default useNowPlayingMovie