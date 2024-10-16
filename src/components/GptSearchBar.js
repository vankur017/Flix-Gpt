import React from 'react';
import { BACKGROUND_IMG } from '../utils/constants';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';


const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)
  console.log(langKey);
  

  return (
    <div className="flex justify-center items-center min-h-screen relative opacity-95">
    
    <div className="absolute inset-0 -z-10">
        <img src={BACKGROUND_IMG} alt="Not rendered" className="w-full h-full object-cover" />
    </div>

   
    <form className="bg-black rounded-2xl -mt-[900px] w-1/3 grid grid-cols-6 p-3">
        <input type="text" className="p-2 m-2 rounded-lg col-span-5" placeholder={lang[langKey].gptSearchPlaceHolder} />
        <button className="py-1 px-2 bg-red-700 text-white rounded-md col-span-1">{lang[langKey].search}</button>
    </form>
</div>



  )
}

export default GptSearchBar