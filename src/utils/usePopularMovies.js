import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from './constants'
import { addPopularMovieList } from './movieSlice'
import ApiError from '../components/ApiError'

const fetchWithTimeout = (url, options, timeout = 5000) => {
  const controller = new AbortController();
 
  const signal = controller.signal;

  return Promise.race([
    fetch(url, { ...options, signal }),
    new Promise((_, reject) =>
      setTimeout(() => {
        controller.abort(); // Abort the fetch request
        reject(new Error('Request timed out'));
      }, timeout)
    ),
  ]);
  };

const usePopularMovies = () => {

    const dispatch = useDispatch()
    const [error, setError] = useState(false);

    

      useEffect(() => {
        const popularMovieData = async () => {
          try {
            const response = await fetchWithTimeout('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS, 5000)
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json();
            dispatch(addPopularMovieList(json.results));
          } catch (err) {
            console.error('Error fetching now playing movies:', err.message, <ApiError />);
            setError(true);
          }
        };
    
        popularMovieData();
      }, [dispatch]);
    
      
    }


  
export default usePopularMovies