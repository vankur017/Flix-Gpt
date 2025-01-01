
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from './constants'
import { addUpcomingMovies } from './movieSlice'
import React, { useEffect, useState } from 'react'
import ApiError from '../components/ApiError'



const fetchWithTimeout = (url, options, timeout = 5000) => {
  const controller = new AbortController();
  const signal = controller.signal;

  return Promise.race([
    fetch(url, { ...options, signal }),
    new Promise((_, reject) =>
      setTimeout(() => {
        controller.abort();
        reject(new Error('Request timed out'));
      }, timeout)
    ),
  ]);
};

const useUpcomingMovie = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(false);

  useEffect(() => {
    const upcomingMovieList = async () => {
      try {
        const response = await fetchWithTimeout('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS, 5000)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        dispatch(addUpcomingMovies(json.results));
      } catch (err) {
        console.error('Error fetching upcoming movies:', err.message);
        setError(true);
      }
    };

    upcomingMovieList();
  }, [dispatch]);
}

export default useUpcomingMovie