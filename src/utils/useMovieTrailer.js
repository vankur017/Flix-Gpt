import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
import ApiError from '../components/ApiError';
import { useNavigate } from 'react-router-dom';

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

const useMovieTrailer = (movieId) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovieVideos = async () => {
      try {
        const response = await fetchWithTimeout(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS,
          5000
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        const res = json.results;
        const filterData = res.filter(video => video.type === 'Trailer');
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
      } catch (err) {
        console.error('Error fetching movie trailer:', err.message);
        setError(true);
      }
    };

    getMovieVideos();
  }, [dispatch, movieId]);

  if (error) {
    navigate('/apierror')
    return <ApiError />;
  }

  return null; // Return nothing or other components as needed
};

export default useMovieTrailer;
