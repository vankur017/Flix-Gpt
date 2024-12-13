import React, { useEffect, useRef } from 'react';
import { API_OPTIONS, BACKGROUND_IMG } from '../utils/constants';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import SearchErrorPage from "./Error"
import { useNavigate } from 'react-router-dom';
import { addTmdbMovies } from '../utils/gptSlice';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearchBar = () => {

  const dispatch = useDispatch()
  const searchText = useRef(null)
  const navigate = useNavigate()
  const langKey = useSelector(store => store.config.lang)
 // console.log(langKey);

  const searchMovieTMDB = async(movie)=>{
   
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+
        movie+'&include_adult=false&language=en-US&page=1',
        API_OPTIONS)

        const json = await data.json()

        return json.results
      
  }
  
  const handleGPTSearchClick = async()=>{
  //    console.log(searchText.current.value);

      const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " +searchText.current.value + "only give me names of five movies, comma seperated like the example result given ahead :- Sholay, Don, Gadar, Golmaal, Koi Mil Gaya  "

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery}],
        model: 'gpt-3.5-turbo',
      });
      
      if(!gptResults.choices){
         navigate("*")
      }

    //  console.log(gptResults.choices[0]?.message?.content);

      const gptMovies = gptResults.choices[0]?.message?.content.split(",")
      //console.log(gptMovies);
      
      const promiseMovieArray = gptMovies.map((movie)=> searchMovieTMDB(movie)) 
      
      const tmdbResults = await Promise.all(promiseMovieArray)
      console.log(tmdbResults);
    dispatch(addTmdbMovies({movieNames: gptMovies , movieResults : tmdbResults}))
      
  }

  return (
    <div className="min-h-screen relative opacity-95">
    <div className="relative">
      {/* Background Image */}
      <img
        src={BACKGROUND_IMG}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
  
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Search Form */}
        <form
          className="bg-black opacity-80  mt-52  rounded-2xl w-full max-w-[500px] sm:w-2/3 md:w-1/2 lg:w-1/3 grid grid-cols-6 p-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-2 m-2 rounded-lg col-span-5 border border-gray-300 focus:outline-none focus:ring focus:ring-red-500"
            placeholder={lang[langKey].gptSearchPlaceHolder}
          />
          <button
            className="py-2 px-4 bg-red-700 text-white rounded-md col-span-1 hover:bg-red-800 transition duration-300"
            onClick={handleGPTSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
  
        {/* Suggestions Section */}
        <div
          className="w-full  mt-52 mr-[260px] ml-[260px] opacity-75 bg-black text-white rounded-lg p-4 shadow-lg"
        >
          <GptMovieSuggestions />
        </div>
      </div>
    </div>
  </div>
  

  );
  
}
export default GptSearchBar