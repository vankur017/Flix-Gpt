import React from 'react'
import { IMAGE_URL } from '../utils/constants';
const PopularMovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img className='rounded-md transform transition-transform duration-300 hover:scale-110'src={IMAGE_URL + posterPath}/>
    </div>
  )
}

export default PopularMovieCard