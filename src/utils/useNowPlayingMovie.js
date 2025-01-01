import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from './constants';
import { addNowPlayingList } from './movieSlice';
import ApiError from '../components/ApiError';
import { useNavigate } from 'react-router-dom';

const fetchWithTimeout = (url, options, timeout = 5000) => {
  const controller = new AbortController();
  const signal = controller.signal;


  const fetchPromise = fetch(url, { ...options, signal });

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => {
      console.log('Aborting fetch due to timeout');
      controller.abort();
      reject(new Error('Request timed out'));
    }, timeout)
  );

  return Promise.race([fetchPromise, timeoutPromise]);
};

const useNowPlayingMovie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  useEffect(() => {
    const nowPlayingData = async () => {
      try {
        const response = await fetchWithTimeout(
          'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
          API_OPTIONS,
          5000
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        dispatch(addNowPlayingList(json.results));
      } catch (err) {
        console.error('Error fetching now playing movies:', err.message);
        setError(true);
      }
    };

    nowPlayingData();
  }, [dispatch]);

  if (error) {
    navigate('/apierror')
    return <ApiError />;
  }

  return null; // Return nothing or other components as needed
};

export default useNowPlayingMovie;
