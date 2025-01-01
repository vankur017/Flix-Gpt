import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import ApiError from "../components/ApiError";
import { useNavigate } from "react-router-dom";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

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

  const getNowPlayingMovies = async () => {
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
      dispatch(addNowPlayingMovies(json.results));
    } catch (err) {
      console.error('Error fetching now playing movies:', err.message);
      setError(true);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  if (error) {
    navigate('/apierror')
    return <ApiError />;
  }

  return null; // Return nothing or other components as needed
};

export default useNowPlayingMovies