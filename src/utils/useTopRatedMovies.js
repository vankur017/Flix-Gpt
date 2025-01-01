
import { API_OPTIONS } from "./constants"
import { addTopRatedMovieList } from "./movieSlice"
import { useDispatch } from "react-redux"
import ApiError from '../components/ApiError'
import { useEffect, useState } from "react"




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

  const useTopRatedMovies = () => {
      const dispatch = useDispatch();
      const [error, setError] = useState(false);

      useEffect(() => {
          const topRatedMoviesList = async () => {
              try {
                  const response = await fetchWithTimeout(
                      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
                      API_OPTIONS,
                      5000
                  );
                  if (!response.ok) {
                      throw new Error(`HTTP error! Status: ${response.status}`);
                  }
                  const json = await response.json();
                  dispatch(addTopRatedMovieList(json.results));
              } catch (err) {
                  console.error('Error fetching top rated movies:', err.message);
                  setError(true);
              }
          };

          topRatedMoviesList();
      }, [dispatch]);

      return error ? <ApiError /> : null;
  }


 

  export default useTopRatedMovies;
 